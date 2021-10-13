<?php


namespace Mishusoft\Interfaces\Chipsets;

interface NotifierFactoryInterface
{
    public static function getNotifier($notifier, $to);
}
