<?php

namespace Mishusoft\Framework\Drivers;


use Mishusoft\Framework\Chipsets\Databases\MishusoftSQLStandalone;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Interfaces\Chipsets\Databases\MishusoftSQLStandalone\TableInterface;
use Mishusoft\Framework\Migration\DB;

class Acl
{
    /**
     * @var TableInterface|mixed
     */
    private static $conOfDatabase;
    private int $id;
    private ?int $role;
    private array $permissions;

    public function __construct($id = false)
    {
        if ($id) {
            $this->id = (int)$id;
        } else {
            if (Session::get('userId')) {
                $this->id = Session::get('userId');
            } else {
                $this->id = 0;
            }
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
        $data = array();

        for ($i = 0; $i < count($permissions); $i++) {
            $key = $this->getKeyOfPermission((int)$permissions[$i]['permission']);
            if ($key === '') {
                continue;
            }

            $data[$key] = array(
                'key' => $key,
                'permission' => $this->getNameOfPermission((int)$permissions[$i]['permission']),
                'value' => $this->checkPermissionValue($permissions[$i]['value']),
                'inherit' => true,
                'id' => $permissions[$i]['permission']
            );
        }

        return $data;
    }


    public function checkPermissionValue($value): bool
    {
        if ($value === (int)'1') {
            return true;
        } else {
            return false;
        }
    }

    public function compilerAcl()
    {
        $this->permissions = array_merge(
            $this->permissions,
            $this->getPermissionsUser()
        );
    }

    public function getPermissionsUser(): array
    {
        $ids = $this->getIdFromPermissionsRole();
        $permissions = array();

        if (count($ids) > 0) {
            foreach ($ids as $id) {
                if (count($this->getAllPermissionsOfUser((int)$this->id, (int)$id)) > 0) {
                    $permissions = array_merge($permissions, $this->getAllPermissionsOfUser((int)$this->id, (int)$id));
                }
            }
        }

        $data = array();
        for ($i = 0; $i < count($permissions); $i++) {
            $key = $this->getKeyOfPermission((int)$permissions[$i]['permission']);
            if ($key == '') {
                continue;
            }

            $data[$key] = array(
                'key' => $key,
                'permission' => $this->getNameOfPermission((int)$permissions[$i]['permission']),
                'value' => $this->checkPermissionValue($permissions[$i]['value']),
                'inherit' => false,
                'id' => $permissions[$i]['permission']
            );
        }

        return $data;
    }

    public function getIdFromPermissionsRole(): array
    {
        $ids = $this->getPermissionFromPermissionsOfRole((int)$this->role);
        $id = array();
        for ($i = 0; $i < count($ids); $i++) {
            $id[] = $ids[$i]['permission'];
        }
        return $id;
    }

    public function access($key)
    {
        if ($this->permission($key)) {
            Session::sessionTime();
        } else {
            Firewall::runtimeFailure("Forbidden",
                [
                    "debug" => ["file" => "NO-FILE-INTERNAL-MATTER", "location" => 'Action file', "description" => "You have no permission to access the requested url!!"],
                    "error" => ["description" => "You have no permission to access the requested url!!"]
                ]);
        }

    }

    public function permission($key)
    {
        $key = (string)$key;
        if (array_key_exists($key, $this->permissions)) {
            if ($this->permissions[$key]['value'] === true || $this->permissions[$key]['value'] === (int)'1') {
                return TRUE;
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
        return (int) _Array::value(self::$conOfDatabase->read(DB::USERS_LIST_TABLE)->get(["data" => ["get" => ["role"], "where" => ["id" => "{$idNumber}"]]]), "role");
    }

    /**
     * @param int $roleNumber
     * @return array
     */
    private function getPermissionsOfRole(int $roleNumber): array
    {
        return self::$conOfDatabase->read(DB::PERMISSIONS_OF_ROLES_LIST_TABLE)->get(["data" => ["get" => "*", "where" => ["role" => "{$roleNumber}"]]]);
    }

    /**
     * @param int $roleNumber
     * @return array
     */
    private function getPermissionFromPermissionsOfRole(int $roleNumber): array
    {
        return self::$conOfDatabase->read(DB::PERMISSIONS_OF_ROLES_LIST_TABLE)->get(["data" => ["get" => ["permission"], "where" => ["role" => "{$roleNumber}"]]]);
    }

    /**
     * @param int $roleNumber
     * @param int $permissionId
     * @return array
     */
    private function getAllPermissionsOfUser(int $roleNumber, int $permissionId): array
    {
        return self::$conOfDatabase->read(DB::PERMISSIONS_OF_ROLES_LIST_TABLE)->get(["data" => ["get" => "*", "where" => ["role" => "{$roleNumber}","permission" => "{$permissionId}"]]]);
    }

    /**
     * @param int $idNumberOfPermission
     * @return string|null
     */
    private function getKeyOfPermission(int $idNumberOfPermission): ?string
    {
        return _Array::value(self::$conOfDatabase->read(DB::PERMISSIONS_LIST_TABLE)->get(["data" => ["get" => ["key"], "where" => ["id" => "{$idNumberOfPermission}"]]]),"key");
    }

    /**
     * @param int $idNumberOfPermission
     * @return string|null
     */
    private function getNameOfPermission(int $idNumberOfPermission): ?string
    {
        return _Array::value(self::$conOfDatabase->read(DB::PERMISSIONS_LIST_TABLE)->get(["data" => ["get" => ["permission"], "where" => ["id" => "{$idNumberOfPermission}"]]]),"key");
    }


    function __destruct()
    {

    }
}
