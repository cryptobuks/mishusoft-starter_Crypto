"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_db_app_ts"],{

/***/ "./Assets/typescripts/db/app.ts":
/*!**************************************!*\
  !*** ./Assets/typescripts/db/app.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appHost": () => (/* binding */ appHost),
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* global _root_ */
/*initialize on extension installed*/
let __appHostedServerRoot;
let temp = document.querySelector('#mishusoft-web-root')?.getAttribute('content');
if (typeof temp === null) {
    __appHostedServerRoot = '/';
}
else if (typeof temp === undefined) {
    __appHostedServerRoot = 'http://localhost/';
    /*required variables*/
}
else {
    // @ts-ignore
    __appHostedServerRoot = temp.toString();
}
if (__appHostedServerRoot.substr(-1) !== '/') {
    __appHostedServerRoot += '/';
}
const appHost = __appHostedServerRoot;
const app = {
    "default": {
        "name": 'mishusoft',
        "version": 'official',
        "author": 'Mr. Al-Amin Ahamed (Abir)',
        "charset": 'utf8mb4',
        "prefix": 'msu',
        "companyName": 'Mishusoft Systems Incorporate.',
        "text": {
            "welcome": "Welcome to Mishusoft Platform",
            "description": "Mishusoft Platform is a robust multi-web platform developed by Mishusoft Systems Inc. This platform is capable of getting your work done quickly and accurately.",
            "install_state": "The application is ready to be installed on your device at this time.",
        }
    },
    "content": {
        "folder": {
            "logos": __appHostedServerRoot + 'media/logos/',
            "css": __appHostedServerRoot + 'assets/css/',
            "js": __appHostedServerRoot + 'assets/js/',
            "images": __appHostedServerRoot + 'assets/images/',
        },
        "file": {
            "default": {
                "link": [
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-57x57.png",
                        "rel": "apple-touch-icon",
                        "size": "57x57"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-60x60.png",
                        "rel": "apple-touch-icon",
                        "size": "60x60"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-72x72.png",
                        "rel": "apple-touch-icon",
                        "size": "72x72"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-76x76.png",
                        "rel": "apple-touch-icon",
                        "size": "76x76"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-114x114.png",
                        "rel": "apple-touch-icon",
                        "size": "114x114"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-120x120.png",
                        "rel": "apple-touch-icon",
                        "size": "120x120"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-144x144.png",
                        "rel": "apple-touch-icon",
                        "size": "144x144"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-152x152.png",
                        "rel": "apple-touch-icon",
                        "size": "152x152"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/apple-icon-180x180.png",
                        "rel": "apple-touch-icon",
                        "size": "180x180"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/android-icon-192x192.png",
                        "rel": "icon",
                        "size": "192x192",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/favicon-16x16.png",
                        "rel": "icon",
                        "size": "16x16",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/favicon-32x32.png",
                        "rel": "icon",
                        "size": "32x32",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/favicon-96x96.png",
                        "rel": "icon",
                        "size": "96x96",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/favicon.ico",
                        "rel": "icon",
                        "size": "16x16",
                        "type": "image/vnd.microsoft.icon"
                    },
                    {
                        "href": __appHostedServerRoot + "media/logos/manifest.json",
                        "rel": "manifest",
                    },
                    {
                        "name": "msapplication-TileColor",
                        "content": "#ffffff",
                    },
                    {
                        "name": "msapplication-TileImage",
                        "content": __appHostedServerRoot + "media/logos/ms-icon-144x144.png"
                    },
                    {
                        "name": "theme-color",
                        "content": "#ffffff",
                    },
                ],
            },
        },
    },
    "website": {
        "home": "https://www.mishusoft.com/",
        "support": "support@mishusoft.com",
        "donate": "https://www.mishusoft.com/payment/donate",
        "IpInfo": "https://api.ipdata.co/?api-key=2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180",
        "IpInfoKey": "2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180",
        "fontAwesome": "https://kit.fontawesome.com/b4c8f8449f.js",
        "fontAwesomeKey": "b4c8f8449f",
        "temporary": {
            "home": "http://localhost/",
            "monitorURL": "http://localhost/monitor/browser/",
            "paymentURL": "http://localhost/payment/"
        },
        "publish": {
            "home": "https://www.mishusoft.com/",
            "monitorURL": "https://www.mishusoft.com/monitor/browser/",
            "paymentURL": "https://www.mishusoft.com/payment/"
        }
    },
    "runtime": {
        "request": ""
    }
};


/***/ })

}]);
//# sourceMappingURL=Assets_typescripts_db_app_ts.runtime.bundle.js.map