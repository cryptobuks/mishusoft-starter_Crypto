<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Models;

use Mishusoft\Framework\Drivers\Model;

class trackerModel extends Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function receiveUserUpdateInfo($ip, $browser, $message)
    {
        $this->prepare("INSERT INTO `" . DbPREFIX . "client_update_info` (`id`, `ip_address`, `browserNameFull`, `message`, `created_date_time`) VALUES (null, :ip_add, :browser, :message, now())")
            ->execute(
                [
                    ':ip_add' => $ip,
                    ':browser' => $browser,
                    ':message' => $message
                ]
            );
    }

    public function receiveUserBrowserInfo($ip, $BrowserName, $BrowserNameFull, $BrowserVersion, $BrowserVersionFull, $BrowserStatus, $BrowserArchitecture, $BrowserAppName, $BrowserAppCodeName, $BrowserAppVersion, $BrowserBuildID, $BrowserDoNotTrack, $BrowserCookieEnabled, $BrowserLanguage, $BrowserLanguageAll, $BrowserEngine, $BrowserEngineVersion, $BrowserVendor, $DeviceHardwareConcurrency, $DeviceMemory, $PlatformName, $PlatformArchitecture, $PlatformWindowManager, $DeviceName, $DeviceType, $DeviceScreenWidth, $DeviceScreenHeight, $DeviceScreenColorDepth, $DeviceScreenPixelDepth, $WindowLocationHref, $WindowLocationProtocol, $WindowLocationHostname, $WindowLocationPathname, $UserAgent)
    {
        $this->db->query("INSERT INTO `" . DbPREFIX . "client_browser_info` (`id`, `ip_address`, `browserName`, `browserNameFull`, `browserVersion`, `browserVersionFull`, `browserStatus`, `browserArchitecture`, `browserAppName`, `browserCodeAppName`, `browserAppVersion`, `browserBuildID`, `browserDoNotTrack`, `browserCookieEnabled`, `browserLanguage`, `browserLanguageAll`, `browserEngine`, `browserEngineVersion`, `browserVendor`, `deviceHardwareConcurrency`, `deviceMemory`, `platformName`, `platformArchitecture`, `platformWindowManager`, `deviceName`, `deviceType`, `deviceScreenWidth`, `deviceScreenHeight`, `deviceScreenColorDepth`, `deviceScreenPixelDepth`, `windowLocationHref`, `windowLocationProtocol`, `windowLocationHostname`, `windowLocationPathname`, `userAgent`, `created_date_time`) VALUES (null, '{$ip}', '{$BrowserName}', '{$BrowserNameFull}', '{$BrowserVersion}', '{$BrowserVersionFull}', '{$BrowserStatus}', '{$BrowserArchitecture}', '{$BrowserAppName}', '{$BrowserAppCodeName}', '{$BrowserAppVersion}', '{$BrowserBuildID}', '{$BrowserDoNotTrack}', '{$BrowserCookieEnabled}', '{$BrowserLanguage}', '{$BrowserLanguageAll}', '{$BrowserEngine}', '{$BrowserEngineVersion}', '{$BrowserVendor}', '{$DeviceHardwareConcurrency}', '{$DeviceMemory}', '{$PlatformName}', '{$PlatformArchitecture}', '{$PlatformWindowManager}', '{$DeviceName}', '{$DeviceType}', '{$DeviceScreenWidth}', '{$DeviceScreenHeight}', '{$DeviceScreenColorDepth}', '{$DeviceScreenPixelDepth}', '{$WindowLocationHref}', '{$WindowLocationProtocol}', '{$WindowLocationHostname}', '{$WindowLocationPathname}', '{$UserAgent}', now());");
    }

    public function receiveUserIpInfo($ip, $is_eu, $city, $region, $region_code, $country_name, $country_code, $continent_name, $continent_code, $latitude, $longitude, $postal, $calling_code, $flag, $emoji_flag, $emoji_unicode, $asn_asn, $asn_name, $asn_domain, $asn_route, $asn_type, $languages_name, $languages_native, $currency_name, $currency_code, $currency_symbol, $currency_native, $currency_plural, $time_zone_name, $time_zone_abbr, $time_zone_offset, $time_zone_is_dst, $time_zone_current_time)
    {
        $this->db->query("INSERT INTO `" . DbPREFIX . "client_ip_info` (`id`, `ip_address`, `is_eu`, `city`, `region`, `region_code`, `country_name`, `country_code`, `continent_name`, `continent_code`, `latitude`, `longitude`, `postal`, `calling_code`, `flag`, `emoji_flag`, `emoji_unicode`, `asn_asn`, `asn_name`, `asn_domain`, `asn_route`, `asn_type`, `languages_name`, `languages_native`, `currency_name`, `currency_code`, `currency_symbol`, `currency_native`, `currency_plural`, `time_zone_name`, `time_zone_abbr`, `time_zone_offset`, `time_zone_is_dst`, `time_zone_current_time`, `created_date_time`) VALUES (null, '{$ip}', '{$is_eu}', '{$city}', '{$region}', '{$region_code}', '{$country_name}','{$country_code}','{$continent_name}','{$continent_code}','{$latitude}','{$longitude}','{$postal}','{$calling_code}','{$flag}','{$emoji_flag}','{$emoji_unicode}','{$asn_asn}','{$asn_name}', '{$asn_domain}','{$asn_route}','{$asn_type}', '{$languages_name}','{$languages_native}','{$currency_name}', '{$currency_code}','{$currency_symbol}','{$currency_native}', '{$currency_plural}','{$time_zone_name}','{$time_zone_abbr}', '{$time_zone_offset}','{$time_zone_is_dst}','{$time_zone_current_time}', now());");
    }
}
