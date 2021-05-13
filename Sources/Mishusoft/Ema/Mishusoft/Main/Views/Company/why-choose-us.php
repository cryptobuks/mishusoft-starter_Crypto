<?php

use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Stream;


$translation = new Localization(_Array::value($this->request, "locale"));
$infoOfWhyWeAre = Stream::read(PHP_RUNTIME_REGISTRIES_PATH . "company-why.json");


/*set text for title*/
Ui::updateDocumentTitle(" || " . _String::ucwords("Why are we for you?"));
Ui::assignAttributes($this->documentTemplateBodyElement, ["style" => "height: inherit;align-items: center;justify-content: left;width: 1024px;height:auto;"]);

$whyPage = Ui::element($this->documentTemplateBodyElement, "ms-app-why", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";/*background: white;*/padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height: inherit;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-column"],
]);

$titleOfWhy = Ui::element($whyPage, "ms-app-why-title", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";margin-top: 20px;text-align: left;font-size: 16px;height: auto;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-row"],
]);


Ui::element($titleOfWhy, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;" . Ui::css["box-shadow"], "src" => FRAMEWORK_FAVICON_FILE]);
Ui::elementList(Ui::element($titleOfWhy, "span", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "margin-left: 20px;",]), ["span" => [
    ["style" => Ui::htmlHrefStyle . "font-size: 40px;font-weight: 500;", "text" => $translation->translate(Memory::Data()->company->name)],
    ["style" => Ui::htmlHrefStyle . "font-size: 18px;font-weight: 400;", "text" => $translation->translate("why choose us?")],
]]);


$contentOfWhy = Ui::element($whyPage, "ms-app-why-content", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";margin-top: 20px;text-align: left;font-size: 16px;height: auto;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-column"],
]);

foreach ($infoOfWhyWeAre as $inf) {
    $root = Ui::element($contentOfWhy, "item", [
        "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;margin-bottom:10px;padding: 20px;border-radius:10px;text-align: left;height: auto;width: inherit;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"],
    ]);
    Ui::element($root, "span", ["style" => "text-decoration: none;border-style: none;user-select: none;-webkit-user-select: none;-ms-user-select: none;outline-style: none;font-size: 18px;font-weight: bold;", "text" => $translation->translate(_Array::value($inf, "title"))]);

    if (count(_Array::value($inf, "content")) > 0) {
        foreach (_Array::value($inf, "content") as $content) {
            Ui::element($root, "span", ["style" => Ui::htmlHrefStyle . "font-size: 15px;font-weight: normal;line-height: 1.6;margin-top: 5px;text-align: justify;", "text" => $translation->translate($content)]);
        }
    }
}