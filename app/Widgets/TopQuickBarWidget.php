<?php
 namespace App\Widgets;use Mishusoft\Authentication\Widget;class TopQuickBarWidget extends Widget{public function getTopQuickBar(string $name, string $view, string $format='phtml', $inverse=null, $siteInfo=null):bool|string{$data['name']=$name;$data['inverse']=$inverse;$data['contacts']=$siteInfo;$data['languages']=$siteInfo;return $this->render($name,$view,$data,$format);}}