<?php


namespace App\Ema\Mishusoft\Main\UrlHandlers;

use Mishusoft\Drivers\UrlHandler;
class AccountUrlHandler extends UrlHandler
{
    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function response(array $prediction):void
    {
        // TODO: Implement Response() method.
        $view = $this->render("Account", $prediction, ['login', 'create']);
        $view->display();
    }
}