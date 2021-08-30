<?php declare(strict_types=1);

namespace Mishusoft\Http;

use Mishusoft\Storage;

class Request
{
    /*declare version*/
    public const VERSION = "2.0.0";

    /*extracted item from url*/
    protected array $arguments;
    protected array $modules;
    protected string $locale;
    protected string $controller;
    protected string $method;
    protected string $module;

    protected string $uri;

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

    public function __destruct()
    {
    }
}
