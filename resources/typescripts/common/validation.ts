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

