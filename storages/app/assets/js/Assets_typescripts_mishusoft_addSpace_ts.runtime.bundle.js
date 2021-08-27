"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_mishusoft_addSpace_ts"],{

/***/ "./Assets/typescripts/mishusoft/addSpace.ts":
/*!**************************************************!*\
  !*** ./Assets/typescripts/mishusoft/addSpace.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increaseHeight": () => (/* binding */ increaseHeight)
/* harmony export */ });
let increaseHeight = () => {
    __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
        let captureElement = dom.captureElement;
        let clientHeight = captureElement('#flex-center').firstElementChild.clientHeight;
        captureElement('#flex-center').firstElementChild.style = 'height:' + (+clientHeight + 25) + 'px';
    }).catch(function (err) {
        console.log(err);
    });
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX21pc2h1c29mdF9hZGRTcGFjZV90cy5ydW50aW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sSUFBSSxjQUFjLEdBQUcsR0FBRyxFQUFFO0lBQzdCLHdMQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7UUFDdEMsSUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUN4QyxJQUFJLFlBQVksR0FBVyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO1FBQ3pGLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3JHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTWlzaHVzb2Z0UnVudGltZS8uL0Fzc2V0cy90eXBlc2NyaXB0cy9taXNodXNvZnQvYWRkU3BhY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBpbmNyZWFzZUhlaWdodCA9ICgpID0+IHtcbiAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgbGV0IGNhcHR1cmVFbGVtZW50ID0gZG9tLmNhcHR1cmVFbGVtZW50O1xuICAgICAgICBsZXQgY2xpZW50SGVpZ2h0OiBudW1iZXIgPSBjYXB0dXJlRWxlbWVudCgnI2ZsZXgtY2VudGVyJykuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50SGVpZ2h0O1xuICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2ZsZXgtY2VudGVyJykuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUgPSAnaGVpZ2h0OicgKyAoK2NsaWVudEhlaWdodCArIDI1KSArICdweCc7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9