<?php

namespace App\Widgets;

use Mishusoft\Exceptions\Authentication\Widget;

class SocialNetworkShareWidget extends Widget
{
    /**
     * @param string $name
     * @param string $view
     * @param string $format
     * @param null $inverse
     * @param null $siteInfo
     * @return bool|string
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \JsonException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function getSocialNetworkShare(string $name, string $view, string $format = 'phtml', $inverse = null, $siteInfo = null): bool|string
    {
        $data['name'] = $name;
        return $this->render($name, $view, $data, $format);
    }//end getSocialNetworkShare()
}//end class
