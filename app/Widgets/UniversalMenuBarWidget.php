<?php
 namespace App\Widgets;use Mishusoft\Authentication\Widget;class UniversalMenuBarWidget extends Widget{public function getUniversalMenuBar(string $name, string $view, string $format="phtml", $inverse=null, $siteInfo=null){$data['name']=$name;$data['inverse']=$inverse;$data['appDetails']=$siteInfo;return $this->render($name,$view,$data,$format);}}