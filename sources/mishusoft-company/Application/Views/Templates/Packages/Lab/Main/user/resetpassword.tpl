<div id="flex-center" class="flex-center">
    <div class="set-new-password box-shadow box-shadow-light" style="{if isset($error)}height: 500px;{/if}">
        <img alt="logo" src="{$layoutParams.publicIMG}img-avatar3.png" class="userIconImage">
        <h2>Set New Password</h2>
        <hr/>
        <div id="messageZone" class="userarea messageZone" style="{if isset($error)}display: block;{/if}">
            {if isset($error)}
                <div class="box-message box-danger box-shadow-light"><span class="text-danger">Error: </span>{$error} </div>
            {/if}
        </div>

        {if !isset($error)}<br/>{/if}

        <form role="form" name="SetPasswordForm" id="SetPasswordForm" method="post" action="">
            <input type="hidden" id="set-password" name="set-new-password" value="1">
            <input type="hidden" id="user-id" name="user-id" value="{if isset($userId)}{$userId}{/if}">
            <input type="hidden" id="time" name="time" value="{time()}">
            <div class="row">
                <div class="row text-align-left">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" class="input-control" autocomplete="off"
                           placeholder="New password" pattern="{literal}(?=.*\d)(?=.*[@_])(?=.*[a-z])(?=.*[A-Z]).{6,}{/literal}"
                           title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
                           required/>

                    <label for="c_password">Confirm Password</label>
                    <input type="password" id="c_password" name="c_password" class="input-control" autocomplete="off"
                           placeholder="Confirm password" pattern="{literal}(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}{/literal}"
                           title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
                           required/>
                </div>
            </div>
            <div class="row">
                <div class="float-right text-right">
                    <input type="submit" id="set-new-password-button" name="set-new-password" class="button button-primary" value="Set Password"/>
                </div>
            </div>
            <div class="row" style="margin-top: 10px;line-height: 2;">
                <a href="{$layoutParams.root}user/login" class="link">
                    <span class="fa fa-user"></span> Log In</a> ||
                <a href="{$layoutParams.root}user/registration" class="link">
                    <span class="fa fa-user-plus"></span> Create a new account.</a>
                <br/>
                <a href="{$layoutParams.root}" class="link">
                    <span class="fa fa-arrow-left"></span> Go back home.
                </a>
            </div>
        </form>
    </div>
</div>