<?php

use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Stream;


$translation = new Localization(_Array::value($this->request, "locale"));
$info = Stream::read(RUNTIME_REGISTRIES_PATH . "company-clients-list.json");


/*set text for title*/
Ui::updateDocumentTitle(" || " . _String::ucwords("Clients"));
Ui::assignAttributes($this->documentTemplateBodyElement, ["style" => "height: inherit;align-items: center;justify-content: left;width: 1024px;height:auto;"]);

$page = Ui::element($this->documentTemplateBodyElement, "ms-app-client", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";/*background: white;*/padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height: inherit;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-column"],
]);

$title = Ui::element($page, "ms-app-client-title", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["white"] . ";margin-top: 20px;text-align: left;font-size: 16px;height: auto;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-row"],
]);


Ui::element($title, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;" . Ui::css["box-shadow"], "src" => FRAMEWORK_FAVICON_FILE]);
Ui::elementList(Ui::element($title, "span", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "margin-left: 20px;",]), ["span" => [
    ["style" => Ui::htmlHrefStyle . "font-size: 40px;font-weight: 500;", "text" => $translation->translate("Mishusoft Mishusoft Incorporated")],
    ["style" => Ui::htmlHrefStyle . "font-size: 18px;font-weight: 400;", "text" => $translation->translate("List of clients")],
]]);


$content = Ui::element($page, "ms-app-client-content", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";margin-top: 20px;text-align: left;font-size: 16px;height: auto;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-column"],
]);

foreach ($info as $inf) {

    $root = Ui::element($content, "item", [
        "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;margin-bottom:10px;padding: 20px;border-radius:10px;text-align: left;height: auto;width: inherit;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"],
    ]);
    Ui::element($root, "span", ["style" => "text-decoration: none;border-style: none;user-select: none;-webkit-user-select: none;-ms-user-select: none;outline-style: none;font-size: 18px;font-weight: 400;", "text" => $translation->translate(_Array::value($inf, "name"))]);
}