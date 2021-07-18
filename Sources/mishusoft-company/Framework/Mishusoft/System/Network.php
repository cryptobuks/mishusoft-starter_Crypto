<?php declare(strict_types=1);

namespace Mishusoft\System;

use Mishusoft\Utility\Character;

class Network
{
    /*declare version*/
    public const VERSION = "1.0.2";


    /**
     * @param string $argument
     * @return string
     */
    public static function requestHeader(string $argument):string
    {
        return array_key_exists(Character::upper($argument), $_SERVER) ? $_SERVER[Character::upper($argument)] : 'Unavailable';
    }

    /**
     * @public
     * @param $argument
     * @return string
     */
    public static function getValOfSrv($argument): string
    {
        /*$indicesServer = array('PHP_SELF',
        'argv',
        'argc',
        'GATEWAY_INTERFACE',
        'SERVER_ADDR',
        'SERVER_NAME',
        'SERVER_SOFTWARE',
        'SERVER_PROTOCOL',
        'REQUEST_METHOD',
        'REQUEST_TIME',
        'REQUEST_TIME_FLOAT',
        'QUERY_STRING',
        'DOCUMENT_ROOT',
        'HTTP_ACCEPT',
        'HTTP_ACCEPT_CHARSET',
        'HTTP_ACCEPT_ENCODING',
        'HTTP_ACCEPT_LANGUAGE',
        'HTTP_CONNECTION',
        'HTTP_HOST',
        'HTTP_REFERER',
        'HTTP_USER_AGENT',
        'HTTPS',
        'REMOTE_ADDR',
        'REMOTE_HOST',
        'REMOTE_PORT',
        'REMOTE_USER',
        'REDIRECT_REMOTE_USER',
        'SCRIPT_FILENAME',
        'SERVER_ADMIN',
        'SERVER_PORT',
        'SERVER_SIGNATURE',
        'PATH_TRANSLATED',
        'SCRIPT_NAME',
        'REQUEST_URI',
        'PHP_AUTH_DIGEST',
        'PHP_AUTH_USER',
        'PHP_AUTH_PW',
        'AUTH_TYPE',
        'PATH_INFO',
        'ORIG_PATH_INFO') ;*/
        return array_key_exists(Character::upper($argument), $_SERVER) ? $_SERVER[Character::upper($argument)] : 'Unavailable';
    }

    /**
     * Check DNS records corresponding to a given Internet host name or IP address
     * @link https://php.net/manual/en/function.checkdnsrr.php
     * @param string $host <p>
     * host may either be the IP address in
     * dotted-quad notation or the host name.
     * </p>
     * @param string $type [optional] <p>
     * type may be any one of: A, MX, NS, SOA,
     * PTR, CNAME, AAAA, A6, SRV, NAPTR, TXT or ANY.
     * </p>
     * @return bool true if any records are found; returns false if no records
     * were found or if an error occurred.
     */
    public static function ChecksDNSRecords(string $host, string $type = 'MX'): bool
    {
        if (checkdnsrr($host, $type)) {
            return true;
        }

        return false;
    }

    /**
     * &Alias; <function>checkdnsrr</function>
     * @link https://php.net/manual/en/function.dns-check-record.php
     * @param $host <p>
     * <b>host</b> may either be the IP address in
     * dotted-quad notation or the host name.
     * </p>
     * @param $type [optional] <p>
     * <b>type</b> may be any one of: A, MX, NS, SOA,
     * PTR, CNAME, AAAA, A6, SRV, NAPTR, TXT or ANY.
     * </p>
     * @return bool Returns <b>TRUE</b> if any records are found; returns <b>FALSE</b> if no records were found or if an error occurred.
     */
    public static function dns_check_record(string $host, string $type = 'MX'): bool
    {
        if (dns_check_record($host, $type)) {
            return true;
        }

        return false;
    }

    /**
     * Get MX records corresponding to a given Internet host name
     * @link https://php.net/manual/en/function.getmxrr.php
     * @param string $hostname <p>
     * The Internet host name.
     * </p>
     * @param callable $callback <p>
     * A list of the MX records found is placed into the array
     * mxhosts.
     * </p>
     */
    public static function getmxrr(string $hostname, callable $callback)
    {
        if (getmxrr($hostname, $mx_details) && is_callable($callback)) {
            $callback($mx_details);
        }
    }

    /**
     * &Alias; <function>getmxrr</function>
     * @link https://php.net/manual/en/function.dns-get-mx.php
     * @param $hostname
     * @param $callback
     */
    public static function dns_get_mx(string $hostname, callable $callback)
    {
        if (dns_get_mx($hostname, $mx_details) && is_callable($callback)) {
            $callback($mx_details);
        }
    }

    /**
     * Fetch DNS Resource Records associated with a hostname
     * @link https://php.net/manual/en/function.dns-get-record.php
     * @param string $hostname <p>
     * hostname should be a valid DNS hostname such
     * as "www.example.com". Reverse lookups can be generated
     * using in-addr.arpa notation, but
     * gethostbyaddr is more suitable for
     * the majority of reverse lookups.
     * </p>
     * <p>
     * Per DNS standards, email addresses are given in user.host format (for
     * example: hostmaster.example.com as opposed to hostmaster@example.com),
     * be sure to check this value and modify if necessary before using it
     * with a functions such as mail.
     * </p>
     * @param string|int $type [optional] <p>
     * By default, dns_get_record will search for any
     * resource records associated with hostname.
     * To limit the query, specify the optional type
     * parameter. May be any one of the following:
     * DNS_A, DNS_CNAME,
     * DNS_HINFO, DNS_MX,
     * DNS_NS, DNS_PTR,
     * DNS_SOA, DNS_TXT,
     * DNS_AAAA, DNS_SRV,
     * DNS_NAPTR, DNS_A6,
     * DNS_ALL or DNS_ANY.
     * </p>
     * <p>
     * Because of eccentricities in the performance of libresolv
     * between platforms, DNS_ANY will not
     * always return every record, the slower DNS_ALL
     * will collect all records more reliably.
     * </p>
     * @param array|null $authns [optional] <p>
     * Passed by reference and, if given, will be populated with Resource
     * Records for the Authoritative Name Servers.
     * </p>
     * @param array|null $addtl [optional] <p>
     * Passed by reference and, if given, will be populated with any
     * Additional Records.
     * </p>
     * @param bool $raw [optional] <p>
     * In case of raw mode, we query only the requested type
     * instead of looping type by type before going with the additional info stuff.
     * </p>
     * @return array This function returns an array of associative arrays. Each associative array contains
     * at minimum the following keys:
     * <table>
     * Basic DNS attributes
     * <tr valign="top">
     * <td>Attribute</td>
     * <td>Meaning</td>
     * </tr>
     * <tr valign="top">
     * <td>host</td>
     * <td>
     * The record in the DNS namespace to which the rest of the associated data refers.
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>class</td>
     * <td>
     * dns_get_record only returns Internet class records and as
     * such this parameter will always return IN.
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>type</td>
     * <td>
     * String containing the record type. Additional attributes will also be contained
     * in the resulting array dependant on the value of type. See table below.
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>ttl</td>
     * <td>
     * "Time To Live" remaining for this record. This will not equal
     * the record's original ttl, but will rather equal the original ttl minus whatever
     * length of time has passed since the authoritative name server was queried.
     * </td>
     * </tr>
     * </table>
     * </p>
     * <p>
     * <table>
     * Other keys in associative arrays dependant on 'type'
     * <tr valign="top">
     * <td>Type</td>
     * <td>Extra Columns</td>
     * </tr>
     * <tr valign="top">
     * <td>A</td>
     * <td>
     * ip: An IPv4 addresses in dotted decimal notation.
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>MX</td>
     * <td>
     * pri: Priority of mail exchanger.
     * Lower numbers indicate greater priority.
     * target: FQDN of the mail exchanger.
     * See also dns_get_mx.
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>CNAME</td>
     * <td>
     * target: FQDN of location in DNS namespace to which
     * the record is aliased.
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>NS</td>
     * <td>
     * target: FQDN of the name server which is authoritative
     * for this hostname.
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>PTR</td>
     * <td>
     * target: Location within the DNS namespace to which
     * this record points.
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>TXT</td>
     * <td>
     * txt: Arbitrary string data associated with this record.
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>HINFO</td>
     * <td>
     * cpu: IANA number designating the CPU of the machine
     * referenced by this record.
     * os: IANA number designating the Operating Framework on
     * the machine referenced by this record.
     * See IANA's Operating Framework
     * Names for the meaning of these values.
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>SOA</td>
     * <td>
     * mname: FQDN of the machine from which the resource
     * records originated.
     * rname: Email address of the administrative contain
     * for this domain.
     * serial: Serial # of this revision of the requested
     * domain.
     * refresh: Refresh interval (seconds) secondary name
     * servers should use when updating remote copies of this domain.
     * retry: Length of time (seconds) to wait after a
     * failed refresh before making a second attempt.
     * expire: Maximum length of time (seconds) a secondary
     * DNS server should retain remote copies of the zone data without a
     * successful refresh before discarding.
     * minimum-ttl: Minimum length of time (seconds) a
     * client can continue to use a DNS resolution before it should request
     * a new resolution from the server. Can be overridden by individual
     * resource records.
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>AAAA</td>
     * <td>
     * ipv6: IPv6 address
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>A6(PHP &gt;= 5.1.0)</td>
     * <td>
     * masklen: Length (in bits) to inherit from the target
     * specified by chain.
     * ipv6: Address for this specific record to merge with
     * chain.
     * chain: Parent record to merge with
     * ipv6 data.
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>SRV</td>
     * <td>
     * pri: (Priority) lowest priorities should be used first.
     * weight: Ranking to weight which of commonly prioritized
     * targets should be chosen at random.
     * target and port: hostname and port
     * where the requested service can be found.
     * For additional information see: RFC 2782
     * </td>
     * </tr>
     * <tr valign="top">
     * <td>NAPTR</td>
     * <td>
     * order and pref: Equivalent to
     * pri and weight above.
     * flags, services, regex,
     * and replacement: Parameters as defined by
     * RFC 2915.
     * </td>
     * </tr>
     * </table>
     */
    public static function dns_get_record(string $hostname, string $type = DNS_ANY, array &$authns = null, array &$addtl = null, $raw = false): array
    {
        return dns_get_record($hostname, $type, $authns, $addtl, $raw);
    }


    /**
     * Open Internet or Unix domain socket connection
     * @link https://php.net/manual/en/function.fsockopen.php
     * @param string $hostname <p>
     * If you have compiled in OpenSSL support, you may prefix the
     * hostname with either ssl://
     * or tls:// to use an SSL or TLS client connection
     * over TCP/IP to connect to the remote host.
     * </p>
     * @param int $port [optional] <p>
     * The port number.
     * </p>
     * @param int &$errno [optional] <p>
     * If provided, holds the system level error number that occurred in the
     * system-level connect() call.
     * </p>
     * <p>
     * If the value returned in errno is
     * 0 and the function returned false, it is an
     * indication that the error occurred before the
     * connect() call. This is most likely due to a
     * problem initializing the socket.
     * </p>
     * @param string &$errstr [optional] <p>
     * The error message as a string.
     * </p>
     * @param float $timeout [optional] <p>
     * The connection timeout, in seconds.
     * </p>
     * <p>
     * If you need to set a timeout for reading/writing data over the
     * socket, use stream_set_timeout, as the
     * timeout parameter to
     * fsockopen only applies while connecting the
     * socket.
     * </p>
     * @return resource|false fsockopen returns a file pointer which may be used
     * together with the other file functions (such as
     * fgets, fgetss,
     * fwrite, fclose, and
     * feof). If the call fails, it will return false
     */
    public static function fsockopen($hostname, $port = null, &$errno = null, &$errstr = null, $timeout = null): bool
    {
        return fsockopen($hostname, $port, $errno, $errstr, $timeout);
    }

    /**
     * Get the Internet host name corresponding to a given IP address
     * @link https://php.net/manual/en/function.gethostbyaddr.php
     * @param string $ip_address <p>
     * The host IP address.
     * </p>
     * @return string the host name or the unmodified ip_address
     * on failure.
     */
    public static function gethostbyaddr($ip_address): string
    {
        return gethostbyaddr($ip_address);
    }


    /**
     * Get the IPv4 address corresponding to a given Internet host name
     * @link https://php.net/manual/en/function.gethostbyname.php
     * @param string $hostname <p>
     * The host name.
     * </p>
     * @return string the IPv4 address or a string containing the unmodified
     * hostname on failure.
     */
    public static function gethostbyname($hostname): string
    {
        return gethostbyname($hostname);
    }

    /**
     * Get a list of IPv4 addresses corresponding to a given Internet host
     * name
     * @link https://php.net/manual/en/function.gethostbynamel.php
     * @param string $hostname <p>
     * The host name.
     * </p>
     * @return array an array of IPv4 addresses or false if
     * hostname could not be resolved.
     */
    public static function gethostbynamel($hostname): array
    {
        return gethostbynamel($hostname);
    }

    /**
     * Gets the host name
     * @link https://php.net/manual/en/function.gethostname.php
     * @return string|false a string with the hostname on success, otherwise false is
     * returned.
     */
    public static function gethostname()
    {
        return gethostname();
    }


    /**
     * @public
     * @return false|string
     */
    public static function hostComputerDetails(): bool|string
    {
        return php_uname();
    }


    /**
     * @return mixed
     */
    public static function getServerNameVersion(): mixed
    {
        if (false !== stripos(Character::lower($_SERVER["SERVER_SOFTWARE"]), "apache")) {
            $server = str_replace('/', ' ', substr($_SERVER["SERVER_SOFTWARE"], 0, 20));
        } elseif (false !== stripos(Character::lower($_SERVER["SERVER_SOFTWARE"]), "litespeed")) {
            $version = shell_exec('cat /usr/local/lsws/VERSION');
            $server = $_SERVER["SERVER_SOFTWARE"] . ' ' . $version;
        } else {
            $server = $_SERVER["SERVER_SOFTWARE"];
        }
        return $server;
    }

    public function __destruct()
    {
    }
}
