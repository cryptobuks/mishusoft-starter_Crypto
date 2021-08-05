<div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <fieldset class="box-shadow box-shadow-light">
        <legend class="box-shadow box-shadow-light">File Manager</legend>
        <div class="row">
            <div id="message"> <!-- only javascript show message --> </div>
            <div class="row">
                <div id="modal01" class="modal">
                    <div class="row modal-content modal-content-sm animate" style="width: 450px;">
                        <div class="modal-header">
                            <span id="filemanagerEditMode"> <!-- only javascript show action status --> </span>&nbsp;File
                        </div>
                        <div class='modal-body'>
                            <div id="message2"> <!-- only javascript show message --> </div>
                            <div id="filemanagerEditPAD">
                                <form name="form1" id="filemanagerform1" method="post">
                                    <input id="filemanagerID" type="hidden" value=""/>
                                    <table class="table table-condensed">
                                        <tr>
                                            <td style="width:50px;">
                                                <label>
                                                    Name:
                                                    <input id="filemanagerFileName" type="text"
                                                           class="input-control input-control-padding-low" value=""
                                                           placeholder="New file name" maxlength="30"/>
                                                </label>
                                            </td>
                                            <td style="width:50px;">
                                                <label>
                                                    Status:
                                                    <select id="filemanagerStatus"
                                                            class="input-control input-control-padding-low"
                                                            title="Please select any option.">
                                                        <option value=""> -- Select One --</option>
                                                        <option value="opened"> Open</option>
                                                        <option value="closed"> Close</option>
                                                    </select>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" style="width:50px;">
                                                <label>
                                                    Location:
                                                    <textarea id="filemanagerLocation" class="input-control"></textarea>
                                                </label>
                                            </td>
                                        </tr>
                                    </table>
                                </form>
                            </div>
                        </div>
                        <div class='row modal-footer'>
                            <a href="javascript:void(0);"
                               onclick="document.querySelector('#modal01').style.display = 'none'"
                               class="button button-danger float-left">Cancel</a>
                            <a href="javascript:void(0);" id="filemanager-data-btn"
                               class="button button-primary float-right">
                                <!-- only javascript show button name --> </a>
                            <a href="javascript:void(0);" id="filemanager-reset-btn"
                               class="button button-danger float-right">
                                <!-- only javascript show button name --> </a>
                        </div>
                    </div>
                </div>

                <div id="PopUpDialogBox" class="modal">
                    <div class="row modal-content modal-content-sm animate">
                        <div class="modal-header">
                            <span id="PopUpDialogBoxTitle"> <!-- only javascript show action status --> </span>
                        </div>
                        <div class='modal-body-sm'>
                            <div id="message3"> <!-- only javascript show message --> </div>
                        </div>
                        <div class='row modal-footer modal-footer-sm'>
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
                            <a href="javascript:void(0);" onclick="window.location = _root_ + 'system/'"
                               class="button button-danger float-left">
                                <i class="fas fa-arrow-left" aria-hidden="true"></i> Back
                            </a>
                        </td>
                        <td><a href="javascript:void(0);" id="filemanager-add-btn"
                               class="button button-success float-right">
                                <i class="fas fa-plus-circle"></i> Add New</a></td>
                    </tr>
                </table>
                <div id="filemanager-data-table">
                    <table class="table table-condensed table-striped">
                        <thead class="text-notify" style="width: 100%">
                        <tr>
                            <th class="text-align-center" style="width: 20px;">
                                <label class="input-container">
                                    <input type="checkbox" id="select_all" class="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th class="text-align-left">Name</th>
                            <th class="text-align-center" style="width: 100px;">Action</th>
                        </tr>
                        </thead>
                        <tbody id="filemanageres-data">
                        {if isset($dirs) && count($dirs)}
                            {foreach item = dir_name  from = $dirs}
                                <tr>
                                    <td class="text-align-center">
                                        <label class="input-container">
                                            <input type="checkbox" id="filemanager-select" class="checkbox"
                                                   data-name="{$dir_name}"/>
                                            <span class="checkmark"></span>
                                        </label>
                                    </td>
                                    <td class="text-align-left">{$dir_name}</td>
                                    <td class="text-align-center">
                                        <a href="javascript:void(0);" id="filemanager-edit-btn"
                                           class="button button-xs button-success"
                                           data-name="{$dir_name}">
                                            <i class="far fa-edit"></i></a>&nbsp;&nbsp;
                                        <a href="javascript:void(0);" id="filemanager-delete-btn"
                                           class="button button-xs button-danger" command="Delete">
                                            <i class="far fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                            {/foreach}

                        {else}
                            <tr>
                                <td class="text-align-center" colspan="3"> No filemanager found.</td>
                            </tr>
                        {/if}
                        {*<tr><td class="text-align-center" colspan="6">Loading.......</td></tr>*}
                        <!-- only javascript show action status -->
                        </tbody>
                        <tfoot class="text-notify">
                        <tr>
                            <th class="text-align-center"></th>
                            <th class="text-align-left">Name</th>
                            <th class="text-align-center">Action</th>
                        </tr>
                        </tfoot>
                    </table>
                    {$pagination|default:""}
                </div>
            </div>
        </div>
    </fieldset>
</div>
