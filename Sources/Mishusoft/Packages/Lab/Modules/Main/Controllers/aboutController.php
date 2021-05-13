<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;


use Mishusoft\Framework\Drivers\Controller;

class aboutController extends Controller {
    public function __construct(){
        parent::__construct();
    }

    public function index()
    {
        /*$this->view->setJs(['main']);*/
        $this->view->assign('title', 'Basic Information');
        $this->view->render('aboutMishusoft', 'Basic Information');
    }

    public function aboutMishusoft(){
        /*$this->view->setJs(['main']);*/
        $this->view->assign('title', 'Basic Information');
        $this->view->render('aboutMishusoft', 'Basic Information');
    }

    public function whyMishusoft(){
        /*$this->view->setJs(['main']);*/
        $this->view->assign('title', 'Why Mishusoft?');
        $this->view->render('whyMishusoft', 'Why Mishusoft?');
    }

    public function ourAchievements(){
       /* $this->view->setJs(['main']);*/
        $this->view->assign('title', 'Our Achievements');
        $this->view->render('ourAchievements', 'Our Achievements');
    }

    public function terms(){
       /* $this->view->setJs(['main']);*/
        $this->view->assign('title', 'Term and Termination');
        $this->view->render('terms', 'Term and Termination');
    }

    public function policy(){
       /* $this->view->setJs(['main']);*/
        $this->view->assign('title', 'Privacy Policy');
        $this->view->render('policy', 'Privacy Policy');
    }
}
