<?php

    namespace Mishusoft\System\Framework;

    use Mishusoft\Storage;
    use Mishusoft\System\Time;

    trait Configuration
    {
        /**
         * Configuration of framework default
         *
         * @return array
         */
        public static function defaultConfiguration(): array
        {
            return [
                'name'         => static::NAME,
                'fullName'     => static::FULL_NAME,
                'descriptions' => static::description(),
                'version'      => static::VERSION,
                'charset'      => 'utf8mb4',
                'prefix'       => [
                    'char'      => static::DEFAULT_PREFIX_WORD,
                    'separator' => static::DEFAULT_PREFIX_SEPARATOR,
                ],
                'author'       => [
                    'name'        => static::AUTHOR_NAME,
                    'profile'     => static::AUTHOR_PROFILE_LINK,
                    'dateOfBirth' => static::AUTHOR_DATE_OF_BIRTH,
                ],
                'company'      => [
                    'name'               => static::COMPANY_NAME,
                    'address'            => static::COMPANY_ADDRESS,
                    'map'                => static::COMPANY_ADDRESS_MAP,
                    'care'               => static::COMPANY_CONSUMER_CARE,
                    'shortDescription'   => static::COMPANY_DESCRIPTION_SHORT,
                    'detailsDescription' => static::companyDescriptionDetails(),
                    'website'            => static::COMPANY_WEBSITE_LINK,
                    'support'            => static::COMPANY_SUPPORT_LINK,
                    'mail'               => static::COMPANY_MAIL_LINK,
                    'est'                => static::COMPANY_EST_YEAR,
                ],
                'preset'       => [
                    'user'           => static::DEFAULT_USER,
                    'password'       => static::DEFAULT_USER,
                    'db'             => static::DEFAULT_DATABASE,
                    'theme'          => static::DEFAULT_THEME,
                    'directoryIndex' => static::DEFAULT_DIRECTORY_INDEX,
                    'logo'           => static::DEFAULT_FRAMEWORK_LOGO,

                    'sessionDuration' => '60',
                    'config'          => 'webapp',
                ],
                'mime'         => [
                    'databaseFileFormat'      => '.' . static::SYSTEM_DEFAULT_FILE,
                    'databaseDumpFileFormat'  => '.' . static::SYSTEM_DEFAULT_FILE,
                    'configurationFileFormat' => '.' . static::SYSTEM_DEFAULT_FILE,
                ],
                'required'     => self::requiredDependencies(),
                'exclude'      => [
                    'dir' => [
                        'vendor',
                        'node_modules',
                        'dist',
                        'dist-src',
                        'sources',
                    ],
                ],
            ];
        }

        public static function requiredDependencies(): array
        {
            return file_exists(self::requiredDependenciesFile()) ? decode_from_json(file_get_contents(self::requiredDependenciesFile()), JSON_LOOSE_TYPE) : [];
        }

        /**
         * Configuration of post install
         *
         * @return string[][]
         */
        public static function postInstall(): array
        {
            return [
                'name'    => sprintf('%1$s Installer', self::APP_TYPE),
                'version' => self::VERSION,
                'debug'   => getenv('FRAMEWORK_DEBUG'),
                'date'    => Time::todayDateOnly(),
                'host'    => [
                    'url'  => getenv('BASE_URL'),
                    'name' => get_http_host_name(),
                    'ip'   => get_server_ip(),
                ],
                'root'    => [
                    'dir' => [
                        'name' => self::rootPath(),
                        'size' => Storage::spaceTotal(self::rootPath()),
                        'free' => Storage::spaceFree(self::rootPath()),
                    ],
                ],
            ];
        }

        /**
         * Get current host url
         *
         * @return string
         */
        public static function currentHostUrl(): string
        {
            // Fix path delimiter in windows
            if (PHP_SAPI === 'cli') {
                $hostUrl = '';
            } else {
                $hostUrl = webDocumentRoot();
                if (contains($hostUrl, "\\") === true) {
                    $hostUrl = str_replace("\\", "/", $hostUrl);
                }
            }

            return $hostUrl;
        }
    }
