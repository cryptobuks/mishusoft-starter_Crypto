<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Mishusoft\Framework\Drivers\Controller;

class trackerController extends Controller
{
    private $tracker;
    public function __construct()
    {
        parent::__construct();
        $this->tracker = $this->loadModel('tracker');
    }
    public function index()
    {
        $this->view->assign('title', 'Error Page');
        $this->view->render('index', 'Tracker');
        //header('location:' . BaseURL . 'error/access/404');
    }

    public function getPubAppID()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: ms-feedback-data,Accept");
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data->update) && is_object($data->update) && $data->update->message == 'install') {
            print_r($data);
        }
    }

    public function receiveFeedback()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: ms-feedback-data,Accept");
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (!empty($data->update) && is_object($data->update)) {
                $this->tracker->receiveUserUpdateInfo($this->getSqlText($data->update->ip), $this->getSqlText($data->update->browser), $this->getSqlText($data->update->message));
            }

            if (!empty($data->browser) && is_object($data->browser)) {
                $this->tracker->receiveUserBrowserInfo(
                    $this->getSqlText($data->browser->ip),
                    $this->getSqlText($data->browser->BrowserName),
                    $this->getSqlText($data->browser->BrowserNameFull),
                    $this->getSqlText($data->browser->BrowserVersion),
                    $this->getSqlText($data->browser->BrowserVersionFull),
                    $this->getSqlText($data->browser->BrowserStatus),
                    $this->getSqlText($data->browser->BrowserArchitecture),
                    $this->getSqlText($data->browser->BrowserAppName),
                    $this->getSqlText($data->browser->BrowserAppCodeName),
                    $this->getSqlText($data->browser->BrowserAppVersion),
                    $this->getSqlText($data->browser->BrowserBuildID),
                    $data->browser->BrowserDoNotTrack,
                    $data->browser->BrowserCookieEnabled,
                    $this->getSqlText($data->browser->BrowserLanguage),
                    $data->browser->BrowserLanguageAll,
                    $this->getSqlText($data->browser->BrowserEngine),
                    $this->getSqlText($data->browser->BrowserEngineVersion),
                    $this->getSqlText($data->browser->BrowserVendor),
                    $this->getSqlText($data->browser->DeviceHardwareConcurrency),
                    $this->getSqlText($data->browser->DeviceMemory),
                    $this->getSqlText($data->browser->PlatformName),
                    $this->getSqlText($data->browser->PlatformArchitecture),
                    $this->getSqlText($data->browser->PlatformWindowManager),
                    $this->getSqlText($data->browser->DeviceName),
                    $this->getSqlText($data->browser->DeviceType),
                    $data->browser->DeviceScreenWidth,
                    $data->browser->DeviceScreenHeight,
                    $data->browser->DeviceScreenColorDepth,
                    $data->browser->DeviceScreenPixelDepth,
                    $this->getSqlText($data->browser->WindowLocationHref),
                    $this->getSqlText($data->browser->WindowLocationProtocol),
                    $this->getSqlText($data->browser->WindowLocationHostname),
                    $this->getSqlText($data->browser->WindowLocationPathname),
                    $data->browser->UserAgent
                );
            }
            if (!empty($data->ipdata) && is_object($data->ipdata)) {
                $this->tracker->receiveUserIpInfo(
                    $this->getSqlText($data->ipdata->ip),
                    $this->getSqlText($data->ipdata->is_eu),
                    $this->getSqlText($data->ipdata->city),
                    $this->getSqlText($data->ipdata->region),
                    $this->getSqlText($data->ipdata->region_code),
                    $this->getSqlText($data->ipdata->country_name),
                    $this->getSqlText($data->ipdata->country_code),
                    $this->getSqlText($data->ipdata->continent_name),
                    $this->getSqlText($data->ipdata->continent_code),
                    $this->getSqlText($data->ipdata->latitude),
                    $this->getSqlText($data->ipdata->longitude),
                    $this->getSqlText($data->ipdata->postal),
                    $this->getSqlText($data->ipdata->calling_code),
                    $this->getSqlText($data->ipdata->flag),
                    $this->getSqlText($data->ipdata->emoji_flag),
                    $this->getSqlText($data->ipdata->emoji_unicode),
                    $this->getSqlText($data->ipdata->asn_asn),
                    $this->getSqlText($data->ipdata->asn_name),
                    $this->getSqlText($data->ipdata->asn_domain),
                    $this->getSqlText($data->ipdata->asn_route),
                    $this->getSqlText($data->ipdata->asn_type),
                    $this->getSqlText($data->ipdata->languages_name),
                    $this->getSqlText($data->ipdata->languages_native),
                    $this->getSqlText($data->ipdata->currency_name),
                    $this->getSqlText($data->ipdata->currency_code),
                    $this->getSqlText($data->ipdata->currency_symbol),
                    $this->getSqlText($data->ipdata->currency_native),
                    $this->getSqlText($data->ipdata->currency_plural),
                    $this->getSqlText($data->ipdata->time_zone_name),
                    $this->getSqlText($data->ipdata->time_zone_abbr),
                    $this->getSqlText($data->ipdata->time_zone_offset),
                    $this->getSqlText($data->ipdata->time_zone_is_dst),
                    $this->getSqlText($data->ipdata->time_zone_current_time)
                );
            }
        } else {
            $this->view->assign('title', 'Error Page');
            $this->view->render('index', 'Tracker');
        }
    }
}
