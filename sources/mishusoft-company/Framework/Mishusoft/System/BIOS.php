<?php declare(strict_types=1);

namespace Mishusoft\System;

use Closure;
use Error;
use Exception;
use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\Handler;
use Mishusoft\Exceptions\HttpException\HttpResponseException;
use Mishusoft\Exceptions\JsonException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Registry;
use Mishusoft\Singleton;

class BIOS extends Singleton
{
    // Declare version.
    public const VERSION = '2.0.0';

    /**
     * @throws InvalidDatabaseException
     * @throws RuntimeException
     * @throws AddressNotFoundException
     * @throws \JsonException
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws HttpResponseException
     * @throws PermissionRequiredException
     * @throws JsonException
     */
    protected static function singleton(Closure $closure): self
    {
        $closure(Registry::getInstance());

        try {
            $closure(Registry::getInstance());
        } catch (Error | Exception $e) {
            Handler::fetch($e);
        }

        return self::getInstance();
    }
}//end class
