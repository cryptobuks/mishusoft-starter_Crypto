<?php

namespace Mishusoft\Authentication;

use Mishusoft\Databases\MishusoftSQLStandalone;
use Mishusoft\Databases\MishusoftSQLStandalone\TableInterface;
use Mishusoft\Exceptions\HttpException\HttpRequestException;
use Mishusoft\Http\Session;
use Mishusoft\Migration\DB;

class Acl
{
    /**
     * @var TableInterface|mixed
     */
    private static mixed $conOfDatabase;
    private int          $id = 0;
    private ?int         $role;
    private array        $permissions;

    /**
     * @param int $id
     *
     * @throws \Mishusoft\Exceptions\DbException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function __construct(int $id = 0)
    {
        if ($id !== 0) {
            $this->id = $id;
        }
        else {
            if (Session::get('userId')) {
                $this->id = Session::get('userId');
            }
        }

        self::$conOfDatabase = (new MishusoftSQLStandalone(DB::USER(), DB::PASSWORD()))->select('system');
        //self::$conOfDatabase = new AclMishusoftDatabase();
        //self::$conOfDatabase->update();
        $this->role        = $this->getRole($this->id);
        $this->permissions = $this->getPermissionsRole();
        $this->compilerAcl();
    }

    /**
     * @return array
     */
    public function getPermissionsRole(): array
    {
        $permissions = $this->getPermissionsOfRole((int)$this->role);
        $data        = [];

        foreach ($permissions as $iValue) {
            $key = $this->getKeyOfPermission((int)$iValue['permission']);
            if ($key === '') {
                continue;
            }

            $data[$key] = [
                'key'        => $key,
                'permission' => $this->getNameOfPermission((int)$iValue['permission']),
                'value'      => $this->checkPermissionValue($iValue['value']),
                'inherit'    => true,
                'id'         => $iValue['permission'],
            ];
        }

        return $data;
    }


    public function checkPermissionValue($value): bool
    {
        return $value === 1;
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
        $ids         = $this->getIdFromPermissionsRole();
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
                'key'        => $key,
                'permission' => $this->getNameOfPermission((int)$iValue['permission']),
                'value'      => $this->checkPermissionValue($iValue['value']),
                'inherit'    => false,
                'id'         => $iValue['permission'],
            ];
        }

        return $data;
    }

    public function getIdFromPermissionsRole(): array
    {
        $ids = $this->getPermissionFromPermissionsOfRole((int)$this->role);
        $id  = [];
        foreach ($ids as $iValue) {
            $id[] = $iValue['permission'];
        }
        return $id;
    }

    /**
     * @param $key
     *
     * @throws HttpRequestException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    public function access($key): void
    {
        if ($this->permission($key)) {
            Session::sessionTime();
        }
        else {
            throw new HttpRequestException('You have no permission to access the requested url!!');
        }
    }

    /**
     * @param string $key
     *
     * @return mixed
     */
    public function permission(string $key): mixed
    {
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
     *
     * @return string|null
     */
    private function getRole(int $idNumber): ?string
    {
        return (string)array_value(
            self::$conOfDatabase->read(DB\Table::USERS_LIST)->get(
                ["data" => ["get" => ["role"], "where" => ["id" => $idNumber]]]
            ), "role"
        );
    }

    /**
     * @param int $roleNumber
     *
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
     *
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
     *
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
     *
     * @return string|null
     */
    private function getKeyOfPermission(int $idNumberOfPermission): ?string
    {
        return array_value(
            self::$conOfDatabase->read(DB\Table::PERMISSIONS_LIST)->get(
                ["data" => ["get" => ["key"], "where" => ["id" => "{$idNumberOfPermission}"]]]
            ), "key"
        );
    }

    /**
     * @param int $idNumberOfPermission
     *
     * @return string|null
     */
    private function getNameOfPermission(int $idNumberOfPermission): ?string
    {
        return array_value(
            self::$conOfDatabase->read(DB\Table::PERMISSIONS_LIST)->get(
                ["data" => ["get" => ["permission"], "where" => ["id" => "{$idNumberOfPermission}"]]]
            ), "key"
        );
    }


    public function __destruct() { }
}
