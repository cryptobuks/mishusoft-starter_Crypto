<?php


namespace App\Ema\Mishusoft\Main\UrlHandlers;

use Mishusoft\Ui\Localization;
use Mishusoft\Authentication\UrlHandler;
use Mishusoft\Utility\ArrayCollection;

class AccountUrlHandler extends UrlHandler
{
    public function __construct()
    {
        parent::__construct();

    }

    public function Response(array $prediction)
    {
        // TODO: Implement Response() method.
        $translation = new Localization(ArrayCollection::value($prediction, "locale"));
        $view = $this->render($translation->translate("Account"), $prediction, ['login', 'create']);
        $view->display();
    }
}