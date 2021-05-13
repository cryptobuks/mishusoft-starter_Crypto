<?php

namespace Mishusoft\Widgets;

use Mishusoft\Framework\Drivers\Widget;

class menuWidget extends Widget{
    private $menu;
    public function __construct(){
        parent::__construct();
        $this->menu = $this->loadModel('menu');
    }

    public function getMenu(string $menu, string $view, string $format = "phtml", $inverse = null, $siteInfo = null){
        return $this->render($menu,$view,array(
            "name"=>$menu,
            "menu"=>$this->menu->getSelectedMenu($view),
            "inverse"=>$inverse,
            "siteInfo"=>$this->menu->getSiteInfo(),
        ), $format);
    }

    public function getConfig($menu): array
    {
        //return $this->menu->getMenuConfig($menu);
        //Array ( [header] => Array ( [position] => header [show] => all [hide] => Array ( [0] => default_home [1] => Login [2] => Password recovery [3] => Register ) ) );

        $menus['top'] = array(
            'position' => 'header',
            'show' => 'all',
            'hide' => array('Login', 'Register', 'Password recovery', 'default_home','Payment','Sitemaps','sitemapHtml','Tracker')
        );
        $menus['header'] = array(
            'position' => 'header',
            'show' => 'all',
            'hide' => array('Login', 'Register', 'Password recovery', 'default_home', 'My home','Payment','Profile','Sitemaps','sitemapHtml','Tracker')
        );
        $menus['left'] = array(
            'position' => 'left',
            'show' => 'all',
            'hide' => array('Login', 'Register', 'Password recovery', 'My home','Payment','Sitemaps','sitemapHtml','Tracker')
        );
        $menus['right'] = array(
            'position' => 'right',
            'show' => 'all',
            'hide' => array('Login', 'Register', 'Password recovery','Payment','Sitemaps','sitemapHtml','Tracker')
        );
        $menus['footer'] = array(
            'position' => 'footer',
            'show' => 'all',
            'hide' => array('Login', 'Register', 'Password recovery','Payment','Sitemaps','sitemapHtml','Tracker')
        );

        return $menus[$menu];
    }
}
