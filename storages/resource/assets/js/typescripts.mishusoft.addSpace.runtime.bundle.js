(self["webpackChunk"] = self["webpackChunk"] || []).push([["typescripts_mishusoft_addSpace_ts"],{

/***/ "./typescripts/mishusoft/addSpace.ts":
/*!*******************************************!*\
  !*** ./typescripts/mishusoft/addSpace.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increaseHeight": function() { return /* binding */ increaseHeight; }
/* harmony export */ });
var increaseHeight = function () {
    __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
        var captureElement = dom.captureElement;
        var clientHeight = captureElement('#flex-center').firstElementChild.clientHeight;
        captureElement('#flex-center').firstElementChild.style = 'height:' + (+clientHeight + 25) + 'px';
    }).catch(function (err) {
        console.log(err);
    });
};


/***/ })

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdHlwZXNjcmlwdHMubWlzaHVzb2Z0LmFkZFNwYWNlLnJ1bnRpbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFPLElBQUksY0FBYyxHQUFHO0lBQ3hCLDBLQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7UUFDdEMsSUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUN4QyxJQUFJLFlBQVksR0FBVyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO1FBQ3pGLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3JHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdHlwZXNjcmlwdHMvbWlzaHVzb2Z0L2FkZFNwYWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBsZXQgaW5jcmVhc2VIZWlnaHQgPSAoKSA9PiB7XHJcbiAgICBpbXBvcnQoJy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkb20pIHtcclxuICAgICAgICBsZXQgY2FwdHVyZUVsZW1lbnQgPSBkb20uY2FwdHVyZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGNsaWVudEhlaWdodDogbnVtYmVyID0gY2FwdHVyZUVsZW1lbnQoJyNmbGV4LWNlbnRlcicpLmZpcnN0RWxlbWVudENoaWxkLmNsaWVudEhlaWdodDtcclxuICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2ZsZXgtY2VudGVyJykuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUgPSAnaGVpZ2h0OicgKyAoK2NsaWVudEhlaWdodCArIDI1KSArICdweCc7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=