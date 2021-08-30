<?php

use Mishusoft\Drivers\Bootstrap\Ema;
use Mishusoft\Framework;
use Mishusoft\Http\Request;
use Mishusoft\System\Log;

Log::info('Ema loader started');
Ema::run(new Request);
Framework::terminate();
