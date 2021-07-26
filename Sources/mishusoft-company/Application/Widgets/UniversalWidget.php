<?php


namespace Mishusoft\Widgets;


use DOMElement;
use DOMNode;
use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Libraries\Runtime;

class UniversalWidget
{

    /**
     * @var DOMElement
     */
    private DOMElement $htmlBody;


    /**
     * universalWidget constructor.
     * @param DOMElement $bodyElement
     */
    public function __construct(DOMElement $bodyElement)
    {
        $this->htmlBody = $bodyElement;

    }//end __construct()


    /**
     * @return DOMElement|DOMNode
     */
    public function breadcrumb(): DOMElement|DOMNode
    {
        // Add breadcrumb.
        $breadcrumb = Ui::element($this->htmlBody, 'breadcrumb', ['class' => 'box-shadow1', 'style' => 'border-top:1px solid lightgrey;']);
        Ui::element(
            Ui::element($breadcrumb, 'a', ['class' => 'protect', 'href' => Runtime::link('default_home')]),
            'img',
            [
                'src'    => FRAMEWORK_FAVICON_FILE,
                'alt'    => 'mishusoft',
                'class'  => 'box-shadow1',
                'style'  => 'margin: 5px;text-align: center;width: 20px;height: 20px;float: left;border-radius: 50%;transition: all .15s ease;',
                'width'  => '20px',
                'height' => '20px',
            ]
        );

        // Collect navigation url list.
        $urlPath = (new Browser())->getURLPath();
        $urlList = explode('/', $urlPath);
        $urlList = array_filter($urlList);
        $urlList = array_values($urlList);

        foreach ($urlList as $id => $url) {
            Ui::text($breadcrumb, '/');
            Ui::element($breadcrumb, 'a', ['href' => Runtime::link(implode('/', _Array::getValues(array_search($url, $urlList), $urlList))), 'text' => $url]);
            /*
                if ($id === 1) {
                Ui::text($breadcrumb, "/");
                Ui::element($breadcrumb, 'a', ['href' => Runtime::link($url), 'text' => $url]);
                } else {
                Ui::text($breadcrumb, "/");
                Ui::element($breadcrumb, 'a', ['href' => Runtime::link(implode("/", _Array::getValues(array_search($url, $urlList), $urlList))) , 'text' => $url]);
            }*/
        }

        return $breadcrumb;

    }//end breadcrumb()


}//end class
