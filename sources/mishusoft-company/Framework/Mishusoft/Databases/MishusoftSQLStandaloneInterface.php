<?php


namespace Mishusoft\Databases;

interface MishusoftSQLStandaloneInterface extends MishusoftSQLStandalone\CommonStructureInterface
{
    public static function error(int $code, string $message);

    public function select(string $database_name): MishusoftSQLStandalone\TableInterface;

    public function create(string $database_name);

    public function rename(string $old_database_name, string $new_database_name);

    public function empty(string $database_name);
}
