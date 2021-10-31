<?php

declare(strict_types=1);

namespace Mishusoft\Communication\Http;

use DOMElement;
use DOMNode;
use Mishusoft\Exceptions;
use Mishusoft\Http\Runtime;
use Mishusoft\MPM;
use Mishusoft\Services\SEOToolKitService;
use Mishusoft\Storage;
use Mishusoft\System;
use Mishusoft\Ui;
use Mishusoft\Utility;

class WebResourceDelivery
{
    public const WELCOME_TEXT = "Welcome to Mishusoft Resources Library";

    /**
     * Store default app logo form memory
     *
     * @var string
     */
    private string $defaultApplicationIcon;
    /**
     * @var string
     */
    private string $defaultDirectoryIndex = DEFAULT_CONTROLLER;

    /**
     * WebResource constructor.
     * This is built-in uninterrupted web resources delivery system.
     *
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
<<<<<<< Updated upstream
    public function __construct(
        string $defaultDirectoryIndex = DEFAULT_CONTROLLER
    ) {
=======
    public function __construct(string $defaultDirectoryIndex = DEFAULT_CONTROLLER)
    {
>>>>>>> Stashed changes
        $this->defaultDirectoryIndex = $defaultDirectoryIndex;
        $this->defaultApplicationIcon = data()->preset->logo;
    }

    /**
     * @param string[] $request
     * @throws Exceptions\ErrorException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public function assets(array $request): void
    {
        $this->browse($request);
    }

    /**
     * @param string[] $request
     * @throws Exceptions\ErrorException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    private function browse(array $request): void
    {
        if (is_readable(Storage::storagesPath())) {
<<<<<<< Updated upstream
            if (
                Utility\Inflect::lower($request["method"]) ===
                $this->defaultDirectoryIndex
            ) {
=======
            if (Utility\Inflect::lower($request["method"]) === $this->defaultDirectoryIndex) {
>>>>>>> Stashed changes
                $this->webExplore($request["method"], $request);
            } else {
                $this->webExploreLoader($request);
            }
        } else {
            throw new Exceptions\RuntimeException\NotFoundException(
                "The web data center is not set!!"
            );
        }
    }

    /**
     * WebExplorer of CDN.
     *
     * @param string[] $request
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    private function webExplore(string $dirname, array $request): void
    {
        ["controller" => $controller, "method" => $method] = $request;

        if ($dirname === $this->defaultDirectoryIndex) {
            if ($controller === "framework") {
                $dirname = Storage::frameworkViewsPath();
            } else {
                $dirname = Storage::appStoragesPath() . $request["controller"];
            }
        }

        Ui::start();

        SEOToolKitService::start();
        SEOToolKitService::addDocumentIdentify();
        SEOToolKitService::addDefault(ucfirst($request["controller"]));

        Ui::setDocumentTitle(ucfirst($controller));
        Ui::elementList(Ui::getDocumentHeadElement(), [
            "link" => Storage::assignableWebFavicons(),
        ]);

        // Add stylesheet files.

        $stylesheets = [
            ["type" => "text/css", "text" => read_asset("css/loader.css")],
            ["type" => "text/css", "text" => read_asset("css/colors.css")],
            // ["type" => "text/css", "text" => read_asset("css/webfonts.css")],
            [
                "type" => "text/css",
                "text" => read_asset_framework("css/resources.css"),
            ],
            [
                "type" => "text/css",
                "text" => read_asset("css/themes/mishusoft.css"),
            ],
            [
                "type" => "text/css",
                "text" => read_asset("css/framework/current.css"),
            ],
        ];

        preload("style", "webfonts/saira-stencil-one.css");
        Ui::elementList(Ui::getDocumentHeadElement(), [
            "link" => [
                ["id" => "mishusoft-web-root", "content" => Runtime::hostUrl()],
            ],
            "style" => $stylesheets,
        ]);

        Ui::setTemplateBody(
            Ui::element(Ui::getDocumentRoot(), "body", [
                "id" => Ui::makeBodyId($request),
            ])
        );
        Ui::setDocumentLoader(
            Ui::getTemplateBody(),
            Storage::toDataUri("media", "images/loaders/app-loader.gif")
        );
        Ui::setNoScriptText(Ui::getTemplateBody());

        // create header element in template
        Ui::setDocumentContentHeader(
            Ui::element(Ui::getTemplateBody(), "header", [
                "class" => "header header-navigation-bar header-flash",
            ])
        );

        //brand
        // add logo, menu section in navigation bar in header area
        $header_logo_zone = Ui::element(Ui::getDocumentContentHeader(), "a", [
            "class" =>
                "protect mishusoft-logo mishusoft-root-link mishusoft-root-link-primary animate",
            "href" => uri("default_home"),
        ]);

        preload("image", "logos/default/favicon-32x32.png");
        preload("image", "logos/mishusoft-logo-lite.webp");
        Ui::element($header_logo_zone, "img", [
            "src" => media_path("logos/mishusoft-logo-lite.webp", true),
            "class" => " box-shadow1",
            "height" => "50px",
            "width" => "50px",
            "alt" => "m",
        ]);
        Ui::text($header_logo_zone, $controller);

        //navigation bar
        Ui::elementList(
            Ui::element(Ui::getDocumentContentHeader(), "nav", [
                "class" => "nav-right width-70percent",
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
        Ui::setDocumentContentBody(
            Ui::element(Ui::getTemplateBody(), "main", [
                "class" => "flex-column flex-center-all",
            ])
        );

        // add template body
        $templateBody = Ui::element(Ui::getDocumentContentBody(), "article", [
            "style" => "width: 1024px;",
            "class" => "flex-center-all flex-column",
        ]);

        // take action in index page on account area
        if (
            Utility\Inflect::lower($method) === Utility\Inflect::lower("index")
        ) {
            // set text for title
            Ui::updateDocumentTitle("Home");

            // set separate paragraph for index page
            Ui::elementList($templateBody, [
                "article" => [
                    [
                        "class" => "resources-header-title width-text-align",
                        "text" => str_replace(
                            "media",
                            $controller,
                            self::WELCOME_TEXT
                        ),
                    ],
                    [
                        // set welcome text
                        "class" =>
                            "resources-header-description width-text-align",
                        "text" =>
                            "We delivery various css, js and images file for website's use only.",
                    ],
                    // set company details text
                ],
            ]);
        } else {
            // set text for title
            Ui::updateDocumentTitle(basename($dirname));
            Ui::assignAttributes($templateBody, ["class" => "resources-body"]);
        } //end if

        $urlPath = Runtime::urlPath();
        $currentUrl = Runtime::currentUrl();
        $visitedUrl = Utility\Inflect::lower($currentUrl);

<<<<<<< Updated upstream
        $parentURL = $visitedUrl !== "" &&
        $visitedUrl[strlen($visitedUrl) - 1] !== "/" ? $visitedUrl . "/" : $visitedUrl;
=======
        $parentURL = $visitedUrl !== "" && $visitedUrl[strlen($visitedUrl) - 1] !== "/" ? $visitedUrl . "/" : $visitedUrl;
>>>>>>> Stashed changes

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
        Ui::text(
            Ui::element($table_header, "td", ["style" => "width:400px;"]),
            "Name"
        );
        Ui::text(
            Ui::element($table_header, "td", ["style" => "width:200px;"]),
            "Type"
        );
        Ui::text(Ui::element($table_header, "td"), "Size");
        Ui::text(
            Ui::element($table_header, "td", ["style" => "width:200px;"]),
            "Modify"
        );

        $table_body = Ui::element($table, "tbody", [
            "style" => "font-size: 12px;",
        ]);

<<<<<<< Updated upstream
        if (count(Storage\FileSystem::list($dirname)) > 0) {
=======
        $dirList = Storage\FileSystem::list($dirname);

        if (is_array($dirList) && $dirList !== []) {
>>>>>>> Stashed changes
            $this->viewDirOrFileList($dirname, $table_body, $parentURL);
        } else {
            Ui::element(
                Ui::element(
                    Ui::element($table_body, "tr", [
                        "style" =>
                            "font-size: 14px;text-align: center;font-weight: 800;",
                    ]),
                    "td",
                    ["style" => "width:100%;", "colspan" => "5"]
                ),
                "a",
                [
                    "class" => "protect",
                    "style" => "color: #000;",
                    "text" => "Empty folder",
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
            data()->company->name
        );

        Ui::elementList(Ui::getTemplateBody(), [
            "script" => [
                ["type" => "application/javascript", "text" => 0],
                [
                    "rel" => "prefetch",
                    "as" => "script",
                    "type" => "module",
                    "src" => asset_path("js/loader.js", true),
                ],
            ],
        ]);

        Ui::display();
    }

    /**
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     * @param \DOMElement|\DOMNode $templateBody
     */
<<<<<<< Updated upstream
    private function makeBreadcrumb(
        $templateBody,
        string $urlPath
    ): void {
=======
    private function makeBreadcrumb($templateBody, string $urlPath): void
    {
>>>>>>> Stashed changes
        /*image properties*/
        $imageProperties = [
            "rel" => "preload",
            "loading" => "lazy",
            "src" => media_path("logos/mishusoft-logo-lite.webp", true),
            "alt" => "mishusoft",
            "class" => "box-shadow1",
            "style" =>
                "margin: 5px;text-align: center;width: 20px;height: 20px;float: left;border-radius: 50%;transition: all .15s ease;",
            "width" => "20px",
            "height" => "20px",
        ];
        // Add breadcrumb.
        $breadcrumb = Ui::element($templateBody, "breadcrumb", [
            "style" => "border: 1px solid rgba(0,0,0,0.2);width: 99%;",
        ]);
        Ui::element(
            Ui::element($breadcrumb, "a", [
                "class" => "protect",
                "href" => uri("default_home"),
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
                        Utility\ArrayCollection::getValues(
                            array_search($url, $urlList),
                            $urlList
                        )
                    )
                ),
                "text" => $url,
            ]);
        }
    }

    /**
     * @throws Exceptions\RuntimeException\NotFoundException
     * @param \DOMElement|\DOMNode $table_body
     */
<<<<<<< Updated upstream
    private function viewDirOrFileList(
        string $dirname,
        $table_body,
        string $parentURL
    ): void {
=======
    private function viewDirOrFileList(string $dirname, $table_body, string $parentURL): void
    {
>>>>>>> Stashed changes
        foreach ((array) Storage::explore($dirname) as $file) {
            $list = Ui::element($table_body, "tr");
            $tdStyle = [
                "style" =>
                    "width: 30px;display:inline-flex;justify-content:center;",
            ];
            $imageStyle = "width:16px;height:16px;";
            if (
                Storage\Media::in(
                    Storage\Media\Mime::IMAGE,
                    Storage\Media::mimeContent($file)
                )
            ) {
                Ui::element(
                    Ui::element(Ui::element($list, "td", $tdStyle), "a", [
                        "style" => Ui::HTML_HREF_STYLE . "color: #000;",
                        "href" => $parentURL . basename($file),
                    ]),
                    "img",
                    [
                        "rel" => "preload",
                        "loading" => "lazy",
                        "style" => $imageStyle,
                        "alt" => basename($file),
                        "src" => $parentURL . basename($file),
                    ]
                );
            } elseif (Storage\FileSystem::fileType($file) === "dir") {
                Ui::element(
                    Ui::element(Ui::element($list, "td", $tdStyle), "a", [
                        "style" => Ui::HTML_HREF_STYLE . "color: #000;",
                        "href" => $parentURL . basename($file),
                    ]),
                    "img",
                    [
                        "rel" => "preload",
                        "loading" => "lazy",
                        "style" => $imageStyle,
                        "alt" => basename($file),
                        "src" => Storage::toDataUri(
                            "media",
                            "images/icons/folder.png",
                            "remote"
                        ),
                    ]
                );
            } elseif (Storage\FileSystem::fileType($file) === "file") {
                Ui::element(
                    Ui::element(Ui::element($list, "td", $tdStyle), "a", [
                        "style" => Ui::HTML_HREF_STYLE . "color: #000;",
                        "href" => $parentURL . basename($file),
                    ]),
                    "img",
                    [
                        "rel" => "preload",
                        "loading" => "lazy",
                        "style" => $imageStyle,
                        "alt" => basename($file),
                        "src" => Storage::toDataUri(
                            "media",
                            "images/icons/code-file.png",
                            "remote"
                        ),
                    ]
                );
            } else {
                Ui::text(
                    Ui::element(Ui::element($list, "td", $tdStyle), "a", [
                        "style" => Ui::HTML_HREF_STYLE . "color: #000;",
                        "href" => $parentURL . basename($file),
                    ]),
                    Storage\FileSystem::fileType($file)
                );
            }

            Ui::text(
                Ui::element(
                    Ui::element($list, "td", ["style" => "width:400px;"]),
                    "a",
                    [
                        "class" => "protect",
                        "style" => "color: #000;",
                        "href" => $parentURL . basename($file),
                    ]
                ),
                Storage\FileSystem::fileOriginalName($file)
            );

            if (Storage\FileSystem::fileType($file) === "dir") {
                Ui::text(
                    Ui::element($list, "td", ["style" => "width:200px;"]),
                    "File Folder"
                );
            } else {
                Ui::text(
                    Ui::element($list, "td", ["style" => "width:200px;"]),
                    Utility\ArrayCollection::value(
                        Storage\Media::fileInfo($file),
                        "document"
                    )
                );
            }

            Ui::text(
                Ui::element($list, "td"),
                Storage\FileSystem::fileSize($file)
            );
            Ui::text(
                Ui::element($list, "td", ["style" => "width:200px;"]),
                System\Time::todayFullBeautify(filemtime($file))
            );
        } //end foreach
    }

    /**
     * @param string[] $request
     * @throws Exceptions\ErrorException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    private function webExploreLoader(array $request): void
    {
        [
            "controller" => $controller,
            "method" => $method,
            "arguments" => $arguments,
        ] = $request;

        //redirect actual url if controller is webfonts
        if ($controller === "webfonts") {
            if (!is_string($arguments) && count($arguments) > 0) {
                redirect(
                    sprintf(
                        'assets/webfonts/%1$s/%2$s',
                        $method,
                        implode("/", $arguments)
                    )
                );
            }
            redirect(sprintf('assets/webfonts/%1$s', $method));
        }

        if (
            $method === "webfonts" &&
            !in_array($controller, ["assets", "framework"], true)
        ) {
            if (!is_string($arguments)) {
                redirect(
                    sprintf('assets/webfonts/%1$s', implode("/", $arguments))
                );
            } else {
                redirect(sprintf('assets/webfonts/%1$s', $arguments));
            }
        }

        //http://host/directory/sub/filenameOrsub

        $resolveRequestedFile = static function (
            string $directive,
            string $path
        ) {
            if ($directive === "framework") {
                return Storage::storageFullPath(
                    sprintf('%1$s%3$sviews%3$s%2$s', $directive, $path, DS),
                    "local",
                    true
                );
            }

            return Storage::storageFullPath(
                sprintf('%1$s%3$s%2$s', $directive, $path, DS)
            );
        };

        if ($arguments !== []) {
            $requestedFile = $resolveRequestedFile(
                Utility\Inflect::lower($controller),
                Utility\Inflect::lower(sprintf('%1$s%2$s', $method, DS)) .
                    implode(DS, $arguments)
            );
        } else {
            $requestedFile = $resolveRequestedFile(
                Utility\Inflect::lower($controller),
                $method
            );
        }

        if (file_exists($requestedFile)) {
            if (filetype($requestedFile) === "dir") {
                $this->webExplore($requestedFile, $request);
            } else {
                Storage\Stream::file($requestedFile);
            }
        } else {
            throw new Exceptions\RuntimeException\NotFoundException(
                "The web data center is not set!!"
            );
        }
    }

    /**
     * @param string[] $request
     * @throws Exceptions\ErrorException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public function framework(array $request): void
    {
        $this->browse($request);
    }

    /**
     * @param string[] $request
     * @throws Exceptions\ErrorException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public function webfonts(array $request): void
    {
        $this->browse($request);
    }

    /**
     * @param string[] $request
     * @throws Exceptions\ErrorException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public function media(array $request): void
    {
        $this->browse($request);
    }

    /**
     * @param string[] $request
     * @throws Exceptions\ErrorException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public function shared(array $request): void
    {
<<<<<<< Updated upstream
        if (
            file_exists(Storage::storagesPath()) &&
            is_readable(Storage::storagesPath())
        ) {
=======
        if (file_exists(Storage::storagesPath()) && is_readable(Storage::storagesPath())) {
>>>>>>> Stashed changes
            [
                "controller" => $controller,
                "method" => $method,
                "arguments" => $arguments,
            ] = $request;

            switch (Utility\Inflect::lower($method)) {
                case $this->defaultDirectoryIndex:
                    redirect("assets");
                    break;

                case "json":
                    if (is_array($arguments) && count($arguments) > 0) {
                        if (strpos(implode($arguments), "-") !== false) {
<<<<<<< Updated upstream
                            Storage\Stream::file(
                                Storage::sharedFullPath(
                                    str_replace("-", ".", implode($arguments))
                                )
                            );
=======
                            Storage\Stream::file(Storage::sharedFullPath(str_replace("-", ".", implode($arguments))));
>>>>>>> Stashed changes
                        } else {
                            throw new Exceptions\LogicException\InvalidArgumentException(
                                "Invalid filename"
                            );
                        }
                    } else {
                        throw new Exceptions\LogicException\InvalidArgumentException(
                            "Your requested url is broken"
                        );
                    }
                    break;

                case "logos":
<<<<<<< Updated upstream
                    $fileAbsoluteName = is_string($arguments)
                        ? $arguments
                        : end($arguments);
                    if (
                        file_exists(
                            logos_path_default() . $fileAbsoluteName
                        )
                    ) {
=======
                    $fileAbsoluteName = is_string($arguments) ? $arguments : end($arguments);
                    if (file_exists(logos_path_default() . $fileAbsoluteName)) {
>>>>>>> Stashed changes
                        stream_file(logos_path($fileAbsoluteName));
                    } elseif (strpos($fileAbsoluteName, "-") !== false) {
                        $ext = pathinfo($fileAbsoluteName, PATHINFO_EXTENSION);
                        $explode = explode("-", $fileAbsoluteName);
                        $expected = array_pop($explode);

                        if (preg_match("[." . $ext . "]", $expected)) {
<<<<<<< Updated upstream
                            [$width, $height] = explode(
                                "x",
                                preg_replace("[." . $ext . "]", "", $expected)
                            );
                            if (
                                file_exists(
                                    Storage::logoFullPath(
                                        $this->defaultApplicationIcon
                                    )
                                )
                            ) {
=======
                            [$width, $height] = explode("x", preg_replace("[." . $ext . "]", "", $expected));
                            if (file_exists(Storage::logoFullPath($this->defaultApplicationIcon))) {
>>>>>>> Stashed changes
                                Storage\Stream::file(
                                    Storage\Media\Image::resize(
                                        Storage::logoFullPath(
                                            $this->defaultApplicationIcon
                                        ),
                                        (int) $width,
                                        (int) $height,
                                        Storage::logosDefaultPath() .
                                            $fileAbsoluteName
                                    )
                                );
                            }
                        } else {
                            Storage\Stream::file(
                                Storage\Media\Image::resize(
                                    Storage::logoFullPath(
                                        $this->defaultApplicationIcon
                                    ),
                                    16,
                                    16,
                                    Storage::logosDefaultPath() .
                                        $fileAbsoluteName
                                )
                            );
                        } //end if
                    } else {
                        throw new Exceptions\RuntimeException\NotFoundException(
                            "Your requested url is not exists in the web data center!!"
                        );
                    } //end if
                    break;

                case "related":
<<<<<<< Updated upstream
                    $requestArgument = is_string($arguments)
                        ? $arguments
                        : implode(DS, $arguments);
                    $requestedWebFile = MPM\Classic::templatesJSResourcesRoot(
                        $request["module"],
                        $controller
                    );
                    if (
                        file_exists(
                            MPM\Classic::templatesJSResourcesRootLocal() .
                                $requestArgument
                        )
                    ) {
=======
                    $requestArgument = is_string($arguments) ? $arguments : implode(DS, $arguments);
                    $requestedWebFile = MPM\Classic::templatesJSResourcesRoot($request["module"], $controller);
                    if (file_exists(MPM\Classic::templatesJSResourcesRootLocal() . $requestArgument)) {
>>>>>>> Stashed changes
                        Storage\Stream::file($requestedWebFile);
                    } else {
                        throw new Exceptions\RuntimeException\NotFoundException(
                            "Your requested url is not exists in the web data center!!"
                        );
                    }
                    break;

                default:
                    throw new Exceptions\RuntimeException\NotFoundException(
                        "The web data center is not set!!"
                    );
            } //end switch
        } else {
            throw new Exceptions\RuntimeException\NotFoundException(
                "The web data center is not set!!"
            );
        } //end if
    }
}
