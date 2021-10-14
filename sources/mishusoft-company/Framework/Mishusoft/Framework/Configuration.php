<?php

namespace Mishusoft\Framework;

trait Configuration
{
    /**
     * @return array
     */
    public static function defaultConfiguration():array
    {
        return [
            'name'         => static::NAME,
            'fullName'     => static::FULL_NAME,
            'descriptions' => static::description(),
            'version'      => static::VERSION,
            'charset'      => 'utf8mb4',
            'prefix'       => [
                'char'      => 'msu',
                'separator' => '_',
            ],
            'author'       => [
                'name'        => static::AUTHOR_NAME,
                'profile'     => static::AUTHOR_PROFILE_LINK,
                'dateOfBirth' => static::AUTHOR_DATE_OF_BIRTH,
            ],
            'company'      => [
                'name'               => static::COMPANY_NAME,
                'address'            => static::COMPANY_ADDRESS,
                'map'                => static::COMPANY_ADDRESS_MAP,
                'care'               => static::COMPANY_CONSUMER_CARE,
                'shortDescription'   => static::COMPANY_DESCRIPTION_SHORT,
                'detailsDescription' => static::companyDescriptionDetails(),
                'website'            => static::COMPANY_WEBSITE_LINK,
                'support'            => static::COMPANY_SUPPORT_LINK,
                'mail'               => static::COMPANY_MAIL_LINK,
                'est'                => static::COMPANY_EST_YEAR,
            ],
            'preset'       => [
                'user'            => 'superuser',
                'password'        => 'Ap@17011996',
                'theme'           => 'advanced',
                'directoryIndex'  => 'index',
                'sessionDuration' => '60',
                'config'          => 'webapp',
                'logo'            => 'mishusoft-logo.png',
            ],
            'mime'         => [
                'databaseFileFormat'      => '.msdb',
                'databaseDumpFileFormat'  => '.mdf',
                'configurationFileFormat' => '.mscf',
            ],
            'required'     => [
                'extensions' => [
                    'date',
                    'openssl',
                    'dom',
                    'PDO',
                    'session',
                    'mysqlnd',
                    'Phar',
                    'curl',
                    'pdo_mysql',
                    'bz2',
                    'zip',
                    'yaml',
                    'Zend OPcache',
                ],
                'thirdparty' => [
                    'smarty'    => [
                        'name'    => 'Smarty Template Engine Plug-In',
                        'command' => 'composer require smarty/smarty',
                        'url'     => 'https =>//github.com/smarty-php/smarty',
                    ],
                    'verot'     => [
                        'name'    => 'Verot Uploader Plug-In',
                        'command' => 'composer require verot/class.upload.php',
                        'url'     => 'https =>//github.com/verot/class.upload.php',
                    ],
                    'phpmailer' => [
                        'name'    => 'PHPMailer Plug-In',
                        'command' => 'composer require phpmailer/phpmailer',
                        'url'     => 'https =>//github.com/phpmailer/phpmailer',
                    ],
                    'stripe'    => [
                        'name'    => 'Stripe Payment Plug-In',
                        'command' => 'composer require stripe/stripe-php',
                        'url'     => 'https =>//github.com/stripe/stripe-php',
                    ],
                    'geoip2'    => [
                        'name'    => 'GeoIP Plug-In',
                        'command' => 'composer require geoip2/geoip2',
                        'url'     => 'https =>//packagist.org/packages/geoip2/geoip2',
                    ],
                    /*
                        "mpdf" => [
                        "name" => "MPDF Plug-In",
                        "command" => "composer require mpdf/mpdf",
                        "url" => "https://github.com/mpdf/mpdf"
                    ]*/
                ],
            ],
            'exclude'      => [
                'dir' => [
                    'vendor',
                    'node_modules',
                    'dist',
                    'dist-src',
                    'sources',
                ],
            ],
        ];
    }
}