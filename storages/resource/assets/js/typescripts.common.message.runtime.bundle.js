(self["webpackChunk"] = self["webpackChunk"] || []).push([["typescripts_common_message_ts"],{

/***/ "./typescripts/common/message.ts":
/*!***************************************!*\
  !*** ./typescripts/common/message.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMessage": function() { return /* binding */ showMessage; },
/* harmony export */   "sendMessage": function() { return /* binding */ sendMessage; },
/* harmony export */   "viewMessage": function() { return /* binding */ viewMessage; }
/* harmony export */ });
/**
 * @param response any
 * @param element HTML element
 * @param callback any
 **/
function showMessage(response, element, callback) {
    __webpack_require__.e(/*! import() */ "vendors-node_modules_sweetalert_dist_sweetalert_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! sweetalert */ "../node_modules/sweetalert/dist/sweetalert.min.js", 23)).then(function (alert) {
        __webpack_require__.e(/*! import() */ "typescripts_common_validation_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./validation */ "./typescripts/common/validation.ts")).then(function (validation) {
            if (validation.IsJsonString(response)) {
                var data = JSON.parse(response), html = "", errClass = '', symbol = '';
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
                    __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dom */ "./typescripts/common/dom.ts")).then(function (dom) {
                        var captureElement = dom.captureElement;
                        var createElement = dom.createElement;
                        if (captureElement('#popup-login') === null) {
                            var popup = createElement([{
                                    'div': { 'id': 'popup-login', 'class': 'modal', 'style': 'display:block;' }
                                }]);
                            var popupDocument = createElement([{
                                    'div': { 'class': 'row modal-content animate', 'style': 'width:34.5%;' }
                                }]);
                            popup.appendChild(popupDocument);
                            var popupDocumentBody = createElement([{
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
            __webpack_require__.e(/*! import() */ "typescripts_common_request_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./request */ "./typescripts/common/request.ts")).then(function (request) {
                return request.sendRequest({
                    method: "POST",
                    url: __appHostUrl,
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: data
                }, function (response) {
                    __webpack_require__.e(/*! import() */ "typescripts_common_validation_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./validation */ "./typescripts/common/validation.ts")).then(function (validation) {
                        var _a;
                        if (validation.IsJsonString(response)) {
                            (_a = document.querySelector('#app-loader')) === null || _a === void 0 ? void 0 : _a.setAttribute('style', 'display:none;');
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

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdHlwZXNjcmlwdHMuY29tbW9uLm1lc3NhZ2UucnVudGltZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztJQUlJO0FBQ0csU0FBUyxXQUFXLENBQUMsUUFBYSxFQUFFLE9BQStCLEVBQUUsUUFBNEM7SUFDcEgsZ09BQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztRQUNyQyx1TEFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxVQUFVO1lBQzVDLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLFFBQVEsR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDdkUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtvQkFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTt3QkFDdkIsUUFBUSxJQUFJLFFBQVEsQ0FBQzt3QkFDckIsTUFBTSxJQUFJLCtCQUErQixDQUFDO3FCQUM3QztvQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO3dCQUN6QixRQUFRLElBQUksU0FBUyxDQUFDO3dCQUN0QixNQUFNLElBQUksK0JBQStCLENBQUM7cUJBQzdDO29CQUVELElBQUksSUFBSSw4QkFBOEIsR0FBRyxRQUFRLEdBQUcscUJBQXFCLENBQUM7b0JBQzFFLElBQUksSUFBSSxtQkFBbUIsR0FBRyxRQUFRLEdBQUcsV0FBVyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUM7b0JBQzFFLElBQUksSUFBSSw2REFBNkQsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDOUYsSUFBSSxJQUFJLFFBQVEsQ0FBQztvQkFFakIsSUFBSSxPQUFPLEVBQUU7d0JBQ1QsT0FBTyxDQUFDLFNBQVMsR0FBRyxJ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Q0FBQztvQkFDekUsSUFBSSxFQUFFLElBQUk7aUJBQ2IsRUFBRSxVQUFVLFFBQWE7b0JBQ3RCLHVMQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLFVBQVU7O3dCQUM1QyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7NEJBQ25DLGNBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLDBDQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7NEJBQzlFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt5QkFDNUQ7NkJBQU07NEJBQ0gsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzt5QkFDMUU7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBRVAsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUVOO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUM7QUFFTSxTQUFTLFdBQVcsQ0FBQyxLQUFVLEVBQUUsSUFBUyxFQUFFLElBQVM7SUFDeEQsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdHlwZXNjcmlwdHMvY29tbW9uL21lc3NhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBwYXJhbSByZXNwb25zZSBhbnlcclxuICogQHBhcmFtIGVsZW1lbnQgSFRNTCBlbGVtZW50XHJcbiAqIEBwYXJhbSBjYWxsYmFjayBhbnlcclxuICoqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd01lc3NhZ2UocmVzcG9uc2U6IGFueSwgZWxlbWVudDogeyBpbm5lckhUTUw6IHN0cmluZzsgfSwgY2FsbGJhY2s/OiAoKGFyZzA6IGFueSkgPT4gdm9pZCkgfCB1bmRlZmluZWQpIHtcclxuICAgIGltcG9ydCgnc3dlZXRhbGVydCcpLnRoZW4oZnVuY3Rpb24gKGFsZXJ0KSB7XHJcbiAgICAgICAgaW1wb3J0KCcuL3ZhbGlkYXRpb24nKS50aGVuKGZ1bmN0aW9uICh2YWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLklzSnNvblN0cmluZyhyZXNwb25zZSkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSksIGh0bWwgPSBcIlwiLCBlcnJDbGFzcyA9ICcnLCBzeW1ib2wgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFwiZXJyb3JcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJDbGFzcyArPSAnZGFuZ2VyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sICs9IFwiPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzXFxcIj48L2k+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyckNsYXNzICs9ICdzdWNjZXNzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sICs9IFwiPGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrXFxcIj48L2k+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwiYm94LW1lc3NhZ2UgYm94LScgKyBlcnJDbGFzcyArICcgYm94LXNoYWRvdy1saWdodFwiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPHNwYW4gY2xhc3M9XCJib3gtJyArIGVyckNsYXNzICsgJy1zeW1ib2xcIj4nICsgc3ltYm9sICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxwICBjbGFzcz1cIm5vdGlmeS1tZC1jb250ZW50XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPicgKyBkYXRhLm1lc3NhZ2UgKyAnPC9wPic7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPC9kaXY+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0LmRlZmF1bHQoJ1lvdXIgZGF0YSEnLCByZXNwb25zZSwgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5pbmRleE9mKCc8IWRvY3R5cGUgaHRtbD4nKSAhPT0gLTEgJiYgcmVzcG9uc2UuaW5kZXhPZignZmxleC1jZW50ZXInKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vZG9tJykudGhlbihmdW5jdGlvbiAoZG9tKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcHR1cmVFbGVtZW50ID0gZG9tLmNhcHR1cmVFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3JlYXRlRWxlbWVudCA9IGRvbS5jcmVhdGVFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNwb3B1cC1sb2dpbicpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cCA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JzogeydpZCc6ICdwb3B1cC1sb2dpbicsICdjbGFzcyc6ICdtb2RhbCcsICdzdHlsZSc6ICdkaXNwbGF5OmJsb2NrOyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cERvY3VtZW50ID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnOiB7J2NsYXNzJzogJ3JvdyBtb2RhbC1jb250ZW50IGFuaW1hdGUnLCAnc3R5bGUnOiAnd2lkdGg6MzQuNSU7J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwRG9jdW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBEb2N1bWVudEJvZHkgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdic6IHsnY2xhc3MnOiAnbW9kYWwtYm9keSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cERvY3VtZW50Qm9keS5pbm5lckhUTUwgPSByZXNwb25zZS5zdWJzdHIocmVzcG9uc2UuaW5kZXhPZignPGRpdiBjbGFzcz1cImxvZ0luQm94JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlLmluZGV4T2YoJzwvZGl2PiA8L3NlY3Rpb24+JykgLSByZXNwb25zZS5pbmRleE9mKCc8ZGl2IGNsYXNzPVwibG9nSW5Cb3gnKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2xvZ0luQm94IGJveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodCcsICdsb2dJbkJveCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZmxvYXQtcmlnaHQgdGV4dC1yaWdodFwiPjxpbnB1dCB0eXBlPVwic3VibWl0XCInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0IHRleHQtcmlnaHRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogNXB4O1wiPjxpbnB1dCB0eXBlPVwic3VibWl0XCInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwRG9jdW1lbnQuYXBwZW5kQ2hpbGQocG9wdXBEb2N1bWVudEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0LmRlZmF1bHQoJ09vcCEgU29tZXRoaW5nIHdlbnQgd3JvbmchJywgcmVzcG9uc2UsICdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBzZWxmXHJcbiAqIEBwYXJhbSBkYXRhIEpTT04gT2JqZWN0XHJcbiAqIEBwYXJhbSBfX2FwcEhvc3RVcmwgVmFsaWQgdXJsXHJcbiAqKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKHNlbGY6IGFueSwgZGF0YTogYW55LCBfX2FwcEhvc3RVcmw6IHN0cmluZykge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaW1wb3J0KCdzd2VldGFsZXJ0JykudGhlbihmdW5jdGlvbiAoYWxlcnQpIHtcclxuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgIT09IG51bGwgJiYgZGF0YS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmIF9fYXBwSG9zdFVybCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbXBvcnQoJy4vcmVxdWVzdCcpLnRoZW4oZnVuY3Rpb24gKHJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LnNlbmRSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogX19hcHBIb3N0VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogW3tuYW1lOiBcIkNvbnRlbnQtdHlwZVwiLCB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIn1dLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL3ZhbGlkYXRpb24nKS50aGVuKGZ1bmN0aW9uICh2YWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLklzSnNvblN0cmluZyhyZXNwb25zZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtbG9hZGVyJyk/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuYXBwUnVudGltZUV2ZW50TWFuYWdlcihKU09OLnBhcnNlKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQuZGVmYXVsdChcIk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nIVwiLCByZXNwb25zZSwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0LmRlZmF1bHQoXCJPb3BzISBXZSBjYW4ndCBzZW5kIHJlcXVlc3QhXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmlld01lc3NhZ2UodGl0bGU6IGFueSwgZGF0YTogYW55LCBpY29uOiBhbnkpIHtcclxuICAgIHJldHVybiBzd2VldEFsZXJ0KHRpdGxlLCBkYXRhLCBpY29uKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==