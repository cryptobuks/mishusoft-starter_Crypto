<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Models;


use Mishusoft\Framework\Drivers\Model;
use PDO;

class productsModel extends Model {
    public function __construct() {
        parent::__construct();
    }

    public function getApps(): array
    {
        $apps = $this->query("SELECT * FROM `" . DbPREFIX . "apps` WHERE `app_status` = 'active' ");
        return $apps->fetchAll(PDO::FETCH_ASSOC);
    }

	public function getForwardedProducts(): array
    {
		$apps = $this->query("SELECT * FROM `" . DbPREFIX . "apps` WHERE `app_status` = 'active'");
		return $apps->fetchAll(PDO::FETCH_ASSOC);
	}
	
	public function getQuickAccessProducts(): array
    {
		$apps = $this->query("SELECT * FROM `" . DbPREFIX . "apps` WHERE `app_status` = 'active' AND `quickAccess` = 'enable'");
		return $apps->fetchAll(PDO::FETCH_ASSOC);
	}
}