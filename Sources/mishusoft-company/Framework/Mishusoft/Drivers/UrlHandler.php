<?php


namespace Mishusoft\Drivers;

use Mishusoft\System\Memory;
use Mishusoft\Drivers\View\MishusoftViewInterface;

abstract class UrlHandler implements UrlHandlerInterface
{


    /**
     * UrlHandler constructor.
     */
    public function __construct()
    {
    }//end __construct()


    /**
     * Uses
     *
     *    self::render(
     *    CMOS::Data('framework')->host->url,
     *    "Account",
     *    ['login', 'create', 'recovery', 'activate'],
     *      $prediction
     * )->display([
     *      "load" => "auto",
     *      "template_dir" => MS_SYSTEM_PATH . "Mishusoft/ViewRenders/test",
     *      "template_ext" => ".phpt"
     * ]);
     *
     * @param array $prediction Array format of client http request.
     */


    abstract public function response(array $prediction);


    /**
     * @param string $rootTitle
     * @param array $request
     * @param array $noMenuList
     * @return MishusoftViewInterface
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    protected function render(string $rootTitle, array $request, array $noMenuList = []): MishusoftViewInterface
    {
        return new View\MishusoftView(Memory::Data('framework')->host->url, $rootTitle, $noMenuList, $request);
    }//end render()
}//end class
