(self["webpackChunk"] = self["webpackChunk"] || []).push([["typescripts_common_validation_ts"],{

/***/ "./typescripts/common/validation.ts":
/*!******************************************!*\
  !*** ./typescripts/common/validation.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDuplicate": function() { return /* binding */ checkDuplicate; },
/* harmony export */   "isNumber": function() { return /* binding */ isNumber; },
/* harmony export */   "IsJsonString": function() { return /* binding */ IsJsonString; }
/* harmony export */ });
/**
 * @param str valid string
 * */
function checkDuplicate(str) {
    for (var i = 0; i < str.length; i++) {
        var re = new RegExp("[^" + str[i] + "]", "g");
        if (str.replace(re, "").length >= 2) {
            return true;
        }
    }
    return false;
}
/**
 * @param n any
 * */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * @param string string
 * */
function IsJsonString(string) {
    try {
        JSON.parse(string);
    }
    catch (e) {
        return false;
    }
    return true;
}


/***/ })

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdHlwZXNjcmlwdHMuY29tbW9uLnZhbGlkYXRpb24ucnVudGltZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7S0FFSztBQUNFLFNBQVMsY0FBYyxDQUFDLEdBQVc7SUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsSUFBSSxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7S0FDSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFHRDs7S0FFSztBQUNFLFNBQVMsUUFBUSxDQUFDLENBQU07SUFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUdEOztLQUVLO0FBQ0UsU0FBUyxZQUFZLENBQUMsTUFBYztJQUN2QyxJQUFJO1FBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN0QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdHlwZXNjcmlwdHMvY29tbW9uL3ZhbGlkYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBwYXJhbSBzdHIgdmFsaWQgc3RyaW5nXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0R1cGxpY2F0ZShzdHI6IHN0cmluZykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKFwiW15cIiArIHN0cltpXSArIFwiXVwiLCBcImdcIik7XHJcbiAgICAgICAgaWYgKHN0ci5yZXBsYWNlKHJlLCBcIlwiKS5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIG4gYW55XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihuOiBhbnkpIHtcclxuICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHN0cmluZyBzdHJpbmdcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElzSnNvblN0cmluZyhzdHJpbmc6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBKU09OLnBhcnNlKHN0cmluZyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==