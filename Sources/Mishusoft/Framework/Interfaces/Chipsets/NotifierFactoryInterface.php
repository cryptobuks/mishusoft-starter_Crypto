<?php


namespace Mishusoft\Framework\Interfaces\Chipsets;


interface NotifierFactoryInterface
{
    public static function getNotifier($notifier, $to);
}