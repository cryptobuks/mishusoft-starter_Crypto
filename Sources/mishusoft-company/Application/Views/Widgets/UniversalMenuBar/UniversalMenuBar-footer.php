<?php

use Mishusoft\Storage;
use Mishusoft\Ui\Localization;
use Mishusoft\Ui\Memory;
use Mishusoft\Ui\Time;
use Mishusoft\Ui;
use Mishusoft\Libraries\Runtime;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Character;

$translation = new Localization(ArrayCollection::value($this->request, "locale"));

$footer = Ui::element($this->documentBodyElement, 'footer', [
    /*'style' => 'display: flex;flex-direction: column;width: 100%;align-items: center;justify-content: center;padding-top: 10px;font-size: 14px;',*/
    "class"=>"footer background-image width-100percent",
    /*"style"=>"width:100%;background-image: linear-gradient(to bottom left, rgba(225, 225, 225, 0.03) 0%, rgba(225, 225, 225, 0.03) 49.9%, rgba(225, 225, 225, 0) 50%, rgba(225, 225, 225, 0) 100%),linear-gradient(to top left, rgba(225, 225, 225, 0.03) 0%, rgba(225, 225, 225, 0.03) 49.9%, rgba(225, 225, 225, 0) 50%, rgba(225, 225, 225, 0) 100%),linear-gradient( 10deg, #00302f, #5498df);background-position: top right,bottom right;background-repeat: no-repeat;background-size: 80% 70%,80% 75%,100% auto;color: #f7f7f7;padding-top: 0;",*/
]);

$authenticate = ["account","user", "developer", "consumer", "staff"];

if (!in_array(Character::lower($this->request["controller"]), $authenticate)) {
    $footer0 = Ui::element($footer, 'div', [
        'class'=>'company-banner',
        /*'style' => 'color: white;width: 100%;display: flex;flex-direction: row;padding-top: 5px;padding-left: 20px;padding-bottom: 10px;border-bottom-width: 1px;border-bottom-style: solid;border-bottom-color: rgb(84, 152, 223);'*/
    ]);

    $left = Ui::element($footer0, 'div', [
        'class'=>'mishusoft-company-brief',
        /*'style' => 'background: inherit;color: inherit;width: 45%;display: flex;flex-direction: column;justify-content: flex-start;'*/
    ]);

    Ui::element($left, 'a', ['class'=>'protect mishusoft-root-link mishusoft-root-link-secondary',/*'style' => Ui::htmlHrefStyle . 'color: inherit;font-family: Saira Stencil One, SolaimanLipi, Arial,serif;font-size: 25px;font-weight: bold;text-transform: uppercase;display: flex;justify-content: left;',*/
        'href' => Runtime::link("default_home"),'text' => $translation->translate(Memory::Data()->company->name), ]);
    Ui::element($left, 'div', [
        'class'=>'mishusoft-company-brief-message',/*'style' => Ui::htmlHrefStyle . 'color: inherit;margin-top: 10px;text-align: justify;font-family: Noto Sans, SolaimanLipi, Arial,serif;font-size: 12px;font-weight: normal;display: flex;justify-content: left;',*/
        'text' => $translation->translate(Memory::Data()->company->detailsDescription), ]);

    Ui::element($footer0, 'div', [
        'class'=>'blank-space',
        /*'style' => 'background: inherit;line-height: 1.5;color: inherit;width: 20%;padding-left: 20px;display: flex;flex-direction: column;justify-content: center;'*/
    ]);




    /*contact panel*/
    $right = Ui::element($footer0, 'div', [
        'class'=>'protect get-in-touch',
        /*'style' => 'background: inherit;line-height: 1.5;color: inherit;width: 35%;padding-left: 20px;display: flex;flex-direction: column;'*/
    ]);

    Ui::element($right, 'a', ['class'=>'protect',/*'style' => Ui::htmlHrefStyle . 'color: inherit;font-family: Noto Sans, SolaimanLipi, Arial,serif;font-size: 18px;font-weight: bold;display: flex;justify-content: left;margin-bottom: 10px;',*/
        'href' => Runtime::link("company/contact-us"),'text' => $translation->translate("Get in touch"), ]);

    $parent = Ui::element($right, 'div', ['class'=>'quick-link-area',/*'style' => 'font-size:12px;'*/]);
    /*map marker*/
    Ui::elementList(Ui::element($parent, 'div', ['class'=>'quick-link',/*'style' => 'height: 20px;background:inherit;color: inherit;display: flex;flex-direction:row;'*/]), ["img" => [
        [/*"style" => "height: 15px;width: 15px;margin-left:10px;margin-right:10px;margin-top: 4px;",*/ "src" => Storage::mediaFullPath("images/icons/companies/map-marker.png", "remote"),"height"=>"15px","width"=>"15px", "alt" => Memory::Data()->company->address],
    ], "a" => [
        ['class'=>'protect',/*"style" => Ui::htmlHrefStyle . "color:" . Ui::color["white"],*/ "href" => Memory::Data()->company->map, "target" => "_blank", "rel" => "noreferrer", "text" => Memory::Data()->company->address],
    ]]);

    /*cell phone*/
    Ui::elementList(Ui::element($parent, 'div', ['class'=>'quick-link',/*'style' => 'height: 20px;background:inherit;color: inherit;display: flex;flex-direction:row;'*/]), ["img" => [
        ["style" => "height: 15px;width: 15px;margin-left:10px;margin-right:10px;margin-top: 4px;", "src" => Storage::mediaFullPath("images/icons/companies/ringing-phone.png", "remote"),"height"=>"15px","width"=>"15px", "alt" => Memory::Data()->company->care],
    ], "a" => [
        ["style" => Ui::HTML_HREF_STYLE . "color:" . Ui::COLOR["white"], "href" => "tel:" . Memory::Data()->company->care, "target" => "_blank", "text" => Memory::Data()->company->care],
    ]]);

    /*email address*/
    Ui::elementList(Ui::element($parent, 'div', ['class'=>'quick-link'/*,'style' => 'height: 20px;background:inherit;color: inherit;display: flex;flex-direction:row;'*/]), ["img" => [
        ["style" => "height: 15px;width: 15px;margin-left:10px;margin-right:10px;margin-top: 4px;", "src" => Storage::mediaFullPath("images/icons/companies/mail-contact.png", "remote"),"height"=>"15px","width"=>"15px", "alt" => Memory::Data()->company->mail],
    ], "a" => [
        ["style" => Ui::HTML_HREF_STYLE . "color:" . Ui::COLOR["white"], "href" => "mailto:" . Memory::Data()->company->mail, "target" => "_blank", "text" => Memory::Data()->company->mail],
    ]]);

    /*support address*/
//    Ui::elementList(Ui::element($parent, 'div', ['class'=>'quick-link'/*,'style' => 'height: 20px;background:inherit;color: inherit;display: flex;flex-direction:row;'*/]), ["img" => [
//        ["style" => "height: 15px;width: 15px;margin-left:10px;margin-right:10px;margin-top: 4px;", "src" => Media::getMediaPath("images/domain.png", "remote"),"height"=>"15px","width"=>"15px", "alt" => Memory::Data()->company->mail],
//    ], "a" => [
//        ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["white"], "href" => Memory::Data()->company->support, "target" => "_blank", "text" => Memory::Data()->company->support, "rel" => "noreferrer"],
//    ]]);



    Ui::element($right, 'span', ['style' => Ui::HTML_HREF_STYLE . 'color: inherit;font-family: Noto Sans, SolaimanLipi, Arial,serif;font-size: 18px;font-weight: bold;display: flex;justify-content: left;margin-top: 10px;margin-bottom: 10px;', 'text' => $translation->translate("Follow us")]);

    $socialMediaBar = Ui::element($right, 'right-social-network', ['style' => 'height: 20px;background:inherit;color: inherit;display: flex;flex-direction:row;']);

    $StyleForSocialMediaLink = Ui::HTML_HREF_STYLE . "color:" . Ui::COLOR["white"].";margin-left:5px;margin-right:5px;/*box-shadow: 0 3px 4px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);*/border-radius: 50%;";
    $StyleForSocialMediaIcon = "height: 20px;width:20px;";


    /*facebook*/
    Ui::element(
        Ui::element($socialMediaBar, "a", ["style" => $StyleForSocialMediaLink, "href" => "https://www.facebook.com/alamin.ahamed.abir", "target" => "_blank", "rel" => "noreferrer"]),
        "img",
        ["style" => $StyleForSocialMediaIcon,"height"=>"20px","width"=>"20px", "src" => Storage::mediaFullPath("images/icons/social-media/facebook-new.png", "remote"), "alt" => "facebook"]
    );
    /*github*/
    Ui::element(
        Ui::element($socialMediaBar, "a", ["style" => $StyleForSocialMediaLink, "href" => "https://github.com/mrabirahamed", "target" => "_blank", "rel" => "noreferrer"]),
        "img",
        ["style" => $StyleForSocialMediaIcon,"height"=>"20px","width"=>"20px", "src" => Storage::mediaFullPath("images/icons/social-media/github.png", "remote"), "alt" => "github"]
    );

    /*instagram*/
    Ui::element(
        Ui::element($socialMediaBar, "a", ["style" => $StyleForSocialMediaLink, "href" => "https://www.instagram.com/mrabir.ahmed", "target" => "_blank", "rel" => "noreferrer"]),
        "img",
        ["style" => $StyleForSocialMediaIcon,"height"=>"20px","width"=>"20px", "src" => Storage::mediaFullPath("images/icons/social-media/instagram-new.png", "remote"), "alt" => "instagram"]
    );
    /*linkedin*/
    Ui::element(
        Ui::element($socialMediaBar, "a", ["style" => $StyleForSocialMediaLink, "href" => "https://www.linkedin.com/in/mrabirahamed/", "target" => "_blank", "rel" => "noreferrer"]),
        "img",
        ["style" => $StyleForSocialMediaIcon,"height"=>"20px","width"=>"20px", "src" => Storage::mediaFullPath("images/icons/social-media/linkedin.png", "remote"), "alt" => "linkedin"]
    );
    /*pinterest*/
    Ui::element(
        Ui::element($socialMediaBar, "a", ["style" => $StyleForSocialMediaLink, "href" => "https://www.pinterest.com/mrabirahamed", "target" => "_blank", "rel" => "noreferrer"]),
        "img",
        ["style" => $StyleForSocialMediaIcon,"height"=>"20px","width"=>"20px", "src" => Storage::mediaFullPath("images/icons/social-media/pinterest.png", "remote"), "alt" => "pinterest"]
    );
    /*reddit*/
    Ui::element(
        Ui::element($socialMediaBar, "a", ["style" => $StyleForSocialMediaLink, "href" => "https://www.reddit.com/user/mrabirahamed", "target" => "_blank", "rel" => "noreferrer"]),
        "img",
        ["style" => $StyleForSocialMediaIcon,"height"=>"20px","width"=>"20px", "src" => Storage::mediaFullPath("images/icons/social-media/reddit.png", "remote"), "alt" => "reddit"]
    );
    /*tiktok*/
    Ui::element(
        Ui::element($socialMediaBar, "a", ["style" => $StyleForSocialMediaLink, "href" => "https://www.tiktok.com/@user7594632514421?lang=en", "target" => "_blank", "rel" => "noreferrer"]),
        "img",
        ["style" => $StyleForSocialMediaIcon,"height"=>"20px","width"=>"20px", "src" => Storage::mediaFullPath("images/icons/social-media/tiktok.png", "remote"), "alt" => "tiktok"]
    );
    /*twitter*/
    Ui::element(
        Ui::element($socialMediaBar, "a", ["style" => $StyleForSocialMediaLink, "href" => "https://twitter.com/mrabir_ahamed", "target" => "_blank", "rel" => "noreferrer"]),
        "img",
        ["style" => $StyleForSocialMediaIcon,"height"=>"20px","width"=>"20px", "src" => Storage::mediaFullPath("images/icons/social-media/twitter.png", "remote"), "alt" => "twitter"]
    );
}



$footer1 = Ui::element($footer, 'div', [
    'class'=>'copy-right',
    /*'style' => 'display: flex;flex-direction: column;width: 100%;align-items: center;justify-content: center;padding-top: 10px;font-size: 14px;',*/
    /*'style' => 'color: white;width: 100%;padding-top: 5px;margin-top: 5px;display: flex;flex-direction: column;align-items: center;justify-content: center;'*/
]);

Ui::elementList(Ui::element($footer1, "div", [/*"style" => "display: flex;align-items: center;justify-content: center;",*/ "class" => "col-lg-plus-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-plus-12"]), [
        /*"Copyright © " . Time::getCurrentYearNumber().Framework::COMPANY_NAME.". All Right Reserved."*/
        "copyright" => [
            ['text' => "Copyright © " . /*Memory::Data()->company->est . " - ".*/  Time::currentYearNumber()/* text for system default signature*/],
        ],"a" => [
            ["href" => Runtime::link("default_home"), "target" => "_blank", "class" => "link text-safe", "style" => "padding:0;color: white;", "text" =>  " " .$translation->translate(Memory::Data()->company->name)],
        ],"span" => [
            ['text' => ". ".$translation->translate("All Right Reserved.") /* text for system default signature*/],
        ],
    ]);



Ui::elementList(Ui::element($footer1, "div", ["style" => "display: flex;align-items: center;justify-content: center;margin-top: 0px;", "class" => "col-lg-plus-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-plus-12"]), [
        "a" => [
            ["href" => Runtime::link("company/terms-and-conditions"), "target" => "_blank", "class" => "link text-safe", "style" => "color: white;", 'text' => $translation->translate("Terms & Condition")],
            ["href" => Runtime::link("company/privacy-policy"), "target" => "_blank", "class" => "link text-safe", "style" => "color: white;", 'text' => $translation->translate("Privacy Policy")],],
    ]);
