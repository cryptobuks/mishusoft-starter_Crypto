<?php


use Mishusoft\Http\Runtime;
use Mishusoft\Storage;
use Mishusoft\Services\SEOToolKitService;
use Mishusoft\System\Log;
use Mishusoft\System\Memory;
use Mishusoft\Ui;
use Mishusoft\Http\Session;
use Mishusoft\Utility\Inflect;

Log::info('mishusoft.php template is running..');
Log::info('UI started');
// We need to generate template engine.
Ui::start();
Log::info('UI set document title');
Ui::setDocumentTitle($this->titleOfCurrentWebPage);


Log::info('UI checking template use or not');
if ($this->templateUse === 'no') {
    Log::info('UI build document for themselves');
    Ui::setDocumentContentBody(Ui::element(Ui::getDocumentRoot(), 'body'));
    Ui::element(Ui::getDocumentContentBody(), 'script', ['id' => 'content-loader', 'text' => 0]);

    Log::info('UI load current page.');
    // Runtime file for compile.
    include_once $this->loadTemplateFile();
} else {
    /*
     * add SEO_TOOL_KIT
     * we need to elaborate all meta tag for all supported seo engine
     * if we have not meta, then we execute default meta tags
     */
    SEOToolKitService::start();
    SEOToolKitService::addDocumentIdentify();
    SEOToolKitService::loadAdsAuthentication();
    SEOToolKitService::addDefault($this->titleOfCurrentWebPage);
    SEOToolKitService::addRobotsMeta();
    SEOToolKitService::addSocialCard(['google','og','twitter'], [
        'title'=> $this->titleOfCurrentWebPage,
        'image'=> Storage::toDataUri('media', 'logos/mishusoft-logo-lite.webp', 'remote')
    ]);
    //add author file
    SEOToolKitService::addAuthor(Runtime::link('humans.txt'));
    //this step we declare meta and link tags for progressive web application
    Ui\ProgressiveWebApplication::addMeta(DEFAULT_APP_NAME);


    //this step we declare meta tags for all seo engine
    Ui::element(Ui::getDocumentHeadElement(), 'meta', ['name' => 'googlebot', 'content' => 'nosnippet']);
    //we declare default meta tags for mishusoft application
    Ui::elementList(
        Ui::getDocumentHeadElement(),
        [
            'meta' => [
                ['id' => 'mishusoft-web-root', 'content' => Runtime::hostUrl(),],
                ['id' => 'mishusoft-session-validity', 'content' => Session::get('auth'),],
            ],
        ]
    );



    //add web favicons file
    Ui::elementList(Ui::getDocumentHeadElement(), ['link' => Storage::assignableWebFavicons()]);

    // add css file in head

    //<link rel="stylesheet" media='screen and (min-width: 140px) and (max-width: 380px)' href="phone.css"/>
    //<link rel="stylesheet" media='screen and (min-width: 381px) and (max-width: 700px)' href="tablet.css"/>

    //Ui::elementList(Ui::getDocumentHeadElement(), ['link'=>Storage::assignableWebFonts()]);
    Ui::elementList(
        Ui::getDocumentHeadElement(),
        [
            'style' => [
                [
                    'type' => 'text/css', 'id' => 'theme.css',
                    'text' => Storage\FileSystem::readAssets('css/mishusoft-theme.css'),
                ],
                [
                    'type' => 'text/css', 'id' => 'theme.css',
                    'text' => Storage\FileSystem::readAssets('css/framework.css'),
                ],
            ],
        ]
    );

    Ui::element(Ui::getDocumentHeadElement(), 'style', [
        'text' => Storage\FileSystem::readAssets('css/loader.css'),
    ]);

    //web.dev/installable-manifest/
    //this step we declare meta and link tags for progressive web application
    Ui\ProgressiveWebApplication::addFile();


    /*
     * adsence link
     * <script data-ad-client="ca-pub-7478244803438159" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
     */
//    Ui::element(Ui::getDocumentHeadElement(), 'script', [
//        'data-ad-client' => 'ca-pub-7478244803438159', 'async' => '',
//        'src' => 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
//    ]);


    //end head section



    /*
     * add template body set id attribute for body
     */
    Ui::setTemplateBody(
        Ui::element(Ui::getDocumentRoot(), 'body', [
            'id' => Inflect::lower(Ui::makeBodyId($this->request)),
            'class' => 'ms-app background-image', 'theme' => 'mishusoft',
        ])
    );


    // add app loader
    Ui::setDocumentLoader(Ui::getTemplateBody(), Storage::toDataUri('media', 'images/loaders/app-loader.gif'));


    // add noscript to ui
    Ui::setNoScriptText(Ui::getTemplateBody());
    // end of adding noscript


    //set part of template
    Ui::setDocumentContentHeader(Ui::element(Ui::getTemplateBody(), 'header'));
    Ui::setDocumentContentBody(Ui::element(Ui::getTemplateBody(), 'main'));
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
                    //'text' => 'console.log("Page loading..... from internal...")',
                    'text' => 0,
                ],
                [
                    'type' => 'module', 'rel' => 'prefetch', 'id' => 'readystate.js',
                    //'text' => file_get_contents(Storage::assetsFullPath('js/readystate.js')),
                    //type="module"
                   // 'src' => Storage::assetsFullPath('js/readystate.js', /*'remote'*/),
                    'src' => Storage::toDataUri('assets', 'js/readystate.js', 'remote'),
                ],
                [
                    'type' => 'module', 'rel' => 'prefetch', 'id' => 'framework.js',
                    //'text' => file_get_contents(Storage::assetsFullPath('js/framework.js')),
                    'src' => Storage::toDataUri('assets', 'js/framework.js', 'remote'),
                    //'src' => Storage::toDataUri('assets', 'js/framework.js', /*'remote'*/),
                ],
            ],
        ]
    );
}//end if

// display the compiled html document
Ui::display();
