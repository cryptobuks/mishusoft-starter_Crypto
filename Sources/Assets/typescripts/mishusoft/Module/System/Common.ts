export class Common {
    constructor(
        private appHost : string
    ) {
    }

    handleCommonEvent(){
        let self = this;
        import('../../../common/dom').then(function (dom) {
            let captureElement = dom.captureElement;
            let createElement = dom.createElement;
            import('../../../common/request').then(function (request) {
                let sendRequest = request.sendRequest;
                import('../../../common/validation').then(function (validation) {
                    let IsJsonString = validation.IsJsonString;
                    if (captureElement("#system-notification-viewer") !== undefined) {
                        sendRequest({
                            method: "GET",
                            url: self.appHost + 'api/getVisitorsAccessLogsLimited',
                            async: true,
                            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        }, function (response: any) {
                            if (response.length !== 0 && IsJsonString(response)) {
                                if (JSON.parse(response).length !== 0) {
                                    captureElement("#system-notification-viewer").textContent = '';
                                    JSON.parse(response).forEach(function (log: any) {
                                        const messageBody = createElement([{
                                            'a': {
                                                'class': 'box-message ' + ((log.message_type.toLowerCase() === 'error') ? 'box-danger' : ((log.message_type.toLowerCase() === 'success') ? 'box-success' : ((log.message_type.toLowerCase() === 'notify') ? 'box-notify' : ' '))) + ' box-shadow-light',
                                                /*'style': 'padding: 0 0 0 4px;',*/
                                                'href': self.appHost + 'system/log/view/' + log.id,
                                                'title': '[' + log.ip + '] [' + log.browser + '] [' + log.time + ']',
                                            }
                                        }]);
                                        const messageIcon = createElement([{
                                            'span': {
                                                'class': ((log.message_type.toLowerCase() === 'error') ? 'box-danger-symbol' : ((log.message_type.toLowerCase() === 'success') ? 'box-success-symbol' : ((log.message_type.toLowerCase() === 'notify') ? 'box-notify-symbol' : ' '))),
                                            }
                                        }]);
                                        messageBody.appendChild(messageIcon);
                                        const messageIconFile = createElement([{
                                            'i': {
                                                'class': ((log.message_type.toLowerCase() === 'error') ? 'fa fa-times' : ((log.message_type.toLowerCase() === 'success') ? 'fa fa-check' : ((log.message_type.toLowerCase() === 'notify') ? 'fa fa-info' : ''))),
                                            }
                                        }]);
                                        messageIcon.appendChild(messageIconFile);

                                        const messageBodyContent = createElement([{'div': {'class': (captureElement('#notify') !== undefined) ? captureElement('#notify').value : 'notify-md-content',}}]);
                                        messageBody.appendChild(messageBodyContent);
                                        const ipLink = createElement([{
                                            'a': {
                                                'class': 'link',
                                                'href': self.appHost + 'addons/ipinfo/' + log.ip,
                                            }
                                        }]);
                                        ipLink.textContent = log.author + ' with ' + log.browser /*+  ' from ' + log.country*/;
                                        messageBodyContent.appendChild(ipLink);
                                        const contentLink = createElement([{'span': {'class': 'link',}}]);
                                        messageBodyContent.appendChild(contentLink);
                                        const content = createElement([{'p': {'class': 'link',}}]);
                                        content.textContent = log.message.replace(/\s*\<.*?\>\s*/g, ' ').substr(0, 35) + '...';
                                        messageBodyContent.appendChild(content);
                                        captureElement("#system-notification-viewer").appendChild(messageBody);
                                    })
                                } else {
                                    captureElement("#system-notification-viewer").textContent = '';
                                    const messageBody = createElement([{
                                        'div': {
                                            'class': 'box-message box-danger box-shadow-light',
                                            /*'style': 'padding: 0 0 0 4px;',*/
                                        }
                                    }]);
                                    const messageIcon = createElement([{
                                        'span': {
                                            'class': 'box-danger-symbol',
                                        }
                                    }]);
                                    messageBody.appendChild(messageIcon);
                                    const messageIconFile = createElement([{
                                        'i': {
                                            'class': 'fa fa-times',
                                        }
                                    }]);
                                    messageIcon.appendChild(messageIconFile);
                                    const messageBodyContent = createElement([{'div': {'class': 'notify-md-content',}}]);
                                    messageBodyContent.textContent = 'No notification found.';
                                    messageBody.appendChild(messageBodyContent);
                                    captureElement("#system-notification-viewer").appendChild(messageBody);
                                }
                            }
                        });
                    }

                    if (captureElement("#system-contact-message-viewer") !== undefined) {
                        sendRequest({
                            method: "GET",
                            url: self.appHost + 'api/getContactMessagesLimited',
                            async: true,
                            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        }, function (response: any) {
                            if (response.length !== 0 && IsJsonString(response)) {
                                if (JSON.parse(response).length !== 0) {
                                    captureElement("#system-contact-message-viewer").textContent = '';
                                    JSON.parse(response).forEach(function (message: any) {
                                        const messageBody = createElement([{
                                            'a': {
                                                'class': 'box-message box-success box-shadow-light',
                                                'href': self.appHost + 'system/contactmessage/view/' + message.id,
                                            }
                                        }]);
                                        const messageIcon = createElement([{
                                            'span': {
                                                'class': 'box-success-symbol',
                                            }
                                        }]);
                                        messageBody.appendChild(messageIcon);
                                        const messageIconFile = createElement([{
                                            'i': {
                                                'class': 'fa fa-check',
                                            }
                                        }]);
                                        messageIcon.appendChild(messageIconFile);

                                        const messageBodyContent = createElement([{'div': {'class': (captureElement('#notify') !== undefined) ? captureElement('#notify').value : 'notify-md-content',}}]);
                                        messageBody.appendChild(messageBodyContent);

                                        const sender = createElement([{
                                            'a': {
                                                'class': 'link',
                                                /*'href': appHost + 'addons/ipinfo/' + message.ip,*/
                                            }
                                        }]);
                                        sender.textContent = message.f_name + ' ' + message.l_name + ' send a ' + message.subject;
                                        messageBodyContent.appendChild(sender);
                                        const content = createElement([{'p': {}}]);
                                        content.textContent = message.message;
                                        messageBodyContent.appendChild(content);
                                        captureElement("#system-contact-message-viewer").appendChild(messageBody);
                                    })
                                } else {
                                    captureElement("#system-contact-message-viewer").textContent = '';
                                    const messageBody = createElement([{
                                        'div': {
                                            'class': 'box-message box-danger box-shadow-light',
                                            /*'style': 'padding: 0 0 0 4px;',*/
                                        }
                                    }]);
                                    const messageIcon = createElement([{
                                        'span': {
                                            'class': 'box-danger-symbol',
                                        }
                                    }]);
                                    messageBody.appendChild(messageIcon);
                                    const messageIconFile = createElement([{
                                        'i': {
                                            'class': 'fa fa-times',
                                        }
                                    }]);
                                    messageIcon.appendChild(messageIconFile);
                                    const messageBodyContent = createElement([{'div': {'class': 'notify-md-content',}}]);
                                    messageBodyContent.textContent = 'No message found.';
                                    messageBody.appendChild(messageBodyContent);
                                    captureElement("#system-contact-message-viewer").appendChild(messageBody);
                                }
                            }
                        });
                    }

                    if (captureElement('#system-default-menus') !== undefined) {
                        sendRequest({
                            method: "GET",
                            url: self.appHost + 'system/index/getMainItemTabs',
                            async: true,
                            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        }, function (response: any) {
                            if (response.length !== 0 && IsJsonString(response)) {
                                if (JSON.parse(response).length !== 0) {
                                    captureElement("#system-default-menus").textContent = '';
                                    JSON.parse(response).forEach(function (menu: any) {
                                        const systemMenu = createElement([{
                                            'a': {
                                                'class': 'thumbnail-md box-shadow-light',
                                                'href': self.appHost + 'system/' + menu.url,
                                                'title': menu.title,
                                            }
                                        }]);
                                        const systemMenuIcon = createElement([{'span': {'class': 'thumbnail-image',}}]);
                                        systemMenu.appendChild(systemMenuIcon);
                                        const systemMenuIconFile = createElement([{'i': {'class': menu.icon,}}]);
                                        systemMenuIcon.appendChild(systemMenuIconFile);

                                        const systemMenuName = createElement([{'div': {'class': 'thumbnail-text',}}]);
                                        systemMenuName.textContent = menu.name;
                                        systemMenu.appendChild(systemMenuName);
                                        captureElement("#system-default-menus").appendChild(systemMenu);
                                    });
                                } else {
                                    const systemMenu = createElement([{
                                        'div': {
                                            'class': 'thumbnail-md box-shadow-light',
                                            'style': 'padding: 45px 25px;',
                                        }
                                    }]);
                                    systemMenu.textContent = 'No menu exists.';
                                    captureElement("#system-default-menus").appendChild(systemMenu);
                                }
                            }
                        });
                    }

                    if (captureElement('#system-extra-menus') !== undefined) {
                        sendRequest({
                            method: "GET",
                            url: self.appHost + 'system/index/getExtraItemTabs',
                            async: true,
                            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                        }, function (response: any) {
                            if (response.length !== 0 && IsJsonString(response)) {
                                if (JSON.parse(response).length !== 0) {
                                    captureElement('#system-extra-menus').textContent = '';
                                    JSON.parse(response).forEach(function (menu: any) {
                                        const extraMenu = createElement([{
                                            'a': {
                                                'class': 'thumbnail-md box-shadow-light',
                                                'href': self.appHost + 'system/' + menu.url,
                                                'title': menu.title,
                                            }
                                        }]);
                                        const extraMenuIcon = createElement([{'span': {'class': 'thumbnail-image',}}]);
                                        extraMenu.appendChild(extraMenuIcon);
                                        const extraMenuIconFile = createElement([{'i': {'class': menu.icon,}}]);
                                        extraMenuIcon.appendChild(extraMenuIconFile);

                                        const extraMenuName = createElement([{'div': {'class': 'thumbnail-text',}}]);
                                        extraMenuName.textContent = menu.name;
                                        extraMenu.appendChild(extraMenuName);
                                        captureElement("#system-extra-menus").appendChild(extraMenu);
                                    });
                                } else {
                                    const extraMenu = createElement([{
                                        'div': {
                                            'class': 'thumbnail-md box-shadow-light',
                                            'style': 'padding: 45px 25px;',
                                        }
                                    }]);
                                    extraMenu.textContent = 'No menu exists.';
                                    captureElement("#system-extra-menus").appendChild(extraMenu);
                                }
                            }
                        });
                    }
                }).catch(function (err) {
                    console.log(err)
                });
            }).catch(function (err) {
                console.log(err)
            });
        }).catch(function (err) {
            console.log(err)
        });
    }
}