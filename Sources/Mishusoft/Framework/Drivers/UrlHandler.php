<?php


namespace Mishusoft\Framework\Drivers;


use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Interfaces\Drivers\UrlHandlerInterface;
use Mishusoft\Framework\Interfaces\Drivers\MishusoftViewInterface;

abstract class UrlHandler implements UrlHandlerInterface
{

    public function __construct(){
    }

    /**
     * Uses
     *
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
     * @param array $prediction
     */

    abstract public function Response(array $prediction);

    protected function render(string $rootTitle, array $request, array $noMenuList = []): MishusoftViewInterface
    {
        return new View\MishusoftView(Memory::Data('framework')->host->url, $rootTitle, $noMenuList, $request);
    }
}