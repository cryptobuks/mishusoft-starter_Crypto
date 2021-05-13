<?php

use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;

$translation = new Localization(_Array::value($this->request, "locale"));

Ui::text(Ui::element($this->documentHeadElement, 'style'),'* {user-select:none;-moz-user-select:none;-webkit-user-select:none;}body{margin: 0;padding: 0;display: flex;justify-content: center;align-items: center;height: 375px;}');

/*add html body*/
$template = Ui::element($this->documentTemplateBodyElement, 'ms-app-content', ['style' => 'display: block;margin: 0;padding: 0;text-align: left;border: 1.5px solid #f2d2ab;-webkit-border-radius: 5px;border-radius: 5px;width: 650px;background: white;']);
/*set template header and add text*/
Ui::text(Ui::element($template, 'ms-app-content-header', ['style' => 'text-align:center;font-size: 24px;font-weight: 700;padding: 10px;color: lightslategray;display: block;background-color: #f2d2ab']), $translation->translate($this->TitleOfCurrentWebPage));
$template_body = Ui::element($template, 'ms-app-content-body', ['style' => 'text-align:center;padding: 10px;display: block;']);

/*add logo of mishusoft systems*/
Ui::element($template_body, 'img', ['src' => FRAMEWORK_FAVICON_FILE, 'alt' => 'mishusoft-company-logo-m', 'style' => 'text-align:center;  width: 100px;height: 100px;padding: 2px;margin: 0;border-radius: 50%;position: relative;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-o-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-webkit-transition: all .25s ease;-o-transition: all .25s ease;transition: all .25s ease;margin: 10px;']);

/*add text and message*/
Ui::elementList($template_body, [
    'ms-app-paragraph' => [
        ['style' => 'font-size: 16px;line-height: 1.5;display: flex;color: #44576a;', 'text' => $translation->translate('Sincerely sorry for the inconvenience. Under maintenance for some time for unavoidable repairs. Our engineers are constantly working to provide proper service..')], /*message for visitors*/
        ['style' => 'font-size: 15px;line-height: 1.5;display: block;background: #f2d2ab;border-radius: 5px;padding: 5px;margin-top: 10px;color: #44576a;',
            'text' => $translation->translate('Notice: The closed service provided to you will be activated very soon.')], /*notice for visitors*/
    ],
]);

/*add default system signature*/
Ui::addDefaultSignature($template_body);

/*add javascript file and embedded code in body area*/
Ui::text(Ui::element($this->documentBodyElement, 'script', ['type' => 'application/javascript']), 'let _root_ = \'' . Memory::Data("framework")->host->url . '\';');
Ui::text(Ui::element($this->documentBodyElement, "script"),"function fixWindowSize(){if(document.querySelector('ms-app-body').hasAttribute('style')){document.querySelector('ms-app-body').removeAttribute('style');}if(window.innerHeight < '375') {document.body.style = 'height:375px;';} else if(window.innerHeight > '375') {document.body.style = 'height:'+window.innerHeight + 'px';} else {if(window.innerHeight > '1024') {document.body.style = 'height:1024px;';}}}window.addEventListener('resize', fixWindowSize);window.addEventListener('load', fixWindowSize);");


/*end of index page*/