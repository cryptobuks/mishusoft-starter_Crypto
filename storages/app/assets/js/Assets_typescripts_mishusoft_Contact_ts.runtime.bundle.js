"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_mishusoft_Contact_ts"],{

/***/ "./Assets/typescripts/mishusoft/Contact.ts":
/*!*************************************************!*\
  !*** ./Assets/typescripts/mishusoft/Contact.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contact": () => (/* binding */ Contact)
/* harmony export */ });
class Contact {
    appHost;
    constructor(appHost) {
        this.appHost = appHost;
    }
    messageSender() {
        let self = this;
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let captureElement = dom.captureElement;
            let messages = captureElement('#messageZone');
            if (messages.firstElementChild === null) {
                let tmp = document.createElement('div');
                messages.appendChild(tmp);
            }
            messages.firstElementChild.classList.add('box-runtime');
            messages.firstElementChild.textContent = 'Please wait......';
            messages.style.display = 'block';
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
                return request.sendRequest({
                    method: "POST",
                    url: self.appHost + 'contact/receiveMessage',
                    async: true,
                    header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                    data: {
                        security_code: 1,
                        firstName: captureElement('#cl_fst_nm').value,
                        lastName: captureElement('#cl_lst_nm').value,
                        email: captureElement('#cl_email').value,
                        mobileNumber: captureElement('#cl_mbl_nmbr').value,
                        messageSubject: captureElement('#cl_msg_sbj').value,
                        messageContent: captureElement('#cl_msg').value,
                        btnName: captureElement('#cl_msg_snd_btn').textContent
                    }
                }, function (response) {
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../common/message */ "./Assets/typescripts/common/message.ts")).then(function (message) {
                        message.showMessage(response, captureElement("#messageZone"));
                    }).catch(function (err) {
                        alert(err);
                    });
                });
            }).catch(function (err) {
                alert(err);
            });
        }).catch(function (err) {
            alert(err);
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=Assets_typescripts_mishusoft_Contact_ts.runtime.bundle.js.map