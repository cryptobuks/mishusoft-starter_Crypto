<?php


namespace Mishusoft\Libraries;

use Mishusoft\Framework;
use Mishusoft\Http;
use Mishusoft\Http\Browser;
use Mishusoft\Storage;
use Mishusoft\System\Memory;
use Mishusoft\System\Firewall;
use Mishusoft\System\Time;
use Mishusoft\Ui;

class MishusoftTemplateEngine
{

    private string $UrlOfCurrentWebPage;
    private string $TitleOfCurrentWebPage;

    private $HeaderOfCurrentWebPage;
    private $FooterOfCurrentWebPage;

    private array $noMenubar;

    public function __construct()
    {
        $this->UrlOfCurrentWebPage = '';
        $this->TitleOfCurrentWebPage = '';
        $this->HeaderOfCurrentWebPage = '';
        $this->FooterOfCurrentWebPage = '';
        $this->noMenubar = [];
    }

    /**
     * @param string $TitleOfCurrentWebPage
     */
    public function setTitleOfCurrentWebPage(string $TitleOfCurrentWebPage): void
    {
        $this->TitleOfCurrentWebPage = $TitleOfCurrentWebPage;
    }

    /**
     * @param string $UrlOfCurrentWebPage
     */
    public function setUrlOfCurrentWebPage(string $UrlOfCurrentWebPage): void
    {
        $this->UrlOfCurrentWebPage = $UrlOfCurrentWebPage;
    }

    /**
     * @param string $HeaderOfCurrentWebPage
     */
    public function setHeaderOfCurrentWebPage(string $HeaderOfCurrentWebPage): void
    {
        $this->HeaderOfCurrentWebPage = $HeaderOfCurrentWebPage;
    }

    /**
     * @param string $FooterOfCurrentWebPage
     */
    public function setFooterOfCurrentWebPage(string $FooterOfCurrentWebPage): void
    {
        $this->FooterOfCurrentWebPage = $FooterOfCurrentWebPage;
    }


    /**
     * @param array $noMenubar
     */
    public function setNoMenubar(array $noMenubar): void
    {
        $this->noMenubar = $noMenubar;
    }



    public function run()
    {
    }
}
