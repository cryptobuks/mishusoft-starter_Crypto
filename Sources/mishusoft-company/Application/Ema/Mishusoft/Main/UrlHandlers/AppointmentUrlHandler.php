<?php


namespace App\Ema\Mishusoft\Main\UrlHandlers;

use Mishusoft\System\Localization;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Drivers\UrlHandler;

class AppointmentUrlHandler extends UrlHandler
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
        $translation = new Localization(ArrayCollection::value($prediction, "locale"));
        $view = $this->render($translation->translate("Appointment"), $prediction);
        $view->display();
    }
}
