<?php
 namespace App\Ema\Mishusoft\Main\UrlHandlers;use Mishusoft\System\Localization;use Mishusoft\Drivers\UrlHandler;use Mishusoft\Utility\ArrayCollection;class EmergencyUrlHandler extends UrlHandler{public function response(array $prediction):void{$translation=new Localization(ArrayCollection::value($prediction,'locale'));$view=$this->render($translation->translate('Emergency'),$prediction);$view->display();}}