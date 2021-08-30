<!--<div class="row">
    <fieldset class="box-shadow-light">
        <legend class="box-shadow-light"> Products</legend>
        <div class="row" id="products">
            <div class="quick-access-app box-shadow-light">
                <div class="quick-access-app-logo">
                    <span class="quick-access-app-logo-image-alt"><i class="fab fa-app-store"></i></span>
                </div>
                <div class="quick-access-app-text">
                    <div class="quick-access-app-title-text">Loading...</div>
                    <div class="quick-access-app-status-text">&nbsp;</div>
                </div>
            </div>
        </div>
    </fieldset>
</div>-->

<div class="flex-column flex-column-content row box-shadow box-shadow-light margin-bottom-10 col-lg-12 col-md-12 col-xs-12 col-xs-plus-12">
    <div class="flex-group flex-row">
        <div class="flex-column col-lg-8 col-md-8 col-xs-12 col-xs-plus-12" style="padding-left:10px;">
            <div style="font-size: 25px; font-weight: bold; margin-top: 10px; margin-bottom: 20px;text-align: left;">
                Send us a message
            </div>

            <div id="messageZone" class="messageZone" style="padding-right: 10px;"></div>
            <div style="width: 100%;margin-bottom: 10px;display: inline-block;">
                <div style="width: 50%;float: left;padding-right: 10px;">
                    <input type="text" id="cl_fst_nm" class="input-control" value="" placeholder="Your first name"
                           title="Please write your first name."/>
                </div>
                <div style="width: 50%;float: left;padding-right: 10px;">
                    <input type="text" id="cl_lst_nm" class="input-control" value="" placeholder="Your last name"
                           title="Please write your last name."/>
                </div>
            </div>
            <div style="width: 100%;margin-bottom: 10px;display: inline-block;">
                <div style="width: 50%;float: left;padding-right: 10px;">
                    <input type="email" id="cl_email" class="input-control" value="" placeholder="Your e-mail address"
                           title="Please write your e-mail address."/>
                </div>
                <div style="width: 50%;float: left;padding-right: 10px;">
                    <input type="tel" id="cl_mbl_nmbr" class="input-control" value="" placeholder="Your mobile number"
                           title="Please write your mobile number."/>
                </div>
            </div>
            <div style="width: 100%;margin-bottom: 10px;display: inline-block;">
                <div style="width: 100%;float: left;padding-right: 10px;">
                    <input type="text" id="cl_msg_sbj" class="input-control" value="" placeholder="Subject"
                           title="Please write a subject of your message."/>
                </div>
            </div>
            <div style="width: 100%;margin-bottom: 10px;display: inline-block;">
                <div style="width: 100%;float: left;padding-right: 10px;">
                    <textarea id="cl_msg" class="input-control" placeholder="Message"
                              title="Please write your message."></textarea>
                </div>
            </div>
            <div style="width: 100%;margin-bottom: 10px;display: inline-block;">
                <div style="width: 100%;float: left;padding-right: 10px;">
                    <button type="submit" id="cl_msg_snd_btn" class="button button-outline-primary">Send message
                    </button>
                </div>
            </div>
        </div>
        <article class="flex-column col-lg-4 col-md-4 col-xs-12 col-xs-plus-12">
            <header>
                <hgroup>
                    <h5 style="text-transform: uppercase;margin-bottom: 15px;"> Our Services</h5>
                </hgroup>
            </header>
            <ul class="pgSidebarItemsLink" style="text-align: left;">
                <li><a href="{$layoutParams.root}services/details/customized-software-solutions.php">Customized Software
                        Solutions</a></li>
                <li><a href="{$layoutParams.root}services/details/website-development.php">Website Development</a></li>
                <!--<li><a href="{$layoutParams.root}services/details/hosting-packages.php">Hosting Packages</a></li>
                <li><a href="{$layoutParams.root}services/details/it-training.php">IT Training</a></li>-->
                <li><a href="{$layoutParams.root}services/details/data-entry.php">Data Entry</a></li>
                <li><a href="{$layoutParams.root}services/details/managed-service.php">Managed Service</a></li>
                <li><a href="{$layoutParams.root}services/details/sms-bundle.php">SMS Bundle</a></li>
                <li><a href="{$layoutParams.root}services/details/networking-solutions.php">Networking Solutions</a>
                </li>
                <li><a href="{$layoutParams.root}services/details/security-systems-solutions.php">Security Systems
                        Solutions</a></li>
                <li><a href="{$layoutParams.root}services/details/tender2day.php">Tender2day</a></li>
            </ul>
        </article>
    </div>
</div>