<?php
 use Mishusoft\Ui\Localization;use Mishusoft\Ui;use Mishusoft\Utility\ArrayCollection;$translation=new Localization(ArrayCollection::value($this->request,"locale"));Ui::updateDocumentTitle(" || ".$translation->translate("Welcome to You."));Ui::elementList($this->documentTemplateBodyElement,["article"=>[["style"=>"padding: 20px;text-align: center;font-size: 37px;font-weight: bold;width: 1024px;border: 1px solid lightgray;display: flex;justify-content: center;align-items: center;margin-top: 10px;","text"=>$translation->translate("Trending product")],],"ms-app-paragraph"=>[["style"=>"padding: 50px;text-align: center;font-size: 37px;font-weight: bold;","text"=>$translation->translate("Welcome to Mishusoft.")],],]);