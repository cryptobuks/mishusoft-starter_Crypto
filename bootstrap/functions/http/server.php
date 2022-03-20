<?php

/**
 * The loader of server functions for mishusoft application
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
 * Get server information in runtime requirements
 *
 * @return string[]
 */
function serverDetails(): array
{
    return $_SERVER;
}

/**
 * The filename of the currently executing script, relative to the document root. For instance,
 * $_SERVER['PHP_SELF'] in a script at the address http://example.com/foo/bar.php would be /foo/bar.php.
 * The __FILE__ constant contains the full path and filename of the current (i.e. included) file.
 * If PHP is running as a command-line processor this variable contains the script name.
 *
 * @return string
 */
function get_http_current_script(): string
{
    return serverDetails()['PHP_SELF'];
}

/**
 * The uri which was given in order to access this page; for instance '/index.html'.
 *
 * @return string
 */
function get_http_request_uri(): string
{
    return array_key_exists('REQUEST_URI', serverDetails()) ? serverDetails()['REQUEST_URI'] : '/';
}

/**
 * Which request method was used to access the page; e.g. 'GET', 'HEAD', 'POST', 'PUT'.
 *
 * @return string
 */
function get_http_request_method(): string
{
    return array_key_exists('REQUEST_METHOD', serverDetails()) ? serverDetails()['REQUEST_METHOD'] : 'GET';
}

/**
 * Contains the current script's path. This is useful for pages which need to point to themselves.
 * The __FILE__ constant contains the full path and filename of the current (i.e. included) file.
 *
 * @return string
 */
function get_script_name(): string
{
    return array_key_exists('SCRIPT_NAME', serverDetails()) ? serverDetails()['SCRIPT_NAME'] : __FILE__;
}


/**
 * The absolute pathname of the currently executing script.
 *
 * @return string
 */
function get_script_filename(): string
{
    return array_key_exists('SCRIPT_FILENAME', serverDetails()) ? serverDetails()['SCRIPT_FILENAME'] : __FILE__;
}

/**
 * Name and revision of the information protocol via which the page was requested; e.g. 'HTTP/1.0';
 *
 * @return string
 */
function get_server_Protocol(): string
{
    return array_key_exists('SERVER_PROTOCOL', serverDetails()) ? serverDetails()['SERVER_PROTOCOL'] : 'HTTP/1.0';
}

/**
 * Contents of the User-Agent: header from the current request, if there is one.
 * This is a string denoting the user agent being which is accessing the page.
 * A typical example is: Mozilla/4.5 [en] (X11; U; Linux 2.2.9 i586).
 * Among other things, you can use this value with get_browser() to tailor your page's output to the capabilities of the user agent.
 *
 * @return string
 */
function get_http_user_agent(): string
{
    return array_key_exists('HTTP_USER_AGENT', serverDetails()) ? serverDetails()['HTTP_USER_AGENT'] : FRAMEWORK_DEFAULT_USER_AGENT;
}

/**
 * The IP address of the server under which the current script is executing.
 *
 * @return string
 */
function get_server_ip(): string
{
    return array_key_exists('SERVER_ADDR', serverDetails()) ? serverDetails()['SERVER_ADDR'] : '0.0.0.0';
}

//Sec-Fetch-Mode: cors
//Sec-Fetch-Mode: navigate
//Sec-Fetch-Mode: no-cors
//Sec-Fetch-Mode: same-origin
//Sec-Fetch-Mode: websocket

/**
 * @return string
 */
function get_http_fetch_mode(): string
{
    return array_key_exists('HTTP-SEC-FETCH-MODE', serverDetails()) ? serverDetails()['HTTP-SEC-FETCH-MODE'] : 'negative';
}

/**
 * @return string
 */
function get_http_accept_language(): string
{
    return array_key_exists('HTTP_ACCEPT_LANGUAGE', serverDetails()) ? serverDetails()['HTTP_ACCEPT_LANGUAGE'] : 'en';
}


/**
 * @return string
 */
function get_http_accept_encoding(): string
{
    return array_key_exists('HTTP_ACCEPT_ENCODING', serverDetails()) ? serverDetails()['HTTP_ACCEPT_ENCODING'] : 'gzip';
}


//LSWS_EDITION

