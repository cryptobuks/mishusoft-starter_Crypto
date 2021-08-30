export function sendRequest(options: any, callback?: any) {

    /*worker.postMessage({
        "command": "sendRequest",
        "options": options,
        "receiver": __appHostedServerRoot
    });

    */

    if (options.method !== null && options.url !== null) {
        /*
        * if (app.runtime.request !== 'pending') {}
        * else { viewMessage('Another request is pending.', 'Your previous request is pending. Please wait until succeeded.', 'error')}
        * */

        try {

            let dataType: any;
            let request = new XMLHttpRequest();
            request.open(options.method, options.url, options.async);
            if (options.header !== null && typeof options.header == "object") {
                for (let i = 0; i < options.header.length; i++) {
                    request.setRequestHeader(options.header[i].name, options.header[i].value);
                    if (options.header[i].value.indexOf('form') !== -1) {
                        dataType = 'formData';
                    }
                    if (options.header[i].value.indexOf('json') !== -1) {
                        dataType = 'jsonData';
                    }
                }
            }
            if (options.data !== null && typeof options.data == "object") {
                if (dataType === 'jsonData') {
                    request.send(JSON.stringify(options.data));
                }
                if (dataType === 'formData') {
                    let formData: FormData = new FormData();
                    Object.keys(options.data).forEach(function (key) {
                        formData.append(key, options.data[key]);
                    });
                    request.send(formData);
                }
            }
            else {
                request.send();
            }

            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    if (callback) {
                        callback(this.responseText)
                    }
                    //console.log(this.responseText)
                }
            }

        } catch (e) {
            console.error("Fetching error."+ e);
        }
    } else {
        console.error("Error: METHOD and URL empty.");
    }
    /*window.addEventListener('message',function (event) {
        console.log(event)
    })*/
}
