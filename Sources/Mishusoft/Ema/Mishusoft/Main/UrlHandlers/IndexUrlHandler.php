<?php


namespace Mishusoft\Ema\Mishusoft\Main\UrlHandlers;


use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Drivers\UrlHandler;

class IndexUrlHandler extends UrlHandler
{

    /**
     * @inheritDoc
     */
    public function Response(array $prediction)
    {
        //_Debug::preOutput($prediction);
        //echo phpinfo();
        // TODO: Implement Response() method.
        $translation = new Localization(_Array::value($prediction, "locale"));
        //_Debug::preOutput($translation->translate("Mishusoft"));
        $view = $this->render($translation->translate("Mishusoft"), $prediction);
        $view->display();
    }
}