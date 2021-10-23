<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Mishusoft\Framework\Chipsets\RuntimeErrors;
use Mishusoft\Framework\Drivers\Controller;

class pdfController extends Controller
{
    private $pdf;

    public function __construct()
    {
        parent::__construct();
        $this->pdf = new mPDF();
        $this->access_init();
    }

    public function index()
    {

        /*$mpdf = new \Mpdf\Mpdf();
        $mpdf->WriteHTML('<h1>Hello world!</h1>');
        $mpdf->Output();*/

        //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'pdf page')));
        /*$this->view->setJs(array('main'));*/
    }

    public function dopdf($html = false)
    {
        ob_start();
        $title = "New Document";
        $this->pdf->SetTitle($title);
        $this->pdf->SetAuthor(DEFAULT_APP_COMPANY_NAME);
        $this->pdf->SetCreator(DEFAULT_APP_AUTHOR. " @ " . DEFAULT_APP_COMPANY_NAME);
        $this->pdf->SetSubject($title);
        $this->pdf->SetKeywords($title);
        $this->pdf->SetDisplayMode('fullpage');
        $this->pdf->setBasePath(BaseURL);
        $this->pdf->autoScriptToLang = true;
        $this->pdf->baseScript = 1;    // Use values in classes/ucdn.php  1 = LATIN
        $this->pdf->autoLangToFont = true;
        try {
            $this->pdf->WriteHTML($html);
        } catch (MpdfException $e) {
            new RuntimeErrors($e->getMessage(), $e->getCode(), $e->getCode(), $e->getFile(), $e->getLine());
        }
        ob_get_clean();

        $this->pdf->Output('New Document.pdf', 'D');
    }
}
