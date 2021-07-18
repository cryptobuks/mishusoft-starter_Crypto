<?php declare(strict_types=1);


namespace Mishusoft\Framework\Chipsets\Databases;


class MySqli extends \mysqli
{
    public function __construct($hostname = null, $username = null, $password = null, $database = null, $port = null, $socket = null)
    {
        parent::__construct($hostname, $username, $password, $database, $port, $socket);
    }

}