<?php

namespace Mishusoft\Ema\Mishusoft\Main\Views;

use Mishusoft\Ema\Mishusoft\Main\Databases\AccountMSQL;
use Mishusoft\Framework\Chipsets\Cryptography\Decryption;
use Mishusoft\Framework\Chipsets\Cryptography\Encryption;
use Mishusoft\Framework\Chipsets\Framework;
use Mishusoft\Framework\Chipsets\Http;
use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Number;
use Mishusoft\Framework\Drivers\Session;
use Mishusoft\Framework\Drivers\ViewRender;
use Mishusoft\Framework\Libraries\Runtime;
use Mishusoft\Framework\Libraries\Validator;
use Mishusoft\Framework\Migration\DB;

class AccountViewRender extends ViewRender
{
    /*text*/
    public const welcomeText = "Welcome to Mishusoft family";
    /**
     * @var AccountMSQL
     */
    private AccountMSQL $conOfDatabase;
    private $noMenubar;

    public function __construct(string $hostUrl, string $rootTitle, array $noMenuList, array $request)
    {
        parent::__construct($hostUrl, $rootTitle, $noMenuList, $request);
        $this->conOfDatabase = new AccountMSQL();
    }

    public function runTemplate(): void
    {
        Ui::HtmlInterface($this->TitleOfCurrentWebPage, function ($html, $head, $title) {

            /*add css file in head*/
            Ui::element($head, "link", ["rel" => "stylesheet", "href" => Storage::getWebResourcesPath() . "/css/v4.css"]);

            /*set id attribute for body*/
            $body = Ui::element($html, "body", ["id" => "account"]);

            /*add noscript to ui*/
            Ui::setNoScriptText($body);
            /*end of adding noscript*/

            /*create mishusoft application with html*/
            $template = Ui::element($body, "ms-app");

            /*set head and skip for headless pages*/
            if (!in_array(_String::lower($this->request["method"]), $this->noMenubar)) {
                $commonStyleStringForLinks = "background: white;padding: 10px;font-size: 16px;font-weight: bold;text-transform: uppercase;color: " . Ui::color["black"] . ";" . Ui::htmlHrefStyle;

                if (Session::get("auth")) {
                    $this->widget("header", $template, [
                        "a" => [
                            ["style" => $commonStyleStringForLinks, "href" => Memory::Data("framework")->host->url . "account/profile?a=" . time() . "&t=view&sc=" . _Array::value((array)Session::get("me"), "code")."&tab=summery", "text" => "Profile"],
                            ["style" => $commonStyleStringForLinks, "href" => Memory::Data("framework")->host->url . "account/logout", "text" => "Logout"],
                        ]]);
                } else {
                    if (_String::lower($this->request["method"]) === _String::lower("index")) {
                        $this->widget("header", $template, [
                            "a" => [
                                ["style" => $commonStyleStringForLinks, "href" => Memory::Data("framework")->host->url . "about/aboutMishusoft", "text" => "About US"],
                                ["style" => $commonStyleStringForLinks, "href" => Memory::Data("framework")->host->url . "account/why", "text" => "Why need an account?"],
                                ["style" => $commonStyleStringForLinks, "href" => Memory::Data("framework")->host->url . "support", "text" => "Help"]
                            ]]);
                    } else {
                        $this->widget("header", $template, [
                            "a" => [
                                ["style" => $commonStyleStringForLinks, "href" => Memory::Data("framework")->host->url . "about/aboutMishusoft", "text" => "About US"],
                                ["style" => $commonStyleStringForLinks, "href" => Memory::Data("framework")->host->url . "support", "text" => "Help"],
                                ["style" => $commonStyleStringForLinks, "href" => Memory::Data("framework")->host->url . "account", "text" => "Log In / Join"],
                            ]]);
                    }
                }
            }


            /*add template body*/
            $template_body = Ui::element($template, "ms-app-body", ["style" => "height: 700px;"]);

            /*take action in index page on account area*/
            if (_String::lower($this->request["method"]) === _String::lower("index")) {
                /*set text for title*/
                Ui::text($title, " || " . self::welcomeText);

                /*set separate paragraph for index page*/
                Ui::elementList(
                    $template_body,
                    [
                    "ms-app-paragraph" => [
                        ["style" => "padding: 50px;text-align: center;font-size: 40px;font-weight: bold;", "text" => self::welcomeText],/*set welcome text*/
                        ["style" => "padding: 10px;text-align: center;font-size: 16px;font-weight: normal;line-height: 1.5;margin: 0 10px 0 10px;", "text" => Framework::COMPANY_DESCRIPTION_DETAILS],/*set company details text*/
                        ["style" => "padding: 10px;text-align: center;font-size: 16px;font-weight: normal;line-height: 1.5;margin: 0 10px 0 10px;", "text" => "We offered to join with us and receive any service, then the valued customers take a relax."]/*set offer text*/
                    ],
                ]
                );


                /*add account related card"s title*/
                Ui::element($template_body, "ms-app-paragraph", ["style" => "padding: 35px;text-align: center;font-size: 24px;font-weight: bold;", "text" => "Select one to join or take a support!!"]);
                /*add account related cards*/
                $cardParent = Ui::element($template_body, "card", ["style" => "display: flex;flex-direction: row;justify-content: center;align-content: space-between;width: 100%;"]);
                $commonStyleStringForCards = "background: white;color: " . Ui::color["black"] . ";" . Ui::htmlHrefStyle . "margin: 10px;align-items: center;display: flex;justify-content: center;flex-direction: column;width: 200px;height: 150px;line-height: 2;border-radius: 10px;" . Ui::css["box-shadow"];


                /*create html anchor elements*/
                $card1 = Ui::element($cardParent, "a", ["style" => $commonStyleStringForCards, "href" => Memory::Data("framework")->host->url . "account/login"]);
                Ui::element($card1, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:60px;border-radius: 10px;", "src" => Storage::getAssetsPath("images_img-avatar3.png", "remote")]);
                Ui::element($card1, "text", ["style" => Ui::htmlHrefStyle, "text" => "Log in"]);

                $card2 = Ui::element($cardParent, "a", ["style" => $commonStyleStringForCards, "href" => Memory::Data("framework")->host->url . "account/create"]);
                Ui::element($card2, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:60px;border-radius: 10px;", "src" => Storage::getAssetsPath("images_img-avatar3.png", "remote")]);
                Ui::element($card2, "text", ["style" => Ui::htmlHrefStyle, "text" => "Create New Account"]);

                $card3 = Ui::element($cardParent, "a", ["style" => $commonStyleStringForCards, "href" => Memory::Data("framework")->host->url . "account/activate"]);
                Ui::element($card3, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:60px;border-radius: 10px;", "src" => Storage::getAssetsPath("images_img-avatar3.png", "remote")]);
                Ui::element($card3, "text", ["style" => Ui::htmlHrefStyle, "text" => "Activate Account"]);

                $card4 = Ui::element($cardParent, "a", ["style" => $commonStyleStringForCards, "href" => Memory::Data("framework")->host->url . "account/recovery"]);
                Ui::element($card4, "img", ["style" => Ui::htmlHrefStyle . "width:80px;height:60px;border-radius: 10px;", "src" => Storage::getAssetsPath("images_img-avatar3.png", "remote")]);
                Ui::element($card4, "text", ["style" => Ui::htmlHrefStyle, "text" => "Forget Account"]);
            } /*take action in logout page on account area*/
            elseif (_String::lower($this->request["method"]) === _String::lower("logout")) {
                Session::destroy();
                Runtime::redirect("account");
            } /*take action in login page on account area*/
            elseif (_String::lower($this->request["method"]) === _String::lower("login")) {
                if (Session::get("auth")) {
                    Runtime::redirect("account/welcome"
                        . "?t=" . Encryption::dynamic(time()) . "&sc=" . Encryption::dynamic(Session::get("code"))
                        . "&notify=" . Encryption::dynamic("Your account is not complete till now. Please complete your account for get access facilities."));
                } else {
                    /*set text for title*/
                    Ui::text($title, " || " . _String::ucwords("log in"));
                    Ui::assignAttributes($template_body, ["style" => "height: 700px;align-items: center;justify-content: center;"]);

                    /*add template body*/
                    $loginBody = Ui::element($template_body, "ms-app-login-box", [
                        "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height: 500px;width: 370px;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
                    ]);
                    Ui::element($loginBody, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;", "src" => Storage::getAssetsPath("images_img-avatar3.png", "remote")]);


                    /*catch error*/
                    /*_Debug::preOutput($_GET);*/
                    /*if (count($this->request["arguments"]) > 0) {
                        $this->board("message", $loginBody);
                    }*/
                    if (array_key_exists("error", $_GET) || array_key_exists("success", $_GET) || array_key_exists("notify", $_GET)) {
                        $this->board("message", $loginBody);
                    }

                    /*create form element*/
                    $frm = Ui::element($loginBody, "form", ["name" => "login", "method" => "post", "action" => Memory::Data("framework")->host->url . "account/verification", "enctype" => "application/x-www-form-urlencoded", "style" => "width: inherit;"]);

                    /**
                     * <input type="hidden" name="account" value="login">
                     * <input type="hidden" name="logged" value="1">
                     * <input id="redirect" type="hidden" name="redirect" value="{$redirect}">
                     * <input id="redirect" type="hidden" name="type" value="{$secret_code_token}">
                     * */
                    /*create hidden element*/
                    Ui::elementList($frm, [
                        "input" => [
                            ["type" => "hidden", "name" => "account", "value" => "login"],
                            ["type" => "hidden", "name" => "logged", "value" => "1"],
                            ["type" => "hidden", "name" => "time", "value" => time()],
                            ["type" => "hidden", "name" => "redirect", "value" => empty(_Array::value($_GET, "redirect")) ? "account/login" : _Array::value($_GET, "redirect")]
                        ],
                    ]);

                    if (array_key_exists("t", $_GET)) {
                        /*add secret code token*/
                        Ui::element($frm, "input", ["type" => "hidden", "name" => "type", "value" => _Array::value($_GET, "t")]);

                        /**
                         * <label for="email">Email address (<span class="text-danger">*</span>)</label>
                         * <input type="email" id="email" name="email" class="input-control" placeholder="Email address.."
                         * pattern="{literal}[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}${/literal}" autocomplete="off"
                         * title="Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a ".". After the "." sign, add at least 2 letters from a to z"
                         * required="required" value="{if isset($submitted_data)}{$submitted_data.email}{/if}"/>
                         * */
                        /*create username element*/
                        $email = Ui::element($frm, "email", ["style" => Ui::htmlHrefStyle . "width:100%;"]);
                        /*create email"s child element*/
                        Ui::element($email, "label", ["for" => "email", "text" => "E-mail address"]);
                        Ui::element($email, "input", ["id" => "email", "type" => "text", "name" => "email", "class" => "input-control",
                            "placeholder" => "Your e-mail address..", "pattern" => "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
                            "autocomplete" => "off", "title" => "Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a '.'. After the '.' sign, add at least 2 letters from a to z",
                            "required" => "required", "autofocus" => "autofocus"]);

                        /*create command element*/
                        $command = Ui::element($frm, "command", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "width:100%;"]);

                        /*create command"s element*/
                        /**
                         * <label class="input-container">Remember me.
                         * <input type="checkbox" id="RememberMe" name="RememberMe" value="RememberMe"/>
                         * <span class="checkmark"></span>
                         * </label>
                         */
                        $label = Ui::element(
                            Ui::element($command, "remember", ["style" => Ui::css["display-flex"] . "width: -webkit-fill-available;width: -moz-available;"]),
                            "label",
                            ["class" => "input-container", "style" => Ui::css["font-normal"]]
                        );
                        Ui::element($label, "input", ["type" => "checkbox", "name" => "RememberMe", "value" => true]);
                        Ui::element($label, "span", ["class" => "checkmark"]);
                        Ui::text($label, "Remember Me");


                        /*create login button*/
                        /**
                         * <input type="submit" id="login-button" name="login" class="button button-primary" value="Log In"/>
                         * */
                        Ui::element(Ui::element($command, "login", ["style" => Ui::css["display-flex"] . "width: -webkit-fill-available;width: -moz-available;"]), "input", ["id" => "login-button", "type" => "submit", "name" => "button", "class" => "button button-success", "value" => "Log In",]);

                        /*create alternative element*/
                        $alternative = Ui::element($frm, "alternative", ["id" => "alternative",/*"style" => Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::htmlHrefStyle . "width:100%;line-height: 2;"*/]);

                        $other = Ui::element($alternative, "other", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "color:" . Ui::color["black"] . ";font-size:15px;justify-content: center;align-items: center;width:100%;margin-top: 10px;margin-bottom:10px;", "title" => "Click to log in with email"]);
                        Ui::element($other, "option", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . "color:" . Ui::color["black"] . ";font-size:15px;justify-content: center;align-items: center;width:100%;", "text" => "Log in with your username and password"]);
                        Ui::element($other, "a", [
                            "href" => Memory::Data("framework")->host->url . "account/login",
                            "class" => "button button-primary", "text" => "Log in with Username",
                            "style" => "display: flex;justify-content: center;align-items: center;width: -webkit-fill-available;width: -moz-available;"]);

                        /*alternate help links*/
                        Ui::elementList($alternative, [
                            "a" => [
                                ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/recovery", "text" => "Forget Account?", "title" => "Click to recovery your account if you forget password or account"],
                                ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/create", "text" => "Create New Account", "title" => "Click to create new account"],
                                ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url, "text" => "Back to home", "title" => "Click to go back to home"]
                            ],
                        ]);
                    } else {
                        /**
                         * <label for="username">Username</label>
                         * <input type="text"  id="username" name="username" class="input-control" placeholder="Your username.."
                         *        pattern="{literal}[a-z0-9]{8,}${/literal}" autofocus autocomplete="off"
                         *        title="Must contain alphanumeric characters only and at least 8 letters from a to z"
                         *        required="required" value="{if isset($submitted_data)}{$submitted_data.username}{/if}"/>
                         * */
                        /*create username element*/
                        $username = Ui::element($frm, "username", ["style" => Ui::htmlHrefStyle . "width:100%;"]);
                        /*create username"s child element*/
                        Ui::element($username, "label", ["for" => "username", "text" => "Username"]);
                        Ui::element($username, "input", ["id" => "username", "type" => "text", "name" => "username",
                            "class" => "input-control", "placeholder" => "Your username..", "pattern" => "[a-z0-9]{8,}$", "autocomplete" => "off",
                            "title" => "Must contain alphanumeric characters only and at least 8 letters from a to z",
                            "required" => "required", "autofocus" => "autofocus"]);

                        /**
                         * <label for="password">Password</label>
                         * <input type="password" id="password" name="password" class="input-control"  autocomplete="off"
                         * placeholder="***************" pattern="{literal}(?=.*\d)(?=.*[@_])(?=.*[a-z])(?=.*[A-Z]).{6,}{/literal}"
                         * title="Must contain at least one  number and one uppercase and lowercase letter and at least 6 or more characters"
                         *  required="required" value="{if isset($submitted_data)}{$submitted_data.password}{/if}"/>
                         * */
                        /*create password element*/
                        $password = Ui::element($frm, "password", ["style" => Ui::htmlHrefStyle . "width:100%;"]);

                        /*create password"s child element*/
                        Ui::element($password, "label", ["for" => "password", "text" => "Password"]);
                        Ui::element($password, "input", ["id" => "password", "type" => "password", "name" => "password",
                            "required" => "required", "placeholder" => "***************", "class" => "input-control", "pattern" => "(?=.*\d)(?=.*[@_])(?=.*[a-z])(?=.*[A-Z]).{6,}",
                            "autocomplete" => "off", "title" => "Must contain at least one  number and one uppercase and lowercase letter and at least 6 or more characters"]);

                        /*create command element*/
                        $command = Ui::element($frm, "command", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "width:100%;"]);

                        /**
                         * <label class="input-container">Remember me.
                         * <input type="checkbox" id="RememberMe" name="RememberMe" value="RememberMe"/>
                         * <span class="checkmark"></span>
                         * </label>
                         */
                        /*create command"s element*/
                        $remember = Ui::element($command, "remember", ["style" => Ui::css["display-flex"] . "justify-content:left;width: -webkit-fill-available;width: -moz-available;"]);
                        $label = Ui::element($remember, "label", ["class" => "input-container", "for" => "RememberMe", "style" => Ui::css["font-normal"]]);
                        Ui::element($label, "input", ["id" => "RememberMe", "type" => "checkbox", "name" => "RememberMe", "value" => "RememberMe"]);
                        Ui::element($label, "span", ["class" => "checkmark"]);
                        Ui::text($label, "Remember Me");

                        /**
                         * <input type="submit" id="login-button" name="login" class="button button-primary" value="Log In"/>
                         * */
                        /*create login button*/
                        Ui::element(Ui::element($command, "login", ["style" => Ui::css["display-flex"] . "justify-content:right;width: -webkit-fill-available;width: -moz-available;"]), "input", ["id" => "login-button", "type" => "submit", "name" => "button", "class" => "button button-primary", "value" => "Log In",]);

                        /*create alternative element*/
                        $alternative = Ui::element($frm, "alternative", ["id" => "alternative",/*"style" => Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::htmlHrefStyle . "width:100%;line-height: 2;"*/]);
                        $other = Ui::element($alternative, "other", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . Ui::css["display-flex"] . Ui::css["flex-column"] . ";font-size:15px;justify-content: center;align-items: center;", "title" => "Click to log in with email"]);
                        Ui::element($other, "option", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;display: flex;justify-content: center;align-items: center;", "text" => "If you have no username or password"]);
                        Ui::element($other, "a", [
                            "href" => Memory::Data("framework")->host->url . "account/login?t=" . Encryption::dynamic("email-only"),
                            "class" => "button button-success", "text" => "Log in with E-mail", "style" => "display: flex;justify-content: center;align-items: center;"]);

                        /*alternate help links*/
                        Ui::element($alternative, "a", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/recovery", "text" => "Forget Account?", "title" => "Click to recovery your account if you forget password or account"]);
                        Ui::element($alternative, "a", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/create", "text" => "Create New Account", "title" => "Click to create new account"]);
                        Ui::element($alternative, "a", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url, "text" => "Back to home", "title" => "Click to go back to home"]);
                    }
                }

                /*end of login page*/
            } /*take action in create page on account area*/
            elseif (_String::lower($this->request["method"]) === _String::lower("create")) {
                if (Session::get("auth")) {
                    Runtime::redirect("account/welcome"
                        . "?t=" . Encryption::dynamic(time()) . "&sc=" . Encryption::dynamic(Session::get("code"))
                        . "&notify=" . Encryption::dynamic("Your account is not complete till now. Please complete your account for get access facilities."));
                } else {

                    /*set text for title*/
                    Ui::text($title, " || " . _String::ucwords("create a new account"));
                    Ui::assignAttributes($template_body, ["style" => "height: 700px;align-items: center;justify-content: center;"]);

                    /*add template body*/
                    $signupBody = Ui::element($template_body, "ms-app-create-box", [
                        "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height:500px;width: 370px;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
                    ]);
                    Ui::element($signupBody, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;", "src" => Storage::getAssetsPath("images_img-avatar3.png", "remote")]);
                    Ui::element($signupBody, "h3", ["style" => Ui::htmlHrefStyle . "text-align: left;display: flex;align-items: start;width: 100%;padding: 5px;margin-bottom: 5px;margin-top: 0px;", "text" => "Create a new account"]);


                    /*catch error*/
                    /*_Debug::preOutput($_GET);*/
                    /*if (count($this->request["arguments"]) > 0) {
                        $this->board("message", $signupBody);
                    }*/
                    if (array_key_exists("error", $_GET) || array_key_exists("success", $_GET) || array_key_exists("notify", $_GET)) {
                        $this->board("message", $signupBody);
                    }

                    /*create form element*/
                    $frm = Ui::element($signupBody, "form", ["method" => "post", "action" => Memory::Data("framework")->host->url . "account/verification", "enctype" => "application/x-www-form-urlencoded", "style" => "width: inherit;"]);

                    /*create hidden element*/
                    /**
                     * <input type="hidden" name="logged" value="1">
                     * <input id="redirect" type="hidden" name="redirect" value="{$redirect}">
                     * */

                    Ui::elementList($frm, [
                        "input" => [
                            ["type" => "hidden", "name" => "account", "value" => "create"],
                            ["type" => "hidden", "name" => "create", "value" => "1"],
                            ["type" => "hidden", "name" => "time", "value" => time()],
                            ["type" => "hidden", "name" => "redirect", "value" => empty(_Array::value($_GET, "redirect")) ? "account/create" : _Array::value($_GET, "redirect")]
                        ],
                    ]);

                    /*create email element*/
                    $email = Ui::element($frm, "email", ["style" => Ui::htmlHrefStyle . "width:100%;"]);

                    /*create email"s child element*/
                    /**
                     * <label for="email">Email address (<span class="text-danger">*</span>)</label>
                     * <input type="email" id="email" name="email" class="input-control" placeholder="Email address.."
                     * pattern="{literal}[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}${/literal}" autocomplete="off"
                     * title="Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a ".". After the "." sign, add at least 2 letters from a to z"
                     * required="required" value="{if isset($submitted_data)}{$submitted_data.email}{/if}"/>
                     * */
                    Ui::element($email, "label", ["for" => "email", "text" => "Email address"]);
                    Ui::element($email, "input", ["id" => "email", "type" => "text", "name" => "email", "class" => "input-control",
                        "placeholder" => "Your e-mail address..", "pattern" => "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
                        "autocomplete" => "off", "title" => "Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a " . ". After the " . " sign, add at least 2 letters from a to z",
                        "required" => "required", "autofocus" => "autofocus"]);

                    /*create command element*/
                    $command = Ui::element($frm, "command", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"] . "width:100%;"]);

                    /*create command"s element*/
                    $t_c = Ui::element($command, "text", ["class" => "input-container", "for" => "RememberMe", "style" => Ui::css["font-normal"] . "font-size:13px;", "text" => "By clicking [Next] button you agree with our all "]);
                    Ui::element($t_c, "a", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:13px;", "href" => Memory::Data("framework")->host->url . "company/terms", "text" => "Terms Conditions"]);
                    Ui::text($t_c, " and ");
                    Ui::element($t_c, "a", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:13px;", "href" => Memory::Data("framework")->host->url . "company/privacy", "text" => "Privacy Policy"]);
                    Ui::text($t_c, ".");


                    /*create next button*/
                    /**
                     * <input type="submit" id="next-button" name="login" class="button button-primary" value="Next"/>
                     * */

                    Ui::element(Ui::element($command, "next", ["style" => Ui::css["display-flex"] . "justify-content:right;"]), "input", ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-primary", "value" => "Next",]);

                    /*alternate help links*/
                    Ui::elementList(
                        Ui::element($frm, "alternative", ["style" => Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::htmlHrefStyle . "width: -webkit-fill-available;width: -moz-available;;line-height: 2;"]),
                        [
                        "a" => [
                            ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/login", "text" => "Log in", "title" => "Click to log in your account"],
                            ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/recovery", "text" => "Forget Account?", "title" => "Click to recovery your account if you forget password or account"],
                            ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url, "text" => "Back to home", "title" => "Click to go back to home"]
                        ],
                    ]
                    );
                }

                /*end of create page*/
            } /*take action in username page on account area*/
            elseif (_String::lower($this->request["method"]) === _String::lower("username")) {
                _Debug::preOutput("NEW " . Encryption::dynamic("new"));
                _Debug::preOutput("update " . Encryption::dynamic("update"));
                _Debug::preOutput("12111931 " . Encryption::dynamic(12111931));


                /**
                 * url
                 * POST [HOST]/account/username?t=encrypted_type&sc=encrypted_secret_code
                 * Return url
                 * GET [HOST]/account/username?t=encrypted_type&sc=encrypted_secret_code&error=encrypted_message
                 * GET [HOST]/account/username?t=encrypted_type&sc=encrypted_secret_code&success=encrypted_message
                 */

                if (array_key_exists("t", $_GET)) {
                    _Debug::preOutput(_Array::value($_GET, "t"));
                    _Debug::preOutput(Decryption::dynamic(_Array::value($_GET, "t")));
                    if (array_key_exists("sc", $_GET)) {
                        Ui::assignAttributes($template_body, ["style" => "height: 700px;align-items: center;justify-content: center;"]);

                        /*add template body*/
                        $usernameBody = Ui::element($template_body, "ms-app-username-box", [
                            "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height:500px;width: 370px;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
                        ]);
                        Ui::element($usernameBody, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;", "src" => Storage::getAssetsPath("images_img-avatar3.png", "remote")]);

                        //echo Encryption::dynamic("new");
                        //aUsxYUxuNTFGcVM4VmV1VlpXYm1jUT09Ok1pc2h1c29mdDpRMH4kE1dsWbXR1IyWrqhu
                        if (Decryption::dynamic(_Array::value($_GET, "t")) === "update") {
                            /*set text for title*/
                            Ui::text($title, " || " . _String::ucwords("Update username"));
                            Ui::element($usernameBody, "h3", ["style" => Ui::htmlHrefStyle . "text-align: left;display: flex;align-items: start;width: 100%;padding: 5px;margin-bottom: 5px;margin-top: 0px;", "text" => "Update username"]);
                        } else {
                            /*set text for title*/
                            Ui::text($title, " || " . _String::ucwords("Set new username"));
                            Ui::element($usernameBody, "h3", ["style" => Ui::htmlHrefStyle . "text-align: left;display: flex;align-items: start;width: 100%;padding: 5px;margin-bottom: 5px;margin-top: 0px;", "text" => "Set new username"]);
                        }


                        /*catch error*/
                        /*_Debug::preOutput($_GET);*/
                        /*if (count($this->request["arguments"]) > 0) {
                            $this->board("message", $signupBody);
                        }*/
                        if (array_key_exists("error", $_GET) || array_key_exists("success", $_GET) || array_key_exists("notify", $_GET)) {
                            $this->board("message", $usernameBody);
                        }


                        /*create form element*/
                        $frm = Ui::element($usernameBody, "form", ["method" => "post", "action" => Memory::Data("framework")->host->url . "account/verification", "enctype" => "application/x-www-form-urlencoded", "style" => "width: inherit;"]);

                        /*create hidden element*/
                        /**
                         * <input type="hidden" name="logged" value="1">
                         * <input id="redirect" type="hidden" name="redirect" value="{$redirect}">
                         * */

                        Ui::elementList($frm, [
                            "input" => [
                                ["type" => "hidden", "name" => "account", "value" => "username"],
                                ["type" => "hidden", "name" => "time", "value" => time()],
                                ["type" => "hidden", "name" => "type", "value" => _Array::value($_GET, "t")],
                                ["type" => "hidden", "name" => "code", "value" => _Array::value($_GET, "sc")],
                                ["type" => "hidden", "name" => "redirect", "value" => empty(_Array::value($_GET, "redirect")) ? "account/username" : _Array::value($_GET, "redirect")]
                            ],
                        ]);

                        /*create username element*/
                        $username = Ui::element($frm, "username", ["style" => Ui::htmlHrefStyle . "width:100%;"]);

                        if (array_key_exists("t", $_GET)) {
                            if (Decryption::dynamic(_Array::value($_GET, "t")) === "update") {
                                //_Debug::preOutput(_Array::value($_GET, "sc"));
                                $dtlOfUser = $this->conOfDatabase->getUsersInfoByActivationCode(Number::filterInt(Decryption::dynamic(_Array::value($_GET, "sc"))));
                                /*create username"s child element*/
                                /**
                                 * <label for="email">Old Username (<span class="text-danger">*</span>)</label>
                                 * <input type="email" id="email" name="email" class="input-control" placeholder="Old Username.."
                                 * pattern="{literal}[a-z0-9]{8,}${/literal}" autocomplete="off"
                                 * title="Must contain alphanumeric characters only and at least 8 letters from a to z"
                                 * required="required" value="{if isset($submitted_data)}{$submitted_data.username}{/if}"/>
                                 * */
                                Ui::element($username, "label", ["for" => "email", "text" => "Old Username"]);
                                Ui::element($username, "input", ["id" => "old-username", "type" => "text", "name" => "old-username", "class" => "input-control",
                                    "placeholder" => "Your old username..", "pattern" => "[a-z0-9]{8,}$", "autocomplete" => "off", "readonly" => "readonly",
                                    "title" => "Must contain alphanumeric characters only and at least 8 letters from a to z", "value" => $dtlOfUser["username"]
                                ]);

                                if (array_key_exists("success", $_GET)) {
                                    /**
                                     * <label for="email">New Username (<span class="text-danger">*</span>)</label>
                                     * <input type="email" id="new-username" name="new-username" class="input-control" placeholder="New Username.."
                                     * pattern="{literal}[a-z0-9]{8,}${/literal}" autocomplete="off"
                                     * title="Must contain alphanumeric characters only and at least 8 letters from a to z"
                                     * "autofocus" = "autofocus"/>
                                     * */
                                    Ui::element($username, "label", ["for" => "email", "text" => "New Username"]);
                                    Ui::element($username, "input", ["id" => "new-username", "type" => "text", "name" => "new-username", "class" => "input-control",
                                        "placeholder" => "Your new username..", "pattern" => "[a-z0-9]{8,}$",
                                        "autocomplete" => "off", "title" => "Must contain alphanumeric characters only and at least 8 letters from a to z",
                                        "autofocus" => "autofocus"]);
                                } else {
                                    /**
                                     * <label for="email">New Username (<span class="text-danger">*</span>)</label>
                                     * <input type="email" id="new-username" name="new-username" class="input-control" placeholder="New Username.."
                                     * pattern="{literal}[a-z0-9]{8,}${/literal}" autocomplete="off"
                                     * title="Must contain alphanumeric characters only and at least 8 letters from a to z"
                                     * required="required" value="{if isset($submitted_data)}{$submitted_data.username}{/if}"/>
                                     * */
                                    Ui::element($username, "label", ["for" => "email", "text" => "New Username"]);
                                    Ui::element($username, "input", ["id" => "new-username", "type" => "text", "name" => "new-username", "class" => "input-control",
                                        "placeholder" => "Your new username..", "pattern" => "[a-z0-9]{8,}$",
                                        "autocomplete" => "off", "title" => "Must contain alphanumeric characters only and at least 8 letters from a to z",
                                        "required" => "required", "autofocus" => "autofocus"]);
                                }
                            } else {
                                /*create username"s child element*/
                                /**
                                 * <label for="email">New Username (<span class="text-danger">*</span>)</label>
                                 * <input type="email" id="email" name="email" class="input-control" placeholder="New Username.."
                                 * pattern="{literal}[a-z0-9]{8,}${/literal}" autocomplete="off"
                                 * title="Must contain alphanumeric characters only and at least 8 letters from a to z"
                                 * required="required" value="{if isset($submitted_data)}{$submitted_data.username}{/if}"/>
                                 * */
                                Ui::element($username, "label", ["for" => "email", "text" => "New Username"]);
                                Ui::element($username, "input", ["id" => "new-username", "type" => "text", "name" => "new-username", "class" => "input-control",
                                    "placeholder" => "Your new username..", "pattern" => "[a-z0-9]{8,}$",
                                    "autocomplete" => "off", "title" => "Must contain alphanumeric characters only and at least 8 letters from a to z",
                                    "required" => "required", "autofocus" => "autofocus"]);
                            }
                        }

                        /*create next button*/
                        /**
                         * <input type="submit" id="next-button" name="login" class="button button-primary" value="Next"/>
                         * */
                        $command = Ui::element($frm, "command", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-row"] . "width:100%;"]);
                        if (array_key_exists("success", $_GET)) {
                            if (Decryption::dynamic(_Array::value($_GET, "t")) === "update") {
                                Ui::element(
                                    Ui::element($command, "submit", ["style" => Ui::css["display-flex"] . "justify-content:left;"]),
                                    "input",
                                    ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-primary", "value" => "UPDATE",]
                                );
                                Ui::element(
                                    Ui::element($command, "submit", ["style" => Ui::css["display-flex"] . "justify-content:right;"]),
                                    "input",
                                    ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-success", "value" => "NEXT",]
                                );
                            } else {
                                Ui::element(
                                    Ui::element($command, "submit", ["style" => Ui::css["display-flex"] . "justify-content:left;"]),
                                    "input",
                                    ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-primary", "value" => "SET",]
                                );
                                Ui::element(
                                    Ui::element($command, "submit", ["style" => Ui::css["display-flex"] . "justify-content:right;"]),
                                    "input",
                                    ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-success", "value" => "NEXT",]
                                );
                            }
                        } else {
                            if (Decryption::dynamic(_Array::value($_GET, "t")) === "update") {
                                Ui::element(
                                    Ui::element($command, "submit", ["style" => Ui::css["display-flex"] . "justify-content:center;"]),
                                    "input",
                                    ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-primary", "value" => "UPDATE",]
                                );
                            } else {
                                Ui::element(
                                    Ui::element($command, "submit", ["style" => Ui::css["display-flex"] . "justify-content:center;"]),
                                    "input",
                                    ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-primary", "value" => "SET",]
                                );
                            }
                        }

                        /*create alternative element*/
                        Ui::elementList(Ui::element($frm, "alternative", ["style" => Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::htmlHrefStyle . "width:100%;line-height: 2;"]), [
                            "a" => [
                                ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/login", "text" => "Log in", "title" => "Click to log in your account"],
                                ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/recovery", "text" => "Forget Account?", "title" => "Click to recovery your account if you forget password or account"],
                                ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url, "text" => "Back to home", "title" => "Click to go back to home"]
                            ],
                        ]);

                    /*end of create page*/
                    } else {
                        Runtime::redirect();
                    }
                } else {
                    Runtime::redirect();
                }
            } /*take action in password page on account area*/
            elseif (_String::lower($this->request["method"]) === _String::lower("password")) {
                _Debug::preOutput("NEW " . Encryption::dynamic("new"));
                _Debug::preOutput("update " . Encryption::dynamic("update"));
                _Debug::preOutput("12111931 " . Encryption::dynamic(12111931));


                /**
                 * url
                 * POST [HOST]/account/username?t=encrypted_type&sc=encrypted_secret_code
                 * Return url
                 * GET [HOST]/account/username?t=encrypted_type&sc=encrypted_secret_code&error=encrypted_message
                 * GET [HOST]/account/username?t=encrypted_type&sc=encrypted_secret_code&success=encrypted_message
                 */

                if (array_key_exists("t", $_GET)) {
                    _Debug::preOutput(_Array::value($_GET, "t"));
                    _Debug::preOutput(Decryption::dynamic(_Array::value($_GET, "t")));
                    if (array_key_exists("sc", $_GET)) {
                        Ui::assignAttributes($template_body, ["style" => "height: 700px;align-items: center;justify-content: center;"]);

                        /*add template body*/
                        $usernameBody = Ui::element($template_body, "ms-app-username-box", [
                            "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height:500px;width: 370px;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
                        ]);
                        Ui::element($usernameBody, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;", "src" => Storage::getAssetsPath("images_img-avatar3.png", "remote")]);

                        //echo Encryption::dynamic("new");
                        //aUsxYUxuNTFGcVM4VmV1VlpXYm1jUT09Ok1pc2h1c29mdDpRMH4kE1dsWbXR1IyWrqhu
                        if (Decryption::dynamic(_Array::value($_GET, "t")) === "update") {
                            /*set text for title*/
                            Ui::text($title, " || " . _String::ucwords("Update username"));
                            Ui::element($usernameBody, "h3", ["style" => Ui::htmlHrefStyle . "text-align: left;display: flex;align-items: start;width: 100%;padding: 5px;margin-bottom: 5px;margin-top: 0px;", "text" => "Update username"]);
                        } else {
                            /*set text for title*/
                            Ui::text($title, " || " . _String::ucwords("Set new username"));
                            Ui::element($usernameBody, "h3", ["style" => Ui::htmlHrefStyle . "text-align: left;display: flex;align-items: start;width: 100%;padding: 5px;margin-bottom: 5px;margin-top: 0px;", "text" => "Set new username"]);
                        }


                        /*catch error*/
                        /*_Debug::preOutput($_GET);*/
                        /*if (count($this->request["arguments"]) > 0) {
                            $this->board("message", $signupBody);
                        }*/
                        if (array_key_exists("error", $_GET) || array_key_exists("success", $_GET) || array_key_exists("notify", $_GET)) {
                            $this->board("message", $usernameBody);
                        }


                        /*create form element*/
                        $frm = Ui::element($usernameBody, "form", ["method" => "post", "action" => Memory::Data("framework")->host->url . "account/verification", "enctype" => "application/x-www-form-urlencoded", "style" => "width: inherit;"]);

                        /*create hidden element*/
                        /**
                         * <input type="hidden" name="logged" value="1">
                         * <input id="redirect" type="hidden" name="redirect" value="{$redirect}">
                         * */

                        Ui::elementList($frm, [
                            "input" => [
                                ["type" => "hidden", "name" => "account", "value" => "username"],
                                ["type" => "hidden", "name" => "time", "value" => time()],
                                ["type" => "hidden", "name" => "type", "value" => _Array::value($_GET, "t")],
                                ["type" => "hidden", "name" => "code", "value" => _Array::value($_GET, "sc")],
                                ["type" => "hidden", "name" => "redirect", "value" => empty(_Array::value($_GET, "redirect")) ? "account/username" : _Array::value($_GET, "redirect")]
                            ],
                        ]);

                        /*create username element*/
                        $username = Ui::element($frm, "username", ["style" => Ui::htmlHrefStyle . "width:100%;"]);

                        if (array_key_exists("t", $_GET)) {
                            if (Decryption::dynamic(_Array::value($_GET, "t")) === "update") {
                                //_Debug::preOutput(_Array::value($_GET, "sc"));
                                $dtlOfUser = $this->conOfDatabase->getUsersInfoByActivationCode(Number::filterInt(Decryption::dynamic(_Array::value($_GET, "sc"))));
                                /*create username"s child element*/
                                /**
                                 * <label for="email">Old Username (<span class="text-danger">*</span>)</label>
                                 * <input type="email" id="email" name="email" class="input-control" placeholder="Old Username.."
                                 * pattern="{literal}[a-z0-9]{8,}${/literal}" autocomplete="off"
                                 * title="Must contain alphanumeric characters only and at least 8 letters from a to z"
                                 * required="required" value="{if isset($submitted_data)}{$submitted_data.username}{/if}"/>
                                 * */
                                Ui::element($username, "label", ["for" => "email", "text" => "Old Username"]);
                                Ui::element($username, "input", ["id" => "old-username", "type" => "text", "name" => "old-username", "class" => "input-control",
                                    "placeholder" => "Your old username..", "pattern" => "[a-z0-9]{8,}$", "autocomplete" => "off", "readonly" => "readonly",
                                    "title" => "Must contain alphanumeric characters only and at least 8 letters from a to z", "value" => $dtlOfUser["username"]
                                ]);

                                if (array_key_exists("success", $_GET)) {
                                    /**
                                     * <label for="email">New Username (<span class="text-danger">*</span>)</label>
                                     * <input type="email" id="new-username" name="new-username" class="input-control" placeholder="New Username.."
                                     * pattern="{literal}[a-z0-9]{8,}${/literal}" autocomplete="off"
                                     * title="Must contain alphanumeric characters only and at least 8 letters from a to z"
                                     * "autofocus" = "autofocus"/>
                                     * */
                                    Ui::element($username, "label", ["for" => "email", "text" => "New Username"]);
                                    Ui::element($username, "input", ["id" => "new-username", "type" => "text", "name" => "new-username", "class" => "input-control",
                                        "placeholder" => "Your new username..", "pattern" => "[a-z0-9]{8,}$",
                                        "autocomplete" => "off", "title" => "Must contain alphanumeric characters only and at least 8 letters from a to z",
                                        "autofocus" => "autofocus"]);
                                } else {
                                    /**
                                     * <label for="email">New Username (<span class="text-danger">*</span>)</label>
                                     * <input type="email" id="new-username" name="new-username" class="input-control" placeholder="New Username.."
                                     * pattern="{literal}[a-z0-9]{8,}${/literal}" autocomplete="off"
                                     * title="Must contain alphanumeric characters only and at least 8 letters from a to z"
                                     * required="required" value="{if isset($submitted_data)}{$submitted_data.username}{/if}"/>
                                     * */
                                    Ui::element($username, "label", ["for" => "email", "text" => "New Username"]);
                                    Ui::element($username, "input", ["id" => "new-username", "type" => "text", "name" => "new-username", "class" => "input-control",
                                        "placeholder" => "Your new username..", "pattern" => "[a-z0-9]{8,}$",
                                        "autocomplete" => "off", "title" => "Must contain alphanumeric characters only and at least 8 letters from a to z",
                                        "required" => "required", "autofocus" => "autofocus"]);
                                }
                            } else {
                                /*create username"s child element*/
                                /**
                                 * <label for="email">New Username (<span class="text-danger">*</span>)</label>
                                 * <input type="email" id="email" name="email" class="input-control" placeholder="New Username.."
                                 * pattern="{literal}[a-z0-9]{8,}${/literal}" autocomplete="off"
                                 * title="Must contain alphanumeric characters only and at least 8 letters from a to z"
                                 * required="required" value="{if isset($submitted_data)}{$submitted_data.username}{/if}"/>
                                 * */
                                Ui::element($username, "label", ["for" => "email", "text" => "New Username"]);
                                Ui::element($username, "input", ["id" => "new-username", "type" => "text", "name" => "new-username", "class" => "input-control",
                                    "placeholder" => "Your new username..", "pattern" => "[a-z0-9]{8,}$",
                                    "autocomplete" => "off", "title" => "Must contain alphanumeric characters only and at least 8 letters from a to z",
                                    "required" => "required", "autofocus" => "autofocus"]);
                            }
                        }

                        /*create next button*/
                        /**
                         * <input type="submit" id="next-button" name="login" class="button button-primary" value="Next"/>
                         * */
                        $command = Ui::element($frm, "command", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-row"] . "width:100%;"]);
                        if (array_key_exists("success", $_GET)) {
                            if (Decryption::dynamic(_Array::value($_GET, "t")) === "update") {
                                Ui::element(
                                    Ui::element($command, "submit", ["style" => Ui::css["display-flex"] . "justify-content:left;"]),
                                    "input",
                                    ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-primary", "value" => "UPDATE",]
                                );
                                Ui::element(
                                    Ui::element($command, "submit", ["style" => Ui::css["display-flex"] . "justify-content:right;"]),
                                    "input",
                                    ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-success", "value" => "NEXT",]
                                );
                            } else {
                                Ui::element(
                                    Ui::element($command, "submit", ["style" => Ui::css["display-flex"] . "justify-content:left;"]),
                                    "input",
                                    ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-primary", "value" => "SET",]
                                );
                                Ui::element(
                                    Ui::element($command, "submit", ["style" => Ui::css["display-flex"] . "justify-content:right;"]),
                                    "input",
                                    ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-success", "value" => "NEXT",]
                                );
                            }
                        } else {
                            if (Decryption::dynamic(_Array::value($_GET, "t")) === "update") {
                                Ui::element(
                                    Ui::element($command, "submit", ["style" => Ui::css["display-flex"] . "justify-content:center;"]),
                                    "input",
                                    ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-primary", "value" => "UPDATE",]
                                );
                            } else {
                                Ui::element(
                                    Ui::element($command, "submit", ["style" => Ui::css["display-flex"] . "justify-content:center;"]),
                                    "input",
                                    ["id" => "next-button", "type" => "submit", "name" => "button", "class" => "button button-primary", "value" => "SET",]
                                );
                            }
                        }

                        /*create alternative element*/
                        Ui::elementList(Ui::element($frm, "alternative", ["style" => Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::htmlHrefStyle . "width:100%;line-height: 2;"]), [
                            "a" => [
                                ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/login", "text" => "Log in", "title" => "Click to log in your account"],
                                ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url . "account/recovery", "text" => "Forget Account?", "title" => "Click to recovery your account if you forget password or account"],
                                ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";font-size:15px;", "href" => Memory::Data("framework")->host->url, "text" => "Back to home", "title" => "Click to go back to home"]
                            ],
                        ]);

                    /*end of create page*/
                    } else {
                        Runtime::redirect();
                    }
                } else {
                    Runtime::redirect();
                }
            } /*take action in welcome page on account area*/
            elseif (_String::lower($this->request["method"]) === _String::lower("welcome")) {
                _Debug::preOutput($_SESSION);
                _Debug::preOutput($_GET);
                /**
                 * url
                 * POST [HOST]/account/welcome?t=encrypted_time&sc=encrypted_secret_code
                 * Return url
                 * GET [HOST]/account/username?t=encrypted_time&sc=encrypted_secret_code&error=encrypted_message
                 * GET [HOST]/account/username?t=encrypted_time&sc=encrypted_secret_code&success=encrypted_message
                 * GET [HOST]/account/username?t=encrypted_time&sc=encrypted_secret_code&notify=encrypted_message
                 */

                if (array_key_exists("t", $_GET)) {
                    _Debug::preOutput(Decryption::dynamic($_GET["t"]));
                    if (array_key_exists("sc", $_GET)) {

                        /*set text for title*/
                        Ui::text($title, " || " . _String::ucwords($this->request["method"]));
                        Ui::assignAttributes($template_body, ["style" => "height: 700px;align-items: center;justify-content: center;"]);

                        /*add template body*/
                        $welcomeBody = Ui::element($template_body, "ms-app-welcome-box", [
                            "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;padding: 20px;border-radius:10px;text-align: left;font-size: 16px;height:500px;width: 370px;" . Ui::css["box-shadow"] . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
                        ]);
                        Ui::element($welcomeBody, "img", ["style" => Ui::htmlHrefStyle . "width:100px;height:100px;border-radius: 50%;margin-bottom: 15px;", "src" => Storage::getAssetsPath("images_img-avatar3.png", "remote")]);

                        /*catch error*/
                        if (array_key_exists("error", $_GET) || array_key_exists("success", $_GET) || array_key_exists("notify", $_GET)) {
                            $this->board("message", $welcomeBody);
                        }

                        /*$dtlOfUser = $this->conOfDatabase->getDetailsByItem(["code"=>Decryption::dynamic(_Array::value($_GET,"sc"))]);*/
                        if (array_key_exists("email", (array)Session::get("me"))) {
                            $item = Ui::element(Ui::element($welcomeBody, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-success box-shadow-light"]);
                            Ui::element(Ui::element($item, 'symbol', ['class' => "box-success-symbol"]), 'i', ['class' => "fa fa-check"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "EMAIL : " . _String::upper(_Array::value((array)Session::get("me"), "email")));
                        } else {
                            $item = Ui::element(Ui::element($welcomeBody, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-danger box-shadow-light"]);
                            Ui::element(Ui::element($item, 'symbol', ['class' => "box-danger-symbol"]), 'i', ['class' => "fa fa-times"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "E-mail is empty.");
                        }

                        if (array_key_exists("username", (array)Session::get("me"))) {
                            $item = Ui::element(Ui::element($welcomeBody, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-success box-shadow-light"]);
                            Ui::element(Ui::element($item, 'symbol', ['class' => "box-success-symbol"]), 'i', ['class' => "fa fa-check"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "USERNAME : " . _String::upper(_Array::value((array)Session::get("me"), "username")));
                        } else {
                            $item = Ui::element(Ui::element($welcomeBody, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-danger box-shadow-light"]);
                            Ui::element(Ui::element($item, 'symbol', ['class' => "box-danger-symbol"]), 'i', ['class' => "fa fa-times"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Username isn't set.");
                        }


                        if (array_key_exists("password", (array)Session::get("me"))) {
                            $item = Ui::element(Ui::element($welcomeBody, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-success box-shadow-light"]);
                            Ui::element(Ui::element($item, 'symbol', ['class' => "box-success-symbol"]), 'i', ['class' => "fa fa-check"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "PASSWORD : " . _Array::value((array)Session::get("me"), "password"));
                        } else {
                            $item = Ui::element(Ui::element($welcomeBody, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-danger box-shadow-light"]);
                            Ui::element(Ui::element($item, 'symbol', ['class' => "box-danger-symbol"]), 'i', ['class' => "fa fa-times"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Password isn't set.");
                        }
                        /**
                         * <input type="submit" id="login-button" name="login" class="button button-primary" value="Log In"/>
                         * */
                        /*create command element*/
                        /*create update profile button*/
                        Ui::element(Ui::element($welcomeBody, "command", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"]]), "a", [
                            "href" => Memory::Data("framework")->host->url . "account/profile?a=" . time() . "&t=update&sc=" . _Array::value((array)Session::get("me"), "code"),
                            "class" => "button button-primary", "text" => "Update Profile", "style" => "display: flex;justify-content: center;align-items: center;"]);
                    /*end of create page*/
                    } else {
                        Runtime::redirect();
                    }
                } else {
                    Runtime::redirect();
                }
            } /*take action in profile page on account area*/
            elseif (_String::lower($this->request["method"]) === _String::lower("profile")) {
                /*check session validity for current user*/
                Session::validity();


                /**
                 * url
                 * GET [HOST]/account/welcome?a=encrypted_time&t=encrypted_action_status&sc=encrypted_secret_code
                 */

                /*
                 * verify secret code form $_GET
                */
                $detailsOfUser = [];
                if (array_key_exists("sc", $_GET)) {
                    /*if secret code does not match with logged user or not found any user, then redirect to logged user's profile*/
                    if (is_numeric(_Array::value($_GET, "sc")) && Number::filterInt(_Array::value($_GET, "sc")) !== _Array::value((array)Session::get("me"), "code")) {
                        $detailsOfUser = $this->conOfDatabase->getDetailsByItem(DB::USERS_LIST_TABLE, ["code" => _Array::value($_GET, "sc")]);

                        if (count($detailsOfUser) <= 0) {
                            Runtime::redirect("account/profile?a=" . time() . "&t=view&sc=" . _Array::value((array)Session::get("me"), "code"));
                        }
                    }
                } else {
                    $detailsOfUser = (array)Session::get("me");
                }


                /*verify content view mode for actual user*/
                $viewMode = "view";
                if (array_key_exists("t", $_GET)) {
                    if (_Array::value($_GET, "t") === "update") {
                        if (_Array::value($detailsOfUser, "code") === _Array::value((array)Session::get("me"), "code")) {
                            $viewMode = "edit";
                        } else {
                            Runtime::redirect("account/profile?a=" . time() . "&t=view&sc=" . _Array::value($_GET, "sc"));
                        }
                    }
                }


                /*_Debug::preOutput($_GET);
                _Debug::preOutput($detailsOfUser);
                _Debug::preOutput($viewMode);*/

                /*if logged user's want to edit her/his profile, then show logged user's profile with view only mode */
                /*view only mode interface*/
                /*set text for title*/
                Ui::text($title, " || " . _String::ucwords($this->request["method"]));
                Ui::assignAttributes($template_body, ["style" => "height: 700px;align-items: start;justify-content: left;"]);

                /*add template body*/
                $profileBody = Ui::element($template_body, "ms-app-profile-box", [
                    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: white;/*padding: 20px;*/border-radius:10px;text-align: left;font-size: 16px;width: -moz-available;width: -webkit-fill-available;" . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
                ]);

                /*profile cover*/
                Ui::element($profileBody, "ms-app-profile-cover", [
                    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";background: lightgray;text-align: center;font-size: 16px;height:125px;width: -moz-available;width: -webkit-fill-available;" . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
                ]);
                /*profile photo*/
                Ui::element(Ui::element($profileBody, "ms-app-profile-user-photo", [
                    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";text-align: center;font-size: 16px;height:100px;width: -moz-available;width: -webkit-fill-available;" . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
                ]), "img", ["style" => Ui::htmlHrefStyle . "width:150px;height:150px;border-radius: 50%;margin-bottom: 15px;margin-top: -80px;padding: 10px;background: white;" . Ui::css["box-shadow"], "src" => Storage::getAssetsPath("images_img-avatar3.png", "remote")]);

                /*Ui::element($profileBody, "ms-app-profile-menubar", [
                    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";text-align: center;font-size: 16px;height:80px;width: -moz-available;width: -webkit-fill-available;box-shadow: 1px 3px 4px rgba(0,0,0,.12),1px 1px 2px rgba(0,0,0,.24);margin-bottom: 10px;border-top: 1px solid rgba(0,0,0,.12);width: 1024px;". Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
                ]);*/


                $tabList = [
                    ["url" => "&tab=summery", "name" => "Summery", "tooltip" => "Summery"],
                    ["url" => "&tab=basic", "name" => "Basic", "tooltip" => "Basic Information"],
                    ["url" => "&tab=work", "name" => "Work", "tooltip" => "Work Information"],
                    ["url" => "&tab=academic", "name" => "Academic", "tooltip" => "Academic Information"],
                    ["url" => "&tab=payment", "name" => "Payment", "tooltip" => "Payment Information"],
                    ["url" => "&tab=security", "name" => "Security", "tooltip" => "Login & Security Information"],
                ];
                $commonStyleStringForLinks = Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";height: inherit;width: 120px;text-transform: capitalize;" . Ui::css["display-flex"] . Ui::css["center"];
                /*Ui::elementList(Ui::element($profileBody, "ms-app-profile-tab", [
                    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";text-align: center;font-size: 16px;height:50px;width: -moz-available;width: -webkit-fill-available;width: 1024px;margin-bottom: 10px;border-top: 1px solid rgba(0,0,0,.12);box-shadow: 1px 3px 4px rgba(0,0,0,.12),1px 1px 2px rgba(0,0,0,.24);" . Ui::css["display-flex"] . Ui::css["flex-row"] . Ui::css["center"],]), [
                    "a" => [
                        ["href" => "#", "style" => $commonStyleStringForLinks, "title" => "Summery", "text" => "Summery"],
                        ["href" => "#", "style" => $commonStyleStringForLinks, "title" => "Basic Information", "text" => "Basic"],
                        ["href" => "#", "style" => $commonStyleStringForLinks, "title" => "Work Information", "text" => "Work"],
                        ["href" => "#", "style" => $commonStyleStringForLinks, "title" => "Academic Information", "text" => "Academic"],
                        ["href" => "#", "style" => $commonStyleStringForLinks, "title" => "Login & Security Information", "text" => "Security"],],
                ]);*/
                /*
                 * CMOS::Data("framework")->host->url . "account/profile?a=" . time() . "&t="._Array::value($_GET, "t")."&sc=" . _Array::value($detailsOfUser, "code")
                 * */

                $parentElement = Ui::element($profileBody, "ms-app-profile-tab", ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";text-align: center;font-size: 16px;height:50px;width: -moz-available;width: -webkit-fill-available;width: 1024px;margin-bottom: 10px;border-top: 1px solid rgba(0,0,0,.12);box-shadow: 1px 3px 4px rgba(0,0,0,.12),1px 1px 2px rgba(0,0,0,.24);" . Ui::css["display-flex"] . Ui::css["flex-row"] . Ui::css["center"],]);
                foreach ($tabList as $tab) {
                    Ui::element($parentElement, "a", ["href" => Memory::Data("framework")->host->url . "account/profile?a=" . time() . "&t=" . _Array::value($_GET, "t") . "&sc=" . _Array::value($detailsOfUser, "code") . $tab["url"], "style" => $commonStyleStringForLinks, "title" => $tab["tooltip"], "text" => $tab["name"]]);
                }

                $profileContent = Ui::element($profileBody, "ms-app-profile-user-content", [
                    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["black"] . ";text-align: center;font-size: 14px;width: 1024px;" . Ui::css["display-flex"] . Ui::css["flex-column"] . Ui::css["center"],
                ]);

                /*catch error*/
                if (array_key_exists("error", $_GET) || array_key_exists("success", $_GET) || array_key_exists("notify", $_GET)) {
                    $this->board("message", $profileContent);
                }

                /*_Debug::preOutput($viewMode);
                _Debug::preOutput($detailsOfUser);*/


                $currentTab = "summery";
                if (array_key_exists("tab", $_GET)) {
                    if (_String::lower(_Array::value($_GET, "tab")) === _String::lower("summery")) {
                        _Debug::preOutput(_String::ucfirst(_Array::value($_GET, "tab")) . " page");


                        /*$dtlOfUser = $this->conOfDatabase->getDetailsByItem(["code"=>Decryption::dynamic(_Array::value($_GET,"sc"))]);*/
                        if (array_key_exists("email", $detailsOfUser)) {
                            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-success box-shadow-light"]);
                            Ui::element(Ui::element($item, 'symbol', ['class' => "box-success-symbol"]), 'i', ['class' => "fa fa-check"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "EMAIL : " . _String::upper(_Array::value($detailsOfUser, "email")));
                        } else {
                            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-danger box-shadow-light"]);
                            Ui::element(Ui::element($item, 'symbol', ['class' => "box-danger-symbol"]), 'i', ['class' => "fa fa-times"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "E-mail is empty.");
                        }

                        if (array_key_exists("username", $detailsOfUser)) {
                            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-success box-shadow-light"]);
                            Ui::element(Ui::element($item, 'symbol', ['class' => "box-success-symbol"]), 'i', ['class' => "fa fa-check"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "USERNAME : " . _String::upper(_Array::value($detailsOfUser, "username")));
                        } else {
                            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-danger box-shadow-light"]);
                            Ui::element(Ui::element($item, 'symbol', ['class' => "box-danger-symbol"]), 'i', ['class' => "fa fa-times"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Username isn't set.");
                        }


                        if (array_key_exists("password", $detailsOfUser)) {
                            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-success box-shadow-light"]);
                            Ui::element(Ui::element($item, 'symbol', ['class' => "box-success-symbol"]), 'i', ['class' => "fa fa-check"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "PASSWORD : " . _Array::value($detailsOfUser, "password"));
                        } else {
                            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-danger box-shadow-light"]);
                            Ui::element(Ui::element($item, 'symbol', ['class' => "box-danger-symbol"]), 'i', ['class' => "fa fa-times"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Password isn't set.");
                        }
                    }
                    if (_Array::value($_GET, "tab") === "basic") {
                        /*collect all records about current user*/
                        $basicOfUser = $this->conOfDatabase->getDetailsByItem(DB::USERS_BASIC_INFO_LIST_TABLE, ["user" => _Array::value($detailsOfUser, "id")]);
                        if (count($basicOfUser)>0) {
                            _Debug::preOutput($basicOfUser);
                            $viewBoard = Ui::element(Ui::element(Ui::element($profileContent, 'basic', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'info', ['class' => "box-message box-success box-shadow-light"]), 'content', ['class' => 'notify-md-content']);
                            Ui::text(Ui::element($viewBoard, 'title', ['style' => 'font-size:20px;']), "Content is empty.");
                            Ui::text($viewBoard, "Content is empty.");
                        } else {
                            $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-danger box-shadow-light"]);
                            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Content is empty.");
                        }
                    }
                    if (_Array::value($_GET, "tab") === "academic") {
                        $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-danger box-shadow-light"]);
                        Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Content is empty.");
                    }
                    if (_Array::value($_GET, "tab") === "work") {
                        $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-danger box-shadow-light"]);
                        Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Content is empty.");
                    }
                    if (_Array::value($_GET, "tab") === "payment") {
                        $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-danger box-shadow-light"]);
                        Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Content is empty.");
                    }
                    if (_Array::value($_GET, "tab") === "security") {
                        $item = Ui::element(Ui::element($profileContent, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]), 'item', ['class' => "box-message box-danger box-shadow-light"]);
                        Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), "Content is empty.");
                    }
                }


                if (_Array::value($detailsOfUser, "code") === _Array::value((array)Session::get("me"), "code")) {
                    /**
                     * <a href="http://localhost/account/profile?a=cXNlMlpYdkZXREhnRE9jWTlXRFBBUT09Ok1pc2h1c29mdDqsaz4P6DrZ/o393+2OU5Aj&amp;t=T1UvR0dLeFVZK2Q5cDkxTlVUT1RLZz09Ok1pc2h1c29mdDq9nEvnsxz9ma9ydFOVNMk+&amp;sc=MXVVNUp3Z0Z5SXprM0wxM1NRbjBvUT09Ok1pc2h1c29mdDqcfuCfdL5xeb0DZ/nvFUHO" class="button button-primary" style="display: flex;justify-content: center;align-items: center;">Update Profile</a>
                     * <a href="http://localhost/account/profile?a=1611205518&t=view&sc=12111931" class="button button-primary" style="display: flex;justify-content: center;align-items: center;">Update Profile</a>
                     * */
                    /*create command element*/
                    /*create update profile button*/
                    Ui::element(Ui::element($profileContent, "command", ["style" => Ui::htmlHrefStyle . Ui::css["display-flex"] . Ui::css["flex-column"]]), "a", [
                        "href" => Memory::Data("framework")->host->url . "account/profile?a=" . time() . "&t=update&sc=" . _Array::value((array)Session::get("me"), "code"),
                        "class" => "button button-primary", "text" => "Update Profile", "style" => "display: flex;justify-content: center;align-items: center;"]);
                }

                /*end of profile page*/
            } /*take action in verification page on account area*/
            elseif (_String::lower($this->request["method"]) === _String::lower("verification")) {
                /**
                 * url
                 * POST [HOST]/account/verification
                 */

                /*_Debug::preOutput($_POST);exit();*/
                if (count($_POST) > 0) {
                    _Debug::preOutput($_POST);
                    if (array_key_exists("account", $_POST)) {
                        if (_Array::value($_POST, "account") === "create") {
                            if (Validator::check($_POST, ["time" => "required", "create" => "required", "email" => "required", "button" => "required"])) {
                                if (Validator::validEmail(_Array::value($_POST, "email"))) {
                                    //_Debug::preOutput($this->conOfDatabase->select("system")->read("users"));
                                    if ($this->conOfDatabase->AlreadyIn(["email" => _Array::value($_POST, "email")])) {
                                        Runtime::redirect(_Array::value($_POST, "redirect") . "?error=" . Encryption::dynamic("Your email address already registered. Please enter new email address."));
                                    //echo "old member";
                                    } else {
                                        //echo "new member";
                                        if ($this->conOfDatabase->insertEmailOfNewUser(_Array::value($_POST, "email"))) {
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
                                    if ($this->conOfDatabase->AlreadyIn(["email" => _String::lower(_Array::value($_POST, "email"))])) {
                                        _Debug::preOutput("Registered member");
                                        $dtlOfUser = $this->conOfDatabase->getDetailsByItem(DB::USERS_LIST_TABLE, ["email" => _String::lower(_Array::value($_POST, "email"))]);
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
                                    //_Debug::preOutput($this->conOfDatabase->select("system")->read("users"));
                                    if ($this->conOfDatabase->AlreadyIn(["username" => _Array::value($_POST, "username")])) {
                                        //Runtime::redirect("account/updatePassword");
                                        echo "old member";
                                        if ($this->conOfDatabase->AlreadyIn(["password" => _Array::value($_POST, "password")])) { /*clients password not encrypt for experimental*/
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
                                        if ($this->conOfDatabase->AlreadyIn(["code" => Number::filterInt(Decryption::dynamic($security))])) {
                                            //$dtlOfUser = $this->conOfDatabase->getDetailsByItem(["code"=>Number::filterInt(Decryption::dynamic($security))]);
                                            $dtlOfUser = $this->conOfDatabase->getUsersInfoByActivationCode(Number::filterInt(Decryption::dynamic($security)));
                                            if (array_key_exists("activation", $dtlOfUser)) {
                                                if (_Array::value($dtlOfUser, "activation") === "yes") {
                                                    if (array_key_exists("username", $dtlOfUser)) {
                                                        if (Decryption::dynamic(_Array::value($_POST, "type")) === "update") {
                                                            if ($this->conOfDatabase->updateUsernameOfUser(
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
                                                            if ($this->conOfDatabase->updateUsernameOfUser(
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
            } /*take action in activation page on account area*/
            elseif (_String::lower($this->request["method"]) === _String::lower("activation")) {
                _Debug::preOutput("Time:" . time());
                _Debug::preOutput("Encryption:" . Encryption::dynamic(51225040));
                _Debug::preOutput("Original:" . Decryption::dynamic(Encryption::dynamic(51225040)));
                /*
                 * URl
                 * GET [HOSTED_SERVER]/account/activation/time?sc=encrypted_secret_code
                 * */
                /*set text for title*/
                Ui::text($title, " || " . _String::ucfirst($this->request["method"]));
                Ui::assignAttributes($template_body, ["style" => "display: flex;flex-direction: column;width: 100%;height: 700px;align-items: center;justify-content: center;"]);

                /*add activation body*/
                $activation = Ui::element($template_body, "activation", [
                    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["lightgrey"] . ";padding: 35px;text-align: center;font-size: 30px;font-weight: bold;" . Ui::css["display-flex"] . Ui::css["flex-column"],
                ]);

                if (count($this->request["arguments"]) > 0) {
                    $time = array_shift($this->request["arguments"]);

                    if (array_key_exists("sc", $_GET)) {
                        $activationCode = _Array::value($_GET, "sc");
                        if (is_numeric(Decryption::dynamic($activationCode))) {
                            _Debug::preOutput("Check before call:" . Number::filterInt(Decryption::dynamic($activationCode)));
                            _Debug::preOutput($this->conOfDatabase->AlreadyIn(["code" => Number::filterInt(Decryption::dynamic($activationCode))]));
                            if ($this->conOfDatabase->AlreadyIn(["code" => Number::filterInt(Decryption::dynamic($activationCode))])) {
                                $dtlOfUser = $this->conOfDatabase->getDetailsByItem(DB::USERS_LIST_TABLE, ["code" => Number::filterInt(Decryption::dynamic($activationCode))]);
                                _Debug::preOutput("Founded Details:");
                                _Debug::preOutput($this->conOfDatabase->getDetailsByItem(DB::USERS_LIST_TABLE, ["code" => "51225040"]));

                                if (array_key_exists("activation", $dtlOfUser)) {
                                    if (_Array::value($dtlOfUser, "activation") === "no") {
                                        if ($this->conOfDatabase->activeAccountOfUser(
                                            _Array::value($dtlOfUser, "email"),
                                            Number::filterInt(Decryption::dynamic($activationCode)),
                                            "yes",
                                            $time,
                                            time()
                                        )) {
                                            Ui::element($activation, "message", ["style" => Ui::htmlHrefStyle,
                                                "text" => "Your account activated successfully."]);
                                        } else {
                                            Ui::element($activation, "message", ["style" => Ui::htmlHrefStyle,
                                                "text" => "We can not activate new account request."]);
                                        }
                                    } else {
                                        Ui::element($activation, "message", ["style" => Ui::htmlHrefStyle,
                                            "text" => "Your account already activated. Please login to your account to get access."]);
                                    }
                                } else {
                                    Ui::element($activation, "message", ["style" => Ui::htmlHrefStyle,
                                        "text" => "Your account has been corrupted. Please create a new account to get access."]);
                                }
                            } else {
                                Ui::element($activation, "message", ["style" => Ui::htmlHrefStyle,
                                    "text" => "Your account has been corrupted. Please recover your account to get access."]);
                            }
                        } else {
                            Ui::element($activation, "message", ["style" => Ui::htmlHrefStyle,
                                "text" => "Due to invalid or corrupted activation code, your account activation failed. Please try again."]);
                        }
                    } else {
                        Ui::element($activation, "message", ["style" => Ui::htmlHrefStyle,
                            "text" => "Due to invalid request, your account activation failed. Please try again."]);
                    }
                } else {
                    Runtime::redirect();
                }
            } /*take action in updatePassword page on account area*/
            elseif (_String::lower($this->request["method"]) === _String::lower("updatePassword")) {
                /*set text for title*/
                Ui::text($title, " || " . _String::ucfirst($this->request["method"]));

                Ui::assignAttributes($template_body, ["style" => "display: flex;flex-direction: column;width: 100%;height: 700px;align-items: center;justify-content: center;"]);


                /*add template body*/
                $loginBody = Ui::element($template_body, "ms-app-paragraph", [
                    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["lightgrey"] . ";padding: 35px;text-align: center;font-size: 30px;font-weight: bold;" . Ui::css["display-flex"] . Ui::css["flex-column"],
                ]);

                Ui::element($loginBody, "error-code", ["style" => Ui::htmlHrefStyle . "font-size: 120px;", "text" => Http::NOT_FOUND]);
                Ui::element($loginBody, "error-message", ["style" => Ui::htmlHrefStyle, "text" => "Test message"]);
            } /*take action in recovery page on account area*/
            elseif (_String::lower($this->request["method"]) === _String::lower("recovery")) {
                /*set text for title*/
                Ui::text($title, " || " . _String::ucfirst($this->request["method"]));

                Ui::assignAttributes($template_body, ["style" => "display: flex;flex-direction: column;width: 100%;height: 700px;align-items: center;justify-content: center;"]);


                /*add template body*/
                $loginBody = Ui::element($template_body, "ms-app-paragraph", [
                    "style" => Ui::htmlHrefStyle . "color:" . Ui::color["lightgrey"] . ";padding: 35px;text-align: center;font-size: 30px;font-weight: bold;display: flex;flex-direction: column;",
                ]);

                Ui::element($loginBody, "error-code", ["style" => Ui::htmlHrefStyle . "font-size: 120px;", "text" => Http::NOT_FOUND]);
                Ui::element($loginBody, "error-message", ["style" => Ui::htmlHrefStyle, "text" => "Test message"]);
            } /*take action in default page on account area*/
            else {
                Firewall::runtimeFailure("Not Found", [
                    "debug" => ["file" => (new Browser())->getURLPath(), "location" => (new Browser())->getURLPath(), "description" => "Your requested file not found or deleted!!"],
                    "error" => ["description" => "Your requested file not found or deleted!!"]
                ]);
            }


            /*add template footer*/


            $this->widget("footer", $template);
        });
    }
}
