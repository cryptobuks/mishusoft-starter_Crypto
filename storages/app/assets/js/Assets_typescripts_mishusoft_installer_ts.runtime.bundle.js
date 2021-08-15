"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_mishusoft_installer_ts"],{

/***/ "./Assets/typescripts/common/dom.ts":
/*!******************************************!*\
  !*** ./Assets/typescripts/common/dom.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "captureElement": () => (/* binding */ captureElement),
/* harmony export */   "captureElements": () => (/* binding */ captureElements)
/* harmony export */ });
function createElement(details) {
    let element, i, j, k;
    for (i in details) {
        let data = details[i];
        for (j in data) {
            let elementName = j;
            let elementData = data[j];
            element = document.createElement(elementName);
            for (k in elementData) {
                let element_attribute = k;
                let element_attribute_value = elementData[k];
                element.setAttribute(element_attribute, element_attribute_value);
            }
        }
    }
    return element;
}
function captureElement(selectors) {
    if (document.querySelector(selectors) !== null) {
        return document.querySelector(selectors);
    }
}
function captureElements(selectors) {
    if (document.querySelectorAll(selectors) !== null) {
        return document.querySelectorAll(selectors);
    }
}


/***/ }),

/***/ "./Assets/typescripts/common/message.ts":
/*!**********************************************!*\
  !*** ./Assets/typescripts/common/message.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMessage": () => (/* binding */ showMessage),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage),
/* harmony export */   "viewMessage": () => (/* binding */ viewMessage)
/* harmony export */ });
/**
 * @param response any
 * @param element HTML element
 * @param callback any
 **/
function showMessage(response, element, callback) {
    __webpack_require__.e(/*! import() */ "vendors-node_modules_sweetalert_dist_sweetalert_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! sweetalert */ "../node_modules/sweetalert/dist/sweetalert.min.js", 23)).then(function (alert) {
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_validation_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./validation */ "./Assets/typescripts/common/validation.ts")).then(function (validation) {
            if (validation.IsJsonString(response)) {
                let data = JSON.parse(response), html = "", errClass = '', symbol = '';
                if (data.type !== undefined) {
                    if (data.type === "error") {
                        errClass += 'danger';
                        symbol += "<i class=\"fa fa-times\"></i>";
                    }
                    if (data.type === "success") {
                        errClass += 'success';
                        symbol += "<i class=\"fa fa-check\"></i>";
                    }
                    html += '<div class="box-message box-' + errClass + ' box-shadow-light">';
                    html += '<span class="box-' + errClass + '-symbol">' + symbol + '</span>';
                    html += '<p  class="notify-md-content" style="text-align: justify;">' + data.message + '</p>';
                    html += '</div>';
                    if (element) {
                        element.innerHTML = html;
                    }
                    if (callback) {
                        return callback(data);
                    }
                }
                else {
                    return alert.default('Your data!', response, 'success');
                }
            }
            else {
                if (response.indexOf('<!doctype html>') !== -1 && response.indexOf('flex-center') !== -1) {
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
                        let captureElement = dom.captureElement;
                        let createElement = dom.createElement;
                        if (captureElement('#popup-login') === null) {
                            const popup = createElement([{
                                    'div': { 'id': 'popup-login', 'class': 'modal', 'style': 'display:block;' }
                                }]);
                            const popupDocument = createElement([{
                                    'div': { 'class': 'row modal-content animate', 'style': 'width:34.5%;' }
                                }]);
                            popup.appendChild(popupDocument);
                            const popupDocumentBody = createElement([{
                                    'div': { 'class': 'modal-body' }
                                }]);
                            popupDocumentBody.innerHTML = response.substr(response.indexOf('<div class="logInBox'), (response.indexOf('</div> </section>') - response.indexOf('<div class="logInBox')))
                                .replace('logInBox box-shadow box-shadow-light', 'logInBox')
                                .replace('<div class="float-right text-right"><input type="submit"', '<div class="float-right text-right" style="margin-right: 5px;"><input type="submit"');
                            popupDocument.appendChild(popupDocumentBody);
                            document.body.appendChild(popup);
                        }
                    });
                }
                else {
                    return alert.default('Oop! Something went wrong!', response, 'error');
                }
            }
        });
    });
}
/**
 * @param self
 * @param data JSON Object
 * @param __appHostUrl Valid url
 **/
function sendMessage(self, data, __appHostUrl) {
    // @ts-ignore
    __webpack_require__.e(/*! import() */ "vendors-node_modules_sweetalert_dist_sweetalert_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! sweetalert */ "../node_modules/sweetalert/dist/sweetalert.min.js", 23)).then(function (alert) {
        if (data !== undefined && data !== null && data.constructor === Object && __appHostUrl !== null) {
            __webpack_require__.e(/*! import() */ "Assets_typescripts_common_request_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
                return request.sendRequest({
                    method: "POST",
                    url: __appHostUrl,
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: data
                }, function (response) {
                    __webpack_require__.e(/*! import() */ "Assets_typescripts_common_validation_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./validation */ "./Assets/typescripts/common/validation.ts")).then(function (validation) {
                        if (validation.IsJsonString(response)) {
                            document.querySelector('#app-loader')?.setAttribute('style', 'display:none;');
                            return self.appRuntimeEventManager(JSON.parse(response));
                        }
                        else {
                            return alert.default("Oops! Something went wrong!", response, "error");
                        }
                    });
                });
            });
        }
        else {
            return alert.default("Oops! We can't send request!", "error");
        }
    });
}
function viewMessage(title, data, icon) {
    return sweetAlert(title, data, icon);
}


/***/ }),

/***/ "./Assets/typescripts/mishusoft/installer.ts":
/*!***************************************************!*\
  !*** ./Assets/typescripts/mishusoft/installer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MishusoftInstaller": () => (/* binding */ MishusoftInstaller)
/* harmony export */ });
/* harmony import */ var _common_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/dom */ "./Assets/typescripts/common/dom.ts");
/* harmony import */ var _common_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/message */ "./Assets/typescripts/common/message.ts");


class MishusoftInstaller {
    rootUrl;
    database;
    installationUrl;
    constructor(rootUrl, database) {
        this.rootUrl = rootUrl;
        this.database = database;
        this.installationUrl = this.rootUrl + "install";
    }
    play() {
        let self = this;
        window.addEventListener('load', () => {
            self.appInstallerBaseUI();
            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-installer').addEventListener('click', function () {
                (0,_common_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(self, {
                    security_code: 1,
                    env: { 'installation': { client: 'base' } }
                }, self.installationUrl);
            });
        });
    }
    ;
    appInstallerBaseUI() {
        //Application's Meta Tags
        let appHeader = document.head;
        appHeader.insertBefore((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ "meta": { "charset": "UTF-8" } }]), (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-title'));
        appHeader.insertBefore((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "meta": {
                    "name": "viewport",
                    "content": "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                }
            }]), (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-title'));
        appHeader.insertBefore((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "meta": {
                    "http-equiv": "X-UA-Compatible", "content": "ie=edge"
                }
            }]), (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-title'));
        //Application's title
        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-title').textContent = this.database.default.text.welcome;
        //Application's Favicon
        this.database.content.file.default.link.forEach(function (__file) {
            appHeader.insertBefore((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ "link": __file }]), appHeader.lastElementChild);
        });
        //Application's Stylesheet source files include here
        /*let lnk19 = createElement([{
            "link": {
                "rel": "stylesheet",
                "type": "text/css",
                "href": app.content.folder.css + "mishusoft.css"
            }
        }]);
        appHeader.insertBefore(lnk19, appHeader.lastElementChild);*/
        if (appHeader.firstElementChild) {
            appHeader.insertAdjacentElement('beforeend', appHeader.firstElementChild);
        }
        //Application's body source files include here
        let appBody = document.body;
        let dv1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "id": "app-setup-box",
                    "class": "app-setup-box",
                    /*"style": "display: none;"*/
                }
            }]);
        let dv2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "class": "box-panel box-panel-primary"
                }
            }]);
        /*installer header*/
        let dv3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "id": "app-installer-header",
                    "class": "box-panel-header",
                    "style": "text-align:center;"
                }
            }]);
        dv3.textContent = this.database.default.text.welcome;
        dv2.appendChild(dv3);
        /*installer body*/
        let dv4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "id": "box-panel-body",
                    "class": "box-panel-body",
                    "style": "text-align:center;"
                }
            }]);
        let img2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "img": {
                    "id": "app-company-logo",
                    "alt": "Logo",
                    "class": "app-company-logo",
                    "src": this.database.content.folder.logos + "mishusoft-logo-lite.webp"
                }
            }]);
        dv4.appendChild(img2);
        let p1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "p": {
                    "class": "app-description-text"
                }
            }]);
        p1.textContent = this.database.default.text.description;
        dv4.appendChild(p1);
        let p2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "p": {
                    "class": "app-description-text"
                }
            }]);
        p2.textContent = this.database.default.text.install_state;
        dv4.appendChild(p2);
        let fieldset = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "fieldset": {
                    "class": "flex-group flex-row box-shadow box-shadow-light",
                    "style": "line-height: 1.5;font-size:14px"
                }
            }]);
        dv4.appendChild(fieldset);
        /*<legend id="app-install-database-sandbox-title" class="box-shadow box-shadow-light" style="font-weight: 600;">Databases configure</legend>*/
        let legend = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "legend": {
                    "class": "box-shadow box-shadow-light",
                    "style": "font-weight: 600;"
                }
            }]);
        legend.textContent = 'Server configure';
        fieldset.appendChild(legend);
        let apache_server_php_area = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "style": "width: 100%;display: inherit;margin-bottom: 5px;"
                }
            }]);
        fieldset.appendChild(apache_server_php_area);
        let apache = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "style": "width: 45%;"
                }
            }]);
        apache.innerHTML = '<span style="font-weight: 700;">SERVER</span> : ' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#runtime-server-name-version').content.substr(0, 20);
        apache_server_php_area.appendChild(apache);
        let ip = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "style": "width: 35%;"
                }
            }]);
        ip.innerHTML = '<span style="font-weight: 700;">IP</span> : ' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#runtime-host-ip').content;
        apache_server_php_area.appendChild(ip);
        let php = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "style": "width: 20%;"
                }
            }]);
        php.innerHTML = '<span style="font-weight: 700;">PHP</span> : ' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#runtime-php-version').content;
        apache_server_php_area.appendChild(php);
        let host = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "div": {
                    "style": "width: 100%;"
                }
            }]);
        host.innerHTML = '<span style="font-weight: 700;">HOST NAME</span> : ' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#runtime-host-name').content + ' on ' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#runtime-host-os').content + ' ' + (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#runtime-host-architecture').content;
        fieldset.appendChild(host);
        //Linux developer 5.7.9-1-MANJARO #1 SMP PREEMPT Thu Jul 16 08:20:05 UTC 2020 x86_64
        let btn1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "button": {
                    "id": "app-installer",
                    "class": "button button-lg button-outline-success"
                }
            }]);
        btn1.textContent = 'Install';
        dv4.appendChild(btn1);
        dv2.appendChild(dv4);
        /*installer footer*/
        let footer = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                "p": {
                    "class": "app-description-text",
                    "style": "text-align:center;padding:5px;"
                }
            }]);
        footer.textContent = this.database.default.companyName + ' © ' + (new Date()).getFullYear();
        dv2.appendChild(footer);
        dv1.appendChild(dv2);
        appBody.insertBefore(dv1, appBody.firstElementChild);
    }
    ;
    /**
     * @param message JSON object
     * */
    appRuntimeEventManager(message) {
        let self = this;
        let parentNode = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#box-panel-body');
        let app_title = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-title');
        let app_installer_header = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-installer-header');
        if (message.env.installation.client !== undefined) {
            if (message.env.installation.message.set_title === 'unneeded') {
                if (message.env.installation.client.base !== undefined) {
                    app_installer_header.removeAttribute('style');
                    app_title.textContent = message.env.installation.title + ' : ' + message.env.installation.client.base.sub_title;
                    app_installer_header.textContent = message.env.installation.title;
                    //app_installer_header.textContent = message.env.installation.title + ' : ' + message.env.installation.client.base.sub_title;
                    self.setAppInstallerIcon(app_installer_header);
                }
            }
            else {
                app_title.textContent = message.env.installation.message.type.toUpperCase();
                app_installer_header.textContent = message.env.installation.message.type.toUpperCase();
            }
            if (message.env.installation.message !== undefined) {
                if (message.env.installation.message.cmd_btn === 'remove') {
                    parentNode.textContent = '';
                }
                if (message.env.installation.message.extra !== undefined) {
                    if (message.env.installation.message.extra.enable !== undefined) {
                        Object.keys(message.env.installation.message.extra.enable).forEach((key) => {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#' + message.env.installation.message.extra.enable[key]).removeAttribute('disabled');
                        });
                    }
                    if (message.env.installation.message.extra.disable !== undefined) {
                        Object.keys(message.env.installation.message.extra.disable).forEach((key) => {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#' + message.env.installation.message.extra.disable[key]).setAttribute('disabled', 'disabled');
                        });
                    }
                    if (message.env.installation.message.extra.show !== undefined) {
                        Object.keys(message.env.installation.message.extra.show).forEach((key) => {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#' + message.env.installation.message.extra.show[key]).removeAttribute('style');
                        });
                    }
                    if (message.env.installation.message.extra.hide !== undefined) {
                        Object.keys(message.env.installation.message.extra.hide).forEach((key) => {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#' + message.env.installation.message.extra.hide[key]).setAttribute('style', 'display:none;');
                        });
                    }
                    if (message.env.installation.message.extra.text_change !== undefined) {
                        Object.keys(message.env.installation.message.extra.text_change).forEach(() => {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#' + message.env.installation.message.extra.text_change['id']).textContent = message.env.installation.message.extra.text_change['text'];
                        });
                    }
                }
                if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#messagezone') === null || (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#messagezone') === undefined) {
                    self.setRuntimeEventMessageZone(parentNode);
                }
                let messageBoard = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'div': { 'id': 'messageboard' } }]), msg_prefix;
                if (message.env.installation.message.type === 'error') {
                    messageBoard.setAttribute('class', 'box-message box-danger box-shadow box-shadow-light');
                    msg_prefix = '<b class="text-danger" style="float: left;">Error&nbsp;:&nbsp;</b>';
                }
                else {
                    messageBoard.setAttribute('class', 'box-message box-success box-shadow box-shadow-light');
                    msg_prefix = '<b class="text-success" style="float: left;">Message&nbsp;:&nbsp;</b>';
                }
                messageBoard.innerHTML = msg_prefix + message.env.installation.message.text;
                let messageArea = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#messagezone');
                if (messageArea.style.display === 'none') {
                    messageArea.style.display = 'block';
                    messageArea.appendChild(messageBoard);
                }
                else {
                    messageArea.textContent = '';
                    messageArea.appendChild(messageBoard);
                }
            }
            if (message.env.installation.client.base !== undefined) {
                /**
                 * Databases Creation Section
                 *
                 * We configure database for the application
                 * If required database not created previously, we create in this process
                 * */
                if (message.env.installation.client.base.area === 'database-create') {
                    self.setAppInstallerDatabaseCreateBaseUI(parentNode);
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-database-create-initialize') !== null) {
                        self.setAppInstallerDatabaseCreateDefaultUI((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-install-database-create-tags'));
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-database-create-initialize').addEventListener('submit', function (event) {
                            event.preventDefault();
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-loader').removeAttribute('style');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_name').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_char').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_table_prefix').setAttribute('disabled', 'disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-database-create-install').setAttribute('disabled', 'disabled');
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(self, {
                                security_code: 1,
                                env: {
                                    installation: {
                                        client: {
                                            base: {
                                                area: {
                                                    database: {
                                                        step: 'create',
                                                        host: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_host').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_user').value,
                                                        user_pass: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_user_pass').value,
                                                        name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_name').value,
                                                        char: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_char').value,
                                                        table_prefix: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_table_prefix').value,
                                                        port: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_port').value,
                                                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_connect_only').textContent
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }, self.installationUrl);
                        });
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_connect_only').addEventListener('click', function () {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-loader').removeAttribute('style');
                            /*Remove disabled attribute from all child node*/
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_name').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_char').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_table_prefix').removeAttribute('disabled');
                            this.setAttribute('disabled', 'disabled');
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(self, {
                                security_code: 1,
                                env: {
                                    installation: {
                                        client: {
                                            base: {
                                                area: {
                                                    database: {
                                                        step: 'connect',
                                                        host: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_host').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_user').value,
                                                        user_pass: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_user_pass').value,
                                                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_connect_only').textContent
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }, self.installationUrl);
                        });
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_reconnect_only').addEventListener('click', function () {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_host').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_user').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_user_pass').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_connect_only').textContent = 'Connect';
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_connect_only').removeAttribute('disabled');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_name_row').setAttribute('style', 'display:none;');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_char_table_prefix_row').setAttribute('style', 'display:none;');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-database-create-install').setAttribute('style', 'display:none;');
                        });
                    }
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-database-create-cancel') !== null) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-database-create-cancel').addEventListener('click', function () {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-loader').removeAttribute('style');
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(self, {
                                security_code: 1,
                                env: { 'installation': { client: 'base' } }
                            }, self.installationUrl);
                        });
                    }
                }
                /**
                 * Databases Section
                 *
                 * We configure database for the application
                 * We need to store data in database, so it is very important to configure it
                 * */
                if (message.env.installation.client.base.area === 'database-select') {
                    self.setAppInstallerDBMSSelectionUI(parentNode);
                }
                /**
                 * Databases Section
                 *
                 * We configure database for the application
                 * We need to store data in database, so it is very important to configure it
                 * */
                if (message.env.installation.client.base.area === 'database') {
                    self.setAppInstallerDatabaseBaseUI(parentNode);
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-database-initialize') !== null) {
                        self.setAppInstallerDatabaseDefaultUI((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-install-database-tags'));
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-database-initialize').addEventListener('submit', function (event) {
                            event.preventDefault();
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-loader').removeAttribute('style');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-database-install').setAttribute('disabled', 'disabled');
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(self, {
                                security_code: 1,
                                env: {
                                    installation: {
                                        client: {
                                            base: {
                                                area: {
                                                    database: {
                                                        step: 'configure',
                                                        host: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_host').value,
                                                        user: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_user').value,
                                                        user_pass: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_user_pass').value,
                                                        name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_name').value,
                                                        char: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_char').value,
                                                        table_prefix: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_table_prefix').value,
                                                        port: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#db_port').value,
                                                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-database-install').textContent
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }, self.installationUrl);
                        });
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-database-create').addEventListener('click', function () {
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-loader').removeAttribute('style');
                            this.setAttribute('disabled', 'disabled');
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(self, {
                                security_code: 1,
                                env: { installation: { client: { base: { area: 'database-create' } } } }
                            }, self.installationUrl);
                        });
                    }
                }
                /**
                 * Account Section
                 *
                 * We create admin and super user account to access in the application
                 * This step is very important for users
                 * */
                if (message.env.installation.client.base.area === 'account') {
                    self.setAppInstallerAccountBaseUI(parentNode);
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-account-initialize') !== null) {
                        self.setAppInstallerAccountDefaultUI((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-install-account-tags'));
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-account-initialize').addEventListener('submit', function (event) {
                            event.preventDefault();
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-loader').removeAttribute('style');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-account-install').setAttribute('disabled', 'disabled');
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(self, {
                                security_code: 1,
                                env: {
                                    installation: {
                                        client: {
                                            base: {
                                                area: {
                                                    account: {
                                                        username: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#acc_adm_username').value,
                                                        email: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#acc_adm_email').value,
                                                        user_pass: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#acc_adm_pass').value,
                                                        user_cnf_pass: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#acc_adm_cnf_pass').value,
                                                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-account-install').textContent
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }, self.installationUrl);
                        });
                    }
                }
                /**
                 * Website Section
                 *
                 * We configure name, description of the application
                 * This step is very important for website
                 * */
                if (message.env.installation.client.base.area === 'website') {
                    self.setAppInstallerWebsiteBaseUI(parentNode);
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-website-initialize') !== null) {
                        self.setAppInstallerWebsiteDefaultUI((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-install-website-tags'));
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-website-initialize').addEventListener('submit', function (event) {
                            event.preventDefault();
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-loader').removeAttribute('style');
                            (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-website-install').setAttribute('disabled', 'disabled');
                            (0,_common_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(MishusoftInstaller, {
                                security_code: 1,
                                env: {
                                    installation: {
                                        client: {
                                            base: {
                                                area: {
                                                    website: {
                                                        name: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#site_name').value,
                                                        description: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#site_description').value,
                                                        company: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#site_company').value,
                                                        btnName: (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#app-website-install').textContent
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }, self.installationUrl);
                        });
                    }
                }
                /**
                 * Redirect Section
                 *
                 * after completion of app installation
                 * with procedure this section
                 * */
                if (message.env.installation.client.base.area === 'redirect') {
                    if ((0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)("form") > 0) {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)("form").forEach(function (frm) {
                            frm.remove();
                        });
                    }
                    else {
                        (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)("form").remove();
                    }
                    (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)("#app-loader").style.display = 'block';
                    setTimeout(function () {
                        window.location.replace(self.rootUrl);
                    }, 5000);
                }
            }
        }
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerIcon(parentNode) {
        let img1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'img': {
                    'id': 'app-installer-logo',
                    'alt': 'Logo',
                    'class': 'logo-xs',
                    'width': '25px',
                    'src': this.database.content.folder.logos + 'mishusoft-logo-outline.webp'
                }
            }]);
        parentNode.insertBefore(img1, parentNode.firstElementChild);
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setRuntimeEventMessageZone(parentNode) {
        let dv5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'id': 'messagezone',
                    'style': 'width:inherit;display: none;'
                }
            }]);
        parentNode.appendChild(dv5);
    }
    ;
    /**
     * @param parentNode valid HTML Element*/
    setAppInstallerDBMSSelectionUI(parentNode) {
        let self = this;
        let panel = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'style': 'width: 100%; text-align: center !important;display: inline-block;'
                }
            }]);
        let child01 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'class': 'box-message box-success box-shadow box-shadow-light',
                    'style': "text-align: center;float: left;height: 65px;width: 25%;margin-right: 20px;padding: 50px;display: flex;justify-content: center;align-items: center;"
                }
            }]);
        child01.innerText = "MishusoftSQLStandalone";
        child01.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.originalTarget === child01) {
                (0,_common_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(self, {
                    security_code: 1,
                    env: {
                        installation: {
                            client: {
                                base: {
                                    area: {
                                        database: {
                                            step: 'database-select',
                                            dbms: child01.innerText.toLowerCase()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, self.installationUrl);
            }
        });
        panel.appendChild(child01);
        let child02 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'class': 'box-message box-success box-shadow box-shadow-light',
                    'style': "text-align: center;float: left;height: 65px;width: 25%;margin-left: 20px;padding: 50px;display: flex;justify-content: center;align-items: center;"
                }
            }]);
        child02.innerText = "MySQL";
        child02.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.originalTarget === child02) {
                (0,_common_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(self, {
                    security_code: 1,
                    env: {
                        installation: {
                            client: {
                                base: {
                                    area: {
                                        database: {
                                            step: 'database-select',
                                            dbms: child02.innerText.toLowerCase()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, self.installationUrl);
            }
        });
        panel.appendChild(child02);
        parentNode.appendChild(panel);
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerDatabaseCreateBaseUI(parentNode) {
        let frm1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'form': {
                    'id': 'app-database-create-initialize',
                    'method': 'post',
                    'autocomplete': 'off'
                }
            }]);
        let frm1input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'input': { 'type': 'hidden', 'name': 'database', 'value': 'create' } }]);
        frm1.appendChild(frm1input1);
        let frm1input2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_port',
                    'type': 'hidden',
                    'name': 'db_port',
                    'value': '3306'
                }
            }]);
        frm1.appendChild(frm1input2);
        let frm1fdt1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'fieldset': {
                    'id': 'app-install-database-create-sandbox',
                    'class': 'box-shadow box-shadow-light'
                }
            }]);
        let frm1fdt1lgd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'legend': {
                    'id': 'app-install-database-create-sandbox-title',
                    'class': 'box-shadow box-shadow-light',
                    'style': 'font-weight: 600;'
                }
            }]);
        frm1fdt1lgd1.textContent = 'Databases Create';
        frm1fdt1.appendChild(frm1fdt1lgd1);
        let frm1fdt1dv1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'div': { 'class': 'row' } }]);
        let frm1fdt1lgd1dv1tbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'table': {
                    'id': 'app-install-database-create-tags',
                    'class': 'table table-condensed',
                    'method': 'app-install-database-create'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
        let frm1fdt1lgd1dv1dv1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'id': 'app-install-database-create-sandbox-footer',
                    'class': 'float-right text-align-right'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
        let frm1fdt1lgd1dv1dv1btn1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'app-database-create-cancel',
                    'type': 'button',
                    'class': 'button button-outline-danger'
                }
            }]);
        frm1fdt1lgd1dv1dv1btn1.textContent = 'Cancel';
        frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn1);
        let frm1fdt1lgd1dv1dv1btn2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'app-database-create-install',
                    'type': 'submit',
                    'class': 'button button-outline-primary',
                    'style': 'display:none;'
                }
            }]);
        frm1fdt1lgd1dv1dv1btn2.textContent = 'Next';
        frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn2);
        frm1fdt1.appendChild(frm1fdt1dv1);
        frm1.appendChild(frm1fdt1);
        parentNode.appendChild(frm1);
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerDatabaseCreateDefaultUI(parentNode) {
        let tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr1td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
        let tr1td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'label': { 'for': 'db_host' } }]);
        tr1td1lbl1.textContent = 'Host : ';
        tr1td1.appendChild(tr1td1lbl1);
        tr1.appendChild(tr1td1);
        let tr1td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-10 col-sm-10 col-xs-10 col-xs-plus-10' } }]);
        let tr1td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_host',
                    'name': 'db_host',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Host name or address',
                    'required': 'required'
                }
            }]);
        tr1td2.appendChild(tr1td2input1);
        tr1.appendChild(tr1td2);
        parentNode.appendChild(tr1);
        let tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr2td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
        let tr2td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'label': { 'for': 'db_user' } }]);
        tr2td1lbl1.textContent = 'User : ';
        tr2td1.appendChild(tr2td1lbl1);
        tr2.appendChild(tr2td1);
        let tr2td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
        let tr2td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_user',
                    'name': 'db_user',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Username',
                    'required': 'required'
                }
            }]);
        tr2td2.appendChild(tr2td2input1);
        tr2.appendChild(tr2td2);
        let tr2td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
        let tr2td3lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'label': { 'for': 'db_user_pass' } }]);
        tr2td3lbl1.textContent = 'Password : ';
        tr2td3.appendChild(tr2td3lbl1);
        tr2.appendChild(tr2td3);
        let tr2td4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
        let tr2td4input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_user_pass',
                    'name': 'db_user_pass',
                    'type': 'password',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Password',
                    'required': 'required'
                }
            }]);
        tr2td4.appendChild(tr2td4input1);
        tr2.appendChild(tr2td4);
        parentNode.appendChild(tr2);
        let tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr3td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-12 col-sm-12 col-xs-12 col-xs-plus-12',
                    'colspan': '2',
                    'style': 'text-align:center;'
                }
            }]);
        let tr3td1btn1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'db_connect_only',
                    'type': 'button',
                    'class': 'button button-outline-success'
                }
            }]);
        tr3td1btn1.textContent = 'Connect';
        tr3td1.appendChild(tr3td1btn1);
        let tr3td1btn2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'db_reconnect_only',
                    'type': 'button',
                    'class': 'button button-outline-info',
                    'style': 'display:none;'
                }
            }]);
        tr3td1btn2.textContent = 'Reconnect';
        tr3td1.appendChild(tr3td1btn2);
        tr3.appendChild(tr3td1);
        parentNode.appendChild(tr3);
        /*on event add element*/
        let tr4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': { 'id': 'db_name_row', 'style': 'display:none;' } }]);
        let tr4td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
        let tr4td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'label': { 'for': 'db_name' } }]);
        tr4td1lbl1.textContent = 'Databases : ';
        tr4td1.appendChild(tr4td1lbl1);
        tr4.appendChild(tr4td1);
        let tr4td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-10 col-sm-10 col-xs-10 col-xs-plus-10' } }]);
        let tr4td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_name',
                    'name': 'db_name',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases name',
                    'value': this.database.default.name,
                    'required': 'required'
                }
            }]);
        tr4td2.appendChild(tr4td2input1);
        tr4.appendChild(tr4td2);
        parentNode.appendChild(tr4);
        let tr5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': { 'id': 'db_char_table_prefix_row', 'style': 'display:none;' } }]);
        let tr5td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
        let tr5td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'label': { 'for': 'db_char' } }]);
        tr5td1lbl1.textContent = 'Charset:';
        tr5td1.appendChild(tr5td1lbl1);
        tr5.appendChild(tr5td1);
        let tr5td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
        let tr5td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_char',
                    'name': 'db_char',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases charset',
                    'value': this.database.default.charset,
                    'required': 'required'
                }
            }]);
        tr5td2.appendChild(tr5td2input1);
        tr5.appendChild(tr5td2);
        parentNode.appendChild(tr5);
        let tr5td3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
        let tr5td3lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'label': { 'for': 'db_table_prefix' } }]);
        tr5td3lbl1.textContent = 'Prefix : ';
        tr5td3.appendChild(tr5td3lbl1);
        tr5.appendChild(tr5td3);
        let tr5td4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
        let tr5td4input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_table_prefix',
                    'name': 'db_table_prefix',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases table prefix',
                    'value': this.database.default.prefix,
                    'required': 'required'
                }
            }]);
        tr5td4.appendChild(tr5td4input1);
        tr5.appendChild(tr5td4);
        parentNode.appendChild(tr5);
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerDatabaseBaseUI(parentNode) {
        let frm1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'form': {
                    'id': 'app-database-initialize',
                    'method': 'post',
                    'autocomplete': 'off'
                }
            }]);
        let frm1input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'type': 'hidden',
                    'name': 'database',
                    'value': '1'
                }
            }]);
        frm1.appendChild(frm1input1);
        let frm1input2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_port',
                    'type': 'hidden',
                    'name': 'db_port',
                    'value': '3306'
                }
            }]);
        frm1.appendChild(frm1input2);
        let frm1fdt1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'fieldset': {
                    'id': 'app-install-database-sandbox',
                    'class': 'box-shadow box-shadow-light'
                }
            }]);
        let frm1fdt1lgd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'legend': {
                    'id': 'app-install-database-sandbox-title',
                    'class': 'box-shadow box-shadow-light',
                    'style': 'font-weight: 600;'
                }
            }]);
        frm1fdt1lgd1.textContent = 'Databases configure';
        frm1fdt1.appendChild(frm1fdt1lgd1);
        let frm1fdt1dv1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'class': 'row'
                }
            }]);
        let frm1fdt1lgd1dv1tbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'table': {
                    'id': 'app-install-database-tags',
                    'class': 'table table-condensed',
                    'method': 'app-install-database'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
        let frm1fdt1lgd1dv1dv1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'id': 'app-install-database-sandbox-footer',
                    'class': 'float-right text-align-right'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
        let frm1fdt1lgd1dv1dv1btn1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'app-database-create',
                    'type': 'button',
                    'class': 'button button-outline-success'
                }
            }]);
        frm1fdt1lgd1dv1dv1btn1.textContent = 'Create DB';
        frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn1);
        let frm1fdt1lgd1dv1dv1btn2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'app-database-install',
                    'type': 'submit',
                    'class': 'button button-outline-primary'
                }
            }]);
        frm1fdt1lgd1dv1dv1btn2.textContent = 'Next';
        frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn2);
        frm1fdt1.appendChild(frm1fdt1dv1);
        frm1.appendChild(frm1fdt1);
        parentNode.appendChild(frm1);
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerDatabaseDefaultUI(parentNode) {
        let tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr1td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr1td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'db_host'
                }
            }]);
        tr1td1lbl1.textContent = 'Host : ';
        tr1td1.appendChild(tr1td1lbl1);
        tr1.appendChild(tr1td1);
        let tr1td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr1td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_host',
                    'name': 'db_host',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases\'s host',
                    'required': 'required'
                }
            }]);
        tr1td2.appendChild(tr1td2input1);
        tr1.appendChild(tr1td2);
        parentNode.appendChild(tr1);
        let tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr2td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr2td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'db_user'
                }
            }]);
        tr2td1lbl1.textContent = 'Username : ';
        tr2td1.appendChild(tr2td1lbl1);
        tr2.appendChild(tr2td1);
        let tr2td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr2td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_user',
                    'name': 'db_user',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases\'s username',
                    'required': 'required'
                }
            }]);
        tr2td2.appendChild(tr2td2input1);
        tr2.appendChild(tr2td2);
        parentNode.appendChild(tr2);
        let tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr3td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr3td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'db_user_pass'
                }
            }]);
        tr3td1lbl1.textContent = 'Password : ';
        tr3td1.appendChild(tr3td1lbl1);
        tr3.appendChild(tr3td1);
        let tr3td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr3td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_user_pass',
                    'name': 'db_user_pass',
                    'type': 'password',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases\'s password',
                    'required': 'required'
                }
            }]);
        tr3td2.appendChild(tr3td2input1);
        tr3.appendChild(tr3td2);
        parentNode.appendChild(tr3);
        let tr4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr4td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr4td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'db_name'
                }
            }]);
        tr4td1lbl1.textContent = 'Databases : ';
        tr4td1.appendChild(tr4td1lbl1);
        tr4.appendChild(tr4td1);
        let tr4td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr4td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_name',
                    'name': 'db_name',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases\'s name',
                    'value': this.database.default.name,
                    'required': 'required'
                }
            }]);
        tr4td2.appendChild(tr4td2input1);
        tr4.appendChild(tr4td2);
        parentNode.appendChild(tr4);
        let tr5 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr5td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr5td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'db_char'
                }
            }]);
        tr5td1lbl1.textContent = 'Charset : ';
        tr5td1.appendChild(tr5td1lbl1);
        tr5.appendChild(tr5td1);
        let tr5td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr5td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_char',
                    'name': 'db_char',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Data char set',
                    'value': this.database.default.charset,
                    'required': 'required'
                }
            }]);
        tr5td2.appendChild(tr5td2input1);
        tr5.appendChild(tr5td2);
        parentNode.appendChild(tr5);
        let tr6 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr6td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr6td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'db_table_prefix'
                }
            }]);
        tr6td1lbl1.textContent = 'Table prefix : ';
        tr6td1.appendChild(tr6td1lbl1);
        tr6.appendChild(tr6td1);
        let tr6td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr6td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'db_table_prefix',
                    'name': 'db_table_prefix',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Databases prefix',
                    'value': this.database.default.prefix,
                    'required': 'required'
                }
            }]);
        tr6td2.appendChild(tr6td2input1);
        tr6.appendChild(tr6td2);
        parentNode.appendChild(tr6);
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerAccountBaseUI(parentNode) {
        let frm1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'form': {
                    'id': 'app-account-initialize',
                    'method': 'post',
                    'autocomplete': 'off'
                }
            }]);
        let frm1input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'type': 'hidden',
                    'name': 'account',
                    'value': '1'
                }
            }]);
        frm1.appendChild(frm1input1);
        let frm1fdt1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'fieldset': {
                    'id': 'app-install-account-sandbox',
                    'class': 'box-shadow box-shadow-light'
                }
            }]);
        let frm1fdt1lgd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'legend': {
                    'id': 'app-install-account-sandbox-title',
                    'class': 'box-shadow box-shadow-light',
                    'style': 'font-weight: 600;'
                }
            }]);
        frm1fdt1lgd1.textContent = 'Account configure';
        frm1fdt1.appendChild(frm1fdt1lgd1);
        let frm1fdt1dv1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'class': 'row'
                }
            }]);
        let frm1fdt1lgd1dv1tbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'table': {
                    'id': 'app-install-account-tags',
                    'class': 'table table-condensed',
                    'method': 'app-install-account'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
        let frm1fdt1lgd1dv1dv1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'id': 'app-install-account-sandbox-footer',
                    'class': 'float-right text-align-right'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
        let frm1fdt1lgd1dv1dv1btn2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'app-account-install',
                    'type': 'submit',
                    'class': 'button button-outline-primary'
                }
            }]);
        frm1fdt1lgd1dv1dv1btn2.textContent = 'Next';
        frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn2);
        frm1fdt1.appendChild(frm1fdt1dv1);
        frm1.appendChild(frm1fdt1);
        if (document.getElementsByTagName('form')[0]) {
            document.getElementsByTagName('form')[0].remove();
        }
        parentNode.appendChild(frm1);
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerAccountDefaultUI(parentNode) {
        let tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr1td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr1td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'acc_adm_username'
                }
            }]);
        tr1td1lbl1.textContent = 'Username : ';
        tr1td1.appendChild(tr1td1lbl1);
        tr1.appendChild(tr1td1);
        let tr1td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr1td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'acc_adm_username',
                    'name': 'acc_adm_username',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Username',
                    'required': 'required',
                    'pattern': '[a-z0-9]{8,}$',
                    'title': 'Must contain characters and at least 8 letters from a to z',
                    'autocomplete': 'off'
                }
            }]);
        tr1td2.appendChild(tr1td2input1);
        tr1.appendChild(tr1td2);
        parentNode.appendChild(tr1);
        let tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr2td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr2td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'acc_adm_email'
                }
            }]);
        tr2td1lbl1.textContent = 'E-mail : ';
        tr2td1.appendChild(tr2td1lbl1);
        tr2.appendChild(tr2td1);
        let tr2td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr2td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'acc_adm_email',
                    'name': 'acc_adm_email',
                    'type': 'email',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'E-mail address',
                    'required': 'required',
                    'pattern': '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$',
                    'title': 'Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a \'.\'. After the \'.\' sign, add at least 2 letters from a to z',
                    'autocomplete': 'off'
                }
            }]);
        tr2td2.appendChild(tr2td2input1);
        tr2.appendChild(tr2td2);
        parentNode.appendChild(tr2);
        let tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr3td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr3td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'acc_adm_pass'
                }
            }]);
        tr3td1lbl1.textContent = 'Password : ';
        tr3td1.appendChild(tr3td1lbl1);
        tr3.appendChild(tr3td1);
        let tr3td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr3td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'acc_adm_pass',
                    'name': 'acc_adm_pass',
                    'type': 'password',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Password',
                    'required': 'required',
                    'pattern': '(?=.*\\d)(?=.*[@_])(?=.*[a-z])(?=.*[A-Z]).{6,}',
                    'title': 'Must contain at least one  number and one uppercase and lowercase letter and at least 6 or more characters',
                    'autocomplete': 'off'
                }
            }]);
        tr3td2.appendChild(tr3td2input1);
        tr3.appendChild(tr3td2);
        parentNode.appendChild(tr3);
        let tr4 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr4td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr4td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'acc_adm_cnf_pass'
                }
            }]);
        tr4td1lbl1.textContent = 'Retype Password : ';
        tr4td1.appendChild(tr4td1lbl1);
        tr4.appendChild(tr4td1);
        let tr4td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr4td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'acc_adm_cnf_pass',
                    'name': 'acc_adm_cnf_pass',
                    'type': 'password',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Retype password',
                    'required': 'required',
                    'pattern': '(?=.*\\d)(?=.*[@_])(?=.*[a-z])(?=.*[A-Z]).{6,}',
                    'title': 'Must contain at least one  number and one uppercase and lowercase letter and at least 6 or more characters',
                    'autocomplete': 'off'
                }
            }]);
        tr4td2.appendChild(tr4td2input1);
        tr4.appendChild(tr4td2);
        parentNode.appendChild(tr4);
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerWebsiteBaseUI(parentNode) {
        let frm1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'form': {
                    'id': 'app-website-initialize',
                    'method': 'post',
                    'autocomplete': 'off'
                }
            }]);
        let frm1input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'type': 'hidden',
                    'name': 'website',
                    'value': '1'
                }
            }]);
        frm1.appendChild(frm1input1);
        let frm1fdt1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'fieldset': {
                    'id': 'app-install-website-sandbox',
                    'class': 'box-shadow box-shadow-light'
                }
            }]);
        let frm1fdt1lgd1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'legend': {
                    'id': 'app-install-website-sandbox-title',
                    'class': 'box-shadow box-shadow-light',
                    'style': 'font-weight: 600;'
                }
            }]);
        frm1fdt1lgd1.textContent = 'Website configure';
        frm1fdt1.appendChild(frm1fdt1lgd1);
        let frm1fdt1dv1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'class': 'row'
                }
            }]);
        let frm1fdt1lgd1dv1tbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'table': {
                    'id': 'app-install-website-tags',
                    'class': 'table table-condensed',
                    'method': 'app-install-website'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
        let frm1fdt1lgd1dv1dv1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'div': {
                    'id': 'app-install-website-sandbox-footer',
                    'class': 'float-right text-align-right'
                }
            }]);
        frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
        let frm1fdt1lgd1dv1dv1btn2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'button': {
                    'id': 'app-website-install',
                    'type': 'submit',
                    'class': 'button button-outline-primary'
                }
            }]);
        frm1fdt1lgd1dv1dv1btn2.textContent = 'Finish';
        frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn2);
        frm1fdt1.appendChild(frm1fdt1dv1);
        frm1.appendChild(frm1fdt1);
        if (document.getElementsByTagName('form')[0]) {
            document.getElementsByTagName('form')[0].remove();
        }
        parentNode.appendChild(frm1);
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerWebsiteDefaultUI(parentNode) {
        let tr1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr1td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr1td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'site_name'
                }
            }]);
        tr1td1lbl1.textContent = 'New name : ';
        tr1td1.appendChild(tr1td1lbl1);
        tr1.appendChild(tr1td1);
        let tr1td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr1td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'site_name',
                    'name': 'site_name',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Name',
                    'required': 'required',
                    'autocomplete': 'off'
                }
            }]);
        tr1td2.appendChild(tr1td2input1);
        tr1.appendChild(tr1td2);
        parentNode.appendChild(tr1);
        let tr2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr2td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr2td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'site_description'
                }
            }]);
        tr2td1lbl1.textContent = 'Description : ';
        tr2td1.appendChild(tr2td1lbl1);
        tr2.appendChild(tr2td1);
        let tr2td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr2td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'textarea': {
                    'id': 'site_description',
                    'name': 'site_description',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Description',
                    'required': 'required',
                    'autocomplete': 'off',
                    'style': 'width:100% !important'
                }
            }]);
        tr2td2.appendChild(tr2td2input1);
        tr2.appendChild(tr2td2);
        parentNode.appendChild(tr2);
        let tr3 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{ 'tr': {} }]);
        let tr3td1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                }
            }]);
        let tr3td1lbl1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'label': {
                    'for': 'site_company'
                }
            }]);
        tr3td1lbl1.textContent = 'Company : ';
        tr3td1.appendChild(tr3td1lbl1);
        tr3.appendChild(tr3td1);
        let tr3td2 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'td': {
                    'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                }
            }]);
        let tr3td2input1 = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)([{
                'input': {
                    'id': 'site_company',
                    'name': 'site_company',
                    'type': 'text',
                    'class': 'input-box-bottom-border-only',
                    'placeholder': 'Company',
                    'value': this.database.default.companyName,
                    'required': 'required',
                    'autocomplete': 'off'
                }
            }]);
        tr3td2.appendChild(tr3td2input1);
        tr3.appendChild(tr3td2);
        parentNode.appendChild(tr3);
    }
    ;
}


/***/ })

}]);
//# sourceMappingURL=Assets_typescripts_mishusoft_installer_ts.runtime.bundle.js.map