"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_common_validation_ts"],{

/***/ "./Assets/typescripts/common/validation.ts":
/*!*************************************************!*\
  !*** ./Assets/typescripts/common/validation.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=Assets_typescripts_common_validation_ts.runtime.bundle.js.map