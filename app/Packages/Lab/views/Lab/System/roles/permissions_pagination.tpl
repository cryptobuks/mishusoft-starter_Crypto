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