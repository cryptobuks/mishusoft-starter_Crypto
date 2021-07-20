<?php


namespace Mishusoft\Drivers;


use Mishusoft\System\Memory;
use Mishusoft\Utility\Debug;
use Mishusoft\Drivers\UrlHandlerInterface;
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
     */
    protected function render(string $rootTitle, array $request, array $noMenuList=[]): MishusoftViewInterface
    {
       // _Debug::preOutput(func_get_args());
        return new View\MishusoftView(Memory::Data('framework')->host->url, $rootTitle, $noMenuList, $request);

    }//end render()


}//end class
