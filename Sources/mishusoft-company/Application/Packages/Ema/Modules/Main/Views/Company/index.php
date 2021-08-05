<?php

use Mishusoft\Storage;
use Mishusoft\Ui\Localization;
use Mishusoft\Ui;
use Mishusoft\Libraries\Runtime;
use Mishusoft\Utility\ArrayCollection;

$translation = new Localization(ArrayCollection::value($this->request, "locale"));
/*set text for title*/
Ui::updateDocumentTitle(" || " . $translation->translate("Let learn about us."));

/*set separate paragraph for index page*/
Ui::elementList(
    $this->documentTemplateBodyElement,
    [
    "ms-app-paragraph" => [
        ["class" => "document-title", "text" => $translation->translate("Learn about the following topics.")],/*set welcome text*/
    ],
    ]
);

(function (DOMNode|DOMElement $storeObject) {
    $dirList = Storage\FileSystem::list($this->templateRenderDirectory . ucfirst($this->request["controller"]), "file");

    foreach ($dirList as $index => $dir) {
        if ($dir === "index.php") {
            unset($dirList[$index]);
        } else {
            $dirList[$index] = pathinfo($dir, PATHINFO_FILENAME);
        }
    }

    array_multisort($dirList, SORT_ASC);
    ksort($dirList, SORT_ASC);

    /*add company related cards*/
    $cardParent = Ui::element($storeObject, "card", ["class" => "card",]);

    foreach ($dirList as $item) {
        /*create html anchor elements*/
        $card1 = Ui::element($cardParent, "a", ["class" => "protect flex-center-all", "href" => Runtime::link("company/$item")]);
        //Ui::element($card1, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:60px;border-radius: 10px;", "src" => Media::getAssetsPath("images_img-avatar3.png", "remote")]);
        Ui::element(Ui::element($card1, "div", ["class" => "card-icon flex-center-all"]), "img", ["width" => "60px", "height" => "60px", "loading" => "lazy", "src" => Storage::mediaFullPath("images/icons/companies/" . pathinfo($item, PATHINFO_FILENAME) . ".png", "remote"), "alt" => ucfirst(str_replace("-", " ", pathinfo($item, PATHINFO_FILENAME)))]);
        Ui::element($card1, "div", ["class" => "card-title flex-center-all", "text" => ucfirst(str_replace("-", " ", pathinfo($item, PATHINFO_FILENAME)))]);
        /*end of html anchor elements*/
    }
})($this->documentTemplateBodyElement);
