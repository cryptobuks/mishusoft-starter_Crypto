<?php


namespace Mishusoft\Ema\Mishusoft\Main\UrlHandlers;


use Mishusoft\Framework\BuiltInWeb\ViewRenders\MonitorViewRender;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Drivers\UrlHandler;

class MonitorUrlHandler  extends UrlHandler
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Response(array $prediction)
    {
        // TODO: Implement Response() method.
        $renderEngine = new  MonitorViewRender($prediction);
        $renderEngine->setTitleOfCurrentWebPage("Under Maintenance");
        $renderEngine->setUrlOfHostedWebsite(Memory::Data('framework')->host->url);
        $renderEngine->runTemplate();
    }
}