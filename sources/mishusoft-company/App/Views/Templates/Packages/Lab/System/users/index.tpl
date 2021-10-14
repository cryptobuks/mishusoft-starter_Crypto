<div class="row">
    <div style="margin: 0 auto; width: 100%;">
        <fieldset class="box-shadow-light">
            <legend class="box-shadow-light"> Users</legend>
            <div class="row">
                <div id="message"> <!-- only javascript show message --> </div>
                <div class="row">
                    <div id="modal01" class="modal">
                        <div class="row md-modal-content animate">
                            <div class="modal-header">
                                <span id="userEditMode"></span> user
                            </div>
                            <div class='modal-body'>
                                <div id="message2"> <!-- only javascript show message --> </div>
                                <div id="userEditPAD">
                                    <form name="userform1" id="userform1" method="post">
                                        <input id="userID" type="hidden" value=""/>
                                        <table class="table table-condensed">
                                            <tr>
                                                <td rowspan="2" style="width: 30%">
                                                    <div class="text-align-center">
                                                        <label>
                                                            <img alt="Photo" id="profile_picture"
                                                                 src="{$layoutParams.publicIMG}img_avatar3.png"
                                                                 style="width:120px;height:120px;" class="profile_picture_on_manage"
                                                                 title="Profile picture">
                                                        </label>
                                                    </div>
                                                </td>
                                                <td style="width: 35%">
                                                    <label for="userFName">First Name:</label>
                                                    <input id="userFName" type="text" class="input-control" placeholder="First name:" maxlength="30"/>
                                                </td>
                                                <td style="width: 35%">
                                                    <label for="userLName">Last Name:</label>
                                                    <input id="userLName" type="text" class="input-control" placeholder="Last name" maxlength="30"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" style="width: 70%;">
                                                    <label for="userEmail">Email:</label>
                                                    <input id="userEmail" type="email" class="input-control" placeholder="Email address" maxlength="60"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 30%;">
                                                    <label for="userUsername">Username:</label>
                                                    <input id="userUsername" type="text" class="input-control" placeholder="Username" maxlength="30" autocomplete="stop"/>
                                                </td>
                                                <td style="width: 35%;">
                                                    <label for="userPassword">Password:</label>
                                                    <input id="userPassword" type="password" class="input-control" placeholder="Password" maxlength="30" autocomplete="stop"/>
                                                </td>
                                                <td style="width: 35%;">
                                                    <label>
                                                        Gender:
                                                        <select id="userGender" class="input-control" title="Activity">
                                                            <option value=""> -- select one --</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select></label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 30%;">
                                                    <label for="userDateOfBirth">Date of birth:</label>
                                                    <input id="userDateOfBirth" type="date" class="input-control"
                                                           placeholder="Password" maxlength="30" autocomplete="stop"/>
                                                </td>
                                                <td style="width: 35%;">
                                                    <label>
                                                        <label for="userProfession" class="">Profession:</label>
                                                        <select id="userProfession" class="input-control"
                                                                title="Activity">
                                                            <option value=""> -- select one --</option>
                                                            <option value="engineer">Engineer</option>
                                                            <option value="doctor">Doctor</option>
                                                            <option value="publicservices">Public services</option>
                                                            <option value="lawyer">Lawyer</option>
                                                            <option value="manager">Manager</option>
                                                            <option value="bankjob">Bank job</option>
                                                            <option value="ca">CA</option>
                                                            <option value="police">Police</option>
                                                            <option value="teacher">Teacher</option>
                                                            <option value="pilot">Pilot</option>
                                                            <option value="programmer">Programmer</option>
                                                            <option value="student">Student</option>
                                                            <option value="others">Others</option>
                                                        </select></label>
                                                </td>
                                                <td style="width: 35%;">
                                                    <label>
                                                        Role:
                                                        <select id="userRole" class="input-control" title="select">
                                                            <option value=""> -- select one --</option>
                                                            {if isset($roles) && count($roles)}
                                                                {foreach item = rl  from = $roles}
                                                                    <option value="{$rl.id_role}">{$rl.role}</option>
                                                                {/foreach}
                                                            {/if}
                                                        </select>
                                                    </label>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style="width: 30%;">
                                                    <label>
                                                        Activity:
                                                        <select id="userActivity" class="input-control"
                                                                title="Activity">
                                                            <option value=""> -- select one --</option>
                                                            <option value="active">Active</option>
                                                            <option value="Inactive">Inactive</option>
                                                        </select>
                                                    </label>
                                                </td>
                                                <td style="width: 35%;">
                                                </td>
                                                <td style="width: 35%;">
                                                </td>
                                            </tr>
                                        </table>
                                    </form>
                                </div>
                            </div>
                            <div class='row2 modal-footer'>
                                <a href="javascript:void(0);"
                                   onclick="Mishusoft.detectElementById('modal01').style.display = 'none'"
                                   class="button button-danger float-left">Cancel</a>
                                <a href="javascript:void(0);" id="user-data-btn"
                                   class="button button-primary float-right">
                                    <!-- only javascript show button name --> </a>
                                <a href="javascript:void(0);" id="user-reset-btn"
                                   class="button button-danger float-right">
                                    <!-- only javascript show button name --> </a>
                            </div>
                        </div>
                    </div>
                    <div id="modal02" class="modal">
                        <div class="row sm-modal-content animate">
                            <div class="modal-header">
                                <span id="userProfilePictureUploadMode"></span>
                            </div>
                            <div class='modal-body'>
                                <div id="message3"> <!-- only javascript show message --> </div>
                                <div id="userProfilePictureUploadPAD">
                                    <form name="userProfilePictureform1" id="userProfilePictureform1" method="post">
                                        <input id="userDetailsID" type="hidden" value=""/>
                                        <table class="table table-condensed">
                                            <tr>
                                                <td>
                                                    <div class="text-align-center">
                                                        <label>
                                                            <img alt="Photo" id="profile_picture_preview"
                                                                 src="{$layoutParams.publicIMG}img_avatar3.png"
                                                                 class="profile_picture_on_manage"
                                                                 title="Please click to add new picture.">
                                                            <input type="file" name="imageFile" id="imageFile"
                                                                   accept="image/jpeg, image/png"
                                                                   style="display: none;"/>
                                                        </label>

                                                        <br/>
                                                        <a href="javascript:void(0)" id="uploadImageFile"
                                                           class="button button-success"><i class="fas fa-upload"></i>&nbsp;Upload</a>
                                                        <br/>
                                                        <div id="UploadStatusBoard">
                                                            <progress id="progressbar" max="100" value="0"></progress>
                                                            <h3 id="upload_status"></h3>
                                                            <p id="loaded_n_total"></p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </form>
                                </div>
                            </div>
                            <div class='row2 modal-footer'>
                                <a href="javascript:void(0);" id="user-picture-data-btn"
                                   class="button button-primary float-right">
                                    <!-- only javascript show button name --> </a>
                            </div>
                        </div>
                    </div>

                    <div id="PopUpDialogBox" class="modal">
                        <div class="row md-modal-content animate">
                            <div class="modal-header">
                                <span id="PopUpDialogBoxTitle"> <!-- only javascript show action status --> </span>
                            </div>
                            <div class='modal-body'>
                                <div id="message3"> <!-- only javascript show message --> </div>
                            </div>
                            <div class='row2 modal-footer'>
                                <a href="javascript:void(0);" id="message-done-btn"
                                   class="button button-primary float-right">
                                    <!-- only javascript show button name --> </a>
                                <a href="javascript:void(0);"
                                   onclick="Mishusoft.detectElementById('PopUpDialogBox').style.display = 'none'"
                                   class="button button-danger float-right">Cancel</a>
                            </div>
                        </div>
                    </div>
                    <table class="table">
                        <tr>
                            <td>
                                <a href="javascript:void(0);" onclick="window.location = _root_ + 'system'"
                                   class="button button-danger">
                                    <i class="fas fa-arrow-left" aria-hidden="true"></i> Back
                                </a>
                            </td>
                            <td>
                                <a href="javascript:void(0);" id="user-add-btn"
                                   class="button button-success float-right"><i class="fas fa-user-plus"></i>&nbsp;New
                                    user</a>
                            </td>
                        </tr>
                    </table>
                    <div id="users-data-table">
                        <table class="table table-condensed table-striped table-xs">
                            <thead class="text-notify">
                            <tr>
                                <th class="text-align-center" style="width: 20px">
                                    <label><input id="checkAll" type="checkbox" class="check_box"/></label>
                                </th>
                                <th class="text-align-center" style="width: 20px">S/N</th>
                                <th class="text-align-center" style="width: 40px">Photo</th>
                                <th class="text-align-left">First name</th>
                                <th class="text-align-left">Last name</th>
                                <th class="text-align-center">Email address</th>
                                <th class="text-align-center">Password</th>
                                <th class="text-align-center">Username</th>
                                <th class="text-align-center">Activity</th>
                                <th class="text-align-center">Role</th>
                                <th class="text-align-center">Verifed</th>
                                <th class="text-align-center">Join Date</th>
                                <th class="text-align-center" style="width: 80px;">Action</th>
                            </tr>
                            </thead>
                            <tbody id="users-data">
                            {if isset($users) && count($users)}
                                {foreach item = data  from = $users}
                                    {*{$data|print_r}*}
                                    <tr>
                                        <td class="text-align-center">
                                            <label>
                                                <input type="checkbox" id="user-select" class="check_box"
                                                       data-userID="{$data.id}"
                                                       data-userFName="{$data.first_name}"
                                                       data-userLName="{$data.last_name}"
                                                       data-userEmail="{$data.email}"
                                                       data-userPassword="{Hash::StaticDecrypt($data.password)}"
                                                       data-userUsername="{$data.username}"
                                                       data-userActivity="{$data.activity}"
                                                       data-userRole="{$data.roleId}"/>
                                            </label>
                                        </td>
                                        <td class="text-align-center">{$data.serial}</td>
                                        <td class="text-align-center">
                                            {if ($data.pro_pic)}
                                                <img alt="Photo" id="user-picture-change-btn" data-user="{$data.id}"
                                                     src="{$layoutParams.root}system/users/viewUserCurrentProfilePicture/{$data.id}/{$data.pro_pic}"
                                                     title="Please click to change picture." class="profile_picture_on_manage"
                                                     style="width:40px;height:40px">
                                            {else}
                                                <img alt="Photo" id="user-picture-change-btn" data-user="{$data.id}"
                                                     src="data:image/png;base64,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"
                                                     title="Please click to change picture." class="profile_picture_on_manage"
                                                     style="width:40px;height:40px">
                                            {/if}
                                        </td>
                                        <td class="text-align-left">{$data.first_name}</td>
                                        <td class="text-align-left">{$data.last_name}</td>
                                        <td class="text-align-center">{$data.email}</td>
                                        <td class="text-align-center">{Hash::StaticDecrypt($data.password)}</td>
                                        <td class="text-align-center">{$data.username}</td>
                                        <td class="text-align-center">{$data.activity}</td>
                                        <td class="text-align-center">{$data.roleName}</td>
                                        <td class="text-align-center">
                                            {if ($data.status === 1)}
                                                <a href="javascript:void(0)" class="button button-xs button-success"><i
                                                            class="far fa-check-circle"></i></a>
                                            {else}<a href="javascript:void(0)" id="verfyUSER"
                                                     class="button button-xs button-danger" data-userID="{$data.id}"
                                                     data-userCode="{$data.code}" ><i class="far fa-times-circle"></i>
                                                </a>{/if}
                                        </td>
                                        <td class="text-align-center"><span title="{$data.r_date}">{substr($data.r_date, 0, 10)}</span></td>
                                        <td class="text-align-center">
                                            <a href="javascript:void(0);" id="user-edit-btn"
                                               class="button button-xs button-success" data-userID="{$data.id}"
                                               data-userFName="{$data.first_name}" data-userLName="{$data.last_name}"
                                               data-userEmail="{$data.email}"
                                               data-userPassword="{Hash::StaticDecrypt($data.password)}"
                                               data-userUsername="{strtolower($data.username)}"
                                               data-userActivity="{$data.activity}" data-userRole="{$data.roleId}"
                                               data-gender="{$data.gender}" data-dob="{$data.date_of_birth}"
                                               data-profession="{$data.profession}"
                                               data-profile_picture="{$data.pro_pic}"><i
                                                        class="far fa-edit"></i></a>&nbsp;&nbsp;
                                            <a href="javascript:void(0);" id="user-delete-btn"
                                               class="button button-xs button-danger" data-userID="{$data.id}"><i
                                                        class="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                {/foreach}
                            {else}
                                <tr>
                                    <td class="text-align-center" colspan="14">No user found in database.</td>
                                </tr>
                            {/if}
                            </tbody>
                            <tfoot class="text-notify">
                            <tr>
                                <th class="text-align-center" style="width: 20px">
                                    <label><input id="checkAll" type="checkbox" class="check_box"/></label>
                                </th>
                                <th class="text-align-center" style="width: 20px">S/N</th>
                                <th class="text-align-center" style="width: 40px">Photo</th>
                                <th class="text-align-left">First name</th>
                                <th class="text-align-left">Last name</th>
                                <th class="text-align-center">Email address</th>
                                <th class="text-align-center">Password</th>
                                <th class="text-align-center">Username</th>
                                <th class="text-align-center">Activity</th>
                                <th class="text-align-center">Role</th>
                                <th class="text-align-center">Verifed</th>
                                <th class="text-align-center">Join Date</th>
                                <th class="text-align-center" style="width: 80px;">Action</th>
                            </tr>
                            </tfoot>
                        </table>
                        {$pagination|default:""}
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</div>

<style>

</style>