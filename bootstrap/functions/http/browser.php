<?php

/**
 * The loader of browsers functions for mishusoft application
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
 * Get HTTP browser name and version from user agent
 *
 * @return string[] Details about current http browser
 */
function get_http_browser_details(): array
{
    if ($GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['minimalDetails'] === []) {
        // Clean browser alias from user agent
        $user_agent = !empty($GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['currentUserAgent']) ? $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['currentUserAgent'] : get_http_user_agent();
        $user_agent = clean_user_agent($user_agent, $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['aliases']);

        // Initiate popular browser for query browser
        $browsers = ['chrome', 'firefox', 'opera', 'safari', 'googlebot', 'YandexFavicons', 'YandexBot', 'AdsBot-Google'];

        foreach ($browsers as $browser) {
            if (preg_match(sprintf(
                    '/%1$s%2$s%3$s/imu',
                    sprintf('(?<name>%s)', $browser),
                    optional_regex('separator', $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['regex']['separator']),
                    optional_regex('version', $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['regex']['version'])
                ), $user_agent, $matches) === 1) {
                $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['minimalDetails'] = array_filter_string_key($matches);
                break;
            }
        }
    }

    return $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['minimalDetails'];
}


/**
 * Get HTTP browser device details from user agent
 *
 * @return string[] Details about current http device
 */
function get_http_device_details(): array
{
    if ($GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['deviceDetails'] === []) {
        // Clean browser alias from user agent
        $user_agent = !empty($GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['currentUserAgent']) ? $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['currentUserAgent'] : get_http_user_agent();
        $user_agent = clean_user_agent($user_agent, $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['aliases']);

        // Initiate popular browser for query browser
        $devices = ['windows', 'linux', 'mobile', 'android', 'mac'];
        // Initiate popular browser for query browser
        $devicesTypes = ['desktop' => ['nt', 'x11', 'mac'], 'mobile' => ['android', 'mobile']];
        // Initiate version prefix
        $architectures = [
            '64 Bit' => ['x86-64', 'x86_64', 'x86/64', 'x64', 'WOW64', 'Win64',],
            '32 Bit' => ['x86',],
        ];

        // determine device name
        foreach ($devices as $deviceName) {
            if (preg_match(sprintf('/%1$s/imu', sprintf('(?<name>%s)', quoted_string($deviceName))), $user_agent, $matches) === 1) {
                $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['deviceDetails']['name'] = array_filter_string_key($matches)['name'];
                break;
            }
        }

        // determine device type
        foreach ($devicesTypes as $deviceTypeKeyword => $queries) {
            foreach ($queries as $query) {
                if (preg_match(sprintf('/%1$s/imu', sprintf('(?<type>%s)', quoted_string($query))), $user_agent) === 1) {
                    $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['deviceDetails']['type'] = uc_first($deviceTypeKeyword);
                    break;
                }
            }
        }

        // determine device architecture
        foreach ($architectures as $architecture => $archList) {
            foreach ($archList as $archType) {
                if (!array_key_exists('arch', $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['deviceDetails'])
                    && preg_match(sprintf('/%1$s/imu', sprintf('(?<arch>%s)', quoted_string($archType))), $user_agent) === 1) {
                    $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['deviceDetails']['arch'] = $architecture;
                    break;
                }
            }
        }
    }

    return $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['deviceDetails'];
}

/**
 * Get HTTP browser name and version from user agent
 *
 * @return string Browser full name
 */
function get_http_browser_name_full(): string
{
    return str_replace('/', '', implode(' ', get_http_browser_details()));
}

/**
 * Get http browser name for current user
 *
 * @return string Browser name
 */
function get_http_browser_name(): string
{
    if (array_key_exists('name', get_http_browser_details())) {
        return get_http_browser_details()['name'];
    }
    return 'unknown';
}

/**
 * Get http browser name for current user
 *
 * @return string Browser version string
 */
function get_http_browser_version(): string
{
    if (array_key_exists('version', get_http_browser_details())) {
        return clean_user_agent(get_http_browser_details()['version'], $GLOBALS[DEFAULT_MEMORY_SCOPE]['browser']['versionPrefix']);
    }
    return '0.0';
}


/**
 * Get the device name of current http browser
 *
 * @return string Device name
 */
function get_http_browser_device(): string
{
    if (array_key_exists('name', get_http_device_details())) {
        return get_http_device_details()['name'];
    }
    return 'unknown';
}

/**
 * Get the device type of current http browser
 *
 * @return string Device type
 */
function get_http_browser_device_type(): string
{
    if (array_key_exists('type', get_http_device_details())) {
        return get_http_device_details()['type'];
    }
    return 'unknown';
}

/**
 * Get the architecture of current http browser
 *
 * @return string The arch of browser
 */
function get_http_browser_arch(): string
{
    if (array_key_exists('arch', get_http_device_details())) {
        return get_http_device_details()['arch'];
    }
    return 'unknown';
}


/**
 * Replace browser names with their aliases.
 *
 * @param string $string The user agent string of current http user
 * @param array<string, string> $replace_pairs Default replacement array of browser user agent
 * @return string Clean user agent
 */
function clean_user_agent(string $string, array $replace_pairs = []): string
{
    // Clean up the string.
    $string = trim($string);
    // Replace browser names with their aliases.
    return strtr($string, $replace_pairs);
}

/**
 * Generate optional regex string for browser query.
 *
 * @param string $identifier The identifier of regex query
 * @param string $content The query content for haystack
 * @return string
 */
function optional_regex(string $identifier, string $content): string
{
    return sprintf('(?<%s>%s)', $identifier, $content);
}

/**
 * Quoted string for preg_match, preg_match_callback, preg_match_callback_array
 *
 * @param string $content The query content for haystack
 * @return string
 */
function quoted_string(string $content, string $delimiter = '/'): string
{
  //'. \ + * ? [ ^ ] $ ( ) { } = ! < > | : - #'
  //$string = preg_replace($pattern, [".", "\", "+", "*", "?", "[", "^", "]", "$", "(", ")", "{", "}", "=", "!", "<", ">", "|", ":", "-", '#',], $subject);
    return preg_quote($content, $delimiter);
}
