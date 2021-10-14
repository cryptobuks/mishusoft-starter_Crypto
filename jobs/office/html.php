<?php

include_once __DIR__ .'/wp-specialchar.php';


print_r('&nbsp', false);

echo "\n";
echo "\n";

//print_r(_wp_specialchars('&nbsp;'), false);

$new1 = htmlspecialchars("<a href='test'>Test</a>", ENT_QUOTES);
echo $new1;
echo "\n";
echo "\n";
$new2 = htmlspecialchars("<a href='test'>Test</a>", ENT_NOQUOTES);
echo $new2;
