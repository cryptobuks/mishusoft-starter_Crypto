"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_mishusoft_UserAuth_ts"],{

/***/ "./Assets/typescripts/mishusoft/UserAuth.ts":
/*!**************************************************!*\
  !*** ./Assets/typescripts/mishusoft/UserAuth.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAuth": () => (/* binding */ UserAuth)
/* harmony export */ });
class UserAuth {
    appHost;
    constructor(appHost) {
        this.appHost = appHost;
    }
    handleRegistrationForm() {
        let self = this;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let captureElement = dom.captureElement;
            if (captureElement('#signup-button') !== undefined) {
                ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                    captureElement('#signup-button').addEventListener(event, function () {
                        captureElement('#flex-center').firstElementChild.removeAttribute('style');
                        let massager = captureElement('#messageZone');
                        if (massager.firstElementChild === null) {
                            let tmp = document.createElement('div');
                            massager.appendChild(tmp);
                        }
                        massager.firstElementChild.textContent = '';
                        massager.style = 'display:none;';
                        let firstNameCheck, lastNameCheck, emailAddressCheck, usernameCheck, passwordCheck, dateOfBirthCheck;
                        __webpack_require__.e(/*! import() */ "Assets_typescripts_mishusoft_addSpace_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../mishusoft/addSpace */ "./Assets/typescripts/mishusoft/addSpace.ts")).then(function (module) {
                            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/validation */ "./Assets/typescripts/common/validation.ts")).then(function (validation) {
                                if (captureElement('#first-name').value === '') {
                                    massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                    massager.style.display = 'block';
                                    massager.firstElementChild.innerHTML += 'Error : Enter your first name (more than 4 characters).<br/>';
                                    module.increaseHeight();
                                }
                                else if (validation.checkDuplicate(captureElement('#first-name').value)) {
                                    massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                    massager.style.display = 'block';
                                    massager.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your first name.<br/>';
                                    module.increaseHeight();
                                }
                                else if (captureElement('#first-name').value.length <= 3) {
                                    massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                    massager.style.display = 'block';
                                    massager.firstElementChild.innerHTML += 'Error : Enter your first name more than 4 characters.<br/>';
                                    module.increaseHeight();
                                }
                                else {
                                    firstNameCheck = 'OK';
                                }
                                if (captureElement('#last-name').value === '') {
                                    massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                    massager.style.display = 'block';
                                    massager.firstElementChild.innerHTML += 'Error : Enter your last name (more than 4 characters).<br/>';
                                    module.increaseHeight();
                                }
                                else if (validation.checkDuplicate(captureElement('#last-name').value)) {
                                    massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                    massager.style.display = 'block';
                                    massager.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your last name.<br/>';
                                    module.increaseHeight();
                                }
                                else if (captureElement('#last-name').value.length <= 3) {
                                    massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                    massager.style.display = 'block';
                                    massager.firstElementChild.innerHTML += 'Error : Enter your last name more than 4 letter.<br/>';
                                    module.increaseHeight();
                                }
                                else {
                                    lastNameCheck = 'OK';
                                }
                            }).catch(function (err) {
                                console.log(err);
                            });
                            if (captureElement('#email').value === '') {
                                massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                massager.style.display = 'block';
                                massager.firstElementChild.innerHTML += 'Error : Enter your email address (valid for more than 14 characters).<br/>';
                                module.increaseHeight();
                            }
                            else if (captureElement('#email').value.indexOf('@') === -1 || captureElement('#email').value.indexOf('.') === -1 || captureElement('#email').value.length <= 14) {
                                massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                massager.style.display = 'block';
                                massager.firstElementChild.innerHTML += 'Error : Enter valid email address.<br/>';
                                module.increaseHeight();
                            }
                            else {
                                emailAddressCheck = 'OK';
                            }
                            if (captureElement('#username').value === '') {
                                massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                massager.style.display = 'block';
                                massager.firstElementChild.innerHTML += 'Error : Enter your username (valid for at least 8 characters).<br/>';
                                module.increaseHeight();
                            }
                            else if (captureElement('#username').value.length < 8) {
                                massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                massager.style.display = 'block';
                                massager.firstElementChild.innerHTML += 'Error : Enter username at least 8 character.<br/>';
                                module.increaseHeight();
                            }
                            else {
                                usernameCheck = 'OK';
                            }
                            if (captureElement('#dateOfBirth').value === '') {
                                massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                massager.style.display = 'block';
                                massager.firstElementChild.innerHTML += 'Error : Enter your date of birth.<br/>';
                                module.increaseHeight();
                            }
                            else {
                                dateOfBirthCheck = 'OK';
                            }
                            passwordCheck = self.passwordVerify(massager);
                            if (captureElement('#password').value !== captureElement('#c_password').value) {
                                massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                massager.style.display = 'block';
                                massager.firstElementChild.innerHTML += 'Error : Your password matched.<br/>';
                            }
                            if (!captureElement('#agree').checked) {
                                massager.style = 'display:block;';
                                massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                massager.firstElementChild.innerHTML += 'Error : Please check i agree button to continue.<br/>';
                                module.increaseHeight();
                            }
                        }).catch(function (err) {
                            console.log(err);
                        });
                        if (captureElement('#agree').checked && firstNameCheck === 'OK' && lastNameCheck === 'OK' &&
                            emailAddressCheck === 'OK' && usernameCheck === 'OK' && passwordCheck === 'OK' && dateOfBirthCheck === 'OK') {
                            massager.firstElementChild.classList.add('box-runtime');
                            captureElement('#signup-button').setAttribute('disabled', 'disabled');
                            captureElement('#first-name').setAttribute('disabled', 'disabled');
                            captureElement('#last-name').setAttribute('disabled', 'disabled');
                            captureElement('#email').setAttribute('disabled', 'disabled');
                            captureElement('#username').setAttribute('disabled', 'disabled');
                            captureElement('#dateOfBirth').setAttribute('disabled', 'disabled');
                            captureElement('#gender').setAttribute('disabled', 'disabled');
                            captureElement('#password').setAttribute('disabled', 'disabled');
                            captureElement('#c_password').setAttribute('disabled', 'disabled');
                            captureElement('#agree').setAttribute('disabled', 'disabled');
                            massager.style = 'display:block;';
                            massager.firstElementChild.textContent = 'Please wait......';
                            if (massager.style.display === 'block') {
                                self.resizeMessageBoard();
                                self.removeMessageBoardNextSibling();
                            }
                            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
                                return request.sendRequest({
                                    method: "POST",
                                    url: self.appHost + 'user/registrationValidation',
                                    async: true,
                                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                    data: {
                                        security_code: 1,
                                        patch: captureElement('#regs').value,
                                        time: captureElement('#time').value,
                                        firstName: captureElement('#first-name').value,
                                        lastName: captureElement('#last-name').value,
                                        email: captureElement('#email').value,
                                        username: captureElement('#username').value,
                                        password: captureElement('#password').value,
                                        confirmPassword: captureElement('#c_password').value,
                                        dateOfBirth: captureElement('#dateOfBirth').value,
                                        gender: captureElement('#gender').value,
                                        agree: captureElement('#agree').value,
                                        btnName: captureElement('#signup-button').value
                                    }
                                }, function (response) {
                                    captureElement('#signup-button').removeAttribute('disabled');
                                    captureElement('#first-name').removeAttribute('disabled');
                                    captureElement('#last-name').removeAttribute('disabled');
                                    captureElement('#email').removeAttribute('disabled');
                                    captureElement('#username').removeAttribute('disabled');
                                    captureElement('#dateOfBirth').removeAttribute('disabled');
                                    captureElement('#gender').removeAttribute('disabled');
                                    captureElement('#password').removeAttribute('disabled');
                                    captureElement('#c_password').removeAttribute('disabled');
                                    captureElement('#agree').removeAttribute('disabled');
                                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./Assets/typescripts/common/message.ts")).then(function (message) {
                                        message.showMessage(response, captureElement("#messageZone"));
                                    }).catch(function (err) {
                                        alert(err);
                                    });
                                    self.resizeMessageBoard();
                                });
                            }).catch(function (err) {
                                console.log(err);
                            });
                        }
                    }, { passive: true });
                });
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
    handleLoginForm() {
        let self = this;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let captureElement = dom.captureElement;
            let massager = captureElement('#messageZone');
            if (massager.firstElementChild === null) {
                let tmp = document.createElement('div');
                massager.appendChild(tmp);
            }
            massager.firstElementChild.classList.add('box-runtime');
            captureElement('#login-button').setAttribute('disabled', 'disabled');
            captureElement('#username').setAttribute('disabled', 'disabled');
            captureElement('#password').setAttribute('disabled', 'disabled');
            massager.style = 'display:block;';
            massager.firstElementChild.textContent = 'Please wait......';
            self.resizeMessageBoard();
            self.removeMessageBoardNextSibling();
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
                return request.sendRequest({
                    method: "POST",
                    url: self.appHost + 'user/verifyUserAuth',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        username: captureElement('#username').value,
                        password: captureElement('#password').value,
                        redirectURL: captureElement('#redirect').value,
                        RememberMe: captureElement('#RememberMe').value,
                        btnName: captureElement('#login-button').value
                    }
                }, function (response) {
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/validation */ "./Assets/typescripts/common/validation.ts")).then(function (validation) {
                        if (validation.IsJsonString(response)) {
                            let data = JSON.parse(response);
                            if (data.type === 'success' && data.message === 'LOGGED_IN') {
                                if (data.url !== '/') {
                                    window.location.replace(self.appHost + data.url);
                                }
                                else {
                                    window.location.replace(self.appHost);
                                }
                            }
                            else {
                                captureElement('#login-button').removeAttribute('disabled');
                                captureElement('#username').removeAttribute('disabled');
                                captureElement('#password').removeAttribute('disabled');
                                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./Assets/typescripts/common/message.ts")).then(function (message) {
                                    message.showMessage(response, captureElement("#messageZone"));
                                }).catch(function (err) {
                                    alert(err);
                                });
                                self.resizeMessageBoard();
                            }
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                });
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
    handlePasswordRecoveryForm() {
        let self = this;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let captureElement = dom.captureElement;
            let messages = captureElement('#messageZone');
            if (messages.firstElementChild === null) {
                let tmp = document.createElement('div');
                messages.appendChild(tmp);
            }
            messages.firstElementChild.textContent = '';
            if (captureElement('#username').value.length === 0 && captureElement('#email').value.length === 0) {
                messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                messages.style.display = 'block';
                messages.firstElementChild.innerHTML += 'Error : Please enter username or email address to continue.<br/>';
            }
            messages.style = 'display:block;';
            messages.firstElementChild.textContent = 'Please wait......';
            captureElement('#flex-center').firstElementChild.style = 'height:500px';
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
                return request.sendRequest({
                    method: "POST",
                    url: self.appHost + 'user/passwordRecoveryValidation',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        patch: captureElement('#recovery').value,
                        time: captureElement('#time').value,
                        email: captureElement('#email').value,
                        username: captureElement('#username').value,
                        btnName: captureElement('#code-send-button').value
                    }
                }, function (response) {
                    captureElement('#email').removeAttribute('disabled');
                    captureElement('#username').removeAttribute('disabled');
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./Assets/typescripts/common/message.ts")).then(function (message) {
                        message.showMessage(response, captureElement("#messageZone"));
                    }).catch(function (err) {
                        alert(err);
                    });
                    self.resizeMessageBoard();
                    self.removeMessageBoardNextSibling();
                });
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
    handleSetPasswordForm() {
        let self = this;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let captureElement = dom.captureElement;
            let passwordCheck, messages = captureElement('#messageZone');
            if (messages.firstElementChild === null) {
                let tmp = document.createElement('div');
                messages.appendChild(tmp);
            }
            messages.firstElementChild.textContent = '';
            passwordCheck = self.passwordVerify(messages);
            if (captureElement('#password').value !== captureElement('#c_password').value) {
                messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                messages.style.display = 'block';
                messages.firstElementChild.innerHTML += 'Error : Your password matched.<br/>';
            }
            messages.style = 'display:block;';
            messages.firstElementChild.textContent = 'Please wait......';
            captureElement('#flex-center').firstElementChild.style = 'height:500px';
            if (passwordCheck === 'OK') {
                messages.firstElementChild.classList.add('box-runtime');
                captureElement('#set-new-password-button').setAttribute('disabled', 'disabled');
                captureElement('#password').setAttribute('disabled', 'disabled');
                captureElement('#c_password').setAttribute('disabled', 'disabled');
                messages.style = 'display:block;';
                messages.firstElementChild.textContent = 'Please wait......';
                captureElement('#flex-center').firstElementChild.style = 'height:700px';
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
                    return request.sendRequest({
                        method: "POST",
                        url: self.appHost + 'user/newPasswordValidation',
                        async: true,
                        header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                        data: {
                            security_code: 1,
                            patch: captureElement('#set-password').value,
                            time: captureElement('#time').value,
                            userId: captureElement('#user-id').value,
                            password: captureElement('#password').value,
                            confirmPassword: captureElement('#c_password').value,
                            btnName: captureElement('#set-new-password-button').value
                        }
                    }, function (response) {
                        captureElement('#set-new-password-button').removeAttribute('disabled');
                        captureElement('#password').removeAttribute('disabled');
                        captureElement('#c_password').removeAttribute('disabled');
                        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./Assets/typescripts/common/message.ts")).then(function (message) {
                            message.showMessage(response, captureElement("#messageZone"));
                        }).catch(function (err) {
                            alert(err);
                        });
                        self.resizeMessageBoard();
                        self.removeMessageBoardNextSibling();
                    });
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
    passwordVerify(messages) {
        let passwordCheck = '';
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let captureElement = dom.captureElement;
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/validation */ "./Assets/typescripts/common/validation.ts")).then(function (validation) {
                __webpack_require__.e(/*! import() */ "Assets_typescripts_mishusoft_addSpace_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../mishusoft/addSpace */ "./Assets/typescripts/mishusoft/addSpace.ts")).then(function (module) {
                    if (captureElement('#password').value === '') {
                        messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        messages.style.display = 'block';
                        messages.firstElementChild.innerHTML += 'Error : Enter your password (with @_ character and more than 6 character).<br/>';
                        module.increaseHeight();
                    }
                    else if (captureElement('#password').value !== '' && captureElement('#password').value.indexOf('@') === -1) {
                        messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        messages.style.display = 'block';
                        messages.firstElementChild.innerHTML += 'Error : Enter password with (@) character.<br/>';
                        module.increaseHeight();
                    }
                    else if (captureElement('#password').value !== '' && captureElement('#password').value.indexOf('_') === -1) {
                        messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        messages.style.display = 'block';
                        messages.firstElementChild.innerHTML += 'Error : Enter password with (_) character.<br/>';
                        module.increaseHeight();
                    }
                    else if (validation.checkDuplicate(captureElement('#password').value)) {
                        messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        messages.style.display = 'block';
                        messages.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your password.<br/>';
                        module.increaseHeight();
                    }
                    else if (captureElement('#password').value !== '' && captureElement('#password').value.length <= 6) {
                        messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        messages.style.display = 'block';
                        messages.firstElementChild.innerHTML += 'Error : Enter password more than 6 character.<br/>';
                        module.increaseHeight();
                    }
                    else {
                        passwordCheck = 'OK';
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
        return passwordCheck;
    }
    resizeMessageBoard() {
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let captureElement = dom.captureElement;
            if (captureElement('#flex-center') !== undefined) {
                captureElement('#flex-center').firstElementChild.style = 'height:' + (+captureElement('#messageZone').clientHeight + +captureElement('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
    removeMessageBoardNextSibling() {
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let captureElement = dom.captureElement;
            if (captureElement('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                captureElement('#messageZone').nextElementSibling.remove();
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX21pc2h1c29mdF9Vc2VyQXV0aF90cy5ydW50aW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxRQUFRO0lBR0w7SUFEWixZQUNZLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBRTNCLENBQUM7SUFFRCxzQkFBc0I7UUFDbEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLHdMQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDdEMsSUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUN4QyxJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDaEQsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUs7b0JBQ3ZELGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTt3QkFDckQsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDMUUsSUFBSSxRQUFRLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUM5QyxJQUFJLFFBQVEsQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7NEJBQ3JDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3hDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQzdCO3dCQUVELFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO3dCQUM1QyxRQUFRLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQzt3QkFFakMsSUFBSSxjQUFjLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQzlFLGdCQUFnQixDQUFD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QUssQ0FBQyxVQUFVLEdBQUc7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsNkJBQTZCO1FBQ3pCLHdMQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDdEMsSUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUN4QyxJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUNuRixjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDOUQ7UUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTWlzaHVzb2Z0UnVudGltZS8uL0Fzc2V0cy90eXBlc2NyaXB0cy9taXNodXNvZnQvVXNlckF1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVzZXJBdXRoIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFwcEhvc3Q6IHN0cmluZ1xuICAgICkge1xuICAgIH1cblxuICAgIGhhbmRsZVJlZ2lzdHJhdGlvbkZvcm0oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgICAgIGxldCBjYXB0dXJlRWxlbWVudCA9IGRvbS5jYXB0dXJlRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI3NpZ251cC1idXR0b24nKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljaycsICd0b3VjaHN0YXJ0J10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNzaWdudXAtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNmbGV4LWNlbnRlcicpLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXNzYWdlciA9IGNhcHR1cmVFbGVtZW50KCcjbWVzc2FnZVpvbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5hcHBlbmRDaGlsZCh0bXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuc3R5bGUgPSAnZGlzcGxheTpub25lOyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdE5hbWVDaGVjaywgbGFzdE5hbWVDaGVjaywgZW1haWxBZGRyZXNzQ2hlY2ssIHVzZXJuYW1lQ2hlY2ssIHBhc3N3b3JkQ2hlY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9mQmlydGhDaGVjaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuLi9taXNodXNvZnQvYWRkU3BhY2UnKS50aGVuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vY29tbW9uL3ZhbGlkYXRpb24nKS50aGVuKGZ1bmN0aW9uICh2YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI2ZpcnN0LW5hbWUnKS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSA9ICdib3gtbWVzc2FnZSBib3gtZGFuZ2VyIGJveC1zaGFkb3ctbGlnaHQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogRW50ZXIgeW91ciBmaXJzdCBuYW1lIChtb3JlIHRoYW4gNCBjaGFyYWN0ZXJzKS48YnIvPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuaW5jcmVhc2VIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uLmNoZWNrRHVwbGljYXRlKGNhcHR1cmVFbGVtZW50KCcjZmlyc3QtbmFtZScpLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID0gJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdy1saWdodCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCArPSAnRXJyb3IgOiBBIGNoYXJhY3RlciBoYXMgYmVlbiB1c2VkIG1vcmUgdGhhbiB0d2ljZSBpbiB5b3VyIGZpcnN0IG5hbWUuPGJyLz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmluY3JlYXNlSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FwdHVyZUVsZW1lbnQoJyNmaXJzdC1uYW1lJykudmFsdWUubGVuZ3RoIDw9IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSA9ICdib3gtbWVzc2FnZSBib3gtZGFuZ2VyIGJveC1zaGFkb3ctbGlnaHQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogRW50ZXIgeW91ciBmaXJzdCBuYW1lIG1vcmUgdGhhbiA0IGNoYXJhY3RlcnMuPGJyLz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmluY3JlYXNlSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWVDaGVjayA9ICdPSyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNsYXN0LW5hbWUnKS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSA9ICdib3gtbWVzc2FnZSBib3gtZGFuZ2VyIGJveC1zaGFkb3ctbGlnaHQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogRW50ZXIgeW91ciBsYXN0IG5hbWUgKG1vcmUgdGhhbiA0IGNoYXJhY3RlcnMpLjxici8+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5pbmNyZWFzZUhlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb24uY2hlY2tEdXBsaWNhdGUoY2FwdHVyZUVsZW1lbnQoJyNsYXN0LW5hbWUnKS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSA9ICdib3gtbWVzc2FnZSBib3gtZGFuZ2VyIGJveC1zaGFkb3ctbGlnaHQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogQSBjaGFyYWN0ZXIgaGFzIGJlZW4gdXNlZCBtb3JlIHRoYW4gdHdpY2UgaW4geW91ciBsYXN0IG5hbWUuPGJyLz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmluY3JlYXNlSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FwdHVyZUVsZW1lbnQoJyNsYXN0LW5hbWUnKS52YWx1ZS5sZW5ndGggPD0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID0gJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdy1saWdodCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCArPSAnRXJyb3IgOiBFbnRlciB5b3VyIGxhc3QgbmFtZSBtb3JlIHRoYW4gNCBsZXR0ZXIuPGJyLz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmluY3JlYXNlSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZUNoZWNrID0gJ09LJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNlbWFpbCcpLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPSAnYm94LW1lc3NhZ2UgYm94LWRhbmdlciBib3gtc2hhZG93LWxpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCArPSAnRXJyb3IgOiBFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgKHZhbGlkIGZvciBtb3JlIHRoYW4gMTQgY2hhcmFjdGVycykuPGJyLz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuaW5jcmVhc2VIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhcHR1cmVFbGVtZW50KCcjZW1haWwnKS52YWx1ZS5pbmRleE9mKCdAJykgPT09IC0xIHx8IGNhcHR1cmVFbGVtZW50KCcjZW1haWwnKS52YWx1ZS5pbmRleE9mKCcuJykgPT09IC0xIHx8IGNhcHR1cmVFbGVtZW50KCcjZW1haWwnKS52YWx1ZS5sZW5ndGggPD0gMTQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID0gJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdy1saWdodCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogRW50ZXIgdmFsaWQgZW1haWwgYWRkcmVzcy48YnIvPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5pbmNyZWFzZUhlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzc0NoZWNrID0gJ09LJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyN1c2VybmFtZScpLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPSAnYm94LW1lc3NhZ2UgYm94LWRhbmdlciBib3gtc2hhZG93LWxpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCArPSAnRXJyb3IgOiBFbnRlciB5b3VyIHVzZXJuYW1lICh2YWxpZCBmb3IgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzKS48YnIvPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5pbmNyZWFzZUhlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FwdHVyZUVsZW1lbnQoJyN1c2VybmFtZScpLnZhbHVlLmxlbmd0aCA8IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID0gJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdy1saWdodCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogRW50ZXIgdXNlcm5hbWUgYXQgbGVhc3QgOCBjaGFyYWN0ZXIuPGJyLz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuaW5jcmVhc2VIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZUNoZWNrID0gJ09LJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNkYXRlT2ZCaXJ0aCcpLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPSAnYm94LW1lc3NhZ2UgYm94LWRhbmdlciBib3gtc2hhZG93LWxpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCArPSAnRXJyb3IgOiBFbnRlciB5b3VyIGRhdGUgb2YgYmlydGguPGJyLz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuaW5jcmVhc2VIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2ZCaXJ0aENoZWNrID0gJ09LJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZENoZWNrID0gc2VsZi5wYXNzd29yZFZlcmlmeShtYXNzYWdlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNwYXNzd29yZCcpLnZhbHVlICE9PSBjYXB0dXJlRWxlbWVudCgnI2NfcGFzc3dvcmQnKS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPSAnYm94LW1lc3NhZ2UgYm94LWRhbmdlciBib3gtc2hhZG93LWxpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCArPSAnRXJyb3IgOiBZb3VyIHBhc3N3b3JkIG1hdGNoZWQuPGJyLz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FwdHVyZUVsZW1lbnQoJyNhZ3JlZScpLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuc3R5bGUgPSAnZGlzcGxheTpibG9jazsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPSAnYm94LW1lc3NhZ2UgYm94LWRhbmdlciBib3gtc2hhZG93LWxpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzc2FnZXIuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MICs9ICdFcnJvciA6IFBsZWFzZSBjaGVjayBpIGFncmVlIGJ1dHRvbiB0byBjb250aW51ZS48YnIvPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5pbmNyZWFzZUhlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI2FncmVlJykuY2hlY2tlZCAmJiBmaXJzdE5hbWVDaGVjayA9PT0gJ09LJyAmJiBsYXN0TmFtZUNoZWNrID09PSAnT0snICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzQ2hlY2sgPT09ICdPSycgJiYgdXNlcm5hbWVDaGVjayA9PT0gJ09LJyAmJiBwYXNzd29yZENoZWNrID09PSAnT0snICYmIGRhdGVPZkJpcnRoQ2hlY2sgPT09ICdPSycpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2JveC1ydW50aW1lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNzaWdudXAtYnV0dG9uJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjZmlyc3QtbmFtZScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2xhc3QtbmFtZScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2VtYWlsJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjdXNlcm5hbWUnKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYXRlT2ZCaXJ0aCcpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2dlbmRlcicpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3Bhc3N3b3JkJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY19wYXNzd29yZCcpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FncmVlJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NhZ2VyLnN0eWxlID0gJ2Rpc3BsYXk6YmxvY2s7JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdQbGVhc2Ugd2FpdC4uLi4uLic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFzc2FnZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc2l6ZU1lc3NhZ2VCb2FyZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZU1lc3NhZ2VCb2FyZE5leHRTaWJsaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vY29tbW9uL3JlcXVlc3QnKS50aGVuKGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LnNlbmRSZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlbGYuYXBwSG9zdCArICd1c2VyL3JlZ2lzdHJhdGlvblZhbGlkYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7bmFtZTogXCJDb250ZW50LXR5cGVcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCJ9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eV9jb2RlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoOiBjYXB0dXJlRWxlbWVudCgnI3JlZ3MnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBjYXB0dXJlRWxlbWVudCgnI3RpbWUnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGNhcHR1cmVFbGVtZW50KCcjZmlyc3QtbmFtZScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBjYXB0dXJlRWxlbWVudCgnI2xhc3QtbmFtZScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBjYXB0dXJlRWxlbWVudCgnI2VtYWlsJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGNhcHR1cmVFbGVtZW50KCcjdXNlcm5hbWUnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogY2FwdHVyZUVsZW1lbnQoJyNwYXNzd29yZCcpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogY2FwdHVyZUVsZW1lbnQoJyNjX3Bhc3N3b3JkJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9mQmlydGg6IGNhcHR1cmVFbGVtZW50KCcjZGF0ZU9mQmlydGgnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6IGNhcHR1cmVFbGVtZW50KCcjZ2VuZGVyJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdyZWU6IGNhcHR1cmVFbGVtZW50KCcjYWdyZWUnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5OYW1lOiBjYXB0dXJlRWxlbWVudCgnI3NpZ251cC1idXR0b24nKS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNzaWdudXAtYnV0dG9uJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNmaXJzdC1uYW1lJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNsYXN0LW5hbWUnKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2VtYWlsJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyN1c2VybmFtZScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjZGF0ZU9mQmlydGgnKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2dlbmRlcicpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjcGFzc3dvcmQnKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2NfcGFzc3dvcmQnKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FncmVlJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vbWVzc2FnZScpLnRoZW4oZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnNob3dNZXNzYWdlKHJlc3BvbnNlLCBjYXB0dXJlRWxlbWVudChcIiNtZXNzYWdlWm9uZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc2l6ZU1lc3NhZ2VCb2FyZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7cGFzc2l2ZTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUxvZ2luRm9ybSgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgICAgIGxldCBjYXB0dXJlRWxlbWVudCA9IGRvbS5jYXB0dXJlRWxlbWVudDtcblxuICAgICAgICAgICAgbGV0IG1hc3NhZ2VyID0gY2FwdHVyZUVsZW1lbnQoJyNtZXNzYWdlWm9uZScpO1xuICAgICAgICAgICAgaWYgKG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG1hc3NhZ2VyLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXNzYWdlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdib3gtcnVudGltZScpO1xuICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNsb2dpbi1idXR0b24nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3VzZXJuYW1lJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNwYXNzd29yZCcpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIG1hc3NhZ2VyLnN0eWxlID0gJ2Rpc3BsYXk6YmxvY2s7JztcbiAgICAgICAgICAgIG1hc3NhZ2VyLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ1BsZWFzZSB3YWl0Li4uLi4uJztcblxuICAgICAgICAgICAgc2VsZi5yZXNpemVNZXNzYWdlQm9hcmQoKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlTWVzc2FnZUJvYXJkTmV4dFNpYmxpbmcoKTtcblxuICAgICAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vcmVxdWVzdCcpLnRoZW4oZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdC5zZW5kUmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogc2VsZi5hcHBIb3N0ICsgJ3VzZXIvdmVyaWZ5VXNlckF1dGgnLFxuICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBbe25hbWU6IFwiQ29udGVudC10eXBlXCIsIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwifV0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5X2NvZGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogY2FwdHVyZUVsZW1lbnQoJyN1c2VybmFtZScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGNhcHR1cmVFbGVtZW50KCcjcGFzc3dvcmQnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VVJMOiBjYXB0dXJlRWxlbWVudCgnI3JlZGlyZWN0JykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1lbWJlck1lOiBjYXB0dXJlRWxlbWVudCgnI1JlbWVtYmVyTWUnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk5hbWU6IGNhcHR1cmVFbGVtZW50KCcjbG9naW4tYnV0dG9uJykudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vY29tbW9uL3ZhbGlkYXRpb24nKS50aGVuKGZ1bmN0aW9uICh2YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5Jc0pzb25TdHJpbmcocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnc3VjY2VzcycgJiYgZGF0YS5tZXNzYWdlID09PSAnTE9HR0VEX0lOJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS51cmwgIT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoc2VsZi5hcHBIb3N0ICsgZGF0YS51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoc2VsZi5hcHBIb3N0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjbG9naW4tYnV0dG9uJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3VzZXJuYW1lJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3Bhc3N3b3JkJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9tZXNzYWdlJykudGhlbihmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zaG93TWVzc2FnZShyZXNwb25zZSwgY2FwdHVyZUVsZW1lbnQoXCIjbWVzc2FnZVpvbmVcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc2l6ZU1lc3NhZ2VCb2FyZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVBhc3N3b3JkUmVjb3ZlcnlGb3JtKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICAgICAgbGV0IGNhcHR1cmVFbGVtZW50ID0gZG9tLmNhcHR1cmVFbGVtZW50O1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VzID0gY2FwdHVyZUVsZW1lbnQoJyNtZXNzYWdlWm9uZScpO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VzLmZpcnN0RWxlbWVudENoaWxkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyN1c2VybmFtZScpLnZhbHVlLmxlbmd0aCA9PT0gMCAmJiBjYXB0dXJlRWxlbWVudCgnI2VtYWlsJykudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID0gJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdy1saWdodCc7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MICs9ICdFcnJvciA6IFBsZWFzZSBlbnRlciB1c2VybmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvIGNvbnRpbnVlLjxici8+JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWVzc2FnZXMuc3R5bGUgPSAnZGlzcGxheTpibG9jazsnO1xuICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnUGxlYXNlIHdhaXQuLi4uLi4nO1xuICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNmbGV4LWNlbnRlcicpLmZpcnN0RWxlbWVudENoaWxkLnN0eWxlID0gJ2hlaWdodDo1MDBweCc7XG5cbiAgICAgICAgICAgIGltcG9ydCgnLi4vY29tbW9uL3JlcXVlc3QnKS50aGVuKGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3Quc2VuZFJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHNlbGYuYXBwSG9zdCArICd1c2VyL3Bhc3N3b3JkUmVjb3ZlcnlWYWxpZGF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogW3tuYW1lOiBcIkNvbnRlbnQtdHlwZVwiLCB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIn1dLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eV9jb2RlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2g6IGNhcHR1cmVFbGVtZW50KCcjcmVjb3ZlcnknKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGNhcHR1cmVFbGVtZW50KCcjdGltZScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGNhcHR1cmVFbGVtZW50KCcjZW1haWwnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBjYXB0dXJlRWxlbWVudCgnI3VzZXJuYW1lJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5OYW1lOiBjYXB0dXJlRWxlbWVudCgnI2NvZGUtc2VuZC1idXR0b24nKS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNlbWFpbCcpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyN1c2VybmFtZScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vbWVzc2FnZScpLnRoZW4oZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc2hvd01lc3NhZ2UocmVzcG9uc2UsIGNhcHR1cmVFbGVtZW50KFwiI21lc3NhZ2Vab25lXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVzaXplTWVzc2FnZUJvYXJkKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlTWVzc2FnZUJvYXJkTmV4dFNpYmxpbmcoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU2V0UGFzc3dvcmRGb3JtKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICAgICAgbGV0IGNhcHR1cmVFbGVtZW50ID0gZG9tLmNhcHR1cmVFbGVtZW50O1xuXG4gICAgICAgICAgICBsZXQgcGFzc3dvcmRDaGVjaywgbWVzc2FnZXMgPSBjYXB0dXJlRWxlbWVudCgnI21lc3NhZ2Vab25lJyk7XG4gICAgICAgICAgICBpZiAobWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQodG1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2VzLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgICAgIHBhc3N3b3JkQ2hlY2sgPSBzZWxmLnBhc3N3b3JkVmVyaWZ5KG1lc3NhZ2VzKTtcblxuICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KCcjcGFzc3dvcmQnKS52YWx1ZSAhPT0gY2FwdHVyZUVsZW1lbnQoJyNjX3Bhc3N3b3JkJykudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPSAnYm94LW1lc3NhZ2UgYm94LWRhbmdlciBib3gtc2hhZG93LWxpZ2h0JztcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogWW91ciBwYXNzd29yZCBtYXRjaGVkLjxici8+JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWVzc2FnZXMuc3R5bGUgPSAnZGlzcGxheTpibG9jazsnO1xuICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnUGxlYXNlIHdhaXQuLi4uLi4nO1xuICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNmbGV4LWNlbnRlcicpLmZpcnN0RWxlbWVudENoaWxkLnN0eWxlID0gJ2hlaWdodDo1MDBweCc7XG5cbiAgICAgICAgICAgIGlmIChwYXNzd29yZENoZWNrID09PSAnT0snKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYm94LXJ1bnRpbWUnKTtcbiAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI3NldC1uZXctcGFzc3dvcmQtYnV0dG9uJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjcGFzc3dvcmQnKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjX3Bhc3N3b3JkJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnN0eWxlID0gJ2Rpc3BsYXk6YmxvY2s7JztcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdQbGVhc2Ugd2FpdC4uLi4uLic7XG4gICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNmbGV4LWNlbnRlcicpLmZpcnN0RWxlbWVudENoaWxkLnN0eWxlID0gJ2hlaWdodDo3MDBweCc7XG5cbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9yZXF1ZXN0JykudGhlbihmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdC5zZW5kUmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBzZWxmLmFwcEhvc3QgKyAndXNlci9uZXdQYXNzd29yZFZhbGlkYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7bmFtZTogXCJDb250ZW50LXR5cGVcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCJ9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eV9jb2RlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoOiBjYXB0dXJlRWxlbWVudCgnI3NldC1wYXNzd29yZCcpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGNhcHR1cmVFbGVtZW50KCcjdGltZScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogY2FwdHVyZUVsZW1lbnQoJyN1c2VyLWlkJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGNhcHR1cmVFbGVtZW50KCcjcGFzc3dvcmQnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6IGNhcHR1cmVFbGVtZW50KCcjY19wYXNzd29yZCcpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk5hbWU6IGNhcHR1cmVFbGVtZW50KCcjc2V0LW5ldy1wYXNzd29yZC1idXR0b24nKS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNzZXQtbmV3LXBhc3N3b3JkLWJ1dHRvbicpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjcGFzc3dvcmQnKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2NfcGFzc3dvcmQnKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9tZXNzYWdlJykudGhlbihmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc2hvd01lc3NhZ2UocmVzcG9uc2UsIGNhcHR1cmVFbGVtZW50KFwiI21lc3NhZ2Vab25lXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzaXplTWVzc2FnZUJvYXJkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZU1lc3NhZ2VCb2FyZE5leHRTaWJsaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwYXNzd29yZFZlcmlmeShtZXNzYWdlczogYW55KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHBhc3N3b3JkQ2hlY2sgPSAnJztcbiAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgICAgICBsZXQgY2FwdHVyZUVsZW1lbnQgPSBkb20uY2FwdHVyZUVsZW1lbnQ7XG4gICAgICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi92YWxpZGF0aW9uJykudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbikge1xuICAgICAgICAgICAgaW1wb3J0KCcuLi9taXNodXNvZnQvYWRkU3BhY2UnKS50aGVuKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNwYXNzd29yZCcpLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPSAnYm94LW1lc3NhZ2UgYm94LWRhbmdlciBib3gtc2hhZG93LWxpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCArPSAnRXJyb3IgOiBFbnRlciB5b3VyIHBhc3N3b3JkICh3aXRoIEBfIGNoYXJhY3RlciBhbmQgbW9yZSB0aGFuIDYgY2hhcmFjdGVyKS48YnIvPic7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5pbmNyZWFzZUhlaWdodCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FwdHVyZUVsZW1lbnQoJyNwYXNzd29yZCcpLnZhbHVlICE9PSAnJyAmJiBjYXB0dXJlRWxlbWVudCgnI3Bhc3N3b3JkJykudmFsdWUuaW5kZXhPZignQCcpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPSAnYm94LW1lc3NhZ2UgYm94LWRhbmdlciBib3gtc2hhZG93LWxpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCArPSAnRXJyb3IgOiBFbnRlciBwYXNzd29yZCB3aXRoIChAKSBjaGFyYWN0ZXIuPGJyLz4nO1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUuaW5jcmVhc2VIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhcHR1cmVFbGVtZW50KCcjcGFzc3dvcmQnKS52YWx1ZSAhPT0gJycgJiYgY2FwdHVyZUVsZW1lbnQoJyNwYXNzd29yZCcpLnZhbHVlLmluZGV4T2YoJ18nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID0gJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdy1saWdodCc7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogRW50ZXIgcGFzc3dvcmQgd2l0aCAoXykgY2hhcmFjdGVyLjxici8+JztcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmluY3JlYXNlSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uLmNoZWNrRHVwbGljYXRlKGNhcHR1cmVFbGVtZW50KCcjcGFzc3dvcmQnKS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID0gJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdy1saWdodCc7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogQSBjaGFyYWN0ZXIgaGFzIGJlZW4gdXNlZCBtb3JlIHRoYW4gdHdpY2UgaW4geW91ciBwYXNzd29yZC48YnIvPic7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5pbmNyZWFzZUhlaWdodCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FwdHVyZUVsZW1lbnQoJyNwYXNzd29yZCcpLnZhbHVlICE9PSAnJyAmJiBjYXB0dXJlRWxlbWVudCgnI3Bhc3N3b3JkJykudmFsdWUubGVuZ3RoIDw9IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID0gJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdy1saWdodCc7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgKz0gJ0Vycm9yIDogRW50ZXIgcGFzc3dvcmQgbW9yZSB0aGFuIDYgY2hhcmFjdGVyLjxici8+JztcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmluY3JlYXNlSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRDaGVjayA9ICdPSyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBhc3N3b3JkQ2hlY2s7XG4gICAgfVxuXG4gICAgcmVzaXplTWVzc2FnZUJvYXJkKCkge1xuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgICAgIGxldCBjYXB0dXJlRWxlbWVudCA9IGRvbS5jYXB0dXJlRWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KCcjZmxleC1jZW50ZXInKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNmbGV4LWNlbnRlcicpLmZpcnN0RWxlbWVudENoaWxkLnN0eWxlID0gJ2hlaWdodDonICsgKCsoY2FwdHVyZUVsZW1lbnQoJyNtZXNzYWdlWm9uZScpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGllbnRIZWlnaHQgKyArY2FwdHVyZUVsZW1lbnQoJyNmbGV4LWNlbnRlcicpLmZpcnN0RWxlbWVudENoaWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlTWVzc2FnZUJvYXJkTmV4dFNpYmxpbmcoKSB7XG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICAgICAgbGV0IGNhcHR1cmVFbGVtZW50ID0gZG9tLmNhcHR1cmVFbGVtZW50O1xuICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KCcjbWVzc2FnZVpvbmUnKS5uZXh0RWxlbWVudFNpYmxpbmcubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2JyJykge1xuICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjbWVzc2FnZVpvbmUnKS5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==