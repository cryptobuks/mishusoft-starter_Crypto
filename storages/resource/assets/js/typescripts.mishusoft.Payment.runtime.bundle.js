(self["webpackChunk"] = self["webpackChunk"] || []).push([["typescripts_mishusoft_Payment_ts"],{

/***/ "./typescripts/mishusoft/Payment.ts":
/*!******************************************!*\
  !*** ./typescripts/mishusoft/Payment.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Payment": function() { return /* binding */ Payment; }
/* harmony export */ });
var Payment = /** @class */ (function () {
    function Payment(appHost) {
        this.appHost = appHost;
    }
    Payment.prototype.handlePaymentSystem = function () {
        var self = this;
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
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var _a;
            var captureElement = dom.captureElement;
            if (captureElement('#payment-welcome') !== undefined) {
                ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                    var _a;
                    (_a = captureElement('#start-pay')) === null || _a === void 0 ? void 0 : _a.addEventListener(__event, function () {
                        captureElement('#payment-welcome').style.display = 'none';
                        captureElement('#payment-categories').removeAttribute('style');
                    }, { passive: true });
                });
            }
            if (captureElement('#payment-categories') !== undefined) {
                ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                    var _a;
                    (_a = captureElement('#services-payment')) === null || _a === void 0 ? void 0 : _a.addEventListener(__event, function () {
                        captureElement('#payment-categories').style.display = 'none';
                        captureElement('#payment-appid-email').style.display = 'block';
                    }, { passive: true });
                });
            }
            if (captureElement('#payment-appid-email') !== undefined) {
                ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                    var _a;
                    (_a = captureElement('#user-select-back')) === null || _a === void 0 ? void 0 : _a.addEventListener(__event, function () {
                        captureElement('#payment-appid-email').style.display = 'none';
                        captureElement('#payment-categories').removeAttribute('style');
                    }, { passive: true });
                });
                (_a = captureElement('#payment-appid-email')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
                    event.preventDefault();
                    var emailAddressCheck, messages = captureElement('#messagePanel');
                    messages.className = 'messageZone';
                    if (messages.firstElementChild === null) {
                        var tmp = document.createElement('div');
                        messages.appendChild(tmp);
                    }
                    messages.firstElementChild.textContent = '';
                    if (captureElement('#app-id').value.length === 0) {
                        messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        messages.style.display = 'block';
                        messages.firstElementChild.innerHTML += 'Error : Please enter your app id to continue.<br/>';
                    }
                    __webpack_require__.e(/*! import() */ "typescripts_mishusoft_addSpace_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../mishusoft/addSpace */ "./typescripts/mishusoft/addSpace.ts")).then(function (module) {
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
                        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/request */ "./typescripts/common/request.ts")).then(function (request) {
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
                                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/validation */ "./typescripts/common/validation.ts")).then(function (validation) {
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
                                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./typescripts/common/message.ts")).then(function (message) {
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
    };
    return Payment;
}());



/***/ })

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdHlwZXNjcmlwdHMubWlzaHVzb2Z0LlBheW1lbnQucnVudGltZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7SUFFSSxpQkFDWSxPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBRTVCLENBQUM7SUFFRCxxQ0FBbUIsR0FBbkI7UUFFSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEI7Ozs7Ozs7Ozs7Ozs7Z0JBYVE7UUFFUiwwS0FBdUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHOztZQUN0QyxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDO1lBQ3hDLElBQUksY0FBYyxDQUFDLGtCQUFrQixDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUNsRCxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTzs7b0JBQ3pELG9CQUFjLENBQUMsWUFBWSxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTt3QkFDcEQsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBQzFELGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkUsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2FBQ047WUFDRCxJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDckQsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87O29CQUN6RCxvQkFBYyxDQUFDLG1CQUFtQixDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTt3QkFDM0QsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUMsS0FBSyxDQUFDLE9B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O2dDQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7b0NBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2dDQUNwQixDQUFDLENBQUMsQ0FBQztnQ0FDSCxnSkFBMkIsQ0FBQyxJQUFJLENBQUMsVUFBVSxPQUFPO29DQUM5QyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQ0FDbkUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztvQ0FDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0NBQ3BCLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7NEJBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JCLENBQUMsQ0FBQyxDQUFDO3FCQUNOO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdHlwZXNjcmlwdHMvbWlzaHVzb2Z0L1BheW1lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBheW1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYXBwSG9zdCA6IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGF5bWVudFN5c3RlbSgpe1xyXG5cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8qc3RyaXBlIHBheW1lbnQgbWVyY2hhbnQgY2RuXHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vanMuc3RyaXBlLmNvbS92MycpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgICAgICdzY3JpcHQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogJ2h0dHBzOi8vanMuc3RyaXBlLmNvbS92My8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXN5bmMnOiAnYXN5bmMnLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ1N0cmlwZSBTREsgbG9hZCBmYWlsZWQuICcgKyBlcnIpXHJcbiAgICAgICAgICAgIH0pKi9cclxuXHJcbiAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZG9tKSB7XHJcbiAgICAgICAgICAgIGxldCBjYXB0dXJlRWxlbWVudCA9IGRvbS5jYXB0dXJlRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KCcjcGF5bWVudC13ZWxjb21lJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljaycsICd0b3VjaHN0YXJ0J10uZm9yRWFjaChmdW5jdGlvbiAoX19ldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjc3RhcnQtcGF5Jyk/LmFkZEV2ZW50TGlzdGVuZXIoX19ldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3BheW1lbnQtd2VsY29tZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjcGF5bWVudC1jYXRlZ29yaWVzJykucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtwYXNzaXZlOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNwYXltZW50LWNhdGVnb3JpZXMnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ3RvdWNoc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNzZXJ2aWNlcy1wYXltZW50Jyk/LmFkZEV2ZW50TGlzdGVuZXIoX19ldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3BheW1lbnQtY2F0ZWdvcmllcycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjcGF5bWVudC1hcHBpZC1lbWFpbCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtwYXNzaXZlOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI3BheW1lbnQtYXBwaWQtZW1haWwnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ3RvdWNoc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyN1c2VyLXNlbGVjdC1iYWNrJyk/LmFkZEV2ZW50TGlzdGVuZXIoX19ldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3BheW1lbnQtYXBwaWQtZW1haWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3BheW1lbnQtY2F0ZWdvcmllcycpLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB7cGFzc2l2ZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNwYXltZW50LWFwcGlkLWVtYWlsJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudDogRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbWFpbEFkZHJlc3NDaGVjaywgbWVzc2FnZXMgPSBjYXB0dXJlRWxlbWVudCgnI21lc3NhZ2VQYW5lbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmNsYXNzTmFtZSA9ICdtZXNzYWdlWm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VzLmZpcnN0RWxlbWVudENoaWxkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQodG1wKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNhcHAtaWQnKS52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID0gJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdy1saWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogUGxlYXNlIGVudGVyIHlvdXIgYXBwIGlkIHRvIGNvbnRpbnVlLjxici8+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vbWlzaHVzb2Z0L2FkZFNwYWNlJykudGhlbihmdW5jdGlvbiAobW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI2VtYWlsLWFkZHJlc3MnKS52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSA9ICdib3gtbWVzc2FnZSBib3gtZGFuZ2VyIGJveC1zaGFkb3ctbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzICh2YWxpZCBmb3IgbW9yZSB0aGFuIDE0IGNoYXJhY3RlcnMpLjxici8+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5pbmNyZWFzZUhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhcHR1cmVFbGVtZW50KCcjZW1haWwtYWRkcmVzcycpLnZhbHVlLmluZGV4T2YoJ0AnKSA9PT0gLTEgfHwgY2FwdHVyZUVsZW1lbnQoJyNlbWFpbC1hZGRyZXNzJykudmFsdWUuaW5kZXhPZignLicpID09PSAtMSB8fCBjYXB0dXJlRWxlbWVudCgnI2VtYWlsLWFkZHJlc3MnKS52YWx1ZS5sZW5ndGggPD0gMTQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSA9ICdib3gtbWVzc2FnZSBib3gtZGFuZ2VyIGJveC1zaGFkb3ctbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogRW50ZXIgdmFsaWQgZW1haWwgYWRkcmVzcy48YnIvPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuaW5jcmVhc2VIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzc0NoZWNrID0gJ09LJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtcGxhbi10eXBlJykudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSA9ICdib3gtbWVzc2FnZSBib3gtZGFuZ2VyIGJveC1zaGFkb3ctbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MICs9ICdFcnJvciA6IFBsZWFzZSBzZWxlY3QgeW91ciBwbGFuIHR5cGUgdG8gY29udGludWUuPGJyLz4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXBsYW4nKS52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID0gJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdy1saWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogUGxlYXNlIHNlbGVjdCB5b3VyIHBsYW4gdG8gY29udGludWUuPGJyLz4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYm94LXJ1bnRpbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3VzZXItc2VsZWN0LWRvbmUnKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNlbWFpbC1hZGRyZXNzJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYXBwLWlkJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXBsYW4nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtcGxhbi10eXBlJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjdXNlci1zZWxlY3QtYmFjaycpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5zdHlsZSA9ICdkaXNwbGF5OmJsb2NrOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnUGxlYXNlIHdhaXQuLi4uLi4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbWFpbEFkZHJlc3NDaGVjayA9PT0gJ09LJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9yZXF1ZXN0JykudGhlbihmdW5jdGlvbiAocmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3Quc2VuZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBzZWxmLmFwcEhvc3QgKyAncGF5bWVudC92ZXJpZnlDbGllbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogW3tuYW1lOiBcIkNvbnRlbnQtdHlwZVwiLCB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIn1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlfY29kZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckVtYWlsOiBjYXB0dXJlRWxlbWVudCgnI2VtYWlsLWFkZHJlc3MnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IGNhcHR1cmVFbGVtZW50KCcjYXBwLWlkJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW46IGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXBsYW4nKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhblR5cGU6IGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXBsYW4tdHlwZScpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5OYW1lOiBjYXB0dXJlRWxlbWVudCgnI3VzZXItc2VsZWN0LWRvbmUnKS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vdmFsaWRhdGlvbicpLnRoZW4oZnVuY3Rpb24gKHZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uSXNKc29uU3RyaW5nKHJlc3BvbnNlKSAmJiBKU09OLnBhcnNlKHJlc3BvbnNlKS50eXBlID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaHR0cHM6Ly9ob3N0L3BheW1lbnQvcGF5Tm93L2FwcGlkL2VtYWlsL3BsYW50eXBlL3BsYW4vYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGh0dHA6Ly9sb2NhbGhvc3QvcGF5bWVudC9wYXlOb3cvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBaamg2YkVkVFZUVjBSVTFOTlRsVFJFcEZPRGhYZHowOS9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFZVWkJZM0UyZHpnMVMyUXlZazFIVkhsc1JtOHliaTgyWVdOcWMwWjFZWEptYzA4MmJYRk1lV1ZETUQwPS9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFltWkljbWc1UW5aRlNFdzRVMlJ4WTNreFNsWkRaejA5L1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogWVhOeFpUZFZWWEJLYnpOeGJUY3ZRMDUyTkVaVVFUMDkvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyN1c2VyLXNlbGVjdC1kb25lJykudGV4dENvbnRlbnQgPSAnUmVkaXJlY3RpbmcuLi4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXBwSG9zdCArICdwYXltZW50L3BheW5vdy8nICsgSlNPTi5wYXJzZShyZXNwb25zZSkuYXBwSWRFbmNyeXB0ICsgJy8nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZShyZXNwb25zZSkuZW1haWxFbmNyeXB0ICsgJy8nICsgSlNPTi5wYXJzZShyZXNwb25zZSkucGF5bWVudFBsYW5UeXBlRW5jcnlwdCArICcvJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04ucGFyc2UocmVzcG9uc2UpLnBheW1lbnRQbGFuRW5jcnlwdCArICcvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNlbWFpbC1hZGRyZXNzJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtaWQnKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2NsaWVudC1wbGFuJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtcGxhbi10eXBlJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyN1c2VyLXNlbGVjdC1kb25lJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyN1c2VyLXNlbGVjdC1iYWNrJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vbWVzc2FnZScpLnRoZW4oZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zaG93TWVzc2FnZShyZXNwb25zZSwgY2FwdHVyZUVsZW1lbnQoXCIjbWVzc2FnZVBhbmVsXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=