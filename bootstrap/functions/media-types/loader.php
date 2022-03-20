<?php

    /**
     * The loader of media types loader functions for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    declare(strict_types=1);

    /**
     * Get media types
     *
     * @return array<string, string>
     */
    function media_types_all_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', 'db.msf'));
    }

    /**lo
     * Get media types full
     *
     * @return string[][]
     */
    function media_types_all_full_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', 'db.full.msf'));
    }

    /**
     * Media type list of applications
     *
     * @return string[][]
     */
    function media_types_application_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', 'individual/application.msf'));
    }


    /**
     * Media type list of audio
     *
     * @return string[][]
     */
    function media_types_audio_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', 'individual/audio.msf'));
    }


    /**
     * Media type list of font
     *
     * @return string[][]
     */
    function media_types_font_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', '/individual/font.msf'));
    }


    /**
     * Media type list of image
     *
     * @return string[][]
     */
    function media_types_image_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', '/individual/image.msf'));
    }


    /**
     * Media type list of inode
     *
     * @return string[][]
     */
    function media_types_inode_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', '/individual/inode.msf'));
    }

    /**
     * Media type list of message
     *
     * @return string[][]
     */
    function media_types_message_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', '/individual/message.msf'));
    }

    /**
     * Media type list of model
     *
     * @return string[][]
     */
    function media_types_model_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', '/individual/model.msf'));
    }


    /**
     * Media type list of multipart
     *
     * @return string[][]
     */
    function media_types_multipart_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', '/individual/multipart.msf'));
    }


    /**
     * Media type list of packages
     *
     * @return string[][]
     */
    function media_types_packages_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', '/individual/packages.msf'));
    }

    /**
     * Media type list of text
     *
     * @return string[][]
     */
    function media_types_text_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', '/individual/text.msf'));
    }

    /**
     * Media type list of video
     *
     * @return string[][]
     */
    function media_types_video_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', '/individual/video.msf'));
    }

    /**
     * Media type list of x-content
     *
     * @return string[][]
     */
    function media_types_x_content_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', '/individual/x-content.msf'));
    }

    /**
     * Media type list of x-epoc
     *
     * @return string[][]
     */
    function media_types_x_epoc_from_file(): array
    {
        return media_types_quick_loader(data_drive_file('MediaTypes', '/individual/x-epoc.msf'));
    }
