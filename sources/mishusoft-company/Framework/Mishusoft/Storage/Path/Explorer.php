<?php

    namespace Mishusoft\Storage\Path;

    use function endsWith;

    use const DS;

    trait Explorer
    {


        /**
         * @param string $directory
         * @param int    $flags
         *
         * @return array|false
         */
        public static function explore(string $directory, int $flags = 0): bool|array
        {
            if ($directory[strlen($directory) - 1] !== "/") {
                $directory .= "/";
            }

            return glob($directory . "*", $flags);
        }

        /**
         * @param string $directory
         * @param int    $flags
         *
         * @return array|false
         */
        public static function exploreRecursive(string $directory, int $flags = 0): bool|array
        {
            if ($directory[strlen($directory) - 1] !== "/") {
                $directory .= "/";
            }

            $result = glob($directory . "*", $flags);
            foreach ($result as $item) {
                if (is_file($item) === true) {
                    $result[] = $item;
                } //end if

                if (is_dir($item) === true) {
                    array_push($result, ...self::exploreRecursive($item, $flags));
                } //end if
            }

            return array_unique(array_values($result), SORT_ASC);
        }

        public static function allFiles(string $path): array
        {
            return self::globRecursive($path, GLOB_MARK);
        }

        /**
         *  Get all files form directory.
         *  Does not support flag GLOB_BRACE.
         *
         * @param string $directory
         * @param int    $flags
         *
         * @return bool|array
         */
        public static function globRecursive(string $directory, int $flags = 0): bool|array
        {
            if (endsWith($directory, DS) === false) {
                $directory .= DS;
            }
            $result = glob($directory . "*", $flags);
            foreach ($result as $item) {
                if (is_file($item) === true) {
                    $result[] = $item;
                } //end if

                if (is_dir($item) === true) {
                    array_push($result, ...self::globRecursive($item, $flags));
                } //end if
            }

            return array_unique(array_values($result), SORT_ASC);
        }

        public static function files(string $path): array
        {
            return self::glob($path, GLOB_MARK);
        }

        /**
         *  Does not support flag GLOB_BRACE.
         *
         * @param string $directory
         * @param int    $flags
         *
         * @return bool|array
         */
        public static function glob(string $directory, int $flags = 0): bool|array
        {
            if (endsWith($directory, DS) === false) {
                $directory .= DS;
            }
            $result = glob($directory . "*", $flags);
            foreach ($result as $item) {
                if (is_file($item) === true) {
                    $result[] = $item;
                } //end if
            }

            return array_unique(array_values($result), SORT_ASC);
        }
    }
