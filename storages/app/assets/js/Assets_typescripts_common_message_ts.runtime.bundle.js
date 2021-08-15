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
//# sourceMappingURL=Assets_typescripts_common_message_ts.runtime.bundle.js.map