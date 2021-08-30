<?php

namespace Mishusoft\MPM;

use Mishusoft\Exceptions;
use Mishusoft\MPM;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Log;
use Mishusoft\Utility\JSON;

class Common extends MPM
{
    /**
     * @return string
     */
    public static function qualifiedAPIRoutesFile(): string
    {
        return self::dFile(self::dataFile('MPM', 'QualifiedAPIRoutes'));
    }


    /**
     * @throws Exceptions\JsonException
     * @throws Exceptions\RuntimeException
     */
    public static function autoUpdateQualifiedAPIRoutes(): void
    {
        /*
         * Auto update splitters configurations
         */
        if (!file_exists(self::qualifiedAPIRoutesFile())) {
            $configs = [];
            Log::info(sprintf('Count all exists files from %s directory.', Storage::qualifiedAPIRoutesDirectory()));
            if (count(FileSystem::list(Storage::qualifiedAPIRoutesDirectory(), 'file')) > 0) {
                foreach (FileSystem::list(Storage::qualifiedAPIRoutesDirectory(), 'file') as $filename) {
                    if (pathinfo($filename, PATHINFO_EXTENSION) === 'json') {
                        $configs[] = JSON::decodeToArray(
                            FileSystem::read(Storage::qualifiedAPIRoutesDirectory().$filename)
                        );
                    }
                }

                array_multisort($configs, SORT_ASC);
                ksort($configs, SORT_ASC);


                Log::info(
                    sprintf(
                        'Remove old qualified api routes file from %s directory.',
                        Storage::dataDriveStoragesPath()
                    )
                );
                FileSystem::remove(self::qualifiedAPIRoutesFile());
                Log::info(
                    sprintf('Write new qualified api routes file in %s directory.', Storage::dataDriveStoragesPath())
                );
                FileSystem\Yaml::emitFile(self::qualifiedAPIRoutesFile(), $configs);
            }
        }
    }
}
