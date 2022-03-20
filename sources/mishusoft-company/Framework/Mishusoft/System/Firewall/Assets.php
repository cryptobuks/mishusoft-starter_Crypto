<?php

    namespace Mishusoft\System\Firewall;

    use Mishusoft\Http\IP;
    use Mishusoft\System\Time;

    trait Assets
    {
        /**
         * Firewall log directory
         *
         * @return string Absolute path of Firewall Log directory
         */
        protected static function logDirectory(): string
        {
            //data-drive/Firewall/logs/
            return sprintf(
                '%1$s%3$s%2$s',
                'Firewall',
                Time::todayDateOnly(),
                DS
            );
        }


        /**
         * @param string $currentAction
         *
         * @return string
         */
        protected function logFile(string $currentAction): string
        {
            //logs/Firewall/date/blocked.yml
            //logs/Firewall/date/banned.yml
            //logs/Firewall/date/granted.yml
            // return dFile(log_file(self::logDirectory(), $underTakenAction)); // for yaml
            return dFile(
                log_data_file(
                    self::logDirectory(),
                    sprintf('%1$s/%2$s', $currentAction, sha1(IP::get()))
                ),
                'php'
            );
        }


        /**
         * @return string
         */
        protected function configFile(): string
        {
            return dFile(configs_data_file('Firewall', 'config'));
        }


        /**
         * @return string
         */
        protected function siteFile(): string
        {
            return dFile(configs_data_file('Firewall', 'sites'));
        }
    }
