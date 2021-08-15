import {captureElement} from "../common/dom";
import {checkDuplicate, IsJsonString} from "../common/validation";
import {sendRequest} from "../common/request";
import {appHost} from "../db/app";
import {showMessage} from "../common/message";

export class UserAuth {

    constructor() {
    }

    handleRegistrationForm(){
        let self = this;
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

                    let firstNameCheck, lastNameCheck, emailAddressCheck, usernameCheck, passwordCheck,
                        dateOfBirthCheck;
                    if (captureElement('#first-name').value === '') {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your first name (more than 4 characters).<br/>';
                        self.addSpace();
                    } else if (checkDuplicate(captureElement('#first-name').value)) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your first name.<br/>';
                        self.addSpace();
                    } else if (captureElement('#first-name').value.length <= 3) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your first name more than 4 characters.<br/>';
                        self.addSpace();
                    } else {
                        firstNameCheck = 'OK';
                    }

                    if (captureElement('#last-name').value === '') {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your last name (more than 4 characters).<br/>';
                        self.addSpace();
                    } else if (checkDuplicate(captureElement('#last-name').value)) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your last name.<br/>';
                        self.addSpace();
                    } else if (captureElement('#last-name').value.length <= 3) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your last name more than 4 letter.<br/>';
                        self.addSpace();
                    } else {
                        lastNameCheck = 'OK';
                    }

                    if (captureElement('#email').value === '') {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your email address (valid for more than 14 characters).<br/>';
                        self.addSpace();
                    } else if (captureElement('#email').value.indexOf('@') === -1 || captureElement('#email').value.indexOf('.') === -1 || captureElement('#email').value.length <= 14) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter valid email address.<br/>';
                        self.addSpace();
                    } else {
                        emailAddressCheck = 'OK';
                    }

                    if (captureElement('#username').value === '') {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your username (valid for at least 8 characters).<br/>';
                        self.addSpace();
                    } else if (captureElement('#username').value.length < 8) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter username at least 8 character.<br/>';
                        self.addSpace();
                    } else {
                        usernameCheck = 'OK';
                    }

                    if (captureElement('#dateOfBirth').value === '') {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your date of birth.<br/>';
                        self.addSpace();
                    } else {
                        dateOfBirthCheck = 'OK';
                    }

                    if (captureElement('#password').value === '') {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter your password (with @_ character and more than 6 character).<br/>';
                        self.addSpace();
                    } else if (captureElement('#password').value !== '' && captureElement('#password').value.indexOf('@') === -1) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter password with (@) character.<br/>';
                        self.addSpace();
                    } else if (captureElement('#password').value !== '' && captureElement('#password').value.indexOf('_') === -1) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter password with (_) character.<br/>';
                        self.addSpace();
                    } else if (checkDuplicate(captureElement('#password').value)) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your password.<br/>';
                        self.addSpace();
                    } else if (captureElement('#password').value !== '' && captureElement('#password').value.length <= 6) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Enter password more than 6 character.<br/>';
                        self.addSpace();
                    } else {
                        passwordCheck = 'OK';
                    }

                    if (captureElement('#password').value !== captureElement('#c_password').value) {
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.style.display = 'block';
                        massager.firstElementChild.innerHTML += 'Error : Your password matched.<br/>';
                    }

                    if (!captureElement('#agree').checked) {
                        massager.style = 'display:block;';
                        massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                        massager.firstElementChild.innerHTML += 'Error : Please check i agree button to continue.<br/>';
                        self.addSpace();
                    }

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

                        /*#!if ENV ==='production'*/
                        setTimeout(function () {
                            captureElement('#messageZone').textContent = '';
                        }, 3000);
                        /*#!endif*/

                        return sendRequest({
                            method: "POST",
                            url: appHost + 'user/registrationValidation',
                            async: true,
                            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
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
                        }, function (response: any) {
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
                            showMessage(response, captureElement("#messageZone"));
                            self.resizeMessageBoard();
                        });
                    }
                }, {passive: true});
            });
        }
    }

    handleLoginForm(){
        let self = this;
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
        /*#!if ENV ==='production'*/
        setTimeout(function () {
            captureElement('#messageZone').textContent = '';
        }, 3000);
        /*#!endif*/

        return sendRequest({
            method: "POST",
            url: appHost + 'user/verifyUserAuth',
            async: true,
            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
            data: {
                security_code: 1,
                username: captureElement('#username').value,
                password: captureElement('#password').value,
                redirectURL: captureElement('#redirect').value,
                RememberMe: captureElement('#RememberMe').value,
                btnName: captureElement('#login-button').value
            }
        }, function (response: any) {
            if (IsJsonString(response)) {
                let data = JSON.parse(response);
                if (data.type === 'success' && data.message === 'LOGGED_IN') {
                    if (data.url !== '/') {
                        window.location.replace(appHost + data.url);
                    } else {
                        window.location.replace(appHost);
                    }
                } else {
                    captureElement('#login-button').removeAttribute('disabled');
                    captureElement('#username').removeAttribute('disabled');
                    captureElement('#password').removeAttribute('disabled');
                    showMessage(response, captureElement("#messageZone"));
                    self.resizeMessageBoard();
                }
            }
        });
    }

    resizeMessageBoard(){
        if (captureElement('#flex-center') !== undefined) {
            captureElement('#flex-center').firstElementChild.style = 'height:' + (+(captureElement('#messageZone') as HTMLDivElement).clientHeight + +captureElement('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
        }
    }

    removeMessageBoardNextSibling(){
        if (captureElement('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
            captureElement('#messageZone').nextElementSibling.remove();
        }
    }

    addSpace() {
        captureElement('#flex-center').firstElementChild.style = 'height:' + (+captureElement('#flex-center').firstElementChild.clientHeight + 25) + 'px';
    }


}