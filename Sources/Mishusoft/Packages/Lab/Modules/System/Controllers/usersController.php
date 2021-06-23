<?php

namespace Mishusoft\Packages\Lab\Modules\System\Controllers;


use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\Utility\Pagination;
use Mishusoft\Framework\Globals\Functions\Text;
use Mishusoft\Packages\Lab\Modules\Main\Controllers\systemController;
use Verot\Upload\Upload;

class usersController extends systemController
{
    private $system;
    public function __construct()
    {
        parent:: __construct();
        $this->access_init();
        $this->system = $this->loadModel('system');
    }

    public function index()
    {

        $this->acl->access('edit_content');
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate to users page successfully')));

        $pagination = new Pagination();

        $this->view->assign('users', $pagination->pager($this->system->getUsersAll()));
        $this->view->assign('roles', $this->system->getRoles());
        $this->view->assign('pagination', $pagination->getView('ajax'));

        /*$this->view->setJs(['main']);*/
        $this->view->assign('title', 'Users');
        $this->view->render('index', 'Users');
    }

    public function indexPaginationAJAX()
    {
        $this->acl->access('edit_content');
        $page = $this->getInt('page');

        $pagination = new Pagination();

        $this->view->assign('users', $pagination->pager($this->system->getUsersAll(), $page));
        $this->view->assign('pagination', $pagination->getView('ajax'));
        $this->view->render('index_p_ajax', false, true);
    }

    public function getUsersAll()
    {
        $this->acl->access('edit_content');
        echo json_encode($this->system->getUsersAll());
    }

    public function addUser()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            if (empty($data->security_code) OR $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'User\'s security code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s security code not found.')));
                exit;
            }

            if (empty($data->FName)) {
                echo json_encode(['type' => 'error', 'message' => 'User\'s first name not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s first name not found.')));
                exit;
            }

            if (empty($data->LName)) {
                echo json_encode(['type' => 'error', 'message' => 'User\'s last name not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s last name not found.')));
                exit;
            }

            if (empty($data->email)) {
                echo json_encode(['type' => 'error', 'message' => 'User\'s email address not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s email address not found.')));
                exit;
            }

            if (empty($data->username)) {
                echo json_encode(['type' => 'error', 'message' => 'User\'s username not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s username not found.')));
                exit;
            }

            if (empty($data->password)) {
                echo json_encode(['type' => 'error', 'message' => 'User\'s password not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s password not found.')));
                exit;
            }

            if (empty($data->activity)) {
                echo json_encode(['type' => 'error', 'message' => 'User\'s activity not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s activity not found.')));
                exit;
            }

            if (empty($data->role)) {
                echo json_encode(['type' => 'error', 'message' => 'User\'s role not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s role not found.')));
                exit;
            }

            if ($data->btnName === 'Save') {
                if ($this->system->verifyEmail(Text::removeTags($data->email))) {
                    echo json_encode(['type' => 'error','message' => 'User\'s email address(' . Text::removeTags($data->email) . ')  already registered. Please enter new email address.']);
                    exit;
                } elseif ($this->system->verifyUsername(Text::removeTags($data->username))) {
                    echo json_encode(['type' => 'error', 'message' => 'The username <b>' . Text::removeTags($data->username) . '</b> has already exist. Please enter new one.']);
                    exit;
                }
                else {
                    $this->system->insertUserBasicInfo(Text::removeTags($data->FName), Text::removeTags($data->LName), Text::removeTags($data->email), Text::removeTags($data->username), Text::removeTags($data->password), Text::removeTags($data->activity), $this->filterInt($data->role),0);
                    $this->system->insertUserDetailsInfo(Text::removeTags($data->dateOfBirth), Text::removeTags($data->gender), Text::removeTags($data->profession));
                    echo json_encode(['type' => 'success', 'user' => $this->system->UserLastInsertId($data->email), 'message' => 'New user (' . ucfirst(Text::removeTags($data->FName)) . ' ' . Text::removeTags($data->LName) . ') added successfully...']);
                    /*Tracker::addEvent(array(
                        'activity' => array('messageType' => 'success', 'message' => 'New user (' . ucfirst(Text::removeTags($data->FName)) . ' ' . Text::removeTags($data->LName) . ') added successfully...'),
                        'update' => array('messageType' => 'success', 'uFile' => 'user', 'message' => 'New user (' . ucfirst(Text::removeTags($data->FName)) . ' ' . Text::removeTags($data->LName) . ') added successfully...')
                    ));*/
                    exit;}
            }

            if ($data->btnName === 'Update') {
                $user = $this->system->getUser($this->filterInt($data->id));
                $this->system->editUserBasicInfo($this->filterInt($data->id), Text::removeTags($data->FName), Text::removeTags($data->LName), Text::removeTags($data->email), Text::removeTags($data->username), Text::removeTags($data->password), Text::removeTags($data->activity), $this->filterInt($data->role));
                $this->system->editUserDetailsInfo($this->filterInt($data->id), Text::removeTags($data->dateOfBirth), Text::removeTags($data->gender), Text::removeTags($data->profession));
                echo json_encode(['type' => 'success', 'message' => 'New user (' . ucfirst($user[0]['f_name']) . ' ' . $user[0]['l_name'] . ' to ' . ucfirst(Text::removeTags($data->FName)) . ' ' . Text::removeTags($data->LName) . ') updated successfully...']);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'New user (' . ucfirst($user[0]['f_name']) . ' ' . $user[0]['l_name'] . ' to ' . ucfirst(Text::removeTags($data->FName)) . ' ' . Text::removeTags($data->LName) . ') updated successfully...'),
                    'update' => array('messageType' => 'success', 'uFile' => 'user', 'message' => 'New user (' . ucfirst($user[0]['f_name']) . ' ' . $user[0]['l_name'] . ' to ' . ucfirst(Text::removeTags($data->FName)) . ' ' . Text::removeTags($data->LName) . ') updated successfully...')
                ));*/
                exit;
            }

            if ($data->btnName !== 'Save' || $data->btnName !== 'Update') {
                echo json_encode(['type' => 'error', 'message' => 'Job command not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Job command not found.')));
                exit;
            }
        }
    }

    public function deleteUser()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            $user = $this->system->getUser($this->filterInt($data->id));
            $this->system->deleteUser($data->id);
            echo json_encode(['type' => 'success', 'message' => ucfirst($user[0]['f_name']) . ' ' . $user[0]['l_name'] . ' deleted successfully...']);
            /*Tracker::addEvent(array(
                'activity' => array('messageType' => 'success', 'message' => ucfirst($user[0]['f_name']) . ' ' . $user[0]['l_name'] . ' deleted successfully...'),
                'update' => array('messageType' => 'success', 'uFile' => 'user', 'message' => ucfirst($user[0]['f_name']) . ' ' . $user[0]['l_name'] . ' deleted successfully...')
            ));*/
            exit;
        }
    }

    public function verifyUser()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            if (empty($data->security_code) OR $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'User\'s security code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s security code not found.')));
                exit;
            }

            if (empty($data->code) || !$this->filterInt($data->code)) {
                echo json_encode(['type' => 'error', 'message' => 'User\'s code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s code not found.')));
                exit;
            }

            $user = $this->system->getUser($this->filterInt($data->id));
            $this->system->activeUser($this->filterInt($data->id), $this->filterInt($data->code));
            echo json_encode(['type' => 'success', 'message' => ucfirst($user[0]['f_name']) . ' ' . $user[0]['l_name'] . ' verified successfully...']);
            /*Tracker::addEvent(array(
                'activity' => array('messageType' => 'success', 'message' => ucfirst($user[0]['f_name']) . ' ' . $user[0]['l_name'] . ' verified successfully...'),
                'update' => array('messageType' => 'success', 'uFile' => 'user', 'message' => ucfirst($user[0]['f_name']) . ' ' . $user[0]['l_name'] . ' verified successfully...')
            ));*/
            exit;
        }
    }

    public function isUserCreatedCheckedByUserId()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            if (empty($data->security_code) OR $data->security_code !== 1) {
                echo json_encode(['status' => 'failed', 'type' => 'error', 'message' => 'User\'s security code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s security code not found.')));
                exit;
            }

            if (empty($data->user)) {
                echo json_encode(['status' => 'failed', 'type' => 'error', 'message' => 'User not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User not found.')));
                exit;
            }

            if ($this->system->isUserCreatedCheckedByUserId($this->filterInt($data->user))) {
                //$user = $this->system->getUser($this->filterInt($data->user));
                echo json_encode(['status' => 'yes']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'The user <b>' . ucfirst($user[0]['f_name']) . ' ' . $user[0]['l_name'] . '</b> has already exist. Please enter new one.')));
                exit;
            }
        }
    }

    public function uploadUserProfilePicture($user)
    {
        $this->acl->access('edit_content');
        $user = $this->filterInt($user);
        /*$imageName = '';
        $imageMime = '';
        $imageSize = '';
        $imageContent = '';*/

        if (isset($_FILES['imageFile']['name'])) {
            $upload = new upload($_FILES['imageFile']);
            $upload->allowed = array('image/*');
            $upload->file_new_name_body = 'msu_pro_pic_' . uniqid();
            $upload->process(Storage::getMediaPathOfUploads("","local"));

            if ($upload->processed) {
                $imageName = $upload->file_dst_name;
                $imageMime = $upload->file_src_mime;
                $imageSize = ($upload->file_src_size / 1024) / 1024;
                $imageContent = file_get_contents(Storage::getMediaPathOfUploads($imageName,"local"));

                //$imageActualSize = number_format($imageSize, 2) . ' Mb';

                echo 'Profile picture uploaded.';
                $this->system->uploadUserProfilePicture($user, $imageName, $imageMime, $imageSize, $imageContent);
                $this->system->setUserProfilePictureId($user, $this->system->getLastInsertUserProfilePictureId());
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'A new image (Name: ' . $imageName . ', Location:  ' . Media::getMediaPathOfUploads($imageName,"local") . ') for user ' . $this->system->getStuffNameById($user) . ' uploaded successfully...')
                ));*/
                exit;
            } else {
                echo $upload->error;
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => $upload->error)));
                exit;
            }
        }
    }

    public function viewUserCurrentProfilePicture($user, $picture)
    {
        $this->acl->access('edit_content');
        $user = $this->filterInt($user);
        $picture = $this->filterInt($picture);

        if (!$user) {
            $this->redirect('system/users');
        }

        if (!$this->system->getProfilePictureById($picture, $user)) {
            $this->redirect('system/users');
        }

        $data = $this->system->getProfilePictureById($picture, $user);
        header('content-type: ', $data['mime']);
        header('Content-Disposition: filename= Image'); // https://www.php.net/manual/en/function.headers-sent.php
        echo $data['data'];
    }

}