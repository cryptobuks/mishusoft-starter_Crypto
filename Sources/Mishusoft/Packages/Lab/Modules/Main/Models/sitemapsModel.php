<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Models;


use Mishusoft\Framework\Drivers\Model;

class sitemapsModel extends Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getWebAppPages(): array
    {
        $data = $this->db->query("SELECT * FROM `" . DbPREFIX . "pages` WHERE `position` !=1 ORDER BY `id` ASC;");
        return $data->fetchAll(\PDO::FETCH_ASSOC);
    }
}
