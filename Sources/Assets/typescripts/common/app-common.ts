/**
 * import {__appHostedServerRoot} from "./app-db";
 * const worker = new Worker( __appHostedServerRoot +'public/js/sw.js');
 * */

import {sendRequest} from "./app-common-required-send";
import {captureElement, IsJsonString} from "./app-common-required";


/*reserved*/

export function selectAllCheckBox() {
    let select_all = captureElement('#select_all'); //select all checkbox
    let checkboxes = captureElement('.checkbox'); //checkbox items
    if (select_all && checkboxes) {
        //select all checkboxes
        select_all.addEventListener("change", function () {
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = select_all.checked;
            }
        });

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener('change', function () { //".checkbox" change
                //uncheck "select all", if one of the listed checkbox item is unchecked
                if (this.checked === false) {
                    select_all.checked = false;
                }
                //check "select all" if all checkbox items are checked
                if (document.querySelectorAll('.checkbox:checked').length === checkboxes.length) {
                    select_all.checked = true;
                }
            });
        }
    }

}


export function PopUpWindowCenterPosition(url: string | undefined, title: string | undefined, w: number, h: number) {
    // Fixes dual-screen position                         Most browsers      Firefox
    let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screenLeft;
    let dualScreenTop = window.screenTop !== undefined ? window.screenTop : screenTop;

    let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    let left = ((width / 2) - (w / 2)) + dualScreenLeft;
    let top = ((height / 2) - (h / 2)) + dualScreenTop;
    let newWindow = window.open(url, title, 'scrollbars=yes,resizable=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    newWindow?.focus();
}


export function protectNumberOnlyTextBox() {
    ['keyup', 'paste'].forEach(function (event) {
        document.querySelectorAll('.number-only')[0].addEventListener(event, function (e: any): any {
            if (event === 'keyup') {
                if (isNaN(Number(this.value + ""))) {
                    return false;
                }
            } else {
                e.preventDefault();
            }
        });
    });
}

export function getDateFromFullDate(date: string | number | Date, dateString: { innerHTML: string; }) {
    let d = new Date(date);
    dateString.innerHTML = d.toDateString();
}

/* -- end -- make data update with interval*/

export function getYearFromFullDate(date: string | number | Date, dateString: { innerHTML: number; }) {
    let d = new Date(date);
    dateString.innerHTML = d.getFullYear();
}

export function NumberToText(value: any) {
    let fraction = Math.round(frac(value) * 100);
    let f_text = "";

    if (fraction > 0) {
        f_text = "AND " + convert_number(fraction) + " PAISA";
    }

    return convert_number(value) + " Taka " + f_text + " ONLY";
}

export function frac(f: number) {
    return f % 1;
}

export function convert_number(number: number) {
    if ((number < 0) || (number > 999999999)) {
        return "NUMBER OUT OF RANGE!";
    }
    let Gn = Math.floor(number / 10000000);  /* Crore */
    number -= Gn * 10000000;
    let kn = Math.floor(number / 100000);     /* lakhs */
    number -= kn * 100000;
    let Hn = Math.floor(number / 1000);      /* thousand */
    number -= Hn * 1000;
    let Dn = Math.floor(number / 100);       /* Tens (deca) */
    number = number % 100;               /* Ones */
    let tn = Math.floor(number / 10);
    let one = Math.floor(number % 10);
    let res = "";

    if (Gn > 0) {
        res += (convert_number(Gn) + " CRORE");
    }
    if (kn > 0) {
        res += (((res === "") ? "" : " ") +
            convert_number(kn) + " LAKH");
    }
    if (Hn > 0) {
        res += (((res === "") ? "" : " ") +
            convert_number(Hn) + " THOUSAND");
    }

    if (Dn) {
        res += (((res === "") ? "" : " ") +
            convert_number(Dn) + " HUNDRED");
    }


    let ones = Array("", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN");
    let tens = Array("", "", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY");

    if (tn > 0 || one > 0) {
        if (!(res === "")) {
            res += " AND ";
        }
        if (tn < 2) {
            res += ones[tn * 10 + one];
        } else {

            res += tens[tn];
            if (one > 0) {
                res += ("-" + ones[one]);
            }
        }
    }

    if (res === "") {
        res = "zero";
    }
    return res;
}


/*reserved*/


/**
 * @param node_data Html element data
 * */

export function createElement(node_data: any) {
    let element, i, j, k;
    for (i in node_data) {
        let data: any = node_data[i];
        for (j in data) {
            let elementName = j;
            let elementData = data[j];
            element = document.createElement(elementName);
            for (k in elementData) {
                let element_attribute = k;
                let element_attribute_value = elementData[k];
                element.setAttribute(element_attribute, element_attribute_value);
            }
        }
    }
    return (element as HTMLElement);
}

/**
 * @param appenderId string
 * */

export function setUploadProgressSystem(appenderId: string) {
    let appender = captureElement('#' + appenderId);
    let uploadBoard = createElement([{'div': {'id': 'UploadStatusBoard', 'style': 'display:none;'}}]);
    uploadBoard.appendChild(createElement([{'progress': {'id': 'progressbar', 'max': '100', 'value': '0'}}]));
    uploadBoard.appendChild(createElement([{'h3': {'id': 'upload_status'}}]));
    uploadBoard.appendChild(createElement([{'p': {'id': 'loaded_n_total'}}]));
    return appender.appendChild(uploadBoard);
}

/**
 * @param ElementName string
 * @param ElementID string
 * @param URL string*/
export function uploadFile(ElementName: string, ElementID: string, URL: string) {
    captureElement('#UploadStatusBoard').style.display = 'block';
    captureElement('#progressbar').style.display = 'block';

    let file = captureElement('#' + ElementID).files[0];
    let data = new FormData();
    data.append(ElementName, file);
    let ajax = new XMLHttpRequest();
    ajax.upload.addEventListener('progress', progressHandler, false);
    ajax.addEventListener('load', completeHandler, false);
    ajax.addEventListener('error', errorHandler, false);
    ajax.addEventListener('abort', abortHandler, false);
    ajax.open('POST', URL, true);
    ajax.send(data);
}

/**
 * @param event any
 * */
export function progressHandler(event: any) {
    let loadedSize = (event.loaded / 1024) / 1024;
    let totalSize = (event.total / 1024) / 1024;
    captureElement('#loaded_n_total').innerHTML = 'Uploaded ' + loadedSize.toFixed(2) + ' MB of ' + totalSize.toFixed(2) + ' MB';
    let percent = (event.loaded / event.total) * 100;
    captureElement('#progressbar').value = Math.round(percent);
    captureElement('#upload_status').innerHTML = Math.round(percent) + '% uploaded..';
}

/**
 * @param event any
 * */
export function completeHandler(event: any) {
    captureElement('#upload_status').innerHTML = event.target.responseText;
    captureElement('#progressbar').value = 0;
    captureElement('#progressbar').style.display = 'none';
}

export function errorHandler() {
    captureElement('#upload_status').innerHTML = 'Upload failed';
}

export function abortHandler() {
    captureElement('#upload_status').innerHTML = 'Upload aborted';
}

/**
 * @param fileId string
 * @param previewerId string
 * */
export function previewImage(fileId: string, previewerId: string) {
    let image = captureElement('#' + fileId);
    if (image.files && image.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            captureElement('#' + previewerId).setAttribute('src', <string>e?.target?.result);
        };
        reader.readAsDataURL(image.files[0]);
    }
}


/**
 * @param selector string
 * @param titleText string
 * @param processURL string
 * @param messageView string
 * @param callback any
 * */
export function popUpDialogBoxDriver(selector: string, titleText: string, processURL: string, messageView: string, callback: any) {
    if (document.querySelectorAll(selector).length !== 0) {
        document.querySelectorAll(selector).forEach(function (__deleteButton: HTMLElement) {
            __deleteButton.addEventListener('click', function () {
                PopUpDialogBox(titleText, 'Are you want to ' + this.getAttribute('command')?.toLowerCase() + ' this?', this, this.getAttribute('command'), processURL, messageView, function () {
                        popUpDialogBoxDriver(selector, titleText, processURL, messageView, callback)
                    }, function (response: any) {
                        callback(response);
                    }
                );
            });
        });
    }
}

/**
 * @param titleText string
 * @param messageText string
 * @param actionBtn HTMLElementObject
 * @param command string
 * @param processURL string
 * @param messageView string
 * @param callback any
 * @param sendResponse any
 * */
export function PopUpDialogBox(titleText: any, messageText: any, actionBtn: any, command: any, processURL: any, messageView: string, callback: any, sendResponse: any) {
    captureElement('#PopUpDialogBox').style.display = 'block';
    captureElement('#PopUpDialogBoxTitle').innerHTML = titleText;
    captureElement(messageView).innerHTML = '<div style="font-size:15px;">' + messageText + '</div>';
    captureElement('#message-done-btn').innerHTML = command;

    let dataObject :any = {security_code : 1};
    [...actionBtn.attributes].forEach(function (__attribute) {
        if (__attribute.name.toLowerCase().indexOf('data') !==-1){
            dataObject[__attribute.name.replace('data-','')]=__attribute.value;
        }
    });

    captureElement('#message-done-btn').addEventListener('click', function () {
        captureElement('#app-loader').style.display = 'block';
        if (this.textContent === command) {
            return sendRequest({
                method: "POST",
                url: processURL,
                async: true,
                header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                data: dataObject,
            }, (response: any) => {
                captureElement('#PopUpDialogBox').style.display = 'none';
                captureElement('#app-loader').style.display = 'none';
                callback();
                sendResponse(response);
            });
        }
    });
}


/**
 * @param viewMode string
 * @param url string
 * @param extractTo string
 * @param callback any
 * @param fallback any
 * */
export function paginationDriver(viewMode: string, url: string, extractTo: string, fallback?: any, callback?: any) {
    if (document.querySelectorAll('.page').length !== 0) {
        document.querySelectorAll('.page').forEach(function (__pager: HTMLElement) {
            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                __pager.addEventListener(event, function () {
                    return pagination(viewMode, this.getAttribute('data-page'), url, extractTo, () => {
                        paginationDriver(viewMode, url, extractTo, fallback, callback);
                        callback();
                    }, fallback);
                });
            });
        });
    }
}

/**
 * @param viewMode string
 * @param page string
 * @param url string
 * @param extractTo string
 * @param callback any
 * @param fallback any
 * */
function pagination(viewMode: string, page: string, url: string, extractTo: string, callback: any, fallback: any) {
    return sendRequest({
        method: "POST", url: url, async: true,
        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
        data: {security_code: 1, pageNumber: page, viewMode: viewMode},
    }, function (response: any) {
        if (IsJsonString(response) && JSON.parse(response).type) {
            fallback(response);
        } else {
            captureElement('#' + extractTo).innerHTML = response;
            callback();
        }
    });
}

/**
 * @param url string
 * @param dataObject object
 * @param callback any
 * */
export function checkInputDataAbility(url: string, dataObject: object, callback: any) {
    return sendRequest({
        method: "POST", url: url, async: true,
        header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
        data: dataObject,
    }, function (response: any) {
        callback(response);
    });
}
