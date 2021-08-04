<?php

use Mishusoft\Ui\Localization;
use Mishusoft\Ui;
use Mishusoft\Utility\ArrayCollection;

$translation = new Localization(ArrayCollection::value($this->request, "locale"));
/*set text for title*/
Ui::updateDocumentTitle(" || " . $translation->translate("Welcome to You."));
//Ui::text($this->documentTitleElement, " || " . $translation->translate("Welcome to You."));

//$storeObject = $this->documentTemplateBodyElement;

//Ui::assignAttributes($this->documentTemplateBodyElement,["style"=>"background-image: linear-gradient(to bottom left, rgba(225, 225, 225, 0.03) 0%, rgba(225, 225, 225, 0.03) 49.9%, rgba(225, 225, 225, 0) 50%, rgba(225, 225, 225, 0) 100%),linear-gradient(to top left, rgba(225, 225, 225, 0.03) 0%, rgba(225, 225, 225, 0.03) 49.9%, rgba(225, 225, 225, 0) 50%, rgba(225, 225, 225, 0) 100%),linear-gradient( 10deg , #00302f, #5498df);background-position: top right,bottom right;background-repeat: no-repeat;background-size: 80% 70%,80% 75%,100% auto;color: #f7f7f7;"]);

/*Set separate paragraph for index page.*/
Ui::elementList(
    $this->documentTemplateBodyElement,
    [
    "article" => [
        ["style" => "padding: 20px;text-align: center;font-size: 37px;font-weight: bold;width: 1024px;border: 1px solid lightgray;display: flex;justify-content: center;align-items: center;margin-top: 10px;", "text" => $translation->translate("Trending product")],/*set welcome text*/
    ],
    "ms-app-paragraph" => [
        ["style" => "padding: 50px;text-align: center;font-size: 37px;font-weight: bold;", "text" => $translation->translate("Welcome to Mishusoft.")],/*set welcome text*/
    ],
]
);

///*
//
//
//$dirList = Stream::getList($this->template_render_dir . ucfirst($this->request["controller"]), "file");
//
//foreach ($dirList as $index => $dir) {
//    if ($dir === "index.php") {
//        unset($dirList[$index]);
//    }
//}
//
//array_multisort($dirList, SORT_ASC);
//ksort($dirList, SORT_ASC);
//
//
//function distributor(array $linkList, object $storeObject)
//{
//    if (count($linkList) > 5) {
//        /*add company related cards*/
//        $cardParent = Ui::element($storeObject, "card", ["style" => "display: flex;flex-direction: row;justify-content: center;align-content: space-between;width: 100%;"]);
//        $commonStyleStringForCards = "background: white;color: " . Ui::color["default"] . ";" . Ui::htmlHrefStyle . "margin: 10px;align-items: center;display: flex;justify-content: center;flex-direction: column;width: 200px;height: 150px;line-height: 2;border-radius: 10px;" . Ui::css["box-shadow"];
//
//        for ($indicator = 0; $indicator <= 4; $indicator++) {
//            if(array_key_exists($indicator,$linkList)){
//                /*create html anchor elements*/
//                $card1 = Ui::element($cardParent, "a", ["style" => $commonStyleStringForCards, "href" => pathinfo(_Array::value($linkList,$indicator), PATHINFO_FILENAME)]);
//                //Ui::element($card1, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:60px;border-radius: 10px;", "src" => Media::getAssetsPath("images_img-avatar3.png", "remote")]);
//                Ui::element($card1, "img", ["style" => Ui::htmlHrefStyle . "width:60px;height:60px;border-radius: 10px;", "src" => Media::getAssetsPath("images_".pathinfo(_Array::value($linkList,$indicator), PATHINFO_FILENAME).".png", "remote"),"alt"=>ucfirst(str_replace("-"," ",pathinfo(_Array::value($linkList,$indicator), PATHINFO_FILENAME)))]);
//                Ui::element($card1, "text", ["style" => Ui::htmlHrefStyle . "font-size: 18px;margin-top: 10px;display: block;width: inherit;text-align: center;", "text" => ucfirst(str_replace("-"," ",pathinfo(_Array::value($linkList,$indicator), PATHINFO_FILENAME)))]);
//                /*end html anchor elements*/
//                unset($linkList[$indicator]);
//            }
//        }
//
//        if (count($linkList) > 0) {
//            distributor($linkList, $storeObject);
//        }
//        //_Debug::preOutput($linkList);
//    } else {
//        /*add company related cards*/
//        $cardParent = Ui::element($storeObject, "card", ["style" => "display: flex;flex-direction: row;justify-content: center;align-content: space-between;width: 100%;"]);
//        $commonStyleStringForCards = "background: white;color: " . Ui::color["default"] . ";" . Ui::htmlHrefStyle . "margin: 10px;align-items: center;display: flex;justify-content: center;flex-direction: column;width: 200px;height: 150px;line-height: 2;border-radius: 10px;" . Ui::css["box-shadow"];
//
//        foreach ($linkList as $item) {
//            /*create html anchor elements*/
//            $card1 = Ui::element($cardParent, "a", ["style" => $commonStyleStringForCards, "href" => pathinfo($item, PATHINFO_FILENAME)]);
//            //Ui::element($card1, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:60px;border-radius: 10px;", "src" => Media::getAssetsPath("images_img-avatar3.png", "remote")]);
//            Ui::element($card1, "img", ["style" => Ui::htmlHrefStyle . "width:60px;height:60px;border-radius: 10px;", "src" => Media::getAssetsPath("images_".pathinfo($item, PATHINFO_FILENAME).".png", "remote"),"alt"=>ucfirst(str_replace("-"," ",pathinfo($item, PATHINFO_FILENAME)))]);
//            Ui::element($card1, "text", ["style" => Ui::htmlHrefStyle . "font-size: 18px;margin-top: 10px;display: block;width: inherit;text-align: center;", "text" => ucfirst(str_replace("-"," ",pathinfo($item, PATHINFO_FILENAME)))]);
//            /*end of html anchor elements*/
//        }
//    }
//}*/

//distributor($dirList, $this->documentTemplateBodyElement);

//
///*add account related cards*/
//$cardParent = Ui::element($store, "card", ["style" => "display: flex;flex-direction: row;justify-content: center;align-content: space-between;width: 100%;"]);
//$commonStyleStringForCards = "background: white;color: " . Ui::color["black"] . ";" . Ui::htmlHrefStyle . "margin: 10px;align-items: center;display: flex;justify-content: center;flex-direction: column;width: 200px;height: 150px;line-height: 2;border-radius: 10px;" . Ui::css["box-shadow"];
//
//foreach ($dirList as $item) {
//    /*create html anchor elements*/
//    $card1 = Ui::element($cardParent, "a", ["style" => $commonStyleStringForCards, "href" => pathinfo($item, PATHINFO_FILENAME)]);
//    Ui::element($card1, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:60px;border-radius: 10px;", "src" => Media::getAssetsPath("images_img-avatar3.png", "remote")]);
//    Ui::element($card1, "text", ["style" => Ui::htmlHrefStyle, "text" => ucfirst(pathinfo($item, PATHINFO_FILENAME))]);
//    /*end of index page*/
//}
