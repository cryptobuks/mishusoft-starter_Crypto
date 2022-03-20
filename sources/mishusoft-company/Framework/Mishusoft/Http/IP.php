<?php

    declare(strict_types=1);

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
    use Mishusoft\Exceptions\HttpException\HttpResponseException;
    use Mishusoft\System\Base;

    class IP extends Base
    {
        /**
         * The api key for IPDATA.COM website.
         *
         * @var string
         */
        private static string $apiKey = '2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180';

        /**
         * Absolute path of geo lite city db file.
         */
        public static function cityDbFile(): string
        {
            return dFile(self::requiredDataFile('GeoIP', 'GeoLite2-City'), 'mmdb');
        }


        /**
         * Absolute path of geo lite country db file.
         */
        public static function countryDbFile(): string
        {
            return dFile(self::requiredDataFile('GeoIP', 'GeoLite2-Country'), 'mmdb');
        }

        /**
         * Absolute path of geo lite country db file.
         */
        public static function asnDbFile(): string
        {
            return dFile(self::requiredDataFile('GeoIP', 'GeoLite2-ASN'), 'mmdb');
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
                return $country ?? 'unknown';
            }//end try
        }//end getCountry()


        /**
         * @param string $ip
         *
         * @return bool
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
         * @param string $ip
         *
         * @return string|array<string, mixed>
         * @throws AddressNotFoundException
         * @throws InvalidDatabaseException
         */
        public static function getInfo(string $purpose = 'all', string $ip = ''): string|array
        {
            $output = 'Unknown Location';

            //$ipAddress = '174.138.160.44';
            $ipAddress = !empty($ip) ? $ip : self::get();
            // $ipAddress = !empty($ip) ? $ip : '174.138.160.44';

            // pp($ipAddress);

            if (self::isPublicIp($ipAddress) === true) {
                // pp('this is public');
                $cityReader = new Reader(self::cityDbFile());
                $asnReader  = new Reader(self::asnDbFile());
                $cityRecord = $cityReader->city($ipAddress);
                $asnRecord  = $asnReader->asn($ipAddress);
                $purpose    = str_replace(['name', "\n", "\t", ' ', '-', '_'], '', strtolower(trim($purpose)));
                $support    = [
                    'all',
                    'location',
                    'address',
                    'postal',
                    'city',
                    'subdivision',
                    'state',
                    'country',
                    'continent',
                ];
                if (in_array($purpose, $support, true) && filter_var($ipAddress, FILTER_VALIDATE_IP)) {
                    //   pp('valid');
                    $output = match ($purpose) {
                        'all'         => [
                            'details'     => [
                                'ip'             => $asnRecord->ipAddress,
                                'asnNumber'      => $asnRecord->autonomousSystemNumber,
                                'asnOrigination' => $asnRecord->autonomousSystemOrganization,
                            ],
                            'location'    => [
                                'accuracyRadius' => $cityRecord->location->accuracyRadius,
                                'averageIncome'  => $cityRecord->location->averageIncome,
                                'latitude'       => $cityRecord->location->latitude,
                                'longitude'      => $cityRecord->location->longitude,
                                'timeZone'       => $cityRecord->location->timeZone,
                                'metroCode'      => $cityRecord->location->metroCode,
                            ],
                            'city'        => [
                                'geonameId'  => $cityRecord->city->geonameId,
                                'name'       => $cityRecord->city->name,
                                'confidence' => $cityRecord->city->confidence,
                            ],
                            'state'       => [
                                'geonameId'  => $cityRecord->mostSpecificSubdivision->geonameId,
                                'name'       => $cityRecord->mostSpecificSubdivision->name,
                                'isoCode'    => $cityRecord->mostSpecificSubdivision->isoCode,
                                'confidence' => $cityRecord->mostSpecificSubdivision->confidence,
                            ],
                            'subDivision' => [
                                'geonameId'  => $cityRecord->subdivisions[0]->geonameId,
                                'name'       => $cityRecord->subdivisions[0]->name,
                                'isoCode'    => $cityRecord->subdivisions[0]->isoCode,
                                'confidence' => $cityRecord->subdivisions[0]->confidence,
                            ],
                            'country'     => [
                                'geonameId'         => $cityRecord->country->geonameId,
                                'name'              => $cityRecord->country->name,
                                'isoCode'           => $cityRecord->country->isoCode,
                                'confidence'        => $cityRecord->country->confidence,
                                'isInEuropeanUnion' => $cityRecord->country->isInEuropeanUnion,
                            ],
                            'continent'   => [
                                'geoname_id' => $cityRecord->continent->geonameId,
                                'name'       => $cityRecord->continent->name,
                                'code'       => $cityRecord->continent->code,
                            ],
                            'postal'      => [
                                'code' => $cityRecord->postal->code,
                            ],
                        ],
                        'address'     => [
                            'city'          => $cityRecord->city->name,
                            'averageIncome' => $cityRecord->mostSpecificSubdivision->name,
                            'subdivision'   => $cityRecord->location->latitude,
                            'country'       => $cityRecord->country->name,
                        ],
                        'location'    => [
                            'accuracyRadius' => $cityRecord->location->accuracyRadius,
                            'averageIncome'  => $cityRecord->location->averageIncome,
                            'latitude'       => $cityRecord->location->latitude,
                            'longitude'      => $cityRecord->location->longitude,
                            'timeZone'       => $cityRecord->location->timeZone,
                            'metroCode'      => $cityRecord->location->metroCode,
                        ],
                        'city'        => [
                            'geonameId'  => $cityRecord->city->geonameId,
                            'name'       => $cityRecord->city->name,
                            'confidence' => $cityRecord->city->confidence,
                        ],
                        'postal'      => [
                            'code' => $cityRecord->postal->code,
                        ],
                        'state'       => [
                            'geonameId'  => $cityRecord->mostSpecificSubdivision->geonameId,
                            'name'       => $cityRecord->mostSpecificSubdivision->name,
                            'isoCode'    => $cityRecord->mostSpecificSubdivision->isoCode,
                            'confidence' => $cityRecord->mostSpecificSubdivision->confidence,
                        ],
                        'subdivision' => [
                            'geonameId'  => $cityRecord->subdivisions[0]->geonameId,
                            'name'       => $cityRecord->subdivisions[0]->name,
                            'isoCode'    => $cityRecord->subdivisions[0]->isoCode,
                            'confidence' => $cityRecord->subdivisions[0]->confidence,
                        ],
                        'country'     => [
                            'geonameId'         => $cityRecord->country->geonameId,
                            'name'              => $cityRecord->country->name,
                            'isoCode'           => $cityRecord->country->isoCode,
                            'confidence'        => $cityRecord->country->confidence,
                            'isInEuropeanUnion' => $cityRecord->country->isInEuropeanUnion,
                        ],
                        'continent'   => [
                            'geoname_id' => $cityRecord->continent->geonameId,
                            'name'       => $cityRecord->continent->name,
                            'code'       => $cityRecord->continent->code,
                        ],
                        default       => ['ip' => $ipAddress, 'status' => 'Unknown'],
                    };//end switch
                }//end if
            } else {
                $output = ['ip' => $ipAddress, 'status' => 'Private IP'];
            }//end if

            return $output;
        }//end getInfo()


        /**
         * @public
         *
         * @param string $ip
         *
         * @return bool
         */
        public static function isPrivateIp(string $ip = ''): bool
        {
            return self::isIp($ip) && !self::isPublicIp($ip);
        }//end isPrivateIp()


        /**
         * @param string $ip
         *
         * @return bool
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
         *
         * @param string $ip
         *
         * @return bool
         */
        public static function isPrivateIpv4(string $ip = ''): bool
        {
            return self::isIpv4($ip) && !self::isPublicIpv4($ip);
        }//end isPrivateIpv4()


        /**
         * @param string $ip
         *
         * @return bool
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
         * @param string $ip
         *
         * @return bool
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
         *
         * @param string $ip
         *
         * @return bool
         */
        public static function isPrivateIpv6(string $ip = ''): bool
        {
            return self::isIpv6($ip) && !self::isPublicIpv6($ip);
        }//end isPrivateIpv6()


        /**
         * @param null $ip
         *
         * @return bool
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
         * @param string $ip
         *
         * @return bool
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
