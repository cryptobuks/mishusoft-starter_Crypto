"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_worker-response_ts"],{

/***/ "./Assets/typescripts/worker-response.ts":
/*!***********************************************!*\
  !*** ./Assets/typescripts/worker-response.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerResponse": () => (/* binding */ WorkerResponse)
/* harmony export */ });
class WorkerResponse {
    publicJsUrl;
    constructor(publicJsUrl) {
        this.publicJsUrl = publicJsUrl;
    }
    registerMe() {
        let publicJsUrl = this.publicJsUrl;
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register(`${publicJsUrl}sw.js`).then(registration => {
                    //console.log('SW registered: ', registration);
                }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        }
    }
    getPublicJsUrl() {
        return this.publicJsUrl;
    }
}


/***/ })

}]);
//# sourceMappingURL=Assets_typescripts_worker-response_ts.runtime.bundle.js.map