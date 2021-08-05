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
        <th class="text-align-left">Name</th>
        <th class="text-align-left">Key</th>
        <th class="text-align-center">PKID</th>
        <th class="text-align-center" style="width: 80px;">Action</th>
    </tr>
    </thead>
    <tbody id="permissions-data2">
    {if isset($permissions) && count($permissions)}
        {foreach item = data  from = $permissions}
            <tr>
                <td class="text-align-center">
                    <label class="input-container">
                        <input type="checkbox" id="permission-select" class="checkbox"
                               data-permissionID="{$data.id_permission}"
                               data-permissionName="{$data.permission}"
                               data-permissionKey="{$data.key}"
                               data-permissionPKID="{$data.PKID}"/>
                        <span class="checkmark"></span>
                    </label>
                </td>
                <td class="text-align-center">{$data.id_permission}</td>
                <td class="text-align-left">{$data.permission}</td>
                <td class="text-align-left">{$data.key}</td>
                <td class="text-align-center">{$data.PKID}</td>
                <td class="text-align-center">
                    <a href="javascript:void(0);" id="permission-edit-btn"
                       class="button button-xs button-success"
                       data-permissionID="{$data.id_permission}"
                       data-permissionName="{$data.permission}" data-permissionKey="{$data.key}"
                       data-permissionPKID="{$data.PKID}"><i class="far fa-edit"></i></i></a>&nbsp;&nbsp;
                    <a href="javascript:void(0);" id="permission-delete-btn"
                       class="button button-xs button-danger"
                       data-permissionID="{$data.id_permission}"><i
                                class="far fa-trash-alt"></i></a>
                </td>
            </tr>
        {/foreach}
    {/if}
    <!--tr><td class="text-align-center" colspan="6">Loading.......</td></tr-->
    <!-- only javascript show action status -->
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
        <th class="text-align-left">Name</th>
        <th class="text-align-left">Key</th>
        <th class="text-align-center">PKID</th>
        <th class="text-align-center" style="width: 80px;">Action</th>
    </tr>
    </tfoot>
</table>

{$pagination|default:""}