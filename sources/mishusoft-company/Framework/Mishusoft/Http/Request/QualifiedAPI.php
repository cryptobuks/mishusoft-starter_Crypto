<?php

namespace Mishusoft\Http\Request;

use Locale;
use Mishusoft\Http\Request;
use Mishusoft\System\Localization;
use Mishusoft\Utility\Inflect;

class QualifiedAPI extends Request
{
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
        parent::__construct();

        //\Mishusoft\Framework\Chipsets\Preloader::compatibility();
        /*
         * test urls
         * [passed] http://localhost/
         * [passed] http://localhost/account/create?success=ZGEyblBaVTVjZCtKSld1dG9jenFsMzh2U1JwTWJldEs2RnFoOGtybUZKQnovL1FaYTQ0Z3AzTkxZbG1RaUY0akFFY2JOS3dLT0hxUDVMOUdXdGZoNG1oMTh1RGZEOGtNZ0YzZE9ON0p0NVRhTExSaEViWkNGV1kvYk1MaG00WE04VEpzRFVIVmptcGJSMHgyU3RYMm5xNjhGUnBEMDBHc2VHemtJQk5PbUxCSWVlREZyMVVVUTBtMUV3QW9RL2xQOk1pc2h1c29mdDq1//p6N63CddBAgUWBZu9o
         * [passed] http://localhost/en_US/account/profile?a=1611229066&t=view&sc=12111931&tab=security
         * */

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
             * verified extracted locale language check
             * from count supported locale language of system, verify if it is more than 0
             */
            if (count(array_change_key_case(Localization::SUPPORT)) > 0) {
                /*
                 * if supported locale languages list is not set or locale not in these,
                 * then locale set to module, and it makes default
                 */
                if (!in_array($this->locale, array_change_key_case(Localization::SUPPORT), true)) {
                    $this->controller = $this->locale;
                    $this->locale = Inflect::lower(Locale::getDefault());
                } else {
                    /*
                     * if locale language exists in supported locale languages of system,
                     * another parts exists in url list
                     * then extract module from url
                     */
                    $this->controller = (string) array_shift($url);
                }
            } else {
                /*
                 * if locale language exists, but it is not exists in supported locale languages,
                 * then locale set to module, and it makes default
                 */
                $this->controller = $this->locale;
                $this->locale = Inflect::lower(Locale::getDefault());
            }

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

        $this->setFallback();
    }
}
