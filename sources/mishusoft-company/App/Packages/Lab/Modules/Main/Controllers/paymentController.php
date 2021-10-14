<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Exception;
use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Decryption;
use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Encryption;
use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Http\IP;
use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\System\Network;
use Mishusoft\Framework\Chipsets\System\Time;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Drivers\Controller;
use Stripe\Charge;
use Stripe\Exception\ApiErrorException;
use Stripe\PaymentIntent;
use Stripe\Source;
use Stripe\Stripe;

class paymentController extends Controller
{
    private $database;
    private int $payableAmount;
    private int $dollar2myrRate;
    private int $limit;
    private int $limitBase;
    private string $openExchangeAppIdKey;
    private string $openExchangeCurrencyBase;
    private string $stripeTestSecretKey;
    private string $stripeTestPublicKey;
    private string $stripeLiveSecretKey;
    private string $stripeLivePublicKey;
    private string $licenceType;
    private string $payerCurrency;
    private string $stripeAccountNumber;

    public function __construct()
    {
        parent::__construct();
        $this->database = $this->loadModel('payment');

        $this->openExchangeAppIdKey ="";
        $this->dollar2myrRate ="";

        $this->stripeAccountNumber ="";

        $this->stripeTestSecretKey ="";
        $this->stripeTestPublicKey ="";

        $this->stripeLiveSecretKey ="";
        $this->stripeLivePublicKey ="";

        $this->openExchangeCurrencyBase = 'usd';
        $this->payableAmount = 0;
        $this->dollar2myrRate = 4.36;
        $this->limit = 0;
        $this->limitBase = 0;
        $this->licenceType = '';
        $this->payerCurrency = '';
    }

    public function index()
    {
        _Debug::preOutput($this->stripeAccountNumber);
        _Debug::preOutput($this->openExchangeAppIdKey);
        _Debug::preOutput($this->dollar2myrRate);
        _Debug::preOutput($this->payerCurrency);
        //echo Encryption::static('5');
        $this->view->assign('title', 'Payment');
        ////Tracker::addEvent(array('activity' => array('messageType' => 'notify', 'message' => 'User visited to payment..')));
        $this->view->render('index', 'Payment');
    }

    public function verifyClient()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (!$this->filterInt($data->security_code) || $this->filterInt($data->security_code) !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'Invalid request.',]);
                ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid request.')));
                exit;
            }
            if (!$this->filterInt(Decryption::static($data->appId))) {
                echo json_encode(['type' => 'error', 'message' => 'Invalid application id.']);
                ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid application id.')));
                exit;
            }
            if (!$this->validEmail($data->userEmail)) {
                echo json_encode(['type' => 'error', 'message' => 'Invalid email address.']);
                ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid email address.')));
                exit;
            }
            if (!$this->getSqlText($data->planType)) {
                echo json_encode(['type' => 'error', 'message' => 'Invalid payment plan type.']);
                ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid payment plan type.')));
                exit;
            }
            if (!$this->getSqlText($data->plan)) {
                echo json_encode(['type' => 'error', 'message' => 'Invalid payment plan.']);
                ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid payment plan.')));
                exit;
            }

/*            if (!$this->database->getAppDetailsById($this->filterInt(Decryption::static($data->appId)))) {
                echo json_encode(['type' => 'error', 'message' => 'Your application not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your application not found.')));
                exit;
            }

            if (!$this->database->getUserDetailsByEmail($data->userEmail)) {
                echo json_encode(['type' => 'error', 'message' => 'Your information not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your information not found.')));
                exit;
            }*/

            echo json_encode(['type' => 'success', 'message' => 'Select your amount and pay.', 'appIdEncrypt' => $data->appId,
                'emailEncrypt' => Encryption::static($data->userEmail),
                'paymentPlanTypeEncrypt' => Encryption::static($this->getSqlText($data->planType)),
                'paymentPlanEncrypt' => Encryption::static($this->getSqlText($data->plan))]);
            ////Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Select your amount.')));
            exit;

        } else {
            echo json_encode(['type' => 'error', 'message' => 'Invalid payment request.']);
            ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid payment request.')));
            exit;
        }
    }

    public function encryptAmount()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (!$this->filterInt($data->security_code) || $this->filterInt($data->security_code) !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'Invalid request.',]);
                ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid request.')));
                exit;
            }
            if (!$this->filterInt($data->amount)) {
                echo json_encode(['type' => 'error', 'message' => 'Invalid amount.']);
                ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid amount.')));
                exit;
            }

            echo json_encode(['type' => 'success', 'message' => 'Pay.', 'amount' => Encryption::static($data->amount)]);
            ////Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Pay.')));
            exit;

        } else {
            echo json_encode(['type' => 'error', 'message' => 'Invalid request.']);
            ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid request.')));
            exit;
        }
    }

    public function payNow($appId = false, $email = false, $planType = false, $plan = false, $amount = false)
    {
        //https://host/payment/payNow/appid/email/plantype/plan/amount
        //http://localhost/payment/payNow/YUs3eWs4L0doYVdVekJXWksxNWVFQT09/R0NyMzhydVFncmV1dEpnV1pjN0grS3N3NnF6Qm9mdHJQQThTekpJODg0OD0=/L2dJbnZ3dUpBZ3E5bHlRQklyeWJxZz09/YmZIcmg5QnZFSEw4U2RxY3kxSlZDZz09/UGZDcU5EMk5ZVjlYQ09hTTE0clkxUT09/

        if (!isset($appId) || empty($appId) || !isset($email) || empty($email)) {
            $this->redirect('payment');
            exit;
        }

        if (!$this->filterInt(Decryption::static($appId))) {
            echo json_encode(['type' => 'error', 'message' => 'Invalid application id.']);
            ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid application id.')));
            exit;
        }
        if (!$this->validEmail(Decryption::static($email))) {
            echo json_encode(['type' => 'error', 'message' => 'Invalid email address.']);
            ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid email address.')));
            exit;
        }
        if (!empty($planType) && !$this->getSqlText(Decryption::static($planType))) {
            echo json_encode(['type' => 'error', 'message' => 'Invalid payment plan type.']);
            ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid payment plan type.')));
            exit;
        }
        if (!empty($plan) && !$this->getSqlText(Decryption::static($plan))) {
            echo json_encode(['type' => 'error', 'message' => 'Invalid payment plan.']);
            ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid payment plan.')));
            exit;
        }
        if (!empty($amount) && !$this->filterInt(Decryption::static($amount))) {
            echo json_encode(['type' => 'error', 'message' => 'Invalid amount.']);
            ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid amount.')));
            exit;
        }

        if (empty($this->database->getAppDetailsById($this->filterInt(Decryption::static($appId))))) {
            echo json_encode(['type' => 'error', 'message' => 'Your application not found.']);
            ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your application not found.')));
            exit;
        }

        /*if ($this->database->resolveAppIdInUserInfo($this->filterInt(Decryption::static($appId)), Decryption::static($email)) ||
            !$this->database->resolveAppIdInUserInfo($this->filterInt(Decryption::static($appId)), Decryption::static($email))) {
            ////Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Resolver processed.')));
        }*/

        if (empty($this->database->getUserIdByAppId($this->filterInt(Decryption::static($appId)))) || empty($this->database->getUserDetailsByEmail(Decryption::static($email)))) {
            echo json_encode(['type' => 'error', 'message' => 'Your application not found.']);
            ////Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your application not found.')));
            exit;
        }

        /*
        * http://localhost/payment/payNow/d1hlYSt0eGk2RU1Hc04vYVhWY3V3QT09/R0NyMzhydVFncmV1dEpnV1pjN0grS3N3NnF6Qm9mdHJQQThTekpJODg0OD0=/YmZIcmg5QnZFSEw4U2RxY3kxSlZDZz09/UGZDcU5EMk5ZVjlYQ09hTTE0clkxUT09/L2dJbnZ3dUpBZ3E5bHlRQklyeWJxZz09/
       * ?client_secret=src_client_secret_RtP3VLcOGMyOH5IfPL6kMZkQ
         * &livemode=false
         * &redirect_status=succeeded
         * &source=src_1H0BK5ICDFi9hiLvyPHx87Z7
        * */
        if ($this->catchRedirectURL('redirect_status') === 'succeeded') {
            if ($this->catchRedirectURL('source')) {
                $this->createSofortCharge($this->catchRedirectURL('source'));
            }
        }

        $this->view->setJs(['main']);

        /*if (MishusoftAssistant::getServerInfoByARG('SERVER_NAME') === 'www.mishusoft.com') {
            $this->view->assign('stripe_key', $this->stripeLivePublicKey);
        } else {
            $this->view->assign('stripe_key', $this->stripeTestPublicKey);
        }*/

        $this->view->assign('stripe_key', $this->stripeTestPublicKey);

        $this->view->assign('title', 'Pay Now');
        $this->view->assign('redirect_status', $this->catchRedirectURL('redirect_status'));
        $this->view->assign('appId', $appId);
        $this->view->assign('appNameVersion', $this->database->getAppNameVersionById($this->filterInt(Decryption::static($appId))));
        $this->view->assign('amount', $amount);
        $this->view->assign('planType', Decryption::static($planType));
        $this->view->assign('plan', Decryption::static($plan));
        $this->view->assign('amountNumber', $this->filterInt(Decryption::static($amount)));
        $this->view->assign('clientFullName', $this->database->getUserFullNameByAppId($this->filterInt(Decryption::static($appId))));
        $this->view->assign('clientEmailAddress', $this->database->getUserEmailByAppId($this->filterInt(Decryption::static($appId))));
        $this->view->assign('clientId', Encryption::static($this->database->getUserIdByAppId($this->filterInt(Decryption::static($appId)))));
        //Tracker::addEvent(array('activity' => array('messageType' => 'notify', 'message' => 'User visited to payment..')));
        $this->view->render('paynow', 'Payment');
    }

    public function getAccurateAmount($amount)
    {
        if (!empty($amount) && is_object($amount)) {
            if ($amount->type === 'normal') {
                if (!$this->filterInt($amount->value)) {
                    echo json_encode(['type' => 'error', 'message' => 'Invalid amount.',]);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid amount.')));
                    exit;
                } else {
                    $this->payableAmount = $this->filterInt($amount->value);
                }
            } elseif ($amount->type === 'encrypted') {
                if (!$this->filterInt(Decryption::static($amount->value))) {
                    echo json_encode(['type' => 'error', 'message' => 'Invalid amount.',]);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid amount.')));
                    exit;
                } else {
                    $this->payableAmount = $this->filterInt(Decryption::static($amount->value));
                }
            } else {
                echo json_encode(['type' => 'error', 'message' => 'Amount not countable.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid amount.')));
                exit;
            }
        } else {
            echo json_encode(['type' => 'error', 'message' => 'Invalid amount.',]);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid amount.')));
            exit;
        }
    }

    private function createSofortCharge($sourceId)
    {
        if (Network::getValOfSrv('SERVER_NAME') === 'www.mishusoft.com') {
            Stripe::setApiKey($this->stripeLiveSecretKey);
        } else {
            Stripe::setApiKey($this->stripeTestSecretKey);
        }
        try {
            $sourceDetails = Source::retrieve($sourceId);
        } catch (ApiErrorException $e) {
            echo json_encode(['type' => 'error', 'message' => $e->getMessage()]);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => $e->getMessage())));
            exit;
        }
        //print_r($sourceDetails);
        if ($sourceDetails->status ==='chargeable'){
            try {
                $charge = Charge::create([
                    'amount' => $this->filterInt($sourceDetails->amount),
                    'currency' => $this->getSqlText($sourceDetails->currency),
                    'source' => $this->getSqlText($sourceDetails->id),
                ]);
                if ($charge->status ==='pending'){
                    echo json_encode(['type' => 'error', 'message' => 'Your payment is pending state for up to 14 days from today. After 14 days, your will receive receipt']);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your payment is pending')));
                    exit;
                }
                if ($charge->status ==='failed'){
                    echo json_encode(['type' => 'error', 'message' => 'Your payment is failed.']);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your payment is failed')));
                    exit;
                }
                //print_r($charge);
            } catch (Exception $e) {
                echo json_encode(['type' => 'error', 'message' => $e->getMessage()]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => $e->getMessage())));
                exit;
            }
        }
    }

    public function getPaymentToken()
    {
        /*header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: ms-feedback-data,Accept,OPTIONS");*/

        Stripe::setApiKey($this->stripeTestSecretKey);

        /*if (MishusoftAssistant::getServerInfoByARG('SERVER_NAME') === 'www.mishusoft.com') {
            \Stripe\Stripe::setApiKey($this->stripeLiveSecretKey);
            try {
                \Stripe\ApplePayDomain::create([
                    'domain_name' => 'www.mishusoft.com',
                ]);
            } catch (\Stripe\Exception\ApiErrorException $e) {
                echo json_encode(['type' => 'error', 'message' => 'Apple pay domain adding failed']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Apple pay domain adding failed')));
                exit;
            }
        } else {
            \Stripe\Stripe::setApiKey($this->stripeTestSecretKey);
        }*/

        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->getAccurateAmount($data->amountObject->amount);
            $this->getLicenceLimitByAmount();
            if ($this->getSqlText($data->methodObject->currency) !== 'usd') {
                $this->calculateAmount($data->methodObject->currency);
            } else {
                $this->payableAmount = ($this->payableAmount * 100);
            }
            try {
                $intent = PaymentIntent::create([
                    'amount' => $this->filterInt($this->payableAmount),
                    'currency' => $this->getSqlText($data->methodObject->currency),
                    'payment_method_types' => [$this->getSqlText($data->methodObject->method)],
                    'receipt_email' => $this->getSqlText($data->receiptEmail),
                    'description' => 'Licence ' . $this->getSqlText($data->description),
                    // Verify your integration in this guide by including this parameter
                    'metadata' => ['integration_check' => 'accept_a_payment'],
                ]);
                echo json_encode(array('type' => 'success', 'message' => 'Ready to pay.',
                    'client_secret' => $intent->client_secret, 'amount' => Encryption::static($this->payableAmount)));
            } catch (Exception $e) {
                echo json_encode(['type' => 'error', 'message' => $e->getMessage()]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => $e->getMessage())));
                exit;
            }
        } else {
            Storage::StreamAsJson(['type' => 'error', 'message' => 'Invalid token request.']);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid token request.')));
            exit;
        }
    }

    private function getLicenceLimitByAmount()
    {
        if ($this->filterInt($this->payableAmount) === 5) {
            $this->licenceType = 'Plan 01';
            $this->limit = 10000;
            $this->limitBase = 10000;
        } /*elseif ($this->filterInt($this->payableAmount) === 10) {
            $this->licenceType = 'Plan 02';
            $this->limit = '20000';
        }*/ /*elseif ($this->filterInt($this->payableAmount) === 20) {
            $this->licenceType = 'Plan 03';
            $this->limit = '35000';
        }*/ elseif ($this->filterInt($this->payableAmount) === 15 || $this->filterInt($this->payableAmount) === 30) {
            $this->licenceType = 'Plan 04';
            $this->limit = 50000;
            $this->limitBase = 50000;
        } else {
            $this->licenceType = 'NoPlan';
            $this->limit = 0;
            $this->limitBase = 0;
        }

        return $this;
    }

    /*public function testPayouts()
    {
        // Set your secret key. Remember to switch to your live secret key in production!
        // See your keys here: https://dashboard.stripe.com/account/apikeys
        \Stripe\Stripe::setApiKey($this->stripeLiveSecretKey);

        /*$payout = \Stripe\Payout::create([
            'amount' => 5000,
            'currency' => 'usd',
        ]);*/

    /*$balanceObject = \Stripe\Balance::retrieve(
        ['stripe_account' => $this->stripeAccountNumber]
    );

    echo '<pre>';
    print_r($balanceObject);
    echo '<br/>';
    print_r($balanceObject->available);
    echo '<br/>';
    print_r($balanceObject->pending[0]->amount);
    print_r($balanceObject->pending[0]->currency);
    echo '<br/>';

    $payout = \Stripe\Payout::create([
        'amount' => 2000,
        'currency' => 'usd',
        'method' => 'standard',
    ], [
        'stripe_account' => $this->stripeAccountNumber,
    ]);

    print_r($payout);
}*/

    public function paymentCompletion()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->getAccurateAmount($data->amountObject->amount);
            if (!$this->filterInt(Decryption::static($data->clientId))) {
                echo json_encode(['type' => 'error', 'message' => 'Invalid client.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid amount.')));
                exit;
            }
            if (!$this->filterInt(Decryption::static($data->appId))) {
                echo json_encode(['type' => 'error', 'message' => 'Invalid application.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid amount.')));
                exit;
            }

            $this->database->addPaymentInfo(
                $this->filterInt(Decryption::static($data->clientId)),
                $this->filterInt(Decryption::static($data->appId)),
                $this->database->getClientIpAddressById($this->filterInt(Decryption::static($data->clientId))),
                $this->getSqlText($data->paymentObject->paymentIntentId),
                $this->getSqlText($data->paymentObject->clientSecret),
                $this->filterInt($data->paymentObject->paymentIntentAmount),
                $this->getSqlText($data->paymentObject->paymentIntentCurrency),
                $this->getSqlText($data->paymentObject->paymentMethodTypes),
                $this->getSqlText($data->paymentObject->paymentIntentPaymentMethod)
            );

            $this->getLicenceLimitByAmount();
            $previousLicence = $this->database->checkPreviousLicence(
                $this->filterInt(Decryption::static($data->appId))
            );
            if ($previousLicence) {
                $this->database->updateLicenceKeyByAppId(
                    $this->filterInt(Decryption::static($data->appId)),
                    $this->licenceType, $this->limit, $this->limitBase, Time::getToday(), Time::getNextMonthDate()
                );
            } else {
                $clientIpAddress = $this->database->getClientIpAddressById($this->filterInt(Decryption::static($data->clientId)));
                /*setUserLicence($clientId, $app_id, $ip, $browser, $ltype, $limit, $limitBase, $lissue, $lupdate, $lnextupdate, $lexpire)*/
                $this->database->setUserLicence(
                    $this->filterInt(Decryption::static($data->appId)), $clientIpAddress,
                    (new Browser())->getBrowserNameFull(), $this->licenceType, Time::getToday(), Time::getToday(), Time::getNextDayDate(),
                    Time::getNextMonthDate()
                );
            }

            echo json_encode(array(
                'type' => 'success', 'message' => 'Payment completed!!',
                'licence' => array(
                    'key' => Encryption::static($this->database->getLicenceKeyByAppId($this->filterInt(Decryption::static($data->appId)))),
                    'type' => $this->licenceType, 'issue' => Time::getToday(), 'update' => Time::getToday(),
                    'expire' => Time::getNextMonthDate(), 'limit' => $this->limit, 'limitBase' => $this->limitBase
                )
            ));
        } else {
            echo json_encode(['type' => 'error', 'message' => 'Invalid token request.',]);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid token request.')));
            exit;
        }
    }

    public function paymentCompletionHacking()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->getAccurateAmount($data->amountObject->amount);

            $this->database->addHackingPaymentInfo(
                IP::get(),
                $this->getSqlText($data->paymentObject->paymentIntentId),
                $this->getSqlText($data->paymentObject->clientSecret),
                $this->filterInt($data->paymentObject->paymentIntentAmount),
                $this->getSqlText($data->paymentObject->paymentIntentCurrency),
                $this->getSqlText($data->paymentObject->paymentMethodTypes),
                $this->getSqlText($data->paymentObject->paymentIntentPaymentMethod)
            );

            echo json_encode(array(
                'type' => 'success', 'message' => 'Payment completed!!'
            ));
        } else {
            echo json_encode(['type' => 'error', 'message' => 'Invalid token request.',]);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Invalid token request.')));
            exit;
        }
    }

    private function calculateAmount($currency)
    {
        if (!is_null($currency) && !empty($currency)) {
            $oe = json_decode(file_get_contents('https://openexchangerates.org/api/latest.json?app_id=' . $this->openExchangeAppIdKey . '&base=' . $this->openExchangeCurrencyBase));
            if (!empty($oe) && is_object($oe) && !empty($oe->rates) && is_object($oe->rates)) {
                foreach (((array)$oe->rates) as $key => $value) {
                    if ($key === strtoupper($currency) && is_float($value)) {
                        $this->payableAmount = (int)(($value * $this->payableAmount) * 100);
                        return $this->payableAmount;
                    }
                }
            } else {
                Storage::StreamAsJson(['type' => 'error', 'message' => 'Converting error. Data not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Converting error. Data not found.')));
                exit;
            }
        } else {
            Storage::StreamAsJson(['type' => 'error', 'message' => 'Converting error. Currency empty.']);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Converting error. Currency empty.')));
            exit;
        }
    }
}