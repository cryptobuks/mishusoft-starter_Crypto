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
        <th class="text-align-center">Status</th>
        <th class="text-align-center">Type</th>
        <th class="text-align-center">SEO</th>
        <th class="text-align-center">Sources</th>
        <th class="text-align-center" style="width:107px;">Action</th>
    </tr>
    </thead>
    <tbody id="pages-data">
    {if isset($pages) && count($pages)}
        {foreach item = page  from = $pages}
            <tr>
                <td class="text-align-center">
                    <label class="input-container">
                        <input type="checkbox" id="page-select" class="checkbox"
                               data-id="{$page.id}" data-parent-id="{if isset($page.parentId)}{$page.parentId}{else}{"0"}{/if}"
                               data-position="{$page.positionId}" data-status="{$page.status}" data-seo="{$page.seo}"
                               data-title="{$page.title}" data-url="{$page.url}" data-type="{$page.type}" data-icon="{$page.icon}"/>
                        <span class="checkmark"></span>
                    </label>
                </td>
                <td class="text-align-center">{$page.id}</td>
                <td class="text-align-center">{if isset($page.parentId)}{$page.parentId}{else}{"NONE"}{/if}</td>
                <td class="text-align-left">{$page.title}</td>
                <td class="text-align-left">{$page.url|strtolower}</td>
                <td class="text-align-center">
                    <a href="javascript:void(0);" class="button button-xs button-success"
                       data-id="{$page.id}">
                        <i class="{$page.icon}"></i>
                    </a>
                </td>
                <td class="text-align-center">{$page.position|strtoupper}</td>
                <td class="text-align-center">
                    {if isset($page.status) && !empty($page.status)}
                        {if $page.status === 'enable'}
                            <a id="disable-this-page" href="javascript:void(0);"
                               class="button button-xs button-success"
                               data-id="{$page.id}">&radic;</a>
                        {else}
                            <a id="enable-this-page" href="javascript:void(0);"
                               class="button button-xs button-danger"
                               data-id="{$page.id}">&times;</a>
                        {/if}
                    {/if}
                </td>
                <td class="text-align-center">{$page.type|strtoupper}</td>
                <td class="text-align-center">
                    {if isset($page.seo) && !empty($page.seo)}
                        {if $page.seo === 'added'}
                            <a href="javascript:void(0);" class="button button-xs button-success"
                               data-id="{$page.id}">&radic;</a>
                        {elseif $page.seo === 'not-added'}
                            <a href="javascript:void(0);" class="button button-xs button-danger"
                               data-id="{$page.id}">&times;</a>
                        {else}
                            <a href="javascript:void(0);" class="button button-xs button-warning"
                               data-id="{$page.id}"></a>
                        {/if}
                    {/if}
                </td>
                <td class="text-align-center"><a href="{$server_root}system/pages/sources/{Hash::StaticEncrypt($page.id)}" class="action-button" target="_blank">View</a></td>
                <td class="text-align-center">
                    <a href="javascript:void(0);" id="page-seo-btn"
                       class="button button-xs button-primary" data-id="{$page.id}"
                       data-title="{$page.title}" data-url="{$page.url}">
                        <i class="far fa-edit"></i>
                    </a>
                    <a href="javascript:void(0);" id="page-edit-btn" class="button button-xs button-success"
                       data-id="{$page.id}" data-parent-id="{if isset($page.parentId)}{$page.parentId}{else}{"0"}{/if}"
                       data-position="{$page.positionId}" data-status="{$page.status}" data-seo="{$page.seo}"
                       data-title="{$page.title}" data-url="{$page.url}" data-type="{$page.type}" data-icon="{$page.icon}">
                        <i class="far fa-edit"></i>
                    </a>
                    <a href="javascript:void(0);" id="page-delete-btn"
                       class="button button-xs button-danger" data-id="{$page.id}" command="Delete">
                        <i class="far fa-trash-alt"></i>
                    </a>
                </td>
            </tr>
        {/foreach}
    {else}
        <tr>
            <td class="text-align-center" colspan="12">No page found.</td>
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
        <th class="text-align-center">Status</th>
        <th class="text-align-center">Type</th>
        <th class="text-align-center">SEO</th>
        <th class="text-align-center">Sources</th>
        <th class="text-align-center" style="width: 107px;">Action</th>
    </tr>
    </tfoot>
</table>
{$pagination|default:""}