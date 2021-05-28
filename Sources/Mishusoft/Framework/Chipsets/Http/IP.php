<?php declare(strict_types=1);

/*
 * Reserved for private networks.
 * The organizations that distribute IP addresses to the world reserves a range of IP addresses for private networks.
 *
 *     192.168.0.0 - 192.168.255.255 (65,536 IP addresses)
 *     172.16.0.0 - 172.31.255.255 (1,048,576 IP addresses)
 *     10.0.0.0 - 10.255.255.255 (16,777,216 IP addresses)
 *
 * Your simple home network, with its router at the center and computers connected to it—wired or wireless—classifies as one of those networks.
*/

namespace Mishusoft\Framework\Chipsets\Http;

use GeoIp2\Database\Reader;
use GeoIp2\Exception\AddressNotFoundException;
use Ipdata\ApiClient\Ipdata;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Framework\Chipsets\RuntimeErrors;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Nyholm\Psr7\Factory\Psr17Factory;
use Psr\Http\Client\ClientExceptionInterface;
use Symfony\Component\HttpClient\Psr18Client;

class IP
{
    /*declare version*/
    const VERSION = "1.0.2";


    /**
     * @return string
     */
    public static function getCountry(): string
    {
        $country = 'Unknown';
        try {
            if (self::is_public_ip(self::get())) {
                $reader = new Reader(MS_STORAGE_PATH . "0/GeoIP/GeoLite2-Country.mmdb");
                $record = $reader->country(self::get());
                $country = $record->country->name;
            } else {
                $country = 'Private IP';
            }
        } catch (AddressNotFoundException $e) {
            if (empty($record->country->name)) {
                try {
                    $httpClient = new Psr18Client();
                    $psr17Factory = new Psr17Factory();
                    $ipdata = new Ipdata('test', $httpClient, $psr17Factory);
                    $country = $ipdata->lookup(self::get())['country_name'];

                } catch (ClientExceptionInterface $e) {
                    new RuntimeErrors($e->getMessage(), $e->getCode(), $e->getCode(), $e->getFile(), $e->getLine(), $e->getTraceAsString());
                }
            } else {
                new RuntimeErrors($e->getMessage(), $e->getCode(), $e->getCode(), $e->getFile(), $e->getLine(), $e->getTraceAsString());
            }
        } catch (InvalidDatabaseException $e) {
            new RuntimeErrors($e->getMessage(), $e->getCode(), $e->getCode(), $e->getFile(), $e->getLine(), $e->getTraceAsString());
        } finally {
            return $country;
        }
    }

    /**
     * @param null $ip
     * @return bool
     */
    public static function is_public_ip($ip = NULL): bool
    {
        return filter_var(
                $ip,
                FILTER_VALIDATE_IP,
                FILTER_FLAG_IPV4 | FILTER_FLAG_IPV6 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE
            ) === $ip;
    }

    /**
     * @return string
     */
    static public function get(): string
    {
        $remote = $_SERVER['REMOTE_ADDR'];
        $client = false;
        $forward = false;
        if (array_key_exists('HTTP_CLIENT_IP', $_SERVER))
            $client = $_SERVER['HTTP_CLIENT_IP'];
        if (array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER))
            $forward = $_SERVER['HTTP_X_FORWARDED_FOR'];
        if (filter_var($client, FILTER_VALIDATE_IP)) {
            $ip = $client;
        } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
            $ip = $forward;
        } else {
            $ip = $remote;
        }

        return $ip;
    }

    /**
     * @param string $purpose
     * @return array|float|string|null
     */
    public static function getInfo(string $purpose = "location")
    {
        $output = "Unknown Location";
        try {
            if (self::is_public_ip(self::get()/*'103.154.156.11'*/)) {
                $reader = new Reader(MS_STORAGE_PATH . "0/GeoIP/GeoLite2-City.mmdb");
                $record = $reader->city(IP::get() /*'103.154.156.11'*/);
                $purpose = str_replace(array("name", "\n", "\t", " ", "-", "_"), NULL, _String::lower(trim($purpose)));
                $support = array("latitude", "longitude", "timezone", "postalcode", "city", "state", "country", "countrycode", "continent", "continentcode", "location", "address");
                if (filter_var(IP::get()/*'103.154.156.11'*/, FILTER_VALIDATE_IP) && in_array($purpose, $support)) {
                    switch ($purpose) {
                        case "location":
                            $output = array(
                                "latitude" => $record->location->latitude,
                                "longitude" => $record->location->longitude,
                                "time_zone" => $record->location->timeZone,
                                "postal_code" => $record->postal->code,
                                "city" => $record->city->name,
                                "state" => $record->mostSpecificSubdivision->name,
                                "country" => $record->country->name,
                                "country_code" => $record->country->isoCode,
                                "continent" => $record->continent->name,
                                "continent_code" => $record->continent->code
                            );
                            break;
                        case "address":
                            $address = array($record->country->name);
                            $address[] = $record->mostSpecificSubdivision->name;
                            $address[] = $record->city->name;
                            $output = implode(", ", array_reverse($address));
                            break;
                        case "latitude":
                            $output = $record->location->latitude;
                            break;
                        case "longitude":
                            $output = $record->location->longitude;
                            break;
                        case "timezone":
                            $output = $record->location->timeZone;
                            break;
                        case "city":
                            $output = $record->city->name;
                            break;
                        case "postalcode":
                            $output = $record->postal->code;
                            break;
                        case "state":
                            $output = $record->mostSpecificSubdivision->name;
                            break;
                        case "country":
                            $output = $record->country->name;
                            break;
                        case "countrycode":
                            $output = $record->country->isoCode;
                            break;
                        case "continent":
                            $output = $record->continent->name;
                            break;
                        case "continentcode":
                            $output = $record->continent->code;
                            break;
                        default:
                            $output = 'Unknown';
                            break;
                    }
                }
            } else {
                $output = 'Private IP';
            }
        } catch (AddressNotFoundException | InvalidDatabaseException $e) {
            new RuntimeErrors($e->getMessage(), $e->getCode(), $e->getCode(), $e->getFile(), $e->getLine(), $e->getTraceAsString());
        } finally {
            return $output;
        }
    }

    /**
     * @public
     * @param null $ip
     * @return bool
     */
    public static function is_private_ip($ip = NULL): bool
    {
        return self::is_ip($ip) && !self::is_public_ip($ip);
    }

    public static function is_ip($ip = NULL): bool
    {
        return filter_var(
                $ip,
                FILTER_VALIDATE_IP,
                FILTER_FLAG_IPV4 | FILTER_FLAG_IPV6
            ) === $ip;
    }

    /**
     * @public
     * @param null $ip
     * @return bool
     */
    public static function is_private_ipv4($ip = NULL): bool
    {
        return self::is_ipv4($ip) && !self::is_public_ipv4($ip);
    }

    /**
     * @param null $ip
     * @return bool
     */
    public static function is_ipv4($ip = NULL): bool
    {
        return filter_var(
                $ip,
                FILTER_VALIDATE_IP,
                FILTER_FLAG_IPV4
            ) === $ip;
    }

    /**
     * @param null $ip
     * @return bool
     */
    public static function is_public_ipv4($ip = NULL): bool
    {
        return filter_var(
                $ip,
                FILTER_VALIDATE_IP,
                FILTER_FLAG_IPV4 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE
            ) === $ip;
    }

    /**
     * @public
     * @param null $ip
     * @return bool
     */
    public static function is_private_ipv6($ip = NULL): bool
    {
        return self::is_ipv6($ip) && !self::is_public_ipv6($ip);
    }

    /**
     * @param null $ip
     * @return bool
     */
    public static function is_ipv6($ip = NULL): bool
    {
        return filter_var(
                $ip,
                FILTER_VALIDATE_IP,
                FILTER_FLAG_IPV6
            ) === $ip;
    }

    /**
     * @param null $ip
     * @return bool
     */
    public static function is_public_ipv6($ip = NULL): bool
    {
        return filter_var(
                $ip,
                FILTER_VALIDATE_IP,
                FILTER_FLAG_IPV6 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE
            ) === $ip;
    }

    function __destruct()
    {

    }
}