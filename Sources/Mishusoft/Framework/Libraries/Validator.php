<?php


namespace Mishusoft\Framework\Libraries;


class Validator
{
    const IS_REQUIRED = 'required';

    /**
     * @param array $data
     * @param array $options
     */
    public static function check(array $data, array $options): bool
    {
        if (count($options) > 0) {
            foreach ($options as $item => $value) {
                if ($value === self::IS_REQUIRED) {
                    if (array_key_exists($item, $data)) {
                        if (empty($data[$item])) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
            }
            return true;
        } else {
            return false;
        }
    }

    public static function validEmail(string $email): bool
    {
        return !filter_var($email, FILTER_VALIDATE_EMAIL) ? FALSE : TRUE;
    }


}