<table class="table table-condensed table-striped">
    <thead class="text-notify" style="width: 100%">
    <tr>
        <th class="text-align-center" style="width: 20px;">
            <label class="input-container">
                <input type="checkbox" id="select_all" class="checkbox">
                <span class="checkmark"></span>
            </label>
        </th>
        <th class="text-align-center" style="width: 40px;">ID</th>
        <th class="text-align-left">Name</th>
        <th class="text-align-left">Address</th>
        <th class="text-align-center">Status</th>
        <th class="text-align-center" style="width: 50px;">Stuff</th>
        <th class="text-align-center" style="width: 100px;">Action</th>
    </tr>
    </thead>
    <tbody id="branches-data">
    {if isset($branches) && count($branches)}
        {foreach item = data  from = $branches}
            <tr>
                <td class="text-align-center">
                    <label class="input-container">
                        <input type="checkbox" id="branch-select" class="checkbox"
                               data-id="{$data.id}" data-name="{$data.name}"
                               data-status="{$data.status}" data-location="{$data.location}"/>
                        <span class="checkmark"></span>
                    </label>
                </td>
                <td class="text-align-center">{$data.id}</td>
                <td class="text-align-left">{$data.name}</td>
                <td class="text-align-left">{$data.location}</td>
                <td class="text-align-center">{$data.status}</td>
                <td class="text-align-center"><a
                            href="{$server_root}system/branches/users/{$data.id}"
                            class="action-button">View</a></td>
                <td class="text-align-center">
                    <a href="javascript:void(0);" id="branch-edit-btn"
                       class="button button-xs button-success" data-id="{$data.id}"
                       data-name="{$data.name}" data-status="{$data.status}"
                       data-location="{$data.location}">
                        <i class="far fa-edit"></i></a>&nbsp;&nbsp;
                    <a href="javascript:void(0);" id="branch-delete-btn"
                       class="button button-xs button-danger" data-id="{$data.id}" command="Delete">
                        <i class="far fa-trash-alt"></i></a>
                </td>
            </tr>
        {/foreach}

    {else}
        <tr>
            <td class="text-align-center" colspan="6"> No branch found.</td>
        </tr>
    {/if}
    {*<tr><td class="text-align-center" colspan="6">Loading.......</td></tr>*}
    <!-- only javascript show action status -->
    </tbody>
    <tfoot class="text-notify">
    <tr>
        <th class="text-align-center"></th>
        <th class="text-align-center">ID</th>
        <th class="text-align-left">Address</th>
        <th class="text-align-left">Name</th>
        <th class="text-align-center">Status</th>
        <th class="text-align-center">Stuff</th>
        <th class="text-align-center">Action</th>
    </tr>
    </tfoot>
</table>
{$pagination|default:""}