<?php

use Mishusoft\Storage;
use Mishusoft\System\Localization;
use Mishusoft\Ui;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Inflect;

$translation = new Localization(ArrayCollection::value($this->request, "locale"));
$info = Storage\FileSystem::read(Storage::dataDriveStoragesPath() . "company-clients-list.json");


/*set text for title*/
Ui::updateDocumentTitle(" || " . Inflect::ucwords("Clients"));
Ui::assignAttributes($this->documentTemplateBodyElement, ["style" => "height: inherit;align-items: center;justify-content: left;width: 1024px;height:auto;"]);

$page = Ui::element($this->documentTemplateBodyElement, "ms-app-client", [
    "style" => Ui::HTML_HREF_STYLE . "color:" . Ui::COLOR["black"] . ";/*background: white;*/padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height: inherit;width: inherit;" . Ui::CSS["display-flex"] . Ui::CSS["flex-column"],
]);

$title = Ui::element($page, "ms-app-client-title", [
    "style" => Ui::HTML_HREF_STYLE . "color:" . Ui::COLOR["white"] . ";margin-top: 20px;text-align: left;font-size: 16px;height: auto;width: inherit;" . Ui::CSS["display-flex"] . Ui::CSS["flex-row"],
]);


Ui::element($title, "img", ["style" => Ui::HTML_HREF_STYLE . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;" . Ui::CSS["box-shadow"], "src" => FRAMEWORK_FAVICON_FILE]);
Ui::elementList(Ui::element($title, "span", ["style" => Ui::HTML_HREF_STYLE . Ui::CSS["display-flex"] . Ui::CSS["flex-column"] . "margin-left: 20px;",]), ["span" => [
    ["style" => Ui::HTML_HREF_STYLE . "font-size: 40px;font-weight: 500;", "text" => $translation->translate("Mishusoft Mishusoft Incorporated")],
    ["style" => Ui::HTML_HREF_STYLE . "font-size: 18px;font-weight: 400;", "text" => $translation->translate("List of clients")],
]]);


$content = Ui::element($page, "ms-app-client-content", [
    "style" => Ui::HTML_HREF_STYLE . "color:" . Ui::COLOR["black"] . ";margin-top: 20px;text-align: left;font-size: 16px;height: auto;width: inherit;" . Ui::CSS["display-flex"] . Ui::CSS["flex-column"],
]);

foreach ($info as $inf) {
    $root = Ui::element($content, "item", [
        "style" => Ui::HTML_HREF_STYLE . "color:" . Ui::COLOR["black"] . ";background: white;margin-bottom:10px;padding: 20px;border-radius:10px;text-align: left;height: auto;width: inherit;" . Ui::CSS["box-shadow"] . Ui::CSS["display-flex"] . Ui::CSS["flex-column"],
    ]);
    Ui::element($root, "span", ["style" => "text-decoration: none;border-style: none;user-select: none;-webkit-user-select: none;-ms-user-select: none;outline-style: none;font-size: 18px;font-weight: 400;", "text" => $translation->translate(_Array::value($inf, "name"))]);
}
