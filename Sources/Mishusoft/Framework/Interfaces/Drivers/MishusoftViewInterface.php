<?php


namespace Mishusoft\Framework\Interfaces\Drivers;


interface MishusoftViewInterface
{


    /**
     * MishusoftViewRenderInterface constructor.
     *
     * @param string $hostUrl
     * @param string $rootTitle
     * @param array  $noMenuList
     * @param array  $request
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
     * @param string $urlOfHostedWebsite
     */
    public function setUrlOfHostedWebsite(string $urlOfHostedWebsite): void;


    /**
     * @param array $options
     */
    public function display(array $options=[]): void;


    /**
     * @param  string  $tplKey
     * @param  $tplValue
     * @return array
     */
    public function assign(string $tplKey, $tplValue): array;


}//end interface
