var MishusoftRuntime;
/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************************************!*\
  !*** ./Assets/typescripts/loader.ts ***!
  \**************************************/
document.addEventListener('readystatechange', () => {
    //hide app loader on document completed
    if (document.readyState === 'complete') {
        //initialize app loader image & application
        if (document.querySelector('#app-loader')) {
            document.querySelector('#app-loader')?.setAttribute('style', 'display:none;');
        }
    }
});

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./Assets/sass/loader.scss ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

MishusoftRuntime = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbG9hZGVyLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLHVDQUF1QztJQUN2QyxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO1FBQ3BDLDJDQUEyQztRQUMzQyxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdkMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ2pGO0tBQ0o7QUFDTCxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNSSCIsInNvdXJjZXMiOlsid2VicGFjazovL01pc2h1c29mdFJ1bnRpbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTWlzaHVzb2Z0UnVudGltZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL01pc2h1c29mdFJ1bnRpbWUvLi9Bc3NldHMvdHlwZXNjcmlwdHMvbG9hZGVyLnRzIiwid2VicGFjazovL01pc2h1c29mdFJ1bnRpbWUvLi9Bc3NldHMvc2Fzcy9sb2FkZXIuc2Nzcz9hYThhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKCkgPT4ge1xuICAgIC8vaGlkZSBhcHAgbG9hZGVyIG9uIGRvY3VtZW50IGNvbXBsZXRlZFxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIC8vaW5pdGlhbGl6ZSBhcHAgbG9hZGVyIGltYWdlICYgYXBwbGljYXRpb25cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtbG9hZGVyJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtbG9hZGVyJyk/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=