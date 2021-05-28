<?php


/*add breadcrumb*/

use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;


$commonStyleStringForLinks = 'padding: 10px;font-size: 16px;font-weight: bold;text-transform: uppercase;color: ' . Ui::color["black"] . ';' . Ui::htmlHrefStyle;

$breadcrumb = Ui::element(Ui::getDocumentHeadElement(), 'breadcrumb');
Ui::element(Ui::element($breadcrumb, "a", ["style" => $commonStyleStringForLinks, 'href' => Memory::Data("framework")->host->url]),
    "img", ['src' => FRAMEWORK_FAVICON_FILE, 'alt' => 'mishusoft', 'style' => 'margin: 5px;text-align: center;width: 20px;height: 20px;float: left;border-radius: 50%;box-shadow: 0 2px 4px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);transition: all .15s ease;']);

/*collect navigation url list*/
$urlList = explode("/", (new Browser())->getURLPath());
$urlList = array_filter($urlList);

foreach ($urlList as $id => $url) {
    if ($id === 1) {
        Ui::text($breadcrumb, "/");
        Ui::element($breadcrumb, 'a', ['style' => $commonStyleStringForLinks, 'href' => Memory::Data("framework")->host->url . "$url", 'text' => $url]);
    } else {
        Ui::text($breadcrumb, "/");
        Ui::element($breadcrumb, 'a', ['style' => $commonStyleStringForLinks, 'href' => Memory::Data("framework")->host->url . implode("/", _Array::getValues(array_search($url, $urlList), $urlList)), 'text' => $url]);
    }
}
