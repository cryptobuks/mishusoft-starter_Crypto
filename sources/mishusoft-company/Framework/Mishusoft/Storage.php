<?php

    namespace Mishusoft;

    class Storage extends System\Base
    {
        use Storage\Path\Declaration;
        use Storage\Path\UIAssignment;
        use Storage\Path\Status;
        use Storage\Path\Explorer;
        use Storage\Path\Assignment;

        // make static call for directories path

        /**
         * @return string
         */
        public static function applicationWebDirectivePath(): string
        {
            $rootFile = $_SERVER["PHP_SELF"];
            if (get_file_ext($rootFile) === "php") {
                $rootUri = dirname($_SERVER["PHP_SELF"]);
            } else {
                $rootUri = "";
            }

            return $rootUri;
        }

        /**
         * @param array $fileDetails
         *
         * @return string
         */
        private static function imageSizeBuilder(array $fileDetails): string
        {
            return implode("x", [array_value($fileDetails, 0), array_value($fileDetails, 1)]);
        }

        private static function localize(string $filename): string
        {
            return str_replace("/", DS, $filename);
        }

    }
