<?php

namespace Mishusoft\Framework\Chipsets\System;

use Mishusoft\Framework\Chipsets\Framework;
use Mishusoft\Framework\Chipsets\Http;
use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Http\IP;
use Mishusoft\Framework\Chipsets\Media;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Stream;

class Firewall
{
    /*declare version*/
    const VERSION = "1.0.2";


    const firewallConfigFile = PHP_RUNTIME_REGISTRIES_PATH . "firewall.json";
    const firewallLogFile = PHP_RUNTIME_REGISTRIES_PATH . "access.logs.firewall.json";

    const requiredKeys = [
        "status" => "enable",
        "hostname" => INSTALLED_HOST_NAME,
        "granted-device-access-limit-filter" => "enable",
        "granted-device-access-limit" => "600",
        "granted-device-time-limit" => "60",
        "granted-device-limit-time-format" => "minute",
        "blocked-device-access-limit-filter" => "enable",
        "blocked-device-access-limit" => "10",
        "blocked-device-time-limit" => "60",
        "blocked-device-limit-time-format" => "minute"
    ];

    const builtInConfig = [
        /*...self::requiredKeys,*/
        "granted-device-count-down-time" => [],
        "blocked-device-count-down-time" => [],
        "accept" => [
            "request-method" => [
                "get",
                "post",
                "accept",
                "ms-feedback-data",
                "options"
            ]
        ],
        "browser" => [
            "order" => "blacklist",
            "banned" => ["curl"],
            "whitelist" => [],
            "blacklist" => ["curl"]
        ],
        "ip" => [
            "order" => "blacklist",
            "banned" => [],
            "whitelist" => [],
            "blacklist" => []
        ],
        "device" => [
            "order" => "blacklist",
            "banned" => [],
            "whitelist" => [],
            "blacklist" => []
        ],
        "continent" => [
            "order" => "blacklist",
            "banned" => [],
            "whitelist" => [],
            "blacklist" => []
        ],
        "country" => [
            "order" => "blacklist",
            "banned" => [],
            "whitelist" => [],
            "blacklist" => []
        ],
        "city" => [
            "order" => "blacklist",
            "banned" => [],
            "whitelist" => [],
            "blacklist" => []
        ]
    ];


    /**
     * Check if access request is granted, else return false
     * @var bool
     */
    public bool $accessRequestProcessed = false;
    private Browser $browser;
    private array $firewallConfiguration = array();
    private string $action_status = "";
    private string $action_component = "";
    private string $msg_tab = "";
    private string $color = "#f22b08";
    private string $duration = "";
    private string $controller = "";
    private string $separator = "";
    private int $last_visit_duration = 0;

    /**
     * Firewall constructor.
     */
    public function __construct()
    {
        $this->browser = new Browser();
        $this->loadConfig();
        $this->filterHttpRequest(apache_request_headers());
    }


    /**
     * @return void
     */
    private function loadConfig(): void
    {
        /*
         * check firewall configuration file's ability
         * */
        if (!file_exists(self::firewallConfigFile)) {
            Stream::write(self::firewallConfigFile, array());
        }

        /*
         * Preparing to check firewall logs file.
         * */
        if (!file_exists(self::firewallLogFile)) {
            Stream::write(self::firewallLogFile, array());
        }

        /*
         * check read permission of configuration file
         * */
        if (is_readable(self::firewallConfigFile)) {
            /*
             * check configuration file's content are valid array
             * */
            if (is_array(json_decode(Stream::read(self::firewallConfigFile), true))) {
                $this->firewallConfiguration = json_decode(Stream::read(self::firewallConfigFile),true);
            }

            if (count($this->firewallConfiguration) > 0) {

                /*
                 * we need to array match
                 * if return false, then we need to replace and continue
                 * */

                if (count(array_diff_assoc(self::requiredKeys, $this->firewallConfiguration)) > 0) {
                    $replaced = array_replace_recursive($this->firewallConfiguration, self::requiredKeys);
                    if ($replaced !== null) {
                        $this->firewallConfiguration = $replaced;
                    }
                }
            } else {
                /*
                 * merge to default configuration
                 * */
                $this->firewallConfiguration = array_merge_recursive(self::requiredKeys, self::builtInConfig);
            }

            /*
             * if loaded firewall configuration is not valid array,
             * then delete configuration file and write new default data
             * */
            if (count($this->firewallConfiguration) === 10) {
                $config = array_replace_recursive($this->firewallConfiguration, self::builtInConfig);
                if ($config !== null) {
                    $this->firewallConfiguration = $config;
                }

            }

            /**
             * if firewall configuration file is empty,
             * then create configuration file and write new default data
             */

            if (is_array(json_decode(file_get_contents(self::firewallConfigFile), true))) {
                $firewall_array_keys = array_keys($this->firewallConfiguration);
                $firewall_file_array_keys = array_keys(json_decode(file_get_contents(self::firewallConfigFile), true));

                if (count(array_diff_assoc($firewall_array_keys, $firewall_file_array_keys)) > 0) {
                    $this->createConfiguration($this->firewallConfiguration);
                }
            } else {
                $this->createConfiguration($this->firewallConfiguration);
            }

        } else {
            trigger_error("Read permission denied for firewall config.");
        }
    }

    /**
     * @param array $config
     */
    private function createConfiguration(array $config): void
    {
        if (file_exists(self::firewallConfigFile)) {
            Stream::remove(self::firewallConfigFile);
        }
        Stream::write(self::firewallConfigFile, $config);
    }

    /**
     * @param array $request
     */
    private function filterHttpRequest(array $request): void
    {
        /*if (!array_key_exists("accept", $this->firewallConfiguration)) {
            $this->createConfiguration(self::builtInConfig, self::firewallConfigFile);
        }*/

        if (!in_array(_String::lower(_Array::value($_SERVER, "REQUEST_METHOD")),
            _Array::value(_Array::value($this->firewallConfiguration, "accept"), "request-method"))) {
            if (!$this->IsListed(IP::get())) {
                $this->action_status = "blocked";
                $this->action_component = "IP";
                $this->addIP(IP::get(), "blocked");
            }
        }

        if (is_array($request)) {
            foreach ($request as $key => $value) {
                if (_String::lower($key) === "host") {
                    if (_Array::value($this->firewallConfiguration, "hostname") !== $value) {
                        if (!$this->IsListed(IP::get())) {
                            $this->action_status = "blocked";
                            $this->action_component = "browser";
                            $this->addIP(IP::get(), "blocked");
                        }
                    }
                }
            }
        }
    }

    /**
     * @param string $item
     * @param string $list
     * @return bool
     */
    private function IsListed(string $item = "", string $list = "banned"): bool
    {
        if (!empty($item)) {
            $list = ($list === "blocked") ? "blacklist" : "banned";
            foreach ($this->firewallConfiguration as $key => $value) {
                if (is_array($this->firewallConfiguration[$key]) and array_key_exists($list, _Array::value($this->firewallConfiguration, $key))) {
                    if (in_array($item, _Array::value(_Array::value($this->firewallConfiguration, $key), $list))) {
                        return true;
                    }
                }
            }
        } else {
            trigger_error(join(["Item not parsed in ", __METHOD__]));
        }

        return false;
    }

    /**
     * @param string $ip
     * @param string $status
     */
    private function addIP(string $ip, string $status): void
    {
        $list = ($status === "blocked") ? "blacklist" : "$status";

        switch ($list) {
            case "banned":
                $this->removeFromList($ip, "blacklist");
                $this->updateList($ip, $list);
                break;
            case "blacklist":
                $this->removeFromList($ip, "banned");
                $this->removeFromList($ip, "whitelist");
                $this->updateList($ip, $list);
                break;
            case "whitelist":
                $this->removeFromList($ip, "banned");
                $this->removeFromList($ip, "blacklist");
                $this->updateList($ip, $list);
                break;
            default:
                break;

        }
    }

    /**
     * @param string $ip
     * @param string $list
     * @return void
     */
    private function removeFromList(string $ip, string $list): void
    {
        if (in_array($ip, $this->firewallConfiguration["ip"]["$list"])) {
            foreach ($this->firewallConfiguration["ip"]["$list"] as $key => $value) {
                if ($this->firewallConfiguration["ip"]["$list"][$key] === $ip) {
                    unset($this->firewallConfiguration["ip"]["$list"][$key]);
                    asort($this->firewallConfiguration["ip"]["$list"]);
                }
            }
        }
    }

    /**
     * @param string $ip
     * @param string $list
     */
    private function updateList(string $ip, string $list)
    {
        if (!in_array($ip, $this->firewallConfiguration["ip"]["$list"])) {
            array_push($this->firewallConfiguration["ip"]["$list"], $ip);
            Stream::saveToFile(self::firewallConfigFile, json_encode($this->firewallConfiguration));
        }
    }

    /**
     * @param string $status
     * @param array $message
     */
    public static function runtimeFailure(string $status, array $message)
    {
        foreach (Http::getErrorsRecord() as /*$errKey =>*/ $details) {
            if (array_key_exists("Description", $details) and _String::lower($details["Description"]) === _String::lower($status)) {
                if (Memory::Data("framework")->debug) {
                    if (array_key_exists("debug", $message)) {
                        if (array_key_exists("file", $message["debug"])) {
                            $message["debug"]["file"] = join(["File name: ", $message["debug"]["file"]]);
                        }
                        if (array_key_exists("location", $message["debug"])) {
                            $message["debug"]["location"] = join(["Location: ", $message["debug"]["location"]]);
                        }
                        if (array_key_exists("description", $message["debug"])) {
                            $message["debug"]["description"] = join(["Description: ", $message["debug"]["description"]]);
                        }
                    }
                    self::runtimeFailureUi($status, $message);
                } else {
                    if (array_key_exists("error", $message) and array_key_exists("description", $message["error"])) {
                        self::runtimeFailureUi($status, $message["error"]);
                    } else {
                        self::runtimeFailureUi("Not Found", ["description" => "Your requested document not found."]);
                    }
                }
            }
        }
    }


    /**
     * @param string $title
     * @param array $message
     */
    private static function runtimeFailureUi(string $title, array $message)
    {
        $request_method = (new Browser())->getRequestMethod();
        $request_address = (new Browser())->getVisitedPage();

        if ((new Browser())->getRequestMethod() === "OPTIONS") {
            /*add welcome not for http options method*/
            Media::StreamAsJson(array("message" => array("type" => "success", "contents" => "The HTTP OPTIONS method requests permitted to communicate for $request_address.")));
            Logger::write("The HTTP OPTIONS method requests permitted to communicate for $request_address.", PHP_ACCESS_LOG_FILE, "full");
        } else {
            Logger::write(array_key_exists("debug", $message) ? $message["debug"]["description"] : $message["description"] . " for $request_address.", PHP_ACCESS_LOG_FILE, "full");
            if (Memory::Data("framework")->debug) {
                /*add runtime failure ui*/
                Ui::HtmlInterface($title, function ($html, $head) use ($message, $request_address, $request_method, $title) {
                    Ui::text(Ui::element($head, "style"), "body{margin: 0;padding: 0;display: flex;justify-content: center;align-items: center;height: 445px;}");
                    $body = Ui::element($html, "body");
                    $welcome = Ui::element($body, "ms-app", ["style" => "width: 650px;box-sizing: border-box;border-radius: 5px;-webkit-border-radius: 5px;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);line-height:1.5;"]);
                    $template = Ui::element($welcome, "ms-app-content", ["style" => "display: block;margin: 0;padding: 0;text-align: left;border: 1px solid #f22b08;-webkit-border-radius: 5px;border-radius: 5px"]);
                    Ui::text(Ui::element($template, "ms-app-content-header", ["style" => "text-align:center;font-size: 18px;font-weight: 700;padding: 10px;color: #fff;display: block;background-color: #f22b08;user-select: none;-webkit-user-select: none;"]), $title);
                    $template_body = Ui::element($template, "ms-app-content-body", ["style" => "text-align:center;padding: 10px;display: block;"]);

                    /*add noscript to ui*/
                    Ui::setNoScriptText($template_body);
                    /*end of adding noscript*/

                    if (array_key_exists("debug", $message)) {
                        $debug = Ui::element($template_body, "ms-app-paragraph", ["style" => "font-size: 15px;line-height: 1.5;display: list-item;text-align: center;background: #f22b08;border-radius: 5px;padding: 5px;margin-top: 10px;color: white;user-select: none;-webkit-user-select: none;"]);
                        foreach ($message["debug"] as $value) {
                            Ui::text(Ui::element($debug,
                                "ms-app-paragraph", ["style" => "font-size: 15px;line-height: 1.5;display: flex;padding: 5px;color: white;user-select: none;-webkit-user-select: none;text-align: left;"]),
                                $value);
                        }
                    } else {
                        Ui::text(Ui::element($template_body,
                            "ms-app-paragraph", ["style" => "font-size: 15px;line-height: 1.5;display: flex;text-align: center;background: #f22b08;border-radius: 5px;padding: 5px;margin-top: 10px;color: white;user-select: none;-webkit-user-select: none;"]),
                            $message["description"]);
                    }

                    self::viewVisitorInfo($template_body, $request_method, $request_address);
                    Ui::addDefaultSignature($template_body);
                    Ui::text(Ui::element($body, "script"), "function fixWindowSize(){if(window.innerHeight < '445') {document.body.style = 'height:445px;';} else if(window.innerHeight > '445') {document.body.style = 'height:'+window.innerHeight + 'px';} else {if(window.innerHeight > '1024') {document.body.style = 'height:1024px;';}}}
                    window.addEventListener('resize', fixWindowSize);window.addEventListener('load', fixWindowSize);");
                }, Http::getErrorCode($title));
            } else {
                Ui::HtmlInterface($title, function ($html, $head) use ($message, $title) {
                    Ui::text(Ui::element($head, "style"), "body{margin: 0;padding: 0;display: flex;justify-content: center;align-items: center;height: 445px;}");

                    /*set id attribute for body*/
                    $body = Ui::element($html, 'body', ['style' => 'color: ' . Ui::color["black"] . ';margin:0;padding:0;font-family:Noto Sans']);

                    /*add noscript to ui*/
                    Ui::setNoScriptText($body);
                    /*end of adding noscript*/

                    /*create mishusoft application with html*/
                    $template = Ui::element($body, 'ms-app', ['style' => 'display: flex;flex-direction: column;width: 100%;']);

                    /*add template body*/
                    $notFoundBody = Ui::element(Ui::element($template, 'ms-app-body', ['style' => 'display: flex;flex-direction: column;width: 100%;height: 700px;align-items: center;justify-content: center;']),
                        'ms-app-paragraph', [
                            'style' => Ui::htmlHrefStyle . 'color:' . Ui::color['lightgrey'] . ';padding: 35px;text-align: center;font-size: 30px;font-weight: bold;display: flex;flex-direction: column;',
                        ]);

                    Ui::element($notFoundBody, 'error-code', ['style' => Ui::htmlHrefStyle . 'font-size: 120px;', 'text' => Http::getErrorCode($title)]);
                    Ui::element($notFoundBody, 'error-message', ['style' => Ui::htmlHrefStyle, 'text' => $message["description"]]);

                    /*add template footer*/
                    Ui::addDefaultSignature(Ui::element($template, 'ms-app-footer', [
                        'style' => 'display: flex;flex-direction: column;width: 100%;align-items: center;justify-content: center;padding-top: 10px;font-size: 14px;',]));/* text for system default signature*/
                    Ui::text(Ui::element($body, "script"), "function fixWindowSize(){if(window.innerHeight < '445') {document.body.style = 'height:445px;';} else if(window.innerHeight > '445') {document.body.style = 'height:'+window.innerHeight + 'px';} else {if(window.innerHeight > '1024') {document.body.style = 'height:1024px;';}}}
                    window.addEventListener('resize', fixWindowSize);window.addEventListener('load', fixWindowSize);");

                });
            }

            exit();
        }
    }

    /**
     * @param $body
     * @param string $request_method
     * @param string $request_address
     */
    private static function viewVisitorInfo($body, string $request_method, string $request_address)
    {
        Ui::text(Ui::element($body, "ms-app-paragraph",
            ["style" => "font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;border-top: groove;margin-top: 10px;"]),
            "User Agent: " . (new Browser())->getUserAgent());
        Ui::text(Ui::element($body, "ms-app-paragraph",
            ["style" => "font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;"]),
            "Request URL: $request_method \"$request_address\"");
        Ui::text(Ui::element($body, "ms-app-paragraph",
            ["style" => "font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;"]),
            "IP address: " . IP::get());

        /*avoid error country capturing*/
        if (_String::lower(IP::getCountry()) !== "unknown") {
            Ui::text(Ui::element($body, "ms-app-paragraph",
                ["style" => "font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;"]),
                "Country: " . IP::getCountry());
        } else {
            if (_String::lower(IP::getInfo("country")) !== "unknown location") {
                Ui::text(Ui::element($body, "ms-app-paragraph",
                    ["style" => "font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;"]),
                    "Country: " . IP::getInfo("country"));
            }
        }

        /*avoid error browser capturing*/
        if (_String::lower((new Browser())->getBrowserName()) !== "unknown") {
            Ui::text(Ui::element($body, "ms-app-paragraph",
                ["style" => "font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;"]),
                "Browser: " . (new Browser())->getBrowserNameFull());
        }

        /*avoid error device capturing*/
        if (_String::lower((new Browser())->getDeviceName()) !== "unknown") {
            Ui::text(Ui::element($body, "ms-app-paragraph",
                ["style" => "font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;"]),
                "Device: " . (new Browser())->getDeviceName() . " (" . _String::lower((new Browser())->getDeviceArchitecture()) . ")");
        }
    }


    public function makeAccessRequest()
    {
        /*
         * $cpuLoad = getServerLoad();
         *         if (is_null($cpuLoad)) {
         *             echo "CPU load not estimable (maybe too old Windows or missing rights at Linux or Windows)";
         *         }
         *         else {
         *             echo $cpuLoad . "%";
         *         }*/
        /*off check cpu load*/
        /*if ($this->getServerLoad() >= 80) {
            Firewall::runtimeFailure("Service Unavailable", [
                "debug" => ["file" => (new Browser())->getURLPath(), "location" => (new Browser())->getVisitedPage(), "description" => "CPU process over loaded!! Current: %" . $this->getServerLoad()],
                "error" => ["description" => "Server is very busy. Please try again later!!"]
            ]);
        }*/
        if ($this->firewallConfiguration["hostname"] !== $this->browser->getURLHostname()) {
            if (!$this->IsListed(IP::get())) {
                $this->action_status = "blocked";
                $this->action_component = "browser";
            }
        }

        if (in_array(IP::get(), $this->firewallConfiguration["ip"]["banned"])) {
            $this->action_status = "banned";
            $this->action_component = "IP";
        }
        if (in_array(_String::lower($this->browser->getBrowserName()), $this->firewallConfiguration["browser"]["banned"])) {
            $this->action_status = "banned";
            $this->action_component = "browser";
        }
        if (in_array(_String::lower($this->browser->getDeviceName()), $this->firewallConfiguration["device"]["banned"])) {
            $this->action_status = "banned";
            $this->action_component = "device";
        }
        if (in_array(_String::lower(IP::getInfo("continent")), $this->firewallConfiguration["continent"]["banned"])) {
            $this->action_status = "banned";
            $this->action_component = "continent";
        }
        if (in_array(_String::lower(IP::getInfo("country")), $this->firewallConfiguration["country"]["banned"])) {
            $this->action_status = "banned";
            $this->action_component = "country";
        }
        /*if (in_array(_String::lower(IP::getInfo("city")), $this->firewallConfiguration["city"]["banned"])) {
            $this->action_status = "banned";
            $this->action_component = "city";
        }*/

        if ($this->firewallConfiguration["browser"]["order"] === "blacklist") {
            if (in_array(_String::lower($this->browser->getBrowserName()), $this->firewallConfiguration["browser"]["blacklist"])) {
                $this->action_status = "blocked";
                $this->action_component = "browser";
            }
        }
        if ($this->firewallConfiguration["browser"]["order"] === "whitelist") {
            if (!in_array(_String::lower($this->browser->getBrowserName()), $this->firewallConfiguration["browser"]["whitelist"])) {
                $this->action_status = "blocked";
                $this->action_component = "browser";
            }
        }
        if ($this->firewallConfiguration["ip"]["order"] === "blacklist") {
            if (in_array(IP::get(), $this->firewallConfiguration["ip"]["blacklist"])) {
                $this->action_status = "blocked";
                $this->action_component = "IP";
            }
        }
        if ($this->firewallConfiguration["ip"]["order"] === "whitelist") {
            if (!in_array(IP::get(), $this->firewallConfiguration["ip"]["whitelist"])) {
                $this->action_status = "blocked";
                $this->action_component = "IP";
            }
        }
        if ($this->firewallConfiguration["device"]["order"] === "blacklist") {
            if (in_array(IP::get(), $this->firewallConfiguration["device"]["blacklist"])) {
                $this->action_status = "blocked";
                $this->action_component = "device";
            }
        }
        if ($this->firewallConfiguration["device"]["order"] === "whitelist") {
            if (!in_array(IP::get(), $this->firewallConfiguration["device"]["whitelist"])) {
                $this->action_status = "blocked";
                $this->action_component = "device";
            }
        }
        if ($this->firewallConfiguration["continent"]["order"] === "blacklist") {
            if (in_array(IP::get(), $this->firewallConfiguration["continent"]["blacklist"])) {
                $this->action_status = "blocked";
                $this->action_component = "continent";
            }
        }
        if ($this->firewallConfiguration["continent"]["order"] === "whitelist") {
            if (!in_array(IP::get(), $this->firewallConfiguration["continent"]["whitelist"])) {
                $this->action_status = "blocked";
                $this->action_component = "continent";
            }
        }
        if ($this->firewallConfiguration["country"]["order"] === "blacklist") {
            if (in_array(IP::get(), $this->firewallConfiguration["country"]["blacklist"])) {
                $this->action_status = "blocked";
                $this->action_component = "country";
            }
        }
        if ($this->firewallConfiguration["country"]["order"] === "whitelist") {
            if (!in_array(IP::get(), $this->firewallConfiguration["country"]["whitelist"])) {
                $this->action_status = "blocked";
                $this->action_component = "country";
            }
        }
        if ($this->firewallConfiguration["city"]["order"] === "blacklist") {
            if (in_array(IP::get(), $this->firewallConfiguration["city"]["blacklist"])) {
                $this->action_status = "blocked";
                $this->action_component = "city";
            }
        }
        if ($this->firewallConfiguration["city"]["order"] === "whitelist") {
            if (!in_array(IP::get(), $this->firewallConfiguration["city"]["whitelist"])) {
                $this->action_status = "blocked";
                $this->action_component = "city";
            }
        }

        if (!empty($this->action_status) and $this->action_status === "banned" || "blocked") {
            $this->storeFirewallLogs();
            $this->accessDefence($this->action_status);
            $this->accessRequestProcessed = false;
        } else {
            $this->action_status = "granted";
            $this->action_component = "browser";
            $this->storeFirewallLogs();
            $this->accessDefence($this->action_status);
            $this->accessRequestProcessed = true;
        }
    }

    private function storeFirewallLogs()
    {
        $logs = array();
        if (Stream::IsReadable(self::firewallLogFile)) {
            if (strlen(file_get_contents(self::firewallLogFile)) !== 0) {

                if (is_array(json_decode(file_get_contents(self::firewallLogFile), true))) {
                    $logs = array_merge($logs, json_decode(file_get_contents(self::firewallLogFile), true));
                } else {
                    $logs = array_merge($logs, self::builtInConfig);
                }

                if (count($logs) !== 0) {
                    if (array_key_exists($this->action_status, $logs)) {
                        if (is_array($logs[$this->action_status]) and array_key_exists(IP::get(), $logs[$this->action_status])) {
                            if (is_array($logs[$this->action_status][IP::get()]) and array_key_exists($this->browser->getBrowserNameFull(), $logs[$this->action_status][IP::get()])) {
                                if (is_array($logs[$this->action_status][IP::get()][$this->browser->getBrowserNameFull()]) and !array_key_exists(Time::getToday(), $logs[$this->action_status][IP::get()][$this->browser->getBrowserNameFull()])) {
                                    if (Stream::IsWriteable(self::firewallLogFile)) {
                                        Stream::saveToFile(self::firewallLogFile,
                                            json_encode(
                                                array_merge($logs, array($this->action_status =>
                                                    array_merge($logs[$this->action_status], array(IP::get() =>
                                                        array_merge($logs[$this->action_status][IP::get()], array($this->browser->getBrowserNameFull() =>
                                                            array_merge($logs[$this->action_status][IP::get()][$this->browser->getBrowserNameFull()], $this->getNewVisitorTimeBased())))
                                                    ))))));
                                    }
                                }
                            } else {
                                if (Stream::IsWriteable(self::firewallLogFile)) {
                                    Stream::saveToFile(self::firewallLogFile,
                                        json_encode(
                                            array_merge($logs, array($this->action_status =>
                                                array_merge($logs[$this->action_status], array(IP::get() =>
                                                        array_merge($logs[$this->action_status][IP::get()], $this->getNewVisitorBrowserBased()))
                                                )))));
                                }
                            }
                        } else {
                            if (Stream::IsWriteable(self::firewallLogFile)) {
                                Stream::saveToFile(self::firewallLogFile,
                                    json_encode(
                                        array_merge($logs, array($this->action_status =>
                                                array_merge($logs[$this->action_status], $this->getNewVisitorIPBased()))
                                        )));
                            }
                        }
                    } else {
                        if (Stream::IsWriteable(self::firewallLogFile)) {
                            Stream::saveToFile(self::firewallLogFile,
                                json_encode(
                                    array_merge($logs, array($this->action_status => $this->getNewVisitorIPBased())
                                    )));
                        }
                    }
                } else {
                    if (Stream::IsWriteable(self::firewallLogFile)) {
                        Stream::saveToFile(self::firewallLogFile, json_encode(array($this->action_status => $this->getNewVisitorIPBased())));
                    }
                }
            } else {
                if (Stream::IsWriteable(self::firewallLogFile)) {
                    Stream::saveToFile(self::firewallLogFile, json_encode(array($this->action_status => $this->getNewVisitorIPBased())));
                }
            }
        } else {
            trigger_error(self::firewallLogFile . " not readable");
        }
    }

    /**
     * @return array[]
     */
    private function getNewVisitorTimeBased(): array
    {
        return array(
            Time::getToday() => array(
                "ip" => IP::get(),
                "country" => IP::getCountry(),
                "location" => IP::getInfo(),
                "device" => $this->browser->getDeviceName() . " (" . $this->browser->getDeviceArchitecture() . ")",
                "browser" => $this->browser->getBrowserNameFull(),
                "UUAS" => $this->browser->getUserAgent(),
                "url" => $this->browser->VisitedPageURL($_SERVER),
                "status" => $this->action_status,
                "component" => $this->action_component,
                "visit-time" => Time::getToday(),
            )
        );
    }

    /**
     * @return \array[][]
     */
    private function getNewVisitorBrowserBased(): array
    {
        return array($this->browser->getBrowserNameFull() => $this->getNewVisitorTimeBased());
    }

    /**
     * @return \array[][][]
     */
    private function getNewVisitorIPBased(): array
    {
        return array(IP::get() => $this->getNewVisitorBrowserBased());
    }

    /**
     * @param string $status
     */
    private function accessDefence(string $status)
    {
        if (array_key_exists("$status-device-access-limit-filter", $this->firewallConfiguration) and $this->firewallConfiguration["$status-device-access-limit-filter"] === "enable") {
            if (Stream::IsReadable(self::firewallLogFile)) {
                if (!empty(file_get_contents(self::firewallLogFile))) {
                    $logs = json_decode(file_get_contents(self::firewallLogFile), true);
                    if (is_array($logs) and count($logs) !== 0) {
                        if (array_key_exists($status, $logs)) {
                            if (is_array($logs[$status]) and array_key_exists(IP::get(), $logs[$status])) {
                                $times = array();
                                $countdownTimes = array();
                                foreach (array_keys($logs[$status][IP::get()]) as $browser) {
                                    foreach ($logs[$status][IP::get()][$browser] as $time => $log) {
                                        $times = array_merge($times, [$time => $log]);
                                        if (!array_key_exists(IP::get(), $this->firewallConfiguration["$status-device-count-down-time"])) {
                                            $this->firewallConfiguration["$status-device-count-down-time"][IP::get()] = "";
                                        }
                                        if ($time >= $this->firewallConfiguration["$status-device-count-down-time"][IP::get()]) {
                                            $countdownTimes = array_merge($countdownTimes, [$time => $log]);
                                        }
                                    }
                                }
                                ksort($times);
                                $times = array_reverse($times);
                                /*$total = count($times);
                                $countdown = count($countdownTimes);
                                $visitedBrowsersList = array_keys($logs[$status][IP::get()]);*/

                                $now = array_shift($times);
                                $previous = array_shift($times);
                                if (is_array($now) and array_key_exists("visit-time", $now) and is_array($previous) and array_key_exists("visit-time", $previous)) {
                                    /*check countdown time is set or not*/
                                    /*Returns true if $x is greater than or equal to $y*/
                                    if (array_key_exists("$status-device-count-down-time", $this->firewallConfiguration)) {
                                        /*check countdown time is not empty, then calculate accurate time*/
                                        if (!empty($this->firewallConfiguration["$status-device-count-down-time"])) {
                                            /*preOutput($this->firewallConfiguration["$status-device-count-down-time"]);*/
                                            /*Set new time, if set time to current time more than 60 minutes, set new time as current time*/
                                            $this->last_visit_duration = intval((strtotime($now["visit-time"]) - strtotime($this->firewallConfiguration["$status-device-count-down-time"][IP::get()])) / 60);
                                            if ($this->last_visit_duration >= $this->firewallConfiguration["$status-device-time-limit"]) {
                                                $this->firewallConfiguration["$status-device-count-down-time"][IP::get()] = $now["visit-time"];
                                                Stream::saveToFile(self::firewallConfigFile, json_encode($this->firewallConfiguration));
                                            } /*Set new time, if current time to previous time set more than 10 minutes*/
                                            else {
                                                /*Set new time, if previous time set more than 10 minutes*/
                                                $this->last_visit_duration = intval((strtotime($now["visit-time"]) - strtotime($previous["visit-time"])) / 60);
                                                if ($this->last_visit_duration > 10) {
                                                    /*preOutput("Setting previous time!!");*/
                                                    $this->firewallConfiguration["$status-device-count-down-time"][IP::get()] = $previous["visit-time"];
                                                    Stream::saveToFile(self::firewallConfigFile, json_encode($this->firewallConfiguration));
                                                    //preOutput($this->firewallConfiguration);
                                                }
                                            }
                                        } /*countdown time is empty, now we need to set new time for calculate accurate time*/
                                        else {
                                            /*Set new time, if current time to previous time set more than 60 minutes*/
                                            $this->last_visit_duration = intval((strtotime($now["visit-time"]) - strtotime($previous["visit-time"])) / 60);
                                            if ($this->last_visit_duration >= $this->firewallConfiguration["$status-device-time-limit"]) {
                                                $this->firewallConfiguration["$status-device-count-down-time"][IP::get()] = $now["visit-time"];
                                            } else {
                                                /*Set new time, if current time to previous time set less than 60 minutes*/
                                                $this->firewallConfiguration["$status-device-count-down-time"][IP::get()] = $previous["visit-time"];
                                            }
                                            Stream::saveToFile(self::firewallConfigFile, json_encode($this->firewallConfiguration));
                                            //preOutput($this->firewallConfiguration["$status-device-count-down-time"]);
                                        }
                                    } /*if countdown time not exists, so reset firewall configuration*/
                                    else {
                                        /*Autoload::log("Preparing to create firewall configuration file.");*/
                                        if (Stream::IsWriteable(self::firewallConfigFile)) {
                                            file_put_contents(self::firewallConfigFile, json_encode(self::builtInConfig));
                                        }
                                        /*load firewall configuration in runtime*/
                                        $this->firewallConfiguration = self::builtInConfig;
                                    }


                                    $this->controller = !empty($this->firewallConfiguration["$status-device-count-down-time"][IP::get()]) ? $this->firewallConfiguration["$status-device-count-down-time"][IP::get()] : $previous["visit-time"];
                                    /*check limit time format key and value*/
                                    /*$minutes = (strtotime("2012-09-21 12:12:22") - time()) / 60;*/
                                    if (array_key_exists("$status-device-limit-time-format", $this->firewallConfiguration)) {
                                        /*check limit time format key value and it is second, so calculate duration as seconds*/
                                        if ($this->firewallConfiguration["$status-device-limit-time-format"] === "second") {
                                            $this->duration = intval((strtotime($now["visit-time"]) - strtotime($this->controller)));
                                            $this->separator = "seconds";
                                        } /*check limit time format key value and it is minute, so calculate duration as minutes*/
                                        elseif ($this->firewallConfiguration["$status-device-limit-time-format"] === "minute") {
                                            $this->duration = intval((strtotime($now["visit-time"]) - strtotime($this->controller)) / 60);
                                            $this->separator = "minutes";
                                        } /* otherwise calculate duration as hours*/
                                        else {
                                            $this->duration = intval(((strtotime($now["visit-time"]) - strtotime($this->controller)) / 60) / 60);
                                            $this->separator = "hours";
                                        }
                                    } /*if limit time format key and value not exists, so reset firewall configuration*/
                                    else {
                                        /*Autoload::log("Preparing to create firewall configuration file.");*/
                                        if (Stream::IsWriteable(self::firewallConfigFile)) {
                                            file_put_contents(self::firewallConfigFile, json_encode(self::builtInConfig));
                                        }
                                        /*load firewall configuration in runtime*/
                                        $this->firewallConfiguration = self::builtInConfig;
                                    }
                                }


                                /*show debug info*/
                                /* preOutput("$status Device:: VISIT DURATION COUNT DOWN:: ");
                                 preOutput($visitedBrowsersList);
                                 //preOutput($times);
                                 //preOutput(array_reverse($times));
                                 preOutput("You have visited total $total times.");
                                 preOutput("You have visited $countdown times (in $this->duration $this->separator).");
                                 preOutput("You have last visited $this->last_visit_duration minutes before.");
                                 //preOutput($first);
                                 preOutput("You have visited $this->duration $this->separator.");
                                 preOutput("Your access time limit: " . $this->firewallConfiguration["$status-device-time-limit"]);
                                 preOutput("Your access limit: " . $this->firewallConfiguration["$status-device-access-limit"]);*/

                                /*make decisions*/
                                /*check time limit is set or not*/
                                if (array_key_exists("$status-device-time-limit", $this->firewallConfiguration)) {
                                    /*check access time is over or not*/
                                    /*access time is not over in limited (60 minute) time*/
                                    if ($this->firewallConfiguration["$status-device-time-limit"] > $this->duration) {
                                        /*check access time*/
                                        if (array_key_exists("$status-device-access-limit", $this->firewallConfiguration)) {
                                            /*Returns true if access is greater than access limit*/
                                            if (count($countdownTimes) >= $this->firewallConfiguration["$status-device-access-limit"]) {
                                                if (!$this->IsListed(IP::get()) and $status === "blocked") {
                                                    $this->addIP(IP::get(), "banned");
                                                }

                                                if ((!$this->IsListed(IP::get()) and !$this->IsListed(IP::get(), "blocked")) && $status === "granted") {
                                                    $this->addIP(IP::get(), "blocked");
                                                }

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    trigger_error(self::firewallLogFile . " is empty");
                }
            } else {
                trigger_error(self::firewallLogFile . " not readable");
            }
        }
    }

    public function defenceActivate()
    {
        if ($this->action_status === "banned" || $this->action_status === "blocked") {
            if (array_key_exists("ui", $this->browser->getBrowserDetails($this->browser->getBrowserName()))) {
                if (_String::lower($this->browser->getBrowserDetails($this->browser->getBrowserName())["ui"]) === _String::lower("FullTextMode")) {
                    $msg_lb = "\n";
                    $this->msg_tab = "\t";
                    $this->defenseMessageShow("", $msg_lb, $this->action_status, $this->action_component, "text");
                } else {
                    $msg_lb = "<br/>";
                    $this->msg_tab = "&emsp;";
                    $this->color = "red";
                    $this->defenseMessageShow("Access", $msg_lb, $this->action_status, $this->action_component, "graphic");
                }
            } else {
                $msg_lb = "<br/>";
                $this->msg_tab = "&emsp;";
                $this->color = "red";
                $this->defenseMessageShow("Access", $msg_lb, $this->action_status, $this->action_component, "graphic");
            }
        } else {
            $msg_lb = "<br/>";
            $this->msg_tab = "&emsp;";
            $this->color = "green";
            $this->defenseMessageShow("Access", $msg_lb, "fridge", "browser", "graphic");
        }
    }


    /*all public functions*/

    /**
     * @param string $title
     * @param string $lb
     * @param string $status
     * @param string $component
     * @param string $viewMode
     */
    private function defenseMessageShow(string $title, string $lb, string $status, string $component, string $viewMode)
    {
        $componentText = ($component === "browser") ? "on $component " . $this->browser->getBrowserNameFull() : "from $component " . IP::get();
        $request_method = $this->browser->getRequestMethod();
        $request_address = $this->browser->getVisitedPage();


        if (!empty($viewMode) and is_string($viewMode)) {
            if (Network::requestHeader("HTTP_SEC_FETCH_MODE") === "cors") {
                Media::StreamAsJson(array("message" => array(
                    "type" => "error", "details" => "Your access has been $status $componentText.",
                    "visitor" => array(
                        "user-agent" => $this->browser->getUserAgent(),
                        "request-method" => $this->browser->getRequestMethod(),
                        "request-url" => $this->browser->getVisitedPage(),
                        "ip-addr" => IP::get()
                    )),
                    "copyright" => array(
                        "year" => Time::getCurrentYearNumber(),
                        "owner" => Framework::COMPANY_NAME
                    )
                ));
            } else if ($viewMode === "text") {
                echo PHP_EOL;
                echo " Your access has been $status $componentText. " . PHP_EOL;
                for ($i = 0; $i <= 65; $i++) {
                    echo "-";
                }
                echo PHP_EOL;
                //echo " User Agent : $this->msg_tab" . $this->browser->getUserAgent() . PHP_EOL;
                echo " Request URL : $this->msg_tab$request_method $request_address" . PHP_EOL;
                echo PHP_EOL;
                echo " IP address : $this->msg_tab" . IP::get() . PHP_EOL;

                /*avoid error country capturing*/
                if (_String::lower(IP::getCountry()) !== "unknown") {
                    echo " Country : $this->msg_tab" . IP::getCountry() . PHP_EOL;
                } else {
                    if (_String::lower(IP::getInfo("country")) !== "unknown location") {
                        echo " Country : $this->msg_tab" . IP::getCountry() . PHP_EOL;
                    }
                }

                /*avoid error browser capturing*/
                if (_String::lower($this->browser->getBrowserName()) !== "unknown") {
                    echo " Browser : $this->msg_tab" . $this->browser->getBrowserNameFull() . PHP_EOL;
                }

                /*avoid error device capturing*/
                if (_String::lower($this->browser->getDeviceName()) !== "unknown") {
                    echo " Device : $this->msg_tab" . $this->browser->getDeviceName() . " (" . _String::lower($this->browser->getDeviceArchitecture()) . ")." . PHP_EOL;
                }

                for ($i = 0; $i <= 65; $i++) {
                    echo "-";
                }
                echo PHP_EOL;
                echo "Copyright © " . Time::getCurrentYearNumber() . " " . Framework::COMPANY_NAME . ". All Right Reserved." . PHP_EOL;

            } else {
                Ui::HtmlInterface("$title has been $status!!", function ($html, $head) use ($lb, $status, $title, $request_address, $request_method) {
                    Ui::text(Ui::element($head, "style"), "body{margin: 0;padding: 0;display: flex;justify-content: center;align-items: center;height: 635px;}");
                    $documentBody = Ui::element($html, "body");/*create html dody*/
                    $template = Ui::element(
                        Ui::element( /*create mishusoft app body*/
                            $documentBody,/*create html dody*/
                            "ms-app", ["style" => "position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;border-radius: 5px;-webkit-border-radius: 5px;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);line-height:1.5;"]),
                        "ms-app-content", ["style" => "display: block;margin: 0;padding: 0;text-align: left;border: 1px solid $this->color;-webkit-border-radius: 5px;border-radius: 5px"]);
                    Ui::text(
                        Ui::element(/*create app header*/
                            $template, "ms-app-content-header",
                            ["style" => "text-align:center;font-size: 18px;font-weight: 700;padding: 10px;color: #fff;display: block;background-color: $this->color;user-select: none;-webkit-user-select: none;"]),
                        "$title has been $status!!");
                    $template_body = Ui::element($template, "ms-app-content-body", ["style" => "text-align:center;padding: 10px;display: block;"]);

                    /*add noscript to ui*/
                    Ui::setNoScriptText($template_body);
                    /*end of adding noscript*/

                    Ui::text(
                        Ui::element($template_body, "ms-app-paragraph",
                            ["style" => "text-align:center;width: 275px;height: 160px;padding: 5px;margin: 0;border-radius: 10px;position: relative;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-o-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-webkit-transition: all .25s ease;-o-transition: all .25s ease;transition: all .25s ease;margin: 10px;font-size: 100px;font-weight: bolder;color: $this->color;border: 2px solid $this->color;user-select: none;-webkit-user-select: none;text-transform: uppercase;"]),
                        ucfirst($status));

                    if ($status === 'blocked') {
                        Ui::text(
                            Ui::element($template_body, "ms-app-paragraph",
                                ["style" => "font-size: 15px;line-height: 1.5;display: flex;text-align: center;background: bisque;border-radius: 5px;padding: 5px;margin-top: 10px;user-select: none;-webkit-user-select: none;"]),
                            "You have violated the security laws of our website. For that reason, we will not allow access to our website at this time. If you are a customer or visitor, make your visit later. Or contact the Mishusoft Support Center if you are a system administrator. Thank you for accepting our service.");
                    }
                    if ($status === 'banned') {
                        Ui::text(
                            Ui::element($template_body, "ms-app-paragraph",
                                ["style" => "font-size: 15px;line-height: 1.5;display: flex;text-align: center;background: $this->color;border-radius: 5px;padding: 5px;margin-top: 10px;color: white;user-select: none;-webkit-user-select: none;"]),
                            "You have violated our security rules. All your information has been banned for the security of our customers. At the same time, all services previously provided to you have been discontinued. We will no longer be able to provide services to you in the future. Contact our support center if you need any help.");
                    }
                    if ($status === 'granted') {
                        Ui::text(
                            Ui::element($template_body, "ms-app-paragraph",
                                ["style" => "font-size: 15px;line-height: 1.5;display: flex;text-align: center;background: $this->color;border-radius: 5px;padding: 5px;margin-top: 10px;user-select: none;-webkit-user-select: none;"]),
                            "Welcome to our family. We are very happy that you have joined our family. We hope you enjoy our content and services. At the same time we will have the opportunity to be by your side all the time.");
                    }

                    $this->viewVisitorInfo($template_body, $request_method, $request_address);
                    Ui::addDefaultSignature($template_body);
                    Ui::text(Ui::element($documentBody, "script"), "function fixWindowSize(){if(window.innerHeight < '635') {document.body.style = 'height:635px;';} else if(window.innerHeight > '635') {document.body.style = 'height:'+window.innerHeight + 'px';} else {if(window.innerHeight > '1024') {document.body.style = 'height:1024px;';}}}
                    window.addEventListener('resize', fixWindowSize);window.addEventListener('load', fixWindowSize);");
                });
            }
        }
    }

    /**
     * @return string
     */
    public function getDuration(): string
    {
        return $this->duration;
    }

    /**
     * @return int
     */
    public function getLastVisitDuration(): int
    {
        return $this->last_visit_duration;
    }

    /**
     * @return string
     */
    public function getController(): string
    {
        return $this->controller;
    }

    /**
     * @return string
     */
    public function getSeparator(): string
    {
        return $this->separator;
    }

    function __destruct()
    {

    }

}