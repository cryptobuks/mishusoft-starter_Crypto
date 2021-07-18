<?php declare(strict_types=1);

namespace Mishusoft\Widgets\Models;

use Mishusoft\Framework\Chipsets\Databases\PdoMySQL;
use Mishusoft\Framework\Chipsets\System;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Drivers\Model;

class menuModelWidget extends Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getAllMenus(): array
    {
        $data = array();
        $result = $this->db->query("SELECT DISTINCT `position` FROM `" . DbPREFIX . "pages` WHERE `status` = 'enable' ORDER BY `position`")->fetchAll(PdoMySQL::FETCH_ASSOC);
        if ($result !== false && count($result) > 0) {
            for ($i = 0, $iMax = count($result); $i < $iMax; $i++) {
                $position_id = $result[$i]['position'];
                if ($this->getPositionStatusById($position_id) !== false) {
                    $data = $this->getMenusByPositionId($position_id);
                }
            }
        }
        return $data;
    }

    public function getPositionStatusById($id): bool
    {
        $id = (int)$id;
        $data = $this->db->query("SELECT `status` FROM `" . DbPREFIX . "menu_position` WHERE `id` = '{$id}'");
        $data = $data->fetch(PdoMySQL::FETCH_ASSOC);
        if ($data !== false && $data['status'] === 'enable') {
            return true;
        }
        return false;
    }

    /**
     * @param int $position
     * @return array
     */
    public function getMenusByPositionId(int $position): array
    {
        $position = (int)$position;
        $menus = $this->db->query("SELECT `id`, `parent_id`, `title`, `url`, `icon` FROM `" . DbPREFIX . "pages` WHERE `position` = '{$position}' AND  `status` = 'enable';")->fetchAll(PdoMySQL::FETCH_ASSOC);
        $data = array();
        //$sub = array();

        if (count($menus) > (int)'0') {
            for ($i = 0, $iMax = count($menus); $iMax > $i; $i++) {
                $parent = (int)$menus[$i]['parent_id'];
                if (($menus[$i]['parent_id'] === "$parent") === true || ($menus[$i]['parent_id'] === $parent) === true) { // server fetch problem with $parent variable out of invite comma
                    $data[$i] = array(
                        'title' => $menus[$i]['title'],
                        'url' => $menus[$i]['url'],
                        'icon' => $menus[$i]['icon']
                    );
                }
                if ($this->isHaveChildMenu($menus[$i]['id']) !== false) {
                    $data[$i]['submenu'] = $this->getChildMenusByParentId($menus[$i]['id']);
                }
                /*for ($j=0; count($data[$i]['submenu']) > $j; $j++){
                    if ($this->isHaveChildMenu($data[$i]['submenu'][$j]['id']) !== false) {
                        $data[$i]['submenu'][$j]['submenu'] = $this->getChildMenusByParentId($data[$i]['submenu'][$j]['id']);
                    }
                }*/

            }
        }
        //return $menus;
        return $data;
    }

    public function isHaveChildMenu($menu): bool
    {
        $menu = (int)$menu;
        $data = $this->db->query("SELECT * FROM `" . DbPREFIX . "pages` WHERE `parent_id` = '{$menu}' AND  `status` = 'enable';")->fetch(PdoMySQL::FETCH_ASSOC);
        if ($data !== false) {
            return true;
        }
        return false;

    }

    public function getChildMenusByParentId($parent): array
    {
        $parent = (int)$parent;
        return $this->db->query("SELECT `id`, `title`, `url`,`icon` FROM `" . DbPREFIX . "pages` WHERE `parent_id` = '{$parent}' AND  `status` = 'enable';")->fetchAll(PdoMySQL::FETCH_ASSOC);
    }

    /**
     * @public
     * @param string $position
     * @return array
     */
    public function getSelectedMenu(string $position): array
    {
        return $this->getMenusByPositionId($this->getPositionIdByName($position));
    }

    public function getPositionIdByName(string $name): int
    {
        return _Array::value($this->db->query("SELECT `id` FROM `" . DbPREFIX . "menu_position` WHERE `position` = '{$name}'")->fetch(PdoMySQL::FETCH_ASSOC), 'id');
    }

    /**
     * @public
     * @param $position
     * @return array
     */
    public function getMenuConfig($position): array
    {
        $position = (string)$position;
        $position_id = $this->getPositionIdByName($position);
        if ($this->getPositionStatusById($position_id) !== false) {
            return $this->getMenusConfigByPositionId($position_id);
        } else {
            return [];
        }
    }

    public function getMenusConfigByPositionId($position): array
    {
        $position = (int)$position;
        $data = $this->db->query("SELECT * FROM `" . DbPREFIX . "menu_config` WHERE `position` = '{$position}';")->fetch(PdoMySQL::FETCH_ASSOC);
        $hides = $this->db->query("SELECT `hide_item` FROM `" . DbPREFIX . "menu_config_hides` WHERE `position` = '{$position}';")->fetchAll(PdoMySQL::FETCH_ASSOC);

        $hide_items = array();
        foreach ($hides as $hd) {
            $hide_items[] = $this->getMenusConfigHideItemsNameById($hd['hide_item']);
        }

        return array(
            'position' => $this->getPositionNameById($position),
            'show' => $data['show'],
            'hide' => $hide_items
        );
    }

    public function getMenusConfigHideItemsNameById($id)
    {
        $id = (int)$id;
        return _Array::value($this->db->query("SELECT `name` FROM `" . DbPREFIX . "menu_config_hide_items` WHERE `id` = '{$id}'")->fetch(PdoMySQL::FETCH_ASSOC), 'name');
    }

    public function getPositionNameById($id)
    {
        $id = (int)$id;
        return _Array::value($this->db->query("SELECT `position` FROM `" . DbPREFIX . "menu_position` WHERE `id` = '{$id}'")->fetch(PdoMySQL::FETCH_ASSOC), 'position');
    }

    /**
     * @public
     * @return mixed
     */
    public function getSiteInfo(): mixed
    {
        return $this->db->query("SELECT * FROM `" . DbPREFIX . WEB_CONFIG_TABLE . "` WHERE `http_host_name` = '" . System::getInstalledURL() . "' LIMIT 1;")->fetchAll(PdoMySQL::FETCH_ASSOC);
    }

}