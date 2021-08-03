<div class="row col-lg-12 col-md-12">
    <div class="row col-lg-8 col-md-8">
        <fieldset class="box-shadow-light">
            <legend class="box-shadow-light"> Roles</legend>
            <div class="row">
                <div id="message"> <!-- only javascript show message --> </div>
                <div class="row">
                    <div id="modal01" class="modal">
                        <div class="row md-modal-content animate">
                            <div class="modal-header">
                                <span id="roleEditMode"> <!-- only javascipt show action status --> </span>&nbsp;role
                            </div>
                            <div class='modal-body'>
                                <div id="message2"> <!-- only javascipt show message --> </div>
                                <div id="roleEditPAD">
                                    <form name="form1" id="roleform1" method="post">
                                        <input id="roleID" type="hidden" value=""/>
                                        <table class="table table-condensed">
                                            <tr>
                                                <td>
                                                    Name:
                                                    <input title="New role name" id="roleName" type="text" class="input-control" value=""
                                                           placeholder="New role name" maxlength="30"/>
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
                                <a href="javascript:void(0);" id="role-data-btn"
                                   class="button button-primary float-right">
                                    <!-- only javascipt show button name --> </a>
                                <a href="javascript:void(0);" id="role-reset-btn"
                                   class="button button-danger float-right">
                                    <!-- only javascipt show button name --> </a>
                            </div>
                        </div>
                    </div>

                    <div id="PopUpDialogBox" class="modal">
                        <div class="row md-modal-content animate">
                            <div class="modal-header">
                                <span id="PopUpDialogBoxTitle"> <!-- only javascript show action status --> </span>
                            </div>
                            <div class='modal-body'>
                                <div id="message3"> <!-- only javascipt show message --> </div>
                            </div>
                            <div class='row2 modal-footer'>
                                <a href="javascript:void(0);" id="message-done-btn"
                                   class="button button-primary float-right">
                                    <!-- only javascipt show button name --> </a>
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
                                   class="button button-danger float-left">
                                    <i class="fas fa-arrow-left" aria-hidden="true"></i> Back
                                </a>
                            </td>
                            <td><a href="javascript:void(0);" id="role-add-btn"
                                   class="button button-success float-right">
                                    <i class="fas fa-plus-circle"></i> Add New</a></td>
                        </tr>
                    </table>


                    <div id="roles-data-table">
                        <table class="table table-condensed table-striped">
                            <thead class="text-notify">
                            <tr>
                                <th class="text-align-center" style="width: 20px">
                                    <label class="input-container">
                                        <input type="checkbox" id="select_all" class="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </th>
                                <th class="text-align-center" style="width: 20px">ID</th>
                                <th class="text-align-left">Role</th>
                                <th class="text-align-center">Permissions</th>
                                <th class="text-align-center" style="width: 80px;">Action</th>
                            </tr>
                            </thead>
                            <tbody id="roles-data">
                            {if isset($roles) && count($roles)}
                                {foreach item = data  from = $roles}
                                    <tr>
                                        <td class="text-align-center">
                                            <label class="input-container">
                                                <input type="checkbox" id="role-select" class="checkbox"
                                                       data-id="{$data.id_role}"
                                                       data-name="{$data.role}"
                                                       data-permission="{$data.permission}"/>
                                                <span class="checkmark"></span>
                                            </label>
                                        </td>
                                        <td class="text-align-center">{$data.id_role}</td>
                                        <td class="text-align-left">{$data.role}</td>
                                        <td class="text-align-center"> <a href="{$layoutParams.root}system/roles/permissions/{$data.id_role}" class="action-button">View</a> </td>
                                        <td class="text-align-center">
                                            <a href="javascript:void(0);" id="role-edit-btn"
                                               class="button button-xs button-success"
                                               data-id="{$data.id_role}"
                                               data-name="{$data.role}"
                                               data-permission="{$data.permission}"><i class="far fa-edit"></i></i></a>&nbsp;&nbsp;
                                            <a href="javascript:void(0);" id="role-delete-btn"
                                               class="button button-xs button-danger"
                                               data-id="{$data.id_role}"><i
                                                        class="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                {/foreach}
                            {/if}
                            </tbody>
                            <tfoot class="text-notify">
                            <tr>
                                <th class="text-align-center" style="width: 20px">
                                    <label class="input-container">
                                        <input type="checkbox" id="select_all" class="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </th>
                                <th class="text-align-center" style="width: 20px">ID</th>
                                <th class="text-align-left">Role</th>
                                <th class="text-align-center">Permissions</th>
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

    <div class="row col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="row col-lg-12 col-md-12 col-sm-6 col-xs-12">
            <fieldset class="box-shadow-light">
                <legend class="box-shadow-light"> Notifications</legend>
                <div class="row" id="VAL_div">
                    <div class="box-message box-notify box-shadow-light">
                        <span class="notify-icon"><i class="fa fa-info-circle"></i></span>&nbsp;
                        <span class="notify-md-content"> Loading...</span>
                    </div>
                </div>
                <a href="#" class="button button-success float-right"><i class="fa fa-list"></i> See more</a>
            </fieldset>

        </div>
        <div class="row col-lg-12 col-md-12 col-sm-6 col-xs-12">
            <fieldset class="box-shadow-light">
                <legend class="box-shadow-light"> Messages</legend>
                <div class="row" id="CCM_div">
                    <div class="box-message box-notify box-shadow-light">
                        <span class="notify-icon"><i class="fa fa-info-circle"></i></span>&nbsp;
                        <span class="notify-md-content"> Loading...</span>
                    </div>
                </div>
                <a href="#" class="button button-success float-right"><i class="fa fa-list"></i> See more</a>
            </fieldset>
        </div>
    </div>
</div>