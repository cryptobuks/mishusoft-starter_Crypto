<?php

    namespace Mishusoft\Http;

    use Mishusoft\Http;
    use Mishusoft\Storage;
    use Mishusoft\System\Framework;
    use Mishusoft\System\Time;

    class RuntimeFailure
    {
        private static string $status;
        private static array  $content;

        /**
         * @param int   $httpStatus
         * @param array $messageDetails
         *
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function start(int $httpStatus, array $messageDetails): void
        {
            if (array_key_exists($httpStatus, Http\Errors::BUILT_IN_HTTP_ERRORS_RECORDS)) {
                self::quickUi(Http::errorDescription($httpStatus), $messageDetails);
            }//end if
        }

        /**
         * Runtime failure ui for html display.
         *
         * @param string $title   Name of action.
         * @param array  $message Error message.
         *
         * @return void
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         * @throws \Exception
         */
        private static function quickUi(string $title, array $message): void
        {
            $details = [];

            if (defined('FRAMEWORK_INSTALLED')
                && FRAMEWORK_INSTALLED === true
                && array_key_exists('error', $message) === true
                && getenv('FRAMEWORK_DEBUG') === false) {
                $details = $message['error'];
            }

            if ($details === []) {
                if (array_key_exists('debug', $message) === true) {
                    $details = $message['debug'];
                } else {
                    $details = ['description' => 'Your requested document not found.'];
                }//end if
            }

            $httpRequestMethod = get_http_request_method();
            $httpUserAgent     = get_http_user_agent();


            //  exit();

            if (PHP_SAPI === 'cli') {
                echo $details['description'] . LB;
            } elseif ($httpRequestMethod === 'OPTIONS') {
                // add welcome not for http options method
                stream_to_json(['message' => ['type' => 'error', 'contents' => "An Internal error occurred."]]);
            } elseif ($httpRequestMethod === 'GET') {
                if (array_key_exists('caption', $details)) {
                    self::toView($details['caption'], $details, Http::errorCode($title));

                //FirewallView::debug($details['caption'], $details, Http::errorCode($title));
                    //Ui\EmbeddedView::debug($message['caption'], $message, Http::errorCode($title));
                } else {
                    self::toView($details['caption'], $details, Http::errorCode($title), 'failure');

                    //FirewallView::runtimeFail($title, $details, Http::errorCode($title));
                    //Ui\EmbeddedView::runtimeFail($title, $message, Http::errorCode($title));
                }//end if
            } else {
                stream_to_json([
                                   'message'   => [
                                       'type'    => 'error',
                                       'details' => $details['description'],
                                       'visitor' => [
                                           'user-agent'     => $httpUserAgent,
                                           'request-method' => $httpRequestMethod,
                                           'request-url'    => get_visited_current_page(),
                                           'ip-address'     => IP::get(),
                                       ],
                                   ],
                                   'copyright' => [
                                       'year'  => Time::currentYearNumber(),
                                       'owner' => Framework::COMPANY_NAME,
                                   ],
                               ]);
            }//end if
        }//end

        /**
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        private static function toView(string $documentTitle, array $content, int $httpStatus, string $status = 'debug')
        {
            if (!empty($documentTitle)) {
                add_document_title($documentTitle);
            }

            self::$status  = $status;
            self::$content = $content;

            if (self::$status === 'failure') {
                if (!isFailureMessage(self::$content)) {
                    return [
                        'div' => [
                            ['class' => 'flex-justify-center', 'child' => [
                                'img' => [
                                    'class' => 'application-content-title-icon',
                                    'alt'   => !isUnavailable(self::$content) ? get_document_title_clean() : 'Unavailable',
                                    'src'   => Storage::toDataUri(
                                        'framework',
                                        sprintf(
                                            'images/icons/%1$s.png',
                                            !isUnavailable(self::$content) ? strtolower(get_document_title_clean()) : 'unavailable'
                                        )
                                    ),
                                ],
                            ],],
                            [
                                'class' => 'flex-justify-center error-title',
                                'style' => 'text-transform:none;',
                                'text'  => messageDescriptionOnly($content)
                            ],
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
                                'class' => 'application-content-title-icon',
                                'alt'   => 'information',
                                'src'   => Storage::toDataUri('framework', 'images/icons/nothing-found.png'),
                            ],
                        ],],
                        ['class' => 'application-content-body', 'child' => [
                            'article' => [
                                ['child' => [
                                    'div'   => ['class' => 'details-title', 'text' => 'Information',],
                                    'table' => ['class' => 'details', 'child' => ['tr' => (static function (array $messageDetails) {
                                        $elements = [];
                                        if (array_is_list($messageDetails)) {
                                            foreach ($messageDetails as $key => $value) {
                                                $elements[] = [
                                                    'class' => 'details-item',
                                                    'child' => [
                                                        'td' => [
                                                            ['class' => 'details-item-title', 'text' => sprintf('%s:', ucfirst($key)),],
                                                            ['class' => 'details-item-details', 'text' => $value,],
                                                        ],
                                                    ],
                                                ];
                                            }
                                            return $elements;
                                        }

                                        return $messageDetails;
                                    })(self::$content),]],
                                ]],
                                ['child' => self::assignableVisitorContentBuilder('About Yourself')],
                            ],
                        ]],
                    ],
                ];
            } elseif (self::$status === 'protection') {
                return [];
            } else {
                return [];
            }
        }

        private static function assignableVisitorContentBuilder(string $title): array
        {
            return [
                'div'   => [
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
        private static function assignableVisitorDetails(): array
        {
            $visitorDetails = [];

            //Debug::preOutput($webBrowser);
            if (self::$status === 'protection') {
                // Reason of block.
                $visitorDetails[] = [
                    'class' => 'details-item',
                    'child' => [
                        'td' => [
                            ['class' => 'details-item-title', 'text' => 'Reason :',],
                            ['class' => 'details-item-details', 'text' => ucfirst(self::$content['caption']),],
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
                        ['class' => 'details-item-details', 'text' => get_visited_current_page(),],
                    ],
                ],
            ];

            // Capturing the user agent of browser.
            $visitorDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => 'User Agent :',],
                        ['class' => 'details-item-details', 'text' => get_http_user_agent(),],
                    ],
                ],
            ];


            if (strtolower(get_http_browser_name()) !== 'unknown') {
                $visitorDetails[] = [
                    'class' => 'details-item',
                    'child' => [
                        'td' => [
                            ['class' => 'details-item-title', 'text' => 'Browser :',],
                            ['class' => 'details-item-details', 'text' => get_http_browser_name_full(),],
                        ],
                    ],
                ];
            }

            // avoid error device capturing
            if (strtolower(get_http_browser_device()) !== 'unknown') {
                $deviceAndArchitecture = sprintf('%1$s %2$s (%3$s)', get_http_browser_device(), get_http_browser_device_type(), strtolower(get_http_browser_arch()));

                $visitorDetails[] = [
                    'class' => 'details-item',
                    'child' => [
                        'td' => [
                            ['class' => 'details-item-title', 'text' => 'Device :',],
                            [
                                'class' => 'details-item-details',
                                'text'  => $deviceAndArchitecture,
                            ],
                        ],
                    ],
                ];
            }


            return $visitorDetails;
        }
    }
