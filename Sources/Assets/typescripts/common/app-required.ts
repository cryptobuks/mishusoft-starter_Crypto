import swal from "sweetalert";
import {IsJsonString} from "./app-common-required";
import {sendRequest} from "./app-common-required-send";

/**
 * @param response any
 * @param element HTML element
 * @param callback any
 **/
export function showMessage(response: any, element: { innerHTML: string; }, callback?: ((arg0: any) => void) | undefined) {
    if (IsJsonString(response)) {
        let data = JSON.parse(response), html = "", errClass = '', symbol = '';
        if (data.type !== undefined) {
            if (data.type === "error") {
                errClass += 'danger';
                symbol += "<i class=\"fa fa-times\"></i>";
            }
            if (data.type === "success") {
                errClass += 'success';
                symbol += "<i class=\"fa fa-check\"></i>";
            }

            html += '<div class="box-message box-' + errClass + ' box-shadow-light">';
            html += '<span class="box-' + errClass + '-symbol">' + symbol + '</span>';
            html += '<p  class="notify-md-content" style="text-align: justify;">' + data.message + '</p>';
            html += '</div>';

            if (element) {
                element.innerHTML = html;
            }
            if (callback) {
                return callback(data);
            }
        } else {
            return swal('Your data!', response, 'success');
        }
    } else {
        if (response.indexOf('<!doctype html>') !== -1 && response.indexOf('flex-center') !== -1) {
            /*console.log(response)
            console.log(response.length)
            console.log(response.indexOf('<div class="logInBox'))
            console.log(response.indexOf('</div> </section>'))
            console.log(response.length - response.indexOf('</div> </section>'))
            console.log(response.length - (response.length - response.indexOf('</div> </section>')))
            console.log(response.substr(response.indexOf('<div class="logInBox'), (response.indexOf('</div> </section>') - response.indexOf('<div class="logInBox'))));
            console.log(response.substr(response.indexOf('<div class="logInBox'), (response.indexOf('</div> </section>') - response.indexOf('<div class="logInBox'))).replace('logInBox box-shadow box-shadow-light','logInBox').replace('<div class="float-right text-right"><input type="submit"','<div class="float-right text-right" style="margin-right: 5px;"><input type="submit"'))*/

            if (document.querySelector('#popup-login') === null) {
                const popup = createElement([{
                    'div': {'id': 'popup-login', 'class': 'modal', 'style': 'display:block;'}
                }]);
                const popupDocument = createElement([{
                    'div': {'class': 'row modal-content animate', 'style': 'width:34.5%;'}
                }]);
                popup.appendChild(popupDocument);
                const popupDocumentBody = createElement([{
                    'div': {'class': 'modal-body'}
                }]);
                popupDocumentBody.innerHTML = response.substr(response.indexOf('<div class="logInBox'), (response.indexOf('</div> </section>') - response.indexOf('<div class="logInBox'))).replace('logInBox box-shadow box-shadow-light', 'logInBox').replace('<div class="float-right text-right"><input type="submit"', '<div class="float-right text-right" style="margin-right: 5px;"><input type="submit"');
                popupDocument.appendChild(popupDocumentBody);
                document.body.appendChild(popup);
            }
        } else {
            return swal('Oop! Something went wrong!', response, 'error');
        }
        //console.log(data);
    }
}

/**
 * @param self
 * @param data JSON Object
 * @param __appHostUrl Valid url
 **/
export function sendMessage(self: any, data: any, __appHostUrl: string) {
    if (data !== undefined && data !== null && data.constructor === Object && __appHostUrl !== null) {
        return sendRequest({
            method: "POST",
            url: __appHostUrl,
            async: true,
            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
            data: data
        }, function (response: any) {
            if (IsJsonString(response)) {
                document.querySelector('#app-loader')?.setAttribute('style', 'display:none;');
                return self.appRuntimeEventManager(JSON.parse(response));
            } else {
                return swal("Oops! Something went wrong!", response, "error");
            }
        });
    } else {
        return swal("Oops! We can't send request!", "error");
    }
}

export function viewMessage(title: any, data: any, icon: any) {
    return swal(title, data, icon);
}

function createElement(node_data: any) {
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