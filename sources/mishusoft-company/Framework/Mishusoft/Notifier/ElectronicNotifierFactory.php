<?php

/*
 * require_once('Notifier.php');
 * require_once('NotifierFactory.php');
require_once('ElectronicNotifierFactory.php');
require_once('SMS.php');
$mobile = ElectronicNotifierFactory::getNotifier("SMS", "07111111111");
echo $mobile->sendNotification();
echo "\n";
require_once('Email.php');
$email = ElectronicNotifierFactory::getNotifier("Email",
"test@example.com");
echo $email->sendNotification();
*/


namespace Mishusoft\Notifier;

use Exception;
use Mishusoft\Interfaces\Chipsets\NotifierFactoryInterface;

class ElectronicNotifierFactory implements NotifierFactoryInterface
{
    public static function getNotifier($notifier, $to)
    {
        if (empty($notifier)) {
            throw new Exception("No notifier passed.");
        }
        switch ($notifier) {
            case 'SMS':
                return new SMS($to);
                break;
            case 'Email':
                return new Email($to, 'Junade');
                break;
            default:
                throw new Exception("Notifier invalid.");
                break;
        }
    }
}
