<?php

use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Libraries\Runtime;

$translation = new Localization(_Array::value($this->request, "locale"));
/*set text for title*/
Ui::updateDocumentTitle(" || " . $translation->translate("Welcome to Mishusoft family"));

/*set separate paragraph for index page*/
Ui::elementList(
    $this->documentTemplateBodyElement, [
    "ms-app-paragraph" => [
        ["style" => "padding: 50px;text-align: center;font-size: 40px;font-weight: bold;", "text" => $translation->translate("Welcome to Mishusoft family")],/*set welcome text*/
        ["style" => "padding: 10px;text-align: center;font-size: 16px;font-weight: normal;line-height: 1.5;margin: 0 10px 0 10px;", "text" => $translation->translate("Mishusoft Systems Incorporated is a software development company that is going to be established with a view to offering high quality IT solutions at home and abroad. The company is keen to take the advantage of fast growing global software and data processing industry by offering professional service and price for support and benefit of the valued customers.")],/*set company details text*/
        ["style" => "padding: 10px;text-align: center;font-size: 16px;font-weight: normal;line-height: 1.5;margin: 0 10px 0 10px;", "text" => $translation->translate("We offered to join with us and receive any service, then the valued customers take a relax.")]/*set offer text*/
    ],
]);


/*add account related card"s title*/
Ui::element($this->documentTemplateBodyElement, "ms-app-paragraph", ["style" => "padding: 35px;text-align: center;font-size: 24px;font-weight: bold;", "text" => $translation->translate("Select one or take a support!!")]);
/*add account related cards*/
//$cardParent = Ui::element($this->documentTemplateBodyElement, "card", ["class" => "card1",]/*["style" => "display: flex;flex-direction: row;justify-content: center;align-content: space-between;width: 100%;"]*/);
//$commonStyleStringForCards = "background: white;color: " . Ui::color["black"] . ";" . Ui::htmlHrefStyle . "margin: 10px;align-items: center;display: flex;justify-content: center;flex-direction: column;width: 200px;height: 150px;line-height: 2;border-radius: 10px;" . Ui::css["box-shadow"];

/*add child*/
/*
 *             "meta" => [
                ["name" => "google-site-verification", "content" => "920ooXJv6lcqtSwPRaqe_b5EJwKNB367u-F7qhfdQGA"],
                ["name" => "google-signin-client_id", "content" => "490685818841-9ck0mpi283mogcoskgk8kso236m5bvn4.apps.googleusercontent.com"]
            ]
*/

/*create html anchor elements*/
/*Ui::elementList(
    Ui::element($cardParent, "a", [
        "class" => "protect flex-center-all", "style" => "background: white;", "href" => Runtime::link("account/login")]), [
        "div" => [
            ["class" => "card-icon flex-center-all", "child" => ["img" => [
                "alt" => "Log in to your account", "width" => "60px", "height" => "80px",
                "src" => Media::getMediaPath("images/users/login-rounded-right.png", "remote")
            ]]],
            ["class" => "card-title flex-center-all", "text" => "Log in"]
        ]]
);*/
/*end of html anchor elements*/


/*create html anchor elements*/
Ui::elementList(
    Ui::element($this->documentTemplateBodyElement, "card", ["class" => "card1",]), [
        "a" => [
            ["class" => "protect flex-center-all", "style" => "background: white;", "href" => Runtime::link("account/login"), "child"=>[
                "div" => [
                    ["class" => "card-icon flex-center-all", "child" => ["img" => [
                        "alt" => "Log in to your account", "width" => "85px", "height" => "85px",
                        "src" => Storage::getMediaPath("images/users/login-rounded-right.png", "remote")
                    ]]],
                    ["class" => "card-title flex-center-all", "text" => "Log in"]
                ]
            ]],
            ["class" => "protect flex-center-all", "style" => "background: white;", "href" => Runtime::link("account/create"), "child"=>[
                "div" => [
                    ["class" => "card-icon flex-center-all", "child" => ["img" => [
                        "alt" => "Create a new account", "width" => "85px", "height" => "85px",
                        "src" => Storage::getMediaPath("images/users/edit-user-male.png", "remote")
                    ]]],
                    ["class" => "card-title flex-center-all", "text" => "Create a new account"]
                ]
            ]],
            ["class" => "protect flex-center-all", "style" => "background: white;", "href" => Runtime::link("account/activate"), "child"=>[
                "div" => [
                    ["class" => "card-icon flex-center-all", "child" => ["img" => [
                        "alt" => "Activate your account", "width" => "85px", "height" => "85px",
                        "src" => Storage::getMediaPath("images/users/checked-user-male.png", "remote")
                    ]]],
                    ["class" => "card-title flex-center-all", "text" => "Activate account"]
                ]
            ]],
            ["class" => "protect flex-center-all", "style" => "background: white;", "href" => Runtime::link("account/recovery"), "child"=>[
                "div" => [
                    ["class" => "card-icon flex-center-all", "child" => ["img" => [
                        "alt" => "Recover your account", "width" => "85px", "height" => "85px",
                        "src" => Storage::getMediaPath("images/users/undelete.png", "remote")
                    ]]],
                    ["class" => "card-title flex-center-all", "text" => "Forget Account"]
                ]
            ]],
        ]]
);
/*end of html anchor elements*/

/*create html anchor elements*/
/*$card1 = Ui::element($cardParent, "a", ["style" => $commonStyleStringForCards, "href" => Runtime::link("account/login")]);
Ui::element($card1, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:80px;border-radius: 10px;",
    "src" => Media::getMediaPath("images/users/login-rounded-right.png", "remote")]);
Ui::element($card1, "text", ["style" => Ui::htmlHrefStyle, "text" => "Log in"]);*/

/*$card2 = Ui::element($cardParent, "a", ["style" => $commonStyleStringForCards, "href" => Runtime::link("account/create")]);
Ui::element($card2, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:80px;border-radius: 10px;",
    "src" => Media::getMediaPath("images/users/edit-user-male.png", "remote")]);
Ui::element($card2, "text", ["style" => Ui::htmlHrefStyle, "text" => "Create New Account"]);*/

/*$card3 = Ui::element($cardParent, "a", ["style" => $commonStyleStringForCards, "href" => Runtime::link("account/activate")]);
Ui::element($card3, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:80px;border-radius: 10px;",
    "src" => Media::getMediaPath("images/users/checked-user-male.png", "remote")]);
Ui::element($card3, "text", ["style" => Ui::htmlHrefStyle, "text" => "Activate Account"]);*/

/*$card4 = Ui::element($cardParent, "a", ["style" => $commonStyleStringForCards, "href" => Runtime::link("account/recovery")]);
Ui::element($card4, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:80px;border-radius: 10px;",
    "src" => Media::getMediaPath("images/users/undelete.png", "remote")]);
Ui::element($card4, "text", ["style" => Ui::htmlHrefStyle, "text" => "Forget Account"]);*/
/*end of index page*/