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

    import('./dom').then(function (dom) {
        let captureElement = dom.captureElement;
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
                import('./request').then(function (request) {
                    return request.sendRequest({
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
                });
            }
        });
        
    });
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
    import('./request').then(function (request) {
        return request.sendRequest({
            method: "POST", url: url, async: true,
            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
            data: {security_code: 1, pageNumber: page, viewMode: viewMode},
        }, function (response: any) {
            import('./validation').then(function (validation) {
                if (validation.IsJsonString(response) && JSON.parse(response).type) {
                    fallback(response);
                } else {
                    import('./dom').then(function (dom) {
                        dom.captureElement('#' + extractTo).innerHTML = response;
                        callback();
                    });

                }
            });
        });
    });
}
