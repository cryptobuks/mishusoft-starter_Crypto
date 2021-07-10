<?php



// Search app code name of web browser from user agent.
use Mishusoft\Framework\Chipsets\Utility\_Debug;

foreach ($this->webBrowserAppCodeNameList as $appKey => $appValue) {
    // _Debug::preOutput($appKey);
    // _Debug::preOutput($appValue);
    // preg_match('/(^\w+)\/(\d+[.]\d+)/', $cleanUA, $matches);
    // _Debug::preOutput($matches);
    // preg_match(
    // '/('.preg_quote(
    // strtolower($appKey),
    // PREG_QUOTE_DEFAULT_SEPARATOR
    // ).')\/(\d+[.]\d+)/',
    // $cleanUA,
    // $matches
    // );
    // _Debug::preOutput($matches);
    if (preg_match('/('.$this->quote(strtolower($appKey)).')\/(\d+[.]\d+)/', $cleanUA, $matches) === 1) {
        $this->browserAppCodeName    = $appValue;
        $this->browserAppCodeVersion = $matches[1];
        break;
    }
}//end foreach

// Second step.
// Search window manager name and type from user agent.
foreach ($this->devicesPlatformWMNameList as $pwKey => $pwValue) {
    if (preg_match('/'.$this->quote(strtolower($pwKey)).'\b/i', $cleanUA, $matches) === 1) {
        $this->deviceWindowManager  = $pwKey;
        $this->deviceWmNameOriginal = ucfirst($pwKey);
        $this->windowManager($pwValue);
        break;
    }
}

// Third step.
// Search device category from user agent.
foreach ($this->devicesCategoryList as $dcKey => $dcValue) {
    if (preg_match('/'.$this->quote(strtolower($dcKey)).'\b/i', $cleanUA, $matches) === 1) {
        $this->deviceWindowManager = $dcValue;
        break;
    }
}

// Fourth step.
// Search device and details in () from user agent.
// Device name type
// Ubuntu/8.04 hardy
// Ubuntu/8.04
// Ubuntu 8.04
// Ubuntu x64_86
// Ubuntu
// U
foreach ($this->devicesList as $dKey => $dValue) {
    // if (preg_match('/(?<=\()(.+)(?=\))/is', $cleanUA, $match) === 1) {
    // _Debug::preOutput($matches);
    // }
    // if (preg_match('/\(([^\)]*)\)/', $cleanUA, $matches) === 1) {
    // _Debug::preOutput($matches);
    // }
    // if (preg_match('/\((['.$this->quote(strtolower($dKey)).']*)\)/', $cleanUA, $matches) === 1) {
    // _Debug::preOutput($matches);
    // }
    // if (preg_match('/\('.$this->quote(strtolower($dKey)).'\)/', $cleanUA, $matches) === 1) {
    // _Debug::preOutput($matches);
    // }
    // _Debug::preOutput($this->quote(strtolower($dKey)));
    // _Debug::preOutput(preg_match('/'.$this->quote(strtolower($dKey)).'/i', $cleanUA, $matches));
//            $string = 'i dont know , do you know?';
//            preg_match("/([a-zA-Z]+\s?\b){2,}/", $string, $match);

    //echo '<pre>';
    //print_r($match);
    //echo '</pre>';
    preg_match('/('.$this->quote(strtolower($dKey)).')/is', $cleanUA, $matches);
    _Debug::preOutput($matches);

    if (preg_match('/('.$this->quote(strtolower($dKey)).'\s+[/]+(\d{1-2}+[.]\d{1-2})/is', $cleanUA, $matches) === 1) {
        _Debug::preOutput($matches);
        exit();
    }

    if (preg_match('/'.$this->quote(strtolower($dKey)).'/i', $cleanUA, $matches) === 1) {
        _Debug::preOutput($matches);
        exit();
    }

    if (preg_match('/('.strtolower($dKey).')\b/i', $cleanUA, $matches) === 1) {
        _Debug::preOutput($dKey);
        _Debug::preOutput($dValue);
        _Debug::preOutput($matches);
        $this->deviceName     = $dKey;
        $this->deviceNameFull = $this->finalContent($dKey, $cleanUA);
        $this->deviceInfoAll  = (array) $dValue;
        $this->deviceDetails((array) $dValue);

        $device = explode(';', $this->deviceInfo($cleanUA));
        foreach ($device as $devValue) {
            if (preg_match('/'.strtolower($dKey).'\b/i', $devValue, $matches) === 1) {
                $this->deviceNameOriginal = ltrim($devValue);
                break;
            }
        }

        _Debug::preOutput($this->deviceNameOriginal);

        break;
    }//end if
}//end foreach

// Fifth step.
foreach ($this->devicesArchitectureList as $aKey => $aValue) {
    if (preg_match('/'.strtolower($aKey).'\b/i', $cleanUA, $matches) === 1) {
        $this->deviceArchitecture  = $aValue;
        $this->browserArchitecture = $aValue;
        break;
    }
}

// Sixth step.
foreach (array_change_key_case($this->webBrowserList, CASE_LOWER) as $wbKey => $wbValue) {
    if (preg_match('/'.preg_quote(strtolower($wbKey), '/').'\b/i', $cleanUA, $matches) === 1) {
        $this->browserName     = ucfirst($wbKey);
        $this->browserNameFull = ucwords(ltrim(strtr(strtolower($this->finalContent($wbKey, $cleanUA)), [$wbKey => $wbValue['name']])));
        if (is_array($wbValue) === true) {
            $this->browserInfoAll = $wbValue;
        } else {
            $this->browserInfoAll = [];
        }

        $this->browserVersionFull = substr($this->browserNameFull, (strpos($this->browserNameFull, $wbKey) + strlen($wbKey) + 1), (strlen($this->browserNameFull) - (strpos($this->browserNameFull, $wbKey) + strlen($wbKey) + 1)));
        $this->browserVersion     = substr($this->browserVersionFull, 0, strpos($this->browserVersionFull, '.'));
        break;
    }
}

// Seventh step.
foreach (array_change_key_case($this->webBrowserLayoutList, CASE_LOWER) as $layoutKey => $layoutValue) {
    if (preg_match(
            '#'.preg_quote(
                strtolower($layoutValue['contain']),
                PREG_QUOTE_DEFAULT_SEPARATOR
            ).'[/]+([0-9]+(?:\.[0-9]+)?)#',
            $cleanUA,
            $matches
        ) === true
    ) {
        $this->browserEngineName     = $layoutKey;
        $this->browserEngineNameFull = $this->cleanContent($matches[0]);
        $this->browserEngineVersion  = $matches[1];
        break;
    }
}