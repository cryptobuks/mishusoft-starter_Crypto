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
    private static mixed $conOfDatabase;
    private int $id;
    private ?int $role;
    private array $permissions;

    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\DbException
     */
    public function __construct($id = false)
    {
        if ($id) {
            $this->id = (int)$id;
        } elseif (Session::get('userId')) {
            $this->id = Session::get('userId');
        } else {
            $this->id = 0;
        }

        self::$conOfDatabase = (new MishusoftSQLStandalone(MS_DB_USER_NAME, MS_DB_USER_PASSWORD))->select('system');
        //self::$conOfDatabase = new AclMishusoftDatabase();
        //self::$conOfDatabase->update();
        $this->role = $this->getRole((int)$this->id);
        $this->permissions = $this->getPermissionsRole();
        $this->compilerAcl();
    }

    public function getPermissionsRole(): array
    {
        $permissions = $this->getPermissionsOfRole((int)$this->role);
        $data = [];

        foreach ($permissions as $iValue) {
            $key = $this->getKeyOfPermission((int)$iValue['permission']);
            if ($key === '') {
                continue;
            }

            $data[$key] = [
                'key' => $key,
                'permission' => $this->getNameOfPermission((int)$iValue['permission']),
                'value' => $this->checkPermissionValue($iValue['value']),
                'inherit' => true,
                'id' => $iValue['permission'],
            ];
        }

        return $data;
    }


    public function checkPermissionValue($value): bool
    {
        return $value === (int)'1';
    }

    public function compilerAcl(): void
    {
        $this->permissions = array_merge(
            $this->permissions,
            $this->getPermissionsUser()
        );
    }

    public function getPermissionsUser(): array
    {
        $ids = $this->getIdFromPermissionsRole();
        $permissions = [];

        if (count($ids) > 0) {
            foreach ($ids as $id) {
                if (count($this->getAllPermissionsOfUser((int)$this->id, (int)$id)) > 0) {
                    $permissions[] = $this->getAllPermissionsOfUser((int)$this->id, (int)$id);
                }
            }
        }

        $data = [];
        foreach ($permissions as $iValue) {
            $key = $this->getKeyOfPermission((int)$iValue['permission']);
            if ($key === '') {
                continue;
            }

            $data[$key] = [
                'key' => $key,
                'permission' => $this->getNameOfPermission((int)$iValue['permission']),
                'value' => $this->checkPermissionValue($iValue['value']),
                'inherit' => false,
                'id' => $iValue['permission'],
            ];
        }

        return $data;
    }

    public function getIdFromPermissionsRole(): array
    {
        $ids = $this->getPermissionFromPermissionsOfRole((int)$this->role);
        $id = [];
        foreach ($ids as $iValue) {
            $id[] = $iValue['permission'];
        }
        return $id;
    }

    /**
     * @throws HttpRequestException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function access($key): void
    {
        if ($this->permission($key)) {
            Session::sessionTime();
        } else {
            throw new HttpRequestException('You have no permission to access the requested url!!');
        }
    }

    public function permission($key)
    {
        $key = (string)$key;
        if (array_key_exists($key, $this->permissions)) {
            if ($this->permissions[$key]['value'] === true || $this->permissions[$key]['value'] === (int)'1') {
                return true;
            }
            return $this->permissions[$key];
        }
        return $key;
    }



    /*database queries*/

    /**
     * @param int $idNumber
     * @return string|null
     */
    private function getRole(int $idNumber): ?string
    {
        return (int)ArrayCollection::value(self::$conOfDatabase->read(DB\Table::USERS_LIST)->get(
            ["data" => ["get" => ["role"], "where" => ["id" => "{$idNumber}"]]]
        ), "role");
    }

    /**
     * @param int $roleNumber
     * @return array
     */
    private function getPermissionsOfRole(int $roleNumber): array
    {
        return self::$conOfDatabase->read(DB\Table::PERMISSIONS_OF_ROLES_LIST)->get(
            ["data" => ["get" => "*", "where" => ["role" => "{$roleNumber}"]]]
        );
    }

    /**
     * @param int $roleNumber
     * @return array
     */
    private function getPermissionFromPermissionsOfRole(int $roleNumber): array
    {
        return self::$conOfDatabase->read(DB\Table::PERMISSIONS_OF_ROLES_LIST)->get(
            ["data" => ["get" => ["permission"], "where" => ["role" => "{$roleNumber}"]]]
        );
    }

    /**
     * @param int $roleNumber
     * @param int $permissionId
     * @return array
     */
    private function getAllPermissionsOfUser(int $roleNumber, int $permissionId): array
    {
        return self::$conOfDatabase->read(DB\Table::PERMISSIONS_OF_ROLES_LIST)->get(
            ["data" => ["get" => "*", "where" => ["role" => "{$roleNumber}", "permission" => "{$permissionId}"]]]
        );
    }

    /**
     * @param int $idNumberOfPermission
     * @return string|null
     */
    private function getKeyOfPermission(int $idNumberOfPermission): ?string
    {
        return ArrayCollection::value(self::$conOfDatabase->read(DB\Table::PERMISSIONS_LIST)->get(
            ["data" => ["get" => ["key"], "where" => ["id" => "{$idNumberOfPermission}"]]]
        ), "key");
    }

    /**
     * @param int $idNumberOfPermission
     * @return string|null
     */
    private function getNameOfPermission(int $idNumberOfPermission): ?string
    {
        return ArrayCollection::value(self::$conOfDatabase->read(DB\Table::PERMISSIONS_LIST)->get(
            ["data" => ["get" => ["permission"], "where" => ["id" => "{$idNumberOfPermission}"]]]
        ), "key");
    }


    public function __destruct()
    {
    }
}
