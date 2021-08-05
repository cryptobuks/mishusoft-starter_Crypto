<?php


namespace App\Ema\Mishusoft\Main\UrlHandlers;


use Mishusoft\Ui\Localization;
use Mishusoft\Ui\Memory;
use Mishusoft\Drivers\UrlHandler;
use Mishusoft\Utility\ArrayCollection;

class EPaymentUrlHandler  extends UrlHandler
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
        $translation = new Localization(ArrayCollection::value($prediction, 'locale'));
        $view        = $this->render($translation->translate('Payment'), $prediction);
        $view->display();
    }
}