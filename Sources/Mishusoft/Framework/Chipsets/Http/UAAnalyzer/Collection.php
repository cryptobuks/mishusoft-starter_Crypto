<?php


namespace Mishusoft\Framework\Chipsets\Http\UAAnalyzer;

use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Utility\_JSON;

abstract class Collection
{

    abstract public function all():array;
    //abstract public function query(string $category, string $identifier):array;
    //abstract public function samples():array;
    //abstract public function getDetails():array;


    /**
     * Check database are updated.
     *
     * @param array  $database Loaded database.
     * @param string $filename Database file name.
     *
     * @return boolean
     * @throws \JsonException Throw exception when json process error occurred.
     */
    protected function isUpdateDatabase(array $database, string $filename): bool
    {
        return ((is_readable($filename) === true)
                && (FileSystem::read($filename) !== '')
                && (count(array_keys($database)) > count(array_keys(_JSON::decodeToArray(FileSystem::read($filename))))))
            || (strlen(_JSON::encodeToString($database)) > strlen(FileSystem::read($filename)));
    }//end isUpdateDatabase()



    /**
     * Quote any string
     *
     * @param string $string String for quote.
     *
     * @return string
     */
    protected function quote(string $string): string
    {
        return preg_quote($string, PREG_QUOTE_DEFAULT_SEPARATOR);
    }//end quote()
}
