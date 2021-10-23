<?php


use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Decryption;
use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Drivers\Session;
use Mishusoft\Framework\Drivers\ViewRender;
use Mishusoft\Framework\Libraries\Runtime;

Session::validity();

_Debug::preOutput($_SESSION);
_Debug::preOutput($_GET);
/**
 * url
 * POST [HOST]/account/welcome?t=encrypted_time&sc=encrypted_secret_code
 * Return url
 * GET [HOST]/account/username?t=encrypted_time&sc=encrypted_secret_code&error=encrypted_message
 * GET [HOST]/account/username?t=encrypted_time&sc=encrypted_secret_code&success=encrypted_message
 * GET [HOST]/account/username?t=encrypted_time&sc=encrypted_secret_code&notify=encrypted_message
 */

if (array_key_exists("t", $_GET)) {
    _Debug::preOutput(Decryption::dynamic($_GET["t"]));
    if (array_key_exists("sc", $_GET)) {

        /*set text for title*/
        Ui::updateDocumentTitle(" || " . _String::ucwords($this->request["method"]));
        Ui::assignAttributes($this->documentTemplateBodyElement, ["style" => "height: 700px;align-items: center;justify-content: center;"]);

        /*add template body*/
        $welcomeBody = Ui::element($this->documentTemplateBodyElement, "ms-app-welcome-box", [
            "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height:500px;width: 370px;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
        ]);
        Ui::element($welcomeBody, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;", "src" => Storage::getAssetsPath("images_img-avatar3.png", "remote")]);

        /*catch error*/
        if (array_key_exists("error", $_GET) || array_key_exists("success", $_GET) || array_key_exists("notify", $_GET)) {
            ViewRender::board("message", $welcomeBody);
        }

        /*$dtlOfUser = $this->conOfDatabase->getDetailsByItem(["code"=>Decryption::dynamic(_Array::value($_GET,"sc"))]);*/
        if (array_key_exists("email", (array)Session::get("me"))) {
            $item = Ui::element(Ui::element($welcomeBody, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-success box-shadow-light"]);
            Ui::element(Ui::element($item, 'symbol', ['class' => "box-success-symbol"]), 'i', ['class' => "fa fa-check"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "EMAIL : " . _String::upper(_Array::value((array)Session::get("me"), "email")));
        } else {
            $item = Ui::element(Ui::element($welcomeBody, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-danger box-shadow-light"]);
            Ui::element(Ui::element($item, 'symbol', ['class' => "box-danger-symbol"]), 'i', ['class' => "fa fa-times"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "E-mail is empty.");
        }

        if (array_key_exists("username", (array)Session::get("me"))) {
            $item = Ui::element(Ui::element($welcomeBody, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-success box-shadow-light"]);
            Ui::element(Ui::element($item, 'symbol', ['class' => "box-success-symbol"]), 'i', ['class' => "fa fa-check"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "USERNAME : " . _String::upper(_Array::value((array)Session::get("me"), "username")));
        } else {
            $item = Ui::element(Ui::element($welcomeBody, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-danger box-shadow-light"]);
            Ui::element(Ui::element($item, 'symbol', ['class' => "box-danger-symbol"]), 'i', ['class' => "fa fa-times"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Username isn't set.");
        }


        if (array_key_exists("password", (array)Session::get("me"))) {
            $item = Ui::element(Ui::element($welcomeBody, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-success box-shadow-light"]);
            Ui::element(Ui::element($item, 'symbol', ['class' => "box-success-symbol"]), 'i', ['class' => "fa fa-check"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "PASSWORD : " . _Array::value((array)Session::get("me"), "password"));
        } else {
            $item = Ui::element(Ui::element($welcomeBody, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-danger box-shadow-light"]);
            Ui::element(Ui::element($item, 'symbol', ['class' => "box-danger-symbol"]), 'i', ['class' => "fa fa-times"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Password isn't set.");
        }
        /**
         * <input type="submit" id="login-button" name="login" class="button button-primary" value="Log In"/>
         * */
        /*create command element*/
        /*create update profile button*/
        Ui::element(Ui::element($welcomeBody, "command", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"].'width: inherit;']), "a", [
            "href" => Memory::Data("framework")->host->url . "account/profile?a=" . time() . "&t=update&sc=" . _Array::value((array)Session::get("me"), "code"),
            "class" => "button button-primary", "text" => "Update Profile", "style" => "display: flex;justify-content: center;align-items: center;"]);
    /*end of create page*/
    } else {
        Runtime::redirect();
    }
} else {
    Runtime::redirect();
}
