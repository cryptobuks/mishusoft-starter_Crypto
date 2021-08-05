<table class="table table-condensed table-striped">
    <thead class="text-notify">
    <tr>
        <th class="text-align-center" style="width: 20px;">
            <label class="input-container">
                <input type="checkbox" id="select_all" class="checkbox">
                <span class="checkmark"></span>
            </label>
        </th>
        <th class="text-align-left">Name</th>
        <th class="text-align-left">Installed Folder</th>
        <th class="text-align-center">status</th>
        <th class="text-align-center" style="width: 80px;">Action</th>
    </tr>
    </thead>
    <tbody id="modules-data">

    {if isset($modules) && count($modules)}
        {foreach item = data  from = $modules}
            <tr>
                <td class="text-align-center">
                    <label class="input-container">
                        <input type="checkbox" id="module-select" class="checkbox"
                               data-id="{$data.id}" data-name="{$data.name}" data-status="{$data.status}"/>
                        <span class="checkmark"></span>
                    </label>
                </td>
                <td class="text-align-left">{ucfirst($data.name)}</td>
                <td class="text-align-left">{ModulesDIR}{$data.name}</td>
                <td class="text-align-center">
                    {if isset($data.status) && !empty($data.status)}
                        {if $data.status === 'enable'}
                            <a href="javascript:void(0);" class="button button-xs button-success">&radic;</a>
                        {else}
                            <a href="javascript:void(0);" class="button button-xs button-danger">&times;</a>
                        {/if}
                    {/if}
                </td>
                <td class="text-align-center">
                    <a href="javascript:void(0);" id="module-edit-btn"
                       class="button button-xs button-success" data-id="{$data.id}" data-name="{$data.name}" data-status="{$data.status}"><i
                                class="far fa-edit"></i></a>&nbsp;&nbsp;
                    <a href="javascript:void(0);" id="module-delete-btn"
                       class="button button-xs button-danger" data-id="{$data.id}" command="Delete"><i
                                class="far fa-trash-alt"></i></a>
                </td>
            </tr>
        {/foreach}

    {else}
        <tr>
            <td class="text-align-center" colspan="9"> No module found.</td>
        </tr>
    {/if}
    </tbody>
    <tfoot class="text-notify">
    <tr>
        <th class="text-align-center" style="width: 20px;">
            <label class="input-container">
                <input type="checkbox" id="select_all" class="checkbox">
                <span class="checkmark"></span>
            </label>
        </th>
        <th class="text-align-left">Name</th>
        <th class="text-align-left">Installed Folder</th>
        <th class="text-align-center">status</th>
        <th class="text-align-center" style="width: 80px;">Action</th>
    </tr>
    </tfoot>
</table>
{$pagination|default:""}