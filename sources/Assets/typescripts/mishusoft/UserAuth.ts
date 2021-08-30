export class UserAuth {

    constructor(
        private appHost: string
    ) {
    }

    handleRegistrationForm() {
        let self = this;

        import('../common/dom').then(function (dom) {
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

                        let firstNameCheck, lastNameCheck, emailAddressCheck, usernameCheck, passwordCheck,
                            dateOfBirthCheck;

                        import('../mishusoft/addSpace').then(function (module) {

                            import('../common/validation').then(function (validation) {
                                if (captureElement('#first-name').value === '') {
                                    massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                    massager.style.display = 'block';
                                    massager.firstElementChild.innerHTML += 'Error : Enter your first name (more than 4 characters).<br/>';
                                    module.increaseHeight();
                                } else if (validation.checkDuplicate(captureElement('#first-name').value)) {
                                    massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                    massager.style.display = 'block';
                                    massager.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your first name.<br/>';
                                    module.increaseHeight();
                                } else if (captureElement('#first-name').value.length <= 3) {
                                    massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                    massager.style.display = 'block';
                                    massager.firstElementChild.innerHTML += 'Error : Enter your first name more than 4 characters.<br/>';
                                    module.increaseHeight();
                                } else {
                                    firstNameCheck = 'OK';
                                }

                                if (captureElement('#last-name').value === '') {
                                    massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                    massager.style.display = 'block';
                                    massager.firstElementChild.innerHTML += 'Error : Enter your last name (more than 4 characters).<br/>';
                                    module.increaseHeight();
                                } else if (validation.checkDuplicate(captureElement('#last-name').value)) {
                                    massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                    massager.style.display = 'block';
                                    massager.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your last name.<br/>';
                                    module.increaseHeight();
                                } else if (captureElement('#last-name').value.length <= 3) {
                                    massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                    massager.style.display = 'block';
                                    massager.firstElementChild.innerHTML += 'Error : Enter your last name more than 4 letter.<br/>';
                                    module.increaseHeight();
                                } else {
                                    lastNameCheck = 'OK';
                                }
                            }).catch(function (err) {
                                console.log(err)
                            });


                            if (captureElement('#email').value === '') {
                                massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                massager.style.display = 'block';
                                massager.firstElementChild.innerHTML += 'Error : Enter your email address (valid for more than 14 characters).<br/>';
                                module.increaseHeight();
                            } else if (captureElement('#email').value.indexOf('@') === -1 || captureElement('#email').value.indexOf('.') === -1 || captureElement('#email').value.length <= 14) {
                                massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                massager.style.display = 'block';
                                massager.firstElementChild.innerHTML += 'Error : Enter valid email address.<br/>';
                                module.increaseHeight();
                            } else {
                                emailAddressCheck = 'OK';
                            }

                            if (captureElement('#username').value === '') {
                                massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                massager.style.display = 'block';
                                massager.firstElementChild.innerHTML += 'Error : Enter your username (valid for at least 8 characters).<br/>';
                                module.increaseHeight();
                            } else if (captureElement('#username').value.length < 8) {
                                massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                massager.style.display = 'block';
                                massager.firstElementChild.innerHTML += 'Error : Enter username at least 8 character.<br/>';
                                module.increaseHeight();
                            } else {
                                usernameCheck = 'OK';
                            }

                            if (captureElement('#dateOfBirth').value === '') {
                                massager.firstElementChild.className = 'box-message box-danger box-shadow-light';
                                massager.style.display = 'block';
                                massager.firstElementChild.innerHTML += 'Error : Enter your date of birth.<br/>';
                                module.increaseHeight();
                            } else {
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
                            console.log(err)
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

                            /*#!if ENV ==='production'*/
                            setTimeout(function () {
                                captureElement('#messageZone').textContent = '';
                            }, 3000);
                            /*#!endif*/


                            import('../common/request').then(function (request) {
                                return request.sendRequest({
                                    method: "POST",
                                    url: self.appHost + 'user/registrationValidation',
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
                                    import('../common/message').then(function (message) {
                                        message.showMessage(response, captureElement("#messageZone"));
                                    }).catch(function (err) {
                                        alert(err);
                                    })
                                    self.resizeMessageBoard();
                                });
                            }).catch(function (err) {
                                console.log(err)
                            })
                        }
                    }, {passive: true});
                });
            }
        }).catch(function (err) {
            console.log(err);
        })
    }

    handleLoginForm() {
        let self = this;
        import('../common/dom').then(function (dom) {
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
            /*#!if ENV ==='production'*/
            setTimeout(function () {
                captureElement('#messageZone').textContent = '';
            }, 3000);
            /*#!endif*/

            import('../common/request').then(function (request) {
                return request.sendRequest({
                    method: "POST",
                    url: self.appHost + 'user/verifyUserAuth',
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
                    import('../common/validation').then(function (validation) {
                        if (validation.IsJsonString(response)) {
                            let data = JSON.parse(response);
                            if (data.type === 'success' && data.message === 'LOGGED_IN') {
                                if (data.url !== '/') {
                                    window.location.replace(self.appHost + data.url);
                                } else {
                                    window.location.replace(self.appHost);
                                }
                            } else {
                                captureElement('#login-button').removeAttribute('disabled');
                                captureElement('#username').removeAttribute('disabled');
                                captureElement('#password').removeAttribute('disabled');
                                import('../common/message').then(function (message) {
                                    message.showMessage(response, captureElement("#messageZone"));
                                }).catch(function (err) {
                                    alert(err);
                                })
                                self.resizeMessageBoard();
                            }
                        }
                    }).catch(function (err) {
                        console.log(err)
                    })
                });
            }).catch(function (err) {
                console.log(err)
            })

        }).catch(function (err) {
            console.log(err)
        })
    }

    handlePasswordRecoveryForm() {
        let self = this;
        import('../common/dom').then(function (dom) {
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
            /*#!if ENV ==='production'*/
            setTimeout(function () {
                captureElement('#messageZone').textContent = '';
            }, 3000);
            /*#!endif*/

            import('../common/request').then(function (request) {
                return request.sendRequest({
                    method: "POST",
                    url: self.appHost + 'user/passwordRecoveryValidation',
                    async: true,
                    header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                    data: {
                        security_code: 1,
                        patch: captureElement('#recovery').value,
                        time: captureElement('#time').value,
                        email: captureElement('#email').value,
                        username: captureElement('#username').value,
                        btnName: captureElement('#code-send-button').value
                    }
                }, function (response: any) {
                    captureElement('#email').removeAttribute('disabled');
                    captureElement('#username').removeAttribute('disabled');
                    import('../common/message').then(function (message) {
                        message.showMessage(response, captureElement("#messageZone"));
                    }).catch(function (err) {
                        alert(err);
                    });
                    self.resizeMessageBoard();
                    self.removeMessageBoardNextSibling();
                });
            }).catch(function (err) {
                console.log(err)
            })
        }).catch(function (err) {
            console.log(err)
        })
    }

    handleSetPasswordForm() {
        let self = this;
        import('../common/dom').then(function (dom) {
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
            /*#!if ENV ==='production'*/
            setTimeout(function () {
                captureElement('#messageZone').textContent = '';
            }, 3000);
            /*#!endif*/

            if (passwordCheck === 'OK') {
                messages.firstElementChild.classList.add('box-runtime');
                captureElement('#set-new-password-button').setAttribute('disabled', 'disabled');
                captureElement('#password').setAttribute('disabled', 'disabled');
                captureElement('#c_password').setAttribute('disabled', 'disabled');
                messages.style = 'display:block;';
                messages.firstElementChild.textContent = 'Please wait......';
                captureElement('#flex-center').firstElementChild.style = 'height:700px';
                /*#!if ENV ==='production'*/
                setTimeout(function () {
                    captureElement('#messageZone').textContent = '';
                }, 3000);
                /*#!endif*/

                import('../common/request').then(function (request) {
                    return request.sendRequest({
                        method: "POST",
                        url: self.appHost + 'user/newPasswordValidation',
                        async: true,
                        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        data: {
                            security_code: 1,
                            patch: captureElement('#set-password').value,
                            time: captureElement('#time').value,
                            userId: captureElement('#user-id').value,
                            password: captureElement('#password').value,
                            confirmPassword: captureElement('#c_password').value,
                            btnName: captureElement('#set-new-password-button').value
                        }
                    }, function (response: any) {
                        captureElement('#set-new-password-button').removeAttribute('disabled');
                        captureElement('#password').removeAttribute('disabled');
                        captureElement('#c_password').removeAttribute('disabled');
                        import('../common/message').then(function (message) {
                            message.showMessage(response, captureElement("#messageZone"));
                        }).catch(function (err) {
                            alert(err);
                        })
                        self.resizeMessageBoard();
                        self.removeMessageBoardNextSibling();
                    });
                }).catch(function (err) {
                    console.log(err)
                })
            }
        }).catch(function (err) {
            console.log(err)
        })
    }

    passwordVerify(messages: any): string {
        let passwordCheck = '';
        import('../common/dom').then(function (dom) {
            let captureElement = dom.captureElement;
            import('../common/validation').then(function (validation) {
            import('../mishusoft/addSpace').then(function (module) {
                if (captureElement('#password').value === '') {
                    messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messages.style.display = 'block';
                    messages.firstElementChild.innerHTML += 'Error : Enter your password (with @_ character and more than 6 character).<br/>';
                    module.increaseHeight();
                } else if (captureElement('#password').value !== '' && captureElement('#password').value.indexOf('@') === -1) {
                    messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messages.style.display = 'block';
                    messages.firstElementChild.innerHTML += 'Error : Enter password with (@) character.<br/>';
                    module.increaseHeight();
                } else if (captureElement('#password').value !== '' && captureElement('#password').value.indexOf('_') === -1) {
                    messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messages.style.display = 'block';
                    messages.firstElementChild.innerHTML += 'Error : Enter password with (_) character.<br/>';
                    module.increaseHeight();
                } else if (validation.checkDuplicate(captureElement('#password').value)) {
                    messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messages.style.display = 'block';
                    messages.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your password.<br/>';
                    module.increaseHeight();
                } else if (captureElement('#password').value !== '' && captureElement('#password').value.length <= 6) {
                    messages.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messages.style.display = 'block';
                    messages.firstElementChild.innerHTML += 'Error : Enter password more than 6 character.<br/>';
                    module.increaseHeight();
                } else {
                    passwordCheck = 'OK';
                }
            }).catch(function (err) {
                console.log(err)
            });
            }).catch(function (err) {
                console.log(err)
            })
        }).catch(function (err) {
            console.log(err)
        });

        return passwordCheck;
    }

    resizeMessageBoard() {
        import('../common/dom').then(function (dom) {
            let captureElement = dom.captureElement;

            if (captureElement('#flex-center') !== undefined) {
                captureElement('#flex-center').firstElementChild.style = 'height:' + (+(captureElement('#messageZone') as HTMLDivElement).clientHeight + +captureElement('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
            }
        }).catch(function (err) {
            console.log(err)
        });

    }

    removeMessageBoardNextSibling() {
        import('../common/dom').then(function (dom) {
            let captureElement = dom.captureElement;
            if (captureElement('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                captureElement('#messageZone').nextElementSibling.remove();
            }
        }).catch(function (err) {
            console.log(err)
        });
    }
}