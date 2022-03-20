<?php

    /**
     * The loader of main http functions for mishusoft application
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
     * Get http requested url
     *
     * @return string
     */
    function requestedUrl(): string
    {
        $url = parse_url(serverDetails()['REQUEST_URI'], PHP_URL_PATH);
        return is_string($url) ? $url : serverDetails()['REQUEST_URI'];
    }


    /**
     * Check is use ssl certificate in domain
     *
     * @return bool
     */
    function isSecuredRequest(): bool
    {
        return (!empty(serverDetails()['HTTPS']) && serverDetails()['HTTPS'] === 'on');
    }

    /**
     * Get http host name
     *
     * @return string
     */
    function get_http_host_name(): string
    {
        if (array_key_exists('HTTP_HOST', $_SERVER) === true) {
            if (in_array($_SERVER['HTTP_HOST'], domainList(), true) === true) {
                $domain = $_SERVER['HTTP_HOST'];
            } else {
                $domain = 'localhost';
            }

            $urlHostname = $domain;
        } else {
            $urlHostname = 'unknown host';
        }

        return $urlHostname;
    }

    /**
     * Get server http host name from details
     *
     * @param bool $useForwardedHost
     *
     * @return string
     */
    function domainRoot(bool $useForwardedHost = false): string
    {
        $protocol = '';
        $s        = serverDetails();
        $sp       = strtolower($s['SERVER_PROTOCOL']);
        $last     = strpos($sp, '/');

        if (is_int($last)) {
            $protocol = substr($sp, 0, $last) . ((isSecuredRequest()) ? 's' : '');
        }

        if (($useForwardedHost && isset($s['HTTP_X_FORWARDED_HOST']))) {
            $host = $s['HTTP_X_FORWARDED_HOST'];
        } else {
            $host = ($s['HTTP_HOST'] ?? null);
        }
        $host = ($host ?? $s['SERVER_NAME']) . serverPort();
        return sprintf('%1$s://%2$s', $protocol, $host);
    }


    /**
     * Get server http port from details
     *
     * @return string
     */
    function serverPort(): string
    {
        //url:http://localhost:8080
        //url:http://localhost
        //url:https://localhost
        //url:http://www.localhost
        //url:https://www.localhost

        $s   = serverDetails();
        $ssl = isSecuredRequest();

        $port           = $s['SERVER_PORT'];
        $definedPort    = ':' . $port;
        $definedPortLen = strlen($definedPort);

        if (substr($s['HTTP_HOST'], (strlen($s['HTTP_HOST']) - $definedPortLen)) === $definedPort) {
            $port = '';
        } elseif ((!$ssl && $port === '80') || ($ssl && $port === '443')) {
            $port = '';
        } else {
            $port = $definedPort;
        }

        return ltrim($port, ':');
    }

    /**
     * Get Application hosted http root
     *
     * @return string
     */
    function webDocumentRoot(): string
    {
        return addSlash(fixSlash(sprintf('%1$s%2$s', domainRoot(), webInstalledRoot())));
    }


    /**
     * Get installed root of this application
     *
     * @return string
     */
    function webInstalledRoot(): string
    {
        // http://localhost:8080/
        // http://localhost:8080/index.php
        // http://localhost:8080/another.php
        // http://localhost:8080/framework/images/icons/maintenance.png

        // [DOCUMENT_ROOT] => /home/abir/Development/web-development/mishusoft-starter
        // [DOCUMENT_ROOT] => /home/abir/Development/web-development/mishusoft-starter/public_html


        // [REQUEST_URI] => /index.php
        // [SCRIPT_NAME] => /index.php
        // [SCRIPT_FILENAME] => /home/abir/Development/web-development/mishusoft-starter/public_html/index.php
        // [PHP_SELF] => /index.php

        // [REQUEST_URI] => /framework/images/icons/maintenance.png
        // [SCRIPT_NAME] => /framework/images/icons/maintenance.png
        // [SCRIPT_FILENAME] => public_html/index.php
        // [PHP_SELF] => /framework/images/icons/maintenance.png

        // [REQUEST_URI] => /
        // [SCRIPT_NAME] => /public_html/index.php
        // [SCRIPT_FILENAME] => /home/abir/Development/web-development/mishusoft-starter/public_html/index.php
        // [PHP_SELF] => /public_html/index.php

        $scriptName     = last_word(get_script_name(), '/');
        $scriptFileName = last_word(get_script_filename(), '/');
        $phpSelf        = last_word(get_http_current_script(), '/');

        if (strcmp($scriptName, $scriptFileName) === 0 && strcmp($scriptFileName, $phpSelf) === 0) {
            if (!str_contains(get_http_request_uri(), 'public_html/')) {
                return dirname($_SERVER['SCRIPT_NAME'], 2);
            }

            return dirname($_SERVER['SCRIPT_NAME']);
        }

        return '/';
    }


    /**
     * Redirect to current url
     *
     * @param string $url Valid url
     *
     * @retrun void
     */
    function redirectUrl(string $url = ""): void
    {
        header("location:" . $url);
        exit();
    }


    /**
     * Retrieve visited page.
     *
     * @public
     * @return string
     */
    function get_visited_current_page(): string
    {
        return visitedPageURL(serverDetails());
    }//end getVisitedPage()


    /**
     * Retrieve visited page url.
     *
     * @param array $s                Server information.
     * @param bool  $useForwardedHost Forward host using permission
     *
     * @return string Page url.
     */
    function visitedPageURL(array $s, bool $useForwardedHost = false): string
    {
        return domainRoot($useForwardedHost) . $s['REQUEST_URI'];
    }//end visitedPageURL()
