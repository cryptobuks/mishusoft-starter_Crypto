<?php

namespace Mishusoft\Packages\Lab\Modules\Monitor\Controllers;
use Mishusoft\Packages\Lab\Modules\Main\Controllers\monitorController;

class indexController extends monitorController
{
    public function __construct()
    {
        parent::__construct();

    }

    public function index()
    {
        $this->view->assign('title', 'Error Page');
        $this->view->render('index', 'Tracker');
        //header('location:' . BaseURL . 'error/access/404');
        
    }

}