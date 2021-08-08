/**
 * @param str valid string
 * */
export function checkDuplicate(str) {
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
export function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * @param string string
 * */
export function IsJsonString(string) {
    try {
        JSON.parse(string);
    }
    catch (e) {
        return false;
    }
    return true;
}
/**
 * @param selector HTML valid element selector
 * */
export function captureElement(selector) {
    if (document.querySelector(selector) !== null) {
        return document.querySelector(selector);
    }
}
/**
 * @param selector HTML valid element selector
 * */
/*export function captureElements(selector: string) : any {
    if (/!*document.querySelectorAll(selector) !== null && *!/document.querySelectorAll(selector).length !== 0) {
        return document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
    }
}*/ export function captureElements(selector) {
    if ( /*document.querySelectorAll(selector) !== null && */document.querySelectorAll(selector).length !== 0) {
        return document.querySelectorAll(selector);
    }
}
//# sourceMappingURL=app-common-required.js.map