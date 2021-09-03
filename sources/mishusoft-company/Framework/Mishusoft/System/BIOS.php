<?php declare(strict_types=1);

namespace Mishusoft\System;

use Mishusoft\Exceptions\Handler;
use Mishusoft\Registry;
use Mishusoft\Singleton;

class BIOS extends Singleton
{
    // Declare version.
    public const VERSION = '2.0.0';

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
    protected static function singleton(\Closure $closure): self
    {
        $closure(Registry::getInstance());

        try {
            $closure(Registry::getInstance());
        } catch (\Error | \Exception $e) {
            Handler::fetch($e);
        }

        return self::getInstance();
    }
}//end class
