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

/**
 * @param url string
 * @param dataObject object
 * @param callback any
 * */
export function checkInputDataAbility(url: string, dataObject: object, callback: any) {
    import('./request').then(function (request){
        return request.sendRequest({
            method: "POST", url: url, async: true,
            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
            data: dataObject,
        }, function (response: any) {
            callback(response);
        });
    });
}



/**
 * @param fileId string
 * @param previewerId string
 * */
export function previewImage(fileId: string, previewerId: string) {
    import('./dom').then(function (dom){
        let image = dom.captureElement('#' + fileId);
        if (image.files && image.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                dom.captureElement('#' + previewerId).setAttribute('src', <string>e?.target?.result);
            };
            reader.readAsDataURL(image.files[0]);
        }
    });

}

