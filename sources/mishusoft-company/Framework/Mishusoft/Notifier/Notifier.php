<?php


namespace Mishusoft\Notifier;

abstract class Notifier
{
    protected string $to;
    public function __construct(string $to)
    {
        $this->to = $to;
    }
    abstract public function validateTo(): bool;
    abstract public function sendNotification(): string;
}