<?php declare(strict_types=1);


namespace Mishusoft\Services;

use Mishusoft\Databases\MishusoftSQLStandalone;
use Mishusoft\System\Time;
use Mishusoft\Utility\ArrayCollection as Arr;
use Mishusoft\Databases\MishusoftSQLStandalone\TableInterface;
use Mishusoft\Migration\DB;
use Mishusoft\Utility\Inflect;
use Mishusoft\Utility\Number;

class SecureDataTransferDatabaseService extends MishusoftSQLStandalone
{
    /**
     * @var TableInterface|mixed
     */
    private mixed $db;

    public function __construct()
    {
        parent::__construct(DB::USER, DB::PASSWORD);
        $this->db = $this->select(DB::NAME);
    }

    /*
     * Method list for monitor controller
     * @param string $name
     * @param string $version
     * @param string $ip
     * @param string $browser
     * @return int
     */
    public function verifiedProductId(string $name, string $version, string $ip, string $browser): int
    {
        return Arr::value($this->db->read(DB\Table::INSTALLED_PRODUCTS_LIST)->get([
            "get" => ["id"],
            "where" => [
                "name" => Inflect::validString($name),
                "version" => Inflect::validString($version),
                "ip_address" => Inflect::validString($ip),
                "browserNameFull" => Inflect::validString($browser),
            ],
        ]), "id");
    }

    /**
     * @param int $id
     * @return array
     */
    public function installedProductDetailsById(int $id): array
    {
        return $this->db->read(DB\Table::INSTALLED_PRODUCTS_LIST)->get(
            ["get" => "*", "where" => ["id" => Number::filterInt($id)]]
        );
    }

    /**
     * @param $name
     * @param $version
     * @param $ip
     * @param $browser
     * @return bool
     */
    public function addProductToInstList($name, $version, $ip, $browser): bool
    {
        /*
         *   {
         *     "id": 1,
         *     "name": "test",
         *     "version": "1.0",
         *     "ip_address": "127.0.0.1",
         *     "browserNameFull": "Firefox 80.0",
         *     "licence_key": "",
         *     "issue": "",
         *     "expire": "",
         *     "created-date-time": ""
         *   }*/
        return $this->db->read(DB\Table::INSTALLED_PRODUCTS_LIST)->insert([
            "name" => (string)($name),
            "version" => (string)($version), "ip_address" => (string)$ip,
            "browserNameFull" => (string)($browser),
            "licence_key" => "",
            "issue" => "",
            "expire" => "",
            "created-date-time" => Time::today(),
        ]);
    }

    /**
     * @param string $name
     * @param string $version
     * @param string $ip
     * @param string $os_version
     * @param string $browser
     * @return array
     */
    public function getInfAbtInstPrdStatus(string $name, string $version, string $ip, string $os_version, string $browser): array
    {
        return $this->db->read(DB\Table::INSTALLED_PRODUCTS_STATUS_LIST)->get(["get" => "*", "where" => ["name" => "{$name}", "version" => "{$version}", "ip_address" => "{$ip}", "os_version" => "{$os_version}", "browserNameFull" => "{$browser}"]]);
    }

    /**
     * @param string $name
     * @param string $version
     * @param string $ip
     * @param string $os_version
     * @param string $browser
     * @param string $message
     * @return bool
     */
    public function updateInfOfPrdStatus(string $name, string $version, string $ip, string $os_version, string $browser, string $message): bool
    {
        /*
         * UPDATE `msu_apps_status` SET `status`=[value-6] WHERE `name`=[value-2],`version`=[value-3],`ip_address`=[value-4],``os_version`=[os_version],`browserNameFull`=[value-5]
         * */
        return $this->db->read(DB\Table::INSTALLED_PRODUCTS_STATUS_LIST)->update([
            "update" => [
                "message" => "{$message}", "created-date-time" => Time::today(),
            ],
            "where" => [
                "name" => "{$name}", "version" => "{$version}", "ip_address" => "{$ip}",
                "os_version" => "{$os_version}", "browserNameFull" => "{$browser}",
            ], ]);
    }

    /**
     * @param string $name
     * @param string $version
     * @param string $ip
     * @param string $os_version
     * @param string $browser
     * @param string $message
     * @return bool
     */
    public function insertInfOfPrdStatus(string $name, string $version, string $ip, string $os_version, string $browser, string $message): bool
    {
        return $this->db->read(DB\Table::INSTALLED_PRODUCTS_STATUS_LIST)->insert([
            "name" => "{$name}", "version" => "{$version}", "ip_address" => "{$ip}",
            "os_version" => "{$os_version}", "browserNameFull" => "{$browser}",
            "message" => "{$message}", "created-date-time" => Time::today(),
        ]);
    }

    /**
     * @param string $name
     * @param string $version
     * @param string $ip
     * @param string $browser
     * @param string $message
     * @return bool
     */
    public function receiveInfoAboutUserUpdate(string $name, string $version, string $ip, string $browser, string $message): bool
    {
        return $this->db->read(DB\Table::CLIENT_UPDATE_INFO_LIST)->insert([
            "name" => "{$name}",
            "version" => "{$version}", "ip_address" => "{$ip}",
            "browserNameFull" => "{$browser}",
            "message" => "{$message}",
            "created-date-time" => Time::today(),
        ]);
    }

    /**
     * @param array $haystack
     * @return bool
     */
    public function rcvInfAbtUsersIP(array $haystack): bool
    {
        return $this->db->read(DB\Table::CLIENT_IP_INFO_LIST)->insert(array_merge(
            $haystack,
            ["last_update_date_time" => Time::today()]
        ));
    }

    /**
     * @param array $haystack
     * @return bool
     */
    public function rcvInfAbtUsersBrowser(array $haystack): bool
    {
        return $this->db->read(DB\Table::CLIENT_BROWSER_INFO_LIST)->insert(array_merge(
            $haystack,
            ["last_update_date_time" => Time::today()]
        ));
    }

    /**
     * @param array $haystack
     * @return bool
     */
    public function saveDataOfUsersAccess(array $haystack): bool
    {
        //INSERT INTO `msu_info_app_browser_passwords`(`id`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `event`, `username`, `password`, `email`, `last_update_date_time`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10])
        return $this->db->read(DB\Table::CLIENT_BROWSER_PASSWORDS_INFO_LIST)->insert(array_merge(
            $haystack,
            ["last_update_date_time" => Time::today()]
        ));
    }

    /**
     * @param string $table_name
     * @return int
     */
    public function getLastInsertedId(string $table_name): int
    {
        return $this->db->read($table_name)->getLastInsertedId();
    }

    /**
     * @param array $haystack
     * @return bool
     */
    public function saveDataOfUsersBrowserHistories(array $haystack): bool
    {
        //INSERT INTO `msu_info_app_browser_passwords`(`id`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `event`, `username`, `password`, `email`, `last_update_date_time`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10])
        return $this->db->read(DB\Table::CLIENT_BROWSER_HISTORIES_INFO_LIST)->insert(
            array_merge(
                $haystack,
                ["last_update_date_time" => Time::today()]
            )
        );
    }

    /**
     * @param string $email
     * @return array|false|string
     */
    public function getUsrIdByEmlAddr(string $email)
    {
        return Arr::value($this->db->read(DB\Table::CLIENT_LIST)->get(["get" => ["id"], "where" => ["emailAddress" => "{$email}"]]), "id");
    }

    /**
     * @param string $ip
     * @return array|false|string
     */
    public function getUsrIdByIpAddr(string $ip)
    {
        return Arr::value($this->db->read(DB\Table::CLIENT_LIST)->get(["get" => ["id"], "where" => ["ipAddress" => "{$ip}"]]), "id");
    }

    /**
     * @param string $email
     * @return array|false|string
     */
    public function getUsrPssByEmlAddr(string $email)
    {
        return Arr::value($this->db->read(DB\Table::CLIENT_LIST)->get(["get" => ["password"], "where" => ["emailAddress" => "{$email}"]]), "password");
    }

    /**
     * @param string $email
     * @return array
     */
    public function getUsrDtlByEml(string $email): array
    {
        return $this->db->read(DB\Table::CLIENT_LIST)->get(["get" => "*", "where" => ["emailAddress" => "{$email}"]]);
    }

    /**
     * @param string $email
     * @param string $password
     * @return array
     */
    public function getUsrDtlByEmlPss(string $email, string $password): array
    {
        return $this->db->read(DB\Table::CLIENT_LIST)->get(["get" => "*", "where" => ["emailAddress" => "{$email}", "password" => "{$password}"]]);
    }

    /**
     * @param int $id
     * @return array
     */
    public function getPrdLcnDtlByPrdId(int $id): array
    {
        return $this->db->read(DB\Table::INSTALLED_PRODUCTS_LICENCES_LIST)->get(["get" => "*", "where" => ["app_id" => "{$id}"]]);
    }

    /**
     * @param int $IdNbOfProduct
     * @param string $replacer
     * @param string $currentVal
     * @return bool
     */
    public function resetItmFrmLcnByPrdId(int $IdNbOfProduct, string $replacer, string $currentVal): bool
    {
        return $this->db->read(DB\Table::INSTALLED_PRODUCTS_LICENCES_LIST)->update(["update" => ["{$replacer}" => "{$currentVal}"], "where" => ["id" => "{$IdNbOfProduct}"]]);
    }

    public function updateIdNbOfPrdOfUsr($userid, $app_id): bool
    {
        //UPDATE `msu_info_app_users` SET `id`=[value-1],`first_name`=[value-2],`last_name`=[value-3],`email_address`=[value-4],`password`=[value-5],`app_id`=[value-6],`ip_address`=[value-7],`browserName`=[value-8],`os_name_arc`=[value-9],`created_date_time`=[value-10] WHERE 1
        return $this->db->read(DB\Table::CLIENT_LIST)->update(["update" => ["app_id" => "{$app_id}"], "where" => ["id" => "{$userid}"]]);
    }

    /**
     * @param $userId
     * @param $appId
     * @return bool
     */
    public function updateUsrLcn($userId, $appId): bool
    {
        /*UPDATE `msu_app_licences` SET `client_id` = '0' WHERE `msu_app_licences`.`id` = 1; */
        return $this->db->read(DB\Table::INSTALLED_PRODUCTS_LICENCES_LIST)->update(["update" => ["app_id" => "{$appId}"], "where" => ["client_id" => "{$userId}"]]);
    }

    /**
     * @param int $prdId
     * @param string $ip
     * @param string $browser
     * @return array
     */
    public function getLcnByPrdIdCLIpBr(int $prdId, string $ip, string $browser): array
    {
        return $this->db->read(DB\Table::INSTALLED_PRODUCTS_LICENCES_LIST)->get(["get" => "*", "where" => ["app_id" => "{$prdId}", "ip_address" => "{$ip}", "browserNameFull" => "{$browser}"]]);
    }

    /**
     * @param string $prdId
     * @param int $limitBase
     * @return bool
     */
    public function upgradeLcnLmt(string $prdId, int $limitBase): bool
    {
        return $this->db->read(DB\Table::INSTALLED_PRODUCTS_LICENCES_LIST)->update(["update" => ["lLimit" => "{$limitBase}"], "where" => ["app_id" => "{$prdId}"]]);
    }

    /**
     * @param int $app_id
     * @param string $ip
     * @param string $os_name_arch
     * @param string $browser
     * @param string $first_name
     * @param string $last_name
     * @param string $email
     * @param string $password
     * @return bool
     */
    public function saveUserSettingData(int $app_id, string $ip, string $os_name_arch, string $browser, string $first_name, string $last_name, string $email, string $password): bool
    {
        return $this->db->read(DB\Table::CLIENT_LIST)->insert([
            "firstName" => "{$first_name}",
            "lastName" => "{$last_name}",
            "emailAddress" => "{$email}",
            "password" => "{$password}",
            "app_id" => "{$app_id}",
            "ipAddress" => "{$ip}",
            "browserNameFull" => "{$browser}",
            "os_name_arch" => "{$os_name_arch}",
            "created-date-time" => Time::today(),
        ]);
    }

    /**
     * @param int $clientId
     * @param $app_id
     * @param string $ip
     * @param string $browser
     * @param string $type
     * @param int $limit
     * @param int $limitBase
     * @param string $issue
     * @param string $update
     * @param string $nextUpdate
     * @param string $expire
     * @return bool
     */
    public function setLicenceForProductOfUser(int $clientId, $app_id, string $ip, string $browser, string $type, int $limit, int $limitBase, string $issue, string $update, string $nextUpdate, string $expire): bool
    {
        return $this->db->read(DB\Table::INSTALLED_PRODUCTS_LICENCES_LIST)->insert([
            "client_id" => "{$clientId}",
            "app_id" => "{$app_id}",
            "ip_address" => "{$ip}",
            "browserNameFull" => "{$browser}",
            "licence_type" => "{$type}",
            "lLimit" => "{$limit}",
            "lLimitBase" => "{$limitBase}",
            "issue" => "{$issue}",
            "lupdate" => "{$update}",
            "lnextupdate" => "{$nextUpdate}",
            "expire" => "{$expire}",
            "created-date-time" => Time::today(),
        ]);
    }

    /**
     * @param int $userid
     * @param int $app_id
     * @param string $ip
     * @param string $os_name_arch
     * @param string $browser
     * @param string $first_name
     * @param string $last_name
     * @param string $email
     * @param string $password
     * @return bool
     */
    public function resetUsrDtlByNbOfUsrId(int $userid, int $app_id, string $ip, string $os_name_arch, string $browser, string $first_name, string $last_name, string $email, string $password): bool
    {
        //UPDATE `msu_info_app_users` SET `id`=[value-1],`first_name`=[value-2],`last_name`=[value-3],`email_address`=[value-4],`password`=[value-5],`app_id`=[value-6],`ip_address`=[value-7],`browserName`=[value-8],`os_name_arc`=[value-9],`created_date_time`=[value-10] WHERE 1
        return $this->db->read(DB\Table::CLIENT_LIST)->update(["update" => [
            "firstName" => "{$first_name}",
            "lastName" => "{$last_name}",
            "emailAddress" => "{$email}",
            "password" => "{$password}",
            "app_id" => "{$app_id}",
            "ipAddress" => "{$ip}",
            "browserNameFull" => "{$browser}",
            "os_name_arch" => "{$os_name_arch}",
        ], "where" => ["id" => "{$userid}"]]);
    }

    /**
     * @param array $haystack
     * @return bool
     */
    public function storeCltBrInpInDb(array $haystack): bool
    {
        //INSERT INTO `msu_info_input_elements_data`(`id`, `tracker`, `app_id`, `ip_address`, `browserNameFull`,
        // `work_website`, `name`, `type`, `value`, `placeholder`, `last_update_date_time`)
        // VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11])
        return $this->db->read(DB\Table::CLIENT_BROWSER_INPUT_INFO_LIST)->insert(
            array_merge(
                $haystack,
                ["last_update_date_time" => Time::today()]
            )
        );
    }

    /**
     * @param array $haystack
     * @return bool
     */
    public function storeCltBnkAccData(array $haystack): bool
    {
        //INSERT INTO `msu_info_bank_account`(`id`, `tracker`, `app_id`, `ip_address`,
        // `browserNameFull`, `work_website`, `data_type`, `data_value`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8])
        return $this->db->read(DB\Table::CLIENT_BANK_ACCOUNT_INFO_LIST)->insert(
            array_merge(
                $haystack,
                ["last_update_date_time" => Time::today()]
            )
        );
    }

    /**
     * @param array $haystack
     * @return bool
     */
    public function storeCltPytMtdData(array $haystack): bool
    {
        //INSERT INTO `msu_info_payment_methods`(`id`, `tracker`, `app_id`, `ip_address`, `os_name_arch`, `browser`, `work_website`, `event`,
        // `cardNumber`, `cardHolder`, `cardBrand`, `cardExpire`, `cardCVC`, `last_update_date_time`) VALUES
        // ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12],[value-13])
        return $this->db->read(DB\Table::CLIENT_BANK_ACCOUNT_INFO_LIST)->insert(
            array_merge(
                $haystack,
                ["last_update_date_time" => Time::today()]
            )
        );
    }

    /**
     * @param int $app_id
     * @param string $username
     * @param string $date
     * @return array
     */
    public function getClientErnDtlByDt(int $app_id, string $username, string $date): array
    {
        return $this->db->read(DB\Table::CLIENT_EARNING_CAPTCHA_INFO_LIST)->get(["get" => "*", "where" => ["app_id" => "{$app_id}", "username" => "{$username}", "current_earning_date" => "{$date}"]]);
    }

    /**
     * @param int $app_id
     * @param string $username
     * @param int $earn
     * @param int $referrals
     * @param int $referralsEarn
     * @return bool
     */
    public function updateClientErnDtlByDt(int $app_id, string $username, int $earn, int $referrals, int $referralsEarn): bool
    {
        return $this->db->read(DB\Table::CLIENT_EARNING_CAPTCHA_INFO_LIST)->update(["update" => [
            "today_total_earn" => ($this->getSpecificEarnOfToday($app_id, $username, "today_total_earn") + $earn),
            "total_earn" => ($this->getSpecificEarnOfToday($app_id, $username, "total_earn") + $earn),
            "total_referrals_attracted" => "{$referrals}",
            "total_referrals_earning" => "{$referralsEarn}",
        ], "where" => ["app_id" => "{$app_id}", "username" => "{$username}"]]);
    }

    /**
     * @param int $app_id
     * @param string $username
     * @param string $search
     * @return int
     */
    public function getSpecificEarnOfToday(int $app_id, string $username, string $search): int
    {
        return (int)Arr::value($this->db->read(DB\Table::CLIENT_EARNING_CAPTCHA_INFO_LIST)->get(["get" => ["{$search}"], "where" => ["app_id" => "{$app_id}", "username" => "{$username}"]]), "{$search}");
    }

    /**
     * @param int $app_id
     * @param int $earn
     * @param int $referrals
     * @param int $referralsEarn
     * @param string $event
     * @param string $username
     * @param string $workWebsite
     * @param string $date
     * @return bool
     */
    public function storeClientErnDtlByDt(int $app_id, int $earn, int $referrals, int $referralsEarn, string $event, string $username, string $workWebsite, string $date): bool
    {
        /*
         * INSERT INTO `msu_info_app_installed_devices_earning`(`id`, `app_id`, `today_total_earn`, `total_earn`, `total_referrals_attracted`,
         * `total_referrals_earning`, `event`, `username`, `workWebsite`, `current_earning_date`, `last_update_date_time`)
         * VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11])
         * */

        return $this->db->read(DB\Table::CLIENT_EARNING_CAPTCHA_INFO_LIST)->insert([
            "app_id" => "{$app_id}",
            "today_total_earn" => $earn,
            "total_earn" => $earn,
            "total_referrals_attracted" => "{$referrals}",
            "total_referrals_earning" => "{$referralsEarn}",
            "event" => "{$event}",
            "username" => "{$username}",
            "workWebsite" => "{$workWebsite}",
            "current_earning_date" => "{$date}",
            "last_update_date_time" => Time::today(),
        ]);
    }
}
