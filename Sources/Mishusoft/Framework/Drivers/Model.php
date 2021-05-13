<?php

namespace Mishusoft\Framework\Drivers;

use Mishusoft\Framework\Chipsets\Autoload;
use PDO;
use PDOException;

class Model
{
    public $dbc;
    protected $db;
    private Registry $registry;

    public function __construct()
    {
        $this->registry = Registry::getInstance();
        $this->db = $this->registry->db;
        $this->dbc = $this->db;
    }

    function __destruct()
    {

    }

    protected function prepare($sql)
    {
        try {
            if ($this->db) {
                return $this->db->prepare($sql);
            }
        } catch (PDOException $e) {
            Autoload::log($e->getMessage(), PHP_COMPILE_LOG_FILE, "full");
            echo "<pre>" . $e . "</pre>";
        }
        //exit();
    }

    protected function isTableExistsOnDatabase($table): bool
    {
        $tbl = $this->query("SHOW TABLES LIKE %" . DbPREFIX . "$table`;");
        if ($tbl->fetch(PDO::FETCH_ASSOC)) {
            return TRUE;
        }
        return FALSE;
    }

    /*protected function retrieveReturnVariable($data, $var) {
        if (version_compare(PhpVersion, '7.4', '<')) {
            if ($data[$var]) {
                return $data[$var];
            }
        } else {
            if ($data[$var] ??= '') {if ($data[$var] || '') {
                return $data[$var];
            }
        }
    }*/

    protected function query($sql)
    {
        try {
            if ($this->db) {
                return $this->db->query($sql);
            }
        } catch (PDOException $e) {
            Autoload::log($e->getMessage(), PHP_COMPILE_LOG_FILE, "full");
            echo "<pre>" . $e . "</pre>";
        }
        //exit();
    }
}
