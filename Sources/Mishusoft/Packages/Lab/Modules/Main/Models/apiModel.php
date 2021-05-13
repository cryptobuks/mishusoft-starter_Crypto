<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Models;

use Mishusoft\Framework\Drivers\Model;
use PDO;
use function Mishusoft\Framework\Globals\value;

class apiModel extends Model {
    public function __construct(){
        parent::__construct();
    }

    public function getVisitorsAccessLogsLimited(): array
    {
        $data = $this->db->query("SELECT * FROM `" . DbPREFIX . "trackActivities` ORDER BY ID DESC LIMIT 5");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getVisitorsAccessLogs(): array
    {
        $data = $this->db->query("SELECT * FROM `" . DbPREFIX . "trackActivities` ORDER BY ID DESC");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getContactMessagesLimited(): array
    {
        $data = $this->db->query("SELECT * FROM `" . DbPREFIX . "contact_messages` ORDER BY ID DESC LIMIT 5");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getContactMessages(): array
    {
        $data = $this->db->query("SELECT * FROM `" . DbPREFIX . "contact_messages` ORDER BY ID DESC");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function geSocialLinks(): array
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "app_social_links` ORDER BY `name` ASC;");
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }


    public function getPageIdByName($name)
    {
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "pages` WHERE `title` = '{$name}'");
        return value($data->fetch(PDO::FETCH_ASSOC),'id');
    }

    public function getPageSourceById($id)
    {
        $id = (int)$id;
        $data = $this->query("SELECT * FROM `" . DbPREFIX . "pages_sources` WHERE `page` = '{$id}'");
        return value($data->fetch(PDO::FETCH_ASSOC),'sources');
    }
}
