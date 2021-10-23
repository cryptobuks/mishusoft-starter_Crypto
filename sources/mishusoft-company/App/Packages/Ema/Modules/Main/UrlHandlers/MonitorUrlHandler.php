<?php

namespace App\Ema\Mishusoft\Main\UrlHandlers;

use Mishusoft\System\Localization;
use Mishusoft\Drivers\UrlHandler;
use Mishusoft\Utility\ArrayCollection;

class MonitorUrlHandler extends UrlHandler
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
    public function response(array $prediction): void
    {
        // TODO: Implement Response() method.
        $translation = new Localization(ArrayCollection::value($prediction, 'locale'));
        $view        = $this->render($translation->translate('Monitor'), $prediction);
        $view->display();
    }
}
