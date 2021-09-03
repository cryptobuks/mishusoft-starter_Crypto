<?php

namespace App\Widgets;

use Mishusoft\Authentication\Widget;
use App\Widgets\Models\menuModelWidget;

class MenuWidget extends Widget
{

    private menuModelWidget $menu;


    /**
     * menuWidget constructor.
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function __construct()
    {
        parent::__construct();
        $this->menu = $this->loadModel('menu');
    }//end __construct()


    /**
     * @param string $menu
     * @param string $view
     * @param string $format
     * @param null $inverse
     * @param null $siteInfo
     * @return bool|string
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \JsonException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function getMenu(string $menu, string $view, string $format = 'phtml', $inverse = null, $siteInfo = null): bool|string
    {
        return $this->render(
            $menu,
            $view,
            [
                'name'     => $menu,
                'menu'     => $this->menu->getSelectedMenu($view),
                'inverse'  => $inverse,
                'siteInfo' => $this->menu->getSiteInfo(),
            ],
            $format
        );
    }//end getMenu()


    /**
     * @param string $menu
     * @return array
     */
    public function getConfig(string $menu): array
    {
        // return $this->menu->getMenuConfig($menu);
        // Array ( [header] => Array ( [position] => header [show] => all [hide] => Array ( [0] => default_home [1] => Login [2] => Password recovery [3] => Register ) ) );
        $menus['top']    = [
            'position' => 'header',
            'show'     => 'all',
            'hide'     => [
                'Login',
                'Register',
                'Password recovery',
                'default_home',
                'Payment',
                'Sitemaps',
                'sitemapHtml',
                'Tracker',
            ],
        ];
        $menus['header'] = [
            'position' => 'header',
            'show'     => 'all',
            'hide'     => [
                'Login',
                'Register',
                'Password recovery',
                'default_home',
                'My home',
                'Payment',
                'Profile',
                'Sitemaps',
                'sitemapHtml',
                'Tracker',
            ],
        ];
        $menus['left']   = [
            'position' => 'left',
            'show'     => 'all',
            'hide'     => [
                'Login',
                'Register',
                'Password recovery',
                'My home',
                'Payment',
                'Sitemaps',
                'sitemapHtml',
                'Tracker',
            ],
        ];
        $menus['right']  = [
            'position' => 'right',
            'show'     => 'all',
            'hide'     => [
                'Login',
                'Register',
                'Password recovery',
                'Payment',
                'Sitemaps',
                'sitemapHtml',
                'Tracker',
            ],
        ];
        $menus['footer'] = [
            'position' => 'footer',
            'show'     => 'all',
            'hide'     => [
                'Login',
                'Register',
                'Password recovery',
                'Payment',
                'Sitemaps',
                'sitemapHtml',
                'Tracker',
            ],
        ];

        return $menus[$menu];
    }//end getConfig()
}//end class
