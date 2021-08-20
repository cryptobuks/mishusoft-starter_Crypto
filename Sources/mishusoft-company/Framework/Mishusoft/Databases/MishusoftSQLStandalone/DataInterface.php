<?php

namespace Mishusoft\Databases\MishusoftSQLStandalone;

interface DataInterface
{
    public const DB_TABLE_FILE_FORMAT = ".mstbl";

    /**
     * @param array $options
     * @return array
     */
    public function get(array $options): array;

    /**
     * @return int
     */
    public function getLastInsertedId(): int;

    /**
     * @param array $haystack
     * @return bool
     */
    public function insert(array $haystack): bool;

    /**
     * @param array $options
     * @return bool
     */
    public function update(array $options): bool;

    /**
     * @param array $haystack
     * @return bool
     */
    public function delete(array $haystack): bool;
}