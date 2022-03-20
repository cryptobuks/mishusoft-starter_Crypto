<?php

namespace Mishusoft\Storage\FileSystem;

use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Log;

class CSV extends FileSystem implements TypeBasedFileManagementInterface
{
    /**
     * @param string $file
     * @param string $delimiter
     * @return array
     */
    public static function readCsvFile(string $file, string $delimiter): array
    {
        $data = [];
        if (self::isExists($file)) {
            $handle = fopen($file, "rb");
            if (is_resource($handle)) {
                $csv_headers = fgetcsv($handle, 4000, $delimiter);
                while ($row = fgetcsv($handle, 4000, $delimiter)) {
                    $data[] = array_combine($csv_headers, $row);
                }

                fclose($handle);
                return $data;
            }

            Log::info('Can"t open the file.');
        }

        return $data;
    }

    public static function emit()
    {
        // TODO: Implement emit() method.
    }

    public static function emitFile()
    {
        // TODO: Implement emitFile() method.
    }

    public static function parse()
    {
        // TODO: Implement parse() method.
    }

    public static function parseFile()
    {
        // TODO: Implement parseFile() method.
    }
}
