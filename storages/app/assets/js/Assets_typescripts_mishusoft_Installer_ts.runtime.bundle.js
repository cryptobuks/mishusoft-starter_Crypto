"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_mishusoft_Installer_ts"],{

/***/ "./Assets/typescripts/mishusoft/Installer.ts":
/*!***************************************************!*\
  !*** ./Assets/typescripts/mishusoft/Installer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MishusoftInstaller": () => (/* binding */ MishusoftInstaller)
/* harmony export */ });
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
            __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
                dom.captureElement('#app-installer').addEventListener('click', function () {
                    __webpack_require__.e(/*! import() */ "Assets_typescripts_common_message_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./Assets/typescripts/common/message.ts")).then(function (message) {
                        message.sendMessage(self, {
                            security_code: 1,
                            env: { 'installation': { client: 'base' } }
                        }, self.installationUrl);
                    }).catch(function (err) {
                        console.log(err);
                    });
                });
            }).catch(function (err) {
                console.log(err);
            });
        });
    }
    ;
    appInstallerBaseUI() {
        //Application's Meta Tags
        let self = this;
        let appHeader = document.head;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let captureElement = dom.captureElement;
            let createElement = dom.createElement;
            appHeader.insertBefore(createElement([{ "meta": { "charset": "UTF-8" } }]), captureElement('#app-title'));
            appHeader.insertBefore(createElement([{
                    "meta": {
                        "name": "viewport",
                        "content": "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                    }
                }]), captureElement('#app-title'));
            appHeader.insertBefore(createElement([{
                    "meta": {
                        "http-equiv": "X-UA-Compatible", "content": "ie=edge"
                    }
                }]), captureElement('#app-title'));
            //Application's title
            captureElement('#app-title').textContent = self.database.default.text.welcome;
            //Application's Favicon
            self.database.content.file.default.link.forEach(function (__file) {
                appHeader.insertBefore(createElement([{ "link": __file }]), appHeader.lastElementChild);
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
            let dv1 = createElement([{
                    "div": {
                        "id": "app-setup-box",
                        "class": "app-setup-box",
                        /*"style": "display: none;"*/
                    }
                }]);
            let dv2 = createElement([{
                    "div": {
                        "class": "box-panel box-panel-primary"
                    }
                }]);
            /*installer header*/
            let dv3 = createElement([{
                    "div": {
                        "id": "app-installer-header",
                        "class": "box-panel-header",
                        "style": "text-align:center;"
                    }
                }]);
            dv3.textContent = self.database.default.text.welcome;
            dv2.appendChild(dv3);
            /*installer body*/
            let dv4 = createElement([{
                    "div": {
                        "id": "box-panel-body",
                        "class": "box-panel-body",
                        "style": "text-align:center;"
                    }
                }]);
            let img2 = createElement([{
                    "img": {
                        "id": "app-company-logo",
                        "alt": "Logo",
                        "class": "app-company-logo",
                        "src": self.database.content.folder.logos + "mishusoft-logo-lite.webp"
                    }
                }]);
            dv4.appendChild(img2);
            let p1 = createElement([{
                    "p": {
                        "class": "app-description-text"
                    }
                }]);
            p1.textContent = self.database.default.text.description;
            dv4.appendChild(p1);
            let p2 = createElement([{
                    "p": {
                        "class": "app-description-text"
                    }
                }]);
            p2.textContent = self.database.default.text.install_state;
            dv4.appendChild(p2);
            let fieldset = createElement([{
                    "fieldset": {
                        "class": "flex-group flex-row box-shadow box-shadow-light",
                        "style": "line-height: 1.5;font-size:14px"
                    }
                }]);
            dv4.appendChild(fieldset);
            /*<legend id="app-install-database-sandbox-title" class="box-shadow box-shadow-light" style="font-weight: 600;">Databases configure</legend>*/
            let legend = createElement([{
                    "legend": {
                        "class": "box-shadow box-shadow-light",
                        "style": "font-weight: 600;"
                    }
                }]);
            legend.textContent = 'Server configure';
            fieldset.appendChild(legend);
            let apache_server_php_area = createElement([{
                    "div": {
                        "style": "width: 100%;display: inherit;margin-bottom: 5px;"
                    }
                }]);
            fieldset.appendChild(apache_server_php_area);
            let apache = createElement([{
                    "div": {
                        "style": "width: 45%;"
                    }
                }]);
            apache.innerHTML = '<span style="font-weight: 700;">SERVER</span> : ' + captureElement('#runtime-server-name-version').content.substr(0, 20);
            apache_server_php_area.appendChild(apache);
            let ip = createElement([{
                    "div": {
                        "style": "width: 35%;"
                    }
                }]);
            ip.innerHTML = '<span style="font-weight: 700;">IP</span> : ' + captureElement('#runtime-host-ip').content;
            apache_server_php_area.appendChild(ip);
            let php = createElement([{
                    "div": {
                        "style": "width: 20%;"
                    }
                }]);
            php.innerHTML = '<span style="font-weight: 700;">PHP</span> : ' + captureElement('#runtime-php-version').content;
            apache_server_php_area.appendChild(php);
            let host = createElement([{
                    "div": {
                        "style": "width: 100%;"
                    }
                }]);
            host.innerHTML = '<span style="font-weight: 700;">HOST NAME</span> : ' + captureElement('#runtime-host-name').content + ' on ' + captureElement('#runtime-host-os').content + ' ' + captureElement('#runtime-host-architecture').content;
            fieldset.appendChild(host);
            //Linux developer 5.7.9-1-MANJARO #1 SMP PREEMPT Thu Jul 16 08:20:05 UTC 2020 x86_64
            let btn1 = createElement([{
                    "button": {
                        "id": "app-installer",
                        "class": "button button-lg button-outline-success"
                    }
                }]);
            btn1.textContent = 'Install';
            dv4.appendChild(btn1);
            dv2.appendChild(dv4);
            /*installer footer*/
            let footer = createElement([{
                    "p": {
                        "class": "app-description-text",
                        "style": "text-align:center;padding:5px;"
                    }
                }]);
            footer.textContent = self.database.default.companyName + ' © ' + (new Date()).getFullYear();
            dv2.appendChild(footer);
            dv1.appendChild(dv2);
            appBody.insertBefore(dv1, appBody.firstElementChild);
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
    /**
     * @param message JSON object
     * */
    appRuntimeEventManager(message) {
        let self = this;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let captureElement = dom.captureElement;
            let createElement = dom.createElement;
            let parentNode = captureElement('#box-panel-body');
            let app_title = captureElement('#app-title');
            let app_installer_header = captureElement('#app-installer-header');
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
                                captureElement('#' + message.env.installation.message.extra.enable[key]).removeAttribute('disabled');
                            });
                        }
                        if (message.env.installation.message.extra.disable !== undefined) {
                            Object.keys(message.env.installation.message.extra.disable).forEach((key) => {
                                captureElement('#' + message.env.installation.message.extra.disable[key]).setAttribute('disabled', 'disabled');
                            });
                        }
                        if (message.env.installation.message.extra.show !== undefined) {
                            Object.keys(message.env.installation.message.extra.show).forEach((key) => {
                                captureElement('#' + message.env.installation.message.extra.show[key]).removeAttribute('style');
                            });
                        }
                        if (message.env.installation.message.extra.hide !== undefined) {
                            Object.keys(message.env.installation.message.extra.hide).forEach((key) => {
                                captureElement('#' + message.env.installation.message.extra.hide[key]).setAttribute('style', 'display:none;');
                            });
                        }
                        if (message.env.installation.message.extra.text_change !== undefined) {
                            Object.keys(message.env.installation.message.extra.text_change).forEach(() => {
                                captureElement('#' + message.env.installation.message.extra.text_change['id']).textContent = message.env.installation.message.extra.text_change['text'];
                            });
                        }
                    }
                    if (captureElement('#messagezone') === null || captureElement('#messagezone') === undefined) {
                        self.setRuntimeEventMessageZone(parentNode);
                    }
                    let messageBoard = createElement([{ 'div': { 'id': 'messageboard' } }]), msg_prefix;
                    if (message.env.installation.message.type === 'error') {
                        messageBoard.setAttribute('class', 'box-message box-danger box-shadow box-shadow-light');
                        msg_prefix = '<b class="text-danger" style="float: left;">Error&nbsp;:&nbsp;</b>';
                    }
                    else {
                        messageBoard.setAttribute('class', 'box-message box-success box-shadow box-shadow-light');
                        msg_prefix = '<b class="text-success" style="float: left;">Message&nbsp;:&nbsp;</b>';
                    }
                    messageBoard.innerHTML = msg_prefix + message.env.installation.message.text;
                    let messageArea = captureElement('#messagezone');
                    if (messageArea.style.display === 'none') {
                        messageArea.style.display = 'block';
                        messageArea.appendChild(messageBoard);
                    }
                    else {
                        messageArea.textContent = '';
                        messageArea.appendChild(messageBoard);
                    }
                }
                __webpack_require__.e(/*! import() */ "Assets_typescripts_common_message_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./Assets/typescripts/common/message.ts")).then(function (messageRequest) {
                    if (message.env.installation.client.base !== undefined) {
                        /**
                         * Databases Creation Section
                         *
                         * We configure database for the application
                         * If required database not created previously, we create in this process
                         * */
                        if (message.env.installation.client.base.area === 'database-create') {
                            self.setAppInstallerDatabaseCreateBaseUI(parentNode);
                            if (captureElement('#app-database-create-initialize') !== null) {
                                self.setAppInstallerDatabaseCreateDefaultUI(captureElement('#app-install-database-create-tags'));
                                captureElement('#app-database-create-initialize').addEventListener('submit', function (event) {
                                    event.preventDefault();
                                    captureElement('#app-loader').removeAttribute('style');
                                    captureElement('#db_name').setAttribute('disabled', 'disabled');
                                    captureElement('#db_char').setAttribute('disabled', 'disabled');
                                    captureElement('#db_table_prefix').setAttribute('disabled', 'disabled');
                                    captureElement('#app-database-create-install').setAttribute('disabled', 'disabled');
                                    messageRequest.sendMessage(self, {
                                        security_code: 1,
                                        env: {
                                            installation: {
                                                client: {
                                                    base: {
                                                        area: {
                                                            database: {
                                                                step: 'create',
                                                                host: captureElement('#db_host').value,
                                                                user: captureElement('#db_user').value,
                                                                user_pass: captureElement('#db_user_pass').value,
                                                                name: captureElement('#db_name').value,
                                                                char: captureElement('#db_char').value,
                                                                table_prefix: captureElement('#db_table_prefix').value,
                                                                port: captureElement('#db_port').value,
                                                                btnName: captureElement('#db_connect_only').textContent
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }, self.installationUrl);
                                });
                                captureElement('#db_connect_only').addEventListener('click', function () {
                                    captureElement('#app-loader').removeAttribute('style');
                                    /*Remove disabled attribute from all child node*/
                                    captureElement('#db_name').removeAttribute('disabled');
                                    captureElement('#db_char').removeAttribute('disabled');
                                    captureElement('#db_table_prefix').removeAttribute('disabled');
                                    this.setAttribute('disabled', 'disabled');
                                    messageRequest.sendMessage(self, {
                                        security_code: 1,
                                        env: {
                                            installation: {
                                                client: {
                                                    base: {
                                                        area: {
                                                            database: {
                                                                step: 'connect',
                                                                host: captureElement('#db_host').value,
                                                                user: captureElement('#db_user').value,
                                                                user_pass: captureElement('#db_user_pass').value,
                                                                btnName: captureElement('#db_connect_only').textContent
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }, self.installationUrl);
                                });
                                captureElement('#db_reconnect_only').addEventListener('click', function () {
                                    captureElement('#db_host').removeAttribute('disabled');
                                    captureElement('#db_user').removeAttribute('disabled');
                                    captureElement('#db_user_pass').removeAttribute('disabled');
                                    captureElement('#db_connect_only').textContent = 'Connect';
                                    captureElement('#db_connect_only').removeAttribute('disabled');
                                    captureElement('#db_name_row').setAttribute('style', 'display:none;');
                                    captureElement('#db_char_table_prefix_row').setAttribute('style', 'display:none;');
                                    captureElement('#app-database-create-install').setAttribute('style', 'display:none;');
                                });
                            }
                            if (captureElement('#app-database-create-cancel') !== null) {
                                captureElement('#app-database-create-cancel').addEventListener('click', function () {
                                    captureElement('#app-loader').removeAttribute('style');
                                    messageRequest.sendMessage(self, {
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
                            if (captureElement('#app-database-initialize') !== null) {
                                self.setAppInstallerDatabaseDefaultUI(captureElement('#app-install-database-tags'));
                                captureElement('#app-database-initialize').addEventListener('submit', function (event) {
                                    event.preventDefault();
                                    captureElement('#app-loader').removeAttribute('style');
                                    captureElement('#app-database-install').setAttribute('disabled', 'disabled');
                                    messageRequest.sendMessage(self, {
                                        security_code: 1,
                                        env: {
                                            installation: {
                                                client: {
                                                    base: {
                                                        area: {
                                                            database: {
                                                                step: 'configure',
                                                                host: captureElement('#db_host').value,
                                                                user: captureElement('#db_user').value,
                                                                user_pass: captureElement('#db_user_pass').value,
                                                                name: captureElement('#db_name').value,
                                                                char: captureElement('#db_char').value,
                                                                table_prefix: captureElement('#db_table_prefix').value,
                                                                port: captureElement('#db_port').value,
                                                                btnName: captureElement('#app-database-install').textContent
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }, self.installationUrl);
                                });
                                captureElement('#app-database-create').addEventListener('click', function () {
                                    captureElement('#app-loader').removeAttribute('style');
                                    this.setAttribute('disabled', 'disabled');
                                    messageRequest.sendMessage(self, {
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
                            if (captureElement('#app-account-initialize') !== null) {
                                self.setAppInstallerAccountDefaultUI(captureElement('#app-install-account-tags'));
                                captureElement('#app-account-initialize').addEventListener('submit', function (event) {
                                    event.preventDefault();
                                    captureElement('#app-loader').removeAttribute('style');
                                    captureElement('#app-account-install').setAttribute('disabled', 'disabled');
                                    messageRequest.sendMessage(self, {
                                        security_code: 1,
                                        env: {
                                            installation: {
                                                client: {
                                                    base: {
                                                        area: {
                                                            account: {
                                                                username: captureElement('#acc_adm_username').value,
                                                                email: captureElement('#acc_adm_email').value,
                                                                user_pass: captureElement('#acc_adm_pass').value,
                                                                user_cnf_pass: captureElement('#acc_adm_cnf_pass').value,
                                                                btnName: captureElement('#app-account-install').textContent
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
                            if (captureElement('#app-website-initialize') !== null) {
                                self.setAppInstallerWebsiteDefaultUI(captureElement('#app-install-website-tags'));
                                captureElement('#app-website-initialize').addEventListener('submit', function (event) {
                                    event.preventDefault();
                                    captureElement('#app-loader').removeAttribute('style');
                                    captureElement('#app-website-install').setAttribute('disabled', 'disabled');
                                    messageRequest.sendMessage(MishusoftInstaller, {
                                        security_code: 1,
                                        env: {
                                            installation: {
                                                client: {
                                                    base: {
                                                        area: {
                                                            website: {
                                                                name: captureElement('#site_name').value,
                                                                description: captureElement('#site_description').value,
                                                                company: captureElement('#site_company').value,
                                                                btnName: captureElement('#app-website-install').textContent
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
                            if (captureElement("form") > 0) {
                                captureElement("form").forEach(function (frm) {
                                    frm.remove();
                                });
                            }
                            else {
                                captureElement("form").remove();
                            }
                            captureElement("#app-loader").style.display = 'block';
                            setTimeout(function () {
                                window.location.replace(self.rootUrl);
                            }, 5000);
                        }
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerIcon(parentNode) {
        let self = this;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let createElement = dom.createElement;
            let img1 = createElement([{
                    'img': {
                        'id': 'app-installer-logo',
                        'alt': 'Logo',
                        'class': 'logo-xs',
                        'width': '25px',
                        'src': self.database.content.folder.logos + 'mishusoft-logo-outline.webp'
                    }
                }]);
            parentNode.insertBefore(img1, parentNode.firstElementChild);
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setRuntimeEventMessageZone(parentNode) {
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let createElement = dom.createElement;
            let dv5 = createElement([{
                    'div': {
                        'id': 'messagezone',
                        'style': 'width:inherit;display: none;'
                    }
                }]);
            parentNode.appendChild(dv5);
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
    /**
     * @param parentNode valid HTML Element*/
    setAppInstallerDBMSSelectionUI(parentNode) {
        let self = this;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let createElement = dom.createElement;
            let panel = createElement([{
                    'div': {
                        'style': 'width: 100%; text-align: center !important;display: inline-block;'
                    }
                }]);
            let child01 = createElement([{
                    'div': {
                        'class': 'box-message box-success box-shadow box-shadow-light',
                        'style': "text-align: center;float: left;height: 65px;width: 25%;margin-right: 20px;padding: 50px;display: flex;justify-content: center;align-items: center;"
                    }
                }]);
            child01.innerText = "MishusoftSQLStandalone";
            child01.addEventListener('click', function (e) {
                e.preventDefault();
                if (e.originalTarget === child01) {
                    self.sendSelectRequest(child01);
                }
            });
            panel.appendChild(child01);
            let child02 = createElement([{
                    'div': {
                        'class': 'box-message box-success box-shadow box-shadow-light',
                        'style': "text-align: center;float: left;height: 65px;width: 25%;margin-left: 20px;padding: 50px;display: flex;justify-content: center;align-items: center;"
                    }
                }]);
            child02.innerText = "MySQL";
            child02.addEventListener('click', function (e) {
                e.preventDefault();
                if (e.originalTarget === child02) {
                    self.sendSelectRequest(child02);
                }
            });
            panel.appendChild(child02);
            parentNode.appendChild(panel);
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
    sendSelectRequest(node) {
        let self = this;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_message_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./Assets/typescripts/common/message.ts")).then(function (message) {
            message.sendMessage(self, {
                security_code: 1,
                env: {
                    installation: {
                        client: {
                            base: {
                                area: {
                                    database: {
                                        step: 'database-select',
                                        dbms: node.innerText.toLowerCase()
                                    }
                                }
                            }
                        }
                    }
                }
            }, self.installationUrl);
        }).catch(function (err) {
            console.log(err);
        });
    }
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerDatabaseCreateBaseUI(parentNode) {
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let createElement = dom.createElement;
            let frm1 = createElement([{
                    'form': {
                        'id': 'app-database-create-initialize',
                        'method': 'post',
                        'autocomplete': 'off'
                    }
                }]);
            let frm1input1 = createElement([{ 'input': { 'type': 'hidden', 'name': 'database', 'value': 'create' } }]);
            frm1.appendChild(frm1input1);
            let frm1input2 = createElement([{
                    'input': {
                        'id': 'db_port',
                        'type': 'hidden',
                        'name': 'db_port',
                        'value': '3306'
                    }
                }]);
            frm1.appendChild(frm1input2);
            let frm1fdt1 = createElement([{
                    'fieldset': {
                        'id': 'app-install-database-create-sandbox',
                        'class': 'box-shadow box-shadow-light'
                    }
                }]);
            let frm1fdt1lgd1 = createElement([{
                    'legend': {
                        'id': 'app-install-database-create-sandbox-title',
                        'class': 'box-shadow box-shadow-light',
                        'style': 'font-weight: 600;'
                    }
                }]);
            frm1fdt1lgd1.textContent = 'Databases Create';
            frm1fdt1.appendChild(frm1fdt1lgd1);
            let frm1fdt1dv1 = createElement([{ 'div': { 'class': 'row' } }]);
            let frm1fdt1lgd1dv1tbl1 = createElement([{
                    'table': {
                        'id': 'app-install-database-create-tags',
                        'class': 'table table-condensed',
                        'method': 'app-install-database-create'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
            let frm1fdt1lgd1dv1dv1 = createElement([{
                    'div': {
                        'id': 'app-install-database-create-sandbox-footer',
                        'class': 'float-right text-align-right'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
            let frm1fdt1lgd1dv1dv1btn1 = createElement([{
                    'button': {
                        'id': 'app-database-create-cancel',
                        'type': 'button',
                        'class': 'button button-outline-danger'
                    }
                }]);
            frm1fdt1lgd1dv1dv1btn1.textContent = 'Cancel';
            frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn1);
            let frm1fdt1lgd1dv1dv1btn2 = createElement([{
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
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerDatabaseCreateDefaultUI(parentNode) {
        let self = this;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let createElement = dom.createElement;
            let tr1 = createElement([{ 'tr': {} }]);
            let tr1td1 = createElement([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
            let tr1td1lbl1 = createElement([{ 'label': { 'for': 'db_host' } }]);
            tr1td1lbl1.textContent = 'Host : ';
            tr1td1.appendChild(tr1td1lbl1);
            tr1.appendChild(tr1td1);
            let tr1td2 = createElement([{ 'td': { 'class': 'col-md-10 col-sm-10 col-xs-10 col-xs-plus-10' } }]);
            let tr1td2input1 = createElement([{
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
            let tr2 = createElement([{ 'tr': {} }]);
            let tr2td1 = createElement([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
            let tr2td1lbl1 = createElement([{ 'label': { 'for': 'db_user' } }]);
            tr2td1lbl1.textContent = 'User : ';
            tr2td1.appendChild(tr2td1lbl1);
            tr2.appendChild(tr2td1);
            let tr2td2 = createElement([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
            let tr2td2input1 = createElement([{
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
            let tr2td3 = createElement([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
            let tr2td3lbl1 = createElement([{ 'label': { 'for': 'db_user_pass' } }]);
            tr2td3lbl1.textContent = 'Password : ';
            tr2td3.appendChild(tr2td3lbl1);
            tr2.appendChild(tr2td3);
            let tr2td4 = createElement([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
            let tr2td4input1 = createElement([{
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
            let tr3 = createElement([{ 'tr': {} }]);
            let tr3td1 = createElement([{
                    'td': {
                        'class': 'col-md-12 col-sm-12 col-xs-12 col-xs-plus-12',
                        'colspan': '2',
                        'style': 'text-align:center;'
                    }
                }]);
            let tr3td1btn1 = createElement([{
                    'button': {
                        'id': 'db_connect_only',
                        'type': 'button',
                        'class': 'button button-outline-success'
                    }
                }]);
            tr3td1btn1.textContent = 'Connect';
            tr3td1.appendChild(tr3td1btn1);
            let tr3td1btn2 = createElement([{
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
            let tr4 = createElement([{ 'tr': { 'id': 'db_name_row', 'style': 'display:none;' } }]);
            let tr4td1 = createElement([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
            let tr4td1lbl1 = createElement([{ 'label': { 'for': 'db_name' } }]);
            tr4td1lbl1.textContent = 'Databases : ';
            tr4td1.appendChild(tr4td1lbl1);
            tr4.appendChild(tr4td1);
            let tr4td2 = createElement([{ 'td': { 'class': 'col-md-10 col-sm-10 col-xs-10 col-xs-plus-10' } }]);
            let tr4td2input1 = createElement([{
                    'input': {
                        'id': 'db_name',
                        'name': 'db_name',
                        'type': 'text',
                        'class': 'input-box-bottom-border-only',
                        'placeholder': 'Databases name',
                        'value': self.database.default.name,
                        'required': 'required'
                    }
                }]);
            tr4td2.appendChild(tr4td2input1);
            tr4.appendChild(tr4td2);
            parentNode.appendChild(tr4);
            let tr5 = createElement([{ 'tr': { 'id': 'db_char_table_prefix_row', 'style': 'display:none;' } }]);
            let tr5td1 = createElement([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
            let tr5td1lbl1 = createElement([{ 'label': { 'for': 'db_char' } }]);
            tr5td1lbl1.textContent = 'Charset:';
            tr5td1.appendChild(tr5td1lbl1);
            tr5.appendChild(tr5td1);
            let tr5td2 = createElement([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
            let tr5td2input1 = createElement([{
                    'input': {
                        'id': 'db_char',
                        'name': 'db_char',
                        'type': 'text',
                        'class': 'input-box-bottom-border-only',
                        'placeholder': 'Databases charset',
                        'value': self.database.default.charset,
                        'required': 'required'
                    }
                }]);
            tr5td2.appendChild(tr5td2input1);
            tr5.appendChild(tr5td2);
            parentNode.appendChild(tr5);
            let tr5td3 = createElement([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
            let tr5td3lbl1 = createElement([{ 'label': { 'for': 'db_table_prefix' } }]);
            tr5td3lbl1.textContent = 'Prefix : ';
            tr5td3.appendChild(tr5td3lbl1);
            tr5.appendChild(tr5td3);
            let tr5td4 = createElement([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
            let tr5td4input1 = createElement([{
                    'input': {
                        'id': 'db_table_prefix',
                        'name': 'db_table_prefix',
                        'type': 'text',
                        'class': 'input-box-bottom-border-only',
                        'placeholder': 'Databases table prefix',
                        'value': self.database.default.prefix,
                        'required': 'required'
                    }
                }]);
            tr5td4.appendChild(tr5td4input1);
            tr5.appendChild(tr5td4);
            parentNode.appendChild(tr5);
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerDatabaseBaseUI(parentNode) {
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let createElement = dom.createElement;
            let frm1 = createElement([{
                    'form': {
                        'id': 'app-database-initialize',
                        'method': 'post',
                        'autocomplete': 'off'
                    }
                }]);
            let frm1input1 = createElement([{
                    'input': {
                        'type': 'hidden',
                        'name': 'database',
                        'value': '1'
                    }
                }]);
            frm1.appendChild(frm1input1);
            let frm1input2 = createElement([{
                    'input': {
                        'id': 'db_port',
                        'type': 'hidden',
                        'name': 'db_port',
                        'value': '3306'
                    }
                }]);
            frm1.appendChild(frm1input2);
            let frm1fdt1 = createElement([{
                    'fieldset': {
                        'id': 'app-install-database-sandbox',
                        'class': 'box-shadow box-shadow-light'
                    }
                }]);
            let frm1fdt1lgd1 = createElement([{
                    'legend': {
                        'id': 'app-install-database-sandbox-title',
                        'class': 'box-shadow box-shadow-light',
                        'style': 'font-weight: 600;'
                    }
                }]);
            frm1fdt1lgd1.textContent = 'Databases configure';
            frm1fdt1.appendChild(frm1fdt1lgd1);
            let frm1fdt1dv1 = createElement([{
                    'div': {
                        'class': 'row'
                    }
                }]);
            let frm1fdt1lgd1dv1tbl1 = createElement([{
                    'table': {
                        'id': 'app-install-database-tags',
                        'class': 'table table-condensed',
                        'method': 'app-install-database'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
            let frm1fdt1lgd1dv1dv1 = createElement([{
                    'div': {
                        'id': 'app-install-database-sandbox-footer',
                        'class': 'float-right text-align-right'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
            let frm1fdt1lgd1dv1dv1btn1 = createElement([{
                    'button': {
                        'id': 'app-database-create',
                        'type': 'button',
                        'class': 'button button-outline-success'
                    }
                }]);
            frm1fdt1lgd1dv1dv1btn1.textContent = 'Create DB';
            frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn1);
            let frm1fdt1lgd1dv1dv1btn2 = createElement([{
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
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerDatabaseDefaultUI(parentNode) {
        let self = this;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let createElement = dom.createElement;
            let tr1 = createElement([{ 'tr': {} }]);
            let tr1td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr1td1lbl1 = createElement([{
                    'label': {
                        'for': 'db_host'
                    }
                }]);
            tr1td1lbl1.textContent = 'Host : ';
            tr1td1.appendChild(tr1td1lbl1);
            tr1.appendChild(tr1td1);
            let tr1td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr1td2input1 = createElement([{
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
            let tr2 = createElement([{ 'tr': {} }]);
            let tr2td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr2td1lbl1 = createElement([{
                    'label': {
                        'for': 'db_user'
                    }
                }]);
            tr2td1lbl1.textContent = 'Username : ';
            tr2td1.appendChild(tr2td1lbl1);
            tr2.appendChild(tr2td1);
            let tr2td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr2td2input1 = createElement([{
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
            let tr3 = createElement([{ 'tr': {} }]);
            let tr3td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr3td1lbl1 = createElement([{
                    'label': {
                        'for': 'db_user_pass'
                    }
                }]);
            tr3td1lbl1.textContent = 'Password : ';
            tr3td1.appendChild(tr3td1lbl1);
            tr3.appendChild(tr3td1);
            let tr3td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr3td2input1 = createElement([{
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
            let tr4 = createElement([{ 'tr': {} }]);
            let tr4td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr4td1lbl1 = createElement([{
                    'label': {
                        'for': 'db_name'
                    }
                }]);
            tr4td1lbl1.textContent = 'Databases : ';
            tr4td1.appendChild(tr4td1lbl1);
            tr4.appendChild(tr4td1);
            let tr4td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr4td2input1 = createElement([{
                    'input': {
                        'id': 'db_name',
                        'name': 'db_name',
                        'type': 'text',
                        'class': 'input-box-bottom-border-only',
                        'placeholder': 'Databases\'s name',
                        'value': self.database.default.name,
                        'required': 'required'
                    }
                }]);
            tr4td2.appendChild(tr4td2input1);
            tr4.appendChild(tr4td2);
            parentNode.appendChild(tr4);
            let tr5 = createElement([{ 'tr': {} }]);
            let tr5td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr5td1lbl1 = createElement([{
                    'label': {
                        'for': 'db_char'
                    }
                }]);
            tr5td1lbl1.textContent = 'Charset : ';
            tr5td1.appendChild(tr5td1lbl1);
            tr5.appendChild(tr5td1);
            let tr5td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr5td2input1 = createElement([{
                    'input': {
                        'id': 'db_char',
                        'name': 'db_char',
                        'type': 'text',
                        'class': 'input-box-bottom-border-only',
                        'placeholder': 'Data char set',
                        'value': self.database.default.charset,
                        'required': 'required'
                    }
                }]);
            tr5td2.appendChild(tr5td2input1);
            tr5.appendChild(tr5td2);
            parentNode.appendChild(tr5);
            let tr6 = createElement([{ 'tr': {} }]);
            let tr6td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr6td1lbl1 = createElement([{
                    'label': {
                        'for': 'db_table_prefix'
                    }
                }]);
            tr6td1lbl1.textContent = 'Table prefix : ';
            tr6td1.appendChild(tr6td1lbl1);
            tr6.appendChild(tr6td1);
            let tr6td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr6td2input1 = createElement([{
                    'input': {
                        'id': 'db_table_prefix',
                        'name': 'db_table_prefix',
                        'type': 'text',
                        'class': 'input-box-bottom-border-only',
                        'placeholder': 'Databases prefix',
                        'value': self.database.default.prefix,
                        'required': 'required'
                    }
                }]);
            tr6td2.appendChild(tr6td2input1);
            tr6.appendChild(tr6td2);
            parentNode.appendChild(tr6);
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerAccountBaseUI(parentNode) {
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let createElement = dom.createElement;
            let frm1 = createElement([{
                    'form': {
                        'id': 'app-account-initialize',
                        'method': 'post',
                        'autocomplete': 'off'
                    }
                }]);
            let frm1input1 = createElement([{
                    'input': {
                        'type': 'hidden',
                        'name': 'account',
                        'value': '1'
                    }
                }]);
            frm1.appendChild(frm1input1);
            let frm1fdt1 = createElement([{
                    'fieldset': {
                        'id': 'app-install-account-sandbox',
                        'class': 'box-shadow box-shadow-light'
                    }
                }]);
            let frm1fdt1lgd1 = createElement([{
                    'legend': {
                        'id': 'app-install-account-sandbox-title',
                        'class': 'box-shadow box-shadow-light',
                        'style': 'font-weight: 600;'
                    }
                }]);
            frm1fdt1lgd1.textContent = 'Account configure';
            frm1fdt1.appendChild(frm1fdt1lgd1);
            let frm1fdt1dv1 = createElement([{
                    'div': {
                        'class': 'row'
                    }
                }]);
            let frm1fdt1lgd1dv1tbl1 = createElement([{
                    'table': {
                        'id': 'app-install-account-tags',
                        'class': 'table table-condensed',
                        'method': 'app-install-account'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
            let frm1fdt1lgd1dv1dv1 = createElement([{
                    'div': {
                        'id': 'app-install-account-sandbox-footer',
                        'class': 'float-right text-align-right'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
            let frm1fdt1lgd1dv1dv1btn2 = createElement([{
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
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerAccountDefaultUI(parentNode) {
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let createElement = dom.createElement;
            let tr1 = createElement([{ 'tr': {} }]);
            let tr1td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr1td1lbl1 = createElement([{
                    'label': {
                        'for': 'acc_adm_username'
                    }
                }]);
            tr1td1lbl1.textContent = 'Username : ';
            tr1td1.appendChild(tr1td1lbl1);
            tr1.appendChild(tr1td1);
            let tr1td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr1td2input1 = createElement([{
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
            let tr2 = createElement([{ 'tr': {} }]);
            let tr2td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr2td1lbl1 = createElement([{
                    'label': {
                        'for': 'acc_adm_email'
                    }
                }]);
            tr2td1lbl1.textContent = 'E-mail : ';
            tr2td1.appendChild(tr2td1lbl1);
            tr2.appendChild(tr2td1);
            let tr2td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr2td2input1 = createElement([{
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
            let tr3 = createElement([{ 'tr': {} }]);
            let tr3td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr3td1lbl1 = createElement([{
                    'label': {
                        'for': 'acc_adm_pass'
                    }
                }]);
            tr3td1lbl1.textContent = 'Password : ';
            tr3td1.appendChild(tr3td1lbl1);
            tr3.appendChild(tr3td1);
            let tr3td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr3td2input1 = createElement([{
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
            let tr4 = createElement([{ 'tr': {} }]);
            let tr4td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr4td1lbl1 = createElement([{
                    'label': {
                        'for': 'acc_adm_cnf_pass'
                    }
                }]);
            tr4td1lbl1.textContent = 'Retype Password : ';
            tr4td1.appendChild(tr4td1lbl1);
            tr4.appendChild(tr4td1);
            let tr4td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr4td2input1 = createElement([{
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
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerWebsiteBaseUI(parentNode) {
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let createElement = dom.createElement;
            let frm1 = createElement([{
                    'form': {
                        'id': 'app-website-initialize',
                        'method': 'post',
                        'autocomplete': 'off'
                    }
                }]);
            let frm1input1 = createElement([{
                    'input': {
                        'type': 'hidden',
                        'name': 'website',
                        'value': '1'
                    }
                }]);
            frm1.appendChild(frm1input1);
            let frm1fdt1 = createElement([{
                    'fieldset': {
                        'id': 'app-install-website-sandbox',
                        'class': 'box-shadow box-shadow-light'
                    }
                }]);
            let frm1fdt1lgd1 = createElement([{
                    'legend': {
                        'id': 'app-install-website-sandbox-title',
                        'class': 'box-shadow box-shadow-light',
                        'style': 'font-weight: 600;'
                    }
                }]);
            frm1fdt1lgd1.textContent = 'Website configure';
            frm1fdt1.appendChild(frm1fdt1lgd1);
            let frm1fdt1dv1 = createElement([{
                    'div': {
                        'class': 'row'
                    }
                }]);
            let frm1fdt1lgd1dv1tbl1 = createElement([{
                    'table': {
                        'id': 'app-install-website-tags',
                        'class': 'table table-condensed',
                        'method': 'app-install-website'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
            let frm1fdt1lgd1dv1dv1 = createElement([{
                    'div': {
                        'id': 'app-install-website-sandbox-footer',
                        'class': 'float-right text-align-right'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
            let frm1fdt1lgd1dv1dv1btn2 = createElement([{
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
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerWebsiteDefaultUI(parentNode) {
        let self = this;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let createElement = dom.createElement;
            let tr1 = createElement([{ 'tr': {} }]);
            let tr1td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr1td1lbl1 = createElement([{
                    'label': {
                        'for': 'site_name'
                    }
                }]);
            tr1td1lbl1.textContent = 'New name : ';
            tr1td1.appendChild(tr1td1lbl1);
            tr1.appendChild(tr1td1);
            let tr1td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr1td2input1 = createElement([{
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
            let tr2 = createElement([{ 'tr': {} }]);
            let tr2td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr2td1lbl1 = createElement([{
                    'label': {
                        'for': 'site_description'
                    }
                }]);
            tr2td1lbl1.textContent = 'Description : ';
            tr2td1.appendChild(tr2td1lbl1);
            tr2.appendChild(tr2td1);
            let tr2td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr2td2input1 = createElement([{
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
            let tr3 = createElement([{ 'tr': {} }]);
            let tr3td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            let tr3td1lbl1 = createElement([{
                    'label': {
                        'for': 'site_company'
                    }
                }]);
            tr3td1lbl1.textContent = 'Company : ';
            tr3td1.appendChild(tr3td1lbl1);
            tr3.appendChild(tr3td1);
            let tr3td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            let tr3td2input1 = createElement([{
                    'input': {
                        'id': 'site_company',
                        'name': 'site_company',
                        'type': 'text',
                        'class': 'input-box-bottom-border-only',
                        'placeholder': 'Company',
                        'value': self.database.default.companyName,
                        'required': 'required',
                        'autocomplete': 'off'
                    }
                }]);
            tr3td2.appendChild(tr3td2input1);
            tr3.appendChild(tr3td2);
            parentNode.appendChild(tr3);
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX21pc2h1c29mdF9JbnN0YWxsZXJfdHMucnVudGltZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU0sa0JBQWtCO0lBSWY7SUFDQTtJQUpKLGVBQWUsQ0FBUztJQUVoQyxZQUNZLE9BQWUsRUFDZixRQUFhO1FBRGIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQUs7UUFFckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUVwRCxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQix3TEFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO2dCQUN0QyxHQUFHLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMzRCxvTUFBMkIsQ0FBQyxJQUFJLENBQUMsVUFBVSxPQUFPO3dCQUM5QyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTs0QkFDdEIsYUFBYSxFQUFFLENBQUM7NEJBQ2hCLEdBQUcsRUFBRSxFQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsRUFBQzt5QkFDMUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7d0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO29CQUNwQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFH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QUksRUFBRTt3QkFDRixPQUFPLEVBQUUsMENBQTBDO3FCQUN0RDtpQkFDSixDQUFDLENBQUMsQ0FBQztZQUNKLElBQUksWUFBWSxHQUFHLGFBQWEsQ0FBQyxDQUFDO29CQUM5QixPQUFPLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixNQUFNLEVBQUUsTUFBTTt3QkFDZCxPQUFPLEVBQUUsOEJBQThCO3dCQUN2QyxhQUFhLEVBQUUsU0FBUzt3QkFDeEIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVc7d0JBQzFDLFVBQVUsRUFBRSxVQUFVO3dCQUN0QixjQUFjLEVBQUUsS0FBSztxQkFDeEI7aUJBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUFBLENBQUM7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL01pc2h1c29mdFJ1bnRpbWUvLi9Bc3NldHMvdHlwZXNjcmlwdHMvbWlzaHVzb2Z0L0luc3RhbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWlzaHVzb2Z0SW5zdGFsbGVyIHtcbiAgICBwcml2YXRlIGluc3RhbGxhdGlvblVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm9vdFVybDogc3RyaW5nLFxuICAgICAgICBwcml2YXRlIGRhdGFiYXNlOiBhbnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5pbnN0YWxsYXRpb25VcmwgPSB0aGlzLnJvb3RVcmwgKyBcImluc3RhbGxcIjtcblxuICAgIH1cblxuICAgIHBsYXkoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmFwcEluc3RhbGxlckJhc2VVSSgpO1xuICAgICAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgICAgICAgICAgZG9tLmNhcHR1cmVFbGVtZW50KCcjYXBwLWluc3RhbGxlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9tZXNzYWdlJykudGhlbihmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zZW5kTWVzc2FnZShzZWxmLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlfY29kZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnY6IHsnaW5zdGFsbGF0aW9uJzoge2NsaWVudDogJ2Jhc2UnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNlbGYuaW5zdGFsbGF0aW9uVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGFwcEluc3RhbGxlckJhc2VVSSgpOiB2b2lkIHtcbiAgICAgICAgLy9BcHBsaWNhdGlvbidzIE1ldGEgVGFnc1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBhcHBIZWFkZXIgPSBkb2N1bWVudC5oZWFkO1xuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgICAgIGxldCBjYXB0dXJlRWxlbWVudCA9IGRvbS5jYXB0dXJlRWxlbWVudDtcbiAgICAgICAgICAgIGxldCBjcmVhdGVFbGVtZW50ID0gZG9tLmNyZWF0ZUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGFwcEhlYWRlci5pbnNlcnRCZWZvcmUoY3JlYXRlRWxlbWVudChbe1wibWV0YVwiOiB7XCJjaGFyc2V0XCI6IFwiVVRGLThcIn19XSksIGNhcHR1cmVFbGVtZW50KCcjYXBwLXRpdGxlJykpO1xuICAgICAgICAgICAgYXBwSGVhZGVyLmluc2VydEJlZm9yZShjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgXCJtZXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmlld3BvcnRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCB1c2VyLXNjYWxhYmxlPW5vLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIG1pbmltdW0tc2NhbGU9MS4wXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSksIGNhcHR1cmVFbGVtZW50KCcjYXBwLXRpdGxlJykpO1xuICAgICAgICAgICAgYXBwSGVhZGVyLmluc2VydEJlZm9yZShjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgXCJtZXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwLWVxdWl2XCI6IFwiWC1VQS1Db21wYXRpYmxlXCIsIFwiY29udGVudFwiOiBcImllPWVkZ2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKSwgY2FwdHVyZUVsZW1lbnQoJyNhcHAtdGl0bGUnKSk7XG5cbiAgICAgICAgICAgIC8vQXBwbGljYXRpb24ncyB0aXRsZVxuICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtdGl0bGUnKS50ZXh0Q29udGVudCA9IHNlbGYuZGF0YWJhc2UuZGVmYXVsdC50ZXh0LndlbGNvbWU7XG5cbiAgICAgICAgICAgIC8vQXBwbGljYXRpb24ncyBGYXZpY29uXG4gICAgICAgICAgICBzZWxmLmRhdGFiYXNlLmNvbnRlbnQuZmlsZS5kZWZhdWx0LmxpbmsuZm9yRWFjaChmdW5jdGlvbiAoX19maWxlOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBhcHBIZWFkZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZUVsZW1lbnQoW3tcImxpbmtcIjogX19maWxlfV0pLCBhcHBIZWFkZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9BcHBsaWNhdGlvbidzIFN0eWxlc2hlZXQgc291cmNlIGZpbGVzIGluY2x1ZGUgaGVyZVxuICAgICAgICAgICAgLypsZXQgbG5rMTkgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHQvY3NzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBhcHAuY29udGVudC5mb2xkZXIuY3NzICsgXCJtaXNodXNvZnQuY3NzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBhcHBIZWFkZXIuaW5zZXJ0QmVmb3JlKGxuazE5LCBhcHBIZWFkZXIubGFzdEVsZW1lbnRDaGlsZCk7Ki9cbiAgICAgICAgICAgIGlmIChhcHBIZWFkZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBhcHBIZWFkZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBhcHBIZWFkZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0FwcGxpY2F0aW9uJ3MgYm9keSBzb3VyY2UgZmlsZXMgaW5jbHVkZSBoZXJlXG4gICAgICAgICAgICBsZXQgYXBwQm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICBsZXQgZHYxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgIFwiZGl2XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImFwcC1zZXR1cC1ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcImFwcC1zZXR1cC1ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgLypcInN0eWxlXCI6IFwiZGlzcGxheTogbm9uZTtcIiovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuXG4gICAgICAgICAgICBsZXQgZHYyID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgIFwiZGl2XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcImJveC1wYW5lbCBib3gtcGFuZWwtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuXG4gICAgICAgICAgICAvKmluc3RhbGxlciBoZWFkZXIqL1xuICAgICAgICAgICAgbGV0IGR2MyA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICBcImRpdlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJhcHAtaW5zdGFsbGVyLWhlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiYm94LXBhbmVsLWhlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwidGV4dC1hbGlnbjpjZW50ZXI7XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBkdjMudGV4dENvbnRlbnQgPSBzZWxmLmRhdGFiYXNlLmRlZmF1bHQudGV4dC53ZWxjb21lO1xuICAgICAgICAgICAgZHYyLmFwcGVuZENoaWxkKGR2Myk7XG5cblxuICAgICAgICAgICAgLyppbnN0YWxsZXIgYm9keSovXG4gICAgICAgICAgICBsZXQgZHY0ID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgIFwiZGl2XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImJveC1wYW5lbC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJib3gtcGFuZWwtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwidGV4dC1hbGlnbjpjZW50ZXI7XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG5cbiAgICAgICAgICAgIGxldCBpbWcyID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgIFwiaW1nXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImFwcC1jb21wYW55LWxvZ29cIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbHRcIjogXCJMb2dvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJhcHAtY29tcGFueS1sb2dvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IHNlbGYuZGF0YWJhc2UuY29udGVudC5mb2xkZXIubG9nb3MgKyBcIm1pc2h1c29mdC1sb2dvLWxpdGUud2VicFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgZHY0LmFwcGVuZENoaWxkKGltZzIpO1xuXG4gICAgICAgICAgICBsZXQgcDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgXCJwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcImFwcC1kZXNjcmlwdGlvbi10ZXh0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBwMS50ZXh0Q29udGVudCA9IHNlbGYuZGF0YWJhc2UuZGVmYXVsdC50ZXh0LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZHY0LmFwcGVuZENoaWxkKHAxKTtcblxuICAgICAgICAgICAgbGV0IHAyID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgIFwicFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJhcHAtZGVzY3JpcHRpb24tdGV4dFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgcDIudGV4dENvbnRlbnQgPSBzZWxmLmRhdGFiYXNlLmRlZmF1bHQudGV4dC5pbnN0YWxsX3N0YXRlO1xuICAgICAgICAgICAgZHY0LmFwcGVuZENoaWxkKHAyKTtcblxuICAgICAgICAgICAgbGV0IGZpZWxkc2V0ID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgIFwiZmllbGRzZXRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiZmxleC1ncm91cCBmbGV4LXJvdyBib3gtc2hhZG93IGJveC1zaGFkb3ctbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImxpbmUtaGVpZ2h0OiAxLjU7Zm9udC1zaXplOjE0cHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGR2NC5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbiAgICAgICAgICAgIC8qPGxlZ2VuZCBpZD1cImFwcC1pbnN0YWxsLWRhdGFiYXNlLXNhbmRib3gtdGl0bGVcIiBjbGFzcz1cImJveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodFwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDYwMDtcIj5EYXRhYmFzZXMgY29uZmlndXJlPC9sZWdlbmQ+Ki9cblxuICAgICAgICAgICAgbGV0IGxlZ2VuZCA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICBcImxlZ2VuZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJib3gtc2hhZG93IGJveC1zaGFkb3ctbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImZvbnQtd2VpZ2h0OiA2MDA7XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSAnU2VydmVyIGNvbmZpZ3VyZSc7XG4gICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gICAgICAgICAgICBsZXQgYXBhY2hlX3NlcnZlcl9waHBfYXJlYSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICBcImRpdlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJ3aWR0aDogMTAwJTtkaXNwbGF5OiBpbmhlcml0O21hcmdpbi1ib3R0b206IDVweDtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGFwYWNoZV9zZXJ2ZXJfcGhwX2FyZWEpO1xuICAgICAgICAgICAgbGV0IGFwYWNoZSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICBcImRpdlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJ3aWR0aDogNDUlO1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgYXBhY2hlLmlubmVySFRNTCA9ICc8c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA3MDA7XCI+U0VSVkVSPC9zcGFuPiA6ICcgKyBjYXB0dXJlRWxlbWVudCgnI3J1bnRpbWUtc2VydmVyLW5hbWUtdmVyc2lvbicpLmNvbnRlbnQuc3Vic3RyKDAsIDIwKTtcbiAgICAgICAgICAgIGFwYWNoZV9zZXJ2ZXJfcGhwX2FyZWEuYXBwZW5kQ2hpbGQoYXBhY2hlKTtcblxuICAgICAgICAgICAgbGV0IGlwID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgIFwiZGl2XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIndpZHRoOiAzNSU7XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBpcC5pbm5lckhUTUwgPSAnPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogNzAwO1wiPklQPC9zcGFuPiA6ICcgKyBjYXB0dXJlRWxlbWVudCgnI3J1bnRpbWUtaG9zdC1pcCcpLmNvbnRlbnQ7XG4gICAgICAgICAgICBhcGFjaGVfc2VydmVyX3BocF9hcmVhLmFwcGVuZENoaWxkKGlwKTtcblxuICAgICAgICAgICAgbGV0IHBocCA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICBcImRpdlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJ3aWR0aDogMjAlO1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgcGhwLmlubmVySFRNTCA9ICc8c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA3MDA7XCI+UEhQPC9zcGFuPiA6ICcgKyBjYXB0dXJlRWxlbWVudCgnI3J1bnRpbWUtcGhwLXZlcnNpb24nKS5jb250ZW50O1xuICAgICAgICAgICAgYXBhY2hlX3NlcnZlcl9waHBfYXJlYS5hcHBlbmRDaGlsZChwaHApO1xuXG4gICAgICAgICAgICBsZXQgaG9zdCA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICBcImRpdlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJ3aWR0aDogMTAwJTtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGhvc3QuaW5uZXJIVE1MID0gJzxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDcwMDtcIj5IT1NUIE5BTUU8L3NwYW4+IDogJyArIGNhcHR1cmVFbGVtZW50KCcjcnVudGltZS1ob3N0LW5hbWUnKS5jb250ZW50ICsgJyBvbiAnICsgY2FwdHVyZUVsZW1lbnQoJyNydW50aW1lLWhvc3Qtb3MnKS5jb250ZW50ICsgJyAnICsgY2FwdHVyZUVsZW1lbnQoJyNydW50aW1lLWhvc3QtYXJjaGl0ZWN0dXJlJykuY29udGVudDtcbiAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGhvc3QpO1xuXG4gICAgICAgICAgICAvL0xpbnV4IGRldmVsb3BlciA1LjcuOS0xLU1BTkpBUk8gIzEgU01QIFBSRUVNUFQgVGh1IEp1bCAxNiAwODoyMDowNSBVVEMgMjAyMCB4ODZfNjRcblxuXG4gICAgICAgICAgICBsZXQgYnRuMSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJhcHAtaW5zdGFsbGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJidXR0b24gYnV0dG9uLWxnIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGJ0bjEudGV4dENvbnRlbnQgPSAnSW5zdGFsbCc7XG4gICAgICAgICAgICBkdjQuYXBwZW5kQ2hpbGQoYnRuMSk7XG4gICAgICAgICAgICBkdjIuYXBwZW5kQ2hpbGQoZHY0KTtcblxuICAgICAgICAgICAgLyppbnN0YWxsZXIgZm9vdGVyKi9cbiAgICAgICAgICAgIGxldCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgXCJwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcImFwcC1kZXNjcmlwdGlvbi10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJ0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjVweDtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IHNlbGYuZGF0YWJhc2UuZGVmYXVsdC5jb21wYW55TmFtZSArICcgwqkgJyArIChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgZHYyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgICAgICAgICBkdjEuYXBwZW5kQ2hpbGQoZHYyKTtcbiAgICAgICAgICAgIGFwcEJvZHkuaW5zZXJ0QmVmb3JlKGR2MSwgYXBwQm9keS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBtZXNzYWdlIEpTT04gb2JqZWN0XG4gICAgICogKi9cbiAgICBhcHBSdW50aW1lRXZlbnRNYW5hZ2VyKG1lc3NhZ2U6IGFueSk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgICAgICBsZXQgY2FwdHVyZUVsZW1lbnQgPSBkb20uY2FwdHVyZUVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgY3JlYXRlRWxlbWVudCA9IGRvbS5jcmVhdGVFbGVtZW50O1xuICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBjYXB0dXJlRWxlbWVudCgnI2JveC1wYW5lbC1ib2R5Jyk7XG4gICAgICAgICAgICBsZXQgYXBwX3RpdGxlID0gY2FwdHVyZUVsZW1lbnQoJyNhcHAtdGl0bGUnKTtcbiAgICAgICAgICAgIGxldCBhcHBfaW5zdGFsbGVyX2hlYWRlciA9IGNhcHR1cmVFbGVtZW50KCcjYXBwLWluc3RhbGxlci1oZWFkZXInKTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24uY2xpZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2Uuc2V0X3RpdGxlID09PSAndW5uZWVkZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24uY2xpZW50LmJhc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwX2luc3RhbGxlcl9oZWFkZXIucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwX3RpdGxlLnRleHRDb250ZW50ID0gbWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLnRpdGxlICsgJyA6ICcgKyBtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24uY2xpZW50LmJhc2Uuc3ViX3RpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwX2luc3RhbGxlcl9oZWFkZXIudGV4dENvbnRlbnQgPSBtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FwcF9pbnN0YWxsZXJfaGVhZGVyLnRleHRDb250ZW50ID0gbWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLnRpdGxlICsgJyA6ICcgKyBtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24uY2xpZW50LmJhc2Uuc3ViX3RpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRBcHBJbnN0YWxsZXJJY29uKGFwcF9pbnN0YWxsZXJfaGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcF90aXRsZS50ZXh0Q29udGVudCA9IG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLnR5cGUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYXBwX2luc3RhbGxlcl9oZWFkZXIudGV4dENvbnRlbnQgPSBtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS50eXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmNtZF9idG4gPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UuZXh0cmEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmV4dHJhLmVuYWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UuZXh0cmEuZW5hYmxlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyMnICsgbWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UuZXh0cmEuZW5hYmxlW2tleV0pLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS5leHRyYS5kaXNhYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS5leHRyYS5kaXNhYmxlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyMnICsgbWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UuZXh0cmEuZGlzYWJsZVtrZXldKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UuZXh0cmEuc2hvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UuZXh0cmEuc2hvdykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjJyArIG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmV4dHJhLnNob3dba2V5XSkucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmV4dHJhLmhpZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmV4dHJhLmhpZGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnIycgKyBtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS5leHRyYS5oaWRlW2tleV0pLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmV4dHJhLnRleHRfY2hhbmdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS5leHRyYS50ZXh0X2NoYW5nZSkuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjJyArIG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmV4dHJhLnRleHRfY2hhbmdlWydpZCddKS50ZXh0Q29udGVudCA9IG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmV4dHJhLnRleHRfY2hhbmdlWyd0ZXh0J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNtZXNzYWdlem9uZScpID09PSBudWxsIHx8IGNhcHR1cmVFbGVtZW50KCcjbWVzc2FnZXpvbmUnKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFJ1bnRpbWVFdmVudE1lc3NhZ2Vab25lKHBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlQm9hcmQgPSBjcmVhdGVFbGVtZW50KFt7J2Rpdic6IHsnaWQnOiAnbWVzc2FnZWJvYXJkJ319XSksIG1zZ19wcmVmaXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JveC1tZXNzYWdlIGJveC1kYW5nZXIgYm94LXNoYWRvdyBib3gtc2hhZG93LWxpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dfcHJlZml4ID0gJzxiIGNsYXNzPVwidGV4dC1kYW5nZXJcIiBzdHlsZT1cImZsb2F0OiBsZWZ0O1wiPkVycm9yJm5ic3A7OiZuYnNwOzwvYj4nO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUJvYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYm94LW1lc3NhZ2UgYm94LXN1Y2Nlc3MgYm94LXNoYWRvdyBib3gtc2hhZG93LWxpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dfcHJlZml4ID0gJzxiIGNsYXNzPVwidGV4dC1zdWNjZXNzXCIgc3R5bGU9XCJmbG9hdDogbGVmdDtcIj5NZXNzYWdlJm5ic3A7OiZuYnNwOzwvYj4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2FyZC5pbm5lckhUTUwgPSBtc2dfcHJlZml4ICsgbWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VBcmVhID0gY2FwdHVyZUVsZW1lbnQoJyNtZXNzYWdlem9uZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUFyZWEuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQXJlYS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VBcmVhLmFwcGVuZENoaWxkKG1lc3NhZ2VCb2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQXJlYS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUFyZWEuYXBwZW5kQ2hpbGQobWVzc2FnZUJvYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vY29tbW9uL21lc3NhZ2UnKS50aGVuKGZ1bmN0aW9uIChtZXNzYWdlUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLmNsaWVudC5iYXNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogRGF0YWJhc2VzIENyZWF0aW9uIFNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBXZSBjb25maWd1cmUgZGF0YWJhc2UgZm9yIHRoZSBhcHBsaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICogSWYgcmVxdWlyZWQgZGF0YWJhc2Ugbm90IGNyZWF0ZWQgcHJldmlvdXNseSwgd2UgY3JlYXRlIGluIHRoaXMgcHJvY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICogKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24uY2xpZW50LmJhc2UuYXJlYSA9PT0gJ2RhdGFiYXNlLWNyZWF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEFwcEluc3RhbGxlckRhdGFiYXNlQ3JlYXRlQmFzZVVJKHBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI2FwcC1kYXRhYmFzZS1jcmVhdGUtaW5pdGlhbGl6ZScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0QXBwSW5zdGFsbGVyRGF0YWJhc2VDcmVhdGVEZWZhdWx0VUkoY2FwdHVyZUVsZW1lbnQoJyNhcHAtaW5zdGFsbC1kYXRhYmFzZS1jcmVhdGUtdGFncycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtZGF0YWJhc2UtY3JlYXRlLWluaXRpYWxpemUnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtbG9hZGVyJykucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl9uYW1lJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl9jaGFyJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl90YWJsZV9wcmVmaXgnKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1kYXRhYmFzZS1jcmVhdGUtaW5zdGFsbCcpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VSZXF1ZXN0LnNlbmRNZXNzYWdlKHNlbGYsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlfY29kZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFiYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6ICdjcmVhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBjYXB0dXJlRWxlbWVudCgnI2RiX2hvc3QnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogY2FwdHVyZUVsZW1lbnQoJyNkYl91c2VyJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfcGFzczogY2FwdHVyZUVsZW1lbnQoJyNkYl91c2VyX3Bhc3MnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2FwdHVyZUVsZW1lbnQoJyNkYl9uYW1lJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXI6IGNhcHR1cmVFbGVtZW50KCcjZGJfY2hhcicpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZV9wcmVmaXg6IGNhcHR1cmVFbGVtZW50KCcjZGJfdGFibGVfcHJlZml4JykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnQ6IGNhcHR1cmVFbGVtZW50KCcjZGJfcG9ydCcpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5OYW1lOiBjYXB0dXJlRWxlbWVudCgnI2RiX2Nvbm5lY3Rfb25seScpLnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmluc3RhbGxhdGlvblVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2RiX2Nvbm5lY3Rfb25seScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtbG9hZGVyJykucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypSZW1vdmUgZGlzYWJsZWQgYXR0cmlidXRlIGZyb20gYWxsIGNoaWxkIG5vZGUqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl9uYW1lJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl9jaGFyJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl90YWJsZV9wcmVmaXgnKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VSZXF1ZXN0LnNlbmRNZXNzYWdlKHNlbGYsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlfY29kZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFiYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6ICdjb25uZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogY2FwdHVyZUVsZW1lbnQoJyNkYl9ob3N0JykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IGNhcHR1cmVFbGVtZW50KCcjZGJfdXNlcicpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3Bhc3M6IGNhcHR1cmVFbGVtZW50KCcjZGJfdXNlcl9wYXNzJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk5hbWU6IGNhcHR1cmVFbGVtZW50KCcjZGJfY29ubmVjdF9vbmx5JykudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zdGFsbGF0aW9uVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjZGJfcmVjb25uZWN0X29ubHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjZGJfaG9zdCcpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjZGJfdXNlcicpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjZGJfdXNlcl9wYXNzJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl9jb25uZWN0X29ubHknKS50ZXh0Q29udGVudCA9ICdDb25uZWN0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjZGJfY29ubmVjdF9vbmx5JykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl9uYW1lX3JvdycpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl9jaGFyX3RhYmxlX3ByZWZpeF9yb3cnKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYXBwLWRhdGFiYXNlLWNyZWF0ZS1pbnN0YWxsJykuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI2FwcC1kYXRhYmFzZS1jcmVhdGUtY2FuY2VsJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtZGF0YWJhc2UtY3JlYXRlLWNhbmNlbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtbG9hZGVyJykucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVJlcXVlc3Quc2VuZE1lc3NhZ2Uoc2VsZiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5X2NvZGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52OiB7J2luc3RhbGxhdGlvbic6IHtjbGllbnQ6ICdiYXNlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBzZWxmLmluc3RhbGxhdGlvblVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIERhdGFiYXNlcyBTZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogV2UgY29uZmlndXJlIGRhdGFiYXNlIGZvciB0aGUgYXBwbGljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFdlIG5lZWQgdG8gc3RvcmUgZGF0YSBpbiBkYXRhYmFzZSwgc28gaXQgaXMgdmVyeSBpbXBvcnRhbnQgdG8gY29uZmlndXJlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5jbGllbnQuYmFzZS5hcmVhID09PSAnZGF0YWJhc2Utc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0QXBwSW5zdGFsbGVyREJNU1NlbGVjdGlvblVJKHBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogRGF0YWJhc2VzIFNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBXZSBjb25maWd1cmUgZGF0YWJhc2UgZm9yIHRoZSBhcHBsaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICogV2UgbmVlZCB0byBzdG9yZSBkYXRhIGluIGRhdGFiYXNlLCBzbyBpdCBpcyB2ZXJ5IGltcG9ydGFudCB0byBjb25maWd1cmUgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLmNsaWVudC5iYXNlLmFyZWEgPT09ICdkYXRhYmFzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEFwcEluc3RhbGxlckRhdGFiYXNlQmFzZVVJKHBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI2FwcC1kYXRhYmFzZS1pbml0aWFsaXplJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRBcHBJbnN0YWxsZXJEYXRhYmFzZURlZmF1bHRVSShjYXB0dXJlRWxlbWVudCgnI2FwcC1pbnN0YWxsLWRhdGFiYXNlLXRhZ3MnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYXBwLWRhdGFiYXNlLWluaXRpYWxpemUnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtbG9hZGVyJykucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtZGF0YWJhc2UtaW5zdGFsbCcpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VSZXF1ZXN0LnNlbmRNZXNzYWdlKHNlbGYsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlfY29kZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFiYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6ICdjb25maWd1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBjYXB0dXJlRWxlbWVudCgnI2RiX2hvc3QnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogY2FwdHVyZUVsZW1lbnQoJyNkYl91c2VyJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfcGFzczogY2FwdHVyZUVsZW1lbnQoJyNkYl91c2VyX3Bhc3MnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2FwdHVyZUVsZW1lbnQoJyNkYl9uYW1lJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXI6IGNhcHR1cmVFbGVtZW50KCcjZGJfY2hhcicpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZV9wcmVmaXg6IGNhcHR1cmVFbGVtZW50KCcjZGJfdGFibGVfcHJlZml4JykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnQ6IGNhcHR1cmVFbGVtZW50KCcjZGJfcG9ydCcpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5OYW1lOiBjYXB0dXJlRWxlbWVudCgnI2FwcC1kYXRhYmFzZS1pbnN0YWxsJykudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zdGFsbGF0aW9uVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtZGF0YWJhc2UtY3JlYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1sb2FkZXInKS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VSZXF1ZXN0LnNlbmRNZXNzYWdlKHNlbGYsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eV9jb2RlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudjoge2luc3RhbGxhdGlvbjoge2NsaWVudDoge2Jhc2U6IHthcmVhOiAnZGF0YWJhc2UtY3JlYXRlJ319fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNlbGYuaW5zdGFsbGF0aW9uVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEFjY291bnQgU2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFdlIGNyZWF0ZSBhZG1pbiBhbmQgc3VwZXIgdXNlciBhY2NvdW50IHRvIGFjY2VzcyBpbiB0aGUgYXBwbGljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoaXMgc3RlcCBpcyB2ZXJ5IGltcG9ydGFudCBmb3IgdXNlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLmNsaWVudC5iYXNlLmFyZWEgPT09ICdhY2NvdW50Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0QXBwSW5zdGFsbGVyQWNjb3VudEJhc2VVSShwYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNhcHAtYWNjb3VudC1pbml0aWFsaXplJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRBcHBJbnN0YWxsZXJBY2NvdW50RGVmYXVsdFVJKGNhcHR1cmVFbGVtZW50KCcjYXBwLWluc3RhbGwtYWNjb3VudC10YWdzJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1hY2NvdW50LWluaXRpYWxpemUnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtbG9hZGVyJykucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtYWNjb3VudC1pbnN0YWxsJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVJlcXVlc3Quc2VuZE1lc3NhZ2Uoc2VsZiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eV9jb2RlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogY2FwdHVyZUVsZW1lbnQoJyNhY2NfYWRtX3VzZXJuYW1lJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBjYXB0dXJlRWxlbWVudCgnI2FjY19hZG1fZW1haWwnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9wYXNzOiBjYXB0dXJlRWxlbWVudCgnI2FjY19hZG1fcGFzcycpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2NuZl9wYXNzOiBjYXB0dXJlRWxlbWVudCgnI2FjY19hZG1fY25mX3Bhc3MnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuTmFtZTogY2FwdHVyZUVsZW1lbnQoJyNhcHAtYWNjb3VudC1pbnN0YWxsJykudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zdGFsbGF0aW9uVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFdlYnNpdGUgU2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFdlIGNvbmZpZ3VyZSBuYW1lLCBkZXNjcmlwdGlvbiBvZiB0aGUgYXBwbGljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoaXMgc3RlcCBpcyB2ZXJ5IGltcG9ydGFudCBmb3Igd2Vic2l0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICogKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24uY2xpZW50LmJhc2UuYXJlYSA9PT0gJ3dlYnNpdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRBcHBJbnN0YWxsZXJXZWJzaXRlQmFzZVVJKHBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI2FwcC13ZWJzaXRlLWluaXRpYWxpemUnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEFwcEluc3RhbGxlcldlYnNpdGVEZWZhdWx0VUkoY2FwdHVyZUVsZW1lbnQoJyNhcHAtaW5zdGFsbC13ZWJzaXRlLXRhZ3MnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYXBwLXdlYnNpdGUtaW5pdGlhbGl6ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudDogRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1sb2FkZXInKS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC13ZWJzaXRlLWluc3RhbGwnKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlUmVxdWVzdC5zZW5kTWVzc2FnZShNaXNodXNvZnRJbnN0YWxsZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlfY29kZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYnNpdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2FwdHVyZUVsZW1lbnQoJyNzaXRlX25hbWUnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGNhcHR1cmVFbGVtZW50KCcjc2l0ZV9kZXNjcmlwdGlvbicpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55OiBjYXB0dXJlRWxlbWVudCgnI3NpdGVfY29tcGFueScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5OYW1lOiBjYXB0dXJlRWxlbWVudCgnI2FwcC13ZWJzaXRlLWluc3RhbGwnKS50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnN0YWxsYXRpb25VcmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogUmVkaXJlY3QgU2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIGFmdGVyIGNvbXBsZXRpb24gb2YgYXBwIGluc3RhbGxhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICogd2l0aCBwcm9jZWR1cmUgdGhpcyBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5jbGllbnQuYmFzZS5hcmVhID09PSAncmVkaXJlY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KFwiZm9ybVwiKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoXCJmb3JtXCIpLmZvckVhY2goZnVuY3Rpb24gKGZybTogeyByZW1vdmU6ICgpID0+IHZvaWQ7IH0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudChcImZvcm1cIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoXCIjYXBwLWxvYWRlclwiKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoc2VsZi5yb290VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gcGFyZW50Tm9kZSBWYWxpZCBIVE1MIGVsZW1lbnRcbiAgICAgKiAqL1xuICAgIHNldEFwcEluc3RhbGxlckljb24ocGFyZW50Tm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgICAgIGxldCBjcmVhdGVFbGVtZW50ID0gZG9tLmNyZWF0ZUVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgaW1nMSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnaW1nJzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWluc3RhbGxlci1sb2dvJyxcbiAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICdMb2dvJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xvZ28teHMnLFxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMjVweCcsXG4gICAgICAgICAgICAgICAgICAgICdzcmMnOiBzZWxmLmRhdGFiYXNlLmNvbnRlbnQuZm9sZGVyLmxvZ29zICsgJ21pc2h1c29mdC1sb2dvLW91dGxpbmUud2VicCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShpbWcxLCBwYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUgVmFsaWQgSFRNTCBlbGVtZW50XG4gICAgICogKi9cbiAgICBzZXRSdW50aW1lRXZlbnRNZXNzYWdlWm9uZShwYXJlbnROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgICAgIGxldCBjcmVhdGVFbGVtZW50ID0gZG9tLmNyZWF0ZUVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgZHY1ID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdkaXYnOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdtZXNzYWdlem9uZScsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZSc6ICd3aWR0aDppbmhlcml0O2Rpc3BsYXk6IG5vbmU7J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZHY1KTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUgdmFsaWQgSFRNTCBFbGVtZW50Ki9cbiAgICBzZXRBcHBJbnN0YWxsZXJEQk1TU2VsZWN0aW9uVUkocGFyZW50Tm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgICAgIGxldCBjcmVhdGVFbGVtZW50ID0gZG9tLmNyZWF0ZUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGxldCBwYW5lbCA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnZGl2Jzoge1xuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnOiAnd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O2Rpc3BsYXk6IGlubGluZS1ibG9jazsnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgbGV0IGNoaWxkMDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2Rpdic6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2JveC1tZXNzYWdlIGJveC1zdWNjZXNzIGJveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodCcsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZSc6IFwidGV4dC1hbGlnbjogY2VudGVyO2Zsb2F0OiBsZWZ0O2hlaWdodDogNjVweDt3aWR0aDogMjUlO21hcmdpbi1yaWdodDogMjBweDtwYWRkaW5nOiA1MHB4O2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGNoaWxkMDEuaW5uZXJUZXh0ID0gXCJNaXNodXNvZnRTUUxTdGFuZGFsb25lXCI7XG4gICAgICAgICAgICBjaGlsZDAxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGU6IGFueSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5vcmlnaW5hbFRhcmdldCA9PT0gY2hpbGQwMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbmRTZWxlY3RSZXF1ZXN0KGNoaWxkMDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwYW5lbC5hcHBlbmRDaGlsZChjaGlsZDAxKVxuXG4gICAgICAgICAgICBsZXQgY2hpbGQwMiA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnZGl2Jzoge1xuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYm94LW1lc3NhZ2UgYm94LXN1Y2Nlc3MgYm94LXNoYWRvdyBib3gtc2hhZG93LWxpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlJzogXCJ0ZXh0LWFsaWduOiBjZW50ZXI7ZmxvYXQ6IGxlZnQ7aGVpZ2h0OiA2NXB4O3dpZHRoOiAyNSU7bWFyZ2luLWxlZnQ6IDIwcHg7cGFkZGluZzogNTBweDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBjaGlsZDAyLmlubmVyVGV4dCA9IFwiTXlTUUxcIjtcbiAgICAgICAgICAgIGNoaWxkMDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmIChlLm9yaWdpbmFsVGFyZ2V0ID09PSBjaGlsZDAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2VuZFNlbGVjdFJlcXVlc3QoY2hpbGQwMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwYW5lbC5hcHBlbmRDaGlsZChjaGlsZDAyKVxuXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHBhbmVsKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2VuZFNlbGVjdFJlcXVlc3Qobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9tZXNzYWdlJykudGhlbihmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgbWVzc2FnZS5zZW5kTWVzc2FnZShzZWxmLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5X2NvZGU6IDEsXG4gICAgICAgICAgICAgICAgICAgIGVudjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZWE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhYmFzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAnZGF0YWJhc2Utc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJtczogbm9kZS5pbm5lclRleHQudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VsZi5pbnN0YWxsYXRpb25VcmwpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBwYXJlbnROb2RlIFZhbGlkIEhUTUwgZWxlbWVudFxuICAgICAqICovXG4gICAgc2V0QXBwSW5zdGFsbGVyRGF0YWJhc2VDcmVhdGVCYXNlVUkocGFyZW50Tm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgICAgICBsZXQgY3JlYXRlRWxlbWVudCA9IGRvbS5jcmVhdGVFbGVtZW50O1xuXG4gICAgICAgICAgICBsZXQgZnJtMSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnZm9ybSc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1kYXRhYmFzZS1jcmVhdGUtaW5pdGlhbGl6ZScsXG4gICAgICAgICAgICAgICAgICAgICdtZXRob2QnOiAncG9zdCcsXG4gICAgICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGxldCBmcm0xaW5wdXQxID0gY3JlYXRlRWxlbWVudChbeydpbnB1dCc6IHsndHlwZSc6ICdoaWRkZW4nLCAnbmFtZSc6ICdkYXRhYmFzZScsICd2YWx1ZSc6ICdjcmVhdGUnfX1dKTtcbiAgICAgICAgICAgIGZybTEuYXBwZW5kQ2hpbGQoZnJtMWlucHV0MSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xaW5wdXQyID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2RiX3BvcnQnLFxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYl9wb3J0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJzMzMDYnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgZnJtMS5hcHBlbmRDaGlsZChmcm0xaW5wdXQyKTtcblxuICAgICAgICAgICAgbGV0IGZybTFmZHQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1pbnN0YWxsLWRhdGFiYXNlLWNyZWF0ZS1zYW5kYm94JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2JveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBsZXQgZnJtMWZkdDFsZ2QxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdsZWdlbmQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtaW5zdGFsbC1kYXRhYmFzZS1jcmVhdGUtc2FuZGJveC10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdib3gtc2hhZG93IGJveC1zaGFkb3ctbGlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnOiAnZm9udC13ZWlnaHQ6IDYwMDsnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgZnJtMWZkdDFsZ2QxLnRleHRDb250ZW50ID0gJ0RhdGFiYXNlcyBDcmVhdGUnO1xuICAgICAgICAgICAgZnJtMWZkdDEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFsZ2QxKTtcblxuICAgICAgICAgICAgbGV0IGZybTFmZHQxZHYxID0gY3JlYXRlRWxlbWVudChbeydkaXYnOiB7J2NsYXNzJzogJ3Jvdyd9fV0pO1xuICAgICAgICAgICAgbGV0IGZybTFmZHQxbGdkMWR2MXRibDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ3RhYmxlJzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWluc3RhbGwtZGF0YWJhc2UtY3JlYXRlLXRhZ3MnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGFibGUgdGFibGUtY29uZGVuc2VkJyxcbiAgICAgICAgICAgICAgICAgICAgJ21ldGhvZCc6ICdhcHAtaW5zdGFsbC1kYXRhYmFzZS1jcmVhdGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgZnJtMWZkdDFkdjEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFsZ2QxZHYxdGJsMSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDFkdjFkdjEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2Rpdic6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1pbnN0YWxsLWRhdGFiYXNlLWNyZWF0ZS1zYW5kYm94LWZvb3RlcicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdmbG9hdC1yaWdodCB0ZXh0LWFsaWduLXJpZ2h0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTFmZHQxZHYxLmFwcGVuZENoaWxkKGZybTFmZHQxbGdkMWR2MWR2MSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDFkdjFkdjFidG4xID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdidXR0b24nOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtZGF0YWJhc2UtY3JlYXRlLWNhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdidXR0b24gYnV0dG9uLW91dGxpbmUtZGFuZ2VyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMWR2MWR2MWJ0bjEudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMWR2MWR2MS5hcHBlbmRDaGlsZChmcm0xZmR0MWxnZDFkdjFkdjFidG4xKTtcblxuICAgICAgICAgICAgbGV0IGZybTFmZHQxbGdkMWR2MWR2MWJ0bjIgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2J1dHRvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1kYXRhYmFzZS1jcmVhdGUtaW5zdGFsbCcsXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdidXR0b24gYnV0dG9uLW91dGxpbmUtcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZSc6ICdkaXNwbGF5Om5vbmU7J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMWR2MWR2MWJ0bjIudGV4dENvbnRlbnQgPSAnTmV4dCc7XG4gICAgICAgICAgICBmcm0xZmR0MWxnZDFkdjFkdjEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFsZ2QxZHYxZHYxYnRuMik7XG5cbiAgICAgICAgICAgIGZybTFmZHQxLmFwcGVuZENoaWxkKGZybTFmZHQxZHYxKTtcbiAgICAgICAgICAgIGZybTEuYXBwZW5kQ2hpbGQoZnJtMWZkdDEpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChmcm0xKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gcGFyZW50Tm9kZSBWYWxpZCBIVE1MIGVsZW1lbnRcbiAgICAgKiAqL1xuICAgIHNldEFwcEluc3RhbGxlckRhdGFiYXNlQ3JlYXRlRGVmYXVsdFVJKHBhcmVudE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgICAgICBsZXQgY3JlYXRlRWxlbWVudCA9IGRvbS5jcmVhdGVFbGVtZW50O1xuXG4gICAgICAgICAgICBsZXQgdHIxID0gY3JlYXRlRWxlbWVudChbeyd0cic6IHt9fV0pO1xuICAgICAgICAgICAgbGV0IHRyMXRkMSA9IGNyZWF0ZUVsZW1lbnQoW3sndGQnOiB7J2NsYXNzJzogJ2NvbC1tZC0yIGNvbC1zbS0yIGNvbC14cy0yIGNvbC14cy1wbHVzLTInfX1dKTtcbiAgICAgICAgICAgIGxldCB0cjF0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbeydsYWJlbCc6IHsnZm9yJzogJ2RiX2hvc3QnfX1dKTtcbiAgICAgICAgICAgIHRyMXRkMWxibDEudGV4dENvbnRlbnQgPSAnSG9zdCA6ICc7XG4gICAgICAgICAgICB0cjF0ZDEuYXBwZW5kQ2hpbGQodHIxdGQxbGJsMSk7XG4gICAgICAgICAgICB0cjEuYXBwZW5kQ2hpbGQodHIxdGQxKTtcblxuICAgICAgICAgICAgbGV0IHRyMXRkMiA9IGNyZWF0ZUVsZW1lbnQoW3sndGQnOiB7J2NsYXNzJzogJ2NvbC1tZC0xMCBjb2wtc20tMTAgY29sLXhzLTEwIGNvbC14cy1wbHVzLTEwJ319XSk7XG4gICAgICAgICAgICBsZXQgdHIxdGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2RiX2hvc3QnLFxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYl9ob3N0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dC1ib3gtYm90dG9tLWJvcmRlci1vbmx5JyxcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ0hvc3QgbmFtZSBvciBhZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHRyMXRkMi5hcHBlbmRDaGlsZCh0cjF0ZDJpbnB1dDEpO1xuICAgICAgICAgICAgdHIxLmFwcGVuZENoaWxkKHRyMXRkMik7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRyMSk7XG5cblxuICAgICAgICAgICAgbGV0IHRyMiA9IGNyZWF0ZUVsZW1lbnQoW3sndHInOiB7fX1dKTtcbiAgICAgICAgICAgIGxldCB0cjJ0ZDEgPSBjcmVhdGVFbGVtZW50KFt7J3RkJzogeydjbGFzcyc6ICdjb2wtbWQtMiBjb2wtc20tMiBjb2wteHMtMiBjb2wteHMtcGx1cy0yJ319XSk7XG4gICAgICAgICAgICBsZXQgdHIydGQxbGJsMSA9IGNyZWF0ZUVsZW1lbnQoW3snbGFiZWwnOiB7J2Zvcic6ICdkYl91c2VyJ319XSk7XG4gICAgICAgICAgICB0cjJ0ZDFsYmwxLnRleHRDb250ZW50ID0gJ1VzZXIgOiAnO1xuICAgICAgICAgICAgdHIydGQxLmFwcGVuZENoaWxkKHRyMnRkMWxibDEpO1xuICAgICAgICAgICAgdHIyLmFwcGVuZENoaWxkKHRyMnRkMSk7XG5cbiAgICAgICAgICAgIGxldCB0cjJ0ZDIgPSBjcmVhdGVFbGVtZW50KFt7J3RkJzogeydjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J319XSk7XG4gICAgICAgICAgICBsZXQgdHIydGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2RiX3VzZXInLFxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYl91c2VyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dC1ib3gtYm90dG9tLWJvcmRlci1vbmx5JyxcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ1VzZXJuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHRyMnRkMi5hcHBlbmRDaGlsZCh0cjJ0ZDJpbnB1dDEpO1xuICAgICAgICAgICAgdHIyLmFwcGVuZENoaWxkKHRyMnRkMik7XG5cbiAgICAgICAgICAgIGxldCB0cjJ0ZDMgPSBjcmVhdGVFbGVtZW50KFt7J3RkJzogeydjbGFzcyc6ICdjb2wtbWQtMiBjb2wtc20tMiBjb2wteHMtMiBjb2wteHMtcGx1cy0yJ319XSk7XG4gICAgICAgICAgICBsZXQgdHIydGQzbGJsMSA9IGNyZWF0ZUVsZW1lbnQoW3snbGFiZWwnOiB7J2Zvcic6ICdkYl91c2VyX3Bhc3MnfX1dKTtcbiAgICAgICAgICAgIHRyMnRkM2xibDEudGV4dENvbnRlbnQgPSAnUGFzc3dvcmQgOiAnO1xuICAgICAgICAgICAgdHIydGQzLmFwcGVuZENoaWxkKHRyMnRkM2xibDEpO1xuICAgICAgICAgICAgdHIyLmFwcGVuZENoaWxkKHRyMnRkMyk7XG5cbiAgICAgICAgICAgIGxldCB0cjJ0ZDQgPSBjcmVhdGVFbGVtZW50KFt7J3RkJzogeydjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J319XSk7XG4gICAgICAgICAgICBsZXQgdHIydGQ0aW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2RiX3VzZXJfcGFzcycsXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2RiX3VzZXJfcGFzcycsXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxuICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnUGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOiAncmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgdHIydGQ0LmFwcGVuZENoaWxkKHRyMnRkNGlucHV0MSk7XG4gICAgICAgICAgICB0cjIuYXBwZW5kQ2hpbGQodHIydGQ0KTtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHIyKTtcblxuXG4gICAgICAgICAgICBsZXQgdHIzID0gY3JlYXRlRWxlbWVudChbeyd0cic6IHt9fV0pO1xuICAgICAgICAgICAgbGV0IHRyM3RkMSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAndGQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMiBjb2wteHMtcGx1cy0xMicsXG4gICAgICAgICAgICAgICAgICAgICdjb2xzcGFuJzogJzInLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnOiAndGV4dC1hbGlnbjpjZW50ZXI7J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGxldCB0cjN0ZDFidG4xID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdidXR0b24nOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdkYl9jb25uZWN0X29ubHknLFxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYnV0dG9uIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgdHIzdGQxYnRuMS50ZXh0Q29udGVudCA9ICdDb25uZWN0JztcbiAgICAgICAgICAgIHRyM3RkMS5hcHBlbmRDaGlsZCh0cjN0ZDFidG4xKTtcbiAgICAgICAgICAgIGxldCB0cjN0ZDFidG4yID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdidXR0b24nOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdkYl9yZWNvbm5lY3Rfb25seScsXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdidXR0b24gYnV0dG9uLW91dGxpbmUtaW5mbycsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZSc6ICdkaXNwbGF5Om5vbmU7J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHRyM3RkMWJ0bjIudGV4dENvbnRlbnQgPSAnUmVjb25uZWN0JztcbiAgICAgICAgICAgIHRyM3RkMS5hcHBlbmRDaGlsZCh0cjN0ZDFidG4yKTtcbiAgICAgICAgICAgIHRyMy5hcHBlbmRDaGlsZCh0cjN0ZDEpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjMpO1xuXG5cbiAgICAgICAgICAgIC8qb24gZXZlbnQgYWRkIGVsZW1lbnQqL1xuICAgICAgICAgICAgbGV0IHRyNCA9IGNyZWF0ZUVsZW1lbnQoW3sndHInOiB7J2lkJzogJ2RiX25hbWVfcm93JywgJ3N0eWxlJzogJ2Rpc3BsYXk6bm9uZTsnfX1dKTtcbiAgICAgICAgICAgIGxldCB0cjR0ZDEgPSBjcmVhdGVFbGVtZW50KFt7J3RkJzogeydjbGFzcyc6ICdjb2wtbWQtMiBjb2wtc20tMiBjb2wteHMtMiBjb2wteHMtcGx1cy0yJ319XSk7XG4gICAgICAgICAgICBsZXQgdHI0dGQxbGJsMSA9IGNyZWF0ZUVsZW1lbnQoW3snbGFiZWwnOiB7J2Zvcic6ICdkYl9uYW1lJ319XSk7XG4gICAgICAgICAgICB0cjR0ZDFsYmwxLnRleHRDb250ZW50ID0gJ0RhdGFiYXNlcyA6ICc7XG4gICAgICAgICAgICB0cjR0ZDEuYXBwZW5kQ2hpbGQodHI0dGQxbGJsMSk7XG4gICAgICAgICAgICB0cjQuYXBwZW5kQ2hpbGQodHI0dGQxKTtcblxuICAgICAgICAgICAgbGV0IHRyNHRkMiA9IGNyZWF0ZUVsZW1lbnQoW3sndGQnOiB7J2NsYXNzJzogJ2NvbC1tZC0xMCBjb2wtc20tMTAgY29sLXhzLTEwIGNvbC14cy1wbHVzLTEwJ319XSk7XG4gICAgICAgICAgICBsZXQgdHI0dGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2RiX25hbWUnLFxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYl9uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dC1ib3gtYm90dG9tLWJvcmRlci1vbmx5JyxcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ0RhdGFiYXNlcyBuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZi5kYXRhYmFzZS5kZWZhdWx0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB0cjR0ZDIuYXBwZW5kQ2hpbGQodHI0dGQyaW5wdXQxKTtcbiAgICAgICAgICAgIHRyNC5hcHBlbmRDaGlsZCh0cjR0ZDIpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjQpO1xuXG5cbiAgICAgICAgICAgIGxldCB0cjUgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzogeydpZCc6ICdkYl9jaGFyX3RhYmxlX3ByZWZpeF9yb3cnLCAnc3R5bGUnOiAnZGlzcGxheTpub25lOyd9fV0pO1xuICAgICAgICAgICAgbGV0IHRyNXRkMSA9IGNyZWF0ZUVsZW1lbnQoW3sndGQnOiB7J2NsYXNzJzogJ2NvbC1tZC0yIGNvbC1zbS0yIGNvbC14cy0yIGNvbC14cy1wbHVzLTInfX1dKTtcbiAgICAgICAgICAgIGxldCB0cjV0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbeydsYWJlbCc6IHsnZm9yJzogJ2RiX2NoYXInfX1dKTtcbiAgICAgICAgICAgIHRyNXRkMWxibDEudGV4dENvbnRlbnQgPSAnQ2hhcnNldDonO1xuICAgICAgICAgICAgdHI1dGQxLmFwcGVuZENoaWxkKHRyNXRkMWxibDEpO1xuICAgICAgICAgICAgdHI1LmFwcGVuZENoaWxkKHRyNXRkMSk7XG5cbiAgICAgICAgICAgIGxldCB0cjV0ZDIgPSBjcmVhdGVFbGVtZW50KFt7J3RkJzogeydjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J319XSk7XG4gICAgICAgICAgICBsZXQgdHI1dGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2RiX2NoYXInLFxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYl9jaGFyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dC1ib3gtYm90dG9tLWJvcmRlci1vbmx5JyxcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ0RhdGFiYXNlcyBjaGFyc2V0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZi5kYXRhYmFzZS5kZWZhdWx0LmNoYXJzZXQsXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB0cjV0ZDIuYXBwZW5kQ2hpbGQodHI1dGQyaW5wdXQxKTtcbiAgICAgICAgICAgIHRyNS5hcHBlbmRDaGlsZCh0cjV0ZDIpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjUpO1xuXG5cbiAgICAgICAgICAgIGxldCB0cjV0ZDMgPSBjcmVhdGVFbGVtZW50KFt7J3RkJzogeydjbGFzcyc6ICdjb2wtbWQtMiBjb2wtc20tMiBjb2wteHMtMiBjb2wteHMtcGx1cy0yJ319XSk7XG4gICAgICAgICAgICBsZXQgdHI1dGQzbGJsMSA9IGNyZWF0ZUVsZW1lbnQoW3snbGFiZWwnOiB7J2Zvcic6ICdkYl90YWJsZV9wcmVmaXgnfX1dKTtcbiAgICAgICAgICAgIHRyNXRkM2xibDEudGV4dENvbnRlbnQgPSAnUHJlZml4IDogJztcbiAgICAgICAgICAgIHRyNXRkMy5hcHBlbmRDaGlsZCh0cjV0ZDNsYmwxKTtcbiAgICAgICAgICAgIHRyNS5hcHBlbmRDaGlsZCh0cjV0ZDMpO1xuXG4gICAgICAgICAgICBsZXQgdHI1dGQ0ID0gY3JlYXRlRWxlbWVudChbeyd0ZCc6IHsnY2xhc3MnOiAnY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTQgY29sLXhzLXBsdXMtNCd9fV0pO1xuICAgICAgICAgICAgbGV0IHRyNXRkNGlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdkYl90YWJsZV9wcmVmaXgnLFxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYl90YWJsZV9wcmVmaXgnLFxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxuICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnRGF0YWJhc2VzIHRhYmxlIHByZWZpeCcsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHNlbGYuZGF0YWJhc2UuZGVmYXVsdC5wcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB0cjV0ZDQuYXBwZW5kQ2hpbGQodHI1dGQ0aW5wdXQxKTtcbiAgICAgICAgICAgIHRyNS5hcHBlbmRDaGlsZCh0cjV0ZDQpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjUpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gcGFyZW50Tm9kZSBWYWxpZCBIVE1MIGVsZW1lbnRcbiAgICAgKiAqL1xuICAgIHNldEFwcEluc3RhbGxlckRhdGFiYXNlQmFzZVVJKHBhcmVudE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcbiAgICAgICAgICAgIGxldCBmcm0xID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdmb3JtJzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWRhdGFiYXNlLWluaXRpYWxpemUnLFxuICAgICAgICAgICAgICAgICAgICAnbWV0aG9kJzogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzogJ29mZidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGF0YWJhc2UnLFxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAnMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBmcm0xLmFwcGVuZENoaWxkKGZybTFpbnB1dDEpO1xuXG4gICAgICAgICAgICBsZXQgZnJtMWlucHV0MiA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdkYl9wb3J0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGJfcG9ydCcsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICczMzA2J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTEuYXBwZW5kQ2hpbGQoZnJtMWlucHV0Mik7XG5cbiAgICAgICAgICAgIGxldCBmcm0xZmR0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnZmllbGRzZXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtaW5zdGFsbC1kYXRhYmFzZS1zYW5kYm94JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2JveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2xlZ2VuZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1pbnN0YWxsLWRhdGFiYXNlLXNhbmRib3gtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYm94LXNoYWRvdyBib3gtc2hhZG93LWxpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlJzogJ2ZvbnQtd2VpZ2h0OiA2MDA7J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMS50ZXh0Q29udGVudCA9ICdEYXRhYmFzZXMgY29uZmlndXJlJztcbiAgICAgICAgICAgIGZybTFmZHQxLmFwcGVuZENoaWxkKGZybTFmZHQxbGdkMSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWR2MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnZGl2Jzoge1xuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncm93J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcblxuICAgICAgICAgICAgbGV0IGZybTFmZHQxbGdkMWR2MXRibDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ3RhYmxlJzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWluc3RhbGwtZGF0YWJhc2UtdGFncycsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0YWJsZSB0YWJsZS1jb25kZW5zZWQnLFxuICAgICAgICAgICAgICAgICAgICAnbWV0aG9kJzogJ2FwcC1pbnN0YWxsLWRhdGFiYXNlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTFmZHQxZHYxLmFwcGVuZENoaWxkKGZybTFmZHQxbGdkMWR2MXRibDEpO1xuXG4gICAgICAgICAgICBsZXQgZnJtMWZkdDFsZ2QxZHYxZHYxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdkaXYnOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtaW5zdGFsbC1kYXRhYmFzZS1zYW5kYm94LWZvb3RlcicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdmbG9hdC1yaWdodCB0ZXh0LWFsaWduLXJpZ2h0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTFmZHQxZHYxLmFwcGVuZENoaWxkKGZybTFmZHQxbGdkMWR2MWR2MSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDFkdjFkdjFidG4xID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdidXR0b24nOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtZGF0YWJhc2UtY3JlYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2J1dHRvbiBidXR0b24tb3V0bGluZS1zdWNjZXNzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMWR2MWR2MWJ0bjEudGV4dENvbnRlbnQgPSAnQ3JlYXRlIERCJztcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMWR2MWR2MS5hcHBlbmRDaGlsZChmcm0xZmR0MWxnZDFkdjFkdjFidG4xKTtcblxuICAgICAgICAgICAgbGV0IGZybTFmZHQxbGdkMWR2MWR2MWJ0bjIgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2J1dHRvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1kYXRhYmFzZS1pbnN0YWxsJyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2J1dHRvbiBidXR0b24tb3V0bGluZS1wcmltYXJ5J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMWR2MWR2MWJ0bjIudGV4dENvbnRlbnQgPSAnTmV4dCc7XG4gICAgICAgICAgICBmcm0xZmR0MWxnZDFkdjFkdjEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFsZ2QxZHYxZHYxYnRuMik7XG5cbiAgICAgICAgICAgIGZybTFmZHQxLmFwcGVuZENoaWxkKGZybTFmZHQxZHYxKTtcbiAgICAgICAgICAgIGZybTEuYXBwZW5kQ2hpbGQoZnJtMWZkdDEpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChmcm0xKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUgVmFsaWQgSFRNTCBlbGVtZW50XG4gICAgICogKi9cbiAgICBzZXRBcHBJbnN0YWxsZXJEYXRhYmFzZURlZmF1bHRVSShwYXJlbnROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcblxuICAgICAgICAgICAgbGV0IHRyMSA9IGNyZWF0ZUVsZW1lbnQoW3sndHInOiB7fX1dKTtcbiAgICAgICAgICAgIGxldCB0cjF0ZDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ3RkJzoge1xuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTQgY29sLXhzLXBsdXMtNCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG5cbiAgICAgICAgICAgIGxldCB0cjF0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdsYWJlbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Zvcic6ICdkYl9ob3N0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHRyMXRkMWxibDEudGV4dENvbnRlbnQgPSAnSG9zdCA6ICc7XG4gICAgICAgICAgICB0cjF0ZDEuYXBwZW5kQ2hpbGQodHIxdGQxbGJsMSk7XG4gICAgICAgICAgICB0cjEuYXBwZW5kQ2hpbGQodHIxdGQxKTtcblxuICAgICAgICAgICAgbGV0IHRyMXRkMiA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAndGQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtOCBjb2wtc20tOCBjb2wteHMtOCBjb2wteHMtcGx1cy04J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGxldCB0cjF0ZDJpbnB1dDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnZGJfaG9zdCcsXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2RiX2hvc3QnLFxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxuICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnRGF0YWJhc2VzXFwncyBob3N0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHRyMXRkMi5hcHBlbmRDaGlsZCh0cjF0ZDJpbnB1dDEpO1xuICAgICAgICAgICAgdHIxLmFwcGVuZENoaWxkKHRyMXRkMik7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRyMSk7XG5cblxuICAgICAgICAgICAgbGV0IHRyMiA9IGNyZWF0ZUVsZW1lbnQoW3sndHInOiB7fX1dKTtcbiAgICAgICAgICAgIGxldCB0cjJ0ZDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ3RkJzoge1xuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTQgY29sLXhzLXBsdXMtNCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG5cbiAgICAgICAgICAgIGxldCB0cjJ0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdsYWJlbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Zvcic6ICdkYl91c2VyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHRyMnRkMWxibDEudGV4dENvbnRlbnQgPSAnVXNlcm5hbWUgOiAnO1xuICAgICAgICAgICAgdHIydGQxLmFwcGVuZENoaWxkKHRyMnRkMWxibDEpO1xuICAgICAgICAgICAgdHIyLmFwcGVuZENoaWxkKHRyMnRkMSk7XG5cbiAgICAgICAgICAgIGxldCB0cjJ0ZDIgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ3RkJzoge1xuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTggY29sLXNtLTggY29sLXhzLTggY29sLXhzLXBsdXMtOCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBsZXQgdHIydGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2RiX3VzZXInLFxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYl91c2VyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dC1ib3gtYm90dG9tLWJvcmRlci1vbmx5JyxcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ0RhdGFiYXNlc1xcJ3MgdXNlcm5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOiAncmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgdHIydGQyLmFwcGVuZENoaWxkKHRyMnRkMmlucHV0MSk7XG4gICAgICAgICAgICB0cjIuYXBwZW5kQ2hpbGQodHIydGQyKTtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHIyKTtcblxuXG4gICAgICAgICAgICBsZXQgdHIzID0gY3JlYXRlRWxlbWVudChbeyd0cic6IHt9fV0pO1xuICAgICAgICAgICAgbGV0IHRyM3RkMSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAndGQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGxldCB0cjN0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdsYWJlbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Zvcic6ICdkYl91c2VyX3Bhc3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgdHIzdGQxbGJsMS50ZXh0Q29udGVudCA9ICdQYXNzd29yZCA6ICc7XG4gICAgICAgICAgICB0cjN0ZDEuYXBwZW5kQ2hpbGQodHIzdGQxbGJsMSk7XG4gICAgICAgICAgICB0cjMuYXBwZW5kQ2hpbGQodHIzdGQxKTtcblxuICAgICAgICAgICAgbGV0IHRyM3RkMiA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAndGQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtOCBjb2wtc20tOCBjb2wteHMtOCBjb2wteHMtcGx1cy04J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGxldCB0cjN0ZDJpbnB1dDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnZGJfdXNlcl9wYXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGJfdXNlcl9wYXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQtYm94LWJvdHRvbS1ib3JkZXItb25seScsXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdEYXRhYmFzZXNcXCdzIHBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHRyM3RkMi5hcHBlbmRDaGlsZCh0cjN0ZDJpbnB1dDEpO1xuICAgICAgICAgICAgdHIzLmFwcGVuZENoaWxkKHRyM3RkMik7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRyMyk7XG5cblxuICAgICAgICAgICAgbGV0IHRyNCA9IGNyZWF0ZUVsZW1lbnQoW3sndHInOiB7fX1dKTtcbiAgICAgICAgICAgIGxldCB0cjR0ZDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ3RkJzoge1xuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTQgY29sLXhzLXBsdXMtNCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBsZXQgdHI0dGQxbGJsMSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnbGFiZWwnOiB7XG4gICAgICAgICAgICAgICAgICAgICdmb3InOiAnZGJfbmFtZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB0cjR0ZDFsYmwxLnRleHRDb250ZW50ID0gJ0RhdGFiYXNlcyA6ICc7XG4gICAgICAgICAgICB0cjR0ZDEuYXBwZW5kQ2hpbGQodHI0dGQxbGJsMSk7XG4gICAgICAgICAgICB0cjQuYXBwZW5kQ2hpbGQodHI0dGQxKTtcblxuICAgICAgICAgICAgbGV0IHRyNHRkMiA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAndGQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtOCBjb2wtc20tOCBjb2wteHMtOCBjb2wteHMtcGx1cy04J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGxldCB0cjR0ZDJpbnB1dDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnZGJfbmFtZScsXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2RiX25hbWUnLFxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxuICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnRGF0YWJhc2VzXFwncyBuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZi5kYXRhYmFzZS5kZWZhdWx0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB0cjR0ZDIuYXBwZW5kQ2hpbGQodHI0dGQyaW5wdXQxKTtcbiAgICAgICAgICAgIHRyNC5hcHBlbmRDaGlsZCh0cjR0ZDIpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjQpO1xuXG5cbiAgICAgICAgICAgIGxldCB0cjUgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzoge319XSk7XG4gICAgICAgICAgICBsZXQgdHI1dGQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICd0ZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC00IGNvbC1zbS00IGNvbC14cy00IGNvbC14cy1wbHVzLTQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgbGV0IHRyNXRkMWxibDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2xhYmVsJzoge1xuICAgICAgICAgICAgICAgICAgICAnZm9yJzogJ2RiX2NoYXInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgdHI1dGQxbGJsMS50ZXh0Q29udGVudCA9ICdDaGFyc2V0IDogJztcbiAgICAgICAgICAgIHRyNXRkMS5hcHBlbmRDaGlsZCh0cjV0ZDFsYmwxKTtcbiAgICAgICAgICAgIHRyNS5hcHBlbmRDaGlsZCh0cjV0ZDEpO1xuXG4gICAgICAgICAgICBsZXQgdHI1dGQyID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICd0ZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC04IGNvbC1zbS04IGNvbC14cy04IGNvbC14cy1wbHVzLTgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgbGV0IHRyNXRkMmlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdkYl9jaGFyJyxcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGJfY2hhcicsXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQtYm94LWJvdHRvbS1ib3JkZXItb25seScsXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdEYXRhIGNoYXIgc2V0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZi5kYXRhYmFzZS5kZWZhdWx0LmNoYXJzZXQsXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB0cjV0ZDIuYXBwZW5kQ2hpbGQodHI1dGQyaW5wdXQxKTtcbiAgICAgICAgICAgIHRyNS5hcHBlbmRDaGlsZCh0cjV0ZDIpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjUpO1xuXG5cbiAgICAgICAgICAgIGxldCB0cjYgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzoge319XSk7XG4gICAgICAgICAgICBsZXQgdHI2dGQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICd0ZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC00IGNvbC1zbS00IGNvbC14cy00IGNvbC14cy1wbHVzLTQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgbGV0IHRyNnRkMWxibDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2xhYmVsJzoge1xuICAgICAgICAgICAgICAgICAgICAnZm9yJzogJ2RiX3RhYmxlX3ByZWZpeCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB0cjZ0ZDFsYmwxLnRleHRDb250ZW50ID0gJ1RhYmxlIHByZWZpeCA6ICc7XG4gICAgICAgICAgICB0cjZ0ZDEuYXBwZW5kQ2hpbGQodHI2dGQxbGJsMSk7XG4gICAgICAgICAgICB0cjYuYXBwZW5kQ2hpbGQodHI2dGQxKTtcblxuICAgICAgICAgICAgbGV0IHRyNnRkMiA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAndGQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtOCBjb2wtc20tOCBjb2wteHMtOCBjb2wteHMtcGx1cy04J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGxldCB0cjZ0ZDJpbnB1dDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnZGJfdGFibGVfcHJlZml4JyxcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGJfdGFibGVfcHJlZml4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dC1ib3gtYm90dG9tLWJvcmRlci1vbmx5JyxcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ0RhdGFiYXNlcyBwcmVmaXgnLFxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBzZWxmLmRhdGFiYXNlLmRlZmF1bHQucHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOiAncmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgdHI2dGQyLmFwcGVuZENoaWxkKHRyNnRkMmlucHV0MSk7XG4gICAgICAgICAgICB0cjYuYXBwZW5kQ2hpbGQodHI2dGQyKTtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHI2KTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUgVmFsaWQgSFRNTCBlbGVtZW50XG4gICAgICogKi9cbiAgICBzZXRBcHBJbnN0YWxsZXJBY2NvdW50QmFzZVVJKHBhcmVudE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcblxuICAgICAgICAgICAgbGV0IGZybTEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2Zvcm0nOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtYWNjb3VudC1pbml0aWFsaXplJyxcbiAgICAgICAgICAgICAgICAgICAgJ21ldGhvZCc6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuXG4gICAgICAgICAgICBsZXQgZnJtMWlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2FjY291bnQnLFxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAnMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBmcm0xLmFwcGVuZENoaWxkKGZybTFpbnB1dDEpO1xuXG4gICAgICAgICAgICBsZXQgZnJtMWZkdDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2ZpZWxkc2V0Jzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWluc3RhbGwtYWNjb3VudC1zYW5kYm94JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2JveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2xlZ2VuZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1pbnN0YWxsLWFjY291bnQtc2FuZGJveC10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdib3gtc2hhZG93IGJveC1zaGFkb3ctbGlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnOiAnZm9udC13ZWlnaHQ6IDYwMDsnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgZnJtMWZkdDFsZ2QxLnRleHRDb250ZW50ID0gJ0FjY291bnQgY29uZmlndXJlJztcbiAgICAgICAgICAgIGZybTFmZHQxLmFwcGVuZENoaWxkKGZybTFmZHQxbGdkMSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWR2MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnZGl2Jzoge1xuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncm93J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcblxuICAgICAgICAgICAgbGV0IGZybTFmZHQxbGdkMWR2MXRibDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ3RhYmxlJzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWluc3RhbGwtYWNjb3VudC10YWdzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RhYmxlIHRhYmxlLWNvbmRlbnNlZCcsXG4gICAgICAgICAgICAgICAgICAgICdtZXRob2QnOiAnYXBwLWluc3RhbGwtYWNjb3VudCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBmcm0xZmR0MWR2MS5hcHBlbmRDaGlsZChmcm0xZmR0MWxnZDFkdjF0YmwxKTtcblxuICAgICAgICAgICAgbGV0IGZybTFmZHQxbGdkMWR2MWR2MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnZGl2Jzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWluc3RhbGwtYWNjb3VudC1zYW5kYm94LWZvb3RlcicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdmbG9hdC1yaWdodCB0ZXh0LWFsaWduLXJpZ2h0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTFmZHQxZHYxLmFwcGVuZENoaWxkKGZybTFmZHQxbGdkMWR2MWR2MSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDFkdjFkdjFidG4yID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdidXR0b24nOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtYWNjb3VudC1pbnN0YWxsJyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2J1dHRvbiBidXR0b24tb3V0bGluZS1wcmltYXJ5J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMWR2MWR2MWJ0bjIudGV4dENvbnRlbnQgPSAnTmV4dCc7XG4gICAgICAgICAgICBmcm0xZmR0MWxnZDFkdjFkdjEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFsZ2QxZHYxZHYxYnRuMik7XG5cbiAgICAgICAgICAgIGZybTFmZHQxLmFwcGVuZENoaWxkKGZybTFmZHQxZHYxKTtcbiAgICAgICAgICAgIGZybTEuYXBwZW5kQ2hpbGQoZnJtMWZkdDEpO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF0pIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChmcm0xKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUgVmFsaWQgSFRNTCBlbGVtZW50XG4gICAgICogKi9cbiAgICBzZXRBcHBJbnN0YWxsZXJBY2NvdW50RGVmYXVsdFVJKHBhcmVudE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcbiAgICAgICAgICAgIGxldCB0cjEgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzoge319XSk7XG4gICAgICAgICAgICBsZXQgdHIxdGQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICd0ZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC00IGNvbC1zbS00IGNvbC14cy00IGNvbC14cy1wbHVzLTQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuXG4gICAgICAgICAgICBsZXQgdHIxdGQxbGJsMSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnbGFiZWwnOiB7XG4gICAgICAgICAgICAgICAgICAgICdmb3InOiAnYWNjX2FkbV91c2VybmFtZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB0cjF0ZDFsYmwxLnRleHRDb250ZW50ID0gJ1VzZXJuYW1lIDogJztcbiAgICAgICAgICAgIHRyMXRkMS5hcHBlbmRDaGlsZCh0cjF0ZDFsYmwxKTtcbiAgICAgICAgICAgIHRyMS5hcHBlbmRDaGlsZCh0cjF0ZDEpO1xuXG4gICAgICAgICAgICBsZXQgdHIxdGQyID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICd0ZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC04IGNvbC1zbS04IGNvbC14cy04IGNvbC14cy1wbHVzLTgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgbGV0IHRyMXRkMmlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhY2NfYWRtX3VzZXJuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnYWNjX2FkbV91c2VybmFtZScsXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQtYm94LWJvdHRvbS1ib3JkZXItb25seScsXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdVc2VybmFtZScsXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICdwYXR0ZXJuJzogJ1thLXowLTldezgsfSQnLFxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnTXVzdCBjb250YWluIGNoYXJhY3RlcnMgYW5kIGF0IGxlYXN0IDggbGV0dGVycyBmcm9tIGEgdG8geicsXG4gICAgICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHRyMXRkMi5hcHBlbmRDaGlsZCh0cjF0ZDJpbnB1dDEpO1xuICAgICAgICAgICAgdHIxLmFwcGVuZENoaWxkKHRyMXRkMik7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRyMSk7XG5cblxuICAgICAgICAgICAgbGV0IHRyMiA9IGNyZWF0ZUVsZW1lbnQoW3sndHInOiB7fX1dKTtcbiAgICAgICAgICAgIGxldCB0cjJ0ZDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ3RkJzoge1xuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTQgY29sLXhzLXBsdXMtNCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG5cbiAgICAgICAgICAgIGxldCB0cjJ0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdsYWJlbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Zvcic6ICdhY2NfYWRtX2VtYWlsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHRyMnRkMWxibDEudGV4dENvbnRlbnQgPSAnRS1tYWlsIDogJztcbiAgICAgICAgICAgIHRyMnRkMS5hcHBlbmRDaGlsZCh0cjJ0ZDFsYmwxKTtcbiAgICAgICAgICAgIHRyMi5hcHBlbmRDaGlsZCh0cjJ0ZDEpO1xuXG4gICAgICAgICAgICBsZXQgdHIydGQyID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICd0ZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC04IGNvbC1zbS04IGNvbC14cy04IGNvbC14cy1wbHVzLTgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgbGV0IHRyMnRkMmlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhY2NfYWRtX2VtYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnYWNjX2FkbV9lbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxuICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnRS1tYWlsIGFkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAncGF0dGVybic6ICdbYS16MC05Ll8lKy1dK0BbYS16MC05Li1dK1xcXFwuW2Etel17Mix9JCcsXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdNdXN0IGNvbnRhaW4gYXQgY2hhcmFjdGVyc0BjaGFyYWN0ZXJzLmRvbWFpbiAoY2hhcmFjdGVycyBmb2xsb3dlZCBieSBhbiBAIHNpZ24sIGZvbGxvd2VkIGJ5IG1vcmUgY2hhcmFjdGVycywgYW5kIHRoZW4gYSBcXCcuXFwnLiBBZnRlciB0aGUgXFwnLlxcJyBzaWduLCBhZGQgYXQgbGVhc3QgMiBsZXR0ZXJzIGZyb20gYSB0byB6JyxcbiAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgdHIydGQyLmFwcGVuZENoaWxkKHRyMnRkMmlucHV0MSk7XG4gICAgICAgICAgICB0cjIuYXBwZW5kQ2hpbGQodHIydGQyKTtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHIyKTtcblxuXG4gICAgICAgICAgICBsZXQgdHIzID0gY3JlYXRlRWxlbWVudChbeyd0cic6IHt9fV0pO1xuICAgICAgICAgICAgbGV0IHRyM3RkMSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAndGQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGxldCB0cjN0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdsYWJlbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Zvcic6ICdhY2NfYWRtX3Bhc3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgdHIzdGQxbGJsMS50ZXh0Q29udGVudCA9ICdQYXNzd29yZCA6ICc7XG4gICAgICAgICAgICB0cjN0ZDEuYXBwZW5kQ2hpbGQodHIzdGQxbGJsMSk7XG4gICAgICAgICAgICB0cjMuYXBwZW5kQ2hpbGQodHIzdGQxKTtcblxuICAgICAgICAgICAgbGV0IHRyM3RkMiA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAndGQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtOCBjb2wtc20tOCBjb2wteHMtOCBjb2wteHMtcGx1cy04J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGxldCB0cjN0ZDJpbnB1dDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYWNjX2FkbV9wYXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnYWNjX2FkbV9wYXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQtYm94LWJvdHRvbS1ib3JkZXItb25seScsXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdQYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICdwYXR0ZXJuJzogJyg/PS4qXFxcXGQpKD89LipbQF9dKSg/PS4qW2Etel0pKD89LipbQS1aXSkuezYsfScsXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdNdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lICBudW1iZXIgYW5kIG9uZSB1cHBlcmNhc2UgYW5kIGxvd2VyY2FzZSBsZXR0ZXIgYW5kIGF0IGxlYXN0IDYgb3IgbW9yZSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgdHIzdGQyLmFwcGVuZENoaWxkKHRyM3RkMmlucHV0MSk7XG4gICAgICAgICAgICB0cjMuYXBwZW5kQ2hpbGQodHIzdGQyKTtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHIzKTtcblxuXG4gICAgICAgICAgICBsZXQgdHI0ID0gY3JlYXRlRWxlbWVudChbeyd0cic6IHt9fV0pO1xuICAgICAgICAgICAgbGV0IHRyNHRkMSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAndGQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGxldCB0cjR0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdsYWJlbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Zvcic6ICdhY2NfYWRtX2NuZl9wYXNzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHRyNHRkMWxibDEudGV4dENvbnRlbnQgPSAnUmV0eXBlIFBhc3N3b3JkIDogJztcbiAgICAgICAgICAgIHRyNHRkMS5hcHBlbmRDaGlsZCh0cjR0ZDFsYmwxKTtcbiAgICAgICAgICAgIHRyNC5hcHBlbmRDaGlsZCh0cjR0ZDEpO1xuXG4gICAgICAgICAgICBsZXQgdHI0dGQyID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICd0ZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC04IGNvbC1zbS04IGNvbC14cy04IGNvbC14cy1wbHVzLTgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgbGV0IHRyNHRkMmlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhY2NfYWRtX2NuZl9wYXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnYWNjX2FkbV9jbmZfcGFzcycsXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxuICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnUmV0eXBlIHBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BhdHRlcm4nOiAnKD89LipcXFxcZCkoPz0uKltAX10pKD89LipbYS16XSkoPz0uKltBLVpdKS57Nix9JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ011c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgIG51bWJlciBhbmQgb25lIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlciBhbmQgYXQgbGVhc3QgNiBvciBtb3JlIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzogJ29mZidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB0cjR0ZDIuYXBwZW5kQ2hpbGQodHI0dGQyaW5wdXQxKTtcbiAgICAgICAgICAgIHRyNC5hcHBlbmRDaGlsZCh0cjR0ZDIpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjQpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gcGFyZW50Tm9kZSBWYWxpZCBIVE1MIGVsZW1lbnRcbiAgICAgKiAqL1xuICAgIHNldEFwcEluc3RhbGxlcldlYnNpdGVCYXNlVUkocGFyZW50Tm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgICAgICBsZXQgY3JlYXRlRWxlbWVudCA9IGRvbS5jcmVhdGVFbGVtZW50O1xuICAgICAgICAgICAgbGV0IGZybTEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2Zvcm0nOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtd2Vic2l0ZS1pbml0aWFsaXplJyxcbiAgICAgICAgICAgICAgICAgICAgJ21ldGhvZCc6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuXG4gICAgICAgICAgICBsZXQgZnJtMWlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ3dlYnNpdGUnLFxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAnMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBmcm0xLmFwcGVuZENoaWxkKGZybTFpbnB1dDEpO1xuXG4gICAgICAgICAgICBsZXQgZnJtMWZkdDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2ZpZWxkc2V0Jzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWluc3RhbGwtd2Vic2l0ZS1zYW5kYm94JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2JveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2xlZ2VuZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1pbnN0YWxsLXdlYnNpdGUtc2FuZGJveC10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdib3gtc2hhZG93IGJveC1zaGFkb3ctbGlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnOiAnZm9udC13ZWlnaHQ6IDYwMDsnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgZnJtMWZkdDFsZ2QxLnRleHRDb250ZW50ID0gJ1dlYnNpdGUgY29uZmlndXJlJztcbiAgICAgICAgICAgIGZybTFmZHQxLmFwcGVuZENoaWxkKGZybTFmZHQxbGdkMSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWR2MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnZGl2Jzoge1xuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncm93J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcblxuICAgICAgICAgICAgbGV0IGZybTFmZHQxbGdkMWR2MXRibDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ3RhYmxlJzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWluc3RhbGwtd2Vic2l0ZS10YWdzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RhYmxlIHRhYmxlLWNvbmRlbnNlZCcsXG4gICAgICAgICAgICAgICAgICAgICdtZXRob2QnOiAnYXBwLWluc3RhbGwtd2Vic2l0ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBmcm0xZmR0MWR2MS5hcHBlbmRDaGlsZChmcm0xZmR0MWxnZDFkdjF0YmwxKTtcblxuICAgICAgICAgICAgbGV0IGZybTFmZHQxbGdkMWR2MWR2MSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnZGl2Jzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWluc3RhbGwtd2Vic2l0ZS1zYW5kYm94LWZvb3RlcicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdmbG9hdC1yaWdodCB0ZXh0LWFsaWduLXJpZ2h0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTFmZHQxZHYxLmFwcGVuZENoaWxkKGZybTFmZHQxbGdkMWR2MWR2MSk7XG5cbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDFkdjFkdjFidG4yID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdidXR0b24nOiB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtd2Vic2l0ZS1pbnN0YWxsJyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2J1dHRvbiBidXR0b24tb3V0bGluZS1wcmltYXJ5J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMWR2MWR2MWJ0bjIudGV4dENvbnRlbnQgPSAnRmluaXNoJztcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMWR2MWR2MS5hcHBlbmRDaGlsZChmcm0xZmR0MWxnZDFkdjFkdjFidG4yKTtcblxuICAgICAgICAgICAgZnJtMWZkdDEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFkdjEpO1xuICAgICAgICAgICAgZnJtMS5hcHBlbmRDaGlsZChmcm0xZmR0MSk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGZybTEpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gcGFyZW50Tm9kZSBWYWxpZCBIVE1MIGVsZW1lbnRcbiAgICAgKiAqL1xuICAgIHNldEFwcEluc3RhbGxlcldlYnNpdGVEZWZhdWx0VUkocGFyZW50Tm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgICAgIGxldCBjcmVhdGVFbGVtZW50ID0gZG9tLmNyZWF0ZUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGxldCB0cjEgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzoge319XSk7XG4gICAgICAgICAgICBsZXQgdHIxdGQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICd0ZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC00IGNvbC1zbS00IGNvbC14cy00IGNvbC14cy1wbHVzLTQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuXG4gICAgICAgICAgICBsZXQgdHIxdGQxbGJsMSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAnbGFiZWwnOiB7XG4gICAgICAgICAgICAgICAgICAgICdmb3InOiAnc2l0ZV9uYW1lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHRyMXRkMWxibDEudGV4dENvbnRlbnQgPSAnTmV3IG5hbWUgOiAnO1xuICAgICAgICAgICAgdHIxdGQxLmFwcGVuZENoaWxkKHRyMXRkMWxibDEpO1xuICAgICAgICAgICAgdHIxLmFwcGVuZENoaWxkKHRyMXRkMSk7XG5cbiAgICAgICAgICAgIGxldCB0cjF0ZDIgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ3RkJzoge1xuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTggY29sLXNtLTggY29sLXhzLTggY29sLXhzLXBsdXMtOCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBsZXQgdHIxdGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NpdGVfbmFtZScsXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ3NpdGVfbmFtZScsXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQtYm94LWJvdHRvbS1ib3JkZXItb25seScsXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgdHIxdGQyLmFwcGVuZENoaWxkKHRyMXRkMmlucHV0MSk7XG4gICAgICAgICAgICB0cjEuYXBwZW5kQ2hpbGQodHIxdGQyKTtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHIxKTtcblxuXG4gICAgICAgICAgICBsZXQgdHIyID0gY3JlYXRlRWxlbWVudChbeyd0cic6IHt9fV0pO1xuICAgICAgICAgICAgbGV0IHRyMnRkMSA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAndGQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcblxuICAgICAgICAgICAgbGV0IHRyMnRkMWxibDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2xhYmVsJzoge1xuICAgICAgICAgICAgICAgICAgICAnZm9yJzogJ3NpdGVfZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgdHIydGQxbGJsMS50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbiA6ICc7XG4gICAgICAgICAgICB0cjJ0ZDEuYXBwZW5kQ2hpbGQodHIydGQxbGJsMSk7XG4gICAgICAgICAgICB0cjIuYXBwZW5kQ2hpbGQodHIydGQxKTtcblxuICAgICAgICAgICAgbGV0IHRyMnRkMiA9IGNyZWF0ZUVsZW1lbnQoW3tcbiAgICAgICAgICAgICAgICAndGQnOiB7XG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtOCBjb2wtc20tOCBjb2wteHMtOCBjb2wteHMtcGx1cy04J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIGxldCB0cjJ0ZDJpbnB1dDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ3RleHRhcmVhJzoge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2l0ZV9kZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ3NpdGVfZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQtYm94LWJvdHRvbS1ib3JkZXItb25seScsXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdEZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlJzogJ3dpZHRoOjEwMCUgIWltcG9ydGFudCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB0cjJ0ZDIuYXBwZW5kQ2hpbGQodHIydGQyaW5wdXQxKTtcbiAgICAgICAgICAgIHRyMi5hcHBlbmRDaGlsZCh0cjJ0ZDIpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjIpO1xuXG5cbiAgICAgICAgICAgIGxldCB0cjMgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzoge319XSk7XG4gICAgICAgICAgICBsZXQgdHIzdGQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICd0ZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC00IGNvbC1zbS00IGNvbC14cy00IGNvbC14cy1wbHVzLTQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgbGV0IHRyM3RkMWxibDEgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ2xhYmVsJzoge1xuICAgICAgICAgICAgICAgICAgICAnZm9yJzogJ3NpdGVfY29tcGFueSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB0cjN0ZDFsYmwxLnRleHRDb250ZW50ID0gJ0NvbXBhbnkgOiAnO1xuICAgICAgICAgICAgdHIzdGQxLmFwcGVuZENoaWxkKHRyM3RkMWxibDEpO1xuICAgICAgICAgICAgdHIzLmFwcGVuZENoaWxkKHRyM3RkMSk7XG5cbiAgICAgICAgICAgIGxldCB0cjN0ZDIgPSBjcmVhdGVFbGVtZW50KFt7XG4gICAgICAgICAgICAgICAgJ3RkJzoge1xuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTggY29sLXNtLTggY29sLXhzLTggY29sLXhzLXBsdXMtOCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICBsZXQgdHIzdGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NpdGVfY29tcGFueScsXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ3NpdGVfY29tcGFueScsXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQtYm94LWJvdHRvbS1ib3JkZXItb25seScsXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdDb21wYW55JyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZi5kYXRhYmFzZS5kZWZhdWx0LmNvbXBhbnlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzogJ29mZidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB0cjN0ZDIuYXBwZW5kQ2hpbGQodHIzdGQyaW5wdXQxKTtcbiAgICAgICAgICAgIHRyMy5hcHBlbmRDaGlsZCh0cjN0ZDIpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjMpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pO1xuXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==