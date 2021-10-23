<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use DOMDocument;
use DOMLocator;
use GeoIp2\Database\Reader;
use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Framework\Chipsets\Http\IP;
use Mishusoft\Framework\Drivers\Controller;
use function Mishusoft\Framework\Globals\preOutput;
use function Mishusoft\Framework\Globals\preVarDump;

class developmentController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return mixed
     */
    public function index()
    {
        // TODO: Implement index() method.
        return 'test page';
    }

    public function phpinfo()
    {
        phpinfo();
    }


    public function apache()
    {
        //var_dump($_SERVER['SERVER_SOFTWARE']);

        //$ver = explode(" ",$_SERVER["SERVER_SOFTWARE"],3);
        //var_dump($ver);
        //echo $ver;

        //$version = apache_get_version();
        //echo "$version\n";
        //preOutput(explode(' ', apache_get_version()));

        /*$str = "Welcome to W3Schools";
        $pattern = "/w3schools/i";
        preg_match($pattern, $str, $matches, PREG_OFFSET_CAPTURE);
        print_r($matches);*/

        /*Server Apache/2.4.43 (Unix) OpenSSL/1.1.1g PHP/7.4.8*/
        echo $_SERVER['SERVER_SOFTWARE'];
        echo "<br/>checking for apache!!<br/>";
        if (preg_match("/apache/i", strtolower($_SERVER["SERVER_SOFTWARE"]))) {
            echo "apache matched!!<br/>";
            echo str_replace('/', ' ', substr($_SERVER["SERVER_SOFTWARE"], 0, 20));
            exit();
        } else {
            echo "checking for serverLiteSpeed!!<br/>";
            /*serverLiteSpeed*/
            if (preg_match("/litespeed/i", strtolower($_SERVER["SERVER_SOFTWARE"]))) {
                $version = shell_exec('cat /usr/local/lsws/VERSION');
                echo "LiteSpeed matched!!<br/>";
                echo $_SERVER["SERVER_SOFTWARE"] . ' ' . $version;
                exit();
            } else {
                echo $_SERVER["SERVER_SOFTWARE"];
            }
        }
    }

    public function global_vars()
    {
        echo 'COOKIE<pre>';
        print_r($_COOKIE);
        echo '</pre>';
        echo 'ENV<pre>';
        print_r($_ENV);
        echo '</pre>';
        echo 'FILES<pre>';
        print_r($_FILES);
        echo '</pre>';
        echo 'GET<pre>';
        print_r($_GET);
        echo '</pre>';
        echo 'POST<pre>';
        print_r($_POST);
        echo '</pre>';
        echo 'REQUEST<pre>';
        print_r($_REQUEST);
        echo '</pre>';
        echo 'SERVER<pre>';
        print_r($_SERVER);
        echo '</pre>';


        var_dump(http_response_code());
    }

    public function mongodb()
    {
        // connect to mongodb
        /*$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

        echo "Connection to database successfully";
        preVarDump($manager);*/
        // select a database
        //$db = $m->mydb;

        //echo "Databases mydb selected";
    }

    public function geoip()
    {

// This creates the Reader object, which should be reused across
        // lookups.


        try {
            $reader = new Reader(MS_STORAGE_PATH . "GeoIP/GeoLite2-City.mmdb");
        } catch (InvalidDatabaseException $e) {
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => $e->getMessage())));
            echo $e->getMessage();
            exit();
        }

        // Replace "city" with the appropriate method for your database, e.g.,
        // "country".
        try {
            $record = $reader->city(IP::get());

            print($record->country->isoCode . "\n<br/>"); // 'US'
            print($record->country->name . "\n<br/>"); // 'United States'
            print($record->country->names['zh-CN'] . "\n<br/>"); // '美国'

            print($record->mostSpecificSubdivision->name . "\n<br/>"); // 'Minnesota'
            print($record->mostSpecificSubdivision->isoCode . "\n<br/>"); // 'MN'

            print($record->city->name . "\n<br/>"); // 'Minneapolis'

            print($record->postal->code . "\n<br/>"); // '55455'

            print($record->location->latitude . "\n<br/>"); // 44.9733
            print($record->location->longitude . "\n<br/>"); // -93.2323

            print($record->traits->network . "\n<br/>"); // '128.101.101.101/32'

            preOutput($record);
        } catch (AddressNotFoundException | InvalidDatabaseException $e) {
            preOutput($e);
        }
    }

    public function mishusoftdb()
    {
        echo 'mishusoft DB creation. <br/>';
        $db_dir_name = 'databases';
        if (is_dir(MS_DOCUMENT_ROOT . $db_dir_name)) {
            //preOutput(scandir(ROOT . $db_dir_name));
            $db_list = array_slice(scandir(MS_DOCUMENT_ROOT . $db_dir_name), 2);
            if (!empty($db_list)) {
                foreach ($db_list as $db) {
                    if (is_file(MS_DOCUMENT_ROOT . $db_dir_name . '/' . $db)) {
                        echo $db;
                        echo ' <br/>File Data : <br/>';
                        print_r(file_get_contents(MS_DOCUMENT_ROOT . $db_dir_name . '/' . $db));
                    }
                }
            } else {
                echo 'No database exists.';
                //echo ROOT . $db_dir_name.'/tst';
                //mkdir(ROOT . $db_dir_name.'/tst');
            }
        } else {
            mkdir(MS_DOCUMENT_ROOT . $db_dir_name);
            self::mishusoftdb();
        }
    }

    public function test()
    {
        $dom = new DOMDocument();
        $Locator = new DOMLocator();
        preOutput($dom);
        preOutput($Locator);
    }
}
