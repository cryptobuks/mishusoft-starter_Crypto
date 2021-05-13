<?php


namespace Mishusoft\Framework\Chipsets\Services;


use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Media;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\Stream;
use Mishusoft\Framework\Drivers\View\MishusoftView;

class SEOToolKitService
{
    const seoConfigFile = PHP_RUNTIME_REGISTRIES_PATH . "seo.json";
    const AdSenseConfigFile = PHP_RUNTIME_REGISTRIES_PATH . "seo-ad-sense.json";
    const SearchEngineListFile = PHP_RUNTIME_REGISTRIES_PATH . "seo-se-list.json";

    private object $view;

    private array $SearchEngineList = ["Bing",
        "Yandex",
        "CC Search",
        "Swisscows",
        "DuckDuckGo",
        "StartPage",
        "Search Encrypt",
        "Google",
        "Gibiru",
        "OneSearch",
        "Wiki.com",
        "Boardreader",
        "giveWater",
        "Ekoru",
        "Ecosia",
        "Twitter",
        "SlideShare",
        "Internet Archive",
        "The Takeaway"];

    public function __construct(MishusoftView $view)
    {
        /*verify seo config, seo ad sense, seo se list file*/
        $this->check();

        if ($view instanceof MishusoftView) {
            $this->view = $view;
        }
    }

    /**
     */
    private function check()
    {
        $fileList = [self::seoConfigFile, self::AdSenseConfigFile, self::SearchEngineListFile];
        if (count($fileList) > 0) {
            foreach ($fileList as $file) {
                if (!file_exists($file)) {
                    Stream::saveToFile($file, json_encode(array()));
                } else {
                    if (!is_array(Stream::read($file))) {
                        if (Stream::remove($file)) {
                            Stream::saveToFile($file, json_encode(array()));
                        }
                    }
                }
            }
        }
    }

    public function start()
    {
        $this->documentIdentify();
        $this->default();
        $this->socialNetworkManager();
        $this->AdSenseManager();
    }

    private function socialNetworkManager()
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
    }

    private function AdSenseManager()
    {
        Ui::elementList(Ui::getDocumentHeadElement(), [
            "meta" => [
                ["name" => "google-site-verification", "content" => "920ooXJv6lcqtSwPRaqe_b5EJwKNB367u-F7qhfdQGA"],
                ["name" => "google-signin-client_id", "content" => "490685818841-9ck0mpi283mogcoskgk8kso236m5bvn4.apps.googleusercontent.com"]
            ]
        ]);

    }

    private function documentIdentify()
    {
        Ui::elementList(Ui::getDocumentHeadElement(), [
            "meta" => [
                ["name" => "viewport", "content" => "width=device-width, initial-scale=1.0"], /*<meta name=viewport content="width=device-width, initial-scale=1">*/
                ["http-equiv" => "X-UA-Compatible", "content" => "ie=edge"],
                ["http-equiv" => "Content-Type", "content" => "text/html; charset=utf-8"], /*<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />*/
            ]
        ]);
    }

    private function default()
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

        /*getVisitedPage*/


        Ui::elementList(Ui::getDocumentHeadElement(), [
            "meta" => [
                ["name" => "title", "content" => $this->view->TitleOfCurrentWebPage],
                ["name" => "keywords", "content" => $this->view->TitleOfCurrentWebPage],
                ["name" => "company", "content" => Memory::Data()->company->name],
                ["name" => "description", "content" => (array_key_exists("description", self::getAbout((new Browser())->getVisitedPage()))) ? _Array::value(self::getAbout((new Browser())->getVisitedPage()), "description") : Memory::Data()->company->detailsDescription],/*<meta name="description"content="This is an example of a meta description.This will often show up in search results.">*/
            ]
        ]);
    }

    private function markupForGoogle()
    {
        /*
         *
            <!-- Schema.org markup for Google+ -->
            <meta itemprop="name" content="The Name or Title Here">
            <meta itemprop="description" content="This is the page description">
            <meta itemprop="image" content="http://www.example.com/image.jpg">
        */

        Ui::elementList(Ui::getDocumentHeadElement(), [
            "meta" => [
                ["itemprop" => "name", "content" => $this->view->TitleOfCurrentWebPage],
                ["itemprop" => "image", "content" => Media::getLogosMediaPath("favicon.ico", "remote")],
                ["itemprop" => "description", "content" => (array_key_exists("description", self::getAbout((new Browser())->getVisitedPage()))) ? _Array::value(self::getAbout((new Browser())->getVisitedPage()), "description") : Memory::Data()->company->detailsDescription],/*<meta name="description"content="This is an example of a meta description.This will often show up in search results.">*/
            ]
        ]);
    }

    private function twitterCard()
    {
        /*
         *

<!-- Twitter Card data -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@publisher_handle">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description less than 200 characters">
<meta name="twitter:creator" content="@author_handle">
<!-- Twitter summary card with large image must be at least 280x150px -->
<meta name="twitter:image:src" content="http://www.example.com/image.jpg">
        */

        Ui::elementList(Ui::getDocumentHeadElement(), [
            "meta" => [
                ["name" => "twitter:card", "content" => Media::getLogosMediaPath("mishusoft-logo-lite.webp", "remote")],
                ["name" => "twitter:site", "content" => Memory::Data("framework")->host->url],
                ["name" => "twitter:title", "content" => $this->view->TitleOfCurrentWebPage],
                ["name" => "twitter:description", "content" => (array_key_exists("description", self::getAbout((new Browser())->getVisitedPage()))) ? _Array::value(self::getAbout((new Browser())->getVisitedPage()), "description") : Memory::Data()->company->detailsDescription],/*<meta name="description"content="This is an example of a meta description.This will often show up in search results.">*/
                ["name" => "twitter:creator", "content" => Memory::Data()->author->name],
                ["name" => "twitter:image:src", "content" => Media::getLogosMediaPath("mishusoft-logo-lite.png", "remote")],
            ]
        ]);
    }

    private function openGraphData()
    {
        /*
         *

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

        Ui::elementList(Ui::getDocumentHeadElement(), [
            "meta" => [
                ["property" => "og:title", "content" => $this->view->TitleOfCurrentWebPage],
                ["property" => "og:type", "content" => "article"],
                ["property" => "og:url", "content" => Memory::Data("framework")->host->url],
                ["property" => "og:image", "content" => Media::getLogosMediaPath("mishusoft-logo-lite.png", "remote")],
                ["property" => "og:description", "content" => (array_key_exists("description", self::getAbout((new Browser())->getVisitedPage()))) ? _Array::value(self::getAbout((new Browser())->getVisitedPage()), "description") : Memory::Data()->company->detailsDescription],/*<meta name="description"content="This is an example of a meta description.This will often show up in search results.">*/
                ["property" => "og:site_name", "content" => Memory::Data()->name],/*<meta name="description"content="This is an example of a meta description.This will often show up in search results.">*/
            ]
        ]);
    }


    private function getAbout(string $url): array
    {
        $result = array();
        foreach (json_decode(FileSystem::read(self::seoConfigFile),true) as $inf) {
            if (array_key_exists($url, $inf)) {
                $result = $inf;
            }
        }

        return $result;
    }

    public function __destruct()
    {

    }

}