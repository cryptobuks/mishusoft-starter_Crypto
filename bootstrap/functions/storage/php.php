<?php

    /**
     * The loader of backup database generator functions for mishusoft application
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
     * @param array<string|int, mixed> $data
     * @param string                   $functionName
     *
     * @return string
     */
    function backup_database_generate(array $data, string $functionName = 'media_types_backups'): string
    {
        $file_header = <<<HEADER
/**
 * The loader of backup database functions for mishusoft application
 *
 * Php version 8.0
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
 * @link     https://mishusoft.com
 */

HEADER;
        return sprintf('%1$s%2$s%2$s%3$s%2$s%2$sfunction %5$s ():array { return %4$s;}', '<?php', "\n", $file_header, export_var($data, true), $functionName);
    }

    function write_php_data_file(string $filename, array $content): bool
    {
        return write_file($filename, sprintf('%1$s return %2$s;', '<?php', export_var($content, true)));
    }

    function write_php_file(string $filename, string $content): bool
    {
        return write_file($filename, sprintf('%1$s return %2$s;', '<?php', $content));
    }
