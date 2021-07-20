<?php


namespace Mishusoft\Ema\Mishusoft\Main\UrlHandlers;


use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Drivers\UrlHandler;

class IndexUrlHandler extends UrlHandler
{


    /**
     * @param array $prediction
     */
    public function response(array $prediction)
    {
       // _Debug::preOutput(func_get_args());
        $translation = new Localization(_Array::value($prediction, 'locale'));
        $view        = $this->render($translation->translate('Mishusoft'), $prediction);
        $view->display();

    }//end response()


}//end class
