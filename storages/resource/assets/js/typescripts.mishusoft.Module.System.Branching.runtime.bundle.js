(self["webpackChunk"] = self["webpackChunk"] || []).push([["typescripts_mishusoft_Module_System_Branching_ts"],{

/***/ "./typescripts/mishusoft/Module/System/Branching.ts":
/*!**********************************************************!*\
  !*** ./typescripts/mishusoft/Module/System/Branching.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Branching": function() { return /* binding */ Branching; }
/* harmony export */ });
var Branching = /** @class */ (function () {
    function Branching(appHost) {
        this.appHost = appHost;
    }
    Branching.prototype.handleBranchDataTableViewEvent = function () {
        var self = this;
        var appHost = this.appHost;
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/dom */ "./typescripts/common/dom.ts")).then(function (d) {
            var captureElement = d.captureElement;
            var changeElementValueById = d.changeElementValueById;
            var changeElementAttributeValue = d.changeElementAttributeValue;
            //init edit pad by default
            changeElementAttributeValue('#branchEditMode', [
                { key: '#branchEditMode', attribute: 'innerHTML', value: 'New' },
                { key: '#branch-data-btn', attribute: 'innerHTML', value: 'Save' },
                { key: '#branch-reset-btn', attribute: 'innerHTML', value: 'Reset' },
            ]);
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/message */ "./typescripts/common/message.ts")).then(function (message) {
                var showMessage = message.showMessage;
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/common */ "./typescripts/common/common.ts")).then(function (validation) {
                    var checkInputDataAbility = validation.checkInputDataAbility;
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
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/request */ "./typescripts/common/request.ts")).then(function (request) {
                    var sendRequest = request.sendRequest;
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
                        }, function (response) {
                            showMessage(response, captureElement("#message2"));
                            captureElement('#app-loader').style.display = 'none';
                        });
                    });
                }).catch(function (err) {
                    console.log(err);
                });
                var needChange = [
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
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/pagination */ "./typescripts/common/pagination.ts")).then(function (pagination) {
                    var paginationDriver = pagination.paginationDriver;
                    var popUpDialogBoxDriver = pagination.popUpDialogBoxDriver;
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
    };
    Branching.prototype.handleBranchStaffDataTableViewEvent = function () {
        var appHost = this.appHost;
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/dom */ "./typescripts/common/dom.ts")).then(function (d) {
            var captureElement = d.captureElement;
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/message */ "./typescripts/common/message.ts")).then(function (message) {
                var showMessage = message.showMessage;
                Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/pagination */ "./typescripts/common/pagination.ts")).then(function (pagination) {
                    var paginationDriver = pagination.paginationDriver;
                    var popUpDialogBoxDriver = pagination.popUpDialogBoxDriver;
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
    };
    Branching.prototype.implementElementValue = function (select, element) {
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
    };
    return Branching;
}());



/***/ })

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdHlwZXNjcmlwdHMubWlzaHVzb2Z0Lk1vZHVsZS5TeXN0ZW0uQnJhbmNoaW5nLnJ1bnRpbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0lBRUksbUJBQ1ksT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFFM0IsQ0FBQztJQUVELGtEQUE4QixHQUE5QjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTNCLGdMQUE2QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDMUMsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUN0QyxJQUFJLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztZQUN0RCxJQUFJLDJCQUEyQixHQUFHLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztZQUVoRSwwQkFBMEI7WUFFMUIsMkJBQTJCLENBQUMsaUJBQWlCLEVBQUM7Z0JBQzFDLEVBQUMsR0FBRyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztnQkFDOUQsRUFBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO2dCQUNoRSxFQUFDLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7YUFDckUsQ0FBQyxDQUFDO1lBRUgsc0pBQWlDLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztnQkFDcEQsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztnQkFDdEMsb0pBQWdDLENBQUMsSUFBSSxDQUFDLFVBQVUsVUFBVTtvQkFDdEQsSUFBSSxxQkFBcUIsR0FBRyxVQUFVLENBQUMscUJBQXFCLENBQUM7b0JBQzdELDhEQUE4RDtvQkFDOUQsQ0FBQyxP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QUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUN6RSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3R5cGVzY3JpcHRzL21pc2h1c29mdC9Nb2R1bGUvU3lzdGVtL0JyYW5jaGluZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQnJhbmNoaW5nIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFwcEhvc3Q6IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQnJhbmNoRGF0YVRhYmxlVmlld0V2ZW50KCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgYXBwSG9zdCA9IHRoaXMuYXBwSG9zdDtcclxuXHJcbiAgICAgICAgaW1wb3J0KCcuLi8uLi8uLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICBsZXQgY2FwdHVyZUVsZW1lbnQgPSBkLmNhcHR1cmVFbGVtZW50O1xyXG4gICAgICAgICAgICBsZXQgY2hhbmdlRWxlbWVudFZhbHVlQnlJZCA9IGQuY2hhbmdlRWxlbWVudFZhbHVlQnlJZDtcclxuICAgICAgICAgICAgbGV0IGNoYW5nZUVsZW1lbnRBdHRyaWJ1dGVWYWx1ZSA9IGQuY2hhbmdlRWxlbWVudEF0dHJpYnV0ZVZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy9pbml0IGVkaXQgcGFkIGJ5IGRlZmF1bHRcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZUVsZW1lbnRBdHRyaWJ1dGVWYWx1ZSgnI2JyYW5jaEVkaXRNb2RlJyxbXHJcbiAgICAgICAgICAgICAgICB7a2V5OiAnI2JyYW5jaEVkaXRNb2RlJywgYXR0cmlidXRlOiAnaW5uZXJIVE1MJywgdmFsdWU6ICdOZXcnfSxcclxuICAgICAgICAgICAgICAgIHtrZXk6ICcjYnJhbmNoLWRhdGEtYnRuJywgYXR0cmlidXRlOiAnaW5uZXJIVE1MJywgdmFsdWU6ICdTYXZlJ30sXHJcbiAgICAgICAgICAgICAgICB7a2V5OiAnI2JyYW5jaC1yZXNldC1idG4nLCBhdHRyaWJ1dGU6ICdpbm5lckhUTUwnLCB2YWx1ZTogJ1Jlc2V0J30sXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgaW1wb3J0KCcuLi8uLi8uLi9jb21tb24vbWVzc2FnZScpLnRoZW4oZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzaG93TWVzc2FnZSA9IG1lc3NhZ2Uuc2hvd01lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL2NvbW1vbi9jb21tb24nKS50aGVuKGZ1bmN0aW9uICh2YWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrSW5wdXREYXRhQWJpbGl0eSA9IHZhbGlkYXRpb24uY2hlY2tJbnB1dERhdGFBYmlsaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vc2V0IHRleHQgYm94IHZhbHVlIGNoYW5nZSBkeW5hbWljIGFmdGVyIGRyb3Bib3ggaGFkIGNoYW5nZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgWydrZXl1cCcsICdjaGFuZ2UnLCAncGFzdGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChfX2V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYnJhbmNoTmFtZScpLmFkZEV2ZW50TGlzdGVuZXIoX19ldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrSW5wdXREYXRhQWJpbGl0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBIb3N0ICsgXCJzeXN0ZW0vYnJhbmNoZXMvY2hlY2tCcmFuY2hOYW1lSW5wdXRBYmlsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eV9jb2RlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhcHR1cmVFbGVtZW50KFwiI2JyYW5jaE5hbWVcIikudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJlc3BvbnNlLCBjYXB0dXJlRWxlbWVudChcIiNtZXNzYWdlMlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL2NvbW1vbi9yZXF1ZXN0JykudGhlbihmdW5jdGlvbiAocmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kUmVxdWVzdCA9IHJlcXVlc3Quc2VuZFJlcXVlc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIGRhdGEgYnkgY2xpY2tpbmcgZGF0YSBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2JyYW5jaC1kYXRhLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2FwcC1sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGFwcEhvc3QgKyAnc3lzdGVtL2JyYW5jaGVzL21hbmFnZUJyYW5jaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogW3tuYW1lOiBcIkNvbnRlbnQtdHlwZVwiLCB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIn1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5X2NvZGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNhcHR1cmVFbGVtZW50KCcjYnJhbmNoSUQnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjYXB0dXJlRWxlbWVudCgnI2JyYW5jaE5hbWUnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGNhcHR1cmVFbGVtZW50KCcjYnJhbmNoU3RhdHVzJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGNhcHR1cmVFbGVtZW50KCcjYnJhbmNoTG9jYXRpb24nKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5OYW1lOiBjYXB0dXJlRWxlbWVudCgnI2JyYW5jaC1kYXRhLWJ0bicpLnRleHRDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UocmVzcG9uc2UsIGNhcHR1cmVFbGVtZW50KFwiI21lc3NhZ2UyXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjYXBwLWxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuZWVkQ2hhbmdlID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHsnaWQnOiAnYnJhbmNoSUQnLCAndmFsdWUnOiAnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgeydpZCc6ICdicmFuY2hOYW1lJywgJ3ZhbHVlJzogJyd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsnaWQnOiAnYnJhbmNoU3RhdHVzJywgJ3ZhbHVlJzogJyd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsnaWQnOiAnYnJhbmNoTG9jYXRpb24nLCAndmFsdWUnOiAnJ30sXHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcmVzZXQgaW5wdXQgYm94IGJ5IGNsaWNraW5nIHJlc2V0IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNicmFuY2gtcmVzZXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRWxlbWVudFZhbHVlQnlJZChuZWVkQ2hhbmdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWRkIGRhdGEgZm9ybSBieSBjbGlja2luZyBhZGQgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2JyYW5jaC1hZGQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRWxlbWVudEF0dHJpYnV0ZVZhbHVlKCcjYnJhbmNoRWRpdE1vZGUnLFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge2tleTogJyNtZXNzYWdlMicsIGF0dHJpYnV0ZTogJ2lubmVySFRNTCcsIHZhbHVlOiAnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtrZXk6ICcjYnJhbmNoRWRpdE1vZGUnLCBhdHRyaWJ1dGU6ICdpbm5lckhUTUwnLCB2YWx1ZTogJ05ldyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7a2V5OiAnI2JyYW5jaC1kYXRhLWJ0bicsIGF0dHJpYnV0ZTogJ2lubmVySFRNTCcsIHZhbHVlOiAnU2F2ZSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUVsZW1lbnRWYWx1ZUJ5SWQobmVlZENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNtb2RhbDAxJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3NlbGVjdCBkYXRhIGJ5IGNsaWNraW5nIHNlbGVjdCBidXR0b25cclxuICAgICAgICAgICAgICAgIHNlbGYuaW1wbGVtZW50RWxlbWVudFZhbHVlKGNhcHR1cmVFbGVtZW50LCAnI2JyYW5jaC1zZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIC8qYWRkIGVkaXQgZXZlbnQqL1xyXG4gICAgICAgICAgICAgICAgc2VsZi5pbXBsZW1lbnRFbGVtZW50VmFsdWUoY2FwdHVyZUVsZW1lbnQsICcjYnJhbmNoLWVkaXQtYnRuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuLi8uLi8uLi9jb21tb24vcGFnaW5hdGlvbicpLnRoZW4oZnVuY3Rpb24gKHBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnaW5hdGlvbkRyaXZlciA9IHBhZ2luYXRpb24ucGFnaW5hdGlvbkRyaXZlcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wVXBEaWFsb2dCb3hEcml2ZXIgPSBwYWdpbmF0aW9uLnBvcFVwRGlhbG9nQm94RHJpdmVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3BVcERpYWxvZ0JveERyaXZlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyNicmFuY2gtZGVsZXRlLWJ0bicsICdNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSG9zdCArICdzeXN0ZW0vYnJhbmNoZXMvZGVsZXRlQnJhbmNoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyNtZXNzYWdlMycsIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShyZXNwb25zZSwgY2FwdHVyZUVsZW1lbnQoXCIjbWVzc2FnZVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25Ecml2ZXIoJ2FqYXgnLCBhcHBIb3N0ICsgJ3N5c3RlbS9icmFuY2hlcy9pbmRleFBhZ2luYXRpb25BSkFYJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JyYW5jaC1kYXRhLXRhYmxlJywgZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJlc3BvbnNlLCBjYXB0dXJlRWxlbWVudChcIiNtZXNzYWdlXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wVXBEaWFsb2dCb3hEcml2ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyNicmFuY2gtZGVsZXRlLWJ0bicsICdNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBIb3N0ICsgJ3N5c3RlbS9icmFuY2hlcy9kZWxldGVCcmFuY2gnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcjbWVzc2FnZTMnLCBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShyZXNwb25zZSwgY2FwdHVyZUVsZW1lbnQoXCIjbWVzc2FnZVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qaXQgd2lsbCBiZSBmaXJlIG9uIHBhZ2luYXRpb24qL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxlY3QgZGF0YSBieSBjbGlja2luZyBzZWxlY3QgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmltcGxlbWVudEVsZW1lbnRWYWx1ZShjYXB0dXJlRWxlbWVudCwgJyNicmFuY2gtc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmFkZCBlZGl0IGV2ZW50Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW1wbGVtZW50RWxlbWVudFZhbHVlKGNhcHR1cmVFbGVtZW50LCAnI2JyYW5jaC1lZGl0LWJ0bicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVCcmFuY2hTdGFmZkRhdGFUYWJsZVZpZXdFdmVudCgpIHtcclxuICAgICAgICBsZXQgYXBwSG9zdCA9IHRoaXMuYXBwSG9zdDtcclxuXHJcbiAgICAgICAgaW1wb3J0KCcuLi8uLi8uLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICBsZXQgY2FwdHVyZUVsZW1lbnQgPSBkLmNhcHR1cmVFbGVtZW50O1xyXG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL2NvbW1vbi9tZXNzYWdlJykudGhlbihmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNob3dNZXNzYWdlID0gbWVzc2FnZS5zaG93TWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi4vLi4vLi4vY29tbW9uL3BhZ2luYXRpb24nKS50aGVuKGZ1bmN0aW9uIChwYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2luYXRpb25Ecml2ZXIgPSBwYWdpbmF0aW9uLnBhZ2luYXRpb25Ecml2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcFVwRGlhbG9nQm94RHJpdmVyID0gcGFnaW5hdGlvbi5wb3BVcERpYWxvZ0JveERyaXZlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wVXBEaWFsb2dCb3hEcml2ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcjdHJhbnNmZXJCcmFuY2hTdHVmZicsICdNZXNzYWdlJywgYXBwSG9zdCArICdzeXN0ZW0vYnJhbmNoZXMvdHJhbnNmZXJCcmFuY2hTdHVmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcjbWVzc2FnZTMnLCBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UocmVzcG9uc2UsIGNhcHR1cmVFbGVtZW50KFwiI21lc3NhZ2VcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uRHJpdmVyKCdhamF4JywgYXBwSG9zdCArICdzeXN0ZW0vYnJhbmNoZXMvdXNlcnNQYWdpbmF0aW9uQUpBWCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdidXNlcnMtZGF0YS10YWJsZScsIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShyZXNwb25zZSwgY2FwdHVyZUVsZW1lbnQoXCIjbWVzc2FnZVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcFVwRGlhbG9nQm94RHJpdmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcjdHJhbnNmZXJCcmFuY2hTdHVmZicsICdNZXNzYWdlJywgYXBwSG9zdCArICdzeXN0ZW0vYnJhbmNoZXMvdHJhbnNmZXJCcmFuY2hTdHVmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyNtZXNzYWdlMycsIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJlc3BvbnNlLCBjYXB0dXJlRWxlbWVudChcIiNtZXNzYWdlXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGltcGxlbWVudEVsZW1lbnRWYWx1ZShzZWxlY3Q6IGFueSwgZWxlbWVudDogYW55KSB7XHJcbiAgICAgICAgLyphZGQgZWRpdCBldmVudCovXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCkuZm9yRWFjaChmdW5jdGlvbiAoX2VsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIFsnY2xpY2snLCAnZGJsY2xpY2snLCAndG91Y2hzdGFydCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0KCcjbWVzc2FnZTInKS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0KCcjbW9kYWwwMScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QoJyNicmFuY2hFZGl0TW9kZScpLmlubmVySFRNTCA9ICdFZGl0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0KCcjYnJhbmNoLWRhdGEtYnRuJykuaW5uZXJIVE1MID0gJ1VwZGF0ZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QoJyNicmFuY2hJRCcpLnZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0KCcjYnJhbmNoTmFtZScpLnZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QoJyNicmFuY2hTdGF0dXMnKS52YWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QoJyNicmFuY2hMb2NhdGlvbicpLnZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jYXRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB7cGFzc2l2ZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=