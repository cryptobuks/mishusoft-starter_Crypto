import {captureElement} from "../../../common/dom";

export class Modules {
    constructor(
        private appHost: string
    ) {
    }

    handleModuleManagement(){
        let self = this;
        let appHost = this.appHost;

        import('../../../common/dom').then(function (dom) {
            let captureElement = dom.captureElement;
            let changeElementValueById = dom.changeElementValueById;
            let changeElementAttributeValue = dom.changeElementAttributeValue;


            if (captureElement('#modules-data-table') !== undefined) {
                //init edit pad by default
                changeElementAttributeValue('#moduleEditMode',[
                    {key: '#moduleEditMode', attribute: 'innerHTML', value: 'New'},
                    {key: '#module-data-btn', attribute: 'innerHTML', value: 'Save'},
                    {key: '#module-reset-btn', attribute: 'innerHTML', value: 'Reset'},
                ]);

                import('../../../common/message').then(function (message) {
                    let showMessage = message.showMessage;
                    import('../../../common/request').then(function (request) {
                        let sendRequest = request.sendRequest;
                        //save data by clicking data button
                        captureElement('#module-data-btn').addEventListener('click', function () {
                            captureElement('#app-loader').style.display = 'block';
                            return sendRequest({
                                method: "POST",
                                url: appHost + 'system/modules/updateModule',
                                async: true,
                                header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
                                data: {
                                    security_code: 1,
                                    id: captureElement('#moduleID').value,
                                    status: captureElement('#moduleStatus').value,
                                    btnName: 'Update'
                                },
                            }, (response: any) => {
                                showMessage(response, captureElement("#message2"));
                                captureElement('#app-loader').style.display = 'none';
                            });
                        });
                    }).catch(function (err) {
                        console.log(err)
                    });

                    //reset inputbox by clicking reset button
                    captureElement('#module-reset-btn').addEventListener('click', function () {
                        changeElementValueById([
                            {'id': 'moduleStatus', 'value': ''},
                        ]);
                    });

                    //add data form by clicking add button
                    captureElement('#module-add-btn').addEventListener('click', function () {
                        self.makeEmptyMessage(captureElement)
                        self.makeElementDisplayVisibility([
                            {identifier:'#modal01', visibility:'block'},
                            {identifier:'#moduleUploadPad', visibility:'block'},
                            {identifier:'#UploadStatusBoard', visibility:'none'},
                            {identifier:'#moduleEditPAD', visibility:'none'},
                            {identifier:'#module-data-btn', visibility:'none'},
                            {identifier:'#module-reset-btn', visibility:'none'},
                        ])

                    });
                    //show select file name on status bar
                    captureElement('#moduleFile').addEventListener('change', function () {
                        let file = captureElement('#moduleFile').files[0];
                        captureElement('#upload_status').innerHTML = file.name + ' selected';

                        captureElement('#UploadStatusBoard').style.display = 'block';
                        captureElement('#progressbar').style.display = 'none';
                    });

                    //upload file by clicking button
                    import('../../../common/upload').then(function (uploadModule) {
                        captureElement('#uploadModuleFile').addEventListener('click', function () {
                            uploadModule.uploadFile(
                                'moduleFile',
                                'moduleFile',
                                appHost + 'system/modules/uploadTARGZ'
                            );
                        });
                    }).catch(function (err) {
                        console.log(err);
                    });

                    //select data by clicking select button
                    if (document.querySelectorAll('#module-select').length !== 0) {
                        document.querySelectorAll('#module-select').forEach(function (__selector: Element) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                __selector.addEventListener(event, function () {
                                    if (this.checked) {
                                        self.makeEmptyMessage(captureElement)

                                        changeElementAttributeValue('#moduleEditMode',[
                                            {key: '#moduleEditMode', attribute: 'innerHTML', value: 'Edit'},
                                            {key: '#module-data-btn', attribute: 'innerHTML', value: 'Update'},
                                        ]);

                                        self.makeElementDisplayVisibility([
                                            {identifier:'#modal01', visibility:'block'},
                                            {identifier:'#moduleUploadPad', visibility:'none'},
                                            {identifier:'#moduleEditPAD', visibility:'block'},
                                            {identifier:'#module-data-btn', visibility:'block'},
                                            {identifier:'#module-reset-btn', visibility:'block'},
                                        ])

                                        captureElement('#moduleName').setAttribute('disabled', 'disabled');
                                        captureElement('#moduleLocation').setAttribute('disabled', 'disabled');

                                        captureElement('#moduleID').value = this.getAttribute('data-id');
                                        captureElement('#moduleName').value = this.getAttribute('data-name');
                                        captureElement('#moduleLocation').value = this.getAttribute('data-location');
                                        captureElement('#moduleStatus').value = this.getAttribute('data-status');
                                    }
                                }, {passive: true});
                            });
                        });
                    }

                    /*add edit event*/
                    if (document.querySelectorAll('#module-edit-btn').length !== 0) {
                        document.querySelectorAll('#module-edit-btn').forEach(function (_button: Element) {
                            ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                _button.addEventListener(event, function () {
                                    self.makeEmptyMessage(captureElement)

                                    changeElementAttributeValue('#moduleEditMode',[
                                        {key: '#moduleEditMode', attribute: 'innerHTML', value: 'Edit'},
                                        {key: '#module-data-btn', attribute: 'innerHTML', value: 'Update'},
                                    ]);

                                    self.makeElementDisplayVisibility([
                                        {identifier:'#modal01', visibility:'block'},
                                        {identifier:'#moduleUploadPad', visibility:'none'},
                                        {identifier:'#moduleEditPAD', visibility:'block'},
                                        {identifier:'#module-data-btn', visibility:'block'},
                                        {identifier:'#module-reset-btn', visibility:'block'},
                                    ])

                                    captureElement('#moduleName').setAttribute('disabled', 'disabled');
                                    captureElement('#moduleLocation').setAttribute('disabled', 'disabled');

                                    captureElement('#moduleID').value = this.getAttribute('data-id');
                                    captureElement('#moduleName').value = this.getAttribute('data-name');
                                    captureElement('#moduleLocation').value = this.getAttribute('data-location');
                                    captureElement('#moduleStatus').value = this.getAttribute('data-status');
                                }, {passive: true});
                            });
                        });
                    }

                    import('../../../common/pagination').then(function (pagination) {
                        let paginationDriver = pagination.paginationDriver;
                        let popUpDialogBoxDriver = pagination.popUpDialogBoxDriver;

                        popUpDialogBoxDriver(
                            '#module-delete-btn', 'Message', appHost + 'system/modules/deleteModule',
                            '#message3', function (response: any) {
                                showMessage(response, captureElement("#message"));
                            }
                        );
                        paginationDriver('ajax', appHost + 'system/modules/indexPaginationAJAX',
                            'modules-data-table', function (response: any) {
                                showMessage(response, captureElement("#message"));
                            }, function () {
                                popUpDialogBoxDriver(
                                    '#module-delete-btn', 'Message', appHost + 'system/modules/deleteModule',
                                    '#message3', function (response: any) {
                                        showMessage(response, captureElement("#message"));
                                    }
                                );
                                /*it will be fire on pagination*/

                                //select data by clicking select button
                                if (document.querySelectorAll('#module-select').length !== 0) {
                                    document.querySelectorAll('#module-select').forEach(function (__selector: Element) {
                                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                            __selector.addEventListener(event, function () {
                                                if (this.checked) {
                                                    self.makeEmptyMessage(captureElement)


                                                    changeElementAttributeValue('#moduleEditMode',[
                                                        {key: '#moduleEditMode', attribute: 'innerHTML', value: 'Edit'},
                                                        {key: '#module-data-btn', attribute: 'innerHTML', value: 'Update'},
                                                    ]);

                                                    self.makeElementDisplayVisibility([
                                                        {identifier:'#modal01', visibility:'block'},
                                                        {identifier:'#moduleUploadPad', visibility:'none'},
                                                        {identifier:'#moduleEditPAD', visibility:'block'},
                                                        {identifier:'#module-data-btn', visibility:'block'},
                                                        {identifier:'#module-reset-btn', visibility:'block'},
                                                    ])

                                                    captureElement('#moduleName').setAttribute('disabled', 'disabled');
                                                    captureElement('#moduleLocation').setAttribute('disabled', 'disabled');

                                                    captureElement('#moduleID').value = this.getAttribute('data-id');
                                                    captureElement('#moduleName').value = this.getAttribute('data-name');
                                                    captureElement('#moduleLocation').value = this.getAttribute('data-location');
                                                    captureElement('#moduleStatus').value = this.getAttribute('data-status');
                                                }
                                            }, {passive: true});
                                        });
                                    });
                                }

                                /*add edit event*/
                                if (document.querySelectorAll('#module-edit-btn').length !== 0) {
                                    document.querySelectorAll('#module-edit-btn').forEach(function (_button: Element) {
                                        ['click', 'dblclick', 'touchstart'].forEach(function (event) {
                                            _button.addEventListener(event, function () {
                                                self.makeEmptyMessage(captureElement)

                                                changeElementAttributeValue('#moduleEditMode',[
                                                    {key: '#moduleEditMode', attribute: 'innerHTML', value: 'Edit'},
                                                    {key: '#module-data-btn', attribute: 'innerHTML', value: 'Update'},
                                                ]);

                                                self.makeElementDisplayVisibility([
                                                    {identifier:'#modal01', visibility:'block'},
                                                    {identifier:'#moduleUploadPad', visibility:'none'},
                                                    {identifier:'#moduleEditPAD', visibility:'block'},
                                                    {identifier:'#module-data-btn', visibility:'block'},
                                                    {identifier:'#module-reset-btn', visibility:'block'},
                                                ])

                                                captureElement('#moduleName').setAttribute('disabled', 'disabled');
                                                captureElement('#moduleLocation').setAttribute('disabled', 'disabled');

                                                captureElement('#moduleID').value = this.getAttribute('data-id');
                                                captureElement('#moduleName').value = this.getAttribute('data-name');
                                                captureElement('#moduleLocation').value = this.getAttribute('data-location');
                                                captureElement('#moduleStatus').value = this.getAttribute('data-status');
                                            }, {passive: true});
                                        });
                                    });
                                }
                            }
                        );
                    }).catch(function (err) {
                        console.log(err)
                    });
                }).catch(function (err) {
                    console.log(err)
                });
            }
        }).catch(function (err) {
            console.log(err)
        });
    }

    makeEmptyMessage(select: any){
        select('#message2').innerHTML = '';
    }

    makeElementDisplayVisibility(elements: any[]){
        if (elements.length > 0){
            for (let i = 0; i < elements.length; i++) {
                captureElement(elements[i].identifier).style.display = elements[i].visibility;
            }
        }
    }


    makeReadyForUpdate(query: any){
        query('#moduleEditMode',[
            {key: '#moduleEditMode', attribute: 'innerHTML', value: 'Edit'},
            {key: '#module-data-btn', attribute: 'innerHTML', value: 'Update'},
        ]);
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