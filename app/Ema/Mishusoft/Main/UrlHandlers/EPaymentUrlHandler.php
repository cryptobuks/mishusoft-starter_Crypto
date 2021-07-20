<?php


namespace Mishusoft\Ema\Mishusoft\Main\UrlHandlers;


use Mishusoft\Framework\BuiltInWeb\ViewRenders\EPaymentViewRender;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Drivers\UrlHandler;

class EPaymentUrlHandler  extends UrlHandler
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Response(array $prediction)
    {
        // TODO: Implement Response() method.
        $renderEngine = new EPaymentViewRender($prediction);
        $renderEngine->setTitleOfCurrentWebPage("Emergency");
        $renderEngine->setUrlOfHostedWebsite(Memory::Data('framework')->host->url);
        $renderEngine->runTemplate();
    }
}