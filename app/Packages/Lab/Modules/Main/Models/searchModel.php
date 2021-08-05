<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Models;


use Mishusoft\Framework\Drivers\Model;
use PDO;

class searchModel extends Model
{

    function __construct()
    {
        parent::__construct();
    }

    public function getWords(): array
    {
        $word = $this->query("select * from " . DbPREFIX . "dict");
        return $word->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getWord($q): array
    {
        $word = $this->query("select * from " . DbPREFIX . "dict where word LIKE '%$q%' OR r_word LIKE '%$q%' OR meaning LIKE '%$q%'");
        return $word->fetchAll(PDO::FETCH_ASSOC);

    }

}