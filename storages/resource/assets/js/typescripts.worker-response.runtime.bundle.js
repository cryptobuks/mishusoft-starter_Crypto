(self["webpackChunk"] = self["webpackChunk"] || []).push([["typescripts_worker-response_ts"],{

/***/ "./typescripts/worker-response.ts":
/*!****************************************!*\
  !*** ./typescripts/worker-response.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerResponse": function() { return /* binding */ WorkerResponse; }
/* harmony export */ });
var WorkerResponse = /** @class */ (function () {
    function WorkerResponse(publicJsUrl) {
        this.publicJsUrl = publicJsUrl;
    }
    WorkerResponse.prototype.registerMe = function () {
        var publicJsUrl = this.publicJsUrl;
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register("".concat(publicJsUrl, "sw.js")).then(function (registration) {
                    console.log('SW registered: ', registration);
                }).catch(function (registrationError) {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        }
    };
    WorkerResponse.prototype.getRegisteredUrl = function () {
        return "".concat(this.publicJsUrl, "sw.js");
    };
    return WorkerResponse;
}());



/***/ })

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdHlwZXNjcmlwdHMud29ya2VyLXJlc3BvbnNlLnJ1bnRpbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0lBQ0ksd0JBQ1ksV0FBbUI7UUFBbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFFL0IsQ0FBQztJQUVNLG1DQUFVLEdBQWpCO1FBQ0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNuQyxJQUFJLGVBQWUsSUFBSSxTQUFTLEVBQUU7WUFDOUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtnQkFDNUIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBRyxXQUFXLFVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBWTtvQkFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLDJCQUFpQjtvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRU0seUNBQWdCLEdBQXZCO1FBQ0ksT0FBTyxVQUFHLElBQUksQ0FBQyxXQUFXLFVBQU8sQ0FBQztJQUN0QyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdHlwZXNjcmlwdHMvd29ya2VyLXJlc3BvbnNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBXb3JrZXJSZXNwb25zZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHB1YmxpY0pzVXJsOiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3Rlck1lKCkge1xyXG4gICAgICAgIGxldCBwdWJsaWNKc1VybCA9IHRoaXMucHVibGljSnNVcmw7XHJcbiAgICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihgJHtwdWJsaWNKc1VybH1zdy5qc2ApLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU1cgcmVnaXN0ZXJlZDogJywgcmVnaXN0cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKHJlZ2lzdHJhdGlvbkVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU1cgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgcmVnaXN0cmF0aW9uRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVnaXN0ZXJlZFVybCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnB1YmxpY0pzVXJsfXN3LmpzYDtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==