<div class="row col-lg-12 col-md-12">
    <div class="row col-lg-8 col-md-8">
        <fieldset class="box-shadow box-shadow-light">
            <legend class="box-shadow box-shadow-light">My Application</legend>
            <div class="row">
                <div id="message"> <!-- only javascript show message --> </div>
                <div class="row">
                    <div id="modal01" class="modal">
                        <div class="row modal-content modal-content-md animate">
                            <div class="modal-header">
                                <span id="webappEditMode"><!-- only javascript show action status --></span>&nbsp;application
                            </div>
                            <div class='modal-body'>
                                <div id="message2"> <!-- only javascript show message --> </div>
                                <div id="webappEditPAD">
                                    <form name="form1" id="webappForm1" method="post">
                                        <input id="webappID" type="hidden" value=""/>
                                        <table class="table table-condensed">
                                            <tr>
                                                <td style="width: 48%;">
                                                    Name:
                                                    <input id="webappName" title="Name" type="text"
                                                           class="input-control"
                                                           value="" placeholder="Name" maxlength="30"/>
                                                </td>
                                                <td style="width: 48%;">
                                                    Company:
                                                    <input id="webappCompany" title="Company" type="text"
                                                           class="input-control"
                                                           value="" placeholder="Company" maxlength="100"
                                                           disabled="disabled"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" style="width: 100%;">
                                                    Description:
                                                    <textarea class="textarea" title="Description"
                                                              id="webappDescription"
                                                              placeholder="Description" rows="4"></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" style="width: 100%;">
                                                    Files:
                                                    <input id="webappFilesLocate" title="Files location" type="text"
                                                           class="input-control" value="" placeholder="Files location"
                                                           maxlength="100" disabled="disabled"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 48%;">
                                                    Web location with domain name server:
                                                    <input id="webappDomainLocate" title="Web file location" type="text"
                                                           class="input-control" value=""
                                                           placeholder="Web file location"
                                                           maxlength="100" disabled="disabled"/>
                                                </td>
                                                <td style="width: 48%;">
                                                    Web location with IP address:
                                                    <input id="webappIPLocate" title="Web file location" type="text"
                                                           class="input-control" value=""
                                                           placeholder="Web file location"
                                                           maxlength="100" disabled="disabled"/>
                                                </td>
                                            </tr>
                                            {*<tr>
                                                <td colspan="2" style="width: 50%;">
                                                    Icon Folder:
                                                    <input id="webappFavLocate" title="Icon folder" type="text"
                                                           class="input-control" value="" placeholder="Icon folder"
                                                           maxlength="20" disabled="disabled"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 50%;">
                                                    Theme:
                                                    <input id="webappTheme" title="Default theme" type="text"
                                                           class="input-control" value="" placeholder="Default theme"
                                                           maxlength="20" disabled="disabled"/>
                                                </td>
                                                <td style="width: 50%;">
                                                    Favicon:
                                                    <input id="webappFavicon" title="Favicon" type="text"
                                                           class="input-control" value="" placeholder="Favicon"
                                                           maxlength="100" disabled="disabled"/>
                                                </td>
                                            </tr>*}
                                        </table>
                                    </form>
                                </div>
                            </div>
                            <div class='row modal-footer'>
                                <a href="javascript:void(0);"
                                   onclick="document.querySelector('#modal01').style.display = 'none'"
                                   class="button button-danger float-left">Cancel</a>
                                <a href="javascript:void(0);" id="webapp-data-btn"
                                   class="button button-primary float-right">
                                    <!-- only javascript show button name --> </a>
                                <a href="javascript:void(0);" id="webapp-reset-btn"
                                   class="button button-danger float-right">
                                    <!-- only javascript show button name --> </a>
                            </div>
                        </div>
                    </div>
                    <div id="modal02" class="modal">
                        <div class="row modal-content modal-content-md animate">
                            <div class="modal-header">
                                <span id="webappDatabaseEditMode"><!-- only javascript show action status --></span>&nbsp;Databases
                            </div>
                            <div class='modal-body'>
                                <div id="webappDatabaseEditPAD">
                                    <div class="web-app-database-command">
                                        <label id="webapp-database-upgrade" class="upgrade box-shadow box-shadow-light">UPGRADE
                                            <input type="file" name="databaseFile" id="databaseFile" accept=".msdb,.sql"
                                                   style="display: none;"/>
                                        </label>
                                        {*<div id="webapp-database-upgrade" class="upgrade box-shadow box-shadow-light">UPGRADE</div>*}
                                        <div id="webapp-database-restore" class="restore box-shadow box-shadow-light">RESTORE</div>
                                    </div>
                                    <div id="web-app-database-output" class="web-app-database-output">
                                        {*Javascript will be execute here*}
                                    </div>
                                </div>
                            </div>
                            <div class='row modal-footer'>
                                <a href="javascript:void(0);"
                                   onclick="document.querySelector('#modal02').style.display = 'none'"
                                   class="button button-danger float-left">Cancel</a>
                            </div>
                        </div>
                    </div>
                    <div id="modal03" class="modal">
                        <div class="row modal-content modal-content-md animate">
                            <div class="modal-header">
                                <span id="webappLogoEditMode"><!-- only javascript show action status --></span>&nbsp;Logo
                            </div>
                            <div class='modal-body'>
                                <div id="webappLogoEditPAD">
                                    <div class="web-app-logo-preview">
                                        <img id="web-app-logo-preview-image" alt="Favicon"
                                             src="{WebPublicMediaLogoImagesFolder}mishusoft-logo-lite.webp"/>
                                    </div>
                                    <div class="web-app-logo-output">
                                        <div id="upload-info">
                                            <label id="upload-logo-zone" class="upload-logo-zone">
                                                <span id="web-app-logo-upload-text" class="web-app-logo-upload-text">Click or drag images here..</span>
                                                <input id="web-app-selected-logo" type="file" accept="image/png">
                                            </label>
                                            {*Javascript will be execute here*}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='row modal-footer'>
                                <a href="javascript:void(0);"
                                   onclick="document.querySelector('#modal03').style.display = 'none'"
                                   class="button button-danger float-left">Cancel</a>
                            </div>
                        </div>
                    </div>
                    <div id="modal04" class="modal">
                        <div class="row modal-content modal-content-md animate">
                            <div class="modal-header">
                                <span id="webappSocialLinksEditMode"><!-- only javascript show action status --></span>&nbsp;social
                                links
                            </div>
                            <div class='modal-body'>
                                <div id="message3" style="margin-top: 10px;">
                                    <!-- only javascript show message --> </div>
                                <div id="webappSocialLinksEditPAD">
                                    <form name="form1" id="webappForm1" method="post">
                                        <input id="web-app-social-links-id" type="hidden" value=""/>
                                        <table class="table table-condensed">
                                            <tr>
                                                <td style="width: 30%;">
                                                    Name:
                                                    <select id="social-website-name" title="Select any social website">
                                                        <option value=""> --Select one--</option>
                                                        <option value="Facebook"> Facebook</option>
                                                        <option value="WhatsApp"> WhatsApp</option>
                                                        <option value="QQ"> QQ</option>
                                                        <option value="WeChat"> WeChat</option>
                                                        <option value="QZone"> QZone</option>
                                                        <option value="Tumblr"> Tumblr</option>
                                                        <option value="Instagram"> Instagram</option>
                                                        <option value="Twitter"> Twitter</option>
                                                        <option value="Skype"> Skype</option>
                                                        <option value="Viber"> Viber</option>
                                                        <option value="LINE"> LINE</option>
                                                        <option value="Pinterest"> Pinterest</option>
                                                        <option value="LinkedIn"> LinkedIn</option>
                                                        <option value="Telegram"> Telegram</option>
                                                        <option value="Reddit"> Reddit</option>
                                                    </select>
                                                </td>
                                                <td style="width: 60%;">
                                                    Profile link:
                                                    <input id="social-website-profile-link" title="Profile Link"
                                                           type="text"
                                                           class="input-control" value="" placeholder="Profile Link"
                                                           maxlength="300">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <a href="javascript:void(0);" id="web-app-social-links-data-btn"
                                                       class="button button-primary float-right">
                                                        <!-- only javascript show button name --> </a>
                                                    <a href="javascript:void(0);" id="web-app-social-links-reset-btn"
                                                       class="button button-danger float-right">
                                                        <!-- only javascript show button name --> </a>
                                                </td>
                                            </tr>
                                        </table>

                                        <table class="table table-condensed table-striped"
                                               id="web-app-social-links-edit">
                                            <thead>
                                            <tr>
                                                <td>SL</td>
                                                <td>NAME</td>
                                                <td>LINK</td>
                                                <td>ACTION</td>
                                            </tr>
                                            </thead>
                                            <tbody id="web-app-social-links-edit-data">
                                            <tr>
                                                <td colspan="4">Data loading....</td>
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td>SL</td>
                                                <td>NAME</td>
                                                <td>LINK</td>
                                                <td>ACTION</td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </form>
                                </div>
                            </div>
                            <div class='row modal-footer'>
                                <a href="javascript:void(0);"
                                   onclick="document.querySelector('#modal04').style.display = 'none'"
                                   class="button button-danger float-left">Cancel</a>
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
                                <a href="javascript:void(0);" id="webapp-edit-btn"
                                   class="button button-md button-primary">
                                    <i class="fa fa-edit" aria-hidden="true"></i>

                                </a>
                                <a href="javascript:void(0);" id="webapp-database-btn"
                                   class="button button-md button-default">
                                    <i class="fa fa-database" aria-hidden="true"></i>
                                </a>
                                <a href="javascript:void(0);" id="webapp-logo-btn"
                                   class="button button-md button-success">
                                    <i class="fa fa-image" aria-hidden="true"></i>
                                </a>
                                <a href="javascript:void(0);" id="webapp-socialLinks-btn"
                                   class="button button-md button-danger">
                                    <i class="fa fa-share-alt-square" aria-hidden="true"></i>
                                </a>
                            </td>
                        </tr>
                    </table>
                    <div id="webapp-data-table">
                        <!-- only javascript show will required data -->
                        <div class="web-app-info-preload web-app-info-box">
                            <div class="web-app-info-box-nav">
                                <ul>
                                    <li><i class="fas fa-eye"></i>&ensp;&nbsp;</li>
                                    <li><i class="fab fa-app-store-ios"></i>&ensp;&ensp;</li>
                                    <li><i class="fas fa-database"></i>&ensp;&ensp;</li>
                                    <li><i class="fas fa-file-alt"></i>&ensp;&ensp;</li>
                                    <li><i class="fas fa-file-image"></i>&ensp;&ensp;</li>
                                    <li><i class="fas fa-user-friends"></i>&ensp;</li>
                                </ul>
                            </div>
                            <div class="web-app-info-box-content">
                                <div class="web-app-info-content-overview">
                                    <table class="table" style="text-align: center;">
                                        <tr>
                                            <td> Data loading......</td>
                                        </tr>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>


                    {*<div id="database-server-table">
                        <div class="database-server-preload">
                            <div class="database-server-preload-header">
                                <div class="database-server-sl">sl</div>
                                <div class="database-server-name">name</div>
                                <div class="database-server-username">user</div>
                                <div class="database-server-database">db name</div>
                                <div class="database-server-password">db password</div>
                                <div class="database-server-ACTION">action</div>
                            </div>
                            <div id="database-server-data-body" class="database-server-data-body">Databases loading...</div>
                            <div class="database-server-preload-footer">
                                <div class="database-server-sl">sl</div>
                                <div class="database-server-name">name</div>
                                <div class="database-server-username">user</div>
                                <div class="database-server-database">db name</div>
                                <div class="database-server-password">db password</div>
                                <div class="database-server-ACTION">action</div>
                            </div>
                        </div>
                    </div>*}
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