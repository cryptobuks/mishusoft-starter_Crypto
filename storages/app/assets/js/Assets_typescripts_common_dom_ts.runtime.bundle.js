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
/* harmony export */   "captureElements": () => (/* binding */ captureElements),
/* harmony export */   "removeAttributeById": () => (/* binding */ removeAttributeById),
/* harmony export */   "changeElementDisplayById": () => (/* binding */ changeElementDisplayById),
/* harmony export */   "changeElementValueById": () => (/* binding */ changeElementValueById),
/* harmony export */   "changeElementAttributeValue": () => (/* binding */ changeElementAttributeValue)
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
function removeAttributeById(elements) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            captureElement('#' + element.id).removeAttribute(element.attribute);
        });
    }
}
function changeElementDisplayById(elements) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            captureElement('#' + element.id).style.display = element.display;
        });
    }
}
function changeElementValueById(elements) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            captureElement('#' + element.id).value = element.value;
        });
    }
}
function changeElementAttributeValue(selector, keyAttrAndValue) {
    //init edit pad by default
    if (captureElement(selector)) {
        let data = keyAttrAndValue;
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                captureElement(data[i].key)[data[i].attribute] = data[i].attribute;
            }
        }
    }
}
// function typedArrayToURL(typedArray, mimeType) {
//     return URL.createObjectURL(new Blob([typedArray.buffer], {type: mimeType}))
// }
// const url = typedArrayToURL(bytes, 'text/plain');


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX2NvbW1vbl9kb21fdHMucnVudGltZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVMsYUFBYSxDQUFDLE9BQWM7SUFDeEMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsS0FBSyxDQUFDLElBQUksT0FBTyxFQUFFO1FBQ2YsSUFBSSxJQUFJLEdBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNaLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO2dCQUNuQixJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztnQkFDMUIsSUFBSSx1QkFBdUIsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQzthQUNwRTtTQUNKO0tBQ0o7SUFDRCxPQUFRLE9BQXVCLENBQUM7QUFDcEMsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUE4QixTQUFpQjtJQUN6RSxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQzVDLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQWdCLENBQUM7S0FDM0Q7QUFDTCxDQUFDO0FBRU0sU0FBUyxlQUFlLENBQThCLFNBQWlCO0lBQzFFLElBQUksUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUMvQyxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQWEsQ0FBQztLQUMzRDtBQUNMLENBQUM7QUFFTSxTQUFTLG1CQUFtQixDQUFDLFFBQWdCO0lBQ2hELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87WUFDOUIsY0FBYyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUM7S0FDTDtBQUNMLENBQUM7QUFFTSxTQUFTLHdCQUF3QixDQUFDLFFBQWdCO0lBQ3JELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87WUFDOUIsY0FBYyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDO0FBRU0sU0FBUyxzQkFBc0IsQ0FBQyxRQUFnQjtJQUNuRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPO1lBQzlCLGNBQWMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDO0FBRU0sU0FBUywyQkFBMkIsQ0FBQyxRQUFhLEVBQUUsZUFBc0I7SUFDN0UsMEJBQTBCO0lBQzFCLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzFCLElBQUksSUFBSSxHQUFHLGVBQWUsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2FBQ3RFO1NBQ0o7S0FDSjtBQUNMLENBQUM7QUFFRCxtREFBbUQ7QUFDbkQsa0ZBQWtGO0FBQ2xGLElBQUk7QUFDSixvREFBb0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NaXNodXNvZnRSdW50aW1lLy4vQXNzZXRzL3R5cGVzY3JpcHRzL2NvbW1vbi9kb20udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZGV0YWlsczogYW55W10pIHtcbiAgICBsZXQgZWxlbWVudCwgaSwgaiwgaztcbiAgICBmb3IgKGkgaW4gZGV0YWlscykge1xuICAgICAgICBsZXQgZGF0YTogYW55ID0gZGV0YWlsc1tpXTtcbiAgICAgICAgZm9yIChqIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50TmFtZSA9IGo7XG4gICAgICAgICAgICBsZXQgZWxlbWVudERhdGEgPSBkYXRhW2pdO1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICAgICAgICAgICAgZm9yIChrIGluIGVsZW1lbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRfYXR0cmlidXRlID0gaztcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudF9hdHRyaWJ1dGVfdmFsdWUgPSBlbGVtZW50RGF0YVtrXTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShlbGVtZW50X2F0dHJpYnV0ZSwgZWxlbWVudF9hdHRyaWJ1dGVfdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoZWxlbWVudCBhcyBIVE1MRWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXB0dXJlRWxlbWVudDxFIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+KHNlbGVjdG9yczogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMpICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUVsZW1lbnRzPEUgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4oc2VsZWN0b3JzOiBzdHJpbmcpOiBhbnkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycykgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzKSBhcyBOb2RlTGlzdDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGVCeUlkKGVsZW1lbnRzOiBhbnkgW10pIHtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjJyArIGVsZW1lbnQuaWQpLnJlbW92ZUF0dHJpYnV0ZShlbGVtZW50LmF0dHJpYnV0ZSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRWxlbWVudERpc3BsYXlCeUlkKGVsZW1lbnRzOiBhbnkgW10pIHtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjJyArIGVsZW1lbnQuaWQpLnN0eWxlLmRpc3BsYXkgPSBlbGVtZW50LmRpc3BsYXk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUVsZW1lbnRWYWx1ZUJ5SWQoZWxlbWVudHM6IGFueSBbXSkge1xuICAgIGlmIChlbGVtZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyMnICsgZWxlbWVudC5pZCkudmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VFbGVtZW50QXR0cmlidXRlVmFsdWUoc2VsZWN0b3I6IGFueSwga2V5QXR0ckFuZFZhbHVlOiBhbnlbXSkge1xuICAgIC8vaW5pdCBlZGl0IHBhZCBieSBkZWZhdWx0XG4gICAgaWYgKGNhcHR1cmVFbGVtZW50KHNlbGVjdG9yKSkge1xuICAgICAgICBsZXQgZGF0YSA9IGtleUF0dHJBbmRWYWx1ZTtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudChkYXRhW2ldLmtleSlbZGF0YVtpXS5hdHRyaWJ1dGVdID0gZGF0YVtpXS5hdHRyaWJ1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHR5cGVkQXJyYXlUb1VSTCh0eXBlZEFycmF5LCBtaW1lVHlwZSkge1xuLy8gICAgIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFt0eXBlZEFycmF5LmJ1ZmZlcl0sIHt0eXBlOiBtaW1lVHlwZX0pKVxuLy8gfVxuLy8gY29uc3QgdXJsID0gdHlwZWRBcnJheVRvVVJMKGJ5dGVzLCAndGV4dC9wbGFpbicpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=