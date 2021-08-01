<?php

namespace Mishusoft\Drivers;

use Exception;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\JsonException;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Firewall;
use Mishusoft\Libraries\Runtime;
use Mishusoft\Utility\ArrayCollection;

class Session
{
    /**
     * @throws ErrorException
     * @throws JsonException
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public static function init(): void
    {
        try {
            //required ini configuration
            session_name(DEFAULT_APP_NAME);
            if (!file_exists(Storage::frameworkSessionsPath())) {
                FileSystem::makeDirectory(Storage::frameworkSessionsPath());
            }
            session_save_path(Storage::frameworkSessionsPath());
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
            if (self::get('auth') === true) {
                if (self::get('RememberMe') === false) {
                    self::sessionTime();
                }
            }
        } catch (Exception $e) {
            Firewall::runtimeFailure(
                "Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "Session could not start!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"],
                ]
            );
            exit();
        }
    }

    public static function validity(): void
    {
        if (self::get('auth') === false) {
            if (count(ArrayCollection::cleanArray($_GET, ["url"])) > 0) {
                Runtime::redirect('account/login?' . Runtime::actualUrl("Your session time out. Please log in to continue."));
            } else {
                Runtime::redirect('account/login?' . Runtime::actualUrl());
            }
        }
    }

    public static function get($value)
    {
        if (isset($_SESSION[$value])) {
            return $_SESSION[$value];
        }

        return false;
    }

    /**
     * @throws ErrorException
     * @throws JsonException
     * @throws \JsonException
     */
    public static function sessionTime(): void
    {
        if (!self::get('time') || !defined('SESSION_TIME')) {
            Firewall::runtimeFailure(
                "Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "Session Time is not set!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"],
                ]
            );
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

    public static function destroy($value = false)
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
        if (!empty($value)) {
            $_SESSION[$value] = $source;
        }
    }

    /**
     * @throws ErrorException
     * @throws JsonException
     * @throws \JsonException
     */
    public static function access(string $level)
    {
        if (!self::get('auth')) {
            Firewall::runtimeFailure(
                "Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "You have no permission to access the requested url!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"],
                ]
            );
            exit;
        }

        if (self::getLevel($level) > self::getLevel(self::get('level'))) {
            Firewall::runtimeFailure(
                "Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "You have no permission to access the requested url!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"],
                ]
            );
            exit;
        }
    }

    /**
     * @throws ErrorException
     * @throws \JsonException
     * @throws JsonException
     */
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
            Firewall::runtimeFailure(
                "Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "You have no permission to access the requested url!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"],
                ]
            );
            exit;
        } else {
            return $role[$level];
        }
    }

    /**
     * @throws \JsonException
     * @throws ErrorException
     * @throws JsonException
     */
    public static function accessView(string $level): bool
    {
        if (!self::get('auth')) {
            return false;
        }

        self::sessionTime();

        if (self::getLevel($level) > self::getLevel(self::get('level'))) {
            return false;
        }

        return true;
    }

    /**
     * @throws \JsonException
     * @throws ErrorException
     * @throws JsonException
     */
    public static function accessRestrict(array $level, $noAdmin = false)
    {
        if (!self::get('auth')) {
            Firewall::runtimeFailure(
                "Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "You have no permission to access the requested url!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"],
                ]
            );
            exit;
        }

        self::sessionTime();

        if ($noAdmin === false) {
            if (self::get('level') === 'admin') {
                return;
            }
        }

        if (count($level)) {
            if (in_array(self::get('level'), $level, true)) {
                return;
            }
        }

        Firewall::runtimeFailure(
            "Forbidden",
            [
                "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "You have no permission to access the requested url!!"],
                "error" => ["description" => "You have no permission to access the requested url!!"],
            ]
        );
    }

    /**
     * @throws ErrorException
     * @throws JsonException
     * @throws \JsonException
     */
    public static function accessViewRestrict(array $level, $noAdmin = false): bool
    {
        if (!self::get('auth')) {
            return false;
        }

        self::sessionTime();

        if ($noAdmin === false) {
            if (self::get('level') === 'admin') {
                return true;
            }
        }

        if (count($level)) {
            if (in_array(self::get('level'), $level, true)) {
                return true;
            }
        }

        return false;
    }

    public function __destruct()
    {
    }
}
