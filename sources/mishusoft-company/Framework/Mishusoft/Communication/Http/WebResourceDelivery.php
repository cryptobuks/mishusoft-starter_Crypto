<?php

    declare(strict_types=1);

    namespace Mishusoft\Communication\Http;

    use DOMElement;
    use DOMNode;
    use Exception;
    use Mishusoft\Exceptions\ErrorException;
    use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
    use Mishusoft\Exceptions\RuntimeException;
    use Mishusoft\Exceptions\RuntimeException\NotFoundException;
    use Mishusoft\Http\Runtime;
    use Mishusoft\MPM;
    use Mishusoft\Services\SEOToolKitService;
    use Mishusoft\Services\WebResourcesService;
    use Mishusoft\Storage;
    use Mishusoft\System;
    use Mishusoft\System\Ui;
    use Mishusoft\Utility;

// url
// domain/resources/[container]/[path]
// sample
// https://localhost/favicon.ico
// https://localhost/robots.txt
// https://localhost/ads.txt
// https://localhost/human.txt
// https://localhost/resource/assets/js/readystate.js
// https://localhost/resource/media/icon/loader.png
// https://localhost/resource/framework/js/loader.js
// https://localhost/resource/framework/css/loader.css
// https://localhost/resource/framework/images/loader.gif

    class WebResourceDelivery extends WebResourcesService
    {
        public const WELCOME_TEXT = "Welcome to Mishusoft Resources Library";

        /**
         * Store default app logo form memory
         *
         * @var string
         */
        private string $defaultApplicationIcon;
        private string $defaultDirectoryIndex;

        /**
         * WebResource constructor.
         * This is built-in uninterrupted web resources delivery system.
         *
         * @throws InvalidArgumentException
         * @throws RuntimeException
         */
        public function __construct(private System\Core\RequestCore $request)
        {
            $this->defaultDirectoryIndex  = System\Memory::getOption('preset.directoryIndex');
            $this->defaultApplicationIcon = System\Memory::getOption('preset.logo');
        }

        /**
         * @throws RuntimeException
         * @throws ErrorException
         * @throws InvalidArgumentException
         * @throws NotFoundException
         */
        public function run(): void
        {
            if (is_readable(path_storage()) === true) {
                if (strtolower($this->request->getMethod()) === $this->defaultDirectoryIndex) {
                    $this->webExplore($this->request->getMethod());
                } else {
                    $this->webExploreLoader();
                }
            } else {
                throw new NotFoundException("The web data center is not set!!");
            }
        }


        /**
         * Play loader for verify request
         *
         * @throws ErrorException
         * @throws InvalidArgumentException
         * @throws RuntimeException
         * @throws NotFoundException
         */
        private function webExploreLoader(): void
        {
            $route = $this->request->getMethod();
            $uri   = $this->request->getArguments();

            //http://host/resource/directory/sub/filenameOrsub

            // verify requested route in permitted route list
            if (in_array($route, $this->authorizedDirectories, true)) {
                if (count($uri) > 0) {
                    $requestedFile = authorized_path_full($route, implode('/', $uri));
                } else {
                    $requestedFile = authorized_path_full($route);
                }
            } elseif (in_array($route, $this->shareableDirectories, true)) {
                if (count($uri) > 0) {
                    $requestedFile = resource_path_full($route, implode('/', $uri));
                } else {
                    $requestedFile = resource_path_full($route);
                }
            } else {
                throw new NotFoundException(sprintf('%1$s not found', $this->request->getUri()));
            }

            // checking file existence in file system
            if (file_exists($requestedFile)) {
                if (filetype($requestedFile) === "dir") {
                    $this->webExplore($requestedFile);
                } else {
                    stream_file($requestedFile);
                }
            } else {
                throw new NotFoundException(sprintf('%1$s not found', $this->request->getUri()));
            }
        }

        /**
         * WebExplorer of CDN.
         *
         * @param string $dirname
         *
         * @throws ErrorException
         * @throws InvalidArgumentException
         * @throws RuntimeException
         * @throws NotFoundException
         */
        private function webExplore(string $dirname): void
        {
            $controller = $this->request->getController();
            $method     = $this->request->getMethod();

            if ($dirname === $this->defaultDirectoryIndex) {
                $dirname = path_storage_resource();
            }

            //
            // add_document_title('test')
            // add_document_meta(array [])
            // add_document_favicons(root:framework)
            // add_document_script_stylesheet(array []);
            // add_document_script_stylesheet_at_body(array []);
            // add_document_preloader(image_local_path)
            // add_document_main_header(logo_url, title, array [menu link])
            // add_document_main_content(array [])
            // add_document_widget(string position, array [])
            // document_render()
            //


            Ui::start();

            SEOToolKitService::start();
            SEOToolKitService::addDocumentIdentify();
            SEOToolKitService::addDefault(ucfirst($controller));

            Ui::setDocumentTitle(ucfirst($controller));

            Ui::elementList(Ui::getDocumentHeadElement(), [
                "link" => Storage::assignableWebFavicons("framework"),
            ]);


            // Add stylesheet files.

            $stylesheets = [
                ["type" => "text/css", "text" => file_get_contents(resource_path_full('framework', 'css/loader.css'))],
                ["type" => "text/css", "text" => file_get_contents(resource_path_full('framework', 'css/colors.css'))],
                // ["type" => "text/css", "text" => read_asset_framework("webfonts/saira-stencil-one.css")],
                //            [
                //                "type" => "text/css",
                //                "text" => asset_framework("webfonts/saira-stencil-one.css"),
                //            ],
                ["type" => "text/css", "text" => file_get_contents(resource_path_full('framework', 'css/resources.css'))],
                ["type" => "text/css", "text" => file_get_contents(resource_path_full('assets', 'css/themes/mishusoft.css'))],
                ["type" => "text/css", "text" => file_get_contents(resource_path_full('assets', 'css/framework/current.css'))],
            ];

            // preload("style", "webfonts/saira-stencil-one.css", "framework");
            Ui::elementList(Ui::getDocumentHeadElement(), [
                "link"  => [
                    ["id" => "mishusoft-web-root", "content" => Runtime::hostUrl()],
                    //["type" => "text/css", "text" => file_get_contents(resource_path_full('framework', 'css/loader.css'))],
                    //["rel" => "stylesheet", "href" => asset_framework("webfonts/saira-stencil-one.css", true)],
                ],
                "style" => $stylesheets,
            ]);

            Ui::setTemplateBody(
                Ui::element(Ui::getDocumentRoot(), "body", [
                    "id" => $controller,
                ])
            );

            Ui::setDocumentLoader(Ui::getTemplateBody(), Storage::toDataUri("framework", "images/loaders/app-loader.gif"));
            Ui::setNoScriptText(Ui::getTemplateBody());

            // create header element in template
            Ui::setDocumentContentHeader(
                Ui::element(Ui::getTemplateBody(), "header", [
                    "class" => "navbar",
                ])
            );

            //brand
            // add logo, menu section in navigation bar in header area
            $header_logo_zone = Ui::element(Ui::getDocumentContentHeader(), "a", [
                "class" => "brand",
                "href"  => uri("default_home"),
            ]);

            // preload("image", "logos/default/favicon-32x32.png", "framework");
            preload("image", "logos/mishusoft-logo-lite.webp", "framework");
            Ui::element($header_logo_zone, "img", [
                "src"    => asset_framework("logos/mishusoft-logo-lite.webp", true),
                "height" => "50px",
                "width"  => "50px",
                "alt"    => "m",
            ]);
            Ui::text($header_logo_zone, $controller);

            //navigation bar
            Ui::elementList(
                Ui::element(Ui::getDocumentContentHeader(), "nav", [
                    "class" => "nav-link-bar",
                ]),
                [
                    "a" => [
                        [
                            "href" => uri("about/aboutMishusoft"),
                            "text" => "About US",
                        ],
                        ["href" => uri("support"), "text" => "Help"],
                    ],
                ]
            );

            // create mishusoft application with html
            Ui::setDocumentContentBody(Ui::element(Ui::getTemplateBody(), "main", []));

            // add template body
            $templateBody = Ui::element(Ui::getDocumentContentBody(), "article", []);

            // take action in index page on account area
            if (strtolower($method) === strtolower("index")) {
                // set text for title
                Ui::updateDocumentTitle("Home");

                // set separate paragraph for index page
                Ui::elementList($templateBody, [
                    "div" => ['child' => [[
                                              "class" => "resources-header-title width-text-align",
                                              "text"  => str_replace("media", $controller, self::WELCOME_TEXT),
                                          ],
                                          [
                                              // set welcome text
                                              "class" => "resources-header-description width-text-align",
                                              "text"  => "We delivery various css, js and images file for website's use only.",
                                          ],
                                          // set company details text]
                    ],
                    ]]);
            } else {
                // set text for title
                Ui::updateDocumentTitle(basename($dirname));
                Ui::assignAttributes($templateBody, ["class" => "resources-body"]);
            } //end if

            $urlPath   = Runtime::urlPath();
            $parentURL = addSlash(Runtime::currentUrl());

            /*make breadcrumb*/
            $this->makeBreadcrumb($templateBody, $urlPath);

            // add media Registry::Browser()
            $table = Ui::element($templateBody, "table", [
                "class" => "table table-striped table-radius",
                "style" => "background: gainsboro;",
            ]);

            $table_header = Ui::element(
                Ui::element($table, "thead", [
                    "class" => "bg-default",
                    "style" => "font-size: 16px;font-weight: 700;",
                ]),
                "tr"
            );

            Ui::element($table_header, "td", ["style" => "width: 20px;"]);
            Ui::text(Ui::element($table_header, "td", ["style" => "width:400px;"]), "Name");
            Ui::text(Ui::element($table_header, "td", ["style" => "width:200px;"]), "Type");
            Ui::text(Ui::element($table_header, "td"), "Size");
            Ui::text(Ui::element($table_header, "td", ["style" => "width:200px;"]), "Modify");

            $table_body = Ui::element($table, "tbody", [
                "style" => "font-size: 12px;",
            ]);

            $dirList = Storage\FileSystem::list($dirname);

            if (is_array($dirList) && count($dirList) > 0) {
                $this->viewDirOrFileList($dirname, $table_body, $parentURL);
            } else {
                Ui::element(
                    Ui::element(
                        Ui::element($table_body, "tr", [
                            "style" => "font-size: 14px;text-align: center;font-weight: 800;",
                        ]),
                        "td",
                        ["style" => "width:100%;", "colspan" => "5"]
                    ),
                    "a",
                    [
                        "class" => "protect",
                        "style" => "color: #000;",
                        "text"  => "Empty folder",
                    ]
                );
            } //end if

            // add template footer
            Ui::addDefaultSignature(
                Ui::element(Ui::getTemplateBody(), "footer", [
                    "class" => "footer width-100percent",
                    "style" => "color:black;font-size:12px;margin:10px",
                ]),
                System\Time::currentYearNumber(),
                System\Memory::getOption('company.name')
            );

            Ui::elementList(Ui::getTemplateBody(), [
                "script" => [
                    ["type" => "application/javascript", "text" => 0],
                    [
                        "rel"  => "prefetch",
                        "as"   => "script",
                        "type" => "module",
                        "src"  => asset_framework("js/loader.js", true),
                    ],
                ],
            ]);

            Ui::display();
        }

        /**
         * @throws RuntimeException
         * @throws NotFoundException
         * @throws InvalidArgumentException
         */
        private function makeBreadcrumb(DOMElement|DOMNode $templateBody, string $urlPath): void
        {
            /*image properties*/
            $imageProperties = [
                "rel"     => "preload",
                "loading" => "lazy",
                "src"     => asset_framework("logos/mishusoft-logo-lite.webp", true),
                "alt"     => "mishusoft",
                "class"   => "box-shadow1",
                "style"   => "margin: 5px;text-align: center;width: 20px;height: 20px;float: left;border-radius: 50%;transition: all .15s ease;",
                "width"   => "20px",
                "height"  => "20px",
            ];
            // Add breadcrumb.
            $breadcrumb = Ui::element($templateBody, "breadcrumb", [
                "style" => "border: 1px solid rgba(0,0,0,0.2);width: 99%;",
            ]);
            Ui::element(
                Ui::element($breadcrumb, "a", [
                    "class" => "protect",
                    "href"  => uri("default_home"),
                ]),
                "img",
                $imageProperties
            );

            // Collect navigation url list.
            $webRoot = Storage::applicationWebDirectivePath();
            if (Utility\Inflect::startsWith($urlPath, $webRoot)) {
                $urlPath = substr($urlPath, strlen($webRoot));
            }

            $urlList = array_filter(explode("/", $urlPath));
            $urlList = array_values($urlList);

            foreach ($urlList as $url) {
                Ui::text($breadcrumb, "/");
                Ui::element($breadcrumb, "a", [
                    "href" => uri(
                        implode(
                            "/",
                            get_array_values(is_int(array_search($url, $urlList)) ? array_search($url, $urlList) : 0, $urlList)
                        )
                    ),
                    "text" => $url,
                ]);
            }
        }

        /**
         * @param string             $dirname
         * @param DOMElement|DOMNode $table_body
         * @param string             $parentURL
         *
         * @throws InvalidArgumentException
         * @throws RuntimeException
         * @throws NotFoundException
         * @throws Exception
         */
        private function viewDirOrFileList(string $dirname, DOMElement|DOMNode $table_body, string $parentURL): void
        {
            foreach ((array)Storage::explore($dirname) as $file) {
                $list       = Ui::element($table_body, "tr");
                $tdStyle    = [
                    "style" => "width: 30px;display:inline-flex;justify-content:center;",
                ];
                $imageStyle = "width:16px;height:16px;";
                if (mime_in(media_types_image(), get_mime_content($file))) {
                    Ui::element(
                        Ui::element(Ui::element($list, "td", $tdStyle), "a", [
                            "style" => Ui::HTML_HREF_STYLE . "color: #000;",
                            "href"  => $parentURL . basename($file),
                        ]),
                        "img",
                        [
                            "rel"     => "preload",
                            "loading" => "lazy",
                            "style"   => $imageStyle,
                            "alt"     => basename($file),
                            "src"     => $parentURL . basename($file),
                        ]
                    );
                } elseif (Storage\FileSystem::fileType($file) === "dir") {
                    Ui::element(
                        Ui::element(Ui::element($list, "td", $tdStyle), "a", [
                            "style" => Ui::HTML_HREF_STYLE . "color: #000;",
                            "href"  => $parentURL . basename($file),
                        ]),
                        "img",
                        [
                            "rel"     => "preload",
                            "loading" => "lazy",
                            "style"   => $imageStyle,
                            "alt"     => basename($file),
                            "src"     => Storage::toDataUri("framework", "images/icons/folder.png", "remote"),
                        ]
                    );
                } elseif (Storage\FileSystem::fileType($file) === "file") {
                    Ui::element(
                        Ui::element(Ui::element($list, "td", $tdStyle), "a", [
                            "style" => Ui::HTML_HREF_STYLE . "color: #000;",
                            "href"  => $parentURL . basename($file),
                        ]),
                        "img",
                        [
                            "rel"     => "preload",
                            "loading" => "lazy",
                            "style"   => $imageStyle,
                            "alt"     => basename($file),
                            "src"     => Storage::toDataUri("framework", "images/icons/code-file.png", "remote"),
                        ]
                    );
                } else {
                    Ui::text(
                        Ui::element(Ui::element($list, "td", $tdStyle), "a", [
                            "style" => Ui::HTML_HREF_STYLE . "color: #000;",
                            "href"  => $parentURL . basename($file),
                        ]),
                        Storage\FileSystem::fileType($file)
                    );
                }

                Ui::text(
                    Ui::element(Ui::element($list, "td", ["style" => "width:400px;"]), "a", [
                        "class" => "protect",
                        "style" => "color: #000;",
                        "href"  => $parentURL . basename($file),
                    ]),
                    Storage\FileSystem::fileOriginalName($file)
                );

                if (Storage\FileSystem::fileType($file) === "dir") {
                    Ui::text(Ui::element($list, "td", ["style" => "width:200px;"]), "File Folder");
                } else {
                    Ui::text(Ui::element($list, "td", ["style" => "width:200px;"]), get_document_type($file));
                }

                Ui::text(Ui::element($list, "td"), Storage\FileSystem::fileSize($file));
                Ui::text(Ui::element($list, "td", ["style" => "width:200px;"]), System\Time::todayFullBeautify(filemtime($file)));
            } //end foreach
        }


        /**
         * @param string[] $request
         *
         * @throws ErrorException
         * @throws InvalidArgumentException
         * @throws RuntimeException
         * @throws NotFoundException
         */
        public function shared(array $request): void
        {
            if (file_exists(Storage::storagesPath()) && is_readable(Storage::storagesPath()) === true) {
                [
                    "controller" => $controller,
                    "method"     => $method,
                    "arguments"  => $arguments,
                ]
                    = $request;

                switch (strtolower($method)) {
                    case $this->defaultDirectoryIndex:
                        redirectUrl("assets");
                        break;

                    case "json":
                        if (!is_string($arguments) && count($arguments) > 0) {
                            if (str_contains(implode($arguments), "-") === true) {
                                stream_file(Storage::sharedFullPath(str_replace("-", ".", implode($arguments))));
                            } else {
                                throw new InvalidArgumentException("Invalid filename");
                            }
                        } else {
                            throw new InvalidArgumentException("Your requested url is broken");
                        }
                        break;

                    case "logos":
                        $fileAbsoluteName = is_string($arguments) ? $arguments : end($arguments);
                        if (file_exists(logos_path_default() . $fileAbsoluteName) === true) {
                            stream_file(logos_path($fileAbsoluteName));
                        } elseif (str_contains($fileAbsoluteName, "-") === true) {
                            $ext      = pathinfo($fileAbsoluteName, PATHINFO_EXTENSION);
                            $explode  = explode("-", $fileAbsoluteName);
                            $expected = array_pop($explode);

                            if (preg_match("[." . $ext . "]", $expected)) {
                                [$width, $height] = explode("x", preg_replace("[." . $ext . "]", "", $expected));
                                if (file_exists(Storage::logoFullPath($this->defaultApplicationIcon)) === true) {
                                    stream_file(
                                        Storage\Media\Image::resize(logos_path($this->defaultApplicationIcon), (int)$width, (int)$height, Storage::logosDefaultPath() . $fileAbsoluteName)
                                    );
                                }
                            } else {
                                stream_file(Storage\Media\Image::resize(Storage::logoFullPath($this->defaultApplicationIcon), 16, 16, Storage::logosDefaultPath() . $fileAbsoluteName));
                            } //end if
                        } else {
                            throw new NotFoundException("Your requested url is not exists in the web data center!!");
                        } //end if
                        break;

                    case "related":
                        $requestArgument  = is_string($arguments) ? $arguments : implode(DS, $arguments);
                        $requestedWebFile = MPM\Classic::templatesJSResourcesRoot($request["module"], $controller);
                        if (file_exists(MPM\Classic::templatesJSResourcesRootLocal() . $requestArgument) === true) {
                            stream_file($requestedWebFile);
                        } else {
                            throw new NotFoundException("Your requested url is not exists in the web data center!!");
                        }
                        break;

                    default:
                        throw new NotFoundException("The web data center is not set!!");
                } //end switch
            } else {
                throw new NotFoundException("The web data center is not set!!");
            } //end if
        }
    }
