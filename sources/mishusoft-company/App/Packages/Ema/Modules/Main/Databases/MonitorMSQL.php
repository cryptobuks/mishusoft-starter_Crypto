<?php

namespace Mishusoft\Ema\Mishusoft\Main\Databases;

use Mishusoft\Framework\Chipsets\Databases\MishusoftSQLStandalone;
use Mishusoft\Framework\Interfaces\Chipsets\Databases\MishusoftSQLSandalone\TableInterface;

class MonitorMSQL extends MishusoftSQLStandalone
{
    /**
     * @var TableInterface|mixed
     */
    private $db;

    /**
     * MonitorMSQL constructor.
     */
    public function __construct()
    {
        parent::__construct(MS_DB_USER_NAME, MS_DB_USER_PASSWORD);
        $this->db = $this->select("system");
    }
}
