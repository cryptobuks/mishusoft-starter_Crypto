export class Contact {
    constructor(
        private appHost: string
    ) {
    }

    messageSender(){
        let self = this;
        import('../common/dom').then(function (dom) {
            let captureElement = dom.captureElement;
            let messages = captureElement('#messageZone');
            if (messages.firstElementChild === null) {
                let tmp = document.createElement('div');
                messages.appendChild(tmp);
            }
            messages.firstElementChild.classList.add('box-runtime');
            messages.firstElementChild.textContent = 'Please wait......';
            messages.style.display = 'block';
            /*#!if ENV ==='production'*/
            setTimeout(function () {
                captureElement('#messageZone').textContent = '';
            }, 3000);
            /*#!endif*/
            return import('../common/request').then(function (request) {
                return request.sendRequest({
                    method: "POST",
                    url: self.appHost + 'contact/receiveMessage',
                    async: true,
                    header: [{name: "Content-type", value: "application/json;charset=UTF-8"}],
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
                }, function (response: any) {
                    import('../common/message').then(function (message){
                        message.showMessage(response, captureElement("#messageZone"));
                    }).catch(function (err) {
                        alert(err);
                    });

                });
            }).catch(function (err){
                alert(err)
            });
        }).catch(function (err) {
            alert(err)
        });
    }
}