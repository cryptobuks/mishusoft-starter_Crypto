<?php


namespace App\Packages\Ema\Modules\Main\UrlHandlers;

use Mishusoft\Drivers\UrlHandler;

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
        $view  = $this->render(WHO_AM_I, $prediction);
        $view->display();
    }//end response()
}//end class
