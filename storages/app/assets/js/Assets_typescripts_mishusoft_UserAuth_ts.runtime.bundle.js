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
/* harmony import */ var _common_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/dom */ "./Assets/typescripts/common/dom.ts");
/* harmony import */ var _common_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/validation */ "./Assets/typescripts/common/validation.ts");
/* harmony import */ var _common_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/request */ "./Assets/typescripts/common/request.ts");
/* harmony import */ var _db_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../db/app */ "./Assets/typescripts/db/app.ts");
/* harmony import */ var _common_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/message */ "./Assets/typescripts/common/message.ts");





class UserAuth {
    constructor() {
    }
    handleRegistrationForm() {
        let self = this;
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#signup-button') !== undefined) {
            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#signup-button').addEventListener(event, function () {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#flex-center').firstElementChild.removeAttribute('style');
                    let massager = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#messageZone');
                    if (massager.firstElementChild === null) {
                        let tmp = document.createElement('div');
                        massager.appendChild(tmp);
                    }
                    massager.firstElementChild.textContent = '';
                    massager.style = 'display:none;';
                    let firstNameCheck, lastNameCheck, emailAddressCheck, usernameCheck, passwordCheck, dateOfBirthCheck;
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#first-name').value === '') {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your first name (more than 4 characters).<br/>';
                        self.addSpace();
                    }
                    else if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_1__.checkDuplicate)((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#first-name').value)) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your first name.<br/>';
                        self.addSpace();
                    }
                    else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#first-name').value.length <= 3) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your first name more than 4 characters.<br/>';
                        self.addSpace();
                    }
                    else {
                        firstNameCheck = 'OK';
                    }
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#last-name').value === '') {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your last name (more than 4 characters).<br/>';
                        self.addSpace();
                    }
                    else if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_1__.checkDuplicate)((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#last-name').value)) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your last name.<br/>';
                        self.addSpace();
                    }
                    else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#last-name').value.length <= 3) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your last name more than 4 letter.<br/>';
                        self.addSpace();
                    }
                    else {
                        lastNameCheck = 'OK';
                    }
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#email').value === '') {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your email address (valid for more than 14 characters).<br/>';
                        self.addSpace();
                    }
                    else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#email').value.indexOf('@') === -1 || (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#email').value.indexOf('.') === -1 || (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#email').value.length <= 14) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter valid email address.<br/>';
                        self.addSpace();
                    }
                    else {
                        emailAddressCheck = 'OK';
                    }
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#username').value === '') {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your username (valid for at least 8 characters).<br/>';
                        self.addSpace();
                    }
                    else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#username').value.length < 8) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter username at least 8 character.<br/>';
                        self.addSpace();
                    }
                    else {
                        usernameCheck = 'OK';
                    }
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#dateOfBirth').value === '') {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your date of birth.<br/>';
                        self.addSpace();
                    }
                    else {
                        dateOfBirthCheck = 'OK';
                    }
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').value === '') {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your password (with @_ character and more than 6 character).<br/>';
                        self.addSpace();
                    }
                    else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').value.indexOf('@') === -1) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter password with (@) character.<br/>';
                        self.addSpace();
                    }
                    else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').value.indexOf('_') === -1) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter password with (_) character.<br/>';
                        self.addSpace();
                    }
                    else if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_1__.checkDuplicate)((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').value)) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your password.<br/>';
                        self.addSpace();
                    }
                    else if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').value !== '' && (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').value.length <= 6) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter password more than 6 character.<br/>';
                        self.addSpace();
                    }
                    else {
                        passwordCheck = 'OK';
                    }
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').value !== (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#c_password').value) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Your password matched.<br/>';
                    }
                    if (!(0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#agree').checked) {
                        massager.style = 'display:block;';
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.firstElementChild.innerHTML += 'Error : Please check i agree button to continue.<br/>';
                        self.addSpace();
                    }
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#agree').checked && firstNameCheck === 'OK' && lastNameCheck === 'OK' &&
                        emailAddressCheck === 'OK' && usernameCheck === 'OK' && passwordCheck === 'OK' && dateOfBirthCheck === 'OK') {
                        massager.firstElementChild.classList.add('box-runtime');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#signup-button').setAttribute('disabled', 'disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#first-name').setAttribute('disabled', 'disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#last-name').setAttribute('disabled', 'disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#email').setAttribute('disabled', 'disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#username').setAttribute('disabled', 'disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#dateOfBirth').setAttribute('disabled', 'disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#gender').setAttribute('disabled', 'disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').setAttribute('disabled', 'disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#c_password').setAttribute('disabled', 'disabled');
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#agree').setAttribute('disabled', 'disabled');
                        massager.style = 'display:block;';
                        massager.firstElementChild.textContent = 'Please wait......';
                        if (massager.style.display === 'block') {
                            self.resizeMessageBoard();
                            self.removeMessageBoardNextSibling();
                        }
                        return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
                            method: "POST",
                            url: _db_app__WEBPACK_IMPORTED_MODULE_3__.appHost + 'user/registrationValidation',
                            async: true,
                            header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                            data: {
                                security_code: 1,
                                patch: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#regs').value,
                                time: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#time').value,
                                firstName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#first-name').value,
                                lastName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#last-name').value,
                                email: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#email').value,
                                username: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#username').value,
                                password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').value,
                                confirmPassword: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#c_password').value,
                                dateOfBirth: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#dateOfBirth').value,
                                gender: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#gender').value,
                                agree: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#agree').value,
                                btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#signup-button').value
                            }
                        }, function (response) {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#signup-button').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#first-name').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#last-name').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#email').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#username').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#dateOfBirth').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#gender').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#c_password').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#agree').removeAttribute('disabled');
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)("#messageZone"));
                            self.resizeMessageBoard();
                        });
                    }
                }, { passive: true });
            });
        }
    }
    handleLoginForm() {
        let self = this;
        let massager = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#messageZone');
        if (massager.firstElementChild === null) {
            let tmp = document.createElement('div');
            massager.appendChild(tmp);
        }
        massager.firstElementChild.classList.add('box-runtime');
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#login-button').setAttribute('disabled', 'disabled');
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#username').setAttribute('disabled', 'disabled');
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').setAttribute('disabled', 'disabled');
        massager.style = 'display:block;';
        massager.firstElementChild.textContent = 'Please wait......';
        self.resizeMessageBoard();
        self.removeMessageBoardNextSibling();
        return (0,_common_request__WEBPACK_IMPORTED_MODULE_2__.sendRequest)({
            method: "POST",
            url: _db_app__WEBPACK_IMPORTED_MODULE_3__.appHost + 'user/verifyUserAuth',
            async: true,
            header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
            data: {
                security_code: 1,
                username: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#username').value,
                password: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').value,
                redirectURL: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#redirect').value,
                RememberMe: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#RememberMe').value,
                btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#login-button').value
            }
        }, function (response) {
            if ((0,_common_validation__WEBPACK_IMPORTED_MODULE_1__.IsJsonString)(response)) {
                let data = JSON.parse(response);
                if (data.type === 'success' && data.message === 'LOGGED_IN') {
                    if (data.url !== '/') {
                        window.location.replace(_db_app__WEBPACK_IMPORTED_MODULE_3__.appHost + data.url);
                    }
                    else {
                        window.location.replace(_db_app__WEBPACK_IMPORTED_MODULE_3__.appHost);
                    }
                }
                else {
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#login-button').removeAttribute('disabled');
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#username').removeAttribute('disabled');
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#password').removeAttribute('disabled');
                    (0,_common_message__WEBPACK_IMPORTED_MODULE_4__.showMessage)(response, (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)("#messageZone"));
                    self.resizeMessageBoard();
                }
            }
        });
    }
    resizeMessageBoard() {
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#flex-center') !== undefined) {
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#messageZone').clientHeight + +(0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
        }
    }
    removeMessageBoardNextSibling() {
        if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#messageZone').nextElementSibling.remove();
        }
    }
    addSpace() {
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#flex-center').firstElementChild.style = 'height:' + (+(0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#flex-center').firstElementChild.clientHeight + 25) + 'px';
    }
}


/***/ })

}]);
//# sourceMappingURL=Assets_typescripts_mishusoft_UserAuth_ts.runtime.bundle.js.map