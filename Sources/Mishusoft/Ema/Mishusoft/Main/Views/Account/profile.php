<?php

use Mishusoft\Ema\Mishusoft\Main\Databases\AccountMSQL;
use Mishusoft\Framework\Chipsets\Media;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Number;
use Mishusoft\Framework\Drivers\Session;
use Mishusoft\Framework\Drivers\ViewRender;
use Mishusoft\Framework\Libraries\Runtime;
use Mishusoft\Framework\Migration\DB;

/*check session validity for current user*/
Session::validity();


$conOfDatabase = new AccountMSQL();


/**
 * url
 * GET [HOST]/account/welcome?a=encrypted_time&t=encrypted_action_status&sc=encrypted_secret_code
 */

/*
 * verify secret code form $_GET
*/
$detailsOfUser = array();
if (array_key_exists("sc", $_GET)) {
    /*if secret code does not match with logged user or not found any user, then redirect to logged user's profile*/
    if (is_numeric(_Array::value($_GET, "sc")) && Number::filterInt(_Array::value($_GET, "sc")) !== _Array::value((array)Session::get("me"), "code")) {
        $detailsOfUser = $conOfDatabase->getDetailsByItem(DB::USERS_LIST_TABLE, ["code" => _Array::value($_GET, "sc")]);

        if (count($detailsOfUser) <= 0) {
            Runtime::redirect("account/profile?a=" . time() . "&t=view&sc=" . _Array::value((array)Session::get("me"), "code"));
        }
    }

} else {
    $detailsOfUser = (array)Session::get("me");
}


/*verify content view mode for actual user*/
$viewMode = "view";
if (array_key_exists("t", $_GET)) {
    if (_Array::value($_GET, "t") === "update") {
        if (_Array::value($detailsOfUser, "code") === _Array::value((array)Session::get("me"), "code")) {
            $viewMode = "edit";
        } else {
            Runtime::redirect("account/profile?a=" . time() . "&t=view&sc=" . _Array::value($_GET, "sc"));
        }
    }
}


/*_Debug::preOutput($_GET);
_Debug::preOutput($detailsOfUser);
_Debug::preOutput($viewMode);*/

/*if logged user's want to edit her/his profile, then show logged user's profile with view only mode */
/*view only mode interface*/
/*set text for title*/
Ui::updateDocumentTitle(" || " . _String::ucwords($this->request["method"]));
Ui::assignAttributes($this->documentTemplateBodyElement, ["style" => "height: 700px;align-items: start;justify-content: left;"]);

/*add template body*/
$profileBody = Ui::element($this->documentTemplateBodyElement, "ms-app-profile-box", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;/*padding: 20px;*/border-radius:10px;text-align: left;font-size: 16px;width: -moz-available;width: -webkit-fill-available;" . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
]);

/*profile cover*/
/*Ui::element($profileBody, "ms-app-profile-cover", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: lightgray;text-align: center;font-size: 16px;height:125px;width: -moz-available;width: -webkit-fill-available;" . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
]);*/
Ui::element($profileBody, "img", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: lightgray;text-align: center;font-size: 16px;height:125px;width: -moz-available;width: -webkit-fill-available;" . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
    "src" => Media::getAssetsPath("images_abstract-texture-background.jpg","remote"),
]);
/*
 * off-white-paper-texture-watermark-useful-as-background-off-white-paper-texture-watermark-useful-as-background-high-130523073.jpg
 * */
/*profile photo*/
Ui::element(Ui::element($profileBody, "ms-app-profile-user-photo", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";text-align: center;font-size: 16px;height:100px;width: -moz-available;width: -webkit-fill-available;" . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
]), "img", ["style" => Ui::htmlHrefStyle . "width:150px;height:150px;border-radius: 50%;margin-bottom: 15px;margin-top: -80px;padding: 10px;background: white;" . Ui::css["box-shadow"], "src" => Media::getAssetsPath("images_img-avatar3.png", "remote")]);

/*Ui::element($profileBody, "ms-app-profile-menubar", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";text-align: center;font-size: 16px;height:80px;width: -moz-available;width: -webkit-fill-available;box-shadow: 1px 3px 4px rgba(0,0,0,.12),1px 1px 2px rgba(0,0,0,.24);margin-bottom: 10px;border-top: 1px solid rgba(0,0,0,.12);width: 1024px;". Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
]);*/


$tabList = array(
    array("url" => "&tab=summery", "name" => "Summery", "tooltip" => "Summery"),
    array("url" => "&tab=basic", "name" => "Basic", "tooltip" => "Basic Information"),
    array("url" => "&tab=work", "name" => "Work", "tooltip" => "Work Information"),
    array("url" => "&tab=academic", "name" => "Academic", "tooltip" => "Academic Information"),
    array("url" => "&tab=payment", "name" => "Payment", "tooltip" => "Payment Information"),
    array("url" => "&tab=security", "name" => "Security", "tooltip" => "Login & Security Information"),
);
$commonStyleStringForLinks = Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";height: inherit;width: 120px;text-transform: capitalize;" . Ui::css["display-flex"] . Ui::css["center"];
/*Ui::elementList(Ui::element($profileBody, "ms-app-profile-tab", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";text-align: center;font-size: 16px;height:50px;width: -moz-available;width: -webkit-fill-available;width: 1024px;margin-bottom: 10px;border-top: 1px solid rgba(0,0,0,.12);box-shadow: 1px 3px 4px rgba(0,0,0,.12),1px 1px 2px rgba(0,0,0,.24);" . Ui::css["display-flex"] . Ui::css["flex-row"] . Ui::css["center"],]), [
    "a" => [
        ["href" => "#", "style" => $commonStyleStringForLinks, "title" => "Summery", "text" => "Summery"],
        ["href" => "#", "style" => $commonStyleStringForLinks, "title" => "Basic Information", "text" => "Basic"],
        ["href" => "#", "style" => $commonStyleStringForLinks, "title" => "Work Information", "text" => "Work"],
        ["href" => "#", "style" => $commonStyleStringForLinks, "title" => "Academic Information", "text" => "Academic"],
        ["href" => "#", "style" => $commonStyleStringForLinks, "title" => "Login & Security Information", "text" => "Security"],],
]);*/
/*
 * CMOS::Data("framework")->host->url . "account/profile?a=" . time() . "&t="._Array::value($_GET, "t")."&sc=" . _Array::value($detailsOfUser, "code")
 * */

$parentElement = Ui::element($profileBody, "ms-app-profile-tab", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";text-align: center;font-size: 16px;height:50px;width: -moz-available;width: -webkit-fill-available;width: 1024px;margin-bottom: 10px;border-top: 1px solid rgba(0,0,0,.12);box-shadow: 1px 3px 4px rgba(0,0,0,.12),1px 1px 2px rgba(0,0,0,.24);" . Ui::css["display-flex"] . Ui::css["flex-row"] . Ui::css["center"],]);
foreach ($tabList as $tab) {
    Ui::element($parentElement, "a", ["href" => Memory::Data("framework")->host->url . "account/profile?a=" . time() . "&t=" . _Array::value($_GET, "t") . "&sc=" . _Array::value($detailsOfUser, "code") . $tab["url"], "style" => $commonStyleStringForLinks, "title" => $tab["tooltip"], "text" => $tab["name"]]);
}

$profileContent = Ui::element($profileBody, "ms-app-profile-user-content", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";text-align: center;font-size: 14px;width: 1024px;" . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
]);

/*catch error*/
if (array_key_exists("error", $_GET) || array_key_exists("success", $_GET) || array_key_exists("notify", $_GET)) {
    ViewRender::board("message", $profileContent);
}

/*_Debug::preOutput($viewMode);
_Debug::preOutput($detailsOfUser);*/


$currentTab = "summery";
if (array_key_exists("tab", $_GET)) {
    if (_String::lower(_Array::value($_GET, "tab")) === _String::lower("summery")) {
        //_Debug::preOutput(_String::ucfirst(_Array::value($_GET, "tab")) . " page");


        /*$dtlOfUser = $conOfDatabase->getDetailsByItem(["code"=>Decryption::dynamic(_Array::value($_GET,"sc"))]);*/
        if (array_key_exists("email", $detailsOfUser)) {
            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-success box-shadow-light"]);
            Ui::element(Ui::element($item, 'symbol', ['class' => "box-success-symbol"]), 'i', ['class' => "fa fa-check"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "EMAIL : " . _String::upper(_Array::value($detailsOfUser, "email")));
        } else {
            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-danger box-shadow-light"]);
            Ui::element(Ui::element($item, 'symbol', ['class' => "box-danger-symbol"]), 'i', ['class' => "fa fa-times"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "E-mail is empty.");
        }

        if (array_key_exists("username", $detailsOfUser)) {
            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-success box-shadow-light"]);
            Ui::element(Ui::element($item, 'symbol', ['class' => "box-success-symbol"]), 'i', ['class' => "fa fa-check"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "USERNAME : " . _String::upper(_Array::value($detailsOfUser, "username")));
        } else {
            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-danger box-shadow-light"]);
            Ui::element(Ui::element($item, 'symbol', ['class' => "box-danger-symbol"]), 'i', ['class' => "fa fa-times"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Username isn't set.");
        }


        if (array_key_exists("password", $detailsOfUser)) {
            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-success box-shadow-light"]);
            Ui::element(Ui::element($item, 'symbol', ['class' => "box-success-symbol"]), 'i', ['class' => "fa fa-check"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "PASSWORD : " . _Array::value($detailsOfUser, "password"));
        } else {
            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-danger box-shadow-light"]);
            Ui::element(Ui::element($item, 'symbol', ['class' => "box-danger-symbol"]), 'i', ['class' => "fa fa-times"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Password isn't set.");
        }
    }
    if (_Array::value($_GET, "tab") === "basic") {
        /*collect all records about current user*/
        $basicOfUser = $conOfDatabase->getDetailsByItem(DB::USERS_BASIC_INFO_LIST_TABLE, ["user" => _Array::value($detailsOfUser, "id")]);
        if (count($basicOfUser)>0){
            //_Debug::preOutput($basicOfUser);
            $viewBoard = Ui::element(Ui::element(Ui::element($profileContent, 'basic', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'info', ['class' => "box-message box-success box-shadow-light"]), 'content', ['class' => 'notify-md-content', 'style' => Ui::css['display-flex'].Ui::css['flex-column'].'justify-content: left;align-items: start;']);
            Ui::element($viewBoard, 'caption_text', ['style' => 'font-size:20px;margin-bottom: 5px;font-weight: bolder;','text'=>'Basic Information']);
            Ui::element($viewBoard, 'details', ['style' => 'font-size:15px;font-weight: normal;','text'=>'all info will be view']);
        } else {
            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-danger box-shadow-light"]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Content is empty.");
        }
    }
    if (_Array::value($_GET, "tab") === "academic") {
        $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-danger box-shadow-light"]);
        Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Content is empty.");
    }
    if (_Array::value($_GET, "tab") === "work") {
        $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-danger box-shadow-light"]);
        Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Content is empty.");
    }
    if (_Array::value($_GET, "tab") === "payment") {
        $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-danger box-shadow-light"]);
        Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Content is empty.");
    }
    if (_Array::value($_GET, "tab") === "security") {
        $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'].'width: inherit;']), 'item', ['class' => "box-message box-danger box-shadow-light"]);
        Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Content is empty.");
    }
}


if (_Array::value($detailsOfUser, "code") === _Array::value((array)Session::get("me"), "code")) {
    /**
     * <a href="http://localhost/account/profile?a=cXNlMlpYdkZXREhnRE9jWTlXRFBBUT09Ok1pc2h1c29mdDqsaz4P6DrZ/o393+2OU5Aj&amp;t=T1UvR0dLeFVZK2Q5cDkxTlVUT1RLZz09Ok1pc2h1c29mdDq9nEvnsxz9ma9ydFOVNMk+&amp;sc=MXVVNUp3Z0Z5SXprM0wxM1NRbjBvUT09Ok1pc2h1c29mdDqcfuCfdL5xeb0DZ/nvFUHO" class="button button-primary" style="display: flex;justify-content: center;align-items: center;">Update Profile</a>
     * <a href="http://localhost/account/profile?a=1611205518&t=view&sc=12111931" class="button button-primary" style="display: flex;justify-content: center;align-items: center;">Update Profile</a>
     * */
    /*create command element*/
    /*create update profile button*/
    Ui::element(Ui::element($profileContent, "command", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"]]), "a", [
        "href" => Memory::Data("framework")->host->url . "account/profile?a=" . time() . "&t=update&tab=summery&sc=" . _Array::value((array)Session::get("me"), "code"),
        "class" => "button button-primary", "text" => "Update Profile", "style" => "display: flex;justify-content: center;align-items: center;"]);

}

/*end of profile page*/