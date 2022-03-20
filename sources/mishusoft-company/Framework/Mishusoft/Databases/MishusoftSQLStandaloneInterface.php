<?php

namespace Mishusoft\Databases;

interface MishusoftSQLStandaloneInterface extends MishusoftSQLStandalone\CommonStructureInterface
{
    /**
     * Create error message
     *
     * @param int $code Error code
     * @param string $message Error message
     */
    public static function error(int $code, string $message): void;

    /**
     * Select database with name
     *
     * @param string $database_name Database name
     * @return MishusoftSQLStandalone\TableInterface
     */
    public function select(string $database_name): MishusoftSQLStandalone\TableInterface;

    /**
     * Create new database
     *
     * @param string $database_name Name for new database
     * @return void
     */
    public function create(string $database_name):void;

    /**
     * Rename database name
     *
     * @param string $old_database_name Old name of database
     * @param string $new_database_name New name of database
     * @return bool
     */
    public function rename(string $old_database_name, string $new_database_name): bool;

    /**
     * Make empty any database
     *
     * @param string $database_name Database name
     * @return void
     */
    public function empty(string $database_name): void;
}
