(self["webpackChunk"] = self["webpackChunk"] || []).push([["typescripts_mishusoft_Installer_ts"],{

/***/ "./typescripts/mishusoft/Installer.ts":
/*!********************************************!*\
  !*** ./typescripts/mishusoft/Installer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MishusoftInstaller": function() { return /* binding */ MishusoftInstaller; }
/* harmony export */ });
var MishusoftInstaller = /** @class */ (function () {
    function MishusoftInstaller(rootUrl, database) {
        this.rootUrl = rootUrl;
        this.database = database;
        this.installationUrl = this.rootUrl + "install";
    }
    MishusoftInstaller.prototype.play = function () {
        var self = this;
        window.addEventListener('load', function () {
            self.appInstallerBaseUI();
            __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
                dom.captureElement('#app-installer').addEventListener('click', function () {
                    __webpack_require__.e(/*! import() */ "typescripts_common_message_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./typescripts/common/message.ts")).then(function (message) {
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
    };
    ;
    MishusoftInstaller.prototype.appInstallerBaseUI = function () {
        //Application's Meta Tags
        var self = this;
        var appHeader = document.head;
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var captureElement = dom.captureElement;
            var createElement = dom.createElement;
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
            var appBody = document.body;
            var dv1 = createElement([{
                    "div": {
                        "id": "app-setup-box",
                        "class": "app-setup-box",
                        /*"style": "display: none;"*/
                    }
                }]);
            var dv2 = createElement([{
                    "div": {
                        "class": "box-panel box-panel-primary"
                    }
                }]);
            /*installer header*/
            var dv3 = createElement([{
                    "div": {
                        "id": "app-installer-header",
                        "class": "box-panel-header",
                        "style": "text-align:center;"
                    }
                }]);
            dv3.textContent = self.database.default.text.welcome;
            dv2.appendChild(dv3);
            /*installer body*/
            var dv4 = createElement([{
                    "div": {
                        "id": "box-panel-body",
                        "class": "box-panel-body",
                        "style": "text-align:center;"
                    }
                }]);
            var img2 = createElement([{
                    "img": {
                        "id": "app-company-logo",
                        "alt": "Logo",
                        "class": "app-company-logo",
                        "src": self.database.content.folder.logos + "mishusoft-logo-lite.webp"
                    }
                }]);
            dv4.appendChild(img2);
            var p1 = createElement([{
                    "p": {
                        "class": "app-description-text"
                    }
                }]);
            p1.textContent = self.database.default.text.description;
            dv4.appendChild(p1);
            var p2 = createElement([{
                    "p": {
                        "class": "app-description-text"
                    }
                }]);
            p2.textContent = self.database.default.text.install_state;
            dv4.appendChild(p2);
            var fieldset = createElement([{
                    "fieldset": {
                        "class": "flex-group flex-row box-shadow box-shadow-light",
                        "style": "line-height: 1.5;font-size:14px"
                    }
                }]);
            dv4.appendChild(fieldset);
            /*<legend id="app-install-database-sandbox-title" class="box-shadow box-shadow-light" style="font-weight: 600;">Databases configure</legend>*/
            var legend = createElement([{
                    "legend": {
                        "class": "box-shadow box-shadow-light",
                        "style": "font-weight: 600;"
                    }
                }]);
            legend.textContent = 'Server configure';
            fieldset.appendChild(legend);
            var apache_server_php_area = createElement([{
                    "div": {
                        "style": "width: 100%;display: inherit;margin-bottom: 5px;"
                    }
                }]);
            fieldset.appendChild(apache_server_php_area);
            var apache = createElement([{
                    "div": {
                        "style": "width: 45%;"
                    }
                }]);
            apache.innerHTML = '<span style="font-weight: 700;">SERVER</span> : ' + captureElement('#runtime-server-name-version').content.substr(0, 20);
            apache_server_php_area.appendChild(apache);
            var ip = createElement([{
                    "div": {
                        "style": "width: 35%;"
                    }
                }]);
            ip.innerHTML = '<span style="font-weight: 700;">IP</span> : ' + captureElement('#runtime-host-ip').content;
            apache_server_php_area.appendChild(ip);
            var php = createElement([{
                    "div": {
                        "style": "width: 20%;"
                    }
                }]);
            php.innerHTML = '<span style="font-weight: 700;">PHP</span> : ' + captureElement('#runtime-php-version').content;
            apache_server_php_area.appendChild(php);
            var host = createElement([{
                    "div": {
                        "style": "width: 100%;"
                    }
                }]);
            host.innerHTML = '<span style="font-weight: 700;">HOST NAME</span> : ' + captureElement('#runtime-host-name').content + ' on ' + captureElement('#runtime-host-os').content + ' ' + captureElement('#runtime-host-architecture').content;
            fieldset.appendChild(host);
            //Linux developer 5.7.9-1-MANJARO #1 SMP PREEMPT Thu Jul 16 08:20:05 UTC 2020 x86_64
            var btn1 = createElement([{
                    "button": {
                        "id": "app-installer",
                        "class": "button button-lg button-outline-success"
                    }
                }]);
            btn1.textContent = 'Install';
            dv4.appendChild(btn1);
            dv2.appendChild(dv4);
            /*installer footer*/
            var footer = createElement([{
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
    };
    ;
    /**
     * @param message JSON object
     * */
    MishusoftInstaller.prototype.appRuntimeEventManager = function (message) {
        var self = this;
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var captureElement = dom.captureElement;
            var createElement = dom.createElement;
            var parentNode = captureElement('#box-panel-body');
            var app_title = captureElement('#app-title');
            var app_installer_header = captureElement('#app-installer-header');
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
                            Object.keys(message.env.installation.message.extra.enable).forEach(function (key) {
                                captureElement('#' + message.env.installation.message.extra.enable[key]).removeAttribute('disabled');
                            });
                        }
                        if (message.env.installation.message.extra.disable !== undefined) {
                            Object.keys(message.env.installation.message.extra.disable).forEach(function (key) {
                                captureElement('#' + message.env.installation.message.extra.disable[key]).setAttribute('disabled', 'disabled');
                            });
                        }
                        if (message.env.installation.message.extra.show !== undefined) {
                            Object.keys(message.env.installation.message.extra.show).forEach(function (key) {
                                captureElement('#' + message.env.installation.message.extra.show[key]).removeAttribute('style');
                            });
                        }
                        if (message.env.installation.message.extra.hide !== undefined) {
                            Object.keys(message.env.installation.message.extra.hide).forEach(function (key) {
                                captureElement('#' + message.env.installation.message.extra.hide[key]).setAttribute('style', 'display:none;');
                            });
                        }
                        if (message.env.installation.message.extra.text_change !== undefined) {
                            Object.keys(message.env.installation.message.extra.text_change).forEach(function () {
                                captureElement('#' + message.env.installation.message.extra.text_change['id']).textContent = message.env.installation.message.extra.text_change['text'];
                            });
                        }
                    }
                    if (captureElement('#messagezone') === null || captureElement('#messagezone') === undefined) {
                        self.setRuntimeEventMessageZone(parentNode);
                    }
                    var messageBoard = createElement([{ 'div': { 'id': 'messageboard' } }]), msg_prefix = void 0;
                    if (message.env.installation.message.type === 'error') {
                        messageBoard.setAttribute('class', 'box-message box-danger box-shadow box-shadow-light');
                        msg_prefix = '<b class="text-danger" style="float: left;">Error&nbsp;:&nbsp;</b>';
                    }
                    else {
                        messageBoard.setAttribute('class', 'box-message box-success box-shadow box-shadow-light');
                        msg_prefix = '<b class="text-success" style="float: left;">Message&nbsp;:&nbsp;</b>';
                    }
                    messageBoard.innerHTML = msg_prefix + message.env.installation.message.text;
                    var messageArea = captureElement('#messagezone');
                    if (messageArea.style.display === 'none') {
                        messageArea.style.display = 'block';
                        messageArea.appendChild(messageBoard);
                    }
                    else {
                        messageArea.textContent = '';
                        messageArea.appendChild(messageBoard);
                    }
                }
                __webpack_require__.e(/*! import() */ "typescripts_common_message_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./typescripts/common/message.ts")).then(function (messageRequest) {
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
    };
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    MishusoftInstaller.prototype.setAppInstallerIcon = function (parentNode) {
        var self = this;
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var createElement = dom.createElement;
            var img1 = createElement([{
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
    };
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    MishusoftInstaller.prototype.setRuntimeEventMessageZone = function (parentNode) {
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var createElement = dom.createElement;
            var dv5 = createElement([{
                    'div': {
                        'id': 'messagezone',
                        'style': 'width:inherit;display: none;'
                    }
                }]);
            parentNode.appendChild(dv5);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ;
    /**
     * @param parentNode valid HTML Element*/
    MishusoftInstaller.prototype.setAppInstallerDBMSSelectionUI = function (parentNode) {
        var self = this;
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var createElement = dom.createElement;
            var panel = createElement([{
                    'div': {
                        'style': 'width: 100%; text-align: center !important;display: inline-block;'
                    }
                }]);
            var child01 = createElement([{
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
            var child02 = createElement([{
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
    };
    ;
    MishusoftInstaller.prototype.sendSelectRequest = function (node) {
        var self = this;
        __webpack_require__.e(/*! import() */ "typescripts_common_message_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./typescripts/common/message.ts")).then(function (message) {
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
    };
    /**
     * @param parentNode Valid HTML element
     * */
    MishusoftInstaller.prototype.setAppInstallerDatabaseCreateBaseUI = function (parentNode) {
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var createElement = dom.createElement;
            var frm1 = createElement([{
                    'form': {
                        'id': 'app-database-create-initialize',
                        'method': 'post',
                        'autocomplete': 'off'
                    }
                }]);
            var frm1input1 = createElement([{ 'input': { 'type': 'hidden', 'name': 'database', 'value': 'create' } }]);
            frm1.appendChild(frm1input1);
            var frm1input2 = createElement([{
                    'input': {
                        'id': 'db_port',
                        'type': 'hidden',
                        'name': 'db_port',
                        'value': '3306'
                    }
                }]);
            frm1.appendChild(frm1input2);
            var frm1fdt1 = createElement([{
                    'fieldset': {
                        'id': 'app-install-database-create-sandbox',
                        'class': 'box-shadow box-shadow-light'
                    }
                }]);
            var frm1fdt1lgd1 = createElement([{
                    'legend': {
                        'id': 'app-install-database-create-sandbox-title',
                        'class': 'box-shadow box-shadow-light',
                        'style': 'font-weight: 600;'
                    }
                }]);
            frm1fdt1lgd1.textContent = 'Databases Create';
            frm1fdt1.appendChild(frm1fdt1lgd1);
            var frm1fdt1dv1 = createElement([{ 'div': { 'class': 'row' } }]);
            var frm1fdt1lgd1dv1tbl1 = createElement([{
                    'table': {
                        'id': 'app-install-database-create-tags',
                        'class': 'table table-condensed',
                        'method': 'app-install-database-create'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
            var frm1fdt1lgd1dv1dv1 = createElement([{
                    'div': {
                        'id': 'app-install-database-create-sandbox-footer',
                        'class': 'float-right text-align-right'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
            var frm1fdt1lgd1dv1dv1btn1 = createElement([{
                    'button': {
                        'id': 'app-database-create-cancel',
                        'type': 'button',
                        'class': 'button button-outline-danger'
                    }
                }]);
            frm1fdt1lgd1dv1dv1btn1.textContent = 'Cancel';
            frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn1);
            var frm1fdt1lgd1dv1dv1btn2 = createElement([{
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
    };
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    MishusoftInstaller.prototype.setAppInstallerDatabaseCreateDefaultUI = function (parentNode) {
        var self = this;
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var createElement = dom.createElement;
            var tr1 = createElement([{ 'tr': {} }]);
            var tr1td1 = createElement([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
            var tr1td1lbl1 = createElement([{ 'label': { 'for': 'db_host' } }]);
            tr1td1lbl1.textContent = 'Host : ';
            tr1td1.appendChild(tr1td1lbl1);
            tr1.appendChild(tr1td1);
            var tr1td2 = createElement([{ 'td': { 'class': 'col-md-10 col-sm-10 col-xs-10 col-xs-plus-10' } }]);
            var tr1td2input1 = createElement([{
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
            var tr2 = createElement([{ 'tr': {} }]);
            var tr2td1 = createElement([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
            var tr2td1lbl1 = createElement([{ 'label': { 'for': 'db_user' } }]);
            tr2td1lbl1.textContent = 'User : ';
            tr2td1.appendChild(tr2td1lbl1);
            tr2.appendChild(tr2td1);
            var tr2td2 = createElement([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
            var tr2td2input1 = createElement([{
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
            var tr2td3 = createElement([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
            var tr2td3lbl1 = createElement([{ 'label': { 'for': 'db_user_pass' } }]);
            tr2td3lbl1.textContent = 'Password : ';
            tr2td3.appendChild(tr2td3lbl1);
            tr2.appendChild(tr2td3);
            var tr2td4 = createElement([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
            var tr2td4input1 = createElement([{
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
            var tr3 = createElement([{ 'tr': {} }]);
            var tr3td1 = createElement([{
                    'td': {
                        'class': 'col-md-12 col-sm-12 col-xs-12 col-xs-plus-12',
                        'colspan': '2',
                        'style': 'text-align:center;'
                    }
                }]);
            var tr3td1btn1 = createElement([{
                    'button': {
                        'id': 'db_connect_only',
                        'type': 'button',
                        'class': 'button button-outline-success'
                    }
                }]);
            tr3td1btn1.textContent = 'Connect';
            tr3td1.appendChild(tr3td1btn1);
            var tr3td1btn2 = createElement([{
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
            var tr4 = createElement([{ 'tr': { 'id': 'db_name_row', 'style': 'display:none;' } }]);
            var tr4td1 = createElement([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
            var tr4td1lbl1 = createElement([{ 'label': { 'for': 'db_name' } }]);
            tr4td1lbl1.textContent = 'Databases : ';
            tr4td1.appendChild(tr4td1lbl1);
            tr4.appendChild(tr4td1);
            var tr4td2 = createElement([{ 'td': { 'class': 'col-md-10 col-sm-10 col-xs-10 col-xs-plus-10' } }]);
            var tr4td2input1 = createElement([{
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
            var tr5 = createElement([{ 'tr': { 'id': 'db_char_table_prefix_row', 'style': 'display:none;' } }]);
            var tr5td1 = createElement([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
            var tr5td1lbl1 = createElement([{ 'label': { 'for': 'db_char' } }]);
            tr5td1lbl1.textContent = 'Charset:';
            tr5td1.appendChild(tr5td1lbl1);
            tr5.appendChild(tr5td1);
            var tr5td2 = createElement([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
            var tr5td2input1 = createElement([{
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
            var tr5td3 = createElement([{ 'td': { 'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2' } }]);
            var tr5td3lbl1 = createElement([{ 'label': { 'for': 'db_table_prefix' } }]);
            tr5td3lbl1.textContent = 'Prefix : ';
            tr5td3.appendChild(tr5td3lbl1);
            tr5.appendChild(tr5td3);
            var tr5td4 = createElement([{ 'td': { 'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4' } }]);
            var tr5td4input1 = createElement([{
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
    };
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    MishusoftInstaller.prototype.setAppInstallerDatabaseBaseUI = function (parentNode) {
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var createElement = dom.createElement;
            var frm1 = createElement([{
                    'form': {
                        'id': 'app-database-initialize',
                        'method': 'post',
                        'autocomplete': 'off'
                    }
                }]);
            var frm1input1 = createElement([{
                    'input': {
                        'type': 'hidden',
                        'name': 'database',
                        'value': '1'
                    }
                }]);
            frm1.appendChild(frm1input1);
            var frm1input2 = createElement([{
                    'input': {
                        'id': 'db_port',
                        'type': 'hidden',
                        'name': 'db_port',
                        'value': '3306'
                    }
                }]);
            frm1.appendChild(frm1input2);
            var frm1fdt1 = createElement([{
                    'fieldset': {
                        'id': 'app-install-database-sandbox',
                        'class': 'box-shadow box-shadow-light'
                    }
                }]);
            var frm1fdt1lgd1 = createElement([{
                    'legend': {
                        'id': 'app-install-database-sandbox-title',
                        'class': 'box-shadow box-shadow-light',
                        'style': 'font-weight: 600;'
                    }
                }]);
            frm1fdt1lgd1.textContent = 'Databases configure';
            frm1fdt1.appendChild(frm1fdt1lgd1);
            var frm1fdt1dv1 = createElement([{
                    'div': {
                        'class': 'row'
                    }
                }]);
            var frm1fdt1lgd1dv1tbl1 = createElement([{
                    'table': {
                        'id': 'app-install-database-tags',
                        'class': 'table table-condensed',
                        'method': 'app-install-database'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
            var frm1fdt1lgd1dv1dv1 = createElement([{
                    'div': {
                        'id': 'app-install-database-sandbox-footer',
                        'class': 'float-right text-align-right'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
            var frm1fdt1lgd1dv1dv1btn1 = createElement([{
                    'button': {
                        'id': 'app-database-create',
                        'type': 'button',
                        'class': 'button button-outline-success'
                    }
                }]);
            frm1fdt1lgd1dv1dv1btn1.textContent = 'Create DB';
            frm1fdt1lgd1dv1dv1.appendChild(frm1fdt1lgd1dv1dv1btn1);
            var frm1fdt1lgd1dv1dv1btn2 = createElement([{
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
    };
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    MishusoftInstaller.prototype.setAppInstallerDatabaseDefaultUI = function (parentNode) {
        var self = this;
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var createElement = dom.createElement;
            var tr1 = createElement([{ 'tr': {} }]);
            var tr1td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr1td1lbl1 = createElement([{
                    'label': {
                        'for': 'db_host'
                    }
                }]);
            tr1td1lbl1.textContent = 'Host : ';
            tr1td1.appendChild(tr1td1lbl1);
            tr1.appendChild(tr1td1);
            var tr1td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr1td2input1 = createElement([{
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
            var tr2 = createElement([{ 'tr': {} }]);
            var tr2td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr2td1lbl1 = createElement([{
                    'label': {
                        'for': 'db_user'
                    }
                }]);
            tr2td1lbl1.textContent = 'Username : ';
            tr2td1.appendChild(tr2td1lbl1);
            tr2.appendChild(tr2td1);
            var tr2td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr2td2input1 = createElement([{
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
            var tr3 = createElement([{ 'tr': {} }]);
            var tr3td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr3td1lbl1 = createElement([{
                    'label': {
                        'for': 'db_user_pass'
                    }
                }]);
            tr3td1lbl1.textContent = 'Password : ';
            tr3td1.appendChild(tr3td1lbl1);
            tr3.appendChild(tr3td1);
            var tr3td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr3td2input1 = createElement([{
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
            var tr4 = createElement([{ 'tr': {} }]);
            var tr4td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr4td1lbl1 = createElement([{
                    'label': {
                        'for': 'db_name'
                    }
                }]);
            tr4td1lbl1.textContent = 'Databases : ';
            tr4td1.appendChild(tr4td1lbl1);
            tr4.appendChild(tr4td1);
            var tr4td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr4td2input1 = createElement([{
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
            var tr5 = createElement([{ 'tr': {} }]);
            var tr5td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr5td1lbl1 = createElement([{
                    'label': {
                        'for': 'db_char'
                    }
                }]);
            tr5td1lbl1.textContent = 'Charset : ';
            tr5td1.appendChild(tr5td1lbl1);
            tr5.appendChild(tr5td1);
            var tr5td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr5td2input1 = createElement([{
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
            var tr6 = createElement([{ 'tr': {} }]);
            var tr6td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr6td1lbl1 = createElement([{
                    'label': {
                        'for': 'db_table_prefix'
                    }
                }]);
            tr6td1lbl1.textContent = 'Table prefix : ';
            tr6td1.appendChild(tr6td1lbl1);
            tr6.appendChild(tr6td1);
            var tr6td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr6td2input1 = createElement([{
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
    };
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    MishusoftInstaller.prototype.setAppInstallerAccountBaseUI = function (parentNode) {
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var createElement = dom.createElement;
            var frm1 = createElement([{
                    'form': {
                        'id': 'app-account-initialize',
                        'method': 'post',
                        'autocomplete': 'off'
                    }
                }]);
            var frm1input1 = createElement([{
                    'input': {
                        'type': 'hidden',
                        'name': 'account',
                        'value': '1'
                    }
                }]);
            frm1.appendChild(frm1input1);
            var frm1fdt1 = createElement([{
                    'fieldset': {
                        'id': 'app-install-account-sandbox',
                        'class': 'box-shadow box-shadow-light'
                    }
                }]);
            var frm1fdt1lgd1 = createElement([{
                    'legend': {
                        'id': 'app-install-account-sandbox-title',
                        'class': 'box-shadow box-shadow-light',
                        'style': 'font-weight: 600;'
                    }
                }]);
            frm1fdt1lgd1.textContent = 'Account configure';
            frm1fdt1.appendChild(frm1fdt1lgd1);
            var frm1fdt1dv1 = createElement([{
                    'div': {
                        'class': 'row'
                    }
                }]);
            var frm1fdt1lgd1dv1tbl1 = createElement([{
                    'table': {
                        'id': 'app-install-account-tags',
                        'class': 'table table-condensed',
                        'method': 'app-install-account'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
            var frm1fdt1lgd1dv1dv1 = createElement([{
                    'div': {
                        'id': 'app-install-account-sandbox-footer',
                        'class': 'float-right text-align-right'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
            var frm1fdt1lgd1dv1dv1btn2 = createElement([{
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
    };
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    MishusoftInstaller.prototype.setAppInstallerAccountDefaultUI = function (parentNode) {
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var createElement = dom.createElement;
            var tr1 = createElement([{ 'tr': {} }]);
            var tr1td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr1td1lbl1 = createElement([{
                    'label': {
                        'for': 'acc_adm_username'
                    }
                }]);
            tr1td1lbl1.textContent = 'Username : ';
            tr1td1.appendChild(tr1td1lbl1);
            tr1.appendChild(tr1td1);
            var tr1td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr1td2input1 = createElement([{
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
            var tr2 = createElement([{ 'tr': {} }]);
            var tr2td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr2td1lbl1 = createElement([{
                    'label': {
                        'for': 'acc_adm_email'
                    }
                }]);
            tr2td1lbl1.textContent = 'E-mail : ';
            tr2td1.appendChild(tr2td1lbl1);
            tr2.appendChild(tr2td1);
            var tr2td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr2td2input1 = createElement([{
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
            var tr3 = createElement([{ 'tr': {} }]);
            var tr3td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr3td1lbl1 = createElement([{
                    'label': {
                        'for': 'acc_adm_pass'
                    }
                }]);
            tr3td1lbl1.textContent = 'Password : ';
            tr3td1.appendChild(tr3td1lbl1);
            tr3.appendChild(tr3td1);
            var tr3td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr3td2input1 = createElement([{
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
            var tr4 = createElement([{ 'tr': {} }]);
            var tr4td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr4td1lbl1 = createElement([{
                    'label': {
                        'for': 'acc_adm_cnf_pass'
                    }
                }]);
            tr4td1lbl1.textContent = 'Retype Password : ';
            tr4td1.appendChild(tr4td1lbl1);
            tr4.appendChild(tr4td1);
            var tr4td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr4td2input1 = createElement([{
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
    };
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    MishusoftInstaller.prototype.setAppInstallerWebsiteBaseUI = function (parentNode) {
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var createElement = dom.createElement;
            var frm1 = createElement([{
                    'form': {
                        'id': 'app-website-initialize',
                        'method': 'post',
                        'autocomplete': 'off'
                    }
                }]);
            var frm1input1 = createElement([{
                    'input': {
                        'type': 'hidden',
                        'name': 'website',
                        'value': '1'
                    }
                }]);
            frm1.appendChild(frm1input1);
            var frm1fdt1 = createElement([{
                    'fieldset': {
                        'id': 'app-install-website-sandbox',
                        'class': 'box-shadow box-shadow-light'
                    }
                }]);
            var frm1fdt1lgd1 = createElement([{
                    'legend': {
                        'id': 'app-install-website-sandbox-title',
                        'class': 'box-shadow box-shadow-light',
                        'style': 'font-weight: 600;'
                    }
                }]);
            frm1fdt1lgd1.textContent = 'Website configure';
            frm1fdt1.appendChild(frm1fdt1lgd1);
            var frm1fdt1dv1 = createElement([{
                    'div': {
                        'class': 'row'
                    }
                }]);
            var frm1fdt1lgd1dv1tbl1 = createElement([{
                    'table': {
                        'id': 'app-install-website-tags',
                        'class': 'table table-condensed',
                        'method': 'app-install-website'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1tbl1);
            var frm1fdt1lgd1dv1dv1 = createElement([{
                    'div': {
                        'id': 'app-install-website-sandbox-footer',
                        'class': 'float-right text-align-right'
                    }
                }]);
            frm1fdt1dv1.appendChild(frm1fdt1lgd1dv1dv1);
            var frm1fdt1lgd1dv1dv1btn2 = createElement([{
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
    };
    ;
    /**
     * @param parentNode Valid HTML element
     * */
    MishusoftInstaller.prototype.setAppInstallerWebsiteDefaultUI = function (parentNode) {
        var self = this;
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var createElement = dom.createElement;
            var tr1 = createElement([{ 'tr': {} }]);
            var tr1td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr1td1lbl1 = createElement([{
                    'label': {
                        'for': 'site_name'
                    }
                }]);
            tr1td1lbl1.textContent = 'New name : ';
            tr1td1.appendChild(tr1td1lbl1);
            tr1.appendChild(tr1td1);
            var tr1td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr1td2input1 = createElement([{
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
            var tr2 = createElement([{ 'tr': {} }]);
            var tr2td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr2td1lbl1 = createElement([{
                    'label': {
                        'for': 'site_description'
                    }
                }]);
            tr2td1lbl1.textContent = 'Description : ';
            tr2td1.appendChild(tr2td1lbl1);
            tr2.appendChild(tr2td1);
            var tr2td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr2td2input1 = createElement([{
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
            var tr3 = createElement([{ 'tr': {} }]);
            var tr3td1 = createElement([{
                    'td': {
                        'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
                    }
                }]);
            var tr3td1lbl1 = createElement([{
                    'label': {
                        'for': 'site_company'
                    }
                }]);
            tr3td1lbl1.textContent = 'Company : ';
            tr3td1.appendChild(tr3td1lbl1);
            tr3.appendChild(tr3td1);
            var tr3td2 = createElement([{
                    'td': {
                        'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
                    }
                }]);
            var tr3td2input1 = createElement([{
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
    };
    ;
    return MishusoftInstaller;
}());



/***/ })

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdHlwZXNjcmlwdHMubWlzaHVzb2Z0Lkluc3RhbGxlci5ydW50aW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtJQUdJLDRCQUNZLE9BQWUsRUFDZixRQUFhO1FBRGIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQUs7UUFFckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUVwRCxDQUFDO0lBRUQsaUNBQUksR0FBSjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQzVCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLDBLQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ3RDLEdBQUcsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzNELHNMQUEyQixDQUFDLElBQUksQ0FBQyxVQUFVLE9BQU87d0JBQzlDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFOzRCQUN0QixhQUFhLEVBQUUsQ0FBQzs0QkFDaEIsR0FBRyxFQUFFLEVBQUMsY0FBYyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxFQUFDO3lCQUMxQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRzt3QkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7b0JBQ3BCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMs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SSxFQUFFO3dCQUNGLE9BQU8sRUFBRSwwQ0FBMEM7cUJBQ3REO2lCQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0osSUFBSSxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUM7b0JBQzlCLE9BQU8sRUFBRTt3QkFDTCxJQUFJLEVBQUUsY0FBYzt3QkFDcEIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLE1BQU0sRUFBRSxNQUFNO3dCQUNkLE9BQU8sRUFBRSw4QkFBOEI7d0JBQ3ZDLGFBQWEsRUFBRSxTQUFTO3dCQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVzt3QkFDMUMsVUFBVSxFQUFFLFVBQVU7d0JBQ3RCLGNBQWMsRUFBRSxLQUFLO3FCQUN4QjtpQkFDSixDQUFDLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBQUEsQ0FBQztJQUNOLHlCQUFDO0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3R5cGVzY3JpcHRzL21pc2h1c29mdC9JbnN0YWxsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1pc2h1c29mdEluc3RhbGxlciB7XHJcbiAgICBwcml2YXRlIGluc3RhbGxhdGlvblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIHByaXZhdGUgZGF0YWJhc2U6IGFueVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YWxsYXRpb25VcmwgPSB0aGlzLnJvb3RVcmwgKyBcImluc3RhbGxcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGxheSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuYXBwSW5zdGFsbGVyQmFzZVVJKCk7XHJcbiAgICAgICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xyXG4gICAgICAgICAgICAgICAgZG9tLmNhcHR1cmVFbGVtZW50KCcjYXBwLWluc3RhbGxlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vY29tbW9uL21lc3NhZ2UnKS50aGVuKGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc2VuZE1lc3NhZ2Uoc2VsZiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlfY29kZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudjogeydpbnN0YWxsYXRpb24nOiB7Y2xpZW50OiAnYmFzZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzZWxmLmluc3RhbGxhdGlvblVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgYXBwSW5zdGFsbGVyQmFzZVVJKCk6IHZvaWQge1xyXG4gICAgICAgIC8vQXBwbGljYXRpb24ncyBNZXRhIFRhZ3NcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGFwcEhlYWRlciA9IGRvY3VtZW50LmhlYWQ7XHJcbiAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZG9tKSB7XHJcbiAgICAgICAgICAgIGxldCBjYXB0dXJlRWxlbWVudCA9IGRvbS5jYXB0dXJlRWxlbWVudDtcclxuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGFwcEhlYWRlci5pbnNlcnRCZWZvcmUoY3JlYXRlRWxlbWVudChbe1wibWV0YVwiOiB7XCJjaGFyc2V0XCI6IFwiVVRGLThcIn19XSksIGNhcHR1cmVFbGVtZW50KCcjYXBwLXRpdGxlJykpO1xyXG4gICAgICAgICAgICBhcHBIZWFkZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgIFwibWV0YVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmlld3BvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIHVzZXItc2NhbGFibGU9bm8sIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgbWluaW11bS1zY2FsZT0xLjBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSksIGNhcHR1cmVFbGVtZW50KCcjYXBwLXRpdGxlJykpO1xyXG4gICAgICAgICAgICBhcHBIZWFkZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgIFwibWV0YVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwLWVxdWl2XCI6IFwiWC1VQS1Db21wYXRpYmxlXCIsIFwiY29udGVudFwiOiBcImllPWVkZ2VcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSksIGNhcHR1cmVFbGVtZW50KCcjYXBwLXRpdGxlJykpO1xyXG5cclxuICAgICAgICAgICAgLy9BcHBsaWNhdGlvbidzIHRpdGxlXHJcbiAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYXBwLXRpdGxlJykudGV4dENvbnRlbnQgPSBzZWxmLmRhdGFiYXNlLmRlZmF1bHQudGV4dC53ZWxjb21lO1xyXG5cclxuICAgICAgICAgICAgLy9BcHBsaWNhdGlvbidzIEZhdmljb25cclxuICAgICAgICAgICAgc2VsZi5kYXRhYmFzZS5jb250ZW50LmZpbGUuZGVmYXVsdC5saW5rLmZvckVhY2goZnVuY3Rpb24gKF9fZmlsZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBhcHBIZWFkZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZUVsZW1lbnQoW3tcImxpbmtcIjogX19maWxlfV0pLCBhcHBIZWFkZXIubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9BcHBsaWNhdGlvbidzIFN0eWxlc2hlZXQgc291cmNlIGZpbGVzIGluY2x1ZGUgaGVyZVxyXG4gICAgICAgICAgICAvKmxldCBsbmsxOSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgIFwibGlua1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJzdHlsZXNoZWV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dC9jc3NcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogYXBwLmNvbnRlbnQuZm9sZGVyLmNzcyArIFwibWlzaHVzb2Z0LmNzc1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgYXBwSGVhZGVyLmluc2VydEJlZm9yZShsbmsxOSwgYXBwSGVhZGVyLmxhc3RFbGVtZW50Q2hpbGQpOyovXHJcbiAgICAgICAgICAgIGlmIChhcHBIZWFkZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGFwcEhlYWRlci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGFwcEhlYWRlci5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vQXBwbGljYXRpb24ncyBib2R5IHNvdXJjZSBmaWxlcyBpbmNsdWRlIGhlcmVcclxuICAgICAgICAgICAgbGV0IGFwcEJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgICBsZXQgZHYxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgXCJkaXZcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJhcHAtc2V0dXAtYm94XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcImFwcC1zZXR1cC1ib3hcIixcclxuICAgICAgICAgICAgICAgICAgICAvKlwic3R5bGVcIjogXCJkaXNwbGF5OiBub25lO1wiKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGR2MiA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgIFwiZGl2XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiYm94LXBhbmVsIGJveC1wYW5lbC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICAgICAgLyppbnN0YWxsZXIgaGVhZGVyKi9cclxuICAgICAgICAgICAgbGV0IGR2MyA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgIFwiZGl2XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiYXBwLWluc3RhbGxlci1oZWFkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiYm94LXBhbmVsLWhlYWRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJ0ZXh0LWFsaWduOmNlbnRlcjtcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGR2My50ZXh0Q29udGVudCA9IHNlbGYuZGF0YWJhc2UuZGVmYXVsdC50ZXh0LndlbGNvbWU7XHJcbiAgICAgICAgICAgIGR2Mi5hcHBlbmRDaGlsZChkdjMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8qaW5zdGFsbGVyIGJvZHkqL1xyXG4gICAgICAgICAgICBsZXQgZHY0ID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgXCJkaXZcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJib3gtcGFuZWwtYm9keVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJib3gtcGFuZWwtYm9keVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJ0ZXh0LWFsaWduOmNlbnRlcjtcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1nMiA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgIFwiaW1nXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiYXBwLWNvbXBhbnktbG9nb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWx0XCI6IFwiTG9nb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJhcHAtY29tcGFueS1sb2dvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogc2VsZi5kYXRhYmFzZS5jb250ZW50LmZvbGRlci5sb2dvcyArIFwibWlzaHVzb2Z0LWxvZ28tbGl0ZS53ZWJwXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBkdjQuYXBwZW5kQ2hpbGQoaW1nMik7XHJcblxyXG4gICAgICAgICAgICBsZXQgcDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICBcInBcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJhcHAtZGVzY3JpcHRpb24tdGV4dFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgcDEudGV4dENvbnRlbnQgPSBzZWxmLmRhdGFiYXNlLmRlZmF1bHQudGV4dC5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgZHY0LmFwcGVuZENoaWxkKHAxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwMiA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgIFwicFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcImFwcC1kZXNjcmlwdGlvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBwMi50ZXh0Q29udGVudCA9IHNlbGYuZGF0YWJhc2UuZGVmYXVsdC50ZXh0Lmluc3RhbGxfc3RhdGU7XHJcbiAgICAgICAgICAgIGR2NC5hcHBlbmRDaGlsZChwMik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZmllbGRzZXQgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICBcImZpZWxkc2V0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiZmxleC1ncm91cCBmbGV4LXJvdyBib3gtc2hhZG93IGJveC1zaGFkb3ctbGlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibGluZS1oZWlnaHQ6IDEuNTtmb250LXNpemU6MTRweFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgZHY0LmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcclxuXHJcbiAgICAgICAgICAgIC8qPGxlZ2VuZCBpZD1cImFwcC1pbnN0YWxsLWRhdGFiYXNlLXNhbmRib3gtdGl0bGVcIiBjbGFzcz1cImJveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodFwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDYwMDtcIj5EYXRhYmFzZXMgY29uZmlndXJlPC9sZWdlbmQ+Ki9cclxuXHJcbiAgICAgICAgICAgIGxldCBsZWdlbmQgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICBcImxlZ2VuZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcImJveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJmb250LXdlaWdodDogNjAwO1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgbGVnZW5kLnRleHRDb250ZW50ID0gJ1NlcnZlciBjb25maWd1cmUnO1xyXG4gICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFwYWNoZV9zZXJ2ZXJfcGhwX2FyZWEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICBcImRpdlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIndpZHRoOiAxMDAlO2Rpc3BsYXk6IGluaGVyaXQ7bWFyZ2luLWJvdHRvbTogNXB4O1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYXBhY2hlX3NlcnZlcl9waHBfYXJlYSk7XHJcbiAgICAgICAgICAgIGxldCBhcGFjaGUgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICBcImRpdlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIndpZHRoOiA0NSU7XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBhcGFjaGUuaW5uZXJIVE1MID0gJzxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDcwMDtcIj5TRVJWRVI8L3NwYW4+IDogJyArIGNhcHR1cmVFbGVtZW50KCcjcnVudGltZS1zZXJ2ZXItbmFtZS12ZXJzaW9uJykuY29udGVudC5zdWJzdHIoMCwgMjApO1xyXG4gICAgICAgICAgICBhcGFjaGVfc2VydmVyX3BocF9hcmVhLmFwcGVuZENoaWxkKGFwYWNoZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXAgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICBcImRpdlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIndpZHRoOiAzNSU7XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBpcC5pbm5lckhUTUwgPSAnPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogNzAwO1wiPklQPC9zcGFuPiA6ICcgKyBjYXB0dXJlRWxlbWVudCgnI3J1bnRpbWUtaG9zdC1pcCcpLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGFwYWNoZV9zZXJ2ZXJfcGhwX2FyZWEuYXBwZW5kQ2hpbGQoaXApO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBocCA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgIFwiZGl2XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwid2lkdGg6IDIwJTtcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHBocC5pbm5lckhUTUwgPSAnPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogNzAwO1wiPlBIUDwvc3Bhbj4gOiAnICsgY2FwdHVyZUVsZW1lbnQoJyNydW50aW1lLXBocC12ZXJzaW9uJykuY29udGVudDtcclxuICAgICAgICAgICAgYXBhY2hlX3NlcnZlcl9waHBfYXJlYS5hcHBlbmRDaGlsZChwaHApO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhvc3QgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICBcImRpdlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIndpZHRoOiAxMDAlO1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgaG9zdC5pbm5lckhUTUwgPSAnPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogNzAwO1wiPkhPU1QgTkFNRTwvc3Bhbj4gOiAnICsgY2FwdHVyZUVsZW1lbnQoJyNydW50aW1lLWhvc3QtbmFtZScpLmNvbnRlbnQgKyAnIG9uICcgKyBjYXB0dXJlRWxlbWVudCgnI3J1bnRpbWUtaG9zdC1vcycpLmNvbnRlbnQgKyAnICcgKyBjYXB0dXJlRWxlbWVudCgnI3J1bnRpbWUtaG9zdC1hcmNoaXRlY3R1cmUnKS5jb250ZW50O1xyXG4gICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChob3N0KTtcclxuXHJcbiAgICAgICAgICAgIC8vTGludXggZGV2ZWxvcGVyIDUuNy45LTEtTUFOSkFSTyAjMSBTTVAgUFJFRU1QVCBUaHUgSnVsIDE2IDA4OjIwOjA1IFVUQyAyMDIwIHg4Nl82NFxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBidG4xID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJhcHAtaW5zdGFsbGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcImJ1dHRvbiBidXR0b24tbGcgYnV0dG9uLW91dGxpbmUtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgYnRuMS50ZXh0Q29udGVudCA9ICdJbnN0YWxsJztcclxuICAgICAgICAgICAgZHY0LmFwcGVuZENoaWxkKGJ0bjEpO1xyXG4gICAgICAgICAgICBkdjIuYXBwZW5kQ2hpbGQoZHY0KTtcclxuXHJcbiAgICAgICAgICAgIC8qaW5zdGFsbGVyIGZvb3RlciovXHJcbiAgICAgICAgICAgIGxldCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICBcInBcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJhcHAtZGVzY3JpcHRpb24tdGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJ0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjVweDtcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IHNlbGYuZGF0YWJhc2UuZGVmYXVsdC5jb21wYW55TmFtZSArICcgwqkgJyArIChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBkdjIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuICAgICAgICAgICAgZHYxLmFwcGVuZENoaWxkKGR2Mik7XHJcbiAgICAgICAgICAgIGFwcEJvZHkuaW5zZXJ0QmVmb3JlKGR2MSwgYXBwQm9keS5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgSlNPTiBvYmplY3RcclxuICAgICAqICovXHJcbiAgICBhcHBSdW50aW1lRXZlbnRNYW5hZ2VyKG1lc3NhZ2U6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZG9tKSB7XHJcbiAgICAgICAgICAgIGxldCBjYXB0dXJlRWxlbWVudCA9IGRvbS5jYXB0dXJlRWxlbWVudDtcclxuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcclxuICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBjYXB0dXJlRWxlbWVudCgnI2JveC1wYW5lbC1ib2R5Jyk7XHJcbiAgICAgICAgICAgIGxldCBhcHBfdGl0bGUgPSBjYXB0dXJlRWxlbWVudCgnI2FwcC10aXRsZScpO1xyXG4gICAgICAgICAgICBsZXQgYXBwX2luc3RhbGxlcl9oZWFkZXIgPSBjYXB0dXJlRWxlbWVudCgnI2FwcC1pbnN0YWxsZXItaGVhZGVyJyk7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24uY2xpZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS5zZXRfdGl0bGUgPT09ICd1bm5lZWRlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLmNsaWVudC5iYXNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwX2luc3RhbGxlcl9oZWFkZXIucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBfdGl0bGUudGV4dENvbnRlbnQgPSBtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24udGl0bGUgKyAnIDogJyArIG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5jbGllbnQuYmFzZS5zdWJfdGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcF9pbnN0YWxsZXJfaGVhZGVyLnRleHRDb250ZW50ID0gbWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FwcF9pbnN0YWxsZXJfaGVhZGVyLnRleHRDb250ZW50ID0gbWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLnRpdGxlICsgJyA6ICcgKyBtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24uY2xpZW50LmJhc2Uuc3ViX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEFwcEluc3RhbGxlckljb24oYXBwX2luc3RhbGxlcl9oZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwX3RpdGxlLnRleHRDb250ZW50ID0gbWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UudHlwZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcF9pbnN0YWxsZXJfaGVhZGVyLnRleHRDb250ZW50ID0gbWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UudHlwZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmNtZF9idG4gPT09ICdyZW1vdmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS5leHRyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS5leHRyYS5lbmFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UuZXh0cmEuZW5hYmxlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnIycgKyBtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS5leHRyYS5lbmFibGVba2V5XSkucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmV4dHJhLmRpc2FibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UuZXh0cmEuZGlzYWJsZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyMnICsgbWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UuZXh0cmEuZGlzYWJsZVtrZXldKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UuZXh0cmEuc2hvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS5leHRyYS5zaG93KS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnIycgKyBtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS5leHRyYS5zaG93W2tleV0pLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS5leHRyYS5oaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmV4dHJhLmhpZGUpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjJyArIG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmV4dHJhLmhpZGVba2V5XSkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UuZXh0cmEudGV4dF9jaGFuZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLm1lc3NhZ2UuZXh0cmEudGV4dF9jaGFuZ2UpLmZvckVhY2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjJyArIG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmV4dHJhLnRleHRfY2hhbmdlWydpZCddKS50ZXh0Q29udGVudCA9IG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLmV4dHJhLnRleHRfY2hhbmdlWyd0ZXh0J107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KCcjbWVzc2FnZXpvbmUnKSA9PT0gbnVsbCB8fCBjYXB0dXJlRWxlbWVudCgnI21lc3NhZ2V6b25lJykgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFJ1bnRpbWVFdmVudE1lc3NhZ2Vab25lKHBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUJvYXJkID0gY3JlYXRlRWxlbWVudChbeydkaXYnOiB7J2lkJzogJ21lc3NhZ2Vib2FyZCd9fV0pLCBtc2dfcHJlZml4OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5tZXNzYWdlLnR5cGUgPT09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUJvYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYm94LW1lc3NhZ2UgYm94LWRhbmdlciBib3gtc2hhZG93IGJveC1zaGFkb3ctbGlnaHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnX3ByZWZpeCA9ICc8YiBjbGFzcz1cInRleHQtZGFuZ2VyXCIgc3R5bGU9XCJmbG9hdDogbGVmdDtcIj5FcnJvciZuYnNwOzombmJzcDs8L2I+JztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQm9hcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdib3gtbWVzc2FnZSBib3gtc3VjY2VzcyBib3gtc2hhZG93IGJveC1zaGFkb3ctbGlnaHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnX3ByZWZpeCA9ICc8YiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiIHN0eWxlPVwiZmxvYXQ6IGxlZnQ7XCI+TWVzc2FnZSZuYnNwOzombmJzcDs8L2I+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUJvYXJkLmlubmVySFRNTCA9IG1zZ19wcmVmaXggKyBtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24ubWVzc2FnZS50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlQXJlYSA9IGNhcHR1cmVFbGVtZW50KCcjbWVzc2FnZXpvbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUFyZWEuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VBcmVhLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQXJlYS5hcHBlbmRDaGlsZChtZXNzYWdlQm9hcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VBcmVhLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VBcmVhLmFwcGVuZENoaWxkKG1lc3NhZ2VCb2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vY29tbW9uL21lc3NhZ2UnKS50aGVuKGZ1bmN0aW9uIChtZXNzYWdlUmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24uY2xpZW50LmJhc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogRGF0YWJhc2VzIENyZWF0aW9uIFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogV2UgY29uZmlndXJlIGRhdGFiYXNlIGZvciB0aGUgYXBwbGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICogSWYgcmVxdWlyZWQgZGF0YWJhc2Ugbm90IGNyZWF0ZWQgcHJldmlvdXNseSwgd2UgY3JlYXRlIGluIHRoaXMgcHJvY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLmNsaWVudC5iYXNlLmFyZWEgPT09ICdkYXRhYmFzZS1jcmVhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEFwcEluc3RhbGxlckRhdGFiYXNlQ3JlYXRlQmFzZVVJKHBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KCcjYXBwLWRhdGFiYXNlLWNyZWF0ZS1pbml0aWFsaXplJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEFwcEluc3RhbGxlckRhdGFiYXNlQ3JlYXRlRGVmYXVsdFVJKGNhcHR1cmVFbGVtZW50KCcjYXBwLWluc3RhbGwtZGF0YWJhc2UtY3JlYXRlLXRhZ3MnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtZGF0YWJhc2UtY3JlYXRlLWluaXRpYWxpemUnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYXBwLWxvYWRlcicpLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl9uYW1lJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2RiX2NoYXInKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjZGJfdGFibGVfcHJlZml4Jykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1kYXRhYmFzZS1jcmVhdGUtaW5zdGFsbCcpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVJlcXVlc3Quc2VuZE1lc3NhZ2Uoc2VsZiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5X2NvZGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhYmFzZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6ICdjcmVhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IGNhcHR1cmVFbGVtZW50KCcjZGJfaG9zdCcpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IGNhcHR1cmVFbGVtZW50KCcjZGJfdXNlcicpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfcGFzczogY2FwdHVyZUVsZW1lbnQoJyNkYl91c2VyX3Bhc3MnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjYXB0dXJlRWxlbWVudCgnI2RiX25hbWUnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyOiBjYXB0dXJlRWxlbWVudCgnI2RiX2NoYXInKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZV9wcmVmaXg6IGNhcHR1cmVFbGVtZW50KCcjZGJfdGFibGVfcHJlZml4JykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydDogY2FwdHVyZUVsZW1lbnQoJyNkYl9wb3J0JykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuTmFtZTogY2FwdHVyZUVsZW1lbnQoJyNkYl9jb25uZWN0X29ubHknKS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zdGFsbGF0aW9uVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2RiX2Nvbm5lY3Rfb25seScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1sb2FkZXInKS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qUmVtb3ZlIGRpc2FibGVkIGF0dHJpYnV0ZSBmcm9tIGFsbCBjaGlsZCBub2RlKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl9uYW1lJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2RiX2NoYXInKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjZGJfdGFibGVfcHJlZml4JykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVJlcXVlc3Quc2VuZE1lc3NhZ2Uoc2VsZiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5X2NvZGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhYmFzZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6ICdjb25uZWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBjYXB0dXJlRWxlbWVudCgnI2RiX2hvc3QnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiBjYXB0dXJlRWxlbWVudCgnI2RiX3VzZXInKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3Bhc3M6IGNhcHR1cmVFbGVtZW50KCcjZGJfdXNlcl9wYXNzJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuTmFtZTogY2FwdHVyZUVsZW1lbnQoJyNkYl9jb25uZWN0X29ubHknKS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zdGFsbGF0aW9uVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2RiX3JlY29ubmVjdF9vbmx5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjZGJfaG9zdCcpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl91c2VyJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2RiX3VzZXJfcGFzcycpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl9jb25uZWN0X29ubHknKS50ZXh0Q29udGVudCA9ICdDb25uZWN0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl9jb25uZWN0X29ubHknKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjZGJfbmFtZV9yb3cnKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNkYl9jaGFyX3RhYmxlX3ByZWZpeF9yb3cnKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtZGF0YWJhc2UtY3JlYXRlLWluc3RhbGwnKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZUVsZW1lbnQoJyNhcHAtZGF0YWJhc2UtY3JlYXRlLWNhbmNlbCcpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtZGF0YWJhc2UtY3JlYXRlLWNhbmNlbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1sb2FkZXInKS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VSZXF1ZXN0LnNlbmRNZXNzYWdlKHNlbGYsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5X2NvZGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnY6IHsnaW5zdGFsbGF0aW9uJzoge2NsaWVudDogJ2Jhc2UnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgc2VsZi5pbnN0YWxsYXRpb25VcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIERhdGFiYXNlcyBTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFdlIGNvbmZpZ3VyZSBkYXRhYmFzZSBmb3IgdGhlIGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFdlIG5lZWQgdG8gc3RvcmUgZGF0YSBpbiBkYXRhYmFzZSwgc28gaXQgaXMgdmVyeSBpbXBvcnRhbnQgdG8gY29uZmlndXJlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24uY2xpZW50LmJhc2UuYXJlYSA9PT0gJ2RhdGFiYXNlLXNlbGVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0QXBwSW5zdGFsbGVyREJNU1NlbGVjdGlvblVJKHBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIERhdGFiYXNlcyBTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFdlIGNvbmZpZ3VyZSBkYXRhYmFzZSBmb3IgdGhlIGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFdlIG5lZWQgdG8gc3RvcmUgZGF0YSBpbiBkYXRhYmFzZSwgc28gaXQgaXMgdmVyeSBpbXBvcnRhbnQgdG8gY29uZmlndXJlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudi5pbnN0YWxsYXRpb24uY2xpZW50LmJhc2UuYXJlYSA9PT0gJ2RhdGFiYXNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRBcHBJbnN0YWxsZXJEYXRhYmFzZUJhc2VVSShwYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI2FwcC1kYXRhYmFzZS1pbml0aWFsaXplJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEFwcEluc3RhbGxlckRhdGFiYXNlRGVmYXVsdFVJKGNhcHR1cmVFbGVtZW50KCcjYXBwLWluc3RhbGwtZGF0YWJhc2UtdGFncycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1kYXRhYmFzZS1pbml0aWFsaXplJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1sb2FkZXInKS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYXBwLWRhdGFiYXNlLWluc3RhbGwnKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VSZXF1ZXN0LnNlbmRNZXNzYWdlKHNlbGYsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eV9jb2RlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAnY29uZmlndXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBjYXB0dXJlRWxlbWVudCgnI2RiX2hvc3QnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiBjYXB0dXJlRWxlbWVudCgnI2RiX3VzZXInKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3Bhc3M6IGNhcHR1cmVFbGVtZW50KCcjZGJfdXNlcl9wYXNzJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2FwdHVyZUVsZW1lbnQoJyNkYl9uYW1lJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcjogY2FwdHVyZUVsZW1lbnQoJyNkYl9jaGFyJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVfcHJlZml4OiBjYXB0dXJlRWxlbWVudCgnI2RiX3RhYmxlX3ByZWZpeCcpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnQ6IGNhcHR1cmVFbGVtZW50KCcjZGJfcG9ydCcpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk5hbWU6IGNhcHR1cmVFbGVtZW50KCcjYXBwLWRhdGFiYXNlLWluc3RhbGwnKS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zdGFsbGF0aW9uVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtZGF0YWJhc2UtY3JlYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYXBwLWxvYWRlcicpLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VSZXF1ZXN0LnNlbmRNZXNzYWdlKHNlbGYsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5X2NvZGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnY6IHtpbnN0YWxsYXRpb246IHtjbGllbnQ6IHtiYXNlOiB7YXJlYTogJ2RhdGFiYXNlLWNyZWF0ZSd9fX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNlbGYuaW5zdGFsbGF0aW9uVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEFjY291bnQgU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBXZSBjcmVhdGUgYWRtaW4gYW5kIHN1cGVyIHVzZXIgYWNjb3VudCB0byBhY2Nlc3MgaW4gdGhlIGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoaXMgc3RlcCBpcyB2ZXJ5IGltcG9ydGFudCBmb3IgdXNlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW52Lmluc3RhbGxhdGlvbi5jbGllbnQuYmFzZS5hcmVhID09PSAnYWNjb3VudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0QXBwSW5zdGFsbGVyQWNjb3VudEJhc2VVSShwYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI2FwcC1hY2NvdW50LWluaXRpYWxpemUnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0QXBwSW5zdGFsbGVyQWNjb3VudERlZmF1bHRVSShjYXB0dXJlRWxlbWVudCgnI2FwcC1pbnN0YWxsLWFjY291bnQtdGFncycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1hY2NvdW50LWluaXRpYWxpemUnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYXBwLWxvYWRlcicpLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtYWNjb3VudC1pbnN0YWxsJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlUmVxdWVzdC5zZW5kTWVzc2FnZShzZWxmLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlfY29kZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZWE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogY2FwdHVyZUVsZW1lbnQoJyNhY2NfYWRtX3VzZXJuYW1lJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGNhcHR1cmVFbGVtZW50KCcjYWNjX2FkbV9lbWFpbCcpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfcGFzczogY2FwdHVyZUVsZW1lbnQoJyNhY2NfYWRtX3Bhc3MnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2NuZl9wYXNzOiBjYXB0dXJlRWxlbWVudCgnI2FjY19hZG1fY25mX3Bhc3MnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5OYW1lOiBjYXB0dXJlRWxlbWVudCgnI2FwcC1hY2NvdW50LWluc3RhbGwnKS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zdGFsbGF0aW9uVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFdlYnNpdGUgU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBXZSBjb25maWd1cmUgbmFtZSwgZGVzY3JpcHRpb24gb2YgdGhlIGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoaXMgc3RlcCBpcyB2ZXJ5IGltcG9ydGFudCBmb3Igd2Vic2l0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLmNsaWVudC5iYXNlLmFyZWEgPT09ICd3ZWJzaXRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRBcHBJbnN0YWxsZXJXZWJzaXRlQmFzZVVJKHBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcHR1cmVFbGVtZW50KCcjYXBwLXdlYnNpdGUtaW5pdGlhbGl6ZScpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRBcHBJbnN0YWxsZXJXZWJzaXRlRGVmYXVsdFVJKGNhcHR1cmVFbGVtZW50KCcjYXBwLWluc3RhbGwtd2Vic2l0ZS10YWdzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYXBwLXdlYnNpdGUtaW5pdGlhbGl6ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudDogRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtbG9hZGVyJykucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC13ZWJzaXRlLWluc3RhbGwnKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VSZXF1ZXN0LnNlbmRNZXNzYWdlKE1pc2h1c29mdEluc3RhbGxlciwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5X2NvZGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJzaXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2FwdHVyZUVsZW1lbnQoJyNzaXRlX25hbWUnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogY2FwdHVyZUVsZW1lbnQoJyNzaXRlX2Rlc2NyaXB0aW9uJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueTogY2FwdHVyZUVsZW1lbnQoJyNzaXRlX2NvbXBhbnknKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5OYW1lOiBjYXB0dXJlRWxlbWVudCgnI2FwcC13ZWJzaXRlLWluc3RhbGwnKS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zdGFsbGF0aW9uVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFJlZGlyZWN0IFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogYWZ0ZXIgY29tcGxldGlvbiBvZiBhcHAgaW5zdGFsbGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIHdpdGggcHJvY2VkdXJlIHRoaXMgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnYuaW5zdGFsbGF0aW9uLmNsaWVudC5iYXNlLmFyZWEgPT09ICdyZWRpcmVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudChcImZvcm1cIikgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoXCJmb3JtXCIpLmZvckVhY2goZnVuY3Rpb24gKGZybTogeyByZW1vdmU6ICgpID0+IHZvaWQ7IH0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJtLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KFwiZm9ybVwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudChcIiNhcHAtbG9hZGVyXCIpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoc2VsZi5yb290VXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUgVmFsaWQgSFRNTCBlbGVtZW50XHJcbiAgICAgKiAqL1xyXG4gICAgc2V0QXBwSW5zdGFsbGVySWNvbihwYXJlbnROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcclxuICAgICAgICAgICAgbGV0IGltZzEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnaW1nJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtaW5zdGFsbGVyLWxvZ28nLFxyXG4gICAgICAgICAgICAgICAgICAgICdhbHQnOiAnTG9nbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xvZ28teHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6ICcyNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAnc3JjJzogc2VsZi5kYXRhYmFzZS5jb250ZW50LmZvbGRlci5sb2dvcyArICdtaXNodXNvZnQtbG9nby1vdXRsaW5lLndlYnAnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaW1nMSwgcGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUgVmFsaWQgSFRNTCBlbGVtZW50XHJcbiAgICAgKiAqL1xyXG4gICAgc2V0UnVudGltZUV2ZW50TWVzc2FnZVpvbmUocGFyZW50Tm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcclxuICAgICAgICAgICAgbGV0IGR2NSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdkaXYnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ21lc3NhZ2V6b25lJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnOiAnd2lkdGg6aW5oZXJpdDtkaXNwbGF5OiBub25lOydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGR2NSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUgdmFsaWQgSFRNTCBFbGVtZW50Ki9cclxuICAgIHNldEFwcEluc3RhbGxlckRCTVNTZWxlY3Rpb25VSShwYXJlbnROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGxldCBwYW5lbCA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdkaXYnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlJzogJ3dpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZDAxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2Rpdic6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYm94LW1lc3NhZ2UgYm94LXN1Y2Nlc3MgYm94LXNoYWRvdyBib3gtc2hhZG93LWxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnOiBcInRleHQtYWxpZ246IGNlbnRlcjtmbG9hdDogbGVmdDtoZWlnaHQ6IDY1cHg7d2lkdGg6IDI1JTttYXJnaW4tcmlnaHQ6IDIwcHg7cGFkZGluZzogNTBweDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBjaGlsZDAxLmlubmVyVGV4dCA9IFwiTWlzaHVzb2Z0U1FMU3RhbmRhbG9uZVwiO1xyXG4gICAgICAgICAgICBjaGlsZDAxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUub3JpZ2luYWxUYXJnZXQgPT09IGNoaWxkMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbmRTZWxlY3RSZXF1ZXN0KGNoaWxkMDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBwYW5lbC5hcHBlbmRDaGlsZChjaGlsZDAxKVxyXG5cclxuICAgICAgICAgICAgbGV0IGNoaWxkMDIgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnZGl2Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdib3gtbWVzc2FnZSBib3gtc3VjY2VzcyBib3gtc2hhZG93IGJveC1zaGFkb3ctbGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZSc6IFwidGV4dC1hbGlnbjogY2VudGVyO2Zsb2F0OiBsZWZ0O2hlaWdodDogNjVweDt3aWR0aDogMjUlO21hcmdpbi1sZWZ0OiAyMHB4O3BhZGRpbmc6IDUwcHg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgY2hpbGQwMi5pbm5lclRleHQgPSBcIk15U1FMXCI7XHJcbiAgICAgICAgICAgIGNoaWxkMDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5vcmlnaW5hbFRhcmdldCA9PT0gY2hpbGQwMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2VuZFNlbGVjdFJlcXVlc3QoY2hpbGQwMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwYW5lbC5hcHBlbmRDaGlsZChjaGlsZDAyKVxyXG5cclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChwYW5lbCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbmRTZWxlY3RSZXF1ZXN0KG5vZGU6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL21lc3NhZ2UnKS50aGVuKGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc2VuZE1lc3NhZ2Uoc2VsZiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5X2NvZGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZW52OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhYmFzZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6ICdkYXRhYmFzZS1zZWxlY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibXM6IG5vZGUuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxmLmluc3RhbGxhdGlvblVybCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcGFyZW50Tm9kZSBWYWxpZCBIVE1MIGVsZW1lbnRcclxuICAgICAqICovXHJcbiAgICBzZXRBcHBJbnN0YWxsZXJEYXRhYmFzZUNyZWF0ZUJhc2VVSShwYXJlbnROb2RlOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xyXG4gICAgICAgICAgICBsZXQgY3JlYXRlRWxlbWVudCA9IGRvbS5jcmVhdGVFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgbGV0IGZybTEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnZm9ybSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWRhdGFiYXNlLWNyZWF0ZS1pbml0aWFsaXplJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWV0aG9kJzogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGxldCBmcm0xaW5wdXQxID0gY3JlYXRlRWxlbWVudChbeydpbnB1dCc6IHsndHlwZSc6ICdoaWRkZW4nLCAnbmFtZSc6ICdkYXRhYmFzZScsICd2YWx1ZSc6ICdjcmVhdGUnfX1dKTtcclxuICAgICAgICAgICAgZnJtMS5hcHBlbmRDaGlsZChmcm0xaW5wdXQxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmcm0xaW5wdXQyID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdkYl9wb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2RiX3BvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICczMzA2J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGZybTEuYXBwZW5kQ2hpbGQoZnJtMWlucHV0Mik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJtMWZkdDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnZmllbGRzZXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1pbnN0YWxsLWRhdGFiYXNlLWNyZWF0ZS1zYW5kYm94JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYm94LXNoYWRvdyBib3gtc2hhZG93LWxpZ2h0J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnbGVnZW5kJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtaW5zdGFsbC1kYXRhYmFzZS1jcmVhdGUtc2FuZGJveC10aXRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2JveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlJzogJ2ZvbnQtd2VpZ2h0OiA2MDA7J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMS50ZXh0Q29udGVudCA9ICdEYXRhYmFzZXMgQ3JlYXRlJztcclxuICAgICAgICAgICAgZnJtMWZkdDEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFsZ2QxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWR2MSA9IGNyZWF0ZUVsZW1lbnQoW3snZGl2JzogeydjbGFzcyc6ICdyb3cnfX1dKTtcclxuICAgICAgICAgICAgbGV0IGZybTFmZHQxbGdkMWR2MXRibDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAndGFibGUnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1pbnN0YWxsLWRhdGFiYXNlLWNyZWF0ZS10YWdzJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGFibGUgdGFibGUtY29uZGVuc2VkJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWV0aG9kJzogJ2FwcC1pbnN0YWxsLWRhdGFiYXNlLWNyZWF0ZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBmcm0xZmR0MWR2MS5hcHBlbmRDaGlsZChmcm0xZmR0MWxnZDFkdjF0YmwxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDFkdjFkdjEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnZGl2Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtaW5zdGFsbC1kYXRhYmFzZS1jcmVhdGUtc2FuZGJveC1mb290ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdmbG9hdC1yaWdodCB0ZXh0LWFsaWduLXJpZ2h0J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGZybTFmZHQxZHYxLmFwcGVuZENoaWxkKGZybTFmZHQxbGdkMWR2MWR2MSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJtMWZkdDFsZ2QxZHYxZHYxYnRuMSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdidXR0b24nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1kYXRhYmFzZS1jcmVhdGUtY2FuY2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdidXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdidXR0b24gYnV0dG9uLW91dGxpbmUtZGFuZ2VyJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMWR2MWR2MWJ0bjEudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgICAgICAgICAgZnJtMWZkdDFsZ2QxZHYxZHYxLmFwcGVuZENoaWxkKGZybTFmZHQxbGdkMWR2MWR2MWJ0bjEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZybTFmZHQxbGdkMWR2MWR2MWJ0bjIgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnYnV0dG9uJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtZGF0YWJhc2UtY3JlYXRlLWluc3RhbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3N1Ym1pdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2J1dHRvbiBidXR0b24tb3V0bGluZS1wcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnOiAnZGlzcGxheTpub25lOydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBmcm0xZmR0MWxnZDFkdjFkdjFidG4yLnRleHRDb250ZW50ID0gJ05leHQnO1xyXG4gICAgICAgICAgICBmcm0xZmR0MWxnZDFkdjFkdjEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFsZ2QxZHYxZHYxYnRuMik7XHJcblxyXG4gICAgICAgICAgICBmcm0xZmR0MS5hcHBlbmRDaGlsZChmcm0xZmR0MWR2MSk7XHJcbiAgICAgICAgICAgIGZybTEuYXBwZW5kQ2hpbGQoZnJtMWZkdDEpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGZybTEpO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcGFyZW50Tm9kZSBWYWxpZCBIVE1MIGVsZW1lbnRcclxuICAgICAqICovXHJcbiAgICBzZXRBcHBJbnN0YWxsZXJEYXRhYmFzZUNyZWF0ZURlZmF1bHRVSShwYXJlbnROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjEgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzoge319XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjF0ZDEgPSBjcmVhdGVFbGVtZW50KFt7J3RkJzogeydjbGFzcyc6ICdjb2wtbWQtMiBjb2wtc20tMiBjb2wteHMtMiBjb2wteHMtcGx1cy0yJ319XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjF0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbeydsYWJlbCc6IHsnZm9yJzogJ2RiX2hvc3QnfX1dKTtcclxuICAgICAgICAgICAgdHIxdGQxbGJsMS50ZXh0Q29udGVudCA9ICdIb3N0IDogJztcclxuICAgICAgICAgICAgdHIxdGQxLmFwcGVuZENoaWxkKHRyMXRkMWxibDEpO1xyXG4gICAgICAgICAgICB0cjEuYXBwZW5kQ2hpbGQodHIxdGQxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjF0ZDIgPSBjcmVhdGVFbGVtZW50KFt7J3RkJzogeydjbGFzcyc6ICdjb2wtbWQtMTAgY29sLXNtLTEwIGNvbC14cy0xMCBjb2wteHMtcGx1cy0xMCd9fV0pO1xyXG4gICAgICAgICAgICBsZXQgdHIxdGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdkYl9ob3N0JyxcclxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYl9ob3N0JyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQtYm94LWJvdHRvbS1ib3JkZXItb25seScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ0hvc3QgbmFtZSBvciBhZGRyZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOiAncmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgdHIxdGQyLmFwcGVuZENoaWxkKHRyMXRkMmlucHV0MSk7XHJcbiAgICAgICAgICAgIHRyMS5hcHBlbmRDaGlsZCh0cjF0ZDIpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRyMSk7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHRyMiA9IGNyZWF0ZUVsZW1lbnQoW3sndHInOiB7fX1dKTtcclxuICAgICAgICAgICAgbGV0IHRyMnRkMSA9IGNyZWF0ZUVsZW1lbnQoW3sndGQnOiB7J2NsYXNzJzogJ2NvbC1tZC0yIGNvbC1zbS0yIGNvbC14cy0yIGNvbC14cy1wbHVzLTInfX1dKTtcclxuICAgICAgICAgICAgbGV0IHRyMnRkMWxibDEgPSBjcmVhdGVFbGVtZW50KFt7J2xhYmVsJzogeydmb3InOiAnZGJfdXNlcid9fV0pO1xyXG4gICAgICAgICAgICB0cjJ0ZDFsYmwxLnRleHRDb250ZW50ID0gJ1VzZXIgOiAnO1xyXG4gICAgICAgICAgICB0cjJ0ZDEuYXBwZW5kQ2hpbGQodHIydGQxbGJsMSk7XHJcbiAgICAgICAgICAgIHRyMi5hcHBlbmRDaGlsZCh0cjJ0ZDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyMnRkMiA9IGNyZWF0ZUVsZW1lbnQoW3sndGQnOiB7J2NsYXNzJzogJ2NvbC1tZC00IGNvbC1zbS00IGNvbC14cy00IGNvbC14cy1wbHVzLTQnfX1dKTtcclxuICAgICAgICAgICAgbGV0IHRyMnRkMmlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnZGJfdXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGJfdXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdVc2VybmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyMnRkMi5hcHBlbmRDaGlsZCh0cjJ0ZDJpbnB1dDEpO1xyXG4gICAgICAgICAgICB0cjIuYXBwZW5kQ2hpbGQodHIydGQyKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjJ0ZDMgPSBjcmVhdGVFbGVtZW50KFt7J3RkJzogeydjbGFzcyc6ICdjb2wtbWQtMiBjb2wtc20tMiBjb2wteHMtMiBjb2wteHMtcGx1cy0yJ319XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjJ0ZDNsYmwxID0gY3JlYXRlRWxlbWVudChbeydsYWJlbCc6IHsnZm9yJzogJ2RiX3VzZXJfcGFzcyd9fV0pO1xyXG4gICAgICAgICAgICB0cjJ0ZDNsYmwxLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkIDogJztcclxuICAgICAgICAgICAgdHIydGQzLmFwcGVuZENoaWxkKHRyMnRkM2xibDEpO1xyXG4gICAgICAgICAgICB0cjIuYXBwZW5kQ2hpbGQodHIydGQzKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjJ0ZDQgPSBjcmVhdGVFbGVtZW50KFt7J3RkJzogeydjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J319XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjJ0ZDRpbnB1dDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2RiX3VzZXJfcGFzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGJfdXNlcl9wYXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyMnRkNC5hcHBlbmRDaGlsZCh0cjJ0ZDRpbnB1dDEpO1xyXG4gICAgICAgICAgICB0cjIuYXBwZW5kQ2hpbGQodHIydGQ0KTtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0cjMgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzoge319XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjN0ZDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAndGQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyIGNvbC14cy1wbHVzLTEyJyxcclxuICAgICAgICAgICAgICAgICAgICAnY29sc3Bhbic6ICcyJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnOiAndGV4dC1hbGlnbjpjZW50ZXI7J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjN0ZDFidG4xID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2J1dHRvbic6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnZGJfY29ubmVjdF9vbmx5JyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdidXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdidXR0b24gYnV0dG9uLW91dGxpbmUtc3VjY2VzcydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICB0cjN0ZDFidG4xLnRleHRDb250ZW50ID0gJ0Nvbm5lY3QnO1xyXG4gICAgICAgICAgICB0cjN0ZDEuYXBwZW5kQ2hpbGQodHIzdGQxYnRuMSk7XHJcbiAgICAgICAgICAgIGxldCB0cjN0ZDFidG4yID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2J1dHRvbic6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnZGJfcmVjb25uZWN0X29ubHknLFxyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2J1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2J1dHRvbiBidXR0b24tb3V0bGluZS1pbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnOiAnZGlzcGxheTpub25lOydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICB0cjN0ZDFidG4yLnRleHRDb250ZW50ID0gJ1JlY29ubmVjdCc7XHJcbiAgICAgICAgICAgIHRyM3RkMS5hcHBlbmRDaGlsZCh0cjN0ZDFidG4yKTtcclxuICAgICAgICAgICAgdHIzLmFwcGVuZENoaWxkKHRyM3RkMSk7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHIzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvKm9uIGV2ZW50IGFkZCBlbGVtZW50Ki9cclxuICAgICAgICAgICAgbGV0IHRyNCA9IGNyZWF0ZUVsZW1lbnQoW3sndHInOiB7J2lkJzogJ2RiX25hbWVfcm93JywgJ3N0eWxlJzogJ2Rpc3BsYXk6bm9uZTsnfX1dKTtcclxuICAgICAgICAgICAgbGV0IHRyNHRkMSA9IGNyZWF0ZUVsZW1lbnQoW3sndGQnOiB7J2NsYXNzJzogJ2NvbC1tZC0yIGNvbC1zbS0yIGNvbC14cy0yIGNvbC14cy1wbHVzLTInfX1dKTtcclxuICAgICAgICAgICAgbGV0IHRyNHRkMWxibDEgPSBjcmVhdGVFbGVtZW50KFt7J2xhYmVsJzogeydmb3InOiAnZGJfbmFtZSd9fV0pO1xyXG4gICAgICAgICAgICB0cjR0ZDFsYmwxLnRleHRDb250ZW50ID0gJ0RhdGFiYXNlcyA6ICc7XHJcbiAgICAgICAgICAgIHRyNHRkMS5hcHBlbmRDaGlsZCh0cjR0ZDFsYmwxKTtcclxuICAgICAgICAgICAgdHI0LmFwcGVuZENoaWxkKHRyNHRkMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHI0dGQyID0gY3JlYXRlRWxlbWVudChbeyd0ZCc6IHsnY2xhc3MnOiAnY29sLW1kLTEwIGNvbC1zbS0xMCBjb2wteHMtMTAgY29sLXhzLXBsdXMtMTAnfX1dKTtcclxuICAgICAgICAgICAgbGV0IHRyNHRkMmlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnZGJfbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGJfbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdEYXRhYmFzZXMgbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZi5kYXRhYmFzZS5kZWZhdWx0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyNHRkMi5hcHBlbmRDaGlsZCh0cjR0ZDJpbnB1dDEpO1xyXG4gICAgICAgICAgICB0cjQuYXBwZW5kQ2hpbGQodHI0dGQyKTtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0cjUgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzogeydpZCc6ICdkYl9jaGFyX3RhYmxlX3ByZWZpeF9yb3cnLCAnc3R5bGUnOiAnZGlzcGxheTpub25lOyd9fV0pO1xyXG4gICAgICAgICAgICBsZXQgdHI1dGQxID0gY3JlYXRlRWxlbWVudChbeyd0ZCc6IHsnY2xhc3MnOiAnY29sLW1kLTIgY29sLXNtLTIgY29sLXhzLTIgY29sLXhzLXBsdXMtMid9fV0pO1xyXG4gICAgICAgICAgICBsZXQgdHI1dGQxbGJsMSA9IGNyZWF0ZUVsZW1lbnQoW3snbGFiZWwnOiB7J2Zvcic6ICdkYl9jaGFyJ319XSk7XHJcbiAgICAgICAgICAgIHRyNXRkMWxibDEudGV4dENvbnRlbnQgPSAnQ2hhcnNldDonO1xyXG4gICAgICAgICAgICB0cjV0ZDEuYXBwZW5kQ2hpbGQodHI1dGQxbGJsMSk7XHJcbiAgICAgICAgICAgIHRyNS5hcHBlbmRDaGlsZCh0cjV0ZDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyNXRkMiA9IGNyZWF0ZUVsZW1lbnQoW3sndGQnOiB7J2NsYXNzJzogJ2NvbC1tZC00IGNvbC1zbS00IGNvbC14cy00IGNvbC14cy1wbHVzLTQnfX1dKTtcclxuICAgICAgICAgICAgbGV0IHRyNXRkMmlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnZGJfY2hhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGJfY2hhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdEYXRhYmFzZXMgY2hhcnNldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZi5kYXRhYmFzZS5kZWZhdWx0LmNoYXJzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyNXRkMi5hcHBlbmRDaGlsZCh0cjV0ZDJpbnB1dDEpO1xyXG4gICAgICAgICAgICB0cjUuYXBwZW5kQ2hpbGQodHI1dGQyKTtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0cjV0ZDMgPSBjcmVhdGVFbGVtZW50KFt7J3RkJzogeydjbGFzcyc6ICdjb2wtbWQtMiBjb2wtc20tMiBjb2wteHMtMiBjb2wteHMtcGx1cy0yJ319XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjV0ZDNsYmwxID0gY3JlYXRlRWxlbWVudChbeydsYWJlbCc6IHsnZm9yJzogJ2RiX3RhYmxlX3ByZWZpeCd9fV0pO1xyXG4gICAgICAgICAgICB0cjV0ZDNsYmwxLnRleHRDb250ZW50ID0gJ1ByZWZpeCA6ICc7XHJcbiAgICAgICAgICAgIHRyNXRkMy5hcHBlbmRDaGlsZCh0cjV0ZDNsYmwxKTtcclxuICAgICAgICAgICAgdHI1LmFwcGVuZENoaWxkKHRyNXRkMyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHI1dGQ0ID0gY3JlYXRlRWxlbWVudChbeyd0ZCc6IHsnY2xhc3MnOiAnY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTQgY29sLXhzLXBsdXMtNCd9fV0pO1xyXG4gICAgICAgICAgICBsZXQgdHI1dGQ0aW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdkYl90YWJsZV9wcmVmaXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2RiX3RhYmxlX3ByZWZpeCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdEYXRhYmFzZXMgdGFibGUgcHJlZml4JyxcclxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBzZWxmLmRhdGFiYXNlLmRlZmF1bHQucHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICB0cjV0ZDQuYXBwZW5kQ2hpbGQodHI1dGQ0aW5wdXQxKTtcclxuICAgICAgICAgICAgdHI1LmFwcGVuZENoaWxkKHRyNXRkNCk7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHI1KTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcGFyZW50Tm9kZSBWYWxpZCBIVE1MIGVsZW1lbnRcclxuICAgICAqICovXHJcbiAgICBzZXRBcHBJbnN0YWxsZXJEYXRhYmFzZUJhc2VVSShwYXJlbnROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xyXG4gICAgICAgICAgICBsZXQgY3JlYXRlRWxlbWVudCA9IGRvbS5jcmVhdGVFbGVtZW50O1xyXG4gICAgICAgICAgICBsZXQgZnJtMSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdmb3JtJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtZGF0YWJhc2UtaW5pdGlhbGl6ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21ldGhvZCc6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzogJ29mZidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZybTFpbnB1dDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYXRhYmFzZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJzEnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgZnJtMS5hcHBlbmRDaGlsZChmcm0xaW5wdXQxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmcm0xaW5wdXQyID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdkYl9wb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2RiX3BvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICczMzA2J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGZybTEuYXBwZW5kQ2hpbGQoZnJtMWlucHV0Mik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJtMWZkdDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnZmllbGRzZXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1pbnN0YWxsLWRhdGFiYXNlLXNhbmRib3gnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdib3gtc2hhZG93IGJveC1zaGFkb3ctbGlnaHQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnbGVnZW5kJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtaW5zdGFsbC1kYXRhYmFzZS1zYW5kYm94LXRpdGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYm94LXNoYWRvdyBib3gtc2hhZG93LWxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnOiAnZm9udC13ZWlnaHQ6IDYwMDsnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgZnJtMWZkdDFsZ2QxLnRleHRDb250ZW50ID0gJ0RhdGFiYXNlcyBjb25maWd1cmUnO1xyXG4gICAgICAgICAgICBmcm0xZmR0MS5hcHBlbmRDaGlsZChmcm0xZmR0MWxnZDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZybTFmZHQxZHYxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2Rpdic6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncm93J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJtMWZkdDFsZ2QxZHYxdGJsMSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0YWJsZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWluc3RhbGwtZGF0YWJhc2UtdGFncycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RhYmxlIHRhYmxlLWNvbmRlbnNlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21ldGhvZCc6ICdhcHAtaW5zdGFsbC1kYXRhYmFzZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBmcm0xZmR0MWR2MS5hcHBlbmRDaGlsZChmcm0xZmR0MWxnZDFkdjF0YmwxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDFkdjFkdjEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnZGl2Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtaW5zdGFsbC1kYXRhYmFzZS1zYW5kYm94LWZvb3RlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2Zsb2F0LXJpZ2h0IHRleHQtYWxpZ24tcmlnaHQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgZnJtMWZkdDFkdjEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFsZ2QxZHYxZHYxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDFkdjFkdjFidG4xID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2J1dHRvbic6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWRhdGFiYXNlLWNyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYnV0dG9uIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgZnJtMWZkdDFsZ2QxZHYxZHYxYnRuMS50ZXh0Q29udGVudCA9ICdDcmVhdGUgREInO1xyXG4gICAgICAgICAgICBmcm0xZmR0MWxnZDFkdjFkdjEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFsZ2QxZHYxZHYxYnRuMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJtMWZkdDFsZ2QxZHYxZHYxYnRuMiA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdidXR0b24nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1kYXRhYmFzZS1pbnN0YWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdzdWJtaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdidXR0b24gYnV0dG9uLW91dGxpbmUtcHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBmcm0xZmR0MWxnZDFkdjFkdjFidG4yLnRleHRDb250ZW50ID0gJ05leHQnO1xyXG4gICAgICAgICAgICBmcm0xZmR0MWxnZDFkdjFkdjEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFsZ2QxZHYxZHYxYnRuMik7XHJcblxyXG4gICAgICAgICAgICBmcm0xZmR0MS5hcHBlbmRDaGlsZChmcm0xZmR0MWR2MSk7XHJcbiAgICAgICAgICAgIGZybTEuYXBwZW5kQ2hpbGQoZnJtMWZkdDEpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGZybTEpO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwYXJlbnROb2RlIFZhbGlkIEhUTUwgZWxlbWVudFxyXG4gICAgICogKi9cclxuICAgIHNldEFwcEluc3RhbGxlckRhdGFiYXNlRGVmYXVsdFVJKHBhcmVudE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xyXG4gICAgICAgICAgICBsZXQgY3JlYXRlRWxlbWVudCA9IGRvbS5jcmVhdGVFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyMSA9IGNyZWF0ZUVsZW1lbnQoW3sndHInOiB7fX1dKTtcclxuICAgICAgICAgICAgbGV0IHRyMXRkMSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0ZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTQgY29sLXhzLXBsdXMtNCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyMXRkMWxibDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnbGFiZWwnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zvcic6ICdkYl9ob3N0J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyMXRkMWxibDEudGV4dENvbnRlbnQgPSAnSG9zdCA6ICc7XHJcbiAgICAgICAgICAgIHRyMXRkMS5hcHBlbmRDaGlsZCh0cjF0ZDFsYmwxKTtcclxuICAgICAgICAgICAgdHIxLmFwcGVuZENoaWxkKHRyMXRkMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHIxdGQyID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ3RkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtOCBjb2wtc20tOCBjb2wteHMtOCBjb2wteHMtcGx1cy04J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjF0ZDJpbnB1dDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2RiX2hvc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2RiX2hvc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dC1ib3gtYm90dG9tLWJvcmRlci1vbmx5JyxcclxuICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnRGF0YWJhc2VzXFwncyBob3N0JyxcclxuICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOiAncmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgdHIxdGQyLmFwcGVuZENoaWxkKHRyMXRkMmlucHV0MSk7XHJcbiAgICAgICAgICAgIHRyMS5hcHBlbmRDaGlsZCh0cjF0ZDIpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRyMSk7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHRyMiA9IGNyZWF0ZUVsZW1lbnQoW3sndHInOiB7fX1dKTtcclxuICAgICAgICAgICAgbGV0IHRyMnRkMSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0ZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTQgY29sLXhzLXBsdXMtNCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyMnRkMWxibDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnbGFiZWwnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zvcic6ICdkYl91c2VyJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyMnRkMWxibDEudGV4dENvbnRlbnQgPSAnVXNlcm5hbWUgOiAnO1xyXG4gICAgICAgICAgICB0cjJ0ZDEuYXBwZW5kQ2hpbGQodHIydGQxbGJsMSk7XHJcbiAgICAgICAgICAgIHRyMi5hcHBlbmRDaGlsZCh0cjJ0ZDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyMnRkMiA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0ZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTggY29sLXNtLTggY29sLXhzLTggY29sLXhzLXBsdXMtOCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBsZXQgdHIydGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdkYl91c2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYl91c2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQtYm94LWJvdHRvbS1ib3JkZXItb25seScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ0RhdGFiYXNlc1xcJ3MgdXNlcm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICB0cjJ0ZDIuYXBwZW5kQ2hpbGQodHIydGQyaW5wdXQxKTtcclxuICAgICAgICAgICAgdHIyLmFwcGVuZENoaWxkKHRyMnRkMik7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHIyKTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdHIzID0gY3JlYXRlRWxlbWVudChbeyd0cic6IHt9fV0pO1xyXG4gICAgICAgICAgICBsZXQgdHIzdGQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ3RkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjN0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2xhYmVsJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmb3InOiAnZGJfdXNlcl9wYXNzJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyM3RkMWxibDEudGV4dENvbnRlbnQgPSAnUGFzc3dvcmQgOiAnO1xyXG4gICAgICAgICAgICB0cjN0ZDEuYXBwZW5kQ2hpbGQodHIzdGQxbGJsMSk7XHJcbiAgICAgICAgICAgIHRyMy5hcHBlbmRDaGlsZCh0cjN0ZDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyM3RkMiA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0ZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTggY29sLXNtLTggY29sLXhzLTggY29sLXhzLXBsdXMtOCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBsZXQgdHIzdGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdkYl91c2VyX3Bhc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2RiX3VzZXJfcGFzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dC1ib3gtYm90dG9tLWJvcmRlci1vbmx5JyxcclxuICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnRGF0YWJhc2VzXFwncyBwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyM3RkMi5hcHBlbmRDaGlsZCh0cjN0ZDJpbnB1dDEpO1xyXG4gICAgICAgICAgICB0cjMuYXBwZW5kQ2hpbGQodHIzdGQyKTtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0cjQgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzoge319XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjR0ZDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAndGQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC00IGNvbC1zbS00IGNvbC14cy00IGNvbC14cy1wbHVzLTQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgbGV0IHRyNHRkMWxibDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnbGFiZWwnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zvcic6ICdkYl9uYW1lJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyNHRkMWxibDEudGV4dENvbnRlbnQgPSAnRGF0YWJhc2VzIDogJztcclxuICAgICAgICAgICAgdHI0dGQxLmFwcGVuZENoaWxkKHRyNHRkMWxibDEpO1xyXG4gICAgICAgICAgICB0cjQuYXBwZW5kQ2hpbGQodHI0dGQxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjR0ZDIgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAndGQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC04IGNvbC1zbS04IGNvbC14cy04IGNvbC14cy1wbHVzLTgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgbGV0IHRyNHRkMmlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnZGJfbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGJfbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdEYXRhYmFzZXNcXCdzIG5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHNlbGYuZGF0YWJhc2UuZGVmYXVsdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICB0cjR0ZDIuYXBwZW5kQ2hpbGQodHI0dGQyaW5wdXQxKTtcclxuICAgICAgICAgICAgdHI0LmFwcGVuZENoaWxkKHRyNHRkMik7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHI0KTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdHI1ID0gY3JlYXRlRWxlbWVudChbeyd0cic6IHt9fV0pO1xyXG4gICAgICAgICAgICBsZXQgdHI1dGQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ3RkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjV0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2xhYmVsJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmb3InOiAnZGJfY2hhcidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICB0cjV0ZDFsYmwxLnRleHRDb250ZW50ID0gJ0NoYXJzZXQgOiAnO1xyXG4gICAgICAgICAgICB0cjV0ZDEuYXBwZW5kQ2hpbGQodHI1dGQxbGJsMSk7XHJcbiAgICAgICAgICAgIHRyNS5hcHBlbmRDaGlsZCh0cjV0ZDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyNXRkMiA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0ZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTggY29sLXNtLTggY29sLXhzLTggY29sLXhzLXBsdXMtOCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBsZXQgdHI1dGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdkYl9jaGFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYl9jaGFyJyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQtYm94LWJvdHRvbS1ib3JkZXItb25seScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ0RhdGEgY2hhciBzZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHNlbGYuZGF0YWJhc2UuZGVmYXVsdC5jaGFyc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICB0cjV0ZDIuYXBwZW5kQ2hpbGQodHI1dGQyaW5wdXQxKTtcclxuICAgICAgICAgICAgdHI1LmFwcGVuZENoaWxkKHRyNXRkMik7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHI1KTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdHI2ID0gY3JlYXRlRWxlbWVudChbeyd0cic6IHt9fV0pO1xyXG4gICAgICAgICAgICBsZXQgdHI2dGQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ3RkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjZ0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2xhYmVsJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmb3InOiAnZGJfdGFibGVfcHJlZml4J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyNnRkMWxibDEudGV4dENvbnRlbnQgPSAnVGFibGUgcHJlZml4IDogJztcclxuICAgICAgICAgICAgdHI2dGQxLmFwcGVuZENoaWxkKHRyNnRkMWxibDEpO1xyXG4gICAgICAgICAgICB0cjYuYXBwZW5kQ2hpbGQodHI2dGQxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjZ0ZDIgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAndGQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC04IGNvbC1zbS04IGNvbC14cy04IGNvbC14cy1wbHVzLTgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgbGV0IHRyNnRkMmlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnZGJfdGFibGVfcHJlZml4JyxcclxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYl90YWJsZV9wcmVmaXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dC1ib3gtYm90dG9tLWJvcmRlci1vbmx5JyxcclxuICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnRGF0YWJhc2VzIHByZWZpeCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZi5kYXRhYmFzZS5kZWZhdWx0LnByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOiAncmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgdHI2dGQyLmFwcGVuZENoaWxkKHRyNnRkMmlucHV0MSk7XHJcbiAgICAgICAgICAgIHRyNi5hcHBlbmRDaGlsZCh0cjZ0ZDIpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRyNik7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUgVmFsaWQgSFRNTCBlbGVtZW50XHJcbiAgICAgKiAqL1xyXG4gICAgc2V0QXBwSW5zdGFsbGVyQWNjb3VudEJhc2VVSShwYXJlbnROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xyXG4gICAgICAgICAgICBsZXQgY3JlYXRlRWxlbWVudCA9IGRvbS5jcmVhdGVFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgbGV0IGZybTEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnZm9ybSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWFjY291bnQtaW5pdGlhbGl6ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21ldGhvZCc6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzogJ29mZidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZybTFpbnB1dDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdhY2NvdW50JyxcclxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAnMSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBmcm0xLmFwcGVuZENoaWxkKGZybTFpbnB1dDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZybTFmZHQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2ZpZWxkc2V0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtaW5zdGFsbC1hY2NvdW50LXNhbmRib3gnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdib3gtc2hhZG93IGJveC1zaGFkb3ctbGlnaHQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnbGVnZW5kJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtaW5zdGFsbC1hY2NvdW50LXNhbmRib3gtdGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdib3gtc2hhZG93IGJveC1zaGFkb3ctbGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZSc6ICdmb250LXdlaWdodDogNjAwOydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBmcm0xZmR0MWxnZDEudGV4dENvbnRlbnQgPSAnQWNjb3VudCBjb25maWd1cmUnO1xyXG4gICAgICAgICAgICBmcm0xZmR0MS5hcHBlbmRDaGlsZChmcm0xZmR0MWxnZDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZybTFmZHQxZHYxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2Rpdic6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncm93J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJtMWZkdDFsZ2QxZHYxdGJsMSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0YWJsZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWluc3RhbGwtYWNjb3VudC10YWdzJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGFibGUgdGFibGUtY29uZGVuc2VkJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWV0aG9kJzogJ2FwcC1pbnN0YWxsLWFjY291bnQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgZnJtMWZkdDFkdjEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFsZ2QxZHYxdGJsMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJtMWZkdDFsZ2QxZHYxZHYxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2Rpdic6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWluc3RhbGwtYWNjb3VudC1zYW5kYm94LWZvb3RlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2Zsb2F0LXJpZ2h0IHRleHQtYWxpZ24tcmlnaHQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgZnJtMWZkdDFkdjEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFsZ2QxZHYxZHYxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDFkdjFkdjFidG4yID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2J1dHRvbic6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYXBwLWFjY291bnQtaW5zdGFsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnc3VibWl0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYnV0dG9uIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnknXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgZnJtMWZkdDFsZ2QxZHYxZHYxYnRuMi50ZXh0Q29udGVudCA9ICdOZXh0JztcclxuICAgICAgICAgICAgZnJtMWZkdDFsZ2QxZHYxZHYxLmFwcGVuZENoaWxkKGZybTFmZHQxbGdkMWR2MWR2MWJ0bjIpO1xyXG5cclxuICAgICAgICAgICAgZnJtMWZkdDEuYXBwZW5kQ2hpbGQoZnJtMWZkdDFkdjEpO1xyXG4gICAgICAgICAgICBmcm0xLmFwcGVuZENoaWxkKGZybTFmZHQxKTtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF0pIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChmcm0xKTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcGFyZW50Tm9kZSBWYWxpZCBIVE1MIGVsZW1lbnRcclxuICAgICAqICovXHJcbiAgICBzZXRBcHBJbnN0YWxsZXJBY2NvdW50RGVmYXVsdFVJKHBhcmVudE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZG9tKSB7XHJcbiAgICAgICAgICAgIGxldCBjcmVhdGVFbGVtZW50ID0gZG9tLmNyZWF0ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGxldCB0cjEgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzoge319XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjF0ZDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAndGQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC00IGNvbC1zbS00IGNvbC14cy00IGNvbC14cy1wbHVzLTQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjF0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2xhYmVsJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmb3InOiAnYWNjX2FkbV91c2VybmFtZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICB0cjF0ZDFsYmwxLnRleHRDb250ZW50ID0gJ1VzZXJuYW1lIDogJztcclxuICAgICAgICAgICAgdHIxdGQxLmFwcGVuZENoaWxkKHRyMXRkMWxibDEpO1xyXG4gICAgICAgICAgICB0cjEuYXBwZW5kQ2hpbGQodHIxdGQxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjF0ZDIgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAndGQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC04IGNvbC1zbS04IGNvbC14cy04IGNvbC14cy1wbHVzLTgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgbGV0IHRyMXRkMmlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYWNjX2FkbV91c2VybmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnYWNjX2FkbV91c2VybmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdVc2VybmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAncGF0dGVybic6ICdbYS16MC05XXs4LH0kJyxcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnTXVzdCBjb250YWluIGNoYXJhY3RlcnMgYW5kIGF0IGxlYXN0IDggbGV0dGVycyBmcm9tIGEgdG8geicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgdHIxdGQyLmFwcGVuZENoaWxkKHRyMXRkMmlucHV0MSk7XHJcbiAgICAgICAgICAgIHRyMS5hcHBlbmRDaGlsZCh0cjF0ZDIpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRyMSk7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHRyMiA9IGNyZWF0ZUVsZW1lbnQoW3sndHInOiB7fX1dKTtcclxuICAgICAgICAgICAgbGV0IHRyMnRkMSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0ZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTQgY29sLXhzLXBsdXMtNCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyMnRkMWxibDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnbGFiZWwnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zvcic6ICdhY2NfYWRtX2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyMnRkMWxibDEudGV4dENvbnRlbnQgPSAnRS1tYWlsIDogJztcclxuICAgICAgICAgICAgdHIydGQxLmFwcGVuZENoaWxkKHRyMnRkMWxibDEpO1xyXG4gICAgICAgICAgICB0cjIuYXBwZW5kQ2hpbGQodHIydGQxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjJ0ZDIgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAndGQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC04IGNvbC1zbS04IGNvbC14cy04IGNvbC14cy1wbHVzLTgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgbGV0IHRyMnRkMmlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnYWNjX2FkbV9lbWFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnYWNjX2FkbV9lbWFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnZW1haWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dC1ib3gtYm90dG9tLWJvcmRlci1vbmx5JyxcclxuICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnRS1tYWlsIGFkZHJlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BhdHRlcm4nOiAnW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXFxcLlthLXpdezIsfSQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdNdXN0IGNvbnRhaW4gYXQgY2hhcmFjdGVyc0BjaGFyYWN0ZXJzLmRvbWFpbiAoY2hhcmFjdGVycyBmb2xsb3dlZCBieSBhbiBAIHNpZ24sIGZvbGxvd2VkIGJ5IG1vcmUgY2hhcmFjdGVycywgYW5kIHRoZW4gYSBcXCcuXFwnLiBBZnRlciB0aGUgXFwnLlxcJyBzaWduLCBhZGQgYXQgbGVhc3QgMiBsZXR0ZXJzIGZyb20gYSB0byB6JyxcclxuICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzogJ29mZidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICB0cjJ0ZDIuYXBwZW5kQ2hpbGQodHIydGQyaW5wdXQxKTtcclxuICAgICAgICAgICAgdHIyLmFwcGVuZENoaWxkKHRyMnRkMik7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHIyKTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdHIzID0gY3JlYXRlRWxlbWVudChbeyd0cic6IHt9fV0pO1xyXG4gICAgICAgICAgICBsZXQgdHIzdGQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ3RkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjN0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2xhYmVsJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmb3InOiAnYWNjX2FkbV9wYXNzJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyM3RkMWxibDEudGV4dENvbnRlbnQgPSAnUGFzc3dvcmQgOiAnO1xyXG4gICAgICAgICAgICB0cjN0ZDEuYXBwZW5kQ2hpbGQodHIzdGQxbGJsMSk7XHJcbiAgICAgICAgICAgIHRyMy5hcHBlbmRDaGlsZCh0cjN0ZDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyM3RkMiA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0ZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTggY29sLXNtLTggY29sLXhzLTggY29sLXhzLXBsdXMtOCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBsZXQgdHIzdGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhY2NfYWRtX3Bhc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2FjY19hZG1fcGFzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dC1ib3gtYm90dG9tLWJvcmRlci1vbmx5JyxcclxuICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BhdHRlcm4nOiAnKD89LipcXFxcZCkoPz0uKltAX10pKD89LipbYS16XSkoPz0uKltBLVpdKS57Nix9JyxcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnTXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSAgbnVtYmVyIGFuZCBvbmUgdXBwZXJjYXNlIGFuZCBsb3dlcmNhc2UgbGV0dGVyIGFuZCBhdCBsZWFzdCA2IG9yIG1vcmUgY2hhcmFjdGVycycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgdHIzdGQyLmFwcGVuZENoaWxkKHRyM3RkMmlucHV0MSk7XHJcbiAgICAgICAgICAgIHRyMy5hcHBlbmRDaGlsZCh0cjN0ZDIpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRyMyk7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHRyNCA9IGNyZWF0ZUVsZW1lbnQoW3sndHInOiB7fX1dKTtcclxuICAgICAgICAgICAgbGV0IHRyNHRkMSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0ZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTQgY29sLXhzLXBsdXMtNCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBsZXQgdHI0dGQxbGJsMSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdsYWJlbCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnZm9yJzogJ2FjY19hZG1fY25mX3Bhc3MnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgdHI0dGQxbGJsMS50ZXh0Q29udGVudCA9ICdSZXR5cGUgUGFzc3dvcmQgOiAnO1xyXG4gICAgICAgICAgICB0cjR0ZDEuYXBwZW5kQ2hpbGQodHI0dGQxbGJsMSk7XHJcbiAgICAgICAgICAgIHRyNC5hcHBlbmRDaGlsZCh0cjR0ZDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyNHRkMiA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0ZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTggY29sLXNtLTggY29sLXhzLTggY29sLXhzLXBsdXMtOCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBsZXQgdHI0dGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhY2NfYWRtX2NuZl9wYXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdhY2NfYWRtX2NuZl9wYXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdSZXR5cGUgcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BhdHRlcm4nOiAnKD89LipcXFxcZCkoPz0uKltAX10pKD89LipbYS16XSkoPz0uKltBLVpdKS57Nix9JyxcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnTXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSAgbnVtYmVyIGFuZCBvbmUgdXBwZXJjYXNlIGFuZCBsb3dlcmNhc2UgbGV0dGVyIGFuZCBhdCBsZWFzdCA2IG9yIG1vcmUgY2hhcmFjdGVycycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgdHI0dGQyLmFwcGVuZENoaWxkKHRyNHRkMmlucHV0MSk7XHJcbiAgICAgICAgICAgIHRyNC5hcHBlbmRDaGlsZCh0cjR0ZDIpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRyNCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUgVmFsaWQgSFRNTCBlbGVtZW50XHJcbiAgICAgKiAqL1xyXG4gICAgc2V0QXBwSW5zdGFsbGVyV2Vic2l0ZUJhc2VVSShwYXJlbnROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGltcG9ydCgnLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xyXG4gICAgICAgICAgICBsZXQgY3JlYXRlRWxlbWVudCA9IGRvbS5jcmVhdGVFbGVtZW50O1xyXG4gICAgICAgICAgICBsZXQgZnJtMSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdmb3JtJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtd2Vic2l0ZS1pbml0aWFsaXplJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWV0aG9kJzogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJtMWlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ3dlYnNpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICcxJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGZybTEuYXBwZW5kQ2hpbGQoZnJtMWlucHV0MSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJtMWZkdDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnZmllbGRzZXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1pbnN0YWxsLXdlYnNpdGUtc2FuZGJveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2JveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZybTFmZHQxbGdkMSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICdsZWdlbmQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2FwcC1pbnN0YWxsLXdlYnNpdGUtc2FuZGJveC10aXRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2JveC1zaGFkb3cgYm94LXNoYWRvdy1saWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlJzogJ2ZvbnQtd2VpZ2h0OiA2MDA7J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMS50ZXh0Q29udGVudCA9ICdXZWJzaXRlIGNvbmZpZ3VyZSc7XHJcbiAgICAgICAgICAgIGZybTFmZHQxLmFwcGVuZENoaWxkKGZybTFmZHQxbGdkMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJtMWZkdDFkdjEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnZGl2Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdyb3cnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDFkdjF0YmwxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ3RhYmxlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtaW5zdGFsbC13ZWJzaXRlLXRhZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0YWJsZSB0YWJsZS1jb25kZW5zZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtZXRob2QnOiAnYXBwLWluc3RhbGwtd2Vic2l0ZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBmcm0xZmR0MWR2MS5hcHBlbmRDaGlsZChmcm0xZmR0MWxnZDFkdjF0YmwxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmcm0xZmR0MWxnZDFkdjFkdjEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnZGl2Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtaW5zdGFsbC13ZWJzaXRlLXNhbmRib3gtZm9vdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZmxvYXQtcmlnaHQgdGV4dC1hbGlnbi1yaWdodCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBmcm0xZmR0MWR2MS5hcHBlbmRDaGlsZChmcm0xZmR0MWxnZDFkdjFkdjEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZybTFmZHQxbGdkMWR2MWR2MWJ0bjIgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnYnV0dG9uJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdhcHAtd2Vic2l0ZS1pbnN0YWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdzdWJtaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdidXR0b24gYnV0dG9uLW91dGxpbmUtcHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBmcm0xZmR0MWxnZDFkdjFkdjFidG4yLnRleHRDb250ZW50ID0gJ0ZpbmlzaCc7XHJcbiAgICAgICAgICAgIGZybTFmZHQxbGdkMWR2MWR2MS5hcHBlbmRDaGlsZChmcm0xZmR0MWxnZDFkdjFkdjFidG4yKTtcclxuXHJcbiAgICAgICAgICAgIGZybTFmZHQxLmFwcGVuZENoaWxkKGZybTFmZHQxZHYxKTtcclxuICAgICAgICAgICAgZnJtMS5hcHBlbmRDaGlsZChmcm0xZmR0MSk7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZnJtMSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUgVmFsaWQgSFRNTCBlbGVtZW50XHJcbiAgICAgKiAqL1xyXG4gICAgc2V0QXBwSW5zdGFsbGVyV2Vic2l0ZURlZmF1bHRVSShwYXJlbnROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjEgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzoge319XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjF0ZDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAndGQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC00IGNvbC1zbS00IGNvbC14cy00IGNvbC14cy1wbHVzLTQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjF0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2xhYmVsJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmb3InOiAnc2l0ZV9uYW1lJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyMXRkMWxibDEudGV4dENvbnRlbnQgPSAnTmV3IG5hbWUgOiAnO1xyXG4gICAgICAgICAgICB0cjF0ZDEuYXBwZW5kQ2hpbGQodHIxdGQxbGJsMSk7XHJcbiAgICAgICAgICAgIHRyMS5hcHBlbmRDaGlsZCh0cjF0ZDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyMXRkMiA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0ZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29sLW1kLTggY29sLXNtLTggY29sLXhzLTggY29sLXhzLXBsdXMtOCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICBsZXQgdHIxdGQyaW5wdXQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2lucHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzaXRlX25hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ3NpdGVfbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdOYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOiAncmVxdWlyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyMXRkMi5hcHBlbmRDaGlsZCh0cjF0ZDJpbnB1dDEpO1xyXG4gICAgICAgICAgICB0cjEuYXBwZW5kQ2hpbGQodHIxdGQyKTtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0cjIgPSBjcmVhdGVFbGVtZW50KFt7J3RyJzoge319XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjJ0ZDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAndGQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC00IGNvbC1zbS00IGNvbC14cy00IGNvbC14cy1wbHVzLTQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjJ0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2xhYmVsJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmb3InOiAnc2l0ZV9kZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICB0cjJ0ZDFsYmwxLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uIDogJztcclxuICAgICAgICAgICAgdHIydGQxLmFwcGVuZENoaWxkKHRyMnRkMWxibDEpO1xyXG4gICAgICAgICAgICB0cjIuYXBwZW5kQ2hpbGQodHIydGQxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cjJ0ZDIgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAndGQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbC1tZC04IGNvbC1zbS04IGNvbC14cy04IGNvbC14cy1wbHVzLTgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgbGV0IHRyMnRkMmlucHV0MSA9IGNyZWF0ZUVsZW1lbnQoW3tcclxuICAgICAgICAgICAgICAgICd0ZXh0YXJlYSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2l0ZV9kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnc2l0ZV9kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0LWJveC1ib3R0b20tYm9yZGVyLW9ubHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICdEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ3JlcXVpcmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzogJ29mZicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlJzogJ3dpZHRoOjEwMCUgIWltcG9ydGFudCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICB0cjJ0ZDIuYXBwZW5kQ2hpbGQodHIydGQyaW5wdXQxKTtcclxuICAgICAgICAgICAgdHIyLmFwcGVuZENoaWxkKHRyMnRkMik7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodHIyKTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdHIzID0gY3JlYXRlRWxlbWVudChbeyd0cic6IHt9fV0pO1xyXG4gICAgICAgICAgICBsZXQgdHIzdGQxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ3RkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtNCBjb2wtc20tNCBjb2wteHMtNCBjb2wteHMtcGx1cy00J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjN0ZDFsYmwxID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ2xhYmVsJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmb3InOiAnc2l0ZV9jb21wYW55J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyM3RkMWxibDEudGV4dENvbnRlbnQgPSAnQ29tcGFueSA6ICc7XHJcbiAgICAgICAgICAgIHRyM3RkMS5hcHBlbmRDaGlsZCh0cjN0ZDFsYmwxKTtcclxuICAgICAgICAgICAgdHIzLmFwcGVuZENoaWxkKHRyM3RkMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHIzdGQyID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgJ3RkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb2wtbWQtOCBjb2wtc20tOCBjb2wteHMtOCBjb2wteHMtcGx1cy04J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIGxldCB0cjN0ZDJpbnB1dDEgPSBjcmVhdGVFbGVtZW50KFt7XHJcbiAgICAgICAgICAgICAgICAnaW5wdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NpdGVfY29tcGFueScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnc2l0ZV9jb21wYW55JyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQtYm94LWJvdHRvbS1ib3JkZXItb25seScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ0NvbXBhbnknLFxyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHNlbGYuZGF0YWJhc2UuZGVmYXVsdC5jb21wYW55TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOiAncmVxdWlyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgIHRyM3RkMi5hcHBlbmRDaGlsZCh0cjN0ZDJpbnB1dDEpO1xyXG4gICAgICAgICAgICB0cjMuYXBwZW5kQ2hpbGQodHIzdGQyKTtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0cjMpO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9