<?php


namespace App\Ema\Mishusoft\Main\UrlHandlers;

use Mishusoft\Ui\Localization;
use Mishusoft\Drivers\UrlHandler;
use Mishusoft\Utility\ArrayCollection;

class IndexUrlHandler extends UrlHandler
{


    /**
     * @param array $prediction
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function response(array $prediction):void
    {
       // _Debug::preOutput(func_get_args());
        $translation = new Localization(ArrayCollection::value($prediction, 'locale'));
        $view        = $this->render($translation->translate(WHO_AM_I), $prediction);
        $view->display();
    }//end response()
}//end class
