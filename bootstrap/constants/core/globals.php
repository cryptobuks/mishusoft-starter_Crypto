<?php

    /**
     * The loader of globals constants for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    define('DEFAULT_MEMORY_SCOPE', sprintf('_%1$s_', WHO_AM_I));
    const DEFAULT_HTTP_USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0';

    // Initiate global variables
    // browser
    $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser'] = [
        'details'          => [],
        'minimalDetails'   => [],
        'deviceDetails'    => [],
        'aliases'          => ['opr' => 'opera', 'iceweasel' => 'firefox',],
        'versionPrefix'    => ['v' => '', 'y' => '', 'yb' => '', 'nt' => '',],
        // Initiate default user agent for browser
        'currentUserAgent' => array_key_exists('HTTP_USER_AGENT', $_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : DEFAULT_HTTP_USER_AGENT,
        'defaultUserAgent' => DEFAULT_HTTP_USER_AGENT,
        // Initiate regex for user agent analyzer
        'regex'            => [
            'separator' => '(\s+|\/|\_|\-|\:|\;|\()',
            'version'   => sprintf(
                '%1$s?%2$s?%3$s',
                // Add regex for prefix for version number
                '(v|y|yb\/|nt)',
                // Add regex for additional separator for version number
                '(\s*|\/|\_|\-|\:|\;|\()',
                //Add regex for version number or word
                '((\d+[.-_ ])?(\d+[.-_ ])?(\d+[.-_ ])?(\d+[.-_ ])?(\d+))|(\w+)'
            ),
        ],
    ];


    // memory
    $GLOBALS[DEFAULT_MEMORY_SCOPE]['memory'] = [
        'array'  => [],
        'object' => new stdClass()
    ];

    // document
    $GLOBALS[DEFAULT_MEMORY_SCOPE]['document'] = [];
