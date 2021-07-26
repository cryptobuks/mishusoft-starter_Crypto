<?php


namespace Mishusoft\UsedDB\Drivers\Acl;


use Mishusoft\Databases\MishusoftSQLStandalone;
use Mishusoft\Databases\MishusoftSQLStandalone\TableInterface;
use Mishusoft\Migration\DB;

class AclMishusoftDatabase extends MishusoftSQLStandalone
{
    /**
     * @var TableInterface|mixed
     */
    private $db;

    /**
     * AclMishusoftDatabase constructor.
     */
    public function __construct()
    {
        parent::__construct(MS_DB_USER_NAME, MS_DB_USER_PASSWORD);
        $this->db = $this->select("system");
    }

    /**
     * @param int $idNumber
     * @return string|null
     */
    public function getRole(int $idNumber): ?string
    {
        return (int) _Array::value($this->db->read(DB::USERS_LIST_TABLE)->get(["data" => ["get" => ["role"], "where" => ["id" => "{$idNumber}"]]]), "role");
    }

    /**
     * @param int $roleNumber
     * @return array
     */
    public function getPermissionsOfRole(int $roleNumber): array
    {
        return $this->db->read(DB::PERMISSIONS_OF_ROLES_LIST_TABLE)->get(["data" => ["get" => "*", "where" => ["role" => "{$roleNumber}"]]]);
    }

    /**
     * @param int $roleNumber
     * @return array
     */
    public function getPermissionFromPermissionsOfRole(int $roleNumber): array
    {
        return $this->db->read(DB::PERMISSIONS_OF_ROLES_LIST_TABLE)->get(["data" => ["get" => ["permission"], "where" => ["role" => "{$roleNumber}"]]]);
    }

    /**
     * @param int $roleNumber
     * @param int $permissionId
     * @return array
     */
    public function getAllPermissionsOfUser(int $roleNumber, int $permissionId): array
    {
        return $this->db->read(DB::PERMISSIONS_OF_ROLES_LIST_TABLE)->get(["data" => ["get" => "*", "where" => ["role" => "{$roleNumber}","permission" => "{$permissionId}"]]]);
    }

    /**
     * @param int $idNumberOfPermission
     * @return string|null
     */
    public function getKeyOfPermission(int $idNumberOfPermission): ?string
    {
        return _Array::value($this->db->read(DB::PERMISSIONS_LIST_TABLE)->get(["data" => ["get" => ["key"], "where" => ["id" => "{$idNumberOfPermission}"]]]),"key");
    }

    /**
     * @param int $idNumberOfPermission
     * @return string|null
     */
    public function getNameOfPermission(int $idNumberOfPermission): ?string
    {
        return _Array::value($this->db->read(DB::PERMISSIONS_LIST_TABLE)->get(["data" => ["get" => ["permission"], "where" => ["id" => "{$idNumberOfPermission}"]]]),"key");
    }

}