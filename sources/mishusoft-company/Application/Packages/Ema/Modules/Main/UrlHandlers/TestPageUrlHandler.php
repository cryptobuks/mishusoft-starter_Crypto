<?php


namespace App\Ema\Mishusoft\Main\UrlHandlers;

use Mishusoft\Storage;
use Mishusoft\Utility\Debug;
use Mishusoft\Authentication\UrlHandler;

class TestPageUrlHandler extends UrlHandler
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
        Debug::preOutput("test Page");
        //_Debug::preOutput($prediction->getController());
        Debug::preOutput($prediction);

        Debug::preOutput(getimagesize(Storage::logoFullPath("mishusoft-logo-lite.webp", "local")));
        Debug::preOutput(getimagesize(
            Storage\Media\Image::resize(Storage::logoFullPath("mishusoft-logo-lite.png", "local"), 150, 150)
        ));
    }
}
