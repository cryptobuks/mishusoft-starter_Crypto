<?php


// we need configuration file to multiple positioning and links
    use Mishusoft\Http\Runtime;
    use Mishusoft\Http\Session;
    use Mishusoft\Storage;
    use Mishusoft\System\Localization;
    use Mishusoft\System\Ui;
    use Mishusoft\Utility\ArrayCollection;
    use Mishusoft\Utility\Character;

    $translation = new Localization(ArrayCollection::value($this->request, 'locale'));

// $public = array("index", "company", "support", "product");
    $authenticate = [
        'account',
        'user',
        'developer',
        'consumer',
        'staff',
    ];


    $template_header = Ui::element(
        Ui::getDocumentContentHeader(),
        'nav',
        ['class' => 'header header-navigation-bar box-shadow box-shadow-inset']
    );
// add logo, menu section in navigation bar in header area
    $header_logo_zone = Ui::element(
        $template_header,
        'a',
        [
            'class' => 'protect mishusoft-logo mishusoft-root-link mishusoft-root-link-primary animate',
            'href'  => Runtime::link('default_home'),
        ]
    );
    $header_logo      = Ui::element(
        $header_logo_zone,
        'img',
        [
            'src'   => Storage::toDataUri('media', 'logos/mishusoft-logo-lite.webp'),
            'class' => ' box-shadow1', 'height' => '50px', 'width' => '50px', 'alt' => 'm',
        ]
    );
    Ui::text($header_logo_zone, $this->titleOfCurrentWebPage);

    if (Session::get('auth')) {
        if (in_array(Character::lower($this->request['controller']), $authenticate)) {
            Ui::assignAttributes($template_header, ['style' => 'height: 40px;']);
            Ui::assignAttributes(
                $header_logo_zone,
                ['style' => Ui::HTML_HREF_STYLE . 'color: ' . Ui::COLOR['default'] . ';width: 30%;font-family: Saira Stencil One, SolaimanLipi, Arial,serif;font-size: 25px;font-weight: bold;text-transform: uppercase;display: flex;align-items: center;justify-content: left;transition: all .15s ease;']
            );
            Ui::assignAttributes(
                $header_logo,
                ['style' => 'margin: 10px;text-align: center;width: 25px;height: 25px;float: left;border-radius: 50%;box-shadow: 0 2px 4px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);transition: all .15s ease;']
            );
            Ui::elementList(
                Ui::element($template_header, 'nav', ['class' => 'nav-right width-70percent']),
                [
                    'a' => [
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('account/profile?a=' . time() . '&t=view&sc=' . ArrayCollection::value((array)Session::get('me'), 'code') . '&tab=summery'),
                            'text'  => $translation->translate('Profile'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('account/logout'),
                            'text'  => $translation->translate('Logout'),
                        ],
                    ],
                ]
            );
        } else {
            Ui::elementList(
                Ui::element($template_header, 'nav', ['class' => 'nav-left width-50percent']),
                [
                    'a' => [
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('default_home'),
                            'text'  => $translation->translate('Home'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('company'),
                            'text'  => $translation->translate('Company'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('products'),
                            'text'  => $translation->translate('Products'),
                        ],
                        // ["class" => "protect", "href" => Runtime::link("products/pricing"), "text" => $translation->translate("Pricing")],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('appointment'),
                            'text'  => $translation->translate('Career'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('company/contact-us'),
                            'text'  => $translation->translate('Contact US'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('support'),
                            'text'  => $translation->translate('Help'),
                        ],
                    ],
                ]
            );

            Ui::elementList(
                Ui::element($template_header, 'nav', ['class' => 'nav-right width-20percent']),
                [
                    'a' => [
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('account/profile?a=' . time() . '&t=view&sc=' . _Array::value((array)Session::get('me'), 'code') . '&tab=summery'),
                            'text'  => $translation->translate('Profile'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('account/logout'),
                            'text'  => $translation->translate('Logout'),
                        ],
                    ],
                ]
            );
        }//end if
    } else {
        if (Character::lower($this->request['controller'] . '/' . $this->request['method']) === Character::lower('account/index')) {
            Ui::elementList(
                Ui::element($template_header, 'nav', ['class' => 'nav-right width-70percent']),
                [
                    'a' => [
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('default_home'),
                            'text'  => $translation->translate('Home'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('company/about-us'),
                            'text'  => $translation->translate('About US'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('account/why-choose-us'),
                            'text'  => $translation->translate('Why need an account?'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('support'),
                            'text'  => $translation->translate('Help'),
                        ],
                    ],
                ]
            );
        } else {
            Ui::elementList(
                Ui::element($template_header, 'nav', ['class' => 'nav-left width-50percent']),
                [
                    'a' => [
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('default_home'),
                            'text'  => $translation->translate('Home'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('company'),
                            'text'  => $translation->translate('Company'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('products'),
                            'text'  => $translation->translate('Products'),
                        ],
                        // ["class" => "protect", "href" => Runtime::link("products/pricing"), "text" => $translation->translate("Pricing")],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('appointment'),
                            'text'  => $translation->translate('Career'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('company/contact-us'),
                            'text'  => $translation->translate('Contact US'),
                        ],
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('support'),
                            'text'  => $translation->translate('Help'),
                        ],
                    ],
                ]
            );

            Ui::elementList(
                Ui::element($template_header, 'nav', ['class' => 'nav-right width-20percent']),
                [
                    'a' => [
                        [
                            'class' => 'protect',
                            'href'  => Runtime::link('account'),
                            'text'  => $translation->translate('Log In / Join'),
                        ],
                    ],
                ]
            );
        }//end if
    }//end if
