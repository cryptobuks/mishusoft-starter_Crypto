<?php


namespace Mishusoft\Databases;

use Mishusoft\Databases\MishusoftSQLStandalone\TableInterface;

interface MishusoftSQLStandaloneInterface
{
    public const WHO_AM_I = "mishusoftsql";
    public const DB_FILE_FORMAT = "msdb";

    public static function error(int $code, string $message);

    public function select(string $database_name): TableInterface;

    public function create(string $database_name);

    public function rename(string $old_database_name, string $new_database_name);

    public function delete(string $database_name);

    public function empty(string $database_name);
}
