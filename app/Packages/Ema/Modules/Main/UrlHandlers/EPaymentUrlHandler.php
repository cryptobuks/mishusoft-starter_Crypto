<?php
 namespace App\Ema\Mishusoft\Main\UrlHandlers;use Mishusoft\Ui\Localization;use Mishusoft\Ui\Memory;use Mishusoft\Authentication\UrlHandler;use Mishusoft\Utility\ArrayCollection;class EPaymentUrlHandler extends UrlHandler{public function response(array $prediction):void{$translation=new Localization(ArrayCollection::value($prediction,'locale'));$view=$this->render($translation->translate('Payment'),$prediction);$view->display();}}