<?php

namespace Mishusoft\Drivers;

use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\HttpException\HttpResponseException;
use Mishusoft\Exceptions\JsonException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Framework;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Firewall;
use Mishusoft\Http\Runtime;
use Mishusoft\Utility\ArrayCollection;

class Session
{
    /**
     * @throws AddressNotFoundException
     * @throws ErrorException
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws InvalidDatabaseException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws \JsonException
     */
    public static function init(): void
    {
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
        if ((self::get('auth') === true)
            && self::get('RememberMe') === false) {
            self::sessionTime();
        }
    }

    /**
     * @throws ErrorException
     * @throws JsonException
     * @throws \JsonException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public static function validity(): void
    {
        if (self::get('auth') === false) {
            if (count(ArrayCollection::cleanArray($_GET, ["url"])) > 0) {
                Runtime::redirect(
                    'account/login?'
                    . Runtime::actualUrl("Your session time out. Please log in to continue.")
                );
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
     * @throws AddressNotFoundException
     * @throws \JsonException
     * @throws InvalidDatabaseException
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public static function sessionTime(): void
    {
        if (!self::get('time') || !defined('SESSION_TIME')) {
            Firewall::runtimeFailure(
                "Forbidden",
                [
                    "debug" => [
                        "file" => "NO-FILE-INTERNAL-MATTER",
                        "location" => 'Action file',
                        "description" => "Session Time is not set!!",
                    ],
                    "error" => ["description" => "You have no permission to access the requested url!!"],
                ]
            );
            Framework::terminate();
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

    public static function destroy(array|string $value = [])
    {
        if ($value) {
            if (is_array($value) && count($value)>0) {
                foreach ($value as $iValue) {
                    if (isset($_SESSION[$iValue])) {
                        unset($_SESSION[$iValue]);
                    }
                }
            } elseif (isset($_SESSION[$value])) {
                unset($_SESSION[$value]);
            }
        } else {
            session_destroy();
        }
    }

    /**
     * @param string $value
     * @param $source
     */
    public static function set(string $value, $source): void
    {
        if (!empty($value)) {
            $_SESSION[$value] = $source;
        }
    }

    /**
     * @param string $level
     * @throws ErrorException
     * @throws JsonException
     * @throws AddressNotFoundException
     * @throws \JsonException
     * @throws InvalidDatabaseException
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public static function access(string $level)
    {
        if (!self::get('auth')) {
            Firewall::runtimeFailure(
                "Forbidden",
                [
                    "debug" => [
                        "file" => "NO-FILE-INTERNAL-MATTER",
                        "location" => 'Action file',
                        "description" => "You have no permission to access the requested url!!",
                    ],
                    "error" => ["description" => "You have no permission to access the requested url!!"],
                ]
            );
            exit;
        }

        if (self::getLevel($level) > self::getLevel(self::get('level'))) {
            Firewall::runtimeFailure(
                "Forbidden",
                [
                    "debug" => [
                        "file" => "NO-FILE-INTERNAL-MATTER",
                        "location" => 'Action file',
                        "description" => "You have no permission to access the requested url!!",
                    ],
                    "error" => ["description" => "You have no permission to access the requested url!!"],
                ]
            );
            exit;
        }
    }

    /**
     * @param string $level
     * @return int
     * @throws ErrorException
     * @throws JsonException
     * @throws AddressNotFoundException
     * @throws \JsonException
     * @throws InvalidDatabaseException
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
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
                    "debug" => [
                        "file" => "NO-FILE-INTERNAL-MATTER",
                        "location" => 'Action file',
                        "description" => "You have no permission to access the requested url!!",
                        ],
                    "error" => ["description" => "You have no permission to access the requested url!!"],
                ]
            );
            exit;
        }

        return $role[$level];
    }

    /**
     * @param string $level
     * @return bool
     * @throws ErrorException
     * @throws JsonException
     * @throws AddressNotFoundException
     * @throws \JsonException
     * @throws InvalidDatabaseException
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public static function accessView(string $level): bool
    {
        if (!self::get('auth')) {
            return false;
        }

        self::sessionTime();

        return !(self::getLevel($level) > self::getLevel(self::get('level')));
    }

    /**
     * @param array $level
     * @param bool $noAdmin
     * @throws ErrorException
     * @throws JsonException
     * @throws AddressNotFoundException
     * @throws \JsonException
     * @throws InvalidDatabaseException
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public static function accessRestrict(array $level, bool $noAdmin = false): void
    {
        if (!self::get('auth')) {
            Firewall::runtimeFailure(
                "Forbidden",
                [
                    "debug" => [
                        "file" => "NO-FILE-INTERNAL-MATTER",
                        "location" => 'Action file',
                        "description" => "You have no permission to access the requested url!!",
                        ],
                    "error" => ["description" => "You have no permission to access the requested url!!"],
                ]
            );
            exit;
        }

        self::sessionTime();

        if (($noAdmin === false)
            && self::get('level') === 'admin') {
            return;
        }

        if (count($level)
            && in_array(self::get('level'), $level, true)) {
            return;
        }

        Firewall::runtimeFailure(
            "Forbidden",
            [
                "debug" => [
                    "file" => "NO-FILE-INTERNAL-MATTER",
                    "location" => 'Action file',
                    "description" => "You have no permission to access the requested url!!",
                    ],
                "error" => ["description" => "You have no permission to access the requested url!!"],
            ]
        );
    }

    /**
     * @param array $level
     * @param bool $noAdmin
     * @return bool
     * @throws ErrorException
     * @throws JsonException
     * @throws AddressNotFoundException
     * @throws \JsonException
     * @throws InvalidDatabaseException
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public static function accessViewRestrict(array $level, bool $noAdmin = false): bool
    {
        if (!self::get('auth')) {
            return false;
        }

        self::sessionTime();

        if (($noAdmin === false)
            && self::get('level') === 'admin') {
            return true;
        }

        if (count($level)
            && in_array(self::get('level'), $level, true)) {
            return true;
        }

        return false;
    }

    public function __destruct()
    {
    }
}
