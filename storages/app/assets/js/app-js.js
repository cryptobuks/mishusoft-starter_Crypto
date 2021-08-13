/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/sweetalert/dist/sweetalert.min.js":
/*!*********************************************************!*\
  !*** ../node_modules/sweetalert/dist/sweetalert.min.js ***!
  \*********************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});

/***/ }),

/***/ "./Assets/typescripts/common/common.ts":
/*!*********************************************!*\
  !*** ./Assets/typescripts/common/common.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "protectNumberOnlyTextBox": () => (/* binding */ protectNumberOnlyTextBox),
/* harmony export */   "previewImage": () => (/* binding */ previewImage),
/* harmony export */   "checkInputDataAbility": () => (/* binding */ checkInputDataAbility)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./Assets/typescripts/common/dom.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./Assets/typescripts/common/request.ts");


function protectNumberOnlyTextBox() {
    ['keyup', 'paste'].forEach(function (event) {
        document.querySelectorAll('.number-only')[0].addEventListener(event, function (e) {
            if (event === 'keyup') {
                if (isNaN(Number(this.value + ""))) {
                    return false;
                }
            }
            else {
                e.preventDefault();
            }
        });
    });
}
/**
 * @param fileId string
 * @param previewerId string
 * */
function previewImage(fileId, previewerId) {
    let image = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#' + fileId);
    if (image.files && image.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#' + previewerId).setAttribute('src', e?.target?.result);
        };
        reader.readAsDataURL(image.files[0]);
    }
}
/**
 * @param url string
 * @param dataObject object
 * @param callback any
 * */
function checkInputDataAbility(url, dataObject, callback) {
    return (0,_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
        method: "POST", url: url, async: true,
        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
        data: dataObject,
    }, function (response) {
        callback(response);
    });
}


/***/ }),

/***/ "./Assets/typescripts/common/dom.ts":
/*!******************************************!*\
  !*** ./Assets/typescripts/common/dom.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "captureElement": () => (/* binding */ captureElement),
/* harmony export */   "captureElements": () => (/* binding */ captureElements)
/* harmony export */ });
/**
 * @param details
 * */
function createElement(details) {
    let element, i, j, k;
    for (i in details) {
        let data = details[i];
        for (j in data) {
            let elementName = j;
            let elementData = data[j];
            element = document.createElement(elementName);
            for (k in elementData) {
                let element_attribute = k;
                let element_attribute_value = elementData[k];
                element.setAttribute(element_attribute, element_attribute_value);
            }
        }
    }
    return element;
}
/**
 * @param selectors HTML valid element selector
 * */
function captureElement(selectors) {
    if (document.querySelector(selectors) !== null) {
        return document.querySelector(selectors);
    }
}
/**
 * @param selectors
 * */
function captureElements(selectors) {
    if (document.querySelectorAll(selectors) !== null) {
        return document.querySelectorAll(selectors);
    }
}


/***/ }),

/***/ "./Assets/typescripts/common/message.ts":
/*!**********************************************!*\
  !*** ./Assets/typescripts/common/message.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMessage": () => (/* binding */ showMessage),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage),
/* harmony export */   "viewMessage": () => (/* binding */ viewMessage)
/* harmony export */ });
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert */ "../node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./Assets/typescripts/common/dom.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ "./Assets/typescripts/common/validation.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request */ "./Assets/typescripts/common/request.ts");




/**
 * @param response any
 * @param element HTML element
 * @param callback any
 **/
function showMessage(response, element, callback) {
    if ((0,_validation__WEBPACK_IMPORTED_MODULE_2__.IsJsonString)(response)) {
        let data = JSON.parse(response), html = "", errClass = '', symbol = '';
        if (data.type !== undefined) {
            if (data.type === "error") {
                errClass += 'danger';
                symbol += "<i class=\"fa fa-times\"></i>";
            }
            if (data.type === "success") {
                errClass += 'success';
                symbol += "<i class=\"fa fa-check\"></i>";
            }
            html += '<div class="box-message box-' + errClass + ' box-shadow-light">';
            html += '<span class="box-' + errClass + '-symbol">' + symbol + '</span>';
            html += '<p  class="notify-md-content" style="text-align: justify;">' + data.message + '</p>';
            html += '</div>';
            if (element) {
                element.innerHTML = html;
            }
            if (callback) {
                return callback(data);
            }
        }
        else {
            return sweetalert__WEBPACK_IMPORTED_MODULE_0___default()('Your data!', response, 'success');
        }
    }
    else {
        if (response.indexOf('<!doctype html>') !== -1 && response.indexOf('flex-center') !== -1) {
            /*console.log(response)
            console.log(response.length)
            console.log(response.indexOf('<div class="logInBox'))
            console.log(response.indexOf('</div> </section>'))
            console.log(response.length - response.indexOf('</div> </section>'))
            console.log(response.length - (response.length - response.indexOf('</div> </section>')))
            console.log(response.substr(response.indexOf('<div class="logInBox'), (response.indexOf('</div> </section>') - response.indexOf('<div class="logInBox'))));
            console.log(response.substr(response.indexOf('<div class="logInBox'), (response.indexOf('</div> </section>') - response.indexOf('<div class="logInBox'))).replace('logInBox box-shadow box-shadow-light','logInBox').replace('<div class="float-right text-right"><input type="submit"','<div class="float-right text-right" style="margin-right: 5px;"><input type="submit"'))*/
            if (document.querySelector('#popup-login') === null) {
                const popup = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                        'div': { 'id': 'popup-login', 'class': 'modal', 'style': 'display:block;' }
                    }]);
                const popupDocument = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                        'div': { 'class': 'row modal-content animate', 'style': 'width:34.5%;' }
                    }]);
                popup.appendChild(popupDocument);
                const popupDocumentBody = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                        'div': { 'class': 'modal-body' }
                    }]);
                popupDocumentBody.innerHTML = response.substr(response.indexOf('<div class="logInBox'), (response.indexOf('</div> </section>') - response.indexOf('<div class="logInBox'))).replace('logInBox box-shadow box-shadow-light', 'logInBox').replace('<div class="float-right text-right"><input type="submit"', '<div class="float-right text-right" style="margin-right: 5px;"><input type="submit"');
                popupDocument.appendChild(popupDocumentBody);
                document.body.appendChild(popup);
            }
        }
        else {
            return sweetalert__WEBPACK_IMPORTED_MODULE_0___default()('Oop! Something went wrong!', response, 'error');
        }
        //console.log(data);
    }
}
/**
 * @param self
 * @param data JSON Object
 * @param __appHostUrl Valid url
 **/
function sendMessage(self, data, __appHostUrl) {
    if (data !== undefined && data !== null && data.constructor === Object && __appHostUrl !== null) {
        return (0,_request__WEBPACK_IMPORTED_MODULE_3__.sendRequest)({
            method: "POST",
            url: __appHostUrl,
            async: true,
            header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            data: data
        }, function (response) {
            if ((0,_validation__WEBPACK_IMPORTED_MODULE_2__.IsJsonString)(response)) {
                document.querySelector('#app-loader')?.setAttribute('style', 'display:none;');
                return self.appRuntimeEventManager(JSON.parse(response));
            }
            else {
                return sweetalert__WEBPACK_IMPORTED_MODULE_0___default()("Oops! Something went wrong!", response, "error");
            }
        });
    }
    else {
        return sweetalert__WEBPACK_IMPORTED_MODULE_0___default()("Oops! We can't send request!", "error");
    }
}
function viewMessage(title, data, icon) {
    return sweetalert__WEBPACK_IMPORTED_MODULE_0___default()(title, data, icon);
}


/***/ }),

/***/ "./Assets/typescripts/common/pagination.ts":
/*!*************************************************!*\
  !*** ./Assets/typescripts/common/pagination.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popUpDialogBoxDriver": () => (/* binding */ popUpDialogBoxDriver),
/* harmony export */   "PopUpDialogBox": () => (/* binding */ PopUpDialogBox),
/* harmony export */   "paginationDriver": () => (/* binding */ paginationDriver)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./Assets/typescripts/common/dom.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./Assets/typescripts/common/request.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ "./Assets/typescripts/common/validation.ts");



/**
 * @param selector string
 * @param titleText string
 * @param processURL string
 * @param messageView string
 * @param callback any
 * */
function popUpDialogBoxDriver(selector, titleText, processURL, messageView, callback) {
    if (document.querySelectorAll(selector).length !== 0) {
        document.querySelectorAll(selector).forEach(function (__deleteButton) {
            __deleteButton.addEventListener('click', function () {
                PopUpDialogBox(titleText, 'Are you want to ' + this.getAttribute('command')?.toLowerCase() + ' this?', this, this.getAttribute('command'), processURL, messageView, function () {
                    popUpDialogBoxDriver(selector, titleText, processURL, messageView, callback);
                }, function (response) {
                    callback(response);
                });
            });
        });
    }
}
/**
 * @param titleText string
 * @param messageText string
 * @param actionBtn HTMLElementObject
 * @param command string
 * @param processURL string
 * @param messageView string
 * @param callback any
 * @param sendResponse any
 * */
function PopUpDialogBox(titleText, messageText, actionBtn, command, processURL, messageView, callback, sendResponse) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#PopUpDialogBox').style.display = 'block';
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#PopUpDialogBoxTitle').innerHTML = titleText;
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)(messageView).innerHTML = '<div style="font-size:15px;">' + messageText + '</div>';
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#message-done-btn').innerHTML = command;
    let dataObject = { security_code: 1 };
    [...actionBtn.attributes].forEach(function (__attribute) {
        if (__attribute.name.toLowerCase().indexOf('data') !== -1) {
            dataObject[__attribute.name.replace('data-', '')] = __attribute.value;
        }
    });
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#message-done-btn').addEventListener('click', function () {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-loader').style.display = 'block';
        if (this.textContent === command) {
            return (0,_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
                method: "POST",
                url: processURL,
                async: true,
                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                data: dataObject,
            }, (response) => {
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#PopUpDialogBox').style.display = 'none';
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-loader').style.display = 'none';
                callback();
                sendResponse(response);
            });
        }
    });
}
/**
 * @param viewMode string
 * @param url string
 * @param extractTo string
 * @param callback any
 * @param fallback any
 * */
function paginationDriver(viewMode, url, extractTo, fallback, callback) {
    if (document.querySelectorAll('.page').length !== 0) {
        document.querySelectorAll('.page').forEach(function (__pager) {
            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                __pager.addEventListener(event, function () {
                    return pagination(viewMode, this.getAttribute('data-page'), url, extractTo, () => {
                        paginationDriver(viewMode, url, extractTo, fallback, callback);
                        callback();
                    }, fallback);
                });
            });
        });
    }
}
/**
 * @param viewMode string
 * @param page string
 * @param url string
 * @param extractTo string
 * @param callback any
 * @param fallback any
 * */
function pagination(viewMode, page, url, extractTo, callback, fallback) {
    return (0,_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
        method: "POST", url: url, async: true,
        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
        data: { security_code: 1, pageNumber: page, viewMode: viewMode },
    }, function (response) {
        if ((0,_validation__WEBPACK_IMPORTED_MODULE_2__.IsJsonString)(response) && JSON.parse(response).type) {
            fallback(response);
        }
        else {
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#' + extractTo).innerHTML = response;
            callback();
        }
    });
}


/***/ }),

/***/ "./Assets/typescripts/common/request.ts":
/*!**********************************************!*\
  !*** ./Assets/typescripts/common/request.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendRequest": () => (/* binding */ sendRequest)
/* harmony export */ });
function sendRequest(options, callback) {
    /*worker.postMessage({
        "command": "sendRequest",
        "options": options,
        "receiver": __appHostedServerRoot
    });

    */
    if (options.method !== null && options.url !== null) {
        /*
        * if (app.runtime.request !== 'pending') {}
        * else { viewMessage('Another request is pending.', 'Your previous request is pending. Please wait until succeeded.', 'error')}
        * */
        try {
            let dataType;
            let request = new XMLHttpRequest();
            request.open(options.method, options.url, options.async);
            if (options.header !== null && typeof options.header == "object") {
                for (let i = 0; i < options.header.length; i++) {
                    request.setRequestHeader(options.header[i].name, options.header[i].value);
                    if (options.header[i].value.indexOf('form') !== -1) {
                        dataType = 'formData';
                    }
                    if (options.header[i].value.indexOf('json') !== -1) {
                        dataType = 'jsonData';
                    }
                }
            }
            if (options.data !== null && typeof options.data == "object") {
                if (dataType === 'jsonData') {
                    request.send(JSON.stringify(options.data));
                }
                if (dataType === 'formData') {
                    let formData = new FormData();
                    Object.keys(options.data).forEach(function (key) {
                        formData.append(key, options.data[key]);
                    });
                    request.send(formData);
                }
            }
            else {
                request.send();
            }
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    if (callback) {
                        callback(this.responseText);
                    }
                    //console.log(this.responseText)
                }
            };
        }
        catch (e) {
            console.error("Fetching error." + e);
        }
    }
    else {
        console.error("Error: METHOD and URL empty.");
    }
    /*window.addEventListener('message',function (event) {
        console.log(event)
    })*/
}


/***/ }),

/***/ "./Assets/typescripts/common/upload.ts":
/*!*********************************************!*\
  !*** ./Assets/typescripts/common/upload.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUploadProgressSystem": () => (/* binding */ setUploadProgressSystem),
/* harmony export */   "uploadFile": () => (/* binding */ uploadFile),
/* harmony export */   "progressHandler": () => (/* binding */ progressHandler),
/* harmony export */   "completeHandler": () => (/* binding */ completeHandler),
/* harmony export */   "errorHandler": () => (/* binding */ errorHandler),
/* harmony export */   "abortHandler": () => (/* binding */ abortHandler)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./Assets/typescripts/common/dom.ts");

/**
 * @param appenderId string
 * */
function setUploadProgressSystem(appenderId) {
    let appender = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#' + appenderId);
    let uploadBoard = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'div': { 'id': 'UploadStatusBoard', 'style': 'display:none;' } }]);
    uploadBoard.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'progress': { 'id': 'progressbar', 'max': '100', 'value': '0' } }]));
    uploadBoard.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'h3': { 'id': 'upload_status' } }]));
    uploadBoard.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'p': { 'id': 'loaded_n_total' } }]));
    return appender.appendChild(uploadBoard);
}
/**
 * @param ElementName string
 * @param ElementID string
 * @param URL string*/
function uploadFile(ElementName, ElementID, URL) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#UploadStatusBoard').style.display = 'block';
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#progressbar').style.display = 'block';
    let file = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#' + ElementID).files[0];
    let data = new FormData();
    data.append(ElementName, file);
    let ajax = new XMLHttpRequest();
    ajax.upload.addEventListener('progress', progressHandler, false);
    ajax.addEventListener('load', completeHandler, false);
    ajax.addEventListener('error', errorHandler, false);
    ajax.addEventListener('abort', abortHandler, false);
    ajax.open('POST', URL, true);
    ajax.send(data);
}
/**
 * @param event any
 * */
function progressHandler(event) {
    let loadedSize = (event.loaded / 1024) / 1024;
    let totalSize = (event.total / 1024) / 1024;
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#loaded_n_total').innerHTML = 'Uploaded ' + loadedSize.toFixed(2) + ' MB of ' + totalSize.toFixed(2) + ' MB';
    let percent = (event.loaded / event.total) * 100;
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#progressbar').value = Math.round(percent);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#upload_status').innerHTML = Math.round(percent) + '% uploaded..';
}
/**
 * @param event any
 * */
function completeHandler(event) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#upload_status').innerHTML = event.target.responseText;
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#progressbar').value = 0;
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#progressbar').style.display = 'none';
}
function errorHandler() {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#upload_status').innerHTML = 'Upload failed';
}
function abortHandler() {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#upload_status').innerHTML = 'Upload aborted';
}


/***/ }),

/***/ "./Assets/typescripts/common/validation.ts":
/*!*************************************************!*\
  !*** ./Assets/typescripts/common/validation.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDuplicate": () => (/* binding */ checkDuplicate),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "IsJsonString": () => (/* binding */ IsJsonString)
/* harmony export */ });
/**
 * @param str valid string
 * */
function checkDuplicate(str) {
    for (let i = 0; i < str.length; i++) {
        let re = new RegExp("[^" + str[i] + "]", "g");
        if (str.replace(re, "").length >= 2) {
            return true;
        }
    }
    return false;
}
/**
 * @param n any
 * */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * @param string string
 * */
function IsJsonString(string) {
    try {
        JSON.parse(string);
    }
    catch (e) {
        return false;
    }
    return true;
}


/***/ }),

/***/ "./Assets/typescripts/db/app.ts":
/*!**************************************!*\
  !*** ./Assets/typescripts/db/app.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appHost": () => (/* binding */ appHost),
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _common_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/dom */ "./Assets/typescripts/common/dom.ts");
/* global _root_ */
/*initialize on extension installed*/

let __appHostedServerRoot = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#mishusoft-web-root').content;
/*backup plan*/
if (__appHostedServerRoot === undefined) {
    //__appHostedServerRoot = 'http://localhost/';
    __appHostedServerRoot = 'http://localhost/';
    /*required variables*/
}
if (__appHostedServerRoot.substr(-1) !== '/') {
    __appHostedServerRoot += '/';
}
const appHost = __appHostedServerRoot;
const app = {
    "default": {
        "name": 'mishusoft',
        "version": 'official',
        "author": 'Mr. Al Amin Ahamed Abir',
        "charset": 'utf8mb4',
        "prefix": 'msu',
        "companyName": 'Mishusoft Systems Incorporate.',
        "text": {
            "welcome": "Welcome to Mishusoft Platform",
            "description": "Mishusoft Platform is a robust multi-web platform developed by Mishusoft Systems Inc. This platform is capable of getting your work done quickly and accurately.",
            "install_state": "The application is ready to be installed on your device at this time.",
        }
    },
    "content": {
        "folder": {
            "logos": __appHostedServerRoot + 'media/logos/',
            "css": __appHostedServerRoot + 'assets/css/',
            "js": __appHostedServerRoot + 'assets/js/',
            "images": __appHostedServerRoot + 'assets/images/',
        },
        "file": {
            "default": {
                "link": [
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-57x57.png",
                        "rel": "apple-touch-icon",
                        "size": "57x57"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-60x60.png",
                        "rel": "apple-touch-icon",
                        "size": "60x60"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-72x72.png",
                        "rel": "apple-touch-icon",
                        "size": "72x72"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-76x76.png",
                        "rel": "apple-touch-icon",
                        "size": "76x76"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-114x114.png",
                        "rel": "apple-touch-icon",
                        "size": "114x114"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-120x120.png",
                        "rel": "apple-touch-icon",
                        "size": "120x120"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-144x144.png",
                        "rel": "apple-touch-icon",
                        "size": "144x144"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-152x152.png",
                        "rel": "apple-touch-icon",
                        "size": "152x152"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-180x180.png",
                        "rel": "apple-touch-icon",
                        "size": "180x180"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/android-icon-192x192.png",
                        "rel": "icon",
                        "size": "192x192",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/favicon-16x16.png",
                        "rel": "icon",
                        "size": "16x16",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/favicon-32x32.png",
                        "rel": "icon",
                        "size": "32x32",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/favicon-96x96.png",
                        "rel": "icon",
                        "size": "96x96",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/favicon.ico",
                        "rel": "icon",
                        "size": "16x16",
                        "type": "image/vnd.microsoft.icon"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/manifest.json",
                        "rel": "manifest",
                    },
                    {
                        "name": "msapplication-TileColor",
                        "content": "#ffffff",
                    },
                    {
                        "name": "msapplication-TileImage",
                        "content": __appHostedServerRoot + "libraries/logos/ms-icon-144x144.png"
                    },
                    {
                        "name": "theme-color",
                        "content": "#ffffff",
                    },
                ],
            },
        },
    },
    "website": {
        "home": "https://www.mishusoft.com/",
        "support": "support@mishusoft.com",
        "donate": "https://www.mishusoft.com/payment/donate",
        "IpInfo": "https://api.ipdata.co/?api-key=2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180",
        "IpInfoKey": "2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180",
        "fontAwesome": "https://kit.fontawesome.com/b4c8f8449f.js",
        "fontAwesomeKey": "b4c8f8449f",
        "temporary": {
            "home": "http://localhost/",
            "monitorURL": "http://localhost/monitor/browser/",
            "paymentURL": "http://localhost/payment/"
        },
        "publish": {
            "home": "https://www.mishusoft.com/",
            "monitorURL": "https://www.mishusoft.com/monitor/browser/",
            "paymentURL": "https://www.mishusoft.com/payment/"
        }
    },
    "runtime": {
        "request": ""
    }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************!*\
  !*** ./Assets/typescripts/mishusoft.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db/app */ "./Assets/typescripts/db/app.ts");
/* harmony import */ var _common_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/dom */ "./Assets/typescripts/common/dom.ts");
/* harmony import */ var _common_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/request */ "./Assets/typescripts/common/request.ts");
/* harmony import */ var _common_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/validation */ "./Assets/typescripts/common/validation.ts");
/* harmony import */ var _common_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/message */ "./Assets/typescripts/common/message.ts");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/common */ "./Assets/typescripts/common/common.ts");
/* harmony import */ var _common_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/pagination */ "./Assets/typescripts/common/pagination.ts");
/* harmony import */ var _common_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/upload */ "./Assets/typescripts/common/upload.ts");








let publicSocialLinksInterval, contactMessageInterval, serverDatabaseInterval;
const background93c = "background: #93c";
console.log('tt');
(function (__collapseArray) {
    let i;
    for (i = 0; i < __collapseArray.length; i++) {
        __collapseArray[i].addEventListener("click", function () {
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                this.innerHTML = "+";
                content.style.display = "none";
            }
            else {
                this.innerHTML = "-";
                content.style.display = "block";
            }
        });
    }
}(document.querySelectorAll(".collapse")));
(function (__locationbarURI) {
    if (__locationbarURI.indexOf('view-source:') !== -1) {
        document.textContent = 'We don\'t support this protocol!!';
    }
}(window.location.href));
/*(function (_searchElement) {
    if (_searchElement !== null){
        ['keyup','paste'].forEach(function (event) {
            _searchElement?.addEventListener(event,function () {
                console.log(this.value);
            });
        });
    }
}(captureElement('#ms-qck-src')));
//ms-qck-src-do
*/
/*adjust footer actual height*/
//captureElement('.app-container')?.setAttribute('style','width:' + window.innerWidth + 'px;');
if (document.querySelectorAll('#flex-center').length !== 0) {
    document.querySelectorAll('#flex-center').forEach(function (__flexBoxCenter) {
        //__flexBoxCenter.setAttribute('style','height:' + window.innerHeight + 'px;width:' + window.innerWidth + 'px;');
        __flexBoxCenter.setAttribute('style', 'height:' + window.innerHeight + 'px;');
    });
}
/*window.addEventListener('resize', function () {
    //console.log(window.innerHeight);
    /!*console.log('Window Inner Height : ' + window.innerHeight);
    console.log('App Inner Height : ' + captureElement('#mishusoft-app-content').clientHeight);
    console.log('Footer Inner Height : ' + captureElement('#footer').clientHeight);*!/
    if (window.innerHeight <= (+captureElement('#mishusoft-app-content').clientHeight + +captureElement('#footer')?.clientHeight)) {
        /!*console.log('-------------------------------');
        console.log('we reached target!!')
        console.log('Window Inner Height : ' + window.innerHeight);
        console.log('App Inner Height : ' + (+captureElement('#mishusoft-app-content').clientHeight + +captureElement('#footer').clientHeight) );
        console.log('-------------------------------');*!/
        captureElement('#footer')?.removeAttribute('style');
    } else {
        captureElement('#footer').setAttribute('style', 'position: fixed;bottom: 0;width: inherit;');
    }
    //document.querySelector('.app-container')?.setAttribute('style','width:' + window.innerWidth + 'px;');
    if (document.querySelectorAll('#flex-center').length !== 0) {
        document.querySelectorAll('#flex-center').forEach(function (__flexBoxCenter: HTMLElement) {
            //__flexBoxCenter.setAttribute('style','height:' + window.innerHeight + 'px;width:' + window.innerWidth + 'px;');
            __flexBoxCenter.setAttribute('style', 'height:' + window.innerHeight + 'px;');
        });
    }
});*/
(function (__authLoginForm) {
    let interval = setInterval(function () {
        if (__authLoginForm !== null || true) {
            clearInterval(interval);
            __authLoginForm?.addEventListener('submit', function (event) {
                event.preventDefault();
                let messagebar = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone');
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.classList.add('box-runtime');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#login-button').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').setAttribute('disabled', 'disabled');
                messagebar.style = 'display:block;';
                messagebar.firstElementChild.textContent = 'Please wait......';
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center') !== undefined) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.remove();
                    }
                }
                return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'user/verifyUserAuth',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        username: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').value,
                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value,
                        redirectURL: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#redirect').value,
                        RememberMe: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#RememberMe').value,
                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#login-button').value
                    }
                }, function (response) {
                    if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                        let data = JSON.parse(response);
                        if (data.type === 'success' && data.message === 'LOGGED_IN') {
                            if (data.url !== '/') {
                                window.location.replace(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + data.url);
                            }
                            else {
                                window.location.replace(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost);
                            }
                        }
                        else {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#login-button').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').removeAttribute('disabled');
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#messageZone"));
                            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center') !== undefined) {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                            }
                        }
                    }
                });
            });
        }
    }, 100);
}((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#LogInForm')));
(function (__authRegistrationForm) {
    let interval = setInterval(function () {
        if (__authRegistrationForm !== null || true) {
            clearInterval(interval);
            __authRegistrationForm?.addEventListener('submit', function (event) {
                event.preventDefault();
            });
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#signup-button') !== undefined) {
                ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#signup-button').addEventListener(event, function () {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.removeAttribute('style');
                        let messagebar = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone');
                        if (messagebar.firstElementChild === null) {
                            let tmp = document.createElement('div');
                            messagebar.appendChild(tmp);
                        }
                        messagebar.firstElementChild.textContent = '';
                        messagebar.style = 'display:none;';
                        let firstNameCheck, lastNameCheck, emailAddressCheck, usernameCheck, passwordCheck, dateOfBirthCheck;
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#first-name').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your first name (more than 4 characters).<br/>';
                            addSpace();
                        }
                        else if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.checkDuplicate)((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#first-name').value)) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your first name.<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#first-name').value.length <= 3) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your first name more than 4 characters.<br/>';
                            addSpace();
                        }
                        else {
                            firstNameCheck = 'OK';
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#last-name').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your last name (more than 4 characters).<br/>';
                            addSpace();
                        }
                        else if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.checkDuplicate)((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#last-name').value)) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your last name.<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#last-name').value.length <= 3) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your last name more than 4 letter.<br/>';
                            addSpace();
                        }
                        else {
                            lastNameCheck = 'OK';
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your email address (valid for more than 14 characters).<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value.indexOf('@') === -1 || (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value.indexOf('.') === -1 || (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value.length <= 14) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter valid email address.<br/>';
                            addSpace();
                        }
                        else {
                            emailAddressCheck = 'OK';
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your username (valid for at least 8 characters).<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').value.length < 8) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter username at least 8 character.<br/>';
                            addSpace();
                        }
                        else {
                            usernameCheck = 'OK';
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dateOfBirth').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your date of birth.<br/>';
                            addSpace();
                        }
                        else {
                            dateOfBirthCheck = 'OK';
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your password (with @_ character and more than 6 character).<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value.indexOf('@') === -1) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter password with (@) character.<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value.indexOf('_') === -1) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter password with (_) character.<br/>';
                            addSpace();
                        }
                        else if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.checkDuplicate)((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value)) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your password.<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value.length <= 6) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter password more than 6 character.<br/>';
                            addSpace();
                        }
                        else {
                            passwordCheck = 'OK';
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').value) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Your password matched.<br/>';
                        }
                        if (!(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#agree').checked) {
                            messagebar.style = 'display:block;';
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.firstElementChild.innerHTML += 'Error : Please check i agree button to continue.<br/>';
                            addSpace();
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#agree').checked && firstNameCheck === 'OK' && lastNameCheck === 'OK' &&
                            emailAddressCheck === 'OK' && usernameCheck === 'OK' && passwordCheck === 'OK' && dateOfBirthCheck === 'OK') {
                            messagebar.firstElementChild.classList.add('box-runtime');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#signup-button').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#first-name').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#last-name').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dateOfBirth').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#gender').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#agree').setAttribute('disabled', 'disabled');
                            messagebar.style = 'display:block;';
                            messagebar.firstElementChild.textContent = 'Please wait......';
                            if (messagebar.style.display === 'block') {
                                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center') !== undefined) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.remove();
                                    }
                                }
                            }
                            return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                method: "POST",
                                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'user/registrationValidation',
                                async: true,
                                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                data: {
                                    security_code: 1,
                                    patch: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#regs').value,
                                    time: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#time').value,
                                    firstName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#first-name').value,
                                    lastName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#last-name').value,
                                    email: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value,
                                    username: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').value,
                                    password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value,
                                    confirmPassword: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').value,
                                    dateOfBirth: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dateOfBirth').value,
                                    gender: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#gender').value,
                                    agree: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#agree').value,
                                    btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#signup-button').value
                                }
                            }, function (response) {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#signup-button').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#first-name').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#last-name').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dateOfBirth').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#gender').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#agree').removeAttribute('disabled');
                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#messageZone"));
                                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center') !== undefined) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                                }
                            });
                        }
                    }, { passive: true });
                });
            }
        }
    }, 100);
}((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#registrationForm')));
(function (__authPasswordRecoveryForm) {
    let interval = setInterval(function () {
        if (__authPasswordRecoveryForm !== null || true) {
            clearInterval(interval);
            __authPasswordRecoveryForm?.addEventListener('submit', function (event) {
                event.preventDefault();
                let messagebar = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone');
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.textContent = '';
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').value.length === 0 && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value.length === 0) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Please enter username or email address to continue.<br/>';
                }
                messagebar.style = 'display:block;';
                messagebar.firstElementChild.textContent = 'Please wait......';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:500px';
                return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'user/passwordRecoveryValidation',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        patch: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#recovery').value,
                        time: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#time').value,
                        email: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value,
                        username: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').value,
                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#code-send-button').value
                    }
                }, function (response) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').removeAttribute('disabled');
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').removeAttribute('disabled');
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#messageZone"));
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center') !== undefined) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.remove();
                        }
                    }
                });
            });
        }
    }, 100);
}((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ForgetPasswordForm')));
(function (__authSetPasswordForm) {
    let interval = setInterval(function () {
        if (__authSetPasswordForm !== null || true) {
            clearInterval(interval);
            __authSetPasswordForm?.addEventListener('submit', function (event) {
                event.preventDefault();
                let passwordCheck, messagebar = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone');
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.textContent = '';
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value === '') {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter your password (with @_ character and more than 6 character).<br/>';
                    addSpace();
                }
                else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value.indexOf('@') === -1) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter password with (@) character.<br/>';
                    addSpace();
                }
                else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value.indexOf('_') === -1) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter password with (_) character.<br/>';
                    addSpace();
                }
                else if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.checkDuplicate)((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value)) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your password.<br/>';
                    addSpace();
                }
                else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value.length <= 6) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter password more than 6 character.<br/>';
                    addSpace();
                }
                else {
                    passwordCheck = 'OK';
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').value) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Your password matched.<br/>';
                }
                messagebar.style = 'display:block;';
                messagebar.firstElementChild.textContent = 'Please wait......';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:500px';
                if (passwordCheck === 'OK') {
                    messagebar.firstElementChild.classList.add('box-runtime');
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#set-new-password-button').setAttribute('disabled', 'disabled');
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').setAttribute('disabled', 'disabled');
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').setAttribute('disabled', 'disabled');
                    messagebar.style = 'display:block;';
                    messagebar.firstElementChild.textContent = 'Please wait......';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:700px';
                    return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "POST",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'user/newPasswordValidation',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            patch: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#set-password').value,
                            time: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#time').value,
                            userId: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-id').value,
                            password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value,
                            confirmPassword: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').value,
                            btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#set-new-password-button').value
                        }
                    }, function (response) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#set-new-password-button').removeAttribute('disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').removeAttribute('disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').removeAttribute('disabled');
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#messageZone"));
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center') !== undefined) {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.remove();
                            }
                        }
                    });
                }
            });
        }
    }, 100);
}((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#SetPasswordForm')));
(function (__contactMessageSender) {
    let interval = setInterval(function () {
        if (__contactMessageSender !== null || true) {
            clearInterval(interval);
            __contactMessageSender?.addEventListener('click', function () {
                let messagebar = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone');
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.classList.add('box-runtime');
                messagebar.firstElementChild.textContent = 'Please wait......';
                messagebar.style.display = 'block';
                return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'contact/receiveMessage',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        firstName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_fst_nm').value,
                        lastName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_lst_nm').value,
                        email: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_email').value,
                        mobileNumber: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_mbl_nmbr').value,
                        messageSubject: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_msg_sbj').value,
                        messageContent: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_msg').value,
                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_msg_snd_btn').textContent
                    }
                }, function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#messageZone"));
                });
            });
        }
    }, 100);
}((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_msg_snd_btn')));
(function (__url) {
    if (__url.indexOf('payment') !== -1) {
        /*stripe payment merchant cdn
        fetch('https://js.stripe.com/v3')
            .then(() => {
                document.head.appendChild(createElement([{
                    'script': {
                        'type': 'application/javascript',
                        'src': 'https://js.stripe.com/v3/',
                        'async': 'async',
                    }
                }]));
            })
            .catch((err) => {
                console.info('Stripe SDK load failed. ' + err)
            })*/
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-welcome') !== undefined) {
            ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#start-pay')?.addEventListener(__event, function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-welcome').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-categories').removeAttribute('style');
                }, { passive: true });
            });
        }
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-categories') !== undefined) {
            ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#services-payment')?.addEventListener(__event, function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-categories').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-appid-email').style.display = 'block';
                }, { passive: true });
            });
        }
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-appid-email') !== undefined) {
            ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-back')?.addEventListener(__event, function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-appid-email').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-categories').removeAttribute('style');
                }, { passive: true });
            });
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-appid-email')?.addEventListener('submit', function (event) {
                event.preventDefault();
                let emailAddressCheck, messagebar = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messagePanel');
                messagebar.className = 'messageZone';
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.textContent = '';
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-id').value.length === 0) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Please enter your app id to continue.<br/>';
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').value === '') {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter your email address (valid for more than 14 characters).<br/>';
                    addSpace();
                }
                else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').value.indexOf('@') === -1 || (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').value.indexOf('.') === -1 || (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').value.length <= 14) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter valid email address.<br/>';
                    addSpace();
                }
                else {
                    emailAddressCheck = 'OK';
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan-type').value.length === 0) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Please select your plan type to continue.<br/>';
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan').value.length === 0) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Please select your plan to continue.<br/>';
                }
                messagebar.firstElementChild.classList.add('box-runtime');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-done').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-id').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan-type').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-back').setAttribute('disabled', 'disabled');
                messagebar.style = 'display:block;';
                messagebar.firstElementChild.textContent = 'Please wait......';
                if (emailAddressCheck === 'OK') {
                    return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "POST",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'payment/verifyClient',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            userEmail: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').value,
                            appId: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-id').value,
                            plan: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan').value,
                            planType: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan-type').value,
                            btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-done').textContent
                        }
                    }, function (response) {
                        if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response) && JSON.parse(response).type === 'success') {
                            //https://host/payment/payNow/appid/email/plantype/plan/amount
                            /**
                             * http://localhost/payment/payNow/
                             * Zjh6bEdTVTV0RU1NNTlTREpFODhXdz09/
                             * VUZBY3E2dzg1S2QyYk1HVHlsRm8ybi82YWNqc0Z1YXJmc082bXFMeWVDMD0=/
                             * YmZIcmg5QnZFSEw4U2RxY3kxSlZDZz09/
                             * YXNxZTdVVXBKbzNxbTcvQ052NEZUQT09/
                             * */
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-done').textContent = 'Redirecting...';
                            setTimeout(function () {
                                window.location.replace(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'payment/paynow/' + JSON.parse(response).appIdEncrypt + '/' +
                                    JSON.parse(response).emailEncrypt + '/' + JSON.parse(response).paymentPlanTypeEncrypt + '/' +
                                    JSON.parse(response).paymentPlanEncrypt + '/');
                            }, 2000);
                        }
                        else {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-id').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan-type').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-done').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-back').removeAttribute('disabled');
                        }
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#messagePanel"));
                    });
                }
            });
        }
    }
}(window.location.href));
/*add-ons zone*/
(function (__url) {
    if (__url.indexOf('ipinfo') !== -1) {
        let interval = setInterval(function () {
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ipd-address') !== null || true) {
                clearInterval(interval);
                ['keyup', 'change', 'paste'].forEach(function (__inputEvent) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ipd-address')?.addEventListener(__inputEvent, function () {
                        return retrieveIpInfoPlus();
                    });
                });
                retrieveIpInfoPlus();
            }
        }, 100);
    }
}(window.location.href));
/*system zone*/
(function (__url) {
    let visitorsAccessLogsInterval;
    if (__url.indexOf('system') !== -1) {
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-notification-viewer") !== undefined) {
            visitorsAccessLogsInterval = setInterval(function () {
            }, 1000);
            (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                method: "GET",
                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'api/getVisitorsAccessLogsLimited',
                async: true,
                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            }, function (response) {
                if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                    if (JSON.parse(response).length !== 0) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-notification-viewer").textContent = '';
                        JSON.parse(response).forEach(function (log) {
                            const messageBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'a': {
                                        'class': 'box-message ' + ((log.message_type.toLowerCase() === 'error') ? 'box-danger' : ((log.message_type.toLowerCase() === 'success') ? 'box-success' : ((log.message_type.toLowerCase() === 'notify') ? 'box-notify' : ' '))) + ' box-shadow-light',
                                        /*'style': 'padding: 0 0 0 4px;',*/
                                        'href': _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/log/view/' + log.id,
                                        'title': '[' + log.ip + '] [' + log.browser + '] [' + log.time + ']',
                                    }
                                }]);
                            const messageIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'span': {
                                        'class': ((log.message_type.toLowerCase() === 'error') ? 'box-danger-symbol' : ((log.message_type.toLowerCase() === 'success') ? 'box-success-symbol' : ((log.message_type.toLowerCase() === 'notify') ? 'box-notify-symbol' : ' '))),
                                    }
                                }]);
                            messageBody.appendChild(messageIcon);
                            const messageIconFile = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'i': {
                                        'class': ((log.message_type.toLowerCase() === 'error') ? 'fa fa-times' : ((log.message_type.toLowerCase() === 'success') ? 'fa fa-check' : ((log.message_type.toLowerCase() === 'notify') ? 'fa fa-info' : ''))),
                                    }
                                }]);
                            messageIcon.appendChild(messageIconFile);
                            const messageBodyContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#notify') !== undefined) ? (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#notify').value : 'notify-md-content', } }]);
                            messageBody.appendChild(messageBodyContent);
                            const ipLink = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'a': {
                                        'class': 'link',
                                        'href': _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'addons/ipinfo/' + log.ip,
                                    }
                                }]);
                            ipLink.textContent = log.author + ' with ' + log.browser /*+  ' from ' + log.country*/;
                            messageBodyContent.appendChild(ipLink);
                            const contentLink = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'span': { 'class': 'link', } }]);
                            messageBodyContent.appendChild(contentLink);
                            const content = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'p': { 'class': 'link', } }]);
                            content.textContent = log.message.replace(/\s*\<.*?\>\s*/g, ' ').substr(0, 35) + '...';
                            messageBodyContent.appendChild(content);
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-notification-viewer").appendChild(messageBody);
                        });
                    }
                    else {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-notification-viewer").textContent = '';
                        const messageBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'div': {
                                    'class': 'box-message box-danger box-shadow-light',
                                    /*'style': 'padding: 0 0 0 4px;',*/
                                }
                            }]);
                        const messageIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'span': {
                                    'class': 'box-danger-symbol',
                                }
                            }]);
                        messageBody.appendChild(messageIcon);
                        const messageIconFile = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'i': {
                                    'class': 'fa fa-times',
                                }
                            }]);
                        messageIcon.appendChild(messageIconFile);
                        const messageBodyContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'notify-md-content', } }]);
                        messageBodyContent.textContent = 'No notification found.';
                        messageBody.appendChild(messageBodyContent);
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-notification-viewer").appendChild(messageBody);
                    }
                }
            });
        }
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-contact-message-viewer") !== undefined) {
            contactMessageInterval = setInterval(function () {
            }, 1000);
            (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                method: "GET",
                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'api/getContactMessagesLimited',
                async: true,
                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            }, function (response) {
                if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                    if (JSON.parse(response).length !== 0) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-contact-message-viewer").textContent = '';
                        JSON.parse(response).forEach(function (message) {
                            const messageBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'a': {
                                        'class': 'box-message box-success box-shadow-light',
                                        'href': _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/contactmessage/view/' + message.id,
                                    }
                                }]);
                            const messageIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'span': {
                                        'class': 'box-success-symbol',
                                    }
                                }]);
                            messageBody.appendChild(messageIcon);
                            const messageIconFile = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'i': {
                                        'class': 'fa fa-check',
                                    }
                                }]);
                            messageIcon.appendChild(messageIconFile);
                            const messageBodyContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#notify') !== undefined) ? (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#notify').value : 'notify-md-content', } }]);
                            messageBody.appendChild(messageBodyContent);
                            const sender = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'a': {
                                        'class': 'link',
                                        /*'href': appHost + 'addons/ipinfo/' + message.ip,*/
                                    }
                                }]);
                            sender.textContent = message.f_name + ' ' + message.l_name + ' send a ' + message.subject;
                            messageBodyContent.appendChild(sender);
                            const content = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'p': {} }]);
                            content.textContent = message.message;
                            messageBodyContent.appendChild(content);
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-contact-message-viewer").appendChild(messageBody);
                        });
                    }
                    else {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-contact-message-viewer").textContent = '';
                        const messageBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'div': {
                                    'class': 'box-message box-danger box-shadow-light',
                                    /*'style': 'padding: 0 0 0 4px;',*/
                                }
                            }]);
                        const messageIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'span': {
                                    'class': 'box-danger-symbol',
                                }
                            }]);
                        messageBody.appendChild(messageIcon);
                        const messageIconFile = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'i': {
                                    'class': 'fa fa-times',
                                }
                            }]);
                        messageIcon.appendChild(messageIconFile);
                        const messageBodyContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'notify-md-content', } }]);
                        messageBodyContent.textContent = 'No message found.';
                        messageBody.appendChild(messageBodyContent);
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-contact-message-viewer").appendChild(messageBody);
                    }
                }
            });
        }
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#system-default-menus') !== undefined) {
            setInterval(function () {
            }, 1000);
            (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                method: "GET",
                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/index/getMainItemTabs',
                async: true,
                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            }, function (response) {
                if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                    if (JSON.parse(response).length !== 0) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-default-menus").textContent = '';
                        JSON.parse(response).forEach(function (menu) {
                            const systemMenu = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'a': {
                                        'class': 'thumbnail-md box-shadow-light',
                                        'href': _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/' + menu.url,
                                        'title': menu.title,
                                    }
                                }]);
                            const systemMenuIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'span': { 'class': 'thumbnail-image', } }]);
                            systemMenu.appendChild(systemMenuIcon);
                            const systemMenuIconFile = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'i': { 'class': menu.icon, } }]);
                            systemMenuIcon.appendChild(systemMenuIconFile);
                            const systemMenuName = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'thumbnail-text', } }]);
                            systemMenuName.textContent = menu.name;
                            systemMenu.appendChild(systemMenuName);
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-default-menus").appendChild(systemMenu);
                        });
                    }
                    else {
                        const systemMenu = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'div': {
                                    'class': 'thumbnail-md box-shadow-light',
                                    'style': 'padding: 45px 25px;',
                                }
                            }]);
                        systemMenu.textContent = 'No menu exists.';
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-default-menus").appendChild(systemMenu);
                    }
                }
            });
        }
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#system-extra-menus') !== undefined) {
            setInterval(function () {
            }, 1000);
            (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                method: "GET",
                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/index/getExtraItemTabs',
                async: true,
                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            }, function (response) {
                if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                    if (JSON.parse(response).length !== 0) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#system-extra-menus').textContent = '';
                        JSON.parse(response).forEach(function (menu) {
                            const extraMenu = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'a': {
                                        'class': 'thumbnail-md box-shadow-light',
                                        'href': _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/' + menu.url,
                                        'title': menu.title,
                                    }
                                }]);
                            const extraMenuIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'span': { 'class': 'thumbnail-image', } }]);
                            extraMenu.appendChild(extraMenuIcon);
                            const extraMenuIconFile = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'i': { 'class': menu.icon, } }]);
                            extraMenuIcon.appendChild(extraMenuIconFile);
                            const extraMenuName = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'thumbnail-text', } }]);
                            extraMenuName.textContent = menu.name;
                            extraMenu.appendChild(extraMenuName);
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-extra-menus").appendChild(extraMenu);
                        });
                    }
                    else {
                        const extraMenu = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'div': {
                                    'class': 'thumbnail-md box-shadow-light',
                                    'style': 'padding: 45px 25px;',
                                }
                            }]);
                        extraMenu.textContent = 'No menu exists.';
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-extra-menus").appendChild(extraMenu);
                    }
                }
            });
        }
        if (__url.indexOf('branches') !== -1) {
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-table') !== undefined) {
                //init edit pad by default
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode')) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode').innerHTML = 'New';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').innerHTML = 'Save';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-reset-btn').innerHTML = 'Reset';
                }
                //set text box value change dynamic after dropbox had changed.
                ['keyup', 'change', 'paste'].forEach(function (__event) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchName').addEventListener(__event, function () {
                        return (0,_common_common__WEBPACK_IMPORTED_MODULE_5__.checkInputDataAbility)(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + "system/branches/checkBranchNameInputAbility", {
                            security_code: 1,
                            name: "name",
                            value: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#branchName").value
                        }, function (response) {
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                        });
                    });
                });
                //save data by clicking data button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                    return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "POST",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/manageBranch',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchID').value,
                            name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchName').value,
                            status: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchStatus').value,
                            location: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchLocation').value,
                            btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').textContent
                        },
                    }, (response) => {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                    });
                });
                //reset inputbox by clicking reset button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-reset-btn').addEventListener('click', function () {
                    changeElementValueById([
                        { 'id': 'branchID', 'value': '' },
                        { 'id': 'branchName', 'value': '' },
                        { 'id': 'branchStatus', 'value': '' },
                        { 'id': 'branchLocation', 'value': '' },
                    ]);
                });
                //add data form by clicking add button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-add-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode').innerHTML = 'New';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').innerHTML = 'Save';
                    changeElementValueById([
                        { 'id': 'branchID', 'value': '' },
                        { 'id': 'branchName', 'value': '' },
                        { 'id': 'branchStatus', 'value': '' },
                        { 'id': 'branchLocation', 'value': '' },
                    ]);
                });
                //select data by clicking select button
                if (document.querySelectorAll('#branch-select').length !== 0) {
                    document.querySelectorAll('#branch-select').forEach(function (__selector) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            __selector.addEventListener(event, function () {
                                if (this.checked) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode').innerHTML = 'Edit';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').innerHTML = 'Update';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchID').value = this.getAttribute('data-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchName').value = this.getAttribute('data-name');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchStatus').value = this.getAttribute('data-status');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchLocation').value = this.getAttribute('data-location');
                                }
                            }, { passive: true });
                        });
                    });
                }
                /*add edit event*/
                if (document.querySelectorAll('#branch-edit-btn').length !== 0) {
                    document.querySelectorAll('#branch-edit-btn').forEach(function (_button) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            _button.addEventListener(event, function () {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode').innerHTML = 'Edit';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').innerHTML = 'Update';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchID').value = this.getAttribute('data-id');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchName').value = this.getAttribute('data-name');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchStatus').value = this.getAttribute('data-status');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchLocation').value = this.getAttribute('data-location');
                            }, { passive: true });
                        });
                    });
                }
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#branch-delete-btn', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/deleteBranch', '#message3', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                });
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.paginationDriver)('ajax', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/indexPaginationAJAX', 'branch-data-table', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                }, function () {
                    (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#branch-delete-btn', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/deleteBranch', '#message3', function (response) {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                    });
                    /*it will be fire on pagination*/
                    //select data by clicking select button
                    if (document.querySelectorAll('#branch-select').length !== 0) {
                        document.querySelectorAll('#branch-select').forEach(function (__selector) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                __selector.addEventListener(event, function () {
                                    if (this.checked) {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode').innerHTML = 'Edit';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').innerHTML = 'Update';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchID').value = this.getAttribute('data-id');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchName').value = this.getAttribute('data-name');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchStatus').value = this.getAttribute('data-status');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchLocation').value = this.getAttribute('data-location');
                                    }
                                }, { passive: true });
                            });
                        });
                    }
                    /*add edit event*/
                    if (document.querySelectorAll('#branch-edit-btn').length !== 0) {
                        document.querySelectorAll('#branch-edit-btn').forEach(function (_button) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                _button.addEventListener(event, function () {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode').innerHTML = 'Edit';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').innerHTML = 'Update';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchID').value = this.getAttribute('data-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchName').value = this.getAttribute('data-name');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchStatus').value = this.getAttribute('data-status');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchLocation').value = this.getAttribute('data-location');
                                }, { passive: true });
                            });
                        });
                    }
                });
            }
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#busers-data-table') !== undefined) {
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#transferBranchStuff', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/transferBranchStuff', '#message3', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                });
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.paginationDriver)('ajax', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/usersPaginationAJAX', 'busers-data-table', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                }, function () {
                    (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#transferBranchStuff', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/transferBranchStuff', '#message3', function (response) {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                    });
                });
            }
        }
        if (__url.indexOf('modules') !== -1) {
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modules-data-table') !== undefined) {
                //init edit pad by default
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditMode')) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditMode').innerHTML = 'New';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').innerHTML = 'Save';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').innerHTML = 'Reset';
                }
                //save data by clicking data button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                    return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "POST",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/modules/updateModule',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleID').value,
                            status: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleStatus').value,
                            btnName: 'Update'
                        },
                    }, (response) => {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                    });
                });
                //reset inputbox by clicking reset button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').addEventListener('click', function () {
                    changeElementValueById([
                        { 'id': 'moduleStatus', 'value': '' },
                    ]);
                });
                //add data form by clicking add button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-add-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleUploadPad').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditPAD').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').style.display = 'none';
                });
                //show select file name on status bar
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleFile').addEventListener('change', function () {
                    let file = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleFile').files[0];
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#progressbar').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = file.name + ' selected';
                });
                //upload file by clicking button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#uploadModuleFile').addEventListener('click', function () {
                    (0,_common_upload__WEBPACK_IMPORTED_MODULE_7__.uploadFile)('moduleFile', 'moduleFile', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/modules/uploadTARGZ');
                });
                //select data by clicking select button
                if (document.querySelectorAll('#module-select').length !== 0) {
                    document.querySelectorAll('#module-select').forEach(function (__selector) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            __selector.addEventListener(event, function () {
                                if (this.checked) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleUploadPad').style.display = 'none';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditPAD').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditMode').innerHTML = 'Edit';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').innerHTML = 'Update';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleID').value = this.getAttribute('data-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').value = this.getAttribute('data-name');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').setAttribute('disabled', 'disabled');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').value = this.getAttribute('data-location');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').setAttribute('disabled', 'disabled');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleStatus').value = this.getAttribute('data-status');
                                }
                            }, { passive: true });
                        });
                    });
                }
                /*add edit event*/
                if (document.querySelectorAll('#module-edit-btn').length !== 0) {
                    document.querySelectorAll('#module-edit-btn').forEach(function (_button) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            _button.addEventListener(event, function () {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleUploadPad').style.display = 'none';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditPAD').style.display = 'block';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditMode').innerHTML = 'Edit';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').innerHTML = 'Update';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').style.display = 'block';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').style.display = 'block';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleID').value = this.getAttribute('data-id');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').value = this.getAttribute('data-name');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').setAttribute('disabled', 'disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').value = this.getAttribute('data-location');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').setAttribute('disabled', 'disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleStatus').value = this.getAttribute('data-status');
                            }, { passive: true });
                        });
                    });
                }
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#module-delete-btn', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/modules/deleteModule', '#message3', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                });
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.paginationDriver)('ajax', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/modules/indexPaginationAJAX', 'modules-data-table', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                }, function () {
                    (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#module-delete-btn', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/modules/deleteModule', '#message3', function (response) {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                    });
                    /*it will be fire on pagination*/
                    //select data by clicking select button
                    if (document.querySelectorAll('#module-select').length !== 0) {
                        document.querySelectorAll('#module-select').forEach(function (__selector) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                __selector.addEventListener(event, function () {
                                    if (this.checked) {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleUploadPad').style.display = 'none';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditPAD').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditMode').innerHTML = 'Edit';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').innerHTML = 'Update';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleID').value = this.getAttribute('data-id');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').value = this.getAttribute('data-name');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').setAttribute('disabled', 'disabled');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').value = this.getAttribute('data-location');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').setAttribute('disabled', 'disabled');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleStatus').value = this.getAttribute('data-status');
                                    }
                                }, { passive: true });
                            });
                        });
                    }
                    /*add edit event*/
                    if (document.querySelectorAll('#module-edit-btn').length !== 0) {
                        document.querySelectorAll('#module-edit-btn').forEach(function (_button) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                _button.addEventListener(event, function () {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleUploadPad').style.display = 'none';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditPAD').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditMode').innerHTML = 'Edit';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').innerHTML = 'Update';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleID').value = this.getAttribute('data-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').value = this.getAttribute('data-name');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').setAttribute('disabled', 'disabled');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').value = this.getAttribute('data-location');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').setAttribute('disabled', 'disabled');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleStatus').value = this.getAttribute('data-status');
                                }, { passive: true });
                            });
                        });
                    }
                });
            }
        }
        if (__url.indexOf('pages') !== -1) {
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pages-data-table') !== undefined) {
                //init edit pad by default
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode')) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode').innerHTML = 'New';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').innerHTML = 'Save';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-reset-btn').innerHTML = 'Reset';
                }
                //init edit pad by default
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageSEOEditMode')) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageSEOEditMode').innerHTML = 'New';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo-data-btn').innerHTML = 'Save';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo-reset-btn').innerHTML = 'Reset';
                }
                //add data form by clicking add button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-add-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode').innerHTML = 'New';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').innerHTML = 'Save';
                    changeElementValueById([
                        { 'id': 'page-parent-id', 'value': '' },
                        { 'id': 'page-position-id', 'value': '' },
                        { 'id': 'page-status', 'value': '' },
                        { 'id': 'page-seo', 'value': '' },
                        { 'id': 'page-title', 'value': '' },
                        { 'id': 'page-url', 'value': '' },
                        { 'id': 'page-icon', 'value': '' },
                        { 'id': 'page-type', 'value': '' },
                    ]);
                });
                /*page parent change event*/
                ['change'].forEach(function (__event) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').addEventListener(__event, function () {
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.length !== 0) {
                            if (this.value.length !== 0 && this.value !== '0') {
                                return (0,_common_common__WEBPACK_IMPORTED_MODULE_5__.checkInputDataAbility)(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + "system/pages/getPageNameById", {
                                    security_code: 1,
                                    page: this.value
                                }, function (response) {
                                    if (JSON.parse(response).type === 'success') {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').setAttribute('actual-url', 'page/' + JSON.parse(response).name.replace(' ', '-').toLowerCase() + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.toLowerCase());
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').href = _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'page/' + JSON.parse(response).name.replace(' ', '-').toLowerCase() + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.toLowerCase();
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').textContent = 'URL : ' + _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'page/' + JSON.parse(response).name.replace(' ', '-').toLowerCase() + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.toLowerCase();
                                    }
                                    else {
                                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                                    }
                                });
                            }
                        }
                    });
                });
                //set text box value change dynamic after dropbox had changed.
                ['keyup', 'change', 'paste', 'focus'].forEach(function (__event) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').addEventListener(__event, function () {
                        if (this.value.length !== 0) {
                            this.value = this.value[0].toUpperCase() + this.value.slice(1);
                            return (0,_common_common__WEBPACK_IMPORTED_MODULE_5__.checkInputDataAbility)(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + "system/pages/checkPageTitleURLInputAbility", {
                                security_code: 1,
                                name: "title",
                                value: this.value[0].toUpperCase() + this.value.slice(1)
                            }, function (response) {
                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                            });
                        }
                    });
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').addEventListener(__event, function () {
                        if (this.value.length === 0) {
                            this.value = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').value.replace(' ', '-').toLowerCase();
                        }
                        else {
                            this.value = this.value.replace(' ', '-').toLowerCase();
                        }
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').setAttribute('style', 'display:block;');
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value.length !== 0 && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value !== '0') {
                            (0,_common_common__WEBPACK_IMPORTED_MODULE_5__.checkInputDataAbility)(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + "system/pages/getPageNameById", {
                                security_code: 1,
                                page: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value
                            }, function (response) {
                                if (JSON.parse(response).type === 'success') {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').setAttribute('actual-url', 'page/' + JSON.parse(response).name.replace(' ', '-').toLowerCase() + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.toLowerCase());
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').href = _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'page/' + JSON.parse(response).name.replace(' ', '-').toLowerCase() + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.toLowerCase();
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').textContent = 'URL : ' + _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'page/' + JSON.parse(response).name.replace(' ', '-').toLowerCase() + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.toLowerCase();
                                }
                                else {
                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                                }
                            });
                        }
                        else {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').setAttribute('actual-url', 'page/' + this.value.replace(' ', '-').toLowerCase());
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').href = _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'page/' + this.value.replace(' ', '-').toLowerCase();
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').textContent = 'URL : ' + _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'page/' + this.value.replace(' ', '-').toLowerCase();
                        }
                        return (0,_common_common__WEBPACK_IMPORTED_MODULE_5__.checkInputDataAbility)(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + "system/pages/checkPageTitleURLInputAbility", {
                            security_code: 1,
                            name: "url",
                            value: this.value.toLowerCase()
                        }, function (response) {
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                        });
                    });
                });
                //save data by clicking data button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                    return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "POST",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/pages/managePages',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageID').value,
                            parent: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value,
                            position: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-position-id').value,
                            status: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-status').value,
                            seo: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo').value,
                            title: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').value,
                            icon: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-icon').value,
                            url: ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').getAttribute('actual-url') !== null) ? (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').getAttribute('actual-url').toLowerCase() : '',
                            type: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-type').value,
                            btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').textContent
                        },
                    }, (response) => {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                        /*-------------------------*/
                        console.log(document.forms);
                        /*-------------------------*/
                    });
                });
                //reset inputbox by clicking reset button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-reset-btn').addEventListener('click', function () {
                    changeElementValueById([
                        { 'id': 'page-parent-id', 'value': '' },
                        { 'id': 'page-position-id', 'value': '' },
                        { 'id': 'page-status', 'value': '' },
                        { 'id': 'page-seo', 'value': '' },
                        { 'id': 'page-title', 'value': '' },
                        { 'id': 'page-url', 'value': '' },
                        { 'id': 'page-icon', 'value': '' },
                        { 'id': 'page-type', 'value': '' },
                    ]);
                });
                //select data by clicking select button
                if (document.querySelectorAll('#page-select').length !== 0) {
                    document.querySelectorAll('#page-select').forEach(function (__selector) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            __selector.addEventListener(event, function () {
                                if (this.checked) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode').innerHTML = 'Edit';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').innerHTML = 'Update';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageID').value = this.getAttribute('data-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value = this.getAttribute('data-parent-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-position-id').value = this.getAttribute('data-position');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-status').value = this.getAttribute('data-status');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo').value = this.getAttribute('data-seo');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').value = this.getAttribute('data-title');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value = this.getAttribute('data-url');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-type').value = this.getAttribute('data-type');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-icon').value = this.getAttribute('data-icon');
                                }
                            }, { passive: true });
                        });
                    });
                }
                /*add edit event*/
                if (document.querySelectorAll('#page-edit-btn').length !== 0) {
                    document.querySelectorAll('#page-edit-btn').forEach(function (_button) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            _button.addEventListener(event, function () {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode').innerHTML = 'Edit';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').innerHTML = 'Update';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageID').value = this.getAttribute('data-id');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value = this.getAttribute('data-parent-id');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-position-id').value = this.getAttribute('data-position');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-status').value = this.getAttribute('data-status');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo').value = this.getAttribute('data-seo');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').value = this.getAttribute('data-title');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value = this.getAttribute('data-url');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-type').value = this.getAttribute('data-type');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-icon').value = this.getAttribute('data-icon');
                            }, { passive: true });
                        });
                    });
                }
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#page-delete-btn', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/pages/deletePage', '#message3', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                });
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.paginationDriver)('ajax', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/pages/indexPaginationAJAX', 'pages-data-table', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                }, function () {
                    (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#page-delete-btn', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/pages/deletePage', '#message3', function (response) {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                    });
                    /*it will be fire on pagination*/
                    //select data by clicking select button
                    if (document.querySelectorAll('#page-select').length !== 0) {
                        document.querySelectorAll('#page-select').forEach(function (__selector) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                __selector.addEventListener(event, function () {
                                    if (this.checked) {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode').innerHTML = 'Edit';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').innerHTML = 'Update';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageID').value = this.getAttribute('data-id');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value = this.getAttribute('data-parent-id');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-position-id').value = this.getAttribute('data-position');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-status').value = this.getAttribute('data-status');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo').value = this.getAttribute('data-seo');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').value = this.getAttribute('data-title');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value = this.getAttribute('data-url');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-type').value = this.getAttribute('data-type');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-icon').value = this.getAttribute('data-icon');
                                    }
                                }, { passive: true });
                            });
                        });
                    }
                    /*add edit event*/
                    if (document.querySelectorAll('#page-edit-btn').length !== 0) {
                        document.querySelectorAll('#page-edit-btn').forEach(function (_button) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                _button.addEventListener(event, function () {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode').innerHTML = 'Edit';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').innerHTML = 'Update';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageID').value = this.getAttribute('data-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value = this.getAttribute('data-parent-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-position-id').value = this.getAttribute('data-position');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-status').value = this.getAttribute('data-status');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo').value = this.getAttribute('data-seo');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').value = this.getAttribute('data-title');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value = this.getAttribute('data-url');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-type').value = this.getAttribute('data-type');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-icon').value = this.getAttribute('data-icon');
                                }, { passive: true });
                            });
                        });
                    }
                });
            }
            if (__url.indexOf('sources') !== -1) {
                [/*'focus', 'click','keyup',*/ 'paste', 'change'].forEach(function (__event) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-content')?.addEventListener(__event, function () {
                        return this.textContent = this.textContent.replace('{$layoutParams.root}', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost);
                    });
                });
            }
        }
        /*----------------*/
        /*----------------*/
        if (__url.indexOf('tracking') !== -1) {
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-databases') !== undefined) {
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseEditMode')) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').innerHTML = 'Save';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-reset-btn').innerHTML = 'Reset';
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseBackupEditMode')) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseBackup-data-btn').innerHTML = 'Backup';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseBackup-reset-btn').innerHTML = 'Reset';
                }
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#server-db-add-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseEditMode').innerHTML = 'Add new';
                    changeElementValueById([
                        { 'id': 'databaseID', 'value': '' },
                        { 'id': 'databaseServer', 'value': '' },
                        { 'id': 'databaseUser', 'value': '' },
                        { 'id': 'databaseName', 'value': '' },
                        { 'id': 'databasePassword', 'value': '' },
                    ]);
                });
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#server-db-backup-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message3').innerHTML = '';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal02').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseBackupEditMode').innerHTML = 'Backup';
                    changeElementValueById([
                        { 'id': 'databaseStorage', 'value': '' },
                        { 'id': 'databaseBackup', 'value': '' },
                    ]);
                });
                //save data by clicking data button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                    (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "POST",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/manageServerDatabase',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseID').value,
                            name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseServer').value,
                            user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseUser').value,
                            db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseName').value,
                            password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databasePassword').value,
                            btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent
                        },
                    }, function (response) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent + 'd';
                        setTimeout(function () {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent.slice(0, -1);
                        }, 2000);
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                    });
                });
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseBackup-data-btn').addEventListener('click', function () {
                    /*stop running xhr hit to get better server performance*/
                    clearInterval(publicSocialLinksInterval);
                    publicSocialLinksInterval = 0;
                    clearInterval(visitorsAccessLogsInterval);
                    visitorsAccessLogsInterval = 0;
                    clearInterval(contactMessageInterval);
                    contactMessageInterval = 0;
                    clearInterval(serverDatabaseInterval);
                    serverDatabaseInterval = 0;
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                    (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "GET",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/backupData/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseStorage').value + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseBackup').value,
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    }, function (response) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent + 'd';
                        setTimeout(function () {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent.slice(0, -1);
                        }, 2000);
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message3"));
                    });
                });
                serverDatabaseInterval = setInterval(function () {
                }, 1000);
                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "GET",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/getServerDatabases',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                }, function (response) {
                    if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                        if (JSON.parse(response).message === undefined) {
                            if (JSON.parse(response).length !== 0) {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-data-body").textContent = '';
                                let slNum = 1;
                                let view = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed table-striped' } }]);
                                let viewBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tbody': {} }]);
                                view.appendChild(viewBody);
                                JSON.parse(response).forEach(function (server) {
                                    let currentSLNum = slNum++;
                                    let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'tr': {
                                                'data-server': server.name,
                                                'data-db': server.db,
                                                'data-user': server.user,
                                                'data-password': server.password,
                                            }
                                        }]);
                                    /*viewBodyRow.addEventListener('click', function () {
                                        captureElement('#app-loader').style.display = 'block';
                                        sendRequest({
                                            method: "POST",
                                            url: appHost + 'system/tracking/dbServerStatus',
                                            async: true,
                                            header: [{
                                                name: "Content-type",
                                                value: "application/json;charset=UTF-8"
                                            }],
                                            data: {
                                                security_code: 1,
                                                server: server.name,
                                                db: server.db,
                                                user: server.user,
                                                password: server.password,
                                            },
                                        }, function (response: any) {
                                            captureElement('#app-loader').style.display = 'none';
                                            showMessage(response, captureElement("#message"));
                                            console.log(response);
                                        });
                                    });*/
                                    viewBody.appendChild(viewBodyRow);
                                    let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                    viewBodyRowTd1.textContent = currentSLNum;
                                    viewBodyRow.appendChild(viewBodyRowTd1);
                                    let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                    viewBodyRowTd2.textContent = server.name;
                                    viewBodyRow.appendChild(viewBodyRowTd2);
                                    let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                    viewBodyRowTd3.textContent = server.user;
                                    viewBodyRow.appendChild(viewBodyRowTd3);
                                    let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                    viewBodyRowTd4.textContent = server.db;
                                    viewBodyRow.appendChild(viewBodyRowTd4);
                                    let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                    viewBodyRowTd5.textContent = server.password;
                                    viewBodyRow.appendChild(viewBodyRowTd5);
                                    let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                    viewBodyRow.appendChild(viewBodyRowTd6);
                                    let viewBodyRowTd6a0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-primary',
                                            }
                                        }]);
                                    viewBodyRowTd6a0.addEventListener('click', function () {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                        (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                            method: "POST",
                                            url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/dbConnectionTest',
                                            async: true,
                                            header: [{
                                                    name: "Content-type",
                                                    value: "application/json;charset=UTF-8"
                                                }],
                                            data: {
                                                security_code: 1,
                                                server: server.name,
                                                user: server.user,
                                                password: server.password,
                                                db: server.db,
                                            },
                                        }, function (response) {
                                            if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                                                if (JSON.parse(response).length !== 0) {
                                                    if (JSON.parse(response).message === 'connected') {
                                                        window.open(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/view/' + server.db, '_blank');
                                                    }
                                                }
                                            }
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                        });
                                    });
                                    viewBodyRowTd6.appendChild(viewBodyRowTd6a0);
                                    let viewBodyRowTd6a0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'i': {
                                                'class': 'fa fa-eye',
                                            }
                                        }]);
                                    viewBodyRowTd6a0.appendChild(viewBodyRowTd6a0i1);
                                    let viewBodyRowTd6a1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-success',
                                            }
                                        }]);
                                    viewBodyRowTd6a1.addEventListener('click', function () {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseEditMode').textContent = 'Edit';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').innerHTML = 'Update';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseID').value = server.id;
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseServer').value = server.name;
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseUser').value = server.user;
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseName').value = server.db;
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databasePassword').value = server.password;
                                    });
                                    viewBodyRowTd6.appendChild(viewBodyRowTd6a1);
                                    let viewBodyRowTd6a1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'i': {
                                                'class': 'fa fa-edit',
                                            }
                                        }]);
                                    viewBodyRowTd6a1.appendChild(viewBodyRowTd6a1i1);
                                    let viewBodyRowTd6a2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-danger',
                                            }
                                        }]);
                                    viewBodyRowTd6a2.addEventListener('click', function () {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                        (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                            method: "POST",
                                            url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteServerDatabase',
                                            async: true,
                                            header: [{
                                                    name: "Content-type",
                                                    value: "application/json;charset=UTF-8"
                                                }],
                                            data: {
                                                security_code: 1, id: server.id,
                                            },
                                        }, function (response) {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                        });
                                    });
                                    viewBodyRowTd6.appendChild(viewBodyRowTd6a2);
                                    let viewBodyRowTd6a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'i': {
                                                'class': 'fa fa-trash',
                                            }
                                        }]);
                                    viewBodyRowTd6a2.appendChild(viewBodyRowTd6a2i1);
                                });
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-data-body").appendChild(view);
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-data-body").style = 'padding:0;';
                            }
                            else {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-data-body").textContent = 'No database found';
                            }
                        }
                        else {
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                        }
                    }
                });
            }
            if (__url.indexOf('tracking/view') !== -1) {
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-tables') !== undefined) {
                    setInterval(function () {
                    }, 1000);
                    (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "GET",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/getTables/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#dbInfoDb").value,
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    }, function (response) {
                        if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                            if (JSON.parse(response).message === undefined) {
                                if (JSON.parse(response).length !== 0) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").textContent = '';
                                    let slNum = 1;
                                    let view = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed table-striped' } }]);
                                    let viewBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tbody': {} }]);
                                    view.appendChild(viewBody);
                                    /*old version*/
                                    /*JSON.parse(response).forEach(function (table: any) {
                                        let currentSLNum: any = slNum++;
                                        let viewBodyRow = createElement([{'tr': {}}]);
                                        viewBody.appendChild(viewBodyRow);

                                        let viewBodyRowTd1 = createElement([{'td': {}}]);
                                        viewBodyRowTd1.textContent = currentSLNum;
                                        viewBodyRow.appendChild(viewBodyRowTd1);

                                        let viewBodyRowTd2 = createElement([{'td': {}}]);
                                        let nname;
                                        viewBodyRowTd2.textContent = (nname = table.TABLE_NAME.replace('msu_', '').substr(0, 20), (nname.length > 19) ? nname + '...' : nname);
                                        viewBodyRow.appendChild(viewBodyRowTd2);

                                        let viewBodyRowTd3 = createElement([{'td': {}}]);
                                        viewBodyRowTd3.textContent = table.TABLE_ROWS;
                                        viewBodyRow.appendChild(viewBodyRowTd3);

                                        let viewBodyRowTd4 = createElement([{'td': {}}]);
                                        let nsize;
                                        viewBodyRowTd4.textContent = (table.Size > 1024) ? (nsize = (table.Size / 1024), (nsize > 1024) ? (nsize / 1024).toFixed(2) + ' MB' : nsize.toFixed(2) + ' KB') : table.Size.toFixed(2) + ' B';
                                        viewBodyRow.appendChild(viewBodyRowTd4);

                                        let viewBodyRowTd5 = createElement([{'td': {}}]);
                                        viewBodyRowTd5.textContent = table.CREATE_TIME.substr(0, 11);
                                        viewBodyRow.appendChild(viewBodyRowTd5);

                                        let viewBodyRowTd6 = createElement([{'td': {}}]);
                                        viewBodyRowTd6.textContent = (table.UPDATE_TIME !== null) ? table.UPDATE_TIME.substr(0, 11) : 'Not Updated';
                                        viewBodyRow.appendChild(viewBodyRowTd6);

                                        let viewBodyRowTd7 = createElement([{'td': {}}]);
                                        viewBodyRowTd7.textContent = table.TABLE_COLLATION.substr(0, 7);
                                        viewBodyRow.appendChild(viewBodyRowTd7);

                                        let viewBodyRowTd8 = createElement([{'td': {}}]);
                                        viewBodyRowTd8.textContent = table.ENGINE;
                                        viewBodyRow.appendChild(viewBodyRowTd8);

                                        let viewBodyRowTdn = createElement([{'td': {}}]);
                                        viewBodyRow.appendChild(viewBodyRowTdn);
                                        let viewBodyRowTdna0 = createElement([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-primary',
                                            }
                                        }]);
                                        viewBodyRowTdna0.addEventListener('click', function () {
                                            captureElement('#app-loader').style.display = 'block';
                                            sendRequest({
                                                method: "POST",
                                                url: appHost + 'system/tracking/dbConnectionTest',
                                                async: true,
                                                header: [{
                                                    name: "Content-type",
                                                    value: "application/json;charset=UTF-8"
                                                }],
                                                data: {
                                                    security_code: 1,
                                                    server: captureElement('#dbInfoServer').value,
                                                    user: captureElement('#dbInfoUser').value,
                                                    password: captureElement('#dbInfoPassword').value,
                                                    db: captureElement('#dbInfoDb').value,
                                                },
                                            }, function (response: any) {
                                                if (response.length !== 0 && IsJsonString(response)) {
                                                    if (JSON.parse(response).length !== 0) {
                                                        if (JSON.parse(response).message === 'connected') {
                                                            window.open(appHost + 'system/tracking/viewDbTable/' + captureElement('#dbInfoDb').value + '/' + table.TABLE_NAME.replace('msu_', ''), '_self');
                                                        }
                                                    }
                                                }
                                                captureElement('#app-loader').style.display = 'none';
                                                showMessage(response, captureElement("#message"));
                                            });
                                        });
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                        let viewBodyRowTdna0i1 = createElement([{
                                            'i': {
                                                'class': 'fa fa-eye',
                                            }
                                        }]);
                                        viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                        let viewBodyRowTdna1 = createElement([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-success',
                                            }
                                        }]);
                                        /!*viewBodyRowTdna1.addEventListener('click', function () {
                                            captureElement('#message2').innerHTML = '';
                                            captureElement('#modal01').style.display = 'block';
                                            captureElement('#databaseEditMode').textContent = 'Edit';
                                            captureElement('#database-data-btn').innerHTML = 'Update';
                                            captureElement('#databaseID').value = datatable.id;
                                            captureElement('#databaseServer').value = datatable.name;
                                            captureElement('#databaseUser').value = datatable.user;
                                            captureElement('#databaseName').value = datatable.db;
                                            captureElement('#databasePassword').value = datatable.password;
                                        });*!/
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                        let viewBodyRowTdna1i1 = createElement([{
                                            'i': {
                                                'class': 'fa fa-edit',
                                            }
                                        }]);
                                        viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                        let viewBodyRowTdna2 = createElement([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-danger',
                                            }
                                        }]);
                                        viewBodyRowTdna2.addEventListener('click', function () {
                                            captureElement('#app-loader').style.display = 'block';
                                            sendRequest({
                                                method: "POST",
                                                url: appHost + 'system/tracking/deleteTable',
                                                async: true,
                                                header: [{
                                                    name: "Content-type",
                                                    value: "application/json;charset=UTF-8"
                                                }],
                                                data: {
                                                    security_code: 1,
                                                    server: captureElement('#dbInfoServer').value,
                                                    db: captureElement('#dbInfoDb').value,
                                                    user: captureElement('#dbInfoUser').value,
                                                    password: captureElement('#dbInfoPassword').value,
                                                    table: table.TABLE_NAME.replace('msu_', ''),
                                                },
                                            }, function (response: any) {
                                                captureElement('#app-loader').style.display = 'none';
                                                showMessage(response, captureElement("#message"));
                                            });
                                        });
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                        let viewBodyRowTdna2i1 = createElement([{
                                            'i': {
                                                'class': 'fa fa-trash',
                                            }
                                        }]);
                                        viewBodyRowTdna2.appendChild(viewBodyRowTdna2i1);

                                    });*/
                                    /*new version*/
                                    JSON.parse(response).forEach(function (table) {
                                        let currentSLNum = slNum++;
                                        let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                        viewBody.appendChild(viewBodyRow);
                                        let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRowTd1.textContent = currentSLNum;
                                        viewBodyRow.appendChild(viewBodyRowTd1);
                                        let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        let nname;
                                        viewBodyRowTd2.textContent = (nname = table.Name.replace('msu_', '').substr(0, 20), (nname.length > 19) ? nname + '...' : nname);
                                        viewBodyRow.appendChild(viewBodyRowTd2);
                                        let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRowTd3.textContent = table.Rows;
                                        viewBodyRow.appendChild(viewBodyRowTd3);
                                        let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        let nsize;
                                        viewBodyRowTd4.textContent = (table.Data_length > 1024) ? (nsize = (table.Data_length / 1024), (nsize > 1024) ? (nsize / 1024).toFixed(2) + ' MB' : nsize.toFixed(2) + ' KB') : table.Data_length.toFixed(2) + ' B';
                                        viewBodyRow.appendChild(viewBodyRowTd4);
                                        let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRowTd5.textContent = table.Create_time.substr(0, 11);
                                        viewBodyRow.appendChild(viewBodyRowTd5);
                                        let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRowTd6.textContent = (table.Update_time !== null) ? table.Update_time.substr(0, 11) : 'Not Updated';
                                        viewBodyRow.appendChild(viewBodyRowTd6);
                                        let viewBodyRowTd7 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRowTd7.textContent = table.Collation.substr(0, 7);
                                        viewBodyRow.appendChild(viewBodyRowTd7);
                                        let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRowTd8.textContent = table.Engine;
                                        viewBodyRow.appendChild(viewBodyRowTd8);
                                        let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRow.appendChild(viewBodyRowTdn);
                                        let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                        viewBodyRowTdna0.addEventListener('click', function () {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                            (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                method: "POST",
                                                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/dbConnectionTest',
                                                async: true,
                                                header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                data: {
                                                    security_code: 1,
                                                    server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                    user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                    password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                    db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                },
                                            }, function (response) {
                                                if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                                                    if (JSON.parse(response).length !== 0) {
                                                        if (JSON.parse(response).message === 'connected') {
                                                            window.open(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/viewDbTable/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value + '/' + table.Name.replace('msu_', ''), '_self');
                                                        }
                                                    }
                                                }
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                            });
                                        });
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                        let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                        viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                        let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                        /*viewBodyRowTdna1.addEventListener('click', function () {
                                            captureElement('#message2').innerHTML = '';
                                            captureElement('#modal01').style.display = 'block';
                                            captureElement('#databaseEditMode').textContent = 'Edit';
                                            captureElement('#database-data-btn').innerHTML = 'Update';
                                            captureElement('#databaseID').value = datatable.id;
                                            captureElement('#databaseServer').value = datatable.name;
                                            captureElement('#databaseUser').value = datatable.user;
                                            captureElement('#databaseName').value = datatable.db;
                                            captureElement('#databasePassword').value = datatable.password;
                                        });*/
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                        let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                        viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                        let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                        viewBodyRowTdna2.addEventListener('click', function () {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                            (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                method: "POST",
                                                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTable',
                                                async: true,
                                                header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                data: {
                                                    security_code: 1,
                                                    server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                    db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                    user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                    password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                    table: table.TABLE_NAME.replace('msu_', ''),
                                                },
                                            }, function (response) {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                            });
                                        });
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                        let viewBodyRowTdna2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                        viewBodyRowTdna2.appendChild(viewBodyRowTdna2i1);
                                    });
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").appendChild(view);
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").style = 'padding:0;height: 420px;';
                                }
                                else {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").textContent = 'No table found';
                                }
                            }
                            else {
                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                            }
                        }
                    });
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable") !== undefined && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body") !== undefined) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#show-create-table').addEventListener('click', function () {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                        (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                            method: "POST",
                            url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/showCreateTable',
                            async: true,
                            header: [{
                                    name: "Content-type",
                                    value: "application/json;charset=UTF-8"
                                }],
                            data: {
                                security_code: 1,
                                server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                            },
                        }, function (response) {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response.replace(/\\n/g, ''), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                        });
                    });
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#rename-table').addEventListener('click', function () {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                        (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                            method: "POST",
                            url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/renameTable',
                            async: true,
                            header: [{
                                    name: "Content-type",
                                    value: "application/json;charset=UTF-8"
                                }],
                            data: {
                                security_code: 1,
                                server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                fromTable: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#fromTable').value,
                                toTable: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#toTable').value,
                            },
                        }, function (response) {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                        });
                    });
                    setInterval(function () {
                    }, 1000);
                    (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "GET",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/getTableData/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#dbInfoDb").value + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#runtimeTableName").value,
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    }, function (response) {
                        if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                            if (JSON.parse(response).message === undefined) {
                                if (JSON.parse(response).length !== 0) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").textContent = '';
                                    let slNum = 1;
                                    let view = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed table-striped' } }]);
                                    let viewBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tbody': {} }]);
                                    view.appendChild(viewBody);
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-app-databases') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.db;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.user;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.password;
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd6.textContent = datatable.last_updated_date_time;
                                            viewBodyRow.appendChild(viewBodyRowTd6);
                                            let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd8a0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTd8a0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a0);
                                            let viewBodyRowTd8a0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTd8a0.appendChild(viewBodyRowTd8a0i1);
                                            let viewBodyRowTd8a1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTd8a1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a1);
                                            let viewBodyRowTd8a1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTd8a1.appendChild(viewBodyRowTd8a1i1);
                                            let viewBodyRowTd8a2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTd8a2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTd8a2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-app-licence-payment') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.user_id;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.app_id;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.payment_method_id.substr(0, 10) + '...';
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd6.textContent = datatable.token.substr(0, 10) + '...';
                                            viewBodyRow.appendChild(viewBodyRowTd6);
                                            let viewBodyRowTd7 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7.textContent = datatable.payment_amount;
                                            viewBodyRow.appendChild(viewBodyRowTd7);
                                            let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd8.textContent = datatable.currency;
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd9 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd9.textContent = datatable.payment_type;
                                            viewBodyRow.appendChild(viewBodyRowTd9);
                                            let viewBodyRowTd10 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd10.textContent = datatable.payment_method.substr(0, 10) + '...';
                                            viewBodyRow.appendChild(viewBodyRowTd10);
                                            let viewBodyRowTd11 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd11.textContent = datatable.payment_date_time;
                                            viewBodyRow.appendChild(viewBodyRowTd11);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-app-social-links') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.link;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-apps') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.app_name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.app_category;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.app_url;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.app_icon;
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd6.textContent = datatable.app_status;
                                            viewBodyRow.appendChild(viewBodyRowTd6);
                                            let viewBodyRowTd7 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7.textContent = datatable.c_status;
                                            viewBodyRow.appendChild(viewBodyRowTd7);
                                            let viewBodyRowTd7n = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7n.textContent = datatable.quickAccess;
                                            viewBodyRow.appendChild(viewBodyRowTd7n);
                                            let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd8a0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTd8a0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a0);
                                            let viewBodyRowTd8a0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTd8a0.appendChild(viewBodyRowTd8a0i1);
                                            let viewBodyRowTd8a1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTd8a1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a1);
                                            let viewBodyRowTd8a1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTd8a1.appendChild(viewBodyRowTd8a1i1);
                                            let viewBodyRowTd8a2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTd8a2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTd8a2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-apps-status') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.version;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.os_version.substr(0, 19);
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd6.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(viewBodyRowTd6);
                                            let viewBodyRowTd7 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7.textContent = datatable.status;
                                            viewBodyRow.appendChild(viewBodyRowTd7);
                                            let viewBodyRowTd7n = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7n.textContent = datatable.created_date_time /*.substr(0, 10)*/;
                                            viewBodyRow.appendChild(viewBodyRowTd7n);
                                            let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd8a0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTd8a0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a0);
                                            let viewBodyRowTd8a0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTd8a0.appendChild(viewBodyRowTd8a0i1);
                                            let viewBodyRowTd8a1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTd8a1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a1);
                                            let viewBodyRowTd8a1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTd8a1.appendChild(viewBodyRowTd8a1i1);
                                            let viewBodyRowTd8a2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTd8a2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTd8a2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-apps-licences') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.client_id;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.app_id;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd6.textContent = datatable.licence_type;
                                            viewBodyRow.appendChild(viewBodyRowTd6);
                                            let viewBodyRowTd7 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7.textContent = datatable.lLimit;
                                            viewBodyRow.appendChild(viewBodyRowTd7);
                                            let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd8.textContent = datatable.lLimitBase;
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd9 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd9.textContent = datatable.issue.substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd9);
                                            let viewBodyRowTd10 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd10.textContent = datatable.lupdate.substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd10);
                                            let viewBodyRowTd11 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd11.textContent = datatable.lnextupdate.substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd11);
                                            let viewBodyRowTd12 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd12.textContent = datatable.expire.substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd12);
                                            let viewBodyRowTd13 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd13.textContent = datatable['created-date-time'].substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd13);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-apps-list-installed') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.version;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd6.textContent = (datatable.licence_key !== null) ? '***************' : 'NOT ISSUED';
                                            viewBodyRow.appendChild(viewBodyRowTd6);
                                            let viewBodyRowTd7 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7.textContent = (datatable.issue !== null) ? datatable.issue.substr(0, 10) : 'NOT ISSUED';
                                            viewBodyRow.appendChild(viewBodyRowTd7);
                                            let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd8.textContent = (datatable.expire !== null) ? datatable.expire.substr(0, 10) : 'NOT ISSUED';
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd9 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd9.textContent = datatable['created-date-time'].substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd9);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-block-list') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.ip;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-branches') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.status;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.location;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-branches-user') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.branch;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.user;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-chat-messages') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.senderID;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.receiverID;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.message;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.time;
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-client-browser-info') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let ip_address = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            ip_address.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(ip_address);
                                            let browserNameFull = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            browserNameFull.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(browserNameFull);
                                            /*let browserStatus = createElement([{'td': {}}]);
                                            browserStatus.textContent = datatable.browserStatus;
                                            viewBodyRow.appendChild(browserStatus);*/
                                            /*let browserArchitecture = createElement([{'td': {}}]);
                                            browserArchitecture.textContent = datatable.browserArchitecture;
                                            viewBodyRow.appendChild(browserArchitecture);*/
                                            /*let browserAppVersion = createElement([{'td': {}}]);
                                            browserAppVersion.textContent = datatable.browserAppVersion;
                                            viewBodyRow.appendChild(browserAppVersion);*/
                                            let deviceHardwareConcurrency = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            deviceHardwareConcurrency.textContent = datatable.deviceHardwareConcurrency;
                                            viewBodyRow.appendChild(deviceHardwareConcurrency);
                                            /*
                                                                                        let deviceMemory = createElement([{'td': {}}]);
                                                                                        deviceMemory.textContent = datatable.deviceMemory;
                                                                                        viewBodyRow.appendChild(deviceMemory);*/
                                            let deviceName = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            deviceName.textContent = datatable.deviceName;
                                            viewBodyRow.appendChild(deviceName);
                                            let deviceScreenWidth = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            deviceScreenWidth.textContent = datatable.deviceScreenWidth;
                                            viewBodyRow.appendChild(deviceScreenWidth);
                                            let deviceScreenHeight = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            deviceScreenHeight.textContent = datatable.deviceScreenHeight;
                                            viewBodyRow.appendChild(deviceScreenHeight);
                                            let userAgent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': { 'style': 'cursor:pointer' } }]);
                                            userAgent.textContent = '*****';
                                            userAgent.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable.userAgent), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRow.appendChild(userAgent);
                                            let created_date_time = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            created_date_time.textContent = datatable.created_date_time;
                                            viewBodyRow.appendChild(created_date_time);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-client-ip-info') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            /*

                                                {"id":769,"ip_address":"103.230.105.19","is_eu":"","city":"Dhaka","region":"Dhaka Division","region_code":"C","country_name":"Bangladesh",
                                                    "country_code":"BD","continent_name":"Asia","continent_code":"AS","latitude":"23.8175","longitude":"90.4096","postal":"1206",
                                                    "calling_code":"880","flag":"https://ipdata.co/flags/bd.png","emoji_flag":"🇧🇩","emoji_unicode":"U+1F1E7 U+1F1E9","asn_asn":"AS45925",
                                                    "asn_name":"ASN For Teletalk Bangladesh Ltd.","asn_domain":"teletalk.com.bd","asn_route":"103.230.105.0/24","asn_type":"isp",
                                                    "languages_name":"Bengali,","languages_native":"বাংলা,","currency_name":"Bangladeshi Taka","currency_code":"BDT","currency_symbol":"Tk",
                                                    "currency_native":"৳","currency_plural":"Bangladeshi takas","time_zone_name":"Asia/Dhaka","time_zone_abbr":"+06","time_zone_offset":"+0600",
                                                    "time_zone_is_dst":"","time_zone_current_time":"2020-07-07T13:13:24.904182+06:00","created_date_time":"2020-07-07 13:13:25"}

                                            */
                                            let ip_address = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            ip_address.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(ip_address);
                                            let city = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            city.textContent = datatable.city;
                                            viewBodyRow.appendChild(city);
                                            let country_name = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            country_name.textContent = datatable.country_name;
                                            viewBodyRow.appendChild(country_name);
                                            let continent_name = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            continent_name.textContent = datatable.continent_name;
                                            viewBodyRow.appendChild(continent_name);
                                            let location = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(location);
                                            let maplink = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'https://www.google.com/maps/@' + datatable.latitude + ',' + datatable.longitude + ',19z',
                                                        'class': 'link',
                                                    }
                                                }]);
                                            location.appendChild(maplink);
                                            let maplinkIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'img': {
                                                        'src': _db_app__WEBPACK_IMPORTED_MODULE_0__.app.content.folder.images + 'map-pin-marker-circle.svg',
                                                        'style': 'width:20px;height:20px;'
                                                    }
                                                }]);
                                            maplink.appendChild(maplinkIcon);
                                            let postal = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            postal.textContent = datatable.postal;
                                            viewBodyRow.appendChild(postal);
                                            let calling_code = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            calling_code.textContent = datatable.calling_code;
                                            viewBodyRow.appendChild(calling_code);
                                            let emoji_flag = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            emoji_flag.textContent = datatable.emoji_flag;
                                            viewBodyRow.appendChild(emoji_flag);
                                            let asn_asn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            asn_asn.textContent = datatable.asn_asn;
                                            viewBodyRow.appendChild(asn_asn);
                                            let asn_domain = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(asn_domain);
                                            let asnDomainLink = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'https://' + datatable.asn_domain,
                                                        'class': 'link',
                                                    }
                                                }]);
                                            asn_domain.appendChild(asnDomainLink);
                                            let asnDomainLinkIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'img': {
                                                        'src': _db_app__WEBPACK_IMPORTED_MODULE_0__.app.content.folder.images + 'navigation.svg',
                                                        'style': 'width:20px;height:20px;'
                                                    }
                                                }]);
                                            asnDomainLink.appendChild(asnDomainLinkIcon);
                                            let languages_name = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            languages_name.textContent = datatable.languages_name;
                                            viewBodyRow.appendChild(languages_name);
                                            let time_zone_abbr = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            time_zone_abbr.textContent = datatable.time_zone_abbr;
                                            viewBodyRow.appendChild(time_zone_abbr);
                                            let created_date_time = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            created_date_time.textContent = datatable.created_date_time.substr(2, 8);
                                            viewBodyRow.appendChild(created_date_time);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-client-update-info') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let name = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            name.textContent = datatable.name;
                                            viewBodyRow.appendChild(name);
                                            let version = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            version.textContent = datatable.version;
                                            viewBodyRow.appendChild(version);
                                            let ip_address = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            ip_address.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(ip_address);
                                            let browserNameFull = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            browserNameFull.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(browserNameFull);
                                            let message = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            message.textContent = datatable.message;
                                            viewBodyRow.appendChild(message);
                                            let created_date_time = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            created_date_time.textContent = datatable.created_date_time;
                                            viewBodyRow.appendChild(created_date_time);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").appendChild(view);
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").style = (JSON.parse(response).length > 10) ? 'padding:0;height: 420px;' : 'padding:0;';
                                }
                                else {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").textContent = 'No data found';
                                }
                            }
                            else {
                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                            }
                        }
                    });
                    /*
                                        if (captureElement('#databaseEditMode')) {
                                            captureElement('#database-data-btn').innerHTML = 'Save';
                                            captureElement('#database-reset-btn').innerHTML = 'Reset';
                                        }
                                        captureElement('#server-db-add-btn').addEventListener('click', function () {
                                            captureElement('#message2').innerHTML = '';
                                            captureElement('#modal01').style.display = 'block';
                                            captureElement('#databaseEditMode').innerHTML = 'Add new';
                                            captureElement('#databaseID').value = '';
                                            captureElement('#databaseServer').value = '';
                                            captureElement('#databaseUser').value = '';
                                            captureElement('#databaseName').value = '';
                                            captureElement('#databasePassword').value = '';
                                        });

                                        //save data by clicking data button
                                        captureElement('#database-data-btn').addEventListener('click', function () {
                                            sendRequest({
                                                method: "POST",
                                                url: appHost + 'system/tracking/manageServerDatabase',
                                                async: true,
                                                header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                                                data: {
                                                    security_code: 1,
                                                    id: captureElement('#databaseID').value,
                                                    name: captureElement('#databaseServer').value,
                                                    user: captureElement('#databaseUser').value,
                                                    db: captureElement('#databaseName').value,
                                                    password: captureElement('#databasePassword').value,
                                                    btnName: captureElement('#database-data-btn').textContent
                                                },
                                            }, function (response: any) {
                                                captureElement('#database-data-btn').textContent = captureElement('#database-data-btn').textContent + 'd';
                                                setTimeout(function () {
                                                    captureElement('#database-data-btn').textContent = captureElement('#database-data-btn').textContent.slice(0, -1);
                                                }, 2000);
                                                showMessage(response, captureElement("#message2"));
                                            });
                                        });*/
                }
            }
        }
        if (__url.indexOf('webapp') !== -1) {
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#webapp-data-table") !== undefined) {
                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/getWebAppInfo',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                }, function (response) {
                    if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                        if (JSON.parse(response).length !== 0) {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#webapp-data-table").textContent = '';
                            JSON.parse(response).forEach(function (webapp) {
                                /*let favLocalLocate = webapp.icon_local_dir;*/
                                let editor = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-edit-btn');
                                editor.setAttribute('data-id', webapp.id);
                                editor.setAttribute('data-name', webapp.name);
                                editor.setAttribute('data-description', webapp.description);
                                editor.setAttribute('data-company', webapp.company);
                                editor.setAttribute('data-filesLocate', webapp.doc_root);
                                editor.setAttribute('data-domainLocate', webapp.http_host_add);
                                editor.setAttribute('data-IPLocate', webapp.http_host_ip);
                                let web_app_info_box = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'web-app-info-box' } }]);
                                let web_app_info_box_nav = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'web-app-info-box-nav' } }]);
                                web_app_info_box.appendChild(web_app_info_box_nav);
                                let ul = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'ul': {} }]);
                                web_app_info_box_nav.appendChild(ul);
                                let li_overview = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'li': {
                                            'id': 'overview',
                                            'style': 'background: #93c'
                                        }
                                    }]);
                                li_overview.innerHTML = '<i class="fas fa-eye"></i><span>Overview</span>';
                                ul.appendChild(li_overview);
                                let li_basicInfo = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'li': { 'id': 'basicInfo' } }]);
                                li_basicInfo.innerHTML = '<i class="fab fa-app-store-ios"></i><span>Basic Info</span>';
                                ul.appendChild(li_basicInfo);
                                let li_databaseInfo = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'li': { 'id': 'databaseInfo' } }]);
                                li_databaseInfo.innerHTML = '<i class="fas fa-database"></i><span>Databases Info</span>';
                                ul.appendChild(li_databaseInfo);
                                let li_filesInfo = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'li': { 'id': 'filesInfo' } }]);
                                li_filesInfo.innerHTML = '<i class="fas fa-file-alt"></i><span>Files Info</span>';
                                ul.appendChild(li_filesInfo);
                                let li_mediaInfo = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'li': { 'id': 'mediaInfo' } }]);
                                li_mediaInfo.innerHTML = '<i class="fas fa-file-image"></i><span>Media Info</span>';
                                ul.appendChild(li_mediaInfo);
                                let li_socialInfo = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'li': { 'id': 'socialInfo' } }]);
                                li_socialInfo.innerHTML = '<i class="fas fa-user-friends"></i><span>Social Info</span>';
                                ul.appendChild(li_socialInfo);
                                let web_app_info_box_content = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'web-app-info-box-content' } }]);
                                web_app_info_box.appendChild(web_app_info_box_content);
                                let web_app_info_box_content_overview = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'web-app-info-content-overview',
                                            'id': 'web-app-info-content-overview'
                                        }
                                    }]);
                                web_app_info_box_content.appendChild(web_app_info_box_content_overview);
                                let content_overview_table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'table': {
                                            'class': 'table',
                                            'style': 'text-align: center;'
                                        }
                                    }]);
                                web_app_info_box_content_overview.appendChild(content_overview_table);
                                let content_overview_table_tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_overview_table.appendChild(content_overview_table_tr1);
                                let content_overview_table_tr1_td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_overview_table_tr1.appendChild(content_overview_table_tr1_td);
                                let content_overview_table_tr1_favicon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'img': {
                                            'alt': 'Favicon',
                                            'src': webapp.icon_remote_dir + webapp.favicon,
                                            'style': 'width: 100px;height: 100px;'
                                        }
                                    }]);
                                content_overview_table_tr1_td.appendChild(content_overview_table_tr1_favicon);
                                let content_overview_table_tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_overview_table.appendChild(content_overview_table_tr2);
                                let content_overview_table_tr2_td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_overview_table_tr2.appendChild(content_overview_table_tr2_td);
                                let content_overview_table_tr2_webapp_name = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'a': {
                                            'href': webapp.http_host_add,
                                            'target': '_blank'
                                        }
                                    }]);
                                content_overview_table_tr2_webapp_name.textContent = webapp.name;
                                content_overview_table_tr2_td.appendChild(content_overview_table_tr2_webapp_name);
                                let content_overview_table_tr21 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_overview_table.appendChild(content_overview_table_tr21);
                                let content_overview_table_tr21_td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_overview_table_tr21.appendChild(content_overview_table_tr21_td);
                                let content_overview_table_tr21_webapp_company = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'a': {
                                            'href': _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost,
                                            'target': '_blank'
                                        }
                                    }]);
                                content_overview_table_tr21_webapp_company.textContent = webapp.company;
                                content_overview_table_tr21_td.appendChild(content_overview_table_tr21_webapp_company);
                                let content_overview_table_tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_overview_table.appendChild(content_overview_table_tr3);
                                let content_overview_table_tr3_td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_overview_table_tr3.appendChild(content_overview_table_tr3_td);
                                let content_overview_table_tr3_social_icons = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'socials-wrap',
                                            'style': 'margin-top: 2px;width:100%'
                                        }
                                    }]);
                                content_overview_table_tr3_td.appendChild(content_overview_table_tr3_social_icons);
                                let content_overview_table_tr3_social_icons_ul = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'ul': { 'id': 'web-app-social-links-icon' } }]);
                                content_overview_table_tr3_social_icons.appendChild(content_overview_table_tr3_social_icons_ul);
                                let web_app_info_box_content_basic = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'web-app-info-content-basic',
                                            'id': 'web-app-info-content-basic'
                                        }
                                    }]);
                                web_app_info_box_content_basic.innerHTML = 'Basic Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_basic);
                                let content_basic_table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed' } }]);
                                web_app_info_box_content_basic.appendChild(content_basic_table);
                                let content_basic_table_tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_basic_table.appendChild(content_basic_table_tr1);
                                let content_basic_table_tr1_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr1_td1.textContent = 'Name';
                                content_basic_table_tr1.appendChild(content_basic_table_tr1_td1);
                                let content_basic_table_tr1_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr1_td2.textContent = ':';
                                content_basic_table_tr1.appendChild(content_basic_table_tr1_td2);
                                let content_basic_table_tr1_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr1_td3.textContent = webapp.name;
                                content_basic_table_tr1.appendChild(content_basic_table_tr1_td3);
                                let content_basic_table_tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_basic_table.appendChild(content_basic_table_tr2);
                                let content_basic_table_tr2_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr2_td1.textContent = 'Company';
                                content_basic_table_tr2.appendChild(content_basic_table_tr2_td1);
                                let content_basic_table_tr2_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr2_td2.textContent = ':';
                                content_basic_table_tr2.appendChild(content_basic_table_tr2_td2);
                                let content_basic_table_tr2_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr2_td3.textContent = webapp.company;
                                content_basic_table_tr2.appendChild(content_basic_table_tr2_td3);
                                let content_basic_table_tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_basic_table.appendChild(content_basic_table_tr3);
                                let content_basic_table_tr3_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr3_td1.textContent = 'Description';
                                content_basic_table_tr3.appendChild(content_basic_table_tr3_td1);
                                let content_basic_table_tr3_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr3_td2.textContent = ':';
                                content_basic_table_tr3.appendChild(content_basic_table_tr3_td2);
                                let content_basic_table_tr3_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr3_td3.textContent = webapp.description;
                                content_basic_table_tr3.appendChild(content_basic_table_tr3_td3);
                                let web_app_info_box_content_database = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'web-app-info-content-database',
                                            'id': 'web-app-info-content-database',
                                            'style': 'overflow: scroll;height: 600px;',
                                        }
                                    }]);
                                web_app_info_box_content_database.innerHTML = 'Databases Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_database);
                                let content_database_table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed' } }]);
                                web_app_info_box_content_database.appendChild(content_database_table);
                                let content_database_table_thead = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'thead': {} }]);
                                let content_database_table_tfoot = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tfoot': {} }]);
                                content_database_table.appendChild(content_database_table_thead);
                                content_database_table.appendChild(content_database_table_tfoot);
                                let content_database_table_tr1_head = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                let content_database_table_tr2_foot = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_database_table_thead.appendChild(content_database_table_tr1_head);
                                content_database_table_tfoot.appendChild(content_database_table_tr2_foot);
                                let content_database_table_tr1_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_database_table_tr1_td1.textContent = 'SL';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td1);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td1.cloneNode(true));
                                let content_database_table_tr1_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_database_table_tr1_td2.textContent = 'NAME';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td2.cloneNode(true));
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td2);
                                let content_database_table_tr1_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_database_table_tr1_td3.textContent = 'CREATE TIME';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td3);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td3.cloneNode(true));
                                let content_database_table_tr1_td4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_database_table_tr1_td4.textContent = 'UPDATE TIME';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td4);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td4.cloneNode(true));
                                let content_database_table_tr1_td5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_database_table_tr1_td5.textContent = 'COLLATION';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td5);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td5.cloneNode(true));
                                let content_database_table_tr1_td6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_database_table_tr1_td6.textContent = 'ENGINE';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td6);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td6.cloneNode(true));
                                let content_database_table_tbody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tbody': { 'id': 'web-app-tables' } }]);
                                content_database_table.appendChild(content_database_table_tbody);
                                let content_database_table_tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_database_table_tbody.appendChild(content_database_table_tr2);
                                let content_database_table_tr2_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'td': {
                                            'colspan': '7',
                                            'style': 'text-align: center !important;text-transform: none;'
                                        }
                                    }]);
                                content_database_table_tr2_td1.textContent = 'Data loading...';
                                content_database_table_tr2.appendChild(content_database_table_tr2_td1);
                                content_database_table.appendChild(content_database_table_tfoot);
                                let web_app_info_box_content_files = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'web-app-info-content-files',
                                            'id': 'web-app-info-content-files'
                                        }
                                    }]);
                                web_app_info_box_content_files.innerHTML = 'Files Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_files);
                                let content_files_table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed' } }]);
                                web_app_info_box_content_files.appendChild(content_files_table);
                                let content_files_table_tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_files_table.appendChild(content_files_table_tr1);
                                let content_files_table_tr1_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr1_td1.textContent = 'Root Directory';
                                content_files_table_tr1.appendChild(content_files_table_tr1_td1);
                                let content_files_table_tr1_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr1_td2.textContent = ':';
                                content_files_table_tr1.appendChild(content_files_table_tr1_td2);
                                let content_files_table_tr1_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr1_td3.textContent = webapp.doc_root;
                                content_files_table_tr1.appendChild(content_files_table_tr1_td3);
                                let content_files_table_tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_files_table.appendChild(content_files_table_tr2);
                                let content_files_table_tr2_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr2_td1.textContent = 'Domain';
                                content_files_table_tr2.appendChild(content_files_table_tr2_td1);
                                let content_files_table_tr2_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr2_td2.textContent = ':';
                                content_files_table_tr2.appendChild(content_files_table_tr2_td2);
                                let content_files_table_tr2_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr2_td3.textContent = webapp.http_host_add;
                                content_files_table_tr2.appendChild(content_files_table_tr2_td3);
                                let content_files_table_tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_files_table.appendChild(content_files_table_tr3);
                                let content_files_table_tr3_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr3_td1.textContent = 'IP';
                                content_files_table_tr3.appendChild(content_files_table_tr3_td1);
                                let content_files_table_tr3_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr3_td2.textContent = ':';
                                content_files_table_tr3.appendChild(content_files_table_tr3_td2);
                                let content_files_table_tr3_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr3_td3.textContent = webapp.http_host_ip;
                                content_files_table_tr3.appendChild(content_files_table_tr3_td3);
                                let content_files_table_tr4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_files_table.appendChild(content_files_table_tr4);
                                let content_files_table_tr4_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr4_td1.textContent = 'Favicon';
                                content_files_table_tr4.appendChild(content_files_table_tr4_td1);
                                let content_files_table_tr4_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr4_td2.textContent = ':';
                                content_files_table_tr4.appendChild(content_files_table_tr4_td2);
                                let content_files_table_tr4_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr4_td3.textContent = webapp.icon_remote_dir;
                                content_files_table_tr4.appendChild(content_files_table_tr4_td3);
                                let web_app_info_box_content_media = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'web-app-info-content-media',
                                            'id': 'web-app-info-content-media'
                                        }
                                    }]);
                                web_app_info_box_content_media.innerHTML = 'Media Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_media);
                                let content_media_table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed' } }]);
                                web_app_info_box_content_media.appendChild(content_media_table);
                                let content_media_table_tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_media_table.appendChild(content_media_table_tr1);
                                let content_media_table_tr1_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr1_td1.textContent = 'Theme';
                                content_media_table_tr1.appendChild(content_media_table_tr1_td1);
                                let content_media_table_tr1_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr1_td2.textContent = ':';
                                content_media_table_tr1.appendChild(content_media_table_tr1_td2);
                                let content_media_table_tr1_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr1_td3.textContent = webapp.default_layout;
                                content_media_table_tr1.appendChild(content_media_table_tr1_td3);
                                let content_media_table_tr1_td4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': { 'rowspan': '3' } }]);
                                content_media_table_tr1.appendChild(content_media_table_tr1_td4);
                                let content_media_table_tr1_td4_favicon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'img': {
                                            'alt': 'Favicon',
                                            'src': webapp.icon_remote_dir + webapp.favicon,
                                            'style': 'width: 100px;height: 100px;'
                                        }
                                    }]);
                                content_media_table_tr1_td4.appendChild(content_media_table_tr1_td4_favicon);
                                let content_media_table_tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_media_table.appendChild(content_media_table_tr2);
                                let content_media_table_tr2_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr2_td1.textContent = 'Favicon';
                                content_media_table_tr2.appendChild(content_media_table_tr2_td1);
                                let content_media_table_tr2_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr2_td2.textContent = ':';
                                content_media_table_tr2.appendChild(content_media_table_tr2_td2);
                                let content_media_table_tr2_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr2_td3.textContent = webapp.favicon;
                                content_media_table_tr2.appendChild(content_media_table_tr2_td3);
                                let content_media_table_tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_media_table.appendChild(content_media_table_tr3);
                                let content_media_table_tr3_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr3.appendChild(content_media_table_tr3_td1);
                                let content_media_table_tr3_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr3.appendChild(content_media_table_tr3_td2);
                                let content_media_table_tr3_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr3.appendChild(content_media_table_tr3_td3);
                                let web_app_info_box_content_social = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'web-app-info-content-social',
                                            'id': 'web-app-info-content-social'
                                        }
                                    }]);
                                web_app_info_box_content_social.innerHTML = 'Social Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_social);
                                let content_social_table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'table': {
                                            'id': 'web-app-social-links',
                                            'class': 'table table-bottom-border-only table-condensed'
                                        }
                                    }]);
                                web_app_info_box_content_social.appendChild(content_social_table);
                                let content_social_table_tbody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tbody': { 'id': 'web-app-social-links-view-data' } }]);
                                content_social_table.appendChild(content_social_table_tbody);
                                let content_social_table_tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_social_table_tbody.appendChild(content_social_table_tr1);
                                let content_social_table_tr1_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'td': {
                                            'colspan': '3',
                                            'style': 'text-align: center !important;text-transform: none;'
                                        }
                                    }]);
                                content_social_table_tr1_td1.textContent = 'Data loading...';
                                content_social_table_tr1.appendChild(content_social_table_tr1_td1);
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#webapp-data-table").appendChild(web_app_info_box);
                            });
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#overview').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    { 'id': 'basicInfo', 'attribute': 'style' },
                                    { 'id': 'databaseInfo', 'attribute': 'style' },
                                    { 'id': 'filesInfo', 'attribute': 'style' },
                                    { 'id': 'mediaInfo', 'attribute': 'style' },
                                    { 'id': 'socialInfo', 'attribute': 'style' },
                                ]);
                                changeElementDisplayById([
                                    { 'id': 'web-app-info-content-overview', 'display': 'block' },
                                    { 'id': 'web-app-info-content-basic', 'display': 'none' },
                                    { 'id': 'web-app-info-content-database', 'display': 'none' },
                                    { 'id': 'web-app-info-content-files', 'display': 'none' },
                                    { 'id': 'web-app-info-content-media', 'display': 'none' },
                                    { 'id': 'web-app-info-content-social', 'display': 'none' },
                                ]);
                            });
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#basicInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    { 'id': 'overview', 'attribute': 'style' },
                                    { 'id': 'databaseInfo', 'attribute': 'style' },
                                    { 'id': 'filesInfo', 'attribute': 'style' },
                                    { 'id': 'mediaInfo', 'attribute': 'style' },
                                    { 'id': 'socialInfo', 'attribute': 'style' },
                                ]);
                                changeElementDisplayById([
                                    { 'id': 'web-app-info-content-overview', 'display': 'none' },
                                    { 'id': 'web-app-info-content-basic', 'display': 'block' },
                                    { 'id': 'web-app-info-content-database', 'display': 'none' },
                                    { 'id': 'web-app-info-content-files', 'display': 'none' },
                                    { 'id': 'web-app-info-content-media', 'display': 'none' },
                                    { 'id': 'web-app-info-content-social', 'display': 'none' },
                                ]);
                            });
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    { 'id': 'overview', 'attribute': 'style' },
                                    { 'id': 'basicInfo', 'attribute': 'style' },
                                    { 'id': 'filesInfo', 'attribute': 'style' },
                                    { 'id': 'mediaInfo', 'attribute': 'style' },
                                    { 'id': 'socialInfo', 'attribute': 'style' },
                                ]);
                                changeElementDisplayById([
                                    { 'id': 'web-app-info-content-overview', 'display': 'none' },
                                    { 'id': 'web-app-info-content-basic', 'display': 'none' },
                                    { 'id': 'web-app-info-content-database', 'display': 'block' },
                                    { 'id': 'web-app-info-content-files', 'display': 'none' },
                                    { 'id': 'web-app-info-content-media', 'display': 'none' },
                                    { 'id': 'web-app-info-content-social', 'display': 'none' },
                                ]);
                            });
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#filesInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    { 'id': 'overview', 'attribute': 'style' },
                                    { 'id': 'basicInfo', 'attribute': 'style' },
                                    { 'id': 'databaseInfo', 'attribute': 'style' },
                                    { 'id': 'mediaInfo', 'attribute': 'style' },
                                    { 'id': 'socialInfo', 'attribute': 'style' },
                                ]);
                                changeElementDisplayById([
                                    { 'id': 'web-app-info-content-overview', 'display': 'none' },
                                    { 'id': 'web-app-info-content-basic', 'display': 'none' },
                                    { 'id': 'web-app-info-content-database', 'display': 'none' },
                                    { 'id': 'web-app-info-content-files', 'display': 'block' },
                                    { 'id': 'web-app-info-content-media', 'display': 'none' },
                                    { 'id': 'web-app-info-content-social', 'display': 'none' },
                                ]);
                            });
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#mediaInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    { 'id': 'overview', 'attribute': 'style' },
                                    { 'id': 'basicInfo', 'attribute': 'style' },
                                    { 'id': 'databaseInfo', 'attribute': 'style' },
                                    { 'id': 'filesInfo', 'attribute': 'style' },
                                    { 'id': 'socialInfo', 'attribute': 'style' },
                                ]);
                                changeElementDisplayById([
                                    { 'id': 'web-app-info-content-overview', 'display': 'none' },
                                    { 'id': 'web-app-info-content-basic', 'display': 'none' },
                                    { 'id': 'web-app-info-content-database', 'display': 'none' },
                                    { 'id': 'web-app-info-content-files', 'display': 'none' },
                                    { 'id': 'web-app-info-content-media', 'display': 'block' },
                                    { 'id': 'web-app-info-content-social', 'display': 'none' },
                                ]);
                            });
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#socialInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    { 'id': 'overview', 'attribute': 'style' },
                                    { 'id': 'basicInfo', 'attribute': 'style' },
                                    { 'id': 'databaseInfo', 'attribute': 'style' },
                                    { 'id': 'filesInfo', 'attribute': 'style' },
                                    { 'id': 'mediaInfo', 'attribute': 'style' },
                                ]);
                                changeElementDisplayById([
                                    { 'id': 'web-app-info-content-overview', 'display': 'none' },
                                    { 'id': 'web-app-info-content-basic', 'display': 'none' },
                                    { 'id': 'web-app-info-content-database', 'display': 'none' },
                                    { 'id': 'web-app-info-content-files', 'display': 'none' },
                                    { 'id': 'web-app-info-content-media', 'display': 'none' },
                                    { 'id': 'web-app-info-content-social', 'display': 'block' },
                                ]);
                            });
                            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-tables") !== undefined) {
                                setInterval(function () {
                                }, 1000);
                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                    method: "POST",
                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/getWebAppTables',
                                    async: true,
                                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                }, function (response) {
                                    if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                                        if (JSON.parse(response).length !== 0) {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-tables").textContent = '';
                                            let sl = 1;
                                            JSON.parse(response).forEach(function (webapptable) {
                                                let currentSl = sl++;
                                                const tr = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                                const td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                td1.textContent = currentSl;
                                                tr.appendChild(td1);
                                                const td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                td2.textContent = webapptable.TABLE_NAME.replace('msu_', '');
                                                tr.appendChild(td2);
                                                const td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                td3.textContent = webapptable.CREATE_TIME.substr(0, 10);
                                                tr.appendChild(td3);
                                                const td4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                td4.textContent = (webapptable.UPDATE_TIME !== null) ? webapptable.UPDATE_TIME.substr(0, 11) : 'Not Updated';
                                                tr.appendChild(td4);
                                                const td5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                td5.textContent = webapptable.TABLE_COLLATION.substr(0, 7);
                                                tr.appendChild(td5);
                                                const td6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                td6.textContent = webapptable.ENGINE;
                                                tr.appendChild(td6);
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-tables").appendChild(tr);
                                            });
                                        }
                                        else {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-tables").textContent = '';
                                            const tr = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            const td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'td': {
                                                        'class': 'text-align-center',
                                                    }
                                                }]);
                                            td.textContent = 'No table exists.';
                                            tr.appendChild(td);
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-tables").appendChild(tr);
                                        }
                                    }
                                });
                            }
                            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-view-data") !== undefined) {
                                setInterval(function () {
                                }, 1000);
                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                    method: "POST",
                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/getWebAppSocialLinks',
                                    async: true,
                                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                }, function (response) {
                                    if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                                        if (JSON.parse(response).length !== 0) {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-view-data").textContent = '';
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-edit-data").textContent = '';
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-icon").textContent = '';
                                            let slNum = 1;
                                            JSON.parse(response).forEach(function (socialLink) {
                                                let currentSlNum = slNum++;
                                                const t1tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                                const t1td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t1td1.textContent = socialLink.name[0].toUpperCase() + socialLink.name.slice(1);
                                                t1tr1.appendChild(t1td1);
                                                const t1td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t1td2.textContent = ':';
                                                t1tr1.appendChild(t1td2);
                                                const t1td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t1td3.textContent = socialLink.link;
                                                t1tr1.appendChild(t1td3);
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-view-data").appendChild(t1tr1);
                                                const t2tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                                const t2td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t2td1.textContent = currentSlNum;
                                                t2tr2.appendChild(t2td1);
                                                const t2td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t2td2.textContent = socialLink.name[0].toUpperCase() + socialLink.name.slice(1);
                                                t2tr2.appendChild(t2td2);
                                                const t2td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t2td3.textContent = socialLink.link;
                                                t2tr2.appendChild(t2td3);
                                                const t2td4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t2tr2.appendChild(t2td4);
                                                let t2td4a1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'a': {
                                                            'href': 'javascript:void(0);',
                                                            'class': 'button button-xs button-success',
                                                        }
                                                    }]);
                                                t2td4a1.addEventListener('click', function () {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappSocialLinksEditMode').textContent = 'Edit';
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').textContent = 'Update';
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-id').value = socialLink.id;
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#social-website-name').value = socialLink.name;
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#social-website-profile-link').value = socialLink.link;
                                                });
                                                t2td4.appendChild(t2td4a1);
                                                let t2td4a1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'i': {
                                                            'class': 'fa fa-edit',
                                                        }
                                                    }]);
                                                t2td4a1.appendChild(t2td4a1i1);
                                                let t2td4a2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'a': {
                                                            'href': 'javascript:void(0);',
                                                            'class': 'button button-xs button-danger',
                                                        }
                                                    }]);
                                                t2td4a2.addEventListener('click', function () {
                                                    (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                        method: "POST",
                                                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/deleteSocialLink',
                                                        async: true,
                                                        header: [{
                                                                name: "Content-type",
                                                                value: "application/json;charset=UTF-8"
                                                            }],
                                                        data: {
                                                            security_code: 1, id: socialLink.id,
                                                        },
                                                    }, function (response) {
                                                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message3"));
                                                    });
                                                });
                                                t2td4.appendChild(t2td4a2);
                                                let t2td4a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'i': {
                                                            'class': 'fa fa-trash',
                                                        }
                                                    }]);
                                                t2td4a2.appendChild(t2td4a2i1);
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-edit-data").appendChild(t2tr2);
                                                let t2tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'i': {
                                                            'class': 'li-social ' + socialLink.name.toLowerCase() + '-social',
                                                        }
                                                    }]);
                                                let t2tr3a1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'a': {
                                                            'href': socialLink.link,
                                                            'target': '_blank',
                                                            'title': socialLink.name[0].toUpperCase() + socialLink.name.slice(1)
                                                        }
                                                    }]);
                                                t2tr3.appendChild(t2tr3a1);
                                                let t2tr3a1s1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'span': {
                                                            'class': 'fab fa-' + socialLink.name.toLowerCase() + ' icon-social',
                                                        }
                                                    }]);
                                                t2tr3a1.appendChild(t2tr3a1s1);
                                                let t2tr3a1s2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'span': {
                                                            'class': 'name-social',
                                                        }
                                                    }]);
                                                t2tr3a1s2.textContent = socialLink.name[0].toUpperCase() + socialLink.name.slice(1);
                                                t2tr3a1.appendChild(t2tr3a1s2);
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-icon").appendChild(t2tr3);
                                            });
                                        }
                                        else {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-view-data").textContent = '';
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-edit-data").textContent = '';
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-icon").textContent = '';
                                            const tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            const tr1td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'td': {
                                                        'class': 'text-align-center',
                                                        'colspan': '3',
                                                    }
                                                }]);
                                            tr1td.textContent = 'No link exists.';
                                            tr1.appendChild(tr1td);
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-view-data").appendChild(tr1);
                                            const tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            const tr2td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'td': {
                                                        'class': 'text-align-center',
                                                        'colspan': '4',
                                                    }
                                                }]);
                                            tr2td.textContent = 'No link exists.';
                                            tr2.appendChild(tr2td);
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-edit-data").appendChild(tr2);
                                        }
                                    }
                                });
                            }
                        }
                        else {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#webapp-data-table").textContent = '';
                            const table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'table': {
                                        'style': 'width:100%;',
                                    }
                                }]);
                            const tr = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                            table.appendChild(tr);
                            const td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'td': {
                                        'class': 'text-align-center',
                                    }
                                }]);
                            td.textContent = 'No data exists.';
                            tr.appendChild(td);
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#webapp-data-table").appendChild(table);
                        }
                    }
                });
            }
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappEditMode')) {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-data-btn').innerHTML = 'Save';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-reset-btn').innerHTML = 'Reset';
            }
            //save data by clicking data button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-data-btn').addEventListener('click', function () {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-data-btn').textContent = 'Updating..';
                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/manageSite',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappID').value,
                        name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappName').value,
                        description: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappDescription').value,
                        company: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappCompany').value,
                        btnName: 'Update'
                    },
                }, function (response) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-data-btn').textContent = 'Updated';
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                });
            });
            //reset inputbox by clicking reset button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-reset-btn').addEventListener('click', function () {
                changeElementValueById([
                    { 'id': 'webappID', 'value': '' },
                    { 'id': 'webappName', 'value': '' },
                    { 'id': 'webappDescription', 'value': '' },
                    { 'id': 'webappCompany', 'value': '' },
                ]);
            });
            //edit data by clicking edit button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-edit-btn').addEventListener('click', function () {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappEditMode').innerHTML = 'Edit';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-data-btn').innerHTML = 'Update';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappID').value = this.getAttribute('data-id');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappName').value = this.getAttribute('data-name');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappDescription').value = this.getAttribute('data-description');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappCompany').value = this.getAttribute('data-company');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappFilesLocate').value = this.getAttribute('data-filesLocate');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappDomainLocate').value = this.getAttribute('data-domainLocate');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappIPLocate').value = this.getAttribute('data-IPLocate');
            });
            //view modal by clicking button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-database-btn').addEventListener('click', function () {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal02').style.display = 'block';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappDatabaseEditMode').innerHTML = 'Change';
            });
            //view modal by clicking button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-logo-btn').addEventListener('click', function () {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal03').style.display = 'block';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappLogoEditMode').innerHTML = 'Change';
            });
            //upload database by click
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseFile').addEventListener('change', function () {
                (0,_common_upload__WEBPACK_IMPORTED_MODULE_7__.setUploadProgressSystem)('web-app-database-output');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard').removeAttribute('style');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#progressbar').style.display = 'block';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseFile').files[0].name + ' selected';
                (0,_common_upload__WEBPACK_IMPORTED_MODULE_7__.uploadFile)('databaseFile', 'databaseFile', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/databaseUpgrade');
            });
            //restore system database by click
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-database-restore').addEventListener('click', function () {
                let progressBoard = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard');
                if (progressBoard === null) {
                    (0,_common_upload__WEBPACK_IMPORTED_MODULE_7__.setUploadProgressSystem)('web-app-database-output');
                }
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard').removeAttribute('style');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#progressbar').style.display = 'none';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#loaded_n_total').style.display = 'none';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = 'Framework database restoring..';
                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/databaseRestore',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-edit-btn').getAttribute('data-id'),
                        name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-edit-btn').getAttribute('data-name'),
                        host: window.location.hostname,
                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-database-restore').textContent
                    },
                }, function (response) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = response;
                });
            });
            //preview and upload image by change image selection
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload-logo-zone').addEventListener('change', function () {
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard') === undefined) {
                    (0,_common_upload__WEBPACK_IMPORTED_MODULE_7__.setUploadProgressSystem)('upload-info');
                }
                let file = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-selected-logo').files[0];
                let totalSize = (file.size / 1024) / 1024;
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-logo-upload-text').textContent = 'File: ' + file.name + ' (' + totalSize.toFixed(2) + ' Mb)';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard').removeAttribute('style');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = file.name + ' uploading...';
                (0,_common_common__WEBPACK_IMPORTED_MODULE_5__.previewImage)('web-app-selected-logo', 'web-app-logo-preview-image');
                (0,_common_upload__WEBPACK_IMPORTED_MODULE_7__.uploadFile)('logoImage', 'web-app-selected-logo', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/uploadLogoImage');
            });
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappSocialLinksEditPAD')) {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappSocialLinksEditMode').innerHTML = 'New';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').innerHTML = 'Save';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-reset-btn').innerHTML = 'Reset';
            }
            //view modal by clicking button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-socialLinks-btn').addEventListener('click', function () {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message3').innerHTML = '';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal04').style.display = 'block';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappSocialLinksEditMode').innerHTML = 'Add/Edit';
            });
            //reset inputbox by clicking reset button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-reset-btn').addEventListener('click', function () {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-id').value = '';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#social-website-name').value = '';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#social-website-profile-link').value = '';
            });
            //save data by clicking data button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').addEventListener('click', function () {
                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/manageSocialLinks',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-id').value,
                        name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#social-website-name').value,
                        link: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#social-website-profile-link').value,
                        company: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappCompany').value,
                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').textContent
                    },
                }, function (response) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').textContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').textContent + 'd';
                    setTimeout(function () {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').textContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').textContent.slice(0, -1);
                    }, 2000);
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message3"));
                });
            });
        }
    }
}(window.location.href));
/*all functions declare here*/
function retrieveIpInfoPlus() {
    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ip-info-plus-app-bottom').textContent = 'Loading...';
    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ip-info-plus-app-data-table')?.setAttribute('style', 'display:none;');
    let ip = ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ipd-address').value !== null || true) ? (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ipd-address').value : '';
    (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
        method: "GET",
        url: 'https://api.ipdata.co/' + ip + '?api-key=test',
        async: true,
        header: [{ name: "Accept", value: "application/json" }]
    }, function (reply) {
        console.log(reply);
        const IpDataReply = JSON.parse(reply);
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ip-info-plus-app-data-table').removeAttribute('style');
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ip-info-plus-app-bottom').textContent = 'IP INFORMATION:';
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ipd-address').value = IpDataReply.ip;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-ip').textContent = IpDataReply.ip;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-visual-location').href = 'https://www.google.com/maps/@' + IpDataReply.latitude + ',' + IpDataReply.longitude + ',19z';
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-city').textContent = IpDataReply.city;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-region').textContent = IpDataReply.region;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-country').textContent = IpDataReply.country_name + ' (' + IpDataReply.country_code + ') ';
        let country_flag = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                'img': {
                    'style': 'width: 10px;height: 8px;',
                    'src': IpDataReply.flag,
                    'alt': 'FLAG'
                }
            }]);
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-country').appendChild(country_flag);
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-continent-name').textContent = IpDataReply.continent_name + ' (' + IpDataReply.continent_code + ')';
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-post').textContent = IpDataReply.postal;
        //captureElement('#client-asn-name').href = 'https://' + IpDataReply.asn !== undefined ? IpDataReply.asn.domain : 'NOT FOUND';
        //captureElement('#client-asn-name').textContent = IpDataReply.asn !== undefined ? IpDataReply.asn.name : 'NOT FOUND' + ' [' + IpDataReply.asn !== undefined ? IpDataReply.asn.type : 'NOT FOUND' + ']';
        let language = '';
        for (let n in IpDataReply.languages) {
            language += IpDataReply.languages[n].name + '[' + IpDataReply.languages[n].native + ']; ';
        }
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-language').textContent = language;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-currency-name').textContent = IpDataReply.currency.name;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-currency-code').textContent = IpDataReply.currency.code;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-currency-symbol').textContent = IpDataReply.currency.symbol;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-time-zone-name').textContent = IpDataReply.time_zone.name;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-time-zone-abbr').textContent = IpDataReply.time_zone.abbr;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-time-zone-offset').textContent = IpDataReply.time_zone.offset;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-time-zone-is-dist').textContent = IpDataReply.time_zone.is_dst;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-time-zone-current-time').textContent = IpDataReply.time_zone.current_time;
    });
}
function removeAttributeById(elements) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#' + element.id).removeAttribute(element.attribute);
        });
    }
}
function changeElementDisplayById(elements) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#' + element.id).style.display = element.display;
        });
    }
}
function changeElementValueById(elements) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#' + element.id).value = element.value;
        });
    }
}
function addSpace() {
    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.clientHeight + 25) + 'px';
}

})();

/******/ })()
;
//# sourceMappingURL=app-js.js.map