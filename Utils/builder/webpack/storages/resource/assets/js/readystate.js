!function(){"use strict";var e,n={},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(n,t){return r.f[t](e,n),n}),[]))},r.u=function(e){return 474===e?"js/474.runtime.bundle.js":794===e?"js/794.runtime.bundle.js":void 0},r.miniCssF=function(e){},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e={},r.l=function(n,t,o,i){if(e[n])e[n].push(t);else{var u,a;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var l=s[c];if(l.getAttribute("src")==n){u=l;break}}u||(a=!0,(u=document.createElement("script")).type="module",u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=n),e[n]=[t];var f=function(t,r){u.onerror=u.onload=null,clearTimeout(d);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),a&&document.head.appendChild(u)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"}(),function(){var e={225:0};r.f.j=function(n,t){var o=r.o(e,n)?e[n]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));t.push(o[2]=i);var u=r.p+r.u(n),a=new Error;r.l(u,(function(t){if(r.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}}),"chunk-"+n,n)}};var n=function(n,t){var o,i,u=t[0],a=t[1],s=t[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)s(r)}for(n&&n(t);c<u.length;c++)i=u[c],r.o(e,i)&&e[i]&&e[i][0](),e[u[c]]=0},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),r.e(474).then(r.bind(r,474)).then((function(e){var n=e.app.content.folder.js;window.Worker&&r.e(794).then(r.bind(r,794)).then((function(e){var t=new e.WorkerResponse(n);t.registerMe();var r=new Worker(new URL(t.getRegisteredUrl(),"file:///home/alamin/development/web-app/mishusoft-starter/resources/typescripts/readystate.ts"));r.postMessage({question:"The Answer to the Ultimate Question of Life, The Universe, and Everything."}),r.onmessage=function(e){var n=e.data.answer;console.log(n)}})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}();