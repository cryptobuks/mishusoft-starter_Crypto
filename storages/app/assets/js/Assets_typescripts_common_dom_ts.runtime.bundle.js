"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_common_dom_ts"],{

/***/ "./Assets/typescripts/common/dom.ts":
/*!******************************************!*\
  !*** ./Assets/typescripts/common/dom.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "captureElement": () => (/* binding */ captureElement),
/* harmony export */   "captureElements": () => (/* binding */ captureElements)
/* harmony export */ });
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
function captureElement(selectors) {
    if (document.querySelector(selectors) !== null) {
        return document.querySelector(selectors);
    }
}
function captureElements(selectors) {
    if (document.querySelectorAll(selectors) !== null) {
        return document.querySelectorAll(selectors);
    }
}


/***/ })

}]);
//# sourceMappingURL=Assets_typescripts_common_dom_ts.runtime.bundle.js.map