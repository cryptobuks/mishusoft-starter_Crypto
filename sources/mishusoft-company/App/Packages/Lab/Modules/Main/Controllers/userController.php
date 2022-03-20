<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Mishusoft\Framework\Chipsets\Cryptography\Decryption;
use Mishusoft\Framework\Chipsets\Cryptography\Encryption;
use Mishusoft\Framework\Chipsets\Mail;
use Mishusoft\Framework\Chipsets\Utility\Pagination;
use Mishusoft\Framework\Drivers\Controller;
use Mishusoft\Framework\Drivers\Session;
use Mishusoft\System\Memory;
use Verot\Upload\Upload;

class userController extends Controller
{
    private $user;
    public function __construct()
    {
        parent::__construct();
        $this->user = $this->loadModel('user');
    }

    public function index()
    {
        $this->access_init();
        ////Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate user page successfully')));
        /*$this->view->setJs(['main']);*/
        $this->view->assign('user', $this->user->getLoggedInUserDetails(Session::get('id_user')));
        $this->view->assign('title', 'My home');
        $this->view->render('index', 'My home');
    }

    public function profile()
    {
        $this->access_init();
        Session::accessView('admin');
        ////Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate user\'s profile page successfully')));
        /*$this->view->setJs(['main']);*/
        $this->view->assign('user', $this->user->getLoggedInUserDetails(Session::get('id_user')));
        $this->view->assign('title', 'Profile');
        $this->view->render('profile', 'Profile');
    }

    public function backdoor()
    {
        $this->access_init();
        Session::accessView('root');
        ////Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate user\'s profile page successfully')));
        /*$this->view->setJs(['main']);*/
        $this->view->assign('user', $this->user->getLoggedInUserDetails(Session::get('id_user')));
        $this->view->assign('title', 'Profile');
        $this->view->render('profile', 'Profile');
    }

    public function verifyUserAuth()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) &&is_object($data)) {
            if (empty($data->security_code) or $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'User login error.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'MS security code not found.')));
                exit;
            }

            if (empty($this->getAlphaNumText($data->username))) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out your username.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s username not found.')));
                exit;
            }

            if (empty($data->password)) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out your password.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s password not found.')));
                exit;
            }

            if (!$this->user->getUserName($this->getAlphaNumText($data->username))) {
                echo json_encode(['type' => 'error', 'message' => 'Your username [<span style="font-weight:bold;">' . $this->getAlphaNumText($data->username) . '</span>] not exist. Please create a new account.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your username not exist. Please create a new account. This user try with (username = ' . $this->getAlphaNumText($data->username) . ')')));
                exit;
            }

            $UserPassWord = $this->user->getUserPassWord($this->getAlphaNumText($data->username));

            if (Decryption::static($UserPassWord) !== $this->getSqlText($data->password)) {
                echo json_encode(['type' => 'error', 'message' => 'Incorrect password. Please try with correct password.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Incorrect password. This user try with (password = ' . $this->getSqlText($data->password) . ')')));
                exit;
            }

            $row = $this->user->getUser($this->getAlphaNumText($data->username), $this->getSqlText($data->password));
            $this->processAuth($row);
            if (!empty($data->RememberMe) && $data->RememberMe === 'RememberMe') {
                Session::set('RememberMe', $this->getText("RememberMe"));
            }
            Session::set('time', time());
            //Session::set('BranchName', $this->user->getBranchNameById($this->user->getBranchIdByUserId($row['id'])));

            echo json_encode(['type' => 'success', 'message' => 'LOGGED_IN', 'url' => $data->redirectURL]);
            //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Login successfully. Try username:' . $this->getAlphaNumText($data->username) . '. Try pass:' . $this->getSqlText($data->password))));
            exit;
        }
    }

    public function login()
    {
        /*$this->view->setJs(['main']);*/
        $this->view->assign('title', 'Log In');

        if (Session::get('auth')) {
            $this->redirect($this->catchRedirectURL('redirect'));
        }

        if (!$this->catchRedirectURL('redirect')) {
            $this->view->assign('redirect', '/');
        } else {
            $this->view->assign('notify', 'Please log in to continue.');
            $this->view->assign('redirect', $this->catchRedirectURL('redirect'));
            //Tracker::addEvent(array('activity' => array('messageType' => 'notify', 'message' => 'Please log in to continue.')));
        }

        if ($this->getInt('logged') === 1) {
            $this->view->assign('submitted_data', $_POST);

            if (!$this->getAlphaNum('username')) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s username not found.')));
                $this->view->assign('error', 'Please enter your username.');
                $this->view->render('login', 'Login');
                exit;
            }

            if (!$this->user->getUserName($this->getAlphaNum('username'))) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your username not exist. Please create a new account. This user try with (username = ' . $this->getAlphaNum('username') . ')')));
                $this->view->assign('error', 'Your username [<span style="font-weight:bold;">' . $this->getAlphaNum('username') . '</span>] not exist. Please create a new account.');
                $this->view->render('login', 'Login');
                exit;
            }

            if (!$this->getSql('password')) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s password not found.')));
                $this->view->assign('error', 'Please enter your password.');
                $this->view->render('login', 'Login');
                exit;
            }

            $row = $this->user->getUser($this->getAlphaNum('username'), $this->getSql('password'));
            $this->processAuth($row);
            if (!empty($this->getAlphaNum('RememberMe')) && $this->getAlphaNum('RememberMe') === 'RememberMe') {
                Session::set('RememberMe', $this->getText("RememberMe"));
            }
            Session::set('time', time());
            //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Login successfully. Try username:' . $this->getAlphaNum('username') . '. Try pass:' . $this->getSql('password'))));
            $this->redirect($this->getAlphaNum('redirectURL'));
            exit;
        }

        $this->view->render('login', 'Login');
    }

    private function processAuth($row)
    {
        if (!$row) {
            echo json_encode(['type' => 'error', 'message' => 'Login fail. Incorrect password.']);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Login fail. Invalid or incorrect password. Try username:' . $username . '. Try pass:' . $password)));
            exit;
        }
        $row['status'] = (int)$row['status'];

        if ($row['status'] !== (int)'1') {
            echo json_encode(['type' => 'error', 'message' => 'Username inactive now. If you want to access your current account,'
                . ' you will need to active your account. Recently we have been already sent to your e-mail an activation code.']);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Login fail. Invalid or incorrect username & password. Try username:' . $username . '. Try pass:' . $password)));
            exit;
        }

        $this->user->userNewLog($row['id'], 'LOGIN');

        Session::set('auth', true);
        Session::set('level', $row['role']);
        Session::set('username', $row['username']);
        Session::set('first-name', $row['f_name']);
        Session::set('last-name', $row['l_name']);
        Session::set('userId', $row['id']);
    }

    public function thirdparty($web_app_name)
    {
        switch ($web_app_name) {
            case 'google':
                if (isset($_SESSION['oauth2_tr::https://www.mishusoft.com::490685818841-9ck0mpi283mogcoskgk8kso236m5bvn4.apps.googleusercontent.com::_tr_'])) {
                    print_r($_SESSION);
                }
                break;
            default:
                print_r($web_app_name);
                break;

        }
    }

    /*oauth2_tr::https://www.mishusoft.com::490685818841-9ck0mpi283mogcoskgk8kso236m5bvn4.apps.googleusercontent.com::_tr_:"{"cookieHash":"13241859","cachedValue":{"ea":{"token_type":"Bearer","access_token":"ya29.a0AfH6SMBkKDe3CMKsJNXouHRfkPEaEu8RiVvu3deaPmWeiRTmAr-gqCCWoHOMoyfK-v0LMYWM_znJz16_uRtWQ8RfmcRMro9kt8ugNFYZnWs3qgffKJZ1rDz9bzt5SKfzSP2YqaZUwp3Mx4zTOmAoIXtEMXqK7N8t0E6o","scope":"email profile https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email","login_hint":"AJDLj6IOC0Vn2y6PWm_g1WKiVhMlYpu3dL2vO7JrVgYs25HAhznYqwC0-7FcqzVQA64VrEocXG0h3FO4jxZ0X0sjL1h2E5_Mnw","expires_in":3599,"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjBhN2RjMTI2NjQ1OTBjOTU3ZmZhZWJmN2I2NzE4Mjk3Yjg2NGJhOTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNDkwNjg1ODE4ODQxLTljazBtcGkyODNtb2djb3NrZ2s4a3NvMjM2bTVidm40LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNDkwNjg1ODE4ODQxLTljazBtcGkyODNtb2djb3NrZ2s4a3NvMjM2bTVidm40LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAxMDk2NTU1NDgyNzQ1MjIzNzAzIiwiZW1haWwiOiJhYmR1c3NhbWFkYmlwbG9iQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiY1JHbWl2OUQ0VnMwTmZHUHNVbnBsZyIsIm5hbWUiOiJBYmR1cyBTYW1hZCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaTR5YWRHa2lYZzlhcFlocEZRR0wyZFFTcE8ycU8yWnlhNy1LeWc9czk2LWMiLCJnaXZlbl9uYW1lIjoiQWJkdXMiLCJmYW1pbHlfbmFtZSI6IlNhbWFkIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE1OTg2NDY2MzUsImV4cCI6MTU5ODY1MDIzNSwianRpIjoiMmNmNjExMzE2MDMxMGJlZDNiNjRkZjk0ZjYzNTRjZWMwM2U0M2M0YyJ9.mLHhUIvzxHGNt7Hr9WVDfPQ7l-9DUL3rXbZfCgev6bp_FH6aAW7GKA2yALtQ4Mv2h3RoF0cyndZqin_ZFU9VmGxsHY8JxTawntegTrbAehtPkOR0IyyxrO9B-5X6aQ9FzdtS_qcUTtWR51hp9aB0P4elMwsVpvACIGczywRj8LdXldQqD6kBU5UQy_U3IeOEGbZt7V1tDu6IG9cXndjd3RLLSCMgQVE7KGuwrI8WTvTWz12c2_aRUu4KEG3W4u1z-tPhns8SpLo20of7X3c6jOeJodshxSHzEKvp0t0Ol30YAYNnM1byQBSBxsHYWhjQ1j-nWfWgxK8DdpL-IXf10w","session_state":{"extraQueryParams":{"authuser":"0"}},"first_issued_at":1598646635838,"expires_at":1598650234838},"responseType":"token id_token"}}"
     * */

    public function registration()
    {
        if (Session::get('auth')) {
            $this->redirect();
        }

        /*$this->view->setJs(['main']);*/
        $this->view->assign('title', 'Sign Up');

        if ($this->getInt('regs') === 1) {
            $this->view->assign('submitted_data', $_POST);

            if (!$this->getInt('time')) {
                $this->view->assign('error', 'User registration event corrupted.');
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Security time not found.')));
                $this->view->render('registration', 'Register');
                exit;
            }
            if (!$this->getSql('first-name')) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s first name not found.')));
                $this->view->assign('error', 'Please enter your first name.');
                $this->view->render('registration', 'Register');
                exit;
            }

            if (!$this->getSql('last-name')) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s last name not found.')));
                $this->view->assign('error', 'Please enter your last name.');
                $this->view->render('registration', 'Register');
                exit;
            }

            if (!$this->getAlphaNum('username')) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s username not found.')));
                $this->view->assign('error', 'Please enter your username.');
                $this->view->render('registration', 'Register');
                exit;
            }

            if ($this->user->getUserName($this->getAlphaNum('username'))) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your username not available.  This user try with (username = ' . $this->getAlphaNum('username') . ')')));
                $this->view->assign('error', 'The username <b>' . $this->getAlphaNum('username') . '</b> has already exist. Please enter new one.');
                $this->view->render('registration', 'Register');
                exit;
            }

            if (!$this->validEmail($this->getWordParam('email'))) {
                $this->view->assign('error', 'Entered email address already registered. Please enter new email address.');
                $this->view->render('registration', 'Register');
                exit;
            }

            if ($this->user->getUserByEmail($this->getWordParam('email'))) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s email [' . $this->getWordParam('email') . ') is already registered.')));
                $this->view->assign('error', '<b>' . $this->getWordParam('email') . '</b> has been already registered.');
                $this->view->render('registration', 'Register');
                exit;
            }

            if (!$this->getSql('gender')) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s gender not found.')));
                $this->view->assign('error', 'Please select your gender.');
                $this->view->render('registration', 'Register');
                exit;
            }

            if (!$this->getSql('password')) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s password not found.')));
                $this->view->assign('error', 'Please enter your password.');
                $this->view->render('registration', 'Register');
                exit;
            }

            if (!$this->getWordParam('c_password')) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s confirm password not found.')));
                $this->view->assign('error', 'Please enter your confirm password.');
                $this->view->render('registration', 'Register');
                exit;
            }

            if ($this->getWordParam('password') !== $this->getWordParam('c_password')) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s entered password does not match.')));
                $this->view->assign('error', 'Your entered password does not match. Please enter your same password.');
                $this->view->render('registration', 'Register');
                exit;
            }

            if (!$this->getWordParam('dateOfBirth')) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s date of birth not found.')));
                $this->view->assign('error', 'Please fil out your date of birth.');
                $this->view->render('registration', 'Register');
                exit;
            }

            if (!$this->getSql('agree')) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s date of birth not found.')));
                $this->view->assign('error', 'Please accept with our terms and conditions, Privacy Policy.');
                $this->view->render('registration', 'Register');
                exit;
            }


            $this->user->addUser(
                $this->getSql('first-name'),
                $this->getSql('last-name'),
                $this->getWordParam('email'),
                $this->getAlphaNum('username'),
                $this->getSql('password'),
                $this->getWordParam('dateOfBirth'),
                $this->getSql('gender')
            );

            $username = $this->user->getUserByUsername($this->getAlphaNum('username'));

            if (!$username) {
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s registration could not Complete.')));
                $this->view->assign('error', 'Registration could not Complete.');
                $this->view->render('registration', 'Register');
                exit;
            }

            $this->view->assign('submitted_data', false);
            $this->view->assign('success', 'New user <b>' . $this->getSql('first-name') .
                '</b> has been registered successfully and we send an email to your email address <b>' .
                $this->getWordParam('email') . '</b>. Receive the mail and active your valuable account.');

            Mail::send(json_encode([
                    'config' => [
                        'server' => 'smtp.gmail.com',
                        'port' => 587,
                        'email' => 'sopnomon96@gmail.com',
                        'password' => 'AP17011996',
                    ],
                    'sender' => [
                        'name' => 'Support Center',
                        'email' => 'support@mishusoft.com'
                    ],
                    'reply' => [
                        'name' => 'Support Center',
                        'email' => 'support@mishusoft.com'
                    ],
                    'receiver' => [
                        'name' => $this->getSql('first-name') . ' ' . $this->getSql('last-name'),
                        'email' => $this->getWordParam('email')
                    ],
                    'mail' => [
                        'subject' => 'Active your account',
                        'body' => 'Hello <strong>' . $this->getSql('first-name') . ' ' . $this->getSql('last-name') . '</strong> .' .
                            '<p> You have been recently created a account in <strong>' . Memory::getConstant('DEFAULT_APP_COMPANY_NAME') . '</strong>. But ' .
                            'your account inactive now and it will be inactive until activation of your account. ' .
                            'So your must need active your account for use it and enjoy our all facilities. ' .
                            '<a href = "' . BaseURL . 'user/membershipActivation/' . Encryption::static($username['id']) . '/' . Encryption::static($username['code']) .
                            '">' . BaseURL . 'user/membershipActivation/' . Encryption::static($username['id']) . '/' . Encryption::static($username['code']) .
                            '</a>.</p>',
                        'altbody' => '<p>Service Provider could not support HTML.</p>'
                    ]
                ]), $this->view);
            //$this->redirect('user/reg/next');
        }


        $this->view->render('registration', 'Register');
    }

    public function registrationValidation()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (is_object($data)) {
            if (empty($data->security_code) or $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'User registration error.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Security code not found.')));
                exit;
            }
            if (empty($data->patch) or $data->patch !== '1') {
                echo json_encode(['type' => 'error', 'message' => 'Unauthorized registration.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Security patch not found.')));
                exit;
            }
            if (empty($data->time)) {
                echo json_encode(['type' => 'error', 'message' => 'User registration event corrupted.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Security time not found.')));
                exit;
            }

            if (empty($this->getSqlText($data->firstName))) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out your first name.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s first name not found.')));
                exit;
            }

            if (empty($this->getSqlText($data->lastName))) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out your last name.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s last name not found.')));
                exit;
            }

            if (empty($this->getSqlText($data->username))) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out your username.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s username not found.')));
                exit;
            }

            if (empty($this->getSqlText($data->gender))) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out your gender.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s gender not found.')));
                exit;
            }

            if (empty($data->password)) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out your password.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s password not found.')));
                exit;
            }

            if (empty($data->confirmPassword)) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out your confirm password.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s confirm password not found.')));
                exit;
            }

            if ($data->password !== $data->confirmPassword) {
                echo json_encode(['type' => 'error', 'message' => 'Your entered password does not match. Please enter your same password.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s entered password does not match.')));
                exit;
            }

            if (empty($this->getSqlText($data->dateOfBirth))) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out your date of birth.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s date of birth not found.')));
                exit;
            }

            if (!$data->agree) {
                echo json_encode(['type' => 'error', 'message' => 'Please accept with our terms and conditions, Privacy Policy.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s date of birth not found.')));
                exit;
            }

            if ($this->user->getUserName($this->getSqlText($data->username))) {
                echo json_encode(['type' => 'error', 'message' => 'Your username [<span style="font-weight:bold;">' . $this->getSqlText($data->username) . '</span>] not available.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your username not available.  This user try with (username = ' . $this->getSqlText($data->username) . ')')));
                exit;
            }

            if ($this->user->getUserByEmail($this->getSqlText($data->email))) {
                echo json_encode(['type' => 'error', 'message' => 'Your email [<span style="font-weight:bold;">' . $this->getSqlText($data->email) . '</span>] is already registered.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s email [' . $this->getSqlText($data->email) . ') is already registered.')));
                exit;
            }

            $this->user->addUser(
                $this->getSqlText($data->firstName),
                $this->getSqlText($data->lastName),
                $this->getSqlText($data->email),
                $this->getSqlText($data->username),
                $data->password,
                $this->getSqlText($data->dateOfBirth),
                $this->getSqlText($data->gender)
            );
            $user = $this->user->getUserByUsername($this->getSqlText($data->username));

            if (!$user) {
                echo json_encode(['type' => 'error', 'message' => 'Registration could not Complete.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s registration could not Complete.')));
                exit;
            }

            Mail::send(json_encode(
                [
                    'config' => [
                        'server' => 'smtp.gmail.com',
                        'port' => 587,
                        'email' => 'sopnomon96@gmail.com',
                        'password' => 'AP17011996',
                    ],
                    'sender' => [
                        'name' => 'Support Center',
                        'email' => 'support@mishusoft.com'
                    ],
                    'reply' => [
                        'name' => 'Support Center',
                        'email' => 'support@mishusoft.com'
                    ],
                    'receiver' => [
                        'name' => $this->getSqlText($data->firstName) . ' ' . $this->getSqlText($data->lastName),
                        'email' => $this->getSqlText($data->email)
                    ],
                    'mail' => [
                        'subject' => 'Active your account',
                        'body' => 'Hello <strong>' . $this->getSqlText($data->firstName) . ' ' . $this->getSqlText($data->lastName) . '</strong> .' .
                            '<p> You have been recently created a account in <strong>' . Memory::getConstant('DEFAULT_APP_COMPANY_NAME') . '</strong>. But ' .
                            'your account inactive now and it will be inactive until activation of your account. ' .
                            'So your must need active your account for use it and enjoy our all facilities. ' .
                            '<a href = "' . BaseURL . 'user/membershipActivation/' . Encryption::static($user['id']) . '/' . Encryption::static($user['code']) .
                            '">' . BaseURL . 'user/membershipActivation/' . Encryption::static($user['id']) . '/' . Encryption::static($user['code']) .
                            '</a>.</p>',
                        'altbody' => '<p>Service Provider could not support HTML.</p>'
                    ]
                ]
            ));

            echo json_encode(['type' => 'success', 'message' => 'New user <b>' . $this->getSqlText($data->firstName) . '</b> has been registered successfully and we send an email to your email address <b>' .
                $this->getSqlText($data->email) . '</b>. Receive the mail and active your valuable account.']);
            /*//Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'New user <b>' . $this->getSqlText($data->firstName) .
                '</b> has been registered successfully and we send an email to your email address <b>' .
                $this->getSqlText($data->email) . '</b>. Receive the mail and active your valuable account.')));*/
            exit;
        }
    }

    public function next()
    {
        /*start test coding*/
        $image = '';

        if (isset($_FILES['image']['name'])) {
            $media = MS_DOCUMENT_ROOT . 'public' . DS . 'media' . DS . 'uploads' . DS;
            $upload = new upload($_FILES['image']);
            $upload->allowed = ['image/*'];
            //$upload->file_new_name_body = 'upl_' . uniqid();
            $upload->process($media);

            if ($upload->processed) {
                $image = $upload->file_dst_name;
                $thumb = new upload($upload->file_dst_pathname);
                $thumb->image_resize = true;
                $thumb->image_x = 100;
                $thumb->image_y = 70;
                $thumb->file_name_body_pre = 'thumb_';
                $thumb->process($media . 'thumbs' . DS);
            } else {
                $this->view->assign('error', $upload->error);
                $this->view->render('next', 'Register');
                exit;
            }
        }

        $this->view->assign('title', 'Complete your profile!');
        $this->view->render('next', 'Register');
    }

    public function membershipActivation($id, $code)
    {
        $this->view->assign('title', 'Account activation');
        if (!$this->filterInt(Decryption::static($id)) || !$this->filterInt(Decryption::static($code))) {
            $this->view->assign('error', 'This code <strong>' . $this->filterInt($code) . '</strong> of active <strong>' . $this->filterInt($id) . '<strong> account does not exist.');
            $this->view->render('membershipActivation', 'Registration');
            exit;
        }

        $row = $this->user->getUserStatusByIdCode($this->filterInt(Decryption::static($id)), $this->filterInt(Decryption::static($code)));
        if (!$row) {
            $this->view->assign('error', 'Requested account does not exist.');
            $this->view->render('membershipActivation', 'Registration');
            exit;
        }

        if ($row['status'] === 1) {
            $this->view->assign('error', 'This user already activated.');
            $this->view->render('membershipActivation', 'Registration');
            exit;
        }

        $this->user->activeUser($this->filterInt(Decryption::static($id)), $this->filterInt(Decryption::static($code)));
        $row = $this->user->getUserByIdCode($this->filterInt(Decryption::static($id)), $this->filterInt(Decryption::static($code)));
        if ($row['status'] === 0) {
            $this->view->assign('error', 'Failed to active the <b>' . $row['f_name'] . ' ' . $row['l_name']  . '</b> user\' account.');
            $this->view->render('membershipActivation', 'Registration');
            exit;
        }

        $this->view->assign('success', 'New user <b>' . $row['f_name'] . ' ' . $row['l_name'] . '</b> has been activated successfully.');
        $this->view->render('membershipActivation', 'Registration');
    }

    public function pswrdRecovery()
    {
        if (Session::get('auth')) {
            $this->redirect();
        }

        /*$this->view->setJs(['main']);*/
        $this->view->assign('title', 'Password recovery');
        $this->view->render('pswrdRecovery', 'Password recovery');
    }

    public function passwordRecoveryValidation()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (is_object($data)) {
            if (empty($data->security_code) or $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'User\'s password recovery error.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Security code not found.')));
                exit;
            }
            if (empty($data->patch) or $data->patch !== '1') {
                echo json_encode(['type' => 'error', 'message' => 'Unauthorized activity.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Security patch not found.')));
                exit;
            }
            if (empty($data->time)) {
                echo json_encode(['type' => 'error', 'message' => 'User activity event corrupted.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Security time not found.')));
                exit;
            }

            if (!empty($this->getSqlText($data->username))) {
                if ($this->user->getUserName($this->getSqlText($data->username))) {
                    $user = $this->user->getUserByUsername($this->getSqlText($data->username));
                    Mail::send(json_encode(
                        [
                            'config' => [
                                'server' => 'smtp.gmail.com',
                                'port' => 587,
                                'email' => 'sopnomon96@gmail.com',
                                'password' => 'AP17011996',
                            ],
                            'sender' => [
                                'name' => 'Support Center',
                                'email' => 'support@mishusoft.com'
                            ],
                            'reply' => [
                                'name' => 'Support Center',
                                'email' => 'support@mishusoft.com'
                            ],
                            'receiver' => [
                                'name' => $user['f_name'] . ' ' . $user['l_name'],
                                'email' => $user['email']
                            ],
                            'mail' => [
                                'subject' => 'Active your account',
                                'body' => 'Hello <strong>' . $user['f_name'] . ' ' . $user['l_name'] . '</strong> .' .
                                    '<p> You have been request to reset your password. Click to the following link to reset your password.' .
                                    '<a href = "' . BaseURL . 'user/resetpassword/' . Encryption::static($user['id']) . '/' . Encryption::static($user['code']) .
                                    '">' . BaseURL . 'user/resetpassword/' . Encryption::static($user['id']) . '/' . Encryption::static($user['code']) .
                                    '</a>.</p>',
                                'altbody' => '<p>Service Provider could not support HTML.</p>'
                            ]
                        ]
                    ));

                    echo json_encode(['type' => 'success', 'message' => 'We send an email to your email address (<b>' . $user['email'] . '</b>). Please check your mail inbox and active your valuable account.']);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'We send an email to your email address (<b>' . $user['email'] . '</b>). Please check your mail inbox and active your valuable account.')));
                    exit;
                } else {
                    echo json_encode(['type' => 'error', 'message' => 'Your username [<span class="font-weight-bold">' . $this->getSqlText($data->username) . '</span>] is not registered.']);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your username not registered.  This user try with (username = ' . $this->getSqlText($data->username) . ')')));
                    exit;
                }
            }

            if (!empty($this->getSqlText($data->email))) {
                if (!$this->validEmail($this->getSqlText($data->email))) {
                    echo json_encode(['type' => 'error', 'message' => 'Incorrect e-mail address. Please try again with correct e-mail address.']);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Incorrect e-mail address.  This user try with (email = ' . $this->getSqlText($data->email) . ')')));
                    exit;
                }
                if ($this->user->verifyEmail($this->getSqlText($data->email))) {
                    $user = $this->user->getUserByEmail($this->getSqlText($data->email));
                    Mail::send(json_encode(
                        [
                            'config' => [
                                'server' => 'smtp.gmail.com',
                                'port' => 587,
                                'email' => 'sopnomon96@gmail.com',
                                'password' => 'AP17011996',
                            ],
                            'sender' => [
                                'name' => 'Support Center',
                                'email' => 'support@mishusoft.com'
                            ],
                            'reply' => [
                                'name' => 'Support Center',
                                'email' => 'support@mishusoft.com'
                            ],
                            'receiver' => [
                                'name' => $user['f_name'] . ' ' . $user['l_name'],
                                'email' => $user['email']
                            ],
                            'mail' => [
                                'subject' => 'Active your account',
                                'body' => 'Hello <strong>' . $user['f_name'] . ' ' . $user['l_name'] . '</strong> .' .
                                    '<p> You have been request to reset your password. Click to the following link to reset your password.' .
                                    '<a href = "' . BaseURL . 'user/resetpassword/' . Encryption::static($user['id']) . '/' . Encryption::static($user['code']) .
                                    '">' . BaseURL . 'user/resetpassword/' . Encryption::static($user['id']) . '/' . Encryption::static($user['code']) .
                                    '</a>.</p>',
                                'altbody' => '<p>Service Provider could not support HTML.</p>'
                            ]
                        ]
                    ));

                    echo json_encode(['type' => 'success', 'message' => 'We send an email to your email address (<b>' . $user['email'] . '</b>). Please check your mail inbox and active your valuable account.']);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'We send an email to your email address (<b>' . $user['email'] . '</b>). Please check your mail inbox and active your valuable account.')));
                    exit;
                } else {
                    echo json_encode(['type' => 'error', 'message' => 'Your email [<span class="font-weight-bold">' . $this->getSqlText($data->email) . '</span>] is not registered.']);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your email not registered.  This user try with (email = ' . $this->getSqlText($data->email) . ')')));
                    exit;
                }
            }
        }
    }

    public function resetpassword($id, $code)
    {
        $this->view->assign('title', 'Set New Password');
        if (Session::get('auth')) {
            $this->redirect();
        }

        if (!$this->filterInt(Decryption::static($id)) || !$this->filterInt(Decryption::static($code))) {
            $this->view->assign('error', 'Invalid request.');
            $this->view->render('resetpassword', 'Register');
            exit;
        }

        $user = $this->user->getUserStatusByIdCode($this->filterInt(Decryption::static($id)), $this->filterInt(Decryption::static($code)));

        if (!$user) {
            $this->view->assign('error', 'Requested account does not exist.');
            $this->view->render('resetpassword', 'Register');
            exit;
        }

        /*$this->view->setJs(['main']);*/
        $this->view->assign('userId', $id);
        $this->view->render('resetpassword', 'Register');
    }

    public function newPasswordValidation()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (is_object($data)) {
            if (empty($data->security_code) or $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'User new password setting error.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Security code not found.')));
                exit;
            }
            if (empty($data->patch) or $data->patch !== '1') {
                echo json_encode(['type' => 'error', 'message' => 'Unauthorized activity.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Security patch not found.')));
                exit;
            }
            if (empty($data->time)) {
                echo json_encode(['type' => 'error', 'message' => 'User activity event corrupted.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Security time not found.')));
                exit;
            }

            if (empty($data->userId)) {
                echo json_encode(['type' => 'error', 'message' => 'Invalid request.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s id not found.')));
                exit;
            }

            if (empty($data->password)) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out your password.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s password not found.')));
                exit;
            }

            if (empty($data->confirmPassword)) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out your confirm password.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s confirm password not found.')));
                exit;
            }

            if ($data->password !== $data->confirmPassword) {
                echo json_encode(['type' => 'error', 'message' => 'Your entered password does not match. Please enter your same password.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'User\'s entered password does not match.')));
                exit;
            }

            $this->user->setNewPassword($this->filterInt(Decryption::static($data->userId)), $data->password);
            echo json_encode(['type' => 'success', 'message' => 'New password set successfully.']);
            //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'New password set successfully.')));
            exit;
        }
    }

    public function logout()
    {
        /*$log = $this->user->userNewLog(Session::get('id_user'), 'LOGOUT');
        if ($log) {Session::destroy();$this->redirect();}*/
        Session::destroy();
        $this->redirect();
    }

    public function checkValidUsername()
    {
        if (!$this->getAlphaNum('username')) {
            echo json_encode([
                [
                    'type' => 'error',
                    'message' => 'Please fil out your username.',
                ],
            ]);
            exit;
        }
        if ($this->user->getUserName($this->getAlphaNum('username'))) {
            echo json_encode([
                [
                    'type' => 'error',
                    'message' => 'The username <b>' . $this->getAlphaNum('username') . '</b> has already exist. Please enter new one.',
                ],
            ]);
            exit;
        }

        echo json_encode([
            [
                'type' => 'success',
                'message' => '<b>' . $this->getAlphaNum('username') . '</b> is available',
            ],
        ]);
        exit;
    }

    public function checkValidEmailAddress()
    {
        if (!$this->getWordParam('email')) {
            echo json_encode([
                [
                    'type' => 'error',
                    'message' => 'Please fil out your email address.',
                ],
            ]);
            exit;
        }


        if (!$this->validEmail($this->getWordParam('email'))) {
            echo json_encode([
                [
                    'type' => 'error',
                    'message' => 'User\'s email address (' . $this->getWordParam('email') . ') is  not valid.',
                ],
            ]);
            exit;
        }

        if ($this->user->verifyEmail($this->getWordParam('email'))) {
            echo json_encode([
                [
                    'type' => 'error',
                    'message' => 'User\'s email address (' . $this->getWordParam('email') . ')  already registered. Please enter new email address.',
                ],
            ]);
            exit;
        }


        if (strlen($this->getWordParam('email')) <= 14) {
            echo json_encode([
                [
                    'type' => 'error',
                    'message' => 'User\'s email address (' . $this->getWordParam('email') . ') is  not valid. Your email address must be at least 14 characters long.',
                ],
            ]);
            exit;
        }

        echo json_encode([
            [
                'type' => 'success',
                'message' => '<b>' . $this->getWordParam('email') . '</b> is available',
            ],
        ]);
        exit;
    }

    public function activities()
    {
        $this->acl->access('edit_user_activities');
        ////Tracker::addEvent(array('activity' => array('messageType' => 'success','message' => 'Navigate to users page successfully')));

        $pagination = new Pagination();
        $this->view->assign('activities', $pagination->pager($this->user->notificationsAll()));
        $this->view->assign('pagination', $pagination->getView('ajax'));

        /*$this->view->setJs(['main']);*/
        $this->view->assign('title', 'User Activities');
        $this->view->render('activities', 'User Activities');
    }

    public function activitiesPaginationAJAX()
    {
        $page = $this->getInt('page');

        $pagination = new Pagination();
        $this->view->assign('activities', $pagination->pager($this->user->notificationsAll(), $page));
        $this->view->assign('pagination', $pagination->getView('ajax'));
        $this->view->render('activities_p_ajax', false, true);
    }

    public function checkLogStatus()
    {
        if (Session::get('auth')) {
            echo 1;
        } else {
            echo 0;
        }
    }

    private function mail()
    {
        echo 'Mail testing!!! <br/>';

        /* if (!isset($_SESSION)) {
             session_start();

         }*/

        Mail::send(json_encode(
            [
                'config' => [
                    'server' => 'smtp.gmail.com',
                    'port' => 587,
                    'email' => 'sopnomon96@gmail.com',
                    'password' => 'AP17011996',
                ],
                'sender' => [
                    'name' => 'Support Center',
                    'email' => 'support@mishusoft.com'
                ],
                'reply' => [
                    'name' => 'Support Center',
                    'email' => 'support@mishusoft.com'
                ],
                'receiver' => [
                    'name' => 'Abir Ahamed',
                    'email' => 'mrabir.ahamed@gmail.com'
                ]
            ]
        ));
    }
}
