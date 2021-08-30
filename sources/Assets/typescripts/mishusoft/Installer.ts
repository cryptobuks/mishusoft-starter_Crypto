export class MishusoftInstaller {
    private installationUrl: string;

    constructor(
        private rootUrl: string,
        private database: any
    ) {
        this.installationUrl = this.rootUrl + "install";

    }

    play(): void {
        let self = this;
        window.addEventListener('load', () => {
            self.appInstallerBaseUI();
            import('../common/dom').then(function (dom) {
                dom.captureElement('#app-installer').addEventListener('click', function () {
                    import('../common/message').then(function (message) {
                        message.sendMessage(self, {
                            security_code: 1,
                            env: {'installation': {client: 'base'}}
                        }, self.installationUrl);
                    }).catch(function (err) {
                        console.log(err)
                    });
                });
            }).catch(function (err) {
                console.log(err)
            });
        });
    };

    appInstallerBaseUI(): void {
        //Application's Meta Tags
        let self = this;
        let appHeader = document.head;
        import('../common/dom').then(function (dom) {
            let captureElement = dom.captureElement;
            let createElement = dom.createElement;

            appHeader.insertBefore(createElement([{"meta": {"charset": "UTF-8"}}]), captureElement('#app-title'));
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
            self.database.content.file.default.link.forEach(function (__file: any) {
                appHeader.insertBefore(createElement([{"link": __file}]), appHeader.lastElementChild);
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
            console.log(err)
        });
    };

    /**
     * @param message JSON object
     * */
    appRuntimeEventManager(message: any): void {
        let self = this;

        import('../common/dom').then(function (dom) {
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
                } else {
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
                    let messageBoard = createElement([{'div': {'id': 'messageboard'}}]), msg_prefix: string;
                    if (message.env.installation.message.type === 'error') {
                        messageBoard.setAttribute('class', 'box-message box-danger box-shadow box-shadow-light');
                        msg_prefix = '<b class="text-danger" style="float: left;">Error&nbsp;:&nbsp;</b>';
                    } else {
                        messageBoard.setAttribute('class', 'box-message box-success box-shadow box-shadow-light');
                        msg_prefix = '<b class="text-success" style="float: left;">Message&nbsp;:&nbsp;</b>';
                    }
                    messageBoard.innerHTML = msg_prefix + message.env.installation.message.text;
                    let messageArea = captureElement('#messagezone');
                    if (messageArea.style.display === 'none') {
                        messageArea.style.display = 'block';
                        messageArea.appendChild(messageBoard);
                    } else {
                        messageArea.textContent = '';
                        messageArea.appendChild(messageBoard);
                    }
                }

                import('../common/message').then(function (messageRequest) {
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
                                captureElement('#app-database-create-initialize').addEventListener('submit', function (event: Event) {
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
                                        },
                                        self.installationUrl);
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
                                        },
                                        self.installationUrl);
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
                                        env: {'installation': {client: 'base'}}
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
                                captureElement('#app-database-initialize').addEventListener('submit', function (event: Event) {
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
                                        },
                                        self.installationUrl);
                                });

                                captureElement('#app-database-create').addEventListener('click', function () {
                                    captureElement('#app-loader').removeAttribute('style');
                                    this.setAttribute('disabled', 'disabled');
                                    messageRequest.sendMessage(self, {
                                        security_code: 1,
                                        env: {installation: {client: {base: {area: 'database-create'}}}}
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
                                captureElement('#app-account-initialize').addEventListener('submit', function (event: Event) {
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
                                        },
                                        self.installationUrl);
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
                                captureElement('#app-website-initialize').addEventListener('submit', function (event: Event) {
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
                                        },
                                        self.installationUrl);
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
                                captureElement("form").forEach(function (frm: { remove: () => void; }) {
                                    frm.remove();
                                })
                            } else {
                                captureElement("form").remove();
                            }

                            captureElement("#app-loader").style.display = 'block';
                            setTimeout(function () {
                                window.location.replace(self.rootUrl);
                            }, 5000);
                        }
                    }
                }).catch(function (err) {
                    console.log(err)
                });
            }
        }).catch(function (err) {
            console.log(err)
        });
    };

    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerIcon(parentNode: HTMLElement): void {
        let self = this;
        import('../common/dom').then(function (dom) {
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
            console.log(err)
        });
    };

    /**
     * @param parentNode Valid HTML element
     * */
    setRuntimeEventMessageZone(parentNode: HTMLElement): void {
        import('../common/dom').then(function (dom) {
            let createElement = dom.createElement;
            let dv5 = createElement([{
                'div': {
                    'id': 'messagezone',
                    'style': 'width:inherit;display: none;'
                }
            }]);
            parentNode.appendChild(dv5);
        }).catch(function (err) {
            console.log(err)
        });
    };

    /**
     * @param parentNode valid HTML Element*/
    setAppInstallerDBMSSelectionUI(parentNode: HTMLElement): void {
        let self = this;
        import('../common/dom').then(function (dom) {
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
            child01.addEventListener('click', function (e: any) {
                e.preventDefault();
                if (e.originalTarget === child01) {
                    self.sendSelectRequest(child01);
                }
            })
            panel.appendChild(child01)

            let child02 = createElement([{
                'div': {
                    'class': 'box-message box-success box-shadow box-shadow-light',
                    'style': "text-align: center;float: left;height: 65px;width: 25%;margin-left: 20px;padding: 50px;display: flex;justify-content: center;align-items: center;"
                }
            }]);
            child02.innerText = "MySQL";
            child02.addEventListener('click', function (e: any) {
                e.preventDefault();
                if (e.originalTarget === child02) {
                    self.sendSelectRequest(child02);
                }
            });
            panel.appendChild(child02)

            parentNode.appendChild(panel);
        }).catch(function (err) {
            console.log(err)
        });
    };

    sendSelectRequest(node: HTMLElement) {
        let self = this;
        import('../common/message').then(function (message) {
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
                },
                self.installationUrl);
        }).catch(function (err) {
            console.log(err)
        });
    }

    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerDatabaseCreateBaseUI(parentNode: HTMLElement) {
        import('../common/dom').then(function (dom) {
            let createElement = dom.createElement;

            let frm1 = createElement([{
                'form': {
                    'id': 'app-database-create-initialize',
                    'method': 'post',
                    'autocomplete': 'off'
                }
            }]);
            let frm1input1 = createElement([{'input': {'type': 'hidden', 'name': 'database', 'value': 'create'}}]);
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

            let frm1fdt1dv1 = createElement([{'div': {'class': 'row'}}]);
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
            console.log(err)
        });

    };

    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerDatabaseCreateDefaultUI(parentNode: HTMLElement): void {
        let self = this;
        import('../common/dom').then(function (dom) {
            let createElement = dom.createElement;

            let tr1 = createElement([{'tr': {}}]);
            let tr1td1 = createElement([{'td': {'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2'}}]);
            let tr1td1lbl1 = createElement([{'label': {'for': 'db_host'}}]);
            tr1td1lbl1.textContent = 'Host : ';
            tr1td1.appendChild(tr1td1lbl1);
            tr1.appendChild(tr1td1);

            let tr1td2 = createElement([{'td': {'class': 'col-md-10 col-sm-10 col-xs-10 col-xs-plus-10'}}]);
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


            let tr2 = createElement([{'tr': {}}]);
            let tr2td1 = createElement([{'td': {'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2'}}]);
            let tr2td1lbl1 = createElement([{'label': {'for': 'db_user'}}]);
            tr2td1lbl1.textContent = 'User : ';
            tr2td1.appendChild(tr2td1lbl1);
            tr2.appendChild(tr2td1);

            let tr2td2 = createElement([{'td': {'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'}}]);
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

            let tr2td3 = createElement([{'td': {'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2'}}]);
            let tr2td3lbl1 = createElement([{'label': {'for': 'db_user_pass'}}]);
            tr2td3lbl1.textContent = 'Password : ';
            tr2td3.appendChild(tr2td3lbl1);
            tr2.appendChild(tr2td3);

            let tr2td4 = createElement([{'td': {'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'}}]);
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


            let tr3 = createElement([{'tr': {}}]);
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
            let tr4 = createElement([{'tr': {'id': 'db_name_row', 'style': 'display:none;'}}]);
            let tr4td1 = createElement([{'td': {'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2'}}]);
            let tr4td1lbl1 = createElement([{'label': {'for': 'db_name'}}]);
            tr4td1lbl1.textContent = 'Databases : ';
            tr4td1.appendChild(tr4td1lbl1);
            tr4.appendChild(tr4td1);

            let tr4td2 = createElement([{'td': {'class': 'col-md-10 col-sm-10 col-xs-10 col-xs-plus-10'}}]);
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


            let tr5 = createElement([{'tr': {'id': 'db_char_table_prefix_row', 'style': 'display:none;'}}]);
            let tr5td1 = createElement([{'td': {'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2'}}]);
            let tr5td1lbl1 = createElement([{'label': {'for': 'db_char'}}]);
            tr5td1lbl1.textContent = 'Charset:';
            tr5td1.appendChild(tr5td1lbl1);
            tr5.appendChild(tr5td1);

            let tr5td2 = createElement([{'td': {'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'}}]);
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


            let tr5td3 = createElement([{'td': {'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2'}}]);
            let tr5td3lbl1 = createElement([{'label': {'for': 'db_table_prefix'}}]);
            tr5td3lbl1.textContent = 'Prefix : ';
            tr5td3.appendChild(tr5td3lbl1);
            tr5.appendChild(tr5td3);

            let tr5td4 = createElement([{'td': {'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'}}]);
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
            console.log(err)
        });
    };

    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerDatabaseBaseUI(parentNode: HTMLElement): void {
        import('../common/dom').then(function (dom) {
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
            console.log(err)
        });
    };

    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerDatabaseDefaultUI(parentNode: HTMLElement): void {
        let self = this;
        import('../common/dom').then(function (dom) {
            let createElement = dom.createElement;

            let tr1 = createElement([{'tr': {}}]);
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


            let tr2 = createElement([{'tr': {}}]);
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


            let tr3 = createElement([{'tr': {}}]);
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


            let tr4 = createElement([{'tr': {}}]);
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


            let tr5 = createElement([{'tr': {}}]);
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


            let tr6 = createElement([{'tr': {}}]);
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
            console.log(err)
        });
    };

    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerAccountBaseUI(parentNode: HTMLElement): void {
        import('../common/dom').then(function (dom) {
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
            console.log(err)
        });
    };

    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerAccountDefaultUI(parentNode: HTMLElement): void {
        import('../common/dom').then(function (dom) {
            let createElement = dom.createElement;
            let tr1 = createElement([{'tr': {}}]);
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


            let tr2 = createElement([{'tr': {}}]);
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


            let tr3 = createElement([{'tr': {}}]);
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


            let tr4 = createElement([{'tr': {}}]);
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
            console.log(err)
        });
    };

    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerWebsiteBaseUI(parentNode: HTMLElement): void {
        import('../common/dom').then(function (dom) {
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
            console.log(err)
        });
    };

    /**
     * @param parentNode Valid HTML element
     * */
    setAppInstallerWebsiteDefaultUI(parentNode: HTMLElement): void {
        let self = this;
        import('../common/dom').then(function (dom) {
            let createElement = dom.createElement;

            let tr1 = createElement([{'tr': {}}]);
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


            let tr2 = createElement([{'tr': {}}]);
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


            let tr3 = createElement([{'tr': {}}]);
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
            console.log(err)
        });

    };
}
