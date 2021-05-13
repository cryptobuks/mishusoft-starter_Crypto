<?php


namespace Mishusoft\Framework\Interfaces\Drivers;


interface MishusoftViewInterface
{


    /**
     * MishusoftViewRenderInterface constructor.
     * @param string $hostUrl
     * @param string $rootTitle
     * @param array $noMenuList
     * @param array $request
     */
    public function __construct(string $hostUrl, string $rootTitle, array $noMenuList, array $request);

    /**
     * @param array $config
     */
    public function setWidgetConfig(array $config): void;

    /**
     * @param string $documentTitle
     */
    public function setDocumentTitle(string $documentTitle): void;

    /**
     * @param string $UrlOfHostedWebsite
     */
    public function setUrlOfHostedWebsite(string $UrlOfHostedWebsite): void;


    public function display(array $options = []): void;

    /**
     * @param string $tpl_key
     * @param $tpl_value
     * @return array
     */
    public function assign(string $tpl_key, $tpl_value): array;

}