/**
 * @param appenderId string
 * */

export function setUploadProgressSystem(appenderId: string) {
    import('./dom').then(function (dom) {
        let createElement = dom.createElement;
        let captureElement = dom.captureElement;

        let appender = captureElement('#' + appenderId);
        let uploadBoard = createElement([{'div': {'id': 'UploadStatusBoard', 'style': 'display:none;'}}]);
        uploadBoard.appendChild(createElement([{'progress': {'id': 'progressbar', 'max': '100', 'value': '0'}}]));
        uploadBoard.appendChild(createElement([{'h3': {'id': 'upload_status'}}]));
        uploadBoard.appendChild(createElement([{'p': {'id': 'loaded_n_total'}}]));
        return appender.appendChild(uploadBoard);
    });
}

/**
 * @param ElementName string
 * @param ElementID string
 * @param URL string*/
export function uploadFile(ElementName: string, ElementID: string, URL: string) {

    import('./dom').then(function (dom) {
        let captureElement = dom.captureElement;

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
    });

}

/**
 * @param event any
 * */
export function progressHandler(event: any) {
    import('./dom').then(function (dom) {
        let captureElement = dom.captureElement;

        let loadedSize = (event.loaded / 1024) / 1024;
        let totalSize = (event.total / 1024) / 1024;
        captureElement('#loaded_n_total').innerHTML = 'Uploaded ' + loadedSize.toFixed(2) + ' MB of ' + totalSize.toFixed(2) + ' MB';
        let percent = (event.loaded / event.total) * 100;
        captureElement('#progressbar').value = Math.round(percent);
        captureElement('#upload_status').innerHTML = Math.round(percent) + '% uploaded..';
    });
}

/**
 * @param event any
 * */
export function completeHandler(event: any) {
    import('./dom').then(function (dom) {
        let captureElement = dom.captureElement;

        captureElement('#upload_status').innerHTML = event.target.responseText;
        captureElement('#progressbar').value = 0;
        captureElement('#progressbar').style.display = 'none';
    });
}

export function errorHandler() {
    import('./dom').then(function (dom) {
        dom.captureElement('#upload_status').innerHTML = 'Upload failed';
    });
}

export function abortHandler() {
    import('./dom').then(function (dom) {
        dom.captureElement('#upload_status').innerHTML = 'Upload aborted';
    });
}
