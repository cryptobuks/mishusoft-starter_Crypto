<?php


use Mishusoft\Storage;
use Mishusoft\Services\SEOToolKitService;
use Mishusoft\System\Logger;
use Mishusoft\System\Memory;
use Mishusoft\Ui;
use Mishusoft\Drivers\Session;
use Mishusoft\Utility\Inflect;

Logger::write('mishusoft.php template is running..');
Logger::write('UI started');
// We need to generate template engine.
Ui::start();
Logger::write('UI set document title');
Ui::setDocumentTitle($this->titleOfCurrentWebPage);


Logger::write('UI checking template use or not');
if ($this->templateUse === 'no') {
    Logger::write('UI build document for themselves');
    Ui::setDocumentContentBody(Ui::element(Ui::getDocumentRoot(), 'body'));
    Ui::element(Ui::getDocumentContentBody(), 'script', ['id' => 'content-loader', 'text' => 0]);

    Logger::write('UI load current page.');
    // Runtime file for compile.
    include_once $this->loadTemplateFile();
} else {
    /*
     * add SEO_TOOL_KIT
     * we need to elaborate all meta tag for all supported seo engine
     * if we have not meta, then we execute default meta tags
     */

    (new SEOToolKitService($this))->start();


    Ui::elementList(Ui::getDocumentHeadElement(), ['link' => Storage::assignableWebFavicons()]);

    /*
     * this step we declare meta tags for robots
     */

    Ui::elementList(
        Ui::getDocumentHeadElement(),
        [
            'meta' => [
                [
                    'name' => 'robots',
                    'content' => 'index, follow',
                ],
                [
                    'name' => 'robots',
                    'content' => 'max-image-preview:standard',
                ],
                [
                    'name' => 'robots',
                    'content' => 'max-video-preview:-1',
                ],
            ],
        ]
    );

    /*
     * this step we declare meta tags for all seo engine
     */

    Ui::element(Ui::getDocumentHeadElement(), 'meta', ['name' => 'googlebot', 'content' => 'nosnippet']);

    /*
     * this step we declare meta tag for seo index
     */

    /*
     * we declare default meta tags for mishusoft application
    */

    Ui::elementList(
        Ui::getDocumentHeadElement(),
        [
            'meta' => [
                [
                    'id' => 'meta-title',
                    'name' => 'meta-title',
                    'content' => $this->titleOfCurrentWebPage,
                ],
                [
                    'id' => 'meta-app-name',
                    'name' => 'meta-app-name',
                    'content' => Memory::Data()->name,
                ],
                [
                    'id' => 'mishusoft-web-root',
                    'name' => 'mishusoft-web-root',
                    'content' => Memory::Data('framework')->host->url,
                ],
                [
                    'id' => 'mishusoft-session-validity',
                    'name' => 'mishusoft-session-validity',
                    'content' => Session::get('auth'),
                ],
            ],
        ]
    );

    // add css file in head
    Ui::elementList(
        Ui::getDocumentHeadElement(),
        [
            'link' => [
                [
                    'rel' => 'stylesheet', 'type' => 'text/css',
                    'href' => Storage::assetsFullPath('css/font-face.css', 'remote'),
                ],
            ],
            'style' => [
                [
                    'rel' => 'stylesheet', 'type' => 'text/css',
                    'text' => file_get_contents(Storage::assetsFullPath('css/app-ui-v4.css')),
                ],
                [
                    'rel' => 'stylesheet', 'type' => 'text/css',
                    'text' => file_get_contents(Storage::assetsFullPath('css/mishusoft-theme.css')),
                ],
            ],]
    );

    Ui::element(Ui::getDocumentHeadElement(), 'style', [
        'text' => '.app-loader{/*display:none;*//* Hidden by default */position: fixed; /* Stay in place */z-index: 1000; /* Sit on top */padding-top: 15%; /* Location of the box */top: 50%;left: 50%;transform: translate(-50%, -50%);width: 100%; /* Full width */height: 100%; /* Full height */overflow: auto; /* Enable scroll if needed */background-color: rgb(135, 206, 250); /* Fallback color */background-color: rgba(135, 206, 250, 1); /* Black w/ opacity */}.app-loader-image{cursor: progress;width: 100px;height: 100px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;-webkit-border-radius: 50%;border-radius: 50%;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);}'
    ]);
    /*
     * adsence link
     * <script data-ad-client="ca-pub-7478244803438159" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
     */
//    Ui::element(Ui::getDocumentHeadElement(), 'script', [
//        'data-ad-client' => 'ca-pub-7478244803438159', 'async' => '',
//        'src' => 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
//    ]);


    /*
     * add template body set id attribute for body
     */
    $templateBodyElement = Ui::element(Ui::getDocumentRoot(), 'body', [
        'id' => Inflect::lower($this->request['controller']), 'class' => 'ms-app background-image',
    ]);

    Ui::setTemplateBody($templateBodyElement);

    // add app loader
    Ui::element(
        Ui::element(Ui::getTemplateBody(), 'div', [
            'id' => 'app-loader',
            'class' => 'app-loader',
        ]),
        'img',
        [
            'alt' => 'Loading...',
            'class' => 'app-loader-image',
            'src' => Storage::toDataUri('media', 'images/loaders/app-loader.gif'),
        ]
    );


    // add noscript to ui
    Ui::setNoScriptText(Ui::getTemplateBody());
    // end of adding noscript


    //set part of template
    Ui::setDocumentContentHeader(Ui::element(Ui::getTemplateBody(), 'header'));
    Ui::setDocumentContentBody(Ui::element(Ui::getTemplateBody(), 'article'));
    Ui::setDocumentContentFooter(Ui::element(Ui::getTemplateBody(), 'footer'));


    // add template topQuickBar
    if (array_key_exists('top', $this->getWidgets()) === true) {
        foreach ($this->getWidgets()['top'] as $widget) {
            include_once $widget;
        }
    }

    // add template universal menubar
    if (array_key_exists('header', $this->getWidgets()) === true) {
        foreach ($this->getWidgets()['header'] as $widget) {
            include_once $widget;
        }
    }

    // runtime file for compile
    include_once $this->loadTemplateFile();

    // add template footer
    if (array_key_exists('footer', $this->getWidgets()) === true) {
        foreach ($this->getWidgets()['footer'] as $widget) {
            include_once $widget;
        }
    }

    Ui::elementList(
        Ui::getTemplateBody(),
        [
            'script' => [
                [
                    'type' => 'application/javascript',
                    'text' => 0,
                ],
                [
                    'type' => 'application/javascript',
                    'text' => file_get_contents(Storage::assetsFullPath('js/app-js-v4.js')),
                ],
            ],
        ]
    );
}//end if

// display the compiled html document
Ui::display();
