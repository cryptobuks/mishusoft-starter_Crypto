<?php

/**
 * url
 * POST [HOST]/account/verification
 */

use Mishusoft\Ema\Mishusoft\Main\Databases\AccountMSQL;
use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Decryption;
use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Encryption;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Number;
use Mishusoft\Framework\Drivers\Session;
use Mishusoft\Framework\Libraries\Runtime;
use Mishusoft\Framework\Libraries\Validator;
use Mishusoft\Framework\Migration\DB;

if (count($_POST) > 0) {
    _Debug::preOutput($_POST);
    $conOfDatabase = new AccountMSQL();

    if (array_key_exists("account", $_POST)) {
        if (_Array::value($_POST, "account") === "create") {
            if (Validator::check($_POST, ["time" => "required", "create" => "required", "email" => "required", "button" => "required"])) {
                if (Validator::validEmail(_Array::value($_POST, "email"))) {
                    //_Debug::preOutput($conOfDatabase->select("system")->read("users"));
                    if ($conOfDatabase->AlreadyIn(["email" => _Array::value($_POST, "email")])) {
                        Runtime::redirect(_Array::value($_POST, "redirect") . "?error=" . Encryption::dynamic("Your email address already registered. Please enter new email address."));
                    //echo "old member";
                    } else {
                        //echo "new member";
                        if ($conOfDatabase->insertEmailOfNewUser(_Array::value($_POST, "email"))) {
                            Runtime::redirect(_Array::value($_POST, "redirect") . "?success=" . Encryption::dynamic("We have sent a verification mail to your email address [" . _Array::value($_POST, "email") . "]. Please check your inbox and follow the sent instruction."));
                        } else {
                            Runtime::redirect(_Array::value($_POST, "redirect") . "?error=" . Encryption::dynamic("We can not accept new account request."));
                        }
                        //Runtime::redirect("account/updatePassword");
                    }
                } else {

                    //echo _Array::value($_POST, "redirect") . "/" .Encryption::dynamic("Please insert valid email address.");
                    Runtime::redirect(_Array::value($_POST, "redirect") . "?error=" . Encryption::dynamic("Please enter valid email address."));
                }
            } else {
                //echo _Array::value($_POST, "redirect") . "/" . Encryption::dynamic("Please insert valid email address.");
                Runtime::redirect(_Array::value($_POST, "redirect") . "?error=" . Encryption::dynamic("Please insert valid email address."));
            }
        } elseif (_Array::value($_POST, "account") === "login") {
            if (array_key_exists("type", $_POST)) {
                _Debug::preOutput("Log in with email system.");
                if (Validator::check($_POST, ["logged" => "required", "redirect" => "required", "email" => "required", "button" => "required",])) {
                    if ($conOfDatabase->AlreadyIn(["email" => _String::lower(_Array::value($_POST, "email"))])) {
                        _Debug::preOutput("Registered member");
                        $dtlOfUser = $conOfDatabase->getDetailsByItem(DB::USERS_LIST_TABLE, ["email" => _String::lower(_Array::value($_POST, "email"))]);
                        _Debug::preOutput($dtlOfUser);
                        if (array_key_exists("activation", $dtlOfUser)) {
                            if (_Array::value($dtlOfUser, "activation") === "yes") {
                                /*set welcome session*/
                                Session::set('auth', true);
                                Session::set('me', $dtlOfUser);
                                Session::set('code', _Array::value($dtlOfUser, "code"));
                                Session::set('time', time());
                                Session::set('RememberMe', _Array::value($_POST, "RememberMe") ? true : false);

                                if (Session::get("auth")) {
                                    Runtime::redirect("account/welcome"
                                        . "?t=" . Encryption::dynamic(_Array::value($_POST, "time") ? _Array::value($_POST, "time") : time()) . "&sc=" . Encryption::dynamic(_Array::value($dtlOfUser, "code"))
                                        . "&notify=" . Encryption::dynamic("Your account is not complete till now. Please complete your account for get access facilities."));
                                } else {
                                    Runtime::redirect(_Array::value($_POST, "redirect")
                                        . "?t=" . _Array::value($_POST, "type") . "&sc=" . Encryption::dynamic(_Array::value($dtlOfUser, "code"))
                                        . "&error=" . Encryption::dynamic("We can not accept new log in request."));
                                }
                            } else {
                                Runtime::redirect(_Array::value($_POST, "redirect")
                                    . "?t=" . _Array::value($_POST, "type") . "&sc=" . Encryption::dynamic(_Array::value($dtlOfUser, "code"))
                                    . "&error=" . Encryption::dynamic("Your account is inactive till now. Please check you mail inbox to activate your account for get access."));
                            }
                        } else {
                            Runtime::redirect(_Array::value($_POST, "redirect")
                                . "?t=" . _Array::value($_POST, "type") . "&sc=" . Encryption::dynamic(_Array::value($dtlOfUser, "code"))
                                . "&error=" . Encryption::dynamic("Your account has been corrupted. Please recover your account to get access."));
                        }
                    } else {
                        //echo "suggest for new account";
                        Runtime::redirect(_Array::value($_POST, "redirect") . "?error=" . Encryption::dynamic("Your email [" . _Array::value($_POST, "email") . "] not exists. Please create a new account."));
                    }
                }
            } else {
                if (Validator::check($_POST, ["logged" => "required", "username" => "required", "password" => "required", "button" => "required",])) {
                    //_Debug::preOutput($conOfDatabase->select("system")->read("users"));
                    if ($conOfDatabase->AlreadyIn(["username" => _Array::value($_POST, "username")])) {
                        //Runtime::redirect("account/updatePassword");
                        echo "old member";
                        if ($conOfDatabase->AlreadyIn(["password" => _Array::value($_POST, "password")])) { /*clients password not encrypt for experimental*/
                            //Runtime::redirect(_Array::value($_POST, "redirect"));
                            echo "old member";
                        } else {
                            echo "new member";
                            //Runtime::redirect(_Array::value($_POST, "redirect") . "?error=" . Encryption::dynamic("Your username [" . _Array::value($_POST, "password") . "] not exists. Please recovery your account."));
                        }
                    } else {
                        //echo "new member";
                        Runtime::redirect(_Array::value($_POST, "redirect") . "?error=" . Encryption::dynamic("Your username [" . _Array::value($_POST, "username") . "] not exists. Please create a new account."));
                    }
                } else {
                    //echo _Array::value($_POST, "redirect") . "/" . Encryption::dynamic("Please insert valid email address.");
                    Runtime::redirect(_Array::value($_POST, "redirect") . "?error=" . Encryption::dynamic("Please fill up required items in form."));
                }
            }
        } elseif (_Array::value($_POST, "account") === "username") {
            _Debug::preOutput($_POST);/*Debug::preOutput($dtlOfUser);exit();*/
            if (Validator::check($_POST, ["time" => "required", "account" => "required", "type" => "required", "code" => "required", "button" => "required"])) {
                $security = _Array::value($_POST, "code");
                _Debug::preOutput(_Array::value($_POST, "code"));
                _Debug::preOutput(Decryption::dynamic($security));
                if (is_numeric(Decryption::dynamic($security))) {
                    echo "security is ok";//exit();
                    if (_Array::value($_POST, "button") === "NEXT") {
                        /*url for first time password set*/
                        Runtime::redirect("account/password" . "?t=" . _Array::value($_POST, "type") . "&sc=" . _Array::value($_POST, "code"));
                    }
                    if (_Array::value($_POST, "button") === "UPDATE") {
                        if ($conOfDatabase->AlreadyIn(["code" => Number::filterInt(Decryption::dynamic($security))])) {
                            //$dtlOfUser = $conOfDatabase->getDetailsByItem(["code"=>Number::filterInt(Decryption::dynamic($security))]);
                            $dtlOfUser = $conOfDatabase->getUsersInfoByActivationCode(Number::filterInt(Decryption::dynamic($security)));
                            if (array_key_exists("activation", $dtlOfUser)) {
                                if (_Array::value($dtlOfUser, "activation") === "yes") {
                                    if (array_key_exists("username", $dtlOfUser)) {
                                        if (Decryption::dynamic(_Array::value($_POST, "type")) === "update") {
                                            if ($conOfDatabase->updateUsernameOfUser(
                                                _Array::value($dtlOfUser, "email"),
                                                Number::filterInt(Decryption::dynamic($security)),
                                                _Array::value($_POST, "new-username")
                                            )) {
                                                Runtime::redirect(_Array::value($_POST, "redirect")
                                                    . "?t=" . _Array::value($_POST, "type") . "&sc=" . Encryption::dynamic(_Array::value($dtlOfUser, "code"))
                                                    . "&success=" . Encryption::dynamic("Your username [" . _Array::value($_POST, "old-username") . "] to [" . _Array::value($_POST, "new-username") . "] updated successfully."));
                                            } else {
                                                Runtime::redirect(_Array::value($_POST, "redirect")
                                                    . "?t=" . _Array::value($_POST, "type") . "&sc=" . Encryption::dynamic(_Array::value($dtlOfUser, "code"))
                                                    . "&error=" . Encryption::dynamic("We can not accept new username request."));
                                            }
                                        } else {
                                            Runtime::redirect(_Array::value($_POST, "redirect")
                                                . "?t=" . _Array::value($_POST, "type") . "&sc=" . Encryption::dynamic(_Array::value($dtlOfUser, "code"))
                                                . "&error=" . Encryption::dynamic("Invalid request. Please try again."));
                                        }
                                    } else {
                                        _Debug::preOutput(Decryption::dynamic(_Array::value($_POST, "type")));
                                        if (Decryption::dynamic(_Array::value($_POST, "type")) === "new") {
                                            if ($conOfDatabase->updateUsernameOfUser(
                                                _Array::value($dtlOfUser, "email"),
                                                Number::filterInt(Decryption::dynamic($security)),
                                                _Array::value($_POST, "new-username")
                                            )) {
                                                echo "set";
                                                Runtime::redirect(_Array::value($_POST, "redirect")
                                                    . "?t=" . _Array::value($_POST, "type") . "&sc=" . Encryption::dynamic(_Array::value($dtlOfUser, "code"))
                                                    . "&success=" . Encryption::dynamic("Your username [" . _Array::value($_POST, "new-username") . "] set successfully."));
                                            } else {
                                                echo "not set";
                                                Runtime::redirect(_Array::value($_POST, "redirect")
                                                    . "?t=" . _Array::value($_POST, "type") . "&sc=" . Encryption::dynamic(_Array::value($dtlOfUser, "code"))
                                                    . "&error=" . Encryption::dynamic("We can not not accept update username request."));
                                            }
                                        } else {
                                            echo "type error";
                                            Runtime::redirect(_Array::value($_POST, "redirect")
                                                . "?t=" . _Array::value($_POST, "type") . "&sc=" . Encryption::dynamic(_Array::value($dtlOfUser, "code"))
                                                . "&error=" . Encryption::dynamic("Invalid request. Please try again."));
                                        }
                                    }
                                } else {
                                    Runtime::redirect(_Array::value($_POST, "redirect")
                                        . "?t=" . _Array::value($_POST, "type") . "&sc=" . Encryption::dynamic(_Array::value($dtlOfUser, "code"))
                                        . "&error=" . Encryption::dynamic("Your account is inactive till now. Please check you mail inbox to activate your account for get access."));
                                }
                            } else {
                                Runtime::redirect(_Array::value($_POST, "redirect")
                                    . "?t=" . _Array::value($_POST, "type") . "&sc=" . Encryption::dynamic(_Array::value($dtlOfUser, "code"))
                                    . "&error=" . Encryption::dynamic("Your account has been corrupted. Please recover your account to get access."));
                            }
                        } else {
                            Runtime::redirect(_Array::value($_POST, "redirect")
                                . "?t=" . _Array::value($_POST, "type") . "&sc=" . _Array::value($_POST, "code")
                                . "&error=" . Encryption::dynamic("Your account has been corrupted. Please recover your account to get access."));
                        }
                    }
                } else {
                    Runtime::redirect(_Array::value($_POST, "redirect")
                        . "?t=" . _Array::value($_POST, "type") . "&sc=" . _Array::value($_POST, "code")
                        . "&error=" . Encryption::dynamic("Invalid request with corrupted token. Please try again."));
                }
            } else {
                Runtime::redirect(_Array::value($_POST, "redirect")
                    . "?t=" . _Array::value($_POST, "type") . "&sc=" . _Array::value($_POST, "code")
                    . "&error=" . Encryption::dynamic("Please insert valid username."));
            }
        }
    }
} else {
    if (array_key_exists("redirect", $_POST)) {
        Runtime::redirect(_Array::value($_POST, "redirect"));
    } else {
        Runtime::redirect();
    }
}
