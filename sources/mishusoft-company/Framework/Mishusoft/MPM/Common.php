<?php

namespace Mishusoft\MPM;

use Mishusoft\Exceptions;
use Mishusoft\MPM;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Log;
use Mishusoft\Utility\Debug;
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
        /*
         * Auto update splitters configurations
         */
        if (file_exists(self::qualifiedAPIRoutesFile()) === false) {
            $configs = [];
            Log::info(sprintf('Count all exists files from %s directory.', $rootDirectory));
            if (count(FileSystem::list($rootDirectory, 'file')) > 0) {
                foreach (FileSystem::list($rootDirectory, 'file') as $filename) {
                    if (pathinfo($filename, PATHINFO_EXTENSION) === 'json') {
                        $configs[] = (array) Implement::jsonDecode(
                            FileSystem::read($rootDirectory.$filename),
                            IMPLEMENT_JSON_IN_ARR
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
