<div class="row col-lg-12 col-md-12">
    <div class="row col-lg-9 col-md-9">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light">Tracking databases</legend>
            <div class="row">
                <div id="message"> <!-- only javascript show message --> </div>
                <div class="row">
                    <div id="modal01" class="modal">
                        <div class="row modal-content modal-content-md animate">
                            <div class="modal-header">
                                <span id="databaseEditMode"><!-- only javascript show action status --></span>&nbsp;database
                            </div>
                            <div class='modal-body'>
                                <div id="message2"> <!-- only javascript show message --> </div>
                                <div id="databaseEditPAD">
                                    <form name="form1" id="databaseForm1" method="post">
                                        <input id="databaseID" type="hidden" value=""/>
                                        <table class="table table-condensed">
                                            <tr>
                                                <td style="width: 48%;">
                                                    Server:
                                                    <input id="databaseServer" title="Server" type="text"
                                                           class="input-control"
                                                           value="" placeholder="Server" maxlength="30"/>
                                                </td>
                                                <td style="width: 48%;">
                                                    Databases:
                                                    <input id="databaseName" title="Databases" type="text"
                                                           class="input-control"
                                                           value="" placeholder="Databases" maxlength="30"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 48%;">
                                                    User:
                                                    <input id="databaseUser" title="User" type="text"
                                                           class="input-control"
                                                           value="" placeholder="User" maxlength="30"/>
                                                </td>
                                                <td style="width: 48%;">
                                                    Password:
                                                    <input id="databasePassword" title="Password" type="password"
                                                           class="input-control"
                                                           value="" placeholder="Password" maxlength="30"/>
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
                                <a href="javascript:void(0);" id="database-data-btn"
                                   class="button button-primary float-right">
                                    <!-- only javascript show button name --> </a>
                                <a href="javascript:void(0);" id="database-reset-btn"
                                   class="button button-danger float-right">
                                    <!-- only javascript show button name --> </a>
                            </div>
                        </div>
                    </div>
                    <div id="modal02" class="modal">
                        <div class="row modal-content modal-content-md animate">
                            <div class="modal-header">
                                <span id="databaseBackupEditMode"><!-- only javascript show action status --></span>&nbsp;database
                            </div>
                            <div class='modal-body'>
                                <div id="message3"> <!-- only javascript show message --> </div>
                                <div id="databaseBackupEditPAD">
                                    <form name="form1" id="databaseBackupForm1" method="post">
                                        <table class="table table-condensed">
                                            <tr>
                                                <td style="width: 48%;">
                                                    From:
                                                    {if isset($databases)}
                                                        <select id="databaseStorage" title="From" class="input-control">
                                                            <option value="">-select one-</option>
                                                            {foreach from=$databases item="db"}
                                                                <option value="{$db.db}">{$db.db}</option>
                                                            {/foreach}
                                                        </select>
                                                    {/if}
                                                </td>
                                                <td style="width: 48%;">
                                                    To:
                                                    {if isset($databases)}
                                                        <select id="databaseBackup" title="To" class="input-control">
                                                            <option value="">-select one-</option>
                                                            {foreach from=$databases item="db"}
                                                                <option value="{$db.db}">{$db.db}</option>
                                                            {/foreach}
                                                        </select>
                                                    {/if}
                                                </td>
                                            </tr>
                                        </table>
                                    </form>
                                </div>
                            </div>
                            <div class='row modal-footer'>
                                <a href="javascript:void(0);" onclick="document.querySelector('#modal02').style.display = 'none'" class="button button-danger float-left">Cancel</a>
                                <a href="javascript:void(0);" id="databaseBackup-data-btn" class="button button-primary float-right"><!-- only javascript show button name --> </a>
                                <a href="javascript:void(0);" id="databaseBackup-reset-btn" class="button button-danger float-right"><!-- only javascript show button name --> </a>
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
                            <td class="float-right">
                                <a href="javascript:void(0);" id="server-db-add-btn" class="button button-md button-primary">
                                    <i class="fa fa-database"></i>
                                </a>
                                <a href="javascript:void(0);" id="server-db-backup-btn" class="button button-md button-default">
                                    <i class="fa fa-hdd"></i>
                                </a>
                            </td>
                        </tr>
                    </table>
                    <div id="table-view-databases">
                        <div class="table-view-preload">
                            <div class="table-view-preload-header table-view-md-xl-preload-header">
                                <div class="table-view-sl">sl</div>
                                <div class="table-view-name">name</div>
                                <div class="table-view-username">user</div>
                                <div class="table-view-database">db name</div>
                                <div class="table-view-password">db password</div>
                                <div class="table-view-action">action</div>
                            </div>
                            <div id="table-view-data-body" class="table-view-data-body table-view-md-xl-data-body">Databases loading...</div>
                            <div class="table-view-preload-footer table-view-md-xl-preload-footer">
                                <div class="table-view-sl">sl</div>
                                <div class="table-view-name">name</div>
                                <div class="table-view-username">user</div>
                                <div class="table-view-database">db name</div>
                                <div class="table-view-password">db password</div>
                                <div class="table-view-action">action</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>

    <div class="row col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <input type="hidden" id="notify" value="notify-sm-content">
        <div class="row col-lg-12 col-md-12 col-sm-6 col-xs-12">
            <fieldset class="box-shadow box-shadow-light">
                <legend class="box-shadow box-shadow-light"> Notifications</legend>
                <div class="row" id="system-notification-viewer">
                    <div class="box-message box-notify box-shadow box-shadow-light">
                        <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                        <span class="notify-sm-content"> Loading...</span>
                    </div>
                </div>
                <a href="{$layoutParams.root}system/log/" class="button button-success float-right">
                    <i class="fa fa-list"></i> See more</a>
            </fieldset>

        </div>
        <div class="row col-lg-12 col-md-12 col-sm-6 col-xs-12">
            <fieldset class="box-shadow box-shadow-light">
                <legend class="box-shadow box-shadow-light"> Messages</legend>
                <div class="row" id="system-contact-message-viewer">
                    <div class="box-message box-notify box-shadow box-shadow-light">
                        <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                        <span class="notify-sm-content"> Loading...</span>
                    </div>
                </div>
                <a href="{$layoutParams.root}system/contactmessage/" class="button button-success float-right">
                    <i class="fa fa-list"></i> See more</a>
            </fieldset>
        </div>
    </div>
</div>