<?php declare(strict_types=1);

namespace Mishusoft\Communication;

use DOMElement;
use DOMNode;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Exceptions\RuntimeException\NotFoundException;
use Mishusoft\Registry;
use Mishusoft\Services\SEOToolKitService;
use Mishusoft\Storage;
use Mishusoft\MPM;
use Mishusoft\System;
use Mishusoft\Ui;
use Mishusoft\Http\Runtime;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Debug;
use Mishusoft\Utility\Inflect;

class WebResourceDelivery
{
    public const WELCOME_TEXT = 'Welcome to Mishusoft Resources Library';

    /**
     * Store default app logo form memory
     *
     * @var string
     */
    private string $defaultApplicationIcon;


    /**
     * WebResource constructor.
     * This is built-in uninterrupted web resources delivery system.
     *
     * @param string $defaultDirectoryIndex
     * @throws ErrorException
     * @throws NotFoundException
     * @throws RuntimeException
     */
    public function __construct(
        private string $defaultDirectoryIndex = DEFAULT_CONTROLLER
    )
    {
        $this->defaultApplicationIcon = System\Memory::data()->preset->logo;
    }//end __construct()

    /**
     * @param array $request
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws NotFoundException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public function assets(array $request): void
    {
        $this->browse($request);
    }//end assets()

    /**
     * @param array $request
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws NotFoundException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public function webfonts(array $request): void
    {
        $this->browse($request);
    }


    /**
     * @param array $request
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws NotFoundException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public function media(array $request): void
    {
        $this->browse($request);
    }//end media()


    /**
     * @param array $request
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws NotFoundException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    private function browse(array $request): void
    {
        if (file_exists(Storage::storagesPath()) === true && is_readable(Storage::storagesPath()) === true) {
            if (strtolower($request['method']) === strtolower($this->defaultDirectoryIndex)) {
                $this->webExplore($request['method'], $request);
            } else {
                $this->webExploreLoader($request);
            }
        } else {
            throw new NotFoundException('The web data center is not set!!');
        }
    }//end browse()


    /**
     * @param array $request
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws NotFoundException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public function shared(array $request): void
    {
        if (file_exists(Storage::storagesPath()) && is_readable(Storage::storagesPath()) === true) {
            switch (strtolower($request['method'])) {
                case strtolower($this->defaultDirectoryIndex):
                    Runtime::redirect('assets');
                    break;

                case strtolower('json'):
                    if (count($request['arguments']) > 0) {
                        if (str_contains(implode($request['arguments']), '-') === true) {
                            Storage\Stream::file(
                                Storage::sharedFullPath(
                                    str_replace('-', '.', implode($request['arguments'])),
                                    'local'
                                )
                            );
                        } else {
                            throw new InvalidArgumentException('Invalid filename');
                        }
                    } else {
                        throw new InvalidArgumentException('Your requested url is broken');
                    }//end if
                    break;

                case strtolower('logos'):
                    $array = $request['arguments'];
                    if (file_exists(Storage::logosDefaultPath() . end($array)) === true) {
                        Storage\Stream::file(Storage::logoFullPath(end($array)));
                    } elseif (str_contains(end($array), '-') === true) {
                        $filename = end($array);
                        $ext = pathinfo(end($array), PATHINFO_EXTENSION);
                        $explode = explode('-', end($array));
                        $expected = array_pop($explode);

                        if (preg_match('[.' . $ext . ']', $expected) === true) {
                            [
                                $width,
                                $height,
                            ] = explode('x', preg_replace('[.' . $ext . ']', '', $expected));
                            if (file_exists(Storage::logoFullPath($this->defaultApplicationIcon)) === true) {
                                Storage\Stream::file(
                                    Storage\Media\Image::resize(
                                        Storage::logoFullPath($this->defaultApplicationIcon),
                                        (int)$width,
                                        (int)$height,
                                        Storage::logosDefaultPath() . $filename
                                    )
                                );
                            }
                        } else {
                            Storage\Stream::file(
                                Storage\Media\Image::resize(
                                    Storage::logoFullPath($this->defaultApplicationIcon),
                                    16,
                                    16,
                                    Storage::logosDefaultPath() . $filename
                                )
                            );
                        }//end if
                    } else {
                        throw new NotFoundException('Your requested url is not exists in the web data center!!');
                    }//end if
                    break;

                case strtolower('related'):
                    $requestArgument = implode(DS, $request['arguments']);
                    $requestedWebFile = MPM\Classic::templatesJSResourcesRoot(
                        $request['module'],
                        $request['controller']
                    );
                    if (file_exists(MPM\Classic::templatesJSResourcesRootLocal() . $requestArgument) === true) {
                        Storage\Stream::file($requestedWebFile);
                    } else {
                        throw new NotFoundException('Your requested url is not exists in the web data center!!');
                    }
                    break;

                default:
                    throw new NotFoundException('The web data center is not set!!');
                    break;
            }//end switch
        } else {
            throw new NotFoundException('The web data center is not set!!');
        }//end if
    }//end shared()


    /**
     * @param array $request
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws NotFoundException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    private function webExploreLoader(array $request): void
    {
        //Debug::preOutput($request);
        //add webfonts url
        //$directory = '';

        //redirect actual url if controller is webfonts
        if ($request['controller'] === 'webfonts') {
            Runtime::redirect(sprintf('assets/webfonts/%1$s', $request['method']));
        }

        if ($request['method'] === 'webfonts') {
            if ($request['controller'] !== 'assets') {
                Runtime::redirect(sprintf('assets/webfonts/%1$s', implode(DS, $request['arguments'])));
            }
        }

        //http://host/directory/sub/filenameOrsub
        $implodedRequestDirectory = $request['controller'] . DS . $request['method'] . DS;
        $implodedRequestArgument = strtolower($implodedRequestDirectory) . implode(DS, $request['arguments']);
        $requestedFile = Storage::storageFullPath($implodedRequestArgument);

        if (file_exists($requestedFile) === true) {
            if (filetype($requestedFile) === 'dir') {
                $this->webExplore($requestedFile, $request);
            } else {
                Storage\Stream::file($requestedFile);
            }
        } else {
            throw new NotFoundException('The web data center is not set!!');
        }
    }//end webExploreLoader()


    /**
     * WebExplorer of CDN.
     *
     * @param string $dirname
     * @param array $request
     * @throws ErrorException
     * @throws NotFoundException
     * @throws RuntimeException
     */
    private function webExplore(string $dirname, array $request): void
    {
        if ($dirname === $this->defaultDirectoryIndex) {
            $dirname = Storage::appStoragesPath() . $request['controller'];
        }

        Ui::start();
        Ui::setDocumentTitle(ucfirst($request['controller']));

        SEOToolKitService::start();
        SEOToolKitService::addDocumentIdentify(['width'=>'device-width','initial-scale'=>'1.0','shrink-to-fit'=>'no']);
        SEOToolKitService::addDefault(ucfirst($request['controller']));

        Ui::elementList(Ui::getDocumentHeadElement(), ['link' => Storage::assignableWebFavicons()]);

        /*
         * Add stylesheet files.
         * */

        Ui::elementList(
            Ui::getDocumentHeadElement(),
            [
                'link' => [
                    [
                        'id' => 'mishusoft-web-root',
                        'name' => 'mishusoft-web-root',
                        'content' => System\Memory::Data('framework')->host->url,
                    ],
                ],
                'style' => [
                    [
                        'rel' => 'stylesheet', 'type' => 'text/css',
                        'text' => Storage\FileSystem::read(Storage::assetsFullPath('css/loader.css')),
                    ],
                    [
                        'rel' => 'stylesheet', 'type' => 'text/css',
                        'text' => Storage\FileSystem::read(Storage::assetsFullPath('css/resources.css')),
                    ],
                    [
                        'rel' => 'stylesheet', 'type' => 'text/css',
                        'text' => Storage\FileSystem::read(Storage::assetsFullPath('css/mishusoft-theme.css')),
                    ],
                    [
                        'rel' => 'stylesheet', 'type' => 'text/css',
                        'text' => Storage\FileSystem::read(Storage::assetsFullPath('css/framework.css')),
                    ],
                    [
                        'rel' => 'stylesheet', 'type' => 'text/css',
                        'text' => 'html{background-color: rgba(0,0,0,0.03);}',
                    ],
                ],]
        );

        Ui::setTemplateBody(Ui::element(Ui::getDocumentRoot(), 'body', ['id' => Ui::makeBodyId($request)]));

        // Add app loader.
        Ui::setDocumentLoader(Ui::getTemplateBody(), Storage::toDataUri('media', 'images/loaders/app-loader.gif'));

        // add noscript to ui
        Ui::setNoScriptText(Ui::getTemplateBody());
        // end of adding noscript


        // create header element in template
        Ui::setDocumentContentHeader(Ui::element(
            Ui::getTemplateBody(),
            'header',
            [
                'class' => 'header header-navigation-bar',
                'style' => 'background:white;border-bottom: 1px solid rgba(0,0,0,0.1);',
            ]
        ));
        // add logo, menu section in navigation bar in header area
        $header_logo_zone = Ui::element(
            Ui::getDocumentContentHeader(),
            'a',
            [
                'style' => 'color: #0777cc;',
                'class' => 'protect mishusoft-logo mishusoft-root-link mishusoft-root-link-primary animate',
                'href' => Runtime::link('default_home'),
            ]
        );
        Ui::element(
            $header_logo_zone,
            'img',
            [
                'src' => Storage::mediaFullPath('logos/mishusoft-logo-lite.webp', 'remote'),
                'class' => ' box-shadow1',
                'height' => '50px',
                'width' => '50px',
                'alt' => 'm',
            ]
        );
        Ui::text($header_logo_zone, $request['controller']);

        Ui::elementList(
            Ui::element(Ui::getDocumentContentHeader(), 'nav', ['class' => 'nav-right width-70percent',]),
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


        // create mishusoft application with html
        Ui::setDocumentContentBody(
            Ui::element(
                Ui::getTemplateBody(),
                'main',
                [
                    'class' => 'flex-column flex-center-all',
                ]
            )
        );

        // add template body
        $templateBody = Ui::element(
            Ui::getDocumentContentBody(),
            'article',
            ['style' => 'width: 1024px;', 'class' => 'flex-center-all flex-column',
            ]
        );


        // take action in index page on account area
        if (Inflect::lower($request['method']) === Inflect::lower('index')) {
            // set text for title
            Ui::updateDocumentTitle('Home');

            // set separate paragraph for index page
            Ui::elementList(
                $templateBody,
                [
                    'article' => [
                        [
                            'class' => 'resources-header-title width-text-align',
                            'text' => str_replace('media', $request['controller'], self::WELCOME_TEXT),
                        ],
                        // set welcome text
                        [
                            'class' => 'resources-header-description width-text-align',
                            'text' => "We delivery various css, js and images file for website's use only.",
                        ],
                        // set company details text
                    ],
                ]
            );
        } else {
            // set text for title
            Ui::updateDocumentTitle(basename($dirname));
            Ui::assignAttributes($templateBody, ['class' => 'resources-body']);
        }//end if

        $urlPath = Runtime::urlPath();
        $currentUrl = Runtime::currentUrl();
        $visitedUrl = Inflect::lower($currentUrl);
        if ($visitedUrl !== '' && $visitedUrl[(strlen($visitedUrl) - 1)] !== '/') {
            $parentURL = $visitedUrl . '/';
        } else {
            $parentURL = $visitedUrl;
        }

        /*make breadcrumb*/
        $this->makeBreadcrumb($templateBody, $urlPath);

        // add media Registry::Browser()
        $table = Ui::element(
            $templateBody,
            'table',
            [
                'class' => 'table table-striped table-radius', 'style' => 'background: gainsboro;',
            ]
        );

        $table_header = Ui::element(Ui::element(
            $table,
            'thead',
            ['class' => 'bg-default', 'style' => 'font-size: 14px;font-weight: bold;']
        ), 'tr');
        Ui::element($table_header, 'td', ['style' => 'width: 20px;']);
        Ui::text(Ui::element($table_header, 'td', ['style' => 'width:400px;']), 'Name');
        Ui::text(Ui::element($table_header, 'td', ['style' => 'width:200px;']), 'Type');
        Ui::text(Ui::element($table_header, 'td'), 'Size');
        Ui::text(Ui::element($table_header, 'td', ['style' => 'width:200px;']), 'Modify');

        $table_body = Ui::element($table, 'tbody', ['style' => 'font-size: 12px;']);

        if (count(Storage\FileSystem::list($dirname)) > 0) {
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
                        'style' => 'width:100%;',
                        'colspan' => '5',
                    ]
                ),
                'a',
                [
                    'class' => 'protect',
                    'style' => 'color: #000;',
                    'text' => 'Empty folder',
                ]
            );
        }//end if

        // add template footer
        Ui::addDefaultSignature(
            Ui::element(
                Ui::getTemplateBody(),
                'footer',
                ['class' => 'footer width-100percent', 'style' => 'color:black;font-size:12px;margin:10px']
            ),
            System\Time::currentYearNumber(),
            System\Memory::Data()->company->name
        );

        Ui::elementList(
            Ui::getTemplateBody(),
            [
                'script' => [
                    [
                        'type' => 'application/javascript',
                        'text' => 0,
                    ],
                    [
                        'type' => 'module',
                        'src' => Storage::assetsFullPath('js/readystate.js', 'remote'),
                    ],
                ],
            ]
        );

        Ui::display();
    }//end webExplore()


    /**
     * @param string $dirname
     * @param DOMElement|DOMNode $table_body
     * @param string $parentURL
     * @throws NotFoundException
     */
    private function viewDirOrFileList(string $dirname, DOMElement|DOMNode $table_body, string $parentURL): void
    {
        foreach ((array)Storage::explore($dirname) as $file) {
            $list = Ui::element($table_body, 'tr');
            if (Storage\Media::in(Storage\Media\Mime::Image, Storage\Media::mimeContent($file))) {
                Ui::element(Ui::element(Ui::element($list, 'td', ['style' => 'width: 20px;']), 'a', [
                    'style' => Ui::HTML_HREF_STYLE . 'color: #000;', 'href' => $parentURL . basename($file),
                ]), 'img', [
                    'style' => 'width:20px;height:20px;',
                    'alt' => basename($file),
                    'src' => $parentURL . basename($file),
                ]);
            } elseif (Storage\FileSystem::fileType($file) === 'dir') {
                Ui::element(Ui::element(Ui::element($list, 'td', ['style' => 'width: 20px;']), 'a', [
                    'style' => Ui::HTML_HREF_STYLE . 'color: #000;', 'href' => $parentURL . basename($file),
                ]), 'img', [
                    'style' => 'width:20px;height:20px;',
                    'alt' => basename($file),
                    'src' => Storage::toDataUri('media', 'images/icons/folder.png'),
                ]);
            } elseif (Storage\FileSystem::fileType($file) === 'file') {
                Ui::element(Ui::element(Ui::element($list, 'td', ['style' => 'width: 20px;']), 'a', [
                    'style' => Ui::HTML_HREF_STYLE . 'color: #000;', 'href' => $parentURL . basename($file),
                ]), 'img', [
                    'style' => 'width:20px;height:20px;',
                    'alt' => basename($file),
                    'src' => Storage::toDataUri('media', 'images/icons/code-file.png'),
                ]);
            } else {
                Ui::text(Ui::element(Ui::element($list, 'td', ['style' => 'width: 20px;']), 'a', [
                    'style' => Ui::HTML_HREF_STYLE . 'color: #000;', 'href' => $parentURL . basename($file),
                ]), Storage\FileSystem::fileType($file));
            }

            Ui::text(Ui::element(Ui::element($list, 'td', ['style' => 'width:400px;']), 'a', [
                'class' => 'protect', 'style' => 'color: #000;', 'href' => $parentURL . basename($file),
            ]), Storage\FileSystem::fileOriginalName($file));

            if (Storage\FileSystem::fileType($file) === 'dir') {
                Ui::text(Ui::element($list, 'td', ['style' => 'width:200px;']), 'File Folder');
            } else {
                Ui::text(
                    Ui::element($list, 'td', ['style' => 'width:200px;']),
                    ArrayCollection::value(Storage\Media::fileInfo($file), 'document')
                );
            }

            Ui::text(Ui::element($list, 'td'), Storage\FileSystem::fileSize($file));
            Ui::text(
                Ui::element($list, 'td', ['style' => 'width:200px;']),
                System\Time::todayFullBeautify(filemtime($file))
            );
        }//end foreach
    }//end viewDirOrFileList()

    /**
     * @throws ErrorException
     * @throws RuntimeException
     * @throws NotFoundException
     */
    private function makeBreadcrumb(DOMElement|DOMNode $templateBody, string $urlPath): void
    {
        /*image properties*/
        $imageProperties = [
            'src' => FRAMEWORK_FAVICON_FILE,
            'alt' => 'mishusoft',
            'class' => 'box-shadow1',
            'style' => 'margin: 5px;text-align: center;width: 20px;height: 20px;float: left;border-radius: 50%;transition: all .15s ease;',
            'width' => '20px',
            'height' => '20px',
        ];
        // Add breadcrumb.
        $breadcrumb = Ui::element($templateBody, 'breadcrumb', ['style' => 'border: 1px solid rgba(0,0,0,0.2);width: 99%;']);
        Ui::element(
            Ui::element($breadcrumb, 'a', ['class' => 'protect', 'href' => Runtime::link('default_home')]),
            'img',
            $imageProperties
        );

        // Collect navigation url list.
        $webRoot = Storage::applicationWebDirectivePath();
        if (str_starts_with($urlPath, $webRoot)) {
            $urlPath = substr($urlPath, strlen($webRoot));
        }

        $urlList = array_filter(explode('/', $urlPath));
        $urlList = array_values($urlList);

        foreach ($urlList as $url) {
            Ui::text($breadcrumb, '/');
            Ui::element($breadcrumb, 'a', [
                'href' => Runtime::link(
                    implode('/', ArrayCollection::getValues(array_search($url, $urlList), $urlList))
                ),
                'text' => $url,
            ]);
        }
    }//end breadcrumb()
}//end class
