/**
 * @param str valid string
 * */
export function checkDuplicate(str: string) {
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
export function isNumber(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


/**
 * @param string string
 * */
export function IsJsonString(string: string) {
    try {
        JSON.parse(string);
    } catch (e) {
        return false;
    }
    return true;
}

/**
 * @param selector HTML valid element selector
 * */
export function captureElement(selector: string): any {
    if (document.querySelector(selector) !== null) {
        return document.querySelector(selector) as HTMLElement;
    }
}

/**
 * @param selector HTML valid element selector
 * */
/*export function captureElements(selector: string) : any {
    if (/!*document.querySelectorAll(selector) !== null && *!/document.querySelectorAll(selector).length !== 0) {
        return document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
    }
}*/export function captureElements(selector: string) : any {
    if (/*document.querySelectorAll(selector) !== null && */document.querySelectorAll(selector).length !== 0) {
        return document.querySelectorAll(selector);
    }
}