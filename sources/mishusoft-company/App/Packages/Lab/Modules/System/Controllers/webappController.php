<?php

namespace Mishusoft\Packages\Lab\Modules\System\Controllers;

use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\MPM;
use Mishusoft\Framework\Chipsets\System;
use Mishusoft\Framework\Globals\Functions\Text;
use Mishusoft\Packages\Lab\Modules\Main\Controllers\systemController;

class webappController extends systemController
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
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate to site page successfully')));

        /*$this->view->setJs(['main']);*/
        $this->view->assign('title', 'My Application');
        $this->view->render('index', 'My Application');
    }

    public function getWebAppInfo()
    {
        $this->acl->access('edit_content');
        echo json_encode($this->system->getSiteInfo());
    }

    public function manageSite()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            if (empty($this->filterInt($data->security_code)) or $this->filterInt($data->security_code) !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'Site\'s security code not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Site\'s security code not found.')));
                exit;
            }
            if (empty($data->name)) {
                echo json_encode(['type' => 'error', 'message' => 'Site\'s name not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Site\'s name not found.')));
                exit;
            }

            if (empty($data->description)) {
                echo json_encode(['type' => 'error', 'message' => 'Site\'s description not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Site\'s description not found.')));
                exit;
            }

            if (empty($data->company)) {
                echo json_encode(['type' => 'error', 'message' => 'Site\'s company not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Site\'s company not found.')));
                exit;
            }

            if ($data->btnName === 'Update') {
                $site = $this->system->getSite($this->filterInt($data->id));
                $this->system->editSite($this->filterInt($data->id), Text::removeTags($data->name), Text::removeTags($data->description), Text::removeTags($data->company));
                echo json_encode(['type' => 'success', 'message' => 'New site (' . ucfirst($site['name']) . ' to ' . ucfirst(Text::removeTags($data->name)) . ') updated successfully....',]);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'New site (' . ucfirst($site['name']) . ' to ' . ucfirst(Text::removeTags($data->name)) . ') updated successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'Webapp', 'message' => 'New site (' . ucfirst($site['name']) . ' to ' . ucfirst(Text::removeTags($data->name)) . ') updated successfully....')
                ));*/
                exit;
            }

            if ($data->btnName !== 'Save' || $data->btnName !== 'Update') {
                echo json_encode(['type' => 'error', 'message' => 'Job command not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Job command not found.')));
                exit;
            }
        }
    }

    public function manageSocialLinks()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            if (empty($this->filterInt($data->security_code)) or $this->filterInt($data->security_code) !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'Site\'s security code not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Site\'s security code not found.')));
                exit;
            }
            if (empty($data->name)) {
                echo json_encode(['type' => 'error', 'message' => 'Website\'s name not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Website\'s name not found.')));
                exit;
            }

            if (empty($data->link)) {
                echo json_encode(['type' => 'error', 'message' => 'Profile link not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Profile link not found.')));
                exit;
            }
            if ($data->btnName === 'Update') {
                $this->system->editSocialLink($this->filterInt($data->id), $this->getSqlText($data->name), $this->getSqlText($data->link));
                echo json_encode(['type' => 'success', 'message' => ucfirst($this->getSqlText($data->name)) . ' profile link updated successfully....',]);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => ucfirst($this->getSqlText($data->name)) . ' profile link updated successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'Socialinks', 'message' => ucfirst($this->getSqlText($data->name)) . ' profile link updated successfully....')
                ));*/
                exit;
            } elseif ($data->btnName === 'Save') {
                $this->system->addSocialLink($this->getSqlText($data->name), $this->getSqlText($data->link));
                echo json_encode(['type' => 'success', 'message' => 'New ' . ucfirst($this->getSqlText($data->name)) . ' profile link added successfully....',]);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'New ' . ucfirst($this->getSqlText($data->name)) . ' profile link added successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'Socialinks', 'message' => 'New ' . ucfirst($this->getSqlText($data->name)) . ' profile link added successfully....')
                ));*/
                exit;
            }

            if ($data->btnName !== 'Save' || $data->btnName !== 'Update') {
                echo json_encode(['type' => 'error', 'message' => 'Job command not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Job command not found.')));
                exit;
            }
        }
    }

    public function deleteSocialLink()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            $link = $this->system->getSocialLink($this->filterInt($data->id));
            $this->system->deleteSocialLink($this->filterInt($data->id));
            echo json_encode(['type' => 'success', 'message' => '<b>' . $link['name'] . '</b> profile deleted successfully....']);
            /*Tracker::addEvent(array(
                'activity' => array('messageType' => 'success', 'message' => '<b>' .  $link['name'] . '</b> profile deleted successfully....'),
                'update' => array('messageType' => 'success', 'uFile' => 'role', 'message' => '<b>' .  $link['name'] . '</b> profile deleted successfully....')
            ));*/
            exit;
        }
    }

    public function getWebAppTables()
    {
        $this->acl->access('edit_content');
        echo json_encode($this->system->getWebAppTables());
        /*Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Web app\'s tables json data extract successfully')));*/
    }

    public function getWebAppSocialLinks()
    {
        $this->acl->access('edit_content');
        echo json_encode($this->system->getWebAppSocialLinks());
        /*Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Web app\'s social links json data extract successfully')));*/
    }

    public function databaseUpgrade()
    {
        $this->acl->access('edit_content');
        if (isset($_FILES['databaseFile']['name'])) {
            $fileName = $_FILES['databaseFile']['name']; //the file name
            $fileTmpLoc = $_FILES['databaseFile']['tmp_name']; //File in the php tmp folder
            $fileType = $_FILES['databaseFile']['type']; //the type of file it is
            $fileSize= $_FILES['databaseFile']['size']; //the size of file it is
            $fileErrorMsg = $_FILES['databaseFile']['error']; //0 for false ... and 1 for true
            if (!$fileTmpLoc) {
                echo 'Please browse for a file before clicking upload button.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Please browse for a file before clicking upload button.')));
                exit;
            }
            if ($fileErrorMsg ===1) {
                echo $fileName . 'uploading error.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => $fileName . 'uploading error.')));
                exit;
            }

            if ($fileType !== 'application/octet-stream') {
                echo 'Please select a .msdb or .sql file before clicking upload button.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Please select a .msdb or .sql file before clicking upload button.')));
                exit;
            }

            $permit_file_size = substr(ini_get('upload_max_filesize'), 0, 1);
            $actual_file_size =substr(($fileSize / 1024) / 1024, 0, 3);
            if ($actual_file_size > $permit_file_size) {
                echo 'The file ('.$fileName.') size is larger than the permit size..';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'The file ('.$fileName.') size is larger than the permit size..')));
                exit;
            }

            if (file_exists(MPM::databasesPath() . $fileName)) {
                echo $fileName . ' already exists.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => $fileName . ' already exists.')));
                exit;
            }

            chmod(MPM::databasesPath(), 0777);
            if (move_uploaded_file($fileTmpLoc, MPM::databasesPath() . $fileName)) {
                $uploadedFile = MPM::databasesPath() . $fileName;
                chmod($uploadedFile, 0777);

                if (!file_exists($uploadedFile)) {
                    echo 'Error: Databases file [' . $fileName . '] not found.';
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Databases file (' . $_FILES['file']['name'] . ') not found.')));
                    exit;
                }
                $this->system->dbconfdata($uploadedFile);
                echo ' Framework database upgrade with (' . $fileName . ') successfully....';
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'Framework database upgrade with (' . $fileName . ') successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'Webapp', 'message' => 'Framework database upgrade with (' . $fileName . ') successfully....')
                ));*/
                exit;
            } else {
                echo $fileName . ' upload failed.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => $fileName . ' upload failed.')));
                exit;
            }
        }
    }

    public function databaseRestore()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            if (empty($this->filterInt($data->security_code)) or $this->filterInt($data->security_code) !== 1) {
                echo 'Security code not found.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Security code not found.')));
                exit;
            }
            if (empty($data->name)) {
                echo 'Site\'s name not found';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Site\'s name not found.')));
                exit;
            }
            if (empty($data->host)) {
                echo 'Site\'s host not found.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Site\'s host not found.')));
                exit;
            }

            if ($data->btnName === 'RESTORE') {
                $systemAccountDatabaseFile = MPM::databasesPath() . strtolower('account').Mishusoft_Database_Dump_File_Format;
                $systemMasterDatabaseFile = MPM::databasesPath() . strtolower(DEFAULT_APP_NAME).Mishusoft_Database_Dump_File_Format;
                if (!file_exists($systemAccountDatabaseFile)) {
                    echo ' Framework account database file (' . strtolower('account').Mishusoft_Database_Dump_File_Format . ') not found in '. MPM::databasesPath()  .'.';
                    /*Tracker::addEvent(array(
                        'activity' => array('messageType' => 'error', 'message' => 'Framework account database file (' . strtolower('account').MishusoftDatabaseDumpFileFormat . ') not found in '. MPM::databasesPath()  .'.')
                    ));*/
                    exit;
                }
                if (!file_exists($systemMasterDatabaseFile)) {
                    echo ' Framework master database file (' . strtolower(DEFAULT_APP_NAME).Mishusoft_Database_Dump_File_Format . ') not found in '. MPM::databasesPath()  .'.';
                    /* Tracker::addEvent(array(
                         'activity' => array('messageType' => 'error', 'message' => 'Framework master database file (' . strtolower('DefaultAppName').MishusoftDatabaseDumpFileFormat . ') not found in '. MPM::databasesPath()  .'.')
                     ));*/
                    exit;
                }

                $config = json_decode(file_get_contents(System::getRequiresFile("SETUP_FILE_PATH", System::getDefaultDb())));
                if (!empty($config) && is_object($config)) {
                    echo 'All tables dropping from database...<br/>';
                    System::DropPreviousTables(DbNAME);
                    echo 'Creating users tables in database...<br/>';
                    $this->system->dbconfdata($systemAccountDatabaseFile);
                    echo 'Setting up default user in database...<br/>';
                    $this->system->insertUserBasicInfo(
                        '',
                        '',
                        SUPPORT_EMAIL_ADDRESS,
                        str_replace('msu_', '', DEFAULT_OPERATING_SYSTEM_USER),
                        DEFAULT_OPERATING_SYSTEM_PASSWORD,
                        'active',
                        '1',
                        '1'
                    );
                    $this->system->insertUserDetailsInfo(DEFAULT_DATE_OF_BIRTH, 'male', '');
                    echo 'Setting up admin user in database...<br/>';
                    $this->system->insertUserBasicInfo(
                        '',
                        '',
                        $config->account->email,
                        str_replace('msu_', '', $config->account->username),
                        $config->account->password,
                        $config->account->activity,
                        $config->account->role,
                        $config->account->status
                    );
                    $this->system->insertUserDetailsInfo($config->account->dob, $config->account->gender, '');
                    echo 'Creating extra tables in database...<br/>';
                    $this->system->dbconfdata($systemMasterDatabaseFile);
                    echo 'Setting up webapp in database...<br/>';
                    $this->system->configWebApp(
                        $config->app->name,
                        $config->app->description,
                        $config->app->company,
                        $config->app->doc_root,
                        $config->app->http_host_name,
                        $config->app->http_host_add,
                        $config->app->http_host_ip,
                        $config->app->default_home,
                        $config->app->default_layout,
                        $config->app->icon_remote_dir,
                        $config->app->icon_local_dir,
                        $config->app->favicon
                    );
                    echo ' Framework database restored successfully....';
                    /*Tracker::addEvent(array(
                        'activity' => array('messageType' => 'success', 'message' => 'Framework database restored successfully....'),
                        'update' => array('messageType' => 'success', 'uFile' => 'Webapp', 'message' => 'Framework database restored successfully....')
                    ));*/
                    exit;
                } else {
                    echo 'Configuration data not found.';
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Configuration data not found.')));
                    exit;
                }
            }
            if ($data->btnName !== 'Restore' || $data->btnName !== 'RESTORE') {
                echo 'Job command not found.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Job command not found.')));
                exit;
            }
        }
    }

    public function uploadLogoImage()
    {
        if (isset($_FILES['logoImage']['name'])) {
            $fileName = $_FILES['logoImage']['name']; //the file name
            $fileTmpLoc = $_FILES['logoImage']['tmp_name']; //File in the php tmp folder
            $fileType = $_FILES['logoImage']['type']; //the type of file it is
            $fileSize= $_FILES['logoImage']['size']; //the size of file it is
            $fileErrorMsg = $_FILES['logoImage']['error']; //0 for false ... and 1 for true

            $permit_file_size = substr(ini_get('upload_max_filesize'), 0, 1);
            $actual_file_size =substr(($fileSize / 1024) / 1024, 0, 3);
            if ($actual_file_size > $permit_file_size) {
                echo 'The file ('.$fileName.') size is larger than the permit size..';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'The file ('.$fileName.') size is larger than the permit size..')));
                exit;
            }
            if ($fileErrorMsg === 1) {
                echo 'The file ('.$fileName.') uploading error.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'The file ('.$fileName.') uploading error.')));
                exit;
            }
            if (!$fileTmpLoc) {
                echo 'Please browse for a file before clicking upload button.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Please browse for a file before clicking upload button.')));
                exit;
            }
            if ($fileType !== 'image/png') {
                echo 'Please select a valid image file before clicking upload button.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Please select a valid image file before clicking upload button.')));
                exit;
            }

            chmod(Storage::getMediaPathOfUploads("", "local"), 0777);
            if (move_uploaded_file($fileTmpLoc, Storage::getMediaPathOfUploads($fileName, "local"))) {
                $oldImageFile = Storage::getMediaPathOfUploads($fileName, "local");
                $newImageFile = 'logo_' . uniqid();
                rename($oldImageFile, Storage::getMediaPathOfUploads($newImageFile, "local"));
                chmod(Storage::getMediaPathOfUploads($newImageFile, "local"), 0777);
                $this->system->setLogo($newImageFile);
                echo 'Webapp logo change with new (' . $fileName . ') successfully....';
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'Framework database upgrade with (' . $fileName . ') successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'Webapp', 'message' => 'Framework database upgrade with (' . $fileName . ') successfully....')
                ));*/
                exit;
            } else {
                echo $fileName . ' unable to set logo.';
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => $fileName . ' upload failed.')));
                exit;
            }
        }
    }
}
