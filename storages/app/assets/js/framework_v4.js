var MishusoftRuntime;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Assets/typescripts/common/common.ts":
/*!*********************************************!*\
  !*** ./Assets/typescripts/common/common.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "protectNumberOnlyTextBox": () => (/* binding */ protectNumberOnlyTextBox),
/* harmony export */   "checkInputDataAbility": () => (/* binding */ checkInputDataAbility),
/* harmony export */   "previewImage": () => (/* binding */ previewImage)
/* harmony export */ });
function protectNumberOnlyTextBox() {
    ['keyup', 'paste'].forEach(function (event) {
        document.querySelectorAll('.number-only')[0].addEventListener(event, function (e) {
            if (event === 'keyup') {
                if (isNaN(Number(this.value + ""))) {
                    return false;
                }
            }
            else {
                e.preventDefault();
            }
        });
    });
}
/**
 * @param url string
 * @param dataObject object
 * @param callback any
 * */
function checkInputDataAbility(url, dataObject, callback) {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
        return request.sendRequest({
            method: "POST", url: url, async: true,
            header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            data: dataObject,
        }, function (response) {
            callback(response);
        });
    });
}
/**
 * @param fileId string
 * @param previewerId string
 * */
function previewImage(fileId, previewerId) {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
        let captureElement = dom.captureElement;
        let image = captureElement('#' + fileId);
        if (image.files && image.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                captureElement('#' + previewerId).setAttribute('src', e?.target?.result);
            };
            reader.readAsDataURL(image.files[0]);
        }
    });
}


/***/ }),

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


/***/ }),

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


/***/ }),

/***/ "./Assets/typescripts/common/pagination.ts":
/*!*************************************************!*\
  !*** ./Assets/typescripts/common/pagination.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popUpDialogBoxDriver": () => (/* binding */ popUpDialogBoxDriver),
/* harmony export */   "paginationDriver": () => (/* binding */ paginationDriver),
/* harmony export */   "PopUpDialogBox": () => (/* binding */ PopUpDialogBox)
/* harmony export */ });
/**
 * @param selector string
 * @param titleText string
 * @param processURL string
 * @param messageView string
 * @param callback any
 * */
function popUpDialogBoxDriver(selector, titleText, processURL, messageView, callback) {
    if (document.querySelectorAll(selector).length !== 0) {
        document.querySelectorAll(selector).forEach(function (__deleteButton) {
            __deleteButton.addEventListener('click', function () {
                PopUpDialogBox(titleText, 'Are you want to ' + this.getAttribute('command')?.toLowerCase() + ' this?', this, this.getAttribute('command'), processURL, messageView, function () {
                    popUpDialogBoxDriver(selector, titleText, processURL, messageView, callback);
                }, function (response) {
                    callback(response);
                });
            });
        });
    }
}
/**
 * @param viewMode string
 * @param url string
 * @param extractTo string
 * @param callback any
 * @param fallback any
 * */
function paginationDriver(viewMode, url, extractTo, fallback, callback) {
    if (document.querySelectorAll('.page').length !== 0) {
        document.querySelectorAll('.page').forEach(function (__pager) {
            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                __pager.addEventListener(event, function () {
                    return pagination(viewMode, this.getAttribute('data-page'), url, extractTo, () => {
                        paginationDriver(viewMode, url, extractTo, fallback, callback);
                        callback();
                    }, fallback);
                });
            });
        });
    }
}
/**
 * @param titleText string
 * @param messageText string
 * @param actionBtn HTMLElementObject
 * @param command string
 * @param processURL string
 * @param messageView string
 * @param callback any
 * @param sendResponse any
 * */
function PopUpDialogBox(titleText, messageText, actionBtn, command, processURL, messageView, callback, sendResponse) {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
        let captureElement = dom.captureElement;
        captureElement('#PopUpDialogBox').style.display = 'block';
        captureElement('#PopUpDialogBoxTitle').innerHTML = titleText;
        captureElement(messageView).innerHTML = '<div style="font-size:15px;">' + messageText + '</div>';
        captureElement('#message-done-btn').innerHTML = command;
        let dataObject = { security_code: 1 };
        [...actionBtn.attributes].forEach(function (__attribute) {
            if (__attribute.name.toLowerCase().indexOf('data') !== -1) {
                dataObject[__attribute.name.replace('data-', '')] = __attribute.value;
            }
        });
        captureElement('#message-done-btn').addEventListener('click', function () {
            captureElement('#app-loader').style.display = 'block';
            if (this.textContent === command) {
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
                    return request.sendRequest({
                        method: "POST",
                        url: processURL,
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: dataObject,
                    }, (response) => {
                        captureElement('#PopUpDialogBox').style.display = 'none';
                        captureElement('#app-loader').style.display = 'none';
                        callback();
                        sendResponse(response);
                    });
                });
            }
        });
    });
}
/**
 * @param viewMode string
 * @param page string
 * @param url string
 * @param extractTo string
 * @param callback any
 * @param fallback any
 * */
function pagination(viewMode, page, url, extractTo, callback, fallback) {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
        return request.sendRequest({
            method: "POST", url: url, async: true,
            header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            data: { security_code: 1, pageNumber: page, viewMode: viewMode },
        }, function (response) {
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./validation */ "./Assets/typescripts/common/validation.ts")).then(function (validation) {
                if (validation.IsJsonString(response) && JSON.parse(response).type) {
                    fallback(response);
                }
                else {
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
                        dom.captureElement('#' + extractTo).innerHTML = response;
                        callback();
                    });
                }
            });
        });
    });
}


/***/ }),

/***/ "./Assets/typescripts/common/request.ts":
/*!**********************************************!*\
  !*** ./Assets/typescripts/common/request.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendRequest": () => (/* binding */ sendRequest)
/* harmony export */ });
function sendRequest(options, callback) {
    /*worker.postMessage({
        "command": "sendRequest",
        "options": options,
        "receiver": __appHostedServerRoot
    });

    */
    if (options.method !== null && options.url !== null) {
        /*
        * if (app.runtime.request !== 'pending') {}
        * else { viewMessage('Another request is pending.', 'Your previous request is pending. Please wait until succeeded.', 'error')}
        * */
        try {
            let dataType;
            let request = new XMLHttpRequest();
            request.open(options.method, options.url, options.async);
            if (options.header !== null && typeof options.header == "object") {
                for (let i = 0; i < options.header.length; i++) {
                    request.setRequestHeader(options.header[i].name, options.header[i].value);
                    if (options.header[i].value.indexOf('form') !== -1) {
                        dataType = 'formData';
                    }
                    if (options.header[i].value.indexOf('json') !== -1) {
                        dataType = 'jsonData';
                    }
                }
            }
            if (options.data !== null && typeof options.data == "object") {
                if (dataType === 'jsonData') {
                    request.send(JSON.stringify(options.data));
                }
                if (dataType === 'formData') {
                    let formData = new FormData();
                    Object.keys(options.data).forEach(function (key) {
                        formData.append(key, options.data[key]);
                    });
                    request.send(formData);
                }
            }
            else {
                request.send();
            }
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    if (callback) {
                        callback(this.responseText);
                    }
                    //console.log(this.responseText)
                }
            };
        }
        catch (e) {
            console.error("Fetching error." + e);
        }
    }
    else {
        console.error("Error: METHOD and URL empty.");
    }
    /*window.addEventListener('message',function (event) {
        console.log(event)
    })*/
}


/***/ }),

/***/ "./Assets/typescripts/common/upload.ts":
/*!*********************************************!*\
  !*** ./Assets/typescripts/common/upload.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUploadProgressSystem": () => (/* binding */ setUploadProgressSystem),
/* harmony export */   "uploadFile": () => (/* binding */ uploadFile),
/* harmony export */   "progressHandler": () => (/* binding */ progressHandler),
/* harmony export */   "completeHandler": () => (/* binding */ completeHandler),
/* harmony export */   "errorHandler": () => (/* binding */ errorHandler),
/* harmony export */   "abortHandler": () => (/* binding */ abortHandler)
/* harmony export */ });
/**
 * @param appenderId string
 * */
function setUploadProgressSystem(appenderId) {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
        let createElement = dom.createElement;
        let captureElement = dom.captureElement;
        let appender = captureElement('#' + appenderId);
        let uploadBoard = createElement([{ 'div': { 'id': 'UploadStatusBoard', 'style': 'display:none;' } }]);
        uploadBoard.appendChild(createElement([{ 'progress': { 'id': 'progressbar', 'max': '100', 'value': '0' } }]));
        uploadBoard.appendChild(createElement([{ 'h3': { 'id': 'upload_status' } }]));
        uploadBoard.appendChild(createElement([{ 'p': { 'id': 'loaded_n_total' } }]));
        return appender.appendChild(uploadBoard);
    });
}
/**
 * @param ElementName string
 * @param ElementID string
 * @param URL string*/
function uploadFile(ElementName, ElementID, URL) {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
        let captureElement = dom.captureElement;
        captureElement('#UploadStatusBoard').style.display = 'block';
        captureElement('#progressbar').style.display = 'block';
        let file = captureElement('#' + ElementID).files[0];
        let data = new FormData();
        data.append(ElementName, file);
        let ajax = new XMLHttpRequest();
        ajax.upload.addEventListener('progress', progressHandler, false);
        ajax.addEventListener('load', completeHandler, false);
        ajax.addEventListener('error', errorHandler, false);
        ajax.addEventListener('abort', abortHandler, false);
        ajax.open('POST', URL, true);
        ajax.send(data);
    });
}
/**
 * @param event any
 * */
function progressHandler(event) {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
        let captureElement = dom.captureElement;
        let loadedSize = (event.loaded / 1024) / 1024;
        let totalSize = (event.total / 1024) / 1024;
        captureElement('#loaded_n_total').innerHTML = 'Uploaded ' + loadedSize.toFixed(2) + ' MB of ' + totalSize.toFixed(2) + ' MB';
        let percent = (event.loaded / event.total) * 100;
        captureElement('#progressbar').value = Math.round(percent);
        captureElement('#upload_status').innerHTML = Math.round(percent) + '% uploaded..';
    });
}
/**
 * @param event any
 * */
function completeHandler(event) {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
        let captureElement = dom.captureElement;
        captureElement('#upload_status').innerHTML = event.target.responseText;
        captureElement('#progressbar').value = 0;
        captureElement('#progressbar').style.display = 'none';
    });
}
function errorHandler() {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
        dom.captureElement('#upload_status').innerHTML = 'Upload failed';
    });
}
function abortHandler() {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
        dom.captureElement('#upload_status').innerHTML = 'Upload aborted';
    });
}


/***/ }),

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


/***/ }),

/***/ "./Assets/typescripts/db/app.ts":
/*!**************************************!*\
  !*** ./Assets/typescripts/db/app.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appHost": () => (/* binding */ appHost),
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* global _root_ */
/*initialize on extension installed*/
let __appHostedServerRoot;
let temp = document.querySelector('#mishusoft-web-root')?.getAttribute('content');
if (typeof temp === null) {
    __appHostedServerRoot = '/';
}
else if (typeof temp === undefined) {
    __appHostedServerRoot = 'http://localhost/';
    /*required variables*/
}
else {
    // @ts-ignore
    __appHostedServerRoot = temp.toString();
}
if (__appHostedServerRoot.substr(-1) !== '/') {
    __appHostedServerRoot += '/';
}
const appHost = __appHostedServerRoot;
const app = {
    "default": {
        "name": 'mishusoft',
        "version": 'official',
        "author": 'Mr. Al-Amin Ahamed (Abir)',
        "charset": 'utf8mb4',
        "prefix": 'msu',
        "companyName": 'Mishusoft Systems Incorporate.',
        "text": {
            "welcome": "Welcome to Mishusoft Platform",
            "description": "Mishusoft Platform is a robust multi-web platform developed by Mishusoft Systems Inc. This platform is capable of getting your work done quickly and accurately.",
            "install_state": "The application is ready to be installed on your device at this time.",
        }
    },
    "content": {
        "folder": {
            "logos": __appHostedServerRoot + 'media/logos/',
            "css": __appHostedServerRoot + 'assets/css/',
            "js": __appHostedServerRoot + 'assets/js/',
            "images": __appHostedServerRoot + 'assets/images/',
        },
        "file": {
            "default": {
                "link": [
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-57x57.png",
                        "rel": "apple-touch-icon",
                        "size": "57x57"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-60x60.png",
                        "rel": "apple-touch-icon",
                        "size": "60x60"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-72x72.png",
                        "rel": "apple-touch-icon",
                        "size": "72x72"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-76x76.png",
                        "rel": "apple-touch-icon",
                        "size": "76x76"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-114x114.png",
                        "rel": "apple-touch-icon",
                        "size": "114x114"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-120x120.png",
                        "rel": "apple-touch-icon",
                        "size": "120x120"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-144x144.png",
                        "rel": "apple-touch-icon",
                        "size": "144x144"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-152x152.png",
                        "rel": "apple-touch-icon",
                        "size": "152x152"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-180x180.png",
                        "rel": "apple-touch-icon",
                        "size": "180x180"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/android-icon-192x192.png",
                        "rel": "icon",
                        "size": "192x192",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/favicon-16x16.png",
                        "rel": "icon",
                        "size": "16x16",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/favicon-32x32.png",
                        "rel": "icon",
                        "size": "32x32",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/favicon-96x96.png",
                        "rel": "icon",
                        "size": "96x96",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/favicon.ico",
                        "rel": "icon",
                        "size": "16x16",
                        "type": "image/vnd.microsoft.icon"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/manifest.json",
                        "rel": "manifest",
                    },
                    {
                        "name": "msapplication-TileColor",
                        "content": "#ffffff",
                    },
                    {
                        "name": "msapplication-TileImage",
                        "content": __appHostedServerRoot + "media/logos/ms-icon-144x144.png"
                    },
                    {
                        "name": "theme-color",
                        "content": "#ffffff",
                    },
                ],
            },
        },
    },
    "website": {
        "home": "https://www.mishusoft.com/",
        "support": "support@mishusoft.com",
        "donate": "https://www.mishusoft.com/payment/donate",
        "IpInfo": "https://api.ipdata.co/?api-key=2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180",
        "IpInfoKey": "2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180",
        "fontAwesome": "https://kit.fontawesome.com/b4c8f8449f.js",
        "fontAwesomeKey": "b4c8f8449f",
        "temporary": {
            "home": "http://localhost/",
            "monitorURL": "http://localhost/monitor/browser/",
            "paymentURL": "http://localhost/payment/"
        },
        "publish": {
            "home": "https://www.mishusoft.com/",
            "monitorURL": "https://www.mishusoft.com/monitor/browser/",
            "paymentURL": "https://www.mishusoft.com/payment/"
        }
    },
    "runtime": {
        "request": ""
    }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".runtime.bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "MishusoftRuntime:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 				script.type = "module";
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"framework_v4": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./Assets/typescripts/app-v4.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db/app */ "./Assets/typescripts/db/app.ts");
/* harmony import */ var _common_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/dom */ "./Assets/typescripts/common/dom.ts");
/* harmony import */ var _common_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/request */ "./Assets/typescripts/common/request.ts");
/* harmony import */ var _common_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/validation */ "./Assets/typescripts/common/validation.ts");
/* harmony import */ var _common_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/message */ "./Assets/typescripts/common/message.ts");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/common */ "./Assets/typescripts/common/common.ts");
/* harmony import */ var _common_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/pagination */ "./Assets/typescripts/common/pagination.ts");
/* harmony import */ var _common_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/upload */ "./Assets/typescripts/common/upload.ts");








let publicSocialLinksInterval, visitorsAccessLogsInterval, contactMessageInterval, serverDatabaseInterval;
const background93c = "background: #93c";
(function () {
    let interval = setInterval(function () {
        if (document.readyState === 'complete') {
            clearInterval(interval);
            //initialize app loader image & application
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader')) {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').setAttribute('style', 'display:none;');
            }
            /*add required script tag to head*/
            if (window.navigator) {
                /*font-fontawesome private cdn*/
                /*fetch('https://kit.fontawesome.com/b4c8f8449f.js')
                    .then(() => {
                        document.head.appendChild(createElement([{
                            'script': {
                                'rel': 'preconnect',
                                'type': 'application/javascript',
                                'src': 'https://kit.fontawesome.com/b4c8f8449f.js',
                                'crossorigin': 'anonymous',
                                'async': 'async',
                            }
                        }]));
                    })
                    .catch((err) => {
                        console.info('fontawesome kit load failed. ' + err)
                    })*/
            }
            /*ending to declare required script tag to head*/
        }
    }, 1000);
}());
// set service worker
const webServiceWorker = new Worker(_db_app__WEBPACK_IMPORTED_MODULE_0__.app.content.folder.js + 'sw.js');
if (typeof webServiceWorker == 'undefined') {
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register(_db_app__WEBPACK_IMPORTED_MODULE_0__.app.content.folder.js + 'sw.js')
                .then((swr) => {
                console.info("ServiceWorker [" + swr?.active?.scriptURL + "] is " + swr?.active?.state + " successfully."
                /* It's now */ /* + swr?.active?.state*/
                );
            })
                .catch((err) => console.error("service worker not registered", err));
        });
    }
}
//const worker = new Worker(app.content.folder.js + 'sw.js');
/*if (typeof worker =='undefined'){
    // set service worker
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register(app.content.folder.js + 'sw.js')
                .then((swr) => {
                    console.log("service worker registered");
                    console.log(swr);
                })
                .catch((err) => console.log("service worker not registered", err))
        });
    }
}*/
/*(function (__location) {
    if (__location === window.location) {
        if (__location.origin.indexOf(app.default.name) !== -1) {
            window.onload = function () {
                document.addEventListener("select", function (e) {
                    e.preventDefault();
                }, false);
                document.addEventListener("contextmenu", function (e) {
                    e.preventDefault();
                }, false);
                document.addEventListener("keydown", function (e) {
                    if (e.ctrlKey && e.shiftKey) {
                        disabledEvent(e);
                    }
                    if (e.ctrlKey && e.shiftKey) {
                        disabledEvent(e);
                    }
                    if (e.keyCode === 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                        disabledEvent(e);
                    }
                    if (e.ctrlKey) {
                        disabledEvent(e);
                    }
                }, false);

                function disabledEvent(e: KeyboardEvent) {
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    } else if (event) {
                        event.cancelBubble = true;

                    }
                    e.preventDefault();
                    return false;
                }
            };
            /!**!/
        }
    }
}(window.location));*/
(function (__collapseArray) {
    let i;
    for (i = 0; i < __collapseArray.length; i++) {
        __collapseArray[i].addEventListener("click", function () {
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                this.innerHTML = "+";
                content.style.display = "none";
            }
            else {
                this.innerHTML = "-";
                content.style.display = "block";
            }
        });
    }
}(document.querySelectorAll(".collapse")));
(function (__locationbarURI) {
    if (__locationbarURI.indexOf('view-source:') !== -1) {
        document.textContent = 'We don\'t support this protocol!!';
    }
}(window.location.href));
/*(function (_searchElement) {
    if (_searchElement !== null){
        ['keyup','paste'].forEach(function (event) {
            _searchElement?.addEventListener(event,function () {
                console.log(this.value);
            });
        });
    }
}(captureElement('#ms-qck-src')));
//ms-qck-src-do
*/
/*adjust footer actual height*/
//captureElement('.app-container')?.setAttribute('style','width:' + window.innerWidth + 'px;');
if (document.querySelectorAll('#flex-center').length !== 0) {
    document.querySelectorAll('#flex-center').forEach(function (__flexBoxCenter) {
        //__flexBoxCenter.setAttribute('style','height:' + window.innerHeight + 'px;width:' + window.innerWidth + 'px;');
        __flexBoxCenter.setAttribute('style', 'height:' + window.innerHeight + 'px;');
    });
}
/*window.addEventListener('resize', function () {
    //console.log(window.innerHeight);
    /!*console.log('Window Inner Height : ' + window.innerHeight);
    console.log('App Inner Height : ' + captureElement('#mishusoft-app-content').clientHeight);
    console.log('Footer Inner Height : ' + captureElement('#footer').clientHeight);*!/
    if (window.innerHeight <= (+captureElement('#mishusoft-app-content').clientHeight + +captureElement('#footer')?.clientHeight)) {
        /!*console.log('-------------------------------');
        console.log('we reached target!!')
        console.log('Window Inner Height : ' + window.innerHeight);
        console.log('App Inner Height : ' + (+captureElement('#mishusoft-app-content').clientHeight + +captureElement('#footer').clientHeight) );
        console.log('-------------------------------');*!/
        captureElement('#footer')?.removeAttribute('style');
    } else {
        captureElement('#footer').setAttribute('style', 'position: fixed;bottom: 0;width: inherit;');
    }
    //document.querySelector('.app-container')?.setAttribute('style','width:' + window.innerWidth + 'px;');
    if (document.querySelectorAll('#flex-center').length !== 0) {
        document.querySelectorAll('#flex-center').forEach(function (__flexBoxCenter: HTMLElement) {
            //__flexBoxCenter.setAttribute('style','height:' + window.innerHeight + 'px;width:' + window.innerWidth + 'px;');
            __flexBoxCenter.setAttribute('style', 'height:' + window.innerHeight + 'px;');
        });
    }
});*/
(function (__authLoginForm) {
    let interval = setInterval(function () {
        if (__authLoginForm !== null || true) {
            clearInterval(interval);
            __authLoginForm?.addEventListener('submit', function (event) {
                event.preventDefault();
                let messagebar = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone');
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.classList.add('box-runtime');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#login-button').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').setAttribute('disabled', 'disabled');
                messagebar.style = 'display:block;';
                messagebar.firstElementChild.textContent = 'Please wait......';
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center') !== undefined) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.remove();
                    }
                }
                return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'user/verifyUserAuth',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        username: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').value,
                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value,
                        redirectURL: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#redirect').value,
                        RememberMe: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#RememberMe').value,
                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#login-button').value
                    }
                }, function (response) {
                    if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                        let data = JSON.parse(response);
                        if (data.type === 'success' && data.message === 'LOGGED_IN') {
                            if (data.url !== '/') {
                                window.location.replace(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + data.url);
                            }
                            else {
                                window.location.replace(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost);
                            }
                        }
                        else {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#login-button').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').removeAttribute('disabled');
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#messageZone"));
                            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center') !== undefined) {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                            }
                        }
                    }
                });
            });
        }
    }, 100);
}((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#LogInForm')));
(function (__authRegistrationForm) {
    let interval = setInterval(function () {
        if (__authRegistrationForm !== null || true) {
            clearInterval(interval);
            __authRegistrationForm?.addEventListener('submit', function (event) {
                event.preventDefault();
            });
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#signup-button') !== undefined) {
                ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#signup-button').addEventListener(event, function () {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.removeAttribute('style');
                        let messagebar = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone');
                        if (messagebar.firstElementChild === null) {
                            let tmp = document.createElement('div');
                            messagebar.appendChild(tmp);
                        }
                        messagebar.firstElementChild.textContent = '';
                        messagebar.style = 'display:none;';
                        let firstNameCheck, lastNameCheck, emailAddressCheck, usernameCheck, passwordCheck, dateOfBirthCheck;
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#first-name').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your first name (more than 4 characters).<br/>';
                            addSpace();
                        }
                        else if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.checkDuplicate)((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#first-name').value)) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your first name.<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#first-name').value.length <= 3) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your first name more than 4 characters.<br/>';
                            addSpace();
                        }
                        else {
                            firstNameCheck = 'OK';
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#last-name').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your last name (more than 4 characters).<br/>';
                            addSpace();
                        }
                        else if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.checkDuplicate)((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#last-name').value)) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your last name.<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#last-name').value.length <= 3) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your last name more than 4 letter.<br/>';
                            addSpace();
                        }
                        else {
                            lastNameCheck = 'OK';
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your email address (valid for more than 14 characters).<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value.indexOf('@') === -1 || (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value.indexOf('.') === -1 || (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value.length <= 14) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter valid email address.<br/>';
                            addSpace();
                        }
                        else {
                            emailAddressCheck = 'OK';
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your username (valid for at least 8 characters).<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').value.length < 8) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter username at least 8 character.<br/>';
                            addSpace();
                        }
                        else {
                            usernameCheck = 'OK';
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dateOfBirth').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your date of birth.<br/>';
                            addSpace();
                        }
                        else {
                            dateOfBirthCheck = 'OK';
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your password (with @_ character and more than 6 character).<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value.indexOf('@') === -1) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter password with (@) character.<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value.indexOf('_') === -1) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter password with (_) character.<br/>';
                            addSpace();
                        }
                        else if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.checkDuplicate)((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value)) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your password.<br/>';
                            addSpace();
                        }
                        else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value.length <= 6) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter password more than 6 character.<br/>';
                            addSpace();
                        }
                        else {
                            passwordCheck = 'OK';
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').value) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Your password matched.<br/>';
                        }
                        if (!(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#agree').checked) {
                            messagebar.style = 'display:block;';
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.firstElementChild.innerHTML += 'Error : Please check i agree button to continue.<br/>';
                            addSpace();
                        }
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#agree').checked && firstNameCheck === 'OK' && lastNameCheck === 'OK' &&
                            emailAddressCheck === 'OK' && usernameCheck === 'OK' && passwordCheck === 'OK' && dateOfBirthCheck === 'OK') {
                            messagebar.firstElementChild.classList.add('box-runtime');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#signup-button').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#first-name').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#last-name').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dateOfBirth').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#gender').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#agree').setAttribute('disabled', 'disabled');
                            messagebar.style = 'display:block;';
                            messagebar.firstElementChild.textContent = 'Please wait......';
                            if (messagebar.style.display === 'block') {
                                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center') !== undefined) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.remove();
                                    }
                                }
                            }
                            return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                method: "POST",
                                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'user/registrationValidation',
                                async: true,
                                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                data: {
                                    security_code: 1,
                                    patch: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#regs').value,
                                    time: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#time').value,
                                    firstName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#first-name').value,
                                    lastName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#last-name').value,
                                    email: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value,
                                    username: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').value,
                                    password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value,
                                    confirmPassword: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').value,
                                    dateOfBirth: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dateOfBirth').value,
                                    gender: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#gender').value,
                                    agree: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#agree').value,
                                    btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#signup-button').value
                                }
                            }, function (response) {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#signup-button').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#first-name').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#last-name').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dateOfBirth').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#gender').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').removeAttribute('disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#agree').removeAttribute('disabled');
                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#messageZone"));
                                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center') !== undefined) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                                }
                            });
                        }
                    }, { passive: true });
                });
            }
        }
    }, 100);
}((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#registrationForm')));
(function (__authPasswordRecoveryForm) {
    let interval = setInterval(function () {
        if (__authPasswordRecoveryForm !== null || true) {
            clearInterval(interval);
            __authPasswordRecoveryForm?.addEventListener('submit', function (event) {
                event.preventDefault();
                let messagebar = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone');
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.textContent = '';
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').value.length === 0 && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value.length === 0) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Please enter username or email address to continue.<br/>';
                }
                messagebar.style = 'display:block;';
                messagebar.firstElementChild.textContent = 'Please wait......';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:500px';
                return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'user/passwordRecoveryValidation',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        patch: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#recovery').value,
                        time: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#time').value,
                        email: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').value,
                        username: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').value,
                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#code-send-button').value
                    }
                }, function (response) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email').removeAttribute('disabled');
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#username').removeAttribute('disabled');
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#messageZone"));
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center') !== undefined) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.remove();
                        }
                    }
                });
            });
        }
    }, 100);
}((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ForgetPasswordForm')));
(function (__authSetPasswordForm) {
    let interval = setInterval(function () {
        if (__authSetPasswordForm !== null || true) {
            clearInterval(interval);
            __authSetPasswordForm?.addEventListener('submit', function (event) {
                event.preventDefault();
                let passwordCheck, messagebar = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone');
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.textContent = '';
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value === '') {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter your password (with @_ character and more than 6 character).<br/>';
                    addSpace();
                }
                else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value.indexOf('@') === -1) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter password with (@) character.<br/>';
                    addSpace();
                }
                else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value.indexOf('_') === -1) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter password with (_) character.<br/>';
                    addSpace();
                }
                else if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.checkDuplicate)((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value)) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your password.<br/>';
                    addSpace();
                }
                else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value.length <= 6) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter password more than 6 character.<br/>';
                    addSpace();
                }
                else {
                    passwordCheck = 'OK';
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value !== (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').value) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Your password matched.<br/>';
                }
                messagebar.style = 'display:block;';
                messagebar.firstElementChild.textContent = 'Please wait......';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:500px';
                if (passwordCheck === 'OK') {
                    messagebar.firstElementChild.classList.add('box-runtime');
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#set-new-password-button').setAttribute('disabled', 'disabled');
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').setAttribute('disabled', 'disabled');
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').setAttribute('disabled', 'disabled');
                    messagebar.style = 'display:block;';
                    messagebar.firstElementChild.textContent = 'Please wait......';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:700px';
                    return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "POST",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'user/newPasswordValidation',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            patch: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#set-password').value,
                            time: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#time').value,
                            userId: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-id').value,
                            password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').value,
                            confirmPassword: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').value,
                            btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#set-new-password-button').value
                        }
                    }, function (response) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#set-new-password-button').removeAttribute('disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#password').removeAttribute('disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#c_password').removeAttribute('disabled');
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#messageZone"));
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center') !== undefined) {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone').nextElementSibling.remove();
                            }
                        }
                    });
                }
            });
        }
    }, 100);
}((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#SetPasswordForm')));
(function (__contactMessageSender) {
    let interval = setInterval(function () {
        if (__contactMessageSender !== null || true) {
            clearInterval(interval);
            __contactMessageSender?.addEventListener('click', function () {
                let messagebar = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messageZone');
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.classList.add('box-runtime');
                messagebar.firstElementChild.textContent = 'Please wait......';
                messagebar.style.display = 'block';
                return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'contact/receiveMessage',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        firstName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_fst_nm').value,
                        lastName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_lst_nm').value,
                        email: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_email').value,
                        mobileNumber: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_mbl_nmbr').value,
                        messageSubject: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_msg_sbj').value,
                        messageContent: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_msg').value,
                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_msg_snd_btn').textContent
                    }
                }, function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#messageZone"));
                });
            });
        }
    }, 100);
}((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#cl_msg_snd_btn')));
(function (__url) {
    if (__url.indexOf('payment') !== -1) {
        /*stripe payment merchant cdn
        fetch('https://js.stripe.com/v3')
            .then(() => {
                document.head.appendChild(createElement([{
                    'script': {
                        'type': 'application/javascript',
                        'src': 'https://js.stripe.com/v3/',
                        'async': 'async',
                    }
                }]));
            })
            .catch((err) => {
                console.info('Stripe SDK load failed. ' + err)
            })*/
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-welcome') !== undefined) {
            ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#start-pay')?.addEventListener(__event, function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-welcome').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-categories').removeAttribute('style');
                }, { passive: true });
            });
        }
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-categories') !== undefined) {
            ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#services-payment')?.addEventListener(__event, function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-categories').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-appid-email').style.display = 'block';
                }, { passive: true });
            });
        }
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-appid-email') !== undefined) {
            ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-back')?.addEventListener(__event, function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-appid-email').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-categories').removeAttribute('style');
                }, { passive: true });
            });
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#payment-appid-email')?.addEventListener('submit', function (event) {
                event.preventDefault();
                let emailAddressCheck, messagebar = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#messagePanel');
                messagebar.className = 'messageZone';
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.textContent = '';
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-id').value.length === 0) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Please enter your app id to continue.<br/>';
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').value === '') {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter your email address (valid for more than 14 characters).<br/>';
                    addSpace();
                }
                else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').value.indexOf('@') === -1 || (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').value.indexOf('.') === -1 || (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').value.length <= 14) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter valid email address.<br/>';
                    addSpace();
                }
                else {
                    emailAddressCheck = 'OK';
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan-type').value.length === 0) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Please select your plan type to continue.<br/>';
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan').value.length === 0) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Please select your plan to continue.<br/>';
                }
                messagebar.firstElementChild.classList.add('box-runtime');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-done').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-id').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan-type').setAttribute('disabled', 'disabled');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-back').setAttribute('disabled', 'disabled');
                messagebar.style = 'display:block;';
                messagebar.firstElementChild.textContent = 'Please wait......';
                if (emailAddressCheck === 'OK') {
                    return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "POST",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'payment/verifyClient',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            userEmail: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').value,
                            appId: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-id').value,
                            plan: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan').value,
                            planType: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan-type').value,
                            btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-done').textContent
                        }
                    }, function (response) {
                        if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response) && JSON.parse(response).type === 'success') {
                            //https://host/payment/payNow/appid/email/plantype/plan/amount
                            /**
                             * http://localhost/payment/payNow/
                             * Zjh6bEdTVTV0RU1NNTlTREpFODhXdz09/
                             * VUZBY3E2dzg1S2QyYk1HVHlsRm8ybi82YWNqc0Z1YXJmc082bXFMeWVDMD0=/
                             * YmZIcmg5QnZFSEw4U2RxY3kxSlZDZz09/
                             * YXNxZTdVVXBKbzNxbTcvQ052NEZUQT09/
                             * */
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-done').textContent = 'Redirecting...';
                            setTimeout(function () {
                                window.location.replace(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'payment/paynow/' + JSON.parse(response).appIdEncrypt + '/' +
                                    JSON.parse(response).emailEncrypt + '/' + JSON.parse(response).paymentPlanTypeEncrypt + '/' +
                                    JSON.parse(response).paymentPlanEncrypt + '/');
                            }, 2000);
                        }
                        else {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#email-address').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-id').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-plan-type').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-done').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#user-select-back').removeAttribute('disabled');
                        }
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#messagePanel"));
                    });
                }
            });
        }
    }
}(window.location.href));
/*add-ons zone*/
(function (__url) {
    if (__url.indexOf('ipinfo') !== -1) {
        let interval = setInterval(function () {
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ipd-address') !== null || true) {
                clearInterval(interval);
                ['keyup', 'change', 'paste'].forEach(function (__inputEvent) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ipd-address')?.addEventListener(__inputEvent, function () {
                        return retrieveIpInfoPlus();
                    });
                });
                retrieveIpInfoPlus();
            }
        }, 100);
    }
}(window.location.href));
/*system zone*/
(function (__url) {
    if (__url.indexOf('system') !== -1) {
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-notification-viewer") !== undefined) {
            visitorsAccessLogsInterval = setInterval(function () {
            }, 1000);
            (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                method: "GET",
                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'api/getVisitorsAccessLogsLimited',
                async: true,
                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            }, function (response) {
                if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                    if (JSON.parse(response).length !== 0) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-notification-viewer").textContent = '';
                        JSON.parse(response).forEach(function (log) {
                            const messageBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'a': {
                                        'class': 'box-message ' + ((log.message_type.toLowerCase() === 'error') ? 'box-danger' : ((log.message_type.toLowerCase() === 'success') ? 'box-success' : ((log.message_type.toLowerCase() === 'notify') ? 'box-notify' : ' '))) + ' box-shadow-light',
                                        /*'style': 'padding: 0 0 0 4px;',*/
                                        'href': _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/log/view/' + log.id,
                                        'title': '[' + log.ip + '] [' + log.browser + '] [' + log.time + ']',
                                    }
                                }]);
                            const messageIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'span': {
                                        'class': ((log.message_type.toLowerCase() === 'error') ? 'box-danger-symbol' : ((log.message_type.toLowerCase() === 'success') ? 'box-success-symbol' : ((log.message_type.toLowerCase() === 'notify') ? 'box-notify-symbol' : ' '))),
                                    }
                                }]);
                            messageBody.appendChild(messageIcon);
                            const messageIconFile = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'i': {
                                        'class': ((log.message_type.toLowerCase() === 'error') ? 'fa fa-times' : ((log.message_type.toLowerCase() === 'success') ? 'fa fa-check' : ((log.message_type.toLowerCase() === 'notify') ? 'fa fa-info' : ''))),
                                    }
                                }]);
                            messageIcon.appendChild(messageIconFile);
                            const messageBodyContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#notify') !== undefined) ? (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#notify').value : 'notify-md-content', } }]);
                            messageBody.appendChild(messageBodyContent);
                            const ipLink = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'a': {
                                        'class': 'link',
                                        'href': _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'addons/ipinfo/' + log.ip,
                                    }
                                }]);
                            ipLink.textContent = log.author + ' with ' + log.browser /*+  ' from ' + log.country*/;
                            messageBodyContent.appendChild(ipLink);
                            const contentLink = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'span': { 'class': 'link', } }]);
                            messageBodyContent.appendChild(contentLink);
                            const content = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'p': { 'class': 'link', } }]);
                            content.textContent = log.message.replace(/\s*\<.*?\>\s*/g, ' ').substr(0, 35) + '...';
                            messageBodyContent.appendChild(content);
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-notification-viewer").appendChild(messageBody);
                        });
                    }
                    else {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-notification-viewer").textContent = '';
                        const messageBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'div': {
                                    'class': 'box-message box-danger box-shadow-light',
                                    /*'style': 'padding: 0 0 0 4px;',*/
                                }
                            }]);
                        const messageIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'span': {
                                    'class': 'box-danger-symbol',
                                }
                            }]);
                        messageBody.appendChild(messageIcon);
                        const messageIconFile = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'i': {
                                    'class': 'fa fa-times',
                                }
                            }]);
                        messageIcon.appendChild(messageIconFile);
                        const messageBodyContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'notify-md-content', } }]);
                        messageBodyContent.textContent = 'No notification found.';
                        messageBody.appendChild(messageBodyContent);
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-notification-viewer").appendChild(messageBody);
                    }
                }
            });
        }
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-contact-message-viewer") !== undefined) {
            contactMessageInterval = setInterval(function () {
            }, 1000);
            (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                method: "GET",
                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'api/getContactMessagesLimited',
                async: true,
                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            }, function (response) {
                if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                    if (JSON.parse(response).length !== 0) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-contact-message-viewer").textContent = '';
                        JSON.parse(response).forEach(function (message) {
                            const messageBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'a': {
                                        'class': 'box-message box-success box-shadow-light',
                                        'href': _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/contactmessage/view/' + message.id,
                                    }
                                }]);
                            const messageIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'span': {
                                        'class': 'box-success-symbol',
                                    }
                                }]);
                            messageBody.appendChild(messageIcon);
                            const messageIconFile = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'i': {
                                        'class': 'fa fa-check',
                                    }
                                }]);
                            messageIcon.appendChild(messageIconFile);
                            const messageBodyContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#notify') !== undefined) ? (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#notify').value : 'notify-md-content', } }]);
                            messageBody.appendChild(messageBodyContent);
                            const sender = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'a': {
                                        'class': 'link',
                                        /*'href': appHost + 'addons/ipinfo/' + message.ip,*/
                                    }
                                }]);
                            sender.textContent = message.f_name + ' ' + message.l_name + ' send a ' + message.subject;
                            messageBodyContent.appendChild(sender);
                            const content = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'p': {} }]);
                            content.textContent = message.message;
                            messageBodyContent.appendChild(content);
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-contact-message-viewer").appendChild(messageBody);
                        });
                    }
                    else {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-contact-message-viewer").textContent = '';
                        const messageBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'div': {
                                    'class': 'box-message box-danger box-shadow-light',
                                    /*'style': 'padding: 0 0 0 4px;',*/
                                }
                            }]);
                        const messageIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'span': {
                                    'class': 'box-danger-symbol',
                                }
                            }]);
                        messageBody.appendChild(messageIcon);
                        const messageIconFile = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'i': {
                                    'class': 'fa fa-times',
                                }
                            }]);
                        messageIcon.appendChild(messageIconFile);
                        const messageBodyContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'notify-md-content', } }]);
                        messageBodyContent.textContent = 'No message found.';
                        messageBody.appendChild(messageBodyContent);
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-contact-message-viewer").appendChild(messageBody);
                    }
                }
            });
        }
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#system-default-menus') !== undefined) {
            setInterval(function () {
            }, 1000);
            (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                method: "GET",
                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/index/getMainItemTabs',
                async: true,
                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            }, function (response) {
                if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                    if (JSON.parse(response).length !== 0) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-default-menus").textContent = '';
                        JSON.parse(response).forEach(function (menu) {
                            const systemMenu = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'a': {
                                        'class': 'thumbnail-md box-shadow-light',
                                        'href': _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/' + menu.url,
                                        'title': menu.title,
                                    }
                                }]);
                            const systemMenuIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'span': { 'class': 'thumbnail-image', } }]);
                            systemMenu.appendChild(systemMenuIcon);
                            const systemMenuIconFile = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'i': { 'class': menu.icon, } }]);
                            systemMenuIcon.appendChild(systemMenuIconFile);
                            const systemMenuName = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'thumbnail-text', } }]);
                            systemMenuName.textContent = menu.name;
                            systemMenu.appendChild(systemMenuName);
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-default-menus").appendChild(systemMenu);
                        });
                    }
                    else {
                        const systemMenu = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'div': {
                                    'class': 'thumbnail-md box-shadow-light',
                                    'style': 'padding: 45px 25px;',
                                }
                            }]);
                        systemMenu.textContent = 'No menu exists.';
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-default-menus").appendChild(systemMenu);
                    }
                }
            });
        }
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#system-extra-menus') !== undefined) {
            setInterval(function () {
            }, 1000);
            (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                method: "GET",
                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/index/getExtraItemTabs',
                async: true,
                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            }, function (response) {
                if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                    if (JSON.parse(response).length !== 0) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#system-extra-menus').textContent = '';
                        JSON.parse(response).forEach(function (menu) {
                            const extraMenu = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'a': {
                                        'class': 'thumbnail-md box-shadow-light',
                                        'href': _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/' + menu.url,
                                        'title': menu.title,
                                    }
                                }]);
                            const extraMenuIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'span': { 'class': 'thumbnail-image', } }]);
                            extraMenu.appendChild(extraMenuIcon);
                            const extraMenuIconFile = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'i': { 'class': menu.icon, } }]);
                            extraMenuIcon.appendChild(extraMenuIconFile);
                            const extraMenuName = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'thumbnail-text', } }]);
                            extraMenuName.textContent = menu.name;
                            extraMenu.appendChild(extraMenuName);
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-extra-menus").appendChild(extraMenu);
                        });
                    }
                    else {
                        const extraMenu = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                'div': {
                                    'class': 'thumbnail-md box-shadow-light',
                                    'style': 'padding: 45px 25px;',
                                }
                            }]);
                        extraMenu.textContent = 'No menu exists.';
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#system-extra-menus").appendChild(extraMenu);
                    }
                }
            });
        }
        if (__url.indexOf('branches') !== -1) {
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-table') !== undefined) {
                //init edit pad by default
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode')) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode').innerHTML = 'New';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').innerHTML = 'Save';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-reset-btn').innerHTML = 'Reset';
                }
                //set text box value change dynamic after dropbox had changed.
                ['keyup', 'change', 'paste'].forEach(function (__event) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchName').addEventListener(__event, function () {
                        return (0,_common_common__WEBPACK_IMPORTED_MODULE_5__.checkInputDataAbility)(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + "system/branches/checkBranchNameInputAbility", {
                            security_code: 1,
                            name: "name",
                            value: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#branchName").value
                        }, function (response) {
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                        });
                    });
                });
                //save data by clicking data button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                    return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "POST",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/manageBranch',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchID').value,
                            name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchName').value,
                            status: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchStatus').value,
                            location: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchLocation').value,
                            btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').textContent
                        },
                    }, (response) => {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                    });
                });
                //reset inputbox by clicking reset button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-reset-btn').addEventListener('click', function () {
                    changeElementValueById([
                        { 'id': 'branchID', 'value': '' },
                        { 'id': 'branchName', 'value': '' },
                        { 'id': 'branchStatus', 'value': '' },
                        { 'id': 'branchLocation', 'value': '' },
                    ]);
                });
                //add data form by clicking add button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-add-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode').innerHTML = 'New';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').innerHTML = 'Save';
                    changeElementValueById([
                        { 'id': 'branchID', 'value': '' },
                        { 'id': 'branchName', 'value': '' },
                        { 'id': 'branchStatus', 'value': '' },
                        { 'id': 'branchLocation', 'value': '' },
                    ]);
                });
                //select data by clicking select button
                if (document.querySelectorAll('#branch-select').length !== 0) {
                    document.querySelectorAll('#branch-select').forEach(function (__selector) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            __selector.addEventListener(event, function () {
                                if (this.checked) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode').innerHTML = 'Edit';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').innerHTML = 'Update';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchID').value = this.getAttribute('data-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchName').value = this.getAttribute('data-name');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchStatus').value = this.getAttribute('data-status');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchLocation').value = this.getAttribute('data-location');
                                }
                            }, { passive: true });
                        });
                    });
                }
                /*add edit event*/
                if (document.querySelectorAll('#branch-edit-btn').length !== 0) {
                    document.querySelectorAll('#branch-edit-btn').forEach(function (_button) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            _button.addEventListener(event, function () {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode').innerHTML = 'Edit';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').innerHTML = 'Update';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchID').value = this.getAttribute('data-id');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchName').value = this.getAttribute('data-name');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchStatus').value = this.getAttribute('data-status');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchLocation').value = this.getAttribute('data-location');
                            }, { passive: true });
                        });
                    });
                }
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#branch-delete-btn', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/deleteBranch', '#message3', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                });
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.paginationDriver)('ajax', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/indexPaginationAJAX', 'branch-data-table', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                }, function () {
                    (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#branch-delete-btn', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/deleteBranch', '#message3', function (response) {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                    });
                    /*it will be fire on pagination*/
                    //select data by clicking select button
                    if (document.querySelectorAll('#branch-select').length !== 0) {
                        document.querySelectorAll('#branch-select').forEach(function (__selector) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                __selector.addEventListener(event, function () {
                                    if (this.checked) {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode').innerHTML = 'Edit';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').innerHTML = 'Update';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchID').value = this.getAttribute('data-id');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchName').value = this.getAttribute('data-name');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchStatus').value = this.getAttribute('data-status');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchLocation').value = this.getAttribute('data-location');
                                    }
                                }, { passive: true });
                            });
                        });
                    }
                    /*add edit event*/
                    if (document.querySelectorAll('#branch-edit-btn').length !== 0) {
                        document.querySelectorAll('#branch-edit-btn').forEach(function (_button) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                _button.addEventListener(event, function () {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchEditMode').innerHTML = 'Edit';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branch-data-btn').innerHTML = 'Update';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchID').value = this.getAttribute('data-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchName').value = this.getAttribute('data-name');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchStatus').value = this.getAttribute('data-status');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#branchLocation').value = this.getAttribute('data-location');
                                }, { passive: true });
                            });
                        });
                    }
                });
            }
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#busers-data-table') !== undefined) {
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#transferBranchStuff', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/transferBranchStuff', '#message3', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                });
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.paginationDriver)('ajax', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/usersPaginationAJAX', 'busers-data-table', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                }, function () {
                    (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#transferBranchStuff', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/branches/transferBranchStuff', '#message3', function (response) {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                    });
                });
            }
        }
        if (__url.indexOf('modules') !== -1) {
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modules-data-table') !== undefined) {
                //init edit pad by default
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditMode')) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditMode').innerHTML = 'New';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').innerHTML = 'Save';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').innerHTML = 'Reset';
                }
                //save data by clicking data button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                    return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "POST",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/modules/updateModule',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleID').value,
                            status: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleStatus').value,
                            btnName: 'Update'
                        },
                    }, (response) => {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                    });
                });
                //reset inputbox by clicking reset button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').addEventListener('click', function () {
                    changeElementValueById([
                        { 'id': 'moduleStatus', 'value': '' },
                    ]);
                });
                //add data form by clicking add button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-add-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleUploadPad').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditPAD').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').style.display = 'none';
                });
                //show select file name on status bar
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleFile').addEventListener('change', function () {
                    let file = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleFile').files[0];
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#progressbar').style.display = 'none';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = file.name + ' selected';
                });
                //upload file by clicking button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#uploadModuleFile').addEventListener('click', function () {
                    (0,_common_upload__WEBPACK_IMPORTED_MODULE_7__.uploadFile)('moduleFile', 'moduleFile', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/modules/uploadTARGZ');
                });
                //select data by clicking select button
                if (document.querySelectorAll('#module-select').length !== 0) {
                    document.querySelectorAll('#module-select').forEach(function (__selector) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            __selector.addEventListener(event, function () {
                                if (this.checked) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleUploadPad').style.display = 'none';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditPAD').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditMode').innerHTML = 'Edit';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').innerHTML = 'Update';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleID').value = this.getAttribute('data-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').value = this.getAttribute('data-name');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').setAttribute('disabled', 'disabled');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').value = this.getAttribute('data-location');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').setAttribute('disabled', 'disabled');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleStatus').value = this.getAttribute('data-status');
                                }
                            }, { passive: true });
                        });
                    });
                }
                /*add edit event*/
                if (document.querySelectorAll('#module-edit-btn').length !== 0) {
                    document.querySelectorAll('#module-edit-btn').forEach(function (_button) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            _button.addEventListener(event, function () {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleUploadPad').style.display = 'none';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditPAD').style.display = 'block';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditMode').innerHTML = 'Edit';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').innerHTML = 'Update';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').style.display = 'block';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').style.display = 'block';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleID').value = this.getAttribute('data-id');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').value = this.getAttribute('data-name');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').setAttribute('disabled', 'disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').value = this.getAttribute('data-location');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').setAttribute('disabled', 'disabled');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleStatus').value = this.getAttribute('data-status');
                            }, { passive: true });
                        });
                    });
                }
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#module-delete-btn', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/modules/deleteModule', '#message3', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                });
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.paginationDriver)('ajax', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/modules/indexPaginationAJAX', 'modules-data-table', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                }, function () {
                    (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#module-delete-btn', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/modules/deleteModule', '#message3', function (response) {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                    });
                    /*it will be fire on pagination*/
                    //select data by clicking select button
                    if (document.querySelectorAll('#module-select').length !== 0) {
                        document.querySelectorAll('#module-select').forEach(function (__selector) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                __selector.addEventListener(event, function () {
                                    if (this.checked) {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleUploadPad').style.display = 'none';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditPAD').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditMode').innerHTML = 'Edit';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').innerHTML = 'Update';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleID').value = this.getAttribute('data-id');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').value = this.getAttribute('data-name');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').setAttribute('disabled', 'disabled');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').value = this.getAttribute('data-location');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').setAttribute('disabled', 'disabled');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleStatus').value = this.getAttribute('data-status');
                                    }
                                }, { passive: true });
                            });
                        });
                    }
                    /*add edit event*/
                    if (document.querySelectorAll('#module-edit-btn').length !== 0) {
                        document.querySelectorAll('#module-edit-btn').forEach(function (_button) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                _button.addEventListener(event, function () {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleUploadPad').style.display = 'none';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditPAD').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleEditMode').innerHTML = 'Edit';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').innerHTML = 'Update';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-data-btn').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#module-reset-btn').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleID').value = this.getAttribute('data-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').value = this.getAttribute('data-name');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleName').setAttribute('disabled', 'disabled');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').value = this.getAttribute('data-location');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleLocation').setAttribute('disabled', 'disabled');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#moduleStatus').value = this.getAttribute('data-status');
                                }, { passive: true });
                            });
                        });
                    }
                });
            }
        }
        if (__url.indexOf('pages') !== -1) {
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pages-data-table') !== undefined) {
                //init edit pad by default
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode')) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode').innerHTML = 'New';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').innerHTML = 'Save';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-reset-btn').innerHTML = 'Reset';
                }
                //init edit pad by default
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageSEOEditMode')) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageSEOEditMode').innerHTML = 'New';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo-data-btn').innerHTML = 'Save';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo-reset-btn').innerHTML = 'Reset';
                }
                //add data form by clicking add button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-add-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode').innerHTML = 'New';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').innerHTML = 'Save';
                    changeElementValueById([
                        { 'id': 'page-parent-id', 'value': '' },
                        { 'id': 'page-position-id', 'value': '' },
                        { 'id': 'page-status', 'value': '' },
                        { 'id': 'page-seo', 'value': '' },
                        { 'id': 'page-title', 'value': '' },
                        { 'id': 'page-url', 'value': '' },
                        { 'id': 'page-icon', 'value': '' },
                        { 'id': 'page-type', 'value': '' },
                    ]);
                });
                /*page parent change event*/
                ['change'].forEach(function (__event) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').addEventListener(__event, function () {
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.length !== 0) {
                            if (this.value.length !== 0 && this.value !== '0') {
                                return (0,_common_common__WEBPACK_IMPORTED_MODULE_5__.checkInputDataAbility)(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + "system/pages/getPageNameById", {
                                    security_code: 1,
                                    page: this.value
                                }, function (response) {
                                    if (JSON.parse(response).type === 'success') {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').setAttribute('actual-url', 'page/' + JSON.parse(response).name.replace(' ', '-').toLowerCase() + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.toLowerCase());
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').href = _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'page/' + JSON.parse(response).name.replace(' ', '-').toLowerCase() + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.toLowerCase();
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').textContent = 'URL : ' + _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'page/' + JSON.parse(response).name.replace(' ', '-').toLowerCase() + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.toLowerCase();
                                    }
                                    else {
                                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                                    }
                                });
                            }
                        }
                    });
                });
                //set text box value change dynamic after dropbox had changed.
                ['keyup', 'change', 'paste', 'focus'].forEach(function (__event) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').addEventListener(__event, function () {
                        if (this.value.length !== 0) {
                            this.value = this.value[0].toUpperCase() + this.value.slice(1);
                            return (0,_common_common__WEBPACK_IMPORTED_MODULE_5__.checkInputDataAbility)(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + "system/pages/checkPageTitleURLInputAbility", {
                                security_code: 1,
                                name: "title",
                                value: this.value[0].toUpperCase() + this.value.slice(1)
                            }, function (response) {
                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                            });
                        }
                    });
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').addEventListener(__event, function () {
                        if (this.value.length === 0) {
                            this.value = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').value.replace(' ', '-').toLowerCase();
                        }
                        else {
                            this.value = this.value.replace(' ', '-').toLowerCase();
                        }
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').setAttribute('style', 'display:block;');
                        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value.length !== 0 && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value !== '0') {
                            (0,_common_common__WEBPACK_IMPORTED_MODULE_5__.checkInputDataAbility)(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + "system/pages/getPageNameById", {
                                security_code: 1,
                                page: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value
                            }, function (response) {
                                if (JSON.parse(response).type === 'success') {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').setAttribute('actual-url', 'page/' + JSON.parse(response).name.replace(' ', '-').toLowerCase() + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.toLowerCase());
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').href = _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'page/' + JSON.parse(response).name.replace(' ', '-').toLowerCase() + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.toLowerCase();
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').textContent = 'URL : ' + _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'page/' + JSON.parse(response).name.replace(' ', '-').toLowerCase() + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value.toLowerCase();
                                }
                                else {
                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                                }
                            });
                        }
                        else {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').setAttribute('actual-url', 'page/' + this.value.replace(' ', '-').toLowerCase());
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').href = _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'page/' + this.value.replace(' ', '-').toLowerCase();
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').textContent = 'URL : ' + _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'page/' + this.value.replace(' ', '-').toLowerCase();
                        }
                        return (0,_common_common__WEBPACK_IMPORTED_MODULE_5__.checkInputDataAbility)(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + "system/pages/checkPageTitleURLInputAbility", {
                            security_code: 1,
                            name: "url",
                            value: this.value.toLowerCase()
                        }, function (response) {
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                        });
                    });
                });
                //save data by clicking data button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                    return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "POST",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/pages/managePages',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageID').value,
                            parent: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value,
                            position: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-position-id').value,
                            status: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-status').value,
                            seo: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo').value,
                            title: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').value,
                            icon: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-icon').value,
                            url: ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').getAttribute('actual-url') !== null) ? (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-produce-link').getAttribute('actual-url').toLowerCase() : '',
                            type: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-type').value,
                            btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').textContent
                        },
                    }, (response) => {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                        /*-------------------------*/
                        console.log(document.forms);
                        /*-------------------------*/
                    });
                });
                //reset inputbox by clicking reset button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-reset-btn').addEventListener('click', function () {
                    changeElementValueById([
                        { 'id': 'page-parent-id', 'value': '' },
                        { 'id': 'page-position-id', 'value': '' },
                        { 'id': 'page-status', 'value': '' },
                        { 'id': 'page-seo', 'value': '' },
                        { 'id': 'page-title', 'value': '' },
                        { 'id': 'page-url', 'value': '' },
                        { 'id': 'page-icon', 'value': '' },
                        { 'id': 'page-type', 'value': '' },
                    ]);
                });
                //select data by clicking select button
                if (document.querySelectorAll('#page-select').length !== 0) {
                    document.querySelectorAll('#page-select').forEach(function (__selector) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            __selector.addEventListener(event, function () {
                                if (this.checked) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode').innerHTML = 'Edit';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').innerHTML = 'Update';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageID').value = this.getAttribute('data-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value = this.getAttribute('data-parent-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-position-id').value = this.getAttribute('data-position');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-status').value = this.getAttribute('data-status');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo').value = this.getAttribute('data-seo');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').value = this.getAttribute('data-title');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value = this.getAttribute('data-url');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-type').value = this.getAttribute('data-type');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-icon').value = this.getAttribute('data-icon');
                                }
                            }, { passive: true });
                        });
                    });
                }
                /*add edit event*/
                if (document.querySelectorAll('#page-edit-btn').length !== 0) {
                    document.querySelectorAll('#page-edit-btn').forEach(function (_button) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            _button.addEventListener(event, function () {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode').innerHTML = 'Edit';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').innerHTML = 'Update';
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageID').value = this.getAttribute('data-id');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value = this.getAttribute('data-parent-id');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-position-id').value = this.getAttribute('data-position');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-status').value = this.getAttribute('data-status');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo').value = this.getAttribute('data-seo');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').value = this.getAttribute('data-title');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value = this.getAttribute('data-url');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-type').value = this.getAttribute('data-type');
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-icon').value = this.getAttribute('data-icon');
                            }, { passive: true });
                        });
                    });
                }
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#page-delete-btn', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/pages/deletePage', '#message3', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                });
                (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.paginationDriver)('ajax', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/pages/indexPaginationAJAX', 'pages-data-table', function (response) {
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                }, function () {
                    (0,_common_pagination__WEBPACK_IMPORTED_MODULE_6__.popUpDialogBoxDriver)('#page-delete-btn', 'Message', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/pages/deletePage', '#message3', function (response) {
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                    });
                    /*it will be fire on pagination*/
                    //select data by clicking select button
                    if (document.querySelectorAll('#page-select').length !== 0) {
                        document.querySelectorAll('#page-select').forEach(function (__selector) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                __selector.addEventListener(event, function () {
                                    if (this.checked) {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode').innerHTML = 'Edit';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').innerHTML = 'Update';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageID').value = this.getAttribute('data-id');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value = this.getAttribute('data-parent-id');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-position-id').value = this.getAttribute('data-position');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-status').value = this.getAttribute('data-status');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo').value = this.getAttribute('data-seo');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').value = this.getAttribute('data-title');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value = this.getAttribute('data-url');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-type').value = this.getAttribute('data-type');
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-icon').value = this.getAttribute('data-icon');
                                    }
                                }, { passive: true });
                            });
                        });
                    }
                    /*add edit event*/
                    if (document.querySelectorAll('#page-edit-btn').length !== 0) {
                        document.querySelectorAll('#page-edit-btn').forEach(function (_button) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                _button.addEventListener(event, function () {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageEditMode').innerHTML = 'Edit';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-data-btn').innerHTML = 'Update';
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#pageID').value = this.getAttribute('data-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-parent-id').value = this.getAttribute('data-parent-id');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-position-id').value = this.getAttribute('data-position');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-status').value = this.getAttribute('data-status');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-seo').value = this.getAttribute('data-seo');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-title').value = this.getAttribute('data-title');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-url').value = this.getAttribute('data-url');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-type').value = this.getAttribute('data-type');
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-icon').value = this.getAttribute('data-icon');
                                }, { passive: true });
                            });
                        });
                    }
                });
            }
            if (__url.indexOf('sources') !== -1) {
                [/*'focus', 'click','keyup',*/ 'paste', 'change'].forEach(function (__event) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#page-content')?.addEventListener(__event, function () {
                        return this.textContent = this.textContent.replace('{$layoutParams.root}', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost);
                    });
                });
            }
        }
        /*----------------*/
        /*----------------*/
        if (__url.indexOf('tracking') !== -1) {
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-databases') !== undefined) {
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseEditMode')) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').innerHTML = 'Save';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-reset-btn').innerHTML = 'Reset';
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseBackupEditMode')) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseBackup-data-btn').innerHTML = 'Backup';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseBackup-reset-btn').innerHTML = 'Reset';
                }
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#server-db-add-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseEditMode').innerHTML = 'Add new';
                    changeElementValueById([
                        { 'id': 'databaseID', 'value': '' },
                        { 'id': 'databaseServer', 'value': '' },
                        { 'id': 'databaseUser', 'value': '' },
                        { 'id': 'databaseName', 'value': '' },
                        { 'id': 'databasePassword', 'value': '' },
                    ]);
                });
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#server-db-backup-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message3').innerHTML = '';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal02').style.display = 'block';
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseBackupEditMode').innerHTML = 'Backup';
                    changeElementValueById([
                        { 'id': 'databaseStorage', 'value': '' },
                        { 'id': 'databaseBackup', 'value': '' },
                    ]);
                });
                //save data by clicking data button
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').addEventListener('click', function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                    (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "POST",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/manageServerDatabase',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseID').value,
                            name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseServer').value,
                            user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseUser').value,
                            db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseName').value,
                            password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databasePassword').value,
                            btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent
                        },
                    }, function (response) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent + 'd';
                        setTimeout(function () {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent.slice(0, -1);
                        }, 2000);
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                    });
                });
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseBackup-data-btn').addEventListener('click', function () {
                    /*stop running xhr hit to get better server performance*/
                    clearInterval(publicSocialLinksInterval);
                    publicSocialLinksInterval = 0;
                    clearInterval(visitorsAccessLogsInterval);
                    visitorsAccessLogsInterval = 0;
                    clearInterval(contactMessageInterval);
                    contactMessageInterval = 0;
                    clearInterval(serverDatabaseInterval);
                    serverDatabaseInterval = 0;
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                    (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "GET",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/backupData/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseStorage').value + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseBackup').value,
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    }, function (response) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent + 'd';
                        setTimeout(function () {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').textContent.slice(0, -1);
                        }, 2000);
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message3"));
                    });
                });
                serverDatabaseInterval = setInterval(function () {
                }, 1000);
                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "GET",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/getServerDatabases',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                }, function (response) {
                    if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                        if (JSON.parse(response).message === undefined) {
                            if (JSON.parse(response).length !== 0) {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-data-body").textContent = '';
                                let slNum = 1;
                                let view = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed table-striped' } }]);
                                let viewBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tbody': {} }]);
                                view.appendChild(viewBody);
                                JSON.parse(response).forEach(function (server) {
                                    let currentSLNum = slNum++;
                                    let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'tr': {
                                                'data-server': server.name,
                                                'data-db': server.db,
                                                'data-user': server.user,
                                                'data-password': server.password,
                                            }
                                        }]);
                                    /*viewBodyRow.addEventListener('click', function () {
                                        captureElement('#app-loader').style.display = 'block';
                                        sendRequest({
                                            method: "POST",
                                            url: appHost + 'system/tracking/dbServerStatus',
                                            async: true,
                                            header: [{
                                                name: "Content-type",
                                                value: "application/json;charset=UTF-8"
                                            }],
                                            data: {
                                                security_code: 1,
                                                server: server.name,
                                                db: server.db,
                                                user: server.user,
                                                password: server.password,
                                            },
                                        }, function (response: any) {
                                            captureElement('#app-loader').style.display = 'none';
                                            showMessage(response, captureElement("#message"));
                                            console.log(response);
                                        });
                                    });*/
                                    viewBody.appendChild(viewBodyRow);
                                    let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                    viewBodyRowTd1.textContent = currentSLNum;
                                    viewBodyRow.appendChild(viewBodyRowTd1);
                                    let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                    viewBodyRowTd2.textContent = server.name;
                                    viewBodyRow.appendChild(viewBodyRowTd2);
                                    let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                    viewBodyRowTd3.textContent = server.user;
                                    viewBodyRow.appendChild(viewBodyRowTd3);
                                    let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                    viewBodyRowTd4.textContent = server.db;
                                    viewBodyRow.appendChild(viewBodyRowTd4);
                                    let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                    viewBodyRowTd5.textContent = server.password;
                                    viewBodyRow.appendChild(viewBodyRowTd5);
                                    let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                    viewBodyRow.appendChild(viewBodyRowTd6);
                                    let viewBodyRowTd6a0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-primary',
                                            }
                                        }]);
                                    viewBodyRowTd6a0.addEventListener('click', function () {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                        (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                            method: "POST",
                                            url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/dbConnectionTest',
                                            async: true,
                                            header: [{
                                                    name: "Content-type",
                                                    value: "application/json;charset=UTF-8"
                                                }],
                                            data: {
                                                security_code: 1,
                                                server: server.name,
                                                user: server.user,
                                                password: server.password,
                                                db: server.db,
                                            },
                                        }, function (response) {
                                            if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                                                if (JSON.parse(response).length !== 0) {
                                                    if (JSON.parse(response).message === 'connected') {
                                                        window.open(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/view/' + server.db, '_blank');
                                                    }
                                                }
                                            }
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                        });
                                    });
                                    viewBodyRowTd6.appendChild(viewBodyRowTd6a0);
                                    let viewBodyRowTd6a0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'i': {
                                                'class': 'fa fa-eye',
                                            }
                                        }]);
                                    viewBodyRowTd6a0.appendChild(viewBodyRowTd6a0i1);
                                    let viewBodyRowTd6a1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-success',
                                            }
                                        }]);
                                    viewBodyRowTd6a1.addEventListener('click', function () {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseEditMode').textContent = 'Edit';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#database-data-btn').innerHTML = 'Update';
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseID').value = server.id;
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseServer').value = server.name;
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseUser').value = server.user;
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseName').value = server.db;
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databasePassword').value = server.password;
                                    });
                                    viewBodyRowTd6.appendChild(viewBodyRowTd6a1);
                                    let viewBodyRowTd6a1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'i': {
                                                'class': 'fa fa-edit',
                                            }
                                        }]);
                                    viewBodyRowTd6a1.appendChild(viewBodyRowTd6a1i1);
                                    let viewBodyRowTd6a2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-danger',
                                            }
                                        }]);
                                    viewBodyRowTd6a2.addEventListener('click', function () {
                                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                        (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                            method: "POST",
                                            url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteServerDatabase',
                                            async: true,
                                            header: [{
                                                    name: "Content-type",
                                                    value: "application/json;charset=UTF-8"
                                                }],
                                            data: {
                                                security_code: 1, id: server.id,
                                            },
                                        }, function (response) {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                        });
                                    });
                                    viewBodyRowTd6.appendChild(viewBodyRowTd6a2);
                                    let viewBodyRowTd6a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                            'i': {
                                                'class': 'fa fa-trash',
                                            }
                                        }]);
                                    viewBodyRowTd6a2.appendChild(viewBodyRowTd6a2i1);
                                });
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-data-body").appendChild(view);
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-data-body").style = 'padding:0;';
                            }
                            else {
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-data-body").textContent = 'No database found';
                            }
                        }
                        else {
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                        }
                    }
                });
            }
            if (__url.indexOf('tracking/view') !== -1) {
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-tables') !== undefined) {
                    setInterval(function () {
                    }, 1000);
                    (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "GET",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/getTables/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#dbInfoDb").value,
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    }, function (response) {
                        if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                            if (JSON.parse(response).message === undefined) {
                                if (JSON.parse(response).length !== 0) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").textContent = '';
                                    let slNum = 1;
                                    let view = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed table-striped' } }]);
                                    let viewBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tbody': {} }]);
                                    view.appendChild(viewBody);
                                    /*old version*/
                                    /*JSON.parse(response).forEach(function (table: any) {
                                        let currentSLNum: any = slNum++;
                                        let viewBodyRow = createElement([{'tr': {}}]);
                                        viewBody.appendChild(viewBodyRow);

                                        let viewBodyRowTd1 = createElement([{'td': {}}]);
                                        viewBodyRowTd1.textContent = currentSLNum;
                                        viewBodyRow.appendChild(viewBodyRowTd1);

                                        let viewBodyRowTd2 = createElement([{'td': {}}]);
                                        let nname;
                                        viewBodyRowTd2.textContent = (nname = table.TABLE_NAME.replace('msu_', '').substr(0, 20), (nname.length > 19) ? nname + '...' : nname);
                                        viewBodyRow.appendChild(viewBodyRowTd2);

                                        let viewBodyRowTd3 = createElement([{'td': {}}]);
                                        viewBodyRowTd3.textContent = table.TABLE_ROWS;
                                        viewBodyRow.appendChild(viewBodyRowTd3);

                                        let viewBodyRowTd4 = createElement([{'td': {}}]);
                                        let nsize;
                                        viewBodyRowTd4.textContent = (table.Size > 1024) ? (nsize = (table.Size / 1024), (nsize > 1024) ? (nsize / 1024).toFixed(2) + ' MB' : nsize.toFixed(2) + ' KB') : table.Size.toFixed(2) + ' B';
                                        viewBodyRow.appendChild(viewBodyRowTd4);

                                        let viewBodyRowTd5 = createElement([{'td': {}}]);
                                        viewBodyRowTd5.textContent = table.CREATE_TIME.substr(0, 11);
                                        viewBodyRow.appendChild(viewBodyRowTd5);

                                        let viewBodyRowTd6 = createElement([{'td': {}}]);
                                        viewBodyRowTd6.textContent = (table.UPDATE_TIME !== null) ? table.UPDATE_TIME.substr(0, 11) : 'Not Updated';
                                        viewBodyRow.appendChild(viewBodyRowTd6);

                                        let viewBodyRowTd7 = createElement([{'td': {}}]);
                                        viewBodyRowTd7.textContent = table.TABLE_COLLATION.substr(0, 7);
                                        viewBodyRow.appendChild(viewBodyRowTd7);

                                        let viewBodyRowTd8 = createElement([{'td': {}}]);
                                        viewBodyRowTd8.textContent = table.ENGINE;
                                        viewBodyRow.appendChild(viewBodyRowTd8);

                                        let viewBodyRowTdn = createElement([{'td': {}}]);
                                        viewBodyRow.appendChild(viewBodyRowTdn);
                                        let viewBodyRowTdna0 = createElement([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-primary',
                                            }
                                        }]);
                                        viewBodyRowTdna0.addEventListener('click', function () {
                                            captureElement('#app-loader').style.display = 'block';
                                            sendRequest({
                                                method: "POST",
                                                url: appHost + 'system/tracking/dbConnectionTest',
                                                async: true,
                                                header: [{
                                                    name: "Content-type",
                                                    value: "application/json;charset=UTF-8"
                                                }],
                                                data: {
                                                    security_code: 1,
                                                    server: captureElement('#dbInfoServer').value,
                                                    user: captureElement('#dbInfoUser').value,
                                                    password: captureElement('#dbInfoPassword').value,
                                                    db: captureElement('#dbInfoDb').value,
                                                },
                                            }, function (response: any) {
                                                if (response.length !== 0 && IsJsonString(response)) {
                                                    if (JSON.parse(response).length !== 0) {
                                                        if (JSON.parse(response).message === 'connected') {
                                                            window.open(appHost + 'system/tracking/viewDbTable/' + captureElement('#dbInfoDb').value + '/' + table.TABLE_NAME.replace('msu_', ''), '_self');
                                                        }
                                                    }
                                                }
                                                captureElement('#app-loader').style.display = 'none';
                                                showMessage(response, captureElement("#message"));
                                            });
                                        });
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                        let viewBodyRowTdna0i1 = createElement([{
                                            'i': {
                                                'class': 'fa fa-eye',
                                            }
                                        }]);
                                        viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                        let viewBodyRowTdna1 = createElement([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-success',
                                            }
                                        }]);
                                        /!*viewBodyRowTdna1.addEventListener('click', function () {
                                            captureElement('#message2').innerHTML = '';
                                            captureElement('#modal01').style.display = 'block';
                                            captureElement('#databaseEditMode').textContent = 'Edit';
                                            captureElement('#database-data-btn').innerHTML = 'Update';
                                            captureElement('#databaseID').value = datatable.id;
                                            captureElement('#databaseServer').value = datatable.name;
                                            captureElement('#databaseUser').value = datatable.user;
                                            captureElement('#databaseName').value = datatable.db;
                                            captureElement('#databasePassword').value = datatable.password;
                                        });*!/
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                        let viewBodyRowTdna1i1 = createElement([{
                                            'i': {
                                                'class': 'fa fa-edit',
                                            }
                                        }]);
                                        viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                        let viewBodyRowTdna2 = createElement([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-danger',
                                            }
                                        }]);
                                        viewBodyRowTdna2.addEventListener('click', function () {
                                            captureElement('#app-loader').style.display = 'block';
                                            sendRequest({
                                                method: "POST",
                                                url: appHost + 'system/tracking/deleteTable',
                                                async: true,
                                                header: [{
                                                    name: "Content-type",
                                                    value: "application/json;charset=UTF-8"
                                                }],
                                                data: {
                                                    security_code: 1,
                                                    server: captureElement('#dbInfoServer').value,
                                                    db: captureElement('#dbInfoDb').value,
                                                    user: captureElement('#dbInfoUser').value,
                                                    password: captureElement('#dbInfoPassword').value,
                                                    table: table.TABLE_NAME.replace('msu_', ''),
                                                },
                                            }, function (response: any) {
                                                captureElement('#app-loader').style.display = 'none';
                                                showMessage(response, captureElement("#message"));
                                            });
                                        });
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                        let viewBodyRowTdna2i1 = createElement([{
                                            'i': {
                                                'class': 'fa fa-trash',
                                            }
                                        }]);
                                        viewBodyRowTdna2.appendChild(viewBodyRowTdna2i1);

                                    });*/
                                    /*new version*/
                                    JSON.parse(response).forEach(function (table) {
                                        let currentSLNum = slNum++;
                                        let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                        viewBody.appendChild(viewBodyRow);
                                        let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRowTd1.textContent = currentSLNum;
                                        viewBodyRow.appendChild(viewBodyRowTd1);
                                        let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        let nname;
                                        viewBodyRowTd2.textContent = (nname = table.Name.replace('msu_', '').substr(0, 20), (nname.length > 19) ? nname + '...' : nname);
                                        viewBodyRow.appendChild(viewBodyRowTd2);
                                        let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRowTd3.textContent = table.Rows;
                                        viewBodyRow.appendChild(viewBodyRowTd3);
                                        let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        let nsize;
                                        viewBodyRowTd4.textContent = (table.Data_length > 1024) ? (nsize = (table.Data_length / 1024), (nsize > 1024) ? (nsize / 1024).toFixed(2) + ' MB' : nsize.toFixed(2) + ' KB') : table.Data_length.toFixed(2) + ' B';
                                        viewBodyRow.appendChild(viewBodyRowTd4);
                                        let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRowTd5.textContent = table.Create_time.substr(0, 11);
                                        viewBodyRow.appendChild(viewBodyRowTd5);
                                        let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRowTd6.textContent = (table.Update_time !== null) ? table.Update_time.substr(0, 11) : 'Not Updated';
                                        viewBodyRow.appendChild(viewBodyRowTd6);
                                        let viewBodyRowTd7 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRowTd7.textContent = table.Collation.substr(0, 7);
                                        viewBodyRow.appendChild(viewBodyRowTd7);
                                        let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRowTd8.textContent = table.Engine;
                                        viewBodyRow.appendChild(viewBodyRowTd8);
                                        let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                        viewBodyRow.appendChild(viewBodyRowTdn);
                                        let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                        viewBodyRowTdna0.addEventListener('click', function () {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                            (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                method: "POST",
                                                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/dbConnectionTest',
                                                async: true,
                                                header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                data: {
                                                    security_code: 1,
                                                    server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                    user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                    password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                    db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                },
                                            }, function (response) {
                                                if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                                                    if (JSON.parse(response).length !== 0) {
                                                        if (JSON.parse(response).message === 'connected') {
                                                            window.open(_db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/viewDbTable/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value + '/' + table.Name.replace('msu_', ''), '_self');
                                                        }
                                                    }
                                                }
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                            });
                                        });
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                        let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                        viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                        let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                        /*viewBodyRowTdna1.addEventListener('click', function () {
                                            captureElement('#message2').innerHTML = '';
                                            captureElement('#modal01').style.display = 'block';
                                            captureElement('#databaseEditMode').textContent = 'Edit';
                                            captureElement('#database-data-btn').innerHTML = 'Update';
                                            captureElement('#databaseID').value = datatable.id;
                                            captureElement('#databaseServer').value = datatable.name;
                                            captureElement('#databaseUser').value = datatable.user;
                                            captureElement('#databaseName').value = datatable.db;
                                            captureElement('#databasePassword').value = datatable.password;
                                        });*/
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                        let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                        viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                        let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                        viewBodyRowTdna2.addEventListener('click', function () {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                            (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                method: "POST",
                                                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTable',
                                                async: true,
                                                header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                data: {
                                                    security_code: 1,
                                                    server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                    db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                    user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                    password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                    table: table.TABLE_NAME.replace('msu_', ''),
                                                },
                                            }, function (response) {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                            });
                                        });
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                        let viewBodyRowTdna2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                        viewBodyRowTdna2.appendChild(viewBodyRowTdna2i1);
                                    });
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").appendChild(view);
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").style = 'padding:0;height: 420px;';
                                }
                                else {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").textContent = 'No table found';
                                }
                            }
                            else {
                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                            }
                        }
                    });
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable") !== undefined && (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body") !== undefined) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#show-create-table').addEventListener('click', function () {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                        (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                            method: "POST",
                            url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/showCreateTable',
                            async: true,
                            header: [{
                                    name: "Content-type",
                                    value: "application/json;charset=UTF-8"
                                }],
                            data: {
                                security_code: 1,
                                server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                            },
                        }, function (response) {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response.replace(/\\n/g, ''), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                        });
                    });
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#rename-table').addEventListener('click', function () {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                        (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                            method: "POST",
                            url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/renameTable',
                            async: true,
                            header: [{
                                    name: "Content-type",
                                    value: "application/json;charset=UTF-8"
                                }],
                            data: {
                                security_code: 1,
                                server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                fromTable: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#fromTable').value,
                                toTable: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#toTable').value,
                            },
                        }, function (response) {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                        });
                    });
                    setInterval(function () {
                    }, 1000);
                    (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                        method: "GET",
                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/getTableData/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#dbInfoDb").value + '/' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#runtimeTableName").value,
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    }, function (response) {
                        if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                            if (JSON.parse(response).message === undefined) {
                                if (JSON.parse(response).length !== 0) {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").textContent = '';
                                    let slNum = 1;
                                    let view = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed table-striped' } }]);
                                    let viewBody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tbody': {} }]);
                                    view.appendChild(viewBody);
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-app-databases') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.db;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.user;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.password;
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd6.textContent = datatable.last_updated_date_time;
                                            viewBodyRow.appendChild(viewBodyRowTd6);
                                            let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd8a0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTd8a0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a0);
                                            let viewBodyRowTd8a0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTd8a0.appendChild(viewBodyRowTd8a0i1);
                                            let viewBodyRowTd8a1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTd8a1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a1);
                                            let viewBodyRowTd8a1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTd8a1.appendChild(viewBodyRowTd8a1i1);
                                            let viewBodyRowTd8a2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTd8a2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTd8a2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-app-licence-payment') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.user_id;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.app_id;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.payment_method_id.substr(0, 10) + '...';
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd6.textContent = datatable.token.substr(0, 10) + '...';
                                            viewBodyRow.appendChild(viewBodyRowTd6);
                                            let viewBodyRowTd7 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7.textContent = datatable.payment_amount;
                                            viewBodyRow.appendChild(viewBodyRowTd7);
                                            let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd8.textContent = datatable.currency;
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd9 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd9.textContent = datatable.payment_type;
                                            viewBodyRow.appendChild(viewBodyRowTd9);
                                            let viewBodyRowTd10 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd10.textContent = datatable.payment_method.substr(0, 10) + '...';
                                            viewBodyRow.appendChild(viewBodyRowTd10);
                                            let viewBodyRowTd11 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd11.textContent = datatable.payment_date_time;
                                            viewBodyRow.appendChild(viewBodyRowTd11);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-app-social-links') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.link;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-apps') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.app_name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.app_category;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.app_url;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.app_icon;
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd6.textContent = datatable.app_status;
                                            viewBodyRow.appendChild(viewBodyRowTd6);
                                            let viewBodyRowTd7 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7.textContent = datatable.c_status;
                                            viewBodyRow.appendChild(viewBodyRowTd7);
                                            let viewBodyRowTd7n = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7n.textContent = datatable.quickAccess;
                                            viewBodyRow.appendChild(viewBodyRowTd7n);
                                            let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd8a0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTd8a0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a0);
                                            let viewBodyRowTd8a0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTd8a0.appendChild(viewBodyRowTd8a0i1);
                                            let viewBodyRowTd8a1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTd8a1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a1);
                                            let viewBodyRowTd8a1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTd8a1.appendChild(viewBodyRowTd8a1i1);
                                            let viewBodyRowTd8a2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTd8a2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTd8a2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-apps-status') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.version;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.os_version.substr(0, 19);
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd6.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(viewBodyRowTd6);
                                            let viewBodyRowTd7 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7.textContent = datatable.status;
                                            viewBodyRow.appendChild(viewBodyRowTd7);
                                            let viewBodyRowTd7n = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7n.textContent = datatable.created_date_time /*.substr(0, 10)*/;
                                            viewBodyRow.appendChild(viewBodyRowTd7n);
                                            let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd8a0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTd8a0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a0);
                                            let viewBodyRowTd8a0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTd8a0.appendChild(viewBodyRowTd8a0i1);
                                            let viewBodyRowTd8a1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTd8a1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a1);
                                            let viewBodyRowTd8a1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTd8a1.appendChild(viewBodyRowTd8a1i1);
                                            let viewBodyRowTd8a2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTd8a2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTd8a2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-apps-licences') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.client_id;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.app_id;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd6.textContent = datatable.licence_type;
                                            viewBodyRow.appendChild(viewBodyRowTd6);
                                            let viewBodyRowTd7 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7.textContent = datatable.lLimit;
                                            viewBodyRow.appendChild(viewBodyRowTd7);
                                            let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd8.textContent = datatable.lLimitBase;
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd9 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd9.textContent = datatable.issue.substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd9);
                                            let viewBodyRowTd10 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd10.textContent = datatable.lupdate.substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd10);
                                            let viewBodyRowTd11 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd11.textContent = datatable.lnextupdate.substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd11);
                                            let viewBodyRowTd12 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd12.textContent = datatable.expire.substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd12);
                                            let viewBodyRowTd13 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd13.textContent = datatable['created-date-time'].substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd13);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-apps-list-installed') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.version;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTd6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd6.textContent = (datatable.licence_key !== null) ? '***************' : 'NOT ISSUED';
                                            viewBodyRow.appendChild(viewBodyRowTd6);
                                            let viewBodyRowTd7 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd7.textContent = (datatable.issue !== null) ? datatable.issue.substr(0, 10) : 'NOT ISSUED';
                                            viewBodyRow.appendChild(viewBodyRowTd7);
                                            let viewBodyRowTd8 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd8.textContent = (datatable.expire !== null) ? datatable.expire.substr(0, 10) : 'NOT ISSUED';
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd9 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd9.textContent = datatable['created-date-time'].substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd9);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-block-list') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.ip;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-branches') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.status;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.location;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-branches-user') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.branch;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.user;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-chat-messages') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let viewBodyRowTd2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd2.textContent = datatable.senderID;
                                            viewBodyRow.appendChild(viewBodyRowTd2);
                                            let viewBodyRowTd3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd3.textContent = datatable.receiverID;
                                            viewBodyRow.appendChild(viewBodyRowTd3);
                                            let viewBodyRowTd4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd4.textContent = datatable.message;
                                            viewBodyRow.appendChild(viewBodyRowTd4);
                                            let viewBodyRowTd5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd5.textContent = datatable.time;
                                            viewBodyRow.appendChild(viewBodyRowTd5);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-client-browser-info') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let ip_address = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            ip_address.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(ip_address);
                                            let browserNameFull = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            browserNameFull.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(browserNameFull);
                                            /*let browserStatus = createElement([{'td': {}}]);
                                            browserStatus.textContent = datatable.browserStatus;
                                            viewBodyRow.appendChild(browserStatus);*/
                                            /*let browserArchitecture = createElement([{'td': {}}]);
                                            browserArchitecture.textContent = datatable.browserArchitecture;
                                            viewBodyRow.appendChild(browserArchitecture);*/
                                            /*let browserAppVersion = createElement([{'td': {}}]);
                                            browserAppVersion.textContent = datatable.browserAppVersion;
                                            viewBodyRow.appendChild(browserAppVersion);*/
                                            let deviceHardwareConcurrency = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            deviceHardwareConcurrency.textContent = datatable.deviceHardwareConcurrency;
                                            viewBodyRow.appendChild(deviceHardwareConcurrency);
                                            /*
                                                                                        let deviceMemory = createElement([{'td': {}}]);
                                                                                        deviceMemory.textContent = datatable.deviceMemory;
                                                                                        viewBodyRow.appendChild(deviceMemory);*/
                                            let deviceName = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            deviceName.textContent = datatable.deviceName;
                                            viewBodyRow.appendChild(deviceName);
                                            let deviceScreenWidth = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            deviceScreenWidth.textContent = datatable.deviceScreenWidth;
                                            viewBodyRow.appendChild(deviceScreenWidth);
                                            let deviceScreenHeight = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            deviceScreenHeight.textContent = datatable.deviceScreenHeight;
                                            viewBodyRow.appendChild(deviceScreenHeight);
                                            let userAgent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': { 'style': 'cursor:pointer' } }]);
                                            userAgent.textContent = '*****';
                                            userAgent.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable.userAgent), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRow.appendChild(userAgent);
                                            let created_date_time = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            created_date_time.textContent = datatable.created_date_time;
                                            viewBodyRow.appendChild(created_date_time);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-client-ip-info') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            /*

                                                {"id":769,"ip_address":"103.230.105.19","is_eu":"","city":"Dhaka","region":"Dhaka Division","region_code":"C","country_name":"Bangladesh",
                                                    "country_code":"BD","continent_name":"Asia","continent_code":"AS","latitude":"23.8175","longitude":"90.4096","postal":"1206",
                                                    "calling_code":"880","flag":"https://ipdata.co/flags/bd.png","emoji_flag":"🇧🇩","emoji_unicode":"U+1F1E7 U+1F1E9","asn_asn":"AS45925",
                                                    "asn_name":"ASN For Teletalk Bangladesh Ltd.","asn_domain":"teletalk.com.bd","asn_route":"103.230.105.0/24","asn_type":"isp",
                                                    "languages_name":"Bengali,","languages_native":"বাংলা,","currency_name":"Bangladeshi Taka","currency_code":"BDT","currency_symbol":"Tk",
                                                    "currency_native":"৳","currency_plural":"Bangladeshi takas","time_zone_name":"Asia/Dhaka","time_zone_abbr":"+06","time_zone_offset":"+0600",
                                                    "time_zone_is_dst":"","time_zone_current_time":"2020-07-07T13:13:24.904182+06:00","created_date_time":"2020-07-07 13:13:25"}

                                            */
                                            let ip_address = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            ip_address.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(ip_address);
                                            let city = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            city.textContent = datatable.city;
                                            viewBodyRow.appendChild(city);
                                            let country_name = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            country_name.textContent = datatable.country_name;
                                            viewBodyRow.appendChild(country_name);
                                            let continent_name = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            continent_name.textContent = datatable.continent_name;
                                            viewBodyRow.appendChild(continent_name);
                                            let location = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(location);
                                            let maplink = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'https://www.google.com/maps/@' + datatable.latitude + ',' + datatable.longitude + ',19z',
                                                        'class': 'link',
                                                    }
                                                }]);
                                            location.appendChild(maplink);
                                            let maplinkIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'img': {
                                                        'src': _db_app__WEBPACK_IMPORTED_MODULE_0__.app.content.folder.images + 'map-pin-marker-circle.svg',
                                                        'style': 'width:20px;height:20px;'
                                                    }
                                                }]);
                                            maplink.appendChild(maplinkIcon);
                                            let postal = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            postal.textContent = datatable.postal;
                                            viewBodyRow.appendChild(postal);
                                            let calling_code = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            calling_code.textContent = datatable.calling_code;
                                            viewBodyRow.appendChild(calling_code);
                                            let emoji_flag = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            emoji_flag.textContent = datatable.emoji_flag;
                                            viewBodyRow.appendChild(emoji_flag);
                                            let asn_asn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            asn_asn.textContent = datatable.asn_asn;
                                            viewBodyRow.appendChild(asn_asn);
                                            let asn_domain = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(asn_domain);
                                            let asnDomainLink = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'https://' + datatable.asn_domain,
                                                        'class': 'link',
                                                    }
                                                }]);
                                            asn_domain.appendChild(asnDomainLink);
                                            let asnDomainLinkIcon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'img': {
                                                        'src': _db_app__WEBPACK_IMPORTED_MODULE_0__.app.content.folder.images + 'navigation.svg',
                                                        'style': 'width:20px;height:20px;'
                                                    }
                                                }]);
                                            asnDomainLink.appendChild(asnDomainLinkIcon);
                                            let languages_name = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            languages_name.textContent = datatable.languages_name;
                                            viewBodyRow.appendChild(languages_name);
                                            let time_zone_abbr = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            time_zone_abbr.textContent = datatable.time_zone_abbr;
                                            viewBodyRow.appendChild(time_zone_abbr);
                                            let created_date_time = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            created_date_time.textContent = datatable.created_date_time.substr(2, 8);
                                            viewBodyRow.appendChild(created_date_time);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#table-view-client-update-info') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable) {
                                            let currentSLNum = slNum++;
                                            let viewBodyRow = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            viewBody.appendChild(viewBodyRow);
                                            let viewBodyRowTd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);
                                            let name = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            name.textContent = datatable.name;
                                            viewBodyRow.appendChild(name);
                                            let version = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            version.textContent = datatable.version;
                                            viewBodyRow.appendChild(version);
                                            let ip_address = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            ip_address.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(ip_address);
                                            let browserNameFull = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            browserNameFull.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(browserNameFull);
                                            let message = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            message.textContent = datatable.message;
                                            viewBodyRow.appendChild(message);
                                            let created_date_time = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            created_date_time.textContent = datatable.created_date_time;
                                            viewBodyRow.appendChild(created_date_time);
                                            let viewBodyRowTdn = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-primary',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(JSON.stringify(datatable), (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-eye',
                                                    }
                                                }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'block';
                                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                    method: "POST",
                                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoServer').value,
                                                        db: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoDb').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoUser').value,
                                                        password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#dbInfoPassword').value,
                                                        table: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response) {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#app-loader').style.display = 'none';
                                                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);
                                        });
                                    }
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").appendChild(view);
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").style = (JSON.parse(response).length > 10) ? 'padding:0;height: 420px;' : 'padding:0;';
                                }
                                else {
                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#table-view-datatable-body").textContent = 'No data found';
                                }
                            }
                            else {
                                (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message"));
                            }
                        }
                    });
                    /*
                                        if (captureElement('#databaseEditMode')) {
                                            captureElement('#database-data-btn').innerHTML = 'Save';
                                            captureElement('#database-reset-btn').innerHTML = 'Reset';
                                        }
                                        captureElement('#server-db-add-btn').addEventListener('click', function () {
                                            captureElement('#message2').innerHTML = '';
                                            captureElement('#modal01').style.display = 'block';
                                            captureElement('#databaseEditMode').innerHTML = 'Add new';
                                            captureElement('#databaseID').value = '';
                                            captureElement('#databaseServer').value = '';
                                            captureElement('#databaseUser').value = '';
                                            captureElement('#databaseName').value = '';
                                            captureElement('#databasePassword').value = '';
                                        });

                                        //save data by clicking data button
                                        captureElement('#database-data-btn').addEventListener('click', function () {
                                            sendRequest({
                                                method: "POST",
                                                url: appHost + 'system/tracking/manageServerDatabase',
                                                async: true,
                                                header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                                                data: {
                                                    security_code: 1,
                                                    id: captureElement('#databaseID').value,
                                                    name: captureElement('#databaseServer').value,
                                                    user: captureElement('#databaseUser').value,
                                                    db: captureElement('#databaseName').value,
                                                    password: captureElement('#databasePassword').value,
                                                    btnName: captureElement('#database-data-btn').textContent
                                                },
                                            }, function (response: any) {
                                                captureElement('#database-data-btn').textContent = captureElement('#database-data-btn').textContent + 'd';
                                                setTimeout(function () {
                                                    captureElement('#database-data-btn').textContent = captureElement('#database-data-btn').textContent.slice(0, -1);
                                                }, 2000);
                                                showMessage(response, captureElement("#message2"));
                                            });
                                        });*/
                }
            }
        }
        if (__url.indexOf('webapp') !== -1) {
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#webapp-data-table") !== undefined) {
                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/getWebAppInfo',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                }, function (response) {
                    if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                        if (JSON.parse(response).length !== 0) {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#webapp-data-table").textContent = '';
                            JSON.parse(response).forEach(function (webapp) {
                                /*let favLocalLocate = webapp.icon_local_dir;*/
                                let editor = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-edit-btn');
                                editor.setAttribute('data-id', webapp.id);
                                editor.setAttribute('data-name', webapp.name);
                                editor.setAttribute('data-description', webapp.description);
                                editor.setAttribute('data-company', webapp.company);
                                editor.setAttribute('data-filesLocate', webapp.doc_root);
                                editor.setAttribute('data-domainLocate', webapp.http_host_add);
                                editor.setAttribute('data-IPLocate', webapp.http_host_ip);
                                let web_app_info_box = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'web-app-info-box' } }]);
                                let web_app_info_box_nav = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'web-app-info-box-nav' } }]);
                                web_app_info_box.appendChild(web_app_info_box_nav);
                                let ul = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'ul': {} }]);
                                web_app_info_box_nav.appendChild(ul);
                                let li_overview = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'li': {
                                            'id': 'overview',
                                            'style': 'background: #93c'
                                        }
                                    }]);
                                li_overview.innerHTML = '<i class="fas fa-eye"></i><span>Overview</span>';
                                ul.appendChild(li_overview);
                                let li_basicInfo = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'li': { 'id': 'basicInfo' } }]);
                                li_basicInfo.innerHTML = '<i class="fab fa-app-store-ios"></i><span>Basic Info</span>';
                                ul.appendChild(li_basicInfo);
                                let li_databaseInfo = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'li': { 'id': 'databaseInfo' } }]);
                                li_databaseInfo.innerHTML = '<i class="fas fa-database"></i><span>Databases Info</span>';
                                ul.appendChild(li_databaseInfo);
                                let li_filesInfo = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'li': { 'id': 'filesInfo' } }]);
                                li_filesInfo.innerHTML = '<i class="fas fa-file-alt"></i><span>Files Info</span>';
                                ul.appendChild(li_filesInfo);
                                let li_mediaInfo = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'li': { 'id': 'mediaInfo' } }]);
                                li_mediaInfo.innerHTML = '<i class="fas fa-file-image"></i><span>Media Info</span>';
                                ul.appendChild(li_mediaInfo);
                                let li_socialInfo = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'li': { 'id': 'socialInfo' } }]);
                                li_socialInfo.innerHTML = '<i class="fas fa-user-friends"></i><span>Social Info</span>';
                                ul.appendChild(li_socialInfo);
                                let web_app_info_box_content = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'div': { 'class': 'web-app-info-box-content' } }]);
                                web_app_info_box.appendChild(web_app_info_box_content);
                                let web_app_info_box_content_overview = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'web-app-info-content-overview',
                                            'id': 'web-app-info-content-overview'
                                        }
                                    }]);
                                web_app_info_box_content.appendChild(web_app_info_box_content_overview);
                                let content_overview_table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'table': {
                                            'class': 'table',
                                            'style': 'text-align: center;'
                                        }
                                    }]);
                                web_app_info_box_content_overview.appendChild(content_overview_table);
                                let content_overview_table_tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_overview_table.appendChild(content_overview_table_tr1);
                                let content_overview_table_tr1_td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_overview_table_tr1.appendChild(content_overview_table_tr1_td);
                                let content_overview_table_tr1_favicon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'img': {
                                            'alt': 'Favicon',
                                            'src': webapp.icon_remote_dir + webapp.favicon,
                                            'style': 'width: 100px;height: 100px;'
                                        }
                                    }]);
                                content_overview_table_tr1_td.appendChild(content_overview_table_tr1_favicon);
                                let content_overview_table_tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_overview_table.appendChild(content_overview_table_tr2);
                                let content_overview_table_tr2_td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_overview_table_tr2.appendChild(content_overview_table_tr2_td);
                                let content_overview_table_tr2_webapp_name = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'a': {
                                            'href': webapp.http_host_add,
                                            'target': '_blank'
                                        }
                                    }]);
                                content_overview_table_tr2_webapp_name.textContent = webapp.name;
                                content_overview_table_tr2_td.appendChild(content_overview_table_tr2_webapp_name);
                                let content_overview_table_tr21 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_overview_table.appendChild(content_overview_table_tr21);
                                let content_overview_table_tr21_td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_overview_table_tr21.appendChild(content_overview_table_tr21_td);
                                let content_overview_table_tr21_webapp_company = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'a': {
                                            'href': _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost,
                                            'target': '_blank'
                                        }
                                    }]);
                                content_overview_table_tr21_webapp_company.textContent = webapp.company;
                                content_overview_table_tr21_td.appendChild(content_overview_table_tr21_webapp_company);
                                let content_overview_table_tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_overview_table.appendChild(content_overview_table_tr3);
                                let content_overview_table_tr3_td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_overview_table_tr3.appendChild(content_overview_table_tr3_td);
                                let content_overview_table_tr3_social_icons = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'socials-wrap',
                                            'style': 'margin-top: 2px;width:100%'
                                        }
                                    }]);
                                content_overview_table_tr3_td.appendChild(content_overview_table_tr3_social_icons);
                                let content_overview_table_tr3_social_icons_ul = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'ul': { 'id': 'web-app-social-links-icon' } }]);
                                content_overview_table_tr3_social_icons.appendChild(content_overview_table_tr3_social_icons_ul);
                                let web_app_info_box_content_basic = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'web-app-info-content-basic',
                                            'id': 'web-app-info-content-basic'
                                        }
                                    }]);
                                web_app_info_box_content_basic.innerHTML = 'Basic Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_basic);
                                let content_basic_table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed' } }]);
                                web_app_info_box_content_basic.appendChild(content_basic_table);
                                let content_basic_table_tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_basic_table.appendChild(content_basic_table_tr1);
                                let content_basic_table_tr1_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr1_td1.textContent = 'Name';
                                content_basic_table_tr1.appendChild(content_basic_table_tr1_td1);
                                let content_basic_table_tr1_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr1_td2.textContent = ':';
                                content_basic_table_tr1.appendChild(content_basic_table_tr1_td2);
                                let content_basic_table_tr1_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr1_td3.textContent = webapp.name;
                                content_basic_table_tr1.appendChild(content_basic_table_tr1_td3);
                                let content_basic_table_tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_basic_table.appendChild(content_basic_table_tr2);
                                let content_basic_table_tr2_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr2_td1.textContent = 'Company';
                                content_basic_table_tr2.appendChild(content_basic_table_tr2_td1);
                                let content_basic_table_tr2_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr2_td2.textContent = ':';
                                content_basic_table_tr2.appendChild(content_basic_table_tr2_td2);
                                let content_basic_table_tr2_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr2_td3.textContent = webapp.company;
                                content_basic_table_tr2.appendChild(content_basic_table_tr2_td3);
                                let content_basic_table_tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_basic_table.appendChild(content_basic_table_tr3);
                                let content_basic_table_tr3_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr3_td1.textContent = 'Description';
                                content_basic_table_tr3.appendChild(content_basic_table_tr3_td1);
                                let content_basic_table_tr3_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr3_td2.textContent = ':';
                                content_basic_table_tr3.appendChild(content_basic_table_tr3_td2);
                                let content_basic_table_tr3_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_basic_table_tr3_td3.textContent = webapp.description;
                                content_basic_table_tr3.appendChild(content_basic_table_tr3_td3);
                                let web_app_info_box_content_database = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'web-app-info-content-database',
                                            'id': 'web-app-info-content-database',
                                            'style': 'overflow: scroll;height: 600px;',
                                        }
                                    }]);
                                web_app_info_box_content_database.innerHTML = 'Databases Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_database);
                                let content_database_table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed' } }]);
                                web_app_info_box_content_database.appendChild(content_database_table);
                                let content_database_table_thead = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'thead': {} }]);
                                let content_database_table_tfoot = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tfoot': {} }]);
                                content_database_table.appendChild(content_database_table_thead);
                                content_database_table.appendChild(content_database_table_tfoot);
                                let content_database_table_tr1_head = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                let content_database_table_tr2_foot = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_database_table_thead.appendChild(content_database_table_tr1_head);
                                content_database_table_tfoot.appendChild(content_database_table_tr2_foot);
                                let content_database_table_tr1_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_database_table_tr1_td1.textContent = 'SL';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td1);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td1.cloneNode(true));
                                let content_database_table_tr1_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_database_table_tr1_td2.textContent = 'NAME';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td2.cloneNode(true));
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td2);
                                let content_database_table_tr1_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_database_table_tr1_td3.textContent = 'CREATE TIME';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td3);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td3.cloneNode(true));
                                let content_database_table_tr1_td4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_database_table_tr1_td4.textContent = 'UPDATE TIME';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td4);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td4.cloneNode(true));
                                let content_database_table_tr1_td5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_database_table_tr1_td5.textContent = 'COLLATION';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td5);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td5.cloneNode(true));
                                let content_database_table_tr1_td6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_database_table_tr1_td6.textContent = 'ENGINE';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td6);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td6.cloneNode(true));
                                let content_database_table_tbody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tbody': { 'id': 'web-app-tables' } }]);
                                content_database_table.appendChild(content_database_table_tbody);
                                let content_database_table_tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_database_table_tbody.appendChild(content_database_table_tr2);
                                let content_database_table_tr2_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'td': {
                                            'colspan': '7',
                                            'style': 'text-align: center !important;text-transform: none;'
                                        }
                                    }]);
                                content_database_table_tr2_td1.textContent = 'Data loading...';
                                content_database_table_tr2.appendChild(content_database_table_tr2_td1);
                                content_database_table.appendChild(content_database_table_tfoot);
                                let web_app_info_box_content_files = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'web-app-info-content-files',
                                            'id': 'web-app-info-content-files'
                                        }
                                    }]);
                                web_app_info_box_content_files.innerHTML = 'Files Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_files);
                                let content_files_table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed' } }]);
                                web_app_info_box_content_files.appendChild(content_files_table);
                                let content_files_table_tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_files_table.appendChild(content_files_table_tr1);
                                let content_files_table_tr1_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr1_td1.textContent = 'Root Directory';
                                content_files_table_tr1.appendChild(content_files_table_tr1_td1);
                                let content_files_table_tr1_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr1_td2.textContent = ':';
                                content_files_table_tr1.appendChild(content_files_table_tr1_td2);
                                let content_files_table_tr1_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr1_td3.textContent = webapp.doc_root;
                                content_files_table_tr1.appendChild(content_files_table_tr1_td3);
                                let content_files_table_tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_files_table.appendChild(content_files_table_tr2);
                                let content_files_table_tr2_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr2_td1.textContent = 'Domain';
                                content_files_table_tr2.appendChild(content_files_table_tr2_td1);
                                let content_files_table_tr2_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr2_td2.textContent = ':';
                                content_files_table_tr2.appendChild(content_files_table_tr2_td2);
                                let content_files_table_tr2_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr2_td3.textContent = webapp.http_host_add;
                                content_files_table_tr2.appendChild(content_files_table_tr2_td3);
                                let content_files_table_tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_files_table.appendChild(content_files_table_tr3);
                                let content_files_table_tr3_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr3_td1.textContent = 'IP';
                                content_files_table_tr3.appendChild(content_files_table_tr3_td1);
                                let content_files_table_tr3_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr3_td2.textContent = ':';
                                content_files_table_tr3.appendChild(content_files_table_tr3_td2);
                                let content_files_table_tr3_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr3_td3.textContent = webapp.http_host_ip;
                                content_files_table_tr3.appendChild(content_files_table_tr3_td3);
                                let content_files_table_tr4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_files_table.appendChild(content_files_table_tr4);
                                let content_files_table_tr4_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr4_td1.textContent = 'Favicon';
                                content_files_table_tr4.appendChild(content_files_table_tr4_td1);
                                let content_files_table_tr4_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr4_td2.textContent = ':';
                                content_files_table_tr4.appendChild(content_files_table_tr4_td2);
                                let content_files_table_tr4_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_files_table_tr4_td3.textContent = webapp.icon_remote_dir;
                                content_files_table_tr4.appendChild(content_files_table_tr4_td3);
                                let web_app_info_box_content_media = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'web-app-info-content-media',
                                            'id': 'web-app-info-content-media'
                                        }
                                    }]);
                                web_app_info_box_content_media.innerHTML = 'Media Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_media);
                                let content_media_table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'table': { 'class': 'table table-bottom-border-only table-condensed' } }]);
                                web_app_info_box_content_media.appendChild(content_media_table);
                                let content_media_table_tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_media_table.appendChild(content_media_table_tr1);
                                let content_media_table_tr1_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr1_td1.textContent = 'Theme';
                                content_media_table_tr1.appendChild(content_media_table_tr1_td1);
                                let content_media_table_tr1_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr1_td2.textContent = ':';
                                content_media_table_tr1.appendChild(content_media_table_tr1_td2);
                                let content_media_table_tr1_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr1_td3.textContent = webapp.default_layout;
                                content_media_table_tr1.appendChild(content_media_table_tr1_td3);
                                let content_media_table_tr1_td4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': { 'rowspan': '3' } }]);
                                content_media_table_tr1.appendChild(content_media_table_tr1_td4);
                                let content_media_table_tr1_td4_favicon = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'img': {
                                            'alt': 'Favicon',
                                            'src': webapp.icon_remote_dir + webapp.favicon,
                                            'style': 'width: 100px;height: 100px;'
                                        }
                                    }]);
                                content_media_table_tr1_td4.appendChild(content_media_table_tr1_td4_favicon);
                                let content_media_table_tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_media_table.appendChild(content_media_table_tr2);
                                let content_media_table_tr2_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr2_td1.textContent = 'Favicon';
                                content_media_table_tr2.appendChild(content_media_table_tr2_td1);
                                let content_media_table_tr2_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr2_td2.textContent = ':';
                                content_media_table_tr2.appendChild(content_media_table_tr2_td2);
                                let content_media_table_tr2_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr2_td3.textContent = webapp.favicon;
                                content_media_table_tr2.appendChild(content_media_table_tr2_td3);
                                let content_media_table_tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_media_table.appendChild(content_media_table_tr3);
                                let content_media_table_tr3_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr3.appendChild(content_media_table_tr3_td1);
                                let content_media_table_tr3_td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr3.appendChild(content_media_table_tr3_td2);
                                let content_media_table_tr3_td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                content_media_table_tr3.appendChild(content_media_table_tr3_td3);
                                let web_app_info_box_content_social = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'div': {
                                            'class': 'web-app-info-content-social',
                                            'id': 'web-app-info-content-social'
                                        }
                                    }]);
                                web_app_info_box_content_social.innerHTML = 'Social Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_social);
                                let content_social_table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'table': {
                                            'id': 'web-app-social-links',
                                            'class': 'table table-bottom-border-only table-condensed'
                                        }
                                    }]);
                                web_app_info_box_content_social.appendChild(content_social_table);
                                let content_social_table_tbody = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tbody': { 'id': 'web-app-social-links-view-data' } }]);
                                content_social_table.appendChild(content_social_table_tbody);
                                let content_social_table_tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                content_social_table_tbody.appendChild(content_social_table_tr1);
                                let content_social_table_tr1_td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                        'td': {
                                            'colspan': '3',
                                            'style': 'text-align: center !important;text-transform: none;'
                                        }
                                    }]);
                                content_social_table_tr1_td1.textContent = 'Data loading...';
                                content_social_table_tr1.appendChild(content_social_table_tr1_td1);
                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#webapp-data-table").appendChild(web_app_info_box);
                            });
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#overview').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    { 'id': 'basicInfo', 'attribute': 'style' },
                                    { 'id': 'databaseInfo', 'attribute': 'style' },
                                    { 'id': 'filesInfo', 'attribute': 'style' },
                                    { 'id': 'mediaInfo', 'attribute': 'style' },
                                    { 'id': 'socialInfo', 'attribute': 'style' },
                                ]);
                                changeElementDisplayById([
                                    { 'id': 'web-app-info-content-overview', 'display': 'block' },
                                    { 'id': 'web-app-info-content-basic', 'display': 'none' },
                                    { 'id': 'web-app-info-content-database', 'display': 'none' },
                                    { 'id': 'web-app-info-content-files', 'display': 'none' },
                                    { 'id': 'web-app-info-content-media', 'display': 'none' },
                                    { 'id': 'web-app-info-content-social', 'display': 'none' },
                                ]);
                            });
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#basicInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    { 'id': 'overview', 'attribute': 'style' },
                                    { 'id': 'databaseInfo', 'attribute': 'style' },
                                    { 'id': 'filesInfo', 'attribute': 'style' },
                                    { 'id': 'mediaInfo', 'attribute': 'style' },
                                    { 'id': 'socialInfo', 'attribute': 'style' },
                                ]);
                                changeElementDisplayById([
                                    { 'id': 'web-app-info-content-overview', 'display': 'none' },
                                    { 'id': 'web-app-info-content-basic', 'display': 'block' },
                                    { 'id': 'web-app-info-content-database', 'display': 'none' },
                                    { 'id': 'web-app-info-content-files', 'display': 'none' },
                                    { 'id': 'web-app-info-content-media', 'display': 'none' },
                                    { 'id': 'web-app-info-content-social', 'display': 'none' },
                                ]);
                            });
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    { 'id': 'overview', 'attribute': 'style' },
                                    { 'id': 'basicInfo', 'attribute': 'style' },
                                    { 'id': 'filesInfo', 'attribute': 'style' },
                                    { 'id': 'mediaInfo', 'attribute': 'style' },
                                    { 'id': 'socialInfo', 'attribute': 'style' },
                                ]);
                                changeElementDisplayById([
                                    { 'id': 'web-app-info-content-overview', 'display': 'none' },
                                    { 'id': 'web-app-info-content-basic', 'display': 'none' },
                                    { 'id': 'web-app-info-content-database', 'display': 'block' },
                                    { 'id': 'web-app-info-content-files', 'display': 'none' },
                                    { 'id': 'web-app-info-content-media', 'display': 'none' },
                                    { 'id': 'web-app-info-content-social', 'display': 'none' },
                                ]);
                            });
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#filesInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    { 'id': 'overview', 'attribute': 'style' },
                                    { 'id': 'basicInfo', 'attribute': 'style' },
                                    { 'id': 'databaseInfo', 'attribute': 'style' },
                                    { 'id': 'mediaInfo', 'attribute': 'style' },
                                    { 'id': 'socialInfo', 'attribute': 'style' },
                                ]);
                                changeElementDisplayById([
                                    { 'id': 'web-app-info-content-overview', 'display': 'none' },
                                    { 'id': 'web-app-info-content-basic', 'display': 'none' },
                                    { 'id': 'web-app-info-content-database', 'display': 'none' },
                                    { 'id': 'web-app-info-content-files', 'display': 'block' },
                                    { 'id': 'web-app-info-content-media', 'display': 'none' },
                                    { 'id': 'web-app-info-content-social', 'display': 'none' },
                                ]);
                            });
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#mediaInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    { 'id': 'overview', 'attribute': 'style' },
                                    { 'id': 'basicInfo', 'attribute': 'style' },
                                    { 'id': 'databaseInfo', 'attribute': 'style' },
                                    { 'id': 'filesInfo', 'attribute': 'style' },
                                    { 'id': 'socialInfo', 'attribute': 'style' },
                                ]);
                                changeElementDisplayById([
                                    { 'id': 'web-app-info-content-overview', 'display': 'none' },
                                    { 'id': 'web-app-info-content-basic', 'display': 'none' },
                                    { 'id': 'web-app-info-content-database', 'display': 'none' },
                                    { 'id': 'web-app-info-content-files', 'display': 'none' },
                                    { 'id': 'web-app-info-content-media', 'display': 'block' },
                                    { 'id': 'web-app-info-content-social', 'display': 'none' },
                                ]);
                            });
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#socialInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    { 'id': 'overview', 'attribute': 'style' },
                                    { 'id': 'basicInfo', 'attribute': 'style' },
                                    { 'id': 'databaseInfo', 'attribute': 'style' },
                                    { 'id': 'filesInfo', 'attribute': 'style' },
                                    { 'id': 'mediaInfo', 'attribute': 'style' },
                                ]);
                                changeElementDisplayById([
                                    { 'id': 'web-app-info-content-overview', 'display': 'none' },
                                    { 'id': 'web-app-info-content-basic', 'display': 'none' },
                                    { 'id': 'web-app-info-content-database', 'display': 'none' },
                                    { 'id': 'web-app-info-content-files', 'display': 'none' },
                                    { 'id': 'web-app-info-content-media', 'display': 'none' },
                                    { 'id': 'web-app-info-content-social', 'display': 'block' },
                                ]);
                            });
                            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-tables") !== undefined) {
                                setInterval(function () {
                                }, 1000);
                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                    method: "POST",
                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/getWebAppTables',
                                    async: true,
                                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                }, function (response) {
                                    if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                                        if (JSON.parse(response).length !== 0) {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-tables").textContent = '';
                                            let sl = 1;
                                            JSON.parse(response).forEach(function (webapptable) {
                                                let currentSl = sl++;
                                                const tr = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                                const td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                td1.textContent = currentSl;
                                                tr.appendChild(td1);
                                                const td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                td2.textContent = webapptable.TABLE_NAME.replace('msu_', '');
                                                tr.appendChild(td2);
                                                const td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                td3.textContent = webapptable.CREATE_TIME.substr(0, 10);
                                                tr.appendChild(td3);
                                                const td4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                td4.textContent = (webapptable.UPDATE_TIME !== null) ? webapptable.UPDATE_TIME.substr(0, 11) : 'Not Updated';
                                                tr.appendChild(td4);
                                                const td5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                td5.textContent = webapptable.TABLE_COLLATION.substr(0, 7);
                                                tr.appendChild(td5);
                                                const td6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                td6.textContent = webapptable.ENGINE;
                                                tr.appendChild(td6);
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-tables").appendChild(tr);
                                            });
                                        }
                                        else {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-tables").textContent = '';
                                            const tr = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            const td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'td': {
                                                        'class': 'text-align-center',
                                                    }
                                                }]);
                                            td.textContent = 'No table exists.';
                                            tr.appendChild(td);
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-tables").appendChild(tr);
                                        }
                                    }
                                });
                            }
                            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-view-data") !== undefined) {
                                setInterval(function () {
                                }, 1000);
                                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                    method: "POST",
                                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/getWebAppSocialLinks',
                                    async: true,
                                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                }, function (response) {
                                    if (response.length !== 0 && (0,_common_validation__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(response)) {
                                        if (JSON.parse(response).length !== 0) {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-view-data").textContent = '';
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-edit-data").textContent = '';
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-icon").textContent = '';
                                            let slNum = 1;
                                            JSON.parse(response).forEach(function (socialLink) {
                                                let currentSlNum = slNum++;
                                                const t1tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                                const t1td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t1td1.textContent = socialLink.name[0].toUpperCase() + socialLink.name.slice(1);
                                                t1tr1.appendChild(t1td1);
                                                const t1td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t1td2.textContent = ':';
                                                t1tr1.appendChild(t1td2);
                                                const t1td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t1td3.textContent = socialLink.link;
                                                t1tr1.appendChild(t1td3);
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-view-data").appendChild(t1tr1);
                                                const t2tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                                const t2td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t2td1.textContent = currentSlNum;
                                                t2tr2.appendChild(t2td1);
                                                const t2td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t2td2.textContent = socialLink.name[0].toUpperCase() + socialLink.name.slice(1);
                                                t2tr2.appendChild(t2td2);
                                                const t2td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t2td3.textContent = socialLink.link;
                                                t2tr2.appendChild(t2td3);
                                                const t2td4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'td': {} }]);
                                                t2tr2.appendChild(t2td4);
                                                let t2td4a1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'a': {
                                                            'href': 'javascript:void(0);',
                                                            'class': 'button button-xs button-success',
                                                        }
                                                    }]);
                                                t2td4a1.addEventListener('click', function () {
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappSocialLinksEditMode').textContent = 'Edit';
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').textContent = 'Update';
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-id').value = socialLink.id;
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#social-website-name').value = socialLink.name;
                                                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#social-website-profile-link').value = socialLink.link;
                                                });
                                                t2td4.appendChild(t2td4a1);
                                                let t2td4a1i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'i': {
                                                            'class': 'fa fa-edit',
                                                        }
                                                    }]);
                                                t2td4a1.appendChild(t2td4a1i1);
                                                let t2td4a2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'a': {
                                                            'href': 'javascript:void(0);',
                                                            'class': 'button button-xs button-danger',
                                                        }
                                                    }]);
                                                t2td4a2.addEventListener('click', function () {
                                                    (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                                                        method: "POST",
                                                        url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/deleteSocialLink',
                                                        async: true,
                                                        header: [{
                                                                name: "Content-type",
                                                                value: "application/json;charset=UTF-8"
                                                            }],
                                                        data: {
                                                            security_code: 1, id: socialLink.id,
                                                        },
                                                    }, function (response) {
                                                        (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message3"));
                                                    });
                                                });
                                                t2td4.appendChild(t2td4a2);
                                                let t2td4a2i1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'i': {
                                                            'class': 'fa fa-trash',
                                                        }
                                                    }]);
                                                t2td4a2.appendChild(t2td4a2i1);
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-edit-data").appendChild(t2tr2);
                                                let t2tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'i': {
                                                            'class': 'li-social ' + socialLink.name.toLowerCase() + '-social',
                                                        }
                                                    }]);
                                                let t2tr3a1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'a': {
                                                            'href': socialLink.link,
                                                            'target': '_blank',
                                                            'title': socialLink.name[0].toUpperCase() + socialLink.name.slice(1)
                                                        }
                                                    }]);
                                                t2tr3.appendChild(t2tr3a1);
                                                let t2tr3a1s1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'span': {
                                                            'class': 'fab fa-' + socialLink.name.toLowerCase() + ' icon-social',
                                                        }
                                                    }]);
                                                t2tr3a1.appendChild(t2tr3a1s1);
                                                let t2tr3a1s2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                        'span': {
                                                            'class': 'name-social',
                                                        }
                                                    }]);
                                                t2tr3a1s2.textContent = socialLink.name[0].toUpperCase() + socialLink.name.slice(1);
                                                t2tr3a1.appendChild(t2tr3a1s2);
                                                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-icon").appendChild(t2tr3);
                                            });
                                        }
                                        else {
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-view-data").textContent = '';
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-edit-data").textContent = '';
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-icon").textContent = '';
                                            const tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            const tr1td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'td': {
                                                        'class': 'text-align-center',
                                                        'colspan': '3',
                                                    }
                                                }]);
                                            tr1td.textContent = 'No link exists.';
                                            tr1.appendChild(tr1td);
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-view-data").appendChild(tr1);
                                            const tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                                            const tr2td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                                    'td': {
                                                        'class': 'text-align-center',
                                                        'colspan': '4',
                                                    }
                                                }]);
                                            tr2td.textContent = 'No link exists.';
                                            tr2.appendChild(tr2td);
                                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#web-app-social-links-edit-data").appendChild(tr2);
                                        }
                                    }
                                });
                            }
                        }
                        else {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#webapp-data-table").textContent = '';
                            const table = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'table': {
                                        'style': 'width:100%;',
                                    }
                                }]);
                            const tr = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{ 'tr': {} }]);
                            table.appendChild(tr);
                            const td = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                                    'td': {
                                        'class': 'text-align-center',
                                    }
                                }]);
                            td.textContent = 'No data exists.';
                            tr.appendChild(td);
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#webapp-data-table").appendChild(table);
                        }
                    }
                });
            }
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappEditMode')) {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-data-btn').innerHTML = 'Save';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-reset-btn').innerHTML = 'Reset';
            }
            //save data by clicking data button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-data-btn').addEventListener('click', function () {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-data-btn').textContent = 'Updating..';
                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/manageSite',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappID').value,
                        name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappName').value,
                        description: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappDescription').value,
                        company: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappCompany').value,
                        btnName: 'Update'
                    },
                }, function (response) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-data-btn').textContent = 'Updated';
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message2"));
                });
            });
            //reset inputbox by clicking reset button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-reset-btn').addEventListener('click', function () {
                changeElementValueById([
                    { 'id': 'webappID', 'value': '' },
                    { 'id': 'webappName', 'value': '' },
                    { 'id': 'webappDescription', 'value': '' },
                    { 'id': 'webappCompany', 'value': '' },
                ]);
            });
            //edit data by clicking edit button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-edit-btn').addEventListener('click', function () {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message2').innerHTML = '';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal01').style.display = 'block';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappEditMode').innerHTML = 'Edit';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-data-btn').innerHTML = 'Update';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappID').value = this.getAttribute('data-id');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappName').value = this.getAttribute('data-name');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappDescription').value = this.getAttribute('data-description');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappCompany').value = this.getAttribute('data-company');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappFilesLocate').value = this.getAttribute('data-filesLocate');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappDomainLocate').value = this.getAttribute('data-domainLocate');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappIPLocate').value = this.getAttribute('data-IPLocate');
            });
            //view modal by clicking button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-database-btn').addEventListener('click', function () {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal02').style.display = 'block';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappDatabaseEditMode').innerHTML = 'Change';
            });
            //view modal by clicking button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-logo-btn').addEventListener('click', function () {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal03').style.display = 'block';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappLogoEditMode').innerHTML = 'Change';
            });
            //upload database by click
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseFile').addEventListener('change', function () {
                (0,_common_upload__WEBPACK_IMPORTED_MODULE_7__.setUploadProgressSystem)('web-app-database-output');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard').removeAttribute('style');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#progressbar').style.display = 'block';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#databaseFile').files[0].name + ' selected';
                (0,_common_upload__WEBPACK_IMPORTED_MODULE_7__.uploadFile)('databaseFile', 'databaseFile', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/databaseUpgrade');
            });
            //restore system database by click
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-database-restore').addEventListener('click', function () {
                let progressBoard = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard');
                if (progressBoard === null) {
                    (0,_common_upload__WEBPACK_IMPORTED_MODULE_7__.setUploadProgressSystem)('web-app-database-output');
                }
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard').removeAttribute('style');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#progressbar').style.display = 'none';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#loaded_n_total').style.display = 'none';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = 'Framework database restoring..';
                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/databaseRestore',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-edit-btn').getAttribute('data-id'),
                        name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-edit-btn').getAttribute('data-name'),
                        host: window.location.hostname,
                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-database-restore').textContent
                    },
                }, function (response) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = response;
                });
            });
            //preview and upload image by change image selection
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload-logo-zone').addEventListener('change', function () {
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard') === undefined) {
                    (0,_common_upload__WEBPACK_IMPORTED_MODULE_7__.setUploadProgressSystem)('upload-info');
                }
                let file = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-selected-logo').files[0];
                let totalSize = (file.size / 1024) / 1024;
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-logo-upload-text').textContent = 'File: ' + file.name + ' (' + totalSize.toFixed(2) + ' Mb)';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#UploadStatusBoard').removeAttribute('style');
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#upload_status').innerHTML = file.name + ' uploading...';
                (0,_common_common__WEBPACK_IMPORTED_MODULE_5__.previewImage)('web-app-selected-logo', 'web-app-logo-preview-image');
                (0,_common_upload__WEBPACK_IMPORTED_MODULE_7__.uploadFile)('logoImage', 'web-app-selected-logo', _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/uploadLogoImage');
            });
            if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappSocialLinksEditPAD')) {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappSocialLinksEditMode').innerHTML = 'New';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').innerHTML = 'Save';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-reset-btn').innerHTML = 'Reset';
            }
            //view modal by clicking button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webapp-socialLinks-btn').addEventListener('click', function () {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#message3').innerHTML = '';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#modal04').style.display = 'block';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappSocialLinksEditMode').innerHTML = 'Add/Edit';
            });
            //reset inputbox by clicking reset button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-reset-btn').addEventListener('click', function () {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-id').value = '';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#social-website-name').value = '';
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#social-website-profile-link').value = '';
            });
            //save data by clicking data button
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').addEventListener('click', function () {
                (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                    method: "POST",
                    url: _db_app__WEBPACK_IMPORTED_MODULE_0__.appHost + 'system/webapp/manageSocialLinks',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        id: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-id').value,
                        name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#social-website-name').value,
                        link: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#social-website-profile-link').value,
                        company: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#webappCompany').value,
                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').textContent
                    },
                }, function (response) {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').textContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').textContent + 'd';
                    setTimeout(function () {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').textContent = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#web-app-social-links-data-btn').textContent.slice(0, -1);
                    }, 2000);
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)("#message3"));
                });
            });
        }
    }
}(window.location.href));
/*all functions declare here*/
function retrieveIpInfoPlus() {
    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ip-info-plus-app-bottom').textContent = 'Loading...';
    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ip-info-plus-app-data-table')?.setAttribute('style', 'display:none;');
    let ip = ((0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ipd-address').value !== null || true) ? (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ipd-address').value : '';
    (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
        method: "GET",
        url: 'https://api.ipdata.co/' + ip + '?api-key=test',
        async: true,
        header: [{ name: "Accept", value: "application/json" }]
    }, function (reply) {
        console.log(reply);
        const IpDataReply = JSON.parse(reply);
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ip-info-plus-app-data-table').removeAttribute('style');
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ip-info-plus-app-bottom').textContent = 'IP INFORMATION:';
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#ipd-address').value = IpDataReply.ip;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-ip').textContent = IpDataReply.ip;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-visual-location').href = 'https://www.google.com/maps/@' + IpDataReply.latitude + ',' + IpDataReply.longitude + ',19z';
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-city').textContent = IpDataReply.city;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-region').textContent = IpDataReply.region;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-country').textContent = IpDataReply.country_name + ' (' + IpDataReply.country_code + ') ';
        let country_flag = (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)([{
                'img': {
                    'style': 'width: 10px;height: 8px;',
                    'src': IpDataReply.flag,
                    'alt': 'FLAG'
                }
            }]);
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-country').appendChild(country_flag);
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-continent-name').textContent = IpDataReply.continent_name + ' (' + IpDataReply.continent_code + ')';
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-post').textContent = IpDataReply.postal;
        //captureElement('#client-asn-name').href = 'https://' + IpDataReply.asn !== undefined ? IpDataReply.asn.domain : 'NOT FOUND';
        //captureElement('#client-asn-name').textContent = IpDataReply.asn !== undefined ? IpDataReply.asn.name : 'NOT FOUND' + ' [' + IpDataReply.asn !== undefined ? IpDataReply.asn.type : 'NOT FOUND' + ']';
        let language = '';
        for (let n in IpDataReply.languages) {
            language += IpDataReply.languages[n].name + '[' + IpDataReply.languages[n].native + ']; ';
        }
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-language').textContent = language;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-currency-name').textContent = IpDataReply.currency.name;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-currency-code').textContent = IpDataReply.currency.code;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-currency-symbol').textContent = IpDataReply.currency.symbol;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-time-zone-name').textContent = IpDataReply.time_zone.name;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-time-zone-abbr').textContent = IpDataReply.time_zone.abbr;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-time-zone-offset').textContent = IpDataReply.time_zone.offset;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-time-zone-is-dist').textContent = IpDataReply.time_zone.is_dst;
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#client-time-zone-current-time').textContent = IpDataReply.time_zone.current_time;
    });
}
function removeAttributeById(elements) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#' + element.id).removeAttribute(element.attribute);
        });
    }
}
function changeElementDisplayById(elements) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#' + element.id).style.display = element.display;
        });
    }
}
function changeElementValueById(elements) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#' + element.id).value = element.value;
        });
    }
}
function addSpace() {
    (0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_1__.captureElement)('#flex-center').firstElementChild.clientHeight + 25) + 'px';
}

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************************!*\
  !*** ./Assets/sass/app-v4.scss ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

MishusoftRuntime = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=framework_v4.js.map