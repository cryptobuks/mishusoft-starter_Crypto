"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_mishusoft_Payment_ts"],{

/***/ "./Assets/typescripts/mishusoft/Payment.ts":
/*!*************************************************!*\
  !*** ./Assets/typescripts/mishusoft/Payment.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Payment": () => (/* binding */ Payment)
/* harmony export */ });
class Payment {
    appHost;
    constructor(appHost) {
        this.appHost = appHost;
    }
    handlePaymentSystem() {
        let self = this;
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
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let captureElement = dom.captureElement;
            if (captureElement('#payment-welcome') !== undefined) {
                ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                    captureElement('#start-pay')?.addEventListener(__event, function () {
                        captureElement('#payment-welcome').style.display = 'none';
                        captureElement('#payment-categories').removeAttribute('style');
                    }, { passive: true });
                });
            }
            if (captureElement('#payment-categories') !== undefined) {
                ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                    captureElement('#services-payment')?.addEventListener(__event, function () {
                        captureElement('#payment-categories').style.display = 'none';
                        captureElement('#payment-appid-email').style.display = 'block';
                    }, { passive: true });
                });
            }
            if (captureElement('#payment-appid-email') !== undefined) {
                ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                    captureElement('#user-select-back')?.addEventListener(__event, function () {
                        captureElement('#payment-appid-email').style.display = 'none';
                        captureElement('#payment-categories').removeAttribute('style');
                    }, { passive: true });
                });
                captureElement('#payment-appid-email')?.addEventListener('submit', function (event) {
                    event.preventDefault();
                    let emailAddressCheck, messages = captureElement('#messagePanel');
                    messages.className = 'messageZone';
                    if (messages.firstElementChild === null) {
                        let tmp = document.createElement('div');
                        messages.appendChild(tmp);
                    }
                    messages.firstElementChild.textContent = '';
                    if (captureElement('#app-id').value.length === 0) {
                        messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        messages.style.display = 'block';
                        messages.firstElementChild.innerHTML += 'Error : Please enter your app id to continue.<br/>';
                    }
                    __webpack_require__.e(/*! import() */ "Assets_typescripts_mishusoft_addSpace_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../mishusoft/addSpace */ "./Assets/typescripts/mishusoft/addSpace.ts")).then(function (module) {
                        if (captureElement('#email-address').value === '') {
                            messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messages.style.display = 'block';
                            messages.firstElementChild.innerHTML += 'Error : Enter your email address (valid for more than 14 characters).<br/>';
                            module.increaseHeight();
                        }
                        else if (captureElement('#email-address').value.indexOf('@') === -1 || captureElement('#email-address').value.indexOf('.') === -1 || captureElement('#email-address').value.length <= 14) {
                            messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messages.style.display = 'block';
                            messages.firstElementChild.innerHTML += 'Error : Enter valid email address.<br/>';
                            module.increaseHeight();
                        }
                        else {
                            emailAddressCheck = 'OK';
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                    if (captureElement('#client-plan-type').value.length === 0) {
                        messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        messages.style.display = 'block';
                        messages.firstElementChild.innerHTML += 'Error : Please select your plan type to continue.<br/>';
                    }
                    if (captureElement('#client-plan').value.length === 0) {
                        messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        messages.style.display = 'block';
                        messages.firstElementChild.innerHTML += 'Error : Please select your plan to continue.<br/>';
                    }
                    messages.firstElementChild.classList.add('box-runtime');
                    captureElement('#user-select-done').setAttribute('disabled', 'disabled');
                    captureElement('#email-address').setAttribute('disabled', 'disabled');
                    captureElement('#app-id').setAttribute('disabled', 'disabled');
                    captureElement('#client-plan').setAttribute('disabled', 'disabled');
                    captureElement('#client-plan-type').setAttribute('disabled', 'disabled');
                    captureElement('#user-select-back').setAttribute('disabled', 'disabled');
                    messages.style = 'display:block;';
                    messages.firstElementChild.textContent = 'Please wait......';
                    if (emailAddressCheck === 'OK') {
                        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
                            return request.sendRequest({
                                method: "POST",
                                url: self.appHost + 'payment/verifyClient',
                                async: true,
                                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                data: {
                                    security_code: 1,
                                    userEmail: captureElement('#email-address').value,
                                    appId: captureElement('#app-id').value,
                                    plan: captureElement('#client-plan').value,
                                    planType: captureElement('#client-plan-type').value,
                                    btnName: captureElement('#user-select-done').textContent
                                }
                            }, function (response) {
                                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/validation */ "./Assets/typescripts/common/validation.ts")).then(function (validation) {
                                    if (validation.IsJsonString(response) && JSON.parse(response).type === 'success') {
                                        //https://host/payment/payNow/appid/email/plantype/plan/amount
                                        /**
                                         * http://localhost/payment/payNow/
                                         * Zjh6bEdTVTV0RU1NNTlTREpFODhXdz09/
                                         * VUZBY3E2dzg1S2QyYk1HVHlsRm8ybi82YWNqc0Z1YXJmc082bXFMeWVDMD0=/
                                         * YmZIcmg5QnZFSEw4U2RxY3kxSlZDZz09/
                                         * YXNxZTdVVXBKbzNxbTcvQ052NEZUQT09/
                                         * */
                                        captureElement('#user-select-done').textContent = 'Redirecting...';
                                        setTimeout(function () {
                                            window.location.replace(self.appHost + 'payment/paynow/' + JSON.parse(response).appIdEncrypt + '/' +
                                                JSON.parse(response).emailEncrypt + '/' + JSON.parse(response).paymentPlanTypeEncrypt + '/' +
                                                JSON.parse(response).paymentPlanEncrypt + '/');
                                        }, 2000);
                                    }
                                    else {
                                        captureElement('#email-address').removeAttribute('disabled');
                                        captureElement('#app-id').removeAttribute('disabled');
                                        captureElement('#client-plan').removeAttribute('disabled');
                                        captureElement('#client-plan-type').removeAttribute('disabled');
                                        captureElement('#user-select-done').removeAttribute('disabled');
                                        captureElement('#user-select-back').removeAttribute('disabled');
                                    }
                                }).catch(function (err) {
                                    console.log(err);
                                });
                                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./Assets/typescripts/common/message.ts")).then(function (message) {
                                    message.showMessage(response, captureElement("#messagePanel"));
                                }).catch(function (err) {
                                    console.log(err);
                                });
                            });
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }
                });
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=Assets_typescripts_mishusoft_Payment_ts.runtime.bundle.js.map