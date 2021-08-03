<div id="flex-center" class="flex-center">
    <div class="forgetPasswordBox box-shadow box-shadow-light" data-height="450">
        <img alt="logo" src="{$layoutParams.publicIMG}img-avatar3.png" class="userIconImage">
        <h2>Password Recovery</h2>
        <hr/>
        <div id="messageZone" class="userarea messageZone" style="display: block">
            <div class="box-message box-notify box-shadow box-shadow-light">
                <span class="box-notify-symbol"><i class="fa fa-info"></i></span>&nbsp;
                <span class="notify-md-content">
                    You can enter username or email or both. If your provide username or email are in our listed, we will send a link to reset your password.
                </span>
            </div>
            {if isset($error)}
                <div class="box-message box-danger box-shadow-light"><b class="text-danger">Error: </b>{$error} </div>
            {/if}
            {if isset($success)}
                <div class="box-message box-success box-shadow-light"><b class="text-success">Message: </b>{$success} </div>
            {/if}
        </div>

        <form role="form" name="ForgetPasswordForm" id="ForgetPasswordForm" method="post" action="">
            <input type="hidden" id="recovery" name="recovery" value="1">
            <input type="hidden" id="time" name="time" value="{time()}">
            <div class="row">
                <div class="row text-align-left">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" class="input-control" placeholder="Your username.." autofocus/>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" class="input-control" placeholder="Email address.." autocomplete="off"
                           pattern="{literal}[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}${/literal}"
                           title="Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a '.'. After the '.' sign, add at least 2 letters from a to z"/>
                </div>
            </div>
            <div class="row">
                <div class="float-right text-right">
                    <input type="submit" id="code-send-button" name="code-send" class="button button-primary" value="Send Code"/>
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