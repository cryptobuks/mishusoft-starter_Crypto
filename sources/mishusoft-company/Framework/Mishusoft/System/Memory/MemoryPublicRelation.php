<?php

namespace Mishusoft\System\Memory;

//
// Memory::getConstant('SESSION_TIME')
// Memory::getOption('a.a.a')

use Mishusoft\System\Memory;

trait MemoryPublicRelation
{
    /**
     * Get option for current carrier
     *
     * @param string $keyword
     * @param string $storage
     * @param string $container
     * @param string $scope
     *
     * @return mixed
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public static function getOption(string $keyword, string $storage = 'memory', string $container = 'array', string $scope = DEFAULT_MEMORY_SCOPE): mixed
    {
        $storage = strtolower($storage);
        if (!array_key_exists($storage, $GLOBALS[$scope])
            || !array_key_exists($container, $GLOBALS[$scope][$storage])
            || $GLOBALS[DEFAULT_MEMORY_SCOPE][$storage][$container] === []) {
            self::load($storage);
        }

        return array_value($GLOBALS[$scope][$storage][$container], $keyword);
    }


    /**
     * Get option for current carrier
     *
     * @param string $name
     * @param string $storage
     * @param string $container
     * @param string $scope
     *
     * @return mixed
     */
    public static function getConstant(string $name, string $storage = 'memory', string $container = 'array', string $scope = DEFAULT_MEMORY_SCOPE): mixed
    {
        $name    = strtolower($name);
        $storage = strtolower($storage);

        return match ($storage) {
            'memory'    => match ($name) {
                //Core constants
                'default_app_name'                              => array_value($GLOBALS[$scope][$storage][$container], 'name'),
                'framework_name'                                => array_value($GLOBALS[$scope][$storage][$container], 'fullName'),
                'framework_description'                         => array_value($GLOBALS[$scope][$storage][$container], 'descriptions'),
                // default data from core memory
                'default_app_author'                            => array_value($GLOBALS[$scope][$storage][$container]["author"], 'name'),
                'default_app_company_name'                      => array_value($GLOBALS[$scope][$storage][$container]["company"], 'name'),
                'default_app_descriptions'                      => array_value($GLOBALS[$scope][$storage][$container]["company"], 'shortDescription'),
                'default_app_descriptions_full'                 => array_value($GLOBALS[$scope][$storage][$container]["company"], 'detailsDescription'),
                'default_app_company_web_address'               => array_value($GLOBALS[$scope][$storage][$container]["company"], 'website'),
                // default date of birth
                'default_date_of_birth'                         => array_value($GLOBALS[$scope][$storage][$container]["author"], 'dateOfBirth'),
                // default char set
                'default_data_char_set'                         => array_value($GLOBALS[$scope][$storage][$container], 'charset'),
                'default_data_table_prefix'                     => array_value($GLOBALS[$scope][$storage][$container]["prefix"], 'char'),

                'default_system_layout', 'default_system_theme' => array_value($GLOBALS[$scope][$storage][$container]["prefix"], 'theme'),
                'default_operating_system_password'             => array_value($GLOBALS[$scope][$storage][$container]["prefix"], 'user'),

                // Alias of default system layout.
                'default_controller', 'default_directory_index' => array_value($GLOBALS[$scope][$storage][$container]["prefix"], 'directoryIndex'),
                'session_time'                                  => array_value($GLOBALS[$scope][$storage][$container]["prefix"], 'sessionDuration'),
                'web_config_table'                              => array_value($GLOBALS[$scope][$storage][$container]["prefix"], 'config'),
                'app_username_prefix'                           => sprintf(
                    '%1$s%2$s',
                    array_value($GLOBALS[$scope][$storage][$container]["prefix"], 'char'),
                    array_value($GLOBALS[$scope][$storage][$container]["prefix"], 'separator')
                ),
                'default_operating_system_user'                 => sprintf(
                    '%1$s%2$s',
                    Memory::getConstant('APP_USERNAME_PREFIX'),
                    array_value($GLOBALS[$scope][$storage][$container]["prefix"], 'user')
                ),
                'db_default_name'                               => 'system',
                'db_user_name'                                  => Memory::getConstant('DEFAULT_OPERATING_SYSTEM_USER'),
                'db_user_password'                              => Memory::getConstant('DEFAULT_OPERATING_SYSTEM_PASSWORD'),
                'db_web_config_table'                           => Memory::getConstant('WEB_CONFIG_TABLE'),

                // Mishusoft associates files format.
                'mishusoft_database_file_format'                => array_value($GLOBALS[$scope][$storage][$container]["mime"], 'databaseFileFormat'),
                'mishusoft_database_dump_file_format'           => array_value($GLOBALS[$scope][$storage][$container]["mime"], 'databaseDumpFileFormat'),
                'mishusoft_configuration_file_format'           => array_value($GLOBALS[$scope][$storage][$container]["mime"], 'configurationFileFormat'),

                'user_password_length_limit'                    => 8,

                // Support address.
                'support_email_address'                         => array_value($GLOBALS[$scope][$storage][$container]["company"], 'mail'),
                'support_website'                               => array_value($GLOBALS[$scope][$storage][$container]["company"], 'support'),
                'support_contact_title'                         => 'Feedback',

                'system_exclude_dirs'                           => array_value($GLOBALS[$scope][$storage][$container]["exclude"], 'dir'),
                default                                         => '',
            },
            'framework' => 'framework',
            'config'    => 'config',
            default     => ''
        };
    }

}
