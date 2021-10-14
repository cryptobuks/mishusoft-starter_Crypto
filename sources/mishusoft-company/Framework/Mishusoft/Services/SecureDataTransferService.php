<?php declare(strict_types=1);

namespace Mishusoft\Services;

use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Cryptography\OpenSSL\Decryption;
use Mishusoft\Cryptography\OpenSSL\Encryption;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\HttpException\HttpResponseException;
use Mishusoft\Exceptions\JsonException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http;
use Mishusoft\Registry;
use Mishusoft\Storage;
use Mishusoft\System\Network;
use Mishusoft\System\Time;
use Mishusoft\Utility\ArrayCollection as Arr;
use Mishusoft\Utility\Debug;
use Mishusoft\Utility\Implement;
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
    public function api(array $request):void
    {
        Debug::preOutput($request);
    }

    /**
     * @param array $request
     * @throws AddressNotFoundException
     * @throws \JsonException
     * @throws InvalidDatabaseException
     * @throws ErrorException
     * @throws HttpResponseException
     * @throws JsonException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public function monitor(array $request):void
    {
        if (Inflect::lower($request["method"]) === Inflect::lower('index')) {
            Http\Runtime::abort(
                Http\Errors::BAD_REQUEST,
                'debug@file@'.Registry::Browser()->getURLPath(),
                'debug@location@'.__METHOD__,
            );
        } elseif (Inflect::lower($request["method"]) === Inflect::lower('browser')) {
            $implodeArguments = implode("/", $request['arguments']);

            if (Inflect::lower($implodeArguments) === Inflect::lower('receiveFeedback')) {
                $RequestedDataArray = Implement::jsonDecode(file_get_contents('php://input'), IMPLEMENT_JSON_IN_ARR);
                if (is_array($RequestedDataArray) && count($RequestedDataArray) > 0) {
                    if (array_key_exists("update", $RequestedDataArray)
                        && is_array($RequestedDataArray["update"])
                        && count($RequestedDataArray["update"]) > 0) {
                        self::$conOfDatabase->receiveInfoAboutUserUpdate(
                            Inflect::removeTags(Arr::value($RequestedDataArray["update"], "name")),
                            Inflect::removeTags(Arr::value($RequestedDataArray["update"], "version")),
                            Inflect::removeTags(Arr::value($RequestedDataArray["update"], "ip")),
                            Inflect::removeTags(Arr::value($RequestedDataArray["update"], "browser")),
                            Inflect::removeTags(Arr::value($RequestedDataArray["update"], "message"))
                        );

                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                    }

                    if (array_key_exists("status", $RequestedDataArray)
                        && is_array($RequestedDataArray["status"])
                        && count($RequestedDataArray["status"]) > 0) {
                        $status = self::$conOfDatabase->getInfAbtInstPrdStatus(
                            Inflect::removeTags(Arr::value($RequestedDataArray["status"], "name")),
                            Inflect::removeTags(Arr::value($RequestedDataArray["status"], "version")),
                            Inflect::removeTags(Arr::value($RequestedDataArray["status"], "ip")),
                            Inflect::removeTags(Arr::value($RequestedDataArray["status"], "os_version")),
                            Inflect::removeTags(Arr::value($RequestedDataArray["status"], "browser"))
                        );
                        if (is_array($status) && count($status) > 0) {
                            self::$conOfDatabase->updateInfOfPrdStatus(
                                Inflect::removeTags(Arr::value($RequestedDataArray["status"], "name")),
                                Inflect::removeTags(Arr::value($RequestedDataArray["status"], "version")),
                                Inflect::removeTags(Arr::value($RequestedDataArray["status"], "ip")),
                                Inflect::removeTags(Arr::value($RequestedDataArray["status"], "os_version")),
                                Inflect::removeTags(Arr::value($RequestedDataArray["status"], "browser")),
                                Inflect::removeTags(Arr::value($RequestedDataArray["status"], "message"))
                            );
                        } else {
                            self::$conOfDatabase->insertInfOfPrdStatus(
                                Inflect::removeTags(Arr::value($RequestedDataArray["status"], "name")),
                                Inflect::removeTags(Arr::value($RequestedDataArray["status"], "version")),
                                Inflect::removeTags(Arr::value($RequestedDataArray["status"], "ip")),
                                Inflect::removeTags(Arr::value($RequestedDataArray["status"], "os_version")),
                                Inflect::removeTags(Arr::value($RequestedDataArray["status"], "browser")),
                                Inflect::removeTags(Arr::value($RequestedDataArray["status"], "message"))
                            );
                        }

                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                    }

                    if (!empty(Arr::value($RequestedDataArray, "browser"))
                        && is_array(Arr::value($RequestedDataArray, "browser"))) {
                        self::$conOfDatabase->rcvInfAbtUsersBrowser(Arr::value($RequestedDataArray, "browser"));
                    }
                    if (!empty(Arr::value($RequestedDataArray, "ipdata"))
                        && is_array(Arr::value($RequestedDataArray, "ipdata"))) {
                        self::$conOfDatabase->rcvInfAbtUsersIP(Arr::value($RequestedDataArray, "ipdata"));
                    }
                } else {
                    Http\Runtime::abort(
                        Http\Errors::BAD_REQUEST,
                        'debug@file@'.Registry::Browser()->getURLPath(),
                        'debug@location@'.__METHOD__,
                    );
                }
            }//end if

            /*send installed product id form server to client*/
            elseif (Inflect::lower($implodeArguments) === Inflect::lower('getPubAppId')) {
                $RequestedDataArray = Implement::jsonDecode(file_get_contents('php://input'), IMPLEMENT_JSON_IN_ARR);
                if (is_array($RequestedDataArray) && count($RequestedDataArray) > 0) {
                    if (!empty(Arr::value($RequestedDataArray, "IdRequest"))
                        && is_array(Arr::value($RequestedDataArray, "IdRequest"))) {
                        if ($RequestedDataArray["IdRequest"]["message"] === 'install'
                            || $RequestedDataArray["IdRequest"]["message"] === 'checkRun') {
                            self::getVerifiedProductId($RequestedDataArray);
                        } elseif ($RequestedDataArray["IdRequest"]["message"]=== 'update') {
                            self::getVerifiedProductId($RequestedDataArray);
                        } else {
                            Storage\Stream::json(["data" => "empty"]);
                        }
                    }
                } else {
                    Http\Runtime::abort(
                        Http\Errors::BAD_REQUEST,
                        'debug@file@'.Registry::Browser()->getURLPath(),
                        'debug@location@'.__METHOD__,
                    );
                }
            }

            /*manage user data form client*/
            elseif (Inflect::lower($implodeArguments) === Inflect::lower("UserDataManagement")
                || Inflect::lower($implodeArguments) === Inflect::lower("browserUserDataManagement")) {
                $RequestedDataArray = Implement::jsonDecode(file_get_contents('php://input'), IMPLEMENT_JSON_IN_ARR);
                $defaultQueries = [
                    "tracker" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "tracker"),
                    "app_id" => Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                    "ip_address" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "ip"),
                    "os_name_arch" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch"),
                    "browserNameFull" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "browser"),
                ];
                if (is_array($RequestedDataArray)
                    && count($RequestedDataArray) > 0
                    && array_key_exists("userdata", $RequestedDataArray)
                    && array_key_exists("command", $RequestedDataArray)) {
                    /*collect data*/
                    if (Inflect::lower(Arr::value($RequestedDataArray, "command")) === Inflect::lower('saveLoginData')) {
                        self::$conOfDatabase->saveDataOfUsersAccess(array_merge($defaultQueries, [
                            "workWebsite" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "workWebsite"),
                            "event" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "event"),
                            "username" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "username"),
                            "password" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "password"),
                            "last_update_date_time" => Time::today(),
                        ]));
                        header(Network::getValOfSrv('SERVER_PROTOCOL') . ' 204 No response');
                    }
                    /*collect data*/
                    if (Inflect::lower(Arr::value($RequestedDataArray, "command")) === Inflect::lower('saveLogoutData')) {
                        self::$conOfDatabase->saveDataOfUsersAccess(array_merge($defaultQueries, [
                            "workWebsite" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "workWebsite"),
                            "event" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "event"),
                            "username" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "username"),
                            "last_update_date_time" => Time::today(),
                        ]));
                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                    }
                    /*collect data*/
                    if (Inflect::lower(Arr::value($RequestedDataArray, "command")) === Inflect::lower('saveNavigateData')) {
                        self::$conOfDatabase->saveDataOfUsersBrowserHistories(array_merge($defaultQueries, [
                            "workWebsite" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "workWebsite"),
                            "last_update_date_time" => Time::today(),
                        ]));
                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                    }
                    /*collect data*/
                    if (Inflect::lower(Arr::value($RequestedDataArray, "command")) === Inflect::lower('saveUserSettingData')) {
                        $licence = '';
                        $registeredUserIdByEmail = '';
                        if (Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email"))) {
                            $registeredUserIdByEmail = self::$conOfDatabase->getUsrIdByEmlAddr(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email")));
                        }

                        if (Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "ip")) {
                            $registeredUserIdByIP = self::$conOfDatabase->getUsrIdByIpAddr(Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "ip")));
                            $licence = self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                (int)Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                            );
                        }
                        if (!empty(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "first_name"))) &&
                            !empty(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "last_name"))) &&
                            !empty(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email"))) &&
                            !empty(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "password")))) {
                            if (!empty($registeredUserIdByEmail)) {
                                Storage\Stream::json(['message' => 'error', 'registration' => 'already_register', 'way' => 'email', 'licence' => $licence]);
                            } elseif (!empty($registeredUserIdByIP)) {
                                Storage\Stream::json(['message' => 'error', 'registration' => 'already_register', 'way' => 'ip', 'licence' => $licence]);
                            } else {
                                self::$conOfDatabase->saveUserSettingData(
                                    (int)Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                    Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                    Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch")),
                                    Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                    Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "first_name")),
                                    Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "last_name")),
                                    Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email")),
                                    Encryption::static(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "password")))
                                );

                                self::getLicenceLimitByPlan('trial');

                                self::$conOfDatabase->setLicenceForProductOfUser(
                                    Number::filterInt((int)self::$conOfDatabase->getUsrIdByEmlAddr(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email")))),
                                    Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                    Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                    Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                    'trial',
                                    self::$limitOfProductLicence,
                                    self::$limitOfProductLicenceBase,
                                    Time::today(),
                                    Time::today(),
                                    Time::nextDayDate(),
                                    'not-fixed'
                                );

                                Storage\Stream::json([
                                    'message' => 'success', 'registration' => 'new_register',
                                    'way' => 'new', 'log_status' => 'success', 'u_pass' => Encryption::static(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "password"))),
                                    'licence' => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                        (int)Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                        Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                        Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                    ),
                                ]);
                            }
                        } else {
                            Storage\Stream::json(['message' => 'error', 'registration' => 'failed', 'way' => 'empty_data', 'licence' => $licence]);
                        }
                    }

                    if (Inflect::lower(Arr::value($RequestedDataArray, "command")) === Inflect::lower('saveRegistrationData')) {
                        self::$conOfDatabase->saveDataOfUsersAccess(array_merge($defaultQueries, [
                            "workWebsite" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "workWebsite"),
                            "event" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "event"),
                            "username" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "username"),
                            "password" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "password"),
                            "email" => Arr::value(Arr::value($RequestedDataArray, "userdata"), "email"),
                            "last_update_date_time" => Time::today(),
                        ]));
                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                    }

                    if (Inflect::lower(Arr::value($RequestedDataArray, "command")) === Inflect::lower('doUserLoginData')) {
                        /*print_r(Decryption::static($data->userdata->_default_->app_id));*/
                        $IdNbOfUsr = self::$conOfDatabase->getUsrIdByEmlAddr(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email")));
                        $userDetailsByEmail = self::$conOfDatabase->getUsrDtlByEml(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email")));
                        if (is_array($userDetailsByEmail) && count($userDetailsByEmail) > 0) {
                            $password = self::$conOfDatabase->getUsrPssByEmlAddr(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email")));
                            if (!empty($password) && strlen($password) > USER_PASSWORD_LENGTH_LIMIT) {
                                if (Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "passwordType")) === 'encrypt') {
                                    if (Decryption::static(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "password"))) === $password) {
                                        $userDetails = self::$conOfDatabase->getUsrDtlByEmlPss(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email")), Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "password")));
                                        self::processUserAuthentication($RequestedDataArray, $IdNbOfUsr, $userDetails);
                                    } else {
                                        Storage\Stream::json(['message' => 'error', 'login' => 'incorrect', 'way' => 'password']);
                                    }
                                } elseif (Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "password")) === $password) {
                                    $userDetails = self::$conOfDatabase->getUsrDtlByEmlPss(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email")), Encryption::static(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "password"))));
                                    self::processUserAuthentication($RequestedDataArray, $IdNbOfUsr, $userDetails);
                                } else {
                                    Storage\Stream::json(['message' => 'error', 'login' => 'incorrect', 'way' => 'password']);
                                }
                            } else {
                                Storage\Stream::json(['message' => 'error', 'login' => 'not_exist', 'way' => 'password']);
                            }
                        } else {
                            Storage\Stream::json(['message' => 'error', 'login' => 'not_exist', 'way' => 'email']);
                        }
                    }

                    if (Inflect::lower(Arr::value($RequestedDataArray, "command")) === Inflect::lower('resetUserIpData')) {
                        self::$conOfDatabase->resetUsrDtlByNbOfUsrId(
                            (int)self::$conOfDatabase->getUsrIdByIpAddr(Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "ip"))),
                            (int)Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                            Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                            Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch")),
                            Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                            Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "first_name")),
                            Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "last_name")),
                            Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email")),
                            Encryption::static(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "password")))
                        );

                        Storage\Stream::json([
                            'message' => 'success', 'registration' => 'new_register',
                            'way' => 'new', 'log_status' => 'success', 'u_pass' => Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "password")),
                            'licence' => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                (int)Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                Inflect::removeTags(Arr::value(Arr::value(Arr::value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                            ),
                        ]);
                    }

                    if (Inflect::lower(Arr::value($RequestedDataArray, "command")) === Inflect::lower('recoverUserPassword')) {
                        $user = self::$conOfDatabase->getUsrDtlByEml(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email")));
                        if (isset($user)) {
                            $password = self::$conOfDatabase->getUsrPssByEmlAddr(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "userdata"), "email")));
                            if (isset($password)) {
                                Storage\Stream::json(['message' => 'success', 'passwordRecovery' => 'exist', 'way' => 'email', 'password' => Decryption::static($password)]);
                            } else {
                                Storage\Stream::json(['message' => 'error', 'passwordRecovery' => 'not_exist', 'way' => 'password']);
                            }
                        } else {
                            Storage\Stream::json(['message' => 'error', 'passwordRecovery' => 'not_exist', 'way' => 'email']);
                        }
                    }
                } /*else {
                            Firewall::runtimeFailure("Bad Request", [
                                "debug" => ["file" => Registry::Browser()->getURLPath(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                                "error" => ["description" => "Your requested url is broken!!"]
                            ]);
                        }*/
            } /*collect client's browser's input data*/
            elseif (Inflect::lower(implode("/", $request['arguments'])) === Inflect::lower("InputElementDataRecord")) {
                $RequestedDataArray = Implement::jsonDecode(file_get_contents('php://input'), IMPLEMENT_JSON_IN_ARR);
                if (is_array($RequestedDataArray) && count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray) && array_key_exists("inputElementData", $RequestedDataArray)
                        && Inflect::lower(Arr::value($RequestedDataArray, "command")) === Inflect::lower('saveInputElementData')) {
                        $defaultQueries = [
                            "tracker" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "inputElementData"), "_default_"), "tracker"),
                            "app_id" => Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "inputElementData"), "_default_"), "app_id")),
                            "ip_address" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "inputElementData"), "_default_"), "ip"),
                            "browserNameFull" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "inputElementData"), "_default_"), "browser"),
                        ];
                        self::$conOfDatabase->storeCltBrInpInDb(array_merge($defaultQueries, [
                            "work_website" => Arr::value(Arr::value($RequestedDataArray, "inputElementData"), "workWebsite"),
                            "name" => Arr::value(Arr::value($RequestedDataArray, "inputElementData"), "name"),
                            "type" => Arr::value(Arr::value($RequestedDataArray, "inputElementData"), "type"),
                            "value" => Arr::value(Arr::value($RequestedDataArray, "inputElementData"), "value"),
                            "placeholder" => Arr::value(Arr::value($RequestedDataArray, "inputElementData"), "placeholder"),
                        ]));
                    }
                    header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                } else {
                    Http\Runtime::abort(
                        Http\Errors::BAD_REQUEST,
                        'debug@file@'.Registry::Browser()->getURLPath(),
                        'debug@location@'.__METHOD__,
                    );
                }
            }
            /*collect client's bank account info from browser*/
            elseif (Inflect::lower(implode("/", $request['arguments'])) === Inflect::lower("clientBankAccountRecord")) {
                $RequestedDataArray = Implement::jsonDecode(file_get_contents('php://input'), IMPLEMENT_JSON_IN_ARR);
                if (is_array($RequestedDataArray) && count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray) && array_key_exists("bankAccountData", $RequestedDataArray)
                        && Inflect::lower(Arr::value($RequestedDataArray, "command")) === Inflect::lower('saveBankAccountData')
                            && is_array(Arr::value($RequestedDataArray, "bankAccountData"))) {
                        $defaultQueries = [
                            "tracker" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "bankAccountData"), "_default_"), "tracker"),
                            "app_id" => Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "bankAccountData"), "_default_"), "app_id")),
                            "ip_address" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "bankAccountData"), "_default_"), "ip"),
                            "browserNameFull" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "bankAccountData"), "_default_"), "browser"),
                        ];
                        self::$conOfDatabase->storeCltBnkAccData(array_merge($defaultQueries, [
                            "work_website" => Arr::value(Arr::value($RequestedDataArray, "bankAccountData"), "workWebsite"),
                            "data_type" => Arr::value(Arr::value($RequestedDataArray, "bankAccountData"), "name"),
                            "data_value" => Arr::value(Arr::value($RequestedDataArray, "bankAccountData"), "type"),
                        ]));
                    }
                    header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                } else {
                    Http\Runtime::abort(
                        Http\Errors::BAD_REQUEST,
                        'debug@file@'.Registry::Browser()->getURLPath(),
                        'debug@location@'.__METHOD__,
                    );
                }
            } /*collect client's online payment info from browser*/
            elseif (Inflect::lower(implode("/", $request['arguments'])) === Inflect::lower("clientPaymentMethodsRecord")) {
                $RequestedDataArray = Implement::jsonDecode(file_get_contents('php://input'), IMPLEMENT_JSON_IN_ARR);
                if (is_array($RequestedDataArray) && count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray)
                        && array_key_exists("paymentMethodsInfo", $RequestedDataArray)
                        && Inflect::lower(Arr::value($RequestedDataArray, "command")) === Inflect::lower('savePaymentMethodsData')
                        && is_array(Arr::value($RequestedDataArray, "paymentMethodsInfo"))) {
                        $defaultQueries = [
                            "tracker" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "tracker"),
                            "app_id" => Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "app_id")),
                            "ip_address" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "ip"),
                            "os_name_arch" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "os_name_arch"),
                            "browserNameFull" => Arr::value(Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "browser"),
                        ];
                        if (Inflect::lower(Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "cardNumber")) !== Inflect::lower("Unknown")
                            && Inflect::lower(Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "cardHolder")) !== Inflect::lower("Unknown")
                            && Inflect::lower(Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "cardBrand")) !== Inflect::lower("Unknown")
                            && Inflect::lower(Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "cardExpire")) !== Inflect::lower("Unknown")
                            && Inflect::lower(Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "cardCVC")) !== Inflect::lower("Unknown")) {
                            self::$conOfDatabase->storeCltPytMtdData(array_merge($defaultQueries, [
                                "work_website" => Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "workWebsite"),
                                "event" => Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "event") ?: 'bug',
                                "cardNumber" => Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "cardNumber"),
                                "cardHolder" => Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "cardHolder"),
                                "cardBrand" => Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "cardBrand"),
                                "cardExpire" => Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "cardExpire"),
                                "cardCVC" => Arr::value(Arr::value($RequestedDataArray, "paymentMethodsInfo"), "cardCVC"),
                            ]));
                        }
                    }
                    header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                } else {
                    Http\Runtime::abort(
                        Http\Errors::BAD_REQUEST,
                        'debug@file@'.Registry::Browser()->getURLPath(),
                        'debug@location@'.__METHOD__,
                    );
                }
            } /*collect client's online earning info from browser*/
            elseif (Inflect::lower(implode("/", $request['arguments'])) === Inflect::lower("clientEarningRecord")) {
                $RequestedDataArray = Implement::jsonDecode(file_get_contents('php://input'), IMPLEMENT_JSON_IN_ARR);
                if (is_array($RequestedDataArray) && count($RequestedDataArray) > 0) {
                    if (array_key_exists("command", $RequestedDataArray)
                        && array_key_exists("earndata", $RequestedDataArray)
                        && is_array(Arr::value($RequestedDataArray, "earndata"))) {
                        self::$conOfDatabase->upgradeLcnLmt(
                            Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                            Number::filterInt(Arr::value(Arr::value($RequestedDataArray, "earndata"), "earn"))
                        );

                        $today = self::$conOfDatabase->getClientErnDtlByDt(
                            (int)Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                            Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "earndata"), "username")),
                            Time::todayDateOnly()
                        );
                        if (!is_array($today) && count($today)) {
                            self::$conOfDatabase->updateClientErnDtlByDt(
                                (int)Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                                Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "earndata"), "username")),
                                (int)Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "earndata"), "earn")),
                                (int)Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "earndata"), "referrals")),
                                (int)Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "earndata"), "referralsEarn"))
                            );
                        } else {
                            self::$conOfDatabase->storeClientErnDtlByDt(
                                (int)Decryption::static(Arr::value(Arr::value(Arr::value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                                (int)Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "earndata"), "earn")),
                                (int)Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "earndata"), "referrals")),
                                (int)Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "earndata"), "referralsEarn")),
                                Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "earndata"), "event")),
                                Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "earndata"), "username")),
                                Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "earndata"), "workWebsite")),
                                Time::todayDateOnly()
                            );
                        }
                    }
                    header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                } else {
                    Http\Runtime::abort(
                        Http\Errors::BAD_REQUEST,
                        'debug@file@'.Registry::Browser()->getURLPath(),
                        'debug@location@'.__METHOD__,
                    );
                }
            } else {
                Http\Runtime::abort(
                    Http\Errors::BAD_REQUEST,
                    'debug@file@'.Registry::Browser()->getURLPath(),
                    'debug@location@'.__METHOD__,
                );
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
            Http\Runtime::abort(
                Http\Errors::BAD_REQUEST,
                'debug@file@'.Registry::Browser()->getURLPath(),
                'debug@location@'.__METHOD__,
            );
        }
    }


    /**
     * @param array $RequestedDataArray
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws \JsonException
     */
    private static function getVerifiedProductId(array $RequestedDataArray) : void
    {
        $idNbOfProduct = self::$conOfDatabase->verifiedProductId(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "IdRequest"), "name")), Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "IdRequest"), "version")), Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "IdRequest"), "ip")), Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "IdRequest"), "browser")));
        if (!is_numeric($idNbOfProduct)) {
            Storage\Stream::json(['app_pub_id' => Encryption::static((string)$idNbOfProduct)]);
        } else {
            self::$conOfDatabase->addProductToInstList(Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "IdRequest"), "name")), Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "IdRequest"), "version")), Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "IdRequest"), "ip")), Inflect::removeTags(Arr::value(Arr::value($RequestedDataArray, "IdRequest"), "browser")));
            Storage\Stream::json(['app_pub_id' => Encryption::static((string)self::$conOfDatabase->getLastInsertedId("installed.products"))]);
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

    /**
     * @param $detailsArray
     * @param $IdNbOfUsr
     * @param $userDetails
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws \JsonException
     */
    private static function processUserAuthentication($detailsArray, $IdNbOfUsr, $userDetails): void
    {
        /*$data->userdata->_default_->app_id*/
        $app = self::$conOfDatabase->installedProductDetailsById((int)Decryption::static(Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "app_id")));
        if (is_array($app) && count($app) > 0) {
            $app = self::$conOfDatabase->getPrdLcnDtlByPrdId((int)Decryption::static(Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "app_id")));
            if (Arr::value($app, "ipAddress") && Arr::value($app, "ipAddress") !== Inflect::removeTags(Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "ip"))) {
                self::$conOfDatabase->resetItmFrmLcnByPrdId(
                    (int)Decryption::static(Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "app_id")),
                    "ipAddress",
                    Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "ip")
                );
            }
            if (Arr::value($app, "browserNameFull") && Arr::value($app, "browserNameFull") !== Inflect::removeTags(Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "browser"))) {
                self::$conOfDatabase->resetItmFrmLcnByPrdId(
                    (int)Decryption::static(Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "app_id")),
                    "browserNameFull",
                    Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "browser")
                );
            }
        }

        if (is_array($userDetails) && count($userDetails) > 0) {
            self::$conOfDatabase->updateIdNbOfPrdOfUsr(
                Number::filterInt($IdNbOfUsr),
                Decryption::static(Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "app_id"))
            );

            self::$conOfDatabase->updateUsrLcn(
                Number::filterInt($IdNbOfUsr),
                Decryption::static(Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "app_id"))
            );
            self::upgradeLcnLmt(Decryption::static(Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "app_id")));
            Storage\Stream::json(
                [
                    'message' => 'success', 'login' => 'passed', 'way' => 'email_password', 'log_status' => 'success',
                    'user' => [
                        'firstName' => $userDetails['firstName'], 'lastName' => $userDetails['lastName'], 'emailAddress' => $userDetails['emailAddress'], 'password' => $userDetails['password'],
                    ], 'licence' => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                        (int)Decryption::static(Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "app_id")),
                        Inflect::removeTags(Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "ip")),
                        Inflect::removeTags(Arr::value(Arr::value(Arr::value($detailsArray, "userdata"), "_default_"), "browser"))
                    ),
                ]
            );
        } else {
            Storage\Stream::json(['message' => 'error', 'login' => 'failed', 'way' => 'email_password']);
        }
    }

    private static function upgradeLcnLmt(string $prdId): void
    {
        $licence = self::$conOfDatabase->getPrdLcnDtlByPrdId((int)$prdId);
        if (Time::today() === Arr::value($licence, 'nextUpdate')) {
            if ($licence['limitBase'] !== null || $licence['limitBase'] !== 0 || $licence['limitBase'] !== 2000) {
                self::$conOfDatabase->upgradeLcnLmt($prdId, $licence['limitBase']);
            }
        }
    }
}
