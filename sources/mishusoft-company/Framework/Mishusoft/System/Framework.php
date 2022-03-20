<?php

    namespace Mishusoft\System;

    use Closure;
    use Mishusoft\Exceptions;
    use Mishusoft\MPM;
    use Mishusoft\Storage;
    use Mishusoft\System\Ui;

    class Framework extends Base implements FrameworkInterface
    {
        //use trait
        use Framework\Configuration;
        use Framework\Validation;
        use Framework\DiskObserver;
        use Framework\StaticText;
        use Framework\FileList;

        /**
         * Init function for Framework
         *
         * @param Closure $closure
         *
         * @return Framework
         * @throws Exceptions\ErrorException
         * @throws Exceptions\LogicException\InvalidArgumentException
         * @throws Exceptions\PermissionRequiredException
         * @throws Exceptions\RuntimeException
         */
        public static function init(Closure $closure): Framework
        {
            $instance = new self();

            // Create configuration directory for framework
            resolveDirectory(configs_data_directive(self::APP_TYPE));

            // Create configuration and install file
            self::installFramework();
            self::installDevice();

            //Check framework requirements with validation class
            self::extensionRequiredCheck();
            self::thirdPartyRequiredCheck();
            // static::opcacheStatusCheck();

            // check api directories, update, permissions
            MPM\Common::checkUpdateAndPermissions(MPM\Common::allHttpCommunicationDirectories());

            // load api group in env
            update_env('API_GROUP', implode(',', array_unique(array_column(parse_msf_file(MPM\Common::httpAPIRoutesFile()), 'group'))));


            //Check framework file system with disk observer
            if (!file_exists($instance->listerFile()) || empty(file_get_contents($instance->listerFile()))) {
                $instance->checkFileSystem();
            }

            // Run application
            $closure($instance);

            return $instance;
        }

        /**
         * Write framework default configuration into a file
         */
        public static function installFramework(): void
        {
            if (!file_exists(self::configFile()) || file_get_contents(self::configFile()) === '') {
                update_env_array(
                    [
                        'BASE_URL'            => self::currentHostUrl(),
                        'INSTALLED_HOST_NAME' => get_http_host_name(),
                        'FRAMEWORK_DEBUG'     => false,
                        'DB_USERNAME'         => self::DEFAULT_USER,
                        'DB_PASSWORD'         => self::DEFAULT_PREFIX . self::DEFAULT_USER,
                    ]
                );
                emit_msf_file(self::configFile(), self::defaultConfiguration());
            }
        }


        public static function installDevice(): void
        {
            // Preparing to check framework install file, if not exists or empty create framework install file.
            if (!file_exists(self::installFile()) || file_get_contents(self::installFile()) === '') {
                // update environment variables
                update_env_array(['BASE_URL' => self::currentHostUrl(), 'INSTALLED_HOST_NAME' => get_http_host_name(),]);
                // emit install file
                emit_msf_file(self::installFile(), self::postInstall());
            }
        }


        /**
         * @throws Exceptions\ErrorException
         * @throws Exceptions\LogicException\InvalidArgumentException
         * @throws Exceptions\PermissionRequiredException
         * @throws Exceptions\RuntimeException
         * @throws Exceptions\RuntimeException\NotFoundException
         */
        public function execute(): void
        {
            if (
                file_exists(Storage::applicationDirectivePath()) === false
                || file_exists(MPM\Classic::configFile()) === false
            ) {
                Ui\EmbeddedView::welcomeToFramework(static::FULL_NAME, [
                    'caption'     => static::FULL_NAME,
                    'description' => static::description(),
                    'warning'     => static::installWarning(),
                    'copyright'   => Ui::copyRightText(Time::currentYearNumber(), static::COMPANY_NAME),
                ]);
            } else {
                MPM\Classic::load();
            }
        }

        /**
         * @throws Exceptions\RuntimeException
         * @throws Exceptions\LogicException\InvalidArgumentException
         * @throws Exceptions\PermissionRequiredException
         */
        public static function terminate(): void
        {
            //pretty_debug_backtrace();
            Log::terminate();
        }
    }
