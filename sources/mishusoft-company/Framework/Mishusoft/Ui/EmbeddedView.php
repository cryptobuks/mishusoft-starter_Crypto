<?php


namespace Mishusoft\Ui;

use Mishusoft\Exceptions\RuntimeException\NotFoundException;
use Mishusoft\Framework;
use Mishusoft\Registry;
use Mishusoft\Storage;
use Mishusoft\Ui;
use Mishusoft\Utility\Inflect;
use Mishusoft\Utility\Number;

class EmbeddedView
{
    private static string $launcher;
    private static string $documentTitle;
    private static string|array $messageDetails = [];

    /**
     * @param array|string $message
     * @param int $http_response_code
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
     * @throws NotFoundException
     */
    public static function protection(string $title, array|string $message, int $http_response_code = 403): void
    {
        self::$launcher = 'protection';
        self::$documentTitle = $title;

        self::template($message, $http_response_code);
    }

    /**
     * @param string $title
     * @param array|string $message
     * @param int $http_response_code
     * @throws NotFoundException
     */
    public static function welcomeToFramework(string $title, array|string $message, int $http_response_code = 200): void
    {
        self::$launcher = 'welcome-to-framework';
        self::$documentTitle = $title;

        self::template($message, $http_response_code);
    }

    /**
     * @param array|string $message
     * @param int $http_response_code
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
            ]
        );

        Ui::elementList(Ui::getDocumentHeadElement(), [
            'link' => Storage::assignableWebFavicons('framework'),
            'style' => [
                ['text' => Storage\FileSystem::read(Storage::fViewsFullPath('css/embedded.css')),],
            ],
        ]);


        //<link rel="icon" type="image/vnd.microsoft.icon" sizes="16x16" href="{logoFolder}favicon.ico">
        //Ui::element(Ui::getDocumentHeadElement(), 'style', ['text'=>$cssContent]);

        Ui::element(Ui::getDocumentRoot(), 'body', ['child' => self::childElement()]);


        Ui::display($http_response_code);
    }

    /**
     * @return array
     * @throws NotFoundException
     */
    private static function childElement(): array
    {
        if (self::$launcher === 'debug') {
            return self::viewContentBuilder();
        }

        return [
            'article' => [
                ['class' => 'application', 'child' => [
                    'section' => [
                        ['class' => 'application-content', 'child' => self::viewContentBuilder()],
                    ],
                ]],
            ],
        ];
    }

    /**
     * @return array
     * @throws NotFoundException
     */
    private static function debugIconAndAppDir(): array
    {
        return [
            'div' => [
                ['class' => 'flex-justify-center', 'style' => 'margin-right: .2em;', 'child' => [
                    'img' => self::makeImageElement(
                        'application-content-title-icon application-content-title-icon-concat',
                        'bug',
                        'images/icons/bug.png'
                    ),
                ]],
                self::setAttributes([
                    'class' => 'flex-justify-center error-title-concat',
                    'text' => RUNTIME_ROOT_PATH,
                ]),
            ],
        ];
    }

    /**
     * @return array
     * @throws NotFoundException
     */
    private static function viewContentBuilder(): array
    {
        if (self::$launcher === 'protection') {
            return [
                'div' => [
                    ['class' => 'flex-justify-center', 'child' => [
                        'img' => self::makeImageElement(
                            'application-content-title-icon',
                            'access denied',
                            'images/icons/restriction-shield.png'
                        ),],
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
                        'img' => self::makeImageElement(
                            'application-content-title-icon',
                            'Unavailable',
                            'images/icons/unavailable.png'
                        ),
                    ];
                } else {
                    $imageNode = [
                        'img' => self::makeImageElement(
                            'application-content-title-icon',
                            self::$documentTitle,
                            'images/icons/' . self::lowerDocumentTitle() . '.png'
                        ),
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
                        'img' => self::makeImageElement(
                            'application-content-title-icon',
                            'information',
                            'images/icons/nothing-found.png'
                        ),
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
                    'article' => [
                        ['class' => 'application application-concat', 'child' => [
                            'section' => [
                                [
                                    'class' => 'application-content application-content-width-auto border-grey-300',
                                    'style' => 'flex-direction: row;',
                                    'child' => self::debugIconAndAppDir(),],
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

        if (self::$launcher === 'welcome-to-framework') {
            $contents = [
                'div' => [
                    ['class' => 'flex-justify-center', 'child' => [
                        'img' => self::makeImageElement(
                            'application-content-title-icon',
                            'welcome',
                            'logos/mishusoft-logo-lite.png'
                        ),
                    ],],
                ],];
//            $contents = self::mergeChild(
//                self::makeElement(
//                    'div',
//                    self::setAttributes(['class' => 'flex-justify-center'], self::makeElement(
//                        'img',
//                        self::makeImageElement(
//                            'application-content-title-icon',
//                            'welcome',
//                            'logos/mishusoft-logo-lite.png'
//                        )
//                    )),
//                )
//            );
            $common = 'flex-justify-center';
            $commonMessage = 'flex-justify-center message';
            $boxShadowNone = 'box-shadow: none;';
            $additionalCommon = $boxShadowNone . 'margin-bottom: 20px;';

            if (is_array(self::$messageDetails) === true) {
                foreach (self::$messageDetails as $type => $message) {
                    if ($type === 'caption') {
                        $contents['div'][] = [
                            'class' => $common . ' error-title',
                            'style' => 'color: var(--blue-deep);',
                            'text' => $message,
                        ];
                    }
                    if ($type === 'description') {
                        $additional = $additionalCommon . 'background: transparent;border: none;text-align: center;font-size: 15px;line-height: 1.6;';
                        $contents['div'][] = self::setAttributes(
                            ['class' => $commonMessage, 'style' => $additional, 'text' => $message,]
                        );
                    }
                    if ($type === 'warning') {
                        $additional = $additionalCommon . 'background: rgba(157, 87, 3, .15);color: rgba(157, 87, 3, 1); border:2px solid rgba(157, 87, 3, 1);';
                        $contents['div'][] = self::setAttributes(
                            ['class' => $commonMessage, 'style' => $additional, 'text' => $message,]
                        );
                    }
                    if ($type === 'copyright') {
                        $contents['div'][] = self::setAttributes(
                            ['class' => 'flex-column-center', 'style' => 'align-items: center;'],
                            self::makeElement(
                                'div',
                                self::attachChild(
                                    self::setAttributes(
                                        [
                                            'class' => 'flex-row-center',
                                            'child' => self::assignableSocialMediaLinkWithIcons(),
                                        ]
                                    ),
                                    self::setAttributes(['text' => $message,]),
                                )
                            )
                        );
                    }
                }
            }
            if (is_string(self::$messageDetails) === true) {
                $contents['div'][] = self::setAttributes([
                    'class' => $common . ' message',
                    'style' => $boxShadowNone,
                    'text' => self::$messageDetails,
                ]);
            }

            return $contents;
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

    /**
     * @return bool
     */
    private static function isFailureMessage(): bool
    {
        return array_key_exists('file', self::$messageDetails) && array_key_exists('location', self::$messageDetails);
    }

    /**
     * @return bool
     */
    private static function isDebugMessage(): bool
    {
        return array_key_exists('caption', self::$messageDetails) && array_key_exists('stack', self::$messageDetails);
    }

    /**
     * @return bool
     */
    private static function isUnavailable(): bool
    {
        return self::lowerDocumentTitle() === 'not found' || str_contains(self::lowerDocumentTitle(), 'unavailable');
    }

    /**
     * @return array
     */
    private static function assignableProtectionContentBuilder(): array
    {
        $contents = [];
        $common = 'flex-justify-center';

        if (is_array(self::$messageDetails) === true) {
            if (array_key_exists('caption', self::$messageDetails) === true) {
                $contents['div'][] = self::setAttributes(
                    ['class' => $common . ' error-title', 'text' => self::$messageDetails['caption']]
                );
            }
            if (array_key_exists('message', self::$messageDetails) === true) {
                if (is_array(self::$messageDetails['message']) === true) {
                    foreach (self::$messageDetails['message'] as $message) {
                        $contents['div'][] = self::setAttributes(['class' => $common . ' message', 'text' => $message]);
                    }
                } else {
                    $contents['div'][] = self::setAttributes(
                        ['class' => $common . ' message', 'text' => self::$messageDetails['message']]
                    );
                }
            } else {
                $contents['div'][] = self::setAttributes(
                    ['class' => $common . ' message', 'text' => 'An error occurred']
                );
            }
        }
        if (is_string(self::$messageDetails) === true) {
            $contents['div'][] = self::setAttributes(
                ['class' => $common . ' message', 'text' => self::$messageDetails]
            );
        }

        return $contents;
    }

    /**
     * @return array
     * @throws NotFoundException
     */
    private static function assignableSocialMediaLinkWithIcons(): array
    {

        return self::makeElement('a', self::setAttributes([
            self::makeAnchorElement(
                'link',
                'https://www.facebook.com/mralaminahamed/',
                'facebook',
                self::makeElement(
                    'img',
                    self::makeImageElement(
                        'social-link-img',
                        'facebook',
                        'images/icons/social-media/facebook-new.png'
                    ),
                )
            ),
            self::makeAnchorElement(
                'link',
                'https://www.instagram.com/mralaminahamed/',
                'instagram',
                self::makeElement(
                    'img',
                    self::makeImageElement(
                        'social-link-img',
                        'instagram',
                        'images/icons/social-media/instagram-new.png'
                    ),
                )
            ),
            self::makeAnchorElement(
                'link',
                'https://www.linkedin.com/in/mralaminahamed/',
                'linkedin',
                self::makeElement(
                    'img',
                    self::makeImageElement(
                        'social-link-img',
                        'linkedin',
                        'images/icons/social-media/linkedin.png'
                    ),
                )
            ),
            self::makeAnchorElement(
                'link',
                'https://twitter.com/mralaminahamed',
                'twitter',
                self::makeElement(
                    'img',
                    self::makeImageElement(
                        'social-link-img',
                        'twitter',
                        'images/icons/social-media/twitter.png'
                    ),
                )
            ),
        ]));
    }

    /**
     * @param string $classname
     * @param string $alternate
     * @param string $src
     * @return array
     * @throws NotFoundException
     */
    private static function makeImageElement(string $classname, string $alternate, string $src): array
    {
        return [
            'rel' => 'preload',
            'class' => $classname,
            'alt' => ucfirst($alternate),
            'title' => ucfirst($alternate),
            'src' => Storage::toDataUri('framework', $src, 'remote'),
        ];
    }


    private static function makeAnchorElement(string $class, string $href, string $title, array $child = []): array
    {
        $attributes = ['class' => $class, 'title' => ucfirst($title), 'href' => $href,];
        return self::any($attributes, $child);
    }


    /**
     * @param array $attributes
     * @param array $childElement
     * @return array
     */
    public static function any(array &$attributes = [], array $childElement = []): array
    {
        if (count($childElement) > 0) {
            $attributes['child'] = $childElement;
        }

        return $attributes;
    }

    public static function attachChild(array ...$child): array
    {
        return $child;
    }

    public static function mergeChild(array ...$child): array
    {
        return array_merge_recursive($child);
    }

    /**
     * @param array $attributes
     * @param array $childElement
     * @return array
     */
    public static function setAttributes(array $attributes = [], array $childElement = []): array
    {
        return self::any($attributes, $childElement);
    }

    /**
     * @param string $tag
     * @param array $attributes
     * @return array[]
     */
    public static function makeElement(string $tag, array $attributes = []): array
    {
        return [
            $tag => $attributes,
        ];
    }


    /**
     * @return array
     */
    private static function assignableInfoContentBuilder(): array
    {
//        return [
//            'div' => ['class' => 'details-title', 'text' => 'Information',],
//            'table' => [
//                ['class' => 'details', 'child' => [
//                    'tr' => self::assignableMessageDetails(),
//                ]],
//            ],
//        ];
        return array_merge(
            self::makeElement('div', self::setAttributes(['class' => 'details-title', 'text' => 'Information',])),
            self::makeElement('table', self::setAttributes(['class' => 'details',], self::makeElement(
                'tr',
                self::assignableMessageDetails()
            ))),
        );
    }

    /**
     * @return array
     */
    private static function assignableStackTraceBuilder(): array
    {
//        return [
//            'div' => [
//                ['class' => 'details-title error-title-replacement', 'text' => 'Stack Trace',],
//            ],
//            'table' => [
//                ['class' => 'details', 'style' => 'box-shadow:none;', 'child' => [
//                    'tr' => self::assignableStackTraceDetails(),
//                ]],
//            ],
//        ];
        return self::mergeChild(
            self::makeElement(
                'div',
                self::setAttributes(['class' => 'details-title error-title-replacement', 'text' => 'Stack Trace',])
            ),
            self::makeElement(
                'table',
                self::setAttributes(['class' => 'details', 'style' => 'box-shadow:none;',], self::makeElement(
                    'tr',
                    self::assignableStackTraceDetails()
                ))
            ),
        );
    }

    /**
     * @return array
     */
    private static function assignableStackTraceDetails(): array
    {
        $traceDetails = [];
        foreach (self::$messageDetails['stack'] as $key => $value) {
//            $traceDetails[] = [
//                'class' => 'details-item',
//                'child' => [
//                    'td' => [
//                        [
//                            'class' => 'details-item-details details-item-details-concat details-item-serial',
//                            'text' => Number::next($key),
//                        ],
//                        [
//                            'class' => 'details-item-details details-item-details-concat padding-left-10px',
//                            'text' => $value,
//                        ],
//                    ],
//                ],
//            ];
            $traceDetails[] = self::setAttributes(
                ['class' => 'details-item',],
                self::makeElement(
                    'td',
                    self::attachChild(
                        self::setAttributes(
                            [
                                'class' => 'details-item-details details-item-details-concat details-item-serial',
                                'text' => Number::next($key),
                            ],
                        ),
                        self::setAttributes(
                            [
                                'class' => 'details-item-details details-item-details-concat padding-left-10px',
                                'text' => $value,
                            ],
                        ),
                    )
                )
            );
        }

        return $traceDetails;
    }


    /**
     * @param string $title
     * @return array
     */
    protected static function assignableVisitorContentBuilder(string $title): array
    {
//        return [
//            'div' => [
//                ['class' => 'details-title', 'text' => ucfirst($title),],
//            ],
//            'table' => [
//                ['class' => 'details', 'child' => [
//                    'tr' => self::assignableVisitorDetails(),
//                ],
//                ],
//            ],
//        ];
        return self::attachChild(
            self::makeElement(
                'div',
                self::setAttributes(['class' => 'details-title', 'text' => ucfirst($title),])
            ),
            self::makeElement(
                'table',
                self::setAttributes(['class' => 'details',], self::makeElement(
                    'tr',
                    self::assignableVisitorDetails()
                ))
            ),
        );
    }

    /**
     * @return array
     */
    private static function assignableMessageDetails(): array
    {
        $messageDetails = [];
        foreach (self::$messageDetails as $key => $value) {
//            $messageDetails[] = [
//                'class' => 'details-item',
//                'child' => [
//                    'td' => [
//                        ['class' => 'details-item-title', 'text' => sprintf('%s:', ucfirst($key)),],
//                        ['class' => 'details-item-details', 'text' => $value,],
//                    ],
//                ],
//            ];
            $messageDetails[] = self::setAttributes(
                ['class' => 'details-item',],
                self::makeElement(
                    'td',
                    self::attachChild(
                        self::setAttributes(
                            ['class' => 'details-item-title', 'text' => sprintf('%s:', ucfirst($key)),],
                        ),
                        self::setAttributes(
                            ['class' => 'details-item-details', 'text' => $value,],
                        ),
                    )
                )
            );
        }

        return $messageDetails;
    }


    /**
     * @return array
     */
    private static function assignableVisitorDetails(): array
    {
        $webBrowser = Registry::Browser();
        $visitorDetails = [];


        if (self::$launcher === 'protection') {
            // Reason of block.
            if (is_array(self::$messageDetails)) {
                $captionOrMessage = ucfirst(self::$messageDetails['caption']);
            } else {
                $captionOrMessage = ucfirst(self::$messageDetails);
            }
//            $visitorDetails[] = [
//                'class' => 'details-item',
//                'child' => [
//                    'td' => [
//                        ['class' => 'details-item-title', 'text' => 'Reason :',],
//                        [
//                            'class' => 'details-item-details',
//                            'text' => $captionOrMessage,
//                        ],
//                    ],
//                ],
//            ];

            $visitorDetails[] = self::setAttributes(
                ['class' => 'details-item',],
                self::makeElement(
                    'td',
                    self::attachChild(
                        self::setAttributes(
                            ['class' => 'details-item-title', 'text' => 'Reason :',],
                        ),
                        self::setAttributes(
                            [
                                'class' => 'details-item-details',
                                'text' => $captionOrMessage,
                            ],
                        ),
                    )
                )
            );
        }


        // Client ip address capturing.
//        $visitorDetails[] = [
//            'class' => 'details-item',
//            'child' => [
//                'td' => [
//                    ['class' => 'details-item-title', 'text' => 'Your IP :',],
//                    ['class' => 'details-item-details', 'text' => Registry::Ip()::get(),],
//                ],
//            ],
//        ];
        $visitorDetails[] = self::setAttributes(
            ['class' => 'details-item',],
            self::makeElement(
                'td',
                self::attachChild(
                    self::setAttributes(
                        ['class' => 'details-item-title', 'text' => 'Your IP :',],
                    ),
                    self::setAttributes(
                        ['class' => 'details-item-details', 'text' => Registry::Ip()::get(),],
                    ),
                )
            )
        );

        // Current web url capturing.
//        $visitorDetails[] = [
//            'class' => 'details-item',
//            'child' => [
//                'td' => [
//                    ['class' => 'details-item-title', 'text' => 'URL :',],
//                    ['class' => 'details-item-details', 'text' => $webBrowser::getVisitedPage(),],
//                ],
//            ],
//        ];
        $visitorDetails[] = self::setAttributes(
            ['class' => 'details-item',],
            self::makeElement(
                'td',
                self::attachChild(
                    self::setAttributes(
                        ['class' => 'details-item-title', 'text' => 'URL :',],
                    ),
                    self::setAttributes(
                        ['class' => 'details-item-details', 'text' => $webBrowser::getVisitedPage(),],
                    ),
                )
            )
        );

        // Capturing the user agent of browser.
//        $visitorDetails[] = [
//            'class' => 'details-item',
//            'child' => [
//                'td' => [
//                    ['class' => 'details-item-title', 'text' => 'User Agent :',],
//                    ['class' => 'details-item-details', 'text' => $webBrowser->getUserAgent(),],
//                ],
//            ],
//        ];
        $visitorDetails[] = self::setAttributes(
            ['class' => 'details-item',],
            self::makeElement(
                'td',
                self::attachChild(
                    self::setAttributes(
                        ['class' => 'details-item-title', 'text' => 'User Agent :',],
                    ),
                    self::setAttributes(
                        ['class' => 'details-item-details', 'text' => $webBrowser->getUserAgent(),],
                    ),
                )
            )
        );

        // avoid error country capturing
        if (Inflect::lower(Registry::Ip()::getCountry()) !== 'unknown') {
//            $visitorDetails[] = [
//                'class' => 'details-item',
//                'child' => [
//                    'td' => [
//                        ['class' => 'details-item-title', 'text' => 'Country :',],
//                        ['class' => 'details-item-details', 'text' => Registry::Ip()::getCountry() . ' (' . Registry::Ip()::get() . ')',],
//                    ],
//                ],
//            ];
            $visitorDetails[] = self::setAttributes(
                ['class' => 'details-item',],
                self::makeElement(
                    'td',
                    self::attachChild(
                        self::setAttributes(
                            ['class' => 'details-item-title', 'text' => 'Country :',],
                        ),
                        self::setAttributes(
                            ['class' => 'details-item-details', 'text' => Registry::Ip()::getCountry() . ' (' . Registry::Ip()::get() . ')',],
                        ),
                    )
                )
            );
        } elseif (Inflect::lower(Registry::Ip()::getInfo('country')) !== 'unknown location') {
//            $visitorDetails[] = [
//                'class' => 'details-item',
//                'child' => [
//                    'td' => [
//                        ['class' => 'details-item-title', 'text' => 'Country :',],
//                        ['class' => 'details-item-details', 'text' => Registry::Ip()::getInfo('country') . ' (' . Registry::Ip()::get() . ')',],
//                    ],
//                ],
//            ];
            $visitorDetails[] = self::setAttributes(
                ['class' => 'details-item',],
                self::makeElement(
                    'td',
                    self::attachChild(
                        self::setAttributes(
                            ['class' => 'details-item-title', 'text' => 'Country :',],
                        ),
                        self::setAttributes(
                            [
                                'class' => 'details-item-details',
                                'text' => Registry::Ip()::getInfo('country') . ' (' . Registry::Ip()::get() . ')',
                            ],
                        ),
                    )
                )
            );
        } else {
//            $visitorDetails[] = [
//                'class' => 'details-item',
//                'child' => [
//                    'td' => [
//                        ['class' => 'details-item-title', 'text' => 'Country :',],
//                        ['class' => 'details-item-details', 'text' => 'Unknown' . ' (' . Registry::Ip()::get() . ')',],
//                    ],
//                ],
//            ];
            $visitorDetails[] = self::setAttributes(
                ['class' => 'details-item',],
                self::makeElement(
                    'td',
                    self::attachChild(
                        self::setAttributes(
                            ['class' => 'details-item-title', 'text' => 'Country :',],
                        ),
                        self::setAttributes(
                            ['class' => 'details-item-details', 'text' => 'Unknown' . ' (' . Registry::Ip()::get() . ')',],
                        ),
                    )
                )
            );
        }//end if

        // avoid error browser capturing
        if (Inflect::lower($webBrowser->getBrowserName()) !== 'unknown') {
//            $visitorDetails[] = [
//                'class' => 'details-item',
//                'child' => [
//                    'td' => [
//                        ['class' => 'details-item-title', 'text' => 'Browser :',],
//                        ['class' => 'details-item-details', 'text' => $webBrowser->getBrowserNameFull(),],
//                    ],
//                ],
//            ];
            $visitorDetails[] = self::setAttributes(
                ['class' => 'details-item',],
                self::makeElement(
                    'td',
                    self::attachChild(
                        self::setAttributes(
                            ['class' => 'details-item-title', 'text' => 'Browser :',],
                        ),
                        self::setAttributes(
                            ['class' => 'details-item-details', 'text' => $webBrowser->getBrowserNameFull(),],
                        ),
                    )
                )
            );
        }

        // avoid error device capturing
        if (Inflect::lower($webBrowser->getDeviceName()) !== 'unknown') {
            $deviceAndArchitecture = $webBrowser->getDeviceName();
            $deviceAndArchitecture .= ' (' . strtolower($webBrowser->getBrowserArchitecture()) . ')';

//            $visitorDetails[] = [
//                'class' => 'details-item',
//                'child' => [
//                    'td' => [
//                        ['class' => 'details-item-title', 'text' => 'Device :',],
//                        [
//                            'class' => 'details-item-details',
//                            'text' => $deviceAndArchitecture,
//                        ],
//                    ],
//                ],
//            ];
            $visitorDetails[] = self::setAttributes(
                ['class' => 'details-item',],
                self::makeElement(
                    'td',
                    self::attachChild(
                        self::setAttributes(
                            ['class' => 'details-item-title', 'text' => 'Device :',],
                        ),
                        self::setAttributes(
                            ['class' => 'details-item-details', 'text' => $deviceAndArchitecture,],
                        ),
                    )
                )
            );
        }


        return $visitorDetails;
    }
}
