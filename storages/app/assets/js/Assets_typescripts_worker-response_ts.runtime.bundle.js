"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_worker-response_ts"],{

/***/ "./Assets/typescripts/worker-response.ts":
/*!***********************************************!*\
  !*** ./Assets/typescripts/worker-response.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerResponse": () => (/* binding */ WorkerResponse)
/* harmony export */ });
class WorkerResponse {
    publicJsUrl;
    constructor(publicJsUrl) {
        this.publicJsUrl = publicJsUrl;
    }
    registerMe() {
        let publicJsUrl = this.publicJsUrl;
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register(`${publicJsUrl}sw.js`).then(registration => {
                    //console.log('SW registered: ', registration);
                }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        }
    }
    getPublicJsUrl() {
        return this.publicJsUrl;
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX3dvcmtlci1yZXNwb25zZV90cy5ydW50aW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxjQUFjO0lBRVg7SUFEWixZQUNZLFdBQWtCO1FBQWxCLGdCQUFXLEdBQVgsV0FBVyxDQUFPO0lBRTlCLENBQUM7SUFFTSxVQUFVO1FBQ2IsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNuQyxJQUFJLGVBQWUsSUFBSSxTQUFTLEVBQUU7WUFDOUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7Z0JBQ2pDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ3hFLCtDQUErQztnQkFDbkQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFDL0QsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVNLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL01pc2h1c29mdFJ1bnRpbWUvLi9Bc3NldHMvdHlwZXNjcmlwdHMvd29ya2VyLXJlc3BvbnNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBXb3JrZXJSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcHVibGljSnNVcmw6c3RyaW5nXG4gICAgKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyTWUoKXtcbiAgICAgICAgbGV0IHB1YmxpY0pzVXJsID0gdGhpcy5wdWJsaWNKc1VybDtcbiAgICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKGAke3B1YmxpY0pzVXJsfXN3LmpzYCkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdTVyByZWdpc3RlcmVkOiAnLCByZWdpc3RyYXRpb24pO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKHJlZ2lzdHJhdGlvbkVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NXIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIHJlZ2lzdHJhdGlvbkVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFB1YmxpY0pzVXJsKCkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wdWJsaWNKc1VybDtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9