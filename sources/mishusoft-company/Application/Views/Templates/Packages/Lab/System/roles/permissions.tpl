<div class="row col-lg-12 col-md-12">
    <div class="row col-lg-8 col-md-8">
        <fieldset class="box-shadow-light">
            <legend class="box-shadow-light">
                Role : {if isset($role) && count($role)} {$role.role}{/if}
                <input type="hidden" id="hidden-role-id" value="{if isset($role_id)}{$role_id}{/if}">
            </legend>
            <div class="row">
                <div id="message"> <!-- only javascript show message --> </div>
                <div class="row">
                    <table class="table">
                        <tr>
                            <td>
                                <a href="javascript:void(0);" onclick="window.location = _root_ + 'system/roles'"
                                   class="button button-danger float-left">
                                    <i class="fas fa-arrow-left" aria-hidden="true"></i> Back
                                </a>
                            </td>
                        </tr>
                    </table>
                    <div id="roles-permissions-data-table">
                        <table class="table table-condensed table-striped">
                            <thead class="text-notify">
                            <tr>
                                <th class="text-align-center"> Id</th>
                                <th class="text-align-left"> Permission</th>
                                <th class="text-align-left"> Key</th>
                                <th class="text-align-center"> PKID</th>
                                <th class="text-align-center"> Status</th>
                                <th class="text-align-center"> Enable</th>
                                <th class="text-align-center"> Reject</th>
                                <th class="text-align-center"> Ignore</th>
                            </tr>
                            </thead>
                            <tbody id="permissions-data2">
                            {if isset($rolePermissions) && count($rolePermissions)}
                                {foreach item = rlprm  from = $rolePermissions}
                                    <tr>
                                        <td class="text-align-center">{$rlprm.id}</td>
                                        <td class="text-align-left">{$rlprm.name}</td>
                                        <td class="text-align-left">{$rlprm.key}</td>
                                        <td class="text-align-center">{$rlprm.PKID}</td>
                                        <td class="text-align-center">{$rlprm.value}</td>
                                        <td class="text-align-center">
                                            <label><input id="rlprmValue" type="radio" data-roleid="{$role.id_role}"
                                                          data-permissionid="{$rlprm.id}"
                                                          data-value="1" {if $rlprm.value === 1} checked {/if}/></label>
                                        </td>
                                        <td class="text-align-center">
                                            <label><input id="rlprmValue" type="radio" data-roleid="{$role.id_role}"
                                                          data-permissionid="{$rlprm.id}"
                                                          data-value="0" {if $rlprm.value === 0} checked {/if}/></label>
                                        </td>
                                        <td class="text-align-center">
                                            <label><input id="rlprmValue" type="radio" data-roleid="{$role.id_role}"
                                                          data-permissionid="{$rlprm.id}"
                                                          data-value="x" {if $rlprm.value === 'x'} checked {/if}/></label>
                                        </td>
                                    </tr>
                                {/foreach}
                            {/if}
                            </tbody>
                            <tfoot class="text-notify">
                            <tr>
                                <th class="text-align-center"> Id</th>
                                <th class="text-align-left"> Permission</th>
                                <th class="text-align-left"> Key</th>
                                <th class="text-align-center"> PKID</th>
                                <th class="text-align-center"> Status</th>
                                <th class="text-align-center"> Enable</th>
                                <th class="text-align-center"> Reject</th>
                                <th class="text-align-center"> Ignore</th>
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