<?php


namespace Mishusoft\Widgets;


use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Libraries\Runtime;

class UniversalWidget
{
    private object $htmlBody;

    public function __construct(object $bodyElement)
    {
        $this->htmlBody = $bodyElement;
    }

    public function breadcrumb(): object
    {
        /*add breadcrumb*/
        $breadcrumb = Ui::element($this->htmlBody, 'breadcrumb', ['class' => 'box-shadow1', 'style' => 'border-top:1px solid lightgrey;']);
        Ui::element(Ui::element($breadcrumb, "a", ["class" => "protect", 'href' => Runtime::link("default_home")]),
            "img", ['src' => FRAMEWORK_FAVICON_FILE, 'alt' => 'mishusoft', 'class' => 'box-shadow1',
                'style' => 'margin: 5px;text-align: center;width: 20px;height: 20px;float: left;border-radius: 50%;transition: all .15s ease;','width'=>'20px','height'=>'20px']);

        /*collect navigation url list*/
        $urlList = explode("/", (new Browser())->getURLPath());
        $urlList = array_filter($urlList);
        $urlList = array_values($urlList);

        foreach ($urlList as $id => $url) {
            Ui::text($breadcrumb, "/");
            Ui::element($breadcrumb, 'a', ['href' => Runtime::link(implode("/", _Array::getValues(array_search($url, $urlList), $urlList))) , 'text' => $url]);
            /*if ($id === 1) {
                Ui::text($breadcrumb, "/");
                Ui::element($breadcrumb, 'a', ['href' => Runtime::link($url), 'text' => $url]);
            } else {
                Ui::text($breadcrumb, "/");
                Ui::element($breadcrumb, 'a', ['href' => Runtime::link(implode("/", _Array::getValues(array_search($url, $urlList), $urlList))) , 'text' => $url]);
            }*/
        }

        return $breadcrumb;

    }

}