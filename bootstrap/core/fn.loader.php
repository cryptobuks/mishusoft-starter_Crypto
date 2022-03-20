<?php

    /**
     * The file loader for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */


    /**
     * Get all files from glob query
     *
     * @param string $directory Absolute path of location
     * @param int    $flags     Glob Flag
     *
     * @return string[]
     */
    function query(string $directory, int $flags = 0): array
    {
        if ($directory[-1] !== DIRECTORY_SEPARATOR) {
            $directory .= DIRECTORY_SEPARATOR;
        }

        $result = glob($directory . "*", $flags);
        if (is_array($result)) {
            foreach ($result as $item) {
                if (is_file($item) === true) {
                    $result[] = $item;
                } //end if

                if (is_dir($item) === true) {
                    array_push($result, ...query($item, $flags));
                } //end if
            }
            return array_unique(array_values($result), SORT_ASC);
        }

        return [];
    }
