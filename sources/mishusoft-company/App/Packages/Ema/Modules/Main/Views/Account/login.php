<?php

use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Encryption;
use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Drivers\Session;
use Mishusoft\Framework\Drivers\ViewRender;
use Mishusoft\Framework\Libraries\Runtime;

/*_Debug::preOutput($_GET);*/
if (Session::get("auth")) {
    Runtime::redirect("account/welcome"
        . "?t=" . Encryption::dynamic(time()) . "&sc=" . Encryption::dynamic(Session::get("code"))
        . "&notify=" . Encryption::dynamic("Your account is not complete till now. Please complete your account for get access facilities."));
} else {
    /*set text for title*/
    Ui::updateDocumentTitle(" || " . _String::ucwords("log in"));

//    \Mishusoft\Framework\Chipsets\Utility\_Debug::preOutput(Ui::hasAttribute($this->documentTemplateBodyElement,"class"));
//    \Mishusoft\Framework\Chipsets\Utility\_Debug::preOutput(Ui::getAttribute($this->documentTemplateBodyElement,"class"));

    if (Ui::hasAttribute($this->documentTemplateBodyElement, "class")
        and !stripos(Ui::getAttribute($this->documentTemplateBodyElement, "class"), "height-700px")
        || !stripos(Ui::getAttribute($this->documentTemplateBodyElement, "class"), "flex-center-all")) {
        Ui::assignAttributes($this->documentTemplateBodyElement, ["class" => Ui::getAttribute($this->documentTemplateBodyElement, "class") . " height-700px flex-center-all"]);
    }

    /*add template body*/
    $loginBody = Ui::element($this->documentTemplateBodyElement, "ms-app-login-box", [
        "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height: auto;width: 370px;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
    ]);
    Ui::element($loginBody, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;",
        "src" => Storage::getMediaPath("images/avatars/img-avatar3.png", "remote")]);


    /*catch error*/
    /*_Debug::preOutput($_GET);*/
    /*if (count($this->request["arguments"]) > 0) {
        $this->board("message", $loginBody);
    }*/
    if (array_key_exists("error", $_GET) || array_key_exists("success", $_GET) || array_key_exists("notify", $_GET)) {
        ViewRender::board("message", $loginBody);
    }

    /*create form element*/
    $frm = Ui::element($loginBody, "form", ["name" => "login", "method" => "post", "action" => Memory::Data("framework")->host->url . "account/verification", "enctype" => "application/x-www-form-urlencoded", "style" => "width: inherit;"]);

    /**
     * <input type="hidden" name="account" value="login">
     * <input type="hidden" name="logged" value="1">
     * <input id="redirect" type="hidden" name="redirect" value="{$redirect}">
     * <input id="redirect" type="hidden" name="type" value="{$secret_code_token}">
     * */
    /*create hidden element*/
    Ui::elementList($frm, [
        "input" => [
            ["type" => "hidden", "name" => "account", "value" => "login"],
            ["type" => "hidden", "name" => "logged", "value" => "1"],
            ["type" => "hidden", "name" => "time", "value" => time()],
            ["type" => "hidden", "name" => "next", "value" => _Array::value($_GET, "next")],
            ["type" => "hidden", "name" => "redirect", "value" => empty(_Array::value($_GET, "redirect")) ? "account/login" : _Array::value($_GET, "redirect")]
        ],
    ]);

    if (array_key_exists("type", $_GET) and _Array::value($_GET, "type") === "email-only") {
        /*add secret code token*/
        Ui::element($frm, "input", ["type" => "hidden", "name" => "type", "value" => _Array::value($_GET, "type")]);

        /**
         * <label for="email">Email address (<span class="text-danger">*</span>)</label>
         * <input type="email" id="email" name="email" class="input-control" placeholder="Email address.."
         * pattern="{literal}[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}${/literal}" autocomplete="off"
         * title="Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a ".". After the "." sign, add at least 2 letters from a to z"
         * required="required" value="{if isset($submitted_data)}{$submitted_data.email}{/if}"/>
         * */
        /*create username element*/
        $email = Ui::element($frm, "email", ["style" => Ui::htmlHrefStyle . "width:100%;"]);
        /*create email"s child element*/
        Ui::element($email, "label", ["for" => "email", "text" => "E-mail address"]);
        Ui::element($email, "input", ["id" => "email", "type" => "text", "name" => "email", "class" => "input-control",
            "placeholder" => "Your e-mail address..", "pattern" => "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
            "autocomplete" => "off", "title" => "Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a '.'. After the '.' sign, add at least 2 letters from a to z",
            "required" => "required", "autofocus" => "autofocus"]);

        /*create command element*/
        $command = Ui::element($frm, "command", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "width:100%;"]);

        /*create command"s element*/
        /**
         * <label class="input-container">Remember me.
         * <input type="checkbox" id="RememberMe" name="RememberMe" value="RememberMe"/>
         * <span class="checkmark"></span>
         * </label>
         */
        $label = Ui::element(
            Ui::element($command, "remember", ["style" => Ui::css["display-flex"] . "width: -webkit-fill-available;width: -moz-available;"]),
            "label",
            ["class" => "input-container", "style" => Ui::css["font-normal"]]
        );
        Ui::element($label, "input", ["type" => "checkbox", "name" => "RememberMe", "value" => true]);
        Ui::element($label, "span", ["class" => "checkmark"]);
        Ui::text($label, "Remember Me");


        /*create login button*/
        /**
         * <input type="submit" id="login-button" name="login" class="button button-primary" value="Log In"/>
         * */
        Ui::element(Ui::element($command, "login", ["style" => Ui::css["display-flex"] . "width: -webkit-fill-available;width: -moz-available;"]), "input", ["id" => "login-button", "type" => "submit", "name" => "button", "class" => "button button-success", "value" => "Log In",]);

        /*create alternative element*/
        $alternative = Ui::element($frm, "alternative", ["id" => "alternative",/*"style" => Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::htmlHrefStyle . "width:100%;line-height: 2;"*/]);

        $other = Ui::element($alternative, "other", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "color:" . Ui::color["black"] . ";font-size:15px;justify-content: center;align-items: center;width:100%;margin-top: 10px;margin-bottom:10px;", "title" => "Click to log in with email"]);
        Ui::element($other, "option", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . "color:" . Ui::color["black"] . ";font-size:15px;justify-content: center;align-items: center;width:100%;", "text" => "Log in with your username and password"]);
        Ui::element($other, "a", [
            "href" => Memory::Data("framework")->host->url . "account/login?type=username-and-password",
            "class" => "button button-primary", "text" => "Log in with Username",
            "style" => "display: flex;justify-content: center;align-items: center;width: -webkit-fill-available;width: -moz-available;"]);

        /*alternate help links*/
        Ui::elementList($alternative, [
            "a" => [
                ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/recovery", "text" => "Forget Account?", "title" => "Click to recovery your account if you forget password or account"],
                ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/create", "text" => "Create New Account", "title" => "Click to create new account"],
                ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url, "text" => "Back to home", "title" => "Click to go back to home"]
            ],
        ]);
    } else {
        /*we execute username and password modal for login page after verification*/
        if (empty(_Array::value($_GET, "type")) or _Array::value($_GET, "type") === "username-and-password") {

            /**
             * <label for="username">Username</label>
             * <input type="text"  id="username" name="username" class="input-control" placeholder="Your username.."
             *        pattern="{literal}[a-z0-9]{8,}${/literal}" autofocus autocomplete="off"
             *        title="Must contain alphanumeric characters only and at least 8 letters from a to z"
             *        required="required" value="{if isset($submitted_data)}{$submitted_data.username}{/if}"/>
             * */
            /*create username element*/
            $username = Ui::element($frm, "username", ["style" => Ui::htmlHrefStyle . "width:100%;"]);
            /*create username"s child element*/
            Ui::element($username, "label", ["for" => "username", "text" => "Username"]);
            Ui::element($username, "input", ["id" => "username", "type" => "text", "name" => "username",
                "class" => "input-control", "placeholder" => "Your username..", "pattern" => "[a-z0-9]{8,}$", "autocomplete" => "off",
                "title" => "Must contain alphanumeric characters only and at least 8 letters from a to z",
                "required" => "required", "autofocus" => "autofocus"]);

            /**
             * <label for="password">Password</label>
             * <input type="password" id="password" name="password" class="input-control"  autocomplete="off"
             * placeholder="***************" pattern="{literal}(?=.*\d)(?=.*[@_])(?=.*[a-z])(?=.*[A-Z]).{6,}{/literal}"
             * title="Must contain at least one  number and one uppercase and lowercase letter and at least 6 or more characters"
             *  required="required" value="{if isset($submitted_data)}{$submitted_data.password}{/if}"/>
             * */
            /*create password element*/
            $password = Ui::element($frm, "password", ["style" => Ui::htmlHrefStyle . "width:100%;"]);

            /*create password"s child element*/
            Ui::element($password, "label", ["for" => "password", "text" => "Password"]);
            Ui::element($password, "input", ["id" => "password", "type" => "password", "name" => "password",
                "required" => "required", "placeholder" => "***************", "class" => "input-control", "pattern" => "(?=.*\d)(?=.*[@_])(?=.*[a-z])(?=.*[A-Z]).{6,}",
                "autocomplete" => "off", "title" => "Must contain at least one  number and one uppercase and lowercase letter and at least 6 or more characters"]);

            /*create command element*/
            $command = Ui::element($frm, "command", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "width:100%;"]);

            /**
             * <label class="input-container">Remember me.
             * <input type="checkbox" id="RememberMe" name="RememberMe" value="RememberMe"/>
             * <span class="checkmark"></span>
             * </label>
             */
            /*create command"s element*/
            $remember = Ui::element($command, "remember", ["style" => Ui::css["display-flex"] . "justify-content:left;width: -webkit-fill-available;width: -moz-available;"]);
            $label = Ui::element($remember, "label", ["class" => "input-container", "for" => "RememberMe", "style" => Ui::css["font-normal"]]);
            Ui::element($label, "input", ["id" => "RememberMe", "type" => "checkbox", "name" => "RememberMe", "value" => "RememberMe"]);
            Ui::element($label, "span", ["class" => "checkmark"]);
            Ui::text($label, "Remember Me");

            /**
             * <input type="submit" id="login-button" name="login" class="button button-primary" value="Log In"/>
             * */
            /*create login button*/
            Ui::element(Ui::element($command, "login", ["style" => Ui::css["display-flex"] . "justify-content:right;width: -webkit-fill-available;width: -moz-available;"]), "input", ["id" => "login-button", "type" => "submit", "name" => "button", "class" => "button button-primary", "value" => "Log In",]);

            /*create alternative element*/
            $alternative = Ui::element($frm, "alternative", ["id" => "alternative",/*"style" => Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::htmlHrefStyle . "width:100%;line-height: 2;"*/]);
            $other = Ui::element($alternative, "other", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . Ui::css["display-flex"] . Ui::css["flex-column"] . ";font-size:15px;justify-content: center;align-items: center;", "title" => "Click to log in with email"]);
            Ui::element($other, "option", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;display: flex;justify-content: center;align-items: center;", "text" => "If you have no username or password"]);
            Ui::element($other, "a", [
                "href" => Memory::Data("framework")->host->url . "account/login?type=email-only",
                "class" => "button button-success", "text" => "Log in with E-mail", "style" => "display: flex;justify-content: center;align-items: center;"]);

            /*alternate help links*/
            Ui::element($alternative, "a", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/recovery", "text" => "Forget Account?", "title" => "Click to recovery your account if you forget password or account"]);
            Ui::element($alternative, "a", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/create", "text" => "Create New Account", "title" => "Click to create new account"]);
            Ui::element($alternative, "a", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url, "text" => "Back to home", "title" => "Click to go back to home"]);
        } else {
            Runtime::redirect("account/login?type=username-and-password");
        }
    }
}

/*end of login page*/
