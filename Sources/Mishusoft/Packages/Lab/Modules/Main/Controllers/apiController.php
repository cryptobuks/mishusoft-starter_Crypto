<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Drivers\Controller;

class apiController extends Controller {

    private $api;
    public function __construct()
    {
        parent::__construct();
        $this->api = $this->loadModel('api');
    }

    public function index(){
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)){
            if (empty($data->javascriptEnabled)) {
                $this->javascriptEnabled =false;
                exit;
            }

            $this->javascriptEnabled = true;
            exit;
        }
    }

    public function getVisitorsAccessLogsLimited() {
        $this->access_init();
        $this->acl->access('edit_content');
        //getting data from database
        Storage::StreamAsJson($this->api->getVisitorsAccessLogsLimited());
    }
    public function getVisitorsAccessLogs() {
        $this->access_init();
        $this->acl->access('edit_content');
        //getting data from database
        Storage::StreamAsJson($this->api->getVisitorsAccessLogs());
    }
    public function getContactMessagesLimited() {
        $this->access_init();
        $this->acl->access('edit_content');
        //getting data from database
        Storage::StreamAsJson($this->api->getContactMessagesLimited());
    }
    public function getContactMessages() {
        $this->access_init();
        $this->acl->access('edit_content');
        //getting data from database
        Storage::StreamAsJson($this->api->getContactMessages());
    }

    public function geSocialLinks(){
        Storage::StreamAsJson($this->api->geSocialLinks());
    }

}
