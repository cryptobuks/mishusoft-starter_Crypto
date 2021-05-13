<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Mishusoft\Framework\Drivers\Controller;

class indexController extends Controller{
    public function __construct(){
        parent::__construct();
    }

    public function index(){
        /*$this->view->setJs(array('index'));*/
        $this->view->assign('title', 'Home');
        //Tracker::addEvent(array('activity' => array('messageType' => 'success','message' => 'navigated to welcome page successfully.')));
        $this->view->render('index', 'Home');
    }
}
