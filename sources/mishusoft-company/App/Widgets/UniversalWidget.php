<?php

    namespace App\Widgets;

    use DOMElement;
    use DOMNode;
    use Mishusoft\Http\Runtime;
    use Mishusoft\Storage;
    use Mishusoft\System\Ui;
    use Mishusoft\Utility\Inflect;

    class UniversalWidget
    {
        /**
         * @var DOMElement
         */
        private DOMElement $htmlBody;


        /**
         * universalWidget constructor.
         *
         * @param DOMElement $bodyElement
         */
        public function __construct(DOMElement $bodyElement)
        {
            $this->htmlBody = $bodyElement;
        }//end __construct()


        /**
         * @return DOMElement|DOMNode
         * @throws \Mishusoft\Exceptions\ErrorException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
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
            $urlPath = get_http_request_uri();
            $webRoot = Storage::applicationWebDirectivePath();
            if (Inflect::startsWith($urlPath, $webRoot)) {
                $urlPath = substr($urlPath, strlen($webRoot));
            }
            $urlList = explode('/', $urlPath);
            $urlList = array_filter($urlList);
            $urlList = array_values($urlList);

            foreach ($urlList as $id => $url) {
                Ui::text($breadcrumb, '/');
                Ui::element($breadcrumb, 'a', [
                    'href' => Runtime::link(
                        implode('/', get_array_values(array_search($url, $urlList), $urlList))
                    ),
                    'text' => $url,
                ]);
            }

            return $breadcrumb;
        }//end breadcrumb()
    }//end class
