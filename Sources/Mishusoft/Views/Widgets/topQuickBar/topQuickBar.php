<?php

use Mishusoft\Framework\Chipsets\Media;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Ui;

/*
 * root element of quick bar
 * */

$root = Ui::element($this->documentBodyElement, 'header', ['class' => 'header header-quick-tool-bar']);
$left = Ui::element($root, 'left');

/*email address*/
Ui::elementList(Ui::element($left, 'div'), ["img" => [
    ["src" => Media::getMediaPath("images/mail-contact.png", "remote"),"height"=>"15px","width"=>"15px", "alt" => Memory::Data()->company->mail],
], "a" => [
    ["class" => "protect", "href" => "mailto:" . Memory::Data()->company->mail, "target" => "_blank", "text" => Memory::Data()->company->mail],
]]);

/*cell phone*/
Ui::elementList(Ui::element($left, 'div'), ["img" => [
    ["src" => Media::getMediaPath("images/ringing-phone.png", "remote"),"height"=>"15px","width"=>"15px", "alt" => Memory::Data()->company->care],
], "a" => [
    ["class" => "protect", "href" => "tel:" . Memory::Data()->company->care, "target" => "_blank", "text" => Memory::Data()->company->care],
]]);

/*map marker*/
Ui::elementList(Ui::element($left, 'div'), ["img" => [
    ["src" => Media::getMediaPath("images/map-marker.png", "remote"),"height"=>"15px","width"=>"15px", "alt" => Memory::Data()->company->address],
], "a" => [
    ["class" => "protect", "href" => Memory::Data()->company->map, "target" => "_blank", "rel" => "noreferrer", "text" => Memory::Data()->company->address],
]]);

$socialMediaBar = Ui::element(Ui::element($root, 'right'), 'div');

//$StyleForSocialMediaLink = Ui::htmlHrefStyle . "color:" . Ui::color["white"] . ";margin-left:5px;margin-right:5px;box-shadow: 0 3px 4px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);border-radius: 50%;";
//$StyleForSocialMediaIcon = "height: inherit;width:15px;";

/*facebook*/
Ui::element(
    Ui::element($socialMediaBar, "a", ["class" => "protect box-shadow1", "href" => "https://www.facebook.com/alamin.ahamed.abir", "target" => "_blank", "rel" => "noreferrer"]),
    "img", ["src" => Media::getMediaPath("images/facebook-new.png", "remote"),"height"=>"20px","width"=>"20px", "alt" => "facebook"]
);
/*github*/
Ui::element(
    Ui::element($socialMediaBar, "a", ["class" => "protect box-shadow1", "href" => "https://github.com/mrabirahamed", "target" => "_blank", "rel" => "noreferrer"]),
    "img", ["src" => Media::getMediaPath("images/github.png", "remote"),"height"=>"20px","width"=>"20px", "alt" => "github"]
);

/*instagram*/
Ui::element(
    Ui::element($socialMediaBar, "a", ["class" => "protect box-shadow1", "href" => "https://www.instagram.com/mrabir.ahmed", "target" => "_blank", "rel" => "noreferrer"]),
    "img", ["src" => Media::getMediaPath("images/instagram-new.png", "remote"),"height"=>"20px","width"=>"20px", "alt" => "instagram"]
);
/*linkedin*/
Ui::element(
    Ui::element($socialMediaBar, "a", ["class" => "protect box-shadow1", "href" => "https://www.linkedin.com/in/mrabirahamed/", "target" => "_blank", "rel" => "noreferrer"]),
    "img", ["src" => Media::getMediaPath("images/linkedin.png", "remote"),"height"=>"20px","width"=>"20px", "alt" => "linkedin"]
);
/*pinterest*/
Ui::element(
    Ui::element($socialMediaBar, "a", ["class" => "protect box-shadow1", "href" => "https://www.pinterest.com/mrabirahamed", "target" => "_blank", "rel" => "noreferrer"]),
    "img", ["src" => Media::getMediaPath("images/pinterest.png", "remote"),"height"=>"20px","width"=>"20px", "alt" => "pinterest"]
);
/*reddit*/
Ui::element(
    Ui::element($socialMediaBar, "a", ["class" => "protect box-shadow1", "href" => "https://www.reddit.com/user/mrabirahamed", "target" => "_blank", "rel" => "noreferrer"]),
    "img", ["src" => Media::getMediaPath("images/reddit.png", "remote"),"height"=>"20px","width"=>"20px", "alt" => "reddit"]
);
/*tiktok*/
Ui::element(
    Ui::element($socialMediaBar, "a", ["class" => "protect box-shadow1", "href" => "https://www.tiktok.com/@user7594632514421?lang=en", "target" => "_blank", "rel" => "noreferrer"]),
    "img", ["src" => Media::getMediaPath("images/tiktok.png", "remote"),"height"=>"20px","width"=>"20px", "alt" => "tiktok"]
);
/*twitter*/
Ui::element(
    Ui::element($socialMediaBar, "a", ["class" => "protect box-shadow1", "href" => "https://twitter.com/mrabir_ahamed", "target" => "_blank", "rel" => "noreferrer"]),
    "img", ["src" => Media::getMediaPath("images/twitter.png", "remote"),"height"=>"20px","width"=>"20px", "alt" => "twitter"]
);

/*Ui::elementList(Ui::element($right, 'right-social-network', ['style' => 'height: inherit;background:inherit;color: inherit;display: flex;flex-direction:row;']), ["img" => [
    ["style" => "height: inherit;width:15px;margin-left:10px;margin-right:10px;", "src" => Media::getAssetsPath("images_ringing-phone.png", "remote"), "alt" => Memory::Data()->company->care],
    ["style" => "height: inherit;width:15px;margin-left:10px;margin-right:10px;", "src" => Media::getAssetsPath("images_ringing-phone.png", "remote"), "alt" => Memory::Data()->company->care],
    ["style" => "height: inherit;width:15px;margin-left:10px;margin-right:10px;", "src" => Media::getAssetsPath("images_ringing-phone.png", "remote"), "alt" => Memory::Data()->company->care],
    ["style" => "height: inherit;width:15px;margin-left:10px;margin-right:10px;", "src" => Media::getAssetsPath("images_ringing-phone.png", "remote"), "alt" => Memory::Data()->company->care],
    ["style" => "height: inherit;width:15px;margin-left:10px;margin-right:10px;", "src" => Media::getAssetsPath("images_ringing-phone.png", "remote"), "alt" => Memory::Data()->company->care],
    ["style" => "height: inherit;width:15px;margin-left:10px;margin-right:10px;", "src" => Media::getAssetsPath("images_ringing-phone.png", "remote"), "alt" => Memory::Data()->company->care],
]]);*/