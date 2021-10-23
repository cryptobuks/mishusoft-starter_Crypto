<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Models;

use Mishusoft\Framework\Chipsets\Cryptography\Encryption;
use Mishusoft\Framework\Drivers\Model;
use Mishusoft\Framework\PreRequires\_Array;
use PDO;

class userModel extends Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getUser($username, $password)
    {
        $username = APP_USERNAME_PREFIX . $username;
        $password = Encryption::static($password);
        $data = $this->db->prepare("SELECT * from `" . DbPREFIX . "users` WHERE `username` = :username AND `password` = :password;");
        $data->execute(
            [
                ':username' => $username,
                ':password' => $password
            ]
        );
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserByIdCode($id, $code)
    {
        $id = (int) $id;
        $code = (int) $code;
        $data = $this->db->prepare("SELECT * from `" . DbPREFIX . "users` WHERE `id` = :id AND `code` = :code;");
        $data->execute(
            [
                ':id' => $id,
                ':code' => $code
            ]
        );
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserByEmail($email)
    {
        $data = $this->db->prepare("SELECT * from `" . DbPREFIX . "users` WHERE `email` = :email");
        $data->execute(
            [
                ':email' => $email
            ]
        );
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserByUsername($username)
    {
        $data = $this->db->prepare("SELECT * from `" . DbPREFIX . "users` WHERE `username` = :username");
        $data->execute(
            [
                ':username' => DbPREFIX . $username
            ]
        );
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function addNewCode($email)
    {
        $random = rand(1245678, 99999999);
        $data = $this->db->prepare("UPDATE `" . DbPREFIX . "users` SET `code` = :random WHERE `email` = :email");
        $data->execute(
            [
                ':random' => $random,
                ':email' => $email
            ]
        );
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function setNewPassword($id, $password)
    {
        $id = (int) $id;
        $this->db->prepare("UPDATE `" . DbPREFIX . "users` SET `password` = :password WHERE `id` = {$id}")->execute([':password' => Encryption::static($password)]);
    }

    public function getUserName($username): bool
    {
        $username = APP_USERNAME_PREFIX . $username;
        $data = $this->db->prepare("SELECT `username` FROM `" . DbPREFIX . "users` WHERE `username` = :username");
        $data->execute([':username' => $username]);
        if ($data->fetch(PDO::FETCH_ASSOC)) {
            return true;
        }
        return false;
    }

    public function getUserPassWord($username)
    {
        $username = APP_USERNAME_PREFIX . $username;
        $data = $this->query("SELECT `password` FROM `" . DbPREFIX . "users` WHERE `username` = '{$username}'")->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data, "password");
    }

    public function verifyUsername($username)
    {
        $username = APP_USERNAME_PREFIX . $username;
        $data = $this->db->prepare("SELECT `id`, `code` FROM `" . DbPREFIX . "users` WHERE `username` = :username");
        $data->execute(
            [
                ':username' => $username
            ]
        );
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function verifyEmail($email): bool
    {
        $id = $this->db->prepare("SELECT `id` FROM `" . DbPREFIX . "users` WHERE `email` = :email");
        $id->execute(
            [
                ':email' => $email
            ]
        );
        if ($id->fetch(PDO::FETCH_ASSOC)) {
            return true;
        }
        return false;
    }

    public function addUser($fName, $lName, $email, $username, $password, $dateOfBirth, $gender)
    {
        $password = Encryption::static($password);
        $username = (string)APP_USERNAME_PREFIX . $username;
        $role = '4';
        $random = rand(124578, 999999999);

        $this->prepare("INSERT INTO `" . DbPREFIX . "users` VALUES (null, :fName, :lName, :email, :password, :username, 'active', :role, 0, now(), :code)")
            ->execute(
                [
                    ':fName' => $fName,
                    ':lName' => $lName,
                    ':email' => $email,
                    ':password' => $password,
                    ':username' => $username,
                    ':role' => $role,
                    ':code' => $random
                ]
            );

        /**
         * INSERT INTO `msu_users_details`(`id`, `dob`, `gender`, `profession`, `pro_pic`, `cover_pic`)
         * VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6])
        .*/
        $this->prepare("INSERT INTO `" . DbPREFIX . "users_details`(`id`, `dob`, `gender`) VALUES (null, :dob, :gender)")
            ->execute(
                [
                    ':dob' => $dateOfBirth,
                    ':gender' => $gender
                ]
            );
    }

    public function getUserStatusByIdCode($id, $code)
    {
        $data = $this->db->prepare("SELECT `status` FROM `" . DbPREFIX . "users` WHERE `id` = :id and `code` = :code");
        $data->execute(
            [
                ':id' => $id,
                ':code' => $code
            ]
        );
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function activeUser($id, $code)
    {
        $data = $this->db->prepare("UPDATE `" . DbPREFIX . "users` SET `status` = 1 WHERE `id` = :id and `code` = :code");
        $data->execute(
            [
                ':id' => $id,
                ':code' => $code
            ]
        );
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function userNewLog($id, $type)
    {
        if ($type === 'LOGIN') {
            $this->prepare("INSERT INTO `" . DbPREFIX . "userslog_details` VALUES (null, :id, now(), '')")
                ->execute([':id' => $id]);
        }

        if ($type === 'LOGOUT') {
            $this->prepare("INSERT INTO `" . DbPREFIX . "userslog_details` VALUES (null, :id, '', now()")
                ->execute([':id' => $id]);
        }
    }

    public function getLoggedInUserDetails($id)
    {
        $id = (int)$id;
        return $this->db->query("SELECT * FROM `" . DbPREFIX . "users` WHERE `id` = '$id';")->fetch(PDO::FETCH_ASSOC);
        //$mDetails = $this->db->query("SELECT * FROM `" . DbPREFIX . "users_details` WHERE `id` = '$id';");
        //$data2 = $mDetails->fetch(\PDO::FETCH_ASSOC);
        //return array_merge($data1, $data2);
    }

    public function notificationsAll(): array
    {
        return $this->db->query("SELECT * FROM `" . DbPREFIX . "trackActivities` ORDER BY `ID` DESC;")->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getBranchIdByUserId($id)
    {
        $id = (int) $id;
        return _Array::value($this->query("SELECT * FROM `" . DbPREFIX . "branch_user` WHERE `user` = '$id';")->fetch(PDO::FETCH_ASSOC), 'branch');
    }

    public function getBranchNameById($id)
    {
        return _Array::value($this->query("SELECT * FROM " . DbPREFIX . "branches WHERE `id` = '$id';")->fetch(PDO::FETCH_ASSOC), 'name');
    }
}
