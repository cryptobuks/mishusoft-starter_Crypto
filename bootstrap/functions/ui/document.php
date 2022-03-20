<?php

    /**
     * The loader of document templates functions for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */


    //
    // add_document_title('test') //done
    // add_document_meta(array [])
    // add_document_favicons(root:framework)
    // add_document_script_stylesheet(array []);
    // add_document_script_stylesheet_at_body(array []);
    // add_document_preloader(image_local_path)
    // add_document_main_header(logo_url, title, array [menu link])
    // add_document_main_content(array [])
    // add_document_widget(string position, array [])
    // document_render()
    //


    /**
     * @return string
     */
    function get_document_default_title(): string
    {
        return 'Untitled';
    }

    /**
     * @return array<int, array>
     */
    function get_document_default_meta(): array
    {
        return [
            get_document_default_meta_charset(),
            get_document_default_meta_viewport(),
            ['name' => 'keywords', 'content' => '',],
            ['name' => 'company', 'content' => '',],
            ['name' => 'author', 'content' => '',],
            ['name' => 'description', 'content' => get_document_title_clean(),],
        ];
    }

    /**
     * @return array<string, string>
     */
    function get_document_default_meta_charset(): array
    {
        return ['charset' => 'UTF-8'];
    }

    /**
     * @return array<string, string>
     */
    function get_document_default_meta_viewport(): array
    {
        return ['name' => 'viewport', 'content' => 'width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no',];
    }

    /**
     * @param string $titleText
     * @param string $suffix
     * @param string $separator
     *
     * @return void
     */
    function add_document_title(string $titleText, string $suffix = '', string $separator = ' :: '): void
    {
        $GLOBALS[DEFAULT_MEMORY_SCOPE]['document']['title'] = [
            'title'     => $titleText,
            'suffix'    => $suffix,
            'separator' => $separator
        ];
    }

    /**
     * @param string $suffix
     * @param string $separator
     *
     * @return array
     */
    function get_document_title_array(string $suffix = '', string $separator = ''): array
    {
        if (array_key_exists('title', $GLOBALS[DEFAULT_MEMORY_SCOPE]['document'])) {
            return [
                'title'     => $GLOBALS[DEFAULT_MEMORY_SCOPE]['document']['title']['title'],
                'suffix'    => !empty($suffix) ? $suffix : $GLOBALS[DEFAULT_MEMORY_SCOPE]['document']['title']['suffix'],
                'separator' => !empty($separator) ? $separator : $GLOBALS[DEFAULT_MEMORY_SCOPE]['document']['title']['separator']
            ];
        }

        return [
            'title'     => get_document_default_title(),
            'suffix'    => !empty($suffix) ? $suffix : ' :: ',
            'separator' => !empty($separator) ? $separator : WHO_AM_I
        ];
    }

    /**
     * @param string $suffix
     * @param string $separator
     *
     * @return string
     */
    function get_document_title(string $suffix = '', string $separator = ''): string
    {
        return implode(get_document_title_array($suffix, $separator));
    }

    /**
     * @return string
     */
    function get_document_title_clean(): string
    {
        return $GLOBALS[DEFAULT_MEMORY_SCOPE]['document']['title']['title'] ?? get_document_default_title();
    }

    function add_document_meta(array $childElement): void
    {
        if (array_key_exists('meta', $GLOBALS[DEFAULT_MEMORY_SCOPE]['document'])) {
            $GLOBALS[DEFAULT_MEMORY_SCOPE]['document']['meta'] = [];
        }

        if (array_is_list($childElement)) {
            $GLOBALS[DEFAULT_MEMORY_SCOPE]['document']['meta'] = array_merge_recursive($GLOBALS[DEFAULT_MEMORY_SCOPE]['document']['meta'], $childElement);
        } else {
            $GLOBALS[DEFAULT_MEMORY_SCOPE]['document']['meta'][] = $childElement;
        }
    }

    function get_document_meta(): array
    {
        if (array_key_exists('meta', $GLOBALS[DEFAULT_MEMORY_SCOPE]['document'])) {
            $metaAll = $GLOBALS[DEFAULT_MEMORY_SCOPE]['document']['meta'];
        } else {
            $metaAll = get_document_default_meta();
        }

        $charset = array_column($metaAll, 'charset');
        if ($charset === []) {
            array_unshift($metaAll, ['charset' => 'UTF-8']);
        }

        return $metaAll;
    }
