<?php

use Mishusoft\Storage;
use Mishusoft\Ui\Localization;
use Mishusoft\Ui;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Inflect;

$translation = new Localization(ArrayCollection::value($this->request, "locale"));
if (is_array(json_decode(Storage\FileSystem::read(Storage::dataDriveStoragesPath() . "company-about.json"), true, 512, JSON_THROW_ON_ERROR))) {
    $aboutInfo = json_decode(Storage\FileSystem::read(Storage::dataDriveStoragesPath() . "company-about.json"), true, 512, JSON_THROW_ON_ERROR);
} else {
    $aboutInfo = [];
}


/*set text for title*/
Ui::updateDocumentTitle(" || " . Inflect::ucwords("About"));
//Ui::text($this->documentTitleElement, " || " . _String::ucwords("About"));

Ui::setAttributeValue($this->documentTemplateBodyElement, "class", ["width-1024px", "flex-center-left"]);

/*if (Ui::hasAttribute($this->documentTemplateBodyElement, "class")
    and !stripos(Ui::getAttribute($this->documentTemplateBodyElement, "class"), "width-1024px")
    || !stripos(Ui::getAttribute($this->documentTemplateBodyElement, "class"), "flex-center-left")) {
    Ui::assignAttributes($this->documentTemplateBodyElement, ["class" => Ui::getAttribute($this->documentTemplateBodyElement, "class") . " width-1024px flex-center-left"]);
}*/

$aboutPage = Ui::element($this->documentTemplateBodyElement, "ms-app-about", ["class" => "protect document-20px flex-column",]);

$titleOfAbout = Ui::element($aboutPage, "ms-app-about-title", ["class" => "document-title-auto-inherit flex-row"]);


//Ui::element($titleOfAbout, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;" . Ui::css["box-shadow"], "src" => FRAMEWORK_FAVICON_FILE]);
/*Ui::elementList(Ui::element($titleOfAbout, "span", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "margin-left: 20px;",]), ["span" => [
    ["style" => Ui::htmlHrefStyle . "font-size: 40px;font-weight: bold;", "text" => $translation->translate(Memory::Data()->company->name)],
    ["style" => Ui::htmlHrefStyle . "font-size: 18px;font-weight: normal;", "text" => $translation->translate("Basic Information")],
]]);*/
Ui::elementList(Ui::element($titleOfAbout, "span", ["class" => "flex-center-all" ]), ["span" => [
    ["class" => "font-40-bold", "text" => "Who We Are"],
    ["class" => "font-40-bold", "text" => "|"],
    ["class" => "font-18-normal", "text" => $translation->translate("Basic Information")],
]]);


$contentOfAbout = Ui::element($aboutPage, "ms-app-about-content", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";margin-top: 20px;text-align: left;font-size: 16px;height: auto;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-column"],
]);

foreach ($aboutInfo as $inf) {
    $root = Ui::element($contentOfAbout, "item", [
        "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;margin-bottom:10px;padding: 20px;border-radius:10px;text-align: left;height: auto;width: auto;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"],
    ]);
    Ui::element($root, "span", ["style" => Ui::htmlHrefStyle . "font-size: 20px;font-weight: bold;margin-bottom:5px;", "text" => $translation->translate(_Array::value($inf, "title"))]);

    foreach (_Array::value($inf, "content") as $content) {
        Ui::element($root, "span", ["style" => Ui::htmlHrefStyle . "font-size: 15px;font-weight: normal;line-height: 1.6;margin-top: 5px;text-align: justify;", "text" => $translation->translate($content)]);
    }
}
