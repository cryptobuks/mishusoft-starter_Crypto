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
/* harmony export */   "changeElementValueById": () => (/* binding */ changeElementValueById)
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX2NvbW1vbl9kb21fdHMucnVudGltZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBUyxhQUFhLENBQUMsT0FBYztJQUN4QyxJQUFJLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQixLQUFLLENBQUMsSUFBSSxPQUFPLEVBQUU7UUFDZixJQUFJLElBQUksR0FBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ1osSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QyxLQUFLLENBQUMsSUFBSSxXQUFXLEVBQUU7Z0JBQ25CLElBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLHVCQUF1QixHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO2FBQ3BFO1NBQ0o7S0FDSjtJQUNELE9BQVEsT0FBdUIsQ0FBQztBQUNwQyxDQUFDO0FBRU0sU0FBUyxjQUFjLENBQThCLFNBQWlCO0lBQ3pFLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDNUMsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBZ0IsQ0FBQztLQUMzRDtBQUNMLENBQUM7QUFFTSxTQUFTLGVBQWUsQ0FBOEIsU0FBaUI7SUFDMUUsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQy9DLE9BQU8sUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBYSxDQUFDO0tBQzNEO0FBQ0wsQ0FBQztBQUVNLFNBQVMsbUJBQW1CLENBQUMsUUFBZ0I7SUFDaEQsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN2QixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTztZQUM5QixjQUFjLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQztLQUNMO0FBQ0wsQ0FBQztBQUVNLFNBQVMsd0JBQXdCLENBQUMsUUFBZ0I7SUFDckQsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN2QixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTztZQUM5QixjQUFjLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7S0FDTjtBQUNMLENBQUM7QUFFTSxTQUFTLHNCQUFzQixDQUFDLFFBQWdCO0lBQ25ELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87WUFDOUIsY0FBYyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7S0FDTjtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NaXNodXNvZnRSdW50aW1lLy4vQXNzZXRzL3R5cGVzY3JpcHRzL2NvbW1vbi9kb20udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZGV0YWlsczogYW55W10pIHtcbiAgICBsZXQgZWxlbWVudCwgaSwgaiwgaztcbiAgICBmb3IgKGkgaW4gZGV0YWlscykge1xuICAgICAgICBsZXQgZGF0YTogYW55ID0gZGV0YWlsc1tpXTtcbiAgICAgICAgZm9yIChqIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50TmFtZSA9IGo7XG4gICAgICAgICAgICBsZXQgZWxlbWVudERhdGEgPSBkYXRhW2pdO1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICAgICAgICAgICAgZm9yIChrIGluIGVsZW1lbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRfYXR0cmlidXRlID0gaztcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudF9hdHRyaWJ1dGVfdmFsdWUgPSBlbGVtZW50RGF0YVtrXTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShlbGVtZW50X2F0dHJpYnV0ZSwgZWxlbWVudF9hdHRyaWJ1dGVfdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoZWxlbWVudCBhcyBIVE1MRWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXB0dXJlRWxlbWVudDxFIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+KHNlbGVjdG9yczogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMpICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUVsZW1lbnRzPEUgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4oc2VsZWN0b3JzOiBzdHJpbmcpOiBhbnkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycykgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzKSBhcyBOb2RlTGlzdDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGVCeUlkKGVsZW1lbnRzOiBhbnkgW10pIHtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjJyArIGVsZW1lbnQuaWQpLnJlbW92ZUF0dHJpYnV0ZShlbGVtZW50LmF0dHJpYnV0ZSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRWxlbWVudERpc3BsYXlCeUlkKGVsZW1lbnRzOiBhbnkgW10pIHtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjJyArIGVsZW1lbnQuaWQpLnN0eWxlLmRpc3BsYXkgPSBlbGVtZW50LmRpc3BsYXk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUVsZW1lbnRWYWx1ZUJ5SWQoZWxlbWVudHM6IGFueSBbXSkge1xuICAgIGlmIChlbGVtZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyMnICsgZWxlbWVudC5pZCkudmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==