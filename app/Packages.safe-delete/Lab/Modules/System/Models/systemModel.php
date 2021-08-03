<?php
namespace Mishusoft\Packages\Lab\Modules\System\Models;

use Mishusoft\Framework\Chipsets\Cryptography\Decryption;
use Mishusoft\Framework\Chipsets\Cryptography\Encryption;
use Mishusoft\Framework\Drivers\Model;
use Mishusoft\Framework\PreRequires\_Array;
use PDO;

class systemModel extends Model
{

    public function __construct()
    {
        parent::__construct();
    }

    public function getMainItemTabs(): array
    {
        $data = $this->db->query("SELECT * FROM `" . DbPREFIX . "system_menu_items` WHERE `type` = 'main' ORDER BY `name` ASC;");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getExtraItemTabs(): array
    {
        $data = $this->db->query("SELECT * FROM `" . DbPREFIX . "system_menu_items` WHERE `type` = 'extra' ORDER BY `name` ASC;");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    /* start of Branches add, update and delete section */

    public function getBranches(): array
    {
        $branch = $this->query("SELECT * FROM " . DbPREFIX . "branches ORDER BY `id`;");
        return $branch->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getBranch($id)
    {
        $branch = $this->query("SELECT * FROM " . DbPREFIX . "branches WHERE `id` = '$id'; ");
        return $branch->fetch(PDO::FETCH_ASSOC);
    }

    public function getBranchNameById($id)
    {
        $branch = $this->query("SELECT * FROM " . DbPREFIX . "branches WHERE `id` = '$id'; ");
        $branch = $branch->fetch(PDO::FETCH_ASSOC);
        return _Array::value($branch, 'name');
    }

    public function getBranchNameByUserId($id)
    {
        $branch = $this->query("SELECT * FROM " . DbPREFIX . "branch_user WHERE `id` = '$id'; ");
        $branch = $branch->fetch(PDO::FETCH_ASSOC);
        return _Array::value($branch,'user');
    }

    public function isBranchAlreadyExists($name): bool
    {
        $branch = $this->db->prepare("SELECT * FROM `" . DbPREFIX . "branches` WHERE `name` = :name");
        $branch->execute(
            array(
                ':name' => $name
            )
        );
        if ($branch->fetch(PDO::FETCH_ASSOC)) {
            return TRUE;
        }
        return FALSE;
    }

    public function insertBranch($name, $status, $location)
    {
        $this->prepare("INSERT INTO `" . DbPREFIX . "branches` VALUES (null, :name, :status, :location)")
            ->execute(
                [
                    ':name' => $name,
                    ':status' => $status,
                    ':location' => $location
                ]);
    }

    public function editBranch($id, $name, $status, $location)
    {
        $id = (int)$id;
        $this->prepare("UPDATE `" . DbPREFIX . "branches` SET `name` = :name, `status` = :status, `location` = :location  WHERE id = :id")
            ->execute(
                [
                    ':id' => $id,
                    ':name' => $name,
                    ':status' => $status,
                    ':location' => $location
                ]);
    }

    public function deleteBranch($id)
    {
        $id = (int)$id;
        $this->query("DELETE from `" . DbPREFIX . "branches` where `id` = $id;");
    }

    public function isStuffAlreadyExists($branch, $stuff): bool
    {
        $data = $this->db->prepare("SELECT * FROM `" . DbPREFIX . "branch_user` WHERE `branch` = :branch AND `user` = :stuff");
        $data->execute(
            array(
                ':branch' => $branch,
                ':stuff' => $stuff
            )
        );
        if ($data->fetch(PDO::FETCH_ASSOC)) {
            return TRUE;
        }
        return FALSE;
    }

    /**
     * @public
     * @param $branch
     * @param $stuff
     */

    public function addStuffToBranch($branch, $stuff)
    {
        $branch = (int)$branch;
        $stuff = (int)$stuff;
        $this->prepare("INSERT INTO `" . DbPREFIX . "branch_user` VALUES (null, :branch, :stuff);")
            ->execute(
                [
                    ':branch' => $branch,
                    ':stuff' => $stuff,
                ]);
    }

    public function removeStuffFromBranch($branch, $stuff)
    {
        $branch = (int)$branch;
        $stuff = (int)$stuff;
        $this->query("DELETE from `" . DbPREFIX . "branch_user` where `branch` = $branch AND `user` = $stuff");
    }

    public function getBranchUserByBranchUserId($brnc, $usr)
    {
        $brnc = (int)$brnc;
        $usr = (int)$usr;
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "branch_user` WHERE `branch` = '$brnc' AND `user` = '$usr'");
        $data = $data->fetch(PDO::FETCH_ASSOC);
        return $data['user'];
    }

    public function getBranchUsersDetailsWithWorkingTime($branch): array
    {
        $branch = (int)$branch;
        $Users = $this->query("SELECT u.*, ui.* FROM " . DbPREFIX . "users u, " . DbPREFIX . "users_details ui WHERE u.id = ui.id");
        $Users = $Users->fetchAll(PDO::FETCH_ASSOC);
        $data = array();
        $subData1 = array();
        $subData2 = array();

        for ($i = 0; $i < count($Users); $i++) {
            if ($Users[$i]['id'] === $this->getUserIdByBranchNUserId($branch, $Users[$i]['id'])) {
                $subData1[$i] = array(
                    'serialNumber' => $i + 1,
                    'id' => $Users[$i]['id'],
                    'full_name' => $Users[$i]['f_name'] . ' ' . $Users[$i]['l_name'],
                    'email' => $Users[$i]['email'],
                    'password' => Decryption::static($Users[$i]['password']),
                    'username' => ucfirst(preg_replace('/' . APP_USERNAME_PREFIX . '/is', '$1', $Users[$i]['username'])),
                    'activity' => $Users[$i]['activity'],
                    'role' => $this->getRoleById($Users[$i]['role']),
                    'r_date' => date("d-m-y", strtotime($Users[$i]['r_date'])),
                    'profile_picture' => $Users[$i]['pro_pic'],
                    'working_time' => $this->getTimeDuration($Users[$i]['r_date'], date("Y-m-d H:i:s")),
                    'branch' => $this->getBranchIdByUserId($Users[$i]['id']),
                    'branchName' => $this->getBranchNameById($this->getBranchIdByUserId($Users[$i]['id']))

                );
            }

            if ($Users[$i]['id'] !== $this->getUserIdFromBranchUserByUserId($Users[$i]['id'])) {
                $subData2[$i] = array(
                    'serialNumber' => $i + 1,
                    'id' => $Users[$i]['id'],
                    'full_name' => $Users[$i]['f_name'] . ' ' . $Users[$i]['l_name'],
                    'email' => $Users[$i]['email'],
                    'password' => Decryption::static($Users[$i]['password']),
                    'username' => ucfirst(preg_replace('/' . APP_USERNAME_PREFIX . '/is', '$1', $Users[$i]['username'])),
                    'activity' => $Users[$i]['activity'],
                    'role' => $this->getRoleById($Users[$i]['role']),
                    'r_date' => date("d-m-y", strtotime($Users[$i]['r_date'])),
                    'profile_picture' => $Users[$i]['pro_pic'],
                    'working_time' => $this->getTimeDuration($Users[$i]['r_date'], date("Y-m-d H:i:s")),
                    'branch' => $this->getBranchIdByUserId($Users[$i]['id']),
                    'branchName' => $this->getBranchNameById($this->getBranchIdByUserId($Users[$i]['id']))

                );
            }

            $data = array_merge($subData1, $subData2);
        }

        return $data;
    }

    public function getUserIdByBranchNUserId($branch, $user)
    {
        $branch = (int)$branch;
        $user = (int)$user;
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "branch_user` WHERE `branch` = '$branch' AND `user` = '$user' ");
        $data = $data->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data,'user');
    }

    public function getUserIdFromBranchUserByUserId($id)
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "branch_user` WHERE `user` = '$id' ");
        $data = $data->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data,'user');
    }

    public function getBranchIdByUserId($id)
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "branch_user` WHERE `user` = '$id' ");
        $data = $data->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data,'branch');
    }

    public function getTimeDuration($start, $end): string
    {
        $diff = abs(strtotime($start) - strtotime($end));

        $years = floor($diff / (365 * 60 * 60 * 24));
        $months = floor(($diff - $years * 365 * 60 * 60 * 24) / (30 * 60 * 60 * 24));
        $days = floor(($diff - $years * 365 * 60 * 60 * 24 - $months * 30 * 60 * 60 * 24) / (60 * 60 * 24));
        $data = '';
        if ($days !== 0) {
            $data = $days . ' days';
        }
        if ($months !== 0) {
            $data = $months . ' months, ' . $days . ' days';
        }
        if ($years !== 0) {
            $data = $years . ' years, ' . $months . ' months, ' . $days . ' days';
        }
        return $data;
    }

    public function getStuffNameById($id): string
    {
        $stuff = $this->query("SELECT * FROM " . DbPREFIX . "users WHERE `id` = '$id'; ");
        $stuff = $stuff->fetch(PDO::FETCH_ASSOC);
        return $stuff['f_name'] . ' ' . $stuff['l_name'];
    }

    /* end of Branches add, update and delete section */

    /* start of menu add, update and delete section */
    public function getAllPagesPerfectly(): array
    {
        $pages = $this->db->query("SELECT * FROM `" . DbPREFIX . "pages` ORDER BY `id` ASC;")->fetchAll(PDO::FETCH_ASSOC);
        $data = array();
        foreach ($pages as $page) {
            $data[] = array(
                "id" => _Array::value($page, "id"),
                "parentId" => _Array::value($page, "parent_id"),
                "title" => _Array::value($page, "title"),
                "url" => _Array::value($page, "url"),
                "icon" => _Array::value($page, "icon"),
                "position" => $this->getMenuPositionById(_Array::value($page, "position")),
                "positionId" => _Array::value($page, "position"),
                "status" => _Array::value($page, "status"),
                "type" => _Array::value($page, "type"),
                "seo" => _Array::value($page, "seo"),
            );
        }

        return $data;
    }

    public function getPage($id)
    {
        return $this->query("SELECT * FROM `" . DbPREFIX . "pages` WHERE `id` = '$id';")->fetch(PDO::FETCH_ASSOC);
    }

    public function getMenuPositionById($id)
    {
        $position = $this->query("SELECT `position` FROM `" . DbPREFIX . "menu_position` WHERE `id` = '$id';");
        return _Array::value($position->fetch(PDO::FETCH_ASSOC), 'position');
    }

    public function isPageTitleAlreadyExists($name): bool
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "pages` WHERE `title` = '$name'");
        if ($data->fetch(PDO::FETCH_ASSOC)) {
            return TRUE;
        }
        return FALSE;
    }

    public function isPageUrlAlreadyExists($url): bool
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "pages` WHERE `url` = '$url'");
        if ($data->fetch(PDO::FETCH_ASSOC)) {
            return TRUE;
        }
        return FALSE;
    }

    public function isPageExistsById($id): bool
    {
        $id = (int)$id;
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "pages` WHERE `id` = '{$id}'");
        if ($data->fetch(PDO::FETCH_ASSOC)) {
            return TRUE;
        }
        return FALSE;
    }

    public function addPage($parentId, $title, $url, $icon, $position, $status, $type, $seo)
    {
        $parentId = (int)$parentId;
        $position = (int)$position;
        $this->prepare("INSERT INTO `" . DbPREFIX . "pages` VALUES (null, :parentId, :title, :url, :icon, :position, :p_status, :type, :seo);")
            ->execute(
                array(
                    ':parentId' => $parentId,
                    ':title' => $title,
                    ':url' => $url,
                    ':icon' => $icon,
                    ':position' => $position,
                    ':p_status' => $status,
                    ':type' => $type,
                    ':seo' => $seo
                ));
    }

    public function editPage($id, $parent, $title, $url, $icon, $position, $status, $type, $seo)
    {
        $id = (int) $id;
        $parent = (int) $parent;
        $position = (int) $position;
        $this->prepare("UPDATE `" . DbPREFIX . "pages` SET `parent_id` = :parent, `title` = :title, `url` = :url, `icon` = :icon, `position` = :position, `status` = :status, `type` = :type, `seo` = :seo  WHERE `id` = :id")
            ->execute(
                [
                    ':id' => $id,
                    ':parent' => $parent,
                    ':title' => $title,
                    ':url' => $url,
                    ':icon' => $icon,
                    ':position' => $position,
                    ':status' => $status,
                    ':type' => $type,
                    ':seo' => $seo
                ]);
    }

    public function deletePage($id)
    {
        $id = (int)$id;
        $this->db->query("DELETE from `" . DbPREFIX . "pages` where `id` = $id");
    }

    public function getPageNameById($id)
    {
        $id = (int)$id;
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "pages` WHERE `id` = '{$id}'");
        return _Array::value($data->fetch(PDO::FETCH_ASSOC),'title');
    }

    public function getPageURIById($id)
    {
        $id = (int)$id;
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "pages` WHERE `id` = '{$id}'");
        return _Array::value($data->fetch(PDO::FETCH_ASSOC),'url');
    }

    public function getPageSourceById($id)
    {
        $id = (int)$id;
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "pages_sources` WHERE `page` = '{$id}'");
        return _Array::value($data->fetch(PDO::FETCH_ASSOC),'sources');
    }


    public function addSource($page, $source)
    {
        $page = (int)$page;
        $this->prepare("INSERT INTO `" . DbPREFIX . "pages_sources` (`id`, `page`, `sources`, `created_date`, `update_date`) VALUES (null, :page, :source, now(),now());")
            ->execute(array(
                    ':page' => $page,
                    ':source' => $source
                ));
    }

    public function editSource($page, $sources)
    {
        $page = (int) $page;
        $this->prepare("UPDATE `" . DbPREFIX . "pages_sources` SET `sources` = :sources WHERE `page` = :page")
            ->execute(
                [
                    ':page' => $page,
                    ':sources' => $sources
                ]);
    }


    /* end of admin menu add, update and delete section */

    /* start of appearance add, update and delete section */

    public function getActivities(): array
    {
        $activities = $this->query("SELECT * FROM " . DbPREFIX . "activities  order by `id` desc");
        return $activities->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAppearanceData(): array
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "appearance`");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAppearanceByID($id): array
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "appearance` WHERE `id` = $id");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function editAppearanceData($id, $bgc_name, $dtheme_name)
    {
        $id = (int)$id;
        $edit = array();

        if (!empty($bgc_name)) {
            $edit[] = "`bgc_name` = '$bgc_name'";
        }
        if (!empty($dtheme_name)) {
            $edit[] = "`dtheme_name` = '$dtheme_name'";
        }

        $var = implode(',', $edit);
        $this->query("UPDATE `" . DbPREFIX . "appearance` SET $var WHERE `id` = $id");
    }

    public function getThemes(): array
    {
        $themes = $this->query("SELECT * FROM `" . DbPREFIX . "themes`");
        return $themes->fetchAll(PDO::FETCH_ASSOC);
    }

    /* end of appearance menu add, update and delete section */

    /* start of module add, update and delete section */

    public function insertModule($md_name, $installed_location, $md_status)
    {
        $this->prepare("INSERT INTO `" . DbPREFIX . "modules` VALUES (null, :name, :installed_location, :status);")
            ->execute(
                array(
                    ':name' => $md_name,
                    ':installed_location' => $installed_location,
                    ':status' => $md_status
                ));
    }

    public function editModule($id, $status)
    {
        $id = (int)$id;
        $this->prepare("UPDATE `" . DbPREFIX . "modules` SET `status` = :status WHERE `id` = $id")
            ->execute(
                array(
                    ':status' => $status
                ));
    }

    public function deleteModule($id)
    {
        $id = (int)$id;
        $this->query("DELETE from " . DbPREFIX . "modules where `id` = $id");
    }

    public function getModules(): array
    {
        $m = $this->query("SELECT * FROM `" . DbPREFIX . "modules`");
        return $m->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getModule($id)
    {
        $m = $this->query("SELECT * FROM `" . DbPREFIX . "modules` WHERE `id` = $id");
        $data = $m->fetchAll(PDO::FETCH_ASSOC);
        return $data[0];
    }

    public function dbconfdata($filename)
    {
        $templine = '';
        $lines = file($filename); // Read entire file

        foreach ($lines as $line) {
            // Skip it if it's a comment
            if (substr($line, 0, 2) === '--' || $line === '' || substr($line, 0, 2) === '/*')
                continue;

            // Add this line to the current segment
            $templine .= $line;
            // If it has a semicolon at the end, it's the end of the query
            if (substr(trim($line), -1, 1) === ';') {
                $realdata = preg_replace('/{DB_PREFIX}/', DbPREFIX, $templine);
                $status = $this->query($realdata);
                if (!$status) {
                    print('Error performing query \'<strong>' . $realdata . '\': <br /><br />');
                }
                $templine = '';
            }
        }
    }

    /* end of module  add, update and delete section */

    /* start of Role add, update and delete section */

    public function getRoles(): array
    {
        return $this->query("SELECT * FROM " . DbPREFIX . "roles")->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getRole($roleId)
    {
        return $this->query("SELECT * FROM " . DbPREFIX . "roles WHERE id_role = '$roleId' ")->fetch(PDO::FETCH_ASSOC);
    }

    public function getRoleById($id)
    {
        return _Array::value($this->query("SELECT * FROM " . DbPREFIX . "roles WHERE id_role = '$id' ")->fetch(PDO::FETCH_ASSOC), 'role');
    }

    public function isRoleAlreadyExists($roleName): bool
    {
        $role = $this->db->prepare("SELECT * FROM `" . DbPREFIX . "roles` WHERE `role` = :role");
        $role->execute(
            array(
                ':role' => $roleName
            )
        );
        if ($role->fetch(PDO::FETCH_ASSOC)) {
            return TRUE;
        }
        return FALSE;
    }

    public function insertRole($role)
    {
        $this->prepare("INSERT INTO " . DbPREFIX . "roles VALUES (null, :role)")
            ->execute(
                [
                    ':role' => $role,
                ]);
    }

    public function editRole($roleId, $role)
    {
        $id = (int)$roleId;
        $this->prepare("UPDATE " . DbPREFIX . "roles SET role = :role WHERE id_role = :id")
            ->execute(
                [
                    ':id' => $id,
                    ':role' => $role,
                ]);
    }

    public function deleteRole($id)
    {
        $id = (int)$id;
        $this->query("DELETE from " . DbPREFIX . "roles where id_role = $id");
    }

    public function getRolePermissions($roleId): array
    {
        $data = [];

        $permissions = $this->query("SELECT * FROM " . DbPREFIX . "permissions_role WHERE role = '$roleId'");
        $permissions = $permissions->fetchAll(PDO::FETCH_ASSOC);

        for ($i = 0; $i < count($permissions); $i++) {
            $key = $this->getPermissionKey($permissions[$i]['permission']);

            if ($key === '') {
                continue;
            }

            if ($permissions[$i]['value'] === 1) {
                $v = 1;
            } else {
                $v = 0;
            }

            $data[$key] = [
                'PKID' => $this->getPermissionPKID($permissions[$i]['permission']),
                'key' => $key,
                'value' => $v,
                'name' => $this->getPermissionName($permissions[$i]['permission']),
                'id' => $permissions[$i]['permission'],
            ];
        }

        $data = array_merge($this->getPermissionsAll(), $data);
        return $data;
    }

    public function editRolePermission($roleId, $permissionId, $value)
    {
        $this->query("REPLACE INTO " . DbPREFIX . "permissions_role SET role = '$roleId', permission = '$permissionId', value = '$value'");
    }

    public function deleteRolePermission($roleId, $permissionId)
    {
        $this->query("DELETE FROM " . DbPREFIX . "permissions_role WHERE role = '$roleId' AND permission = '$permissionId'");
    }

    /* end of Role add, update and delete section */

    /* start of Permission add, update and delete section */

    public function insertPermission($permission, $key, $PKID)
    {
        $this->prepare("INSERT INTO " . DbPREFIX . "permissions VALUES (null, :permission, :key, :PKID)")
            ->execute(
                [
                    ':permission' => $permission,
                    ':key' => $key,
                    ':PKID' => $PKID,
                ]);
    }

    public function editPermission($id, $permission, $key, $PKID)
    {
        $id = (int)$id;
        $this->prepare('UPDATE ' . DbPREFIX . 'permissions SET `permission` = :permission, ' .
            '`key` = :key, `PKID` = :PKID WHERE `id_permission` = :id')
            ->execute(
                [
                    ':id' => $id,
                    ':permission' => $permission,
                    ':key' => $key,
                    ':PKID' => $PKID,
                ]);
    }

    public function deletePermission($id)
    {
        $id = (int)$id;
        $this->query("DELETE from " . DbPREFIX . "permissions where id_permission = $id");
    }

    public function getPermission($permissionID)
    {
        $permissionID = (int)$permissionID;
        $key = $this->query("SELECT * FROM " . DbPREFIX . "permissions WHERE id_permission = '{$permissionID}'");
        return $key->fetch(PDO::FETCH_ASSOC);
    }

    public function getPermissions(): array
    {
        $permissions = $this->query("SELECT * FROM " . DbPREFIX . "permissions");
        return $permissions->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getPermissionsAll(): array
    {
        $permissions = $this->query("SELECT * FROM " . DbPREFIX . "permissions");
        $permissions = $permissions->fetchAll(PDO::FETCH_ASSOC);

        $data = array();

        for ($i = 0; $i < count($permissions); $i++) {
            if ($permissions[$i]['key'] === '') {
                continue;
            }

            $data[$permissions[$i]['key']] = [
                'PKID' => $permissions[$i]['PKID'],
                'key' => $permissions[$i]['key'],
                'value' => 'x',
                'name' => $permissions[$i]['permission'],
                'id' => $permissions[$i]['id_permission']
            ];
        }

        return $data;
    }

    public function getPermissionKey($permissionID)
    {
        $permissionID = (int)$permissionID;
        $key = $this->query(
            "SELECT `key` FROM `" . DbPREFIX . "permissions` WHERE id_permission = '{$permissionID}'"
        );
        $key = $key->fetch(PDO::FETCH_ASSOC);
        return $key['key'];
    }

    public function getPermissionName($permissionID)
    {
        $permissionID = (int)$permissionID;
        $name = $this->query(
            "SELECT `permission` FROM `" . DbPREFIX . "permissions` WHERE id_permission = '{$permissionID}';"
        );
        $name = $name->fetch(PDO::FETCH_ASSOC);
        return $name['permission'];
    }

    public function getPermissionPKID($permissionID)
    {
        $permissionID = (int)$permissionID;
        $PKID = $this->query(
            "SELECT `PKID` FROM `" . DbPREFIX . "permissions` " .
            "WHERE id_permission = '{$permissionID}'"
        );
        $PKID = $PKID->fetch(PDO::FETCH_ASSOC);
        return $PKID['PKID'];
    }

    /* end of Permission add, update and delete section */

    /* start of site add, update and delete section */
    public function getSiteInfo(): array
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "webapp`");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getSite($id)
    {
        $site = $this->query("SELECT * FROM `" . DbPREFIX . "webapp` WHERE `id` = $id");
        return $site->fetch(PDO::FETCH_ASSOC);
    }

    public function configWebApp($name, $description, $company, $doc_root, $http_host_name, $http_host_add, $http_host_ip, $default_home, $default_layout, $icon_remote_dir, $icon_local_dir, $favicon)
    {
        $this->query("INSERT INTO `" . DbPREFIX . WEB_CONFIG_TABLE . "` VALUES (null, '$name', '$description', '$company', '$doc_root', '$http_host_name', '$http_host_add', '$http_host_ip', '$default_home', '$default_layout', '$icon_remote_dir', '$icon_local_dir', '$favicon');");
    }

    public function editSite($id, $name, $description, $company)
    {
        $id = (int)$id;
        $query = $this->db->prepare("UPDATE `" . DbPREFIX . "webapp` SET `name`=:name,`description`=:description,`company`=:company WHERE `id` = '$id'");
        $query->execute(
            array(
                ':name' => $name,
                ':description' => $description,
                ':company' => $company
            ));
    }

    public function setLogo($favicon)
    {
        $this->query("UPDATE `" . DbPREFIX . "webapp` SET `favicon` = '$favicon'  WHERE `id` = '1';");
    }

    public function getWebAppTables(): array
    {
        $data = $this->query("SELECT TABLE_NAME, CREATE_TIME, UPDATE_TIME, TABLE_COLLATION, ENGINE FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '" . DbNAME . "' ORDER BY TABLE_NAME ASC;");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getWebAppSocialLinks(): array
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "app_social_links` ORDER BY `id` ASC;");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getSocialLink($id)
    {
        $id = (int)$id;
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "app_social_links`  WHERE `id` = '$id';");
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function addSocialLink($name, $link)
    {
        $this->query("INSERT INTO `" . DbPREFIX . "app_social_links` VALUES (null, '$name', '$link');");
    }

    public function editSocialLink($id, $name, $link)
    {
        $id = (int)$id;
        $this->db->prepare("UPDATE `" . DbPREFIX . "app_social_links` SET `name`=:name,`link`=:link WHERE `id` = '$id'")
            ->execute(
                array(
                    ':name' => $name,
                    ':link' => $link
                ));
    }

    public function deleteSocialLink($id)
    {
        $id = (int)$id;
        $this->query("DELETE from " . DbPREFIX . "app_social_links where `id` = $id");
    }

    /* end of site add, update and delete section */


    /* start of users add, update and delete section */
    public function getUsers(): array
    {
        $UsersAll = $this->query("SELECT * FROM `" . DbPREFIX . "users`;");
        return $UsersAll->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getUsersAll(): array
    {
        $usr = $this->query("SELECT * FROM " . DbPREFIX . "users ORDER BY `id` ASC;");
        $usr = $usr->fetchAll(PDO::FETCH_ASSOC);

        $data = array();
        for ($i = 0; $i < count($usr); $i++) {
            $data[$i] = [
                'serial' => $i + 1,
                'id' => $usr[$i]['id'],
                'first_name' => $usr[$i]['f_name'],
                'last_name' => $usr[$i]['l_name'],
                'email' => $usr[$i]['email'],
                'password' => $usr[$i]['password'],
                'username' => preg_replace('/' . AppUsernamePrefix . '/is', '$1', $usr[$i]['username']),
                'activity' => $usr[$i]['activity'],
                'roleId' => $usr[$i]['role'],
                'roleName' => $this->getRoleById($usr[$i]['role']),
                'status' => $usr[$i]['status'],
                'code' => $usr[$i]['code'],
                'r_date' => date("d/m/Y", strtotime($usr[$i]['r_date'])), //'r_date' => date("d-m-y", strtotime($usr[$i]['r_date'])),
                'date_of_birth' => date("m/d/Y", strtotime(strtr($this->getUserDetailsById($usr[$i]['id'], 'dob'), '/', '-'))),
                'gender' => $this->getUserDetailsById($usr[$i]['id'], 'gender'),
                'profession' => $this->getUserDetailsById($usr[$i]['id'], 'profession'),
                'pro_pic' => $this->getUserDetailsById($usr[$i]['id'], 'pro_pic'),
                'cover_pic' => $this->getUserDetailsById($usr[$i]['id'], 'cover_pic')
            ];
        }

        return $data;
    }

    public function getUserDetailsById($id, $arg)
    {
        $arg = (string)$arg;
        $data = $this->query("SELECT `{$arg}` FROM `" . DbPREFIX . "users_details` WHERE `id` = {$id};")->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data, $arg);
    }

    public function getUser($id)
    {
        $User = $this->query("SELECT * FROM `" . DbPREFIX . "users` WHERE `id` = $id;");
        return $User->fetchAll(PDO::FETCH_ASSOC);
    }

    public function insertUserBasicInfo($FName, $LName, $email, $username, $password, $activity, $role, $status)
    {
        $password = Hash::StaticEncrypt($password);
        $username = (string)APP_USERNAME_PREFIX . $username;
        $random = rand(124578, 999999999);
        $this->db->prepare("INSERT INTO `" . DbPREFIX . "users`  VALUES (null, :FName, :LName, :email, :password, :username, :activity, :role, :status, now(), :code)")
            ->execute(
                array(
                    ':FName' => $FName,
                    ':LName' => $LName,
                    ':email' => $email,
                    ':password' => $password,
                    ':username' => $username,
                    ':activity' => $activity,
                    ':role' => $role,
                    ':status' => $status,
                    ':code' => $random
                ));
    }

    public function insertUserDetailsInfo($dob, $gender, $profession)
    {
        $this->db->prepare("INSERT INTO `" . DbPREFIX . "users_details` VALUES (null, :dob, :gender, :profession, null, null);")
            ->execute(
                array(
                    ':dob' => date("d/m/Y", strtotime($dob)),
                    ':gender' => $gender,
                    ':profession' => $profession
                ));
    }

    public function editUserBasicInfo($id, $FName, $LName, $email, $username, $password, $activity, $role)
    {
        $id = (int)$id;
        $password = Encryption::static($password);
        //$username = (string) AppUsernamePrefix . $username;
        $random = rand(124578, 999999999);
        //UPDATE `msu_users` SET `f_name` = 'me', `l_name` = 'user', `email` = 'me@mail.com', `username` = 'msu_test', `activity` = 'Inactive', `role` = '2', `status` = '0', `r_date` = '2018-10-31 11:26:22', `code` = '44633' WHERE `msu_users`.`id` = 3;
        $this->db->query("UPDATE `" . DbPREFIX . "users` SET `f_name` = '$FName', `l_name` = '$LName', `email` = '$email', `password` = '$password',  `username` = '$username', `activity` = '$activity', `role` = '$role', `status` = '0', `r_date` = now(), `code` = '$random' WHERE `id` = $id");
    }

    public function editUserDetailsInfo($id, $dob, $gender, $profession)
    {
        $id = (int)$id;
        //UPDATE `msu_users` SET `f_name` = 'me', `l_name` = 'user', `email` = 'me@mail.com', `username` = 'msu_test', `activity` = 'Inactive', `role` = '2', `status` = '0', `r_date` = '2018-10-31 11:26:22', `code` = '44633' WHERE `msu_users`.`id` = 3;
        $this->db->query("UPDATE `" . DbPREFIX . "users_details` SET `dob` = '$dob', `gender` = '$gender', `profession` = '$profession' WHERE `id` = $id");
    }

    public function deleteUser($id)
    {
        $id = (int)$id;
        $this->db->query("DELETE from `" . DbPREFIX . "users` where id = $id;");
    }

    public function verifyUsername($username)
    {
        $username = APP_USERNAME_PREFIX . $username;
        $data = $this->db->prepare("SELECT `id`, `code` FROM `" . DbPREFIX . "users` WHERE `username` = :username;");
        $data->execute(
            array(
                ':username' => $username
            )
        );
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function verifyEmail($email): bool
    {
        $id = $this->db->prepare("SELECT `id` FROM `" . DbPREFIX . "users` WHERE `email` = :email;");
        $id->execute(
            array(
                ':email' => $email
            )
        );
        if ($id->fetch(PDO::FETCH_ASSOC)) {
            return TRUE;
        }
        return FALSE;
    }

    public function activeUser($id, $code)
    {
        $data = $this->db->prepare("UPDATE `" . DbPREFIX . "users` SET `status` = 1 WHERE `id` = :id and `code` = :code");
        $data->execute(
            array(
                ':id' => $id,
                ':code' => $code
            )
        );
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function UserLastInsertId($email = false)
    {
        $variable = '';
        if (!empty($email) && $email !== ' ') {
            $email = (string)$email;
            $variable = "WHERE `email` = '{$email}'";
        }
        $data = $this->query("SELECT `id` FROM `" . DbPREFIX . "users` $variable ORDER BY `id` DESC LIMIT 1;");
        $data = $data->fetch(PDO::FETCH_ASSOC);
        return _Array::value($data, 'id');
    }

    public function getLastInsertUserId()
    {
        $Id = $this->query("SELECT LAST_INSERT_ID() FROM `" . DbPREFIX . "users`;");
        $Id = $Id->fetch(PDO::FETCH_ASSOC);
        return $Id['LAST_INSERT_ID()'];
    }

    public function isUserCreatedCheckedByUserId($id): bool
    {
        $id = (int)$id;
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "users` WHERE `id` = '{$id}';");
        $data = $data->fetch(PDO::FETCH_ASSOC);
        if ($data) {
            return true;
        }
        return false;
    }

    public function uploadUserProfilePicture($user, $name, $mime, $size, $data)
    {
        $user = (int)$user;
        $name = (int)$name;
        $mime = strtolower($mime);
        $size = (int)$size;

        $this->db->prepare("INSERT INTO `" . DbPREFIX . "users_photos`  VALUES (null, :user, :name, :mime, :size, :data)")
            ->execute(
                array(
                    ':user' => $user,
                    ':name' => $name,
                    ':mime' => $mime,
                    ':size' => $size,
                    ':data' => $data
                ));
    }

    public function getLastInsertUserProfilePictureId()
    {
        $Id = $this->query("SELECT LAST_INSERT_ID() FROM `" . DbPREFIX . "users_photos`;");
        $Id = $Id->fetch(PDO::FETCH_ASSOC);
        return $Id['LAST_INSERT_ID()'];
    }

    public function setUserProfilePictureId($usr, $pctr)
    {
        $usr = (int)$usr;
        $pctr = (int)$pctr;
        $this->db->query("UPDATE `" . DbPREFIX . "users_details` SET `pro_pic` = '$pctr' WHERE `id` = $usr");
    }

    public function getProfilePictureById($id, $user)
    {
        $id = (int)$id;
        $user = (int)$user;
        $picture = $this->query("SELECT * FROM " . DbPREFIX . "users_photos WHERE `id` = '{$id}' AND `user` = '{$user}'; ");
        return $picture->fetch(PDO::FETCH_ASSOC);
    }
    /* end of users add, update and delete section */

    /* start of menu's search section */
    public function getGlobalMenus(): array
    {
        return $this->query("SELECT `id`, `title` FROM `" . DbPREFIX . "pages`;")->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getGlobalMenuPositions(): array
    {
        $data = $this->query("SELECT `id`, `position` FROM `" . DbPREFIX . "menu_position`;");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    /* end of menu's search section */

    /*app databases*/

    public function getServerDatabases(): array
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "app_databases` ORDER BY `id` ASC;");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getServerDatabaseById($id)
    {
        $id = (int)$id;
        return $this->query("SELECT * FROM `" . DbPREFIX . "app_databases`  WHERE `id` = '{$id}';")->fetch(PDO::FETCH_ASSOC);
    }

    public function getServerDatabaseByName($name)
    {
        return $this->query("SELECT * FROM `" . DbPREFIX . "app_databases`  WHERE `db` = '{$name}';")->fetch(PDO::FETCH_ASSOC);
    }

    public function addServerDatabase($name, $user, $db, $password)
    {
        $this->query("INSERT INTO `" . DbPREFIX . "app_databases` VALUES (null, '{$name}', '{$user}', '{$db}', '{$password}',now());");
    }

    public function editServerDatabase($id, $name, $user, $db, $password)
    {
        $id = (int)$id;
        $this->db->prepare("UPDATE `" . DbPREFIX . "app_databases` SET `name`=:name,`user`=:user,`db`=:db,`password`=:password WHERE `id` = '$id'")
            ->execute(
                array(
                    ':name' => $name,
                    ':user' => $user,
                    ':db' => $db,
                    ':password' => $password

                ));
    }

    public function deleteServerDatabase($id)
    {
        $id = (int)$id;
        $this->query("DELETE from " . DbPREFIX . "app_databases where `id` = $id");
    }

    /*app databases*/
    /*public function startBackupData($tableName, $data)
    {
        $this->query("INSERT INTO `$tableName` VALUES (null, " . implode(",", $data) . ");");
    }*/

}