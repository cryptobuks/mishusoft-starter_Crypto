<?php


namespace App\Ema\Mishusoft\Main\UrlHandlers;

use Mishusoft\Drivers\UrlHandler;
class AccountUrlHandler extends UrlHandler
{
    public function response(array $prediction):void
    {
        // TODO: Implement Response() method.
        $view = $this->render("Account", $prediction, ['login', 'create']);
        $view->display();
    }
}