<div id="flex-center" class="flex-center">
    <div class="logInBox box-shadow box-shadow-light" data-height="515">
        <img alt="logo" src="{$layoutParams.publicIMG}img-avatar3.png" class="userIconImage">
        <h2>Log in</h2>
        <hr/>
        <div id="messageZone" class="userarea messageZone">
            {if isset($notify) }
                <div class="box-message box-notify box-shadow-light">{$notify}</div>
            {/if}
            {if isset($error) }
                <div class="box-message box-danger box-shadow-light">{$error}</div>
            {/if}
        </div>
        <br/>

        <form role="form" name="LogInForm" id="LogInForm" method="post" action="{$layoutParams.root}user/login" enctype="application/x-www-form-urlencoded">
            <input type="hidden" name="logged" value="1">
            <input id="redirect" type="hidden" name="redirect" value="{$redirect}">
            <div class="row">
                <div class="row text-align-left">
                    <label for="username">Username</label>
                    <input type="text"  id="username" name="username" class="input-control" placeholder="Your username.."
                           pattern="{literal}[a-z0-9]{8,}${/literal}" autofocus autocomplete="off"
                           title="Must contain characters and at least 8 letters from a to z"
                           required="required" value="{if isset($submitted_data)}{$submitted_data.username}{/if}"/>

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" class="input-control"  autocomplete="off"
                           placeholder="***************" pattern="{literal}(?=.*\d)(?=.*[@_])(?=.*[a-z])(?=.*[A-Z]).{6,}{/literal}"
                           title="Must contain at least one  number and one uppercase and lowercase letter and at least 6 or more characters"
                           required="required" value="{if isset($submitted_data)}{$submitted_data.password}{/if}"/>
                </div>

                <div class="row">
                    <div class="float-left text-left">
                        <label class="input-container">Remember me.
                            <input type="checkbox" id="RememberMe" name="RememberMe" value="RememberMe"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>

                    <div class="float-right text-right">
                        <input type="submit" id="login-button" name="login" class="button button-primary" value="Log In"/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="text-align-center">OR</div>
                <div class="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
            <div class="row" style="margin-top: 10px;line-height: 2;">
                <a href="{$layoutParams.root}user/registration" class="link">
                    <span class="fa fa-user-plus"></span> Create a new account.</a> ||
                <a href="{$layoutParams.root}user/pswrdRecovery" class="link">
                    <span class="fa fa-user-times"></span> Forget password?
                </a>
                <br/>
                <a href="{$layoutParams.root}" class="link">
                    <span class="fa fa-arrow-left"></span> Go back home.
                </a>
            </div>
        </form>
    </div>
</div>