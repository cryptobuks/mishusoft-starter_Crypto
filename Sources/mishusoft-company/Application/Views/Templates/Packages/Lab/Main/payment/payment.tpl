<style>
    .center-box {
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .app-payment-sandbox {
        background-color: white;
        position: absolute;
        padding: 5px 20px 5px 20px;
        text-align: center;
        width: 400px;
        height: 350px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .payment-symbol {
        font-size: 80px;
        border: 1px solid #53b5e5;
        border-radius: 5px;
        color: #53b5e5;
        padding: 5px;
    }


    .messageBoard {
        display: none;
        padding: 5px 10px;
        width: 100% !important;
        text-align: justify;
        position: relative;
        left: 0 !important;
        margin-top: 10px;
        line-height: 1.5;
        font-size: 13px;
    }

    .ev_error {
        color: red;
        border-left: 3px solid red;
        background: #f7d7d4;
    }

    .ev_success {
        color: green;
        border-left: 3px solid green;
        background: #70e8c0d4;
    }

    .ev_info {
        color: #34abe6;
        border-left: 3px solid #53b5e5;
        background: #c3eff9;
    }

    .app-payment-title {
        padding: 10px 0 20px 0;
        font-size: 20px;
        font-weight: bold;
    }

    .StripeElement {
        box-sizing: border-box;

        height: 40px;

        padding: 10px 12px;

        border: 1px solid transparent;
        border-radius: 4px;
        background-color: white;

        box-shadow: 0 3px 4px 4px #e6ebf1;
        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;
    }

    .StripeElement--focus {
        box-shadow: 0 1px 3px 0 #cfd7df;
    }

    .StripeElement--invalid {
        border-color: #fa755a;
    }

    .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
    }
</style>
<div class="app-payment-sandbox center-box">
    <div id="payment-center-box" class="center-box" style="position:relative;">
        <input id="app-id-enc" type="hidden" value="{$appId}"/>
        <input id="payment-token" type="hidden" value="{$paymentToken}"/>
        <i class="far fa-money-bill-alt payment-symbol" style="margin-bottom: 10px;"></i>
        <div id="payment-submission">
            <form id="payment-form">
                <h2 style="margin-top: 20px;">Pay with debit/credit card</h2>
                <div id="messageBoard" class="messageBoard"></div>
                <div id="card-element" style="margin-top: 20px;"></div>
                <div id="card-errors" role="alert"></div>
                <button id="submit" class="button button-lg button-outline-primary" style="margin-top: 20px;width: 75%;">Pay</button>
            </form>
        </div>
    </div>

</div>

<script type="application/javascript">
    /*global _root_,Stripe*/
    var stripe = Stripe('{$stripe_key}');
    var elements = stripe.elements();

    /*client*/
    // Set up Stripe.js and Elements to use in checkout form
    var style = {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4"
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        },
    };

    var card = elements.create("card", { style: style });
    card.mount("#card-element");

    var cardElement = elements.getElement('card');
    cardElement.addEventListener('change', function (event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
    });

    // Call stripe.confirmCardPayment() with the client secret.
    var form = document.getElementById('payment-form');
    var token = document.getElementById('payment-token').value;

    form.addEventListener('submit', function(ev) {
        Mishusoft.detectElementById('app-loader').style.display = 'block';
        ev.preventDefault();
        stripe.confirmCardPayment(token, {
            payment_method: {
                card: card,
                billing_details: {
                    name: '{$clientFullName}'
                }
            },
            receipt_email: '{$clientEmailAddress}'
        }).then(function(result) {
            Mishusoft.detectElementById('app-loader').style.display = 'none';
            if (result.error) {
                Mishusoft.detectElementById('messageBoard').textContent = '';
                Mishusoft.detectElementById('messageBoard').style.display = 'block';
                Mishusoft.detectElementById('messageBoard').classList = 'messageBoard ev_error';
                Mishusoft.detectElementById('messageBoard').innerHTML += result.error.message +'<br/>';
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    let params = { security_code: 1, amount: '{$amount}', clientId: '{$clientId}', appId:'{$appId}', paymentToken:'{$paymentToken}' };
                    let xhr = new XMLHttpRequest();
                    xhr.open("POST", _root_ + 'payment/paymentCompletion', true);
                    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
                    xhr.send(JSON.stringify(params));
                    xhr.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status === 200) {
                            console.log(this.responseText);
                            Mishusoft.showMessage(this.responseText, Mishusoft.detectElementById("messagePanel"),function (response) {
                                if (response.type === 'success'){
                                    window.postMessage({
                                        direction: "mishusoft-payment-confirm",
                                        licence: response.licence
                                    }, "*");
                                    Mishusoft.detectElementById('messageBoard').textContent = '';
                                    Mishusoft.detectElementById('messageBoard').style.display = 'block';
                                    Mishusoft.detectElementById('messageBoard').classList = 'messageBoard ev_success';
                                    Mishusoft.detectElementById('messageBoard').innerHTML += 'Payment completed!!<br/>';
                                }
                            });
                        }
                    }
                }
            }
        });
    });
</script>