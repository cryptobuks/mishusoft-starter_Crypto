(self["webpackChunk"] = self["webpackChunk"] || []).push([["typescripts_common_request_ts"],{

/***/ "./typescripts/common/request.ts":
/*!***************************************!*\
  !*** ./typescripts/common/request.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendRequest": function() { return /* binding */ sendRequest; }
/* harmony export */ });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./typescripts/common/validation.ts");

function sendRequest(options, callback, fallback) {
    var dataType = "unrecognized";
    if (typeof options === "object") {
        if (options.method !== "" && options.url !== "") {
            if (typeof XMLHttpRequest !== "undefined") {
                var request_1 = new XMLHttpRequest();
                request_1.open(options.method, options.url, options.async);
                //set header for xhr request
                if (options.header !== undefined && typeof options.header == "object") {
                    options.header.forEach(function (item) {
                        Object.keys(item).forEach(function (name) {
                            var value = item[name];
                            request_1.setRequestHeader(name, value);
                            if (value.indexOf("form") !== -1) {
                                dataType = "formData";
                            }
                            if (value.indexOf("json") !== -1) {
                                dataType = "jsonData";
                            }
                        });
                    });
                }
                //send data with xhr request
                if (dataType !== "unrecognized") {
                    if (options.data !== undefined && typeof options.data == "object") {
                        //send json data
                        if (dataType === "jsonData") {
                            request_1.send(JSON.stringify(options.data));
                        }
                        //send form data
                        if (dataType === "formData") {
                            var formData_1 = new FormData();
                            Object.keys(options.data).forEach(function (key) {
                                formData_1.append(key, options.data[key]);
                            });
                            request_1.send(formData_1);
                        }
                    }
                }
                else {
                    if ((0,_validation__WEBPACK_IMPORTED_MODULE_0__.IsJsonString)(options.data) || typeof options.data === "object") {
                        request_1.setRequestHeader("Content-type", "application/json; charset=utf-8");
                        request_1.send(JSON.stringify(options.data));
                    }
                    else {
                        request_1.send();
                    }
                }
                //catch state of xhr
                request_1.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status === 0) {
                            if (fallback) {
                                fallback(new Error("Request send failed ".concat(options.url)));
                            }
                        }
                        if (this.status === 200) {
                            if (callback) {
                                callback(this.responseText);
                            }
                        }
                    }
                };
            }
            else {
                if (fallback) {
                    fallback(new Error("Runtime Environment could not support XMLHttpRequest"));
                }
            }
        }
        else {
            if (fallback) {
                fallback(new Error("Request Method and URL can not be empty"));
            }
        }
    }
    else {
        if (fallback) {
            fallback(new Error("Invalid options"));
        }
    }
}


/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdHlwZXNjcmlwdHMuY29tbW9uLnJlcXVlc3QucnVudGltZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUVyQyxTQUFTLFdBQVcsQ0FBQyxPQUFvRixFQUFFLFFBQWlDLEVBQUUsUUFBZ0M7SUFDakwsSUFBSSxRQUFRLEdBQUcsY0FBYyxDQUFDO0lBRTlCLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1FBQzdCLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxFQUFFLElBQUksT0FBTyxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxPQUFPLGNBQWMsS0FBSyxXQUFXLEVBQUU7Z0JBQ3ZDLElBQUksU0FBTyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7Z0JBQ25DLFNBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFekQsNEJBQTRCO2dCQUM1QixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUU7b0JBQ25FLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTt3QkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJOzRCQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3ZCLFNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7NEJBQ3RDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQ0FDOUIsUUFBUSxHQUFHLFVBQVUsQ0FBQzs2QkFDekI7NEJBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFL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QUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNqQyxPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBR0Q7O0tBRUs7QUFDRSxTQUFTLFFBQVEsQ0FBQyxDQUFNO0lBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFHRDs7S0FFSztBQUNFLFNBQVMsWUFBWSxDQUFDLE1BQWM7SUFDdkMsSUFBSTtRQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDdEI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3R5cGVzY3JpcHRzL2NvbW1vbi9yZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3R5cGVzY3JpcHRzL2NvbW1vbi92YWxpZGF0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzSnNvblN0cmluZyB9IGZyb20gXCIuL3ZhbGlkYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRSZXF1ZXN0KG9wdGlvbnM6IHsgbWV0aG9kOiBzdHJpbmc7IHVybDogc3RyaW5nOyBhc3luYzogYm9vbGVhbjsgaGVhZGVyPzogYW55W107IGRhdGE/OiBhbnkgfSwgY2FsbGJhY2s/OiAoYXJnMDogc3RyaW5nKSA9PiB2b2lkLCBmYWxsYmFjaz86IChhcmcwOiBFcnJvcikgPT4gdm9pZCkge1xuICAgIGxldCBkYXRhVHlwZSA9IFwidW5yZWNvZ25pemVkXCI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSBcIlwiICYmIG9wdGlvbnMudXJsICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCBvcHRpb25zLmFzeW5jKTtcblxuICAgICAgICAgICAgICAgIC8vc2V0IGhlYWRlciBmb3IgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5oZWFkZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy5oZWFkZXIgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmhlYWRlci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gaXRlbVtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKFwiZm9ybVwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGUgPSBcImZvcm1EYXRhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKFwianNvblwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGUgPSBcImpzb25EYXRhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc2VuZCBkYXRhIHdpdGggeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09IFwidW5yZWNvZ25pemVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zLmRhdGEgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZW5kIGpzb24gZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlID09PSBcImpzb25EYXRhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5kYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbmQgZm9ybSBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT09IFwiZm9ybURhdGFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoZm9ybURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKElzSnNvblN0cmluZyhvcHRpb25zLmRhdGEpIHx8IHR5cGVvZiBvcHRpb25zLmRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5kYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vY2F0Y2ggc3RhdGUgb2YgeGhyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFjayhuZXcgRXJyb3IoYFJlcXVlc3Qgc2VuZCBmYWlsZWQgJHtvcHRpb25zLnVybH1gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChmYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBmYWxsYmFjayhuZXcgRXJyb3IoXCJSdW50aW1lIEVudmlyb25tZW50IGNvdWxkIG5vdCBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0XCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZmFsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBmYWxsYmFjayhuZXcgRXJyb3IoXCJSZXF1ZXN0IE1ldGhvZCBhbmQgVVJMIGNhbiBub3QgYmUgZW1wdHlcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZhbGxiYWNrKSB7XG4gICAgICAgICAgICBmYWxsYmFjayhuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyoqXHJcbiAqIEBwYXJhbSBzdHIgdmFsaWQgc3RyaW5nXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0R1cGxpY2F0ZShzdHI6IHN0cmluZykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKFwiW15cIiArIHN0cltpXSArIFwiXVwiLCBcImdcIik7XHJcbiAgICAgICAgaWYgKHN0ci5yZXBsYWNlKHJlLCBcIlwiKS5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIG4gYW55XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihuOiBhbnkpIHtcclxuICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHN0cmluZyBzdHJpbmdcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElzSnNvblN0cmluZyhzdHJpbmc6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBKU09OLnBhcnNlKHN0cmluZyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==