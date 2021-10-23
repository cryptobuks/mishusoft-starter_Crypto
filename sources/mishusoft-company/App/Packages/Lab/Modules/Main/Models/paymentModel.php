<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Models;

use Mishusoft\Framework\Drivers\Model;
use PDO;
use function Mishusoft\Framework\Globals\value;

class paymentModel extends Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getAppDetailsById($id)
    {
        $id = (int) $id;
        return $this->query("SELECT * FROM `".DbPREFIX."app_list_installed` WHERE `id`='{$id}';")->fetch(PDO::FETCH_ASSOC);
    }

    public function getAppNameVersionById($id): string
    {
        $id = (int) $id;
        $data = $this->query("SELECT `name`, `version` FROM `".DbPREFIX."app_list_installed` WHERE `id`='{$id}';")->fetch(PDO::FETCH_ASSOC);
        return value($data, 'name') . ' ' . value($data, 'version');
    }
    public function getUserDetailsById($id)
    {
        $id = (int) $id;
        return $this->query("SELECT * FROM `".DbPREFIX."info_app_users` WHERE `id`='{$id}';")->fetch(PDO::FETCH_ASSOC);
    }
    public function getUserDetailsByEmail($email)
    {
        return $this->query("SELECT * FROM `".DbPREFIX."info_app_users` WHERE `email_address`='{$email}';")->fetch(PDO::FETCH_ASSOC);
    }
    public function getUserIdByEmail($email)
    {
        return value($this->query("SELECT `id` FROM `".DbPREFIX."info_app_users` WHERE `email_address`='{$email}';")->fetch(PDO::FETCH_ASSOC), 'id');
    }
    public function getUserDetailsByAppId($id)
    {
        $id = (int) $id;
        return $this->query("SELECT * FROM `".DbPREFIX."info_app_users` WHERE `app_id`='{$id}';")->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserFullNameByAppId($id): string
    {
        $id = (int) $id;
        $data = $this->query("SELECT * FROM `".DbPREFIX."info_app_users` WHERE `app_id`='{$id}';")->fetch(PDO::FETCH_ASSOC);
        return value($data, 'first_name') . ' ' . value($data, 'last_name');
    }

    public function getUserIdByAppId($id)
    {
        $id = (int) $id;
        return value($this->query("SELECT * FROM `".DbPREFIX."info_app_users` WHERE `app_id`='{$id}';")->fetch(PDO::FETCH_ASSOC), 'id');
    }

    public function getClientIpAddressById($id)
    {
        $id = (int) $id;
        return value($this->query("SELECT `ip_address` FROM `".DbPREFIX."info_app_users` WHERE `id`='{$id}';")->fetch(PDO::FETCH_ASSOC), 'ip_address');
    }
    public function getUserEmailByAppId($id)
    {
        $id = (int) $id;
        return value($this->query("SELECT `email_address` FROM `".DbPREFIX."info_app_users` WHERE `app_id`='{$id}';")->fetch(PDO::FETCH_ASSOC), 'email_address');
    }
    public function resolveAppIdInUserInfo($appId, $userEmail): bool
    {
        $appId = (int) $appId;
        $userEmail = (string) $userEmail;

        if (empty($this->getUserIdByAppId($appId))) {
            if (!empty($this->getUserDetailsByEmail($userEmail))) {
                $resolve = $this->query("UPDATE `".DbPREFIX."info_app_users` SET `app_id`='{$appId}' WHERE `id`='{$this->getUserIdByEmail($userEmail)}';");
                if ($resolve) {
                    return true;
                }
            }
        }
        return false;
    }
    public function addPaymentInfo($clientId, $appId, $ip_address, $paymentIntentId, $token, $amount, $currency, $paymentType, $paymentMethod)
    {
        $clientId = (int) $clientId;
        $appId = (int) $appId;
        $amount = (int) $amount;
        /*INSERT INTO `msu_app_licence_payment`(`id`, `user_id`, `app_id`, `ip_address`, `payment_method_id`, `token`, `payment_amount`, `currency`, `payment_type`, `payment_method`, `payment_date_time`)
        VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11])*/
        $this->query("INSERT INTO `".DbPREFIX."app_licence_payment`(`id`, `user_id`, `app_id`, `ip_address`, `payment_method_id`, `token`, `payment_amount`, `currency`, `payment_type`, `payment_method`, `payment_date_time`) 
        VALUES (null,'{$clientId}','{$appId}','{$ip_address}','{$paymentIntentId}','{$token}','{$amount}','{$currency}','{$paymentType}','{$paymentMethod}',now());");
    }
    public function addHackingPaymentInfo($ip_address, $paymentIntentId, $token, $amount, $currency, $paymentType, $paymentMethod)
    {
        $amount = (int) $amount;
        /*INSERT INTO `msu_info_payment_hacking`(`id`, `ip_address`, `payment_method_id`, `token`, `payment_amount`, `currency`, `payment_type`, `payment_method`, `payment_date_time`)
        VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9])*/
        $this->query("INSERT INTO `".DbPREFIX."info_payment_hacking`(`id`, `ip_address`, `payment_method_id`, `token`, `payment_amount`, `currency`, `payment_type`, `payment_method`, `payment_date_time`) 
        VALUES (null,'{$ip_address}','{$paymentIntentId}','{$token}','{$amount}','{$currency}','{$paymentType}','{$paymentMethod}',now());");
    }

    public function setUserLicence($clientId, $app_id, $ip, $browser, $ltype, $limit, $limitBase, $lissue, $lupdate, $lnextupdate, $lexpire)
    {
        //INSERT INTO `msu_app_licences`(`id`, `client_id`, `app_id`, `ip_address`, `browserNameFull`, `licence_type`, `lLimit`, `lLimitBase`, `issue`, `lupdate`, `lnextupdate`, `expire`, `created-date-time`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12],[value-13])
        $this->prepare("INSERT INTO `" . DbPREFIX . "app_licences` (`id`, `client_id`, `app_id`, `ip_address`, `browserNameFull`, `licence_type`, `lLimit`, `lLimitBase`, `issue`, `lupdate`, `lnextupdate`, `expire`, `created-date-time`) 
        VALUES (null, :clientId, :appId, :ip_add, :browser, :limit, :limitBase, :ltype, :lissue, :lupdate, :lnextupdate, :lexpire, now());")
            ->execute(
                [
                    ':clientId' => $clientId,
                    ':appId' => $app_id,
                    ':ip_add' => $ip,
                    ':browser' => $browser,
                    ':limit' => $limit,
                    ':limitBase' => $limitBase,
                    ':ltype' => $ltype,
                    ':lissue' => $lissue,
                    ':lupdate' => $lupdate,
                    ':lnextupdate' => $lnextupdate,
                    ':lexpire' => $lexpire
                ]
            );
    }
    public function getLicenceKeyByAppId($appId)
    {
        $appId = (int) $appId;
        return value($this->query("SELECT `id` FROM `".DbPREFIX."app_licences` WHERE `app_id`='{$appId}';")->fetch(PDO::FETCH_ASSOC), 'id');
    }

    public function checkPreviousLicence($appId): bool
    {
        $appId = (int) $appId;
        if (!empty($this->getUserDetailsByAppId($appId))) {
            $data = $this->query("SELECT * FROM `".DbPREFIX."app_licences` WHERE `app_id`='{$appId}';");
            $data = $data->fetch(PDO::FETCH_ASSOC);
            if ($data) {
                return true;
            }
            return false;
        }
    }

    public function updateLicenceKeyByAppId($appId, $licenceType, $limit, $limitBase, $licenceUpdate, $licenceExpire)
    {
        $appId = (int) $appId;
        //UPDATE `msu_app_licences` SET `id`=[value-1],`client_id`=[value-2],`app_id`=[value-3],`ip_address`=[value-4],`browserNameFull`=[value-5],`licence_type`=[value-6],`lLimit`=[value-7],`lLimitBase`=[value-8],`issue`=[value-9],`lupdate`=[value-10],`expire`=[value-11],`created-date-time`=[value-12] WHERE 1
        $this->query("UPDATE `".DbPREFIX."app_licences` SET `licence_type`='{$licenceType}',`lLimit`={$limit},`lLimitBase`={$limitBase},`lupdate`='{$licenceUpdate}',`expire`='{$licenceExpire}' WHERE `app_id` = '{$appId}';");
    }
}
