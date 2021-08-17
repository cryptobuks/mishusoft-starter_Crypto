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
        let appHost = self.appHost;
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (d) {
            let captureElement = d.captureElement;
            let changeElementValueById = d.changeElementValueById;
            //init edit pad by default
            if (captureElement('#branchEditMode')) {
                captureElement('#branchEditMode').innerHTML = 'New';
                captureElement('#branch-data-btn').innerHTML = 'Save';
                captureElement('#branch-reset-btn').innerHTML = 'Reset';
            }
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
                //reset input box by clicking reset button
                captureElement('#branch-reset-btn').addEventListener('click', function () {
                    changeElementValueById([
                        { 'id': 'branchID', 'value': '' },
                        { 'id': 'branchName', 'value': '' },
                        { 'id': 'branchStatus', 'value': '' },
                        { 'id': 'branchLocation', 'value': '' },
                    ]);
                });
                //add data form by clicking add button
                captureElement('#branch-add-btn').addEventListener('click', function () {
                    captureElement('#message2').innerHTML = '';
                    captureElement('#modal01').style.display = 'block';
                    captureElement('#branchEditMode').innerHTML = 'New';
                    captureElement('#branch-data-btn').innerHTML = 'Save';
                    changeElementValueById([
                        { 'id': 'branchID', 'value': '' },
                        { 'id': 'branchName', 'value': '' },
                        { 'id': 'branchStatus', 'value': '' },
                        { 'id': 'branchLocation', 'value': '' },
                    ]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX21pc2h1c29mdF9Nb2R1bGVfU3lzdGVtX0JyYW5jaGluZ190cy5ydW50aW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxTQUFTO0lBR047SUFEWixZQUNZLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBRTNCLENBQUM7SUFFRCw4QkFBOEI7UUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFM0IsOExBQTZCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMxQyxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ3RDLElBQUksc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO1lBRXRELDBCQUEwQjtZQUMxQixJQUFJLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUNuQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNwRCxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO2dCQUN0RCxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2FBQzNEO1lBRUQsNkpBQWlDLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztnQkFDcEQsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztnQkFDdEMsMkpBQWdDLENBQUMsSUFBSSxDQUFDLFVBQVUsVUFBVTtvQkFDdEQsSUFBSSxxQkFBcUIsR0FBRyxVQUFVLENBQUMscUJBQXFCLENBQUM7b0JBQzdELDhEQUE4RDtvQkFDOUQsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87d0JBQ2xELGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxn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QUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDekUsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Q0FFSiIsInNvdXJjZXMiOlsid2VicGFjazovL01pc2h1c29mdFJ1bnRpbWUvLi9Bc3NldHMvdHlwZXNjcmlwdHMvbWlzaHVzb2Z0L01vZHVsZS9TeXN0ZW0vQnJhbmNoaW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCcmFuY2hpbmcge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXBwSG9zdDogc3RyaW5nXG4gICAgKSB7XG4gICAgfVxuXG4gICAgaGFuZGxlQnJhbmNoRGF0YVRhYmxlVmlld0V2ZW50KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBhcHBIb3N0ID0gc2VsZi5hcHBIb3N0O1xuXG4gICAgICAgIGltcG9ydCgnLi4vLi4vLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGxldCBjYXB0dXJlRWxlbWVudCA9IGQuY2FwdHVyZUVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgY2hhbmdlRWxlbWVudFZhbHVlQnlJZCA9IGQuY2hhbmdlRWxlbWVudFZhbHVlQnlJZDtcblxuICAgICAgICAgICAgLy9pbml0IGVkaXQgcGFkIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIGlmIChjYXB0dXJlRWxlbWVudCgnI2JyYW5jaEVkaXRNb2RlJykpIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2JyYW5jaEVkaXRNb2RlJykuaW5uZXJIVE1MID0gJ05ldyc7XG4gICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNicmFuY2gtZGF0YS1idG4nKS5pbm5lckhUTUwgPSAnU2F2ZSc7XG4gICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNicmFuY2gtcmVzZXQtYnRuJykuaW5uZXJIVE1MID0gJ1Jlc2V0JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1wb3J0KCcuLi8uLi8uLi9jb21tb24vbWVzc2FnZScpLnRoZW4oZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hvd01lc3NhZ2UgPSBtZXNzYWdlLnNob3dNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vLi4vLi4vY29tbW9uL2NvbW1vbicpLnRoZW4oZnVuY3Rpb24gKHZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrSW5wdXREYXRhQWJpbGl0eSA9IHZhbGlkYXRpb24uY2hlY2tJbnB1dERhdGFBYmlsaXR5O1xuICAgICAgICAgICAgICAgICAgICAvL3NldCB0ZXh0IGJveCB2YWx1ZSBjaGFuZ2UgZHluYW1pYyBhZnRlciBkcm9wYm94IGhhZCBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgICAgICBbJ2tleXVwJywgJ2NoYW5nZScsICdwYXN0ZSddLmZvckVhY2goZnVuY3Rpb24gKF9fZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYnJhbmNoTmFtZScpLmFkZEV2ZW50TGlzdGVuZXIoX19ldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVja0lucHV0RGF0YUFiaWxpdHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcEhvc3QgKyBcInN5c3RlbS9icmFuY2hlcy9jaGVja0JyYW5jaE5hbWVJbnB1dEFiaWxpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlfY29kZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhcHR1cmVFbGVtZW50KFwiI2JyYW5jaE5hbWVcIikudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJlc3BvbnNlLCBjYXB0dXJlRWxlbWVudChcIiNtZXNzYWdlMlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL2NvbW1vbi9yZXF1ZXN0JykudGhlbihmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZFJlcXVlc3QgPSByZXF1ZXN0LnNlbmRSZXF1ZXN0O1xuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgZGF0YSBieSBjbGlja2luZyBkYXRhIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2JyYW5jaC1kYXRhLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VuZFJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBhcHBIb3N0ICsgJ3N5c3RlbS9icmFuY2hlcy9tYW5hZ2VCcmFuY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogW3tuYW1lOiBcIkNvbnRlbnQtdHlwZVwiLCB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIn1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlfY29kZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNhcHR1cmVFbGVtZW50KCcjYnJhbmNoSUQnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2FwdHVyZUVsZW1lbnQoJyNicmFuY2hOYW1lJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogY2FwdHVyZUVsZW1lbnQoJyNicmFuY2hTdGF0dXMnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGNhcHR1cmVFbGVtZW50KCcjYnJhbmNoTG9jYXRpb24nKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuTmFtZTogY2FwdHVyZUVsZW1lbnQoJyNicmFuY2gtZGF0YS1idG4nKS50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJlc3BvbnNlLCBjYXB0dXJlRWxlbWVudChcIiNtZXNzYWdlMlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNhcHAtbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vcmVzZXQgaW5wdXQgYm94IGJ5IGNsaWNraW5nIHJlc2V0IGJ1dHRvblxuICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYnJhbmNoLXJlc2V0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFbGVtZW50VmFsdWVCeUlkKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnaWQnOiAnYnJhbmNoSUQnLCAndmFsdWUnOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7J2lkJzogJ2JyYW5jaE5hbWUnLCAndmFsdWUnOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7J2lkJzogJ2JyYW5jaFN0YXR1cycsICd2YWx1ZSc6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnaWQnOiAnYnJhbmNoTG9jYXRpb24nLCAndmFsdWUnOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9hZGQgZGF0YSBmb3JtIGJ5IGNsaWNraW5nIGFkZCBidXR0b25cbiAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2JyYW5jaC1hZGQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjbWVzc2FnZTInKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNtb2RhbDAxJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYnJhbmNoRWRpdE1vZGUnKS5pbm5lckhUTUwgPSAnTmV3JztcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNicmFuY2gtZGF0YS1idG4nKS5pbm5lckhUTUwgPSAnU2F2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUVsZW1lbnRWYWx1ZUJ5SWQoW1xuICAgICAgICAgICAgICAgICAgICAgICAgeydpZCc6ICdicmFuY2hJRCcsICd2YWx1ZSc6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnaWQnOiAnYnJhbmNoTmFtZScsICd2YWx1ZSc6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnaWQnOiAnYnJhbmNoU3RhdHVzJywgJ3ZhbHVlJzogJyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeydpZCc6ICdicmFuY2hMb2NhdGlvbicsICd2YWx1ZSc6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvL3NlbGVjdCBkYXRhIGJ5IGNsaWNraW5nIHNlbGVjdCBidXR0b25cbiAgICAgICAgICAgICAgICBzZWxmLmltcGxlbWVudEVsZW1lbnRWYWx1ZShjYXB0dXJlRWxlbWVudCwgJyNicmFuY2gtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgLyphZGQgZWRpdCBldmVudCovXG4gICAgICAgICAgICAgICAgc2VsZi5pbXBsZW1lbnRFbGVtZW50VmFsdWUoY2FwdHVyZUVsZW1lbnQsICcjYnJhbmNoLWVkaXQtYnRuJyk7XG5cbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL2NvbW1vbi9wYWdpbmF0aW9uJykudGhlbihmdW5jdGlvbiAocGFnaW5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnaW5hdGlvbkRyaXZlciA9IHBhZ2luYXRpb24ucGFnaW5hdGlvbkRyaXZlcjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcFVwRGlhbG9nQm94RHJpdmVyID0gcGFnaW5hdGlvbi5wb3BVcERpYWxvZ0JveERyaXZlcjtcblxuICAgICAgICAgICAgICAgICAgICBwb3BVcERpYWxvZ0JveERyaXZlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICcjYnJhbmNoLWRlbGV0ZS1idG4nLCAnTWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBIb3N0ICsgJ3N5c3RlbS9icmFuY2hlcy9kZWxldGVCcmFuY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyNtZXNzYWdlMycsIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UocmVzcG9uc2UsIGNhcHR1cmVFbGVtZW50KFwiI21lc3NhZ2VcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRHJpdmVyKCdhamF4JywgYXBwSG9zdCArICdzeXN0ZW0vYnJhbmNoZXMvaW5kZXhQYWdpbmF0aW9uQUpBWCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYnJhbmNoLWRhdGEtdGFibGUnLCBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJlc3BvbnNlLCBjYXB0dXJlRWxlbWVudChcIiNtZXNzYWdlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BVcERpYWxvZ0JveERyaXZlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyNicmFuY2gtZGVsZXRlLWJ0bicsICdNZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSG9zdCArICdzeXN0ZW0vYnJhbmNoZXMvZGVsZXRlQnJhbmNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyNtZXNzYWdlMycsIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShyZXNwb25zZSwgY2FwdHVyZUVsZW1lbnQoXCIjbWVzc2FnZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qaXQgd2lsbCBiZSBmaXJlIG9uIHBhZ2luYXRpb24qL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZWN0IGRhdGEgYnkgY2xpY2tpbmcgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW1wbGVtZW50RWxlbWVudFZhbHVlKGNhcHR1cmVFbGVtZW50LCAnI2JyYW5jaC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmFkZCBlZGl0IGV2ZW50Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmltcGxlbWVudEVsZW1lbnRWYWx1ZShjYXB0dXJlRWxlbWVudCwgJyNicmFuY2gtZWRpdC1idG4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUJyYW5jaFN0YWZmRGF0YVRhYmxlVmlld0V2ZW50KCkge1xuICAgICAgICBsZXQgYXBwSG9zdCA9IHRoaXMuYXBwSG9zdDtcblxuICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL2NvbW1vbi9kb20nKS50aGVuKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBsZXQgY2FwdHVyZUVsZW1lbnQgPSBkLmNhcHR1cmVFbGVtZW50O1xuICAgICAgICAgICAgaW1wb3J0KCcuLi8uLi8uLi9jb21tb24vbWVzc2FnZScpLnRoZW4oZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hvd01lc3NhZ2UgPSBtZXNzYWdlLnNob3dNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vLi4vLi4vY29tbW9uL3BhZ2luYXRpb24nKS50aGVuKGZ1bmN0aW9uIChwYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWdpbmF0aW9uRHJpdmVyID0gcGFnaW5hdGlvbi5wYWdpbmF0aW9uRHJpdmVyO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wVXBEaWFsb2dCb3hEcml2ZXIgPSBwYWdpbmF0aW9uLnBvcFVwRGlhbG9nQm94RHJpdmVyO1xuXG4gICAgICAgICAgICAgICAgICAgIHBvcFVwRGlhbG9nQm94RHJpdmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgJyN0cmFuc2ZlckJyYW5jaFN0dWZmJywgJ01lc3NhZ2UnLCBhcHBIb3N0ICsgJ3N5c3RlbS9icmFuY2hlcy90cmFuc2ZlckJyYW5jaFN0dWZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICcjbWVzc2FnZTMnLCBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJlc3BvbnNlLCBjYXB0dXJlRWxlbWVudChcIiNtZXNzYWdlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkRyaXZlcignYWpheCcsIGFwcEhvc3QgKyAnc3lzdGVtL2JyYW5jaGVzL3VzZXJzUGFnaW5hdGlvbkFKQVgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2J1c2Vycy1kYXRhLXRhYmxlJywgZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShyZXNwb25zZSwgY2FwdHVyZUVsZW1lbnQoXCIjbWVzc2FnZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wVXBEaWFsb2dCb3hEcml2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcjdHJhbnNmZXJCcmFuY2hTdHVmZicsICdNZXNzYWdlJywgYXBwSG9zdCArICdzeXN0ZW0vYnJhbmNoZXMvdHJhbnNmZXJCcmFuY2hTdHVmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcjbWVzc2FnZTMnLCBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UocmVzcG9uc2UsIGNhcHR1cmVFbGVtZW50KFwiI21lc3NhZ2VcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaW1wbGVtZW50RWxlbWVudFZhbHVlKHNlbGVjdDogYW55LCBlbGVtZW50OiBhbnkpIHtcbiAgICAgICAgLyphZGQgZWRpdCBldmVudCovXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChfZWxlbWVudDogRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snLCAndG91Y2hzdGFydCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdCgnI21lc3NhZ2UyJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QoJyNtb2RhbDAxJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QoJyNicmFuY2hFZGl0TW9kZScpLmlubmVySFRNTCA9ICdFZGl0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdCgnI2JyYW5jaC1kYXRhLWJ0bicpLmlubmVySFRNTCA9ICdVcGRhdGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0KCcjYnJhbmNoSUQnKS52YWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QoJyNicmFuY2hOYW1lJykudmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QoJyNicmFuY2hTdGF0dXMnKS52YWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0KCcjYnJhbmNoTG9jYXRpb24nKS52YWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWxvY2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHtwYXNzaXZlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==