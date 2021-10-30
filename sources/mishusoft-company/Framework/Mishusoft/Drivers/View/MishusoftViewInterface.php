<?php

namespace Mishusoft\Drivers\View;

interface MishusoftViewInterface
{
    /**
     * MishusoftViewRenderInterface constructor.
     */
    public function __construct(string $hostUrl, string $rootTitle, array $noMenuList, array $request);


    public function setWidgetConfig(array $config): void;


    public function setDocumentTitle(string $documentTitle): void;


    public function setUrlOfHostedWebsite(string $urlOfHostedWebsite): void;


    public function display(array $options = []): void;


    /**
     * @param  $tplValue
     */
    public function assign(string $tplKey, $tplValue): array;
}//end interface
