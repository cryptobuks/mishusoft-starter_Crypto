"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_mishusoft_addSpace_ts"],{

/***/ "./Assets/typescripts/mishusoft/addSpace.ts":
/*!**************************************************!*\
  !*** ./Assets/typescripts/mishusoft/addSpace.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increaseHeight": () => (/* binding */ increaseHeight)
/* harmony export */ });
let increaseHeight = () => {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
        let captureElement = dom.captureElement;
        let clientHeight = captureElement('#flex-center').firstElementChild.clientHeight;
        captureElement('#flex-center').firstElementChild.style = 'height:' + (+clientHeight + 25) + 'px';
    }).catch(function (err) {
        console.log(err);
    });
};


/***/ })

}]);
//# sourceMappingURL=Assets_typescripts_mishusoft_addSpace_ts.runtime.bundle.js.map