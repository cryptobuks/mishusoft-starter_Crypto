<?php

namespace Mishusoft;

use DOMCdataSection;
use DOMDocument;
use DOMElement;
use DOMNode;
use DOMNodeList;
use Mishusoft\System\Memory;
use Mishusoft\System\Time;
use Mishusoft\Utility\Inflect;

class Ui
{
    // declare version
    public const VERSION = '1.0.2';

    // declare color
    public const COLOR = [
        'default'       => '#0777cc',
        'deepBlue'      => '#34abe6',
        'deepBlackBlue' => '#006194',
        'lightskyblue'  => 'lightskyblue',
        'lightBlue'     => '#63ddfa52',
        'green'         => '#4caf50',
        'lightGreen'    => 'rgba(188, 247, 189, 0.7)',
        'red'           => '#ff0000',
        'lightRed'      => '#f7d7d4',
        'white'         => '#ffffff',
        'black'         => '#000',
        'grey'          => '#808080',
        'lightgrey'     => '#d3d3d3',
        'darkorchid'    => '#9932CC',
        'yellow'        => '#ffff00',
    ];

    public const HTML_HREF_STYLE = 'text-decoration: none;border-style: none;user-select: none;-webkit-user-select: none;-ms-user-select: none;outline-style: none;';

    public const CSS = [
        'box-shadow'   => 'box-shadow: 0 3px 4px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);',
        'center'       => 'align-items: center;justify-content: center;',
        'text-center'  => 'text-align: center;',
        'display-flex' => 'display: flex;',
        'flex-column'  => 'flex-direction: column;',
        'flex-row'     => 'flex-direction: row;',
        'width'        => '0;',
        'height'       => '0;',
        'font-normal'  => 'font-weight: normal;',
        'font-bold'    => 'font-weight: bold;',
        'font-bolder'  => 'font-weight: bolder;',
    ];

    /**
     * @var DOMDocument
     */
    public static DOMDocument $domDocument;

    /**
     * @var DOMNode
     */
    private static DOMNode $documentRoot;

    /**
     * @var DOMNode
     */
    private static DOMNode $documentHeadElement;

    /**
     * @var DOMNode
     */
    private static DOMNode $documentTitleElement;
    private static string $domDocumentType;
    private static DOMNode $templateBodyElement;
    private static DOMNode $documentContentBody;
    private static DOMNode $documentContentHeader;
    private static DOMNode $documentContentFooter;


    /**
     * Ui constructor.
     */
    private function __construct()
    {
    }//end __construct()


    /**
     * @param string $document
     */
    public static function start(string $document = 'html'): void
    {
        self::$domDocumentType      = $document;
        self::$domDocument          = new DOMDocument('1.0', 'UTF-8');
        self::$documentRoot         = self::element(self::$domDocument, self::$domDocumentType, ['lang' => 'en']);
        self::$documentHeadElement  = self::element(self::$documentRoot, 'head');
        self::$documentTitleElement = self::element(self::$documentHeadElement, 'title');
    }//end start()


    public static function display(int $http_response_code = 200): void
    {
        switch (self::$domDocumentType) {
            case 'xml':
                // Display the compiled xml document.
                header('Content-Type: text/xml; charset=utf-8', true);
                http_response_code($http_response_code);
                echo '<?xml version="1.0" encoding="UTF-8"?>';
                echo '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.sitemaps.org/schemas/sitemap/0.9 https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';
                break;

            case 'html':
            default:
                // Display the compiled html document.
                header('Content-Type: text/html; charset=utf-8');
                http_response_code($http_response_code);
                echo '<!DOCTYPE html>';
                echo self::$domDocument->saveHTML();
                break;
        }
    }//end execute()


    /**
     * @return DOMNode
     */
    public static function getDocumentRoot(): DOMNode
    {
        return self::$documentRoot;
    }//end getDocumentRoot()


    /**
     * @return DOMNode
     */
    public static function getDocumentHeadElement(): DOMNode
    {
        return self::$documentHeadElement;
    }//end getDocumentHeadElement()


    /**
     * @param  string $qualifiedName
     * @return DOMElement
     */
    public static function make(string $qualifiedName): DOMElement
    {
       // var_dump(debug_backtrace());
        return self::$domDocument->createElement($qualifiedName);
    }//end make()


    /**
     * @param  string $content
     * @return DOMNode
     */
    public static function setDocumentTitle(string $content): DOMNode
    {
        return self::text(self::$documentTitleElement, $content);
    }//end setDocumentTitle()


    /**
     * @param  string $content
     * @return DOMNode
     */
    public static function updateDocumentTitle(string $content): DOMNode
    {
        return self::text(self::$documentTitleElement, ' || '.Inflect::ucwords($content));
    }//end updateDocumentTitle()


    /**
     * @param DOMNode $templateBodyElement
     * @return void
     */
    public static function setTemplateBody(DOMNode $templateBodyElement): void
    {
        self::$templateBodyElement = $templateBodyElement;
    }//end updateDocumentTitle()

    /**
     * @return DOMNode
     */
    public static function getTemplateBody():DOMNode
    {
        return self::$templateBodyElement;
    }
    /**
     * @param DOMNode $documentContentHeader
     * @return void
     */
    public static function setDocumentContentHeader(DOMNode $documentContentHeader): void
    {
        self::$documentContentHeader = $documentContentHeader;
    }//end setDocumentContentHeader()

    /**
     * @return DOMNode
     */
    public static function getDocumentContentHeader():DOMNode
    {
        return self::$documentContentHeader;
    }//end getDocumentContentHeader()


    /**
     * @param DOMNode $documentContentBody
     * @return void
     */
    public static function setDocumentContentBody(DOMNode $documentContentBody): void
    {
        self::$documentContentBody = $documentContentBody;
    }//end updateDocumentTitle()

    /**
     * @return DOMNode
     */
    public static function getDocumentContentBody():DOMNode
    {
        return self::$documentContentBody;
    }


    /**
     * @param DOMNode $documentContentFooter
     * @return void
     */
    public static function setDocumentContentFooter(DOMNode $documentContentFooter): void
    {
        self::$documentContentFooter = $documentContentFooter;
    }//end updateDocumentTitle()

    /**
     * @return DOMNode
     */
    public static function getDocumentContentFooter():DOMNode
    {
        return self::$documentContentFooter;
    }




    /**
     * @param string        $title_content
     * @param callable|null $callback
     * @param null          $http_response_code
     */
    public static function htmlInterface(
        string   $title_content = '',
        callable $callback = null,
        $http_response_code = null
    ): void {
        // self::$domDocument = new DOMDocument($version = '1.0', $encoding = 'UTF-8');
        self::$domDocument = new DOMDocument('1.0', 'UTF-8');
        $html              = self::element(self::$domDocument, 'html', ['lang' => 'en']);
        $head              = self::element($html, 'head');
        $title             = self::element($head, 'title');
        self::text($title, !empty($title_content) ? $title_content : '(Empty Title)');

        if (is_callable($callback) === true) {
            $callback($html, $head, $title);
        }

        if (!is_null($http_response_code)) {
            http_response_code($http_response_code);
        }

        header('Content-Type: text/html; charset=utf-8');
        echo '<!DOCTYPE html>';
        echo self::$domDocument->saveHTML();
    }//end HtmlInterface()


    /**
     * Alias of Ui::makeElement()
     *
     * @param  DOMElement | DOMNode | DOMDocument $parent
     * @param  string                             $tag
     * @param  array                              $attributes
     * @return mixed
     */
    public static function element(DOMElement|DOMNode|DOMDocument $parent, string $tag, array $attributes = []): DOMNode
    {
        //print_r(func_get_args(), false);
        $root = self::make($tag);
        self::assignAttributes($root, $attributes);
        return $parent->appendChild($root);
    }//end element()


    /**
     * @param  DOMElement $htmlElement
     * @param  string     $qualifiedName
     * @return boolean
     */
    public static function hasAttribute(DOMElement $htmlElement, string $qualifiedName): bool
    {
        return $htmlElement->hasAttribute($qualifiedName);
    }//end hasAttribute()


    /**
     * @param  DOMElement $htmlElement
     * @param  string     $qualifiedName
     * @return string
     */
    public static function getAttribute(DOMElement $htmlElement, string $qualifiedName): string
    {
        return $htmlElement->getAttribute($qualifiedName);
    }//end getAttribute()


    /**
     * @param  DOMElement $htmlElement
     * @param  string     $qualifiedName
     * @return boolean
     */
    public static function removeAttribute(DOMElement $htmlElement, string $qualifiedName): bool
    {
        return $htmlElement->removeAttribute($qualifiedName);
    }//end removeAttribute()


    /**
     * @param DOMElement $htmlElement
     * @param array      $qualifiedNames
     */
    public static function updateAttribute(DOMElement $htmlElement, array $qualifiedNames = []): void
    {
        foreach ($qualifiedNames as $qualifiedName => $updatedName) {
            if ((self::hasAttribute($htmlElement, $qualifiedName) === true)
                && self::removeAttribute($htmlElement, $qualifiedName) === true) {
                $htmlElement->setAttribute($updatedName, '');
            }
        }
    }//end updateAttribute()


    /**
     * @param  string $string
     * @return DOMCdataSection
     */
    public static function domCDATA(string $string): DOMCdataSection
    {
        return new DOMCdataSection($string);
    }//end domCDATA()


    /*
     * ["attribute"=>["oldValue"=>"newValue","oldValue1"=>"newValue1",],"attribute2"=>["oldValue2"=>"newValue2"],]
     * */


    /**
     * @param DOMElement $htmlElement
     * @param array      $qualifiedOptions
     */
    public static function updateAttributesValue(DOMElement $htmlElement, array $qualifiedOptions = []): void
    {
        foreach ($qualifiedOptions as $qualifiedName => $attributes) {
            if (self::hasAttribute($htmlElement, $qualifiedName) === true) {
                foreach ($attributes as $oldValue => $newValue) {
                    self::assignAttributes(
                        $htmlElement,
                        [$qualifiedName => str_replace(
                            $oldValue,
                            $newValue,
                            self::getAttribute($htmlElement, $qualifiedName)
                        )]
                    );
                }
            }
        }
    }//end updateAttributesValue()


    /**
     * @param DOMElement $htmlElement
     * @param string     $qualifiedName
     * @param array      $values
     */
    public static function setAttributeValue(DOMElement $htmlElement, string $qualifiedName, array $values = []): void
    {
        if (self::hasAttribute($htmlElement, $qualifiedName) === true) {
            foreach ($values as $value) {
                if (stripos(self::getAttribute($htmlElement, $qualifiedName), $value) === false) {
                    self::assignAttributes(
                        $htmlElement,
                        [$qualifiedName => self::getAttribute($htmlElement, $qualifiedName)." $value"]
                    );
                }
            }
        }
    }//end setAttributeValue()


    /**
     * Create new Html Element
     *
     * @param  DOMElement $parent
     * @param  string     $tag
     * @param  array      $attributes
     * @return DOMNode
     */
    public static function makeElement(DOMElement $parent, string $tag, array $attributes = []): DOMNode
    {
        $root = self::$domDocument->createElement($tag);
        self::assignAttributes($root, $attributes);
        return $parent->appendChild($root);
    }//end makeElement()


    /**
     * @param DOMElement | DOMNode | DOMDocument $parentElement
     * @param array                              $list
     */
    public static function elementList(DOMElement|DOMNode|DOMDocument $parentElement, array $list = []): void
    {
        self::makeElementBatch($parentElement, $list);
    }//end elementList()


    /**
     * @param DOMElement $parentElement
     * @param array      $list
     */
    public static function makeElementBatch(DOMElement $parentElement, array $list = []): void
    {
        /*
         * $ui->makeElement($body, 'script', ['type' => 'application/javascript', 'src' => join([CMOS::Data("framework")->host->url . 'libraries/js/mishusoft.js'])]);
         * $ui->makeElement($body, 'script', ['type' => 'application/javascript', 'src' => join([CMOS::Data("framework")->host->url . 'libraries/js/runtime.js'])]);
         * */
        /*
         * $ui->text($ui->makeElement($body, 'script', ['type' => 'application/javascript']), 'let _root_ = \'' . CMOS::Data("framework")->host->url . '\';');
         */

        /*
         * if attributes list contains array list for same batch tag
         * $ui->batchTags($ui, $body, [
         *            'script' => [
         *                ['type' => 'application/javascript', 'text' => 'let _root_ = \'' . CMOS::Data("framework")->host->url . '\';'],
         *                ['type' => 'application/javascript', 'src' => join([CMOS::Data("framework")->host->url . 'libraries/js/mishusoft.js'])]
         *            ],
         * if attributes list contains single list for one tag
         * $ui->makeElementBatch($ui, $body, [
         *            'script' => ['type' => 'application/javascript', 'text' => 'let _root_ = \'' . CMOS::Data("framework")->host->url . '\';'],,
         * ]);
         */
        if (is_array($list) === true && count($list) > 0) {
            foreach ($list as $tag => $attributes) {
                if (is_array($attributes) === true && count($attributes) > 0) {
                    if (self::isSingleAttributeList($attributes) === true) {
                        self::element($parentElement, $tag, $attributes);
                    } else {
                        foreach ($attributes as $attribute) {
                            self::element($parentElement, $tag, $attribute);
                        }
                    }
                } else {
                    self::element($parentElement, $tag);
                }
            }
        }
    }//end makeElementBatch()


    /**
     * @param  DOMElement $htmlElement
     * @param  array      $attributes
     * @return DOMElement
     */
    public static function assignAttributes(DOMElement $htmlElement, array $attributes = []): DOMElement
    {
        if (count($attributes) > 0) {
            if (array_key_exists(strtolower('text'), $attributes) === true) {
                $text = $attributes['text'];
                unset($attributes['text']);
                self::setAttributes($htmlElement, $attributes);
                self::text($htmlElement, $text);
            } elseif (array_key_exists(strtolower('html'), $attributes) === true) {
                $html = $attributes['html'];
                unset($attributes['html']);
                self::setAttributes($htmlElement, $attributes);
                self::html($htmlElement, $html);
            } elseif (array_key_exists(strtolower('child'), $attributes) === true) {
                $htmlChild = $attributes['child'];
                unset($attributes['child']);
                if (count($htmlChild)>0) {
                    self::setAttributes($htmlElement, $attributes);
                    self::makeElementBatch($htmlElement, $htmlChild);
                }
            } else {
                self::setAttributes($htmlElement, $attributes);
            }//end if
        }//end if

        return $htmlElement;
    }//end assignAttributes()


    /**
     * @param  DOMElement $htmlElement
     * @param  array      $attributes
     * @return DOMElement
     */
    public static function setAttributes(DOMElement $htmlElement, array $attributes = []): DOMElement
    {
        if (count($attributes) !== 0) {
            foreach ($attributes as $node => $value) {
                $htmlElement->setAttribute($node, $value);
            }
        }

        return $htmlElement;
    }//end _setAttributes()


    /**
     * @param  DOMElement | DOMNode $parentHtmlElement
     * @param  string               $content
     * @return DOMNode
     */
    public static function text(DOMElement|DOMNode $parentHtmlElement, string $content): DOMNode
    {
        return $parentHtmlElement->appendChild(self::$domDocument->createTextNode($content));
    }//end text()


    /**
     * @param  DOMElement $parentHtmlElement
     * @param  string     $content
     * @return bool|DOMDocument|DOMNode
     */
    public static function html(DOMElement $parentHtmlElement, string $content): bool|DOMDocument|DOMNode
    {
        return $parentHtmlElement->appendChild(self::$domDocument->loadHTML($content));
    }//end html()


    /**
     * @param DOMElement|DOMNode $templateBody
     */
    public static function setNoScriptText(DOMElement|DOMNode $templateBody): void
    {
        // add noscript to ui
        self::text(
            self::element(
                self::element($templateBody, 'noscript'),
                'ms-app-content-warning',
                [
                    'id'    => 'warning',
                    'style' => 'background:red;padding: 5px 5px 5px 10px;color: white;display: flex;flex-direction: column;text-align: left;',
                ]
            ),
            "Sorry! Your web browser doesn't support javascript."
        );
        // end of adding noscript
    }//end setNoScriptText()

    /**
     * @param DOMNode|DOMElement $parentElementChild Html Element
     * @param string $src full url
     */
    public static function setDocumentLoader(DOMNode|DOMElement $parentElementChild, string $src): void
    {
        // Add app loader.
        self::element(
            $parentElementChild,
            'div',
            [
                'id' => 'app-loader',
                'class' => 'app-loader',
                'child' => [
                    'img' => [
                        'alt' => 'Loading...',
                        'class'=>'app-loader-image',
                        'src' => $src,
                    ],
                ],
            ]
        );
    }


    /**
     * @param DOMElement $templateBody
     * @param string $year
     * @param string $company
     */
    public static function addDefaultSignature(DOMElement $templateBody, string $year, string $company): void
    {
        // Add system signature.
        self::text(
            self::element(
                $templateBody,
                'section',
                // Css context for system default signature.
                ['style' => 'font-size: 14px;line-height: 1.5;margin-top: 5px;display: block;']
            ),
            // Text for system default signature
            self::copyRightText($year, $company)
        );
    }//end addDefaultSignature()

    public static function makeBodyId(array $request):string
    {
        if (count($request) > 0) {
            unset($request['locale'], $request['arguments']);
        }

        return implode('.', $request);
    }
    /**
     * @return string
     */
    public static function copyRightText(string $year, string $company):string
    {
        // Copyright © 2020 Winstarit LTD. All Right Reserved.
        return sprintf('Copyright © %1$s %2$s. All Right Reserved.', $year, $company);
    }


    /**
     * @param  array $attributes
     * @return boolean
     */
    public static function isSingleAttributeList(array $attributes): bool
    {
        ksort($attributes);
        return !(array_key_exists(0, array_filter($attributes)) === true);
    }//end isSingleAttributeList()


    /**
     * @param  object $parentHtmlElement
     * @param  string $name
     * @return mixed
     */
    public static function entity(object $parentHtmlElement, string $name): mixed
    {
        return $parentHtmlElement->appendChild(self::$domDocument->createEntityReference($name));
    }//end entity()


    /**
     * @param  object $parentHtmlElement
     * @param  string $data
     * @return mixed
     */
    public static function comment(object $parentHtmlElement, string $data): mixed
    {
        return $parentHtmlElement->appendChild(self::$domDocument->createComment($data));
    }//end comment()


    /**
     * @param  DOMElement $childElement
     * @return DOMNode
     */
    public static function remove(DOMElement $childElement): DOMNode
    {
        return self::$domDocument->removeChild($childElement);
    }//end remove()


    /**
     * @param  string $tag
     * @return DOMNodeList
     */
    public static function captureElementsByTagName(string $tag): DOMNodeList
    {
        return self::$domDocument->getElementsByTagName($tag);
    }//end captureElementsByTagName()


    /**
     * @param  string $elementId
     * @return DOMElement|null
     */
    public static function captureElementById(string $elementId): ?DOMElement
    {
        return self::$domDocument->getElementById($elementId);
    }//end captureElementById()


    /**
     *
     */
    public function __destruct()
    {
    }//end __destruct()
}//end class
