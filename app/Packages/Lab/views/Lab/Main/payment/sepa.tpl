<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        line-height: 1.5; }

    *::selection {
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none; }

    body {
        text-align: center;
        top: -21px;
        position: relative; }

    .zero-aside {
        margin: 0;
        padding: 0; }

    .app {
        width: 100%;
        height: 100%;
        color: #ffffff; }
    .app-background-image {
        position: absolute;
        left: 0;
        top: 0; }
    .app-content {
        font-size: 18px;
        background: #ff00008c;
        position: relative;
        top: -50%;
        left: 50%;
        transform: translate(-50%, 95%); }
    .app-content-body {
        width: 60%;
        padding: 5px 0 5px 0;
        display: inline-block; }
    .app-content-title {
        width: 100%;
        font-size: 35px;
        text-transform: uppercase;
        font-weight: 900;
        margin-bottom: 20px;
        display: block; }
    .app-content-text {
        font-weight: 400;
        width: 100%;
        display: block;
        line-height: 1.6; }
    .app-content-text p {
        text-align: justify; }
    .app-navigator {
        margin-top: 20px;
        width: 100%;
        display: block; }
    .app-navigator a {
        margin-right: 15px;
        width: 45px;
        height: 45px;
        background: #ffffff;
        text-decoration: none;
        display: inline-block;
        border-radius: 10px; }
    .app-navigator a:last-child {
        margin-right: 0; }
    .app-navigator a img {
        width: 45px;
        height: 45px;
        display: inline-block; }

    .mail-content {
        font-size: 18px;
        background: #ff00008c;
        position: relative;
        top: -50%;
        left: 50%;
        transform: translate(-50%, 45%); }
    .mail-content-text {
        font-weight: 400;
        width: 100%;
        display: block;
        line-height: 1.6; }
    .mail-content-text p {
        text-align: justify;
        margin-bottom: 10px; }
    .mail-content-text p:last-child {
        margin-bottom: 0; }

    .payment {
        width: 100%;
        height: 100%; }
    .payment-background-image {
        position: absolute;
        left: 0;
        top: 0; }
    .payment-task-preview, .payment-method-selection {
        width: 100%;
        margin-bottom: 15px;
        display: inline-block; }
    .payment-cart {
        width: 50px;
        height: 50px;
        display: inline-block;
        padding-right: 15px;
        border-right: 2px solid #34abe6; }
    .payment-order-list {
        font-size: 16px;
        width: 320px;
        height: 50px;
        text-align: left;
        display: inline-block;
        padding-left: 10px;
        padding-right: 15px;
        border-right: 2px solid #34abe6; }
    .payment-order-price {
        font-size: 13px;
        text-align: left;
        width: 115px;
        height: 50px;
        display: inline-block;
        padding-left: 10px; }
    .payment-content {
        font-size: 18px;
        text-align: center;
        background: #4caf50b8;
        position: relative;
        /*top: -50%;
        left: 50%;
        transform: translate(-50%, 20%);*/ }
    .payment-content-title {
        color: #ffffff;
        width: 100%;
        font-size: 35px;
        text-transform: uppercase;
        font-weight: 900;
        margin-bottom: 20px;
        display: block; }
    .payment-content-text {
        font-weight: 400;
        width: 100%;
        display: block;
        line-height: 1.6; }
    .payment-link {
        text-decoration: none; }
    .payment-link-image {
        width: 45px;
        height: 45px; }
    .payment-method-selection {
        padding-top: 10px;
        text-align: center; }
    .payment-method:nth-child(1) {
        padding-right: 15px; }
    .payment-method:nth-child(1), .payment-method:nth-child(2) {
        /*font-weight: bold;*/
        width: 150px;
        padding: 10px;
        cursor: pointer;
        display: inline-block;
        border: 2px solid #34abe6;
        border-radius: 10px;
        -webkit-border-radius: 10px; }
    .payment-method:nth-child(1) + .payment-method:nth-child(2) {
        margin-left: 20px; }
    .payment-method:nth-child(1):hover, .payment-method:nth-child(2):hover {
        color: #34abe6;
        background: #d3d3d3; }
    .payment-sandbox {
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px 25px;
        width: 550px;
        border-radius: 10px;
        background: white;
        display: inline-block; }

    .restore-content {
        font-size: 18px;
        text-align: center;
        background: #4caf50;
        position: relative;
        top: -50%;
        left: 50%;
        transform: translate(-50%, 200%); }

    .deface-content {
        font-size: 18px;
        text-align: center;
        background: #ff00008c;
        position: relative;
        top: -50%;
        left: 50%;
        transform: translate(-50%, 200%); }

    .box-shadow {
        -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.29), inset 1px 1px 1px rgba(255, 255, 255, 0.44);
        -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.29), inset 1px 1px 1px rgba(255, 255, 255, 0.44);
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.29), inset 1px 1px 1px rgba(255, 255, 255, 0.44);
        -webkit-transition: all .15s ease;
        -moz-transition: all .15s ease;
        -o-transition: all .15s ease;
        transition: all .15s ease; }

    .separator {
        border-bottom: 2px solid #34abe6; }

    .hidden {
        display: none; }

    .button {
        display: inline-block;
        margin: 5px;
        padding: 0 20px;
        text-align: center;
        text-decoration: none;
        font: bold 13px/24px 'Roboto', sans-serif;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.29), inset 1px 1px 1px rgba(255, 255, 255, 0.44);
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.29), inset 1px 1px 1px rgba(255, 255, 255, 0.44);
        -webkit-transition: all .15s ease;
        -o-transition: all .15s ease;
        transition: all 0.15s ease; }

    .button-lg {
        padding: 5px 35px 5px;
        text-transform: uppercase;
        font: 900 18px/25px "Roboto", sans-serif; }

    .button-outline-primary {
        color: #000;
        border: 2px solid #53b5e5;
        background-color: #fff; }

    .button-outline-primary:disabled {
        color: #d3d3d3;
        background-color: #fff;
        border: 2px solid #d3d3d3; }

    .button-outline-primary:hover {
        color: #fff;
        background-color: #53b5e5; }

    .button-outline-primary:disabled:hover {
        color: #d3d3d3;
        cursor: not-allowed;
        border: 2px solid #d3d3d3; }

    .messageBoard {
        display: none;
        padding: 5px 10px;
        width: 96% !important;
        text-align: justify;
        position: relative;
        left: 0 !important;
        margin-top: 10px;
        line-height: 1.5;
        font-size: 13px; }

    .ev_error {
        color: #ff0000;
        border-left: 3px solid #ff0000;
        background: #f7d7d4; }

    .ev_success {
        color: #4caf50;
        border-left: 3px solid #4caf50;
        background: #70e8c0d4; }

    .ev_info {
        color: #34abe6;
        border-left: 3px solid #53b5e5;
        background: #c3eff9; }

    /*stripe*/
    .StripeElement {
        box-sizing: border-box;
        height: 40px !important;
        padding: 10px 12px !important;
        border: 1px solid transparent;
        border-radius: 4px;
        background-color: white;
        box-shadow: 0 3px 4px 4px #e6ebf1;
        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease; }

    .StripeElement--focus {
        box-shadow: 0 1px 3px 0 #cfd7df; }

    .StripeElement--invalid {
        border-color: #fa755a; }

    .StripeElement--webkit-autofill {
        background-color: #fefde5 !important; }

    .ElementsApp, .SelectField, .SelectField-control {
        color: #32325d;
        font-family: 'Roboto', sans-serif;
        font-size: 16px !important;
        padding: 10px 12px !important;
        height: 39.2px !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; }

    .ElementsApp, .SelectField, .SelectField-control {
        color: #32325d;
        font-family: 'Roboto', sans-serif;
        font-size: 16px !important;
        padding: 10px 12px !important;
        height: 39.2px !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; }

    .ElementsApp, .ElementsApp .SelectListItem {
        color: #32325d;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        padding: 10px 12px !important;
        height: 39.2px !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; }

</style>

<div class="payment zero-aside">
    <img alt="picture" id="background" class="payment-background-image" src="../images/background.jpg">
    <div id="payment-content" class="payment-content box-shadow">
        <h1 id="payment-content-title" class="payment-content-title zero-aside"><!--body title--></h1>
        <span class="payment-content-text" id="payment-content-text zero-aside">
            <span class="payment-sandbox box-shadow">
                <span class="payment-task-preview">
                    <img alt="cart" class="payment-cart" src="../images/cart.svg">
                    <span class="payment-order-list">
                        DOMAIN: <span id="domain-name"><!--domain-name-show-here--></span> <br/>
                        TASK: <span id="task-name"><!--domain-task-show-here--></span>
                    </span>
                    <span class="payment-order-price">
                        Amount: &nbsp;
                        $ <span id="payment-order-price-unit"><!--payment-order-price-unit-show-here--></span> <br/>
                        Fee: &nbsp;
                        $ <span id="payment-order-price-fee"><!--payment-order-price-unit-show-here--></span>
                    </span>
                </span>
                <!--<span class="separator">&lt;!&ndash;separator&ndash;&gt;</span>-->
                <span id="payment-method-selection" class="payment-method-selection">
                    <span id="pay-with-card" class="payment-method active-method">Pay with Card</span>
                    <span id="pay-with-ideal" class="payment-method">Pay with Bank</span>
                </span>
                <span id="messageBoard"><!--messageBoard-area--></span>
                <form id="payment-form" style="display: block">
                    <label>
                        <input type="text" id="client-full-name" style="width:100%;margin-top: 20px;"
                               class="StripeElement StripeElement--empty"
                               placeholder="Your full name" maxlength="20"/>
                    </label>
                    <label>
                        <input type="email" id="client-email-address" style="width:100%;margin-top: 20px;"
                               class="StripeElement StripeElement--empty"
                               placeholder="Your email address" maxlength="30"/>
                    </label>
                    <label>
                        <input type="hidden" id="amount-type" value="normal"/>
                        <input type="number" id="amount-value" style="width:100%;margin-top: 20px;"
                               class="StripeElement StripeElement--empty"
                               placeholder="Set amount" min="1" minlength="1" max="999999.99" maxlength="9"/>
                    </label>
                <div class="" id="card-element" style="margin-top: 20px;">
                    <!-- A Stripe card Element will be inserted here. -->
                </div>
                <div id="ideal-bank-element" class="hidden" style="margin-top: 20px;">
                    <!-- A Stripe iDEAL Element will be inserted here. -->
                </div>
                <div id="card-errors" role="alert"></div>
                <button id="submit" class="button button-lg button-outline-primary" style="margin-top: 20px;width: 75%;">Pay Now</button>
            </form>
            </span>
        </span>
    </div>
</div>
<script>
    document.querySelectorAll(".payment-method").forEach(function (el) {
        el.addEventListener("click", function (evt) {
            let id = evt.target.id;
            if (id === "pay-with-card") {
                showElement("#card-element");
                hideElement("#ideal-bank-element");
                Mishusoft.detectElementById("pay-with-card").classList.add("active-method");
                Mishusoft.detectElementById("pay-with-ideal").classList.remove("active-method");
            }
            else if(id === "pay-with-ideal"){
                hideElement("#card-element");
                showElement("#ideal-bank-element");
                Mishusoft.detectElementById("pay-with-card").classList.remove("active-method");
                Mishusoft.detectElementById("pay-with-ideal").classList.add("active-method");
            }
            else {
                alert('Please one of payment method!!');
            }
        });
    });

</script>