<?php

namespace Mishusoft\Framework\Drivers;

use Exception;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Libraries\Runtime;

class Session
{
    public static function init()
    {
        try {
            //required ini configuration
            session_name(DEFAULT_APP_NAME);
            if (!is_dir(MS_SYSTEM_TEMP_PATH . 'sessions')) {
                mkdir(MS_SYSTEM_TEMP_PATH . 'sessions', 0777, true);
                exec('chmod -R 777 ' . MS_SYSTEM_TEMP_PATH . 'sessions');
            }
            session_save_path(MS_SYSTEM_TEMP_PATH . 'sessions');
            /*chmod(TempFolder .'sessions',0777);*/
            session_cache_expire(600);
            /*ensure permission for current session file*/
            /*if (!file_exists(TempFolder .'sessions' . DS . session_name())){
                fopen(TempFolder .'sessions' . DS . session_name(), 0777);
            }
            if (!is_readable(TempFolder .'sessions' . DS . session_name())){
                chmod(TempFolder .'sessions' . DS . session_name(), 0777);
            }*/
            session_start();
            //session_id(uniqid());
            if (Session::get('auth') === TRUE) {
                if (Session::get('RememberMe') === FALSE) {
                    self::sessionTime();
                }
            }
        } catch (Exception $e) {
            Firewall::runtimeFailure("Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "Session could not start!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"]
                ]);
            exit();
        }
    }

    public static function validity()
    {
        if (Session::get('auth') === false) {
            if (count(_Array::cleanArray($_GET,array("url"))) > 0) {
                Runtime::redirect('account/login?' . Runtime::actualUrl("Your session time out. Please log in to continue."));
            } else {
                Runtime::redirect('account/login?' . Runtime::actualUrl());
            }
        }
    }

    public static function get($value)
    {
        if (isset($_SESSION[$value]))
            return $_SESSION[$value];
        else {
            return false;
        }
    }

    public static function sessionTime()
    {
        if (!self::get('time') || !defined('SESSION_TIME')) {
            Firewall::runtimeFailure("Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "Session Time is not set!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"]
                ]);
            exit();
        }

        if (SESSION_TIME === 0) {
            return;
        }

        if ((time() - self::get('time')) > (SESSION_TIME * 60)) {
            self::destroy();
            Runtime::redirect('account/login?' . Runtime::actualUrl());
        } else {
            self::set('time', time());
        }
    }

    public static function destroy($value = FALSE)
    {
        if ($value) {
            if (is_array($value)) {
                for ($i = 0; $i < count($value); $i++) {
                    if (isset($_SESSION[$value[$i]])) {
                        unset($_SESSION[$value[$i]]);
                    }
                }
            } else {
                if (isset($_SESSION[$value])) {
                    unset($_SESSION[$value]);
                }
            }
        } else {
            session_destroy();
        }
    }

    /**
     * @param string $value
     * @param $source
     */
    public static function set(string $value, $source)
    {
        if (!empty($value))
            $_SESSION[$value] = $source;
    }

    public static function access(string $level)
    {
        if (!self::get('auth')) {
            Firewall::runtimeFailure("Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "You have no permission to access the requested url!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"]
                ]);
            exit;
        }

        if (self::getLevel($level) > self::getLevel(self::get('level'))) {
            Firewall::runtimeFailure("Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "You have no permission to access the requested url!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"]
                ]);
            exit;
        }
    }

    public static function getLevel(string $level): int
    {

        /*$db = new Database(DbHOST, DbNAME, DbUSER, DbPASS, DbCHAR);
        $roles = $db->query('SELECT * FROM `' . DbPREFIX . 'roles`;')->fetch(PDO::FETCH_ASSOC);
        print_r($roles);*/
        $role['root'] = 1;
        $role['admin'] = 2;
        $role['stuff'] = 3;
        $role['client'] = 4;

        if (!array_key_exists($level, $role)) {
            Firewall::runtimeFailure("Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "You have no permission to access the requested url!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"]
                ]);
            exit;
        } else {
            return $role[$level];
        }
    }

    public static function accessView(string $level): bool
    {
        if (!self::get('auth')) {
            return FALSE;
        }

        self::sessionTime();

        if (self::getLevel($level) > self::getLevel(self::get('level'))) {
            return FALSE;
        }

        return TRUE;
    }

    public static function accessRestrict(array $level, $noAdmin = FALSE)
    {
        if (!self::get('auth')) {
            Firewall::runtimeFailure("Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "You have no permission to access the requested url!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"]
                ]);
            exit;
        }

        self::sessionTime();

        if ($noAdmin === FALSE) {
            if (self::get('level') === 'admin') {
                return;
            }
        }

        if (count($level)) {
            if (in_array(self::get('level'), $level)) {
                return;
            }
        }

        Firewall::runtimeFailure("Forbidden",
            [
                "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "You have no permission to access the requested url!!"],
                "error" => ["description" => "You have no permission to access the requested url!!"]
            ]);
    }

    public static function accessViewRestrict(array $level, $noAdmin = FALSE): bool
    {
        if (!Session::get('auth')) {
            return FALSE;
        }

        Session::sessionTime();

        if ($noAdmin === FALSE) {
            if (Session::get('level') === 'admin') {
                return TRUE;
            }
        }

        if (count($level)) {
            if (in_array(Session::get('level'), $level)) {
                return TRUE;
            }
        }

        return FALSE;
    }

    function __destruct()
    {

    }
}
