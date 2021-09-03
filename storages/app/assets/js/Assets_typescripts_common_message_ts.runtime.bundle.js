"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_common_message_ts"],{

/***/ "./Assets/typescripts/common/message.ts":
/*!**********************************************!*\
  !*** ./Assets/typescripts/common/message.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMessage": () => (/* binding */ showMessage),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage),
/* harmony export */   "viewMessage": () => (/* binding */ viewMessage)
/* harmony export */ });
/**
 * @param response any
 * @param element HTML element
 * @param callback any
 **/
function showMessage(response, element, callback) {
    __webpack_require__.e(/*! import() */ "vendors-node_modules_sweetalert_dist_sweetalert_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! sweetalert */ "../node_modules/sweetalert/dist/sweetalert.min.js", 23)).then(function (alert) {
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_validation_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./validation */ "./Assets/typescripts/common/validation.ts")).then(function (validation) {
            if (validation.IsJsonString(response)) {
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
                    return alert.default('Your data!', response, 'success');
                }
            }
            else {
                if (response.indexOf('<!doctype html>') !== -1 && response.indexOf('flex-center') !== -1) {
                    __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
                        let captureElement = dom.captureElement;
                        let createElement = dom.createElement;
                        if (captureElement('#popup-login') === null) {
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
                            popupDocumentBody.innerHTML = response.substr(response.indexOf('<div class="logInBox'), (response.indexOf('</div> </section>') - response.indexOf('<div class="logInBox')))
                                .replace('logInBox box-shadow box-shadow-light', 'logInBox')
                                .replace('<div class="float-right text-right"><input type="submit"', '<div class="float-right text-right" style="margin-right: 5px;"><input type="submit"');
                            popupDocument.appendChild(popupDocumentBody);
                            document.body.appendChild(popup);
                        }
                    });
                }
                else {
                    return alert.default('Oop! Something went wrong!', response, 'error');
                }
            }
        });
    });
}
/**
 * @param self
 * @param data JSON Object
 * @param __appHostUrl Valid url
 **/
function sendMessage(self, data, __appHostUrl) {
    // @ts-ignore
    __webpack_require__.e(/*! import() */ "vendors-node_modules_sweetalert_dist_sweetalert_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! sweetalert */ "../node_modules/sweetalert/dist/sweetalert.min.js", 23)).then(function (alert) {
        if (data !== undefined && data !== null && data.constructor === Object && __appHostUrl !== null) {
            __webpack_require__.e(/*! import() */ "Assets_typescripts_common_request_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
                return request.sendRequest({
                    method: "POST",
                    url: __appHostUrl,
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: data
                }, function (response) {
                    __webpack_require__.e(/*! import() */ "Assets_typescripts_common_validation_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./validation */ "./Assets/typescripts/common/validation.ts")).then(function (validation) {
                        if (validation.IsJsonString(response)) {
                            document.querySelector('#app-loader')?.setAttribute('style', 'display:none;');
                            return self.appRuntimeEventManager(JSON.parse(response));
                        }
                        else {
                            return alert.default("Oops! Something went wrong!", response, "error");
                        }
                    });
                });
            });
        }
        else {
            return alert.default("Oops! We can't send request!", "error");
        }
    });
}
function viewMessage(title, data, icon) {
    return sweetAlert(title, data, icon);
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX2NvbW1vbl9tZXNzYWdlX3RzLnJ1bnRpbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0lBSUk7QUFDRyxTQUFTLFdBQVcsQ0FBQyxRQUFhLEVBQUUsT0FBK0IsRUFBRSxRQUE0QztJQUNwSCxnT0FBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO1FBQ3JDLHFNQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLFVBQVU7WUFDNUMsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsUUFBUSxHQUFHLEVBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUN2RSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO29CQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO3dCQUN2QixRQUFRLElBQUksUUFBUSxDQUFDO3dCQUNyQixNQUFNLElBQUksK0JBQStCLENBQUM7cUJBQzdDO29CQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7d0JBQ3pCLFFBQVEsSUFBSSxTQUFTLENBQUM7d0JBQ3RCLE1BQU0sSUFBSSwrQkFBK0IsQ0FBQztxQkFDN0M7b0JBRUQsSUFBSSxJQUFJLDhCQUE4QixHQUFHLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztvQkFDMUUsSUFBSSxJQUFJLG1CQUFtQixHQUFHLFFBQVEsR0FBRyxXQUFXLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQztvQkFDMUUsSUFBSSxJQUFJLDZEQUE2RCxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUM5RixJQUFJLElBQUksUUFBUSxDQUFDO29CQUVqQixJQUFJLE9BQU8sRUFBRTt3QkFDVCxPQUFPLENBQUMs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Q0FBZ0MsRUFBQyxDQUFDO29CQUN6RSxJQUFJLEVBQUUsSUFBSTtpQkFDYixFQUFFLFVBQVUsUUFBYTtvQkFDdEIscU1BQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsVUFBVTt3QkFDNUMsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFOzRCQUNuQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7NEJBQzlFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt5QkFDNUQ7NkJBQU07NEJBQ0gsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzt5QkFDMUU7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBRVAsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUVOO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUM7QUFFTSxTQUFTLFdBQVcsQ0FBQyxLQUFVLEVBQUUsSUFBUyxFQUFFLElBQVM7SUFDeEQsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTWlzaHVzb2Z0UnVudGltZS8uL0Fzc2V0cy90eXBlc2NyaXB0cy9jb21tb24vbWVzc2FnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSByZXNwb25zZSBhbnlcbiAqIEBwYXJhbSBlbGVtZW50IEhUTUwgZWxlbWVudFxuICogQHBhcmFtIGNhbGxiYWNrIGFueVxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dNZXNzYWdlKHJlc3BvbnNlOiBhbnksIGVsZW1lbnQ6IHsgaW5uZXJIVE1MOiBzdHJpbmc7IH0sIGNhbGxiYWNrPzogKChhcmcwOiBhbnkpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSB7XG4gICAgaW1wb3J0KCdzd2VldGFsZXJ0JykudGhlbihmdW5jdGlvbiAoYWxlcnQpIHtcbiAgICAgICAgaW1wb3J0KCcuL3ZhbGlkYXRpb24nKS50aGVuKGZ1bmN0aW9uICh2YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5Jc0pzb25TdHJpbmcocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKSwgaHRtbCA9IFwiXCIsIGVyckNsYXNzID0gJycsIHN5bWJvbCA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyckNsYXNzICs9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sICs9IFwiPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzXFxcIj48L2k+XCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyckNsYXNzICs9ICdzdWNjZXNzJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCArPSBcIjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCI+PC9pPlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cImJveC1tZXNzYWdlIGJveC0nICsgZXJyQ2xhc3MgKyAnIGJveC1zaGFkb3ctbGlnaHRcIj4nO1xuICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8c3BhbiBjbGFzcz1cImJveC0nICsgZXJyQ2xhc3MgKyAnLXN5bWJvbFwiPicgKyBzeW1ib2wgKyAnPC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxwICBjbGFzcz1cIm5vdGlmeS1tZC1jb250ZW50XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPicgKyBkYXRhLm1lc3NhZ2UgKyAnPC9wPic7XG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzwvZGl2Pic7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydC5kZWZhdWx0KCdZb3VyIGRhdGEhJywgcmVzcG9uc2UsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaW5kZXhPZignPCFkb2N0eXBlIGh0bWw+JykgIT09IC0xICYmIHJlc3BvbnNlLmluZGV4T2YoJ2ZsZXgtY2VudGVyJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcHR1cmVFbGVtZW50ID0gZG9tLmNhcHR1cmVFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI3BvcHVwLWxvZ2luJykgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cCA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdic6IHsnaWQnOiAncG9wdXAtbG9naW4nLCAnY2xhc3MnOiAnbW9kYWwnLCAnc3R5bGUnOiAnZGlzcGxheTpibG9jazsnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cERvY3VtZW50ID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JzogeydjbGFzcyc6ICdyb3cgbW9kYWwtY29udGVudCBhbmltYXRlJywgJ3N0eWxlJzogJ3dpZHRoOjM0LjUlOyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwRG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwRG9jdW1lbnRCb2R5ID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JzogeydjbGFzcyc6ICdtb2RhbC1ib2R5J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBEb2N1bWVudEJvZHkuaW5uZXJIVE1MID0gcmVzcG9uc2Uuc3Vic3RyKHJlc3BvbnNlLmluZGV4T2YoJzxkaXYgY2xhc3M9XCJsb2dJbkJveCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UuaW5kZXhPZignPC9kaXY+IDwvc2VjdGlvbj4nKSAtIHJlc3BvbnNlLmluZGV4T2YoJzxkaXYgY2xhc3M9XCJsb2dJbkJveCcpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2xvZ0luQm94IGJveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodCcsICdsb2dJbkJveCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmbG9hdC1yaWdodCB0ZXh0LXJpZ2h0XCI+PGlucHV0IHR5cGU9XCJzdWJtaXRcIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0IHRleHQtcmlnaHRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogNXB4O1wiPjxpbnB1dCB0eXBlPVwic3VibWl0XCInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBEb2N1bWVudC5hcHBlbmRDaGlsZChwb3B1cERvY3VtZW50Qm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydC5kZWZhdWx0KCdPb3AhIFNvbWV0aGluZyB3ZW50IHdyb25nIScsIHJlc3BvbnNlLCAnZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSBzZWxmXG4gKiBAcGFyYW0gZGF0YSBKU09OIE9iamVjdFxuICogQHBhcmFtIF9fYXBwSG9zdFVybCBWYWxpZCB1cmxcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZShzZWxmOiBhbnksIGRhdGE6IGFueSwgX19hcHBIb3N0VXJsOiBzdHJpbmcpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaW1wb3J0KCdzd2VldGFsZXJ0JykudGhlbihmdW5jdGlvbiAoYWxlcnQpIHtcbiAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhICE9PSBudWxsICYmIGRhdGEuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiBfX2FwcEhvc3RVcmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGltcG9ydCgnLi9yZXF1ZXN0JykudGhlbihmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LnNlbmRSZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBfX2FwcEhvc3RVcmwsXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7bmFtZTogXCJDb250ZW50LXR5cGVcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCJ9XSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi92YWxpZGF0aW9uJykudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uSXNKc29uU3RyaW5nKHJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtbG9hZGVyJyk/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmFwcFJ1bnRpbWVFdmVudE1hbmFnZXIoSlNPTi5wYXJzZShyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQuZGVmYXVsdChcIk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nIVwiLCByZXNwb25zZSwgXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQuZGVmYXVsdChcIk9vcHMhIFdlIGNhbid0IHNlbmQgcmVxdWVzdCFcIiwgXCJlcnJvclwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aWV3TWVzc2FnZSh0aXRsZTogYW55LCBkYXRhOiBhbnksIGljb246IGFueSkge1xuICAgIHJldHVybiBzd2VldEFsZXJ0KHRpdGxlLCBkYXRhLCBpY29uKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=