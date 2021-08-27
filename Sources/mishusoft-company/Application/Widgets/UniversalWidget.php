<?php


namespace App\Widgets;

use DOMElement;
use DOMNode;
use Mishusoft\Http;
use Mishusoft\Storage;
use Mishusoft\Ui;
use Mishusoft\Http\Runtime;
use Mishusoft\Utility\ArrayCollection;

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
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
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
        $urlPath = Http::browser()->getURLPath();
        $webRoot = Storage::applicationWebDirectivePath();
        if (str_starts_with($urlPath, $webRoot)) {
            $urlPath = substr($urlPath, strlen($webRoot));
        }
        $urlList = explode('/', $urlPath);
        $urlList = array_filter($urlList);
        $urlList = array_values($urlList);

        foreach ($urlList as $id => $url) {
            Ui::text($breadcrumb, '/');
            Ui::element($breadcrumb, 'a', [
                'href' => Runtime::link(
                    implode('/', ArrayCollection::getValues(array_search($url, $urlList), $urlList))
                ),
                'text' => $url,
            ]);
        }

        return $breadcrumb;
    }//end breadcrumb()
}//end class
