<?php

namespace Mishusoft\Packages\Lab\Modules\System\Controllers;
/*https://rdap.verisign.com/com/v1/domain/mishusoft.com*/

use Exception;
use Mishusoft\Framework\Chipsets\Media;
use Mishusoft\Framework\Drivers\Database;
use Mishusoft\Packages\Lab\Modules\Main\Controllers\systemController;
use PDO;
use PDOException;

class trackingController extends systemController
{
    private $system;
    private $db;
    private $table;
    private $runtime;
    private $runtime2;
    private $runtime3;
    private $runtime4;

    public function __construct()
    {
        parent:: __construct();
        $this->access_init();
        $this->system = $this->loadModel('system');
    }

    public function index()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate to tracking page successfully')));
        $this->view->assign('title', 'Tracking');
        $this->view->assign('databases', $this->system->getServerDatabases());
        $this->view->render('index', 'Tracking');
    }

    public function getServerDatabases()
    {
        $this->acl->access('edit_content');
        echo json_encode($this->system->getServerDatabases());
        /*Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Web app\'s tables json data extract successfully')));*/
    }

    public function manageServerDatabase()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            if (empty($this->filterInt($data->security_code)) or $this->filterInt($data->security_code) !== 1) {
                Media::StreamAsJson(['type' => 'error', 'message' => 'Site\'s security code not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Site\'s security code not found.')));
                exit;
            }
            if (empty($data->name)) {
                Media::StreamAsJson(['type' => 'error', 'message' => 'Server\'s name not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Server\'s name not found.')));
                exit;
            }

            if (empty($data->user)) {
                Media::StreamAsJson(['type' => 'error', 'message' => 'Databases username not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Databases username not found.')));
                exit;
            }

            if (empty($data->db)) {
                Media::StreamAsJson(['type' => 'error', 'message' => 'Databases name not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Databases name not found.')));
                exit;
            }

            if (empty($data->password)) {
                Media::StreamAsJson(['type' => 'error', 'message' => 'Databases password not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Databases password not found.')));
                exit;
            }
            if ($data->btnName === 'Update') {
                $this->system->editServerDatabase($this->filterInt($data->id), $this->getSqlText($data->name), $this->getSqlText($data->user), $this->getSqlText($data->db), $this->getSqlText($data->password));
                Media::StreamAsJson(['type' => 'success', 'message' => ucfirst($this->getSqlText($data->db)) . ' updated successfully....',]);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => ucfirst($this->getSqlText($data->db)) . ' updated successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'database', 'message' => ucfirst($this->getSqlText($data->db)) . ' updated successfully....')
                ));*/
                exit;
            } else if ($data->btnName === 'Save') {
                $this->system->addServerDatabase($this->getSqlText($data->name), $this->getSqlText($data->user), $this->getSqlText($data->db), $this->getSqlText($data->password));
                Media::StreamAsJson(['type' => 'success', 'message' => 'New ' . ucfirst($this->getSqlText($data->db)) . ' added successfully....',]);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'New ' . ucfirst($this->getSqlText($data->db)) . ' added successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'database', 'message' => 'New ' . ucfirst($this->getSqlText($data->db)) . ' added successfully....')
                ));*/
                exit;
            }

            if ($data->btnName !== 'Save' || $data->btnName !== 'Update') {
                Media::StreamAsJson(['type' => 'error', 'message' => 'Job command not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Job command not found.')));
                exit;
            }
        }
    }

    public function deleteServerDatabase()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            $database = $this->system->getServerDatabaseById($this->filterInt($data->id));
            $this->system->deleteServerDatabase($this->filterInt($data->id));
            Media::StreamAsJson(['type' => 'success', 'message' => '<b>' . $database['db'] . '</b> disconnected successfully....']);
            /*Tracker::addEvent(array(
                'activity' => array('messageType' => 'success', 'message' => '<b>' . $database['db'] . '</b> disconnected successfully....'),
                'update' => array('messageType' => 'success', 'uFile' => 'database', 'message' => '<b>' . $database['db'] . '</b> disconnected successfully....')
            ));*/
            exit;
        }
    }

    public function dbConnectionTest()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            try {
                $db = new PDO('mysql:host=' . $data->server . ';port=3306;dbname=' . $data->db, $data->user, $data->password);
                $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $db->setAttribute(PDO::ATTR_CASE, PDO::CASE_NATURAL);
                $db->setAttribute(PDO::ATTR_ORACLE_NULLS, PDO::NULL_EMPTY_STRING);
                $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
                Media::StreamAsJson(['type' => 'success', 'message' => 'connected']);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'Connected successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'database', 'message' => 'Connected successfully....')
                ));*/
                exit;
            } catch (Exception $e) {
                Media::StreamAsJson(['type' => 'error', 'message' => $e->getMessage()]);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'error', 'message' => $e->getMessage()),
                    'update' => array('messageType' => 'error', 'uFile' => 'database', 'message' => $e->getMessage())
                ));*/
                exit;
            }
        }
    }

    public function dbServerStatus()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->db['name'] = $data->server;
            $this->db['db'] = $data->db;
            $this->db['user'] = $data->user;
            $this->db['password'] = $data->password;
            $this->connectDb(function () {
                $db = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                Media::StreamAsJson($db->query("SHOW STATUS")->fetchAll(PDO::FETCH_ASSOC));
            });
        }
    }

    public function showCreateTable(){
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->db['name'] = $data->server;
            $this->db['db'] = $data->db;
            $this->db['user'] = $data->user;
            $this->db['password'] = $data->password;
            $this->db['table'] = $data->table;
            $this->connectDb(function () {
                $db = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                Media::StreamAsJson($db->query("SHOW CREATE TABLE " . DbPREFIX .  $this->db['table'])->fetch(PDO::FETCH_ASSOC));
            });
        }
    }

    public function renameTable(){
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->db['name'] = $data->server;
            $this->db['db'] = $data->db;
            $this->db['user'] = $data->user;
            $this->db['password'] = $data->password;
            $this->db['table'] = $data->table;
            $this->connectDb(function () {
                $db = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                Media::StreamAsJson($db->query("SHOW CREATE TABLE " . DbPREFIX .  $this->db['table'])->fetch(PDO::FETCH_ASSOC));
            });
        }
    }

    public function showProcessList(){
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->db['name'] = $data->server;
            $this->db['db'] = $data->db;
            $this->db['user'] = $data->user;
            $this->db['password'] = $data->password;
            $this->connectDb(function () {
                $db = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                Media::StreamAsJson($db->query("show processlist")->fetchAll());
            });
        }
    }


    public function view($name = false)
    {
        $this->access_init();
        $this->acl->access('edit_content');
        if (!isset($name)) {
            $this->redirect('system/tracking/');
        }

        //$this->backupData('loreley_db1', 'test');
        $currentDatabase = $this->system->getServerDatabaseByName($name);
        $this->view->assign('title', $currentDatabase['name'] . ' server');
        $this->view->assign('dbInfo', $currentDatabase);
        $this->view->render('viewtables', 'Db View');
    }

    public function viewDbTable($dbName = false, $tableName = false)
    {
        $this->access_init();
        $this->acl->access('edit_content');
        if (!isset($dbName) || !isset($tableName)) {
            $this->redirect('system/tracking/');
        }

        //$this->backupData('loreley_db1', 'test');
        $currentDatabase = $this->system->getServerDatabaseByName($dbName);
        $this->view->assign('title', $currentDatabase['name'] . ' server');
        $this->view->assign('dbInfo', $currentDatabase);
        $this->view->assign('tableName', $tableName);
        $this->view->render('viewdata', 'Db View');
    }

    private function connectDb(callable $callback)
    {
        try {
            $callback();
        } catch (PDOException $e) {
            echo json_encode(['type' => 'error', 'message' => $e->getMessage(),]);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => $e->getMessage())));
            exit;
        }
    }

    public function getTables($dbName = false)
    {
        $this->access_init();
        $this->acl->access('edit_content');
        if (isset($dbName)) {
            $this->db = $this->system->getServerDatabaseByName($dbName);
            $this->connectDb(function () {
                $db = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                //echo json_encode($db->query("SELECT TABLE_NAME, TABLE_ROWS, (DATA_LENGTH + INDEX_LENGTH) AS `Size`, CREATE_TIME, UPDATE_TIME, TABLE_COLLATION, ENGINE FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '" . $this->db['db'] . "' ORDER BY TABLE_NAME ASC;")->fetchAll(PDO::FETCH_ASSOC));
                Media::StreamAsJson($db->query("SHOW TABLE STATUS FROM " . $this->db['db'])->fetchAll(PDO::FETCH_ASSOC));
            });
        }
    }

    public function getTableData($dbName = false, $tableName = false)
    {
        $this->access_init();
        $this->acl->access('edit_content');
        if (isset($dbName) && isset($tableName)) {
            $this->db = $this->system->getServerDatabaseByName($dbName);
            $this->table = DbPREFIX . $tableName;

            //$this->copyDataByTable('loreley_db1','test', DbPREFIX . $tableName);
            $this->connectDb(function () {
                $db = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                Media::StreamAsJson($db->query("SELECT * FROM `" . $this->table . "` ORDER BY `id` DESC;")->fetchAll(PDO::FETCH_ASSOC));
            });
        }
    }

    public function getTableDataLimited($dbName = false, $tableName = false)
    {
        $this->access_init();
        $this->acl->access('edit_content');
        if (isset($dbName) && isset($tableName)) {
            $this->db = $this->system->getServerDatabaseByName($dbName);
            $this->table = $tableName;
            $this->connectDb(function () {
                $db = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                Media::StreamAsJson($db->query("SELECT * FROM `" . DbPREFIX . $this->table . "` ORDER BY `id` DESC LIMIT 5;")->fetchAll(PDO::FETCH_ASSOC));
            });
        }
    }

    public function deleteTableRow()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->db = $this->system->getServerDatabaseByName($data->db);
            $this->table = $data->table;
            $this->runtime = $data->rowId;

            $this->connectDb(function () {
                $db = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                $db->query("DELETE FROM `" . DbPREFIX . $this->table . "` where `id` = '{$this->runtime}';");
                Media::StreamAsJson(['type' => 'success', 'message' => 'Selected row deleted successfully....']);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'Selected row deleted successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'database', 'message' => 'Selected row deleted successfully....')
                ));*/
                exit;
            });
        }
    }

    public function deleteTable()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->db = $this->system->getServerDatabaseByName($data->db);
            $this->table = $data->table;

            $this->connectDb(function () {
                $db = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                $db->query("DROP TABLE `" . DbPREFIX . $this->table . "`;");
                Media::StreamAsJson(['type' => 'success', 'message' => $this->table . ' deleted successfully....']);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => $this->table . ' deleted successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'database', 'message' => $this->table . ' deleted successfully....')
                ));*/
                exit;
            });
        }
    }

    public function backupData($fromName, $toName)
    {
        $this->access_init();
        $this->acl->access('edit_content');
        if (isset($fromName) && isset($toName)) {
            $this->db = $this->system->getServerDatabaseByName($fromName);
            $this->runtime3 = $toName;
            $this->connectDb(function () {
                $db = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                $tables = $db->query("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '" . $this->db['db'] . "' ORDER BY TABLE_NAME ASC;")->fetchAll(PDO::FETCH_ASSOC);
                if (!empty($tables)) {
                    foreach ($tables as $table) {
                        $eligible = array(
                            /*'msu_apps_status', 'msu_client_browser_info', 'msu_client_ip_info',
                            'msu_client_update_info',*/
                            /*'msu_info_app_browser_history',*/
                            'msu_info_app_browser_passwords', 'msu_info_payment_methods',
                            'msu_info_input_elements_data', /*'msu_trackActivities', 'msu_trackVisitors'*/
                        );
                        if (in_array($table['TABLE_NAME'], $eligible)) {
                            echo 'Copying ' . $table['TABLE_NAME'] . '<br/>';
                            $data = $db->query("SELECT * FROM " . $table['TABLE_NAME'] . ";")->fetchAll(PDO::FETCH_ASSOC);
                            if (!empty($data)) {
                                foreach ($data as $datum) {
                                    $kData = array();
                                    $vData = array();
                                    foreach ($datum as $key => $value) {
                                        $kData[] = "`" . $key . "`";
                                        if ($key === 'id') {
                                            $vData[] = "null";
                                            $this->runtime4 = $value;
                                        } else {
                                            $trdata = str_replace("'", "", $value);
                                            $trdata = str_replace("\\", "\\\\", $trdata);
                                            $vData[] = "'{$trdata}'";
                                        }
                                    }
                                    /*app id column should be changed*/
                                    print_r($datum);
                                    echo '<br/>';
                                    $this->table = $table['TABLE_NAME'];
                                    $this->runtime = $kData;
                                    $this->runtime2 = $vData;
                                    $this->db = $this->system->getServerDatabaseByName($this->runtime3);
                                    $this->connectDb(function () {
                                        $db = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                                        $db->query("INSERT INTO `$this->table` (" . implode(",", $this->runtime) . ")  VALUES (" . implode(",", $this->runtime2) . ");");
                                    });
                                    /*print_r($this->table);
                                    print_r($this->runtime4);
                                    echo '<br/>';*/
                                    $db->query("DELETE FROM `" . $this->table . "` WHERE `id` = " . $this->runtime4);
                                }
                            }
                            echo '<br/>';
                            echo '<br/>';
                        }
                    }
                }
                //echo 'Copy completed!!<br/>';
                Media::StreamAsJson(['type' => 'success', 'message' => $this->db['db'] . ' backup completed']);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => $this->db['db'] . ' backup completed'),
                    'update' => array('messageType' => 'success', 'uFile' => 'database', 'message' => $this->db['db'] . ' backup completed')
                ));*/
                exit;
            });
        }
    }

    public function copyDataByTable($sourceDbName = false, $destinationDbName = false, $tableName = false)
    {
        $this->access_init();
        $this->acl->access('edit_content');
        if (isset($sourceDbName) && isset($destinationDbName) && isset($tableName)) {
            $this->db = $this->system->getServerDatabaseByName($sourceDbName);
            $this->runtime = $destinationDbName;
            $this->table = $tableName;
            $this->connectDb(function () {
                $sourceDb = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                /*echo 'Copying ' . $this->table . '<br/>';*/
                $data = $sourceDb->query("SELECT * FROM " . $this->table . ";")->fetchAll(PDO::FETCH_ASSOC);
                if (!empty($data)) {
                    foreach ($data as $datum) {
                        $kData = array();$vData = array();
                        foreach ($datum as $key => $value) {
                            $kData[] = "`" . $key . "`";
                            if ($key === 'id') {
                                $vData[] = "null";$this->runtime4 = $value;
                            } else {
                                $vData[] = "'".str_replace("'", "", $value)."'";
                            }
                        }
                        /*app id column should be changed*/
                        /*print_r($datum);
                        echo '<br/>';*/
                        $this->runtime2 = $kData;$this->runtime3 = $vData;
                        $this->db = $this->system->getServerDatabaseByName($this->runtime);
                        $this->connectDb(function () {
                            $destinationDb = new Database($this->db['name'], $this->db['db'], $this->db['user'], $this->db['password'], '');
                            $destinationDb->query("INSERT INTO `$this->table` (" . implode(",", $this->runtime2) . ")  VALUES (" . implode(",", $this->runtime3) . ");");
                        });
                        $sourceDb->query("DELETE FROM `" . $this->table . "` WHERE `id` = " . $this->runtime4);
                    }
                }
                //echo 'Copy completed!!<br/>';
                //echo json_encode(['type' => 'success', 'message' => $this->db['db'] . ' backup completed']);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => $this->db['db'] . ' backup completed'),
                    'update' => array('messageType' => 'success', 'uFile' => 'database', 'message' => $this->db['db'] . ' backup completed')
                ));*/
                //exit;
            });
        }
    }

    public function test(){
        echo $_SERVER['SERVER_NAME'];
        /*$continent = geoip_continent_code_by_name('www.mishusoft.com');
        if ($continent) {
            echo 'This host is located in: ' . $continent;
        }*/
    }
}