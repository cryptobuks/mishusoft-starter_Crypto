<?php

namespace Mishusoft\MPM;

use Mishusoft\Exceptions;
use Mishusoft\MPM;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Log;
use Mishusoft\Utility\Implement;

class Common extends MPM
{
    /**
     * @return string
     */
    public static function qualifiedAPIRoutesFile(): string
    {
        return self::dFile(self::configDataFile('MPM', 'routes.api'));
    }


    /**
     * @throws Exceptions\RuntimeException
     */
    public static function autoUpdateQualifiedAPIRoutes(string $rootDirectory): void
    {
        $configs = [];
        if (count(FileSystem::list($rootDirectory, 'file')) > 0) {
            foreach (FileSystem::list($rootDirectory, 'file') as $filename) {
                if (file_exists($filename) && pathinfo($filename, PATHINFO_EXTENSION) === 'json') {
                    $configs[filemtime($filename)] = (array) Implement::jsonDecode(
                        FileSystem::read($rootDirectory . $filename),
                        IMPLEMENT_JSON_IN_ARR
                    );
                }
            }

            array_multisort($configs, SORT_ASC);
            ksort($configs, SORT_ASC);

            if (file_exists(self::qualifiedAPIRoutesFile()) === true) {
                if (array_key_exists(filemtime(self::qualifiedAPIRoutesFile()), array_keys($configs))) {
                    FileSystem::remove(self::qualifiedAPIRoutesFile());
                    $configs = array_merge_recursive(
                        FileSystem\Yaml::parseFile(self::qualifiedAPIRoutesFile()),
                        array_values($configs)
                    );
                    FileSystem\Yaml::emitFile(self::qualifiedAPIRoutesFile(), array_values($configs));
                }
            } else {
                FileSystem\Yaml::emitFile(self::qualifiedAPIRoutesFile(), array_values($configs));
            }
        }
    }
}
