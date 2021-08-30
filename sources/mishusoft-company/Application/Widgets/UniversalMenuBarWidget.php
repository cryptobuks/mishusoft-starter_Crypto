<?php


namespace App\Widgets;

use Mishusoft\Drivers\Widget;

class UniversalMenuBarWidget extends Widget
{
    /**
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function getUniversalMenuBar(string $name, string $view, string $format = "phtml", $inverse = null, $siteInfo = null)
    {
        $data['name'] = $name;
        $data['inverse'] = $inverse;
        $data['appDetails'] = $siteInfo;
        //$data['siteInfo'] = $this->menu->getSiteInfo();
        return $this->render($name, $view, $data, $format);
    }
}
