<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;


use Mishusoft\Framework\Drivers\Controller;

class sitemapsController extends Controller
{
    private $db;

    /**
     * sitemapsController constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->db = $this->loadModel('sitemaps');
    }

    public function index()
    {
//        $this->view->setJs(['main']);
        $this->view->assign('title', 'Sitemaps');
        $this->view->render('index', 'Sitemaps');
    }

    public function robots()
    {
        echo "User-agent: *<br/>Allow: /<br/>Allow: /sitemapHtml<br/>Sitemap: /sitemapXml";
    }

    public function sitemapHtml()
    {
//        $this->view->setJs(['main']);
        $this->view->assign('pages', $this->db->getWebAppPages());
        $this->view->assign('title', 'Sitemap HTML Format');
        $this->view->render('sitemapHtml', 'sitemapHtml');
    }

    public function sitemapText()
    {
        echo "<title>Sitemap Text Format</title>";
        $pages = $this->db->getWebAppPages();
        foreach ($pages as $page) {
            echo BaseURL . strtolower($page['url']);
            echo '<br/>';
        }
    }

    public function sitemapXml(){
        header('Content-Type: text/xml; charset=utf-8', true);
        echo '<?xml version="1.0" encoding="UTF-8"?>';
        echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.sitemaps.org/schemas/sitemap/0.9 https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';

        $pages = $this->db->getWebAppPages();
        foreach ($pages as $page) {
            echo '<url>';
            echo '<loc>' . BaseURL . strtolower($page['url']) . '</loc>';
            echo '<changefreq>always</changefreq>';
            echo '<priority>1.0</priority>';
            echo '</url>';
        }
        echo '</urlset>';
    }

    public function rssXml()
    {
        header('Content-Type: text/xml; charset=utf-8', true);
        echo '<?xml version="1.0" encoding="UTF-8"?>';
        echo '<rss version="2.0">';
        echo '<channel title="Welcome to Mishusoft Platform" link="'.BaseURL.'">';

        $pages = $this->db->getWebAppPages();
        foreach ($pages as $page) {
            echo '<item>';
            echo '<guid>' . BaseURL . strtolower($page['url']) . '</guid>';
            echo '<title>'.$page['url'].'</title>';
            echo '<link>'.BaseURL . strtolower($page['url']).'</link>';
            echo '<description>'.$page['description'].'</description>';
            echo '</item>';
        }

        echo '</channel>';
        echo '</rss>';
    }

}