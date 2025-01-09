// Gerenciamento Centralizado de Logs
const createLogger = (enabled) => (enabled ? console.log : () => {});

// Função para verificar e aplicar as condições
async function shouldShowOffer(config) {
    try {
        const apiKey = "public-a0g921-gh665w-d55968";
        const baseUrl = "https://proxycheck.io/v2/";
        const url = `${baseUrl}?key=${apiKey}&vpn=1&asn=1&risk=1&country=1&ip=1`;

        const log = createLogger(config.slog);

        // Detecta se é dispositivo touch
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        log("Device supports touch (isTouch):", isTouch);

        // Atualiza config com parâmetros da URL
        const urlParams = new URLSearchParams(window.location.search);
        if (config.apt) {
            for (const [key, value] of urlParams.entries()) {
                if (config.hasOwnProperty(key)) {
                    config[key] = Array.isArray(config[key])
                        ? value.split(",")
                        : value === "true"
                        ? true
                        : value === "false"
                        ? false
                        : value;
                }
            }
        }

        log("Updated config:", config);

        // Fetch com timeout
        const response = await fetchWithTimeout(url, 5000);
        if (!response.ok) throw new Error(`Request failed with status: ${response.statusText}`);

        const data = await response.json();

        // Localiza a chave do clientIp dinamicamente
        let clientIp = data.ip && data[data.ip]
            ? data.ip
            : Object.keys(data).find(
                  key => key !== "status" && key !== "ip" && typeof data[key] === "object" && data[key].asn
              );

        if (!clientIp) throw new Error("No valid IP found in the response.");

        const ipData = data[clientIp];
        log("Client IP:", clientIp, "IP Data:", ipData);

        // Lista de regras que falharam
        const failedRules = [];

        // Regras de Verificação
        const checks = {
            "Allowed country": config.ac.includes(ipData.isocode),
            "Blocked ASN": !config.basn.includes(ipData.asn),
            "Allowed IP type": config.aip.includes(ipData.type),
            "Hostname, provider, or organisation contains blocked word": ![ipData.hostname, ipData.provider, ipData.organisation].some(
                field => field && config.bwor.some(word => field.toLowerCase().includes(word))
            ),
            "Allowed device type": config.adev.includes(new UAParser().getResult().device.type || "desktop"),
            "User-Agent contains blocked word": !config.bwor.some(word => navigator.userAgent.toLowerCase().includes(word)),
            "Is proxy or VPN": !(ipData.proxy === "yes" || ipData.vpn === "yes"),
            "FBCLID present": !config.chkfb || urlParams.has("fbclid"),
            "Custom key present": !config.chkky || (config.chkky && urlParams.has(config.kynm)),
            "Touch screen condition (aot)": !config.aot || (config.aot && isTouch),
        };

        for (const [rule, passed] of Object.entries(checks)) {
            log(rule, ":", passed);
            if (!passed) failedRules.push(rule);
        }

        const result = failedRules.length === 0;

        if (!result) log("Rules preventing offer display:", failedRules);

        return result;
    } catch (error) {
        console.error("Error verifying proxy. Displaying offer page.", error);
        return true; // Fallback para exibir a oferta
    }
}

// Função para carregar o arquivo JSON de configurações
async function loadConfig() {
    try {
        const response = await fetch("config.json?v=1.0.0");
        if (!response.ok) throw new Error(`Failed to load config file: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error("Error loading JSON config:", error);
        return null;
    }
}

// Função para carregar conteúdo dinâmico com scripts
function loadContentWithScripts(url, targetId) {
    fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.text();
        })
        .then((html) => {
            const targetElement = document.getElementById(targetId);
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;

            targetElement.innerHTML = tempDiv.innerHTML;

            const scripts = tempDiv.querySelectorAll("script");
            scripts.forEach((script) => {
                const newScript = document.createElement("script");
                if (script.src) {
                    newScript.src = script.src;
                    newScript.async = script.async;
                } else {
                    newScript.textContent = script.textContent;
                }
                document.head.appendChild(newScript);
            });
        })
        .catch((error) => console.error("Error loading page:", error));
}

// Função para gerenciar o contador e redirecionar com Firebase
async function redirectBasedOnCounter() {
    try {
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "sacred-heal-ab.firebaseapp.com",
            projectId: "sacred-heal-ab",
            storageBucket: "sacred-heal-ab.firebasestorage.app",
            messagingSenderId: "596457011703",
            appId: "1:596457011703:web:c87cae5553a5d9bda416f2",
            measurementId: "G-ST0NDLK3D6",
        };

        const app = firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();

        const docRef = db.collection("globalCounter").doc("pageAccess");
        const docSnap = await docRef.get();
        let counter = docSnap.exists ? docSnap.data().counter : 0;

        const pages = ["offer.html", "offer2.html", "offer3.html"];
        const pageIndex = counter % pages.length;

        await docRef.set({ counter: counter + 1 });

        return pages[pageIndex];
    } catch (error) {
        console.error("Error managing counter or redirecting:", error);
        return "offer.html";
    }
}

// Fluxo principal com integração Firebase
(async function main() {
    const config = await loadConfig();
    try {
        if (config) {
            const finalPage = await redirectBasedOnCounter();
            loadContentWithScripts(finalPage, "offer");
        } else {
            throw new Error("Config not loaded.");
        }
    } catch (error) {
        console.error("Error during main logic:", error);
        loadContentWithScripts("offer.html", "offer");
    }
})();
