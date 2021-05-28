<?php declare(strict_types=1);

namespace Mishusoft\Framework\Chipsets\Http;

use Locale;
use Mishusoft\Framework\Chipsets\MPM;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\Utility\_String;

class Request
{
    /*declare version*/
    const VERSION = "2.0.0";

    /*extracted item from url*/
    private array $arguments;
    private array $modules;
    private string $locale;
    private string $controller;
    private string $method;
    private string $module;

    public function __construct()
    {


        //\Mishusoft\Framework\Chipsets\Preloader::compatibility();
        /*
         * test urls
         * [passed] http://localhost/
         * [passed] http://localhost/account/create?success=ZGEyblBaVTVjZCtKSld1dG9jenFsMzh2U1JwTWJldEs2RnFoOGtybUZKQnovL1FaYTQ0Z3AzTkxZbG1RaUY0akFFY2JOS3dLT0hxUDVMOUdXdGZoNG1oMTh1RGZEOGtNZ0YzZE9ON0p0NVRhTExSaEViWkNGV1kvYk1MaG00WE04VEpzRFVIVmptcGJSMHgyU3RYMm5xNjhGUnBEMDBHc2VHemtJQk5PbUxCSWVlREZyMVVVUTBtMUV3QW9RL2xQOk1pc2h1c29mdDq1//p6N63CddBAgUWBZu9o
         * [passed] http://localhost/en_US/account/profile?a=1611229066&t=view&sc=12111931&tab=security
         * */

        /*
         * enabled modules of the application
         * */
        $this->modules = MPM::modulesAll(MPM::defaultPackage(), ["status" => "enable"]);

        /*
         * catch requested url from browser
         * */
        if (array_key_exists("url", $_GET) and !empty($_GET['url'])) {
            /*
             * filter requested url
             * */
            $url = filter_input(INPUT_GET, 'url', FILTER_SANITIZE_URL);
            //$url = strtolower($url);
            $url = explode('/', $url);
            $url = array_filter($url);

            /*
             * extract and identify language from url
             * At first we collect locale from url
             * */
            $this->locale = array_shift($url);

            /*
             * verify extracted locale language from url
             * url like [protocol://hostname/]
             * verified extracted locale language check from count supported locale language of system, verify if it more than 0
             * */
            if (count(array_change_key_case(Localization::support)) > 0) {
                /*
                 * if supported locale languages list is not set or locale not in these,
                 * then locale set to module and it make default
                 * */
                if (!in_array($this->locale, array_change_key_case(Localization::support))) {
                    $this->module = $this->locale;
                    $this->locale = _String::lower(Locale::getDefault());
                } else {
                    /*
                     * if locale language exists in supported locale languages of system,
                     * another parts exists in url list
                     * then extract module from url
                     * */
                    $this->module = (string) array_shift($url);
                }
            } else {
                /*
                 * if locale language exists but it is not exists in supported locale languages,
                 * then locale set to module and it make default
                 * */
                $this->module = $this->locale;
                $this->locale = _String::lower(Locale::getDefault());
            }


            /*
             * if module exists and module list enabled
             * */
            if (!empty($this->module) and count($this->modules) > 0) {
                /*
                 * if module exists but it is not exists in installed enable modules,
                 * then module set to controller and it make empty
                 * */
                if (!in_array($this->module, $this->modules)) {
                    $this->controller = $this->module;
                    $this->module = "";
                } else {
                    /*
                     * if module exists in installed enable modules,
                     * then extract controller from url,
                     * if controller is not exists in url,
                     * then default directory index set to controller
                     * */
                    $this->controller = (string) array_shift($url);
                }
            } else {
                /*
                 * if module exists but it is not exists in installed enable modules,
                 * then module set to controller and it make empty
                 * */
                $this->controller = $this->module;
                $this->module = "";
            }


//
//            /*if module not exists, then module make empty*/
//            if (!$this->module) {
//                $this->module = null;
//            } else {
//                /*if module exists, then module make empty*/
//                if (count($this->modules)) {
//                    /*if module exists but it is not exists in installed enable modules, then module set to controller and it make empty*/
//                    if (!in_array($this->module, $this->modules)) {
//                        $this->controller = $this->module;
//                        $this->module = null;
//                    } else {
//                        /*if module exists in installed enable modules, then extract controller from url*/
//                        $this->controller = _String::lower(array_shift($url));
//
//                        /*if module exists in installed enable modules but controller is not exists in url, then default directory index set to controller*/
//                        if (empty($this->controller)) {
//                            $this->controller = CMOS::Data()->preset->directoryIndex;
//                        }
//                    }
//                } else {
//                    /*if module exists but it is not exists in installed enable modules, then module set to controller and it make empty*/
//                    $this->controller = $this->module;
//                    $this->module = null;
//                }
//            }

            /*
             * if module or controller or both in url,
             * another parts exists in url list
             * then extract method from url
             * else define default directory index
             * */
            $this->method = (string) array_shift($url);
            /*
             * if module or controller or both and method in url,
             * then extract arguments from url
             * */
            $this->arguments = $url;
        }



        /*
         * if [url] is not set, then set locale,
         * controller and method, arguments
         * */
        if (empty($this->locale)){
            $this->locale = _String::lower(Locale::getDefault());
        }

        if (empty($this->controller)){
            $this->controller = Memory::Data()->preset->directoryIndex;
        }

        if (empty($this->method)){
            $this->method = Memory::Data()->preset->directoryIndex;
        }

        if (empty($this->arguments)){
            $this->arguments = array();
        }

        $this->module = "";


        //_Debug::preOutput($this);

    }

    public function getLocale(): string
    {
        return $this->locale;
    }

    public function getModule(): string
    {
        return $this->module;
    }

    public function getController(): string
    {
        return $this->controller;
    }

    public function getMethod(): string
    {
        return $this->method;
    }

    public function getArguments(): array
    {
        return $this->arguments;
    }

    function __destruct()
    {

    }
}
