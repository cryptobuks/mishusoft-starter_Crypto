<?php


namespace Mishusoft\Ema\Mishusoft\Main\UrlHandlers;


use Mishusoft\Framework\Chipsets\Media;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Drivers\UrlHandler;

class TestPageUrlHandler  extends UrlHandler
{
    public function __construct()
    {
        parent::__construct();
    }
    public function Response(array $prediction)
    {
        _Debug::preOutput("test Page");
        //_Debug::preOutput($prediction->getController());
        _Debug::preOutput($prediction);

        _Debug::preOutput(getimagesize(Media::getMediaPath("logos/mishusoft-logo-lite.webp","local")));
        _Debug::preOutput(getimagesize(Media\Image::resize(Media::getMediaPath("logos/mishusoft-logo-lite.png","local"),150,150)));


    }

}