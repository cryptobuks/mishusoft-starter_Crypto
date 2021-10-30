<?php

namespace Mishusoft\Databases\MishusoftSQLStandalone;

interface TableInterface extends CommonStructureInterface
{
    /**
     * @param mixed[]|string $table_name
     */
    public function create($table_name);

    public function read(string $table_name): DataInterface;

    public function rename(string $old_name, string $new_name);

    public function update(array $options): bool;
}
