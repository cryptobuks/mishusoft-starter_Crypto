<?php

declare(strict_types=1);

namespace Mishusoft\Http;

use Locale;
use Mishusoft\System\Core\RequestCore;

class Request extends RequestCore
{

    public function __construct()
    {
        parent::__construct();
        /*
         * test urls
         * [passed] http://localhost/
         * [passed] http://localhost/account/create?success=ZGEyblBaVTVjZCtKSld1dG9jenFsMzh2U1JwTWJldEs2RnFoOGtybUZKQnovL1FaYTQ0Z3AzTkxZbG1RaUY0akFFY2JOS3dLT0hxUDVMOUdXdGZoNG1oMTh1RGZEOGtNZ0YzZE9ON0p0NVRhTExSaEViWkNGV1kvYk1MaG00WE04VEpzRFVIVmptcGJSMHgyU3RYMm5xNjhGUnBEMDBHc2VHemtJQk5PbUxCSWVlREZyMVVVUTBtMUV3QW9RL2xQOk1pc2h1c29mdDq1//p6N63CddBAgUWBZu9o
         * [passed] http://localhost/en_US/account/profile?a=1611229066&t=view&sc=12111931&tab=security
         * */
        $this->uri = urldecode(
            is_string(parse_url($this->httpUriOrigin(), PHP_URL_PATH)) ? parse_url($this->httpUriOrigin(), PHP_URL_PATH) : ''
        );
    }

    /**
     * Set fallback action for uri manipulation
     */
    protected function setFallback(): void
    {
        /*
         * if [url] is not set, then set locale,
         * controller and method, arguments
         * */
        if (empty($this->locale)) {
            $this->locale = strtolower(Locale::getDefault());
        }

        if (empty($this->controller)) {
            $this->controller = self::HTTP_DEFAULT_CONTROLLER;
        }

        if (empty($this->method)) {
            $this->method = self::HTTP_DEFAULT_METHOD;
        }

        if (empty($this->arguments)) {
            $this->arguments = [];
        }
    }
}
