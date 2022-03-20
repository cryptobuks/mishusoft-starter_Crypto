(self["webpackChunk"] = self["webpackChunk"] || []).push([["typescripts_db_app_ts"],{

/***/ "./typescripts/db/app.ts":
/*!*******************************!*\
  !*** ./typescripts/db/app.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appHost": function() { return /* binding */ appHost; },
/* harmony export */   "app": function() { return /* binding */ app; }
/* harmony export */ });
/* global _root_ */
/*initialize on extension installed*/
var _a;
var __appHostedServerRoot;
var temp = (_a = document.querySelector('#mishusoft-web-root')) === null || _a === void 0 ? void 0 : _a.getAttribute('content');
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
var appHost = __appHostedServerRoot;
var app = {
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
        "home": __appHostedServerRoot,
        "support": "support@mishusoft.com",
        "donate": __appHostedServerRoot + "payment/donate",
        "ipInfoDedicated": __appHostedServerRoot + "api/tools/ipinfo",
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

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdHlwZXNjcmlwdHMuZGIuYXBwLnJ1bnRpbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQkFBbUI7QUFDbkIscUNBQXFDOztBQUVyQyxJQUFJLHFCQUE0QixDQUFDO0FBQ2pDLElBQUksSUFBSSxHQUFHLGNBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsMENBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxGLElBQUksT0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFO0lBQ3RCLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztDQUMvQjtLQUFNLElBQUksT0FBTyxJQUFJLEtBQUssU0FBUyxFQUFFO0lBQ2xDLHFCQUFxQixHQUFHLG1CQUFtQixDQUFDO0lBQzVDLHNCQUFzQjtDQUN6QjtLQUFPO0lBQ0osYUFBYTtJQUNiLHFCQUFxQixHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztDQUMzQztBQUdELElBQUkscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0lBQzFDLHFCQUFxQixJQUFJLEdBQUcsQ0FBQztDQUNoQztBQUdNLElBQU0sT0FBTyxHQUFHLHFCQUFxQixDQUFDO0FBR3RDLElBQU0sR0FBRyxHQUFHO0lBQ2YsU0FBUyxFQUFFO1FBQ1AsTUFBTSxFQUFFLFdBQVc7UUFDbkIsU0FBUyxFQUFFLFVBQVU7UUFDckIsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsS0FBSztRQUNmLGFBQWEsRUFBRSxnQ0FBZ0M7UUFDL0MsTUFBTSxFQUFFO1lBQ0osU0FBUyxFQUFFLCtCQUErQjtZQUMxQyxhQUFhLEVBQUUsa0tBQWtLO1lBQ2pMLGVBQWUsRUFBRSx1RUFBdUU7U0FDM0Y7S0FDSjtJQUNELFNBQVMsRUFBRTtRQUNQLFFBQVEsRUFBRTtZQUNOLE9BQU8sRUFBRSxxQkFBcUIsR0FBRyxjQUFjO1lBQy9DLEtBQUssRUFB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QzNCO2lCQUNBO2FBQ0o7U0FFSjtLQUNKO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsTUFBTSxFQUFFLHFCQUFxQjtRQUM3QixTQUFTLEVBQUUsdUJBQXVCO1FBQ2xDLFFBQVEsRUFBRSxxQkFBcUIsR0FBRyxnQkFBZ0I7UUFDbEQsaUJBQWlCLEVBQUUscUJBQXFCLEdBQUcsa0JBQWtCO1FBQzdELFFBQVEsRUFBRSx5RkFBeUY7UUFDbkcsV0FBVyxFQUFFLDBEQUEwRDtRQUN2RSxhQUFhLEVBQUUsMkNBQTJDO1FBQzFELGdCQUFnQixFQUFFLFlBQVk7UUFFOUIsV0FBVyxFQUFFO1lBQ1QsTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixZQUFZLEVBQUUsbUNBQW1DO1lBQ2pELFlBQVksRUFBRSwyQkFBMkI7U0FDNUM7UUFDRCxTQUFTLEVBQUU7WUFDUCxNQUFNLEVBQUUsNEJBQTRCO1lBQ3BDLFlBQVksRUFBRSw0Q0FBNEM7WUFDMUQsWUFBWSxFQUFFLG9DQUFvQztTQUNyRDtLQUNKO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsU0FBUyxFQUFFLEVBQUU7S0FDaEI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3R5cGVzY3JpcHRzL2RiL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgX3Jvb3RfICovXG4vKmluaXRpYWxpemUgb24gZXh0ZW5zaW9uIGluc3RhbGxlZCovXG5cbmxldCBfX2FwcEhvc3RlZFNlcnZlclJvb3Q6c3RyaW5nO1xubGV0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWlzaHVzb2Z0LXdlYi1yb290Jyk/LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuXG5pZiAodHlwZW9mIHRlbXAgPT09IG51bGwpIHtcbiAgICBfX2FwcEhvc3RlZFNlcnZlclJvb3QgPSAnLyc7XG59IGVsc2UgaWYgKHR5cGVvZiB0ZW1wID09PSB1bmRlZmluZWQpIHtcbiAgICBfX2FwcEhvc3RlZFNlcnZlclJvb3QgPSAnaHR0cDovL2xvY2FsaG9zdC8nO1xuICAgIC8qcmVxdWlyZWQgdmFyaWFibGVzKi9cbn0gZWxzZSAge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBfX2FwcEhvc3RlZFNlcnZlclJvb3QgPSB0ZW1wLnRvU3RyaW5nKCk7XG59XG5cblxuaWYgKF9fYXBwSG9zdGVkU2VydmVyUm9vdC5zdWJzdHIoLTEpICE9PSAnLycpIHtcbiAgICBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKz0gJy8nO1xufVxuXG5cbmV4cG9ydCBjb25zdCBhcHBIb3N0ID0gX19hcHBIb3N0ZWRTZXJ2ZXJSb290O1xuXG5cbmV4cG9ydCBjb25zdCBhcHAgPSB7XG4gICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgXCJuYW1lXCI6ICdtaXNodXNvZnQnLFxuICAgICAgICBcInZlcnNpb25cIjogJ29mZmljaWFsJyxcbiAgICAgICAgXCJhdXRob3JcIjogJ01yLiBBbC1BbWluIEFoYW1lZCAoQWJpciknLFxuICAgICAgICBcImNoYXJzZXRcIjogJ3V0ZjhtYjQnLFxuICAgICAgICBcInByZWZpeFwiOiAnbXN1JyxcbiAgICAgICAgXCJjb21wYW55TmFtZVwiOiAnTWlzaHVzb2Z0IFN5c3RlbXMgSW5jb3Jwb3JhdGUuJyxcbiAgICAgICAgXCJ0ZXh0XCI6IHtcbiAgICAgICAgICAgIFwid2VsY29tZVwiOiBcIldlbGNvbWUgdG8gTWlzaHVzb2Z0IFBsYXRmb3JtXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWlzaHVzb2Z0IFBsYXRmb3JtIGlzIGEgcm9idXN0IG11bHRpLXdlYiBwbGF0Zm9ybSBkZXZlbG9wZWQgYnkgTWlzaHVzb2Z0IFN5c3RlbXMgSW5jLiBUaGlzIHBsYXRmb3JtIGlzIGNhcGFibGUgb2YgZ2V0dGluZyB5b3VyIHdvcmsgZG9uZSBxdWlja2x5IGFuZCBhY2N1cmF0ZWx5LlwiLFxuICAgICAgICAgICAgXCJpbnN0YWxsX3N0YXRlXCI6IFwiVGhlIGFwcGxpY2F0aW9uIGlzIHJlYWR5IHRvIGJlIGluc3RhbGxlZCBvbiB5b3VyIGRldmljZSBhdCB0aGlzIHRpbWUuXCIsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgIFwiZm9sZGVyXCI6IHtcbiAgICAgICAgICAgIFwibG9nb3NcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgJ21lZGlhL2xvZ29zLycsXG4gICAgICAgICAgICBcImNzc1wiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyAnYXNzZXRzL2Nzcy8nLFxuICAgICAgICAgICAgXCJqc1wiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyAnYXNzZXRzL2pzLycsXG4gICAgICAgICAgICBcImltYWdlc1wiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyAnYXNzZXRzL2ltYWdlcy8nLFxuICAgICAgICB9LFxuICAgICAgICBcImZpbGVcIjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9hcHBsZS1pY29uLTU3eDU3LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJhcHBsZS10b3VjaC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCI1N3g1N1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvYXBwbGUtaWNvbi02MHg2MC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiNjB4NjBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2FwcGxlLWljb24tNzJ4NzIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImFwcGxlLXRvdWNoLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjcyeDcyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9hcHBsZS1pY29uLTc2eDc2LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJhcHBsZS10b3VjaC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCI3Nng3NlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvYXBwbGUtaWNvbi0xMTR4MTE0LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJhcHBsZS10b3VjaC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxMTR4MTE0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9hcHBsZS1pY29uLTEyMHgxMjAucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImFwcGxlLXRvdWNoLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjEyMHgxMjBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2FwcGxlLWljb24tMTQ0eDE0NC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTQ0eDE0NFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwibWVkaWEvbG9nb3MvYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJhcHBsZS10b3VjaC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxNTJ4MTUyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9hcHBsZS1pY29uLTE4MHgxODAucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImFwcGxlLXRvdWNoLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjE4MHgxODBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2FuZHJvaWQtaWNvbi0xOTJ4MTkyLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2Zhdmljb24tMTZ4MTYucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjE2eDE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2Zhdmljb24tMzJ4MzIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjMyeDMyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2Zhdmljb24tOTZ4OTYucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjk2eDk2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL2Zhdmljb24uaWNvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjE2eDE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS92bmQubWljcm9zb2Z0Lmljb25cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcIm1lZGlhL2xvZ29zL21hbmlmZXN0Lmpzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsXCI6IFwibWFuaWZlc3RcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjogX19hcHBIb3N0ZWRTZXJ2ZXJSb290ICsgXCJtZWRpYS9sb2dvcy9tcy1pY29uLTE0NHgxNDQucG5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0aGVtZS1jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwid2Vic2l0ZVwiOiB7XG4gICAgICAgIFwiaG9tZVwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QsXG4gICAgICAgIFwic3VwcG9ydFwiOiBcInN1cHBvcnRAbWlzaHVzb2Z0LmNvbVwiLFxuICAgICAgICBcImRvbmF0ZVwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3QgKyBcInBheW1lbnQvZG9uYXRlXCIsXG4gICAgICAgIFwiaXBJbmZvRGVkaWNhdGVkXCI6IF9fYXBwSG9zdGVkU2VydmVyUm9vdCArIFwiYXBpL3Rvb2xzL2lwaW5mb1wiLFxuICAgICAgICBcIklwSW5mb1wiOiBcImh0dHBzOi8vYXBpLmlwZGF0YS5jby8/YXBpLWtleT0yZjlkZGUzODFmNjdlZmVkMzI1YWNmYjEwMTFhOTg4MDM2YjI4ZmM2Y2MwMmYwNzY2OGVmNzE4MFwiLFxuICAgICAgICBcIklwSW5mb0tleVwiOiBcIjJmOWRkZTM4MWY2N2VmZWQzMjVhY2ZiMTAxMWE5ODgwMzZiMjhmYzZjYzAyZjA3NjY4ZWY3MTgwXCIsXG4gICAgICAgIFwiZm9udEF3ZXNvbWVcIjogXCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vYjRjOGY4NDQ5Zi5qc1wiLFxuICAgICAgICBcImZvbnRBd2Vzb21lS2V5XCI6IFwiYjRjOGY4NDQ5ZlwiLFxuXG4gICAgICAgIFwidGVtcG9yYXJ5XCI6IHtcbiAgICAgICAgICAgIFwiaG9tZVwiOiBcImh0dHA6Ly9sb2NhbGhvc3QvXCIsXG4gICAgICAgICAgICBcIm1vbml0b3JVUkxcIjogXCJodHRwOi8vbG9jYWxob3N0L21vbml0b3IvYnJvd3Nlci9cIixcbiAgICAgICAgICAgIFwicGF5bWVudFVSTFwiOiBcImh0dHA6Ly9sb2NhbGhvc3QvcGF5bWVudC9cIlxuICAgICAgICB9LFxuICAgICAgICBcInB1Ymxpc2hcIjoge1xuICAgICAgICAgICAgXCJob21lXCI6IFwiaHR0cHM6Ly93d3cubWlzaHVzb2Z0LmNvbS9cIixcbiAgICAgICAgICAgIFwibW9uaXRvclVSTFwiOiBcImh0dHBzOi8vd3d3Lm1pc2h1c29mdC5jb20vbW9uaXRvci9icm93c2VyL1wiLFxuICAgICAgICAgICAgXCJwYXltZW50VVJMXCI6IFwiaHR0cHM6Ly93d3cubWlzaHVzb2Z0LmNvbS9wYXltZW50L1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgIFwicmVxdWVzdFwiOiBcIlwiXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==