/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/sweetalert/dist/sweetalert.min.js":
/*!*********************************************************!*\
  !*** ../node_modules/sweetalert/dist/sweetalert.min.js ***!
  \*********************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});

/***/ }),

/***/ "./Assets/typescripts/common/app-common-required-send.ts":
/*!***************************************************************!*\
  !*** ./Assets/typescripts/common/app-common-required-send.ts ***!
  \***************************************************************/
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

/***/ "./Assets/typescripts/common/app-common-required.ts":
/*!**********************************************************!*\
  !*** ./Assets/typescripts/common/app-common-required.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDuplicate": () => (/* binding */ checkDuplicate),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "IsJsonString": () => (/* binding */ IsJsonString),
/* harmony export */   "captureElement": () => (/* binding */ captureElement),
/* harmony export */   "captureElements": () => (/* binding */ captureElements)
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
/**
 * @param selector HTML valid element selector
 * */
function captureElement(selector) {
    if (document.querySelector(selector) !== null) {
        return document.querySelector(selector);
    }
}
/**
 * @param selector HTML valid element selector
 * */
/*export function captureElements(selector: string) : any {
    if (/!*document.querySelectorAll(selector) !== null && *!/document.querySelectorAll(selector).length !== 0) {
        return document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
    }
}*/ function captureElements(selector) {
    if ( /*document.querySelectorAll(selector) !== null && */document.querySelectorAll(selector).length !== 0) {
        return document.querySelectorAll(selector);
    }
}


/***/ }),

/***/ "./Assets/typescripts/common/app-common.ts":
/*!*************************************************!*\
  !*** ./Assets/typescripts/common/app-common.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAllCheckBox": () => (/* binding */ selectAllCheckBox),
/* harmony export */   "PopUpWindowCenterPosition": () => (/* binding */ PopUpWindowCenterPosition),
/* harmony export */   "protectNumberOnlyTextBox": () => (/* binding */ protectNumberOnlyTextBox),
/* harmony export */   "getDateFromFullDate": () => (/* binding */ getDateFromFullDate),
/* harmony export */   "getYearFromFullDate": () => (/* binding */ getYearFromFullDate),
/* harmony export */   "NumberToText": () => (/* binding */ NumberToText),
/* harmony export */   "frac": () => (/* binding */ frac),
/* harmony export */   "convert_number": () => (/* binding */ convert_number),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "setUploadProgressSystem": () => (/* binding */ setUploadProgressSystem),
/* harmony export */   "uploadFile": () => (/* binding */ uploadFile),
/* harmony export */   "progressHandler": () => (/* binding */ progressHandler),
/* harmony export */   "completeHandler": () => (/* binding */ completeHandler),
/* harmony export */   "errorHandler": () => (/* binding */ errorHandler),
/* harmony export */   "abortHandler": () => (/* binding */ abortHandler),
/* harmony export */   "previewImage": () => (/* binding */ previewImage),
/* harmony export */   "popUpDialogBoxDriver": () => (/* binding */ popUpDialogBoxDriver),
/* harmony export */   "PopUpDialogBox": () => (/* binding */ PopUpDialogBox),
/* harmony export */   "paginationDriver": () => (/* binding */ paginationDriver),
/* harmony export */   "checkInputDataAbility": () => (/* binding */ checkInputDataAbility)
/* harmony export */ });
/* harmony import */ var _app_common_required_send__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-common-required-send */ "./Assets/typescripts/common/app-common-required-send.ts");
/* harmony import */ var _app_common_required__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-common-required */ "./Assets/typescripts/common/app-common-required.ts");
/**
 * import {__appHostedServerRoot} from "./app-db";
 * const worker = new Worker( __appHostedServerRoot +'public/js/sw.js');
 * */


/*reserved*/
function selectAllCheckBox() {
    let select_all = (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#select_all'); //select all checkbox
    let checkboxes = (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('.checkbox'); //checkbox items
    if (select_all && checkboxes) {
        //select all checkboxes
        select_all.addEventListener("change", function () {
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = select_all.checked;
            }
        });
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener('change', function () {
                //uncheck "select all", if one of the listed checkbox item is unchecked
                if (this.checked === false) {
                    select_all.checked = false;
                }
                //check "select all" if all checkbox items are checked
                if (document.querySelectorAll('.checkbox:checked').length === checkboxes.length) {
                    select_all.checked = true;
                }
            });
        }
    }
}
function PopUpWindowCenterPosition(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screenLeft;
    let dualScreenTop = window.screenTop !== undefined ? window.screenTop : screenTop;
    let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    let left = ((width / 2) - (w / 2)) + dualScreenLeft;
    let top = ((height / 2) - (h / 2)) + dualScreenTop;
    let newWindow = window.open(url, title, 'scrollbars=yes,resizable=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    // Puts focus on the newWindow
    newWindow?.focus();
}
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
function getDateFromFullDate(date, dateString) {
    let d = new Date(date);
    dateString.innerHTML = d.toDateString();
}
/* -- end -- make data update with interval*/
function getYearFromFullDate(date, dateString) {
    let d = new Date(date);
    dateString.innerHTML = d.getFullYear();
}
function NumberToText(value) {
    let fraction = Math.round(frac(value) * 100);
    let f_text = "";
    if (fraction > 0) {
        f_text = "AND " + convert_number(fraction) + " PAISA";
    }
    return convert_number(value) + " Taka " + f_text + " ONLY";
}
function frac(f) {
    return f % 1;
}
function convert_number(number) {
    if ((number < 0) || (number > 999999999)) {
        return "NUMBER OUT OF RANGE!";
    }
    let Gn = Math.floor(number / 10000000); /* Crore */
    number -= Gn * 10000000;
    let kn = Math.floor(number / 100000); /* lakhs */
    number -= kn * 100000;
    let Hn = Math.floor(number / 1000); /* thousand */
    number -= Hn * 1000;
    let Dn = Math.floor(number / 100); /* Tens (deca) */
    number = number % 100; /* Ones */
    let tn = Math.floor(number / 10);
    let one = Math.floor(number % 10);
    let res = "";
    if (Gn > 0) {
        res += (convert_number(Gn) + " CRORE");
    }
    if (kn > 0) {
        res += (((res === "") ? "" : " ") +
            convert_number(kn) + " LAKH");
    }
    if (Hn > 0) {
        res += (((res === "") ? "" : " ") +
            convert_number(Hn) + " THOUSAND");
    }
    if (Dn) {
        res += (((res === "") ? "" : " ") +
            convert_number(Dn) + " HUNDRED");
    }
    let ones = Array("", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN");
    let tens = Array("", "", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY");
    if (tn > 0 || one > 0) {
        if (!(res === "")) {
            res += " AND ";
        }
        if (tn < 2) {
            res += ones[tn * 10 + one];
        }
        else {
            res += tens[tn];
            if (one > 0) {
                res += ("-" + ones[one]);
            }
        }
    }
    if (res === "") {
        res = "zero";
    }
    return res;
}
/*reserved*/
/**
 * @param node_data Html element data
 * */
function createElement(node_data) {
    let element, i, j, k;
    for (i in node_data) {
        let data = node_data[i];
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
 * @param appenderId string
 * */
function setUploadProgressSystem(appenderId) {
    let appender = (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#' + appenderId);
    let uploadBoard = createElement([{ 'div': { 'id': 'UploadStatusBoard', 'style': 'display:none;' } }]);
    uploadBoard.appendChild(createElement([{ 'progress': { 'id': 'progressbar', 'max': '100', 'value': '0' } }]));
    uploadBoard.appendChild(createElement([{ 'h3': { 'id': 'upload_status' } }]));
    uploadBoard.appendChild(createElement([{ 'p': { 'id': 'loaded_n_total' } }]));
    return appender.appendChild(uploadBoard);
}
/**
 * @param ElementName string
 * @param ElementID string
 * @param URL string*/
function uploadFile(ElementName, ElementID, URL) {
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard').style.display = 'block';
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#progressbar').style.display = 'block';
    let file = (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#' + ElementID).files[0];
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
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#loaded_n_total').innerHTML = 'Uploaded ' + loadedSize.toFixed(2) + ' MB of ' + totalSize.toFixed(2) + ' MB';
    let percent = (event.loaded / event.total) * 100;
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#progressbar').value = Math.round(percent);
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = Math.round(percent) + '% uploaded..';
}
/**
 * @param event any
 * */
function completeHandler(event) {
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = event.target.responseText;
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#progressbar').value = 0;
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#progressbar').style.display = 'none';
}
function errorHandler() {
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = 'Upload failed';
}
function abortHandler() {
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = 'Upload aborted';
}
/**
 * @param fileId string
 * @param previewerId string
 * */
function previewImage(fileId, previewerId) {
    let image = (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#' + fileId);
    if (image.files && image.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#' + previewerId).setAttribute('src', e?.target?.result);
        };
        reader.readAsDataURL(image.files[0]);
    }
}
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
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#PopUpDialogBox').style.display = 'block';
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#PopUpDialogBoxTitle').innerHTML = titleText;
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)(messageView).innerHTML = '<div style="font-size:15px;">' + messageText + '</div>';
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message-done-btn').innerHTML = command;
    let dataObject = { security_code: 1 };
    [...actionBtn.attributes].forEach(function (__attribute) {
        if (__attribute.name.toLowerCase().indexOf('data') !== -1) {
            dataObject[__attribute.name.replace('data-', '')] = __attribute.value;
        }
    });
    (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message-done-btn').addEventListener('click', function () {
        (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
        if (this.textContent === command) {
            return (0,_app_common_required_send__WEBPACK_IMPORTED_MODULE_0__.sendRequest)({
                method: "POST",
                url: processURL,
                async: true,
                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                data: dataObject,
            }, (response) => {
                (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#PopUpDialogBox').style.display = 'none';
                (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
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
    return (0,_app_common_required_send__WEBPACK_IMPORTED_MODULE_0__.sendRequest)({
        method: "POST", url: url, async: true,
        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
        data: { security_code: 1, pageNumber: page, viewMode: viewMode },
    }, function (response) {
        if ((0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.IsJsonString)(response) && JSON.parse(response).type) {
            fallback(response);
        }
        else {
            (0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#' + extractTo).innerHTML = response;
            callback();
        }
    });
}
/**
 * @param url string
 * @param dataObject object
 * @param callback any
 * */
function checkInputDataAbility(url, dataObject, callback) {
    return (0,_app_common_required_send__WEBPACK_IMPORTED_MODULE_0__.sendRequest)({
        method: "POST", url: url, async: true,
        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
        data: dataObject,
    }, function (response) {
        callback(response);
    });
}


/***/ }),

/***/ "./Assets/typescripts/common/app-db.ts":
/*!*********************************************!*\
  !*** ./Assets/typescripts/common/app-db.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__appHostedServerRoot": () => (/* binding */ __appHostedServerRoot),
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _app_common_required__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-common-required */ "./Assets/typescripts/common/app-common-required.ts");
/* global _root_ */
/*initialize on extension installed*/

let __appHostedServerRoot = (0,_app_common_required__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#mishusoft-web-root').content;
/*backup plan*/
if (__appHostedServerRoot === undefined) {
    //__appHostedServerRoot = 'http://localhost/';
    __appHostedServerRoot = 'http://localhost/';
    /*required variables*/
}
const app = {
    "default": {
        "name": 'mishusoft',
        "version": 'official',
        "author": 'Mr. Al Amin Ahmed Abir',
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


/***/ }),

/***/ "./Assets/typescripts/common/app-required.ts":
/*!***************************************************!*\
  !*** ./Assets/typescripts/common/app-required.ts ***!
  \***************************************************/
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
/* harmony import */ var _app_common_required__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-common-required */ "./Assets/typescripts/common/app-common-required.ts");
/* harmony import */ var _app_common_required_send__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-common-required-send */ "./Assets/typescripts/common/app-common-required-send.ts");



/**
 * @param response any
 * @param element HTML element
 * @param callback any
 **/
function showMessage(response, element, callback) {
    if ((0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.IsJsonString)(response)) {
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
                const popup = createElement([{
                        'div': { 'id': 'popup-login', 'class': 'modal', 'style': 'display:block;' }
                    }]);
                const popupDocument = createElement([{
                        'div': { 'class': 'row modal-content animate', 'style': 'width:34.5%;' }
                    }]);
                popup.appendChild(popupDocument);
                const popupDocumentBody = createElement([{
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
        return (0,_app_common_required_send__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
            method: "POST",
            url: __appHostUrl,
            async: true,
            header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            data: data
        }, function (response) {
            if ((0,_app_common_required__WEBPACK_IMPORTED_MODULE_1__.IsJsonString)(response)) {
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
function createElement(node_data) {
    let element, i, j, k;
    for (i in node_data) {
        let data = node_data[i];
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
  !*** ./Assets/typescripts/installer.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_app_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/app-common */ "./Assets/typescripts/common/app-common.ts");
/* harmony import */ var _common_app_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/app-db */ "./Assets/typescripts/common/app-db.ts");
/* harmony import */ var _common_app_required__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/app-required */ "./Assets/typescripts/common/app-required.ts");
/* harmony import */ var _common_app_common_required__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/app-common-required */ "./Assets/typescripts/common/app-common-required.ts");




const UrlForInstallation = _common_app_db__WEBPACK_IMPORTED_MODULE_1__.__appHostedServerRoot + "install";
class MishusoftInstaller {
    static init = () => {
        window.addEventListener('load', () => {
            MishusoftInstaller.appInstallerBaseUI();
            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-installer').addEventListener('click', function () {
                (0,_common_app_required__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(MishusoftInstaller, {
                    security_code: 1,
                    env: { 'installation': { client: 'base' } }
                }, UrlForInstallation);
            });
        });
    };
    static appInstallerBaseUI = () => {
        //Application's Meta Tags
        let appHeader = document.head;
        appHeader.insertBefore((0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ "meta": { "charset": "UTF-8" } }]), (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-title'));
        appHeader.insertBefore((0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "meta": {
                    "name": "viewport",
                    "content": "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                }
            }]), (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-title'));
        appHeader.insertBefore((0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "meta": {
                    "http-equiv": "X-UA-Compatible", "content": "ie=edge"
                }
            }]), (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-title'));
        //Application's title
        (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-title').textContent = _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.default.text.welcome;
        //Application's Favicon
        _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.content.file.default.link.forEach(function (__file) {
            appHeader.insertBefore((0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ "link": __file }]), appHeader.lastElementChild);
        });
        //Application's Stylesheet source files include here
        /*let lnk19 = createElement([{
            "link": {
                "rel": "stylesheet",
                "type": "text/css",
                "href": app.content.folder.css + "mishusoft.css"
            }
        }]);
        appHeader.insertBefore(lnk19, appHeader.lastElementChild);*/
        if (appHeader.firstElementChild) {
            appHeader.insertAdjacentElement('beforeend', appHeader.firstElementChild);
        }
        //Application's body source files include here
        let appBody = document.body;
        let dv1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "id": "app-setup-box",
                    "class": "app-setup-box",
                    /*"style": "display: none;"*/
                }
            }]);
        let dv2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "class": "box-panel box-panel-primary"
                }
            }]);
        /*installer header*/
        let dv3 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "id": "app-installer-header",
                    "class": "box-panel-header",
                    "style": "text-align:center;"
                }
            }]);
        dv3.textContent = _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.default.text.welcome;
        dv2.appendChild(dv3);
        /*installer body*/
        let dv4 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "id": "box-panel-body",
                    "class": "box-panel-body",
                    "style": "text-align:center;"
                }
            }]);
        let img2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "img": {
                    "id": "app-company-logo",
                    "alt": "Logo",
                    "class": "app-company-logo",
                    "src": _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.content.folder.logos + "mishusoft-logo-lite.webp"
                }
            }]);
        dv4.appendChild(img2);
        let p1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "p": {
                    "class": "app-description-text"
                }
            }]);
        p1.textContent = _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.default.text.description;
        dv4.appendChild(p1);
        let p2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "p": {
                    "class": "app-description-text"
                }
            }]);
        p2.textContent = _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.default.text.install_state;
        dv4.appendChild(p2);
        let fieldset = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "fieldset": {
                    "class": "flex-group flex-row box-shadow box-shadow-light",
                    "style": "line-height: 1.5;font-size:14px"
                }
            }]);
        dv4.appendChild(fieldset);
        /*<legend id="app-install-database-sandbox-title" class="box-shadow box-shadow-light" style="font-weight: 600;">Databases configure</legend>*/
        let legend = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "legend": {
                    "class": "box-shadow box-shadow-light",
                    "style": "font-weight: 600;"
                }
            }]);
        legend.textContent = 'Server configure';
        fieldset.appendChild(legend);
        let apache_server_php_area = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "style": "width: 100%;display: inherit;margin-bottom: 5px;"
                }
            }]);
        fieldset.appendChild(apache_server_php_area);
        let apache = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "style": "width: 45%;"
                }
            }]);
        apache.innerHTML = '<span style="font-weight: 700;">SERVER</span> : ' + (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#runtime-server-name-version').content.substr(0, 20);
        apache_server_php_area.appendChild(apache);
        let ip = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "style": "width: 35%;"
                }
            }]);
        ip.innerHTML = '<span style="font-weight: 700;">IP</span> : ' + (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#runtime-host-ip').content;
        apache_server_php_area.appendChild(ip);
        let php = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "style": "width: 20%;"
                }
            }]);
        php.innerHTML = '<span style="font-weight: 700;">PHP</span> : ' + (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#runtime-php-version').content;
        apache_server_php_area.appendChild(php);
        let host = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "style": "width: 100%;"
                }
            }]);
        host.innerHTML = '<span style="font-weight: 700;">HOST NAME</span> : ' + (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#runtime-host-name').content + ' on ' + (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#runtime-host-os').content + ' ' + (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#runtime-host-architecture').content;
        fieldset.appendChild(host);
        //Linux developer 5.7.9-1-MANJARO #1 SMP PREEMPT Thu Jul 16 08:20:05 UTC 2020 x86_64
        let btn1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "button": {
                    "id": "app-installer",
                    "class": "button button-lg button-outline-success"
                }
            }]);
        btn1.textContent = 'Install';
        dv4.appendChild(btn1);
        dv2.appendChild(dv4);
        /*installer footer*/
        let footer = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "p": {
                    "class": "app-description-text",
                    "style": "text-align:center;padding:5px;"
                }
            }]);
        footer.textContent = _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.default.companyName + ' © ' + (new Date()).getFullYear();
        dv2.appendChild(footer);
        dv1.appendChild(dv2);
        appBody.insertBefore(dv1, appBody.firstElementChild);
    };
    /**
     * @param message JSON object
     * */
    static appRuntimeEventManager = (message) => {
        let parentNode = (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#box-panel-body');
        let app_title = (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-title');
        let app_installer_header = (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-installer-header');
        if (message.env.installation.client !== undefined) {
            if (message.env.installation.message.set_title === 'unneeded') {
                if (message.env.installation.client.base !== undefined) {
                    app_installer_header.removeAttribute('style');
                    app_title.textContent = message.env.installation.title + ' : ' + message.env.installation.client.base.sub_title;
                    app_installer_header.textContent = message.env.installation.title;
                    //app_installer_header.textContent = message.env.installation.title + ' : ' + message.env.installation.client.base.sub_title;
                    MishusoftInstaller.setAppInstallerIcon(app_installer_header);
                }
            }
            else {
                app_title.textContent = message.env.installation.message.type.toUpperCase();
                app_installer_header.textContent = message.env.installation.message.type.toUpperCase();
            }
            if (message.env.installation.message !== undefined) {
                if (message.env.installation.message.cmd_btn === 'remove') {
                    parentNode.textContent = '';
                }
                if (message.env.installation.message.extra !== undefined) {
                    if (message.env.installation.message.extra.enable !== undefined) {
                        Object.keys(message.env.installation.message.extra.enable).forEach((key) => {
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#' + message.env.installation.message.extra.enable[key]).removeAttribute('disabled');
                        });
                    }
                    if (message.env.installation.message.extra.disable !== undefined) {
                        Object.keys(message.env.installation.message.extra.disable).forEach((key) => {
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#' + message.env.installation.message.extra.disable[key]).setAttribute('disabled', 'disabled');
                        });
                    }
                    if (message.env.installation.message.extra.show !== undefined) {
                        Object.keys(message.env.installation.message.extra.show).forEach((key) => {
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#' + message.env.installation.message.extra.show[key]).removeAttribute('style');
                        });
                    }
                    if (message.env.installation.message.extra.hide !== undefined) {
                        Object.keys(message.env.installation.message.extra.hide).forEach((key) => {
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#' + message.env.installation.message.extra.hide[key]).setAttribute('style', 'display:none;');
                        });
                    }
                    if (message.env.installation.message.extra.text_change !== undefined) {
                        Object.keys(message.env.installation.message.extra.text_change).forEach(() => {
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#' + message.env.installation.message.extra.text_change['id']).textContent = message.env.installation.message.extra.text_change['text'];
                        });
                    }
                }
                if ((0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#messagezone') === null || (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#messagezone') === undefined) {
                    MishusoftInstaller.setRuntimeEventMessageZone(parentNode);
                }
                let messageBoard = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'div': { 'id': 'messageboard' } }]), msg_prefix;
                if (message.env.installation.message.type === 'error') {
                    messageBoard.setAttribute('class', 'box-message box-danger box-shadow box-shadow-light');
                    msg_prefix = '<b class="text-danger" style="float: left;">Error&nbsp;:&nbsp;</b>';
                }
                else {
                    messageBoard.setAttribute('class', 'box-message box-success box-shadow box-shadow-light');
                    msg_prefix = '<b class="text-success" style="float: left;">Message&nbsp;:&nbsp;</b>';
                }
                messageBoard.innerHTML = msg_prefix + message.env.installation.message.text;
                let messageArea = (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#messagezone');
                if (messageArea.style.display === 'none') {
                    messageArea.style.display = 'block';
                    messageArea.appendChild(messageBoard);
                }
                else {
                    messageArea.textContent = '';
                    messageArea.appendChild(messageBoard);
                }
            }
            if (message.env.installation.client.base !== undefined) {
                /**
                 * Databases Creation Section
                 *
                 * We configure database for the application
                 * If required database not created previously, we create in this process
                 * */
                if (message.env.installation.client.base.area === 'database-create') {
                    MishusoftInstaller.setAppInstallerDatabaseCreateBaseUI(parentNode);
                    if ((0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-database-create-initialize') !== null) {
                        MishusoftInstaller.setAppInstallerDatabaseCreateDefaultUI((0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-install-database-create-tags'));
                        (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-database-create-initialize').addEventListener('submit', function (event) {
                            event.preventDefault();
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-loader').removeAttribute('style');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_name').setAttribute('disabled', 'disabled');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_char').setAttribute('disabled', 'disabled');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_table_prefix').setAttribute('disabled', 'disabled');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-database-create-install').setAttribute('disabled', 'disabled');
                            (0,_common_app_required__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(MishusoftInstaller, {
                                security_code: 1,
                                env: {
                                    installation: {
                                        client: {
                                            base: {
                                                area: {
                                                    database: {
                                                        step: 'create',
                                                        host: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_host').value,
                                                        user: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_user').value,
                                                        user_pass: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_user_pass').value,
                                                        name: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_name').value,
                                                        char: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_char').value,
                                                        table_prefix: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_table_prefix').value,
                                                        port: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_port').value,
                                                        btnName: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_connect_only').textContent
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }, UrlForInstallation);
                        });
                        (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_connect_only').addEventListener('click', function () {
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-loader').removeAttribute('style');
                            /*Remove disabled attribute from all child node*/
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_name').removeAttribute('disabled');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_char').removeAttribute('disabled');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_table_prefix').removeAttribute('disabled');
                            this.setAttribute('disabled', 'disabled');
                            (0,_common_app_required__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(MishusoftInstaller, {
                                security_code: 1,
                                env: {
                                    installation: {
                                        client: {
                                            base: {
                                                area: {
                                                    database: {
                                                        step: 'connect',
                                                        host: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_host').value,
                                                        user: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_user').value,
                                                        user_pass: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_user_pass').value,
                                                        btnName: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_connect_only').textContent
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }, UrlForInstallation);
                        });
                        (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_reconnect_only').addEventListener('click', function () {
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_host').removeAttribute('disabled');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_user').removeAttribute('disabled');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_user_pass').removeAttribute('disabled');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_connect_only').textContent = 'Connect';
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_connect_only').removeAttribute('disabled');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_name_row').setAttribute('style', 'display:none;');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_char_table_prefix_row').setAttribute('style', 'display:none;');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-database-create-install').setAttribute('style', 'display:none;');
                        });
                    }
                    if ((0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-database-create-cancel') !== null) {
                        (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-database-create-cancel').addEventListener('click', function () {
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-loader').removeAttribute('style');
                            (0,_common_app_required__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(MishusoftInstaller, {
                                security_code: 1,
                                env: { 'installation': { client: 'base' } }
                            }, UrlForInstallation);
                        });
                    }
                }
                /**
                 * Databases Section
                 *
                 * We configure database for the application
                 * We need to store data in database, so it is very important to configure it
                 * */
                if (message.env.installation.client.base.area === 'database-select') {
                    MishusoftInstaller.setAppInstallerDBMSSelectionUI(parentNode);
                }
                /**
                 * Databases Section
                 *
                 * We configure database for the application
                 * We need to store data in database, so it is very important to configure it
                 * */
                if (message.env.installation.client.base.area === 'database') {
                    MishusoftInstaller.setAppInstallerDatabaseBaseUI(parentNode);
                    if ((0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-database-initialize') !== null) {
                        MishusoftInstaller.setAppInstallerDatabaseDefaultUI((0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-install-database-tags'));
                        (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-database-initialize').addEventListener('submit', function (event) {
                            event.preventDefault();
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-loader').removeAttribute('style');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-database-install').setAttribute('disabled', 'disabled');
                            (0,_common_app_required__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(MishusoftInstaller, {
                                security_code: 1,
                                env: {
                                    installation: {
                                        client: {
                                            base: {
                                                area: {
                                                    database: {
                                                        step: 'configure',
                                                        host: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_host').value,
                                                        user: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_user').value,
                                                        user_pass: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_user_pass').value,
                                                        name: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_name').value,
                                                        char: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_char').value,
                                                        table_prefix: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_table_prefix').value,
                                                        port: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#db_port').value,
                                                        btnName: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-database-install').textContent
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }, UrlForInstallation);
                        });
                        (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-database-create').addEventListener('click', function () {
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-loader').removeAttribute('style');
                            this.setAttribute('disabled', 'disabled');
                            (0,_common_app_required__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(MishusoftInstaller, {
                                security_code: 1,
                                env: { installation: { client: { base: { area: 'database-create' } } } }
                            }, UrlForInstallation);
                        });
                    }
                }
                /**
                 * Account Section
                 *
                 * We create admin and super user account to access in the application
                 * This step is very important for users
                 * */
                if (message.env.installation.client.base.area === 'account') {
                    MishusoftInstaller.setAppInstallerAccountBaseUI(parentNode);
                    if ((0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-account-initialize') !== null) {
                        MishusoftInstaller.setAppInstallerAccountDefaultUI((0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-install-account-tags'));
                        (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-account-initialize').addEventListener('submit', function (event) {
                            event.preventDefault();
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-loader').removeAttribute('style');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-account-install').setAttribute('disabled', 'disabled');
                            (0,_common_app_required__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(MishusoftInstaller, {
                                security_code: 1,
                                env: {
                                    installation: {
                                        client: {
                                            base: {
                                                area: {
                                                    account: {
                                                        username: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#acc_adm_username').value,
                                                        email: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#acc_adm_email').value,
                                                        user_pass: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#acc_adm_pass').value,
                                                        user_cnf_pass: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#acc_adm_cnf_pass').value,
                                                        btnName: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-account-install').textContent
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }, UrlForInstallation);
                        });
                    }
                }
                /**
                 * Website Section
                 *
                 * We configure name, description of the application
                 * This step is very important for website
                 * */
                if (message.env.installation.client.base.area === 'website') {
                    MishusoftInstaller.setAppInstallerWebsiteBaseUI(parentNode);
                    if ((0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-website-initialize') !== null) {
                        MishusoftInstaller.setAppInstallerWebsiteDefaultUI((0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-install-website-tags'));
                        (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-website-initialize').addEventListener('submit', function (event) {
                            event.preventDefault();
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-loader').removeAttribute('style');
                            (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-website-install').setAttribute('disabled', 'disabled');
                            (0,_common_app_required__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(MishusoftInstaller, {
                                security_code: 1,
                                env: {
                                    installation: {
                                        client: {
                                            base: {
                                                area: {
                                                    website: {
                                                        name: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#site_name').value,
                                                        description: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#site_description').value,
                                                        company: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#site_company').value,
                                                        btnName: (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('#app-website-install').textContent
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }, UrlForInstallation);
                        });
                    }
                }
                /**
                 * Redirect Section
                 *
                 * after completion of app installation
                 * with procedure this section
                 * */
                if (message.env.installation.client.base.area === 'redirect') {
                    if ((0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)("form") > 0) {
                        (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)("form").forEach(function (frm) {
                            frm.remove();
                        });
                    }
                    else {
                        (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)("form").remove();
                    }
                    (0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)("#app-loader").style.display = 'block';
                    setTimeout(function () {
                        window.location.replace(_common_app_db__WEBPACK_IMPORTED_MODULE_1__.__appHostedServerRoot);
                    }, 5000);
                }
            }
        }
    };
    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerIcon = (parentNode) => {
        let img1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'img': {
                    'id': 'app-installer-logo',
                    'alt': 'Logo',
                    'class': 'logo-xs',
                    'width': '25px',
                    'src': _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.content.folder.logos + 'mishusoft-logo-outline.webp'
                }
            }]);
        parentNode.insertBefore(img1, parentNode.firstElementChild);
    };
    /**
     * @param parentNode Valid HTML element
     * */
    static setRuntimeEventMessageZone = (parentNode) => {
        let dv5 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'id': 'messagezone',
                    'style': 'width:inherit;display: none;'
                }
            }]);
        parentNode.appendChild(dv5);
    };
    /**
     * @param parentNode valid HTML Element*/
    static setAppInstallerDBMSSelectionUI = (parentNode) => {
        /*let messenger = captureElement("#messageboard");
        messenger.innerHTML = "Please select one [DBMS]";*/
        let panel = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'style': 'width: 100%; text-align: center !important;display: inline-block;'
                }
            }]);
        let child01 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'class': 'box-message box-success box-shadow box-shadow-light',
                    'style': "text-align: center;float: left;height: 65px;width: 25%;margin-right: 20px;padding: 50px;display: flex;justify-content: center;align-items: center;"
                }
            }]);
        child01.innerText = "MishusoftSQLStandalone";
        child01.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.originalTarget === child01) {
                (0,_common_app_required__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(MishusoftInstaller, {
                    security_code: 1,
                    env: {
                        installation: {
                            client: {
                                base: {
                                    area: {
                                        database: {
                                            step: 'database-select',
                                            dbms: child01.innerText.toLowerCase()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, UrlForInstallation);
            }
        });
        panel.appendChild(child01);
        let child02 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'class': 'box-message box-success box-shadow box-shadow-light',
                    'style': "text-align: center;float: left;height: 65px;width: 25%;margin-left: 20px;padding: 50px;display: flex;justify-content: center;align-items: center;"
                }
            }]);
        child02.innerText = "MySQL";
        child02.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.originalTarget === child02) {
                (0,_common_app_required__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(MishusoftInstaller, {
                    security_code: 1,
                    env: {
                        installation: {
                            client: {
                                base: {
                                    area: {
                                        database: {
                                            step: 'database-select',
                                            dbms: child02.innerText.toLowerCase()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, UrlForInstallation);
            }
        });
        panel.appendChild(child02);
        parentNode.appendChild(panel);
    };
    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerDatabaseCreateBaseUI = (parentNode) => {
        let frm1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'form': {
                    'id': 'app-database-create-initialize',
                    'method': 'post',
                    'autocomplete': 'off'
                }
            }]);
        let frm1input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'input': { 'type': 'hidden', 'name': 'database', 'value': 'create' } }]);
        frm1.appendChild(frm1input1);
        let frm1input2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_port',
                    'type': 'hidden',
                    'name': 'db_port',
                    'value': '3306'
                }
            }]);
        frm1.appendChild(frm1input2);
        let frm1fdt1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'fieldset': {
                    'id': 'app-install-database-create-sandbox',
                    'class': 'box-shadow box-shadow-light'
                }
            }]);
        let frm1fdt1lgd1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'legend': {
                    'id': 'app-install-database-create-sandbox-title',
                    'class': 'box-shadow box-shadow-light',
                    'style': 'font-weight: 600;'
                }
            }]);
        frm1fdt1lgd1.textContent = 'Databases Create';
        frm1fdt1.appendChild(frm1fdt1lgd1);
        let frm1fdt1dv1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'div': { 'class': 'row' } }]);
        let frm1fdt1lgd1dv1tbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'table': {
                    'id': 'app-install-database-create-tags',
                    'class': 'table table-condensed',
                    'method': 'app-install-database-create'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
        let frm1fdt1lgd1dv1dv1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'id': 'app-install-database-create-sandbox-footer',
                    'class': 'float-right text-align-right'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
        let frm1fdt1lgd1dv1dv1btn1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'app-database-create-cancel',
                    'type': 'button',
                    'class': 'button button-outline-danger'
                }
            }]);
        frm1fdt1lgd1dv1dv1btn1.textContent = 'Cancel';
        frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn1);
        let frm1fdt1lgd1dv1dv1btn2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'app-database-create-install',
                    'type': 'submit',
                    'class': 'button button-outline-primary',
                    'style': 'display:none;'
                }
            }]);
        frm1fdt1lgd1dv1dv1btn2.textContent = 'Next';
        frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn2);
        frm1fdt1.appendChild(frm1fdt1dv1);
        frm1.appendChild(frm1fdt1);
        parentNode.appendChild(frm1);
    };
    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerDatabaseCreateDefaultUI = (parentNode) => {
        let tr1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr1td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
        let tr1td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'label': { 'for': 'db_host' } }]);
        tr1td1lbl1.textContent = 'Host : ';
        tr1td1.appendChild(tr1td1lbl1);
        tr1.appendChild(tr1td1);
        let tr1td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-10 col-sm-10 col-xs-10 col-xs-plus-10' } }]);
        let tr1td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_host',
                    'name': 'db_host',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Host name or address',
                    'required': 'required'
                }
            }]);
        tr1td2.appendChild(tr1td2input1);
        tr1.appendChild(tr1td2);
        parentNode.appendChild(tr1);
        let tr2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr2td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
        let tr2td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'label': { 'for': 'db_user' } }]);
        tr2td1lbl1.textContent = 'User : ';
        tr2td1.appendChild(tr2td1lbl1);
        tr2.appendChild(tr2td1);
        let tr2td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
        let tr2td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_user',
                    'name': 'db_user',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Username',
                    'required': 'required'
                }
            }]);
        tr2td2.appendChild(tr2td2input1);
        tr2.appendChild(tr2td2);
        let tr2td3 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
        let tr2td3lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'label': { 'for': 'db_user_pass' } }]);
        tr2td3lbl1.textContent = 'Password : ';
        tr2td3.appendChild(tr2td3lbl1);
        tr2.appendChild(tr2td3);
        let tr2td4 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
        let tr2td4input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_user_pass',
                    'name': 'db_user_pass',
                    'type': 'password',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Password',
                    'required': 'required'
                }
            }]);
        tr2td4.appendChild(tr2td4input1);
        tr2.appendChild(tr2td4);
        parentNode.appendChild(tr2);
        let tr3 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr3td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-12 col-sm-12 col-xs-12 col-xs-plus-12',
                    'colspan': '2',
                    'style': 'text-align:center;'
                }
            }]);
        let tr3td1btn1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'db_connect_only',
                    'type': 'button',
                    'class': 'button button-outline-success'
                }
            }]);
        tr3td1btn1.textContent = 'Connect';
        tr3td1.appendChild(tr3td1btn1);
        let tr3td1btn2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'db_reconnect_only',
                    'type': 'button',
                    'class': 'button button-outline-info',
                    'style': 'display:none;'
                }
            }]);
        tr3td1btn2.textContent = 'Reconnect';
        tr3td1.appendChild(tr3td1btn2);
        tr3.appendChild(tr3td1);
        parentNode.appendChild(tr3);
        /*on event add element*/
        let tr4 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': { 'id': 'db_name_row', 'style': 'display:none;' } }]);
        let tr4td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
        let tr4td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'label': { 'for': 'db_name' } }]);
        tr4td1lbl1.textContent = 'Databases : ';
        tr4td1.appendChild(tr4td1lbl1);
        tr4.appendChild(tr4td1);
        let tr4td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-10 col-sm-10 col-xs-10 col-xs-plus-10' } }]);
        let tr4td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_name',
                    'name': 'db_name',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases name',
                    'value': _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.default.name,
                    'required': 'required'
                }
            }]);
        tr4td2.appendChild(tr4td2input1);
        tr4.appendChild(tr4td2);
        parentNode.appendChild(tr4);
        let tr5 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': { 'id': 'db_char_table_prefix_row', 'style': 'display:none;' } }]);
        let tr5td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
        let tr5td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'label': { 'for': 'db_char' } }]);
        tr5td1lbl1.textContent = 'Charset:';
        tr5td1.appendChild(tr5td1lbl1);
        tr5.appendChild(tr5td1);
        let tr5td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
        let tr5td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_char',
                    'name': 'db_char',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases charset',
                    'value': _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.default.charset,
                    'required': 'required'
                }
            }]);
        tr5td2.appendChild(tr5td2input1);
        tr5.appendChild(tr5td2);
        parentNode.appendChild(tr5);
        let tr5td3 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
        let tr5td3lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'label': { 'for': 'db_table_prefix' } }]);
        tr5td3lbl1.textContent = 'Prefix : ';
        tr5td3.appendChild(tr5td3lbl1);
        tr5.appendChild(tr5td3);
        let tr5td4 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
        let tr5td4input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_table_prefix',
                    'name': 'db_table_prefix',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases table prefix',
                    'value': _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.default.prefix,
                    'required': 'required'
                }
            }]);
        tr5td4.appendChild(tr5td4input1);
        tr5.appendChild(tr5td4);
        parentNode.appendChild(tr5);
    };
    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerDatabaseBaseUI = (parentNode) => {
        let frm1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'form': {
                    'id': 'app-database-initialize',
                    'method': 'post',
                    'autocomplete': 'off'
                }
            }]);
        let frm1input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'type': 'hidden',
                    'name': 'database',
                    'value': '1'
                }
            }]);
        frm1.appendChild(frm1input1);
        let frm1input2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_port',
                    'type': 'hidden',
                    'name': 'db_port',
                    'value': '3306'
                }
            }]);
        frm1.appendChild(frm1input2);
        let frm1fdt1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'fieldset': {
                    'id': 'app-install-database-sandbox',
                    'class': 'box-shadow box-shadow-light'
                }
            }]);
        let frm1fdt1lgd1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'legend': {
                    'id': 'app-install-database-sandbox-title',
                    'class': 'box-shadow box-shadow-light',
                    'style': 'font-weight: 600;'
                }
            }]);
        frm1fdt1lgd1.textContent = 'Databases configure';
        frm1fdt1.appendChild(frm1fdt1lgd1);
        let frm1fdt1dv1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'class': 'row'
                }
            }]);
        let frm1fdt1lgd1dv1tbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'table': {
                    'id': 'app-install-database-tags',
                    'class': 'table table-condensed',
                    'method': 'app-install-database'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
        let frm1fdt1lgd1dv1dv1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'id': 'app-install-database-sandbox-footer',
                    'class': 'float-right text-align-right'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
        let frm1fdt1lgd1dv1dv1btn1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'app-database-create',
                    'type': 'button',
                    'class': 'button button-outline-success'
                }
            }]);
        frm1fdt1lgd1dv1dv1btn1.textContent = 'Create DB';
        frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn1);
        let frm1fdt1lgd1dv1dv1btn2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'app-database-install',
                    'type': 'submit',
                    'class': 'button button-outline-primary'
                }
            }]);
        frm1fdt1lgd1dv1dv1btn2.textContent = 'Next';
        frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn2);
        frm1fdt1.appendChild(frm1fdt1dv1);
        frm1.appendChild(frm1fdt1);
        parentNode.appendChild(frm1);
    };
    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerDatabaseDefaultUI = (parentNode) => {
        let tr1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr1td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr1td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'db_host'
                }
            }]);
        tr1td1lbl1.textContent = 'Host : ';
        tr1td1.appendChild(tr1td1lbl1);
        tr1.appendChild(tr1td1);
        let tr1td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr1td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_host',
                    'name': 'db_host',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases\'s host',
                    'required': 'required'
                }
            }]);
        tr1td2.appendChild(tr1td2input1);
        tr1.appendChild(tr1td2);
        parentNode.appendChild(tr1);
        let tr2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr2td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr2td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'db_user'
                }
            }]);
        tr2td1lbl1.textContent = 'Username : ';
        tr2td1.appendChild(tr2td1lbl1);
        tr2.appendChild(tr2td1);
        let tr2td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr2td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_user',
                    'name': 'db_user',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases\'s username',
                    'required': 'required'
                }
            }]);
        tr2td2.appendChild(tr2td2input1);
        tr2.appendChild(tr2td2);
        parentNode.appendChild(tr2);
        let tr3 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr3td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr3td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'db_user_pass'
                }
            }]);
        tr3td1lbl1.textContent = 'Password : ';
        tr3td1.appendChild(tr3td1lbl1);
        tr3.appendChild(tr3td1);
        let tr3td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr3td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_user_pass',
                    'name': 'db_user_pass',
                    'type': 'password',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases\'s password',
                    'required': 'required'
                }
            }]);
        tr3td2.appendChild(tr3td2input1);
        tr3.appendChild(tr3td2);
        parentNode.appendChild(tr3);
        let tr4 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr4td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr4td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'db_name'
                }
            }]);
        tr4td1lbl1.textContent = 'Databases : ';
        tr4td1.appendChild(tr4td1lbl1);
        tr4.appendChild(tr4td1);
        let tr4td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr4td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_name',
                    'name': 'db_name',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases\'s name',
                    'value': _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.default.name,
                    'required': 'required'
                }
            }]);
        tr4td2.appendChild(tr4td2input1);
        tr4.appendChild(tr4td2);
        parentNode.appendChild(tr4);
        let tr5 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr5td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr5td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'db_char'
                }
            }]);
        tr5td1lbl1.textContent = 'Charset : ';
        tr5td1.appendChild(tr5td1lbl1);
        tr5.appendChild(tr5td1);
        let tr5td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr5td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_char',
                    'name': 'db_char',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Data char set',
                    'value': _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.default.charset,
                    'required': 'required'
                }
            }]);
        tr5td2.appendChild(tr5td2input1);
        tr5.appendChild(tr5td2);
        parentNode.appendChild(tr5);
        let tr6 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr6td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr6td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'db_table_prefix'
                }
            }]);
        tr6td1lbl1.textContent = 'Table prefix : ';
        tr6td1.appendChild(tr6td1lbl1);
        tr6.appendChild(tr6td1);
        let tr6td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr6td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_table_prefix',
                    'name': 'db_table_prefix',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases prefix',
                    'value': _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.default.prefix,
                    'required': 'required'
                }
            }]);
        tr6td2.appendChild(tr6td2input1);
        tr6.appendChild(tr6td2);
        parentNode.appendChild(tr6);
    };
    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerAccountBaseUI = (parentNode) => {
        let frm1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'form': {
                    'id': 'app-account-initialize',
                    'method': 'post',
                    'autocomplete': 'off'
                }
            }]);
        let frm1input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'type': 'hidden',
                    'name': 'account',
                    'value': '1'
                }
            }]);
        frm1.appendChild(frm1input1);
        let frm1fdt1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'fieldset': {
                    'id': 'app-install-account-sandbox',
                    'class': 'box-shadow box-shadow-light'
                }
            }]);
        let frm1fdt1lgd1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'legend': {
                    'id': 'app-install-account-sandbox-title',
                    'class': 'box-shadow box-shadow-light',
                    'style': 'font-weight: 600;'
                }
            }]);
        frm1fdt1lgd1.textContent = 'Account configure';
        frm1fdt1.appendChild(frm1fdt1lgd1);
        let frm1fdt1dv1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'class': 'row'
                }
            }]);
        let frm1fdt1lgd1dv1tbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'table': {
                    'id': 'app-install-account-tags',
                    'class': 'table table-condensed',
                    'method': 'app-install-account'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
        let frm1fdt1lgd1dv1dv1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'id': 'app-install-account-sandbox-footer',
                    'class': 'float-right text-align-right'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
        let frm1fdt1lgd1dv1dv1btn2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'app-account-install',
                    'type': 'submit',
                    'class': 'button button-outline-primary'
                }
            }]);
        frm1fdt1lgd1dv1dv1btn2.textContent = 'Next';
        frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn2);
        frm1fdt1.appendChild(frm1fdt1dv1);
        frm1.appendChild(frm1fdt1);
        if (document.getElementsByTagName('form')[0]) {
            document.getElementsByTagName('form')[0].remove();
        }
        parentNode.appendChild(frm1);
    };
    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerAccountDefaultUI = (parentNode) => {
        let tr1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr1td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr1td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'acc_adm_username'
                }
            }]);
        tr1td1lbl1.textContent = 'Username : ';
        tr1td1.appendChild(tr1td1lbl1);
        tr1.appendChild(tr1td1);
        let tr1td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr1td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'acc_adm_username',
                    'name': 'acc_adm_username',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Username',
                    'required': 'required',
                    'pattern': '[a-z0-9]{8,}$',
                    'title': 'Must contain characters and at least 8 letters from a to z',
                    'autocomplete': 'off'
                }
            }]);
        tr1td2.appendChild(tr1td2input1);
        tr1.appendChild(tr1td2);
        parentNode.appendChild(tr1);
        let tr2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr2td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr2td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'acc_adm_email'
                }
            }]);
        tr2td1lbl1.textContent = 'E-mail : ';
        tr2td1.appendChild(tr2td1lbl1);
        tr2.appendChild(tr2td1);
        let tr2td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr2td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'acc_adm_email',
                    'name': 'acc_adm_email',
                    'type': 'email',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'E-mail address',
                    'required': 'required',
                    'pattern': '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$',
                    'title': 'Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a \'.\'. After the \'.\' sign, add at least 2 letters from a to z',
                    'autocomplete': 'off'
                }
            }]);
        tr2td2.appendChild(tr2td2input1);
        tr2.appendChild(tr2td2);
        parentNode.appendChild(tr2);
        let tr3 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr3td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr3td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'acc_adm_pass'
                }
            }]);
        tr3td1lbl1.textContent = 'Password : ';
        tr3td1.appendChild(tr3td1lbl1);
        tr3.appendChild(tr3td1);
        let tr3td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr3td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'acc_adm_pass',
                    'name': 'acc_adm_pass',
                    'type': 'password',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Password',
                    'required': 'required',
                    'pattern': '(?=.*\\d)(?=.*[@_])(?=.*[a-z])(?=.*[A-Z]).{6,}',
                    'title': 'Must contain at least one  number and one uppercase and lowercase letter and at least 6 or more characters',
                    'autocomplete': 'off'
                }
            }]);
        tr3td2.appendChild(tr3td2input1);
        tr3.appendChild(tr3td2);
        parentNode.appendChild(tr3);
        let tr4 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr4td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr4td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'acc_adm_cnf_pass'
                }
            }]);
        tr4td1lbl1.textContent = 'Retype Password : ';
        tr4td1.appendChild(tr4td1lbl1);
        tr4.appendChild(tr4td1);
        let tr4td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr4td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'acc_adm_cnf_pass',
                    'name': 'acc_adm_cnf_pass',
                    'type': 'password',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Retype password',
                    'required': 'required',
                    'pattern': '(?=.*\\d)(?=.*[@_])(?=.*[a-z])(?=.*[A-Z]).{6,}',
                    'title': 'Must contain at least one  number and one uppercase and lowercase letter and at least 6 or more characters',
                    'autocomplete': 'off'
                }
            }]);
        tr4td2.appendChild(tr4td2input1);
        tr4.appendChild(tr4td2);
        parentNode.appendChild(tr4);
    };
    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerWebsiteBaseUI = (parentNode) => {
        let frm1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'form': {
                    'id': 'app-website-initialize',
                    'method': 'post',
                    'autocomplete': 'off'
                }
            }]);
        let frm1input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'type': 'hidden',
                    'name': 'website',
                    'value': '1'
                }
            }]);
        frm1.appendChild(frm1input1);
        let frm1fdt1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'fieldset': {
                    'id': 'app-install-website-sandbox',
                    'class': 'box-shadow box-shadow-light'
                }
            }]);
        let frm1fdt1lgd1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'legend': {
                    'id': 'app-install-website-sandbox-title',
                    'class': 'box-shadow box-shadow-light',
                    'style': 'font-weight: 600;'
                }
            }]);
        frm1fdt1lgd1.textContent = 'Website configure';
        frm1fdt1.appendChild(frm1fdt1lgd1);
        let frm1fdt1dv1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'class': 'row'
                }
            }]);
        let frm1fdt1lgd1dv1tbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'table': {
                    'id': 'app-install-website-tags',
                    'class': 'table table-condensed',
                    'method': 'app-install-website'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
        let frm1fdt1lgd1dv1dv1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'id': 'app-install-website-sandbox-footer',
                    'class': 'float-right text-align-right'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
        let frm1fdt1lgd1dv1dv1btn2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'app-website-install',
                    'type': 'submit',
                    'class': 'button button-outline-primary'
                }
            }]);
        frm1fdt1lgd1dv1dv1btn2.textContent = 'Finish';
        frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn2);
        frm1fdt1.appendChild(frm1fdt1dv1);
        frm1.appendChild(frm1fdt1);
        if (document.getElementsByTagName('form')[0]) {
            document.getElementsByTagName('form')[0].remove();
        }
        parentNode.appendChild(frm1);
    };
    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerWebsiteDefaultUI = (parentNode) => {
        let tr1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr1td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr1td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'site_name'
                }
            }]);
        tr1td1lbl1.textContent = 'New name : ';
        tr1td1.appendChild(tr1td1lbl1);
        tr1.appendChild(tr1td1);
        let tr1td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr1td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'site_name',
                    'name': 'site_name',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Name',
                    'required': 'required',
                    'autocomplete': 'off'
                }
            }]);
        tr1td2.appendChild(tr1td2input1);
        tr1.appendChild(tr1td2);
        parentNode.appendChild(tr1);
        let tr2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr2td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr2td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'site_description'
                }
            }]);
        tr2td1lbl1.textContent = 'Description : ';
        tr2td1.appendChild(tr2td1lbl1);
        tr2.appendChild(tr2td1);
        let tr2td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr2td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'textarea': {
                    'id': 'site_description',
                    'name': 'site_description',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Description',
                    'required': 'required',
                    'autocomplete': 'off',
                    'style': 'width:100% !important'
                }
            }]);
        tr2td2.appendChild(tr2td2input1);
        tr2.appendChild(tr2td2);
        parentNode.appendChild(tr2);
        let tr3 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr3td1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr3td1lbl1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'site_company'
                }
            }]);
        tr3td1lbl1.textContent = 'Company : ';
        tr3td1.appendChild(tr3td1lbl1);
        tr3.appendChild(tr3td1);
        let tr3td2 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr3td2input1 = (0,_common_app_common__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'site_company',
                    'name': 'site_company',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Company',
                    'value': _common_app_db__WEBPACK_IMPORTED_MODULE_1__.app.default.companyName,
                    'required': 'required',
                    'autocomplete': 'off'
                }
            }]);
        tr3td2.appendChild(tr3td2input1);
        tr3.appendChild(tr3td2);
        parentNode.appendChild(tr3);
    };
}
((command) => {
    if (command === 'install') {
        MishusoftInstaller.init();
    }
})((0,_common_app_common_required__WEBPACK_IMPORTED_MODULE_3__.captureElement)('body').id);

})();

/******/ })()
;
//# sourceMappingURL=installer.js.map