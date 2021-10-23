<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Mishusoft\Framework\Chipsets\Http\IP;
use Mishusoft\Framework\Drivers\Controller;

class contactController extends Controller
{
    private $contact;

    public function __construct()
    {
        parent::__construct();
        $this->contact = $this->loadModel('contact');
        //$this->access_init();
    }

    public function index()
    {
        /*$this->view->setJs(array('main'));*/
        $this->view->assign('title', 'Contact');
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'navigated to Contact page successfully.')));
        $this->view->render('index', 'Contact');
    }

    public function receiveMessage()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (empty($data->firstName)) {
                echo json_encode(['type' => 'error', 'message' => 'Your first name is empty.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your first name is empty.')));
                exit;
            }

            if (empty($data->lastName)) {
                echo json_encode(['type' => 'error', 'message' => 'Your last name is empty.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Last name is empty.')));
                exit;
            }
            if (empty($data->email)) {
                echo json_encode(['type' => 'error', 'message' => 'Your email address is empty.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Email address is empty.')));
                exit;
            }

            if (!$this->validEmail($data->email)) {
                echo json_encode(['type' => 'error', 'message' => 'Your email address is incorrect.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Email address is incorrect.')));
                exit;
            }

            if (empty($data->messageSubject)) {
                echo json_encode(['type' => 'error', 'message' => 'Your message\'s subject is empty.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Message\'s subject is empty.')));
                exit;
            }

            if (empty($data->messageContent)) {
                echo json_encode(['type' => 'error', 'message' => 'Your message\'s is empty.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Message\'s is empty.')));
                exit;
            }

            if (empty($data->btnName) || $data->btnName !=='Send message') {
                echo json_encode(['type' => 'error', 'message' => 'Invalid request.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid request.')));
                exit;
            }

            $this->contact->acceptMessage(
                IP::get(),
                $this->getSqlText($data->firstName),
                $this->getSqlText($data->lastName),
                $this->getSqlText($data->email),
                $this->filterInt($data->mobileNumber),
                $this->getSqlText($data->messageSubject),
                $this->getSqlText($data->messageContent),
            );


            echo json_encode(['type' => 'success', 'message' => 'We received your message. As soon as possible we send a reply to your provided e-mail address. Thank you for staying with us']);
            //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Client message received.')));
            exit;
        } else {
            echo json_encode(['type' => 'error', 'message' => 'Empty message.']);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Empty message.')));
            exit;
        }
    }
}
