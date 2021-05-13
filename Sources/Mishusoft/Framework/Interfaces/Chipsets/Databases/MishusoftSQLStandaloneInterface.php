<?php


namespace Mishusoft\Framework\Interfaces\Chipsets\Databases;


use Mishusoft\Framework\Interfaces\Chipsets\Databases\MishusoftSQLStandalone\TableInterface;

interface MishusoftSQLStandaloneInterface
{
    const who_am_i = "mishusoftsql";
    const version = "1.0 (beta)";
    const dbFileFormat = ".msdb";

    public static function error(int $code, string $message);

    public function select(string $database_name): TableInterface;

    public function create(string $database_name);

    public function rename(string $old_database_name, string $new_database_name);

    public function delete(string $database_name);

    public function empty(string $database_name);
}


