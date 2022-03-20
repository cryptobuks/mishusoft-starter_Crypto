<?php

    /**
     * The loader of dot env management functions for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */


    function default_env_file(): string
    {
        return fixSlash(RUNTIME_ROOT_PATH . '/.env');
    }

    /**
     * @return array<string, mixed>
     */
    function environment_variables(): array
    {
        $result = [];

        if (is_readable(default_env_file())) {
            $contents = file_get_contents(default_env_file());

            if (is_string($contents) && $contents !== '') {
                $variables = explode("\n", $contents);
                $variables = array_filter($variables);

                if ($variables !== []) {
                    foreach ($variables as $variable) {
                        [$key, $value] = explode('=', $variable);
                        $result[$key] = $value;
                    }

                    return $result;
                }
            }
        }
        return [];
    }

    /**
     * @param array<string, mixed> $variables
     * @param string               $separator
     * @param string               $line_break
     *
     * @return string
     */
    function environment_variables_generate(array $variables, string $separator = '=', string $line_break = "\n"): string
    {
        array_multisort($variables, SORT_ASC);
        ksort($variables, SORT_ASC);

        return implode(
            $line_break,
            array_map(
                static function ($k, $v) use ($separator) {
                    return $k . $separator . $v;
                },
                array_keys($variables),
                array_values($variables)
            )
        );
    }


    /**
     * @return string[]
     */
    function environment_variables_all(): array
    {
        $content = is_string(file_get_contents(default_env_file())) ? file_get_contents(default_env_file()) : '';
        $data    = explode("\n", $content);
        return array_filter($data);
    }

    /**
     * @param array<string, mixed> $variables
     *
     * @return bool
     */
    function update_env_worker(array $variables): bool
    {
        foreach ($variables as $key => $value) {
            if (array_key_exists($key, $_ENV) && array_key_exists($key, $_SERVER)) {
                unset($_ENV[$key], $_SERVER[$key]);
            } else {
                load_variable_to_env($variables);
            }
        }

        return write_file(default_env_file(), environment_variables_generate($variables));
    }

    /**
     * @param string $key
     * @param mixed  $value
     *
     * @return bool
     */
    function update_env(string $key, mixed $value): bool
    {
        if (is_usable_this_file(default_env_file())) {
            $variables       = environment_variables();
            $variables[$key] = $value;
            return update_env_worker($variables);
        }

        return update_env_worker([$key => $value]);
    }

    /**
     * @param array<string, mixed> $items
     *
     * @return bool
     */
    function update_env_array(array $items): bool
    {
        if (is_usable_this_file(default_env_file())) {
            $variables = environment_variables();
            $original  = $variables;

            foreach ($items as $key => $value) {
                $variables[$key] = $value;
            }
            if ($original !== $variables) {
                return update_env_worker($variables);
            }
            return true;
        }

        return update_env_worker($items);
    }

    /**
     * @param string[] $variables
     *
     * @return void
     */
    function load_variable_to_env(array $variables): void
    {
        foreach ($variables as $key => $value) {
            putenv(sprintf('%s=%s', $key, $value));
            $_ENV[$key]    = $value;
            $_SERVER[$key] = $value;
        }
    }

    /**
     * @param string $key
     *
     * @return bool
     */
    function delete_env(string $key): bool
    {
        if (is_usable_this_file(default_env_file())) {
            $variables = environment_variables();
            $original  = $variables;

            if (array_key_exists($key, $variables) && array_key_exists($key, $_ENV) && array_key_exists($key, $_SERVER)) {
                unset($variables[$key], $_ENV[$key], $_SERVER[$key]);
            }

            if ($original !== $variables) {
                return write_file(default_env_file(), environment_variables_generate($variables));
            }
            return true;
        }

        return false;
    }

    /**
     * @param array<string, mixed> $items
     *
     * @return bool
     */
    function delete_env_array(array $items): bool
    {
        if (count($items) > 0 && is_usable_this_file(default_env_file())) {
            $variables = environment_variables();
            $original  = $variables;

            foreach ($items as $item) {
                if (array_key_exists($item, $variables) && array_key_exists($item, $_ENV) && array_key_exists($item, $_SERVER)) {
                    unset($variables[$item], $_ENV[$item], $_SERVER[$item]);
                }
            }

            if ($original !== $variables) {
                return write_file(default_env_file(), environment_variables_generate($variables));
            }
            return true;
        }

        return false;
    }
