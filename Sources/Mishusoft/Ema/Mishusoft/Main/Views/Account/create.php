<?php


use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Encryption;
use Mishusoft\Framework\Chipsets\Media;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Drivers\Session;
use Mishusoft\Framework\Drivers\ViewRender;
use Mishusoft\Framework\Libraries\Runtime;

if (Session::get("auth")) {
    Runtime::redirect("account/welcome"
        . "?t=" . Encryption::dynamic(time()) . "&sc=" . Encryption::dynamic(Session::get("code"))
        . "&notify=" . Encryption::dynamic("Your account is not complete till now. Please complete your account for get access facilities."));
} else {

    /*set text for title*/
    Ui::updateDocumentTitle(" || " . _String::ucwords("create a new account"));
    Ui::assignAttributes($this->documentTemplateBodyElement, ["style" => "height: 700px;align-items: center;justify-content: center;"]);

    /*add template body*/
    $signupBody = Ui::element($this->documentTemplateBodyElement, "ms-app-create-box", [
        "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height:500px;width: 370px;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
    ]);
    Ui::element($signupBody, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;", "src" => Media::getAssetsPath("images_img-avatar3.png", "remote")]);
    Ui::element($signupBody, "h3", ["style" => Ui::htmlHrefStyle . "text-align: left;display: flex;align-items: start;width: 100%;padding: 5px;margin-bottom: 5px;margin-top: 0px;", "text" => "Create a new account"]);


    /*catch error*/
    /*_Debug::preOutput($_GET);*/
    /*if (count($this->request["arguments"]) > 0) {
        $this->board("message", $signupBody);
    }*/
    if (array_key_exists("error", $_GET) || array_key_exists("success", $_GET) || array_key_exists("notify", $_GET)) {
        ViewRender::board("message", $signupBody);
    }

    /*create form element*/
    $frm = Ui::element($signupBody, "form", ["method" => "post", "action" => Memory::Data("framework")->host->url . "account/verification", "enctype" => "application/x-www-form-urlencoded", "style" => "width: inherit;"]);

    /*create hidden element*/
    /**
     * <input type="hidden" name="logged" value="1">
     * <input id="redirect" type="hidden" name="redirect" value="{$redirect}">
     * */

    Ui::elementList($frm, [
        "input" => [
            ["type" => "hidden", "name" => "account", "value" => "create"],
            ["type" => "hidden", "name" => "create", "value" => "1"],
            ["type" => "hidden", "name" => "time", "value" => time()],
            ["type" => "hidden", "name" => "redirect", "value" => empty(_Array::value($_GET, "redirect")) ? "account/create" : _Array::value($_GET, "redirect")]
        ],
    ]);

    /*create email element*/
    $email = Ui::element($frm, "email", ["style" => Ui::htmlHrefStyle . "width:100%;"]);

    /*create email"s child element*/
    /**
     * <label for="email">Email address (<span class="text-danger">*</span>)</label>
     * <input type="email" id="email" name="email" class="input-control" placeholder="Email address.."
     * pattern="{literal}[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}${/literal}" autocomplete="off"
     * title="Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a ".". After the "." sign, add at least 2 letters from a to z"
     * required="required" value="{if isset($submitted_data)}{$submitted_data.email}{/if}"/>
     * */
    Ui::element($email, "label", ["for" => "email", "text" => "Email address"]);
    Ui::element($email, "input", ["id" => "email", "type" => "text", "name" => "email", "class" => "input-control",
        "placeholder" => "Your e-mail address..", "pattern" => "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
        "autocomplete" => "off", "title" => "Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a " . ". After the " . " sign, add at least 2 letters from a to z",
        "required" => "required", "autofocus" => "autofocus"]);

    /*create command element*/
    $command = Ui::element($frm, "command", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "width:100%;"]);

    /*create command"s element*/
    $t_c = Ui::element($command, "text", ["class" => "input-container", "for" => "RememberMe", "style" => Ui::css["font-normal"] . "font-size:13px;", "text" => "By clicking [Next] button you agree with our all "]);
    Ui::element($t_c, "a", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:13px;", "href" => Memory::Data("framework")->host->url . "company/terms", "text" => "Terms Conditions"]);
    Ui::text($t_c, " and ");
    Ui::element($t_c, "a", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:13px;", "href" => Memory::Data("framework")->host->url . "company/privacy", "text" => "Privacy Policy"]);
    Ui::text($t_c, ".");


    /*create next button*/
    /**
     * <input type="submit" id="next-button" name="login" class="button button-primary" value="Next"/>
     * */

    Ui::element(Ui::element($command, "next", ["style" => Ui::css["display-flex"] . "justify-content:right;"]), "input", ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-primary", "value" => "Next",]);

    /*alternate help links*/
    Ui::elementList(
        Ui::element($frm, "alternative", ["style" => Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::htmlHrefStyle . "width: -webkit-fill-available;width: -moz-available;;line-height: 2;"]), [
        "a" => [
            ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/login", "text" => "Log in", "title" => "Click to log in your account"],
            ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/recovery", "text" => "Forget Account?", "title" => "Click to recovery your account if you forget password or account"],
            ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url, "text" => "Back to home", "title" => "Click to go back to home"]
        ],
    ]);
}

/*end of create page*/