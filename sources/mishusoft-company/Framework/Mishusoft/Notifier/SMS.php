<?php


namespace Mishusoft\Notifier;

use Exception;

class SMS extends Notifier
{
    /**
     * @return bool
     */
    public function validateTo(): bool
    {
        $pattern = '/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/';
        $isPhone = preg_match($pattern, $this->to);
        return $isPhone ? true : false;
    }

    /**
     * @return string
     * @throws Exception
     */
    public function sendNotification(): string
    {
        if ($this->validateTo() === false) {
            throw new Exception("Invalid phone number.");
        }
        $notificationType = get_class($this);
        return "This is a " . $notificationType . " to " . $this->to . ".";
    }
}
