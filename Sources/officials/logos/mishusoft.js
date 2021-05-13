/* global _root_ */

let DefaultAppName = 'mishusoft';
let DefaultDataCharSet = 'utf8mb4';
let DefaultDataTablePrefix = 'msu';
let DefaultAppCompanyName = 'Mishusoft Systems Inc.';

class Mishusoft {
    constructor() {
        this.author = 'Mr. Abir Ahamed';
        this.Company = 'Mishusoft Systems Inc';
        this.AppHostAddress = _root_;
        this.method = "POST";
        this.asynchronous = true;
        this.contentType = "application/json;charset=UTF-8";
        this.security_code = 1;
        this.dataInterval = null;

        /*data storage link*/
        this.notifyDataURl = this.AppHostAddress + "api/getVisitorsAccessLogs";
        this.checkUserAuthTimeURL = this.AppHostAddress + "user/checkLogStatus";

        this.selectAllCheckBox();
        //console.clear();
    }

    static init() {
        window.addEventListener('load', (event) => {
            Mishusoft.appInstallerBaseUI();
            Mishusoft.appLoaderActivate();

            let app_installer = Mishusoft.detectElementById('app-installer');
            app_installer.addEventListener('click', function () {
                Mishusoft.sendRequest({security_code: 1, env: {'installation': {client: 'base'}}}, _root_);
            });
        });
    }

    static appLoaderActivate() {
        //initialize app loader image & application
        if (Mishusoft.detectElementById('app-loader')) {
            Mishusoft.detectElementById('app-loader').setAttribute('style', 'display:none;');
        }
        if (Mishusoft.detectElementById('app-setup-box')) {
            Mishusoft.detectElementById('app-setup-box').removeAttribute('style');
        }
        if (Mishusoft.detectElementById('mishusoft-app-content')) {
            Mishusoft.detectElementById('mishusoft-app-content').removeAttribute('style');
        }
    }

    static appInstallerBaseUI() {
        //Application's Meta Tags
        let appHeader = document.head;
        let mt1 = Mishusoft.createElement([{"meta": {"charset": "UTF-8"}}]);
        appHeader.insertBefore(mt1, Mishusoft.detectElementById('app-title'));
        let mt2 = Mishusoft.createElement([{
            "meta": {
                "name": "viewport",
                "content": "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            }
        }]);
        appHeader.insertBefore(mt2, Mishusoft.detectElementById('app-title'));
        let mt3 = Mishusoft.createElement([{"meta": {"http-equiv": "X-UA-Compatible", "content": "ie=edge"}}]);
        appHeader.insertBefore(mt3, Mishusoft.detectElementById('app-title'));

        //Application's title
        Mishusoft.detectElementById('app-title').textContent = 'Welcome to Mishusoft Platform';

        //Application's Favicon
        let lnk1 = Mishusoft.createElement([{
            "link": {
                "rel": "apple-touch-icon",
                "size": "57x57",
                "href": _root_ + "public/media/favicon/apple-icon-57x57.png"
            }
        }]);
        appHeader.insertBefore(lnk1, appHeader.lastElementChild);
        let lnk2 = Mishusoft.createElement([{
            "link": {
                "rel": "apple-touch-icon",
                "size": "60x60",
                "href": _root_ + "public/media/favicon/apple-icon-60x60.png"
            }
        }]);
        appHeader.insertBefore(lnk2, appHeader.lastElementChild);
        let lnk3 = Mishusoft.createElement([{
            "link": {
                "rel": "apple-touch-icon",
                "size": "72x72",
                "href": _root_ + "public/media/favicon/apple-icon-72x72.png"
            }
        }]);
        appHeader.insertBefore(lnk3, appHeader.lastElementChild);
        let lnk4 = Mishusoft.createElement([{
            "link": {
                "rel": "apple-touch-icon",
                "size": "76x76",
                "href": _root_ + "public/media/favicon/apple-icon-76x76.png"
            }
        }]);
        appHeader.insertBefore(lnk4, appHeader.lastElementChild);
        let lnk5 = Mishusoft.createElement([{
            "link": {
                "rel": "apple-touch-icon",
                "size": "114x114",
                "href": _root_ + "public/media/favicon/apple-icon-114x114.png"
            }
        }]);
        appHeader.insertBefore(lnk5, appHeader.lastElementChild);
        let lnk6 = Mishusoft.createElement([{
            "link": {
                "rel": "apple-touch-icon",
                "size": "120x120",
                "href": _root_ + "public/media/favicon/apple-icon-120x120.png"
            }
        }]);
        appHeader.insertBefore(lnk6, appHeader.lastElementChild);
        let lnk7 = Mishusoft.createElement([{
            "link": {
                "rel": "apple-touch-icon",
                "size": "144x144",
                "href": _root_ + "public/media/favicon/apple-icon-144x144.png"
            }
        }]);
        appHeader.insertBefore(lnk7, appHeader.lastElementChild);
        let lnk8 = Mishusoft.createElement([{
            "link": {
                "rel": "apple-touch-icon",
                "size": "152x152",
                "href": _root_ + "public/media/favicon/apple-icon-152x152.png"
            }
        }]);
        appHeader.insertBefore(lnk8, appHeader.lastElementChild);
        let lnk9 = Mishusoft.createElement([{
            "link": {
                "rel": "apple-touch-icon",
                "size": "180x180",
                "href": _root_ + "public/media/favicon/apple-icon-180x180.png"
            }
        }]);
        appHeader.insertBefore(lnk9, appHeader.lastElementChild);

        let lnk10 = Mishusoft.createElement([{
            "link": {
                "rel": "icon",
                "type": "image/png",
                "size": "192x192",
                "href": _root_ + "public/media/favicon/android-icon-192x192.png"
            }
        }]);
        appHeader.insertBefore(lnk10, appHeader.lastElementChild);
        let lnk11 = Mishusoft.createElement([{
            "link": {
                "rel": "icon",
                "type": "image/png",
                "size": "16x16",
                "href": _root_ + "public/media/favicon/favicon-16x16.png"
            }
        }]);
        appHeader.insertBefore(lnk11, appHeader.lastElementChild);
        let lnk12 = Mishusoft.createElement([{
            "link": {
                "rel": "icon",
                "type": "image/png",
                "size": "32x32",
                "href": _root_ + "public/media/favicon/favicon-32x32.png"
            }
        }]);
        appHeader.insertBefore(lnk12, appHeader.lastElementChild);
        let lnk13 = Mishusoft.createElement([{
            "link": {
                "rel": "icon",
                "type": "image/png",
                "size": "96x96",
                "href": _root_ + "public/media/favicon/favicon-96x96.png"
            }
        }]);
        appHeader.insertBefore(lnk13, appHeader.lastElementChild);
        let lnk14 = Mishusoft.createElement([{
            "link": {
                "rel": "icon",
                "type": "image/vnd.microsoft.icon",
                "size": "16x16",
                "href": _root_ + "public/media/favicon/favicon.ico"
            }
        }]);
        appHeader.insertBefore(lnk14, appHeader.lastElementChild);
        let lnk15 = Mishusoft.createElement([{
            "link": {
                "rel": "manifest",
                "href": _root_ + "public/media/favicon/manifest.json"
            }
        }]);
        appHeader.insertBefore(lnk15, appHeader.lastElementChild);
        let lnk16 = Mishusoft.createElement([{
            "link": {
                "name": "msapplication-TileColor",
                "content": "#ffffff"
            }
        }]);
        appHeader.insertBefore(lnk16, appHeader.lastElementChild);
        let lnk17 = Mishusoft.createElement([{
            "link": {
                "name": "msapplication-TileImage",
                "content": _root_ + "public/media/favicon/ms-icon-144x144.png"
            }
        }]);
        appHeader.insertBefore(lnk17, appHeader.lastElementChild);
        let lnk18 = Mishusoft.createElement([{
            "link": {
                "name": "theme-color",
                "content": "#ffffff"
            }
        }]);
        appHeader.insertBefore(lnk18, appHeader.lastElementChild);

        //Application's Stylesheet source files include here
        let lnk19 = Mishusoft.createElement([{
            "link": {
                "rel": "stylesheet",
                "type": "text/css",
                "href": _root_ + "public/css/mishusoft.css"
            }
        }]);
        appHeader.insertBefore(lnk19, appHeader.lastElementChild);
        let lnk20 = Mishusoft.createElement([{
            "link": {
                "rel": "stylesheet",
                "type": "text/css",
                "href": _root_ + "public/css/all.css"
            }
        }]);
        appHeader.insertBefore(lnk20, appHeader.lastElementChild);

        //Application's Javascript source files include here
        let srpt1 = Mishusoft.createElement([{
            "script": {
                "type": "application/javascript",
                "href": _root_ + "public/js/main.js"
            }
        }]);
        appHeader.insertBefore(srpt1, appHeader.lastElementChild);
        let srpt2 = Mishusoft.createElement([{
            "script": {
                "type": "application/javascript",
                "href": _root_ + "public/js/jquery/jquery.min.js"
            }
        }]);
        appHeader.insertBefore(srpt2, appHeader.lastElementChild);
        let srpt3 = Mishusoft.createElement([{
            "script": {
                "type": "application/javascript",
                "href": _root_ + "public/js/plugin/jquery.validate.js"
            }
        }]);
        appHeader.insertBefore(srpt3, appHeader.lastElementChild);
        appHeader.insertAdjacentElement('beforeend', appHeader.firstElementChild);

        //Application's body source files include here
        let appBody = document.body;
        let dv1 = Mishusoft.createElement([{
            "div": {
                "id": "app-setup-box",
                "class": "app-setup-box",
                "style": "display: none;"
            }
        }]);

        let dv2 = Mishusoft.createElement([{
            "div": {
                "class": "box-panel box-panel-primary"
            }
        }]);
        let dv3 = Mishusoft.createElement([{
            "div": {
                "id": "app-installer-header",
                "class": "box-panel-header",
                "style": "text-align:center;"
            }
        }]);
        dv3.textContent = 'Welcome to Mishusoft Platform';
        dv2.appendChild(dv3);

        let dv4 = Mishusoft.createElement([{
            "div": {
                "id": "box-panel-body",
                "class": "box-panel-body",
                "style": "text-align:center;"
            }
        }]);

        let img2 = Mishusoft.createElement([{
            "img": {
                "id": "app-company-logo",
                "alt": "Logo",
                "class": "app-company-logo",
                "src": _root_ + "public/media/favicon/logo3.0.png"
            }
        }]);
        dv4.appendChild(img2);

        let p1 = Mishusoft.createElement([{
            "p": {
                "class": "app-description-text"
            }
        }]);
        p1.textContent = 'Mishusoft Platform is a robust multi-web platform developed by Mishusoft Systems Inc. This platform is capable of getting your work done quickly and accurately.';
        dv4.appendChild(p1);

        let p2 = Mishusoft.createElement([{
            "p": {
                "class": "app-description-text"
            }
        }]);
        p2.textContent = 'The application is ready to be installed on your device at this time.';
        dv4.appendChild(p2);

        let btn1 = Mishusoft.createElement([{
            "button": {
                "id": "app-installer",
                "class": "button button-lg button-outline-success"
            }
        }]);
        btn1.textContent = 'Install';
        dv4.appendChild(btn1);
        dv2.appendChild(dv4);
        dv1.appendChild(dv2);
        appBody.insertBefore(dv1, appBody.firstElementChild);
    }

    /**
     * @param message JSON object
     * */
    static appRuntimeEventManager(message) {
        let parentNode = Mishusoft.detectElementById('box-panel-body');
        let app_title = Mishusoft.detectElementById('app-title');
        let app_installer_header = Mishusoft.detectElementById('app-installer-header');
        if (message.env.installation.client !== undefined) {
            if (message.env.installation.message.set_title === 'unneed') {
                if (message.env.installation.client.base !== undefined) {
                    app_installer_header.removeAttribute('style');
                    app_title.textContent = message.env.installation.title + ' : ' + message.env.installation.client.base.sub_title;
                    app_installer_header.textContent = message.env.installation.title;
                    //app_installer_header.textContent = message.env.installation.title + ' : ' + message.env.installation.client.base.sub_title;
                    Mishusoft.setAppInstallerIcon(app_installer_header);
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
                        Object.keys(message.env.installation.message.extra.enable).forEach((key, index) => {
                            Mishusoft.detectElementById(message.env.installation.message.extra.enable[key]).removeAttribute('disabled');
                        });
                    }
                    if (message.env.installation.message.extra.disable !== undefined) {
                        Object.keys(message.env.installation.message.extra.disable).forEach((key, index) => {
                            Mishusoft.detectElementById(message.env.installation.message.extra.disable[key]).setAttribute('disabled', 'disabled');
                        });
                    }
                    if (message.env.installation.message.extra.show !== undefined) {
                        Object.keys(message.env.installation.message.extra.show).forEach((key, index) => {
                            Mishusoft.detectElementById(message.env.installation.message.extra.show[key]).removeAttribute('style');
                        });
                    }
                    if (message.env.installation.message.extra.hide !== undefined) {
                        Object.keys(message.env.installation.message.extra.hide).forEach((key, index) => {
                            Mishusoft.detectElementById(message.env.installation.message.extra.hide[key]).setAttribute('style', 'display:none;');
                        });
                    }
                    if (message.env.installation.message.extra.text_change !== undefined) {
                        Object.keys(message.env.installation.message.extra.text_change).forEach((key, index) => {
                            Mishusoft.detectElementById(message.env.installation.message.extra.text_change['id']).textContent = message.env.installation.message.extra.text_change['text'];
                        });
                    }
                }

                Mishusoft.setRuntimeEventMessageZone(parentNode);
                let msg_brd = Mishusoft.createElement([{'div': {'id': 'messageboard'}}]);
                let msg_prefix = '';
                if (message.env.installation.message.type === 'error') {
                    msg_brd.setAttribute('class', 'box-message box-danger box-shadow-light');
                    msg_prefix = '<b class="text-danger" style="float: left;">Error&nbsp;:&nbsp;</b>';
                } else {
                    msg_brd.setAttribute('class', 'box-message box-success box-shadow-light');
                    msg_prefix = '<b class="text-success" style="float: left;">Message&nbsp;:&nbsp;</b>';
                }
                msg_brd.innerHTML = msg_prefix + message.env.installation.message.text;
                let messagezone = Mishusoft.detectElementById('messagezone');
                if (messagezone.style.display === 'none') {
                    messagezone.style.display = 'block';
                    messagezone.appendChild(msg_brd);
                } else {
                    messagezone.textContent = '';
                    messagezone.appendChild(msg_brd);
                }
            }

            if (message.env.installation.client.base !== undefined) {
                if (message.env.installation.client.base.area === 'databaseCreate') {
                    Mishusoft.setAppInstallerDatabaseCreateBaseUI(parentNode);
                    if (Mishusoft.detectElementById('app-database-create-initialize') !== null) {
                        Mishusoft.setAppInstallerDatabaseCreateDefaultUI(Mishusoft.detectElementById('app-install-database-create-tags'));
                        Mishusoft.detectElementById('app-database-create-initialize').addEventListener('submit', function (event) {
                            event.preventDefault();
                            Mishusoft.detectElementById('app-loader').removeAttribute('style');
                            Mishusoft.detectElementById('db_name').setAttribute('disabled', 'disabled');
                            Mishusoft.detectElementById('db_char').setAttribute('disabled', 'disabled');
                            Mishusoft.detectElementById('db_table_prefix').setAttribute('disabled', 'disabled');
                            Mishusoft.detectElementById('app-database-create-install').setAttribute('disabled', 'disabled');
                            Mishusoft.sendRequest({
                                    security_code: 1,
                                    env: {
                                        installation: {
                                            client: {
                                                base: {
                                                    area: {
                                                        database: {
                                                            step: 'create',
                                                            host: Mishusoft.detectElementById('db_host').value,
                                                            user: Mishusoft.detectElementById('db_user').value,
                                                            user_pass: Mishusoft.detectElementById('db_user_pass').value,
                                                            name: Mishusoft.detectElementById('db_name').value,
                                                            char: Mishusoft.detectElementById('db_char').value,
                                                            table_prefix: Mishusoft.detectElementById('db_table_prefix').value,
                                                            port: Mishusoft.detectElementById('db_port').value,
                                                            btnName: Mishusoft.detectElementById('db_connect_only').textContent
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                _root_);
                        });
                        Mishusoft.detectElementById('db_connect_only').addEventListener('click', function (event) {
                            Mishusoft.detectElementById('app-loader').removeAttribute('style');
                            this.setAttribute('disabled', 'disabled');
                            Mishusoft.sendRequest({
                                    security_code: 1,
                                    env: {
                                        installation: {
                                            client: {
                                                base: {
                                                    area: {
                                                        database: {
                                                            step: 'connect',
                                                            host: Mishusoft.detectElementById('db_host').value,
                                                            user: Mishusoft.detectElementById('db_user').value,
                                                            user_pass: Mishusoft.detectElementById('db_user_pass').value,
                                                            btnName: Mishusoft.detectElementById('db_connect_only').textContent
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                _root_);
                        });
                        Mishusoft.detectElementById('db_reconnect_only').addEventListener('click', function (event) {
                            Mishusoft.detectElementById('db_connect_only').removeAttribute('disabled');
                            Mishusoft.detectElementById('db_name_row').setAttribute('style', 'display:none;');
                            Mishusoft.detectElementById('db_char_table_prefix_row').setAttribute('style', 'display:none;');
                            Mishusoft.detectElementById('app-database-create-install').setAttribute('style', 'display:none;');
                        });
                    }

                    if (Mishusoft.detectElementById('app-database-create-cancel') !== null) {
                        Mishusoft.detectElementById('app-database-create-cancel').addEventListener('click', function (event) {
                            Mishusoft.detectElementById('app-loader').removeAttribute('style');
                            Mishusoft.sendRequest({security_code: 1, env: {'installation': {client: 'base'}}}, _root_);
                        });
                    }
                }
                if (message.env.installation.client.base.area === 'database') {
                    Mishusoft.setAppInstallerDatabaseBaseUI(parentNode);
                    if (Mishusoft.detectElementById('app-database-initialize') !== null) {
                        Mishusoft.setAppInstallerDatabaseDefaultUI(Mishusoft.detectElementById('app-install-database-tags'));
                        Mishusoft.detectElementById('app-database-initialize').addEventListener('submit', function (event) {
                            event.preventDefault();
                            Mishusoft.detectElementById('app-loader').removeAttribute('style');
                            Mishusoft.detectElementById('app-database-install').setAttribute('disabled', 'disabled');
                            Mishusoft.sendRequest({
                                    security_code: 1,
                                    env: {
                                        installation: {
                                            client: {
                                                base: {
                                                    area: {
                                                        database: {
                                                            step: 'configure',
                                                            host: Mishusoft.detectElementById('db_host').value,
                                                            user: Mishusoft.detectElementById('db_user').value,
                                                            user_pass: Mishusoft.detectElementById('db_user_pass').value,
                                                            name: Mishusoft.detectElementById('db_name').value,
                                                            char: Mishusoft.detectElementById('db_char').value,
                                                            table_prefix: Mishusoft.detectElementById('db_table_prefix').value,
                                                            port: Mishusoft.detectElementById('db_port').value,
                                                            btnName: Mishusoft.detectElementById('app-database-install').textContent
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                _root_);
                        });
                        Mishusoft.detectElementById('app-database-create').addEventListener('click', function (event) {
                            Mishusoft.detectElementById('app-loader').removeAttribute('style');
                            this.setAttribute('disabled', 'disabled');
                            Mishusoft.sendRequest({
                                security_code: 1,
                                env: {installation: {client: {base: {area: 'databaseCreate'}}}}
                            }, _root_);
                        });
                    }
                }
                if (message.env.installation.client.base.area === 'account') {
                    Mishusoft.setAppInstallerAccountBaseUI(parentNode);
                    if (Mishusoft.detectElementById('app-account-initialize') !== null) {
                        Mishusoft.setAppInstallerAccountDefaultUI(Mishusoft.detectElementById('app-install-account-tags'));
                        Mishusoft.detectElementById('app-account-initialize').addEventListener('submit', function (event) {
                            event.preventDefault();
                            Mishusoft.detectElementById('app-loader').removeAttribute('style');
                            Mishusoft.detectElementById('app-account-install').setAttribute('disabled', 'disabled');
                            Mishusoft.sendRequest({
                                    security_code: 1,
                                    env: {
                                        installation: {
                                            client: {
                                                base: {
                                                    area: {
                                                        account: {
                                                            username: Mishusoft.detectElementById('acc_adm_username').value,
                                                            email: Mishusoft.detectElementById('acc_adm_email').value,
                                                            user_pass: Mishusoft.detectElementById('acc_adm_pass').value,
                                                            user_cnf_pass: Mishusoft.detectElementById('acc_adm_cnf_pass').value,
                                                            btnName: Mishusoft.detectElementById('app-account-install').textContent
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                _root_);
                        });
                    }
                }
                if (message.env.installation.client.base.area === 'website') {
                    Mishusoft.setAppInstallerWebsiteBaseUI(parentNode);
                    if (Mishusoft.detectElementById('app-website-initialize') !== null) {
                        Mishusoft.setAppInstallerWebsiteDefaultUI(Mishusoft.detectElementById('app-install-website-tags'));
                        Mishusoft.detectElementById('app-website-initialize').addEventListener('submit', function (event) {
                            event.preventDefault();
                            Mishusoft.detectElementById('app-loader').removeAttribute('style');
                            Mishusoft.detectElementById('app-website-install').setAttribute('disabled', 'disabled');
                            Mishusoft.sendRequest({
                                    security_code: 1,
                                    env: {
                                        installation: {
                                            client: {
                                                base: {
                                                    area: {
                                                        website: {
                                                            name: Mishusoft.detectElementById('site_name').value,
                                                            description: Mishusoft.detectElementById('site_description').value,
                                                            company: Mishusoft.detectElementById('site_company').value,
                                                            btnName: Mishusoft.detectElementById('app-website-install').textContent
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                _root_);
                        });
                    }
                }
                if (message.env.installation.client.base.area === 'redirect') {
                    window.location.replace(_root_);
                }
            }
        }
    }

    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerIcon(parentNode) {
        let img1 = Mishusoft.createElement([{
            'img': {
                'id': 'app-installer-logo',
                'alt': 'Logo',
                'class': 'logo-xs',
                'width': '25px',
                'src': _root_ + 'public/media/favicon/mishusoft-logo-outline.png'
            }
        }]);
        parentNode.appendChild(img1);
    }

    /**
     * @param parentNode Valid HTML element
     * */
    static setRuntimeEventMessageZone(parentNode) {
        let dv5 = Mishusoft.createElement([{
            'div': {
                'id': 'messagezone',
                'style': 'width:100%;display: none;'
            }
        }]);
        parentNode.appendChild(dv5);
    }

    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerDatabaseCreateBaseUI(parentNode) {
        let frm1 = Mishusoft.createElement([{
            'form': {
                'id': 'app-database-create-initialize',
                'method': 'post',
                'autocomplete': 'off'
            }
        }]);
        let frm1inpt1 = Mishusoft.createElement([{'input': {'type': 'hidden', 'name': 'database', 'value': 'create'}}]);
        frm1.appendChild(frm1inpt1);

        let frm1inpt2 = Mishusoft.createElement([{
            'input': {
                'id': 'db_port',
                'type': 'hidden',
                'name': 'db_port',
                'value': '3306'
            }
        }]);
        frm1.appendChild(frm1inpt2);

        let frm1fldst1 = Mishusoft.createElement([{
            'fieldset': {
                'id': 'app-install-database-create-sandbox',
                'class': 'box-shadow-light'
            }
        }]);
        let frm1fldst1lgd1 = Mishusoft.createElement([{
            'legend': {
                'id': 'app-install-database-create-sandbox-title',
                'class': 'box-shadow-light',
                'style': 'font-weight: 600;'
            }
        }]);
        frm1fldst1lgd1.textContent = 'Databases Create';
        frm1fldst1.appendChild(frm1fldst1lgd1);

        let frm1fldst1dv1 = Mishusoft.createElement([{'div': {'class': 'row'}}]);
        let frm1fldst1lgd1dv1tbl1 = Mishusoft.createElement([{
            'table': {
                'id': 'app-install-database-create-tags',
                'class': 'table table-condensed',
                'method': 'app-install-database-create'
            }
        }]);
        frm1fldst1dv1.appendChild(frm1fldst1lgd1dv1tbl1);

        let frm1fldst1lgd1dv1dv1 = Mishusoft.createElement([{
            'div': {
                'id': 'app-install-database-create-sandbox-footer',
                'class': 'float-right text-align-right'
            }
        }]);
        frm1fldst1dv1.appendChild(frm1fldst1lgd1dv1dv1);

        let frm1fldst1lgd1dv1dv1btn1 = Mishusoft.createElement([{
            'button': {
                'id': 'app-database-create-cancel',
                'type': 'button',
                'class': 'button button-outline-danger'
            }
        }]);
        frm1fldst1lgd1dv1dv1btn1.textContent = 'Cancel';
        frm1fldst1lgd1dv1dv1.appendChild(frm1fldst1lgd1dv1dv1btn1);

        let frm1fldst1lgd1dv1dv1btn2 = Mishusoft.createElement([{
            'button': {
                'id': 'app-database-create-install',
                'type': 'submit',
                'class': 'button button-outline-primary',
                'style': 'display:none;'
            }
        }]);
        frm1fldst1lgd1dv1dv1btn2.textContent = 'Next';
        frm1fldst1lgd1dv1dv1.appendChild(frm1fldst1lgd1dv1dv1btn2);

        frm1fldst1.appendChild(frm1fldst1dv1);
        frm1.appendChild(frm1fldst1);
        parentNode.appendChild(frm1);
    }

    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerDatabaseCreateDefaultUI(parentNode) {
        let tr1 = Mishusoft.createElement([{'tr': {}}]);
        let tr1td1 = Mishusoft.createElement([{'td': {'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2'}}]);
        let tr1td1lbl1 = Mishusoft.createElement([{'label': {'for': 'db_host'}}]);
        tr1td1lbl1.textContent = 'Host : ';
        tr1td1.appendChild(tr1td1lbl1);
        tr1.appendChild(tr1td1);

        let tr1td2 = Mishusoft.createElement([{'td': {'class': 'col-md-10 col-sm-10 col-xs-10 col-xs-plus-10'}}]);
        let tr1td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'db_host',
                'name': 'db_host',
                'type': 'text',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Host name or address',
                'required': 'required'
            }
        }]);
        tr1td2.appendChild(tr1td2inpt1);
        tr1.appendChild(tr1td2);
        parentNode.appendChild(tr1);


        let tr2 = Mishusoft.createElement([{'tr': {}}]);
        let tr2td1 = Mishusoft.createElement([{'td': {'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2'}}]);
        let tr2td1lbl1 = Mishusoft.createElement([{'label': {'for': 'db_user'}}]);
        tr2td1lbl1.textContent = 'User : ';
        tr2td1.appendChild(tr2td1lbl1);
        tr2.appendChild(tr2td1);

        let tr2td2 = Mishusoft.createElement([{'td': {'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'}}]);
        let tr2td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'db_user',
                'name': 'db_user',
                'type': 'text',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Username',
                'required': 'required'
            }
        }]);
        tr2td2.appendChild(tr2td2inpt1);
        tr2.appendChild(tr2td2);

        let tr2td3 = Mishusoft.createElement([{'td': {'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2'}}]);
        let tr2td3lbl1 = Mishusoft.createElement([{'label': {'for': 'db_user_pass'}}]);
        tr2td3lbl1.textContent = 'Password : ';
        tr2td3.appendChild(tr2td3lbl1);
        tr2.appendChild(tr2td3);

        let tr2td4 = Mishusoft.createElement([{'td': {'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'}}]);
        let tr2td4inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'db_user_pass',
                'name': 'db_user_pass',
                'type': 'password',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Password',
                'required': 'required'
            }
        }]);
        tr2td4.appendChild(tr2td4inpt1);
        tr2.appendChild(tr2td4);
        parentNode.appendChild(tr2);


        let tr3 = Mishusoft.createElement([{'tr': {}}]);
        let tr3td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-12 col-sm-12 col-xs-12 col-xs-plus-12',
                'colspan': '2',
                'style': 'text-align:center;'
            }
        }]);
        let tr3td1btn1 = Mishusoft.createElement([{
            'button': {
                'id': 'db_connect_only',
                'type': 'button',
                'class': 'button button-outline-success'
            }
        }]);
        tr3td1btn1.textContent = 'Connect';
        tr3td1.appendChild(tr3td1btn1);
        let tr3td1btn2 = Mishusoft.createElement([{
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
        let tr4 = Mishusoft.createElement([{'tr': {'id': 'db_name_row', 'style': 'display:none;'}}]);
        let tr4td1 = Mishusoft.createElement([{'td': {'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2'}}]);
        let tr4td1lbl1 = Mishusoft.createElement([{'label': {'for': 'db_name'}}]);
        tr4td1lbl1.textContent = 'Databases : ';
        tr4td1.appendChild(tr4td1lbl1);
        tr4.appendChild(tr4td1);

        let tr4td2 = Mishusoft.createElement([{'td': {'class': 'col-md-10 col-sm-10 col-xs-10 col-xs-plus-10'}}]);
        let tr4td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'db_name',
                'name': 'db_name',
                'type': 'text',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Databases name',
                'value': DefaultAppName,
                'required': 'required'
            }
        }]);
        tr4td2.appendChild(tr4td2inpt1);
        tr4.appendChild(tr4td2);
        parentNode.appendChild(tr4);


        let tr5 = Mishusoft.createElement([{'tr': {'id': 'db_char_table_prefix_row', 'style': 'display:none;'}}]);
        let tr5td1 = Mishusoft.createElement([{'td': {'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2'}}]);
        let tr5td1lbl1 = Mishusoft.createElement([{'label': {'for': 'db_char'}}]);
        tr5td1lbl1.textContent = 'Charset:';
        tr5td1.appendChild(tr5td1lbl1);
        tr5.appendChild(tr5td1);

        let tr5td2 = Mishusoft.createElement([{'td': {'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'}}]);
        let tr5td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'db_char',
                'name': 'db_char',
                'type': 'text',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Databases charset',
                'value': DefaultDataCharSet,
                'required': 'required'
            }
        }]);
        tr5td2.appendChild(tr5td2inpt1);
        tr5.appendChild(tr5td2);
        parentNode.appendChild(tr5);


        let tr5td3 = Mishusoft.createElement([{'td': {'class': 'col-md-2 col-sm-2 col-xs-2 col-xs-plus-2'}}]);
        let tr5td3lbl1 = Mishusoft.createElement([{'label': {'for': 'db_table_prefix'}}]);
        tr5td3lbl1.textContent = 'Prefix : ';
        tr5td3.appendChild(tr5td3lbl1);
        tr5.appendChild(tr5td3);

        let tr5td4 = Mishusoft.createElement([{'td': {'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'}}]);
        let tr5td4inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'db_table_prefix',
                'name': 'db_table_prefix',
                'type': 'text',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Databases table prefix',
                'value': DefaultDataTablePrefix,
                'required': 'required'
            }
        }]);
        tr5td4.appendChild(tr5td4inpt1);
        tr5.appendChild(tr5td4);
        parentNode.appendChild(tr5);
    }

    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerDatabaseBaseUI(parentNode) {
        let frm1 = Mishusoft.createElement([{
            'form': {
                'id': 'app-database-initialize',
                'method': 'post',
                'autocomplete': 'off'
            }
        }]);

        let frm1inpt1 = Mishusoft.createElement([{
            'input': {
                'type': 'hidden',
                'name': 'database',
                'value': '1'
            }
        }]);
        frm1.appendChild(frm1inpt1);

        let frm1inpt2 = Mishusoft.createElement([{
            'input': {
                'id': 'db_port',
                'type': 'hidden',
                'name': 'db_port',
                'value': '3306'
            }
        }]);
        frm1.appendChild(frm1inpt2);

        let frm1fldst1 = Mishusoft.createElement([{
            'fieldset': {
                'id': 'app-install-database-sandbox',
                'class': 'box-shadow-light'
            }
        }]);

        let frm1fldst1lgd1 = Mishusoft.createElement([{
            'legend': {
                'id': 'app-install-database-sandbox-title',
                'class': 'box-shadow-light',
                'style': 'font-weight: 600;'
            }
        }]);
        frm1fldst1lgd1.textContent = 'Databases configure';
        frm1fldst1.appendChild(frm1fldst1lgd1);

        let frm1fldst1dv1 = Mishusoft.createElement([{
            'div': {
                'class': 'row'
            }
        }]);

        let frm1fldst1lgd1dv1tbl1 = Mishusoft.createElement([{
            'table': {
                'id': 'app-install-database-tags',
                'class': 'table table-condensed',
                'method': 'app-install-database'
            }
        }]);
        frm1fldst1dv1.appendChild(frm1fldst1lgd1dv1tbl1);

        let frm1fldst1lgd1dv1dv1 = Mishusoft.createElement([{
            'div': {
                'id': 'app-install-database-sandbox-footer',
                'class': 'float-right text-align-right'
            }
        }]);
        frm1fldst1dv1.appendChild(frm1fldst1lgd1dv1dv1);

        let frm1fldst1lgd1dv1dv1btn1 = Mishusoft.createElement([{
            'button': {
                'id': 'app-database-create',
                'type': 'button',
                'class': 'button button-outline-success'
            }
        }]);
        frm1fldst1lgd1dv1dv1btn1.textContent = 'Create DB';
        frm1fldst1lgd1dv1dv1.appendChild(frm1fldst1lgd1dv1dv1btn1);

        let frm1fldst1lgd1dv1dv1btn2 = Mishusoft.createElement([{
            'button': {
                'id': 'app-database-install',
                'type': 'submit',
                'class': 'button button-outline-primary'
            }
        }]);
        frm1fldst1lgd1dv1dv1btn2.textContent = 'Next';
        frm1fldst1lgd1dv1dv1.appendChild(frm1fldst1lgd1dv1dv1btn2);

        frm1fldst1.appendChild(frm1fldst1dv1);
        frm1.appendChild(frm1fldst1);
        parentNode.appendChild(frm1);
    }

    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerDatabaseDefaultUI(parentNode) {
        let tr1 = Mishusoft.createElement([{'tr': {}}]);
        let tr1td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);

        let tr1td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'db_host'
            }
        }]);
        tr1td1lbl1.textContent = 'Host : ';
        tr1td1.appendChild(tr1td1lbl1);
        tr1.appendChild(tr1td1);

        let tr1td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr1td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'db_host',
                'name': 'db_host',
                'type': 'text',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Databases\'s host',
                'required': 'required'
            }
        }]);
        tr1td2.appendChild(tr1td2inpt1);
        tr1.appendChild(tr1td2);
        parentNode.appendChild(tr1);


        let tr2 = Mishusoft.createElement([{'tr': {}}]);
        let tr2td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);

        let tr2td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'db_user'
            }
        }]);
        tr2td1lbl1.textContent = 'Username : ';
        tr2td1.appendChild(tr2td1lbl1);
        tr2.appendChild(tr2td1);

        let tr2td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr2td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'db_user',
                'name': 'db_user',
                'type': 'text',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Databases\'s username',
                'required': 'required'
            }
        }]);
        tr2td2.appendChild(tr2td2inpt1);
        tr2.appendChild(tr2td2);
        parentNode.appendChild(tr2);


        let tr3 = Mishusoft.createElement([{'tr': {}}]);
        let tr3td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);
        let tr3td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'db_user_pass'
            }
        }]);
        tr3td1lbl1.textContent = 'Password : ';
        tr3td1.appendChild(tr3td1lbl1);
        tr3.appendChild(tr3td1);

        let tr3td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr3td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'db_user_pass',
                'name': 'db_user_pass',
                'type': 'password',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Databases\'s password',
                'required': 'required'
            }
        }]);
        tr3td2.appendChild(tr3td2inpt1);
        tr3.appendChild(tr3td2);
        parentNode.appendChild(tr3);


        let tr4 = Mishusoft.createElement([{'tr': {}}]);
        let tr4td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);
        let tr4td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'db_name'
            }
        }]);
        tr4td1lbl1.textContent = 'Databases : ';
        tr4td1.appendChild(tr4td1lbl1);
        tr4.appendChild(tr4td1);

        let tr4td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr4td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'db_name',
                'name': 'db_name',
                'type': 'text',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Databases\'s name',
                'value': DefaultAppName,
                'required': 'required'
            }
        }]);
        tr4td2.appendChild(tr4td2inpt1);
        tr4.appendChild(tr4td2);
        parentNode.appendChild(tr4);


        let tr5 = Mishusoft.createElement([{'tr': {}}]);
        let tr5td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);
        let tr5td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'db_char'
            }
        }]);
        tr5td1lbl1.textContent = 'Charset : ';
        tr5td1.appendChild(tr5td1lbl1);
        tr5.appendChild(tr5td1);

        let tr5td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr5td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'db_char',
                'name': 'db_char',
                'type': 'text',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Data char set',
                'value': DefaultDataCharSet,
                'required': 'required'
            }
        }]);
        tr5td2.appendChild(tr5td2inpt1);
        tr5.appendChild(tr5td2);
        parentNode.appendChild(tr5);


        let tr6 = Mishusoft.createElement([{'tr': {}}]);
        let tr6td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);
        let tr6td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'db_table_prefix'
            }
        }]);
        tr6td1lbl1.textContent = 'Table prefix : ';
        tr6td1.appendChild(tr6td1lbl1);
        tr6.appendChild(tr6td1);

        let tr6td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr6td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'db_table_prefix',
                'name': 'db_table_prefix',
                'type': 'text',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Databases prefix',
                'value': DefaultDataTablePrefix,
                'required': 'required'
            }
        }]);
        tr6td2.appendChild(tr6td2inpt1);
        tr6.appendChild(tr6td2);
        parentNode.appendChild(tr6);
    }

    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerAccountBaseUI(parentNode) {
        let frm1 = Mishusoft.createElement([{
            'form': {
                'id': 'app-account-initialize',
                'method': 'post',
                'autocomplete': 'off'
            }
        }]);

        let frm1inpt1 = Mishusoft.createElement([{
            'input': {
                'type': 'hidden',
                'name': 'account',
                'value': '1'
            }
        }]);
        frm1.appendChild(frm1inpt1);

        let frm1fldst1 = Mishusoft.createElement([{
            'fieldset': {
                'id': 'app-install-account-sandbox',
                'class': 'box-shadow-light'
            }
        }]);

        let frm1fldst1lgd1 = Mishusoft.createElement([{
            'legend': {
                'id': 'app-install-account-sandbox-title',
                'class': 'box-shadow-light',
                'style': 'font-weight: 600;'
            }
        }]);
        frm1fldst1lgd1.textContent = 'Account configure';
        frm1fldst1.appendChild(frm1fldst1lgd1);

        let frm1fldst1dv1 = Mishusoft.createElement([{
            'div': {
                'class': 'row'
            }
        }]);

        let frm1fldst1lgd1dv1tbl1 = Mishusoft.createElement([{
            'table': {
                'id': 'app-install-account-tags',
                'class': 'table table-condensed',
                'method': 'app-install-account'
            }
        }]);
        frm1fldst1dv1.appendChild(frm1fldst1lgd1dv1tbl1);

        let frm1fldst1lgd1dv1dv1 = Mishusoft.createElement([{
            'div': {
                'id': 'app-install-account-sandbox-footer',
                'class': 'float-right text-align-right'
            }
        }]);
        frm1fldst1dv1.appendChild(frm1fldst1lgd1dv1dv1);

        let frm1fldst1lgd1dv1dv1btn2 = Mishusoft.createElement([{
            'button': {
                'id': 'app-account-install',
                'type': 'submit',
                'class': 'button button-outline-primary'
            }
        }]);
        frm1fldst1lgd1dv1dv1btn2.textContent = 'Next';
        frm1fldst1lgd1dv1dv1.appendChild(frm1fldst1lgd1dv1dv1btn2);

        frm1fldst1.appendChild(frm1fldst1dv1);
        frm1.appendChild(frm1fldst1);
        if (document.getElementsByTagName('form')[0]) {
            document.getElementsByTagName('form')[0].remove();
        }
        parentNode.appendChild(frm1);
    }

    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerAccountDefaultUI(parentNode) {
        let tr1 = Mishusoft.createElement([{'tr': {}}]);
        let tr1td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);

        let tr1td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'acc_adm_username'
            }
        }]);
        tr1td1lbl1.textContent = 'Username : ';
        tr1td1.appendChild(tr1td1lbl1);
        tr1.appendChild(tr1td1);

        let tr1td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr1td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'acc_adm_username',
                'name': 'acc_adm_username',
                'type': 'text',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Username',
                'required': 'required',
                'autocomplete': 'off'
            }
        }]);
        tr1td2.appendChild(tr1td2inpt1);
        tr1.appendChild(tr1td2);
        parentNode.appendChild(tr1);


        let tr2 = Mishusoft.createElement([{'tr': {}}]);
        let tr2td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);

        let tr2td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'acc_adm_email'
            }
        }]);
        tr2td1lbl1.textContent = 'E-mail : ';
        tr2td1.appendChild(tr2td1lbl1);
        tr2.appendChild(tr2td1);

        let tr2td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr2td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'acc_adm_email',
                'name': 'acc_adm_email',
                'type': 'email',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'E-mail address',
                'required': 'required',
                'autocomplete': 'off'
            }
        }]);
        tr2td2.appendChild(tr2td2inpt1);
        tr2.appendChild(tr2td2);
        parentNode.appendChild(tr2);


        let tr3 = Mishusoft.createElement([{'tr': {}}]);
        let tr3td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);
        let tr3td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'acc_adm_pass'
            }
        }]);
        tr3td1lbl1.textContent = 'Password : ';
        tr3td1.appendChild(tr3td1lbl1);
        tr3.appendChild(tr3td1);

        let tr3td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr3td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'acc_adm_pass',
                'name': 'acc_adm_pass',
                'type': 'password',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Password',
                'required': 'required',
                'autocomplete': 'off'
            }
        }]);
        tr3td2.appendChild(tr3td2inpt1);
        tr3.appendChild(tr3td2);
        parentNode.appendChild(tr3);


        let tr4 = Mishusoft.createElement([{'tr': {}}]);
        let tr4td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);
        let tr4td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'acc_adm_cnf_pass'
            }
        }]);
        tr4td1lbl1.textContent = 'Retype Password : ';
        tr4td1.appendChild(tr4td1lbl1);
        tr4.appendChild(tr4td1);

        let tr4td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr4td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'acc_adm_cnf_pass',
                'name': 'acc_adm_cnf_pass',
                'type': 'password',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Retype password',
                'required': 'required'
            }
        }]);
        tr4td2.appendChild(tr4td2inpt1);
        tr4.appendChild(tr4td2);
        parentNode.appendChild(tr4);
    }

    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerWebsiteBaseUI(parentNode) {
        let frm1 = Mishusoft.createElement([{
            'form': {
                'id': 'app-website-initialize',
                'method': 'post',
                'autocomplete': 'off'
            }
        }]);

        let frm1inpt1 = Mishusoft.createElement([{
            'input': {
                'type': 'hidden',
                'name': 'website',
                'value': '1'
            }
        }]);
        frm1.appendChild(frm1inpt1);

        let frm1fldst1 = Mishusoft.createElement([{
            'fieldset': {
                'id': 'app-install-website-sandbox',
                'class': 'box-shadow-light'
            }
        }]);

        let frm1fldst1lgd1 = Mishusoft.createElement([{
            'legend': {
                'id': 'app-install-website-sandbox-title',
                'class': 'box-shadow-light',
                'style': 'font-weight: 600;'
            }
        }]);
        frm1fldst1lgd1.textContent = 'Website configure';
        frm1fldst1.appendChild(frm1fldst1lgd1);

        let frm1fldst1dv1 = Mishusoft.createElement([{
            'div': {
                'class': 'row'
            }
        }]);

        let frm1fldst1lgd1dv1tbl1 = Mishusoft.createElement([{
            'table': {
                'id': 'app-install-website-tags',
                'class': 'table table-condensed',
                'method': 'app-install-website'
            }
        }]);
        frm1fldst1dv1.appendChild(frm1fldst1lgd1dv1tbl1);

        let frm1fldst1lgd1dv1dv1 = Mishusoft.createElement([{
            'div': {
                'id': 'app-install-website-sandbox-footer',
                'class': 'float-right text-align-right'
            }
        }]);
        frm1fldst1dv1.appendChild(frm1fldst1lgd1dv1dv1);

        let frm1fldst1lgd1dv1dv1btn2 = Mishusoft.createElement([{
            'button': {
                'id': 'app-website-install',
                'type': 'submit',
                'class': 'button button-outline-primary'
            }
        }]);
        frm1fldst1lgd1dv1dv1btn2.textContent = 'Finish';
        frm1fldst1lgd1dv1dv1.appendChild(frm1fldst1lgd1dv1dv1btn2);

        frm1fldst1.appendChild(frm1fldst1dv1);
        frm1.appendChild(frm1fldst1);
        if (document.getElementsByTagName('form')[0]) {
            document.getElementsByTagName('form')[0].remove();
        }
        parentNode.appendChild(frm1);
    }

    /**
     * @param parentNode Valid HTML element
     * */
    static setAppInstallerWebsiteDefaultUI(parentNode) {
        let tr1 = Mishusoft.createElement([{'tr': {}}]);
        let tr1td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);

        let tr1td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'site_name'
            }
        }]);
        tr1td1lbl1.textContent = 'New name : ';
        tr1td1.appendChild(tr1td1lbl1);
        tr1.appendChild(tr1td1);

        let tr1td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr1td2inpt1 = Mishusoft.createElement([{
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
        tr1td2.appendChild(tr1td2inpt1);
        tr1.appendChild(tr1td2);
        parentNode.appendChild(tr1);


        let tr2 = Mishusoft.createElement([{'tr': {}}]);
        let tr2td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);

        let tr2td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'site_description'
            }
        }]);
        tr2td1lbl1.textContent = 'Description : ';
        tr2td1.appendChild(tr2td1lbl1);
        tr2.appendChild(tr2td1);

        let tr2td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr2td2inpt1 = Mishusoft.createElement([{
            'textarea': {
                'id': 'site_description',
                'name': 'site_description',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Description',
                'required': 'required',
                'autocomplete': 'off'
            }
        }]);
        tr2td2.appendChild(tr2td2inpt1);
        tr2.appendChild(tr2td2);
        parentNode.appendChild(tr2);


        let tr3 = Mishusoft.createElement([{'tr': {}}]);
        let tr3td1 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-4 col-sm-4 col-xs-4 col-xs-plus-4'
            }
        }]);
        let tr3td1lbl1 = Mishusoft.createElement([{
            'label': {
                'for': 'site_company'
            }
        }]);
        tr3td1lbl1.textContent = 'Company : ';
        tr3td1.appendChild(tr3td1lbl1);
        tr3.appendChild(tr3td1);

        let tr3td2 = Mishusoft.createElement([{
            'td': {
                'class': 'col-md-8 col-sm-8 col-xs-8 col-xs-plus-8'
            }
        }]);
        let tr3td2inpt1 = Mishusoft.createElement([{
            'input': {
                'id': 'site_company',
                'name': 'site_company',
                'type': 'text',
                'class': 'input-box-bottom-border-only',
                'placeholder': 'Company',
                'value': DefaultAppCompanyName,
                'required': 'required',
                'autocomplete': 'off'
            }
        }]);
        tr3td2.appendChild(tr3td2inpt1);
        tr3.appendChild(tr3td2);
        parentNode.appendChild(tr3);
    }

    /**
     * @param  node_data Data must be a JSON DATA
     **/
    static createElement(node_data) {
        let element, i, j, k;
        for (i in node_data) {
            let data = node_data[i];
            for (j in data) {
                let element_name = j;
                let element_data = data[j];
                element = document.createElement(element_name);
                for (k in element_data) {
                    let element_attribute = k;
                    let element_attribute_value = element_data[k];
                    element.setAttribute(element_attribute, element_attribute_value);
                }
            }
        }
        return element;
    }

    /**
     * @param data JSON Object
     * @param host Valid url
     **/
    static sendRequest(data, host) {
        if (data !== undefined && data !== null && data.constructor === Object && host !== null) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", host, true);
            xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify(data)); // Make sure to stringify
            xhr.onreadystatechange = function () { //receiving response from ajax
                if (this.readyState === 4 && this.status === 200) {
                    let response = this.responseText;
                    let targetTag = '</html>';
                    //let targetTag = '{"env"';
                    let WasteTagPosition = response.search(targetTag);
                    let jsonResponse = response.substr(WasteTagPosition + targetTag.length, data.length);
                    //let jsonResponse = response.substr(WasteTagPosition, data.length);
                    if (Mishusoft.IsJsonString(jsonResponse)) {
                        Mishusoft.detectElementById('app-loader').setAttribute('style', 'display:none;');
                        Mishusoft.appRuntimeEventManager(JSON.parse(jsonResponse));
                    } else {
                        swal("Oops! Something went wrong!", jsonResponse, "error");
                    }
                }
            };
        } else {
            swal("Oops! We can't send request!", "error");
        }
    }

    static previewImage(input, id) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                $(id).attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    static protectNumberOnlyTextBox() {
        let ele = document.querySelectorAll('.number-only')[0];
        ele.onkeypress = function (e) {
            if (isNaN(this.value + "" + String.fromCharCode(e.charCode)))
                return false;
        };
        ele.onpaste = function (e) {
            e.preventDefault();
        }
    }

    static getDateFromFullDate(date, dateString) {
        let d = new Date(date);
        let n = d.toDateString();
        dateString.innerHTML = n;
    }

    /* -- end -- make data update with interval*/

    static getYearFromFullDate(date, dateString) {
        let d = new Date(date);
        let n = d.getFullYear();
        dateString.innerHTML = n;
    }

    static createNewAttributeWithValueCallById(element, attr, value) {
        let sltdel = Mishusoft.detectElementById(element); // Get the element in the document
        let att = document.createAttribute(attr);       // Create a "class" attribute
        att.value = value;                           // Set the value of the class attribute
        sltdel.setAttributeNode(att);                          // Add the class attribute to <h1> ;
    }

    static createNewAttributeWithValueCallByClass(element, attr, value) {
        let sltdel = Mishusoft.detectElementByClass(element); // Get the element in the document
        let att = document.createAttribute(attr);       // Create a "class" attribute
        att.value = value;                           // Set the value of the class attribute
        sltdel.setAttributeNode(att);                          // Add the class attribute to <h1> ;
    }

    static NumberToText(value) {
        let fraction = Math.round(Mishusoft.frac(value) * 100);
        let f_text = "";

        if (fraction > 0) {
            f_text = "AND " + Mishusoft.convert_number(fraction) + " PAISA";
        }

        return Mishusoft.convert_number(value) + " Taka " + f_text + " ONLY";
    }

    static frac(f) {
        return f % 1;
    }

    static convert_number(number) {
        if ((number < 0) || (number > 999999999)) {
            return "NUMBER OUT OF RANGE!";
        }
        let Gn = Math.floor(number / 10000000);  /* Crore */
        number -= Gn * 10000000;
        let kn = Math.floor(number / 100000);     /* lakhs */
        number -= kn * 100000;
        let Hn = Math.floor(number / 1000);      /* thousand */
        number -= Hn * 1000;
        let Dn = Math.floor(number / 100);       /* Tens (deca) */
        number = number % 100;               /* Ones */
        let tn = Math.floor(number / 10);
        let one = Math.floor(number % 10);
        let res = "";

        if (Gn > 0) {
            res += (Mishusoft.convert_number(Gn) + " CRORE");
        }
        if (kn > 0) {
            res += (((res === "") ? "" : " ") +
                Mishusoft.convert_number(kn) + " LAKH");
        }
        if (Hn > 0) {
            res += (((res === "") ? "" : " ") +
                Mishusoft.convert_number(Hn) + " THOUSAND");
        }

        if (Dn) {
            res += (((res === "") ? "" : " ") +
                Mishusoft.convert_number(Dn) + " HUNDRED");
        }


        let ones = Array("", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN");
        let tens = Array("", "", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY");

        if (tn > 0 || one > 0) {
            if (!(res === "")) {
                res += " AND ";
            }
            if (tn < 2) {
                res += ones[tn * 10 + one];
            } else {

                res += tens[tn];
                if (one > 0) {
                    res += ("-" + ones[one]);
                }
            }
        }

        if (res === "") {
            res = "zero";
        }
        return res;
    }

    static PopUpWindowCenterPosition(url, title, w, h) {
        // Fixes dual-screen position                         Most browsers      Firefox
        let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
        let dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

        let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        let left = ((width / 2) - (w / 2)) + dualScreenLeft;
        let top = ((height / 2) - (h / 2)) + dualScreenTop;
        let newWindow = window.open(url, title, 'scrollbars=yes,resizable=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
    }

    static refreshDigitalClock() {
        let refresh = 1000; // Refresh rate in milli seconds
        let mytime = setTimeout('Mishusoft.DigitalClock()', refresh)
    }

    static DigitalClock() {

        let date = new Date();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let toDayNumber = date.getDate();
        let toDayName = days[date.getDay()];
        let thisMonth = months[date.getMonth()];
        let thisYear = date.getFullYear();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let session = "AM";
        let text = '';
        /*
        getFullYear()	Get the year as a four digit number (yyyy)
        getMonth()	Get the month as a number (0-11)
        getDate()	Get the day as a number (1-31)
        getHours()	Get the hour (0-23)
        getMinutes()	Get the minute (0-59)
        getSeconds()	Get the second (0-59)
        getMilliseconds()	Get the millisecond (0-999)
        getTime()	Get the time (milliseconds since January 1, 1970)
        getDay()	Get the weekday as a number (0-6)
        Date.now()	Get the time. ECMAScript 5.
        */

        if (hour === 0) {
            hour = 12;
        }
        if (hour > 12) {
            hour = hour - 12;
            session = "PM";
        }

        hour = (hour < 10) ? "0" + hour : hour;
        minute = (minute < 10) ? "0" + minute : minute;
        second = (second < 10) ? "0" + second : second;
        text += toDayName + ',&nbsp;' + toDayNumber + '&nbsp;' + thisMonth + '&nbsp;' + thisYear + '&nbsp;&nbsp;';
        text += hour + '&nbsp;:&nbsp;' + minute + '&nbsp;:&nbsp;' + second + '&nbsp;' + session;
        let tag = Mishusoft.detectElementById('ct');
        if (tag) {
            tag.innerHTML = text;
            Mishusoft.refreshDigitalClock();
        }
    }

    static showMessage(data, ElementId) {
        if (Mishusoft.IsJsonString(data)) {
            // converting back to array
            let d = JSON.parse(data);
            //html value for <body>
            let html = "";
            //looping through the data
            for (let a = 0; a < d.length; a++) {
                let type = d[a].type;
                let message = d[a].message;
                let errClass = '';
                let symbol = '';

                if (type === "error") {
                    errClass += 'danger';
                    symbol += "&times;";
                }
                if (type === "success") {
                    errClass += 'success';
                    symbol += "&radic;";
                }

                //appeding at html
                html += '<div class="box-message box-' + errClass + ' box-shadow-light">';
                html += '<span class="box-' + errClass + '-symbol">' + symbol + '</span>';
                html += '&nbsp;&nbsp;' + message + '';
                html += '</div>';

                if (ElementId) {
                    ElementId.innerHTML = html;
                }
            }
        } else {
            //console.log(data);
            swal('Oop! Something went wrong!',data,'error');
        }
    }

    static viewEditPad(ElementId) {
        if (ElementId) {
            if (Mishusoft.detectElementById(ElementId + 'EditPAD').style.display === 'none') {
                Mishusoft.detectElementById(ElementId + 'EditPAD').style.display = 'block';
            } else {
                Mishusoft.detectElementById(ElementId + 'EditPAD').style.display = 'none';
            }
        }
    }

    static checkValidUsername(RequestURL, dataElementId, viewElementId) {
        //receiving all code from database
        // call new request
        let ajax = new XMLHttpRequest();
        let method = 'POST';
        let asynchronous = true;
        let data = new FormData();
        data.append('username', dataElementId.value);
        // Sets the request method, request URL, and synchronous flag.
        ajax.open(method, RequestURL, asynchronous);
        //sending ajax request
        ajax.send(data);
        //receiving response from alldata
        ajax.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //show message with another method
                Mishusoft.showMessage(this.responseText, viewElementId);
            }
        };
    }

    static checkValidEmailAddress(RequestURL, dataElementId, viewElementId) {
        //receiving all code from database
        // call new request
        let ajax = new XMLHttpRequest();
        let method = 'POST';
        let asynchronous = true;
        let data = new FormData();
        data.append('email', dataElementId.value);
        // Sets the request method, request URL, and synchronous flag.
        ajax.open(method, RequestURL, asynchronous);
        //sending ajax request
        ajax.send(data);
        //receiving response from alldata
        ajax.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //show message with another method
                Mishusoft.showMessage(this.responseText, viewElementId);
            }
        };
    }

    static checkInputDataAbility(url, value, ElementId) {
        //declare all required letiable
        let method = "POST";
        let asynchronous = true;

        // call new request
        let ajax = new XMLHttpRequest();
        // Sets the request method, request URL, and synchronous flag.
        ajax.open(method, url, asynchronous);
        ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        //sending ajax request
        ajax.send(JSON.stringify({
            security_code: 1,
            name: value
        })); // Make sure to stringify

        //receiving response from alldata
        ajax.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //show message with another method
                Mishusoft.showMessage(this.responseText, ElementId);
            }
        };
    }

    static pagination(page, url, ElementId) {
        //declare all required letiable
        let method = "POST";
        let asynchronous = true;

        let pageNumber = new FormData();
        pageNumber.append('page', page);

        // call new request
        let ajax = new XMLHttpRequest();
        ajax.open(method, _root_ + url, asynchronous);
        //sending ajax request
        ajax.send(pageNumber);

        //receiving response from alldata
        ajax.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let htmlpad = Mishusoft.detectElementById(ElementId);
                if (htmlpad) {
                    htmlpad.innerHTML = this.responseText;
                } else {
                    alert('Data element id not found.');
                }
            }
        };
    }

    static detectElementById(id) {
        if (document.getElementById(id) !== null || document.getElementById(id) !== undefined) {
            return document.getElementById(id);
        }
    }

    /**
     * @param cls HTML valid class name
     * */
    static detectElementByClass(cls) {
        return document.getElementsByClassName(cls);
    }

    /**
     * @param tag HTML valid tag name
     * */
    static detectElementByTag(tag) {
        return document.getElementsByTagName(tag);
    }

    static uploadFile(ElementName, ElementID, URL) {
        Mishusoft.detectElementById('UploadStatusBoard').style.display = 'block';
        Mishusoft.detectElementById('progressbar').style.display = 'block';

        let file = Mishusoft.detectElementById(ElementID).files[0];
        let data = new FormData();
        data.append(ElementName, file);
        let ajax = new XMLHttpRequest();
        ajax.upload.addEventListener('progress', Mishusoft.progressHandler, false);
        ajax.addEventListener('load', Mishusoft.completeHandler, false);
        ajax.addEventListener('error', Mishusoft.errorHandler, false);
        ajax.addEventListener('abort', Mishusoft.abortHandler, false);
        ajax.open('POST', _root_ + URL, true);
        ajax.send(data);
    }

    static progressHandler(event) {
        let loadedSize = (event.loaded / 1024) / 1024;
        let totalSize = (event.total / 1024) / 1024;
        Mishusoft.detectElementById('loaded_n_total').innerHTML = 'Uploaded ' + loadedSize.toFixed(2) + ' MB of ' + totalSize.toFixed(2) + ' MB';
        let percent = (event.loaded / event.total) * 100;
        Mishusoft.detectElementById('progressbar').value = Math.round(percent);
        Mishusoft.detectElementById('upload_status').innerHTML = Math.round(percent) + '% uploaded..';
    }

    static completeHandler(event) {
        Mishusoft.detectElementById('upload_status').innerHTML = event.target.responseText;
        Mishusoft.detectElementById('progressbar').value = 0;
        Mishusoft.detectElementById('progressbar').style.display = 'none';
    }

    static errorHandler() {
        Mishusoft.detectElementById('upload_status').innerHTML = 'Upload failed';
    }

    static abortHandler() {
        Mishusoft.detectElementById('upload_status').innerHTML = 'Upload aborted';
    }

    static isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    static IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    static PopUpDialogBox(titleText, messageText, actionBtn, command, proccessURL) {
        Mishusoft.detectElementById('PopUpDialogBox').style.display = 'block';
        Mishusoft.detectElementById('PopUpDialogBoxTitle').innerHTML = titleText;
        Mishusoft.detectElementById('message3').innerHTML = messageText;
        Mishusoft.detectElementById('message-done-btn').innerHTML = command;

        //let dataId = $(this).attr('data-id');
        let dataId = actionBtn.attr('data-id');
        let commandBtn = Mishusoft.detectElementById('message-done-btn').innerHTML;
        let URL = _root_ + proccessURL;

        $(document).on('click', '#message-done-btn', function () {
            if (commandBtn === command) {
                // Form fields, see IDs above
                let data = {
                    security_code: 1,
                    id: dataId
                };

                let ajax = new XMLHttpRequest();
                ajax.open("POST", URL, true);
                ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
                ajax.send(JSON.stringify(data)); // Make sure to stringify
                //receiving response from ajax
                ajax.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        //show message with another method
                        Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message"));
                    }
                };
            }

            Mishusoft.detectElementById('PopUpDialogBox').style.display = 'none';
        })
    }

    /* -- start -- make data update with interval*/
    updateDATA() {
        let self = this;
        this.dataInterval = setInterval(function () {
            self.notificaitions();
            console.clear();
        }, 5000);
    }

    stopUpdate() {
        clearInterval(this.dataInterval);
    }

    startUpdate() {
    }

    showNotify() {
    }

    selectAllCheckBox() {
        let select_all = Mishusoft.detectElementById("select_all"); //select all checkbox
        let checkboxes = Mishusoft.detectElementByClass("checkbox"); //checkbox items
        if (select_all && checkboxes) {
            //select all checkboxes
            select_all.addEventListener("change", function (e) {
                for (let i = 0; i < checkboxes.length; i++) {
                    checkboxes[i].checked = select_all.checked;
                }
            });


            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].addEventListener('change', function (e) { //".checkbox" change
                    //uncheck "select all", if one of the listed checkbox item is unchecked
                    if (this.checked === false) {
                        select_all.checked = false;
                    }
                    //check "select all" if all checkbox items are checked
                    if (document.querySelectorAll('.checkbox:checked').length === checkboxes.length) {
                        select_all.checked = true;
                    }
                });
            }
        }

    }

    checkUserAuthTime() {
        let ajaxQA = new XMLHttpRequest();
        ajaxQA.open('POST', _root_ + 'user/checkLogStatus', true);
        ajaxQA.send();

        //receiving response from ajax
        ajaxQA.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                /*converting back to array*/
                let data = this.responseText;
                if (data === 0) {
                    location.replace(_root_ + 'user/login');
                }
            }
        }
    }
}


/*(function () {
    let coll = document.getElementsByTagName("a");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            if (Mishusoft.detectElementById('app-title')) {
                Mishusoft.detectElementById('app-title').textContent = 'Loading..';
            }
            if (Mishusoft.detectElementById('mishusoft-app-content')) {
                Mishusoft.detectElementById('mishusoft-app-content').setAttribute('style', 'display:none;');
            }
            if (Mishusoft.detectElementById('app-loader')) {
                Mishusoft.detectElementById('app-loader').removeAttribute('style');
            }
        });
    }
}());*/

(function () {
    let coll = document.getElementsByClassName("pgSidebarItemsBodyButton");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
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
}());

window.onload = function () {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
    document.addEventListener("keydown", function (e) {
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            disabledEvent(e);
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            disabledEvent(e);
        }
        if (e.keyCode === 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        if (e.ctrlKey && e.keyCode === 85) {
            disabledEvent(e);
        }
        if (event.keyCode === 123) {
            disabledEvent(e);
        }
    }, false);

    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
};
