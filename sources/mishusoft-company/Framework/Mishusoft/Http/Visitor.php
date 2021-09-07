<?php declare(strict_types=1);


namespace Mishusoft\Http;

use Mishusoft\Ui\Firewall;

class Visitor
{
    public const FIREWALL_LOG_FILE = RUNTIME_REGISTRIES_PATH.'access.logs.firewall.json';


    /**
     * @return array
     */
    public function getVisitedBrowsersList(): array
    {
        $data     = json_decode(file_get_contents(self::FIREWALL_LOG_FILE), true);
        $browsers = [];
        if (is_array($data) and count($data) > 0) {
            foreach ($data as $action => $datum) {
                if (array_key_exists(IP::get(), $data[$action])) {
                    foreach ($data[$action][IP::get()] as $browser => $visit) {
                        $browsers[] = ltrim($browser);
                    }
                }
            }
        }

        $browsers = array_unique($browsers, SORT_ASC);
        array_multisort($browsers, SORT_ASC);
        return $browsers;
    }//end getVisitedBrowsersList()


    /**
     * @return string
     */
    public function getDuration(): string
    {
        return (new Firewall())->getDuration();
    }//end getDuration()


    /**
     * @return integer
     */
    public function getLastVisitDuration(): int
    {
        return (new Firewall())->getLastVisitDuration();
    }//end getLastVisitDuration()


    /**
     * @return string
     */
    public function getController(): string
    {
        return (new Firewall())->getController();
    }//end getController()


    /**
     * @return string
     */
    public function getSeparator(): string
    {
        return (new Firewall())->getSeparator();
    }//end getSeparator()
}//end class
