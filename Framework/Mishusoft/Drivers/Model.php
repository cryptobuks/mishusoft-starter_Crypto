<?php

namespace Mishusoft\Drivers;

use Mishusoft\Ui\Logger;
use PDO;
use PDOException;

class Model
{

    /**
     * @var mixed|false
     */
    public mixed $dbc;

    /**
     * @var mixed|false
     */
    protected mixed $db;

    /**
     * @var Registry
     */
    private Registry $registry;


    public function __construct()
    {
        $this->registry = Registry::getInstance();
        $this->db       = $this->registry->db;
        $this->dbc      = $this->db;

    }//end __construct()


    function __destruct()
    {

    }//end __destruct()


    /**
     * @param string $sql
     * @return mixed
     */
    protected function prepare(string $sql)
    {
        try {
            if ($this->db === true) {
                return $this->db->prepare($sql);
            }
        } catch (PDOException $e) {
            Logger::write($e->getMessage(), PHP_COMPILE_LOG_FILE, 'smart');
            echo '<pre>'.$e.'</pre>';
            throw $e;
        }

        // exit();

    }//end prepare()


    /**
     * @param string $table
     * @return bool
     */
    protected function isTableExistsOnDatabase(string $table): bool
    {
        $tbl = $this->query('SHOW TABLES LIKE %'.DbPREFIX.$table.'`;');
        if ($tbl->fetch(PDO::FETCH_ASSOC) === true) {
            return true;
        }

        return false;

    }//end isTableExistsOnDatabase()


    /*
        protected function retrieveReturnVariable($data, $var) {
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

    /**
     * @param string $sql
     * @return mixed
     */
    protected function query(string $sql)
    {
        try {
            if ($this->db === true) {
                return $this->db->query($sql);
            }
        } catch (PDOException $e) {
            Logger::write($e->getMessage(), PHP_COMPILE_LOG_FILE, 'smart');
            echo '<pre>'.$e.'</pre>';
            throw $e;
        }

        // exit();

    }//end query()


}//end class
