<?php

    use Mishusoft\Storage;
    use Mishusoft\System;
    use Mishusoft\System\Device;
    use Mishusoft\System\Memory;
    use Mishusoft\System\Network;
    use Mishusoft\System\Ui;
    use Mishusoft\Utility\ArrayCollection as Arr;
    use Mishusoft\Utility\Inflect;

    (static function () {
        System::activate();

        if (Arr::value(System::$event, 'type') === 'success' && Arr::value(System::$event, 'message') === 'ok') {
            $registry      = Mishusoft\Registry::getInstance();
            $registry->acl = new Mishusoft\Exceptions\Authentication\Acl();

            // check activation database
            if (Memory::Data('mpm')->config->database->activation) {
                // declare database info as constants
                define('DB_HOST', Memory::Data('config')->db->host);
                define('DB_PORT', Memory::Data('config')->db->port);
                define('DB_USER', Memory::Data('config')->db->user);
                define('DB_PASS', Memory::Data('config')->db->password);
                define('DB_NAME', Memory::Data('config')->db->name);
                define('DB_CHAR', Memory::Data('config')->db->char);
                define('DB_PREFIX', Memory::Data('config')->db->prefix);

                // instance Databases connection
                $registry->db = new Mishusoft\Drivers\Database(DB_HOST, DB_NAME, DB_USER, DB_PASS, DB_CHAR);
            } else {
                // instance Databases connection
                $registry->db = new Mishusoft\Drivers\Database(
                    Memory::Data('config')->db->host,
                    Memory::Data('config')->db->name,
                    Memory::Data('config')->db->user,
                    Memory::Data('config')->db->password,
                    Memory::Data('config')->db->char
                );
            }//end if

            // init application
            Mishusoft\Drivers\Bootstrap\Classic::run($registry->requestClassic);
        } else {
            System::setProgressStep();
            if (!in_array(Arr::value(System::$event, 'message'), System::getExcludeErrors(), true)) {
                Ui::HtmlInterface(
                    ucfirst(Arr::value(System::$event, 'type')),
                    function ($html, $head) {
                        // add meta tags
                        Ui::element($head, 'meta', ['id' => 'mishusoft-web-root', 'name' => 'root', 'content' => Memory::Data('framework')->host->url]);

                        $template = Ui::element(
                            Ui::element(
                                Ui::element($html, 'body', ['id' => 'error']),
                                // set id attribute for body
                                'ms-app',
                                ['style' => 'position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;border-radius: 5px;-webkit-border-radius: 5px;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);line-height:1.5;']
                            ),
                            'ms-app-content',
                            ['style' => 'display: block;margin: 0;padding: 0;text-align: left;border: 1px solid #f22b08;-webkit-border-radius: 5px;border-radius: 5px']
                        );

                        // set app header
                        Ui::text(Ui::element($template, 'ms-app-content-header', ['style' => 'text-align:center;font-size: 18px;font-weight: 700;padding: 10px;color: #fff;display: block;background-color: #f22b08;user-select: none;-webkit-user-select: none;']), 'Error');
                        $template_body = Ui::element($template, 'ms-app-content-body', ['style' => 'text-align:center;padding: 10px;display: block;']);

                        // add noscript to ui
                        Ui::setNoScriptText($template_body);
                        // end of adding noscript
                        // view contents
                        Ui::text(
                            Ui::element($template_body, 'ms-app-paragraph', ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: center;background: bisque;border-radius: 5px;padding: 5px;margin-top: 10px;user-select: none;-webkit-user-select: none;']),
                            // (_Array::value(Mishusoft::$event, "message") === "already-configured" || _Array::value(Mishusoft::$event, "message") === "app-installed-by-sys-admin") ? Mishusoft::$Message : Text::removeTags(Mishusoft::$Message));
                            Inflect::removeTags(System::$Message)
                        );

                        // add system signature
                        Ui::addDefaultSignature(
                            $template_body,
                            System\Time::currentYearNumber(),
                            Memory::Data()->company->name
                        );
                    }
                );
            } else {
                Ui::HtmlInterface(
                    'Loading...',
                    function ($html, $head, $title) {
                        // add meta tags
                        Ui::elementList(
                            $head,
                            [
                                'meta' => [
                                    [
                                        'id'      => 'mishusoft-web-root',
                                        'name'    => 'root',
                                        'content' => Memory::Data('framework')->host->url,
                                    ],
                                    [
                                        'id'      => 'runtime-server-name-version',
                                        'name'    => 'server-name-version',
                                        'content' => Network::getServerNameVersion(),
                                    ],
                                    [
                                        'id'      => 'runtime-php-version',
                                        'name'    => 'php-version',
                                        'content' => PHP_VERSION,
                                    ],
                                    [
                                        'id'      => 'runtime-host-name',
                                        'name'    => 'host-name',
                                        'content' => array_key_exists('static_hostname', (new Device())->hostnamectl()) ? (new Device())->hostnamectl()['static_hostname'] : php_uname(),
                                    ],
                                    [
                                        'id'      => 'runtime-host-ip',
                                        'name'    => 'host-ip',
                                        'content' => $_SERVER['SERVER_ADDR'],
                                    ],
                                    [
                                        'id'      => 'runtime-host-os',
                                        'name'    => 'host-os',
                                        'content' => array_key_exists('pretty_name', (new Device())->osRelease()) ? (new Device())->osRelease()['pretty_name'] : PHP_OS,
                                    ],
                                    [
                                        'id'      => 'runtime-host-architecture',
                                        'name'    => 'host-architecture',
                                        'content' => array_key_exists('architecture', (new Device())->hostnamectl()) ? '(' . (new Device())->hostnamectl()['architecture'] . ')' : '',
                                    ],
                                ],
                            ]
                        );

                        // set id attribute for title
                        Ui::setAttributes($title, ['id' => 'app-title']);

                        // add embedded css file in head area
                        Ui::text(Ui::element($head, 'style', ['type' => 'text/css']), 'body{height: 700px;width: 100%;display: flex;justify-content: center;align-items: center;}.app-loader{cursor: progress;width: 125px;height: 125px;-webkit-border-radius: 30px;border-radius: 30px;} .app-initial-setup-box {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;border-radius: 5px;-webkit-border-radius: 5px;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);}.app-description-text{font-size: 15px;line-height: 1.5;margin-bottom: 10px;}');

                        // set id attribute for body
                        $body = Ui::element($html, 'body', ['id' => 'install']);
                        // add mishusoft app loader
                        Ui::element($body, 'img', ['src' => FRAMEWORK_LOADER_FILE, 'alt' => 'mishusoft-app-loader', 'id' => 'app-loader', 'class' => 'app-initial-setup-box app-loader']);

                        // add noscript to ui
                        Ui::setNoScriptText($body);
                        // end of adding noscript
                        // add javascript file and embedded code in body area
                        Ui::elementList(
                            $body,
                            [
                                'script' => [
                                    [
                                        'type' => 'application/javascript',
                                        'text' => 'let _root_ = \'' . Memory::Data('framework')->host->url . '\';function fixWindowSize(){if(window.innerHeight < "700") {document.body.style = "height:700px;";} else if(window.innerHeight > "700") {document.body.style = "height:"+window.innerHeight + "px";} else {if(window.innerHeight > "1024") {document.body.style = "height:1024px;";}}} window.addEventListener("resize", fixWindowSize);window.addEventListener("load", fixWindowSize);',
                                    ],
                                    [
                                        'type' => 'application/javascript',
                                        'src'  => Storage::toDataUri('js_installer.js', 'remote'),
                                        // .join([Memory::Data("framework")->host->url . 'libraries/js/installer.js'])
                                    ],
                                    [
                                        'type' => 'application/javascript',
                                        'src'  => Storage::toDataUri('js_app-js-framework-v4.js', 'remote'),
                                    ],
                                ],
                            ]
                        );
                    }
                );
            }//end if
        }//end if
    })();
