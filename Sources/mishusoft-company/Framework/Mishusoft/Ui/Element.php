<?php declare(strict_types=1);


namespace Mishusoft\Ui;

use DOMElement;
use Mishusoft\Cryptography\OpenSSL\Decryption;
use Mishusoft\Ui;

class Element extends Ui
{

    /**
     * @param string $type
     * @param DOMElement $documentRoot
     * //
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public static function board(string $type, DOMElement $documentRoot): void
    {
        if ($type === 'message') {
            $root = Ui::element($documentRoot, 'message', ['class' => 'messageZone', 'style' => Ui::CSS['display-flex'] . 'width:inherit;']);
            $item = Ui::element($root, 'item', ['class' => array_key_exists("success", $_GET) ? "box-message box-success box-shadow-light" : (array_key_exists("notify", $_GET) ? "box-message box-notify box-shadow-light" : "box-message box-danger box-shadow-light")]);
            Ui::element(Ui::element($item, 'symbol', ['class' => array_key_exists("success", $_GET) ? "box-success-symbol" : (array_key_exists("notify", $_GET) ? "box-notify-symbol" : "box-danger-symbol")]), 'i', ['class' => array_key_exists("success", $_GET) ? "fa fa-check" : (array_key_exists("notify", $_GET) ? "fa fa-i" : "fa fa-times")]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), Decryption::dynamic(array_key_exists("success", $_GET) ? $_GET["success"] : (array_key_exists("notify", $_GET) ? $_GET["notify"] : $_GET["error"])));


            /*_Debug::preOutput($_GET);
            _Debug::preOutput($this->request['arguments']);
            $message = array_shift($this->request['arguments']);
            $content = (count($this->request['arguments']) > 1) ? join("/", $this->request['arguments']) : join($this->request['arguments']);
            _Debug::preOutput($content);
            $root = Ui::element($documentRoot, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]);
            $item = Ui::element($root, 'item', ['class' => ($message === "success") ? "box-message box-success box-shadow-light" : (($message === "notify") ? "box-message box-notify box-shadow-light" : "box-message box-danger box-shadow-light")]);
            Ui::element(Ui::element($item, 'symbol', ['class' => ($message === "success") ? "box-success-symbol" : (($message === "notify") ? "box-notify-symbol" : "box-danger-symbol")]), 'i', ['class' => ($message === "success") ? "fa fa-check" : (($message === "notify") ? "fa fa-i" : "fa fa-times")]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), Decryption::dynamic($content));
        */
        }
    }
}
