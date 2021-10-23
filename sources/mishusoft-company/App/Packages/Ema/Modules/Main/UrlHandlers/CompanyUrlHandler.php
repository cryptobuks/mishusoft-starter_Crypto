<?php

namespace App\Ema\Mishusoft\Main\UrlHandlers;

use Mishusoft\Databases\MishusoftSQLStandalone;
use Mishusoft\Storage;
use Mishusoft\System\Localization;
use Mishusoft\Drivers\UrlHandler;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Inflect;

class CompanyUrlHandler extends UrlHandler
{
    /**
     * @param array $prediction
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function response(array $prediction): void
    {
        // TODO: Implement Response() method.
        $view = $this->render("Mishusoft", $prediction);
        //$this->LinkList($prediction);
        if (Inflect::lower($prediction["method"]) === Inflect::lower("sitemap")) {
            $this->generateSitemap();
        } elseif (Inflect::lower($prediction["method"]) === Inflect::lower("rss")) {
            $this->generateRSSFeed();
        } else {
            $view->display();
        }
    }

    /**
     * @param array $prediction
     * @return mixed
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function linkList(array $prediction): mixed
    {
        $path = RUNTIME_ROOT_PATH . "Ema" . DS . "Mishusoft/ViewRenders/".ucfirst($prediction["controller"]);
        return Storage\FileSystem::list($path, "file");
    }

    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\DbException
     */
    private function generateSitemap(): void
    {
        header('Content-Type: text/xml; charset=utf-8', true);
        echo '<?xml version="1.0" encoding="UTF-8"?>';
        echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.sitemaps.org/schemas/sitemap/0.9 https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';

        $db = $this->mishusoftDB->select('system');
        $pages = $db->getWebAppPages();
        foreach ($pages as $page) {
            echo '<url>';
            echo '<loc>' . BASE_URL . strtolower($page['url']) . '</loc>';
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
        echo '<channel title="Welcome to Mishusoft Platform" link="' . BASE_URL . '">';

        $db = $this->mishusoftDB->select('system');
        $pages = $db->getWebAppPages();

        foreach ($pages as $page) {
            echo '<item>';
            echo '<guid>' . BASE_URL . strtolower($page['url']) . '</guid>';
            echo '<title>' . $page['url'] . '</title>';
            echo '<link>' . BASE_URL . strtolower($page['url']) . '</link>';
            echo '<description>' . $page['description'] . '</description>';
            echo '</item>';
        }

        echo '</channel>';
        echo '</rss>';
    }
}
