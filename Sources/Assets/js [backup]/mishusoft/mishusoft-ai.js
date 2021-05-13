/* global _root_, Mishusoft, MishusoftSessionValidity,Stripe */

class MishusoftAi extends Mishusoft {
    constructor() {
        super();
        if (MishusoftSessionValidity){
            this.viewMainItemsTabs();
            this.viewExtraItemsTabs();
            this.viewVisitorsAccessLogs();
        }
    }

    /* -- start -- make data update with interval*/
    updateDATA() {
        let self = this;
        this.dataInterval = setInterval(function () {
            self.viewMainItemsTabs();
            self.viewExtraItemsTabs();
            self.viewVisitorsAccessLogs();
            console.clear();
        }, 5000);
    }
    /* -- end -- make data update with interval*/

    viewVisitorsAccessLogs() {
        let ajax = new XMLHttpRequest();
        ajax.open('POST', _root_ + 'api/getVisitorsAccessLogs', true);
        ajax.setRequestHeader("Access-Control-Allow-Origin", "*");
        ajax.send();

        //receiving response from ajax
        ajax.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let r = this.responseText;
                if (r.length !== 0) {
                    /*converting back to array*/
                    let data = JSON.parse(this.responseText);
                    //replaceing previous data
                    let htmlpad = Mishusoft.detectElementById("VAL_div");
                    //html value for <body>
                    let html = '';

                    if (data.length !== 0) {
                        //looping through the data
                        for (let a = 0; a < data.length; a++) {
                            let author = data[a].author;
                            let ip = data[a].ip;
                            let browser = data[a].browser;
                            let message_type = data[a].message_type;
                            let message = data[a].message;
                            let page = data[a].page;
                            let time = data[a].time;
                            let msgType = '';
                            let msgIcon = '';

                            if (message_type === 'error' || message_type === 'Error' || message_type === 'ERROR') {
                                msgType += 'danger';
                                msgIcon += '<i class="far fa-times-circle"></i>';
                            }
                            if (message_type === 'success' || message_type === 'Success' || message_type === 'SUCCESS') {
                                msgType += 'success';
                                msgIcon += '<i class="far fa-check-circle"></i>';
                            }
                            if (message_type === 'notify' || message_type === 'Notify' || message_type === 'NOTIFY') {
                                msgType += 'notify';
                                msgIcon += '<i class="fas fa-info-circle"></i>';
                            }

                            //appending at html
                            html += '<div class="box-message box-' + msgType + ' box-shadow-light" style="padding: 0;">';
                            html += '<span class="notify-icon">' + msgIcon + '</span>&nbsp;';
                            html += '<span class="notify-md-content"><a href="http://' + ip + '">' + author + '</a>&nbsp; >> ';
                            html += '<a href="' + page + '" title="[' + ip + ']&nbsp;[' + browser + ']&nbsp;[' + time + ']&nbsp;">' + message + '</a></span>';
                            html += '</div>';

                            if (htmlpad) {
                                htmlpad.innerHTML = html;
                            }
                        }
                    }
                    else {
                        //appending at html
                        html += '<div class="box-message box-danger box-shadow-light">';
                        html += '<span class="notify-icon"><i class="far fa-times-circle"></i></span>&nbsp;';
                        html += '<span class="notify-md-content">No notification found in database.</span>';
                        html += '</div>';

                        if (htmlpad) {
                            htmlpad.innerHTML = html;
                        }
                    }
                }
            }
        }
    };

    /*starting core Module*/
    verifyUSER_AUTH(){
        let params = {
            security_code: 1,
            username: Mishusoft.detectElementById('username').value,
            password: Mishusoft.detectElementById('password').value,
            redirectURL: Mishusoft.detectElementById('redirect').value,
            RememberMe: Mishusoft.detectElementById('RememberMe').value,
            btnName: Mishusoft.detectElementById('login-button').textContent
        };

        let xhr = new XMLHttpRequest();
        xhr.open("POST", _root_ + 'user/verifyUserAuth', true);
        xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(params)); // Make sure to stringify
        xhr.onreadystatechange = function () { //receiving response from ajax
            if (this.readyState === 4 && this.status === 200) {
                if (Mishusoft.IsJsonString(this.responseText)){
                    let data = JSON.parse(this.responseText);
                    if (data.type === 'success' && data.message === 'LOGGED_IN'){
                        if (data.url !=='/'){
                            window.location.replace(_root_ + data.url);
                        } else {
                            window.location.replace(_root_);
                        }
                    } else {
                        Mishusoft.detectElementById('login-button').removeAttribute('disabled');
                        Mishusoft.detectElementById('username').removeAttribute('disabled');
                        Mishusoft.detectElementById('password').removeAttribute('disabled');
                        Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("messageZone"));
                    }
                } else {
                    swal('Oop! Somthing went wrong!', this.responseText, 'error');
                }
            }
        };
    }
    /*ending core Module*/

    /*starting system Module*/
    /*--start save branch--*/
    saveBranch() {
        let command = Mishusoft.detectElementById('branch-data-btn').innerHTML;
        let params = '';
        if (command === 'Save') {
            params = {
                security_code: 1,
                name: Mishusoft.detectElementById('branchName').value,
                status: Mishusoft.detectElementById('branchStatus').value,
                location: Mishusoft.detectElementById('branchLocation').value,
                btnName: Mishusoft.detectElementById('branch-data-btn').innerHTML
            };
        } else {
            params = {
                security_code: 1,
                id: Mishusoft.detectElementById('branchID').value,
                name: Mishusoft.detectElementById('branchName').value,
                status: Mishusoft.detectElementById('branchStatus').value,
                location: Mishusoft.detectElementById('branchLocation').value,
                btnName: Mishusoft.detectElementById('branch-data-btn').innerHTML
            };
        }

        let ajaxSR = new XMLHttpRequest();
        ajaxSR.open("POST", _root_ + 'system/branches/addBranch', true);
        ajaxSR.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        ajaxSR.send(JSON.stringify(params)); // Make sure to stringify
        //receiving response from ajax
        ajaxSR.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //show message with another method
                Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message2"));
            }
        };
    }
    /*--end save branch--*/

    /*--start view main item tabs--*/
    viewMainItemsTabs() {
        let ajax = new XMLHttpRequest();
        ajax.open('POST', _root_ + 'system/index/getMainItemTabs', true);
        ajax.setRequestHeader("Access-Control-Allow-Origin", "*");
        //receiving response from ajax
        ajax.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                if (Mishusoft.IsJsonString(this.responseText)){
                    let data = JSON.parse(this.responseText);
                    let htmlpad = Mishusoft.detectElementById("MIT_div");
                    //html value for <body>
                    let html = '';

                    if (data.length !== 0) {
                        //looping through the data
                        for (let a = 0; a < data.length; a++) {
                            let name = data[a].name;
                            let title = data[a].title;
                            let icon = data[a].icon;
                            let url = data[a].url;

                            //appending at html
                            html += '<a href="' + _root_ + 'system/' + url + '" class="thumbnail-md box-shadow-light" title="' + title + '">';
                            html += '<div class="thumbnail-image"><i class="'+ icon +'"></i></div>';
                            html += '<div class="thumbnail-text">' + name + '</div>';
                            html += '</a>';

                            if (htmlpad) {
                                htmlpad.innerHTML = html;
                            }
                        }
                    } else {
                        //appending at html
                        html += '<div class="thumbnail-md box-shadow-light" style="padding: 45px 25px;">';
                        html += 'No tool exists.';
                        html += '</div>';

                        if (htmlpad) {
                            htmlpad.innerHTML = html;
                        }
                    }
                }
            }
        };
        ajax.send();
    };
    /*--end view main item tabs--*/

    /*--start view main item tabs--*/
    viewExtraItemsTabs() {
        let ajax = new XMLHttpRequest();
        ajax.open('POST', _root_ + 'system/index/getExtraItemTabs', true);
        ajax.setRequestHeader("Access-Control-Allow-Origin", "*");
        //receiving response from ajax
        ajax.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                if (Mishusoft.IsJsonString(this.responseText)){
                    let data = JSON.parse(this.responseText);
                    let htmlpad = Mishusoft.detectElementById("EIT_div");
                    //html value for <body>
                    let html = '';

                    if (data.length !== 0) {
                        //looping through the data
                        for (let a = 0; a < data.length; a++) {
                            let name = data[a].name;
                            let title = data[a].title;
                            let icon = data[a].icon;
                            let url = data[a].url;

                            //appending at html
                            html += '<a href="' + _root_ + 'system/' + url + '" class="thumbnail-md box-shadow-light" title="' + title + '">';
                            html += '<div class="thumbnail-image"><i class="'+ icon +'"></i></div>';
                            html += '<div class="thumbnail-text">' + name + '</div>';
                            html += '</a>';

                            if (htmlpad) {
                                htmlpad.innerHTML = html;
                            }
                        }
                    } else {
                        //appending at html
                        html += '<div class="thumbnail-md box-shadow-light" style="padding: 45px 25px;">';
                        html += 'No tool exists.';
                        html += '</div>';

                        if (htmlpad) {
                            htmlpad.innerHTML = html;
                        }
                    }
                }
            }
        };
        ajax.send();
    };
    /*--end view main item tabs--*/

    /*start save menu */
    saveMenu() {
        let params = '';
        let command = Mishusoft.detectElementById('menu-data-btn').innerHTML;

        if (command === 'Save') {
            params = {
                security_code: 1,
                parentID: Mishusoft.detectElementById('menuParentID').value,
                title: Mishusoft.detectElementById('menuTitle').value,
                url: Mishusoft.detectElementById('menuURL').value,
                icon: Mishusoft.detectElementById('menuIcon').value,
                position: Mishusoft.detectElementById('menuPosition').value,
                permission: Mishusoft.detectElementById('menuPermission').value,
                btnName: Mishusoft.detectElementById('menu-data-btn').innerHTML
            };
        } else {
            params = {
                security_code: 1,
                id: Mishusoft.detectElementById('menuID').value,
                parentID: Mishusoft.detectElementById('menuParentID').value,
                title: Mishusoft.detectElementById('menuTitle').value,
                url: Mishusoft.detectElementById('menuURL').value,
                icon: Mishusoft.detectElementById('menuIcon').value,
                position: Mishusoft.detectElementById('menuPosition').value,
                permission: Mishusoft.detectElementById('menuPermission').value,
                btnName: Mishusoft.detectElementById('menu-data-btn').innerHTML
            };
        }

        let ajax = new XMLHttpRequest();
        ajax.open("POST", _root_ + 'system/menus/addMenu', true);
        ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        ajax.send(JSON.stringify(params)); // Make sure to stringify
        //receiving response from ajax
        ajax.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //show message with another method
                Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message2"));
            }
        };
    }
    /*end save menu*/

    /*start save Permission */
    savePermission() {
        let params = '';
        let command = Mishusoft.detectElementById('permission-data-btn').innerHTML;

        if (command === 'Save') {
            // Form fields, see IDs above
            params = {
                security_code: 1,
                name: Mishusoft.detectElementById('permissionName').value,
                key: Mishusoft.detectElementById('permissionKey').value,
                PKID: Mishusoft.detectElementById('permissionPKID').value,
                btnName: Mishusoft.detectElementById('permission-data-btn').innerHTML
            };
        } else {
            // Form fields, see IDs above
            params = {
                security_code: 1,
                id: Mishusoft.detectElementById('permissionID').value,
                name: Mishusoft.detectElementById('permissionName').value,
                key: Mishusoft.detectElementById('permissionKey').value,
                PKID: Mishusoft.detectElementById('permissionPKID').value,
                btnName: Mishusoft.detectElementById('permission-data-btn').innerHTML
            };
        }

        let ajax = new XMLHttpRequest();
        ajax.open("POST", _root_ + 'system/permissions/addPermission', true);
        ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        ajax.send(JSON.stringify(params)); // Make sure to stringify
        //receiving response from ajax
        ajax.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //show message with another method
                Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message2"));
            }
        };
    }
    /*end save Permission*/

    /*start save role*/
    saveRole() {
        let command = Mishusoft.detectElementById('role-data-btn').innerHTML;
        let params = '';
        if (command === 'Save') {
            // Form fields, see IDs above
            params = {
                security_code: 1,
                name: Mishusoft.detectElementById('roleName').value,
                btnName: Mishusoft.detectElementById('role-data-btn').innerHTML
            };
        } else {
            // Form fields, see IDs above
            params = {
                security_code: 1,
                id: Mishusoft.detectElementById('roleID').value,
                name: Mishusoft.detectElementById('roleName').value,
                btnName: Mishusoft.detectElementById('role-data-btn').innerHTML
            };
        }

        let ajaxSR = new XMLHttpRequest();
        ajaxSR.open("POST", _root_ + 'system/roles/addRole', true);
        ajaxSR.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        ajaxSR.send(JSON.stringify(params)); // Make sure to stringify
        //receiving response from ajax
        ajaxSR.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //show message with another method
                Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message2"));
            }
        };
    }
    /*end save role*/

    /*start update Role Permission*/
    updateRolePermission(){
        // Form fields, see IDs above
        let data = {
            security_code: 1,
            role: $(this).attr('data-roleid'),
            permission: $(this).attr('data-permissionid'),
            value: $(this).attr('data-value')
        };

        let ajax = new XMLHttpRequest();
        ajax.open("POST", _root_ + 'system/roles/updateRolePermission', true);
        ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        ajax.send(JSON.stringify(data)); // Make sure to stringify
        //receiving response from ajax
        ajax.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //show message with another method
                Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message"));
            }
        };
    };
    /*end save update Role Permission*/

    /*start user section*/
    verifyIsUserAlreadyExists() {
        let dataB = {
            security_code: 1,
            user: Mishusoft.detectElementById('userDetailsID').value
        };

        let ajaxB = new XMLHttpRequest();
        ajaxB.open("POST", _root_ + 'system/users/isUserCreatedCheckedByUserId', true);
        ajaxB.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        ajaxB.send(JSON.stringify(dataB)); // Make sure to stringify
        ajaxB.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                if (Mishusoft.IsJsonString(this.responseText)) {
                    let dataC = JSON.parse(this.responseText);
                    if (dataC.length !== 0) {
                        //looping through the data
                        for (let a = 0; a < dataC.length; a++) {
                            let status = dataC[a].status;
                            if (status === 'yes') {
                                Mishusoft.detectElementById('message3').innerHTML = '';
                                Mishusoft.detectElementById('modal01').style.display = 'none';
                                SystemManager.UploadWindowView('Upload profile picture');
                            }
                        }
                    }
                } else {
                    alert(this.responseText)
                }
            }
        };
    }

    UploadWindowView(title) {
        Mishusoft.detectElementById('modal02').style.display = 'block';
        Mishusoft.detectElementById('imageFile').src = '';
        Mishusoft.detectElementById('UploadStatusBoard').style.display = 'none';
        Mishusoft.detectElementById('userProfilePictureUploadMode').innerHTML = title;
        Mishusoft.detectElementById('user-picture-data-btn').innerHTML = 'Close';
    }

    saveUser() {
        let data = '';
        let command = Mishusoft.detectElementById('user-data-btn').innerHTML;

        if (command === 'Save') {
            data = {
                security_code: 1,
                FName: Mishusoft.detectElementById('userFName').value,
                LName: Mishusoft.detectElementById('userLName').value,
                email: Mishusoft.detectElementById('userEmail').value,
                password: Mishusoft.detectElementById('userPassword').value,
                username: Mishusoft.detectElementById('userUsername').value,
                activity: Mishusoft.detectElementById('userActivity').value,
                role: Mishusoft.detectElementById('userRole').value,
                dateOfBirth: Mishusoft.detectElementById('userDateOfBirth').value,
                gender: Mishusoft.detectElementById('userGender').value,
                profession: Mishusoft.detectElementById('userProfession').value,
                btnName: Mishusoft.detectElementById('user-data-btn').innerHTML
            };
        } else {
            data = {
                security_code: 1,
                id: Mishusoft.detectElementById('userID').value,
                FName: Mishusoft.detectElementById('userFName').value,
                LName: Mishusoft.detectElementById('userLName').value,
                email: Mishusoft.detectElementById('userEmail').value,
                password: Mishusoft.detectElementById('userPassword').value,
                username: Mishusoft.detectElementById('userUsername').value,
                activity: Mishusoft.detectElementById('userActivity').value,
                role: Mishusoft.detectElementById('userRole').value,
                dateOfBirth: Mishusoft.detectElementById('userDateOfBirth').value,
                gender: Mishusoft.detectElementById('userGender').value,
                profession: Mishusoft.detectElementById('userProfession').value,
                btnName: Mishusoft.detectElementById('user-data-btn').innerHTML
            };
        }

        let ajax = new XMLHttpRequest();
        ajax.open("POST", _root_ + 'system/users/addUser', true);
        ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        ajax.send(JSON.stringify(data)); // Make sure to stringify
        //receiving response from ajax
        ajax.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                Mishusoft.showMessage(this.responseText,Mishusoft.detectElementById("message2"),function (data) {
                    for (let i=0; i < data.length; i++){

                    }
                    Mishusoft.detectElementById('userDetailsID').value = data.user;
                    AIapp.verifyIsUserAlreadyExists();
                });
                if (Mishusoft.IsJsonString(this.responseText)) {
                    // converting back to array
                    let d = JSON.parse(this.responseText);
                    //html value for <body>
                    let html = "";
                    let htmlpad = Mishusoft.detectElementById("message2");
                    //looping through the data
                    for (let a = 0; a < d.length; a++) {
                        let user = d[a].user;
                        let type = d[a].type;
                        let message = d[a].message;
                        let errClass = '';
                        let symbol = '';

                        if (type === "error") {
                            errClass += 'danger';
                            symbol += "&times;";
                        }
                        if (type === "success") {
                            errClass += 'success';
                            symbol += "&radic;";
                        }

                        //appending at html
                        html += '<div class="box-message box-' + errClass + ' box-shadow-light">';
                        html += '<span class="box-' + errClass + '-symbol">' + symbol + '</span>';
                        html += '&nbsp;&nbsp;' + message + '';
                        html += '</div>';

                        if (htmlpad) {
                            htmlpad.innerHTML = html;

                        }
                    }
                } else {
                    alert(this.responseText);//<i class="far fa-check-circle"></i>
                }
            }
        };
    }

    deleteUser() {
        // Form fields, see IDs above
        let params = {
            security_code: 1,
            id: $(this).attr('data-userID')
        };

        let ajax = new XMLHttpRequest();
        ajax.open('POST', _root_ + 'system/users/deleteUser', true);
        ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        ajax.send(JSON.stringify(params)); // Make sure to stringify
        //receiving response from ajax
        ajax.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //show message with another method
                Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message"));
            }
        };
    }
    /*end user setion*/

    /*ending system Module*/
}
let AIapp = new MishusoftAi();

/*starting core Module*/
/*Identify browser activity on the home page and start processing instructions*/
$('#userNotificationsAll').on('click', '.page', function () {
    let url = 'user/activitiesPaginationAJAX';
    Mishusoft.pagination($(this).attr('page'), url, 'notificationsAll');
});
$('#LogInForm').on('submit', function (e) {
    e.preventDefault();
    let el = Mishusoft.detectElementById('messageZone');
    if (el.firstElementChild === null){
        let fselch = document.createElement('div');
        el.appendChild(fselch);
    }

    el.firstElementChild.className = '';
    el.firstElementChild.style='color: lightseagreen;background-color: rgb(217, 242, 244);font-size: 17px;text-align: left;margin-top: 0;margin-bottom: 10px;padding: 10px 10px;width: 100%;display: inline-block;text-align: center;' +
        'border: none;border-left-color: currentcolor;border-left-style: none;border-left-width: medium;-webkit-border-radius: 5px;border-radius: 5px;\n' +
        '-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n' +
        '-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n' +
        'box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);';
    Mishusoft.detectElementById('login-button').setAttribute('disabled','disabled');
    Mishusoft.detectElementById('username').setAttribute('disabled','disabled');
    Mishusoft.detectElementById('password').setAttribute('disabled','disabled');
    el.firstElementChild.textContent = 'Please wait......';
    AIapp.verifyUSER_AUTH();
});
//set text box value change dynamic after ability checked
$('#registrationForm').on('keyup', '#email', function () {
    let RequestURL = _root_ + "user/checkValidEmailAddress";
    let dataElement = Mishusoft.detectElementById("email");
    let htmlpad = Mishusoft.detectElementById("messageZone");
    return Mishusoft.checkValidEmailAddress(RequestURL, dataElement, htmlpad);
});
/*Identify browser activity on the home page and end processing instructions*/
/*ending core Module*/


/*starting system Module*/

/*start of branch section of system manager*/
$('#branch-data-table').on('click', '.page', function () {
    let url = 'system/branches/indexPaginationAJAX';
    Mishusoft.pagination($(this).attr('page'), url, 'branch-data-table');
});
$('#busers-data-table').on('click', '.page', function () {
    let url = 'system/branches/usersPaginationAJAX';
    Mishusoft.pagination($(this).attr('page'), url, 'busers-data-table');
});

//hide edit pad by default
if (Mishusoft.detectElementById('branchEditMode')) {
    Mishusoft.detectElementById('branchEditMode').innerHTML = 'New';
    Mishusoft.detectElementById('branch-data-btn').innerHTML = 'Save';
    Mishusoft.detectElementById('branch-reset-btn').innerHTML = 'Reset';
}
//set textbox value change dynamic after dropbox had changed.
$(document).on('keyup', '#branchName', function () {
    //alert(_root_ + "manager/system/checkBranchNameInputAbility");
    let checkBranchNameInputAbilityURL = _root_ + "system/branches/checkBranchNameInputAbility";
    let value = Mishusoft.detectElementById("branchName").value;
    let htmlpad = Mishusoft.detectElementById("message2");
    return Mishusoft.checkInputDataAbility(checkBranchNameInputAbilityURL, value, htmlpad);
});
//save data by clicking data button
$(document).on('click', '#branch-data-btn', AIapp.saveBranch);
//reset inputbox by clicking reset button
$(document).on('click', '#branch-reset-btn', function () {
    Mishusoft.detectElementById('branchID').value = '';
    Mishusoft.detectElementById('branchName').value = '';
    Mishusoft.detectElementById('branchStatus').value = '';
    Mishusoft.detectElementById('branchLocation').value = '';
});
//add data form by clicking add button
$(document).on('click', '#branch-add-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('modal01').style.display = 'block';
    Mishusoft.detectElementById('branchEditMode').innerHTML = 'New';
    Mishusoft.detectElementById('branch-data-btn').innerHTML = 'Save';
    Mishusoft.detectElementById('branchID').value = '';
    Mishusoft.detectElementById('branchName').value = '';
    Mishusoft.detectElementById('branchStatus').value = '';
    Mishusoft.detectElementById('branchLocation').value = '';
});
//select data by clicking select button
$(document).on('click', '#branch-select', function () {
    if (this.checked) {
        Mishusoft.detectElementById('message2').innerHTML = '';
        Mishusoft.detectElementById('modal01').style.display = 'block';
        Mishusoft.detectElementById('branchEditMode').innerHTML = 'Edit';
        Mishusoft.detectElementById('branch-data-btn').innerHTML = 'Update';
        Mishusoft.detectElementById('branchID').value = $(this).attr('data-id');
        Mishusoft.detectElementById('branchName').value = $(this).attr('data-name');
        Mishusoft.detectElementById('branchStatus').value = $(this).attr('data-status');
        Mishusoft.detectElementById('branchLocation').value = $(this).attr('data-location');
    }
});
//edit data by clicking edit button
$(document).on('click', '#branch-edit-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('modal01').style.display = 'block';
    Mishusoft.detectElementById('branchEditMode').innerHTML = 'Edit';
    Mishusoft.detectElementById('branch-data-btn').innerHTML = 'Update';
    Mishusoft.detectElementById('branchID').value = $(this).attr('data-id');
    Mishusoft.detectElementById('branchName').value = $(this).attr('data-name');
    Mishusoft.detectElementById('branchStatus').value = $(this).attr('data-status');
    Mishusoft.detectElementById('branchLocation').value = $(this).attr('data-location');
});
//delete data by clicking delete button
$(document).on('click', '#branch-delete-btn', function () {
    Mishusoft.detectElementById('PopUpDialogBox').style.display = 'block';
    Mishusoft.detectElementById('PopUpDialogBoxTitle').innerHTML = 'Message';
    Mishusoft.detectElementById('message3').innerHTML = '<div style="font-size:15px;">Are you want to delete this?</div>';
    Mishusoft.detectElementById('message-done-btn').innerHTML = 'Delete';

    let dataID = $(this).attr('data-id');
    let commandBtn = Mishusoft.detectElementById('message-done-btn').innerHTML;

    $(document).on('click', '#message-done-btn', function () {
        if (commandBtn === 'Delete') {
            // Form fields, see IDs above
            let data = {
                security_code: 1,
                id: dataID
            };

            let ajax = new XMLHttpRequest();
            ajax.open("POST", _root_ + 'system/branches/deleteBranch', true);
            ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            ajax.send(JSON.stringify(data)); // Make sure to stringify
            //receiving response from ajax
            ajax.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    //show message with another method
                    Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message"));
                }
            };
        }

        Mishusoft.detectElementById('PopUpDialogBox').style.display = 'none';
    });
});

// change ability by clicking this button
$(document).on('click', '#transferBranchStuff', function () {
    Mishusoft.detectElementById('PopUpDialogBox').style.display = 'block';
    Mishusoft.detectElementById('PopUpDialogBoxTitle').innerHTML = 'Message';
    Mishusoft.detectElementById('message3').innerHTML = '<div style="font-size:15px;">Are you want to change this?</div>';
    Mishusoft.detectElementById('message-done-btn').innerHTML = 'Change';

    let commandBtn = Mishusoft.detectElementById('message-done-btn').innerHTML;
    let user = $(this).attr('data-user');
    let branch = $(this).attr('data-branch');
    let method = $(this).attr('data-method');


    $(document).on('click', '#message-done-btn', function () {
        if (commandBtn === 'Change') {
            let data = {
                security_code: 1,
                user: user,
                branch: branch,
                method: method
            };

            let ajax = new XMLHttpRequest();
            ajax.open("POST", _root_ + 'system/branches/transferBranchStuff', true);
            ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            ajax.send(JSON.stringify(data)); // Make sure to stringify
            //receiving response from ajax
            ajax.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    //show message with another method
                    Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message"));
                }
            };
        }

        Mishusoft.detectElementById('PopUpDialogBox').style.display = 'none';
    });
});
/*end of branch section of system manager*/

/*start of Menu section of system manager*/
$('#menus-data-table').on('click', '.page', function () {
    let url = 'system/menus/indexPaginationAJAX';
    Mishusoft.pagination($(this).attr('page'), url, 'menus-data-table');
});
//hide edit pad by default
if (Mishusoft.detectElementById('menuEditMode')) {
    Mishusoft.detectElementById('menuEditMode').innerHTML = 'New';
    Mishusoft.detectElementById('menu-data-btn').innerHTML = 'Save';
    Mishusoft.detectElementById('menu-reset-btn').innerHTML = 'Reset';
}
//set textbox value change dynamic after dropbox had changed.
$(document).on('keyup', '#menuTitle', function () {
    //alert(_root_ + "manager/system/checkMenuNameInputAbility");
    let checkMenuTitleInputAbilityURL = _root_ + "system/menus/checkMenuTitleInputAbility";
    let value = Mishusoft.detectElementById("menuTitle").value;
    let htmlpad = Mishusoft.detectElementById("message2");
    return Mishusoft.checkInputDataAbility(checkMenuTitleInputAbilityURL, value, htmlpad);
});

//set textbox value change dynamic after dropbox had changed.
$(document).on('keyup', '#menuIcon', function () {
    let className = Mishusoft.detectElementById("menuIcon").value;
    Mishusoft.detectElementById('previewIcon').setAttribute('class',className);
    Mishusoft.detectElementById('previewIconName').textContent = className;
});
//save data by clicking data button
$(document).on('click', '#menu-data-btn', AIapp.saveMenu);
//reset inputbox by clicking reset button
$(document).on('click', '#menu-reset-btn', function () {
    Mishusoft.detectElementById('menuID').value = '';
    Mishusoft.detectElementById('menuParentID').value = '';
    Mishusoft.detectElementById('menuTitle').value = '';
    Mishusoft.detectElementById('menuURL').value = '';
    Mishusoft.detectElementById('menuIcon').value = '';
    Mishusoft.detectElementById('menuPosition').value = '';
    Mishusoft.detectElementById('menuPermission').value = '';
});
//add data form by clicking add button
$(document).on('click', '#menu-add-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('modal01').style.display = 'block';
    Mishusoft.detectElementById('menuEditMode').innerHTML = 'New';
    Mishusoft.detectElementById('menu-data-btn').innerHTML = 'Save';
    Mishusoft.detectElementById('menuID').value = '';
    Mishusoft.detectElementById('menuParentID').value = '';
    Mishusoft.detectElementById('menuTitle').value = '';
    Mishusoft.detectElementById('menuURL').value = '';
    Mishusoft.detectElementById('menuIcon').value = '';
    Mishusoft.detectElementById('menuPosition').value = '';
    Mishusoft.detectElementById('menuPermission').value = '';
});
//select data by clicking select button
$(document).on('click', '#menu-select', function () {
    if (this.checked) {
        Mishusoft.detectElementById('message2').innerHTML = '';
        Mishusoft.detectElementById('modal01').style.display = 'block';
        Mishusoft.detectElementById('menuEditMode').innerHTML = 'Edit';
        Mishusoft.detectElementById('menu-data-btn').innerHTML = 'Update';
        Mishusoft.detectElementById('menuID').value = $(this).attr('data-id');
        Mishusoft.detectElementById('menuParentID').value = $(this).attr('data-parentid');
        Mishusoft.detectElementById('menuTitle').value = $(this).attr('data-title');
        Mishusoft.detectElementById('menuURL').value = $(this).attr('data-url');
        Mishusoft.detectElementById('menuIcon').value = $(this).attr('data-icon');
        Mishusoft.detectElementById('menuPosition').value = $(this).attr('data-position');
        Mishusoft.detectElementById('menuPermission').value = $(this).attr('data-permission');
    }
});
//edit data by clicking edit button
$(document).on('click', '#menu-edit-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('modal01').style.display = 'block';
    Mishusoft.detectElementById('menuEditMode').innerHTML = 'Edit';
    Mishusoft.detectElementById('menu-data-btn').innerHTML = 'Update';
    Mishusoft.detectElementById('menuID').value = $(this).attr('data-id');
    Mishusoft.detectElementById('menuParentID').value = $(this).attr('data-parentid');
    Mishusoft.detectElementById('menuTitle').value = $(this).attr('data-title');
    Mishusoft.detectElementById('menuURL').value = $(this).attr('data-url');
    Mishusoft.detectElementById('menuIcon').value = $(this).attr('data-icon');
    Mishusoft.detectElementById('menuPosition').value = $(this).attr('data-position');
    Mishusoft.detectElementById('menuPermission').value = $(this).attr('data-permission');
});
//delete data by clicking delete button
$(document).on('click', '#menu-delete-btn', function () {
    Mishusoft.detectElementById('PopUpDialogBox').style.display = 'block';
    Mishusoft.detectElementById('PopUpDialogBoxTitle').innerHTML = 'Message';
    Mishusoft.detectElementById('message3').innerHTML = '<div style="font-size:15px;">Are you want to delete this?</div>';
    Mishusoft.detectElementById('message-done-btn').innerHTML = 'Delete';

    let dataID = $(this).attr('data-id');
    let commandBtn = Mishusoft.detectElementById('message-done-btn').innerHTML;

    $(document).on('click', '#message-done-btn', function () {
        if (commandBtn === 'Delete') {
            // Form fields, see IDs above
            let data = {
                security_code: 1,
                id: dataID
            };

            let ajax = new XMLHttpRequest();
            ajax.open("POST", _root_ + 'system/menus/deleteMenu', true);
            ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            ajax.send(JSON.stringify(data)); // Make sure to stringify
            //receiving response from ajax
            ajax.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    //show message with another method
                    Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message"));
                }
            };
        }

        Mishusoft.detectElementById('PopUpDialogBox').style.display = 'none';
    });
});
/*end of menu section of system manager*/


/*start of module section of system manager*/
$('#modules-data-table').on('click', '.page', function () {
    let url = 'system/modules/indexPaginationAJAX';
    Mishusoft.pagination($(this).attr('page'), url, 'modules-data-table');
});
//hide edit pad by default
if (Mishusoft.detectElementById('moduleEditMode')) {
    Mishusoft.detectElementById('moduleEditMode').innerHTML = 'New';
    Mishusoft.detectElementById('module-data-btn').innerHTML = 'Save';
    Mishusoft.detectElementById('module-reset-btn').innerHTML = 'Reset';
}

//show select file name on status bar
$(document).on('change', '#moduleFile', function () {
    let file = Mishusoft.detectElementById('moduleFile').files[0];
    Mishusoft.detectElementById('UploadStatusBoard').style.display = 'block';
    Mishusoft.detectElementById('progressbar').style.display = 'none';
    Mishusoft.detectElementById('upload_status').innerHTML = file.name + ' selected';
});
//upload file by clicking button
$(document).on('click', '#uploadModuleFile', function () {
    Mishusoft.uploadFile('moduleFile', 'moduleFile', 'system/modules/uploadTARGZ');
});

//save data by clicking data button
$(document).on('click', '#module-data-btn', function (){
    Mishusoft.detectElementById('module-data-btn').innerHTML = 'Updating..';
    let params = {
        security_code: 1,
        id: Mishusoft.detectElementById('moduleID').value,
        status: Mishusoft.detectElementById('moduleStatus').value,
        btnName: 'Update'
    };

    let ajax = new XMLHttpRequest();
    ajax.open("POST", _root_ + 'system/modules/updateModule', true);
    ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    ajax.send(JSON.stringify(params)); // Make sure to stringify
    //receiving response from ajax
    ajax.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            Mishusoft.detectElementById('module-data-btn').innerHTML = 'Update';
            //show message with another method
            Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message2"));
        }
    };
});
//reset inputbox by clicking reset button
$(document).on('click', '#module-reset-btn', function () {
    Mishusoft.detectElementById('moduleStatus').value = '';
});
//add data form by clicking add button
$(document).on('click', '#module-add-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('modal01').style.display = 'block';
    Mishusoft.detectElementById('moduleEditMode').innerHTML = 'New';
    Mishusoft.detectElementById('progressbar').style.display = 'none';
    Mishusoft.detectElementById('moduleEditPAD').style.display = 'none';
    Mishusoft.detectElementById('moduleUploadPad').style.display = 'block';
    Mishusoft.detectElementById('upload_status').textContent = '';
    Mishusoft.detectElementById('loaded_n_total').textContent = '';
});
//select data by clicking select button
$(document).on('click', '#module-select', function () {
    if (this.checked) {
        Mishusoft.detectElementById('message2').innerHTML = '';
        Mishusoft.detectElementById('modal01').style.display = 'block';
        Mishusoft.detectElementById('moduleUploadPad').style.display = 'none';
        Mishusoft.detectElementById('moduleEditPAD').style.display = 'block';
        Mishusoft.detectElementById('moduleEditMode').innerHTML = 'Edit';
        Mishusoft.detectElementById('module-data-btn').innerHTML = 'Update';
        Mishusoft.detectElementById('moduleID').value = $(this).attr('data-id');
        Mishusoft.detectElementById('moduleName').value = $(this).attr('data-name');
        Mishusoft.detectElementById('moduleName').setAttribute('disabled','disabled');
        Mishusoft.detectElementById('moduleLocation').value = $(this).attr('data-location');
        Mishusoft.detectElementById('moduleLocation').setAttribute('disabled','disabled');
        Mishusoft.detectElementById('moduleStatus').value = $(this).attr('data-status');
    }
});
//edit data by clicking edit button
$(document).on('click', '#module-edit-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('modal01').style.display = 'block';
    Mishusoft.detectElementById('moduleUploadPad').style.display = 'none';
    Mishusoft.detectElementById('moduleEditPAD').style.display = 'block';
    Mishusoft.detectElementById('moduleEditMode').innerHTML = 'Edit';
    Mishusoft.detectElementById('module-data-btn').innerHTML = 'Update';
    Mishusoft.detectElementById('moduleID').value = $(this).attr('data-id');
    Mishusoft.detectElementById('moduleName').value = $(this).attr('data-name');
    Mishusoft.detectElementById('moduleName').setAttribute('disabled','disabled');
    Mishusoft.detectElementById('moduleLocation').value = $(this).attr('data-location');
    Mishusoft.detectElementById('moduleLocation').setAttribute('disabled','disabled');
    Mishusoft.detectElementById('moduleStatus').value = $(this).attr('data-status');
});
//delete data by clicking delete button
$(document).on('click', '#module-delete-btn', function () {
    Mishusoft.detectElementById('PopUpDialogBox').style.display = 'block';
    Mishusoft.detectElementById('PopUpDialogBoxTitle').innerHTML = 'Message';
    Mishusoft.detectElementById('message3').innerHTML = '<div style="font-size:15px;">Are you want to delete this?</div>';
    Mishusoft.detectElementById('message-done-btn').innerHTML = 'Delete';

    let dataID = $(this).attr('data-id');
    let commandBtn = Mishusoft.detectElementById('message-done-btn').innerHTML;

    $(document).on('click', '#message-done-btn', function () {
        if (commandBtn === 'Delete') {
            // Form fields, see IDs above
            let data = {
                security_code: 1,
                id: dataID
            };

            let ajax = new XMLHttpRequest();
            ajax.open("POST", _root_ + 'system/modules/deleteModule', true);
            ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            ajax.send(JSON.stringify(data)); // Make sure to stringify
            //receiving response from ajax
            ajax.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    //show message with another method
                    Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message"));
                }
            };
        }

        Mishusoft.detectElementById('PopUpDialogBox').style.display = 'none';
    });
});
/*end of module section of system manager*/

/*start of Permission section of app manager*/
$('#permissions-data-table').on('click', '.page', function () {
    let url = 'system/permissions/indexPaginationAJAX';
    Mishusoft.pagination($(this).attr('page'), url, 'permissions-data-table');
});
//hide edit pad by default
if (Mishusoft.detectElementById('permissionEditMode')) {
    Mishusoft.detectElementById('permissionEditMode').innerHTML = 'New';
    Mishusoft.detectElementById('permission-data-btn').innerHTML = 'Save';
    Mishusoft.detectElementById('permission-reset-btn').innerHTML = 'Reset';
}
//save data by clicking data button
$(document).on('click', '#permission-data-btn', AIapp.savePermission);
//reset inputbox by clicking reset button
$(document).on('click', '#permission-reset-btn', function () {
    Mishusoft.detectElementById('permissionID').value = '';
    Mishusoft.detectElementById('permissionName').value = '';
    Mishusoft.detectElementById('permissionKey').value = '';
    Mishusoft.detectElementById('permissionPKID').value = '';
});
//add data form by clicking add button
$(document).on('click', '#permission-add-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('modal01').style.display = 'block';
    Mishusoft.detectElementById('permissionEditMode').innerHTML = 'New';
    Mishusoft.detectElementById('permission-data-btn').innerHTML = 'Save';
    Mishusoft.detectElementById('permissionID').value = '';
    Mishusoft.detectElementById('permissionName').value = '';
    Mishusoft.detectElementById('permissionKey').value = '';
    Mishusoft.detectElementById('permissionPKID').value = '';
});
//select data by clicking select button
$(document).on('click', '#permission-select', function () {
    if (this.checked) {
        Mishusoft.detectElementById('message2').innerHTML = '';
        Mishusoft.detectElementById('modal01').style.display = 'block';
        Mishusoft.detectElementById('permissionEditMode').innerHTML = 'Edit';
        Mishusoft.detectElementById('permission-data-btn').innerHTML = 'Update';
        Mishusoft.detectElementById('permissionID').value = $(this).attr('data-permissionID');
        Mishusoft.detectElementById('permissionName').value = $(this).attr('data-permissionName');
        Mishusoft.detectElementById('permissionKey').value = $(this).attr('data-permissionKey');
        Mishusoft.detectElementById('permissionPKID').value = $(this).attr('data-permissionPKID');
    }
});
//edit data by clicking edit button
$(document).on('click', '#permission-edit-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('modal01').style.display = 'block';
    Mishusoft.detectElementById('permissionEditMode').innerHTML = 'Edit';
    Mishusoft.detectElementById('permission-data-btn').innerHTML = 'Update';
    Mishusoft.detectElementById('permissionID').value = $(this).attr('data-permissionID');
    Mishusoft.detectElementById('permissionName').value = $(this).attr('data-permissionName');
    Mishusoft.detectElementById('permissionKey').value = $(this).attr('data-permissionKey');
    Mishusoft.detectElementById('permissionPKID').value = $(this).attr('data-permissionPKID');
});
//delete data by clicking delete button
$(document).on('click', '#permission-delete-btn', function () {
    Mishusoft.detectElementById('PopUpDialogBox').style.display = 'block';
    Mishusoft.detectElementById('PopUpDialogBoxTitle').innerHTML = 'Message';
    Mishusoft.detectElementById('message3').innerHTML = '<div style="font-size:15px;">Are you want to delete this?</div>';
    Mishusoft.detectElementById('message-done-btn').innerHTML = 'Delete';

    let dataID = $(this).attr('data-permissionID');
    let commandBtn = Mishusoft.detectElementById('message-done-btn').innerHTML;

    $(document).on('click', '#message-done-btn', function () {
        if (commandBtn === 'Delete') {
            // Form fields, see IDs above
            let data = {
                security_code: 1,
                id: dataID
            };

            let ajax = new XMLHttpRequest();
            ajax.open("POST", _root_ + 'system/permissions/deletePermission', true);
            ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            ajax.send(JSON.stringify(data)); // Make sure to stringify
            //receiving response from ajax
            ajax.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    //show message with another method
                    Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message"));
                }
            };
        }

        Mishusoft.detectElementById('PopUpDialogBox').style.display = 'none';
    });
});
/*end of Permission section of app manager*/


/* start of role section of app manager*/
$('#roles-data-table').on('click', '.page', function () {
    let url = 'system/roles/indexPaginationAJAX';
    Mishusoft.pagination($(this).attr('page'), url, 'roles-data-table');
});
$('#roles-permissions-data-table').on('click', '.page', function () {
    let role = $('#hidden-role-id').attr('value');
    let url = 'system/roles/permissionsPaginationAJAX/' + role;
    Mishusoft.pagination($(this).attr('page'), url, 'permissions-data-table');
});
//hide edit pad by default
if (Mishusoft.detectElementById('roleEditMode')) {
    Mishusoft.detectElementById('roleEditMode').innerHTML = 'New';
    Mishusoft.detectElementById('role-data-btn').innerHTML = 'Save';
    Mishusoft.detectElementById('role-reset-btn').innerHTML = 'Reset';
}
//save data by clicking data button
$(document).on('click', '#role-data-btn', AIapp.saveRole);
//reset inputbox by clicking reset button
$(document).on('click', '#role-reset-btn', function () {
    Mishusoft.detectElementById('roleName').value = '';
});
//select data by clicking select button
$(document).on('click', '#role-select', function () {
    if (this.checked) {
        Mishusoft.detectElementById('message2').innerHTML = '';
        Mishusoft.detectElementById('modal01').style.display = 'block';
        Mishusoft.detectElementById('roleEditMode').innerHTML = 'Edit';
        Mishusoft.detectElementById('role-data-btn').innerHTML = 'Update';
        Mishusoft.detectElementById('roleID').value = $(this).attr('data-id');
        Mishusoft.detectElementById('roleName').value = $(this).attr('data-name');
    }
});
//add data form by clicking add button
$(document).on('click', '#role-add-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('modal01').style.display = 'block';
    Mishusoft.detectElementById('roleEditMode').innerHTML = 'New';
    Mishusoft.detectElementById('role-data-btn').innerHTML = 'Save';
    Mishusoft.detectElementById('roleID').value = '';
    Mishusoft.detectElementById('roleName').value = '';
});
//edit data by clicking edit button
$(document).on('click', '#role-edit-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('modal01').style.display = 'block';
    Mishusoft.detectElementById('roleEditMode').innerHTML = 'Edit';
    Mishusoft.detectElementById('role-data-btn').innerHTML = 'Update';
    Mishusoft.detectElementById('roleID').value = $(this).attr('data-id');
    Mishusoft.detectElementById('roleName').value = $(this).attr('data-name');
});
//delete data by clicking delete button
$(document).on('click', '#role-delete-btn', function () {
    Mishusoft.detectElementById('PopUpDialogBox').style.display = 'block';
    Mishusoft.detectElementById('PopUpDialogBoxTitle').innerHTML = 'Message';
    Mishusoft.detectElementById('message3').innerHTML = '<div style="font-size:15px;">Are you want to delete this?</div>';
    Mishusoft.detectElementById('message-done-btn').innerHTML = 'Delete';

    let dataID = $(this).attr('data-id');
    let commandBtn = Mishusoft.detectElementById('message-done-btn').innerHTML;

    $(document).on('click', '#message-done-btn', function () {
        if (commandBtn === 'Delete') {
            let params = {security_code: 1, id: dataID};

            let ajaxDR = new XMLHttpRequest();
            ajaxDR.open("POST", _root_ + 'system/roles/deleteRole', true);
            ajaxDR.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            ajaxDR.send(JSON.stringify(params)); // Make sure to stringify
            //receiving response from ajax
            ajaxDR.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    //show message with another method
                    Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message"));
                }
            };
        }

        Mishusoft.detectElementById('PopUpDialogBox').style.display = 'none';
    });
});

//update role's permission data by clicking  button
$(document).on('click', '#rlprmValue', AIapp.updateRolePermission);
/*end of role section of app manager*/

/*start of users sectin of app manager*/
$('#users-data-table').on('click', '.page', function () {
    let url = 'system/users/indexPaginationAJAX';
    Mishusoft.pagination($(this).attr('page'), url, 'users-data-table');
});
//hide edit pad by default
if (Mishusoft.detectElementById('userEditMode')) {
    Mishusoft.detectElementById('userEditMode').innerHTML = 'New';
    Mishusoft.detectElementById('user-data-btn').innerHTML = 'Save';
    Mishusoft.detectElementById('user-reset-btn').innerHTML = 'Reset';
}
//verify user by clicking verify button
$(document).on('click', '#verfyUSER', function () {
    let params = {
        security_code: 1,
        id: $(this).attr('data-userID'),
        code: $(this).attr('data-userCode')
    };
    let ajax = new XMLHttpRequest();
    ajax.open('POST', _root_ + 'system/users/verifyUser', true);
    ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    ajax.send(JSON.stringify(params)); // Make sure to stringify
    //receiving response from ajax
    ajax.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //show message with another method
            Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("message"));
        }
    };
});
//set textbox value change dynamic after ability checked
$(document).on('keyup', '#userEmail', function () {
    let RequestURL = _root_ + "user/checkValidEmailAddress";
    let dataElement = Mishusoft.detectElementById("userEmail");
    let htmlpad = Mishusoft.detectElementById("message2");
    return Mishusoft.checkValidEmailAddress(RequestURL, dataElement, htmlpad);
});
//set textbox value change dynamic after ability checked
$('#userEditPAD').on('keyup', '#userUsername', function () {
    let RequestURL = _root_ + "user/checkValidUsername";
    let dataElement = Mishusoft.detectElementById("userUsername");
    let htmlpad = Mishusoft.detectElementById("message2");
    return Mishusoft.checkValidUsername(RequestURL, dataElement, htmlpad);
});
//save data by clicking data button
$(document).on('click', '#user-data-btn', AIapp.saveUser);
//reset inputbox by clicking reset button
$(document).on('click', '#user-reset-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('userID').value = '';
    Mishusoft.detectElementById('userFName').value = '';
    Mishusoft.detectElementById('userLName').value = '';
    Mishusoft.detectElementById('userEmail').value = '';
    Mishusoft.detectElementById('userPassword').value = '';
    Mishusoft.detectElementById('userUsername').value = '';
    Mishusoft.detectElementById('userActivity').value = '';
    Mishusoft.detectElementById('userRole').value = '';
});
//add data form by clicking add button
$(document).on('click', '#user-add-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('modal01').style.display = 'block';
    Mishusoft.detectElementById('userEditMode').innerHTML = 'New';
    Mishusoft.detectElementById('user-data-btn').innerHTML = 'Save';
    Mishusoft.detectElementById('userID').value = '';
    Mishusoft.detectElementById('userFName').value = '';
    Mishusoft.detectElementById('userLName').value = '';
    Mishusoft.detectElementById('userEmail').value = '';
    Mishusoft.detectElementById('userPassword').value = '';
    Mishusoft.detectElementById('userUsername').value = '';
    Mishusoft.detectElementById('userActivity').value = '';
    Mishusoft.detectElementById('userRole').value = '';
    Mishusoft.detectElementById('userDateOfBirth').value = '';
    Mishusoft.detectElementById('userGender').value = '';
    Mishusoft.detectElementById('userProfession').value = '';
    Mishusoft.detectElementById('profile_picture').src = _root_ + 'public/images/img_avatar3.png';
});
//select data by clicking select button
$(document).on('click', '#user-select', function () {
    if (this.checked) {
        Mishusoft.detectElementById('message2').innerHTML = '';
        Mishusoft.detectElementById('modal01').style.display = 'block';
        Mishusoft.detectElementById('userEditMode').innerHTML = 'Edit';
        Mishusoft.detectElementById('user-data-btn').innerHTML = 'Update';
        Mishusoft.detectElementById('userID').value = $(this).attr('data-userID');
        Mishusoft.detectElementById('userFName').value = $(this).attr('data-userFName');
        Mishusoft.detectElementById('userLName').value = $(this).attr('data-userLName');
        Mishusoft.detectElementById('userEmail').value = $(this).attr('data-userEmail');
        Mishusoft.detectElementById('userPassword').value = $(this).attr('data-userPassword');
        Mishusoft.detectElementById('userUsername').value = $(this).attr('data-userUsername');
        Mishusoft.detectElementById('userActivity').value = $(this).attr('data-userActivity');
        Mishusoft.detectElementById('userRole').value = $(this).attr('data-userRole');
        Mishusoft.detectElementById('userGender').value = $(this).attr('data-gender');
        Mishusoft.detectElementById('userDateOfBirth').value = $(this).attr('data-dob');
        Mishusoft.detectElementById('userProfession').value = $(this).attr('data-profession');
    }
});
//edit data by clicking edit button
$(document).on('click', '#user-edit-btn', function () {
    Mishusoft.detectElementById('message2').innerHTML = '';
    Mishusoft.detectElementById('modal01').style.display = 'block';
    Mishusoft.detectElementById('userEditMode').innerHTML = 'Edit';
    Mishusoft.detectElementById('user-data-btn').innerHTML = 'Update';
    Mishusoft.detectElementById('userID').value = $(this).attr('data-userID');
    Mishusoft.detectElementById('userFName').value = $(this).attr('data-userFName');
    Mishusoft.detectElementById('userLName').value = $(this).attr('data-userLName');
    Mishusoft.detectElementById('userEmail').value = $(this).attr('data-userEmail');
    Mishusoft.detectElementById('userPassword').value = $(this).attr('data-userPassword');
    Mishusoft.detectElementById('userUsername').value = $(this).attr('data-userUsername');
    Mishusoft.detectElementById('userActivity').value = $(this).attr('data-userActivity');
    Mishusoft.detectElementById('userRole').value = $(this).attr('data-userRole');
    Mishusoft.detectElementById('userGender').value = $(this).attr('data-gender');
    Mishusoft.detectElementById('userDateOfBirth').value = $(this).attr('data-dob');
    Mishusoft.detectElementById('userProfession').value = $(this).attr('data-profession');

    if ($(this).attr('data-profile_picture') !==''){
        Mishusoft.detectElementById('profile_picture').src = _root_ + 'system/users/viewUserCurrentProfilePicture/' + $(this).attr('data-userID') + '/' +$(this).attr('data-profile_picture');
        //{$layoutParams.root}system/users/viewUserCurrentProfilePicture/{$data.id}/{$data.pro_pic}
    } else {
        Mishusoft.detectElementById('profile_picture').src = _root_ + 'public/images/img_avatar3.png';
        //{$layoutParams.publicIMG}img_avatar3.png
    }
});
//delete data by clicking delete button
$(document).on('click', '#user-delete-btn', AIapp.deleteUser);
//add data form by clicking add button
$(document).on('click', '#user-picture-change-btn', function () {
    Mishusoft.detectElementById('userDetailsID').value = $(this).attr('data-user');
    Mishusoft.detectElementById('profile_picture_preview').src = $(this).attr('src');
    AIapp.UploadWindowView('Change profile picture');
});
//show select file name on status bar
$(document).on('change', '#imageFile', function () {
    let file = Mishusoft.detectElementById('imageFile').files[0];
    let totalSize = (file.size / 1024) / 1024;
    Mishusoft.detectElementById('UploadStatusBoard').style.display = 'block';
    Mishusoft.detectElementById('progressbar').style.display = 'none';
    Mishusoft.detectElementById('upload_status').innerHTML = 'File: ' + file.name + ' (' + totalSize.toFixed(2) + ' Mb)';
    Mishusoft.previewImage('imageFile', 'profile_picture_preview');
});
//upload file by clicking button
$(document).on('click', '#uploadImageFile', function () {
    let user = Mishusoft.detectElementById('userDetailsID').value;
    Mishusoft.uploadFile('imageFile', 'imageFile', 'system/users/uploadUserProfilePicture/' + user);
});

//close window data form by clicking add button
$(document).on('click', '#user-picture-data-btn', function () {
    Mishusoft.detectElementById('modal02').style.display = 'none';
});
/*end of users section of app manager*/

/*payment start*/
$(document).on('click','#start-pay', function () {
    Mishusoft.detectElementById('payment-welcome').style.display = 'none';
    Mishusoft.detectElementById('payment-appid-email').style.display = 'block';
});
$(document).on('click','#user-select-done', function () {
    let appIDCheck;
    let emailAddressCheck;
    this.textContent = 'Processing...';
    Mishusoft.detectElementById('app-loader').style.display = 'block';
    Mishusoft.detectElementById('messagePanel').textContent = '';
    Mishusoft.detectElementById('messagePanel').style.display = 'block';
    if (Mishusoft.detectElementById('app-id').value === '') {
        Mishusoft.detectElementById('messagePanel').classList = 'messagePanel ev_error';
        Mishusoft.detectElementById('messagePanel').innerHTML += 'Enter your application id.<br/>';
        this.textContent = 'NEXT';
    } else {
        appIDCheck = 'OK';
    }    if (Mishusoft.detectElementById('email-address').value === '') {
        Mishusoft.detectElementById('messagePanel').classList = 'messagePanel ev_error';
        Mishusoft.detectElementById('messagePanel').innerHTML += 'Enter your email address (valid for more than 14 characters).<br/>';
        this.textContent = 'NEXT';
    } else if (Mishusoft.detectElementById('email-address').value.indexOf('@') === -1 || Mishusoft.detectElementById('email-address').value.indexOf('.') === -1 || Mishusoft.detectElementById('email-address').value.length <= 14) {
        Mishusoft.detectElementById('messagePanel').classList = 'messagePanel ev_error';
        Mishusoft.detectElementById('messagePanel').innerHTML += 'Enter valid email address.<br/>';
        this.textContent = 'NEXT';
    } else {
        emailAddressCheck = 'OK';
    }

    if (appIDCheck === 'OK' && emailAddressCheck === 'OK') {
        let BrJS = new BrowserJS(navigator);
        let params = {
            security_code: 1,
            appId: Mishusoft.detectElementById("app-id").value,
            browserName: BrJS.BrowserNameFull,
            userEmail: Mishusoft.detectElementById("email-address").value,
            planType: Mishusoft.detectElementById("client-plan-type").value,
            plan: Mishusoft.detectElementById("client-plan").value
        };

        let xhr = new XMLHttpRequest();
        xhr.open("POST", _root_ + 'payment/verifyClient', true);
        xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(params));
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("messagePanel"),function (response) {
                    if (response.type === 'error' || response.type === 'success'){
                        Mishusoft.detectElementById('app-loader').style.display = 'none';
                        Mishusoft.detectElementById('user-select-done').textContent = 'NEXT';
                        if (response.type === 'success'){

                            Mishusoft.detectElementById('payment-appid-email').style.display = 'none';
                            window.location.replace(_root_ + 'payment/paynow/' + response.appIdEncrypt + '/' + response.emailEncrypt + '/' + response.paymentPlanTypeEncrypt + '/' + response.paymentPlanEncrypt + '/');
                            /*Mishusoft.detectElementById('app-id-enc').value = response.appIdEnc;
                            Mishusoft.detectElementById('client-name').textContent = response.user.first_name  + ' ' + response.user.last_name ;
                            Mishusoft.detectElementById('app-name').textContent = response.app.name  + ' ' + response.app.version ;*/
                        }
                    }
                });
            }
        };
    }
//alert('clicked');
});


function pay(stripe, elementObject, orderObject, amountObject) {
    //show app loader on submit button clicked
    Mishusoft.detectElementById('app-loader').style.display = 'block';
    let selectedPaymentMethod = document.querySelector('.pay-option-item.active-method');
    let methodObject = { method: { }, currency: { }};
    switch (selectedPaymentMethod.id) {
        case "pay-with-card":
            methodObject.method = 'card';
            methodObject.currency = 'usd';
            paymentConfirm(stripe, methodObject, elementObject, orderObject, amountObject);
            return;
        case "pay-with-ideal":
            methodObject.method = 'ideal';
            methodObject.currency = 'eur';
            paymentConfirm(stripe, methodObject, elementObject, orderObject, amountObject);
            return;
        default:
            Mishusoft.detectElementById('messageBoard').style.display = 'block';
            Mishusoft.detectElementById('messageBoard').textContent = '';
            Mishusoft.detectElementById('messageBoard').classList = 'messageBoard ev_error';
            Mishusoft.detectElementById('messageBoard').innerHTML += 'Error: no payment method selected!!<br/>';
            setTimeout(function () {
                Mishusoft.detectElementById('messageBoard').style.display = 'none';
            }, 3000);
    }
}

function paymentConfirm(stripe, methodObject, elementObject, orderObject, amountObject) {
    /*make a request to get token --starting--*/
    pFetch(_root_ + 'payment/getPaymentToken', {
        methodObject, amountObject,
        description: document.getElementById('order-description').value,
        receiptEmail: document.getElementById('client-email').value
    })
        .then(data => {
            /*console.log(data);*/ // JSON data parsed by `response.json()` call
            Mishusoft.detectElementById('messageBoard').style.display = 'block';
            Mishusoft.detectElementById('messageBoard').previousElementSibling.remove();
            if (data.type === 'success') {
                if (methodObject.method === 'card') {
                    stripe.confirmCardPayment(data.client_secret, {
                        payment_method: {
                            card: elementObject.card,
                            billing_details: {
                                name: orderObject.client.fullName
                            }
                        },
                        receipt_email: orderObject.client.emailAddress
                    })
                        .then(function (result) {
                            if (result.error) {
                                Mishusoft.detectElementById('messageBoard').textContent = '';
                                Mishusoft.detectElementById('messageBoard').classList = 'messageBoard ev_error';
                                Mishusoft.detectElementById('messageBoard').innerHTML += result.error.message + '<br/>';
                                Mishusoft.detectElementById('app-loader').style.display = 'none';
                            } else {
                                if (result.paymentIntent.status === 'succeeded') {
                                    /*payment completer*/
                                    paymentCompleted(amountObject, orderObject.client.id, orderObject.app.id, data.client_secret);
                                    /*payment completer*/
                                }
                            }
                        });
                } else if (methodObject.method === 'ideal') {
                    stripe.confirmIdealPayment(data.client_secret, {
                        payment_method: {
                            ideal: elementObject.idealBank,
                            billing_details: {
                                name: orderObject.client.fullName
                            }
                        },
                        return_url: window.location.href,
                    })
                        .then(function (result) {
                            if (result.error) {
                                Mishusoft.detectElementById('messageBoard').textContent = '';
                                Mishusoft.detectElementById('messageBoard').classList = 'messageBoard ev_error';
                                Mishusoft.detectElementById('messageBoard').innerHTML += result.error.message + '<br/>';
                                Mishusoft.detectElementById('app-loader').style.display = 'none';
                            } else {
                                if (result.paymentIntent.status === 'succeeded') {
                                    alert(result)
                                    /*payment completer*/
                                    paymentCompleted(amountObject, orderObject.client.id, orderObject.app.id, data.client_secret);
                                    /*payment completer*/
                                }
                            }
                        });
                } else {
                    Mishusoft.detectElementById('messageBoard').style.display = 'block';
                    Mishusoft.detectElementById('messageBoard').textContent = '';
                    Mishusoft.detectElementById('messageBoard').classList = 'messageBoard ev_error';
                    Mishusoft.detectElementById('messageBoard').innerHTML += 'Error: no payment method selected!!<br/>';
                    setTimeout(function () {
                        Mishusoft.detectElementById('messageBoard').style.display = 'none';
                    }, 3000);
                }

                Mishusoft.detectElementById('messageBoard').textContent = '';
                Mishusoft.detectElementById('messageBoard').classList = 'messageBoard ev_' + data.type;
                Mishusoft.detectElementById('messageBoard').innerHTML += data.message + '<br/>';
            } else if (data.type === 'error') {
                if (Mishusoft.detectElementById('app-loader').style.display === 'block') {
                    Mishusoft.detectElementById('app-loader').style.display = 'none';
                }
                Mishusoft.detectElementById('messageBoard').textContent = '';
                Mishusoft.detectElementById('messageBoard').classList = 'messageBoard ev_' + data.type;
                Mishusoft.detectElementById('messageBoard').innerHTML += data.message + '<br/>';
            } else {
                if (Mishusoft.detectElementById('app-loader').style.display === 'block') {
                    Mishusoft.detectElementById('app-loader').style.display = 'none';
                }
                Mishusoft.detectElementById('messageBoard').textContent = '';
                Mishusoft.detectElementById('messageBoard').classList = 'messageBoard ev_error';
                Mishusoft.detectElementById('messageBoard').innerHTML += 'Invalid request!!<br/>';
            }
        });
    /*make a request to get token --ending--*/

}

function paymentCompleted(amountObject, payerClientId, markedAppId, payerPaymentToken) {
    /*payment complete function work here*/
    pFetch(_root_ + 'payment/paymentCompletion', {
            security_code: 1, amountObject,
            clientId: payerClientId, appId: markedAppId,
            paymentToken: payerPaymentToken
        }
    )
        .then(d => {
            /*console.log(d);*/ // JSON data parsed by `response.json()` call
            Mishusoft.showMessage(JSON.stringify(d), Mishusoft.detectElementById("messagePanel"), function (response) {
                if (response.type === 'success') {
                    window.postMessage({type: 'mishusoft-payment-confirm', payload: {licence: response.licence}}, '*');
                    Mishusoft.detectElementById('messageBoard').textContent = '';
                    Mishusoft.detectElementById('messageBoard').classList = 'messageBoard ev_success';
                    Mishusoft.detectElementById('messageBoard').innerHTML += 'Payment completed!!<br/>';
                    Mishusoft.detectElementById('app-loader').style.display = 'none';
                } else {
                    Mishusoft.detectElementById('messageBoard').textContent = '';
                    Mishusoft.detectElementById('messageBoard').classList = 'messageBoard ev_success';
                    Mishusoft.detectElementById('messageBoard').innerHTML += response.message + '!!<br/>';
                    Mishusoft.detectElementById('app-loader').style.display = 'none';
                }
            });
        });
    /*payment function*/
}

function showElement(query) {
    document.querySelector(query).classList.remove("hidden");
}

function hideElement(query) {
    document.querySelector(query).classList.add("hidden");
}

/*payment end*/

/*ending system Module*/