<div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="row col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light"> Branches</legend>
            <div class="row">
                <div id="message"> <!-- only javascript show message --> </div>
                <div class="row">
                    <div id="modal01" class="modal">
                        <div class="row modal-content modal-content-sm animate" style="width: 450px;">
                            <div class="modal-header">
                                <span id="branchEditMode"> <!-- only javascript show action status --> </span>&nbsp;branch
                            </div>
                            <div class='modal-body'>
                                <div id="message2"> <!-- only javascript show message --> </div>
                                <div id="branchEditPAD">
                                    <form name="form1" id="branchform1" method="post">
                                        <input id="branchID" type="hidden" value=""/>
                                        <table class="table table-condensed">
                                            <tr>
                                                <td style="width:50px;">
                                                    <label>
                                                        Name:
                                                        <input id="branchName" type="text"
                                                               class="input-control input-control-padding-low" value=""
                                                               placeholder="New branch name" maxlength="30"/>
                                                    </label>
                                                </td>
                                                <td style="width:50px;">
                                                    <label>
                                                        Status:
                                                        <select id="branchStatus"
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
                                                        <textarea id="branchLocation" class="input-control"></textarea>
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
                                <a href="javascript:void(0);" id="branch-data-btn"
                                   class="button button-primary float-right">
                                    <!-- only javascript show button name --> </a>
                                <a href="javascript:void(0);" id="branch-reset-btn"
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
                            <td><a href="javascript:void(0);" id="branch-add-btn"
                                   class="button button-success float-right">
                                    <i class="fas fa-plus-circle"></i> Add New</a></td>
                        </tr>
                    </table>
                    <div id="branch-data-table">
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
                                                    href="{$layoutParams.root}system/branches/users/{$data.id}"
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
                                <th class="text-align-left">Name</th>
                                <th class="text-align-left">Address</th>
                                <th class="text-align-center">Status</th>
                                <th class="text-align-center">Stuff</th>
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
