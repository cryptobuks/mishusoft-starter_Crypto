<?php

    namespace Mishusoft\System\Framework;

    trait FileList
    {
        /**
         * @return string
         */
        public static function getAbsoluteInstalledURL(): string
        {
            return webDocumentRoot();
        }//end getAbsoluteInstalledURL()


        /**
         * @return string
         */
        public static function configFile(): string
        {
            return dFile(
                configs_data_file(
                    self::APP_TYPE,
                    'configs'
                )
            );
        }

        /**
         * @return string
         */
        public static function installFile(): string
        {
            return dFile(
                configs_data_file(
                    self::APP_TYPE,
                    'install'
                )
            );
        }

        /**
         * @return string
         */
        public function listerFile(): string
        {
            return dFile(
                configs_data_file(
                    self::APP_TYPE,
                    'files/' . APPLICATION_SERVER_NAME
                ),
                'ext4'
            );
        }

        /**
         * @return string
         */
        public static function requiredDependenciesFile(): string
        {
            return dFile(
                sprintf('%1$smishusoft.runtime.requirements', RUNTIME_ROOT_PATH),
                'json'
            );
        }
    }
