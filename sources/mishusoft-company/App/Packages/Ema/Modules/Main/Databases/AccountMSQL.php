<?php


namespace Mishusoft\Ema\Mishusoft\Main\Databases;


use Mishusoft\Framework\Chipsets\Databases\MishusoftSQLStandalone;
use Mishusoft\Framework\Chipsets\System\Time;
use Mishusoft\Framework\Interfaces\Chipsets\Databases\MishusoftSQLStandalone\TableInterface;
use Mishusoft\Framework\Migration\DB;

class AccountMSQL extends MishusoftSQLStandalone
{
    /**
     * @var TableInterface|mixed
     */
    private $db;

    /**
     * AccountMSQL constructor.
     */
    public function __construct()
    {
        parent::__construct(MS_DB_USER_NAME, MS_DB_USER_PASSWORD);
        $this->db = $this->select("system");
    }

    /**
     * @param array $list
     * @return bool
     */
    public function AlreadyIn(array $list): bool
    {
        if (count($this->db->read(DB::USERS_LIST_TABLE)->get(["get" => "*", "where" => $list])) > 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param string $email
     * @return bool
     */
    public function insertEmailOfNewUser(string $email): bool
    {
        $unique = rand(1245678, 99999999);
        return $this->db->read(DB::USERS_LIST_TABLE)->insert([
            "email" => "{$email}",
            "activation" => "no",
            "code" => "{$unique}",
            "created-date-time" => Time::getToday(),
        ]);
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
     * @param string $email
     * @param int $code
     * @param string $activation
     * @param int $otp_time
     * @param int $act_time
     * @return bool
     */
    public function activeAccountOfUser(string $email, int $code, string $activation, int $otp_time, int $act_time): bool
    {
        return $this->db->read(DB::USERS_LIST_TABLE)->update([
            "update" => [
                "activation" => "{$activation}", "otp_time" => "{$otp_time}", "act_time" => "{$act_time}",
                "updated-date-time" => Time::getToday(),
            ],
            "where" => [
                "email" => "{$email}", "code" => "{$code}"
            ]]);
    }

    /**
     * @param int $numOfCode
     * @return array
     */
    public function getUsersInfoByActivationCode(int $numOfCode): array
    {
        return $this->db->read(DB::USERS_LIST_TABLE)->get(["get" => "*", "where" => ["code" => "{$numOfCode}"]]);
    }

    /**
     * @param string $table_name
     * @param array $list
     * @return array
     */
    public function getDetailsByItem(string $table_name, array $list): array
    {
        return $this->db->read($table_name)->get(["get" => "*", "where" => $list]);
    }

    /**
     * @param string $email
     * @param int $code
     * @param string $username
     * @return bool
     */
    public function updateUsernameOfUser(string $email, int $code, string $username): bool
    {
        return $this->db->read(DB::USERS_LIST_TABLE)->update([
            "update" => [
                "username" => "{$username}", "updated-date-time" => Time::getToday(),
            ],
            "where" => [
                "email" => "{$email}", "code" => "{$code}"
            ]]);
    }

}