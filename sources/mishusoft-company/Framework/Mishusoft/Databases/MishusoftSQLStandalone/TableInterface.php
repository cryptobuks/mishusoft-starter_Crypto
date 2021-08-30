<?php

namespace Mishusoft\Databases\MishusoftSQLStandalone;

interface TableInterface
{
    public const DB_TABLE_FILE_FORMAT = ".mstbl";

    public function create(array|string $table_name);

    public function read(string $table_name): DataInterface;

    public function rename(string $old_name, string $new_name);

    public function delete(array|string $table_name);

    public function update();
}
