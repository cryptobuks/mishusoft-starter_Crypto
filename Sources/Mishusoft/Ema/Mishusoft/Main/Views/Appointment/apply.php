<?php

use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\Stream;

$translation = new Localization(_Array::value($this->request, "locale"));
/*set text for title*/
Ui::text($this->documentTitleElement, " || " . $translation->translate("Apply to Mishusoft Carrier."));

//$storeObject = $this->documentTemplateBodyElement;

//Ui::assignAttributes($this->documentTemplateBodyElement,["style"=>"background-image: linear-gradient(to bottom left, rgba(225, 225, 225, 0.03) 0%, rgba(225, 225, 225, 0.03) 49.9%, rgba(225, 225, 225, 0) 50%, rgba(225, 225, 225, 0) 100%),linear-gradient(to top left, rgba(225, 225, 225, 0.03) 0%, rgba(225, 225, 225, 0.03) 49.9%, rgba(225, 225, 225, 0) 50%, rgba(225, 225, 225, 0) 100%),linear-gradient( 10deg , #00302f, #5498df);background-position: top right,bottom right;background-repeat: no-repeat;background-size: 80% 70%,80% 75%,100% auto;color: #f7f7f7;"]);

/*set separate paragraph for index page*/
Ui::elementList(
    $this->documentTemplateBodyElement, [
    "ms-app-paragraph" => [
        ["style" => "padding: 50px;text-align: center;font-size: 37px;font-weight: bold;", "text" => $translation->translate("Under development.")],/*set welcome text*/
    ],
]);

