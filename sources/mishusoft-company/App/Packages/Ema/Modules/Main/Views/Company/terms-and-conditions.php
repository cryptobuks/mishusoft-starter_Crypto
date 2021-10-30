<?php

use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Stream;

$translation = new Localization(_Array::value($this->request, "locale"));
$aboutInfo = Stream::read(RUNTIME_REGISTRIES_PATH . "company-about.json");


/*set text for title*/
Ui::updateDocumentTitle(" || " . _String::ucwords("About"));
Ui::assignAttributes($this->documentTemplateBodyElement, ["style" => "height: inherit;align-items: center;justify-content: left;width: 1024px;height:auto;"]);

$aboutPage = Ui::element($this->documentTemplateBodyElement, "ms-app-about", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";/*background: white;*/padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height: inherit;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-column"],
]);

$titleOfAbout = Ui::element($aboutPage, "ms-app-about-title", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";margin-top: 20px;text-align: left;font-size: 16px;height: auto;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-row"],
]);


Ui::element($titleOfAbout, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;" . Ui::css["box-shadow"], "src" => FRAMEWORK_FAVICON_FILE]);
Ui::elementList(Ui::element($titleOfAbout, "span", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "margin-left: 20px;",]), ["span" => [
    ["style" => Ui::htmlHrefStyle . "font-size: 40px;font-weight: 500;", "text" => $translation->translate("Mishusoft Mishusoft Incorporated")],
    ["style" => Ui::htmlHrefStyle . "font-size: 18px;font-weight: 400;", "text" => $translation->translate("Terms and Conditions")],
]]);


$contentOfAbout = Ui::element($aboutPage, "ms-app-about-content", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";margin-top: 20px;text-align: left;font-size: 16px;height: auto;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-column"],
]);

foreach ($aboutInfo as $inf) {
    $root = Ui::element($contentOfAbout, "item", [
        "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;margin-bottom:10px;padding: 20px;border-radius:10px;text-align: left;height: auto;width: inherit;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"],
    ]);
    Ui::element($root, "span", ["style" => "text-decoration: none;border-style: none;user-select: none;-webkit-user-select: none;-ms-user-select: none;outline-style: none;font-size: 18px;font-weight: 400;", "text" => $translation->translate(_Array::value($inf, "title"))]);

    foreach (_Array::value($inf, "content") as $content) {
        Ui::element($root, "span", ["style" => Ui::htmlHrefStyle . "font-size: 15px;font-weight: 380;line-height: 1.6;margin-top: 5px;text-align: justify;", "text" => $translation->translate($content)]);
    }
}
