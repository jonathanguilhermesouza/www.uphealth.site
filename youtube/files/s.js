try{(function(w,d){zaraz.debug=(cq="")=>{document.cookie=`zarazDebug=${cq}; path=/`;location.reload()};window.zaraz._al=function(bz,bA,bB){w.zaraz.listeners.push({item:bz,type:bA,callback:bB});bz.addEventListener(bA,bB)};zaraz.preview=(bC="")=>{document.cookie=`zarazPreview=${bC}; path=/`;location.reload()};zaraz.i=function(cf){const cg=d.createElement("div");cg.innerHTML=unescape(cf);const ch=cg.querySelectorAll("script"),ci=d.querySelector("script[nonce]"),cj=ci?.nonce||ci?.getAttribute("nonce");for(let ck=0;ck<ch.length;ck++){const cl=d.createElement("script");cj&&(cl.nonce=cj);ch[ck].innerHTML&&(cl.innerHTML=ch[ck].innerHTML);for(const cm of ch[ck].attributes)cl.setAttribute(cm.name,cm.value);d.head.appendChild(cl);ch[ck].remove()}d.body.appendChild(cg)};zaraz.f=async function(cn,co){const cp={credentials:"include",keepalive:!0,mode:"no-cors"};if(co){cp.method="POST";cp.body=new URLSearchParams(co);cp.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(cn,cp)};window.zaraz._p=async mY=>new Promise((mZ=>{if(mY){mY.e&&mY.e.forEach((m$=>{try{const na=d.querySelector("script[nonce]"),nb=na?.nonce||na?.getAttribute("nonce"),nc=d.createElement("script");nb&&(nc.nonce=nb);nc.innerHTML=m$;nc.onload=()=>{d.head.removeChild(nc)};d.head.appendChild(nc)}catch(nd){console.error(`Error executing script: ${m$}\n`,nd)}}));Promise.allSettled((mY.f||[]).map((ne=>fetch(ne[0],ne[1]))))}mZ()}));zaraz.pageVariables={};zaraz.__zcl=zaraz.__zcl||{};zaraz.track=async function(bG,bH,bI){return new Promise(((bJ,bK)=>{const bL={name:bG,data:{}};if(bH?.__zarazClientEvent)Object.keys(localStorage).filter((bN=>bN.startsWith("_zaraz_google_consent_"))).forEach((bM=>bL.data[bM]=localStorage.getItem(bM)));else{for(const bO of[localStorage,sessionStorage])Object.keys(bO||{}).filter((bQ=>bQ.startsWith("_zaraz_"))).forEach((bP=>{try{bL.data[bP.slice(7)]=JSON.parse(bO.getItem(bP))}catch{bL.data[bP.slice(7)]=bO.getItem(bP)}}));Object.keys(zaraz.pageVariables).forEach((bR=>bL.data[bR]=JSON.parse(zaraz.pageVariables[bR])))}Object.keys(zaraz.__zcl).forEach((bS=>bL.data[`__zcl_${bS}`]=zaraz.__zcl[bS]));bL.data.__zarazMCListeners=zaraz.__zarazMCListeners;
//
bL.data={...bL.data,...bH};bL.zarazData=zarazData;fetch("/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(bL)}).catch((()=>{
//
return fetch("/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(bL)})})).then((function(bU){zarazData._let=(new Date).getTime();bU.ok||bK();return 204!==bU.status&&bU.json()})).then((async bT=>{await zaraz._p(bT);"function"==typeof bI&&bI()})).finally((()=>bJ()))}))};zaraz.set=function(bV,bW,bX){try{bW=JSON.stringify(bW)}catch(bY){return}prefixedKey="_zaraz_"+bV;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[bV];if(void 0!==bW){bX&&"session"==bX.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,bW):bX&&"page"==bX.scope?zaraz.pageVariables[bV]=bW:localStorage&&localStorage.setItem(prefixedKey,bW);zaraz.__watchVar={key:bV,value:bW}}};for(const{m:bZ,a:b$}of zarazData.q.filter((({m:ca})=>["debug","set"].includes(ca))))zaraz[bZ](...b$);for(const{m:cb,a:cc}of zaraz.q)zaraz[cb](...cc);delete zaraz.q;delete zarazData.q;zaraz.spaPageview=()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.__zarazMCListeners={};zaraz.track("__zarazSPA")};zaraz.fulfilTrigger=function(nA,nB,nC,nD){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[nA]||(zaraz.__zarazTriggerMap[nA]="");zaraz.__zarazTriggerMap[nA]+="*"+nB+"*";zaraz.track("__zarazEmpty",{...nC,__zarazClientTriggers:zaraz.__zarazTriggerMap[nA]},nD)};zaraz._processDataLayer=cs=>{for(const ct of Object.entries(cs))zaraz.set(ct[0],ct[1],{scope:"page"});if(cs.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(cs.event))return;let cu={};for(let cv of dataLayer.slice(0,dataLayer.indexOf(cs)+1))cu={...cu,...cv};delete cu.event;cs.event.startsWith("gtm.")||zaraz.track(cs.event,cu)}};window.dataLayer=w.dataLayer||[];const cr=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...cw){let cx=cr.apply(this,cw);zaraz._processDataLayer(cw[0]);return cx}});dataLayer.forEach((cy=>zaraz._processDataLayer(cy)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((cz=>clearTimeout(cz)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((cA=>cA.item.removeEventListener(cA.type,cA.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout(zaraz.spaPageview,100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout(zaraz.spaPageview,100)}};zaraz._c=pp=>{const{event:pq,...pr}=pp;zaraz.track(pq,{...pr,__zarazClientEvent:!0})};zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"];zaraz.__zcl.track=!0;d.addEventListener("visibilitychange",(nU=>{zaraz._c({event:"visibilityChange",visibilityChange:[{state:d.visibilityState,timestamp:(new Date).getTime()}]},1)}));zaraz.__zcl.visibilityChange=!0;zaraz.__zarazMCListeners={"google-analytics_v4_RaRW":["visibilityChange"]};zaraz._p({"e":["(function(w,d){;w.zarazData.executed.push(\"Pageview\");})(window,document)","(function(w,d){{const d = document.createElement('div');d.innerHTML = ``;document.body.appendChild(d);};{\n  window.pixelId = \"670ee802be793afb1e4296fd\";\n  var a = document.createElement(\"script\");\n  a.setAttribute(\"async\", \"\");\n  a.setAttribute(\"defer\", \"\");\n  a.setAttribute(\"src\", \"https://cdn.utmify.com.br/scripts/pixel/pixel.js\");\n  document.head.appendChild(a);\n};{const d = document.createElement('div');d.innerHTML = `<!-- Google Tag Manager -->\n\n<!-- End Google Tag Manager -->\n<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-NXS5GN5L\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->`;document.body.appendChild(d);};{(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-NXS5GN5L');};{const d = document.createElement('div');d.innerHTML = `<!-- Google tag (gtag.js) -->`;document.body.appendChild(d);};{const el = document.createElement('script');Object.entries(JSON.parse(decodeURIComponent(`%7B%22async%22%3A%22%22%2C%22src%22%3A%22https%3A%2F%2Fwww.googletagmanager.com%2Fgtag%2Fjs%3Fid%3DAW-11425517173%22%2C%22onload%22%3A%22%7Bdocument.dispatchEvent(new%20Event(%5C%22loaded-98c9670e-9bd4-4154-a3d3-1a8e0f8a99f0%5C%22))%7D%22%2C%22order-id%22%3A%2298c9670e-9bd4-4154-a3d3-1a8e0f8a99f0%22%7D`))).forEach(([k, v]) => {el.setAttribute(k, v);});document.head.appendChild(el);};{{const loaded = {\"98c9670e-9bd4-4154-a3d3-1a8e0f8a99f0\":false};\n          let called = false;\n\n          const call_if_ready = () => {\n               if( !called && Object.values(loaded).every(e => e) ) {\n                   {\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-11425517173');\n};\n                   called = true\n               }\n          };\n\n          document.addEventListener(\n                      \"loaded-98c9670e-9bd4-4154-a3d3-1a8e0f8a99f0\",\n                      ()=>{ loaded[\"98c9670e-9bd4-4154-a3d3-1a8e0f8a99f0\"] = true;\n                      call_if_ready()\n                   })}}})(window,document)"]})})(window,document)}catch(e){throw fetch("/cdn-cgi/zaraz/t"),e;}