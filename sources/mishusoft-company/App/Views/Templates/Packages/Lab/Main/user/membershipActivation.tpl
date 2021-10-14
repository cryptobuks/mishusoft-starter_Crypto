<div class="flex-column flex-column-content row box-shadow box-shadow-light margin-bottom-10">
    <div class="row col-lg-12 col-md-12">
        <h2>User account activation</h2>
        {if isset($error)}
            <div class="box-message box-danger box-shadow-light"><b class="text-danger">Error: </b>{$error} </div>
        {/if}
        {if isset($success)}
            <div class="box-message box-success box-shadow-light"><b class="text-success">Message: </b>{$success} </div>
        {/if}
        <br/>
        <br/>
        <div class="row margin-bottom-10">
            <?php if (!Session::get('auth')): ?>
            <a href="{$layoutParams.root}user/login" class="link">
                <span class="fa fa-user"></span>
                Login
            </a>
            ||
            <a href="{$layoutParams.root}user/registration" class="link">
                <span class="fa fa-user-plus"></span>
                Create a new account.
            </a>
            ||
            <a href="{$layoutParams.root}user/pswrdRecovery" class="link">
                <span class="fa fa-user-times"></span>
                Forget password?
            </a>
            <br/> <br/>
            <?php endif; ?>

            <a href="{$layoutParams.root}" class="link"> <span class="fa fa-arrow-left"></span> Go back home.</a>
        </div>
    </div>
</div>