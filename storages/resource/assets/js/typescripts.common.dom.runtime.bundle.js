(self["webpackChunk"] = self["webpackChunk"] || []).push([["typescripts_common_dom_ts"],{

/***/ "./typescripts/common/dom.ts":
/*!***********************************!*\
  !*** ./typescripts/common/dom.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": function() { return /* binding */ createElement; },
/* harmony export */   "captureElement": function() { return /* binding */ captureElement; },
/* harmony export */   "captureElements": function() { return /* binding */ captureElements; },
/* harmony export */   "removeAttributeById": function() { return /* binding */ removeAttributeById; },
/* harmony export */   "changeElementDisplayById": function() { return /* binding */ changeElementDisplayById; },
/* harmony export */   "changeElementValueById": function() { return /* binding */ changeElementValueById; },
/* harmony export */   "changeElementAttributeValue": function() { return /* binding */ changeElementAttributeValue; }
/* harmony export */ });
// export function createElement(name : string, attributes: any) {
//     let element = document.createElement(name);
//     return assignAttributes(element, attributes);
// }
//
// export function assignAttributes(element : HTMLElement, attributes: any) {
//     if (attributes.length !== 0){
//         for (let attr in attributes) {
//             element.setAttribute(attr, attributes[attr]);
//         }
//     }
//
//     return element;
// }
function createElement(details) {
    var element, i, j, k;
    for (i in details) {
        var data = details[i];
        for (j in data) {
            var elementName = j;
            var elementData = data[j];
            element = document.createElement(elementName);
            for (k in elementData) {
                var element_attribute = k;
                var element_attribute_value = elementData[k];
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
        var data = keyAttrAndValue;
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
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

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdHlwZXNjcmlwdHMuY29tbW9uLmRvbS5ydW50aW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrRUFBa0U7QUFDbEUsa0RBQWtEO0FBQ2xELG9EQUFvRDtBQUNwRCxJQUFJO0FBQ0osRUFBRTtBQUNGLDZFQUE2RTtBQUM3RSxvQ0FBb0M7QUFDcEMseUNBQXlDO0FBQ3pDLDREQUE0RDtBQUM1RCxZQUFZO0FBQ1osUUFBUTtBQUNSLEVBQUU7QUFDRixzQkFBc0I7QUFDdEIsSUFBSTtBQUdHLFNBQVMsYUFBYSxDQUFDLE9BQWM7SUFDeEMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsS0FBSyxDQUFDLElBQUksT0FBTyxFQUFFO1FBQ2YsSUFBSSxJQUFJLEdBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNaLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO2dCQUNuQixJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztnQkFDMUIsSUFBSSx1QkFBdUIsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQzthQUNwRTtTQUNKO0tBQ0o7SUFDRCxPQUFRLE9BQXVCLENBQUM7QUFDcEMsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUE4QixTQUFpQjtJQUN6RSxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQzVDLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQWdCLENBQUM7S0FDM0Q7QUFDTCxDQUFDO0FBRU0sU0FBUyxlQUFlLENBQThCLFNBQWlCO0lBQzFFLElBQUksUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUMvQyxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQWEsQ0FBQztLQUMzRDtBQUNMLENBQUM7QUFFTSxTQUFTLG1CQUFtQixDQUFDLFFBQWdCO0lBQ2hELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87WUFDOUIsY0FBYyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUM7S0FDTDtBQUNMLENBQUM7QUFFTSxTQUFTLHdCQUF3QixDQUFDLFFBQWdCO0lBQ3JELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87WUFDOUIsY0FBYyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDO0FBRU0sU0FBUyxzQkFBc0IsQ0FBQyxRQUFnQjtJQUNuRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPO1lBQzlCLGNBQWMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDO0FBRU0sU0FBUywyQkFBMkIsQ0FBQyxRQUFhLEVBQUUsZUFBc0I7SUFDN0UsMEJBQTBCO0lBQzFCLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzFCLElBQUksSUFBSSxHQUFHLGVBQWUsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2FBQ3RFO1NBQ0o7S0FDSjtBQUNMLENBQUM7QUFFRCxtREFBbUQ7QUFDbkQsa0ZBQWtGO0FBQ2xGLElBQUk7QUFDSixvREFBb0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90eXBlc2NyaXB0cy9jb21tb24vZG9tLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChuYW1lIDogc3RyaW5nLCBhdHRyaWJ1dGVzOiBhbnkpIHtcclxuLy8gICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcclxuLy8gICAgIHJldHVybiBhc3NpZ25BdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBhc3NpZ25BdHRyaWJ1dGVzKGVsZW1lbnQgOiBIVE1MRWxlbWVudCwgYXR0cmlidXRlczogYW55KSB7XHJcbi8vICAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggIT09IDApe1xyXG4vLyAgICAgICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cmlidXRlcykge1xyXG4vLyAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzW2F0dHJdKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICByZXR1cm4gZWxlbWVudDtcclxuLy8gfVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGRldGFpbHM6IGFueVtdKSB7XHJcbiAgICBsZXQgZWxlbWVudCwgaSwgaiwgaztcclxuICAgIGZvciAoaSBpbiBkZXRhaWxzKSB7XHJcbiAgICAgICAgbGV0IGRhdGE6IGFueSA9IGRldGFpbHNbaV07XHJcbiAgICAgICAgZm9yIChqIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnROYW1lID0gajtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnREYXRhID0gZGF0YVtqXTtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xyXG4gICAgICAgICAgICBmb3IgKGsgaW4gZWxlbWVudERhdGEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50X2F0dHJpYnV0ZSA9IGs7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudF9hdHRyaWJ1dGVfdmFsdWUgPSBlbGVtZW50RGF0YVtrXTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGVsZW1lbnRfYXR0cmlidXRlLCBlbGVtZW50X2F0dHJpYnV0ZV92YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUVsZW1lbnQ8RSBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PihzZWxlY3RvcnM6IHN0cmluZyk6IGFueSB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMpICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcHR1cmVFbGVtZW50czxFIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+KHNlbGVjdG9yczogc3RyaW5nKTogYW55IHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycykgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMpIGFzIE5vZGVMaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlQnlJZChlbGVtZW50czogYW55IFtdKSB7XHJcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnIycgKyBlbGVtZW50LmlkKS5yZW1vdmVBdHRyaWJ1dGUoZWxlbWVudC5hdHRyaWJ1dGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VFbGVtZW50RGlzcGxheUJ5SWQoZWxlbWVudHM6IGFueSBbXSkge1xyXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyMnICsgZWxlbWVudC5pZCkuc3R5bGUuZGlzcGxheSA9IGVsZW1lbnQuZGlzcGxheTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUVsZW1lbnRWYWx1ZUJ5SWQoZWxlbWVudHM6IGFueSBbXSkge1xyXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyMnICsgZWxlbWVudC5pZCkudmFsdWUgPSBlbGVtZW50LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRWxlbWVudEF0dHJpYnV0ZVZhbHVlKHNlbGVjdG9yOiBhbnksIGtleUF0dHJBbmRWYWx1ZTogYW55W10pIHtcclxuICAgIC8vaW5pdCBlZGl0IHBhZCBieSBkZWZhdWx0XHJcbiAgICBpZiAoY2FwdHVyZUVsZW1lbnQoc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBrZXlBdHRyQW5kVmFsdWU7XHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoZGF0YVtpXS5rZXkpW2RhdGFbaV0uYXR0cmlidXRlXSA9IGRhdGFbaV0uYXR0cmlidXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0eXBlZEFycmF5VG9VUkwodHlwZWRBcnJheSwgbWltZVR5cGUpIHtcclxuLy8gICAgIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFt0eXBlZEFycmF5LmJ1ZmZlcl0sIHt0eXBlOiBtaW1lVHlwZX0pKVxyXG4vLyB9XHJcbi8vIGNvbnN0IHVybCA9IHR5cGVkQXJyYXlUb1VSTChieXRlcywgJ3RleHQvcGxhaW4nKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==