// Função para verificar e aplicar as condições
async function shouldShowOffer(config) {
    try {
        const apiKey = "public-a0g921-gh665w-d55968";
        const baseUrl = "https://proxycheck.io/v2/";
        const url = `${baseUrl}?key=${apiKey}&vpn=1&asn=1&risk=1&country=1&ip=1`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const data = await response.json();
        const clientIp = Object.keys(data)[2];
        const ipData = data[clientIp];

        console.log('ipData');
        console.log(ipData);
        console.log('config.allowedCountries');
        console.log(config.allowedCountries);

        // Verifica país permitido
        const isAllowedCountry = config.allowedCountries.includes(ipData.isocode);
        console.log("isAllowedCountry:", isAllowedCountry);

        // Verifica ASN bloqueado
        const isBlockedASN = config.blockedASNs.includes(ipData.asn);
        console.log("isBlockedASN:", isBlockedASN);

        // Verifica o tipo de IP permitido
        const isAllowedIpType = config.allowedIpType.includes(ipData.type);
        console.log("isAllowedIpType:", isAllowedIpType);

        // Verifica palavras bloqueadas em hostname, provider ou organisation
        const fieldsToCheck = [ipData.hostname, ipData.provider, ipData.organisation];
        const containsBlockedWord = fieldsToCheck.some(field =>
            field && config.blockedWords.some(word => field.toLowerCase().includes(word))
        );
        console.log("containsBlockedWord:", containsBlockedWord);

        // Detecta o tipo de dispositivo usando UAParser.js
        const parser = new UAParser();
        const uaResult = parser.getResult();
        console.log(uaResult);
        const deviceType = uaResult.device.type || "desktop";
        const isAllowedDevice = config.allowedDevices.includes(deviceType);
        console.log("isAllowedDevice:", isAllowedDevice);

        // Verifica User-Agent para palavras bloqueadas
        const userAgentBlocked = config.blockedWords.some(word =>
            navigator.userAgent.toLowerCase().includes(word)
        );
        console.log("userAgentBlocked:", userAgentBlocked);

        // Verifica se é proxy ou VPN
        const isVpnOrProxy = ipData.proxy === "yes" || ipData.vpn === "yes";
        console.log("isVpnOrProxy:", isVpnOrProxy);

        // Resultado final
        const result = (
            isAllowedCountry &&
            !isBlockedASN &&
            isAllowedIpType &&
            isAllowedDevice &&
            !containsBlockedWord &&
            !userAgentBlocked &&
            !isVpnOrProxy
        );
        console.log("Final Offer Condition (result):", result);

        return result;
    } catch (error) {
        console.error("Erro ao verificar proxy:", error);
        return false;
    }
}






// Função para carregar o arquivo JSON de configurações
async function loadConfig() {
    try {
        const response = await fetch('config.json');
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo de configuração: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao carregar o arquivo JSON:", error);
        return null;
    }
}

// Função para carregar conteúdo dinâmico
function loadContentWithScripts(url, targetId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const targetElement = document.getElementById(targetId);

            // Criar um elemento DOM temporário para processar scripts
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // Mover o conteúdo principal para o destino
            targetElement.innerHTML = tempDiv.innerHTML;

            // Executar os scripts
            const scripts = tempDiv.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    // Copiar o atributo `src` para carregar scripts externos
                    newScript.src = script.src;
                    newScript.async = script.async;
                } else {
                    // Copiar e executar o código inline
                    newScript.textContent = script.textContent;
                }
                document.head.appendChild(newScript);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar a página:', error);
        });
}

// Fluxo principal
(async function main() {
    const config = await loadConfig();
    if (config) {
        const showOffer = await shouldShowOffer(config);
        if (showOffer) {
            loadContentWithScripts('offer.html', 'offer');
        } else {
            loadContentWithScripts('no-offer.html', 'offer');
        }
    } else {
        console.error("Configuração não carregada. Abortando...");
    }
})();
