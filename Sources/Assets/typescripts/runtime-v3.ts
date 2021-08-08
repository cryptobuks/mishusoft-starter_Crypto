import {
    checkInputDataAbility,
    previewImage
} from "./common/common";
import {app, appHost} from "./common/db";
import {captureElement, createElement} from "./common/dom";
import { showMessage } from "./common/message";
import { sendRequest } from "./common/request";
import {checkDuplicate, IsJsonString} from "./common/validation";
import {paginationDriver, popUpDialogBoxDriver} from "./common/pagination";
import {setUploadProgressSystem, uploadFile} from "./common/upload";

/*runtime included bundle*/
//import {Google_oauth} from "./runtime-include/core/user/google_oauth"

//Google_oauth.init();


let publicSocialLinksInterval: any, visitorsAccessLogsInterval: any, contactMessageInterval: any,
    serverDatabaseInterval: any;
const background93c = "background: #93c";


// set service worker
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(app.content.folder.js + 'sw.js')
            .then((swr) => {
                console.info("ServiceWorker [" + swr?.active?.scriptURL + "] is " + swr?.active?.state + " successfully."/* It's now *//* + swr?.active?.state*/);
            })
            .catch((err) => console.error("service worker not registered", err))
    });
}

//const worker = new Worker(app.content.folder.js + 'sw.js');

/*if (typeof worker =='undefined'){
    // set service worker
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register(app.content.folder.js + 'sw.js')
                .then((swr) => {
                    console.log("service worker registered");
                    console.log(swr);
                })
                .catch((err) => console.log("service worker not registered", err))
        });
    }
}*/


(function () {
    if (document.readyState === 'interactive') {

        /*sendRequest({
            method: "POST",
            url: appHost + 'api/index',
            async: true,
            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
            data: {
                security_code: 101,
                javascriptEnabled: true
            }
        });*/
        /*add required script tag to head*/
        if (window.navigator) {
            /*font-fontawesome private cdn*/
            fetch('https://kit.fontawesome.com/b4c8f8449f.js')
                .then(() => {
                    document.head.appendChild(createElement([{
                        'script': {
                            'rel': 'preconnect',
                            'type': 'application/javascript',
                            'src': 'https://kit.fontawesome.com/b4c8f8449f.js',
                            'crossorigin': 'anonymous',
                            'async': 'async',
                        }
                    }]));
                })
                .catch((err) => {
                    console.info('fontawesome kit load failed. ' + err)
                })
        }
        /*ending to declare required script tag to head*/

        /*fire public profile links request!!*/
        if (captureElement("#public-social-links") !== undefined) {
            publicSocialLinksInterval = setInterval(function () {
            }, 1000);
            sendRequest({
                method: "GET",
                url: appHost + 'api/geSocialLinks',
                async: true,
                header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
            }, function (response: any) {
                if (response.length !== 0 && IsJsonString(response)) {
                    if (JSON.parse(response).length !== 0) {
                        captureElement("#public-social-links").textContent = '';
                        JSON.parse(response).forEach(function (socialLink: any) {
                            let i1 = createElement([{
                                'li': {
                                    'class': 'li-social ' + socialLink.name.toLowerCase() + '-social',
                                }
                            }]);
                            let i1a1 = createElement([{
                                'a': {
                                    'rel': 'noreferrer',
                                    'href': socialLink.link,
                                    'target': '_blank',
                                    'title': socialLink.name[0].toUpperCase() + socialLink.name.slice(1)
                                }
                            }]);
                            i1.appendChild(i1a1);
                            i1a1.appendChild(createElement([{
                                'span': {
                                    'class': 'fab fa-' + socialLink.name.toLowerCase() + ' icon-social',
                                }
                            }]));
                            let i1a1s2 = createElement([{
                                'span': {
                                    'class': 'name-social',
                                }
                            }]);
                            i1a1s2.textContent = socialLink.name[0].toUpperCase() + socialLink.name.slice(1);
                            i1a1.appendChild(i1a1s2);
                            captureElement("#public-social-links").appendChild(i1);
                        });
                    }
                }
            });
        }
        /*ending to fire public profile links request*/
        /*fire public payment icons request!!*/
        if (captureElement("#pgHeaderMainInfoItemsDetails") !== undefined) {
            captureElement("#pgHeaderMainInfoItemsDetails").textContent = '';
            /*captureElement("#pgHeaderMainInfoItemsDetails").appendChild(createElement([{
                'img': {
                    'alt': 'visa',
                    'src': app.content.folder.images + 'visa.png',
                    'width': '20',
                    'height': '18',
                }
            }]));*/
            captureElement("#pgHeaderMainInfoItemsDetails").appendChild(createElement([{
                'img': {
                    'alt': 'mastercard',
                    'src': app.content.folder.images + 'mastercard.png',
                    'width': '20',
                    'height': '18',
                }
            }]));
            captureElement("#pgHeaderMainInfoItemsDetails").appendChild(createElement([{
                'img': {
                    'alt': 'maestro',
                    'src': app.content.folder.images + 'maestro.png',
                    'width': '20',
                    'height': '18',
                }
            }]));
            captureElement("#pgHeaderMainInfoItemsDetails").appendChild(createElement([{
                'img': {
                    'alt': 'amex',
                    'src': app.content.folder.images + 'amex.png',
                    'width': '20',
                    'height': '18',
                }
            }]));
            captureElement("#pgHeaderMainInfoItemsDetails").appendChild(createElement([{
                'img': {
                    'alt': 'discover',
                    'src': app.content.folder.images + 'discover.png',
                    'width': '20',
                    'height': '18',
                }
            }]));
            captureElement("#pgHeaderMainInfoItemsDetails").appendChild(createElement([{
                'img': {
                    'alt': 'giropay',
                    'src': app.content.folder.images + 'giropay.png',
                    'width': '20',
                    'height': '18',
                }
            }]));
            captureElement("#pgHeaderMainInfoItemsDetails").appendChild(createElement([{
                'img': {
                    'alt': 'klarna',
                    'src': app.content.folder.images + 'klarna.png',
                    'width': '20',
                    'height': '18',
                }
            }]));
            captureElement("#pgHeaderMainInfoItemsDetails").appendChild(createElement([{
                'img': {
                    'alt': 'sofort',
                    'src': app.content.folder.images + 'sofort.png',
                    'width': '20',
                    'height': '18',
                }
            }]));
        }
        /*ending to fire public payment icons request*/


        /*fire public payment icons request!!*/
        if (captureElement("#document-last-modified") !== undefined) {
            captureElement("#document-last-modified").textContent = 'Last updated: (' + document.lastModified + ' UTC)';
        }
        /*ending to fire public payment icons request*/
    }
}());

(function () {
    /*mishusoft-app-css-file*/
    const UIDb = createElement([{
        'link': {
            'rel': 'stylesheet',
            'type': 'text/css',
            'id': app.default.name + '-app-css-file',
            'href': app.content.folder.css + "v3.css",
        }
    }]);
    UIDb.addEventListener('load', function () {
        //initialize app loader image & application
        if (captureElement('#app-loader')) {
            captureElement('#app-loader').setAttribute('style', 'display:none;');
        }
        if (captureElement('#app-setup-box')) {
            captureElement('#app-setup-box').removeAttribute('style');
        }
        if (captureElement('#' + app.default.name + '-app-content')) {
            captureElement('#' + app.default.name + '-app-content').removeAttribute('style');
            //document.title = captureElement('#meta-title').content + ' || ' + captureElement('#meta-app-name').content;
        }

        if (captureElement('#mishusoft-app-content') !== undefined) {
            //console.log(window.innerHeight);
            /*console.log('Window Inner Height : ' + window.innerHeight);
            console.log('App Inner Height : ' + captureElement('#mishusoft-app-content').clientHeight);
            console.log('Footer Inner Height : ' + captureElement('#footer').clientHeight);*/
            if (window.innerHeight <= captureElement('#mishusoft-app-content').clientHeight) {
                /*console.log('-------------------------------');
                console.log('we reached target!!')
                console.log('Window Inner Height : ' + window.innerHeight);
                console.log('App Inner Height : ' + captureElement('#mishusoft-app-content').clientHeight);
                console.log('-------------------------------');*/
                captureElement('#footer')?.removeAttribute('style');
            } else {
                captureElement('#footer')?.setAttribute('style', 'position: fixed;bottom: 0;width: inherit;');
            }
        }
    });
    document.head.appendChild(UIDb);
}());

/*(function (__location) {
    if (__location === window.location) {
        if (__location.origin.indexOf(app.default.name) !== -1) {
            window.onload = function () {
                document.addEventListener("select", function (e) {
                    e.preventDefault();
                }, false);
                document.addEventListener("contextmenu", function (e) {
                    e.preventDefault();
                }, false);
                document.addEventListener("keydown", function (e) {
                    if (e.ctrlKey && e.shiftKey) {
                        disabledEvent(e);
                    }
                    if (e.ctrlKey && e.shiftKey) {
                        disabledEvent(e);
                    }
                    if (e.keyCode === 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                        disabledEvent(e);
                    }
                    if (e.ctrlKey) {
                        disabledEvent(e);
                    }
                }, false);

                function disabledEvent(e: KeyboardEvent) {
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    } else if (event) {
                        event.cancelBubble = true;

                    }
                    e.preventDefault();
                    return false;
                }
            };
            /!**!/
        }
    }
}(window.location));*/

(function (__collapseArray) {
    let i: number;

    for (i = 0; i < __collapseArray.length; i++) {
        __collapseArray[i].addEventListener("click", function () {
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                this.innerHTML = "+";
                content.style.display = "none";
            } else {
                this.innerHTML = "-";
                content.style.display = "block";
            }
        });
    }
}(document.querySelectorAll(".collapse")));

(function (__locationbarURI) {
    if (__locationbarURI.indexOf('view-source:') !== -1) {
        document.textContent = 'We don\'t support this protocol!!';
    }
}(window.location.href));


/*(function (_searchElement) {
    if (_searchElement !== null){
        ['keyup','paste'].forEach(function (event) {
            _searchElement?.addEventListener(event,function () {
                console.log(this.value);
            });
        });
    }
}(captureElement('#ms-qck-src')));
//ms-qck-src-do
*/
/*adjust footer actual height*/

//captureElement('.app-container')?.setAttribute('style','width:' + window.innerWidth + 'px;');
if (document.querySelectorAll('#flex-center').length !== 0) {
    document.querySelectorAll('#flex-center').forEach(function (__flexBoxCenter: HTMLElement) {
        //__flexBoxCenter.setAttribute('style','height:' + window.innerHeight + 'px;width:' + window.innerWidth + 'px;');
        __flexBoxCenter.setAttribute('style', 'height:' + window.innerHeight + 'px;');
    });
}


/*window.addEventListener('resize', function () {
    //console.log(window.innerHeight);
    /!*console.log('Window Inner Height : ' + window.innerHeight);
    console.log('App Inner Height : ' + captureElement('#mishusoft-app-content').clientHeight);
    console.log('Footer Inner Height : ' + captureElement('#footer').clientHeight);*!/
    if (window.innerHeight <= (+captureElement('#mishusoft-app-content').clientHeight + +captureElement('#footer')?.clientHeight)) {
        /!*console.log('-------------------------------');
        console.log('we reached target!!')
        console.log('Window Inner Height : ' + window.innerHeight);
        console.log('App Inner Height : ' + (+captureElement('#mishusoft-app-content').clientHeight + +captureElement('#footer').clientHeight) );
        console.log('-------------------------------');*!/
        captureElement('#footer')?.removeAttribute('style');
    } else {
        captureElement('#footer').setAttribute('style', 'position: fixed;bottom: 0;width: inherit;');
    }
    //document.querySelector('.app-container')?.setAttribute('style','width:' + window.innerWidth + 'px;');
    if (document.querySelectorAll('#flex-center').length !== 0) {
        document.querySelectorAll('#flex-center').forEach(function (__flexBoxCenter: HTMLElement) {
            //__flexBoxCenter.setAttribute('style','height:' + window.innerHeight + 'px;width:' + window.innerWidth + 'px;');
            __flexBoxCenter.setAttribute('style', 'height:' + window.innerHeight + 'px;');
        });
    }
});*/


(function (__authLoginForm) {
    let interval = setInterval(function () {
        if (__authLoginForm !== null || true) {
            clearInterval(interval);
            __authLoginForm?.addEventListener('submit', function (event: Event) {
                event.preventDefault();
                let messagebar = captureElement('#messageZone');
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.classList.add('box-runtime');
                captureElement('#login-button').setAttribute('disabled', 'disabled');
                captureElement('#username').setAttribute('disabled', 'disabled');
                captureElement('#password').setAttribute('disabled', 'disabled');
                messagebar.style = 'display:block;';
                messagebar.firstElementChild.textContent = 'Please wait......';

                if (captureElement('#flex-center') !== undefined) {
                    captureElement('#flex-center').firstElementChild.style = 'height:' + (+(captureElement('#messageZone') as HTMLDivElement).clientHeight + +captureElement('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                    if (captureElement('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                        captureElement('#messageZone').nextElementSibling.remove();
                    }
                }
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
                            if (captureElement('#flex-center') !== undefined) {
                                captureElement('#flex-center').firstElementChild.style = 'height:' + (+(captureElement('#messageZone') as HTMLDivElement).clientHeight + +captureElement('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                            }
                        }
                    }
                });
            });
        }
    }, 100);
}(captureElement('#LogInForm')));

(function (__authRegistrationForm) {
    let interval = setInterval(function () {
        if (__authRegistrationForm !== null || true) {
            clearInterval(interval);
            __authRegistrationForm?.addEventListener('submit', function (event: Event) {
                event.preventDefault();
            });
            if (captureElement('#signup-button') !== undefined) {
                ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                    captureElement('#signup-button').addEventListener(event, function () {
                        captureElement('#flex-center').firstElementChild.removeAttribute('style');
                        let messagebar = captureElement('#messageZone');
                        if (messagebar.firstElementChild === null) {
                            let tmp = document.createElement('div');
                            messagebar.appendChild(tmp);
                        }

                        messagebar.firstElementChild.textContent = '';
                        messagebar.style = 'display:none;';

                        let firstNameCheck, lastNameCheck, emailAddressCheck, usernameCheck, passwordCheck,
                            dateOfBirthCheck;
                        if (captureElement('#first-name').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your first name (more than 4 characters).<br/>';
                            addSpace();
                        } else if (checkDuplicate(captureElement('#first-name').value)) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your first name.<br/>';
                            addSpace();
                        } else if (captureElement('#first-name').value.length <= 3) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your first name more than 4 characters.<br/>';
                            addSpace();
                        } else {
                            firstNameCheck = 'OK';
                        }

                        if (captureElement('#last-name').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your last name (more than 4 characters).<br/>';
                            addSpace();
                        } else if (checkDuplicate(captureElement('#last-name').value)) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your last name.<br/>';
                            addSpace();
                        } else if (captureElement('#last-name').value.length <= 3) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your last name more than 4 letter.<br/>';
                            addSpace();
                        } else {
                            lastNameCheck = 'OK';
                        }

                        if (captureElement('#email').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your email address (valid for more than 14 characters).<br/>';
                            addSpace();
                        } else if (captureElement('#email').value.indexOf('@') === -1 || captureElement('#email').value.indexOf('.') === -1 || captureElement('#email').value.length <= 14) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter valid email address.<br/>';
                            addSpace();
                        } else {
                            emailAddressCheck = 'OK';
                        }

                        if (captureElement('#username').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your username (valid for at least 8 characters).<br/>';
                            addSpace();
                        } else if (captureElement('#username').value.length < 8) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter username at least 8 character.<br/>';
                            addSpace();
                        } else {
                            usernameCheck = 'OK';
                        }

                        if (captureElement('#dateOfBirth').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your date of birth.<br/>';
                            addSpace();
                        } else {
                            dateOfBirthCheck = 'OK';
                        }

                        if (captureElement('#password').value === '') {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter your password (with @_ character and more than 6 character).<br/>';
                            addSpace();
                        } else if (captureElement('#password').value !== '' && captureElement('#password').value.indexOf('@') === -1) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter password with (@) character.<br/>';
                            addSpace();
                        } else if (captureElement('#password').value !== '' && captureElement('#password').value.indexOf('_') === -1) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter password with (_) character.<br/>';
                            addSpace();
                        } else if (checkDuplicate(captureElement('#password').value)) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your password.<br/>';
                            addSpace();
                        } else if (captureElement('#password').value !== '' && captureElement('#password').value.length <= 6) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Enter password more than 6 character.<br/>';
                            addSpace();
                        } else {
                            passwordCheck = 'OK';
                        }

                        if (captureElement('#password').value !== captureElement('#c_password').value) {
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.style.display = 'block';
                            messagebar.firstElementChild.innerHTML += 'Error : Your password matched.<br/>';
                        }

                        if (!captureElement('#agree').checked) {
                            messagebar.style = 'display:block;';
                            messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                            messagebar.firstElementChild.innerHTML += 'Error : Please check i agree button to continue.<br/>';
                            addSpace();
                        }

                        if (captureElement('#agree').checked && firstNameCheck === 'OK' && lastNameCheck === 'OK' &&
                            emailAddressCheck === 'OK' && usernameCheck === 'OK' && passwordCheck === 'OK' && dateOfBirthCheck === 'OK') {

                            messagebar.firstElementChild.classList.add('box-runtime');
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
                            messagebar.style = 'display:block;';
                            messagebar.firstElementChild.textContent = 'Please wait......';

                            if (messagebar.style.display === 'block') {
                                if (captureElement('#flex-center') !== undefined) {
                                    captureElement('#flex-center').firstElementChild.style = 'height:' + (+(captureElement('#messageZone') as HTMLDivElement).clientHeight + +captureElement('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                                    if (captureElement('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                                        captureElement('#messageZone').nextElementSibling.remove();
                                    }
                                }
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
                                if (captureElement('#flex-center') !== undefined) {
                                    captureElement('#flex-center').firstElementChild.style = 'height:' + (+(captureElement('#messageZone') as HTMLDivElement).clientHeight + +captureElement('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                                }
                            });
                        }
                    }, {passive: true});
                });
            }
        }
    }, 100);
}(captureElement('#registrationForm')));

(function (__authPasswordRecoveryForm) {
    let interval = setInterval(function () {
        if (__authPasswordRecoveryForm !== null || true) {
            clearInterval(interval);
            __authPasswordRecoveryForm?.addEventListener('submit', function (event: Event) {
                event.preventDefault();
                let message = captureElement('#messageZone');
                if (message.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    message.appendChild(tmp);
                }
                message.firstElementChild.textContent = '';


                if (captureElement('#username').value.length === 0 && captureElement('#email').value.length === 0) {
                    message.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    message.style.display = 'block';
                    message.firstElementChild.innerHTML += 'Error : Please enter username or email address to continue.<br/>';
                }

                message.style = 'display:block;';
                message.firstElementChild.textContent = 'Please wait......';
                captureElement('#flex-center').firstElementChild.style = 'height:500px';
                /*#!if ENV ==='production'*/
                setTimeout(function () {
                    captureElement('#messageZone').textContent = '';
                }, 3000);
                /*#!endif*/
                return sendRequest({
                    method: "POST",
                    url: appHost + 'user/passwordRecoveryValidation',
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
                    showMessage(response, captureElement("#messageZone"));
                    if (captureElement('#flex-center') !== undefined) {
                        captureElement('#flex-center').firstElementChild.style = 'height:' + (+(captureElement('#messageZone') as HTMLDivElement).clientHeight + +captureElement('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                        if (captureElement('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                            captureElement('#messageZone').nextElementSibling.remove();
                        }
                    }
                });
            });
        }
    }, 100);
}(captureElement('#ForgetPasswordForm')));

(function (__authSetPasswordForm) {
    let interval = setInterval(function () {
        if (__authSetPasswordForm !== null || true) {
            clearInterval(interval);
            __authSetPasswordForm?.addEventListener('submit', function (event: Event) {
                event.preventDefault();
                let passwordCheck, messagebar = captureElement('#messageZone');
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.textContent = '';

                if (captureElement('#password').value === '') {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter your password (with @_ character and more than 6 character).<br/>';
                    addSpace();
                } else if (captureElement('#password').value !== '' && captureElement('#password').value.indexOf('@') === -1) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter password with (@) character.<br/>';
                    addSpace();
                } else if (captureElement('#password').value !== '' && captureElement('#password').value.indexOf('_') === -1) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter password with (_) character.<br/>';
                    addSpace();
                } else if (checkDuplicate(captureElement('#password').value)) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : A character has been used more than twice in your password.<br/>';
                    addSpace();
                } else if (captureElement('#password').value !== '' && captureElement('#password').value.length <= 6) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter password more than 6 character.<br/>';
                    addSpace();
                } else {
                    passwordCheck = 'OK';
                }

                if (captureElement('#password').value !== captureElement('#c_password').value) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Your password matched.<br/>';
                }

                messagebar.style = 'display:block;';
                messagebar.firstElementChild.textContent = 'Please wait......';
                captureElement('#flex-center').firstElementChild.style = 'height:500px';
                /*#!if ENV ==='production'*/
                setTimeout(function () {
                    captureElement('#messageZone').textContent = '';
                }, 3000);
                /*#!endif*/

                if (passwordCheck === 'OK') {
                    messagebar.firstElementChild.classList.add('box-runtime');
                    captureElement('#set-new-password-button').setAttribute('disabled', 'disabled');
                    captureElement('#password').setAttribute('disabled', 'disabled');
                    captureElement('#c_password').setAttribute('disabled', 'disabled');
                    messagebar.style = 'display:block;';
                    messagebar.firstElementChild.textContent = 'Please wait......';
                    captureElement('#flex-center').firstElementChild.style = 'height:700px';
                    /*#!if ENV ==='production'*/
                    setTimeout(function () {
                        captureElement('#messageZone').textContent = '';
                    }, 3000);
                    /*#!endif*/

                    return sendRequest({
                        method: "POST",
                        url: appHost + 'user/newPasswordValidation',
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
                        showMessage(response, captureElement("#messageZone"));
                        if (captureElement('#flex-center') !== undefined) {
                            captureElement('#flex-center').firstElementChild.style = 'height:' + (+(captureElement('#messageZone') as HTMLDivElement).clientHeight + +captureElement('#flex-center').firstElementChild.getAttribute('data-height')) + 'px';
                            if (captureElement('#messageZone').nextElementSibling.nodeName.toLowerCase() === 'br') {
                                captureElement('#messageZone').nextElementSibling.remove();
                            }
                        }
                    });
                }
            });
        }
    }, 100);
}(captureElement('#SetPasswordForm')));

(function (__contactMessageSender) {
    let interval = setInterval(function () {
        if (__contactMessageSender !== null || true) {
            clearInterval(interval);
            __contactMessageSender?.addEventListener('click', function () {
                let messagebar = captureElement('#messageZone');
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.classList.add('box-runtime');
                messagebar.firstElementChild.textContent = 'Please wait......';
                messagebar.style.display = 'block';
                /*#!if ENV ==='production'*/
                setTimeout(function () {
                    captureElement('#messageZone').textContent = '';
                }, 3000);
                /*#!endif*/
                return sendRequest({
                    method: "POST",
                    url: appHost + 'contact/receiveMessage',
                    async: true,
                    header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                    data: {
                        security_code: 1,
                        firstName: captureElement('#cl_fst_nm').value,
                        lastName: captureElement('#cl_lst_nm').value,
                        email: captureElement('#cl_email').value,
                        mobileNumber: captureElement('#cl_mbl_nmbr').value,
                        messageSubject: captureElement('#cl_msg_sbj').value,
                        messageContent: captureElement('#cl_msg').value,
                        btnName: captureElement('#cl_msg_snd_btn').textContent
                    }
                }, function (response: any) {
                    showMessage(response, captureElement("#messageZone"));
                });
            });
        }
    }, 100);
}(captureElement('#cl_msg_snd_btn')));

(function (__url) {
    if (__url.indexOf('payment') !== -1) {
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

        if (captureElement('#payment-welcome') !== undefined) {
            ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                captureElement('#start-pay')?.addEventListener(__event, function () {
                    captureElement('#payment-welcome').style.display = 'none';
                    captureElement('#payment-categories').removeAttribute('style');
                }, {passive: true});
            });
        }
        if (captureElement('#payment-categories') !== undefined) {
            ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                captureElement('#services-payment')?.addEventListener(__event, function () {
                    captureElement('#payment-categories').style.display = 'none';
                    captureElement('#payment-appid-email').style.display = 'block';
                }, {passive: true})
            });
        }
        if (captureElement('#payment-appid-email') !== undefined) {
            ['click', 'dblclick', 'touchstart'].forEach(function (__event) {
                captureElement('#user-select-back')?.addEventListener(__event, function () {
                    captureElement('#payment-appid-email').style.display = 'none';
                    captureElement('#payment-categories').removeAttribute('style');
                }, {passive: true});
            });

            captureElement('#payment-appid-email')?.addEventListener('submit', function (event: Event) {
                event.preventDefault();
                let emailAddressCheck, messagebar = captureElement('#messagePanel');
                messagebar.className = 'messageZone';
                if (messagebar.firstElementChild === null) {
                    let tmp = document.createElement('div');
                    messagebar.appendChild(tmp);
                }
                messagebar.firstElementChild.textContent = '';
                if (captureElement('#app-id').value.length === 0) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Please enter your app id to continue.<br/>';
                }

                if (captureElement('#email-address').value === '') {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter your email address (valid for more than 14 characters).<br/>';
                    addSpace();
                } else if (captureElement('#email-address').value.indexOf('@') === -1 || captureElement('#email-address').value.indexOf('.') === -1 || captureElement('#email-address').value.length <= 14) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Enter valid email address.<br/>';
                    addSpace();
                } else {
                    emailAddressCheck = 'OK';
                }

                if (captureElement('#client-plan-type').value.length === 0) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Please select your plan type to continue.<br/>';
                }

                if (captureElement('#client-plan').value.length === 0) {
                    messagebar.firstElementChild.className = 'box-message box-danger box-shadow-light';
                    messagebar.style.display = 'block';
                    messagebar.firstElementChild.innerHTML += 'Error : Please select your plan to continue.<br/>';
                }

                messagebar.firstElementChild.classList.add('box-runtime');
                captureElement('#user-select-done').setAttribute('disabled', 'disabled');
                captureElement('#email-address').setAttribute('disabled', 'disabled');
                captureElement('#app-id').setAttribute('disabled', 'disabled');
                captureElement('#client-plan').setAttribute('disabled', 'disabled');
                captureElement('#client-plan-type').setAttribute('disabled', 'disabled');
                captureElement('#user-select-back').setAttribute('disabled', 'disabled');
                messagebar.style = 'display:block;';
                messagebar.firstElementChild.textContent = 'Please wait......';
                /*#!if ENV ==='production'*/
                setTimeout(function () {
                    captureElement('#messagePanel').textContent = '';
                }, 3000);
                /*#!endif*/
                if (emailAddressCheck === 'OK') {
                    return sendRequest({
                        method: "POST",
                        url: appHost + 'payment/verifyClient',
                        async: true,
                        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        data: {
                            security_code: 1,
                            userEmail: captureElement('#email-address').value,
                            appId: captureElement('#app-id').value,
                            plan: captureElement('#client-plan').value,
                            planType: captureElement('#client-plan-type').value,
                            btnName: captureElement('#user-select-done').textContent
                        }
                    }, function (response: any) {
                        if (IsJsonString(response) && JSON.parse(response).type === 'success') {
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
                                window.location.replace(
                                    appHost + 'payment/paynow/' + JSON.parse(response).appIdEncrypt + '/' +
                                    JSON.parse(response).emailEncrypt + '/' + JSON.parse(response).paymentPlanTypeEncrypt + '/' +
                                    JSON.parse(response).paymentPlanEncrypt + '/'
                                );
                            }, 2000)
                        } else {
                            captureElement('#email-address').removeAttribute('disabled');
                            captureElement('#app-id').removeAttribute('disabled');
                            captureElement('#client-plan').removeAttribute('disabled');
                            captureElement('#client-plan-type').removeAttribute('disabled');
                            captureElement('#user-select-done').removeAttribute('disabled');
                            captureElement('#user-select-back').removeAttribute('disabled');
                        }
                        showMessage(response, captureElement("#messagePanel"));
                    });
                }
            });
        }
    }

}(window.location.href));

/*add-ons zone*/
(function (__url) {
    if (__url.indexOf('ipinfo') !== -1) {
        let interval = setInterval(function () {
            if (captureElement('#ipd-address') !== null || true) {
                clearInterval(interval);
                ['keyup', 'change', 'paste'].forEach(function (__inputEvent) {
                    captureElement('#ipd-address')?.addEventListener(__inputEvent, function () {
                        return retrieveIpInfoPlus();
                    });
                });

                retrieveIpInfoPlus();
            }
        }, 100);
    }
}(window.location.href));

/*system zone*/
(function (__url) {
    if (__url.indexOf('system') !== -1) {
        if (captureElement("#system-notification-viewer") !== undefined) {
            visitorsAccessLogsInterval = setInterval(function () {
            }, 1000);
            sendRequest({
                method: "GET",
                url: appHost + 'api/getVisitorsAccessLogsLimited',
                async: true,
                header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
            }, function (response: any) {
                if (response.length !== 0 && IsJsonString(response)) {
                    if (JSON.parse(response).length !== 0) {
                        captureElement("#system-notification-viewer").textContent = '';
                        JSON.parse(response).forEach(function (log: any) {
                            const messageBody = createElement([{
                                'a': {
                                    'class': 'box-message ' + ((log.message_type.toLowerCase() === 'error') ? 'box-danger' : ((log.message_type.toLowerCase() === 'success') ? 'box-success' : ((log.message_type.toLowerCase() === 'notify') ? 'box-notify' : ' '))) + ' box-shadow-light',
                                    /*'style': 'padding: 0 0 0 4px;',*/
                                    'href': appHost + 'system/log/view/' + log.id,
                                    'title': '[' + log.ip + '] [' + log.browser + '] [' + log.time + ']',
                                }
                            }]);
                            const messageIcon = createElement([{
                                'span': {
                                    'class': ((log.message_type.toLowerCase() === 'error') ? 'box-danger-symbol' : ((log.message_type.toLowerCase() === 'success') ? 'box-success-symbol' : ((log.message_type.toLowerCase() === 'notify') ? 'box-notify-symbol' : ' '))),
                                }
                            }]);
                            messageBody.appendChild(messageIcon);
                            const messageIconFile = createElement([{
                                'i': {
                                    'class': ((log.message_type.toLowerCase() === 'error') ? 'fa fa-times' : ((log.message_type.toLowerCase() === 'success') ? 'fa fa-check' : ((log.message_type.toLowerCase() === 'notify') ? 'fa fa-info' : ''))),
                                }
                            }]);
                            messageIcon.appendChild(messageIconFile);

                            const messageBodyContent = createElement([{'div': {'class': (captureElement('#notify') !== undefined) ? captureElement('#notify').value : 'notify-md-content',}}]);
                            messageBody.appendChild(messageBodyContent);
                            const ipLink = createElement([{
                                'a': {
                                    'class': 'link',
                                    'href': appHost + 'addons/ipinfo/' + log.ip,
                                }
                            }]);
                            ipLink.textContent = log.author + ' with ' + log.browser /*+  ' from ' + log.country*/;
                            messageBodyContent.appendChild(ipLink);
                            const contentLink = createElement([{'span': {'class': 'link',}}]);
                            messageBodyContent.appendChild(contentLink);
                            const content = createElement([{'p': {'class': 'link',}}]);
                            content.textContent = log.message.replace(/\s*\<.*?\>\s*/g, ' ').substr(0, 35) + '...';
                            messageBodyContent.appendChild(content);
                            captureElement("#system-notification-viewer").appendChild(messageBody);
                        })
                    } else {
                        captureElement("#system-notification-viewer").textContent = '';
                        const messageBody = createElement([{
                            'div': {
                                'class': 'box-message box-danger box-shadow-light',
                                /*'style': 'padding: 0 0 0 4px;',*/
                            }
                        }]);
                        const messageIcon = createElement([{
                            'span': {
                                'class': 'box-danger-symbol',
                            }
                        }]);
                        messageBody.appendChild(messageIcon);
                        const messageIconFile = createElement([{
                            'i': {
                                'class': 'fa fa-times',
                            }
                        }]);
                        messageIcon.appendChild(messageIconFile);
                        const messageBodyContent = createElement([{'div': {'class': 'notify-md-content',}}]);
                        messageBodyContent.textContent = 'No notification found.';
                        messageBody.appendChild(messageBodyContent);
                        captureElement("#system-notification-viewer").appendChild(messageBody);
                    }
                }
            });
        }

        if (captureElement("#system-contact-message-viewer") !== undefined) {
            contactMessageInterval = setInterval(function () {
            }, 1000);
            sendRequest({
                method: "GET",
                url: appHost + 'api/getContactMessagesLimited',
                async: true,
                header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
            }, function (response: any) {
                if (response.length !== 0 && IsJsonString(response)) {
                    if (JSON.parse(response).length !== 0) {
                        captureElement("#system-contact-message-viewer").textContent = '';
                        JSON.parse(response).forEach(function (message: any) {
                            const messageBody = createElement([{
                                'a': {
                                    'class': 'box-message box-success box-shadow-light',
                                    'href': appHost + 'system/contactmessage/view/' + message.id,
                                }
                            }]);
                            const messageIcon = createElement([{
                                'span': {
                                    'class': 'box-success-symbol',
                                }
                            }]);
                            messageBody.appendChild(messageIcon);
                            const messageIconFile = createElement([{
                                'i': {
                                    'class': 'fa fa-check',
                                }
                            }]);
                            messageIcon.appendChild(messageIconFile);

                            const messageBodyContent = createElement([{'div': {'class': (captureElement('#notify') !== undefined) ? captureElement('#notify').value : 'notify-md-content',}}]);
                            messageBody.appendChild(messageBodyContent);

                            const sender = createElement([{
                                'a': {
                                    'class': 'link',
                                    /*'href': appHost + 'addons/ipinfo/' + message.ip,*/
                                }
                            }]);
                            sender.textContent = message.f_name + ' ' + message.l_name + ' send a ' + message.subject;
                            messageBodyContent.appendChild(sender);
                            const content = createElement([{'p': {}}]);
                            content.textContent = message.message;
                            messageBodyContent.appendChild(content);
                            captureElement("#system-contact-message-viewer").appendChild(messageBody);
                        })
                    } else {
                        captureElement("#system-contact-message-viewer").textContent = '';
                        const messageBody = createElement([{
                            'div': {
                                'class': 'box-message box-danger box-shadow-light',
                                /*'style': 'padding: 0 0 0 4px;',*/
                            }
                        }]);
                        const messageIcon = createElement([{
                            'span': {
                                'class': 'box-danger-symbol',
                            }
                        }]);
                        messageBody.appendChild(messageIcon);
                        const messageIconFile = createElement([{
                            'i': {
                                'class': 'fa fa-times',
                            }
                        }]);
                        messageIcon.appendChild(messageIconFile);
                        const messageBodyContent = createElement([{'div': {'class': 'notify-md-content',}}]);
                        messageBodyContent.textContent = 'No message found.';
                        messageBody.appendChild(messageBodyContent);
                        captureElement("#system-contact-message-viewer").appendChild(messageBody);
                    }
                }
            });
        }

        if (captureElement('#system-default-menus') !== undefined) {
            setInterval(function () {
            }, 1000);
            sendRequest({
                method: "GET",
                url: appHost + 'system/index/getMainItemTabs',
                async: true,
                header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
            }, function (response: any) {
                if (response.length !== 0 && IsJsonString(response)) {
                    if (JSON.parse(response).length !== 0) {
                        captureElement("#system-default-menus").textContent = '';
                        JSON.parse(response).forEach(function (menu: any) {
                            const systemMenu = createElement([{
                                'a': {
                                    'class': 'thumbnail-md box-shadow-light',
                                    'href': appHost + 'system/' + menu.url,
                                    'title': menu.title,
                                }
                            }]);
                            const systemMenuIcon = createElement([{'span': {'class': 'thumbnail-image',}}]);
                            systemMenu.appendChild(systemMenuIcon);
                            const systemMenuIconFile = createElement([{'i': {'class': menu.icon,}}]);
                            systemMenuIcon.appendChild(systemMenuIconFile);

                            const systemMenuName = createElement([{'div': {'class': 'thumbnail-text',}}]);
                            systemMenuName.textContent = menu.name;
                            systemMenu.appendChild(systemMenuName);
                            captureElement("#system-default-menus").appendChild(systemMenu);
                        });
                    } else {
                        const systemMenu = createElement([{
                            'div': {
                                'class': 'thumbnail-md box-shadow-light',
                                'style': 'padding: 45px 25px;',
                            }
                        }]);
                        systemMenu.textContent = 'No menu exists.';
                        captureElement("#system-default-menus").appendChild(systemMenu);
                    }
                }
            });
        }

        if (captureElement('#system-extra-menus') !== undefined) {
            setInterval(function () {
            }, 1000);
            sendRequest({
                method: "GET",
                url: appHost + 'system/index/getExtraItemTabs',
                async: true,
                header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
            }, function (response: any) {
                if (response.length !== 0 && IsJsonString(response)) {
                    if (JSON.parse(response).length !== 0) {
                        captureElement('#system-extra-menus').textContent = '';
                        JSON.parse(response).forEach(function (menu: any) {
                            const extraMenu = createElement([{
                                'a': {
                                    'class': 'thumbnail-md box-shadow-light',
                                    'href': appHost + 'system/' + menu.url,
                                    'title': menu.title,
                                }
                            }]);
                            const extraMenuIcon = createElement([{'span': {'class': 'thumbnail-image',}}]);
                            extraMenu.appendChild(extraMenuIcon);
                            const extraMenuIconFile = createElement([{'i': {'class': menu.icon,}}]);
                            extraMenuIcon.appendChild(extraMenuIconFile);

                            const extraMenuName = createElement([{'div': {'class': 'thumbnail-text',}}]);
                            extraMenuName.textContent = menu.name;
                            extraMenu.appendChild(extraMenuName);
                            captureElement("#system-extra-menus").appendChild(extraMenu);
                        });
                    } else {
                        const extraMenu = createElement([{
                            'div': {
                                'class': 'thumbnail-md box-shadow-light',
                                'style': 'padding: 45px 25px;',
                            }
                        }]);
                        extraMenu.textContent = 'No menu exists.';
                        captureElement("#system-extra-menus").appendChild(extraMenu);
                    }
                }
            });
        }

        if (__url.indexOf('branches') !== -1) {
            if (captureElement('#branch-data-table') !== undefined) {
                //init edit pad by default
                if (captureElement('#branchEditMode')) {
                    captureElement('#branchEditMode').innerHTML = 'New';
                    captureElement('#branch-data-btn').innerHTML = 'Save';
                    captureElement('#branch-reset-btn').innerHTML = 'Reset';
                }
                //set text box value change dynamic after dropbox had changed.
                ['keyup', 'change', 'paste'].forEach(function (__event) {
                    captureElement('#branchName').addEventListener(__event, function () {
                        return checkInputDataAbility(
                            appHost + "system/branches/checkBranchNameInputAbility",
                            {
                                security_code: 1,
                                name: "name",
                                value: captureElement("#branchName").value
                            },
                            function (response: any) {
                                showMessage(response, captureElement("#message2"));
                            });
                    });
                });


                //save data by clicking data button
                captureElement('#branch-data-btn').addEventListener('click', function () {
                    captureElement('#app-loader').style.display = 'block';
                    return sendRequest({
                        method: "POST",
                        url: appHost + 'system/branches/manageBranch',
                        async: true,
                        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        data: {
                            security_code: 1,
                            id: captureElement('#branchID').value,
                            name: captureElement('#branchName').value,
                            status: captureElement('#branchStatus').value,
                            location: captureElement('#branchLocation').value,
                            btnName: captureElement('#branch-data-btn').textContent
                        },
                    }, (response: any) => {
                        showMessage(response, captureElement("#message2"));
                        captureElement('#app-loader').style.display = 'none';
                    });
                });

                //reset inputbox by clicking reset button
                captureElement('#branch-reset-btn').addEventListener('click', function () {
                    changeElementValueById([
                        {'id': 'branchID', 'value': ''},
                        {'id': 'branchName', 'value': ''},
                        {'id': 'branchStatus', 'value': ''},
                        {'id': 'branchLocation', 'value': ''},
                    ]);
                });

                //add data form by clicking add button
                captureElement('#branch-add-btn').addEventListener('click', function () {
                    captureElement('#message2').innerHTML = '';
                    captureElement('#modal01').style.display = 'block';
                    captureElement('#branchEditMode').innerHTML = 'New';
                    captureElement('#branch-data-btn').innerHTML = 'Save';
                    changeElementValueById([
                        {'id': 'branchID', 'value': ''},
                        {'id': 'branchName', 'value': ''},
                        {'id': 'branchStatus', 'value': ''},
                        {'id': 'branchLocation', 'value': ''},
                    ]);
                });

                //select data by clicking select button
                if (document.querySelectorAll('#branch-select').length !== 0) {
                    document.querySelectorAll('#branch-select').forEach(function (__selector: Element) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            __selector.addEventListener(event, function () {
                                if (this.checked) {
                                    captureElement('#message2').innerHTML = '';
                                    captureElement('#modal01').style.display = 'block';
                                    captureElement('#branchEditMode').innerHTML = 'Edit';
                                    captureElement('#branch-data-btn').innerHTML = 'Update';
                                    captureElement('#branchID').value = this.getAttribute('data-id');
                                    captureElement('#branchName').value = this.getAttribute('data-name');
                                    captureElement('#branchStatus').value = this.getAttribute('data-status');
                                    captureElement('#branchLocation').value = this.getAttribute('data-location');
                                }
                            }, {passive: true});
                        });
                    });
                }

                /*add edit event*/
                if (document.querySelectorAll('#branch-edit-btn').length !== 0) {
                    document.querySelectorAll('#branch-edit-btn').forEach(function (_button: Element) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            _button.addEventListener(event, function () {
                                captureElement('#message2').innerHTML = '';
                                captureElement('#modal01').style.display = 'block';
                                captureElement('#branchEditMode').innerHTML = 'Edit';
                                captureElement('#branch-data-btn').innerHTML = 'Update';
                                captureElement('#branchID').value = this.getAttribute('data-id');
                                captureElement('#branchName').value = this.getAttribute('data-name');
                                captureElement('#branchStatus').value = this.getAttribute('data-status');
                                captureElement('#branchLocation').value = this.getAttribute('data-location');
                            }, {passive: true});
                        });
                    });
                }

                popUpDialogBoxDriver(
                    '#branch-delete-btn', 'Message', appHost + 'system/branches/deleteBranch',
                    '#message3', function (response: any) {
                        showMessage(response, captureElement("#message"));
                    }
                );
                paginationDriver('ajax', appHost + 'system/branches/indexPaginationAJAX',
                    'branch-data-table', function (response: any) {
                        showMessage(response, captureElement("#message"));
                    }, function () {
                        popUpDialogBoxDriver(
                            '#branch-delete-btn', 'Message', appHost + 'system/branches/deleteBranch',
                            '#message3', function (response: any) {
                                showMessage(response, captureElement("#message"));
                            }
                        );
                        /*it will be fire on pagination*/
                        //select data by clicking select button
                        if (document.querySelectorAll('#branch-select').length !== 0) {
                            document.querySelectorAll('#branch-select').forEach(function (__selector: Element) {
                                ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                    __selector.addEventListener(event, function () {
                                        if (this.checked) {
                                            captureElement('#message2').innerHTML = '';
                                            captureElement('#modal01').style.display = 'block';
                                            captureElement('#branchEditMode').innerHTML = 'Edit';
                                            captureElement('#branch-data-btn').innerHTML = 'Update';
                                            captureElement('#branchID').value = this.getAttribute('data-id');
                                            captureElement('#branchName').value = this.getAttribute('data-name');
                                            captureElement('#branchStatus').value = this.getAttribute('data-status');
                                            captureElement('#branchLocation').value = this.getAttribute('data-location');
                                        }
                                    }, {passive: true});
                                });
                            });
                        }

                        /*add edit event*/
                        if (document.querySelectorAll('#branch-edit-btn').length !== 0) {
                            document.querySelectorAll('#branch-edit-btn').forEach(function (_button: Element) {
                                ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                    _button.addEventListener(event, function () {
                                        captureElement('#message2').innerHTML = '';
                                        captureElement('#modal01').style.display = 'block';
                                        captureElement('#branchEditMode').innerHTML = 'Edit';
                                        captureElement('#branch-data-btn').innerHTML = 'Update';
                                        captureElement('#branchID').value = this.getAttribute('data-id');
                                        captureElement('#branchName').value = this.getAttribute('data-name');
                                        captureElement('#branchStatus').value = this.getAttribute('data-status');
                                        captureElement('#branchLocation').value = this.getAttribute('data-location');
                                    }, {passive: true});
                                });
                            });
                        }
                    }
                );
            }
            if (captureElement('#busers-data-table') !== undefined) {
                popUpDialogBoxDriver(
                    '#transferBranchStuff', 'Message', appHost + 'system/branches/transferBranchStuff',
                    '#message3', function (response: any) {
                        showMessage(response, captureElement("#message"));
                    }
                );
                paginationDriver('ajax', appHost + 'system/branches/usersPaginationAJAX',
                    'busers-data-table', function (response: any) {
                        showMessage(response, captureElement("#message"));
                    }, function () {
                        popUpDialogBoxDriver(
                            '#transferBranchStuff', 'Message', appHost + 'system/branches/transferBranchStuff',
                            '#message3', function (response: any) {
                                showMessage(response, captureElement("#message"));
                            }
                        );
                    });
            }
        }

        if (__url.indexOf('modules') !== -1) {
            if (captureElement('#modules-data-table') !== undefined) {
                //init edit pad by default
                if (captureElement('#moduleEditMode')) {
                    captureElement('#moduleEditMode').innerHTML = 'New';
                    captureElement('#module-data-btn').innerHTML = 'Save';
                    captureElement('#module-reset-btn').innerHTML = 'Reset';
                }

                //save data by clicking data button
                captureElement('#module-data-btn').addEventListener('click', function () {
                    captureElement('#app-loader').style.display = 'block';
                    return sendRequest({
                        method: "POST",
                        url: appHost + 'system/modules/updateModule',
                        async: true,
                        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        data: {
                            security_code: 1,
                            id: captureElement('#moduleID').value,
                            status: captureElement('#moduleStatus').value,
                            btnName: 'Update'
                        },
                    }, (response: any) => {
                        showMessage(response, captureElement("#message2"));
                        captureElement('#app-loader').style.display = 'none';
                    });
                });

                //reset inputbox by clicking reset button
                captureElement('#module-reset-btn').addEventListener('click', function () {
                    changeElementValueById([
                        {'id': 'moduleStatus', 'value': ''},
                    ]);
                });

                //add data form by clicking add button
                captureElement('#module-add-btn').addEventListener('click', function () {
                    captureElement('#message2').innerHTML = '';
                    captureElement('#modal01').style.display = 'block';
                    captureElement('#moduleUploadPad').style.display = 'block';
                    captureElement('#UploadStatusBoard').style.display = 'none';
                    captureElement('#moduleEditPAD').style.display = 'none';
                    captureElement('#module-data-btn').style.display = 'none';
                    captureElement('#module-reset-btn').style.display = 'none';
                });
                //show select file name on status bar
                captureElement('#moduleFile').addEventListener('change', function () {
                    let file = captureElement('#moduleFile').files[0];
                    captureElement('#UploadStatusBoard').style.display = 'block';
                    captureElement('#progressbar').style.display = 'none';
                    captureElement('#upload_status').innerHTML = file.name + ' selected';
                });


                //upload file by clicking button
                captureElement('#uploadModuleFile').addEventListener('click', function () {
                    uploadFile('moduleFile', 'moduleFile', appHost + 'system/modules/uploadTARGZ');
                });

                //select data by clicking select button
                if (document.querySelectorAll('#module-select').length !== 0) {
                    document.querySelectorAll('#module-select').forEach(function (__selector: Element) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            __selector.addEventListener(event, function () {
                                if (this.checked) {
                                    captureElement('#message2').innerHTML = '';
                                    captureElement('#modal01').style.display = 'block';
                                    captureElement('#moduleUploadPad').style.display = 'none';
                                    captureElement('#moduleEditPAD').style.display = 'block';
                                    captureElement('#moduleEditMode').innerHTML = 'Edit';
                                    captureElement('#module-data-btn').innerHTML = 'Update';
                                    captureElement('#module-data-btn').style.display = 'block';
                                    captureElement('#module-reset-btn').style.display = 'block';
                                    captureElement('#moduleID').value = this.getAttribute('data-id');
                                    captureElement('#moduleName').value = this.getAttribute('data-name');
                                    captureElement('#moduleName').setAttribute('disabled', 'disabled');
                                    captureElement('#moduleLocation').value = this.getAttribute('data-location');
                                    captureElement('#moduleLocation').setAttribute('disabled', 'disabled');
                                    captureElement('#moduleStatus').value = this.getAttribute('data-status');
                                }
                            }, {passive: true});
                        });
                    });
                }

                /*add edit event*/
                if (document.querySelectorAll('#module-edit-btn').length !== 0) {
                    document.querySelectorAll('#module-edit-btn').forEach(function (_button: Element) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            _button.addEventListener(event, function () {
                                captureElement('#message2').innerHTML = '';
                                captureElement('#modal01').style.display = 'block';
                                captureElement('#moduleUploadPad').style.display = 'none';
                                captureElement('#moduleEditPAD').style.display = 'block';
                                captureElement('#moduleEditMode').innerHTML = 'Edit';
                                captureElement('#module-data-btn').innerHTML = 'Update';
                                captureElement('#module-data-btn').style.display = 'block';
                                captureElement('#module-reset-btn').style.display = 'block';
                                captureElement('#moduleID').value = this.getAttribute('data-id');
                                captureElement('#moduleName').value = this.getAttribute('data-name');
                                captureElement('#moduleName').setAttribute('disabled', 'disabled');
                                captureElement('#moduleLocation').value = this.getAttribute('data-location');
                                captureElement('#moduleLocation').setAttribute('disabled', 'disabled');
                                captureElement('#moduleStatus').value = this.getAttribute('data-status');
                            }, {passive: true});
                        });
                    });
                }
                popUpDialogBoxDriver(
                    '#module-delete-btn', 'Message', appHost + 'system/modules/deleteModule',
                    '#message3', function (response: any) {
                        showMessage(response, captureElement("#message"));
                    }
                );
                paginationDriver('ajax', appHost + 'system/modules/indexPaginationAJAX',
                    'modules-data-table', function (response: any) {
                        showMessage(response, captureElement("#message"));
                    }, function () {
                        popUpDialogBoxDriver(
                            '#module-delete-btn', 'Message', appHost + 'system/modules/deleteModule',
                            '#message3', function (response: any) {
                                showMessage(response, captureElement("#message"));
                            }
                        );
                        /*it will be fire on pagination*/

                        //select data by clicking select button
                        if (document.querySelectorAll('#module-select').length !== 0) {
                            document.querySelectorAll('#module-select').forEach(function (__selector: Element) {
                                ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                    __selector.addEventListener(event, function () {
                                        if (this.checked) {
                                            captureElement('#message2').innerHTML = '';
                                            captureElement('#modal01').style.display = 'block';
                                            captureElement('#moduleUploadPad').style.display = 'none';
                                            captureElement('#moduleEditPAD').style.display = 'block';
                                            captureElement('#moduleEditMode').innerHTML = 'Edit';
                                            captureElement('#module-data-btn').innerHTML = 'Update';
                                            captureElement('#module-data-btn').style.display = 'block';
                                            captureElement('#module-reset-btn').style.display = 'block';
                                            captureElement('#moduleID').value = this.getAttribute('data-id');
                                            captureElement('#moduleName').value = this.getAttribute('data-name');
                                            captureElement('#moduleName').setAttribute('disabled', 'disabled');
                                            captureElement('#moduleLocation').value = this.getAttribute('data-location');
                                            captureElement('#moduleLocation').setAttribute('disabled', 'disabled');
                                            captureElement('#moduleStatus').value = this.getAttribute('data-status');
                                        }
                                    }, {passive: true});
                                });
                            });
                        }

                        /*add edit event*/
                        if (document.querySelectorAll('#module-edit-btn').length !== 0) {
                            document.querySelectorAll('#module-edit-btn').forEach(function (_button: Element) {
                                ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                    _button.addEventListener(event, function () {
                                        captureElement('#message2').innerHTML = '';
                                        captureElement('#modal01').style.display = 'block';
                                        captureElement('#moduleUploadPad').style.display = 'none';
                                        captureElement('#moduleEditPAD').style.display = 'block';
                                        captureElement('#moduleEditMode').innerHTML = 'Edit';
                                        captureElement('#module-data-btn').innerHTML = 'Update';
                                        captureElement('#module-data-btn').style.display = 'block';
                                        captureElement('#module-reset-btn').style.display = 'block';
                                        captureElement('#moduleID').value = this.getAttribute('data-id');
                                        captureElement('#moduleName').value = this.getAttribute('data-name');
                                        captureElement('#moduleName').setAttribute('disabled', 'disabled');
                                        captureElement('#moduleLocation').value = this.getAttribute('data-location');
                                        captureElement('#moduleLocation').setAttribute('disabled', 'disabled');
                                        captureElement('#moduleStatus').value = this.getAttribute('data-status');
                                    }, {passive: true});
                                });
                            });
                        }
                    }
                );
            }
        }

        if (__url.indexOf('pages') !== -1) {
            if (captureElement('#pages-data-table') !== undefined) {
                //init edit pad by default
                if (captureElement('#pageEditMode')) {
                    captureElement('#pageEditMode').innerHTML = 'New';
                    captureElement('#page-data-btn').innerHTML = 'Save';
                    captureElement('#page-reset-btn').innerHTML = 'Reset';
                }

                //init edit pad by default
                if (captureElement('#pageSEOEditMode')) {
                    captureElement('#pageSEOEditMode').innerHTML = 'New';
                    captureElement('#page-seo-data-btn').innerHTML = 'Save';
                    captureElement('#page-seo-reset-btn').innerHTML = 'Reset';
                }
                //add data form by clicking add button
                captureElement('#page-add-btn').addEventListener('click', function () {
                    captureElement('#message2').innerHTML = '';
                    captureElement('#modal01').style.display = 'block';
                    captureElement('#pageEditMode').innerHTML = 'New';
                    captureElement('#page-data-btn').innerHTML = 'Save';
                    changeElementValueById([
                        {'id': 'page-parent-id', 'value': ''},
                        {'id': 'page-position-id', 'value': ''},
                        {'id': 'page-status', 'value': ''},
                        {'id': 'page-seo', 'value': ''},
                        {'id': 'page-title', 'value': ''},
                        {'id': 'page-url', 'value': ''},
                        {'id': 'page-icon', 'value': ''},
                        {'id': 'page-type', 'value': ''},
                    ]);
                });

                /*page parent change event*/
                ['change'].forEach(function (__event) {
                    captureElement('#page-parent-id').addEventListener(__event, function () {
                        if (captureElement('#page-url').value.length !== 0) {
                            if (this.value.length !== 0 && this.value !== '0') {
                                return checkInputDataAbility(
                                    appHost + "system/pages/getPageNameById",
                                    {
                                        security_code: 1,
                                        page: this.value
                                    },
                                    function (response: any) {
                                        if (JSON.parse(response).type === 'success') {
                                            captureElement('#page-produce-link').setAttribute('actual-url', 'page/' + JSON.parse(response).name.replace(' ','-').toLowerCase() + '/' + captureElement('#page-url').value.toLowerCase());
                                            captureElement('#page-produce-link').href = appHost + 'page/' + JSON.parse(response).name.replace(' ','-').toLowerCase() + '/' + captureElement('#page-url').value.toLowerCase();
                                            captureElement('#page-produce-link').textContent = 'URL : ' + appHost + 'page/' + JSON.parse(response).name.replace(' ','-').toLowerCase() + '/' + captureElement('#page-url').value.toLowerCase();
                                        } else {
                                            showMessage(response, captureElement("#message2"));
                                        }
                                    });
                            }
                        }
                    });
                });

                //set text box value change dynamic after dropbox had changed.
                ['keyup', 'change', 'paste', 'focus'].forEach(function (__event) {
                    captureElement('#page-title').addEventListener(__event, function () {
                        if (this.value.length !== 0) {
                            this.value = this.value[0].toUpperCase() + this.value.slice(1);
                            return checkInputDataAbility(
                                appHost + "system/pages/checkPageTitleURLInputAbility",
                                {
                                    security_code: 1,
                                    name: "title",
                                    value: this.value[0].toUpperCase() + this.value.slice(1)
                                },
                                function (response: any) {
                                    showMessage(response, captureElement("#message2"));
                                });
                        }
                    });
                    captureElement('#page-url').addEventListener(__event, function () {
                        if (this.value.length === 0) {
                            this.value = captureElement('#page-title').value.replace(' ','-').toLowerCase();
                        } else {
                            this.value = this.value.replace(' ','-').toLowerCase();
                        }

                        captureElement('#page-produce-link').setAttribute('style', 'display:block;');
                        if (captureElement('#page-parent-id').value.length !== 0 && captureElement('#page-parent-id').value !== '0') {
                            checkInputDataAbility(
                                appHost + "system/pages/getPageNameById",
                                {
                                    security_code: 1,
                                    page: captureElement('#page-parent-id').value
                                },
                                function (response: any) {
                                    if (JSON.parse(response).type === 'success') {
                                        captureElement('#page-produce-link').setAttribute('actual-url', 'page/' + JSON.parse(response).name.replace(' ','-').toLowerCase() + '/' + captureElement('#page-url').value.toLowerCase());
                                        captureElement('#page-produce-link').href = appHost + 'page/' + JSON.parse(response).name.replace(' ','-').toLowerCase() + '/' + captureElement('#page-url').value.toLowerCase();
                                        captureElement('#page-produce-link').textContent = 'URL : ' + appHost + 'page/' + JSON.parse(response).name.replace(' ','-').toLowerCase() + '/' + captureElement('#page-url').value.toLowerCase();
                                    } else {
                                        showMessage(response, captureElement("#message2"));
                                    }
                                });
                        } else {
                            captureElement('#page-produce-link').setAttribute('actual-url', 'page/' + this.value.replace(' ','-').toLowerCase());
                            captureElement('#page-produce-link').href = appHost + 'page/' + this.value.replace(' ','-').toLowerCase();
                            captureElement('#page-produce-link').textContent = 'URL : ' + appHost + 'page/' + this.value.replace(' ','-').toLowerCase();
                        }

                        return checkInputDataAbility(
                            appHost + "system/pages/checkPageTitleURLInputAbility",
                            {
                                security_code: 1,
                                name: "url",
                                value: this.value.toLowerCase()
                            },
                            function (response: any) {
                                showMessage(response, captureElement("#message2"));
                            });
                    });
                });

                //save data by clicking data button
                captureElement('#page-data-btn').addEventListener('click', function () {
                    captureElement('#app-loader').style.display = 'block';
                    return sendRequest({
                        method: "POST",
                        url: appHost + 'system/pages/managePages',
                        async: true,
                        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        data: {
                            security_code: 1,
                            id: captureElement('#pageID').value,
                            parent: captureElement('#page-parent-id').value,
                            position: captureElement('#page-position-id').value,
                            status: captureElement('#page-status').value,
                            seo: captureElement('#page-seo').value,
                            title: captureElement('#page-title').value,
                            icon: captureElement('#page-icon').value,
                            url: (captureElement('#page-produce-link').getAttribute('actual-url')!==null) ? captureElement('#page-produce-link').getAttribute('actual-url').toLowerCase() : '',
                            type: captureElement('#page-type').value,
                            btnName: captureElement('#page-data-btn').textContent
                        },
                    }, (response: any) => {
                        showMessage(response, captureElement("#message2"));
                        captureElement('#app-loader').style.display = 'none';
                        /*-------------------------*/
                        console.log(document.forms)
                        /*-------------------------*/
                    });
                });

                //reset inputbox by clicking reset button
                captureElement('#page-reset-btn').addEventListener('click', function () {
                    changeElementValueById([
                        {'id': 'page-parent-id', 'value': ''},
                        {'id': 'page-position-id', 'value': ''},
                        {'id': 'page-status', 'value': ''},
                        {'id': 'page-seo', 'value': ''},
                        {'id': 'page-title', 'value': ''},
                        {'id': 'page-url', 'value': ''},
                        {'id': 'page-icon', 'value': ''},
                        {'id': 'page-type', 'value': ''},
                    ]);
                });

                //select data by clicking select button
                if (document.querySelectorAll('#page-select').length !== 0) {
                    document.querySelectorAll('#page-select').forEach(function (__selector: Element) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            __selector.addEventListener(event, function () {
                                if (this.checked) {
                                    captureElement('#message2').innerHTML = '';
                                    captureElement('#modal01').style.display = 'block';
                                    captureElement('#pageEditMode').innerHTML = 'Edit';
                                    captureElement('#page-data-btn').innerHTML = 'Update';
                                    captureElement('#pageID').value = this.getAttribute('data-id');
                                    captureElement('#page-parent-id').value = this.getAttribute('data-parent-id');
                                    captureElement('#page-position-id').value = this.getAttribute('data-position');
                                    captureElement('#page-status').value = this.getAttribute('data-status');
                                    captureElement('#page-seo').value = this.getAttribute('data-seo');
                                    captureElement('#page-title').value = this.getAttribute('data-title');
                                    captureElement('#page-url').value = this.getAttribute('data-url');
                                    captureElement('#page-type').value = this.getAttribute('data-type');
                                    captureElement('#page-icon').value = this.getAttribute('data-icon');
                                }
                            }, {passive: true});
                        });
                    });
                }

                /*add edit event*/
                if (document.querySelectorAll('#page-edit-btn').length !== 0) {
                    document.querySelectorAll('#page-edit-btn').forEach(function (_button: Element) {
                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                            _button.addEventListener(event, function () {
                                captureElement('#message2').innerHTML = '';
                                captureElement('#modal01').style.display = 'block';
                                captureElement('#pageEditMode').innerHTML = 'Edit';
                                captureElement('#page-data-btn').innerHTML = 'Update';
                                captureElement('#pageID').value = this.getAttribute('data-id');
                                captureElement('#page-parent-id').value = this.getAttribute('data-parent-id');
                                captureElement('#page-position-id').value = this.getAttribute('data-position');
                                captureElement('#page-status').value = this.getAttribute('data-status');
                                captureElement('#page-seo').value = this.getAttribute('data-seo');
                                captureElement('#page-title').value = this.getAttribute('data-title');
                                captureElement('#page-url').value = this.getAttribute('data-url');
                                captureElement('#page-type').value = this.getAttribute('data-type');
                                captureElement('#page-icon').value = this.getAttribute('data-icon');
                            }, {passive: true});
                        });
                    });
                }

                popUpDialogBoxDriver(
                    '#page-delete-btn', 'Message', appHost + 'system/pages/deletePage',
                    '#message3', function (response: any) {
                        showMessage(response, captureElement("#message"));
                    }
                );
                paginationDriver('ajax', appHost + 'system/pages/indexPaginationAJAX',
                    'pages-data-table', function (response: any) {
                        showMessage(response, captureElement("#message"));
                    }, function () {
                        popUpDialogBoxDriver(
                            '#page-delete-btn', 'Message', appHost + 'system/pages/deletePage',
                            '#message3', function (response: any) {
                                showMessage(response, captureElement("#message"));
                            }
                        );
                        /*it will be fire on pagination*/
                        //select data by clicking select button
                        if (document.querySelectorAll('#page-select').length !== 0) {
                            document.querySelectorAll('#page-select').forEach(function (__selector: Element) {
                                ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                    __selector.addEventListener(event, function () {
                                        if (this.checked) {
                                            captureElement('#message2').innerHTML = '';
                                            captureElement('#modal01').style.display = 'block';
                                            captureElement('#pageEditMode').innerHTML = 'Edit';
                                            captureElement('#page-data-btn').innerHTML = 'Update';
                                            captureElement('#pageID').value = this.getAttribute('data-id');
                                            captureElement('#page-parent-id').value = this.getAttribute('data-parent-id');
                                            captureElement('#page-position-id').value = this.getAttribute('data-position');
                                            captureElement('#page-status').value = this.getAttribute('data-status');
                                            captureElement('#page-seo').value = this.getAttribute('data-seo');
                                            captureElement('#page-title').value = this.getAttribute('data-title');
                                            captureElement('#page-url').value = this.getAttribute('data-url');
                                            captureElement('#page-type').value = this.getAttribute('data-type');
                                            captureElement('#page-icon').value = this.getAttribute('data-icon');
                                        }
                                    }, {passive: true});
                                });
                            });
                        }

                        /*add edit event*/
                        if (document.querySelectorAll('#page-edit-btn').length !== 0) {
                            document.querySelectorAll('#page-edit-btn').forEach(function (_button: Element) {
                                ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                    _button.addEventListener(event, function () {
                                        captureElement('#message2').innerHTML = '';
                                        captureElement('#modal01').style.display = 'block';
                                        captureElement('#pageEditMode').innerHTML = 'Edit';
                                        captureElement('#page-data-btn').innerHTML = 'Update';
                                        captureElement('#pageID').value = this.getAttribute('data-id');
                                        captureElement('#page-parent-id').value = this.getAttribute('data-parent-id');
                                        captureElement('#page-position-id').value = this.getAttribute('data-position');
                                        captureElement('#page-status').value = this.getAttribute('data-status');
                                        captureElement('#page-seo').value = this.getAttribute('data-seo');
                                        captureElement('#page-title').value = this.getAttribute('data-title');
                                        captureElement('#page-url').value = this.getAttribute('data-url');
                                        captureElement('#page-type').value = this.getAttribute('data-type');
                                        captureElement('#page-icon').value = this.getAttribute('data-icon');
                                    }, {passive: true});
                                });
                            });
                        }
                    }
                );
            }
            if (__url.indexOf('sources')!==-1){
                [/*'focus', 'click','keyup',*/'paste','change'].forEach(function (__event){
                    captureElement('#page-content')?.addEventListener(__event,function (){
                        return this.textContent = this.textContent.replace('{$layoutParams.root}',appHost);
                    });
                });
            }
        }

        /*----------------*/
        /*----------------*/


        if (__url.indexOf('tracking') !== -1) {
            if (captureElement('#table-view-databases') !== undefined) {
                if (captureElement('#databaseEditMode')) {
                    captureElement('#database-data-btn').innerHTML = 'Save';
                    captureElement('#database-reset-btn').innerHTML = 'Reset';
                }
                if (captureElement('#databaseBackupEditMode')) {
                    captureElement('#databaseBackup-data-btn').innerHTML = 'Backup';
                    captureElement('#databaseBackup-reset-btn').innerHTML = 'Reset';
                }
                captureElement('#server-db-add-btn').addEventListener('click', function () {
                    captureElement('#message2').innerHTML = '';
                    captureElement('#modal01').style.display = 'block';
                    captureElement('#databaseEditMode').innerHTML = 'Add new';

                    changeElementValueById([
                        {'id': 'databaseID', 'value': ''},
                        {'id': 'databaseServer', 'value': ''},
                        {'id': 'databaseUser', 'value': ''},
                        {'id': 'databaseName', 'value': ''},
                        {'id': 'databasePassword', 'value': ''},
                    ]);
                });
                captureElement('#server-db-backup-btn').addEventListener('click', function () {
                    captureElement('#message3').innerHTML = '';
                    captureElement('#modal02').style.display = 'block';
                    captureElement('#databaseBackupEditMode').innerHTML = 'Backup';
                    changeElementValueById([
                        {'id': 'databaseStorage', 'value': ''},
                        {'id': 'databaseBackup', 'value': ''},
                    ]);
                });

                //save data by clicking data button
                captureElement('#database-data-btn').addEventListener('click', function () {
                    captureElement('#app-loader').style.display = 'block';
                    sendRequest({
                        method: "POST",
                        url: appHost + 'system/tracking/manageServerDatabase',
                        async: true,
                        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        data: {
                            security_code: 1,
                            id: captureElement('#databaseID').value,
                            name: captureElement('#databaseServer').value,
                            user: captureElement('#databaseUser').value,
                            db: captureElement('#databaseName').value,
                            password: captureElement('#databasePassword').value,
                            btnName: captureElement('#database-data-btn').textContent
                        },
                    }, function (response: any) {
                        captureElement('#database-data-btn').textContent = captureElement('#database-data-btn').textContent + 'd';
                        setTimeout(function () {
                            captureElement('#database-data-btn').textContent = captureElement('#database-data-btn').textContent.slice(0, -1);
                        }, 2000);
                        captureElement('#app-loader').style.display = 'none';
                        showMessage(response, captureElement("#message2"));
                    });
                });
                captureElement('#databaseBackup-data-btn').addEventListener('click', function () {

                    /*stop running xhr hit to get better server performance*/
                    clearInterval(publicSocialLinksInterval);
                    publicSocialLinksInterval = 0;
                    clearInterval(visitorsAccessLogsInterval);
                    visitorsAccessLogsInterval = 0;
                    clearInterval(contactMessageInterval);
                    contactMessageInterval = 0;
                    clearInterval(serverDatabaseInterval);
                    serverDatabaseInterval = 0;

                    captureElement('#app-loader').style.display = 'block';
                    sendRequest({
                        method: "GET",
                        url: appHost + 'system/tracking/backupData/' + captureElement('#databaseStorage').value + '/' + captureElement('#databaseBackup').value,
                        async: true,
                        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                    }, function (response: any) {
                        captureElement('#database-data-btn').textContent = captureElement('#database-data-btn').textContent + 'd';
                        setTimeout(function () {
                            captureElement('#database-data-btn').textContent = captureElement('#database-data-btn').textContent.slice(0, -1);
                        }, 2000);
                        captureElement('#app-loader').style.display = 'none';
                        showMessage(response, captureElement("#message3"));
                    });
                });

                serverDatabaseInterval = setInterval(function () {
                }, 1000);
                sendRequest({
                    method: "GET",
                    url: appHost + 'system/tracking/getServerDatabases',
                    async: true,
                    header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                }, function (response: any) {
                    if (response.length !== 0 && IsJsonString(response)) {
                        if (JSON.parse(response).message === undefined) {
                            if (JSON.parse(response).length !== 0) {
                                captureElement("#table-view-data-body").textContent = '';
                                let slNum = 1;
                                let view = createElement([{'table': {'class': 'table table-bottom-border-only table-condensed table-striped'}}]);
                                let viewBody = createElement([{'tbody': {}}]);
                                view.appendChild(viewBody);

                                JSON.parse(response).forEach(function (server: any) {
                                    let currentSLNum: any = slNum++;
                                    let viewBodyRow = createElement([{
                                        'tr': {
                                            'data-server': server.name,
                                            'data-db': server.db,
                                            'data-user': server.user,
                                            'data-password': server.password,
                                        }
                                    }]);
                                    /*viewBodyRow.addEventListener('click', function () {
                                        captureElement('#app-loader').style.display = 'block';
                                        sendRequest({
                                            method: "POST",
                                            url: appHost + 'system/tracking/dbServerStatus',
                                            async: true,
                                            header: [{
                                                name: "Content-type",
                                                value: "application/json;charset=UTF-8"
                                            }],
                                            data: {
                                                security_code: 1,
                                                server: server.name,
                                                db: server.db,
                                                user: server.user,
                                                password: server.password,
                                            },
                                        }, function (response: any) {
                                            captureElement('#app-loader').style.display = 'none';
                                            showMessage(response, captureElement("#message"));
                                            console.log(response);
                                        });
                                    });*/
                                    viewBody.appendChild(viewBodyRow);

                                    let viewBodyRowTd1 = createElement([{'td': {}}]);
                                    viewBodyRowTd1.textContent = currentSLNum;
                                    viewBodyRow.appendChild(viewBodyRowTd1);

                                    let viewBodyRowTd2 = createElement([{'td': {}}]);
                                    viewBodyRowTd2.textContent = server.name;
                                    viewBodyRow.appendChild(viewBodyRowTd2);

                                    let viewBodyRowTd3 = createElement([{'td': {}}]);
                                    viewBodyRowTd3.textContent = server.user;
                                    viewBodyRow.appendChild(viewBodyRowTd3);

                                    let viewBodyRowTd4 = createElement([{'td': {}}]);
                                    viewBodyRowTd4.textContent = server.db;
                                    viewBodyRow.appendChild(viewBodyRowTd4);

                                    let viewBodyRowTd5 = createElement([{'td': {}}]);
                                    viewBodyRowTd5.textContent = server.password;
                                    viewBodyRow.appendChild(viewBodyRowTd5);

                                    let viewBodyRowTd6 = createElement([{'td': {}}]);
                                    viewBodyRow.appendChild(viewBodyRowTd6);
                                    let viewBodyRowTd6a0 = createElement([{
                                        'a': {
                                            'href': 'javascript:void(0);',
                                            'class': 'button button-xs button-primary',
                                        }
                                    }]);
                                    viewBodyRowTd6a0.addEventListener('click', function () {
                                        captureElement('#app-loader').style.display = 'block';
                                        sendRequest({
                                            method: "POST",
                                            url: appHost + 'system/tracking/dbConnectionTest',
                                            async: true,
                                            header: [{
                                                name: "Content-type",
                                                value: "application/json;charset=UTF-8"
                                            }],
                                            data: {
                                                security_code: 1,
                                                server: server.name,
                                                user: server.user,
                                                password: server.password,
                                                db: server.db,
                                            },
                                        }, function (response: any) {
                                            if (response.length !== 0 && IsJsonString(response)) {
                                                if (JSON.parse(response).length !== 0) {
                                                    if (JSON.parse(response).message === 'connected') {
                                                        window.open(appHost + 'system/tracking/view/' + server.db, '_blank');
                                                    }
                                                }
                                            }
                                            captureElement('#app-loader').style.display = 'none';
                                            showMessage(response, captureElement("#message"));
                                        });
                                    });
                                    viewBodyRowTd6.appendChild(viewBodyRowTd6a0);
                                    let viewBodyRowTd6a0i1 = createElement([{
                                        'i': {
                                            'class': 'fa fa-eye',
                                        }
                                    }]);
                                    viewBodyRowTd6a0.appendChild(viewBodyRowTd6a0i1);
                                    let viewBodyRowTd6a1 = createElement([{
                                        'a': {
                                            'href': 'javascript:void(0);',
                                            'class': 'button button-xs button-success',
                                        }
                                    }]);
                                    viewBodyRowTd6a1.addEventListener('click', function () {
                                        captureElement('#message2').innerHTML = '';
                                        captureElement('#modal01').style.display = 'block';
                                        captureElement('#databaseEditMode').textContent = 'Edit';
                                        captureElement('#database-data-btn').innerHTML = 'Update';
                                        captureElement('#databaseID').value = server.id;
                                        captureElement('#databaseServer').value = server.name;
                                        captureElement('#databaseUser').value = server.user;
                                        captureElement('#databaseName').value = server.db;
                                        captureElement('#databasePassword').value = server.password;
                                    });
                                    viewBodyRowTd6.appendChild(viewBodyRowTd6a1);
                                    let viewBodyRowTd6a1i1 = createElement([{
                                        'i': {
                                            'class': 'fa fa-edit',
                                        }
                                    }]);
                                    viewBodyRowTd6a1.appendChild(viewBodyRowTd6a1i1);
                                    let viewBodyRowTd6a2 = createElement([{
                                        'a': {
                                            'href': 'javascript:void(0);',
                                            'class': 'button button-xs button-danger',
                                        }
                                    }]);
                                    viewBodyRowTd6a2.addEventListener('click', function () {
                                        captureElement('#app-loader').style.display = 'block';
                                        sendRequest({
                                            method: "POST",
                                            url: appHost + 'system/tracking/deleteServerDatabase',
                                            async: true,
                                            header: [{
                                                name: "Content-type",
                                                value: "application/json;charset=UTF-8"
                                            }],
                                            data: {
                                                security_code: 1, id: server.id,
                                            },
                                        }, function (response: any) {
                                            captureElement('#app-loader').style.display = 'none';
                                            showMessage(response, captureElement("#message"));
                                        });
                                    });
                                    viewBodyRowTd6.appendChild(viewBodyRowTd6a2);
                                    let viewBodyRowTd6a2i1 = createElement([{
                                        'i': {
                                            'class': 'fa fa-trash',
                                        }
                                    }]);
                                    viewBodyRowTd6a2.appendChild(viewBodyRowTd6a2i1);

                                });
                                captureElement("#table-view-data-body").appendChild(view);
                                captureElement("#table-view-data-body").style = 'padding:0;';
                            } else {
                                captureElement("#table-view-data-body").textContent = 'No database found';
                            }
                        } else {
                            showMessage(response, captureElement("#message"));
                        }
                    }
                });
            }

            if (__url.indexOf('tracking/view') !== -1) {
                if (captureElement('#table-view-tables') !== undefined) {
                    setInterval(function () {
                    }, 1000);
                    sendRequest({
                        method: "GET",
                        url: appHost + 'system/tracking/getTables/' + captureElement("#dbInfoDb").value,
                        async: true,
                        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                    }, function (response: any) {
                        if (response.length !== 0 && IsJsonString(response)) {
                            if (JSON.parse(response).message === undefined) {
                                if (JSON.parse(response).length !== 0) {
                                    captureElement("#table-view-datatable-body").textContent = '';
                                    let slNum = 1;
                                    let view = createElement([{'table': {'class': 'table table-bottom-border-only table-condensed table-striped'}}]);
                                    let viewBody = createElement([{'tbody': {}}]);
                                    view.appendChild(viewBody);
                                    /*old version*/
                                    /*JSON.parse(response).forEach(function (table: any) {
                                        let currentSLNum: any = slNum++;
                                        let viewBodyRow = createElement([{'tr': {}}]);
                                        viewBody.appendChild(viewBodyRow);

                                        let viewBodyRowTd1 = createElement([{'td': {}}]);
                                        viewBodyRowTd1.textContent = currentSLNum;
                                        viewBodyRow.appendChild(viewBodyRowTd1);

                                        let viewBodyRowTd2 = createElement([{'td': {}}]);
                                        let nname;
                                        viewBodyRowTd2.textContent = (nname = table.TABLE_NAME.replace('msu_', '').substr(0, 20), (nname.length > 19) ? nname + '...' : nname);
                                        viewBodyRow.appendChild(viewBodyRowTd2);

                                        let viewBodyRowTd3 = createElement([{'td': {}}]);
                                        viewBodyRowTd3.textContent = table.TABLE_ROWS;
                                        viewBodyRow.appendChild(viewBodyRowTd3);

                                        let viewBodyRowTd4 = createElement([{'td': {}}]);
                                        let nsize;
                                        viewBodyRowTd4.textContent = (table.Size > 1024) ? (nsize = (table.Size / 1024), (nsize > 1024) ? (nsize / 1024).toFixed(2) + ' MB' : nsize.toFixed(2) + ' KB') : table.Size.toFixed(2) + ' B';
                                        viewBodyRow.appendChild(viewBodyRowTd4);

                                        let viewBodyRowTd5 = createElement([{'td': {}}]);
                                        viewBodyRowTd5.textContent = table.CREATE_TIME.substr(0, 11);
                                        viewBodyRow.appendChild(viewBodyRowTd5);

                                        let viewBodyRowTd6 = createElement([{'td': {}}]);
                                        viewBodyRowTd6.textContent = (table.UPDATE_TIME !== null) ? table.UPDATE_TIME.substr(0, 11) : 'Not Updated';
                                        viewBodyRow.appendChild(viewBodyRowTd6);

                                        let viewBodyRowTd7 = createElement([{'td': {}}]);
                                        viewBodyRowTd7.textContent = table.TABLE_COLLATION.substr(0, 7);
                                        viewBodyRow.appendChild(viewBodyRowTd7);

                                        let viewBodyRowTd8 = createElement([{'td': {}}]);
                                        viewBodyRowTd8.textContent = table.ENGINE;
                                        viewBodyRow.appendChild(viewBodyRowTd8);

                                        let viewBodyRowTdn = createElement([{'td': {}}]);
                                        viewBodyRow.appendChild(viewBodyRowTdn);
                                        let viewBodyRowTdna0 = createElement([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-primary',
                                            }
                                        }]);
                                        viewBodyRowTdna0.addEventListener('click', function () {
                                            captureElement('#app-loader').style.display = 'block';
                                            sendRequest({
                                                method: "POST",
                                                url: appHost + 'system/tracking/dbConnectionTest',
                                                async: true,
                                                header: [{
                                                    name: "Content-type",
                                                    value: "application/json;charset=UTF-8"
                                                }],
                                                data: {
                                                    security_code: 1,
                                                    server: captureElement('#dbInfoServer').value,
                                                    user: captureElement('#dbInfoUser').value,
                                                    password: captureElement('#dbInfoPassword').value,
                                                    db: captureElement('#dbInfoDb').value,
                                                },
                                            }, function (response: any) {
                                                if (response.length !== 0 && IsJsonString(response)) {
                                                    if (JSON.parse(response).length !== 0) {
                                                        if (JSON.parse(response).message === 'connected') {
                                                            window.open(appHost + 'system/tracking/viewDbTable/' + captureElement('#dbInfoDb').value + '/' + table.TABLE_NAME.replace('msu_', ''), '_self');
                                                        }
                                                    }
                                                }
                                                captureElement('#app-loader').style.display = 'none';
                                                showMessage(response, captureElement("#message"));
                                            });
                                        });
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                        let viewBodyRowTdna0i1 = createElement([{
                                            'i': {
                                                'class': 'fa fa-eye',
                                            }
                                        }]);
                                        viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                        let viewBodyRowTdna1 = createElement([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-success',
                                            }
                                        }]);
                                        /!*viewBodyRowTdna1.addEventListener('click', function () {
                                            captureElement('#message2').innerHTML = '';
                                            captureElement('#modal01').style.display = 'block';
                                            captureElement('#databaseEditMode').textContent = 'Edit';
                                            captureElement('#database-data-btn').innerHTML = 'Update';
                                            captureElement('#databaseID').value = datatable.id;
                                            captureElement('#databaseServer').value = datatable.name;
                                            captureElement('#databaseUser').value = datatable.user;
                                            captureElement('#databaseName').value = datatable.db;
                                            captureElement('#databasePassword').value = datatable.password;
                                        });*!/
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                        let viewBodyRowTdna1i1 = createElement([{
                                            'i': {
                                                'class': 'fa fa-edit',
                                            }
                                        }]);
                                        viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                        let viewBodyRowTdna2 = createElement([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-danger',
                                            }
                                        }]);
                                        viewBodyRowTdna2.addEventListener('click', function () {
                                            captureElement('#app-loader').style.display = 'block';
                                            sendRequest({
                                                method: "POST",
                                                url: appHost + 'system/tracking/deleteTable',
                                                async: true,
                                                header: [{
                                                    name: "Content-type",
                                                    value: "application/json;charset=UTF-8"
                                                }],
                                                data: {
                                                    security_code: 1,
                                                    server: captureElement('#dbInfoServer').value,
                                                    db: captureElement('#dbInfoDb').value,
                                                    user: captureElement('#dbInfoUser').value,
                                                    password: captureElement('#dbInfoPassword').value,
                                                    table: table.TABLE_NAME.replace('msu_', ''),
                                                },
                                            }, function (response: any) {
                                                captureElement('#app-loader').style.display = 'none';
                                                showMessage(response, captureElement("#message"));
                                            });
                                        });
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                        let viewBodyRowTdna2i1 = createElement([{
                                            'i': {
                                                'class': 'fa fa-trash',
                                            }
                                        }]);
                                        viewBodyRowTdna2.appendChild(viewBodyRowTdna2i1);

                                    });*/

                                    /*new version*/
                                    JSON.parse(response).forEach(function (table: any) {
                                        let currentSLNum: any = slNum++;
                                        let viewBodyRow = createElement([{'tr': {}}]);
                                        viewBody.appendChild(viewBodyRow);

                                        let viewBodyRowTd1 = createElement([{'td': {}}]);
                                        viewBodyRowTd1.textContent = currentSLNum;
                                        viewBodyRow.appendChild(viewBodyRowTd1);

                                        let viewBodyRowTd2 = createElement([{'td': {}}]);
                                        let nname;
                                        viewBodyRowTd2.textContent = (nname = table.Name.replace('msu_', '').substr(0, 20), (nname.length > 19) ? nname + '...' : nname);
                                        viewBodyRow.appendChild(viewBodyRowTd2);

                                        let viewBodyRowTd3 = createElement([{'td': {}}]);
                                        viewBodyRowTd3.textContent = table.Rows;
                                        viewBodyRow.appendChild(viewBodyRowTd3);

                                        let viewBodyRowTd4 = createElement([{'td': {}}]);
                                        let nsize;
                                        viewBodyRowTd4.textContent = (table.Data_length > 1024) ? (nsize = (table.Data_length / 1024), (nsize > 1024) ? (nsize / 1024).toFixed(2) + ' MB' : nsize.toFixed(2) + ' KB') : table.Data_length.toFixed(2) + ' B';
                                        viewBodyRow.appendChild(viewBodyRowTd4);

                                        let viewBodyRowTd5 = createElement([{'td': {}}]);
                                        viewBodyRowTd5.textContent = table.Create_time.substr(0, 11);
                                        viewBodyRow.appendChild(viewBodyRowTd5);

                                        let viewBodyRowTd6 = createElement([{'td': {}}]);
                                        viewBodyRowTd6.textContent = (table.Update_time !== null) ? table.Update_time.substr(0, 11) : 'Not Updated';
                                        viewBodyRow.appendChild(viewBodyRowTd6);

                                        let viewBodyRowTd7 = createElement([{'td': {}}]);
                                        viewBodyRowTd7.textContent = table.Collation.substr(0, 7);
                                        viewBodyRow.appendChild(viewBodyRowTd7);

                                        let viewBodyRowTd8 = createElement([{'td': {}}]);
                                        viewBodyRowTd8.textContent = table.Engine;
                                        viewBodyRow.appendChild(viewBodyRowTd8);

                                        let viewBodyRowTdn = createElement([{'td': {}}]);
                                        viewBodyRow.appendChild(viewBodyRowTdn);
                                        let viewBodyRowTdna0 = createElement([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-primary',
                                            }
                                        }]);
                                        viewBodyRowTdna0.addEventListener('click', function () {
                                            captureElement('#app-loader').style.display = 'block';
                                            sendRequest({
                                                method: "POST",
                                                url: appHost + 'system/tracking/dbConnectionTest',
                                                async: true,
                                                header: [{
                                                    name: "Content-type",
                                                    value: "application/json;charset=UTF-8"
                                                }],
                                                data: {
                                                    security_code: 1,
                                                    server: captureElement('#dbInfoServer').value,
                                                    user: captureElement('#dbInfoUser').value,
                                                    password: captureElement('#dbInfoPassword').value,
                                                    db: captureElement('#dbInfoDb').value,
                                                },
                                            }, function (response: any) {
                                                if (response.length !== 0 && IsJsonString(response)) {
                                                    if (JSON.parse(response).length !== 0) {
                                                        if (JSON.parse(response).message === 'connected') {
                                                            window.open(appHost + 'system/tracking/viewDbTable/' + captureElement('#dbInfoDb').value + '/' + table.Name.replace('msu_', ''), '_self');
                                                        }
                                                    }
                                                }
                                                captureElement('#app-loader').style.display = 'none';
                                                showMessage(response, captureElement("#message"));
                                            });
                                        });
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                        let viewBodyRowTdna0i1 = createElement([{
                                            'i': {
                                                'class': 'fa fa-eye',
                                            }
                                        }]);
                                        viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                        let viewBodyRowTdna1 = createElement([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-success',
                                            }
                                        }]);
                                        /*viewBodyRowTdna1.addEventListener('click', function () {
                                            captureElement('#message2').innerHTML = '';
                                            captureElement('#modal01').style.display = 'block';
                                            captureElement('#databaseEditMode').textContent = 'Edit';
                                            captureElement('#database-data-btn').innerHTML = 'Update';
                                            captureElement('#databaseID').value = datatable.id;
                                            captureElement('#databaseServer').value = datatable.name;
                                            captureElement('#databaseUser').value = datatable.user;
                                            captureElement('#databaseName').value = datatable.db;
                                            captureElement('#databasePassword').value = datatable.password;
                                        });*/
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                        let viewBodyRowTdna1i1 = createElement([{
                                            'i': {
                                                'class': 'fa fa-edit',
                                            }
                                        }]);
                                        viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                        let viewBodyRowTdna2 = createElement([{
                                            'a': {
                                                'href': 'javascript:void(0);',
                                                'class': 'button button-xs button-danger',
                                            }
                                        }]);
                                        viewBodyRowTdna2.addEventListener('click', function () {
                                            captureElement('#app-loader').style.display = 'block';
                                            sendRequest({
                                                method: "POST",
                                                url: appHost + 'system/tracking/deleteTable',
                                                async: true,
                                                header: [{
                                                    name: "Content-type",
                                                    value: "application/json;charset=UTF-8"
                                                }],
                                                data: {
                                                    security_code: 1,
                                                    server: captureElement('#dbInfoServer').value,
                                                    db: captureElement('#dbInfoDb').value,
                                                    user: captureElement('#dbInfoUser').value,
                                                    password: captureElement('#dbInfoPassword').value,
                                                    table: table.TABLE_NAME.replace('msu_', ''),
                                                },
                                            }, function (response: any) {
                                                captureElement('#app-loader').style.display = 'none';
                                                showMessage(response, captureElement("#message"));
                                            });
                                        });
                                        viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                        let viewBodyRowTdna2i1 = createElement([{
                                            'i': {
                                                'class': 'fa fa-trash',
                                            }
                                        }]);
                                        viewBodyRowTdna2.appendChild(viewBodyRowTdna2i1);

                                    });

                                    captureElement("#table-view-datatable-body").appendChild(view);
                                    captureElement("#table-view-datatable-body").style = 'padding:0;height: 420px;';
                                } else {
                                    captureElement("#table-view-datatable-body").textContent = 'No table found';
                                }
                            } else {
                                showMessage(response, captureElement("#message"));
                            }
                        }
                    });
                }

                if (captureElement("#table-view-datatable") !== undefined && captureElement("#table-view-datatable-body") !== undefined) {
                    captureElement('#show-create-table').addEventListener('click', function () {
                        captureElement('#app-loader').style.display = 'block';
                        sendRequest({
                            method: "POST",
                            url: appHost + 'system/tracking/showCreateTable',
                            async: true,
                            header: [{
                                name: "Content-type",
                                value: "application/json;charset=UTF-8"
                            }],
                            data: {
                                security_code: 1,
                                server: captureElement('#dbInfoServer').value,
                                db: captureElement('#dbInfoDb').value,
                                user: captureElement('#dbInfoUser').value,
                                password: captureElement('#dbInfoPassword').value,
                                table: captureElement('#runtimeTableName').value,
                            },
                        }, function (response: any) {
                            captureElement('#app-loader').style.display = 'none';
                            showMessage(response.replace(/\\n/g, ''), captureElement("#message"));
                        });
                    });
                    captureElement('#rename-table').addEventListener('click', function () {
                        captureElement('#app-loader').style.display = 'block';
                        sendRequest({
                            method: "POST",
                            url: appHost + 'system/tracking/renameTable',
                            async: true,
                            header: [{
                                name: "Content-type",
                                value: "application/json;charset=UTF-8"
                            }],
                            data: {
                                security_code: 1,
                                server: captureElement('#dbInfoServer').value,
                                db: captureElement('#dbInfoDb').value,
                                user: captureElement('#dbInfoUser').value,
                                password: captureElement('#dbInfoPassword').value,
                                fromTable: captureElement('#fromTable').value,
                                toTable: captureElement('#toTable').value,
                            },
                        }, function (response: any) {
                            captureElement('#app-loader').style.display = 'none';
                            showMessage(response, captureElement("#message"));
                        });
                    });
                    setInterval(function () {
                    }, 1000);
                    sendRequest({
                        method: "GET",
                        url: appHost + 'system/tracking/getTableData/' + captureElement("#dbInfoDb").value + '/' + captureElement("#runtimeTableName").value,
                        async: true,
                        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                    }, function (response: any) {
                        if (response.length !== 0 && IsJsonString(response)) {
                            if (JSON.parse(response).message === undefined) {
                                if (JSON.parse(response).length !== 0) {
                                    captureElement("#table-view-datatable-body").textContent = '';
                                    let slNum = 1;
                                    let view = createElement([{'table': {'class': 'table table-bottom-border-only table-condensed table-striped'}}]);
                                    let viewBody = createElement([{'tbody': {}}]);
                                    view.appendChild(viewBody);
                                    if (captureElement('#table-view-app-databases') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let viewBodyRowTd2 = createElement([{'td': {}}]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);

                                            let viewBodyRowTd3 = createElement([{'td': {}}]);
                                            viewBodyRowTd3.textContent = datatable.db;
                                            viewBodyRow.appendChild(viewBodyRowTd3);

                                            let viewBodyRowTd4 = createElement([{'td': {}}]);
                                            viewBodyRowTd4.textContent = datatable.user;
                                            viewBodyRow.appendChild(viewBodyRowTd4);

                                            let viewBodyRowTd5 = createElement([{'td': {}}]);
                                            viewBodyRowTd5.textContent = datatable.password;
                                            viewBodyRow.appendChild(viewBodyRowTd5);

                                            let viewBodyRowTd6 = createElement([{'td': {}}]);
                                            viewBodyRowTd6.textContent = datatable.last_updated_date_time;
                                            viewBodyRow.appendChild(viewBodyRowTd6);

                                            let viewBodyRowTd8 = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd8a0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTd8a0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a0);
                                            let viewBodyRowTd8a0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTd8a0.appendChild(viewBodyRowTd8a0i1);
                                            let viewBodyRowTd8a1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTd8a1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a1);
                                            let viewBodyRowTd8a1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTd8a1.appendChild(viewBodyRowTd8a1i1);
                                            let viewBodyRowTd8a2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTd8a2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTd8a2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }
                                    if (captureElement('#table-view-app-licence-payment') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let viewBodyRowTd2 = createElement([{'td': {}}]);
                                            viewBodyRowTd2.textContent = datatable.user_id;
                                            viewBodyRow.appendChild(viewBodyRowTd2);

                                            let viewBodyRowTd3 = createElement([{'td': {}}]);
                                            viewBodyRowTd3.textContent = datatable.app_id;
                                            viewBodyRow.appendChild(viewBodyRowTd3);

                                            let viewBodyRowTd4 = createElement([{'td': {}}]);
                                            viewBodyRowTd4.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(viewBodyRowTd4);

                                            let viewBodyRowTd5 = createElement([{'td': {}}]);
                                            viewBodyRowTd5.textContent = datatable.payment_method_id.substr(0, 10) + '...';
                                            viewBodyRow.appendChild(viewBodyRowTd5);

                                            let viewBodyRowTd6 = createElement([{'td': {}}]);
                                            viewBodyRowTd6.textContent = datatable.token.substr(0, 10) + '...';
                                            viewBodyRow.appendChild(viewBodyRowTd6);

                                            let viewBodyRowTd7 = createElement([{'td': {}}]);
                                            viewBodyRowTd7.textContent = datatable.payment_amount;
                                            viewBodyRow.appendChild(viewBodyRowTd7);

                                            let viewBodyRowTd8 = createElement([{'td': {}}]);
                                            viewBodyRowTd8.textContent = datatable.currency;
                                            viewBodyRow.appendChild(viewBodyRowTd8);

                                            let viewBodyRowTd9 = createElement([{'td': {}}]);
                                            viewBodyRowTd9.textContent = datatable.payment_type;
                                            viewBodyRow.appendChild(viewBodyRowTd9);

                                            let viewBodyRowTd10 = createElement([{'td': {}}]);
                                            viewBodyRowTd10.textContent = datatable.payment_method.substr(0, 10) + '...';
                                            viewBodyRow.appendChild(viewBodyRowTd10);

                                            let viewBodyRowTd11 = createElement([{'td': {}}]);
                                            viewBodyRowTd11.textContent = datatable.payment_date_time;
                                            viewBodyRow.appendChild(viewBodyRowTd11);


                                            let viewBodyRowTdn = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }
                                    if (captureElement('#table-view-app-social-links') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let viewBodyRowTd2 = createElement([{'td': {}}]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);

                                            let viewBodyRowTd3 = createElement([{'td': {}}]);
                                            viewBodyRowTd3.textContent = datatable.link;
                                            viewBodyRow.appendChild(viewBodyRowTd3);

                                            let viewBodyRowTdn = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }

                                    if (captureElement('#table-view-apps') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let viewBodyRowTd2 = createElement([{'td': {}}]);
                                            viewBodyRowTd2.textContent = datatable.app_name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);

                                            let viewBodyRowTd3 = createElement([{'td': {}}]);
                                            viewBodyRowTd3.textContent = datatable.app_category;
                                            viewBodyRow.appendChild(viewBodyRowTd3);

                                            let viewBodyRowTd4 = createElement([{'td': {}}]);
                                            viewBodyRowTd4.textContent = datatable.app_url;
                                            viewBodyRow.appendChild(viewBodyRowTd4);

                                            let viewBodyRowTd5 = createElement([{'td': {}}]);
                                            viewBodyRowTd5.textContent = datatable.app_icon;
                                            viewBodyRow.appendChild(viewBodyRowTd5);

                                            let viewBodyRowTd6 = createElement([{'td': {}}]);
                                            viewBodyRowTd6.textContent = datatable.app_status;
                                            viewBodyRow.appendChild(viewBodyRowTd6);

                                            let viewBodyRowTd7 = createElement([{'td': {}}]);
                                            viewBodyRowTd7.textContent = datatable.c_status;
                                            viewBodyRow.appendChild(viewBodyRowTd7);

                                            let viewBodyRowTd7n = createElement([{'td': {}}]);
                                            viewBodyRowTd7n.textContent = datatable.quickAccess;
                                            viewBodyRow.appendChild(viewBodyRowTd7n);

                                            let viewBodyRowTd8 = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd8a0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTd8a0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a0);
                                            let viewBodyRowTd8a0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTd8a0.appendChild(viewBodyRowTd8a0i1);
                                            let viewBodyRowTd8a1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTd8a1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a1);
                                            let viewBodyRowTd8a1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTd8a1.appendChild(viewBodyRowTd8a1i1);
                                            let viewBodyRowTd8a2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTd8a2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTd8a2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }
                                    if (captureElement('#table-view-apps-status') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let viewBodyRowTd2 = createElement([{'td': {}}]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);

                                            let viewBodyRowTd3 = createElement([{'td': {}}]);
                                            viewBodyRowTd3.textContent = datatable.version;
                                            viewBodyRow.appendChild(viewBodyRowTd3);

                                            let viewBodyRowTd4 = createElement([{'td': {}}]);
                                            viewBodyRowTd4.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(viewBodyRowTd4);

                                            let viewBodyRowTd5 = createElement([{'td': {}}]);
                                            viewBodyRowTd5.textContent = datatable.os_version.substr(0, 19);
                                            viewBodyRow.appendChild(viewBodyRowTd5);

                                            let viewBodyRowTd6 = createElement([{'td': {}}]);
                                            viewBodyRowTd6.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(viewBodyRowTd6);

                                            let viewBodyRowTd7 = createElement([{'td': {}}]);
                                            viewBodyRowTd7.textContent = datatable.status;
                                            viewBodyRow.appendChild(viewBodyRowTd7);

                                            let viewBodyRowTd7n = createElement([{'td': {}}]);
                                            viewBodyRowTd7n.textContent = datatable.created_date_time/*.substr(0, 10)*/;
                                            viewBodyRow.appendChild(viewBodyRowTd7n);


                                            let viewBodyRowTd8 = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTd8);
                                            let viewBodyRowTd8a0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTd8a0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a0);
                                            let viewBodyRowTd8a0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTd8a0.appendChild(viewBodyRowTd8a0i1);
                                            let viewBodyRowTd8a1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTd8a1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a1);
                                            let viewBodyRowTd8a1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTd8a1.appendChild(viewBodyRowTd8a1i1);
                                            let viewBodyRowTd8a2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTd8a2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTd8.appendChild(viewBodyRowTd8a2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTd8a2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }
                                    if (captureElement('#table-view-apps-licences') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let viewBodyRowTd2 = createElement([{'td': {}}]);
                                            viewBodyRowTd2.textContent = datatable.client_id;
                                            viewBodyRow.appendChild(viewBodyRowTd2);

                                            let viewBodyRowTd3 = createElement([{'td': {}}]);
                                            viewBodyRowTd3.textContent = datatable.app_id;
                                            viewBodyRow.appendChild(viewBodyRowTd3);

                                            let viewBodyRowTd4 = createElement([{'td': {}}]);
                                            viewBodyRowTd4.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(viewBodyRowTd4);

                                            let viewBodyRowTd5 = createElement([{'td': {}}]);
                                            viewBodyRowTd5.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(viewBodyRowTd5);

                                            let viewBodyRowTd6 = createElement([{'td': {}}]);
                                            viewBodyRowTd6.textContent = datatable.licence_type;
                                            viewBodyRow.appendChild(viewBodyRowTd6);

                                            let viewBodyRowTd7 = createElement([{'td': {}}]);
                                            viewBodyRowTd7.textContent = datatable.lLimit;
                                            viewBodyRow.appendChild(viewBodyRowTd7);

                                            let viewBodyRowTd8 = createElement([{'td': {}}]);
                                            viewBodyRowTd8.textContent = datatable.lLimitBase;
                                            viewBodyRow.appendChild(viewBodyRowTd8);

                                            let viewBodyRowTd9 = createElement([{'td': {}}]);
                                            viewBodyRowTd9.textContent = datatable.issue.substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd9);

                                            let viewBodyRowTd10 = createElement([{'td': {}}]);
                                            viewBodyRowTd10.textContent = datatable.lupdate.substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd10);

                                            let viewBodyRowTd11 = createElement([{'td': {}}]);
                                            viewBodyRowTd11.textContent = datatable.lnextupdate.substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd11);

                                            let viewBodyRowTd12 = createElement([{'td': {}}]);
                                            viewBodyRowTd12.textContent = datatable.expire.substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd12);
                                            let viewBodyRowTd13 = createElement([{'td': {}}]);
                                            viewBodyRowTd13.textContent = datatable['created-date-time'].substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd13);


                                            let viewBodyRowTdn = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }
                                    if (captureElement('#table-view-apps-list-installed') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let viewBodyRowTd2 = createElement([{'td': {}}]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);

                                            let viewBodyRowTd3 = createElement([{'td': {}}]);
                                            viewBodyRowTd3.textContent = datatable.version;
                                            viewBodyRow.appendChild(viewBodyRowTd3);

                                            let viewBodyRowTd4 = createElement([{'td': {}}]);
                                            viewBodyRowTd4.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(viewBodyRowTd4);

                                            let viewBodyRowTd5 = createElement([{'td': {}}]);
                                            viewBodyRowTd5.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(viewBodyRowTd5);

                                            let viewBodyRowTd6 = createElement([{'td': {}}]);
                                            viewBodyRowTd6.textContent = (datatable.licence_key !== null) ? '***************' : 'NOT ISSUED';
                                            viewBodyRow.appendChild(viewBodyRowTd6);

                                            let viewBodyRowTd7 = createElement([{'td': {}}]);
                                            viewBodyRowTd7.textContent = (datatable.issue !== null) ? datatable.issue.substr(0, 10) : 'NOT ISSUED';
                                            viewBodyRow.appendChild(viewBodyRowTd7);

                                            let viewBodyRowTd8 = createElement([{'td': {}}]);
                                            viewBodyRowTd8.textContent = (datatable.expire !== null) ? datatable.expire.substr(0, 10) : 'NOT ISSUED';
                                            viewBodyRow.appendChild(viewBodyRowTd8);

                                            let viewBodyRowTd9 = createElement([{'td': {}}]);
                                            viewBodyRowTd9.textContent = datatable['created-date-time'].substr(0, 10);
                                            viewBodyRow.appendChild(viewBodyRowTd9);


                                            let viewBodyRowTdn = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }

                                    if (captureElement('#table-view-block-list') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let viewBodyRowTd2 = createElement([{'td': {}}]);
                                            viewBodyRowTd2.textContent = datatable.ip;
                                            viewBodyRow.appendChild(viewBodyRowTd2);

                                            let viewBodyRowTdn = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }
                                    if (captureElement('#table-view-branches') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let viewBodyRowTd2 = createElement([{'td': {}}]);
                                            viewBodyRowTd2.textContent = datatable.name;
                                            viewBodyRow.appendChild(viewBodyRowTd2);

                                            let viewBodyRowTd3 = createElement([{'td': {}}]);
                                            viewBodyRowTd3.textContent = datatable.status;
                                            viewBodyRow.appendChild(viewBodyRowTd3);

                                            let viewBodyRowTd4 = createElement([{'td': {}}]);
                                            viewBodyRowTd4.textContent = datatable.location;
                                            viewBodyRow.appendChild(viewBodyRowTd4);

                                            let viewBodyRowTdn = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }
                                    if (captureElement('#table-view-branches-user') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let viewBodyRowTd2 = createElement([{'td': {}}]);
                                            viewBodyRowTd2.textContent = datatable.branch;
                                            viewBodyRow.appendChild(viewBodyRowTd2);

                                            let viewBodyRowTd3 = createElement([{'td': {}}]);
                                            viewBodyRowTd3.textContent = datatable.user;
                                            viewBodyRow.appendChild(viewBodyRowTd3);

                                            let viewBodyRowTdn = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }

                                    if (captureElement('#table-view-chat-messages') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let viewBodyRowTd2 = createElement([{'td': {}}]);
                                            viewBodyRowTd2.textContent = datatable.senderID;
                                            viewBodyRow.appendChild(viewBodyRowTd2);

                                            let viewBodyRowTd3 = createElement([{'td': {}}]);
                                            viewBodyRowTd3.textContent = datatable.receiverID;
                                            viewBodyRow.appendChild(viewBodyRowTd3);

                                            let viewBodyRowTd4 = createElement([{'td': {}}]);
                                            viewBodyRowTd4.textContent = datatable.message;
                                            viewBodyRow.appendChild(viewBodyRowTd4);

                                            let viewBodyRowTd5 = createElement([{'td': {}}]);
                                            viewBodyRowTd5.textContent = datatable.time;
                                            viewBodyRow.appendChild(viewBodyRowTd5);

                                            let viewBodyRowTdn = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }
                                    if (captureElement('#table-view-client-browser-info') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let ip_address = createElement([{'td': {}}]);
                                            ip_address.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(ip_address);

                                            let browserNameFull = createElement([{'td': {}}]);
                                            browserNameFull.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(browserNameFull);

                                            /*let browserStatus = createElement([{'td': {}}]);
                                            browserStatus.textContent = datatable.browserStatus;
                                            viewBodyRow.appendChild(browserStatus);*/

                                            /*let browserArchitecture = createElement([{'td': {}}]);
                                            browserArchitecture.textContent = datatable.browserArchitecture;
                                            viewBodyRow.appendChild(browserArchitecture);*/

                                            /*let browserAppVersion = createElement([{'td': {}}]);
                                            browserAppVersion.textContent = datatable.browserAppVersion;
                                            viewBodyRow.appendChild(browserAppVersion);*/

                                            let deviceHardwareConcurrency = createElement([{'td': {}}]);
                                            deviceHardwareConcurrency.textContent = datatable.deviceHardwareConcurrency;
                                            viewBodyRow.appendChild(deviceHardwareConcurrency);
                                            /*
                                                                                        let deviceMemory = createElement([{'td': {}}]);
                                                                                        deviceMemory.textContent = datatable.deviceMemory;
                                                                                        viewBodyRow.appendChild(deviceMemory);*/

                                            let deviceName = createElement([{'td': {}}]);
                                            deviceName.textContent = datatable.deviceName;
                                            viewBodyRow.appendChild(deviceName);

                                            let deviceScreenWidth = createElement([{'td': {}}]);
                                            deviceScreenWidth.textContent = datatable.deviceScreenWidth;
                                            viewBodyRow.appendChild(deviceScreenWidth);

                                            let deviceScreenHeight = createElement([{'td': {}}]);
                                            deviceScreenHeight.textContent = datatable.deviceScreenHeight;
                                            viewBodyRow.appendChild(deviceScreenHeight);

                                            let userAgent = createElement([{'td': {'style': 'cursor:pointer'}}]);
                                            userAgent.textContent = '*****';
                                            userAgent.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable.userAgent), captureElement('#message'));
                                            });
                                            viewBodyRow.appendChild(userAgent);

                                            let created_date_time = createElement([{'td': {}}]);
                                            created_date_time.textContent = datatable.created_date_time;
                                            viewBodyRow.appendChild(created_date_time);

                                            let viewBodyRowTdn = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }
                                    if (captureElement('#table-view-client-ip-info') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            /*

                                                {"id":769,"ip_address":"103.230.105.19","is_eu":"","city":"Dhaka","region":"Dhaka Division","region_code":"C","country_name":"Bangladesh",
                                                    "country_code":"BD","continent_name":"Asia","continent_code":"AS","latitude":"23.8175","longitude":"90.4096","postal":"1206",
                                                    "calling_code":"880","flag":"https://ipdata.co/flags/bd.png","emoji_flag":"🇧🇩","emoji_unicode":"U+1F1E7 U+1F1E9","asn_asn":"AS45925",
                                                    "asn_name":"ASN For Teletalk Bangladesh Ltd.","asn_domain":"teletalk.com.bd","asn_route":"103.230.105.0/24","asn_type":"isp",
                                                    "languages_name":"Bengali,","languages_native":"বাংলা,","currency_name":"Bangladeshi Taka","currency_code":"BDT","currency_symbol":"Tk",
                                                    "currency_native":"৳","currency_plural":"Bangladeshi takas","time_zone_name":"Asia/Dhaka","time_zone_abbr":"+06","time_zone_offset":"+0600",
                                                    "time_zone_is_dst":"","time_zone_current_time":"2020-07-07T13:13:24.904182+06:00","created_date_time":"2020-07-07 13:13:25"}

                                            */

                                            let ip_address = createElement([{'td': {}}]);
                                            ip_address.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(ip_address);

                                            let city = createElement([{'td': {}}]);
                                            city.textContent = datatable.city;
                                            viewBodyRow.appendChild(city);

                                            let country_name = createElement([{'td': {}}]);
                                            country_name.textContent = datatable.country_name;
                                            viewBodyRow.appendChild(country_name);

                                            let continent_name = createElement([{'td': {}}]);
                                            continent_name.textContent = datatable.continent_name;
                                            viewBodyRow.appendChild(continent_name);

                                            let location = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(location);

                                            let maplink = createElement([{
                                                'a': {
                                                    'href': 'https://www.google.com/maps/@' + datatable.latitude + ',' + datatable.longitude + ',19z',
                                                    'class': 'link',
                                                }
                                            }]);
                                            location.appendChild(maplink);

                                            let maplinkIcon = createElement([{
                                                'img': {
                                                    'src': app.content.folder.images + 'map-pin-marker-circle.svg',
                                                    'style': 'width:20px;height:20px;'
                                                }
                                            }])
                                            maplink.appendChild(maplinkIcon);

                                            let postal = createElement([{'td': {}}]);
                                            postal.textContent = datatable.postal;
                                            viewBodyRow.appendChild(postal);

                                            let calling_code = createElement([{'td': {}}]);
                                            calling_code.textContent = datatable.calling_code;
                                            viewBodyRow.appendChild(calling_code);

                                            let emoji_flag = createElement([{'td': {}}]);
                                            emoji_flag.textContent = datatable.emoji_flag;
                                            viewBodyRow.appendChild(emoji_flag);

                                            let asn_asn = createElement([{'td': {}}]);
                                            asn_asn.textContent = datatable.asn_asn;
                                            viewBodyRow.appendChild(asn_asn);

                                            let asn_domain = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(asn_domain);

                                            let asnDomainLink = createElement([{
                                                'a': {
                                                    'href': 'https://' + datatable.asn_domain,
                                                    'class': 'link',
                                                }
                                            }]);
                                            asn_domain.appendChild(asnDomainLink);


                                            let asnDomainLinkIcon = createElement([{
                                                'img': {
                                                    'src': app.content.folder.images + 'navigation.svg',
                                                    'style': 'width:20px;height:20px;'
                                                }
                                            }])
                                            asnDomainLink.appendChild(asnDomainLinkIcon);

                                            let languages_name = createElement([{'td': {}}]);
                                            languages_name.textContent = datatable.languages_name;
                                            viewBodyRow.appendChild(languages_name);

                                            let time_zone_abbr = createElement([{'td': {}}]);
                                            time_zone_abbr.textContent = datatable.time_zone_abbr;
                                            viewBodyRow.appendChild(time_zone_abbr);

                                            let created_date_time = createElement([{'td': {}}]);
                                            created_date_time.textContent = datatable.created_date_time.substr(2, 8);
                                            viewBodyRow.appendChild(created_date_time);

                                            let viewBodyRowTdn = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }
                                    if (captureElement('#table-view-client-update-info') !== undefined) {
                                        JSON.parse(response).forEach(function (datatable: any) {
                                            let currentSLNum: any = slNum++;
                                            let viewBodyRow = createElement([{'tr': {}}]);
                                            viewBody.appendChild(viewBodyRow);

                                            let viewBodyRowTd1 = createElement([{'td': {}}]);
                                            viewBodyRowTd1.textContent = currentSLNum;
                                            viewBodyRow.appendChild(viewBodyRowTd1);

                                            let name = createElement([{'td': {}}]);
                                            name.textContent = datatable.name;
                                            viewBodyRow.appendChild(name);

                                            let version = createElement([{'td': {}}]);
                                            version.textContent = datatable.version;
                                            viewBodyRow.appendChild(version);

                                            let ip_address = createElement([{'td': {}}]);
                                            ip_address.textContent = datatable.ip_address;
                                            viewBodyRow.appendChild(ip_address);

                                            let browserNameFull = createElement([{'td': {}}]);
                                            browserNameFull.textContent = datatable.browserNameFull;
                                            viewBodyRow.appendChild(browserNameFull);

                                            let message = createElement([{'td': {}}]);
                                            message.textContent = datatable.message;
                                            viewBodyRow.appendChild(message);

                                            let created_date_time = createElement([{'td': {}}]);
                                            created_date_time.textContent = datatable.created_date_time;
                                            viewBodyRow.appendChild(created_date_time);

                                            let viewBodyRowTdn = createElement([{'td': {}}]);
                                            viewBodyRow.appendChild(viewBodyRowTdn);
                                            let viewBodyRowTdna0 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-primary',
                                                }
                                            }]);
                                            viewBodyRowTdna0.addEventListener('click', function () {
                                                showMessage(JSON.stringify(datatable), captureElement('#message'));
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna0);
                                            let viewBodyRowTdna0i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-eye',
                                                }
                                            }]);
                                            viewBodyRowTdna0.appendChild(viewBodyRowTdna0i1);
                                            let viewBodyRowTdna1 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-success',
                                                }
                                            }]);
                                            /*viewBodyRowTdna1.addEventListener('click', function () {
                                                captureElement('#message2').innerHTML = '';
                                                captureElement('#modal01').style.display = 'block';
                                                captureElement('#databaseEditMode').textContent = 'Edit';
                                                captureElement('#database-data-btn').innerHTML = 'Update';
                                                captureElement('#databaseID').value = datatable.id;
                                                captureElement('#databaseServer').value = datatable.name;
                                                captureElement('#databaseUser').value = datatable.user;
                                                captureElement('#databaseName').value = datatable.db;
                                                captureElement('#databasePassword').value = datatable.password;
                                            });*/
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna1);
                                            let viewBodyRowTdna1i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-edit',
                                                }
                                            }]);
                                            viewBodyRowTdna1.appendChild(viewBodyRowTdna1i1);
                                            let viewBodyRowTdna2 = createElement([{
                                                'a': {
                                                    'href': 'javascript:void(0);',
                                                    'class': 'button button-xs button-danger',
                                                }
                                            }]);
                                            viewBodyRowTdna2.addEventListener('click', function () {
                                                captureElement('#app-loader').style.display = 'block';
                                                sendRequest({
                                                    method: "POST",
                                                    url: appHost + 'system/tracking/deleteTableRow',
                                                    async: true,
                                                    header: [{
                                                        name: "Content-type",
                                                        value: "application/json;charset=UTF-8"
                                                    }],
                                                    data: {
                                                        security_code: 1,
                                                        id: datatable.id,
                                                        server: captureElement('#dbInfoServer').value,
                                                        db: captureElement('#dbInfoDb').value,
                                                        user: captureElement('#dbInfoUser').value,
                                                        password: captureElement('#dbInfoPassword').value,
                                                        table: captureElement('#runtimeTableName').value,
                                                        rowId: datatable.id,
                                                    },
                                                }, function (response: any) {
                                                    captureElement('#app-loader').style.display = 'none';
                                                    showMessage(response, captureElement("#message"));
                                                });
                                            });
                                            viewBodyRowTdn.appendChild(viewBodyRowTdna2);
                                            let viewBodyRowTd8a2i1 = createElement([{
                                                'i': {
                                                    'class': 'fa fa-trash',
                                                }
                                            }]);
                                            viewBodyRowTdna2.appendChild(viewBodyRowTd8a2i1);

                                        });
                                    }


                                    captureElement("#table-view-datatable-body").appendChild(view);
                                    captureElement("#table-view-datatable-body").style = (JSON.parse(response).length > 10) ? 'padding:0;height: 420px;' : 'padding:0;';
                                } else {
                                    captureElement("#table-view-datatable-body").textContent = 'No data found';
                                }
                            } else {
                                showMessage(response, captureElement("#message"));
                            }
                        }
                    });

                    /*
                                        if (captureElement('#databaseEditMode')) {
                                            captureElement('#database-data-btn').innerHTML = 'Save';
                                            captureElement('#database-reset-btn').innerHTML = 'Reset';
                                        }
                                        captureElement('#server-db-add-btn').addEventListener('click', function () {
                                            captureElement('#message2').innerHTML = '';
                                            captureElement('#modal01').style.display = 'block';
                                            captureElement('#databaseEditMode').innerHTML = 'Add new';
                                            captureElement('#databaseID').value = '';
                                            captureElement('#databaseServer').value = '';
                                            captureElement('#databaseUser').value = '';
                                            captureElement('#databaseName').value = '';
                                            captureElement('#databasePassword').value = '';
                                        });

                                        //save data by clicking data button
                                        captureElement('#database-data-btn').addEventListener('click', function () {
                                            sendRequest({
                                                method: "POST",
                                                url: appHost + 'system/tracking/manageServerDatabase',
                                                async: true,
                                                header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                                                data: {
                                                    security_code: 1,
                                                    id: captureElement('#databaseID').value,
                                                    name: captureElement('#databaseServer').value,
                                                    user: captureElement('#databaseUser').value,
                                                    db: captureElement('#databaseName').value,
                                                    password: captureElement('#databasePassword').value,
                                                    btnName: captureElement('#database-data-btn').textContent
                                                },
                                            }, function (response: any) {
                                                captureElement('#database-data-btn').textContent = captureElement('#database-data-btn').textContent + 'd';
                                                setTimeout(function () {
                                                    captureElement('#database-data-btn').textContent = captureElement('#database-data-btn').textContent.slice(0, -1);
                                                }, 2000);
                                                showMessage(response, captureElement("#message2"));
                                            });
                                        });*/
                }
            }
        }

        if (__url.indexOf('webapp') !== -1) {
            if (captureElement("#webapp-data-table") !== undefined) {
                sendRequest({
                    method: "POST",
                    url: appHost + 'system/webapp/getWebAppInfo',
                    async: true,
                    header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                }, function (response: any) {
                    if (response.length !== 0 && IsJsonString(response)) {
                        if (JSON.parse(response).length !== 0) {
                            captureElement("#webapp-data-table").textContent = '';
                            JSON.parse(response).forEach(function (webapp: any) {
                                /*let favLocalLocate = webapp.icon_local_dir;*/

                                let editor = captureElement('#webapp-edit-btn');
                                editor.setAttribute('data-id', webapp.id);
                                editor.setAttribute('data-name', webapp.name);
                                editor.setAttribute('data-description', webapp.description);
                                editor.setAttribute('data-company', webapp.company);
                                editor.setAttribute('data-filesLocate', webapp.doc_root);
                                editor.setAttribute('data-domainLocate', webapp.http_host_add);
                                editor.setAttribute('data-IPLocate', webapp.http_host_ip);

                                let web_app_info_box = createElement([{'div': {'class': 'web-app-info-box'}}]);
                                let web_app_info_box_nav = createElement([{'div': {'class': 'web-app-info-box-nav'}}]);
                                web_app_info_box.appendChild(web_app_info_box_nav);

                                let ul = createElement([{'ul': {}}]);
                                web_app_info_box_nav.appendChild(ul);
                                let li_overview = createElement([{
                                    'li': {
                                        'id': 'overview',
                                        'style': 'background: #93c'
                                    }
                                }]);
                                li_overview.innerHTML = '<i class="fas fa-eye"></i><span>Overview</span>';
                                ul.appendChild(li_overview);

                                let li_basicInfo = createElement([{'li': {'id': 'basicInfo'}}]);
                                li_basicInfo.innerHTML = '<i class="fab fa-app-store-ios"></i><span>Basic Info</span>';
                                ul.appendChild(li_basicInfo);

                                let li_databaseInfo = createElement([{'li': {'id': 'databaseInfo'}}]);
                                li_databaseInfo.innerHTML = '<i class="fas fa-database"></i><span>Databases Info</span>';
                                ul.appendChild(li_databaseInfo);

                                let li_filesInfo = createElement([{'li': {'id': 'filesInfo'}}]);
                                li_filesInfo.innerHTML = '<i class="fas fa-file-alt"></i><span>Files Info</span>';
                                ul.appendChild(li_filesInfo);

                                let li_mediaInfo = createElement([{'li': {'id': 'mediaInfo'}}]);
                                li_mediaInfo.innerHTML = '<i class="fas fa-file-image"></i><span>Media Info</span>';
                                ul.appendChild(li_mediaInfo);

                                let li_socialInfo = createElement([{'li': {'id': 'socialInfo'}}]);
                                li_socialInfo.innerHTML = '<i class="fas fa-user-friends"></i><span>Social Info</span>';
                                ul.appendChild(li_socialInfo);

                                let web_app_info_box_content = createElement([{'div': {'class': 'web-app-info-box-content'}}]);
                                web_app_info_box.appendChild(web_app_info_box_content);


                                let web_app_info_box_content_overview = createElement([{
                                    'div': {
                                        'class': 'web-app-info-content-overview',
                                        'id': 'web-app-info-content-overview'
                                    }
                                }]);
                                web_app_info_box_content.appendChild(web_app_info_box_content_overview);

                                let content_overview_table = createElement([{
                                    'table': {
                                        'class': 'table',
                                        'style': 'text-align: center;'
                                    }
                                }]);
                                web_app_info_box_content_overview.appendChild(content_overview_table);

                                let content_overview_table_tr1 = createElement([{'tr': {}}]);
                                content_overview_table.appendChild(content_overview_table_tr1);

                                let content_overview_table_tr1_td = createElement([{'td': {}}]);
                                content_overview_table_tr1.appendChild(content_overview_table_tr1_td);

                                let content_overview_table_tr1_favicon = createElement([{
                                    'img': {
                                        'alt': 'Favicon',
                                        'src': webapp.icon_remote_dir + webapp.favicon,
                                        'style': 'width: 100px;height: 100px;'
                                    }
                                }]);
                                content_overview_table_tr1_td.appendChild(content_overview_table_tr1_favicon);

                                let content_overview_table_tr2 = createElement([{'tr': {}}]);
                                content_overview_table.appendChild(content_overview_table_tr2);

                                let content_overview_table_tr2_td = createElement([{'td': {}}]);
                                content_overview_table_tr2.appendChild(content_overview_table_tr2_td);

                                let content_overview_table_tr2_webapp_name = createElement([{
                                    'a': {
                                        'href': webapp.http_host_add,
                                        'target': '_blank'
                                    }
                                }]);
                                content_overview_table_tr2_webapp_name.textContent = webapp.name;
                                content_overview_table_tr2_td.appendChild(content_overview_table_tr2_webapp_name);

                                let content_overview_table_tr21 = createElement([{'tr': {}}]);
                                content_overview_table.appendChild(content_overview_table_tr21);

                                let content_overview_table_tr21_td = createElement([{'td': {}}]);
                                content_overview_table_tr21.appendChild(content_overview_table_tr21_td);

                                let content_overview_table_tr21_webapp_company = createElement([{
                                    'a': {
                                        'href': appHost,
                                        'target': '_blank'
                                    }
                                }]);
                                content_overview_table_tr21_webapp_company.textContent = webapp.company;
                                content_overview_table_tr21_td.appendChild(content_overview_table_tr21_webapp_company);

                                let content_overview_table_tr3 = createElement([{'tr': {}}]);
                                content_overview_table.appendChild(content_overview_table_tr3);

                                let content_overview_table_tr3_td = createElement([{'td': {}}]);
                                content_overview_table_tr3.appendChild(content_overview_table_tr3_td);

                                let content_overview_table_tr3_social_icons = createElement([{
                                    'div': {
                                        'class': 'socials-wrap',
                                        'style': 'margin-top: 2px;width:100%'
                                    }
                                }]);
                                content_overview_table_tr3_td.appendChild(content_overview_table_tr3_social_icons);

                                let content_overview_table_tr3_social_icons_ul = createElement([{'ul': {'id': 'web-app-social-links-icon'}}]);
                                content_overview_table_tr3_social_icons.appendChild(content_overview_table_tr3_social_icons_ul);


                                let web_app_info_box_content_basic = createElement([{
                                    'div': {
                                        'class': 'web-app-info-content-basic',
                                        'id': 'web-app-info-content-basic'
                                    }
                                }]);
                                web_app_info_box_content_basic.innerHTML = 'Basic Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_basic);

                                let content_basic_table = createElement([{'table': {'class': 'table table-bottom-border-only table-condensed'}}]);
                                web_app_info_box_content_basic.appendChild(content_basic_table);

                                let content_basic_table_tr1 = createElement([{'tr': {}}]);
                                content_basic_table.appendChild(content_basic_table_tr1);

                                let content_basic_table_tr1_td1 = createElement([{'td': {}}]);
                                content_basic_table_tr1_td1.textContent = 'Name';
                                content_basic_table_tr1.appendChild(content_basic_table_tr1_td1);

                                let content_basic_table_tr1_td2 = createElement([{'td': {}}]);
                                content_basic_table_tr1_td2.textContent = ':';
                                content_basic_table_tr1.appendChild(content_basic_table_tr1_td2);

                                let content_basic_table_tr1_td3 = createElement([{'td': {}}]);
                                content_basic_table_tr1_td3.textContent = webapp.name;
                                content_basic_table_tr1.appendChild(content_basic_table_tr1_td3);

                                let content_basic_table_tr2 = createElement([{'tr': {}}]);
                                content_basic_table.appendChild(content_basic_table_tr2);

                                let content_basic_table_tr2_td1 = createElement([{'td': {}}]);
                                content_basic_table_tr2_td1.textContent = 'Company';
                                content_basic_table_tr2.appendChild(content_basic_table_tr2_td1);

                                let content_basic_table_tr2_td2 = createElement([{'td': {}}]);
                                content_basic_table_tr2_td2.textContent = ':';
                                content_basic_table_tr2.appendChild(content_basic_table_tr2_td2);

                                let content_basic_table_tr2_td3 = createElement([{'td': {}}]);
                                content_basic_table_tr2_td3.textContent = webapp.company;
                                content_basic_table_tr2.appendChild(content_basic_table_tr2_td3);

                                let content_basic_table_tr3 = createElement([{'tr': {}}]);
                                content_basic_table.appendChild(content_basic_table_tr3);

                                let content_basic_table_tr3_td1 = createElement([{'td': {}}]);
                                content_basic_table_tr3_td1.textContent = 'Description';
                                content_basic_table_tr3.appendChild(content_basic_table_tr3_td1);

                                let content_basic_table_tr3_td2 = createElement([{'td': {}}]);
                                content_basic_table_tr3_td2.textContent = ':';
                                content_basic_table_tr3.appendChild(content_basic_table_tr3_td2);

                                let content_basic_table_tr3_td3 = createElement([{'td': {}}]);
                                content_basic_table_tr3_td3.textContent = webapp.description;
                                content_basic_table_tr3.appendChild(content_basic_table_tr3_td3);


                                let web_app_info_box_content_database = createElement([{
                                    'div': {
                                        'class': 'web-app-info-content-database',
                                        'id': 'web-app-info-content-database',
                                        'style': 'overflow: scroll;height: 600px;',
                                    }
                                }]);
                                web_app_info_box_content_database.innerHTML = 'Databases Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_database);

                                let content_database_table = createElement([{'table': {'class': 'table table-bottom-border-only table-condensed'}}]);
                                web_app_info_box_content_database.appendChild(content_database_table);

                                let content_database_table_thead = createElement([{'thead': {}}]);
                                let content_database_table_tfoot = createElement([{'tfoot': {}}]);
                                content_database_table.appendChild(content_database_table_thead);
                                content_database_table.appendChild(content_database_table_tfoot);

                                let content_database_table_tr1_head = createElement([{'tr': {}}]);
                                let content_database_table_tr2_foot = createElement([{'tr': {}}]);
                                content_database_table_thead.appendChild(content_database_table_tr1_head);
                                content_database_table_tfoot.appendChild(content_database_table_tr2_foot);

                                let content_database_table_tr1_td1 = createElement([{'td': {}}]);
                                content_database_table_tr1_td1.textContent = 'SL';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td1);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td1.cloneNode(true));

                                let content_database_table_tr1_td2 = createElement([{'td': {}}]);
                                content_database_table_tr1_td2.textContent = 'NAME';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td2.cloneNode(true));
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td2);

                                let content_database_table_tr1_td3 = createElement([{'td': {}}]);
                                content_database_table_tr1_td3.textContent = 'CREATE TIME';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td3);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td3.cloneNode(true));

                                let content_database_table_tr1_td4 = createElement([{'td': {}}]);
                                content_database_table_tr1_td4.textContent = 'UPDATE TIME';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td4);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td4.cloneNode(true));

                                let content_database_table_tr1_td5 = createElement([{'td': {}}]);
                                content_database_table_tr1_td5.textContent = 'COLLATION';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td5);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td5.cloneNode(true));

                                let content_database_table_tr1_td6 = createElement([{'td': {}}]);
                                content_database_table_tr1_td6.textContent = 'ENGINE';
                                content_database_table_tr1_head.appendChild(content_database_table_tr1_td6);
                                content_database_table_tr2_foot.appendChild(content_database_table_tr1_td6.cloneNode(true));

                                let content_database_table_tbody = createElement([{'tbody': {'id': 'web-app-tables'}}]);
                                content_database_table.appendChild(content_database_table_tbody);

                                let content_database_table_tr2 = createElement([{'tr': {}}]);
                                content_database_table_tbody.appendChild(content_database_table_tr2);

                                let content_database_table_tr2_td1 = createElement([{
                                    'td': {
                                        'colspan': '7',
                                        'style': 'text-align: center !important;text-transform: none;'
                                    }
                                }]);
                                content_database_table_tr2_td1.textContent = 'Data loading...';
                                content_database_table_tr2.appendChild(content_database_table_tr2_td1);

                                content_database_table.appendChild(content_database_table_tfoot);


                                let web_app_info_box_content_files = createElement([{
                                    'div': {
                                        'class': 'web-app-info-content-files',
                                        'id': 'web-app-info-content-files'
                                    }
                                }]);
                                web_app_info_box_content_files.innerHTML = 'Files Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_files);

                                let content_files_table = createElement([{'table': {'class': 'table table-bottom-border-only table-condensed'}}]);
                                web_app_info_box_content_files.appendChild(content_files_table);

                                let content_files_table_tr1 = createElement([{'tr': {}}]);
                                content_files_table.appendChild(content_files_table_tr1);

                                let content_files_table_tr1_td1 = createElement([{'td': {}}]);
                                content_files_table_tr1_td1.textContent = 'Root Directory';
                                content_files_table_tr1.appendChild(content_files_table_tr1_td1);

                                let content_files_table_tr1_td2 = createElement([{'td': {}}]);
                                content_files_table_tr1_td2.textContent = ':';
                                content_files_table_tr1.appendChild(content_files_table_tr1_td2);

                                let content_files_table_tr1_td3 = createElement([{'td': {}}]);
                                content_files_table_tr1_td3.textContent = webapp.doc_root;
                                content_files_table_tr1.appendChild(content_files_table_tr1_td3);

                                let content_files_table_tr2 = createElement([{'tr': {}}]);
                                content_files_table.appendChild(content_files_table_tr2);

                                let content_files_table_tr2_td1 = createElement([{'td': {}}]);
                                content_files_table_tr2_td1.textContent = 'Domain';
                                content_files_table_tr2.appendChild(content_files_table_tr2_td1);

                                let content_files_table_tr2_td2 = createElement([{'td': {}}]);
                                content_files_table_tr2_td2.textContent = ':';
                                content_files_table_tr2.appendChild(content_files_table_tr2_td2);

                                let content_files_table_tr2_td3 = createElement([{'td': {}}]);
                                content_files_table_tr2_td3.textContent = webapp.http_host_add;
                                content_files_table_tr2.appendChild(content_files_table_tr2_td3);

                                let content_files_table_tr3 = createElement([{'tr': {}}]);
                                content_files_table.appendChild(content_files_table_tr3);

                                let content_files_table_tr3_td1 = createElement([{'td': {}}]);
                                content_files_table_tr3_td1.textContent = 'IP';
                                content_files_table_tr3.appendChild(content_files_table_tr3_td1);

                                let content_files_table_tr3_td2 = createElement([{'td': {}}]);
                                content_files_table_tr3_td2.textContent = ':';
                                content_files_table_tr3.appendChild(content_files_table_tr3_td2);

                                let content_files_table_tr3_td3 = createElement([{'td': {}}]);
                                content_files_table_tr3_td3.textContent = webapp.http_host_ip;
                                content_files_table_tr3.appendChild(content_files_table_tr3_td3);

                                let content_files_table_tr4 = createElement([{'tr': {}}]);
                                content_files_table.appendChild(content_files_table_tr4);

                                let content_files_table_tr4_td1 = createElement([{'td': {}}]);
                                content_files_table_tr4_td1.textContent = 'Favicon';
                                content_files_table_tr4.appendChild(content_files_table_tr4_td1);

                                let content_files_table_tr4_td2 = createElement([{'td': {}}]);
                                content_files_table_tr4_td2.textContent = ':';
                                content_files_table_tr4.appendChild(content_files_table_tr4_td2);

                                let content_files_table_tr4_td3 = createElement([{'td': {}}]);
                                content_files_table_tr4_td3.textContent = webapp.icon_remote_dir;
                                content_files_table_tr4.appendChild(content_files_table_tr4_td3);


                                let web_app_info_box_content_media = createElement([{
                                    'div': {
                                        'class': 'web-app-info-content-media',
                                        'id': 'web-app-info-content-media'
                                    }
                                }]);
                                web_app_info_box_content_media.innerHTML = 'Media Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_media);

                                let content_media_table = createElement([{'table': {'class': 'table table-bottom-border-only table-condensed'}}]);
                                web_app_info_box_content_media.appendChild(content_media_table);

                                let content_media_table_tr1 = createElement([{'tr': {}}]);
                                content_media_table.appendChild(content_media_table_tr1);

                                let content_media_table_tr1_td1 = createElement([{'td': {}}]);
                                content_media_table_tr1_td1.textContent = 'Theme';
                                content_media_table_tr1.appendChild(content_media_table_tr1_td1);

                                let content_media_table_tr1_td2 = createElement([{'td': {}}]);
                                content_media_table_tr1_td2.textContent = ':';
                                content_media_table_tr1.appendChild(content_media_table_tr1_td2);

                                let content_media_table_tr1_td3 = createElement([{'td': {}}]);
                                content_media_table_tr1_td3.textContent = webapp.default_layout;
                                content_media_table_tr1.appendChild(content_media_table_tr1_td3);

                                let content_media_table_tr1_td4 = createElement([{'td': {'rowspan': '3'}}]);
                                content_media_table_tr1.appendChild(content_media_table_tr1_td4);

                                let content_media_table_tr1_td4_favicon = createElement([{
                                    'img': {
                                        'alt': 'Favicon',
                                        'src': webapp.icon_remote_dir + webapp.favicon,
                                        'style': 'width: 100px;height: 100px;'
                                    }
                                }]);
                                content_media_table_tr1_td4.appendChild(content_media_table_tr1_td4_favicon);

                                let content_media_table_tr2 = createElement([{'tr': {}}]);
                                content_media_table.appendChild(content_media_table_tr2);

                                let content_media_table_tr2_td1 = createElement([{'td': {}}]);
                                content_media_table_tr2_td1.textContent = 'Favicon';
                                content_media_table_tr2.appendChild(content_media_table_tr2_td1);

                                let content_media_table_tr2_td2 = createElement([{'td': {}}]);
                                content_media_table_tr2_td2.textContent = ':';
                                content_media_table_tr2.appendChild(content_media_table_tr2_td2);

                                let content_media_table_tr2_td3 = createElement([{'td': {}}]);
                                content_media_table_tr2_td3.textContent = webapp.favicon;
                                content_media_table_tr2.appendChild(content_media_table_tr2_td3);

                                let content_media_table_tr3 = createElement([{'tr': {}}]);
                                content_media_table.appendChild(content_media_table_tr3);

                                let content_media_table_tr3_td1 = createElement([{'td': {}}]);
                                content_media_table_tr3.appendChild(content_media_table_tr3_td1);
                                let content_media_table_tr3_td2 = createElement([{'td': {}}]);
                                content_media_table_tr3.appendChild(content_media_table_tr3_td2);
                                let content_media_table_tr3_td3 = createElement([{'td': {}}]);
                                content_media_table_tr3.appendChild(content_media_table_tr3_td3);


                                let web_app_info_box_content_social = createElement([{
                                    'div': {
                                        'class': 'web-app-info-content-social',
                                        'id': 'web-app-info-content-social'
                                    }
                                }]);
                                web_app_info_box_content_social.innerHTML = 'Social Information&ensp;::';
                                web_app_info_box_content.appendChild(web_app_info_box_content_social);

                                let content_social_table = createElement([{
                                    'table': {
                                        'id': 'web-app-social-links',
                                        'class': 'table table-bottom-border-only table-condensed'
                                    }
                                }]);
                                web_app_info_box_content_social.appendChild(content_social_table);

                                let content_social_table_tbody = createElement([{'tbody': {'id': 'web-app-social-links-view-data'}}]);
                                content_social_table.appendChild(content_social_table_tbody);

                                let content_social_table_tr1 = createElement([{'tr': {}}]);
                                content_social_table_tbody.appendChild(content_social_table_tr1);

                                let content_social_table_tr1_td1 = createElement([{
                                    'td': {
                                        'colspan': '3',
                                        'style': 'text-align: center !important;text-transform: none;'
                                    }
                                }]);
                                content_social_table_tr1_td1.textContent = 'Data loading...';
                                content_social_table_tr1.appendChild(content_social_table_tr1_td1);

                                captureElement("#webapp-data-table").appendChild(web_app_info_box);
                            });
                            captureElement('#overview').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    {'id': 'basicInfo', 'attribute': 'style'},
                                    {'id': 'databaseInfo', 'attribute': 'style'},
                                    {'id': 'filesInfo', 'attribute': 'style'},
                                    {'id': 'mediaInfo', 'attribute': 'style'},
                                    {'id': 'socialInfo', 'attribute': 'style'},]);
                                changeElementDisplayById([
                                    {'id': 'web-app-info-content-overview', 'display': 'block'},
                                    {'id': 'web-app-info-content-basic', 'display': 'none'},
                                    {'id': 'web-app-info-content-database', 'display': 'none'},
                                    {'id': 'web-app-info-content-files', 'display': 'none'},
                                    {'id': 'web-app-info-content-media', 'display': 'none'},
                                    {'id': 'web-app-info-content-social', 'display': 'none'},
                                ]);
                            });
                            captureElement('#basicInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    {'id': 'overview', 'attribute': 'style'},
                                    {'id': 'databaseInfo', 'attribute': 'style'},
                                    {'id': 'filesInfo', 'attribute': 'style'},
                                    {'id': 'mediaInfo', 'attribute': 'style'},
                                    {'id': 'socialInfo', 'attribute': 'style'},]);
                                changeElementDisplayById([
                                    {'id': 'web-app-info-content-overview', 'display': 'none'},
                                    {'id': 'web-app-info-content-basic', 'display': 'block'},
                                    {'id': 'web-app-info-content-database', 'display': 'none'},
                                    {'id': 'web-app-info-content-files', 'display': 'none'},
                                    {'id': 'web-app-info-content-media', 'display': 'none'},
                                    {'id': 'web-app-info-content-social', 'display': 'none'},
                                ]);
                            });
                            captureElement('#databaseInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    {'id': 'overview', 'attribute': 'style'},
                                    {'id': 'basicInfo', 'attribute': 'style'},
                                    {'id': 'filesInfo', 'attribute': 'style'},
                                    {'id': 'mediaInfo', 'attribute': 'style'},
                                    {'id': 'socialInfo', 'attribute': 'style'},]);
                                changeElementDisplayById([
                                    {'id': 'web-app-info-content-overview', 'display': 'none'},
                                    {'id': 'web-app-info-content-basic', 'display': 'none'},
                                    {'id': 'web-app-info-content-database', 'display': 'block'},
                                    {'id': 'web-app-info-content-files', 'display': 'none'},
                                    {'id': 'web-app-info-content-media', 'display': 'none'},
                                    {'id': 'web-app-info-content-social', 'display': 'none'},
                                ]);
                            });
                            captureElement('#filesInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    {'id': 'overview', 'attribute': 'style'},
                                    {'id': 'basicInfo', 'attribute': 'style'},
                                    {'id': 'databaseInfo', 'attribute': 'style'},
                                    {'id': 'mediaInfo', 'attribute': 'style'},
                                    {'id': 'socialInfo', 'attribute': 'style'},]);
                                changeElementDisplayById([
                                    {'id': 'web-app-info-content-overview', 'display': 'none'},
                                    {'id': 'web-app-info-content-basic', 'display': 'none'},
                                    {'id': 'web-app-info-content-database', 'display': 'none'},
                                    {'id': 'web-app-info-content-files', 'display': 'block'},
                                    {'id': 'web-app-info-content-media', 'display': 'none'},
                                    {'id': 'web-app-info-content-social', 'display': 'none'},
                                ]);
                            });
                            captureElement('#mediaInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    {'id': 'overview', 'attribute': 'style'},
                                    {'id': 'basicInfo', 'attribute': 'style'},
                                    {'id': 'databaseInfo', 'attribute': 'style'},
                                    {'id': 'filesInfo', 'attribute': 'style'},
                                    {'id': 'socialInfo', 'attribute': 'style'},]);
                                changeElementDisplayById([
                                    {'id': 'web-app-info-content-overview', 'display': 'none'},
                                    {'id': 'web-app-info-content-basic', 'display': 'none'},
                                    {'id': 'web-app-info-content-database', 'display': 'none'},
                                    {'id': 'web-app-info-content-files', 'display': 'none'},
                                    {'id': 'web-app-info-content-media', 'display': 'block'},
                                    {'id': 'web-app-info-content-social', 'display': 'none'},
                                ]);
                            });
                            captureElement('#socialInfo').addEventListener('click', function () {
                                this.setAttribute('style', background93c);
                                removeAttributeById([
                                    {'id': 'overview', 'attribute': 'style'},
                                    {'id': 'basicInfo', 'attribute': 'style'},
                                    {'id': 'databaseInfo', 'attribute': 'style'},
                                    {'id': 'filesInfo', 'attribute': 'style'},
                                    {'id': 'mediaInfo', 'attribute': 'style'},]);
                                changeElementDisplayById([
                                    {'id': 'web-app-info-content-overview', 'display': 'none'},
                                    {'id': 'web-app-info-content-basic', 'display': 'none'},
                                    {'id': 'web-app-info-content-database', 'display': 'none'},
                                    {'id': 'web-app-info-content-files', 'display': 'none'},
                                    {'id': 'web-app-info-content-media', 'display': 'none'},
                                    {'id': 'web-app-info-content-social', 'display': 'block'},
                                ]);
                            });
                            if (captureElement("#web-app-tables") !== undefined) {
                                setInterval(function () {
                                }, 1000);
                                sendRequest({
                                    method: "POST",
                                    url: appHost + 'system/webapp/getWebAppTables',
                                    async: true,
                                    header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                                }, function (response: any) {
                                    if (response.length !== 0 && IsJsonString(response)) {
                                        if (JSON.parse(response).length !== 0) {
                                            captureElement("#web-app-tables").textContent = '';
                                            let sl: any = 1;
                                            JSON.parse(response).forEach(function (webapptable: any) {
                                                let currentSl = sl++;
                                                const tr = createElement([{'tr': {}}]);
                                                const td1 = createElement([{'td': {}}]);
                                                td1.textContent = <string><unknown>currentSl;
                                                tr.appendChild(td1);

                                                const td2 = createElement([{'td': {}}]);
                                                td2.textContent = webapptable.TABLE_NAME.replace('msu_', '');
                                                tr.appendChild(td2);

                                                const td3 = createElement([{'td': {}}]);
                                                td3.textContent = webapptable.CREATE_TIME.substr(0, 10);
                                                tr.appendChild(td3);

                                                const td4 = createElement([{'td': {}}]);
                                                td4.textContent = (webapptable.UPDATE_TIME !== null) ? webapptable.UPDATE_TIME.substr(0, 11) : 'Not Updated';
                                                tr.appendChild(td4);

                                                const td5 = createElement([{'td': {}}]);
                                                td5.textContent = webapptable.TABLE_COLLATION.substr(0, 7);
                                                tr.appendChild(td5);

                                                const td6 = createElement([{'td': {}}]);
                                                td6.textContent = webapptable.ENGINE;
                                                tr.appendChild(td6);
                                                captureElement("#web-app-tables").appendChild(tr);
                                            })
                                        } else {
                                            captureElement("#web-app-tables").textContent = '';
                                            const tr = createElement([{'tr': {}}]);
                                            const td = createElement([{
                                                'td': {
                                                    'class': 'text-align-center',
                                                }
                                            }]);
                                            td.textContent = 'No table exists.';
                                            tr.appendChild(td);
                                            captureElement("#web-app-tables").appendChild(tr);
                                        }
                                    }
                                });
                            }

                            if (captureElement("#web-app-social-links-view-data") !== undefined) {
                                setInterval(function () {
                                }, 1000)
                                sendRequest({
                                    method: "POST",
                                    url: appHost + 'system/webapp/getWebAppSocialLinks',
                                    async: true,
                                    header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                                }, function (response: any) {
                                    if (response.length !== 0 && IsJsonString(response)) {
                                        if (JSON.parse(response).length !== 0) {
                                            captureElement("#web-app-social-links-view-data").textContent = '';
                                            captureElement("#web-app-social-links-edit-data").textContent = '';
                                            captureElement("#web-app-social-links-icon").textContent = '';
                                            let slNum: any = 1;
                                            JSON.parse(response).forEach(function (socialLink: any) {
                                                let currentSlNum: any = slNum++;
                                                const t1tr1 = createElement([{'tr': {}}]);
                                                const t1td1 = createElement([{'td': {}}]);
                                                t1td1.textContent = socialLink.name[0].toUpperCase() + socialLink.name.slice(1);
                                                t1tr1.appendChild(t1td1);
                                                const t1td2 = createElement([{'td': {}}]);
                                                t1td2.textContent = ':';
                                                t1tr1.appendChild(t1td2);
                                                const t1td3 = createElement([{'td': {}}]);
                                                t1td3.textContent = socialLink.link;
                                                t1tr1.appendChild(t1td3);
                                                captureElement("#web-app-social-links-view-data").appendChild(t1tr1);

                                                const t2tr2 = createElement([{'tr': {}}]);
                                                const t2td1 = createElement([{'td': {}}]);
                                                t2td1.textContent = currentSlNum;
                                                t2tr2.appendChild(t2td1);
                                                const t2td2 = createElement([{'td': {}}]);
                                                t2td2.textContent = socialLink.name[0].toUpperCase() + socialLink.name.slice(1);
                                                t2tr2.appendChild(t2td2);
                                                const t2td3 = createElement([{'td': {}}]);
                                                t2td3.textContent = socialLink.link;
                                                t2tr2.appendChild(t2td3);
                                                const t2td4 = createElement([{'td': {}}]);
                                                t2tr2.appendChild(t2td4);
                                                let t2td4a1 = createElement([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-success',
                                                    }
                                                }]);
                                                t2td4a1.addEventListener('click', function () {
                                                    captureElement('#webappSocialLinksEditMode').textContent = 'Edit';
                                                    captureElement('#web-app-social-links-data-btn').textContent = 'Update';
                                                    captureElement('#web-app-social-links-id').value = socialLink.id;
                                                    captureElement('#social-website-name').value = socialLink.name;
                                                    captureElement('#social-website-profile-link').value = socialLink.link;
                                                });
                                                t2td4.appendChild(t2td4a1);
                                                let t2td4a1i1 = createElement([{
                                                    'i': {
                                                        'class': 'fa fa-edit',
                                                    }
                                                }]);
                                                t2td4a1.appendChild(t2td4a1i1);
                                                let t2td4a2 = createElement([{
                                                    'a': {
                                                        'href': 'javascript:void(0);',
                                                        'class': 'button button-xs button-danger',
                                                    }
                                                }]);
                                                t2td4a2.addEventListener('click', function () {
                                                    sendRequest({
                                                        method: "POST",
                                                        url: appHost + 'system/webapp/deleteSocialLink',
                                                        async: true,
                                                        header: [{
                                                            name: "Content-type",
                                                            value: "application/json;charset=UTF-8"
                                                        }],
                                                        data: {
                                                            security_code: 1, id: socialLink.id,
                                                        },
                                                    }, function (response: any) {
                                                        showMessage(response, captureElement("#message3"));
                                                    });
                                                });
                                                t2td4.appendChild(t2td4a2);
                                                let t2td4a2i1 = createElement([{
                                                    'i': {
                                                        'class': 'fa fa-trash',
                                                    }
                                                }]);
                                                t2td4a2.appendChild(t2td4a2i1);
                                                captureElement("#web-app-social-links-edit-data").appendChild(t2tr2);

                                                let t2tr3 = createElement([{
                                                    'i': {
                                                        'class': 'li-social ' + socialLink.name.toLowerCase() + '-social',
                                                    }
                                                }]);
                                                let t2tr3a1 = createElement([{
                                                    'a': {
                                                        'href': socialLink.link,
                                                        'target': '_blank',
                                                        'title': socialLink.name[0].toUpperCase() + socialLink.name.slice(1)
                                                    }
                                                }]);
                                                t2tr3.appendChild(t2tr3a1);
                                                let t2tr3a1s1 = createElement([{
                                                    'span': {
                                                        'class': 'fab fa-' + socialLink.name.toLowerCase() + ' icon-social',
                                                    }
                                                }]);
                                                t2tr3a1.appendChild(t2tr3a1s1);
                                                let t2tr3a1s2 = createElement([{
                                                    'span': {
                                                        'class': 'name-social',
                                                    }
                                                }]);
                                                t2tr3a1s2.textContent = socialLink.name[0].toUpperCase() + socialLink.name.slice(1);
                                                t2tr3a1.appendChild(t2tr3a1s2);
                                                captureElement("#web-app-social-links-icon").appendChild(t2tr3);


                                            });
                                        } else {
                                            captureElement("#web-app-social-links-view-data").textContent = '';
                                            captureElement("#web-app-social-links-edit-data").textContent = '';
                                            captureElement("#web-app-social-links-icon").textContent = '';
                                            const tr1 = createElement([{'tr': {}}]);
                                            const tr1td = createElement([{
                                                'td': {
                                                    'class': 'text-align-center',
                                                    'colspan': '3',
                                                }
                                            }]);
                                            tr1td.textContent = 'No link exists.';
                                            tr1.appendChild(tr1td);
                                            captureElement("#web-app-social-links-view-data").appendChild(tr1);
                                            const tr2 = createElement([{'tr': {}}]);
                                            const tr2td = createElement([{
                                                'td': {
                                                    'class': 'text-align-center',
                                                    'colspan': '4',
                                                }
                                            }]);
                                            tr2td.textContent = 'No link exists.';
                                            tr2.appendChild(tr2td);
                                            captureElement("#web-app-social-links-edit-data").appendChild(tr2);
                                        }
                                    }
                                });
                            }
                        } else {
                            captureElement("#webapp-data-table").textContent = '';
                            const table = createElement([{
                                'table': {
                                    'style': 'width:100%;',
                                }
                            }]);
                            const tr = createElement([{'tr': {}}]);
                            table.appendChild(tr);
                            const td = createElement([{
                                'td': {
                                    'class': 'text-align-center',
                                }
                            }]);
                            td.textContent = 'No data exists.';
                            tr.appendChild(td);
                            captureElement("#webapp-data-table").appendChild(table);
                        }
                    }
                });
            }

            if (captureElement('#webappEditMode')) {
                captureElement('#webapp-data-btn').innerHTML = 'Save';
                captureElement('#webapp-reset-btn').innerHTML = 'Reset';
            }

            //save data by clicking data button
            captureElement('#webapp-data-btn').addEventListener('click', function () {
                captureElement('#webapp-data-btn').textContent = 'Updating..'
                sendRequest({
                    method: "POST",
                    url: appHost + 'system/webapp/manageSite',
                    async: true,
                    header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                    data: {
                        security_code: 1,
                        id: captureElement('#webappID').value,
                        name: captureElement('#webappName').value,
                        description: captureElement('#webappDescription').value,
                        company: captureElement('#webappCompany').value,
                        btnName: 'Update'
                    },
                }, function (response: any) {
                    captureElement('#webapp-data-btn').textContent = 'Updated';
                    showMessage(response, captureElement("#message2"));
                });
            });

            //reset inputbox by clicking reset button
            captureElement('#webapp-reset-btn').addEventListener('click', function () {
                changeElementValueById([
                    {'id': 'webappID', 'value': ''},
                    {'id': 'webappName', 'value': ''},
                    {'id': 'webappDescription', 'value': ''},
                    {'id': 'webappCompany', 'value': ''},
                ]);
            });

            //edit data by clicking edit button
            captureElement('#webapp-edit-btn').addEventListener('click', function () {
                captureElement('#message2').innerHTML = '';
                captureElement('#modal01').style.display = 'block';
                captureElement('#webappEditMode').innerHTML = 'Edit';
                captureElement('#webapp-data-btn').innerHTML = 'Update';
                captureElement('#webappID').value = this.getAttribute('data-id');
                captureElement('#webappName').value = this.getAttribute('data-name');
                captureElement('#webappDescription').value = this.getAttribute('data-description');
                captureElement('#webappCompany').value = this.getAttribute('data-company');
                captureElement('#webappFilesLocate').value = this.getAttribute('data-filesLocate');
                captureElement('#webappDomainLocate').value = this.getAttribute('data-domainLocate');
                captureElement('#webappIPLocate').value = this.getAttribute('data-IPLocate');
            });

            //view modal by clicking button
            captureElement('#webapp-database-btn').addEventListener('click', function () {
                captureElement('#modal02').style.display = 'block';
                captureElement('#webappDatabaseEditMode').innerHTML = 'Change';
            });

            //view modal by clicking button
            captureElement('#webapp-logo-btn').addEventListener('click', function () {
                captureElement('#modal03').style.display = 'block';
                captureElement('#webappLogoEditMode').innerHTML = 'Change';
            });

            //upload database by click
            captureElement('#databaseFile').addEventListener('change', function () {
                setUploadProgressSystem('web-app-database-output');
                captureElement('#UploadStatusBoard').removeAttribute('style');
                captureElement('#progressbar').style.display = 'block';
                captureElement('#upload_status').innerHTML = captureElement('#databaseFile').files[0].name + ' selected';
                uploadFile('databaseFile', 'databaseFile', appHost + 'system/webapp/databaseUpgrade');
            });

            //restore system database by click
            captureElement('#webapp-database-restore').addEventListener('click', function () {
                let progressBoard = captureElement('#UploadStatusBoard');
                if (progressBoard === null) {
                    setUploadProgressSystem('web-app-database-output');
                }
                captureElement('#UploadStatusBoard').removeAttribute('style');
                captureElement('#progressbar').style.display = 'none';
                captureElement('#loaded_n_total').style.display = 'none';
                captureElement('#upload_status').innerHTML = 'Framework database restoring..';


                sendRequest({
                    method: "POST",
                    url: appHost + 'system/webapp/databaseRestore',
                    async: true,
                    header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                    data: {
                        security_code: 1,
                        id: captureElement('#webapp-edit-btn').getAttribute('data-id'),
                        name: captureElement('#webapp-edit-btn').getAttribute('data-name'),
                        host: window.location.hostname,
                        btnName: captureElement('#webapp-database-restore').textContent
                    },
                }, function (response: any) {
                    captureElement('#upload_status').innerHTML = response;
                });
            });
            //preview and upload image by change image selection
            captureElement('#upload-logo-zone').addEventListener('change', function () {
                if (captureElement('#UploadStatusBoard') === undefined) {
                    setUploadProgressSystem('upload-info');
                }

                let file = captureElement('#web-app-selected-logo').files[0];
                let totalSize = (file.size / 1024) / 1024;
                captureElement('#web-app-logo-upload-text').textContent = 'File: ' + file.name + ' (' + totalSize.toFixed(2) + ' Mb)';
                captureElement('#UploadStatusBoard').removeAttribute('style');
                captureElement('#upload_status').innerHTML = file.name + ' uploading...';
                previewImage('web-app-selected-logo', 'web-app-logo-preview-image');
                uploadFile('logoImage', 'web-app-selected-logo', appHost + 'system/webapp/uploadLogoImage');
            });


            if (captureElement('#webappSocialLinksEditPAD')) {
                captureElement('#webappSocialLinksEditMode').innerHTML = 'New';
                captureElement('#web-app-social-links-data-btn').innerHTML = 'Save';
                captureElement('#web-app-social-links-reset-btn').innerHTML = 'Reset';
            }
            //view modal by clicking button
            captureElement('#webapp-socialLinks-btn').addEventListener('click', function () {
                captureElement('#message3').innerHTML = '';
                captureElement('#modal04').style.display = 'block';
                captureElement('#webappSocialLinksEditMode').innerHTML = 'Add/Edit';
            });

            //reset inputbox by clicking reset button
            captureElement('#web-app-social-links-reset-btn').addEventListener('click', function () {
                captureElement('#web-app-social-links-id').value = '';
                captureElement('#social-website-name').value = '';
                captureElement('#social-website-profile-link').value = '';
            });
            //save data by clicking data button
            captureElement('#web-app-social-links-data-btn').addEventListener('click', function () {
                sendRequest({
                    method: "POST",
                    url: appHost + 'system/webapp/manageSocialLinks',
                    async: true,
                    header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                    data: {
                        security_code: 1,
                        id: captureElement('#web-app-social-links-id').value,
                        name: captureElement('#social-website-name').value,
                        link: captureElement('#social-website-profile-link').value,
                        company: captureElement('#webappCompany').value,
                        btnName: captureElement('#web-app-social-links-data-btn').textContent
                    },
                }, function (response: any) {
                    captureElement('#web-app-social-links-data-btn').textContent = captureElement('#web-app-social-links-data-btn').textContent + 'd';
                    setTimeout(function () {
                        captureElement('#web-app-social-links-data-btn').textContent = captureElement('#web-app-social-links-data-btn').textContent.slice(0, -1);
                    }, 2000);
                    showMessage(response, captureElement("#message3"));
                });
            });
        }
    }
}(window.location.href));


/*all functions declare here*/
function retrieveIpInfoPlus() {
    captureElement('#ip-info-plus-app-bottom').textContent = 'Loading...';
    captureElement('#ip-info-plus-app-data-table')?.setAttribute('style', 'display:none;');
    let ip = (captureElement('#ipd-address').value !== null || true) ? captureElement('#ipd-address').value : '';
    sendRequest({
        method: "GET",
        url: 'https://api.ipdata.co/' + ip + '?api-key=test',
        async: true,
        header: [{name: "Accept", value: "application/json"}]
    }, function (reply: any) {
        console.log(reply);
        const IpDataReply = JSON.parse(reply)
        captureElement('#ip-info-plus-app-data-table').removeAttribute('style');
        captureElement('#ip-info-plus-app-bottom').textContent = 'IP INFORMATION:';
        captureElement('#ipd-address').value = IpDataReply.ip;
        captureElement('#client-ip').textContent = IpDataReply.ip;
        captureElement('#client-visual-location').href = 'https://www.google.com/maps/@' + IpDataReply.latitude + ',' + IpDataReply.longitude + ',19z';
        captureElement('#client-city').textContent = IpDataReply.city;
        captureElement('#client-region').textContent = IpDataReply.region;
        captureElement('#client-country').textContent = IpDataReply.country_name + ' (' + IpDataReply.country_code + ') ';
        let country_flag = createElement([{
            'img': {
                'style': 'width: 10px;height: 8px;',
                'src': IpDataReply.flag,
                'alt': 'FLAG'
            }
        }]);
        captureElement('#client-country').appendChild(country_flag);
        captureElement('#client-continent-name').textContent = IpDataReply.continent_name + ' (' + IpDataReply.continent_code + ')';
        captureElement('#client-post').textContent = IpDataReply.postal;
        //captureElement('#client-asn-name').href = 'https://' + IpDataReply.asn !== undefined ? IpDataReply.asn.domain : 'NOT FOUND';
        //captureElement('#client-asn-name').textContent = IpDataReply.asn !== undefined ? IpDataReply.asn.name : 'NOT FOUND' + ' [' + IpDataReply.asn !== undefined ? IpDataReply.asn.type : 'NOT FOUND' + ']';
        let language = '';
        for (let n in IpDataReply.languages) {
            language += IpDataReply.languages[n].name + '[' + IpDataReply.languages[n].native + ']; ';
        }
        captureElement('#client-language').textContent = language;
        captureElement('#client-currency-name').textContent = IpDataReply.currency.name;
        captureElement('#client-currency-code').textContent = IpDataReply.currency.code;
        captureElement('#client-currency-symbol').textContent = IpDataReply.currency.symbol;
        captureElement('#client-time-zone-name').textContent = IpDataReply.time_zone.name;
        captureElement('#client-time-zone-abbr').textContent = IpDataReply.time_zone.abbr;
        captureElement('#client-time-zone-offset').textContent = IpDataReply.time_zone.offset;
        captureElement('#client-time-zone-is-dist').textContent = IpDataReply.time_zone.is_dst;
        captureElement('#client-time-zone-current-time').textContent = IpDataReply.time_zone.current_time;
    });
}

function removeAttributeById(elements: any []) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            captureElement('#' + element.id).removeAttribute(element.attribute);
        })
    }
}

function changeElementDisplayById(elements: any []) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            captureElement('#' + element.id).style.display = element.display;
        });
    }
}

function changeElementValueById(elements: any []) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            captureElement('#' + element.id).value = element.value;
        });
    }
}

function addSpace() {
    captureElement('#flex-center').firstElementChild.style = 'height:' + (+captureElement('#flex-center').firstElementChild.clientHeight + 25) + 'px';
}
