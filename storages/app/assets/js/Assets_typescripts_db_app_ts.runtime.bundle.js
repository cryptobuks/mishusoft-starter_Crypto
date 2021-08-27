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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX2RiX2FwcF90cy5ydW50aW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG1CQUFtQjtBQUNuQixxQ0FBcUM7QUFFckMsSUFBSSxxQkFBNEIsQ0FBQztBQUNqQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxGLElBQUksT0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFO0lBQ3RCLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztDQUMvQjtLQUFNLElBQUksT0FBTyxJQUFJLEtBQUssU0FBUyxFQUFFO0lBQ2xDLHFCQUFxQixHQUFHLG1CQUFtQixDQUFDO0lBQzVDLHNCQUFzQjtDQUN6QjtLQUFPO0lBQ0osYUFBYTtJQUNiLHFCQUFxQixHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztDQUMzQztBQUdELElBQUkscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0lBQzFDLHFCQUFxQixJQUFJLEdBQUcsQ0FBQztDQUNoQztBQUdNLE1BQU0sT0FBTyxHQUFHLHFCQUFxQixDQUFDO0FBR3RDLE1BQU0sR0FBRyxHQUFHO0lBQ2YsU0FBUyxFQUFFO1FBQ1AsTUFBTSxFQUFFLFdBQVc7UUFDbkIsU0FBUyxFQUFFLFVBQVU7UUFDckIsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsS0FBSztRQUNmLGFBQWEsRUFBRSxnQ0FBZ0M7UUFDL0MsTUFBTSxFQUFFO1lBQ0osU0FBUyxFQUFFLCtCQUErQjtZQUMxQyxhQUFhLEVBQUUsa0tBQWtLO1lBQ2pMLGVBQWUsRUFBRSx1RUFBdUU7U0FDM0Y7S0FDSjtJQUNELFNBQVMsRUFBRTtRQUNQLFFBQVEsRUFBRTtZQUNOLE9BQU8sRUFBRSxxQkFBcUIsR0FBRyxjQUFjO1lBQy9D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LFNBQVM7cUJBQzNCO2lCQUNBO2FBQ0o7U0FFSjtLQUNKO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsTUFBTSxFQUFFLDRCQUE0QjtRQUNwQyxTQUFTLEVBQUUsdUJBQXVCO1FBQ2xDLFFBQVEsRUFBRSwwQ0FBMEM7UUFDcEQsUUFBUSxFQUFFLHlGQUF5RjtRQUNuRyxXQUFXLEVBQUUsMERBQTBEO1FBQ3ZFLGFBQWEsRUFBRSwyQ0FBMkM7UUFDMUQsZ0JBQWdCLEVBQUUsWUFBWTtRQUU5QixXQUFXLEVBQUU7WUFDVCxNQUFNLEVBQUUsbUJBQW1CO1lBQzNCLFlBQVksRUFBRSxtQ0FBbUM7WUFDakQsWUFBWSxFQUFFLDJCQUEyQjtTQUM1QztRQUNELFNBQVMsRUFBRTtZQUNQLE1BQU0sRUFBRSw0QkFBNEI7WUFDcEMsWUFBWSxFQUFFLDRDQUE0QztZQUMxRCxZQUFZLEVBQUUsb0NBQW9DO1NBQ3JEO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDUCxTQUFTLEVBQUUsRUFBRTtLQUNoQjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTWlzaHVzb2Z0UnVudGltZS8uL0Fzc2V0cy90eXBlc2NyaXB0cy9kYi9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIF9yb290XyAqL1xuLyppbml0aWFsaXplIG9uIGV4dGVuc2lvbiBpbnN0YWxsZWQqL1xuXG5sZXQgX19hcHBIb3N0ZWRTZXJ2ZXJSb290OnN0cmluZztcbmxldCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pc2h1c29mdC13ZWItcm9vdCcpPy5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcblxuaWYgKHR5cGVvZiB0ZW1wID09PSBudWxsKSB7XG4gICAgX19hcHBIb3N0ZWRTZXJ2ZXJSb290ID0gJy8nO1xufSBlbHNlIGlmICh0eXBlb2YgdGVtcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgX19hcHBIb3N0ZWRTZXJ2ZXJSb290ID0gJ2h0dHA6Ly9sb2NhbGhvc3QvJztcbiAgICAvKnJlcXVpcmVkIHZhcmlhYmxlcyovXG59IGVsc2UgIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgX19hcHBIb3N0ZWRTZXJ2ZXJSb290ID0gdGVtcC50b1N0cmluZygpO1xufVxuXG5cbmlmIChfX2FwcEhvc3RlZFNlcnZlclJvb3Quc3Vic3RyKC0xKSAhPT0gJy8nKSB7XG4gICAgX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICs9ICcvJztcbn1cblxuXG5leHBvcnQgY29uc3QgYXBwSG9zdCA9IF9fYXBwSG9zdGVkU2VydmVyUm9vdDtcblxuXG5leHBvcnQgY29uc3QgYXBwID0ge1xuICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgIFwibmFtZVwiOiAnbWlzaHVzb2Z0JyxcbiAgICAgICAgXCJ2ZXJzaW9uXCI6ICdvZmZpY2lhbCcsXG4gICAgICAgIFwiYXV0aG9yXCI6ICdNci4gQWwtQW1pbiBBaGFtZWQgKEFiaXIpJyxcbiAgICAgICAgXCJjaGFyc2V0XCI6ICd1dGY4bWI0JyxcbiAgICAgICAgXCJwcmVmaXhcIjogJ21zdScsXG4gICAgICAgIFwiY29tcGFueU5hbWVcIjogJ01pc2h1c29mdCBTeXN0ZW1zIEluY29ycG9yYXRlLicsXG4gICAgICAgIFwidGV4dFwiOiB7XG4gICAgICAgICAgICBcIndlbGNvbWVcIjogXCJXZWxjb21lIHRvIE1pc2h1c29mdCBQbGF0Zm9ybVwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1pc2h1c29mdCBQbGF0Zm9ybSBpcyBhIHJvYnVzdCBtdWx0aS13ZWIgcGxhdGZvcm0gZGV2ZWxvcGVkIGJ5IE1pc2h1c29mdCBTeXN0ZW1zIEluYy4gVGhpcyBwbGF0Zm9ybSBpcyBjYXBhYmxlIG9mIGdldHRpbmcgeW91ciB3b3JrIGRvbmUgcXVpY2tseSBhbmQgYWNjdXJhdGVseS5cIixcbiAgICAgICAgICAgIFwiaW5zdGFsbF9zdGF0ZVwiOiBcIlRoZSBhcHBsaWNhdGlvbiBpcyByZWFkeSB0byBiZSBpbnN0YWxsZWQgb24geW91ciBkZXZpY2UgYXQgdGhpcyB0aW1lLlwiLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImNvbnRlbnRcIjoge1xuICAgICAgICBcImZvbGRlclwiOiB7XG4gICAgICAgICAgICBcImxvZ29zXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArICdtZWRpYS9sb2dvcy8nLFxuICAgICAgICAgICAgXCJjc3NcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgJ2Fzc2V0cy9jc3MvJyxcbiAgICAgICAgICAgIFwianNcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgJ2Fzc2V0cy9qcy8nLFxuICAgICAgICAgICAgXCJpbWFnZXNcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgJ2Fzc2V0cy9pbWFnZXMvJyxcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWxlXCI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvYXBwbGUtaWNvbi01N3g1Ny5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiNTd4NTdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2FwcGxlLWljb24tNjB4NjAucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImFwcGxlLXRvdWNoLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjYweDYwXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9hcHBsZS1pY29uLTcyeDcyLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJhcHBsZS10b3VjaC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCI3Mng3MlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvYXBwbGUtaWNvbi03Nng3Ni5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiNzZ4NzZcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2FwcGxlLWljb24tMTE0eDExNC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTE0eDExNFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvYXBwbGUtaWNvbi0xMjB4MTIwLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJhcHBsZS10b3VjaC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxMjB4MTIwXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9hcHBsZS1pY29uLTE0NHgxNDQucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImFwcGxlLXRvdWNoLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjE0NHgxNDRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2FwcGxlLWljb24tMTUyeDE1Mi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTUyeDE1MlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvYXBwbGUtaWNvbi0xODB4MTgwLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJhcHBsZS10b3VjaC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxODB4MTgwXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTkyeDE5MlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9mYXZpY29uLTE2eDE2LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxNngxNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9mYXZpY29uLTMyeDMyLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIzMngzMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9mYXZpY29uLTk2eDk2LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCI5Nng5NlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9mYXZpY29uLmljb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxNngxNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2Uvdm5kLm1pY3Jvc29mdC5pY29uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9tYW5pZmVzdC5qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcIm1hbmlmZXN0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvbXMtaWNvbi0xNDR4MTQ0LnBuZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGhlbWUtY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcIndlYnNpdGVcIjoge1xuICAgICAgICBcImhvbWVcIjogXCJodHRwczovL3d3dy5taXNodXNvZnQuY29tL1wiLFxuICAgICAgICBcInN1cHBvcnRcIjogXCJzdXBwb3J0QG1pc2h1c29mdC5jb21cIixcbiAgICAgICAgXCJkb25hdGVcIjogXCJodHRwczovL3d3dy5taXNodXNvZnQuY29tL3BheW1lbnQvZG9uYXRlXCIsXG4gICAgICAgIFwiSXBJbmZvXCI6IFwiaHR0cHM6Ly9hcGkuaXBkYXRhLmNvLz9hcGkta2V5PTJmOWRkZTM4MWY2N2VmZWQzMjVhY2ZiMTAxMWE5ODgwMzZiMjhmYzZjYzAyZjA3NjY4ZWY3MTgwXCIsXG4gICAgICAgIFwiSXBJbmZvS2V5XCI6IFwiMmY5ZGRlMzgxZjY3ZWZlZDMyNWFjZmIxMDExYTk4ODAzNmIyOGZjNmNjMDJmMDc2NjhlZjcxODBcIixcbiAgICAgICAgXCJmb250QXdlc29tZVwiOiBcImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9iNGM4Zjg0NDlmLmpzXCIsXG4gICAgICAgIFwiZm9udEF3ZXNvbWVLZXlcIjogXCJiNGM4Zjg0NDlmXCIsXG5cbiAgICAgICAgXCJ0ZW1wb3JhcnlcIjoge1xuICAgICAgICAgICAgXCJob21lXCI6IFwiaHR0cDovL2xvY2FsaG9zdC9cIixcbiAgICAgICAgICAgIFwibW9uaXRvclVSTFwiOiBcImh0dHA6Ly9sb2NhbGhvc3QvbW9uaXRvci9icm93c2VyL1wiLFxuICAgICAgICAgICAgXCJwYXltZW50VVJMXCI6IFwiaHR0cDovL2xvY2FsaG9zdC9wYXltZW50L1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwicHVibGlzaFwiOiB7XG4gICAgICAgICAgICBcImhvbWVcIjogXCJodHRwczovL3d3dy5taXNodXNvZnQuY29tL1wiLFxuICAgICAgICAgICAgXCJtb25pdG9yVVJMXCI6IFwiaHR0cHM6Ly93d3cubWlzaHVzb2Z0LmNvbS9tb25pdG9yL2Jyb3dzZXIvXCIsXG4gICAgICAgICAgICBcInBheW1lbnRVUkxcIjogXCJodHRwczovL3d3dy5taXNodXNvZnQuY29tL3BheW1lbnQvXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgXCJyZXF1ZXN0XCI6IFwiXCJcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9