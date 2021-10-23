<?php

namespace Mishusoft\Packages\Lab\Modules\System\Controllers;

use Exception;
use Mishusoft\Framework\Chipsets\MPM;
use Mishusoft\Framework\Chipsets\Utility\Pagination;
use Mishusoft\Packages\Lab\Modules\Main\Controllers\systemController;
use PharData;

class modulesController extends systemController
{
    private $system;

    public function __construct()
    {
        parent::__construct();
        $this->access_init();
        $this->system = $this->loadModel('system');
    }

    public function index()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate to  modules successfully')));
        /*$this->view->setJs(['main']);*/
        try {
            $pagination = new Pagination();
            $this->view->assign('modules', $pagination->pager($this->system->getModules()));
            $this->view->assign('pagination', $pagination->getView('ajax'));
            $this->view->assign('title', 'Modules');
            $this->view->render('index', 'Modules');
        } catch (Exception $e) {
            echo json_encode(['type' => 'error', 'message' => 'Pagination class load error. ' . $e]);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Pagination class load error. ' . $e)));
            exit;
        }
    }

    public function getInstalledModules()
    {
        $this->acl->access('edit_content');
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Installed module (JSON data) extract successfully')));
        echo json_encode($this->system->getModules());
    }

    public function indexPaginationAJAX()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->paginationValidity($data);

            try {
                $pagination = new Pagination();
                $this->view->assign('modules', $pagination->pager($this->system->getModules(), $this->filterInt($data->pageNumber)));
                $this->view->assign('pagination', $pagination->getView($data->viewMode));
                $this->view->render('pagination_index', false, true);
            } catch (Exception $e) {
                echo json_encode(['type' => 'error', 'message' => 'Pagination class load error. ' . $e]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Pagination class load error. ' . $e)));
                exit;
            }
        }
    }

    public function uploadTARGZ()
    {
        $database = '';
        //print_r($_FILES);

        if (isset($_FILES['moduleFile']['name'])) {
            $fileName = $_FILES['moduleFile']['name']; //the file name
            $fileTmpLoc = $_FILES['moduleFile']['tmp_name']; //File in the php tmp folder
            $fileType = $_FILES['moduleFile']['type']; //the type of file it is
            //$fileSize = $_FILES['moduleFile']['size']; //File size in bytes
            $fileErrorMsg = $_FILES['moduleFile']['error']; //0 for false ... and 1 for true
            if (!$fileTmpLoc) {
                echo 'Please browse for a file before clicking upload button.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Please browse for a file before clicking upload button.')));
                exit;
            }
            if ($fileErrorMsg === 1) {
                echo 'Fetching error to upload this file.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Fetching error to upload this file.')));
                exit;
            }
            if ($fileType !== 'application/gzip') {
                echo 'Please select a gzip (tar.gz) file before clicking upload button.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Please select a gzip (tar.gz) file before clicking upload button.')));
                exit;
            }
            if (file_exists(MS_PACKAGES_PATH . $fileName)) {
                echo $fileName . ' already exists.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => $fileName . ' already exists.')));
                exit;
            }
            if (move_uploaded_file($fileTmpLoc, MS_PACKAGES_PATH . $fileName)) {
                $uploadedFile = MS_PACKAGES_PATH . $fileName;
                // decompress from gz
                $p = new PharData($uploadedFile);
                $p->extractTo(MS_PACKAGES_PATH, null, true);
                unlink($uploadedFile);
                $module = str_replace('.tar.gz', '', $fileName);
                // Everything for owner, read and execute for others
                //chmod ("/somedir/somefile", 0777)
                //MishusoftAssistant::chmod(LibraryDIR . 'class.' . $module . '.module', 0777);
                //MishusoftAssistant::chmod(ModulesDIR . 'core/controllers/' . $module . 'Controller.php', 0777);
                //MishusoftAssistant::chmod(ModulesDIR . $module, 0777);
                //$this->chmodFileFolder(ModulesDIR . $module);

                if (file_exists(MPM::modulesPath() . $module . '/views/data/' . $module . '.sql')) {
                    $database = MPM::modulesPath() . $module . '/views/data/' . $module . '.sql';
                } elseif (file_exists(MPM::modulesPath() . $module . '/views/data/' . $module . '.msdb')) {
                    $database = MPM::modulesPath() . $module . '/views/data/' . $module . '.msdb';
                } else {
                    echo 'Error: Databases file [' . $database . '] of uploaded module [' . $module . '] not found.';
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Module (' . $_FILES['file']['name'] . ') uploaded successfully. But Databases file not found.')));
                    exit;
                }

                /* Local method for mysql data table importing. */
                $this->system->dbconfdata($database);
                $this->system->insertModule($module, '_MODULES_DIR_' . $module, 'disable');
                echo $fileName . ' uploaded.';
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'Module (' . $module . ') inserted successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'Module', 'message' => 'Module (' . $module . ') inserted successfully....')
                ));*/
                exit;
            } else {
                echo $fileName . ' upload failed.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => $fileName . ' upload failed.')));
                exit;
            }
        }
    }

    public function updateModule()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data) && is_object($data)) {
            if (empty($data->security_code) or $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'Module\'s security_code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Module\'s security code not found.')));
                exit;
            }

            if (empty($data->id)) {
                echo json_encode(['type' => 'error', 'message' => 'Module\'s id not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Module\'s id not found.')));
                exit;
            }

            if (empty($data->status)) {
                echo json_encode(['type' => 'error', 'message' => 'Module\'s status not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Module\'s status not found.')));
                exit;
            }

            if ($data->btnName === 'Update') {
                $item = $this->system->getModule($this->filterInt($data->id));
                $this->system->editModule($this->filterInt($data->id), Text::removeTags($data->status));
                echo json_encode(['type' => 'success', 'message' => 'Module (' . $item["name"] . ') is ' . $data->status . ' successfully...']);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'Module (' . $item["name"] . ') is ' . $data->status . ' successfully...'),
                    'update' => array('messageType' => 'success', 'uFile' => 'Module', 'message' => 'Module (' . $item["name"] . ') is ' . $data->status . ' successfully...')
                ));*/
                exit;
            }

            if ($data->btnName !== 'Update') {
                echo json_encode(['type' => 'error', 'message' => 'Job command not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Job command not found.')));
                exit;
            }
        }
    }

    public function deleteModule()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data) && is_object($data)) {
            $item = $this->system->getModule($this->filterInt($data->id));
            $this->system->deleteModule($data->id);
            //print_r(ModulesDIR . CoreApp . '/controllers/' . $item["name"] . 'Controller.php' . '<br/>');
            //print_r(ModulesDIR . $item["name"] . '<br/>');
            unlink(MPM::modulesPath() . MPM::defaultModule() . '/controllers/' . $item["name"] . 'Controller.php');
            $this->deleteFolder(MPM::modulesPath() . $item["name"]);
            echo json_encode(['type' => 'success', 'message' => 'Module (' . $item["name"] . ') deleted successfully...']);
            /*Tracker::addEvent(array(
                'activity' => array('messageType' => 'success', 'message' => 'Module (' . $item["name"] . ') deleted successfully...'),
                'update' => array('messageType' => 'success', 'uFile' => 'Module', 'message' => 'Module (' . $item["name"] . ') deleted successfully...')
            ));*/
            exit;
        }
    }
}
