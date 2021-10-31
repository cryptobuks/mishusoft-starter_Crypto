<?php

namespace Mishusoft\Authentication;

use Mishusoft\Databases\MishusoftSQLStandalone;
use Mishusoft\Http\Session;
use Mishusoft\Exceptions\HttpException\HttpRequestException;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Databases\MishusoftSQLStandalone\TableInterface;
use Mishusoft\Migration\DB;

class Acl
{
    /**
     * @var TableInterface|mixed
     */
    private static $conOfDatabase;
    private int $id;
    private ?int $role;
    private array $permissions;

    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\DbException
     */
    public function __construct($id)
    {
        if (is_numeric($id)) {
            $this->id = (int) $id;
        } elseif (Session::get("userId")) {
            $this->id = Session::get("userId");
        } else {
            $this->id = 0;
        }

        self::$conOfDatabase = (new MishusoftSQLStandalone(MS_DB_USER_NAME, MS_DB_USER_PASSWORD))->select("system");
        //self::$conOfDatabase = new AclMishusoftDatabase();
        //self::$conOfDatabase->update();
        $this->role = $this->getRole((int) $this->id);
        $this->permissions = $this->getPermissionsRole();
        $this->compilerAcl();
    }

    private function getRole(int $idNumber): ?string
    {
        return (int) ArrayCollection::value(self::$conOfDatabase->read(DB\Table::USERS_LIST)->get(["data" => ["get" => ["role"], "where" => ["id" => "{$idNumber}"]]]), "role");
    }

    public function getPermissionsRole(): array
    {
        $permissions = $this->getPermissionsOfRole((int) $this->role);
        $data = [];

        foreach ($permissions as $iValue) {
            $key = $this->getKeyOfPermission((int) $iValue["permission"]);
            if ($key === "") {
                continue;
            }

            $data[$key] = [
                "key" => $key,
                "permission" => $this->getNameOfPermission((int) $iValue["permission"]),
                "value" => $this->checkPermissionValue($iValue["value"]),
                "inherit" => true,
                "id" => $iValue["permission"],
            ];
        }

        return $data;
    }

    private function getPermissionsOfRole(int $roleNumber): array
    {
        return self::$conOfDatabase->read(DB\Table::PERMISSIONS_OF_ROLES_LIST)->get(["data" => ["get" => "*", "where" => ["role" => "{$roleNumber}"]]]);
    }

    private function getKeyOfPermission(int $idNumberOfPermission): ?string
    {
        return ArrayCollection::value(self::$conOfDatabase->read(DB\Table::PERMISSIONS_LIST)->get(["data" => ["get" => ["key"], "where" => ["id" => "{$idNumberOfPermission}"]]]), "key");
    }

    private function getNameOfPermission(int $idNumberOfPermission): ?string
    {
        return ArrayCollection::value(self::$conOfDatabase->read(DB\Table::PERMISSIONS_LIST)->get(["data" => ["get" => ["permission"], "where" => ["id" => "{$idNumberOfPermission}"]]]), "key");
    }

    public function checkPermissionValue($value): bool
    {
        return $value === (int) "1";
    }

    public function compilerAcl(): void
    {
        $this->permissions = array_merge($this->permissions, $this->getPermissionsUser());
    }

    public function getPermissionsUser(): array
    {
        $ids = $this->getIdFromPermissionsRole();
        $permissions = [];

        foreach ($ids as $id) {
<<<<<<< Updated upstream
            if ($this->getAllPermissionsOfUser($this->id, (int) $id) !== []) {
                $permissions[] = $this->getAllPermissionsOfUser($this->id, (int) $id);
=======
            if ($this->getAllPermissionsOfUser($this->id, (int)$id) !== []) {
                $permissions[] = $this->getAllPermissionsOfUser($this->id, (int)$id);
>>>>>>> Stashed changes
            }
        }

        $data = [];
        foreach ($permissions as $iValue) {
            $key = $this->getKeyOfPermission((int) $iValue["permission"]);
            if ($key === "") {
                continue;
            }

            $data[$key] = [
                "key" => $key,
                "permission" => $this->getNameOfPermission((int) $iValue["permission"]),
                "value" => $this->checkPermissionValue($iValue["value"]),
                "inherit" => false,
                "id" => $iValue["permission"],
            ];
        }

        return $data;
    }

    public function getIdFromPermissionsRole(): array
    {
        $ids = $this->getPermissionFromPermissionsOfRole((int) $this->role);
        $id = [];
        foreach ($ids as $iValue) {
            $id[] = $iValue["permission"];
        }
        return $id;
    }

    private function getPermissionFromPermissionsOfRole(int $roleNumber): array
    {
        return self::$conOfDatabase->read(DB\Table::PERMISSIONS_OF_ROLES_LIST)->get(["data" => ["get" => ["permission"], "where" => ["role" => "{$roleNumber}"]]]);
    }

    private function getAllPermissionsOfUser(int $roleNumber, int $permissionId): array
    {
        return self::$conOfDatabase->read(DB\Table::PERMISSIONS_OF_ROLES_LIST)->get(["data" => ["get" => "*", "where" => ["role" => "{$roleNumber}", "permission" => "{$permissionId}"]]]);
    }

    /**
     * @param $key
     * @throws HttpRequestException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    public function access($key): void
    {
        if ($this->permission($key)) {
            Session::sessionTime();
        } else {
            throw new HttpRequestException("You have no permission to access the requested url!!");
        }
    }

    public function permission($key)
    {
        $key = (string) $key;
        if (array_key_exists($key, $this->permissions)) {
            if ($this->permissions[$key]["value"] === true || $this->permissions[$key]["value"] === (int) "1") {
                return true;
            }
            return $this->permissions[$key];
        }
        return $key;
    }
<<<<<<< Updated upstream
=======



    private function getRole(int $idNumber): ?string
    {
        return (int)ArrayCollection::value(self::$conOfDatabase->read(DB\Table::USERS_LIST)->get(
            ["data" => ["get" => ["role"], "where" => ["id" => "{$idNumber}"]]]
        ), "role");
    }

    private function getPermissionsOfRole(int $roleNumber): array
    {
        return self::$conOfDatabase->read(DB\Table::PERMISSIONS_OF_ROLES_LIST)->get(
            ["data" => ["get" => "*", "where" => ["role" => "{$roleNumber}"]]]
        );
    }

    private function getPermissionFromPermissionsOfRole(int $roleNumber): array
    {
        return self::$conOfDatabase->read(DB\Table::PERMISSIONS_OF_ROLES_LIST)->get(
            ["data" => ["get" => ["permission"], "where" => ["role" => "{$roleNumber}"]]]
        );
    }

    private function getAllPermissionsOfUser(int $roleNumber, int $permissionId): array
    {
        return self::$conOfDatabase->read(DB\Table::PERMISSIONS_OF_ROLES_LIST)->get(
            ["data" => ["get" => "*", "where" => ["role" => "{$roleNumber}", "permission" => "{$permissionId}"]]]
        );
    }

    private function getKeyOfPermission(int $idNumberOfPermission): ?string
    {
        return ArrayCollection::value(self::$conOfDatabase->read(DB\Table::PERMISSIONS_LIST)->get(
            ["data" => ["get" => ["key"], "where" => ["id" => "{$idNumberOfPermission}"]]]
        ), "key");
    }

    private function getNameOfPermission(int $idNumberOfPermission): ?string
    {
        return ArrayCollection::value(self::$conOfDatabase->read(DB\Table::PERMISSIONS_LIST)->get(
            ["data" => ["get" => ["permission"], "where" => ["id" => "{$idNumberOfPermission}"]]]
        ), "key");
    }
>>>>>>> Stashed changes
}
