<?php declare(strict_types=1);


namespace Mishusoft\Services;

use JsonException;
use Mishusoft\Base;
use Mishusoft\Drivers\View\MishusoftView;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Registry;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Memory;
use Mishusoft\Ui;
use Mishusoft\Utility\ArrayCollection;

class SEOToolKitService extends Base
{
    private object $view;

    private array $SearchEngineList = [
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


    /**
     * SEOToolKitService constructor.
     *
     * @param MishusoftView $view
     * @throws JsonException
     * @throws RuntimeException
     */
    public function __construct(MishusoftView $view)
    {
        parent::__construct();
        // Verify seo config, seo ad sense, seo se list file
        $this->check();

        $this->view = $view;
    }//end __construct()

    //    public const SEO_CONFIG_FILE         = RUNTIME_REGISTRIES_PATH.'seo.json';
    //    public const AD_SENSE_CONFIG_FILE    = RUNTIME_REGISTRIES_PATH.'seo-ad-sense.json';
    //    public const SEARCH_ENGINE_LIST_FILE = RUNTIME_REGISTRIES_PATH.'seo-se-list.json';

    /**
     * @return string
     */
    private function seoConfigFile(): string
    {
        return self::dFile(self::configDataFile('SEOToolKitService', 'seo'));
    }

    /**
     * @return string
     */
    private function adSenseConfigFile(): string
    {
        return self::dFile(self::configDataFile('SEOToolKitService', 'ad-sense'));
    }

    /**
     * @return string
     */
    private function searchEngineListFile(): string
    {
        return self::dFile(self::configDataFile('SEOToolKitService', 'se-list'));
    }


    /**
     * @throws JsonException
     * @throws RuntimeException
     */
    private function check(): void
    {
        $fileList = [
            $this->seoConfigFile(),
            $this->adSenseConfigFile(),
            $this->searchEngineListFile(),
        ];
        if (count($fileList) > 0) {
            FileSystem::makeDirectory(dirname($this->seoConfigFile()));
            foreach ($fileList as $file) {
                if (file_exists($file) === false) {
                    FileSystem\Yaml::emitFile($file, []);
                    FileSystem::saveToFile($file, json_encode([], JSON_THROW_ON_ERROR));
                } elseif ((is_array(FileSystem\Yaml::parseFile($file)) === false)
                    && FileSystem::remove($file) === true) {
                    FileSystem\Yaml::emitFile($file, []);
                }
            }
        }
    }//end check()


    /**
     *
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function start(): void
    {
        $this->documentIdentify();
        $this->default();
        $this->socialNetworkManager();
        $this->AdSenseManager();
    }//end start()


    /**
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    private function socialNetworkManager(): void
    {
        /*
         * <!-- Update your html tag to include the itemscope and itemtype attributes. -->
            <!-- Place this data between the <head> tags of your website -->
            <title>Page Title. Maximum length 60-70 characters</title>
            <meta name="description" content="Page description. No longer than 155 characters." />

            <!-- Schema.org markup for Google+ -->
            <meta itemprop="name" content="The Name or Title Here">
            <meta itemprop="description" content="This is the page description">
            <meta itemprop="image" content="http://www.example.com/image.jpg">

            <!-- Twitter Card data -->
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:site" content="@publisher_handle">
            <meta name="twitter:title" content="Page Title">
            <meta name="twitter:description" content="Page description less than 200 characters">
            <meta name="twitter:creator" content="@author_handle">
            <!-- Twitter summary card with large image must be at least 280x150px -->
            <meta name="twitter:image:src" content="http://www.example.com/image.jpg">

            <!-- Open Graph data -->
            <meta property="og:title" content="Title Here" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="http://www.example.com/" />
            <meta property="og:image" content="http://example.com/image.jpg" />
            <meta property="og:description" content="Description Here" />
            <meta property="og:site_name" content="Site Name, i.e. Moz" />
            <meta property="article:published_time" content="2013-09-17T05:59:00+01:00" />
            <meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" />
            <meta property="article:section" content="Article Section" />
            <meta property="article:tag" content="Article Tag" />
            <meta property="fb:admins" content="Facebook numberic ID" />
         */

        $this->markupForGoogle();
        $this->twitterCard();
        $this->openGraphData();
    }//end socialNetworkManager()


    /**
     *
     */
    private function adSenseManager(): void
    {
        Ui::elementList(
            Ui::getDocumentHeadElement(),
            [
                'meta' => [
                    [
                        'name' => 'google-site-verification',
                        'content' => '920ooXJv6lcqtSwPRaqe_b5EJwKNB367u-F7qhfdQGA',
                    ],
                    [
                        'name' => 'google-signin-client_id',
                        'content' => '490685818841-9ck0mpi283mogcoskgk8kso236m5bvn4.apps.googleusercontent.com',
                    ],
                ],
            ]
        );
    }//end AdSenseManager()


    /**
     *
     */
    private function documentIdentify(): void
    {
        Ui::elementList(
            Ui::getDocumentHeadElement(),
            [
                'meta' => [
                    ['charset' => 'UTF-8'],
                    // ["name" => "viewport", "content" => "width=device-width, initial-scale=1.0"],
                    // /*<meta name=viewport content="width=device-width, initial-scale=1">*/
                    [
                        'name' => 'viewport',
                        'content' => 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
                    ],
                    [
                        'http-equiv' => 'X-UA-Compatible',
                        'content' => 'ie=edge',
                    ],
                    [
                        'http-equiv' => 'Content-Type',
                        'content' => 'text/html; charset=utf-8',
                    ],
                    // <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                ],
            ]
        );
    }//end documentIdentify()


    /**
     *
     * @throws JsonException
     * @throws ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    private function default(): void
    {
        /*
         * we declare default meta tags for seo index
         * */

        /*
         *     <meta name="keywords" content="{$title}"/>
         *     <meta name="company" content="{$layoutParams.configs.app_company}"/>
         *     <meta name="author" content="{$layoutParams.configs.app_author}"/>
         *     <meta name="description" content="{$layoutParams.configs.app_slogan}"/>
         */

        // getVisitedPage
        Ui::elementList(
            Ui::getDocumentHeadElement(),
            [
                'meta' => [
                    [
                        'name' => 'title',
                        'content' => $this->view->titleOfCurrentWebPage,
                    ],
                    [
                        'name' => 'keywords',
                        'content' => $this->view->titleOfCurrentWebPage,
                    ],
                    [
                        'name' => 'company',
                        'content' => Memory::data()->company->name,
                    ],
                    [
                        'name' => 'description',
                        'content' => $this->loadDescription(),
                    ],
                ],
            ]
        );
    }//end default()

    /**
     *
     */
    private function robots(): void
    {
        /*
         * we declare robots meta tags for robots
         * */

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
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    private function markupForGoogle(): void
    {
        Ui::elementList(
            Ui::getDocumentHeadElement(),
            [
                'meta' => [
                    [
                        'itemprop' => 'name',
                        'content' => $this->view->titleOfCurrentWebPage,
                    ],
                    [
                        'itemprop' => 'image',
                        'content' => Storage::logoFullPath('favicon.ico', 'remote', 'remote'),
                    ],
                    [
                        'itemprop' => 'description',
                        'content' => $this->getDescriptionDetails(),
                    ],
                ],
            ]
        );
    }//end markupForGoogle()


    /**
     *
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    private function twitterCard(): void
    {
        Ui::elementList(
            Ui::getDocumentHeadElement(),
            [
                'meta' => [
                    [
                        'name' => 'twitter:card',
                        'content' => Storage::toDataUri('media', 'logos/mishusoft-logo-lite.webp', 'remote'),
                    ],
                    [
                        'name' => 'twitter:site',
                        'content' => Memory::data('framework')->host->url,
                    ],
                    [
                        'name' => 'twitter:title',
                        'content' => $this->view->titleOfCurrentWebPage,
                    ],
                    [
                        'name' => 'twitter:description',
                        'content' => $this->getDescriptionDetails(),
                    ],
                    [
                        'name' => 'twitter:creator',
                        'content' => Memory::data()->author->name,
                    ],
                    [
                        'name' => 'twitter:image:src',
                        'content' => Storage::toDataUri('media', 'logos/mishusoft-logo-lite.webp', 'remote'),
                    ],
                ],
            ]
        );
    }//end twitterCard()


    /**
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    private function openGraphData(): void
    {
        Ui::elementList(
            Ui::getDocumentHeadElement(),
            [
                'meta' => [
                    [
                        'property' => 'og:title',
                        'content' => $this->view->titleOfCurrentWebPage,
                    ],
                    [
                        'property' => 'og:type',
                        'content' => 'article',
                    ],
                    [
                        'property' => 'og:url',
                        'content' => Memory::data('framework')->host->url,
                    ],
                    [
                        'property' => 'og:image',
                        'content' => Storage::toDataUri('media', 'logos/mishusoft-logo-lite.webp', 'remote'),
                    ],
                    [
                        'property' => 'og:description',
                        'content' => $this->getDescriptionDetails(),
                    ],
                    [
                        'property' => 'og:site_name',
                        'content' => Memory::data()->name,
                    ],
                ],
            ]
        );
    }//end openGraphData()

    /**
     * @throws ErrorException
     * @throws RuntimeException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws JsonException
     */
    private function getDescriptionDetails(): string
    {
        if ((array_key_exists('description', $this->getAbout(Registry::Browser()::getVisitedPage())))) {
            return ArrayCollection::value($this->getAbout(Registry::Browser()::getVisitedPage()), 'description');
        }

        return Memory::data()->company->detailsDescription;
    }


    /**
     * @param string $url
     * @return array
     * @throws RuntimeException
     */
    private function getAbout(string $url): array
    {
        $result = [];
        foreach (FileSystem\Yaml::parseFile($this->seoConfigFile()) as $inf) {
            if (array_key_exists($url, $inf) === true) {
                $result = $inf;
            }
        }

        return $result;
    }//end getAbout()

    /**
     * @throws ErrorException
     * @throws RuntimeException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws JsonException
     */
    private function loadDescription():mixed
    {
        if ((array_key_exists('description', $this->getAbout(Registry::Browser()::getVisitedPage())))) {
            return $this->getAbout(Registry::Browser()::getVisitedPage())['description'];
        }

        return Memory::data()->company->detailsDescription;
    }


    /**
     *
     */
    public function __destruct()
    {
    }//end __destruct()

    /**
     * @return array
     */
    public function getSearchEngineList(): array
    {
        return $this->SearchEngineList;
    }
}//end class
