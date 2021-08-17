export class Branching {

    constructor(
        private appHost: string
    ) {
    }

    handleBranchDataTableViewEvent() {
        let self = this;
        let appHost = this.appHost;

        import('../../../common/dom').then(function (d) {
            let captureElement = d.captureElement;
            let changeElementValueById = d.changeElementValueById;
            let changeElementAttributeValue = d.changeElementAttributeValue;

            //init edit pad by default

            changeElementAttributeValue('#branchEditMode',[
                {key: '#branchEditMode', attribute: 'innerHTML', value: 'New'},
                {key: '#branch-data-btn', attribute: 'innerHTML', value: 'Save'},
                {key: '#branch-reset-btn', attribute: 'innerHTML', value: 'Reset'},
            ]);

            import('../../../common/message').then(function (message) {
                let showMessage = message.showMessage;
                import('../../../common/common').then(function (validation) {
                    let checkInputDataAbility = validation.checkInputDataAbility;
                    //set text box value change dynamic after dropbox had changed.
                    ['keyup', 'change', 'paste'].forEach(function (__event) {
                        captureElement('#branchName').addEventListener(__event, function () {
                            return checkInputDataAbility(
                                appHost + "system/branches/checkBranchNameInputAbility",
                                {
                                    security_code: 1,
                                    name: "name",
                                    value: captureElement("#branchName").value
                                },
                                function (response: any) {
                                    showMessage(response, captureElement("#message2"));
                                });
                        });
                    });
                }).catch(function (err) {
                    console.log(err)
                });


                import('../../../common/request').then(function (request) {
                    let sendRequest = request.sendRequest;
                    //save data by clicking data button
                    captureElement('#branch-data-btn').addEventListener('click', function () {
                        captureElement('#app-loader').style.display = 'block';
                        return sendRequest({
                            method: "POST",
                            url: appHost + 'system/branches/manageBranch',
                            async: true,
                            header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                            data: {
                                security_code: 1,
                                id: captureElement('#branchID').value,
                                name: captureElement('#branchName').value,
                                status: captureElement('#branchStatus').value,
                                location: captureElement('#branchLocation').value,
                                btnName: captureElement('#branch-data-btn').textContent
                            },
                        }, (response: any) => {
                            showMessage(response, captureElement("#message2"));
                            captureElement('#app-loader').style.display = 'none';
                        });
                    });
                }).catch(function (err) {
                    console.log(err)
                });

                let needChange = [
                    {'id': 'branchID', 'value': ''},
                    {'id': 'branchName', 'value': ''},
                    {'id': 'branchStatus', 'value': ''},
                    {'id': 'branchLocation', 'value': ''},
                ];

                //reset input box by clicking reset button
                captureElement('#branch-reset-btn').addEventListener('click', function () {
                    changeElementValueById(needChange);
                });

                //add data form by clicking add button
                captureElement('#branch-add-btn').addEventListener('click', function () {
                    changeElementAttributeValue('#branchEditMode',[
                        {key: '#message2', attribute: 'innerHTML', value: ''},
                        {key: '#branchEditMode', attribute: 'innerHTML', value: 'New'},
                        {key: '#branch-data-btn', attribute: 'innerHTML', value: 'Save'},
                    ]);
                    changeElementValueById(needChange);
                    captureElement('#modal01').style.display = 'block';
                });

                //select data by clicking select button
                self.implementElementValue(captureElement, '#branch-select');
                /*add edit event*/
                self.implementElementValue(captureElement, '#branch-edit-btn');

                import('../../../common/pagination').then(function (pagination) {
                    let paginationDriver = pagination.paginationDriver;
                    let popUpDialogBoxDriver = pagination.popUpDialogBoxDriver;

                    popUpDialogBoxDriver(
                        '#branch-delete-btn', 'Message',
                        appHost + 'system/branches/deleteBranch',
                        '#message3', function (response: any) {
                            showMessage(response, captureElement("#message"));
                        }
                    );
                    paginationDriver('ajax', appHost + 'system/branches/indexPaginationAJAX',
                        'branch-data-table', function (response: any) {
                            showMessage(response, captureElement("#message"));
                        }, function () {
                            popUpDialogBoxDriver(
                                '#branch-delete-btn', 'Message',
                                appHost + 'system/branches/deleteBranch',
                                '#message3', function (response: any) {
                                    showMessage(response, captureElement("#message"));
                                }
                            );
                            /*it will be fire on pagination*/
                            //select data by clicking select button
                            self.implementElementValue(captureElement, '#branch-select');
                            /*add edit event*/
                            self.implementElementValue(captureElement, '#branch-edit-btn');
                        }
                    );
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

    handleBranchStaffDataTableViewEvent() {
        let appHost = this.appHost;

        import('../../../common/dom').then(function (d) {
            let captureElement = d.captureElement;
            import('../../../common/message').then(function (message) {
                let showMessage = message.showMessage;
                import('../../../common/pagination').then(function (pagination) {
                    let paginationDriver = pagination.paginationDriver;
                    let popUpDialogBoxDriver = pagination.popUpDialogBoxDriver;

                    popUpDialogBoxDriver(
                        '#transferBranchStuff', 'Message', appHost + 'system/branches/transferBranchStuff',
                        '#message3', function (response: any) {
                            showMessage(response, captureElement("#message"));
                        }
                    );
                    paginationDriver('ajax', appHost + 'system/branches/usersPaginationAJAX',
                        'busers-data-table', function (response: any) {
                            showMessage(response, captureElement("#message"));
                        }, function () {
                            popUpDialogBoxDriver(
                                '#transferBranchStuff', 'Message', appHost + 'system/branches/transferBranchStuff',
                                '#message3', function (response: any) {
                                    showMessage(response, captureElement("#message"));
                                }
                            );
                        });
                }).catch(function (err) {
                    console.log(err)
                });
            }).catch(function (err) {
                console.log(err)
            });
        }).catch(function (err) {
            console.log(err)
        })
    }

    implementElementValue(select: any, element: any) {
        /*add edit event*/
        if (document.querySelectorAll(element).length !== 0) {
            document.querySelectorAll(element).forEach(function (_element: Element) {
                ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                    _element.addEventListener(event, function () {

                        select('#message2').innerHTML = '';
                        select('#modal01').style.display = 'block';
                        select('#branchEditMode').innerHTML = 'Edit';
                        select('#branch-data-btn').innerHTML = 'Update';

                        select('#branchID').value = this.getAttribute('data-id');
                        select('#branchName').value = this.getAttribute('data-name');
                        select('#branchStatus').value = this.getAttribute('data-status');
                        select('#branchLocation').value = this.getAttribute('data-location');
                    }, {passive: true});
                });
            });
        }
    }

}