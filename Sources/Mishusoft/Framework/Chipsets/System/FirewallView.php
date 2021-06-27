<?php


namespace Mishusoft\Framework\Chipsets\System;

class FirewallView extends Firewall
{
    public static function maintance(string $title, string $message, int $http_response_code)
    {
    }

    public static function debug(string $title, string $objectName, string $message, string $trace, int $http_response_code)
    {
    }

    public static function protection(string $title, string $reason, string $message, int $http_response_code)
    {
    }

    private static function template(string $title, string $message, int $http_response_code)
    {
    }
}
