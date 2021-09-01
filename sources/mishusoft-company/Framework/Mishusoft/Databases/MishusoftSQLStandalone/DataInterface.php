<?php

namespace Mishusoft\Databases\MishusoftSQLStandalone;

interface DataInterface extends CommonStructureInterface
{
    public function get(array $options): array;

    public function getLastInsertedId(): int;

    public function insert(array $haystack): bool;

    public function update(array $options): bool;
}