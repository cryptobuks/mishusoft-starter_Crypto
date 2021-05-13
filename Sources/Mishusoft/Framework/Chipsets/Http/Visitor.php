<?php


namespace Mishusoft\Framework\Chipsets\Http;


use Mishusoft\Framework\Chipsets\System\Firewall;

class Visitor
{
    const firewallLogFile = PHP_RUNTIME_REGISTRIES_PATH . "access.logs.firewall.json";

    /**
     * @return array
     */
    public function getVisitedBrowsersList(): array
    {
        $data = json_decode(file_get_contents(self::firewallLogFile), true);
        $browsers = array();
        if (is_array($data) and count($data) > 0) {
            foreach ($data as $action => $datum) {
                if (array_key_exists(IP::get(), $data[$action])) {
                    foreach ($data[$action][IP::get()] as $browser => $visit)
                        array_push($browsers, ltrim($browser));
                }
            }
        }

        $browsers = array_unique($browsers, SORT_ASC);
        array_multisort($browsers, SORT_ASC);
        return $browsers;
    }



    /**
     * @return string
     */
    public function getDuration(): string
    {
        return (new Firewall())->getDuration();
    }

    /**
     * @return int
     */
    public function getLastVisitDuration(): int
    {
        return (new Firewall())->getLastVisitDuration();
    }

    /**
     * @return string
     */
    public function getController(): string
    {
        return (new Firewall())->getController();
    }

    /**
     * @return string
     */
    public function getSeparator(): string
    {
        return (new Firewall())->getSeparator();
    }

}