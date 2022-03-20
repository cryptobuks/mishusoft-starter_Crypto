<?php

$path = dirname(__DIR__);
$repo = 'https://gitlab.com/mralaminahamed/mishusoft-starter.git';

// git clone https://myrepo.com/git.git temp
exec(sprintf('git clone %1$s %2$s/tmp', $repo, $path));
// mv temp/.git code/.git
exec(sprintf('mv %1$s/tmp/.git %1$s/.git', $path));
// rm -rf temp
exec(sprintf('rm -rf %1$s/tmp', $path));
