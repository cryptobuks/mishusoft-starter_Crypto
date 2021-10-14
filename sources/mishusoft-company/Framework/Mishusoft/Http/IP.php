<?php declare(strict_types=1);

/*
 * Reserved for private networks.
 * The organizations that distribute IP addresses to the world reserves a range of IP addresses for private networks.
 *
 *     192.168.0.0 - 192.168.255.255 (65,536 IP addresses)
 *     172.16.0.0 - 172.31.255.255 (1,048,576 IP addresses)
 *     10.0.0.0 - 10.255.255.255 (16,777,216 IP addresses)
 *
 * Your simple home network,
 * with its router at the center and computers connected to it—wired or wireless—classifies as one of those networks.
 */

namespace Mishusoft\Http;

use GeoIp2\Database\Reader;
use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Base;
use Mishusoft\Exceptions\HttpException\HttpResponseException;

class IP extends Base
{
    // Declare version.
    public const VERSION = '1.0.2';

    /**
     * The api key for IPDATA.COM website.
     *
     * @var string
     */
    private static string $apiKey = '2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180';

    /**
     * Absolute path of geo lite city db file.
     */
    public static function cityDbFile():string
    {
        return self::dFile(self::requiredDataFile('GeoIP', 'GeoLite2-City'), 'mmdb');
    }


    /**
     * Absolute path of geo lite country db file.
     */
    public static function countryDbFile():string
    {
        return self::dFile(self::requiredDataFile('GeoIP', 'GeoLite2-Country'), 'mmdb');
    }


    /**
     * Get country name of client.
     *
     * @return string
     * @throws HttpResponseException
     * @throws InvalidDatabaseException
     */
    public static function getCountry(): string
    {
        $country = 'Unknown';
        try {
            if (self::isPublicIp(self::get()) === true) {
                $reader  = new Reader(self::countryDbFile());
                $record  = $reader->country(self::get());
                $country = $record->country->name;
            } else {
                $country = 'Private IP';
            }
        } catch (AddressNotFoundException) {
            if (empty($record->country->name) === true) {
                $remoteData = new IpDataClient(self::$apiKey);
                $country    = $remoteData->lookup(self::get())['country_name'];
            }
        } finally {
            return $country;
        }//end try
    }//end getCountry()


    /**
     * @param  string $ip
     * @return boolean
     */
    public static function isPublicIp(string $ip = ''): bool
    {
        return filter_var(
            $ip,
            FILTER_VALIDATE_IP,
            (FILTER_FLAG_IPV4 | FILTER_FLAG_IPV6 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)
        ) === $ip;
    }//end isPublicIp()


    /**
     * Get the IP Address of client.
     *
     * @return string
     */
    public static function get(): string
    {
        $remote  = $_SERVER['REMOTE_ADDR'];
        $client  = false;
        $forward = false;
        if (array_key_exists('HTTP_CLIENT_IP', $_SERVER) === true) {
            $client = $_SERVER['HTTP_CLIENT_IP'];
        }

        if (array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER) === true) {
            $forward = $_SERVER['HTTP_X_FORWARDED_FOR'];
        }

        if (filter_var($client, FILTER_VALIDATE_IP) !== false) {
            $ip = $client;
        } elseif (filter_var($forward, FILTER_VALIDATE_IP) !== false) {
            $ip = $forward;
        } else {
            $ip = $remote;
        }

        return $ip;
    }//end get()


    /**
     * Get all information about client.
     *
     * @param string $purpose The purpose of data.
     *
     * @return array|float|string|null
     * @throws InvalidDatabaseException|AddressNotFoundException
     */
    public static function getInfo(string $purpose = 'location'): float|array|string|null
    {
        $output = 'Unknown Location';

        if (self::isPublicIp(self::get()) === true) {
            $reader = new Reader(self::cityDbFile());
            $record = $reader->city(self::get());
            $purpose = str_replace(['name', "\n", "\t", ' ', '-', '_'], '', strtolower(trim($purpose)));
            $support = [
                'latitude',
                'longitude',
                'timezone',
                'postalcode',
                'city',
                'state',
                'country',
                'countrycode',
                'continent',
                'continentcode',
                'location',
                'address',
            ];
            if (in_array($purpose, $support, true) && filter_var(self::get(), FILTER_VALIDATE_IP)) {
                switch ($purpose) {
                    case 'location':
                        $output = [
                            'latitude'       => $record->location->latitude,
                            'longitude'      => $record->location->longitude,
                            'time_zone'      => $record->location->timeZone,
                            'postal_code'    => $record->postal->code,
                            'city'           => $record->city->name,
                            'state'          => $record->mostSpecificSubdivision->name,
                            'country'        => $record->country->name,
                            'country_code'   => $record->country->isoCode,
                            'continent'      => $record->continent->name,
                            'continent_code' => $record->continent->code,
                        ];
                        break;

                    case 'address':
                        $address   = [$record->country->name];
                        $address[] = $record->mostSpecificSubdivision->name;
                        $address[] = $record->city->name;
                        $output    = implode(', ', array_reverse($address));
                        break;

                    case 'latitude':
                        $output = $record->location->latitude;
                        break;

                    case 'longitude':
                        $output = $record->location->longitude;
                        break;

                    case 'timezone':
                        $output = $record->location->timeZone;
                        break;

                    case 'city':
                        $output = $record->city->name;
                        break;

                    case 'postalcode':
                        $output = $record->postal->code;
                        break;

                    case 'state':
                        $output = $record->mostSpecificSubdivision->name;
                        break;

                    case 'country':
                        $output = $record->country->name;
                        break;

                    case 'countrycode':
                        $output = $record->country->isoCode;
                        break;

                    case 'continent':
                        $output = $record->continent->name;
                        break;

                    case 'continentcode':
                        $output = $record->continent->code;
                        break;

                    default:
                        $output = 'Unknown';
                        break;
                }//end switch
            }//end if
        } else {
            $output = 'Private IP';
        }//end if

        return $output;
    }//end getInfo()


    /**
     * @public
     * @param  string $ip
     * @return boolean
     */
    public static function isPrivateIp(string $ip = ''): bool
    {
        return self::isIp($ip) && !self::isPublicIp($ip);
    }//end isPrivateIp()


    /**
     * @param  string $ip
     * @return boolean
     */
    public static function isIp(string $ip = ''): bool
    {
        return filter_var(
            $ip,
            FILTER_VALIDATE_IP,
            (FILTER_FLAG_IPV4 | FILTER_FLAG_IPV6)
        ) === $ip;
    }//end isIp()


    /**
     * @public
     * @param  string $ip
     * @return boolean
     */
    public static function isPrivateIpv4(string $ip = ''): bool
    {
        return self::isIpv4($ip) && !self::isPublicIpv4($ip);
    }//end isPrivateIpv4()


    /**
     * @param  string $ip
     * @return boolean
     */
    public static function isIpv4(string $ip = ''): bool
    {
        return filter_var(
            $ip,
            FILTER_VALIDATE_IP,
            FILTER_FLAG_IPV4
        ) === $ip;
    }//end isIpv4()


    /**
     * @param  string $ip
     * @return boolean
     */
    public static function isPublicIpv4(string $ip = ''): bool
    {
        return filter_var(
            $ip,
            FILTER_VALIDATE_IP,
            (FILTER_FLAG_IPV4 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)
        ) === $ip;
    }//end isPublicIpv4()


    /**
     * @public
     * @param  string $ip
     * @return boolean
     */
    public static function isPrivateIpv6(string $ip = ''): bool
    {
        return self::isIpv6($ip) && !self::isPublicIpv6($ip);
    }//end isPrivateIpv6()


    /**
     * @param  null $ip
     * @return boolean
     */
    public static function isIpv6($ip = null): bool
    {
        return filter_var(
            $ip,
            FILTER_VALIDATE_IP,
            FILTER_FLAG_IPV6
        ) === $ip;
    }//end isIpv6()


    /**
     * @param  string $ip
     * @return boolean
     */
    public static function isPublicIpv6(string $ip = ''): bool
    {
        return filter_var(
            $ip,
            FILTER_VALIDATE_IP,
            (FILTER_FLAG_IPV6 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)
        ) === $ip;
    }//end isPublicIpv6()
}//end class
