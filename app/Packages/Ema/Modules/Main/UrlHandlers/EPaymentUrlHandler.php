<?php


namespace App\Ema\Mishusoft\Main\UrlHandlers;

use Mishusoft\Drivers\UrlHandler;

class EPaymentUrlHandler extends UrlHandler
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
        $view        = $this->render('Payment', $prediction);
        $view->display();
    }
}
