<?php


namespace Mishusoft\Drivers;

use Mishusoft\Databases\MishusoftSQLStandalone;
use Mishusoft\Http\Runtime;
use Mishusoft\System\Localization;
use Mishusoft\System\Memory;
use Mishusoft\Utility\ArrayCollection;

abstract class UrlHandler implements UrlHandlerInterface
{

    protected Localization $localization;
    protected MishusoftSQLStandalone $mishusoftDB;

    /**
     * UrlHandler constructor.
     */
    public function __construct()
    {
        $this->localization = new Localization();
        $this->mishusoftDB = new MishusoftSQLStandalone(MS_DB_USER_NAME, MS_DB_USER_PASSWORD);
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
     * @return View\MishusoftView
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    protected function render(string $rootTitle, array $request, array $noMenuList = []): View\MishusoftView
    {
        $this->localization->setCurrentLocale(ArrayCollection::value($request, 'locale'));
        return new View\MishusoftView(
            Runtime::hostUrl(),
            $this->localization->translate($rootTitle),
            $noMenuList,
            $request
        );
    }//end render()
}//end class
