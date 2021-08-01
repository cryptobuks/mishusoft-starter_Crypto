<div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <fieldset class="box-shadow box-shadow-light">
        <legend class="box-shadow box-shadow-light">Pages</legend>
        <div class="row">
            <div id="message"> <!-- only javascript show message --> </div>
            <div class="row">
                <div id="modal01" class="modal">
                    <div class="row modal-content modal-content-md animate">
                        <div class="modal-header">
                            <span id="pageEditMode"> <!-- only javascript show action status --> </span>&nbsp;page
                        </div>
                        <div class='modal-body'>
                            <div id="message2" class="margin-top-10"> <!-- only javascript show message --> </div>
                            <div id="pageEditPAD">
                                <form name="form1" id="page-form1" method="post">
                                    <input id="pageID" type="hidden" value=""/>
                                    <table class="table table-condensed">
                                        <tr>
                                            <td style="width: 25%;">
                                                Parent:
                                                <select title="page Parent" class="input-control" id="page-parent-id" required="required" autocomplete="off">
                                                    <option value=""> -- Select One --</option>
                                                    <option value="0"> -- None --</option>
                                                    {if isset($GlobalMenus) && count($GlobalMenus)}
                                                        {foreach item = gm  from = $GlobalMenus}
                                                            <option value="{$gm.id}"> {$gm.title} </option>
                                                        {/foreach}
                                                    {/if}
                                                </select>
                                            </td>
                                            <td style="width: 25%;">
                                                Position:
                                                <select title="page Position" id="page-position-id" class="input-control" autocomplete="off" required="required">
                                                    <option value=""> -- Select One --</option>
                                                    {if isset($GlobalMenuPositions) && count($GlobalMenuPositions)}
                                                        {foreach item = gmp  from = $GlobalMenuPositions}
                                                            <option value="{$gmp.id}"> {$gmp.position|ucfirst} </option>
                                                        {/foreach}
                                                    {/if}
                                                </select>
                                            </td>
                                            <td style="width: 25%;">
                                                Status:
                                                <select title="page status" id="page-status" class="input-control" autocomplete="off" required="required">
                                                    <option value=""> -- Select One --</option>
                                                    <option value="enable">Enable</option>
                                                    <option value="disable">Disable</option>
                                                </select>
                                            </td>
                                            <td style="width: 25%;">
                                                SEO:
                                                <select title="page seo" id="page-seo" class="input-control" autocomplete="off">
                                                    <option value=""> -- Select One --</option>
                                                    <option value="added">Add</option>
                                                    <option value="not-added">Not Now</option>
                                                    <option value="remove">Remove</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                Title:
                                                <input id="page-title" type="text" class="input-control" value="" placeholder="Title"
                                                       maxlength="30" required="required" autocomplete="off" pattern="{literal}[a-zA-Z]{4,}${/literal}"
                                                       title="Must contain characters and at least 4 letters from a to z"/>
                                            </td>
                                            <td>
                                                Type:
                                                <select title="page type" id="page-type" class="input-control" autocomplete="off">
                                                    <option value=""> -- Select One --</option>
                                                    <option value="system">System</option>
                                                    <option value="normal">Normal</option>
                                                </select>
                                            </td>
                                            <td>
                                                Icon:
                                                <input title="page Icon" id="page-icon" type="text" class="input-control"
                                                       value="" placeholder="Icon" maxlength="30" required="required"/>
                                                <span id="previewIconBox" style="display: none">
                                                    <span id="previewIconName"></span> >
                                                    <i id="previewIcon" class=""></i>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">
                                                URL:
                                                <input id="page-url" type="text" class="input-control" value="" placeholder="url"
                                                       maxlength="30" required="required" autocomplete="off"
                                                       pattern="{literal}[a-zA-Z]{4,}${/literal}"
                                                       title="Must contain characters and at least 4 letters from a to z"/>
                                                <a id="page-produce-link" class="link" href="#"
                                                   style="display: none;">#</a>
                                            </td>
                                        </tr>
                                    </table>
                                </form>
                            </div>
                        </div>
                        <div class='row modal-footer'>
                            <div class="float-left">
                                <a href="javascript:void(0);"
                                   onclick="document.querySelector('#modal01').style.display = 'none'"
                                   class="button button-danger">Cancel</a>
                            </div>
                            <div class="float-right">
                                <a href="javascript:void(0);" id="page-reset-btn"
                                   class="button button-danger">
                                    <!-- only javascript show button name --> </a>
                                <a href="javascript:void(0);" id="page-data-btn"
                                   class="button button-primary">
                                    <!-- only javascript show button name --> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="modal02" class="modal">
                    <div class="row modal-content modal-content-md animate">
                        <div class="modal-header">
                            <span id="pageSEOEditMode"> <!-- only javascript show action status --> </span>&nbsp;meta
                        </div>
                        <div class='modal-body'>
                            <div id="message2" class="margin-top-10"> <!-- only javascript show message --> </div>
                            <div id="pageSEOEditPAD">
                                <form name="form1" id="page-seo-form1" method="post">
                                    <input id="pageID" type="hidden" value=""/>
                                    <table class="table table-condensed">
                                        <tr>
                                            <td style="width: 25%;">
                                                Parent:
                                                <select title="page Parent" class="input-control" id="page-parent-id"
                                                        required="required" autocomplete="off">
                                                    <option value=""> -- Select One --</option>
                                                    <option value="0"> -- None --</option>
                                                    {if isset($GlobalMenus) && count($GlobalMenus)}
                                                        {foreach item = gm  from = $GlobalMenus}
                                                            <option value="{$gm.id}"> {$gm.title} </option>
                                                        {/foreach}
                                                    {/if}
                                                </select>
                                            </td>
                                            <td style="width: 25%;">
                                                Position:
                                                <select title="page Position" id="page-position-id"
                                                        class="input-control"
                                                        autocomplete="off" required="required">
                                                    <option value=""> -- Select One --</option>
                                                    {if isset($GlobalMenuPositions) && count($GlobalMenuPositions)}
                                                        {foreach item = gmp  from = $GlobalMenuPositions}
                                                            <option value="{$gmp.id}"> {$gmp.position|ucfirst} </option>
                                                        {/foreach}
                                                    {/if}
                                                </select>
                                            </td>
                                            <td style="width: 25%;">
                                                Status:
                                                <select title="page status" id="page-status" class="input-control"
                                                        autocomplete="off" required="required">
                                                    <option value=""> -- Select One --</option>
                                                    <option value="enable">Enable</option>
                                                    <option value="disable">Disable</option>
                                                </select>
                                            </td>
                                            <td style="width: 25%;">
                                                SEO:
                                                <select title="page seo" id="page-seo" class="input-control"
                                                        autocomplete="off">
                                                    <option value=""> -- Select One --</option>
                                                    <option value="added">Add</option>
                                                    <option value="not-added">Not Now</option>
                                                    <option value="remove">Remove</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                Title:
                                                <input id="page-title" type="text" class="input-control" value=""
                                                       placeholder="Title"
                                                       maxlength="30" required="required" autocomplete="off"
                                                       pattern="{literal}[a-zA-Z]{4,}${/literal}"
                                                       title="Must contain characters and at least 4 letters from a to z"/>
                                            </td>
                                            <td>
                                                Type:
                                                <select title="page type" id="page-type" class="input-control"
                                                        autocomplete="off">
                                                    <option value=""> -- Select One --</option>
                                                    <option value="system">System</option>
                                                    <option value="normal">Normal</option>
                                                </select>
                                            </td>
                                            <td>
                                                Icon:
                                                <input title="page Icon" id="page-icon" type="text"
                                                       class="input-control"
                                                       value="" placeholder="Icon" maxlength="30" required="required"/>
                                                <span id="previewIconBox" style="display: none">
                                                    <span id="previewIconName"></span> >
                                                    <i id="previewIcon" class=""></i>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">
                                                URL:
                                                <input id="page-url" type="text" class="input-control" value=""
                                                       placeholder="url"
                                                       maxlength="30" required="required" autocomplete="off"
                                                       pattern="{literal}[a-zA-Z]{4,}${/literal}"
                                                       title="Must contain characters and at least 4 letters from a to z"/>
                                                <a id="page-produce-link" class="link" href="#"
                                                   style="display: none;">#</a>
                                            </td>
                                        </tr>
                                    </table>
                                </form>
                            </div>
                        </div>
                        <div class='row modal-footer'>
                            <div class="float-left">
                                <a href="javascript:void(0);"
                                   onclick="document.querySelector('#modal02').style.display = 'none'"
                                   class="button button-danger">Cancel</a>
                            </div>
                            <div class="float-right">
                                <a href="javascript:void(0);" id="page-seo-reset-btn"
                                   class="button button-danger">
                                    <!-- only javascript show button name --> </a>
                                <a href="javascript:void(0);" id="page-seo-data-btn"
                                   class="button button-primary">
                                    <!-- only javascript show button name --> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="PopUpDialogBox" class="modal">
                    <div class="row modal-content modal-content-sm animate">
                        <div class="modal-header">
                            <span id="PopUpDialogBoxTitle"> <!-- only javascript show action status --> </span>
                        </div>
                        <div class='modal-body'>
                            <div id="message3"> <!-- only javascript show message --> </div>
                        </div>
                        <div class='row modal-footer'>
                            <a href="javascript:void(0);" id="message-done-btn"
                               class="button button-primary float-right">
                                <!-- only javascript show button name --> </a>
                            <a href="javascript:void(0);"
                               onclick="document.querySelector('#PopUpDialogBox').style.display = 'none'"
                               class="button button-danger float-right">Cancel</a>
                        </div>
                    </div>
                </div>
                <table class="table">
                    <tr>
                        <td>
                            <a href="javascript:void(0);" onclick="window.location = _root_ + 'system'"
                               class="button button-danger float-left">
                                <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
                            </a>
                        </td>
                        <td><a href="javascript:void(0);" id="page-add-btn"
                               class="button button-success float-right">&#128453; Add New</a>
                        </td>
                    </tr>
                </table>

                <div id="pages-data-table">
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
                                        <a href="javascript:void(0);" class="button button-xs button-success" data-id="{$page.id}">
                                            <span class="{$page.icon}"></span>
                                        </a>
                                    </td>
                                    <td class="text-align-center">{$page.position|strtoupper}</td>
                                    <td class="text-align-center">
                                        {if isset($page.status) && !empty($page.status)}
                                            {if $page.status === 'enable'}
                                                <a id="disable-this-page" href="javascript:void(0);" class="button button-xs button-success" data-id="{$page.id}">&check;</a>
                                            {else}
                                                <a id="enable-this-page" href="javascript:void(0);" class="button button-xs button-danger" data-id="{$page.id}">&Cross;</a>
                                            {/if}
                                        {/if}
                                    </td>
                                    <td class="text-align-center">{$page.type|strtoupper}</td>
                                    <td class="text-align-center">
                                        {if isset($page.seo) && !empty($page.seo)}
                                            {if $page.seo === 'added'}
                                                <a href="javascript:void(0);" class="button button-xs button-success" data-id="{$page.id}" style="font-size: 20px;">&check;</a>
                                            {elseif $page.seo === 'not-added'}
                                                <a href="javascript:void(0);" class="button button-xs button-danger" data-id="{$page.id}" style="font-size: 20px;"><span class="ms-icon ms-icon-aegean-check-mark"></a>
                                            {else}
                                                <a href="javascript:void(0);" class="button button-xs button-warning" data-id="{$page.id}" style="font-size: 20px;">&#10672;</a>
                                            {/if}
                                        {/if}
                                    </td>
                                    <td class="text-align-center"><a href="{$layoutParams.root}system/pages/sources/{Hash::StaticEncrypt($page.id)}" class="action-button" target="_blank">View</a></td>
                                    <td class="text-align-center">
                                        <a href="javascript:void(0);" id="page-seo-btn"
                                           class="button button-xs button-primary" data-id="{$page.id}"
                                           data-title="{$page.title}" data-url="{$page.url}">
                                            <span class="ms-icon ms-icon-search"></span>
                                        </a>
                                        <a href="javascript:void(0);" id="page-edit-btn" class="button button-xs button-success"
                                           data-id="{$page.id}" data-parent-id="{if isset($page.parentId)}{$page.parentId}{else}{"0"}{/if}"
                                           data-position="{$page.positionId}" data-status="{$page.status}" data-seo="{$page.seo}"
                                           data-title="{$page.title}" data-url="{$page.url}" data-type="{$page.type}" data-icon="{$page.icon}">
                                            <span class="ms-icon ms-icon-write"></span>
                                        </a>
                                        <a href="javascript:void(0);" id="page-delete-btn"
                                           class="button button-xs button-danger" data-id="{$page.id}" command="Delete">
                                            <span class="ms-icon ms-icon-trash"></span>
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
                </div>
            </div>
        </div>
    </fieldset>
</div>