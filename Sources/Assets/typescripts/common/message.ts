/**
 * @param response any
 * @param element HTML element
 * @param callback any
 **/
export function showMessage(response: any, element: { innerHTML: string; }, callback?: ((arg0: any) => void) | undefined) {
    import('sweetalert').then(function (alert) {
        import('./validation').then(function (validation) {
            if (validation.IsJsonString(response)) {
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
                    return alert.default('Your data!', response, 'success');
                }
            } else {
                if (response.indexOf('<!doctype html>') !== -1 && response.indexOf('flex-center') !== -1) {
                    import('./dom').then(function (dom){
                        if (document.querySelector('#popup-login') === null) {
                            const popup = dom.createElement([{
                                'div': {'id': 'popup-login', 'class': 'modal', 'style': 'display:block;'}
                            }]);
                            const popupDocument = dom.createElement([{
                                'div': {'class': 'row modal-content animate', 'style': 'width:34.5%;'}
                            }]);
                            popup.appendChild(popupDocument);
                            const popupDocumentBody = dom.createElement([{
                                'div': {'class': 'modal-body'}
                            }]);
                            popupDocumentBody.innerHTML = response.substr(response.indexOf('<div class="logInBox'),
                                (response.indexOf('</div> </section>') - response.indexOf('<div class="logInBox')))
                                .replace('logInBox box-shadow box-shadow-light', 'logInBox')
                                .replace(
                                    '<div class="float-right text-right"><input type="submit"',
                                    '<div class="float-right text-right" style="margin-right: 5px;"><input type="submit"'
                                );
                            popupDocument.appendChild(popupDocumentBody);
                            document.body.appendChild(popup);
                        }
                    });
                } else {
                    return alert.default('Oop! Something went wrong!', response, 'error');
                }
            }
        });
    });
}

/**
 * @param self
 * @param data JSON Object
 * @param __appHostUrl Valid url
 **/
export function sendMessage(self: any, data: any, __appHostUrl: string) {
    // @ts-ignore
    import('sweetalert').then(function (alert) {
        if (data !== undefined && data !== null && data.constructor === Object && __appHostUrl !== null) {
            import('./request').then(function (request) {
                return request.sendRequest({
                    method: "POST",
                    url: __appHostUrl,
                    async: true,
                    header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                    data: data
                }, function (response: any) {
                    import('./validation').then(function (validation) {
                        if (validation.IsJsonString(response)) {
                            document.querySelector('#app-loader')?.setAttribute('style', 'display:none;');
                            return self.appRuntimeEventManager(JSON.parse(response));
                        } else {
                            return alert.default("Oops! Something went wrong!", response, "error");
                        }
                    });

                });
            });

        } else {
            return alert.default("Oops! We can't send request!", "error");
        }
    });

}

export function viewMessage(title: any, data: any, icon: any) {
    return sweetAlert(title, data, icon);
}