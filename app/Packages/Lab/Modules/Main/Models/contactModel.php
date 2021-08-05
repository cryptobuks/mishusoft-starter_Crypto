<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Models;


use Mishusoft\Framework\Drivers\Model;

class contactModel extends Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function acceptMessage($ip, $firstName, $lastName, $email, $mobileNumber, $messageSubject, $messageContent)
    {
        /*ALTER TABLE `msu_contact_messages` ADD `last_update_date_time` VARCHAR(100) NOT NULL AFTER `message`; */
        /*
         * INSERT INTO `msu_contact_messages`(`id`, `ip`, `f_name`, `l_name`, `email`, `mobile`, `subject`, `message`, `last_update_date_time`)
         * VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9])
         * */
        $this->prepare("INSERT INTO `" . DbPREFIX . "contact_messages` (`id`, `ip`, `f_name`, `l_name`, `email`, `mobile`, `subject`, `message`,`last_update_date_time`) VALUES (null, :ip_add, :firstName, :lastName, :email, :mobileNumber, :messageSubject, :messageContent, now())")
            ->execute(
                array(
                    ':ip_add' => $ip,
                    ':firstName' => $firstName,
                    ':lastName' => $lastName,
                    ':email' => $email,
                    ':mobileNumber' => $mobileNumber,
                    ':messageSubject' => $messageSubject,
                    ':messageContent' => $messageContent
                ));
    }

}