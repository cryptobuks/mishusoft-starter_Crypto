<table class="table table-condensed table-striped">
    <thead class="text-notify">
    <tr>
        <th class="text-align-center" style="width: 20px;">
            <label class="input-container">
                <input type="checkbox" id="select_all" class="checkbox">
                <span class="checkmark"></span>
            </label>
        </th>
        <th class="text-align-center">ID</th>
        <th class="text-align-center">Parent</th>
        <th class="text-align-left">Title</th>
        <th class="text-align-left">Url</th>
        <th class="text-align-center">Icon</th>
        <th class="text-align-center">Position</th>
        <th class="text-align-center">Permission</th>
        <th class="text-align-center" style="width: 80px;">Action</th>
    </tr>
    </thead>
    <tbody id="menus-data">

    {if isset($menus) && count($menus)}
        {foreach item = data  from = $menus}
            <tr>
                <td class="text-align-center">
                    <label class="input-container">
                        <input type="checkbox" id="menu-select" class="checkbox"
                               data-id="{$data.id}" data-parentid="{$data.parent_id}"
                               data-title="{$data.title}"
                               data-url="{$data.url}"
                               data-icon="{$data.icon}" data-position="{$data.position}"
                               data-permission="{$data.permission}"/>
                        <span class="checkmark"></span>
                    </label>
                </td>
                <td class="text-align-center">{$data.id}</td>
                <td class="text-align-center">{$data.parent_id}</td>
                <td class="text-align-left">{$data.title}</td>
                <td class="text-align-center">{$data.url}</td>
                <td class="text-align-center">{$data.icon}</td>
                <td class="text-align-center">{$data.position}</td>
                <td class="text-align-center">{$data.permission}</td>
                <td class="text-align-center">
                    <a href="javascript:void(0);" id="menu-edit-btn"
                       class="button button-xs button-success" data-id="{$data.id}" data-parentid="{$data.parent_id}"
                       data-title="{$data.title}"
                       data-url="{$data.url}"
                       data-icon="{$data.icon}" data-position="{$data.position}"
                       data-permission="{$data.permission}"><i
                                class="far fa-edit"></i></a>&nbsp;&nbsp;
                    <a href="javascript:void(0);" id="menu-delete-btn"
                       class="button button-xs button-danger" data-id="{$data.id}"><i
                                class="far fa-trash-alt"></i></a>
                </td>
            </tr>
        {/foreach}

    {else}
        <tr>
            <td class="text-align-center" colspan="9"> No menu found.</td>
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
        <th class="text-align-center">ID</th>
        <th class="text-align-left">Parent</th>
        <th class="text-align-left">Title</th>
        <th class="text-align-left">Url</th>
        <th class="text-align-center">Icon</th>
        <th class="text-align-center">Position</th>
        <th class="text-align-center">Permission</th>
        <th class="text-align-center" style="width: 80px;">Action</th>
    </tr>
    </tfoot>
</table>
{$pagination|default:""}