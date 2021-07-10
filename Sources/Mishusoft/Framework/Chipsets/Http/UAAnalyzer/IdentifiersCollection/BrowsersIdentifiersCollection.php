<?php


namespace Mishusoft\Framework\Chipsets\Http\UAAnalyzer\IdentifiersCollection;

use Mishusoft\Framework\Chipsets\Exceptions\RuntimeException;
use Mishusoft\Framework\Chipsets\Http\UAAnalyzer\Collection;

class BrowsersIdentifiersCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();

        // Resources
        // http://www.zytrax.com/tech/web/browser_ids.htm
        // https://useragents.io/explore/browsers/types/browser
        // https://developers.whatismybrowser.com/useragents/explore/layout_engine_name/
        // https://user-agents.net/
        // http://www.useragentstring.com/pages/useragentstring.php
    }

    /**
     * @throws RuntimeException
     */
    public function all(): array
    {
        return array_merge_recursive(
            $this->botsAll(),
            $this->applicationsAll(),
            $this->emailClientsAll(),
            $this->feedReadersAll(),
            $this->multimediaPlayersAll(),
            $this->offlineBrowsersAll(),
            $this->toolsAll(),
            $this->browsersAll(),
        );
    }


    /**
     * Top web browsers list
     *
     * @return string[]
     */
    public function top(): array
    {
        // Resources link : https://www.netmarketshare.com/?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22deviceType%22%3A%7B%22%24in%22%3A%5B%22Desktop%2Flaptop%22%2C%22Mobile%22%2C%22Tablet%22%2C%22Bot%20or%20spider%22%2C%22Console%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222019-11%22%2C%22dateEnd%22%3A%222020-10%22%2C%22segments%22%3A%22-1000%22%7D
        return array(
            'Chrome',
            'Safari',
            'Firefox',
            'Edge',
            'Samsung Browser',
            'Internet Explorer',
            'QQ',
            'Opera',
            'Sogou Explorer',
            'UC Browser',
        );
    }


    /**
     * Gets known browser aliases.
     *
     * @return array
     */
    public function knownBrowserAliases(): array
    {
        return [
            'opr' => 'opera',
            'iceweasel' => 'firefox',
        ];
    }//end getKnownBrowserAliases()


    /**
     * @throws RuntimeException
     */
    public function botsAll():array
    {
        return $this->extractIdentifiers($this->query('browsers', 'bots'));
    }

    /**
     * @throws RuntimeException
     */
    public function applicationsAll():array
    {
        return $this->extractIdentifiers($this->query('browsers', 'applications'));
    }

    /**
     * @throws RuntimeException
     */
    public function emailClientsAll():array
    {
        return $this->extractIdentifiers($this->query('browsers', 'email-clients'));
    }

    /**
     * @throws RuntimeException
     */
    public function feedReadersAll():array
    {
        return $this->extractIdentifiers($this->query('browsers', 'feed-readers'));
    }

    /**
     * @throws RuntimeException
     */
    public function multimediaPlayersAll():array
    {
        return $this->extractIdentifiers($this->query('browsers', 'multimedia-players'));
    }

    /**
     * @throws RuntimeException
     */
    public function offlineBrowsersAll():array
    {
        return $this->extractIdentifiers($this->query('browsers', 'offline-browsers'));
    }


    /**
     * @throws RuntimeException
     */
    public function toolsAll():array
    {
        return $this->extractIdentifiers($this->query('browsers', 'tools'));
    }


    /**
     * @throws RuntimeException
     */
    public function browsersAll():array
    {
        return $this->extractIdentifiers($this->query('browsers', 'browsers'));
    }

    /**
     * @throws RuntimeException
     */
    public function compatibilitiesAll():array
    {
        return $this->extractIdentifiers($this->query('browsers', 'compatibilities'));
    }


    /**
     * @throws RuntimeException
     */
    public function browserEnginesAll():array
    {
        return $this->extractIdentifiers($this->query('browsers', 'browsers-engines'));
    }
}
