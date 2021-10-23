<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Mishusoft\Framework\Drivers\Controller;

class pageController extends Controller
{
    private $api;
    public function __construct()
    {
        parent::__construct();
        $this->api = $this->loadModel('api');
    }

    public function index()
    {
        $url = filter_input(INPUT_GET, 'url', FILTER_SANITIZE_URL);
        $url = explode('/', $url);
        $url = array_filter($url);
        $DevContent = '<div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-bottom-10"><div class="flex-column flex-box-center"><h1 style="font-size: 600%;font-weight: bold;">225</h1><div class="flex-column" style="font-size: 25px;">Under development!</div></div></div>';
        $NotFoundContent = '<div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-bottom-10"><div class="flex-column flex-box-center"><h1 style="font-size: 600%;font-weight: bold;">404</h1><div class="flex-column" style="font-size: 25px;">Your requested page not found!</div></div></div>';

        $self = strtolower(array_shift($url));
        if ($self === 'page') {
            $pageName = ucwords(str_replace('-', ' ', strtolower(end($url))));
            if ($pageName) {
                if ($this->api->getPageIdByName($pageName)) {
                    if ($this->api->getPageSourceById($this->api->getPageIdByName($pageName))) {
                        /*$this->view->setJs(['main']);*/
                        $this->view->assign('title', $pageName);
                        $this->view->assign('dynamic_content', $this->api->getPageSourceById($this->api->getPageIdByName($pageName)));
                        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => "Navigated to $pageName page successfully.")));
                        $this->view->render('index', 'dynamic_pages');
                        exit();
                    } else {
                        /*$this->view->setJs(['main']);*/
                        $this->view->assign('title', $pageName);
                        $this->view->assign('dynamic_content', $DevContent);
                        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => "Navigated to $pageName page successfully.")));
                        $this->view->render('index', 'dynamic_pages');
                        exit();
                    }
                } else {
                    /*$this->view->setJs(['main']);*/
                    $this->view->assign('title', 'NOT FOUND');
                    $this->view->assign('dynamic_content', $NotFoundContent);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => "Navigated to unknown page.")));
                    $this->view->render('index', 'dynamic_pages');
                    exit();
                }
            } else {
                $this->redirect();
            }
        }
    }
}
