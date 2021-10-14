<?php


namespace Mishusoft\System;

use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Exceptions\HttpException\HttpResponseException;
use Mishusoft\Exceptions\RuntimeException\NotFoundException;
use Mishusoft\Framework;
use Mishusoft\Http;
use Mishusoft\Registry;
use Mishusoft\Storage;
use Mishusoft\Ui;
use Mishusoft\Utility\Inflect;
use Mishusoft\Utility\Number;

class FirewallView extends Firewall
{
    private static string $launcher;
    private static string $documentTitle;
    private static string|array $messageDetails = [];

    /**
     * @param array|string $message
     * @param int $http_response_code
     * @throws AddressNotFoundException
     * @throws HttpResponseException
     * @throws InvalidDatabaseException
     * @throws NotFoundException
     */
    public static function maintenance(array|string $message, int $http_response_code): void
    {
        self::$launcher = 'maintenance';
        self::$documentTitle = 'Under Maintenance';
        self::template($message, $http_response_code);
    }

    /**
     * @param string $title
     * @param array|string $message
     * @param int $http_response_code
     * @throws AddressNotFoundException
     * @throws HttpResponseException
     * @throws InvalidDatabaseException
     * @throws NotFoundException
     */
    public static function debug(string $title, array|string $message, int $http_response_code = 503): void
    {
        self::$launcher = 'debug';
        self::$documentTitle = $title;

        self::template($message, $http_response_code);
    }

    /**
     * @param string $title
     * @param array|string $message
     * @param int $http_response_code
     * @throws AddressNotFoundException
     * @throws HttpResponseException
     * @throws InvalidDatabaseException
     * @throws NotFoundException
     */
    public static function runtimeFail(string $title, array|string $message, int $http_response_code = 503): void
    {
        self::$launcher = 'runtime-failure';
        self::$documentTitle = $title;

        self::template($message, $http_response_code);
    }

    /**
     * @param string $title
     * @param array|string $message
     * @param int $http_response_code
     * @throws AddressNotFoundException
     * @throws HttpResponseException
     * @throws InvalidDatabaseException
     * @throws NotFoundException
     */
    public static function protection(string $title, array|string $message, int $http_response_code): void
    {
        self::$launcher = 'protection';
        self::$documentTitle = $title;

        self::template($message, $http_response_code);
    }

    /**
     * @param array|string $message
     * @param int $http_response_code
     * @throws AddressNotFoundException
     * @throws HttpResponseException
     * @throws InvalidDatabaseException
     * @throws NotFoundException
     */
    private static function template(array|string $message, int $http_response_code): void
    {
        self::$messageDetails = $message;

        if (self::$launcher === 'protection') {
            self::$documentTitle = sprintf('%s - Mishusoft Firewall', ucfirst(self::$documentTitle));
        }

        // Start application web interface.
        Ui::start();
        Ui::setDocumentTitle(self::$documentTitle);

        //Ui::element(Ui::getDocumentHeadElement(), 'style', ['text'=>$cssContent]);
        Ui::elementList(Ui::getDocumentHeadElement(), ['link' => Storage::assignableWebFavicons()]);

        Ui::elementList(
            Ui::getDocumentHeadElement(),
            [
                'meta' => [
                    ['charset' => 'UTF-8'],
                    ['name' => 'viewport', 'content' => 'width=device-width, initial-scale=1.0',],
                    ['name' => 'keywords', 'content' => 'blocked, banned, denied',],
                    ['name' => 'company', 'content' => Framework::COMPANY_NAME,],
                    ['name' => 'author', 'content' => Framework::AUTHOR_NAME,],
                    ['name' => 'description', 'content' => self::$documentTitle,],
                ],
                'style' => [
                    ['text' => Storage\FileSystem::read(Storage::fViewsFullPath('css/embedded.css')),],
                ],
                //'style' => array(array('text'=>$cssContent))
            ]
        );
        //<link rel="icon" type="image/vnd.microsoft.icon" sizes="16x16" href="{logoFolder}favicon.ico">

        Ui::element(Ui::getDocumentRoot(), 'body', ['child' => self::childElement()]);


        Ui::display($http_response_code);
    }

    /**
     * @return array
     * @throws AddressNotFoundException
     * @throws HttpResponseException
     * @throws InvalidDatabaseException
     * @throws NotFoundException
     */
    private static function childElement(): array
    {
        if (self::$launcher === 'debug') {
            return self::viewContentBuilder();
        }

        return [
            'section' => [
                ['class' => 'application', 'child' => [
                    'article' => [
                        ['class' => 'application-content', 'child' => self::viewContentBuilder()],
                    ],
                ]],
            ],
        ];
    }

    /**
     * @return array
     * @throws AddressNotFoundException
     * @throws HttpResponseException
     * @throws InvalidDatabaseException
     * @throws NotFoundException
     */
    private static function viewContentBuilder(): array
    {
        if (self::$launcher === 'protection') {
            return [
                'div' => [
                    ['class' => 'flex-justify-center', 'child' => [
                        'img' => [
                            'class' => 'application-content-title-icon',
                            'alt' => 'access denied',
                            'src' => Storage::toDataUri('framework', 'images/icons/restriction-shield.png'),
                        ],],
                    ],
                    ['child' => self::assignableProtectionContentBuilder()],
                    [
                        'class' => 'application-content-body',
                        'child' => self::assignableVisitorContentBuilder('Block details'),
                    ],
                ],];
        }

        if (self::$launcher === 'runtime-failure') {
            if (self::isFailureMessage() === false) {
                if (self::isUnavailable()) {
                    $imageNode = [
                        'img' => [
                            [
                                'class' => 'application-content-title-icon',
                                'alt' => 'Unavailable',
                                'src' => Storage::toDataUri('framework', 'images/icons/unavailable.png'),
                            ],
                        ],
                    ];
                } else {
                    $imageNode = [
                        'img' => [
                            [
                                'class' => 'application-content-title-icon',
                                'alt' => self::$documentTitle,
                                'src' => Storage::toDataUri(
                                    'framework',
                                    'images/icons/' . self::lowerDocumentTitle() . '.png'
                                ),
                            ],
                        ],
                    ];
                }

                return [
                    'div' => [
                        ['class' => 'flex-justify-center', 'child' => $imageNode,],
                        ['class' => 'flex-justify-center error-title', 'text' => self::messageDescriptionOnly()],
                        [
                            'class' => 'application-content-body',
                            'child' => self::assignableVisitorContentBuilder('About Yourself'),
                        ],
                    ],];
            }

            return [
                'div' => [
                    ['class' => 'flex-justify-center', 'child' => [
                        'img' => [
                            [
                                'class' => 'application-content-title-icon',
                                'alt' => 'information',
                                'src' => Storage::toDataUri('framework', 'images/icons/nothing-found.png'),
                            ],
                        ],
                    ],],
                    ['class' => 'application-content-body', 'child' => [
                        'article' => [
                            ['child' => self::assignableInfoContentBuilder()],
                            ['child' => self::assignableVisitorContentBuilder('About Yourself')],
                        ],
                    ]],
                ],];
        }

        if (self::$launcher === 'debug') {
            if (self::isDebugMessage() === true) {
                return [
                    'section' => [
                        ['class' => 'application application-concat', 'child' => [
                            'article' => [
                                [
                                    'class' => 'application-content application-content-width-auto border-grey-300',
                                    'style' => 'flex-direction: row;',
                                    'child' => [
                                        'div' => [
                                            ['class' => 'flex-justify-center', 'style' => 'margin-right: .2em;', 'child' => [
                                                'img' => [
                                                    [
                                                        'class' => 'application-content-title-icon application-content-title-icon-concat',
                                                        'alt' => 'bug',
                                                        'src' => Storage::toDataUri('framework', 'images/icons/bug.png'),
                                                    ],
                                                ],
                                            ]],
                                            [
                                                'class' => 'flex-justify-center error-title-concat',
                                                'text' => RUNTIME_ROOT_PATH,
                                            ],
                                        ],
                                    ],],
                                [
                                    'class' => 'application-content application-content-width-auto',
                                    'style' => 'padding:1.25rem 2.5rem;',
                                    'child' => [
                                        'div' => [
                                            ['child' => [
                                                'div' => [
                                                    [
                                                        'style' => 'color: var(--gray-500);',
                                                        'text' => self::$messageDetails['caption'],
                                                    ],
                                                ],
                                            ]],
                                            [
                                                'style' => 'color: var(--gray-800);font-size: 1.125rem;',
                                                'text' => self::$messageDetails['description'],
                                            ],
                                        ],
                                    ],],
                            ],
                        ],],
                        ['class' => 'application application-concat', 'child' => [
                            'article' => [
                                ['class' => 'application-content-concat', 'child' => [
                                    'div' => [
                                        [
                                            'class' => 'application-content-body application-content-body-concat',
                                            'child' => self::assignableStackTraceBuilder(),
                                        ],
                                    ],
                                ],],
                            ],
                        ],
                        ],
                        ['class' => 'application application-concat', 'style' => 'margin-bottom:20px', 'child' => [
                            'article' => [
                                ['class' => 'application-content application-content-width-auto', 'child' => [
                                    'div' => [
                                        [
                                            'class' => 'details-title details-title-replacement',
                                            'text' => 'About Yourself',
                                        ],
                                    ],
                                    'table' => [
                                        ['class' => 'details', 'style' => 'box-shadow:none;', 'child' => [
                                            'tr' => self::assignableVisitorDetails(),
                                        ]],
                                    ],
                                ],],
                            ],
                        ],],
                    ],
                ];
            }

            return [];
        }

        return [];
    }


    private static function lowerDocumentTitle(): string
    {
        return strtolower(self::$documentTitle);
    }

    private static function lowerMessageDetails(): array
    {
        return array_change_key_case(self::$messageDetails);
    }

    private static function messageDescriptionOnly(): string
    {
        if (array_key_exists('description', self::lowerMessageDetails()) === true) {
            return self::$messageDetails['description'];
        }
        return 'An error occurred!';
    }

    private static function isFailureMessage(): bool
    {
        return array_key_exists('file', self::$messageDetails) && array_key_exists('location', self::$messageDetails);
    }

    private static function isDebugMessage(): bool
    {
        return array_key_exists('caption', self::$messageDetails) && array_key_exists('stack', self::$messageDetails);
    }

    private static function isUnavailable(): bool
    {
        return self::lowerDocumentTitle() === 'not found' || str_contains(self::lowerDocumentTitle(), 'unavailable');
    }

    private static function assignableProtectionContentBuilder(): array
    {
        $contents = [];

        if (array_key_exists('caption', self::$messageDetails) === true) {
            $contents['div'][] = ['class' => 'flex-justify-center error-title',
                'text' => self::$messageDetails['caption'],
            ];
        }
        if (array_key_exists('message', self::$messageDetails) === true) {
            if (is_array(self::$messageDetails['message']) === true) {
                foreach (self::$messageDetails['message'] as $message) {
                    $contents['div'][] = ['class' => 'flex-justify-center message', 'text' => $message];
                }
            } else {
                $contents['div'][] = ['class' => 'flex-justify-center message',
                    'text' => self::$messageDetails['message'],
                    ];
            }

        } else {
            $contents['div'][] = ['class' => 'flex-justify-center message', 'text' => 'An error occurred'];
        }

        return $contents;
    }

    /**
     * @return array
     */
    private static function assignableInfoContentBuilder(): array
    {
        return [
            'div' => [
                ['class' => 'details-title', 'text' => 'Information',],
            ],
            'table' => [
                ['class' => 'details', 'child' => [
                    'tr' => self::assignableMessageDetails(),
                ]],
            ],
        ];
    }

    /**
     * @return array
     */
    private static function assignableStackTraceBuilder(): array
    {
        return [
            'div' => [
                ['class' => 'details-title error-title-replacement', 'text' => 'Stack Trace',],
            ],
            'table' => [
                ['class' => 'details', 'style' => 'box-shadow:none;', 'child' => [
                    'tr' => self::assignableStackTraceDetails(),
                ]],
            ],
        ];
    }

    /**
     * @return array
     */
    private static function assignableStackTraceDetails(): array
    {
        $traceDetails = [];
        foreach (self::$messageDetails['stack'] as $key => $value) {
            $traceDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        [
                            'class' => 'details-item-details details-item-details-concat details-item-serial',
                            'text' => Number::next($key),
                        ],
                        [
                            'class' => 'details-item-details details-item-details-concat padding-left-10px',
                            'text' => $value,
                        ],
                    ],
                ],
            ];
        }

        return $traceDetails;
    }


    /**
     * @param string $title
     * @return array
     * @throws HttpResponseException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     */
    protected static function assignableVisitorContentBuilder(string $title): array
    {
        return [
            'div' => [
                ['class' => 'details-title', 'text' => ucfirst($title),],
            ],
            'table' => [
                ['class' => 'details', 'child' => [
                    'tr' => self::assignableVisitorDetails(),
                ]],
            ],
        ];
    }

    /**
     * @return array
     */
    private static function assignableMessageDetails(): array
    {
        $messageDetails = [];
        foreach (self::$messageDetails as $key => $value) {
            $messageDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => sprintf('%s:', ucfirst($key)),],
                        ['class' => 'details-item-details', 'text' => $value,],
                    ],
                ],
            ];
        }

        return $messageDetails;
    }


    /**
     * @return array
     * @throws HttpResponseException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     */
    private static function assignableVisitorDetails(): array
    {
        $webBrowser = Registry::Browser();
        $visitorDetails = [];

        //Debug::preOutput($webBrowser);
        if (self::$launcher === 'protection') {
            // Reason of block.
            $visitorDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => 'Reason :',],
                        ['class' => 'details-item-details', 'text' => ucfirst(self::$messageDetails['caption']),],
                    ],
                ],
            ];
        }


        // Client ip address capturing.
        $visitorDetails[] = [
            'class' => 'details-item',
            'child' => [
                'td' => [
                    ['class' => 'details-item-title', 'text' => 'Your IP :',],
                    ['class' => 'details-item-details', 'text' => Http\IP::get(),],
                ],
            ],
        ];

        // Current web url capturing.
        $visitorDetails[] = [
            'class' => 'details-item',
            'child' => [
                'td' => [
                    ['class' => 'details-item-title', 'text' => 'URL :',],
                    ['class' => 'details-item-details', 'text' => $webBrowser::getVisitedPage(),],
                ],
            ],
        ];

        // Capturing the user agent of browser.
        $visitorDetails[] = [
            'class' => 'details-item',
            'child' => [
                'td' => [
                    ['class' => 'details-item-title', 'text' => 'User Agent :',],
                    ['class' => 'details-item-details', 'text' => $webBrowser->getUserAgent(),],
                ],
            ],
        ];

        // avoid error country capturing
        if (Inflect::lower(Http\IP::getCountry()) !== 'unknown') {
            $visitorDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => 'Country :',],
                        [
                            'class' => 'details-item-details',
                            'text' => Http\IP::getCountry() . ' (' . Http\IP::get() . ')',
                        ],
                    ],
                ],
            ];
        } elseif (Inflect::lower(Http\IP::getInfo('country')) !== 'unknown location') {
            $visitorDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => 'Country :',],
                        [
                            'class' => 'details-item-details',
                            'text' => Http\IP::getInfo('country') . ' (' . Http\IP::get() . ')',
                        ],
                    ],
                ],
            ];
        } else {
            $visitorDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => 'Country :',],
                        ['class' => 'details-item-details', 'text' => 'Unknown' . ' (' . Http\IP::get() . ')',],
                    ],
                ],
            ];
        }//end if

        //Debug::preOutput($webBrowser->getBrowserNameFull());

        // avoid error browser capturing
        if (Inflect::lower($webBrowser->getBrowserName()) !== 'unknown') {
            $visitorDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => 'Browser :',],
                        ['class' => 'details-item-details', 'text' => $webBrowser->getBrowserNameFull(),],
                    ],
                ],
            ];
        }

        // avoid error device capturing
        if (Inflect::lower($webBrowser->getDeviceName()) !== 'unknown') {
            $deviceAndArchitecture = $webBrowser->getDeviceName();
            $deviceAndArchitecture .= ' (' . strtolower($webBrowser->getBrowserArchitecture()) . ')';

            $visitorDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => 'Device :',],
                        [
                            'class' => 'details-item-details',
                            'text' => $deviceAndArchitecture,
                        ],
                    ],
                ],
            ];
        }


        return $visitorDetails;
    }
}
