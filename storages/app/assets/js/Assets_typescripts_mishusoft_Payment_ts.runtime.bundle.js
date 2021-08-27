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
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX21pc2h1c29mdF9QYXltZW50X3RzLnJ1bnRpbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNLE9BQU87SUFHSjtJQURaLFlBQ1ksT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUU1QixDQUFDO0lBRUQsbUJBQW1CO1FBRWYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCOzs7Ozs7Ozs7Ozs7O2dCQWFRO1FBRVIsd0xBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUN0QyxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDO1lBQ3hDLElBQUksY0FBYyxDQUFDLGtCQUFrQixDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUNsRCxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTztvQkFDekQsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTt3QkFDcEQsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBQzFELGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkUsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2FBQ047WUFDRCxJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDckQsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87b0JBQ3pELGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTt3QkFDM0QsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUMs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O3FDQUNuRTtnQ0FDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHO29DQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQ0FDcEIsQ0FBQyxDQUFDLENBQUM7Z0NBQ0gsdUpBQTJCLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztvQ0FDOUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0NBQ25FLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7b0NBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2dDQUNwQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHOzRCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixDQUFDLENBQUMsQ0FBQztxQkFDTjtnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL01pc2h1c29mdFJ1bnRpbWUvLi9Bc3NldHMvdHlwZXNjcmlwdHMvbWlzaHVzb2Z0L1BheW1lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBheW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXBwSG9zdCA6IHN0cmluZ1xuICAgICkge1xuICAgIH1cblxuICAgIGhhbmRsZVBheW1lbnRTeXN0ZW0oKXtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLypzdHJpcGUgcGF5bWVudCBtZXJjaGFudCBjZG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vanMuc3RyaXBlLmNvbS92MycpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgICAgICdzY3JpcHQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiAnaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzLycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXN5bmMnOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0pKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnU3RyaXBlIFNESyBsb2FkIGZhaWxlZC4gJyArIGVycilcbiAgICAgICAgICAgIH0pKi9cblxuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgICAgIGxldCBjYXB0dXJlRWxlbWVudCA9IGRvbS5jYXB0dXJlRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI3BheW1lbnQtd2VsY29tZScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ3RvdWNoc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2V2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjc3RhcnQtcGF5Jyk/LmFkZEV2ZW50TGlzdGVuZXIoX19ldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNwYXltZW50LXdlbGNvbWUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNwYXltZW50LWNhdGVnb3JpZXMnKS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHtwYXNzaXZlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNwYXltZW50LWNhdGVnb3JpZXMnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljaycsICd0b3VjaHN0YXJ0J10uZm9yRWFjaChmdW5jdGlvbiAoX19ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3NlcnZpY2VzLXBheW1lbnQnKT8uYWRkRXZlbnRMaXN0ZW5lcihfX2V2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3BheW1lbnQtY2F0ZWdvcmllcycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3BheW1lbnQtYXBwaWQtZW1haWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgfSwge3Bhc3NpdmU6IHRydWV9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KCcjcGF5bWVudC1hcHBpZC1lbWFpbCcpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ3RvdWNoc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2V2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjdXNlci1zZWxlY3QtYmFjaycpPy5hZGRFdmVudExpc3RlbmVyKF9fZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjcGF5bWVudC1hcHBpZC1lbWFpbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3BheW1lbnQtY2F0ZWdvcmllcycpLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwge3Bhc3NpdmU6IHRydWV9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjcGF5bWVudC1hcHBpZC1lbWFpbCcpPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbWFpbEFkZHJlc3NDaGVjaywgbWVzc2FnZXMgPSBjYXB0dXJlRWxlbWVudCgnI21lc3NhZ2VQYW5lbCcpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5jbGFzc05hbWUgPSAnbWVzc2FnZVpvbmUnO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KCcjYXBwLWlkJykudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPSAnYm94LW1lc3NhZ2UgYm94LWRhbmdlciBib3gtc2hhZG93LWxpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MICs9ICdFcnJvciA6IFBsZWFzZSBlbnRlciB5b3VyIGFwcCBpZCB0byBjb250aW51ZS48YnIvPic7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4uL21pc2h1c29mdC9hZGRTcGFjZScpLnRoZW4oZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KCcjZW1haWwtYWRkcmVzcycpLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSA9ICdib3gtbWVzc2FnZSBib3gtZGFuZ2VyIGJveC1zaGFkb3ctbGlnaHQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCArPSAnRXJyb3IgOiBFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgKHZhbGlkIGZvciBtb3JlIHRoYW4gMTQgY2hhcmFjdGVycykuPGJyLz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5pbmNyZWFzZUhlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYXB0dXJlRWxlbWVudCgnI2VtYWlsLWFkZHJlc3MnKS52YWx1ZS5pbmRleE9mKCdAJykgPT09IC0xIHx8IGNhcHR1cmVFbGVtZW50KCcjZW1haWwtYWRkcmVzcycpLnZhbHVlLmluZGV4T2YoJy4nKSA9PT0gLTEgfHwgY2FwdHVyZUVsZW1lbnQoJyNlbWFpbC1hZGRyZXNzJykudmFsdWUubGVuZ3RoIDw9IDE0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID0gJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdy1saWdodCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MICs9ICdFcnJvciA6IEVudGVyIHZhbGlkIGVtYWlsIGFkZHJlc3MuPGJyLz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5pbmNyZWFzZUhlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3NDaGVjayA9ICdPSyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXBsYW4tdHlwZScpLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID0gJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdy1saWdodCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCArPSAnRXJyb3IgOiBQbGVhc2Ugc2VsZWN0IHlvdXIgcGxhbiB0eXBlIHRvIGNvbnRpbnVlLjxici8+JztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI2NsaWVudC1wbGFuJykudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPSAnYm94LW1lc3NhZ2UgYm94LWRhbmdlciBib3gtc2hhZG93LWxpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MICs9ICdFcnJvciA6IFBsZWFzZSBzZWxlY3QgeW91ciBwbGFuIHRvIGNvbnRpbnVlLjxici8+JztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2JveC1ydW50aW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjdXNlci1zZWxlY3QtZG9uZScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNlbWFpbC1hZGRyZXNzJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1pZCcpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtcGxhbicpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtcGxhbi10eXBlJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3VzZXItc2VsZWN0LWJhY2snKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnN0eWxlID0gJ2Rpc3BsYXk6YmxvY2s7JztcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnUGxlYXNlIHdhaXQuLi4uLi4nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWxBZGRyZXNzQ2hlY2sgPT09ICdPSycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vY29tbW9uL3JlcXVlc3QnKS50aGVuKGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3Quc2VuZFJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlbGYuYXBwSG9zdCArICdwYXltZW50L3ZlcmlmeUNsaWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7bmFtZTogXCJDb250ZW50LXR5cGVcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCJ9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlfY29kZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJFbWFpbDogY2FwdHVyZUVsZW1lbnQoJyNlbWFpbC1hZGRyZXNzJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogY2FwdHVyZUVsZW1lbnQoJyNhcHAtaWQnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW46IGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXBsYW4nKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5UeXBlOiBjYXB0dXJlRWxlbWVudCgnI2NsaWVudC1wbGFuLXR5cGUnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk5hbWU6IGNhcHR1cmVFbGVtZW50KCcjdXNlci1zZWxlY3QtZG9uZScpLnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi92YWxpZGF0aW9uJykudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uSXNKc29uU3RyaW5nKHJlc3BvbnNlKSAmJiBKU09OLnBhcnNlKHJlc3BvbnNlKS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2h0dHBzOi8vaG9zdC9wYXltZW50L3BheU5vdy9hcHBpZC9lbWFpbC9wbGFudHlwZS9wbGFuL2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGh0dHA6Ly9sb2NhbGhvc3QvcGF5bWVudC9wYXlOb3cvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogWmpoNmJFZFRWVFYwUlUxTk5UbFRSRXBGT0RoWGR6MDkvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVlVaQlkzRTJkemcxUzJReVlrMUhWSGxzUm04eWJpODJZV05xYzBaMVlYSm1jMDgyYlhGTWVXVkRNRDA9L1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFltWkljbWc1UW5aRlNFdzRVMlJ4WTNreFNsWkRaejA5L1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFlYTnhaVGRWVlhCS2J6TnhiVGN2UTA1Mk5FWlVRVDA5L1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyN1c2VyLXNlbGVjdC1kb25lJykudGV4dENvbnRlbnQgPSAnUmVkaXJlY3RpbmcuLi4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXBwSG9zdCArICdwYXltZW50L3BheW5vdy8nICsgSlNPTi5wYXJzZShyZXNwb25zZSkuYXBwSWRFbmNyeXB0ICsgJy8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04ucGFyc2UocmVzcG9uc2UpLmVtYWlsRW5jcnlwdCArICcvJyArIEpTT04ucGFyc2UocmVzcG9uc2UpLnBheW1lbnRQbGFuVHlwZUVuY3J5cHQgKyAnLycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZShyZXNwb25zZSkucGF5bWVudFBsYW5FbmNyeXB0ICsgJy8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNlbWFpbC1hZGRyZXNzJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYXBwLWlkJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXBsYW4nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtcGxhbi10eXBlJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjdXNlci1zZWxlY3QtZG9uZScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3VzZXItc2VsZWN0LWJhY2snKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vY29tbW9uL21lc3NhZ2UnKS50aGVuKGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnNob3dNZXNzYWdlKHJlc3BvbnNlLCBjYXB0dXJlRWxlbWVudChcIiNtZXNzYWdlUGFuZWxcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==