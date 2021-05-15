<?php

namespace Mishusoft\Ema\UrlSplitters;

use DOMElement;
use DOMNode;
use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Media;
use Mishusoft\Framework\Chipsets\MPM;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\System\Time;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Stream;
use Mishusoft\Framework\Libraries\Runtime;
use Mishusoft\Widgets\UniversalWidget;

class WebResourceDelivery
{
    public const welcomeText = 'Welcome to Mishusoft Media Library';


    /**
     * WebResource constructor.
     * This is built-in uninterrupted web resources delivery system.
     */
    public function __construct()
    {

    }//end __construct()


    /**
     * @param array $request
     */
    public function assets(array $request): void
    {
        $this->browse($request);

    }//end assets()


    /**
     * @param array $request
     */
    public function media(array $request): void
    {
        $this->browse($request);

    }//end media()


    /**
     * @param array $request
     */
    private function browse(array $request): void
    {
        if (file_exists(MS_STORAGE_PATH) === true && is_readable(MS_STORAGE_PATH) === true) {
            if (strtolower($request['method']) === strtolower(Memory::Data()->preset->directoryIndex)) {
                $this->webExplore($request['method'], $request);
            } else {
                $this->webExploreLoader($request);
            }
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => Browser::getVisitedPage(),
                        'location'    => MS_STORAGE_PATH,
                        'description' => 'The web data center is not set!!',
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );
        }

    }//end browse()


    /**
     * @param array $request
     */
    public function shared(array $request): void
    {
        if (file_exists(MS_STORAGE_PATH) && is_readable(MS_STORAGE_PATH)) {
            switch (strtolower($request['method'])) {
                case strtolower(Memory::Data()->preset->directoryIndex):
                    Runtime::redirect('assets');
                break;

                case strtolower('json'):
                    if (count($request['arguments']) > 0) {
                        if (false !== strpos(implode($request['arguments']), '-')) {
                            Media::StreamOriginalFile(
                                Media::getRegistriesPath(
                                    str_replace('-', '.', implode($request['arguments'])),
                                    'local'
                                )
                            );
                        } else {
                            Firewall::runtimeFailure(
                                'Not Found',
                                [
                                    'debug' => [
                                        'file'        => (new Browser())->getURLPath(),
                                        'location'    => Browser::getVisitedPage(),
                                        'description' => 'The web data center is not set!!',
                                    ],
                                    'error' => ['description' => 'Your requested url is broken!!'],
                                ]
                            );
                        }
                    } else {
                        Firewall::runtimeFailure(
                            'Not Found',
                            [
                                'debug' => [
                                    'file'        => (new Browser())->getURLPath(),
                                    'location'    => Browser::getVisitedPage(),
                                    'description' => 'Your requested url is broken!!',
                                ],
                                'error' => ['description' => 'Your requested url is broken!!'],
                            ]
                        );
                    }//end if
                break;

                case strtolower('logos'):
                    $array = $request['arguments'];
                    if (file_exists(MS_PRIVATE_MEDIA_PATH.'logos'.DIRECTORY_SEPARATOR.end($array))) {
                        Media::StreamOriginalFile(Media::getMediaPath('logos/'.end($array), 'local'));
                    } else {
                        if (false !== strpos(end($array), '-')) {
                            $filename = end($array);
                            $ext      = pathinfo(end($array), PATHINFO_EXTENSION);
                            $explode  = explode('-', end($array));
                            $expected = array_pop($explode);

                            if (preg_match("[.$ext]", $expected)) {
                                list($width, $height) = explode('x', preg_replace("[.$ext]", '', $expected));
                                if (file_exists(Media::getMediaPath('logos/'.Memory::Data()->preset->logo))) {
                                    Media::StreamOriginalFile(
                                        Media\Image::resize(
                                            Media::getMediaPath('logos/'.Memory::Data()->preset->logo),
                                            $width,
                                            $height,
                                            MS_PRIVATE_MEDIA_PATH.'logos'.DIRECTORY_SEPARATOR.$filename
                                        )
                                    );
                                }
                            } else {
                                Media::StreamOriginalFile(
                                    Media\Image::resize(
                                        Media::getMediaPath('logos/'.Memory::Data()->preset->logo),
                                        16,
                                        16,
                                        MS_PRIVATE_MEDIA_PATH.'logos'.DIRECTORY_SEPARATOR.$filename
                                    )
                                );
                            }//end if
                        } else {
                            Firewall::runtimeFailure(
                                'Not Found',
                                [
                                    'debug' => [
                                        'file'        => (new Browser())->getURLPath(),
                                        'location'    => Browser::getVisitedPage(),
                                        'description' => 'Your requested url is not exists in the web data center!!',
                                    ],
                                    'error' => ['description' => 'Your requested url is broken!!'],
                                ]
                            );
                        }//end if
                    }//end if
                break;

                case strtolower('related'):
                    if (file_exists(MPM::TemplatesJavascriptResourcesRootLocal().implode(DS, $request['arguments']))) {
                        Media::StreamOriginalFile(Media::getMediaPathOfTemplatesJavascriptResourcesRoot(implode(DS, $request['arguments'])));
                    } else {
                        Firewall::runtimeFailure(
                            'Not Found',
                            [
                                'debug' => [
                                    'file'        => (new Browser())->getURLPath(),
                                    'location'    => Browser::getVisitedPage(),
                                    'description' => 'Your requested url is not exists in the web data center!!',
                                ],
                                'error' => ['description' => 'Your requested url is broken!!'],
                            ]
                        );
                    }
                break;

                default:
                    Firewall::runtimeFailure(
                        'Not Found',
                        [
                            'debug' => [
                                'file'        => ucfirst($request['controller']),
                                'location'    => MS_STORAGE_PATH,
                                'description' => 'The web data center is not set!!',
                            ],
                            'error' => ['description' => 'Your requested url is broken!!'],
                        ]
                    );
                break;
            }//end switch
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => ucfirst($request['controller']),
                        'location'    => MS_STORAGE_PATH,
                        'description' => 'The web data center is not set!!',
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );
        }//end if

    }//end shared()


    private function webExploreLoader(array $request)
    {
        $requestedFile = Media::getStoragePath(
            strtolower($request['controller']).DIRECTORY_SEPARATOR.strtolower($request['method']).DIRECTORY_SEPARATOR.implode(DIRECTORY_SEPARATOR, $request['arguments'])
        );

        if (file_exists($requestedFile)) {
            if (filetype($requestedFile) === 'dir') {
                self::webExplore($requestedFile, $request);
            } else {
                Media::StreamOriginalFile($requestedFile);
            }
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => strtolower($request['controller']).DIRECTORY_SEPARATOR.strtolower($request['method']).DIRECTORY_SEPARATOR.implode(DIRECTORY_SEPARATOR, $request['arguments']),
                        'location'    => $requestedFile,
                        'description' => 'The web data center is not set!!',
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );
        }

    }//end webExploreLoader()


    private function webExplore(string $dirname, array $request)
    {
        $dirname = ($dirname === Memory::Data()->preset->directoryIndex) ? MS_STORAGE_PATH.'0/'.$request['controller'] : $dirname;

        Ui::HtmlInterface(
            ucfirst($request['controller']),
            function ($html, $head, $title) use ($request, $dirname) {
                Ui::elementList(
                    $head,
                    [
                        'link' => [
                            [
                                'rel'  => 'stylesheet',
                                'href' => Media::getAssetsPath('css/mishusoft-theme.css', 'remote'),
                            ],
                            [
                                'rel'  => 'stylesheet',
                                'href' => Media::getAssetsPath('css/app-ui-v4.css', 'remote'),
                            ],
                        ],
                    ]
                );

                // set id attribute for body
                $body = Ui::element($html, 'body', ['id' => 'library']);

                // add app loader
                Ui::element(
                    $body,
                    'div',
                    [
                        'id'    => 'app-loader',
                        'class' => 'app-loader',
                        'child' => [
                            'img' => [
                                'alt'   => 'Loading...',
                                'style' => 'cursor: progress;width: 100px;height: 100px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;-webkit-border-radius: 50%;border-radius: 50%;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);',
                                'src'   => 'data:image/gif;base64,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',
                            ],
                        ],
                    ]
                );

                // add noscript to ui
                Ui::setNoScriptText($body);
                // end of adding noscript
                // create mishusoft application with html
                $template = Ui::element($body, 'app', ['class' => 'flex-column flex-center-all']);

                // create header element in template
                $template_header = Ui::element($template, 'header', ['class' => 'header header-navigation-bar box-shadow2', 'style' => 'background:white;'] /*,['style' => 'background: white;display: flex;flex-direction: row;width: 100%;height: 70px;box-shadow: 0 3px 4px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);']*/);
                // add logo, menu section in navigation bar in header area
                $header_logo_zone = Ui::element(
                    $template_header,
                    'a',
                    [
                        'style' => 'color: '.Ui::color['default'].';',
                        // 'style' => Ui::htmlHrefStyle . 'color: ' . Ui::color["default"] . ';width: 30%;font-family: Saira Stencil One,Arial,serif;font-size: 43px;font-weight: bold;text-transform: uppercase;display: flex;align-items: center;justify-content: left;transition: all .15s ease;'
                        // ,'href' => Memory::Data("framework")->host->url
                        'class' => 'protect mishusoft-logo mishusoft-root-link mishusoft-root-link-primary animate',
                        'href'  => Runtime::link('default_home'),
                    ]
                );
                Ui::element($header_logo_zone, 'img', ['src' => FRAMEWORK_FAVICON_FILE, 'class' => ' box-shadow1', 'height' => '50px', 'width' => '50px', 'alt' => 'm'/* 'alt' => 'mishusoft\'s official logo'*//*, 'alt' => 'mishusoft', 'style' => 'margin: 10px;text-align: center;width: 50px;height: 50px;float: left;border-radius: 50%;box-shadow: 0 2px 4px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);transition: all .15s ease;'*/]);
                Ui::text($header_logo_zone, $request['controller']);

                Ui::elementList(
                    Ui::element($template_header, 'nav', ['class' => 'nav-right width-70percent', /*'style' => 'width:70%;font-size:18px;font-weight:bold;align-items: center;display: flex;justify-content: flex-end;'*/]),
                    [
                        'a' => [
                            [
                                'href' => Runtime::link('about/aboutMishusoft'),
                                'text' => 'About US',
                            ],
                            [
                                'href' => Runtime::link('account'),
                                'text' => 'Log In / Join',
                            ],
                            [
                                'href' => Runtime::link('support'),
                                'text' => 'Help',
                            ],
                        ],
                    ]
                );

                // add template body
                $template_body = Ui::element($template, 'article', ['style' => 'width: 1024px;', 'class' => 'flex-center-all flex-column']);

                // take action in index page on account area
                if (_String::lower($request['method']) === _String::lower('index')) {
                    // set text for title
                    Ui::text($title, ' || '.'Home');

                    // set separate paragraph for index page
                    Ui::elementList(
                        $template_body,
                        [
                            'ms-app-paragraph' => [
                                [
                                    'style' => 'width: 100%;padding: 50px;text-align: center;font-size: 40px;font-weight: bold;',
                                    'text'  => str_replace('media', $request['controller'], self::welcomeText),
                                ],
                                // set welcome text
                                [
                                    'style' => 'width: 100%;padding: 10px;text-align: center;font-size: 16px;font-weight: normal;line-height: 1.5;margin: 0 10px 0 10px;',
                                    'text'  => "We delivery various css, js and images file for website's use only.",
                                ],
                                // set company details text
                            ],
                        ]
                    );
                } else {
                    // set text for title
                    Ui::text($title, ' || '.basename($dirname));
                    Ui::assignAttributes($template_body, ['style' => 'width: 1024px;padding-top:20px;']);
                }//end if

                (new UniversalWidget($template_body))->breadcrumb();

                // optimize web link
                if (substr(_String::lower((new Browser())->getVisitedPage()), (strlen(_String::lower((new Browser())->getVisitedPage())) - 1), 1) !== '/') {
                    $parentURL = _String::lower((new Browser())->getVisitedPage()).'/';
                } else {
                    $parentURL = _String::lower((new Browser())->getVisitedPage());
                }

                // add media browser
                $table = Ui::element($template_body, 'table', ['class' => 'table table-striped table-radius', 'style' => 'background: gainsboro;']);

                $table_header = Ui::element(Ui::element($table, 'thead', ['class' => 'bg-default', 'style' => 'font-size: 14px;font-weight: bold;']), 'tr');
                Ui::element($table_header, 'td', ['style' => 'width: 20px;']);
                Ui::text(Ui::element($table_header, 'td', ['style' => 'width:400px;']), 'Name');
                Ui::text(Ui::element($table_header, 'td', ['style' => 'width:200px;']), 'Type');
                Ui::text(Ui::element($table_header, 'td'), 'Size');
                Ui::text(Ui::element($table_header, 'td', ['style' => 'width:200px;']), 'Modify');

                $table_body = Ui::element($table, 'tbody', ['style' => 'font-size: 12px;']);

                if (count(Stream::getList($dirname)) > 0) {
                    $this->viewDirOrFileList($dirname, $table_body, $parentURL);
                } else {
                    Ui::element(
                        Ui::element(
                            Ui::element(
                                $table_body,
                                'tr',
                                ['style' => 'font-size: 14px;text-align: center;font-weight: bolder;']
                            ),
                            'td',
                            [
                                'style'   => 'width:100%;',
                                'colspan' => '5',
                            ]
                        ),
                        'a',
                        [
                            'class' => 'protect',
                            'style' => 'color: '.Ui::color['black'].';',
                            'text'  => 'Empty folder',
                        ]
                    );
                }//end if

                // add template footer
                Ui::addDefaultSignature(Ui::element($template, 'footer', ['class' => 'footer width-100percent', 'style' => 'color:black;font-size:12px;margin:10px']));

                Ui::elementList(
                    $body,
                    [
                        'script' => [
                            [
                                'type' => 'application/javascript',
                                'text' => 0,
                            ],
                            [
                                'type' => 'application/javascript',
                                'text' => "'use strict';let countdown = setInterval(function () {if (document.readyState === 'complete') {clearInterval(countdown);if (document.querySelector('#app-loader')) {document.querySelector('#app-loader').setAttribute('style', 'display:none;');}}}, 1000);",
                            ],
                        ],
                    ]
                );
            }
        );

    }//end webExplore()


    private function viewDirOrFileList(string $dirname, DOMElement|DOMNode $table_body, string $parentURL)
    {
        foreach ((array) Media::FileExplore($dirname) as $file) {
            $list = Ui::element($table_body, 'tr');
            if (Media::in(Media\Mime::Image, Media::getMimeContent($file))) {
                Ui::element(Ui::element(Ui::element($list, 'td', ['style' => 'width: 20px;']), 'a', ['style' => Ui::htmlHrefStyle.'color: '.Ui::color['black'].';', 'href' => $parentURL.basename($file)]), 'img', ['style' => 'width:20px;height:20px;', 'src' => $parentURL.basename($file)]);
            } else {
                if (Media::getFileType($file) === 'dir') {
                    Ui::element(Ui::element(Ui::element($list, 'td', ['style' => 'width: 20px;']), 'a', ['style' => Ui::htmlHrefStyle.'color: '.Ui::color['black'].';', 'href' => $parentURL.basename($file)]), 'img', ['style' => 'width:20px;height:20px;', 'src' => Media::toDataUri('images/folder.png', 'remote')]);
                } else if (Media::getFileType($file) === 'file') {
                    Ui::element(Ui::element(Ui::element($list, 'td', ['style' => 'width: 20px;']), 'a', ['style' => Ui::htmlHrefStyle.'color: '.Ui::color['black'].';', 'href' => $parentURL.basename($file)]), 'img', ['style' => 'width:20px;height:20px;', 'src' => Media::toDataUri('images/code-file.png', 'remote')]);
                } else {
                    Ui::text(Ui::element(Ui::element($list, 'td', ['style' => 'width: 20px;']), 'a', ['style' => Ui::htmlHrefStyle.'color: '.Ui::color['black'].';', 'href' => $parentURL.basename($file)]), Media::getFileType($file));
                }
            }

            Ui::text(Ui::element(Ui::element($list, 'td', ['style' => 'width:400px;']), 'a', ['class' => 'protect', 'style' => 'color: '.Ui::color['black'].';', 'href' => $parentURL.basename($file)]), Media::getOriginalNameOfFile($file));

            if (Media::getFileType($file) === 'dir') {
                Ui::text(Ui::element($list, 'td', ['style' => 'width:200px;']), 'File Folder');
            } else {
                Ui::text(Ui::element($list, 'td', ['style' => 'width:200px;']), _Array::value(Media::getFileInfo($file), 'document'));
            }

            Ui::text(Ui::element($list, 'td'), Media::getFileSize($file));
            Ui::text(Ui::element($list, 'td', ['style' => 'width:200px;']), Time::getTodayFullBeautify(filemtime($file)));
        }//end foreach

    }//end viewDirOrFileList()


}//end class
