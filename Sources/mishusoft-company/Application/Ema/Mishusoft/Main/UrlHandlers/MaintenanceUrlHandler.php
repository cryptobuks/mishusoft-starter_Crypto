<?php


namespace Mishusoft\Ema\Mishusoft\Main\UrlHandlers;


use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Drivers\UrlHandler;

class MaintenanceUrlHandler extends UrlHandler
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Response(array $prediction)
    {
        // TODO: Implement Response() method.
        if (!Memory::Data("framework")->maintenance) {
            if ($prediction['controller']  === 'maintenance'){
                Firewall::runtimeFailure("Not Found", [
                    "debug" => ["file" => (new Browser())->getURLPath(), "location" => (new Browser())->getVisitedPage(), "description" => "Your requested url not found!!"],
                    "error" => ["description" => "Your requested url not found!!"]
                ]);
            }
        } else {
            $translation = new Localization(_Array::value($prediction, "locale"));
            $view = $this->render($translation->translate("Under Maintenance"), $prediction,['index']);
            $view->display();
        }
    }
}