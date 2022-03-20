<?php

    use Mishusoft\Storage;
    use Mishusoft\System\Memory;
    use Mishusoft\System\Ui;

    /*
     * root element of quick bar
     * */

    $root = Ui::element(Ui::getDocumentContentHeader(), 'nav', ['class' => 'header header-quick-tool-bar']);
    $left = Ui::element($root, 'left');

    /*email address*/
    Ui::elementList(Ui::element($left, 'div'), ["img" => [
        [
            "src"       => Storage::toDataUri(
                'media',
                "images/icons/companies/mail-contact.png"
            ), "height" => "15px", "width" => "15px", "alt" => Memory::Data()->company->mail,
        ],
    ], "a"                                            => [
        [
            "class" => "protect", "href" => "mailto:" . Memory::Data()->company->mail, "target" => "_blank",
            "text"  => Memory::Data()->company->mail,
        ],
    ]]);

    /*cell phone*/
    Ui::elementList(Ui::element($left, 'div'), ["img" => [
        [
            "src"    => Storage::toDataUri(
                'media',
                "images/icons/companies/ringing-phone.png"
            ),
            "height" => "15px", "width" => "15px", "alt" => Memory::Data()->company->care,
        ],
    ], "a"                                            => [
        [
            "class"  => "protect", "href" => "tel:" . Memory::Data()->company->care,
            "target" => "_blank", "text" => Memory::Data()->company->care,
        ],
    ]]);

    /*map marker*/
    Ui::elementList(Ui::element($left, 'div'), ["img" => [
        [
            "src"    => Storage::toDataUri(
                'media',
                "images/icons/companies/map-marker.png"
            ),
            "height" => "15px", "width" => "15px", "alt" => Memory::Data()->company->address,
        ],
    ], "a"                                            => [
        [
            "class" => "protect", "href" => Memory::Data()->company->map, "target" => "_blank",
            "rel"   => "noreferrer", "text" => Memory::Data()->company->address,
        ],
    ]]);

    $socialMediaBar = Ui::element(Ui::element($root, 'right'), 'div');


    /*facebook*/
    Ui::element(
        Ui::element($socialMediaBar, "a", [
            "class"  => "protect box-shadow1", "href" => "https://www.facebook.com/mralaminahamed/",
            "target" => "_blank", "rel" => "noreferrer",
        ]),
        "img",
        ["src"      => Storage::toDataUri(
            'media',
            "images/icons/social-media/facebook-new.png"
        ), "height" => "20px", "width" => "20px", "alt" => "facebook"]
    );
    /*github*/
    Ui::element(
        Ui::element($socialMediaBar, "a", [
            "class"  => "protect box-shadow1", "href" => "https://github.com/mrabirahamed",
            "target" => "_blank", "rel" => "noreferrer",
        ]),
        "img",
        ["src"      => Storage::toDataUri(
            'media',
            "images/icons/social-media/github.png"
        ), "height" => "20px", "width" => "20px", "alt" => "github"]
    );

    /*instagram*/
    Ui::element(
        Ui::element($socialMediaBar, "a", [
            "class"  => "protect box-shadow1", "href" => "https://www.instagram.com/mralaminahamed/",
            "target" => "_blank", "rel" => "noreferrer",
        ]),
        "img",
        ["src"      => Storage::toDataUri(
            'media',
            "images/icons/social-media/instagram-new.png"
        ), "height" => "20px", "width" => "20px", "alt" => "instagram"]
    );
    /*linkedin*/
    Ui::element(
        Ui::element($socialMediaBar, "a", [
            "class"  => "protect box-shadow1", "href" => "https://www.linkedin.com/in/mralaminahamed/",
            "target" => "_blank", "rel" => "noreferrer",
        ]),
        "img",
        ["src"      => Storage::toDataUri(
            'media',
            "images/icons/social-media/linkedin.png"
        ), "height" => "20px", "width" => "20px", "alt" => "linkedin"]
    );
    /*pinterest*/
    Ui::element(
        Ui::element($socialMediaBar, "a", [
            "class"  => "protect box-shadow1", "href" => "https://www.pinterest.com/mrabirahamed",
            "target" => "_blank", "rel" => "noreferrer",
        ]),
        "img",
        ["src"      => Storage::toDataUri(
            'media',
            "images/icons/social-media/pinterest.png"
        ), "height" => "20px", "width" => "20px", "alt" => "pinterest"]
    );
    /*reddit*/
    Ui::element(
        Ui::element($socialMediaBar, "a", [
            "class"  => "protect box-shadow1", "href" => "https://www.reddit.com/user/mrabirahamed",
            "target" => "_blank", "rel" => "noreferrer",
        ]),
        "img",
        ["src"      => Storage::toDataUri(
            'media',
            "images/icons/social-media/reddit.png"
        ), "height" => "20px", "width" => "20px", "alt" => "reddit"]
    );
    /*tiktok*/
    Ui::element(
        Ui::element($socialMediaBar, "a", [
            "class"  => "protect box-shadow1", "href" => "https://www.tiktok.com/@user7594632514421?lang=en",
            "target" => "_blank", "rel" => "noreferrer",
        ]),
        "img",
        ["src"      => Storage::toDataUri(
            'media',
            "images/icons/social-media/tiktok.png"
        ), "height" => "20px", "width" => "20px", "alt" => "tiktok"]
    );
    /*twitter*/
    Ui::element(
        Ui::element($socialMediaBar, "a", [
            "class"  => "protect box-shadow1", "href" => "https://twitter.com/mralaminahamed/",
            "target" => "_blank", "rel" => "noreferrer",
        ]),
        "img",
        ["src"      => Storage::toDataUri(
            'media',
            "images/icons/social-media/twitter.png"
        ), "height" => "20px", "width" => "20px", "alt" => "twitter"]
    );

    /*Ui::elementList(Ui::element($right, 'right-social-network', ['style' => 'height: inherit;background:inherit;color: inherit;display: flex;flex-direction:row;']), ["img" => [
        ["style" => "height: inherit;width:15px;margin-left:10px;margin-right:10px;", "src" => Media::getAssetsPath("images_ringing-phone.png", "remote"), "alt" => Memory::Data()->company->care],
        ["style" => "height: inherit;width:15px;margin-left:10px;margin-right:10px;", "src" => Media::getAssetsPath("images_ringing-phone.png", "remote"), "alt" => Memory::Data()->company->care],
        ["style" => "height: inherit;width:15px;margin-left:10px;margin-right:10px;", "src" => Media::getAssetsPath("images_ringing-phone.png", "remote"), "alt" => Memory::Data()->company->care],
        ["style" => "height: inherit;width:15px;margin-left:10px;margin-right:10px;", "src" => Media::getAssetsPath("images_ringing-phone.png", "remote"), "alt" => Memory::Data()->company->care],
        ["style" => "height: inherit;width:15px;margin-left:10px;margin-right:10px;", "src" => Media::getAssetsPath("images_ringing-phone.png", "remote"), "alt" => Memory::Data()->company->care],
        ["style" => "height: inherit;width:15px;margin-left:10px;margin-right:10px;", "src" => Media::getAssetsPath("images_ringing-phone.png", "remote"), "alt" => Memory::Data()->company->care],
    ]]);*/
