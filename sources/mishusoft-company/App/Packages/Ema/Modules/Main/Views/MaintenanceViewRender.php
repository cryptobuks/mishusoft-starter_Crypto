<?php

namespace Mishusoft\Framework\BuiltInWeb\ViewRenders;

use Mishusoft\Framework\Chipsets\Http;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Drivers\ViewRender;

class MaintenanceViewRender extends ViewRender
{
    public function __construct(array $request)
    {
        parent::__construct($request);
    }

    public function runTemplate(): void
    {
        // TODO: Implement runTemplate() method.
        /*special page for maintenance mode*/
        Ui::HtmlInterface($this->TitleOfCurrentWebPage, function ($html, $head) {
            Ui::text(Ui::element($head, 'style'), '* {user-select:none;-moz-user-select:none;-webkit-user-select:none;}');

            /*add html body*/
            $body = Ui::element($html, 'body', ['id' => 'maintenance-mode']);

            $template = Ui::element(Ui::element($body, 'ms-app', ['style' => 'position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;border-radius: 5px;-webkit-border-radius: 5px;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);line-height:1.5;']), 'ms-app-content', ['style' => '  display: block;margin: 0;padding: 0;text-align: left;border: 1.5px solid #f2d2ab;-webkit-border-radius: 5px;border-radius: 5px']);
            /*set template header and add text*/
            Ui::text(Ui::element($template, 'ms-app-content-header', ['style' => 'text-align:center;font-size: 24px;font-weight: 700;padding: 10px;color: lightslategray;display: block;background-color: #f2d2ab']), $this->TitleOfCurrentWebPage);
            $template_body = Ui::element($template, 'ms-app-content-body', ['style' => 'text-align:center;padding: 10px;display: block;']);

            /*add logo of mishusoft systems*/
            Ui::element($template_body, 'img', ['src' => FRAMEWORK_FAVICON_FILE, 'alt' => 'mishusoft-company-logo-m', 'style' => 'text-align:center;  width: 100px;height: 100px;padding: 2px;margin: 0;border-radius: 50%;position: relative;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-o-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-webkit-transition: all .25s ease;-o-transition: all .25s ease;transition: all .25s ease;margin: 10px;']);

            /*add text and message*/
            Ui::elementList($template_body, [
                'ms-app-paragraph' => [
                    ['style' => 'font-size: 16px;line-height: 1.5;display: flex;color: #44576a;', 'text' => 'Sincerely sorry for the inconvenience. Under maintenance for some time for unavoidable repairs. Our engineers are constantly working to provide proper service..'], /*message for visitors*/
                    ['style' => 'font-size: 15px;line-height: 1.5;display: block;background: #f2d2ab;border-radius: 5px;padding: 5px;margin-top: 10px;color: #44576a;',
                        'text' => 'Notice: The closed service provided to you will be activated very soon.'], /*notice for visitors*/
                ],
            ]);

            /*add default system signature*/
            Ui::addDefaultSignature($template_body);

            /*add javascript file and embedded code in body area*/
            Ui::text(Ui::element($body, 'script', ['type' => 'application/javascript']), 'let _root_ = \'' . Memory::Data("framework")->host->url . '\';');
        }, Http::LOCKED);
    }
}
