<div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="row col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light">Modules</legend>
            <div class="row">
                <div id="message"> <!-- only javascript show message --> </div>
                <div class="row">
                    <div id="modal01" class="modal">
                        <div class="row modal-content modal-content-md animate">
                            <div class="modal-header">
                                <span id="moduleEditMode"> <!-- only javascript show action status --> </span>&nbsp;module
                            </div>
                            <div class='modal-body'>
                                <div id="message2"> <!-- only javascript show message --> </div>
                                <div id="moduleEditPAD">
                                    <form name="form1" id="moduleform1" method="post">
                                        <input id="moduleID" type="hidden" value=""/>
                                        <table class="table table-condensed">
                                            <tr>
                                                <td style="width: 50%;">
                                                    Name:
                                                    <input title="Module name" id="moduleName" type="text" class="input-control" value="" placeholder="Name" maxlength="30" required="required"/>
                                                </td>
                                                <td style="width: 50%;">
                                                    Status:
                                                    <select title="Module status" class="input-control" id="moduleStatus" required="required">
                                                        <option value=""> -- Select One --</option>
                                                        <option value="enable"> Enable </option>
                                                        <option value="disable"> Disable </option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 100%;" colspan="2">
                                                    Location:
                                                    <input title="Module location" id="moduleLocation" type="text" class="input-control"
                                                           value="" placeholder="Location" maxlength="30" required="required"/>
                                                </td>
                                            </tr>
                                        </table>
                                    </form>
                                </div dis>
                                <div id="moduleUploadPad">
                                    <form name="moduleform2" id="moduleform2" method="post">
                                        <table class="table">
                                            <tr>
                                                <td style="width: 170px;">
                                                    <label class="button button-primary">
                                                        <i class="fa fa-plus"></i> Select module
                                                        <input type="file" name="moduleFile" id="moduleFile" accept="application/gzip" style="display: none;"/>
                                                    </label>
                                                    <a href="javascript:void(0)" id="uploadModuleFile" class="button button-success"><i class="fas fa-upload"></i>&nbsp;Upload</a>
                                                </td>
                                                <td style="width: 230px;">
                                                    <div id="UploadStatusBoard">
                                                        <progress id="progressbar" max="100" value="0"></progress>
                                                        <h3 id="upload_status"></h3>
                                                        <p id="loaded_n_total"></p>
                                                    </div>
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
                                <a href="javascript:void(0);" id="module-data-btn"
                                   class="button button-primary float-right">
                                    <!-- only javascript show button name --> </a>
                                <a href="javascript:void(0);" id="module-reset-btn"
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
                            <div class='modal-body'>
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
                                <a href="javascript:void(0);" onclick="window.location = _root_ + 'system'"
                                   class="button button-danger float-left">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
                                </a>
                            </td>
                            <td><a href="javascript:void(0);" id="module-add-btn"
                                   class="button button-success float-right"><i class="fas fa-plus-circle"></i> Add New</a></td>
                        </tr>
                    </table>

                    <div id="modules-data-table">
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
                                                       data-id="{$data.id}" data-name="{$data.name}" data-status="{$data.status}" data-location="{str_replace('_MODULES_DIR_',ModulesDIR,$data.installed_location)}"/>
                                                <span class="checkmark"></span>
                                            </label>
                                        </td>
                                        <td class="text-align-left">{ucfirst($data.name)}</td>
                                        <td class="text-align-left" id="moduleLocationTranslated">{str_replace('_MODULES_DIR_',ModulesDIR,$data.installed_location)}</td>
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
                                               class="button button-xs button-success" data-id="{$data.id}" data-name="{$data.name}" data-status="{$data.status}" data-location="{str_replace('_MODULES_DIR_',ModulesDIR,$data.installed_location)}"><i
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
                    </div>
                </div>
            </div>
        </fieldset>
    </div>

    <div class="row col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="row col-lg-12 col-md-12 col-sm-6 col-xs-12">
            <fieldset class="box-shadow box-shadow-light">
                <legend class="box-shadow box-shadow-light"> Notifications</legend>
                <div class="row" id="system-notification-viewer">
                    <div class="box-message box-notify box-shadow box-shadow-light">
                        <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                        <span class="notify-md-content"> Loading...</span>
                    </div>
                </div>
                <a href="{$layoutParams.root}system/log/" class="button button-success float-right"><i
                            class="fa fa-list"></i> See more</a>
            </fieldset>

        </div>
        <div class="row col-lg-12 col-md-12 col-sm-6 col-xs-12">
            <fieldset class="box-shadow box-shadow-light">
                <legend class="box-shadow box-shadow-light"> Messages</legend>
                <div class="row" id="system-contact-message-viewer">
                    <div class="box-message box-notify box-shadow box-shadow-light">
                        <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                        <span class="notify-md-content"> Loading...</span>
                    </div>
                </div>
                <a href="{$layoutParams.root}system/contactmessage/" class="button button-success float-right"><i
                            class="fa fa-list"></i> See more</a>
            </fieldset>
        </div>
    </div>
</div>