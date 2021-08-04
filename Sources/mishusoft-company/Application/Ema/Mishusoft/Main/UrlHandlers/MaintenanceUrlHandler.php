<?php


namespace App\Ema\Mishusoft\Main\UrlHandlers;

use Mishusoft\Ui\Localization;
use Mishusoft\Ui\Memory;
use Mishusoft\Ui\Firewall;
use Mishusoft\Drivers\UrlHandler;
use Mishusoft\Utility\ArrayCollection;

class MaintenanceUrlHandler extends UrlHandler
{


    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     */
    public function response(array $prediction):void
    {
        // TODO: Implement Response() method.
        if (!Memory::Data("framework")->maintenance) {
            if ($prediction['controller']  === 'maintenance') {
                Firewall::runtimeFailure("Not Found", [
                    "debug" => ["file" => (new Browser())->getURLPath(), "location" => (new Browser())->getVisitedPage(), "description" => "Your requested url not found!!"],
                    "error" => ["description" => "Your requested url not found!!"],
                ]);
            }
        } else {
            $translation = new Localization(ArrayCollection::value($prediction, "locale"));
            $view = $this->render($translation->translate("Under Maintenance"), $prediction, ['index']);
            $view->display();
        }
    }
}
