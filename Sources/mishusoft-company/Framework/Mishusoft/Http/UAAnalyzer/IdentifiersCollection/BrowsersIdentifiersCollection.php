<?php


namespace Mishusoft\Http\UAAnalyzer\IdentifiersCollection;

use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\UAAnalyzer\Collection;

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
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function all(): array
    {
        return $this->extractAttributeRecursive(
            'browsers',
            [
                /*'analysers',*/'bots','applications','email-clients',
                'feed-readers','multimedia-players',
                'offline-browsers','tools','browsers',
            ],
            'identifier-only'
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
    }

    //google bots list
    //https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers#crawlers


    // about all kind of browsers


    /**
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function analyserAll():array
    {
        return $this->extractAttribute($this->query('browsers', 'analysers'), 'identifier-only');
    }

    /**
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function botsAll():array
    {
        return $this->extractAttribute($this->query('browsers', 'bots'), 'identifier-only');
    }

    /**
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function applicationsAll():array
    {
        return $this->extractAttribute($this->query('browsers', 'applications'), 'identifier-only');
    }

    /**
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function emailClientsAll():array
    {
        return $this->extractAttribute($this->query('browsers', 'email-clients'), 'identifier-only');
    }

    /**
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function feedReadersAll():array
    {
        return $this->extractAttribute($this->query('browsers', 'feed-readers'), 'identifier-only');
    }

    /**
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function multimediaPlayersAll():array
    {
        return $this->extractAttribute($this->query('browsers', 'multimedia-players'), 'identifier-only');
    }

    /**
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function offlineBrowsersAll():array
    {
        return $this->extractAttribute($this->query('browsers', 'offline-browsers'), 'identifier-only');
    }

    /**
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function toolsAll():array
    {
        return $this->extractAttribute($this->query('browsers', 'tools'), 'identifier-only');
    }

    /**
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function browsersAll():array
    {
        return $this->extractAttribute($this->query('browsers', 'browsers'), 'identifier-only');
    }

    /**
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function compatibilitiesAll():array
    {
        return $this->extractAttribute($this->query('browsers', 'compatibilities'), 'identifier-only');
    }

    /**
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function browserEnginesAll():array
    {
        return $this->extractAttribute($this->query('browsers', 'browsers-engines'), 'identifier-only');
    }
}
