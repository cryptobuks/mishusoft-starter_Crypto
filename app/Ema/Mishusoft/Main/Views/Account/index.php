<?php
 use Mishusoft\Framework\Chipsets\Storage;use Mishusoft\Framework\Chipsets\System\Localization;use Mishusoft\Framework\Chipsets\Ui;use Mishusoft\Framework\Chipsets\Utility\_Array;use Mishusoft\Framework\Libraries\Runtime;$translation=new Localization(_Array::value($this->request,"locale"));Ui::updateDocumentTitle(" || ".$translation->translate("Welcome to Mishusoft family"));Ui::elementList($this->documentTemplateBodyElement,["ms-app-paragraph"=>[["style"=>"padding: 50px;text-align: center;font-size: 40px;font-weight: bold;","text"=>$translation->translate("Welcome to Mishusoft family")],["style"=>"padding: 10px;text-align: center;font-size: 16px;font-weight: normal;line-height: 1.5;margin: 0 10px 0 10px;","text"=>$translation->translate("Mishusoft Systems Incorporated is a software development company that is going to be established with a view to offering high quality IT solutions at home and abroad. The company is keen to take the advantage of fast growing global software and data processing industry by offering professional service and price for support and benefit of the valued customers.")],["style"=>"padding: 10px;text-align: center;font-size: 16px;font-weight: normal;line-height: 1.5;margin: 0 10px 0 10px;","text"=>$translation->translate("We offered to join with us and receive any service, then the valued customers take a relax.")]],]);Ui::element($this->documentTemplateBodyElement,"ms-app-paragraph",["style"=>"padding: 35px;text-align: center;font-size: 24px;font-weight: bold;","text"=>$translation->translate("Select one or take a support!!")]);Ui::elementList(Ui::element($this->documentTemplateBodyElement,"card",["class"=>"card1",]),["a"=>[["class"=>"protect flex-center-all","style"=>"background: white;","href"=>Runtime::link("account/login"),"child"=>["div"=>[["class"=>"card-icon flex-center-all","child"=>["img"=>["alt"=>"Log in to your account","width"=>"85px","height"=>"85px","src"=>Storage::getMediaPath("images/users/login-rounded-right.png","remote")]]],["class"=>"card-title flex-center-all","text"=>"Log in"]]]],["class"=>"protect flex-center-all","style"=>"background: white;","href"=>Runtime::link("account/create"),"child"=>["div"=>[["class"=>"card-icon flex-center-all","child"=>["img"=>["alt"=>"Create a new account","width"=>"85px","height"=>"85px","src"=>Storage::getMediaPath("images/users/edit-user-male.png","remote")]]],["class"=>"card-title flex-center-all","text"=>"Create a new account"]]]],["class"=>"protect flex-center-all","style"=>"background: white;","href"=>Runtime::link("account/activate"),"child"=>["div"=>[["class"=>"card-icon flex-center-all","child"=>["img"=>["alt"=>"Activate your account","width"=>"85px","height"=>"85px","src"=>Storage::getMediaPath("images/users/checked-user-male.png","remote")]]],["class"=>"card-title flex-center-all","text"=>"Activate account"]]]],["class"=>"protect flex-center-all","style"=>"background: white;","href"=>Runtime::link("account/recovery"),"child"=>["div"=>[["class"=>"card-icon flex-center-all","child"=>["img"=>["alt"=>"Recover your account","width"=>"85px","height"=>"85px","src"=>Storage::getMediaPath("images/users/undelete.png","remote")]]],["class"=>"card-title flex-center-all","text"=>"Forget Account"]]]],]]);