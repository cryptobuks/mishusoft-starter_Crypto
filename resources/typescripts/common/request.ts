import { IsJsonString } from "./validation";

export function sendRequest(options: { method: string; url: string; async: boolean; header?: any[]; data?: any }, callback?: (arg0: string) => void, fallback?: (arg0: Error) => void) {
    let dataType = "unrecognized";

    if (typeof options === "object") {
        if (options.method !== "" && options.url !== "") {
            if (typeof XMLHttpRequest !== "undefined") {
                let request = new XMLHttpRequest();
                request.open(options.method, options.url, options.async);

                //set header for xhr request
                if (options.header !== undefined && typeof options.header == "object") {
                    options.header.forEach((item) => {
                        Object.keys(item).forEach((name) => {
                            let value = item[name];
                            request.setRequestHeader(name, value);
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
                            request.send(JSON.stringify(options.data));
                        }
                        //send form data
                        if (dataType === "formData") {
                            let formData = new FormData();
                            Object.keys(options.data).forEach(function (key) {
                                formData.append(key, options.data[key]);
                            });
                            request.send(formData);
                        }
                    }
                } else {
                    if (IsJsonString(options.data) || typeof options.data === "object") {
                        request.setRequestHeader("Content-type", "application/json; charset=utf-8");
                        request.send(JSON.stringify(options.data));
                    } else {
                        request.send();
                    }
                }

                //catch state of xhr
                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status === 0) {
                            if (fallback) {
                                fallback(new Error(`Request send failed ${options.url}`));
                            }
                        }
                        if (this.status === 200) {
                            if (callback) {
                                callback(this.responseText);
                            }
                        }
                    }
                };
            } else {
                if (fallback) {
                    fallback(new Error("Runtime Environment could not support XMLHttpRequest"));
                }
            }
        } else {
            if (fallback) {
                fallback(new Error("Request Method and URL can not be empty"));
            }
        }
    } else {
        if (fallback) {
            fallback(new Error("Invalid options"));
        }
    }
}
