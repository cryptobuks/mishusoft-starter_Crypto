"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_mishusoft_Module_System_Branching_ts"],{

/***/ "./Assets/typescripts/mishusoft/Module/System/Branching.ts":
/*!*****************************************************************!*\
  !*** ./Assets/typescripts/mishusoft/Module/System/Branching.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Branching": () => (/* binding */ Branching)
/* harmony export */ });
class Branching {
    appHost;
    constructor(appHost) {
        this.appHost = appHost;
    }
    handleBranchDataTableViewEvent() {
        let self = this;
        let appHost = this.appHost;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (d) {
            let captureElement = d.captureElement;
            let changeElementValueById = d.changeElementValueById;
            let changeElementAttributeValue = d.changeElementAttributeValue;
            //init edit pad by default
            changeElementAttributeValue('#branchEditMode', [
                { key: '#branchEditMode', attribute: 'innerHTML', value: 'New' },
                { key: '#branch-data-btn', attribute: 'innerHTML', value: 'Save' },
                { key: '#branch-reset-btn', attribute: 'innerHTML', value: 'Reset' },
            ]);
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/message */ "./Assets/typescripts/common/message.ts")).then(function (message) {
                let showMessage = message.showMessage;
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/common */ "./Assets/typescripts/common/common.ts")).then(function (validation) {
                    let checkInputDataAbility = validation.checkInputDataAbility;
                    //set text box value change dynamic after dropbox had changed.
                    ['keyup', 'change', 'paste'].forEach(function (__event) {
                        captureElement('#branchName').addEventListener(__event, function () {
                            return checkInputDataAbility(appHost + "system/branches/checkBranchNameInputAbility", {
                                security_code: 1,
                                name: "name",
                                value: captureElement("#branchName").value
                            }, function (response) {
                                showMessage(response, captureElement("#message2"));
                            });
                        });
                    });
                }).catch(function (err) {
                    console.log(err);
                });
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
                    let sendRequest = request.sendRequest;
                    //save data by clicking data button
                    captureElement('#branch-data-btn').addEventListener('click', function () {
                        captureElement('#app-loader').style.display = 'block';
                        return sendRequest({
                            method: "POST",
                            url: appHost + 'system/branches/manageBranch',
                            async: true,
                            header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                            data: {
                                security_code: 1,
                                id: captureElement('#branchID').value,
                                name: captureElement('#branchName').value,
                                status: captureElement('#branchStatus').value,
                                location: captureElement('#branchLocation').value,
                                btnName: captureElement('#branch-data-btn').textContent
                            },
                        }, (response) => {
                            showMessage(response, captureElement("#message2"));
                            captureElement('#app-loader').style.display = 'none';
                        });
                    });
                }).catch(function (err) {
                    console.log(err);
                });
                let needChange = [
                    { 'id': 'branchID', 'value': '' },
                    { 'id': 'branchName', 'value': '' },
                    { 'id': 'branchStatus', 'value': '' },
                    { 'id': 'branchLocation', 'value': '' },
                ];
                //reset input box by clicking reset button
                captureElement('#branch-reset-btn').addEventListener('click', function () {
                    changeElementValueById(needChange);
                });
                //add data form by clicking add button
                captureElement('#branch-add-btn').addEventListener('click', function () {
                    changeElementAttributeValue('#branchEditMode', [
                        { key: '#message2', attribute: 'innerHTML', value: '' },
                        { key: '#branchEditMode', attribute: 'innerHTML', value: 'New' },
                        { key: '#branch-data-btn', attribute: 'innerHTML', value: 'Save' },
                    ]);
                    changeElementValueById(needChange);
                    captureElement('#modal01').style.display = 'block';
                });
                //select data by clicking select button
                self.implementElementValue(captureElement, '#branch-select');
                /*add edit event*/
                self.implementElementValue(captureElement, '#branch-edit-btn');
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/pagination */ "./Assets/typescripts/common/pagination.ts")).then(function (pagination) {
                    let paginationDriver = pagination.paginationDriver;
                    let popUpDialogBoxDriver = pagination.popUpDialogBoxDriver;
                    popUpDialogBoxDriver('#branch-delete-btn', 'Message', appHost + 'system/branches/deleteBranch', '#message3', function (response) {
                        showMessage(response, captureElement("#message"));
                    });
                    paginationDriver('ajax', appHost + 'system/branches/indexPaginationAJAX', 'branch-data-table', function (response) {
                        showMessage(response, captureElement("#message"));
                    }, function () {
                        popUpDialogBoxDriver('#branch-delete-btn', 'Message', appHost + 'system/branches/deleteBranch', '#message3', function (response) {
                            showMessage(response, captureElement("#message"));
                        });
                        /*it will be fire on pagination*/
                        //select data by clicking select button
                        self.implementElementValue(captureElement, '#branch-select');
                        /*add edit event*/
                        self.implementElementValue(captureElement, '#branch-edit-btn');
                    });
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
    handleBranchStaffDataTableViewEvent() {
        let appHost = this.appHost;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (d) {
            let captureElement = d.captureElement;
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/message */ "./Assets/typescripts/common/message.ts")).then(function (message) {
                let showMessage = message.showMessage;
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/pagination */ "./Assets/typescripts/common/pagination.ts")).then(function (pagination) {
                    let paginationDriver = pagination.paginationDriver;
                    let popUpDialogBoxDriver = pagination.popUpDialogBoxDriver;
                    popUpDialogBoxDriver('#transferBranchStuff', 'Message', appHost + 'system/branches/transferBranchStuff', '#message3', function (response) {
                        showMessage(response, captureElement("#message"));
                    });
                    paginationDriver('ajax', appHost + 'system/branches/usersPaginationAJAX', 'busers-data-table', function (response) {
                        showMessage(response, captureElement("#message"));
                    }, function () {
                        popUpDialogBoxDriver('#transferBranchStuff', 'Message', appHost + 'system/branches/transferBranchStuff', '#message3', function (response) {
                            showMessage(response, captureElement("#message"));
                        });
                    });
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
    implementElementValue(select, element) {
        /*add edit event*/
        if (document.querySelectorAll(element).length !== 0) {
            document.querySelectorAll(element).forEach(function (_element) {
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
                    }, { passive: true });
                });
            });
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX21pc2h1c29mdF9Nb2R1bGVfU3lzdGVtX0JyYW5jaGluZ190cy5ydW50aW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxTQUFTO0lBR047SUFEWixZQUNZLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBRTNCLENBQUM7SUFFRCw4QkFBOEI7UUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFM0IsOExBQTZCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMxQyxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ3RDLElBQUksc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO1lBQ3RELElBQUksMkJBQTJCLEdBQUcsQ0FBQyxDQUFDLDJCQUEyQixDQUFDO1lBRWhFLDBCQUEwQjtZQUUxQiwyQkFBMkIsQ0FBQyxpQkFBaUIsRUFBQztnQkFDMUMsRUFBQyxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDO2dCQUM5RCxFQUFDLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7Z0JBQ2hFLEVBQUMsR0FBRyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQzthQUNyRSxDQUFDLENBQUM7WUFFSCw2SkFBaUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxPQUFPO2dCQUNwRCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO2dCQUN0QywySkFBZ0MsQ0FBQyxJQUFJLENBQUMsVUFBVSxVQUFVO29CQUN0RCxJQUFJLHFCQUFxQixHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDN0Qs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LENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDekUsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Q0FFSiIsInNvdXJjZXMiOlsid2VicGFjazovL01pc2h1c29mdFJ1bnRpbWUvLi9Bc3NldHMvdHlwZXNjcmlwdHMvbWlzaHVzb2Z0L01vZHVsZS9TeXN0ZW0vQnJhbmNoaW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCcmFuY2hpbmcge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXBwSG9zdDogc3RyaW5nXG4gICAgKSB7XG4gICAgfVxuXG4gICAgaGFuZGxlQnJhbmNoRGF0YVRhYmxlVmlld0V2ZW50KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBhcHBIb3N0ID0gdGhpcy5hcHBIb3N0O1xuXG4gICAgICAgIGltcG9ydCgnLi4vLi4vLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGxldCBjYXB0dXJlRWxlbWVudCA9IGQuY2FwdHVyZUVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgY2hhbmdlRWxlbWVudFZhbHVlQnlJZCA9IGQuY2hhbmdlRWxlbWVudFZhbHVlQnlJZDtcbiAgICAgICAgICAgIGxldCBjaGFuZ2VFbGVtZW50QXR0cmlidXRlVmFsdWUgPSBkLmNoYW5nZUVsZW1lbnRBdHRyaWJ1dGVWYWx1ZTtcblxuICAgICAgICAgICAgLy9pbml0IGVkaXQgcGFkIGJ5IGRlZmF1bHRcblxuICAgICAgICAgICAgY2hhbmdlRWxlbWVudEF0dHJpYnV0ZVZhbHVlKCcjYnJhbmNoRWRpdE1vZGUnLFtcbiAgICAgICAgICAgICAgICB7a2V5OiAnI2JyYW5jaEVkaXRNb2RlJywgYXR0cmlidXRlOiAnaW5uZXJIVE1MJywgdmFsdWU6ICdOZXcnfSxcbiAgICAgICAgICAgICAgICB7a2V5OiAnI2JyYW5jaC1kYXRhLWJ0bicsIGF0dHJpYnV0ZTogJ2lubmVySFRNTCcsIHZhbHVlOiAnU2F2ZSd9LFxuICAgICAgICAgICAgICAgIHtrZXk6ICcjYnJhbmNoLXJlc2V0LWJ0bicsIGF0dHJpYnV0ZTogJ2lubmVySFRNTCcsIHZhbHVlOiAnUmVzZXQnfSxcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL2NvbW1vbi9tZXNzYWdlJykudGhlbihmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGxldCBzaG93TWVzc2FnZSA9IG1lc3NhZ2Uuc2hvd01lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuLi8uLi8uLi9jb21tb24vY29tbW9uJykudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tJbnB1dERhdGFBYmlsaXR5ID0gdmFsaWRhdGlvbi5jaGVja0lucHV0RGF0YUFiaWxpdHk7XG4gICAgICAgICAgICAgICAgICAgIC8vc2V0IHRleHQgYm94IHZhbHVlIGNoYW5nZSBkeW5hbWljIGFmdGVyIGRyb3Bib3ggaGFkIGNoYW5nZWQuXG4gICAgICAgICAgICAgICAgICAgIFsna2V5dXAnLCAnY2hhbmdlJywgJ3Bhc3RlJ10uZm9yRWFjaChmdW5jdGlvbiAoX19ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNicmFuY2hOYW1lJykuYWRkRXZlbnRMaXN0ZW5lcihfX2V2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrSW5wdXREYXRhQWJpbGl0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSG9zdCArIFwic3lzdGVtL2JyYW5jaGVzL2NoZWNrQnJhbmNoTmFtZUlucHV0QWJpbGl0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eV9jb2RlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2FwdHVyZUVsZW1lbnQoXCIjYnJhbmNoTmFtZVwiKS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UocmVzcG9uc2UsIGNhcHR1cmVFbGVtZW50KFwiI21lc3NhZ2UyXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vLi4vLi4vY29tbW9uL3JlcXVlc3QnKS50aGVuKGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kUmVxdWVzdCA9IHJlcXVlc3Quc2VuZFJlcXVlc3Q7XG4gICAgICAgICAgICAgICAgICAgIC8vc2F2ZSBkYXRhIGJ5IGNsaWNraW5nIGRhdGEgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYnJhbmNoLWRhdGEtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZW5kUmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGFwcEhvc3QgKyAnc3lzdGVtL2JyYW5jaGVzL21hbmFnZUJyYW5jaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBbe25hbWU6IFwiQ29udGVudC10eXBlXCIsIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwifV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eV9jb2RlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogY2FwdHVyZUVsZW1lbnQoJyNicmFuY2hJRCcpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjYXB0dXJlRWxlbWVudCgnI2JyYW5jaE5hbWUnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBjYXB0dXJlRWxlbWVudCgnI2JyYW5jaFN0YXR1cycpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogY2FwdHVyZUVsZW1lbnQoJyNicmFuY2hMb2NhdGlvbicpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5OYW1lOiBjYXB0dXJlRWxlbWVudCgnI2JyYW5jaC1kYXRhLWJ0bicpLnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UocmVzcG9uc2UsIGNhcHR1cmVFbGVtZW50KFwiI21lc3NhZ2UyXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5lZWRDaGFuZ2UgPSBbXG4gICAgICAgICAgICAgICAgICAgIHsnaWQnOiAnYnJhbmNoSUQnLCAndmFsdWUnOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHsnaWQnOiAnYnJhbmNoTmFtZScsICd2YWx1ZSc6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAgeydpZCc6ICdicmFuY2hTdGF0dXMnLCAndmFsdWUnOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHsnaWQnOiAnYnJhbmNoTG9jYXRpb24nLCAndmFsdWUnOiAnJ30sXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIC8vcmVzZXQgaW5wdXQgYm94IGJ5IGNsaWNraW5nIHJlc2V0IGJ1dHRvblxuICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYnJhbmNoLXJlc2V0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFbGVtZW50VmFsdWVCeUlkKG5lZWRDaGFuZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9hZGQgZGF0YSBmb3JtIGJ5IGNsaWNraW5nIGFkZCBidXR0b25cbiAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2JyYW5jaC1hZGQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUVsZW1lbnRBdHRyaWJ1dGVWYWx1ZSgnI2JyYW5jaEVkaXRNb2RlJyxbXG4gICAgICAgICAgICAgICAgICAgICAgICB7a2V5OiAnI21lc3NhZ2UyJywgYXR0cmlidXRlOiAnaW5uZXJIVE1MJywgdmFsdWU6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtrZXk6ICcjYnJhbmNoRWRpdE1vZGUnLCBhdHRyaWJ1dGU6ICdpbm5lckhUTUwnLCB2YWx1ZTogJ05ldyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2tleTogJyNicmFuY2gtZGF0YS1idG4nLCBhdHRyaWJ1dGU6ICdpbm5lckhUTUwnLCB2YWx1ZTogJ1NhdmUnfSxcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUVsZW1lbnRWYWx1ZUJ5SWQobmVlZENoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjbW9kYWwwMScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9zZWxlY3QgZGF0YSBieSBjbGlja2luZyBzZWxlY3QgYnV0dG9uXG4gICAgICAgICAgICAgICAgc2VsZi5pbXBsZW1lbnRFbGVtZW50VmFsdWUoY2FwdHVyZUVsZW1lbnQsICcjYnJhbmNoLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgIC8qYWRkIGVkaXQgZXZlbnQqL1xuICAgICAgICAgICAgICAgIHNlbGYuaW1wbGVtZW50RWxlbWVudFZhbHVlKGNhcHR1cmVFbGVtZW50LCAnI2JyYW5jaC1lZGl0LWJ0bicpO1xuXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuLi8uLi8uLi9jb21tb24vcGFnaW5hdGlvbicpLnRoZW4oZnVuY3Rpb24gKHBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2luYXRpb25Ecml2ZXIgPSBwYWdpbmF0aW9uLnBhZ2luYXRpb25Ecml2ZXI7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3BVcERpYWxvZ0JveERyaXZlciA9IHBhZ2luYXRpb24ucG9wVXBEaWFsb2dCb3hEcml2ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9wVXBEaWFsb2dCb3hEcml2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAnI2JyYW5jaC1kZWxldGUtYnRuJywgJ01lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSG9zdCArICdzeXN0ZW0vYnJhbmNoZXMvZGVsZXRlQnJhbmNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICcjbWVzc2FnZTMnLCBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJlc3BvbnNlLCBjYXB0dXJlRWxlbWVudChcIiNtZXNzYWdlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkRyaXZlcignYWpheCcsIGFwcEhvc3QgKyAnc3lzdGVtL2JyYW5jaGVzL2luZGV4UGFnaW5hdGlvbkFKQVgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JyYW5jaC1kYXRhLXRhYmxlJywgZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShyZXNwb25zZSwgY2FwdHVyZUVsZW1lbnQoXCIjbWVzc2FnZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wVXBEaWFsb2dCb3hEcml2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcjYnJhbmNoLWRlbGV0ZS1idG4nLCAnTWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcEhvc3QgKyAnc3lzdGVtL2JyYW5jaGVzL2RlbGV0ZUJyYW5jaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcjbWVzc2FnZTMnLCBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UocmVzcG9uc2UsIGNhcHR1cmVFbGVtZW50KFwiI21lc3NhZ2VcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKml0IHdpbGwgYmUgZmlyZSBvbiBwYWdpbmF0aW9uKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGVjdCBkYXRhIGJ5IGNsaWNraW5nIHNlbGVjdCBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmltcGxlbWVudEVsZW1lbnRWYWx1ZShjYXB0dXJlRWxlbWVudCwgJyNicmFuY2gtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyphZGQgZWRpdCBldmVudCovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbXBsZW1lbnRFbGVtZW50VmFsdWUoY2FwdHVyZUVsZW1lbnQsICcjYnJhbmNoLWVkaXQtYnRuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQnJhbmNoU3RhZmZEYXRhVGFibGVWaWV3RXZlbnQoKSB7XG4gICAgICAgIGxldCBhcHBIb3N0ID0gdGhpcy5hcHBIb3N0O1xuXG4gICAgICAgIGltcG9ydCgnLi4vLi4vLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGxldCBjYXB0dXJlRWxlbWVudCA9IGQuY2FwdHVyZUVsZW1lbnQ7XG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL2NvbW1vbi9tZXNzYWdlJykudGhlbihmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGxldCBzaG93TWVzc2FnZSA9IG1lc3NhZ2Uuc2hvd01lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuLi8uLi8uLi9jb21tb24vcGFnaW5hdGlvbicpLnRoZW4oZnVuY3Rpb24gKHBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2luYXRpb25Ecml2ZXIgPSBwYWdpbmF0aW9uLnBhZ2luYXRpb25Ecml2ZXI7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3BVcERpYWxvZ0JveERyaXZlciA9IHBhZ2luYXRpb24ucG9wVXBEaWFsb2dCb3hEcml2ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9wVXBEaWFsb2dCb3hEcml2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAnI3RyYW5zZmVyQnJhbmNoU3R1ZmYnLCAnTWVzc2FnZScsIGFwcEhvc3QgKyAnc3lzdGVtL2JyYW5jaGVzL3RyYW5zZmVyQnJhbmNoU3R1ZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyNtZXNzYWdlMycsIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UocmVzcG9uc2UsIGNhcHR1cmVFbGVtZW50KFwiI21lc3NhZ2VcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRHJpdmVyKCdhamF4JywgYXBwSG9zdCArICdzeXN0ZW0vYnJhbmNoZXMvdXNlcnNQYWdpbmF0aW9uQUpBWCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYnVzZXJzLWRhdGEtdGFibGUnLCBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJlc3BvbnNlLCBjYXB0dXJlRWxlbWVudChcIiNtZXNzYWdlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BVcERpYWxvZ0JveERyaXZlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyN0cmFuc2ZlckJyYW5jaFN0dWZmJywgJ01lc3NhZ2UnLCBhcHBIb3N0ICsgJ3N5c3RlbS9icmFuY2hlcy90cmFuc2ZlckJyYW5jaFN0dWZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyNtZXNzYWdlMycsIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShyZXNwb25zZSwgY2FwdHVyZUVsZW1lbnQoXCIjbWVzc2FnZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpbXBsZW1lbnRFbGVtZW50VmFsdWUoc2VsZWN0OiBhbnksIGVsZW1lbnQ6IGFueSkge1xuICAgICAgICAvKmFkZCBlZGl0IGV2ZW50Ki9cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQpLmZvckVhY2goZnVuY3Rpb24gKF9lbGVtZW50OiBFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgWydjbGljaycsICdkYmxjbGljaycsICd0b3VjaHN0YXJ0J10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QoJyNtZXNzYWdlMicpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0KCcjbW9kYWwwMScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0KCcjYnJhbmNoRWRpdE1vZGUnKS5pbm5lckhUTUwgPSAnRWRpdCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QoJyNicmFuY2gtZGF0YS1idG4nKS5pbm5lckhUTUwgPSAnVXBkYXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0KCcjYnJhbmNoSUQnKS52YWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QoJyNicmFuY2hOYW1lJykudmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QoJyNicmFuY2hTdGF0dXMnKS52YWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0KCcjYnJhbmNoTG9jYXRpb24nKS52YWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWxvY2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHtwYXNzaXZlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==