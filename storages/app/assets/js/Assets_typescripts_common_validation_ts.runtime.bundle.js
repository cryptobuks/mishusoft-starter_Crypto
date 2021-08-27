"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_common_validation_ts"],{

/***/ "./Assets/typescripts/common/validation.ts":
/*!*************************************************!*\
  !*** ./Assets/typescripts/common/validation.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDuplicate": () => (/* binding */ checkDuplicate),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "IsJsonString": () => (/* binding */ IsJsonString)
/* harmony export */ });
/**
 * @param str valid string
 * */
function checkDuplicate(str) {
    for (let i = 0; i < str.length; i++) {
        let re = new RegExp("[^" + str[i] + "]", "g");
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX2NvbW1vbl92YWxpZGF0aW9uX3RzLnJ1bnRpbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztLQUVLO0FBQ0UsU0FBUyxjQUFjLENBQUMsR0FBVztJQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUdEOztLQUVLO0FBQ0UsU0FBUyxRQUFRLENBQUMsQ0FBTTtJQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBR0Q7O0tBRUs7QUFDRSxTQUFTLFlBQVksQ0FBQyxNQUFjO0lBQ3ZDLElBQUk7UUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3RCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NaXNodXNvZnRSdW50aW1lLy4vQXNzZXRzL3R5cGVzY3JpcHRzL2NvbW1vbi92YWxpZGF0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHN0ciB2YWxpZCBzdHJpbmdcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEdXBsaWNhdGUoc3RyOiBzdHJpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKFwiW15cIiArIHN0cltpXSArIFwiXVwiLCBcImdcIik7XG4gICAgICAgIGlmIChzdHIucmVwbGFjZShyZSwgXCJcIikubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuXG4vKipcbiAqIEBwYXJhbSBuIGFueVxuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihuOiBhbnkpIHtcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xufVxuXG5cbi8qKlxuICogQHBhcmFtIHN0cmluZyBzdHJpbmdcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gSXNKc29uU3RyaW5nKHN0cmluZzogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgSlNPTi5wYXJzZShzdHJpbmcpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9