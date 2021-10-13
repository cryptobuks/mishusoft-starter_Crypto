<?php

namespace Mishusoft\Interfaces\Chipsets\Databases\MishusoftSQLStandalone;

interface TableInterface
{
    public const dbFileFormat = ".msdb";
    public const dbTableFileFormat = ".mstbl";

    public function create($table_name);

    public function read(string $table_name): DataInterface;

    public function rename(string $old_name, string $new_name);

    public function delete($table_name);

    public function update();


}
