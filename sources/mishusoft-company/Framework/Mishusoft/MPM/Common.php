<?php

namespace Mishusoft\MPM;

use Mishusoft\Exceptions;
use Mishusoft\MPM;
use Mishusoft\Storage\FileSystem;
use Mishusoft\Utility\Implement;

class Common extends MPM
{
    /**
     * @return string
     */
    public static function httpAPIRoutesFile(): string
    {
        return self::dFile(self::configDataFile('MPM', 'http.api'));
    }


    /**
     * @throws Exceptions\RuntimeException
     */
    public static function automatedUpdateHttpAPIRoutes(string $rootDirectory): void
    {
        $configs = [];
        if (count(FileSystem::list($rootDirectory, 'file')) > 0) {
            foreach (FileSystem::list($rootDirectory, 'file') as $filename) {
                $filenameOriginal = $rootDirectory . $filename;
                if (FileSystem::fileExt($filenameOriginal) === 'json') {
                    $configs[FileSystem::fileName($filenameOriginal)] = [
                        'lastModifiedAt' => filemtime($filenameOriginal),
                        'configuration' => (array)Implement::jsonDecode(
                            FileSystem::read($filenameOriginal),
                            IMPLEMENT_JSON_IN_ARR
                        )
                    ];
                }
            }

            //sort configuration data
            array_multisort($configs, SORT_ASC);
            ksort($configs, SORT_ASC);

            if (file_exists(self::httpAPIRoutesFile()) === true) {
                //Rewrite file with updated configuration
                FileSystem\Yaml::emitFile(
                    self::httpAPIRoutesFile(),
                    array_filter(array_merge_recursive(
                        //Read old data from exist file
                        FileSystem\Yaml::parseFile(self::httpAPIRoutesFile()),
                        array_map(static function ($details): array {
                            if (filemtime(self::httpAPIRoutesFile()) < $details['lastModifiedAt']) {
                                //Remove file, if we need to rewrite file with updated configuration
                                FileSystem::remove(self::httpAPIRoutesFile());
                                return $details['configuration'];
                            }
                            return [];
                        }, array_values($configs))
                    ))
                );
            } else {
                //create new directory, if not found in file system
                FileSystem::makeDirectory(dirname(self::httpAPIRoutesFile()));
                //create new file with new configuration
                FileSystem\Yaml::emitFile(
                    self::httpAPIRoutesFile(),
                    array_map(
                        static fn ($details): array => $details['configuration'],
                        array_values($configs)
                    )
                );
            }
        }
    }
}
