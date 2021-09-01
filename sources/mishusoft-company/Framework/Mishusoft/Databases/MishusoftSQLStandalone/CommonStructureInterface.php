<?php

namespace Mishusoft\Databases\MishusoftSQLStandalone;

interface CommonStructureInterface
{
    public const WHO_AM_I = "mishusoftsql";
    public const DB_FILE_FORMAT = "msdb";
    public const DB_TABLE_FILE_FORMAT = ".mstbl";

    public function delete(array|string $name): bool;

}