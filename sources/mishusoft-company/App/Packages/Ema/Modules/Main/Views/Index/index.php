<?php

    use Mishusoft\System\Localization;
    use Mishusoft\System\Ui;
    use Mishusoft\Utility\ArrayCollection;

    $translation = new Localization(ArrayCollection::value($this->request, "locale"));
    /*set text for title*/
    Ui::updateDocumentTitle($translation->translate("Welcome to You."));


// create mishusoft application with html
    $application = Ui::element(Ui::getDocumentContentBody(), 'section', ['class' => 'ms-app', 'child' => [
        'div' => ['class' => 'ms-app-body', 'child' => [
            'div' => [
                [
                    'style' => 'padding: 20px;text-align: center;font-size: 37px;font-weight: bold;width: 1024px;border: 1px solid lightgray;display: flex;justify-content: center;align-items: center;margin-top: 10px;',
                    'text'  => $translation->translate("Trending product"),
                ],
                ['style' => 'padding: 50px;text-align: center;font-size: 37px;font-weight: bold;', 'text' => $translation->translate("Welcome to Mishusoft.")],
            ],],
        ],]]);
