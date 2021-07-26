<?php


namespace Mishusoft\Ema\Mishusoft\Main\UrlHandlers;


use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Drivers\UrlHandler;

class AppointmentUrlHandler extends UrlHandler
{

    /**
     * @inheritDoc
     */
    public function Response(array $prediction)
    {
       // _Debug::preOutput($prediction);
        // TODO: Implement Response() method.
        $translation = new Localization(_Array::value($prediction, "locale"));
        $view = $this->render($translation->translate("Appointment"), $prediction);
        $view->display();
    }
}