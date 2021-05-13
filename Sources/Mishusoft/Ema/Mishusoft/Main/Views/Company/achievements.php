<?php

use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Stream;


$translation = new Localization(_Array::value($this->request, "locale"));
$information = Stream::read(PHP_RUNTIME_REGISTRIES_PATH . "company-achievements.json");


/*set text for title*/
Ui::updateDocumentTitle(" || " . _String::ucwords("Achievements"));
Ui::assignAttributes($this->documentTemplateBodyElement, ["style" => "height: inherit;align-items: center;justify-content: left;width: 1024px;height:auto;"]);

$aboutPage = Ui::element($this->documentTemplateBodyElement, "ms-app-achievements", [
    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height: inherit;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-column"],
]);

$titleOfAbout = Ui::element($aboutPage, "ms-app-achievements-title", [
    "style" => "color:" . Ui::color["white"] . ";margin-top: 20px;text-align: left;font-size: 16px;height: auto;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-row"],
]);


Ui::element($titleOfAbout, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;" . Ui::css["box-shadow"], "src" => FRAMEWORK_FAVICON_FILE]);
Ui::elementList(Ui::element($titleOfAbout, "span", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "margin-left: 20px;",]), ["span" => [
    ["style" => "font-size: 40px;font-weight: bolder;", "text" => $translation->translate("Mishusoft Mishusoft Incorporated")],
    ["style" => "font-size: 18px;font-weight: bold;", "text" => $translation->translate("Our achievements")],
]]);


$contentOfAbout = Ui::element($aboutPage, "ms-app-achievements-content", [
    "style" => "color:" . Ui::color["black"] . ";margin-top: 20px;text-align: left;font-size: 16px;height: auto;width: inherit;" . Ui::css["display-flex"] . Ui::css["flex-column"],
]);

foreach ($information as $inf) {
    $root = Ui::element($contentOfAbout, "item", [
        "style" => "color:" . Ui::color["black"] . ";background: white;margin-bottom:10px;border-radius:10px;text-align: left;height: auto;width: inherit;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"],
    ]);
    /*
     * add title of information
     * */

    Ui::element($root, "span", ["style" => "font-size: 18px;font-weight: bold;margin-top: 20px;margin-left: 20px;margin-right: 20px;margin-bottom: 10px;", "text" => $translation->translate(_Array::value($inf, "title"))]);

    /*
     * add content of information
     * */

    if (count(_Array::value($inf, "content")) > 0) {
        foreach (_Array::value($inf, "content") as $content) {
            Ui::element($root, "span", ["style" => "font-size: 15px;font-weight: normal;line-height: 1.6;margin-top: 5px;text-align: justify;margin-left: 20px;margin-right: 20px;", "text" => $translation->translate($content)]);
        }
    }

    /*
     * add horizontal line (separator)
     * */

    Ui::element($root, "span", ["style" => "font-size: 18px;font-weight: bold;margin-top: 10px;border-top-color: rgba(0,0,0,.12);border-top-style: solid;border-top-width: 2px;margin-bottom: 10px;"]);


    /*
     * add provider information
     * */

    Ui::element($root, "span", ["style" => "font-size: 18px;font-weight: bold;margin-bottom: 10px;margin-left: 20px;margin-right: 20px;", "text" => $translation->translate("Award Provider")]);
    if (count(_Array::value($inf, "provider")) > 0) {
        foreach (_Array::value($inf, "provider") as $keyword => $content) {
            Ui::elementList(Ui::element($root, "span", ["style" => "font-size: 15px;font-weight: normal;line-height: 1.6;margin-top: 5px;text-align: justify;margin-left: 20px;margin-right: 20px;"]), ["span" => [
                ["style" => "font-weight: bold;", "text" => $translation->translate($keyword) . ": "],
                ["style" => "font-weight: normal;", "text" => $translation->translate($content)],
            ]]);
        }
    }

    /*
     * add horizontal line (separator)
     * */

    Ui::element($root, "span", ["style" => "font-size: 18px;font-weight: bold;margin-top: 10px;border-top-color: rgba(0,0,0,.12);border-top-style: solid;border-top-width: 2px;margin-bottom: 10px;"]);


    /*
     * add brief of information
     * */

    Ui::element($root, "span", ["style" => "font-size: 18px;font-weight: bold;margin-left: 20px;margin-right: 20px;margin-bottom: 10px;", "text" => $translation->translate("Project Summery")]);

    if (count(_Array::value($inf, "brief")) > 0) {
        foreach (_Array::value($inf, "brief") as $keyword => $content) {
            //Ui::element($root, "span", ["style" => Ui::htmlHrefStyle . "font-size: 15px;font-weight: normal;line-height: 1.6;margin-top: 5px;text-align: justify;margin-left: 20px;margin-right: 20px;", "text" => $translation->translate($keyword) . ": " . $translation->translate($content)]);
            Ui::elementList(Ui::element($root, "span", ["style" => "font-size: 15px;font-weight: normal;line-height: 1.6;margin-top: 5px;text-align: justify;margin-left: 20px;margin-right: 20px;"]), ["span" => [
                ["style" => "font-weight: bold;", "text" => $translation->translate($keyword) . ": "],
                ["style" => "font-weight: normal;", "text" => $translation->translate($content)],
            ]]);
        }
    }


    /*
     * add horizontal line (separator)
     * */

    Ui::element($root, "span", ["style" => "font-size: 18px;font-weight: bold;margin-top: 10px;border-top-color: rgba(0,0,0,.12);border-top-style: solid;border-top-width: 2px;margin-bottom: 10px;"]);

    /*
     * add images of information
     * */
    Ui::element($root, "span", ["style" => "font-size: 18px;font-weight: bold;margin-left: 20px;margin-right: 20px;", "text" => $translation->translate("Screenshots")]);
    if (count(_Array::value($inf, "images")) > 0) {
        $imageGallery =Ui::element($root, "span", ["style" => "display:inline-block"]);
        foreach (_Array::value($inf, "images") as $keyword => $content) {
            //Ui::element($root, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:60px;border-radius: 10px;", "src" => Media::getMediaPath("images_".pathinfo($item, PATHINFO_FILENAME).".png", "remote")]);
            Ui::element($root, "span", ["style" => "font-size: 15px;font-weight: normal;line-height: 1.6;margin-top: 5px;text-align: justify;", "text" => $translation->translate($keyword) . ": " . $translation->translate($content)]);
        }
    } else {
        Ui::element($root, "span", ["style" => "font-size: 15px;font-weight: normal;line-height: 1.6;margin-top: 5px;text-align: justify;margin-left: 20px;margin-right: 20px;color: red;margin-bottom: 20px;", "text" => $translation->translate("No image are attached.")]);
    }
}