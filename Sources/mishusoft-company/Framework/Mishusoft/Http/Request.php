<?php declare(strict_types=1);

namespace Mishusoft\Http;

use Locale;
use Mishusoft\MPM;
use Mishusoft\Storage;
use Mishusoft\System\Localization;
use Mishusoft\System\Memory;
use Mishusoft\Utility\Inflect;

class Request
{
    /*declare version*/
    public const VERSION = "2.0.0";

    /*extracted item from url*/
    private array $arguments;
    private array $modules;
    private string $locale;
    private string $controller;
    private string $method;
    private string $module;

    protected string $uri;

    /**
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function __construct()
    {


        //\Mishusoft\Framework\Chipsets\Preloader::compatibility();
        /*
         * test urls
         * [passed] http://localhost/
         * [passed] http://localhost/account/create?success=ZGEyblBaVTVjZCtKSld1dG9jenFsMzh2U1JwTWJldEs2RnFoOGtybUZKQnovL1FaYTQ0Z3AzTkxZbG1RaUY0akFFY2JOS3dLT0hxUDVMOUdXdGZoNG1oMTh1RGZEOGtNZ0YzZE9ON0p0NVRhTExSaEViWkNGV1kvYk1MaG00WE04VEpzRFVIVmptcGJSMHgyU3RYMm5xNjhGUnBEMDBHc2VHemtJQk5PbUxCSWVlREZyMVVVUTBtMUV3QW9RL2xQOk1pc2h1c29mdDq1//p6N63CddBAgUWBZu9o
         * [passed] http://localhost/en_US/account/profile?a=1611229066&t=view&sc=12111931&tab=security
         * */

        $this->uri = urldecode(
            parse_url($this->uriOrigin(), PHP_URL_PATH)
        );

        /*
         * catch requested url from browser
         * */
        if (!empty($this->uri)) {
            /*
             * filter requested url
             */
            $url = explode('/', $this->uri);
            $url = array_filter($url);

            /*
             * extract and identify language from url
             * At first we collect locale from url
             */
            $this->locale = (string) array_shift($url);

            /*
             * verify extracted locale language from url
             * url like [protocol://hostname/]
             * verified extracted locale language check from count supported locale language of system, verify if it more than 0
             */
            if (count(array_change_key_case(Localization::SUPPORT)) > 0) {
                /*
                 * if supported locale languages list is not set or locale not in these,
                 * then locale set to module and it make default
                 */
                if (!in_array($this->locale, array_change_key_case(Localization::SUPPORT), true)) {
                    $this->module = $this->locale;
                    $this->locale = Inflect::lower(Locale::getDefault());
                } else {
                    /*
                     * if locale language exists in supported locale languages of system,
                     * another parts exists in url list
                     * then extract module from url
                     */
                    $this->module = (string) array_shift($url);
                }
            } else {
                /*
                 * if locale language exists but it is not exists in supported locale languages,
                 * then locale set to module and it make default
                 */
                $this->module = $this->locale;
                $this->locale = Inflect::lower(Locale::getDefault());
            }

            /*
             * enabled modules of the application
             */
            $this->modules = MPM::modulesAll(MPM::defaultPackage(), ["status" => "enable"]);
            /*
             * if module exists and module list enabled
             */
            if (!empty($this->module) && count($this->modules) > 0) {
                /*
                 * if module exists, but it is not exists in installed enable modules,
                 * then module set to controller, and it makes empty
                 */
                if (!in_array($this->module, $this->modules, true)) {
                    $this->controller = $this->module;
                    $this->module = "";
                } else {
                    /*
                     * if module exists in installed enable modules,
                     * then extract controller from url,
                     * if controller is not exists in url,
                     * then default directory index set to controller
                     */
                    $this->controller = (string) array_shift($url);
                }
            } else {
                /*
                 * if module exists, but it is not exists in installed enable modules,
                 * then module set to controller, and it makes empty
                 */
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
             */
            $this->method = (string) array_shift($url);
            /*
             * if module or controller or both and method in url,
             * then extract arguments from url
             */
            $this->arguments = $url;
        }



        /*
         * if [url] is not set, then set locale,
         * controller and method, arguments
         * */
        if (empty($this->locale)) {
            $this->locale = Inflect::lower(Locale::getDefault());
        }

        if (empty($this->controller)) {
            $this->controller = Memory::Data()->preset->directoryIndex;
        }

        if (empty($this->method)) {
            $this->method = Memory::Data()->preset->directoryIndex;
        }

        if (empty($this->arguments)) {
            $this->arguments = [];
        }

        $this->module = "";


        //_Debug::preOutput($this);
    }

    private function uriOrigin():string
    {
        if (Storage::applicationWebDirectivePath() !== '/') {
            return str_replace(Storage::applicationWebDirectivePath(), '', $_SERVER['REQUEST_URI']);
        }
        return $_SERVER['REQUEST_URI'];
    }

    public function getLocale(): string
    {
        return str_replace('en_us', 'en', $this->locale);
    }

    public function getModules():array
    {
        return $this->modules;
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

    public function __destruct()
    {
    }
}
