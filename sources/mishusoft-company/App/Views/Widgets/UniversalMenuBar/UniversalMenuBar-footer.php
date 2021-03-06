<?php

    use Mishusoft\Http\Runtime;
    use Mishusoft\Storage;
    use Mishusoft\System\Localization;
    use Mishusoft\System\Memory;
    use Mishusoft\System\Time;
    use Mishusoft\System\Ui;
    use Mishusoft\Utility\ArrayCollection;
    use Mishusoft\Utility\Character;

    $translation = new Localization(ArrayCollection::value($this->request, "locale"));

    $footer = Ui::element(Ui::getDocumentContentFooter(), 'article', [
        "class" => "footer background-image",
    ]);

    $authenticate = ["account", "user", "developer", "consumer", "staff"];

    if (!in_array(Character::lower($this->request["controller"]), $authenticate)) {
        $footer0 = Ui::element($footer, 'div', [
            'class' => 'company-banner',
        ]);

        $left = Ui::element($footer0, 'div', [
            'class' => 'mishusoft-company-brief',
        ]);

        Ui::element($left, 'a', [
            'class' => 'protect mishusoft-root-link mishusoft-root-link-secondary',
            'href'  => Runtime::link("default_home"), 'text' => $translation->translate(Memory::Data()->company->name),]);
        Ui::element($left, 'div', [
            'class' => 'mishusoft-company-brief-message',
            'text'  => $translation->translate(Memory::Data()->company->detailsDescription),]);

        Ui::element($footer0, 'div', [
            'class' => 'blank-space',
        ]);


        /*contact panel*/
        $right = Ui::element($footer0, 'div', [
            'class' => 'protect get-in-touch',
        ]);

        Ui::element($right, 'a', [
            'class' => 'protect',
            'href'  => Runtime::link("company/contact-us"), 'text' => $translation->translate("Get in touch"),]);

        $parent = Ui::element($right, 'div', ['class' => 'quick-link-area',]);
        /*map marker*/
        Ui::elementList(Ui::element($parent, 'div', [
            'class' => 'quick-link',]), ["img" => [
            ["src"    => Storage::toDataUri('media', "images/icons/companies/map-marker.png"),
             "height" => "15px", "width" => "15px", "alt" => Memory::Data()->company->address,],
        ], "a"                                 => [
            ['class' => 'protect', "href" => Memory::Data()->company->map, "target" => "_blank", "rel" => "noreferrer",
             "text"  => Memory::Data()->company->address,
            ],
        ]]);

        /*cell phone*/
        Ui::elementList(Ui::element($parent, 'div', [
            'class' => 'quick-link',]), ["img" => [
            ["style"  => "height: 15px;width: 15px;margin-left:10px;margin-right:10px;margin-top: 4px;",
             "src"    => Storage::toDataUri('media', "images/icons/companies/ringing-phone.png"),
             "height" => "15px", "width" => "15px", "alt" => Memory::Data()->company->care,],
        ], "a"                                 => [
            [
                "style"  => Ui::HTML_HREF_STYLE . "color:" . Ui::COLOR["white"],
                "href"   => "tel:" . Memory::Data()->company->care,
                "target" => "_blank", "text" => Memory::Data()->company->care,
            ],
        ]]);

        /*email address*/
        Ui::elementList(Ui::element($parent, 'div', [
            'class' => 'quick-link',]), ["img" => [
            ["style"  => "height: 15px;width: 15px;margin-left:10px;margin-right:10px;margin-top: 4px;",
             "src"    => Storage::toDataUri('media', "images/icons/companies/mail-contact.png"),
             "height" => "15px", "width" => "15px", "alt" => Memory::Data()->company->mail,],
        ], "a"                                 => [
            ["style"  => Ui::HTML_HREF_STYLE . "color:" . Ui::COLOR["white"], "href" => "mailto:" . Memory::Data()->company->mail,
             "target" => "_blank", "text" => Memory::Data()->company->mail,],
        ]]);

        /*support address*/
//    Ui::elementList(Ui::element($parent, 'div', ['class'=>'quick-link'/*,'style' => 'height: 20px;background:inherit;color: inherit;display: flex;flex-direction:row;'*/]), ["img" => [
//        ["style" => "height: 15px;width: 15px;margin-left:10px;margin-right:10px;margin-top: 4px;", "src" => Media::getMediaPath("images/domain.png", "remote"),"height"=>"15px","width"=>"15px", "alt" => Memory::Data()->company->mail],
//    ], "a" => [
//        ["style" => Ui::htmlHrefStyle . "color:" . Ui::color["white"], "href" => Memory::Data()->company->support, "target" => "_blank", "text" => Memory::Data()->company->support, "rel" => "noreferrer"],
//    ]]);


        Ui::element($right, 'span', [
            'style' => Ui::HTML_HREF_STYLE . 'color: inherit;font-family: Noto Sans, SolaimanLipi, Arial,serif;font-size: 18px;font-weight: bold;display: flex;justify-content: left;margin-top: 10px;margin-bottom: 10px;',
            'text'  => $translation->translate("Follow us"),
        ]);

        $socialMediaBar = Ui::element($right, 'right-social-network', [
            'style' => 'height: 20px;background:inherit;color: inherit;display: flex;flex-direction:row;',
        ]);

        $StyleForSocialMediaLink = Ui::HTML_HREF_STYLE . "color:" . Ui::COLOR["white"] . ";margin-left:5px;margin-right:5px;border-radius: 50%;";
        $StyleForSocialMediaIcon = "height: 20px;width:20px;";


        /*facebook*/
        Ui::element(
            Ui::element($socialMediaBar, "a", [
                "style"  => $StyleForSocialMediaLink, "href" => "https://www.facebook.com/alamin.ahamed.abir",
                "target" => "_blank", "rel" => "noreferrer",
            ]),
            "img",
            [
                "style"  => $StyleForSocialMediaIcon, "height" => "20px", "width" => "20px",
                "src"    => Storage::toDataUri(
                    'media',
                    "images/icons/social-media/facebook-new.png"
                ), "alt" => "facebook",
            ]
        );
        /*github*/
        Ui::element(
            Ui::element($socialMediaBar, "a", [
                "style"  => $StyleForSocialMediaLink, "href" => "https://github.com/mrabirahamed",
                "target" => "_blank", "rel" => "noreferrer",
            ]),
            "img",
            [
                "style" => $StyleForSocialMediaIcon, "height" => "20px", "width" => "20px",
                "src"   => Storage::toDataUri('media', "images/icons/social-media/github.png"), "alt" => "github",
            ]
        );

        /*instagram*/
        Ui::element(
            Ui::element($socialMediaBar, "a", [
                "style"  => $StyleForSocialMediaLink, "href" => "https://www.instagram.com/mrabir.ahmed",
                "target" => "_blank", "rel" => "noreferrer",
            ]),
            "img",
            [
                "style" => $StyleForSocialMediaIcon, "height" => "20px", "width" => "20px",
                "src"   => Storage::toDataUri('media', "images/icons/social-media/instagram-new.png"), "alt" => "instagram",
            ]
        );
        /*linkedin*/
        Ui::element(
            Ui::element($socialMediaBar, "a", [
                "style"  => $StyleForSocialMediaLink, "href" => "https://www.linkedin.com/in/mrabirahamed/",
                "target" => "_blank", "rel" => "noreferrer",
            ]),
            "img",
            [
                "style" => $StyleForSocialMediaIcon, "height" => "20px", "width" => "20px",
                "src"   => Storage::toDataUri('media', "images/icons/social-media/linkedin.png"), "alt" => "linkedin",
            ]
        );
        /*pinterest*/
        Ui::element(
            Ui::element($socialMediaBar, "a", [
                "style"  => $StyleForSocialMediaLink, "href" => "https://www.pinterest.com/mrabirahamed",
                "target" => "_blank", "rel" => "noreferrer",
            ]),
            "img",
            [
                "style" => $StyleForSocialMediaIcon, "height" => "20px", "width" => "20px",
                "src"   => Storage::toDataUri('media', "images/icons/social-media/pinterest.png"), "alt" => "pinterest",
            ]
        );
        /*reddit*/
        Ui::element(
            Ui::element($socialMediaBar, "a", [
                "style"  => $StyleForSocialMediaLink, "href" => "https://www.reddit.com/user/mrabirahamed",
                "target" => "_blank", "rel" => "noreferrer",
            ]),
            "img",
            [
                "style" => $StyleForSocialMediaIcon, "height" => "20px", "width" => "20px",
                "src"   => Storage::toDataUri('media', "images/icons/social-media/reddit.png"), "alt" => "reddit",
            ]
        );
        /*tiktok*/
        Ui::element(
            Ui::element($socialMediaBar, "a", [
                "style"  => $StyleForSocialMediaLink, "href" => "https://www.tiktok.com/@user7594632514421?lang=en",
                "target" => "_blank", "rel" => "noreferrer",
            ]),
            "img",
            [
                "style" => $StyleForSocialMediaIcon, "height" => "20px", "width" => "20px",
                "src"   => Storage::toDataUri('media', "images/icons/social-media/tiktok.png"), "alt" => "tiktok",
            ]
        );
        /*twitter*/
        Ui::element(
            Ui::element($socialMediaBar, "a", [
                "style"  => $StyleForSocialMediaLink, "href" => "https://twitter.com/mrabir_ahamed",
                "target" => "_blank", "rel" => "noreferrer",
            ]),
            "img",
            [
                "style" => $StyleForSocialMediaIcon, "height" => "20px", "width" => "20px",
                "src"   => Storage::toDataUri('media', "images/icons/social-media/twitter.png"), "alt" => "twitter",
            ]
        );
    }


    $footer1 = Ui::element($footer, 'div', [
        'class' => 'copy-right',
    ]);

    Ui::elementList(Ui::element($footer1, "div", [
        "class" => "col-lg-plus-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-plus-12",
    ]), [
                        /*"Copyright ?? " . Time::getCurrentYearNumber().Framework::COMPANY_NAME.". All Right Reserved."*/
                        "copyright" => [
                            ['text' => "Copyright ?? " . /*Memory::Data()->company->est . " - ".*/ Time::currentYearNumber()],
                        ], "a"      => [
            [
                "href"  => Runtime::link("default_home"), "target" => "_blank",
                "class" => "link text-safe", "style" => "padding:0;color: white;",
                "text"  => " " . $translation->translate(Memory::Data()->company->name),
            ],
        ], "span"                   => [
            ['text' => ". " . $translation->translate("All Right Reserved.") /* text for system default signature*/],
        ],
                    ]);


    Ui::elementList(Ui::element($footer1, "div", [
        "style" => "display: flex;align-items: center;justify-content: center;margin-top: 0px;",
        "class" => "col-lg-plus-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-plus-12",]), [
                                                                                                   "a" => [
                                                                                                       [
                                                                                                           "href"  => Runtime::link("company/terms-and-conditions"), "target" => "_blank",
                                                                                                           "class" => "link text-safe", "style" => "color: white;",
                                                                                                           'text'  => $translation->translate("Terms & Condition"),
                                                                                                       ],
                                                                                                       [
                                                                                                           "href"  => Runtime::link("company/privacy-policy"), "target" => "_blank",
                                                                                                           "class" => "link text-safe", "style" => "color: white;",
                                                                                                           'text'  => $translation->translate("Privacy Policy"),
                                                                                                       ],],
                                                                                               ]);
