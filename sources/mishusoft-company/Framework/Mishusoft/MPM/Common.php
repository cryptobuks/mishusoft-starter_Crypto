<?php

    namespace Mishusoft\MPM;

    use Mishusoft\Exceptions;
    use Mishusoft\MPM;
    use Mishusoft\Storage;
    use Mishusoft\Storage\FileSystem;
    use Mishusoft\System\Log;

    class Common extends MPM
    {
        /**
         * @return string
         */
        public static function httpAPIRoutesFile(): string
        {
            return dFile(configs_data_file('MPM', 'http.api'));
        }

        /**
         * @return string
         */
        public static function httpAPIRoutesSettingsFile(): string
        {
            return dFile(configs_data_file('MPM', 'http.api.settings'));
        }

        public static function getRoutes(): array
        {
            // read settings if need to update new routes
            return array_map_assoc(
                static fn ($details): array => [$details['group'] => $details],
                parse_msf_file(self::httpAPIRoutesFile()),
            );
        }


        /**
         * @throws Exceptions\RuntimeException
         */
        public static function automatedUpdateHttpAPIRoutes(string $rootDirectory): void
        {
            // a:0:{}

            if (!file_exists(self::httpAPIRoutesFile())) {
                $filesList = query($rootDirectory);

                if (count($filesList) > 0) {
                    //create new directory, if not found in file system
                    FileSystem::makeDirectory(dirname(self::httpAPIRoutesFile()));
                    //create new file with new configuration
                    emit_msf_file(
                        self::httpAPIRoutesFile(),
                        array_map(
                            static fn ($details): array => $details['configuration'],
                            array_values(self::queryHttpAPIRoutes($filesList))
                        )
                    );

                    // add settings
                    emit_msf_file(
                        self::httpAPIRoutesSettingsFile(),
                        ['autoUpdate' => 0]
                    );
                }
            }

            if (file_exists(self::httpAPIRoutesFile()) && file_exists(self::httpAPIRoutesSettingsFile())) {
                // read settings if need to update new routes
                $settings = parse_msf_file(self::httpAPIRoutesSettingsFile());

                if (array_key_exists('autoUpdate', $settings) && $settings['autoUpdate'] === 1) {
                    emit_msf_file(
                        self::httpAPIRoutesFile(),
                        array_filter(
                            array_merge_recursive(
                                parse_msf_file(self::httpAPIRoutesFile()),
                                array_map(static function ($details): array {
                                    if (filemtime(self::httpAPIRoutesFile()) < $details['lastModifiedAt']) {
                                        //Remove file, if we need to rewrite file with updated configuration
                                        FileSystem::remove(self::httpAPIRoutesFile());
                                        return $details['configuration'];
                                    }
                                    return [];
                                }, array_values(self::queryHttpAPIRoutes(query($rootDirectory))))
                            )
                        )
                    );
                }
            }
        }

        /**
         * @param array<int, string> $filesList
         *
         * @return array<string, array<string, mixed>>
         */
        private static function queryHttpAPIRoutes(array $filesList): array
        {
            $configs = [];

            foreach ($filesList as $filenameOriginal) {
                // skip trash folder in dev mode
                if (!contains($filenameOriginal, 'trash') && get_file_ext($filenameOriginal) === 'json') {
                    $content                              = is_string(read_file_sync($filenameOriginal)) ? read_file_sync($filenameOriginal) : '[]';
                    $configs[basename($filenameOriginal)] = [
                        'lastModifiedAt' => lastModifiedAt($filenameOriginal),
                        'configuration'  => decode_from_json($content, JSON_LOOSE_TYPE),
                    ];
                }
            }

            //sort configuration data
            array_multisort($configs, SORT_ASC);
            ksort($configs, SORT_ASC);
            return $configs;
        }

        /**
         * @return string[]
         */
        public static function allHttpCommunicationDirectories(): array
        {
            $rootDirectories = [];

            /*
             * We need to check Embedded Web Url Root path
             * if exists this path,
             * The system will be executed EmbeddedWebUrl applications.
             *
             * */

            //verify core directory
            if (file_exists(Storage::communicationHttpCoreDirectory())) {
                $rootDirectories[] = Storage::communicationHttpCoreDirectory();
            }

            //verify user defined directory
            if (file_exists(Storage::communicationHttpUserDirectory())) {
                $rootDirectories[] = Storage::communicationHttpUserDirectory();
            }

            return $rootDirectories;
        }

        /**
         * @param string[] $rootDirectories
         *
         * @return void
         * @throws \Mishusoft\Exceptions\PermissionRequiredException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public static function checkUpdateAndPermissions(array $rootDirectories): void
        {
            $limitedDirectories = [];

            // fire action for every http communication directory
            /** @var array<int, string> $rootDirectories */
            if (count($rootDirectories) > 0) {
                foreach ($rootDirectories as $rootDirectory) {
                    Log::info(sprintf('Check %s directory existent.', $rootDirectory));
                    // check read permission of current root directory
                    // sometimes permitted will be limited as per security reason
                    if (is_readable($rootDirectory)) {
                        Log::info(sprintf('%s directory is readable.', $rootDirectory));
                        /*
                         * We need to check Embedded Web Url (Built-In web interface) root path,
                         * if exists this path,
                         * The System will be executed all active splitters
                         * that is located at <APP_DIRECTORY>/embeddedWebUrlDirectory
                         * */
                        self::automatedUpdateHttpAPIRoutes($rootDirectory);
                    } else {
                        $limitedDirectories[] = $rootDirectory;
                    }
                }

                if (count($limitedDirectories) > 0) {
                    Log::info(sprintf('Unable to read %1$s', implode(', ', $limitedDirectories)));
                    throw new Exceptions\PermissionRequiredException(
                        sprintf('Unable to read %1$s', implode(', ', $limitedDirectories))
                    );
                }
            }
        }
    }
