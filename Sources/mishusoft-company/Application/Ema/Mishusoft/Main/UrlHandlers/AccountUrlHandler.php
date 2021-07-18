<?php


namespace Mishusoft\Ema\Mishusoft\Main\UrlHandlers;

use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Drivers\UrlHandler;

class AccountUrlHandler extends UrlHandler
{
    public function __construct()
    {
        parent::__construct();

    }

    public function Response(array $prediction)
    {
        // TODO: Implement Response() method.
        $translation = new Localization(_Array::value($prediction, "locale"));
        $view = $this->render($translation->translate("Account"), $prediction, ['login', 'create']);
        $view->display();
    }
}