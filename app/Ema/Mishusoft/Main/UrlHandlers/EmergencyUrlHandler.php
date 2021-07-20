<?php


namespace Mishusoft\Ema\Mishusoft\Main\UrlHandlers;



use Mishusoft\Framework\BuiltInWeb\ViewRenders\AccountViewRender;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Drivers\UrlHandler;

class EmergencyUrlHandler  extends UrlHandler
{
    public function __construct()
    {
        parent::__construct();
    }


    public function Response(array $prediction)
    {
        // TODO: Implement Response() method.
        $renderEngine = new AccountViewRender($prediction);
        $renderEngine->setTitleOfCurrentWebPage("Emergency");
        $renderEngine->setUrlOfHostedWebsite(Memory::Data('framework')->host->url);
        $renderEngine->runTemplate();
    }
}