<?php
    /**
     * The loader of constants for mishusoft application
     *
     * php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    define(
        "UA_ANALYZER_SOURCE_PATH",
        sprintf(
            '%1$s%6$s%2$s%6$s%3$s%6$s%4$s%6$s%5$s%6$s',
            RUNTIME_ROOT_PATH,
            'sources',
            'Assets',
            'databases',
            'ua-analyzer',
            DS
        )
    );

    define('FRAMEWORK_DEFAULT_USER_AGENT', $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['defaultUserAgent']);
