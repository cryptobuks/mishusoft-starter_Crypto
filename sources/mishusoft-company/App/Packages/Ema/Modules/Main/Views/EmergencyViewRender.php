<?php

namespace Mishusoft\Framework\BuiltInWeb\ViewRenders;

use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Http\IP;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\System\Time;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Drivers\ViewRender;

class EmergencyViewRender extends ViewRender
{
    /*text*/
    public const welcomeText = "Welcome to Mishusoft family";

    public function __construct(array $request)
    {
        parent::__construct($request);
    }

    public function runTemplate(): void
    {
        // TODO: Implement runTemplate() method.
        Ui::HtmlInterface("$this->TitleOfCurrentWebPage", function ($html, $head) {
            /*add meta tags*/
            Ui::element($head, 'meta', ['id' => 'mishusoft-web-root', 'name' => 'root', 'content' => Memory::Data('framework')->host->url]);

            /*add css*/
            Ui::text(Ui::element($head, 'style'), '* {user-select:none;-moz-user-select:none;-webkit-user-select:none;}');


            /*add html body*/
            $body = Ui::element($html, 'body', ['id' => 'emergency-mode']);

            $template = Ui::element(Ui::element($body, 'ms-app', ['style' => 'position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;border-radius: 5px;-webkit-border-radius: 5px;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);line-height:1.5;']), 'ms-app-content', ['style' => 'display: block;margin: 0;padding: 0;text-align: left;width: 700px;border: 1px solid #f22b08;-webkit-border-radius: 5px;border-radius: 5px']);
            Ui::text(Ui::element($template, 'ms-app-content-header', ['style' => 'text-align:center;font-size: 18px;font-weight: 700;padding: 10px;color: #fff;display: block;background-color: #f22b08']), "Emergency Mode ");
            $template_body = Ui::element($template, 'ms-app-content-body', ['style' => 'text-align:center;padding: 10px;display: block;']);

            Ui::element($template_body, 'img', ['src' => FRAMEWORK_FAVICON_FILE, 'alt' => 'mishusoft-company-logo-m', 'style' => 'text-align:center;  width: 100px;height: 100px;padding: 2px;margin: 0;border-radius: 50%;position: relative;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-o-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-webkit-transition: all .25s ease;-o-transition: all .25s ease;transition: all .25s ease;margin: 10px;']);

            /*add current action*/
            if ($this->request["method"] === "index") {
                $debug = Ui::element($template_body, 'ms-app-paragraph', ['style' => 'font-size: 15px;line-height: 1.5;display: block;background: bisque;border-radius: 5px;padding: 5px;margin-top: 10px;']);
                Ui::text($debug, 'Debug mode :');
                Ui::text(Ui::element($debug, "input", ["type"=>"radio","id"=>"debug-enable","name"=>"debug","value"=>true]), "Enable");
                Ui::text(Ui::element($debug, "input", ["type"=>"radio","id"=>"debug-disable","name"=>"debug","value"=>false]), "Disable");

                $index = Ui::element($template_body, 'ms-app-paragraph', ['style' => 'font-size: 15px;line-height: 1.5;display: block;background: bisque;border-radius: 5px;padding: 5px;margin-top: 10px;']);
                Ui::text($index, 'Maintenance mode :');
                Ui::text(Ui::element($index, "input", ["type"=>"radio","id"=>"maintenance-enable","name"=>"maintenance","value"=>true]), "Enable");
                Ui::text(Ui::element($index, "input", ["type"=>"radio","id"=>"maintenance-disable","name"=>"maintenance","value"=>false]), "Disable");
            }
            if ($this->request["method"] === "reset") {
                Ui::text(Ui::element($template_body, 'ms-app-paragraph', ['style' => 'font-size: 15px;line-height: 1.5;display: block;background: bisque;border-radius: 5px;padding: 5px;margin-top: 10px;']), 'We are ready to reset.');
            }
            if ($this->request["method"] === "restore") {
                Ui::text(Ui::element($template_body, 'ms-app-paragraph', ['style' => 'font-size: 15px;line-height: 1.5;display: block;background: bisque;border-radius: 5px;padding: 5px;margin-top: 10px;']), 'We are ready to restore.');
            }

            /*view visitors short information from database*/
            $infoBarPanel = Ui::element($template_body, 'ms-app-paragraph', ['style' => 'font-size: 15px;line-height: 1.5;display: flex;background: #fff;border-radius: 5px;padding: 5px;margin-top: 10px;width: 100%;']);
            Ui::elementList($infoBarPanel, [
                'ms-app-paragraph' => [
                    ['style' => 'font-size: inherit;text-align:left;width: 25%;', 'text' => 'IP: '. IP::get()], /*visitor's ip address*/
                    ['style' => 'font-size: inherit;text-align:left;width: 35%;', 'text' => 'Browser: '. (new Browser())->getBrowserNameFull()], /*visitor's browser's full name*/
                    ['id'=>'current-local-time','style' => 'font-size: inherit;text-align:right;width: 40%;', 'text' => 'Time: '. Time::getTodayFull()] /*current time*/
                ],
            ]);

            /*add default system signature*/
            Ui::addDefaultSignature($template_body);

            /*add javascript file and embedded code in body area*/
            Ui::elementList($body, [
                'script' => [
                    ['type' => 'application/javascript', 'text' => 'let _root_ = \'' . Memory::Data("framework")->host->url . '\';'],
                    ['type' => 'application/javascript', 'src' => join([Memory::Data("framework")->host->url . 'libraries/js/emergency.js'])]
                ],
            ]);
        });
    }
}
