<div class="row col-lg-12 col-md-12">
    <div class="row col-lg-8 col-md-8">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light"> Main Items</legend>
            <div class="row" id="system-default-menus">
                <div class="thumbnail-md box-shadow box-shadow-light">
                    <div class="thumbnail-image"><i class="fas fa-wrench"></i></div>
                    <div class="thumbnail-text text-normal">Loading..</div>
                </div>
                {*Only javascript show data here*}
            </div>
        </fieldset>

        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light"> Extra Items</legend>
            <div class="row" id="system-extra-menus">
                <div class="thumbnail-md box-shadow box-shadow-light">
                    <div class="thumbnail-image"><i class="fas fa-wrench"></i></div>
                    <div class="thumbnail-text text-normal">Loading..</div>
                </div>
                {*Only javascript show data here*}
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
                <a href="{$layoutParams.root}system/log/" class="button button-success float-right"><i class="fa fa-list"></i> See more</a>
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
                <a href="{$layoutParams.root}system/contactmessage/" class="button button-success float-right"><i class="fa fa-list"></i> See more</a>
            </fieldset>
        </div>
    </div>
</div>


