<?php

    /**
     * The generic path functions for mishusoft application
     *
     * Php version 7.4
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    /**
     * @return string
     */
    function get_current_generic_file(): string
    {
        return fixSlash(RUNTIME_PUBLIC_PATH . ltrim(get_http_request_uri(), '/'), 'dir');
    }


    /**
     * @return string[]
     */
    function public_generic_files(): array
    {
        $allFiles     = query(RUNTIME_PUBLIC_PATH);
        $excludeFiles = ['resource.php', 'about.php', 'httpd.htaccess', 'old.htaccess', 'web.config'];

        foreach ($allFiles as $key => $filename) {
            if (in_array(basename($filename), $excludeFiles, true)) {
                unset($allFiles[$key]);
            }
        }
        return $allFiles;
    }
