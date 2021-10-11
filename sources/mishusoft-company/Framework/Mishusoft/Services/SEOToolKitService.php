<?php declare(strict_types=1);


namespace Mishusoft\Services;

use Mishusoft\Base;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\Runtime;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Memory;
use Mishusoft\Ui;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Implement;

class SEOToolKitService extends Base
{

    private function engines():array
    {
        return [
            'Bing',
            'Yandex',
            'CC Search',
            'Swisscows',
            'DuckDuckGo',
            'StartPage',
            'Search Encrypt',
            'Google',
            'Gibiru',
            'OneSearch',
            'Wiki.com',
            'Boardreader',
            'giveWater',
            'Ekoru',
            'Ecosia',
            'Twitter',
            'SlideShare',
            'Internet Archive',
            'The Takeaway',
        ];
    }

    /**
     * @return string
     */
    private static function seoConfigFile(): string
    {
        return self::dFile(self::configDataFile('SEOToolKitService', 'seo'));
    }

    /**
     * @return string
     */
    private static function adSenseConfigFile(): string
    {
        return self::dFile(self::configDataFile('SEOToolKitService', 'ad-sense'));
    }

    /**
     * @return string
     */
    private static function searchEngineListFile(): string
    {
        return self::dFile(self::configDataFile('SEOToolKitService', 'se-list'));
    }


    /**
     * @throws RuntimeException
     */
    public static function start(): void
    {
        // List of configuration files
        $fileList = [
            self::seoConfigFile(),
            self::adSenseConfigFile(),
            self::searchEngineListFile(),
        ];

        // Verify configurations
        if (count($fileList) > 0) {
            // Create directory if not exists
            FileSystem::makeDirectory(dirname(self::seoConfigFile()));
            foreach ($fileList as $file) {
                if (file_exists($file) === false) {
                    FileSystem\Yaml::emitFile($file, []);
                    FileSystem::saveToFile($file, Implement::toJson([]));
                } elseif ((is_array(FileSystem\Yaml::parseFile($file)) === false)
                    && FileSystem::remove($file) === true) {
                    FileSystem\Yaml::emitFile($file, []);
                }
            }
        }
    }//end start()


    /**
     * @param string $source
     */
    public static function addAuthor(string $source) : void
    {
        Ui::element(
            Ui::getDocumentHeadElement(),
            'link',
            ['type' => 'text/plain', 'rel' => 'author', 'href' => $source]
        );
    }


    /**
     * @param array|string[] $view
     */
    public static function addDocumentIdentify(array $view = ['width'=>'device-width','initial-scale'=>'1.0']): void
    {
        $initiatedText = '';
        foreach ($view as $key => $value) {
            $initiatedText .= sprintf('%1$s=%2$s, ', $key, $value);
        }
        $initiatedText = rtrim($initiatedText, ', ');
        Ui::elementList(
            Ui::getDocumentHeadElement(),
            [
                'meta' => [
                    ['charset' => 'UTF-8'],
                    ['name' => 'viewport', 'content' => $initiatedText,],
                    ['http-equiv' => 'X-UA-Compatible', 'content' => 'ie=edge',],
                    ['http-equiv' => 'Content-Type', 'content' => 'text/html; charset=utf-8',],
                ],
            ]
        );
    }//end addDocumentIdentify()


    /**
     * @throws RuntimeException
     */
    public static function loadAdsAuthentication(): void
    {
        $configs = FileSystem\Yaml::parseFile(self::adSenseConfigFile());
        $attributes = [];

        if (count($configs) > 0) {
            foreach ($configs as $config) {
                $attributes[] = [
                    'name' => $config['name'],
                    'content' => $config['content'],
                ];
            }

            if (count($attributes) > 0) {
                Ui::elementList(
                    Ui::getDocumentHeadElement(),
                    ['meta' => $attributes,]
                );
            }
        }
    }//end loadAdsAuthentication()


    /**
     * we declare default meta tags for seo index
     *
     * @throws ErrorException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     */
    public static function addDefault(string $documentTitle): void
    {
        Ui::elementList(
            Ui::getDocumentHeadElement(),
            [
                'meta' => [
                    [
                        'name' => 'title',
                        'content' => $documentTitle,
                    ],
                    [
                        'name' => 'keywords',
                        'content' => self::getKeywords($documentTitle),
                    ],
                    [
                        'name' => 'company',
                        'content' => Memory::data()->company->name,
                    ],
                    [
                        'name' => 'description',
                        'content' => self::getDescriptionDetails(),
                    ],
                    [
                        'name' => 'description',
                        'content' => self::getDescriptionDetails(),
                    ],
                ],
                'link' => [
                    [
                        'rel' => 'canonical',
                        'href' => Runtime::currentUrl(),
                    ]
                ],
            ]
        );
    }//end default()


    /**
     * we declare robots meta tags for robots
     */
    public static function addRobotsMeta(): void
    {
        Ui::elementList(
            Ui::getDocumentHeadElement(),
            [
                'meta' => [
                    [
                        'name' => 'robots',
                        'content' => 'index, follow',
                    ],
                    [
                        'name' => 'robots',
                        'content' => 'max-image-preview:standard',
                    ],
                    [
                        'name' => 'robots',
                        'content' => 'max-video-preview:-1',
                    ],
                ],
            ]
        );
    }//end default()

    /**
     * @param array|string[] $sites
     * @param array|string[] $items
     * @throws ErrorException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     */
    public static function addSocialCard(array $sites = ['og'], array $items = ['image' => '/favicon.ico']): void
    {
        foreach ($sites as $site) {
            if ($site === 'google') {
                // <!-- Schema.org markup for Google+ -->
                // <meta itemprop="name" content="The Name or Title Here">
                // <meta itemprop="description" content="This is the page description">
                // <meta itemprop="image" content="http://www.example.com/image.jpg">
                Ui::elementList(
                    Ui::getDocumentHeadElement(),
                    [
                        'meta' => [
                            [
                                'itemprop' => 'name',
                                'content' => ArrayCollection::value($items, 'title'),
                            ],
                            [
                                'itemprop' => 'image',
                                'content' => ArrayCollection::value($items, 'image'),
                            ],
                            [
                                'itemprop' => 'description',
                                'content' => self::getDescriptionDetails(),
                            ],
                        ],
                    ]
                );
            }
            if ($site === 'og') {
                //<!-- Open Graph data -->
                //<meta property="og:title" content="Title Here" />
                //<meta property="og:type" content="article" />
                //<meta property="og:url" content="http://www.example.com/" />
                //<meta property="og:image" content="http://example.com/image.jpg" />
                //<meta property="og:description" content="Description Here" />
                //<meta property="og:site_name" content="Site Name, i.e. Moz" />
                //<meta property="article:published_time" content="2013-09-17T05:59:00+01:00" />
                //<meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" />
                //<meta property="article:section" content="Article Section" />
                //<meta property="article:tag" content="Article Tag" />
                //<meta property="fb:admins" content="Facebook numberic ID" />
                Ui::elementList(
                    Ui::getDocumentHeadElement(),
                    [
                        'meta' => [
                            [
                                'property' => 'og:title',
                                'content' => ArrayCollection::value($items, 'title'),
                            ],
                            [
                                'property' => 'og:type',
                                'content' => 'article',
                            ],
                            [
                                'property' => 'og:url',
                                'content' => Runtime::hostUrl(),
                            ],
                            [
                                'property' => 'og:image',
                                'content' => ArrayCollection::value($items, 'image'),
                            ],
                            [
                                'property' => 'og:description',
                                'content' => self::getDescriptionDetails(),
                            ],
                            [
                                'property' => 'og:site_name',
                                'content' => Memory::data()->name,
                            ],
                        ],
                    ]
                );
            }
            if ($site === 'twitter') {
                //<!-- Twitter Card data -->
                //<meta name="twitter:card" content="summary_large_image">
                //<meta name="twitter:site" content="@publisher_handle">
                //<meta name="twitter:title" content="Page Title">
                //<meta name="twitter:description" content="Page description less than 200 characters">
                //<meta name="twitter:creator" content="@author_handle">
                //<!-- Twitter summary card with large image must be at least 280x150px -->
                //<meta name="twitter:image:src" content="http://www.example.com/image.jpg">
                Ui::elementList(
                    Ui::getDocumentHeadElement(),
                    [
                        'meta' => [
                            [
                                'name' => 'twitter:card',
                                'content' => ArrayCollection::value($items, 'image'),
                            ],
                            [
                                'name' => 'twitter:site',
                                'content' => Runtime::hostUrl(),
                            ],
                            [
                                'name' => 'twitter:title',
                                'content' => ArrayCollection::value($items, 'title'),
                            ],
                            [
                                'name' => 'twitter:description',
                                'content' => self::getDescriptionDetails(),
                            ],
                            [
                                'name' => 'twitter:creator',
                                'content' => Memory::data()->author->name,
                            ],
                            [
                                'name' => 'twitter:image:src',
                                'content' => ArrayCollection::value($items, 'image'),
                            ],
                        ],
                    ]
                );
            }
        }
    }


    /**
     * @param string $documentTitle
     * @return string
     * @throws RuntimeException
     */
    private static function getKeywords(string $documentTitle): string
    {
        if ((array_key_exists('keywords', self::getAbout(Runtime::currentUrl())))) {
            return implode(
                ',',
                ArrayCollection::value(
                    self::getAbout(Runtime::currentUrl()),
                    'keywords'
                )
            );
        }

        return $documentTitle;
    }


    /**
     * @return string
     * @throws ErrorException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     */
    private static function getDescriptionDetails(): string
    {
        if ((array_key_exists('description', self::getAbout(Runtime::currentUrl())))) {
            return ArrayCollection::value(self::getAbout(Runtime::currentUrl()), 'description');
        }

        return Memory::data()->company->detailsDescription;
    }


    /**
     * @param string $url
     * @return array
     * @throws RuntimeException
     */
    private static function getAbout(string $url): array
    {
        $result = [];
        //data = ['url' => ['des','keywords]]
        foreach (FileSystem\Yaml::parseFile(self::seoConfigFile()) as $info) {
            if (array_key_exists($url, $info) === true) {
                $result = $info[$url];
            }
        }

        return $result;
    }//end getAbout()


    /**
     *
     */
    public function __destruct()
    {
    }//end __destruct()
}//end class
