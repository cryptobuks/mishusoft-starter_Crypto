<?php


namespace Mishusoft\Ema\Mishusoft\Main\UrlHandlers;


use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Stream;
use Mishusoft\Framework\Drivers\UrlHandler;

class CompanyUrlHandler extends UrlHandler
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Response(array $prediction)
    {
        // TODO: Implement Response() method.
        $translation = new Localization(_Array::value($prediction, "locale"));
        $view = $this->render($translation->translate("Mishusoft"), $prediction);
        //$this->LinkList($prediction);
        if (_String::lower($prediction["method"]) === _String::lower("sitemap")) {
            $this->generateSitemap();
        } elseif (_String::lower($prediction["method"]) === _String::lower("rss")) {
            $this->generateRSSFeed();
        } else {
            $view->display();
        }
    }

    private function LinkList(array $prediction)
    {
        return Stream::getList(MS_DOCUMENT_ROOT . "Ema" . DIRECTORY_SEPARATOR . "Mishusoft/ViewRenders/".ucfirst($prediction["controller"]),"file");

    }

    private function generateSitemap()
    {
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

    private function generateRSSFeed()
    {
        header('Content-Type: text/xml; charset=utf-8', true);
        echo '<?xml version="1.0" encoding="UTF-8"?>';
        echo '<rss version="2.0">';
        echo '<channel title="Welcome to Mishusoft Platform" link="' . BaseURL . '">';

        $pages = $this->db->getWebAppPages();
        foreach ($pages as $page) {
            echo '<item>';
            echo '<guid>' . BaseURL . strtolower($page['url']) . '</guid>';
            echo '<title>' . $page['url'] . '</title>';
            echo '<link>' . BaseURL . strtolower($page['url']) . '</link>';
            echo '<description>' . $page['description'] . '</description>';
            echo '</item>';
        }

        echo '</channel>';
        echo '</rss>';

    }

}