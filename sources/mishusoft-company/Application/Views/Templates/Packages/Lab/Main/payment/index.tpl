<div class="app-payment-sandbox center-box box-shadow-light">
    <div id="payment-center-box" class="center-box" style="position:relative;">
        <input id="app-id-enc" type="hidden"/>
        <img src="{$layoutParams.publicIMG}payment.png" alt="" class="payment-symbol">
        <div id="messagePanel" class="messagePanel"></div>
        <div id="payment-welcome">
            <h1 style="line-height: 4;">Welcome to Payment</h1>
            <button id="start-pay" type="button" class="button button-lg button-outline-primary">Start Pay</button>
        </div>
        <div id="payment-categories" class="flex-group flex-row" style="display:none;">
            <h1 style="line-height: 4;">Choose your payment type</h1>
            <a id="services-payment" class="flex-column flex-column-inside" style="width: 47%;height: 163px;border: 2px solid;border-radius: 10px;" href="javascript:void(0)">
                <img src="{$layoutParams.publicIMG}services.png" alt="Services" width="175" height="135">
            </a>
            <a id="non-services-payment" class="flex-column flex-column-inside" style="width: 47%;height: 163px;border: 2px solid;border-radius: 10px;" href="javascript:void(0)">
                <img src="{$layoutParams.publicIMG}socialogy.png" alt="Non Service" width="125" height="100" style="margin:21px 0 15px 25px;">
            </a>
        </div>
        <form id="payment-appid-email" name="pay-select" style="position:relative;display:none;margin-top: 10px;">
            <table class="table">
                <tbody>
                <tr>
                    <td><label for="app-id">APP ID</label></td>
                    <td>
                        <input type="text" id="app-id" class="input-control" placeholder="App unique id" autocomplete="off"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="email-address">Email</label></td>
                    <td>
                        <input type="email" id="email-address" name="email" class="input-control" placeholder="Email address.."
                               pattern="{literal}[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}${/literal}" autocomplete="off"
                               title="Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a '.'. After the '.' sign, add at least 2 letters from a to z"/>
                    </td>
                </tr>
                <tr>
                    <td><label for="client-plan-type">Type</label></td>
                    <td>
                        <select title="Choose your plan type" id="client-plan-type" class="input-control" autocomplete="off">
                            <option value="">--Select one--</option>
                            <option value="earning">Earning</option>
                            <option value="referrals">Referrals</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label for="client-plan">Plan</label></td>
                    <td>
                        <select title="Choose your plan" id="client-plan" class="input-control" autocomplete="off">
                            <option value="">--Select one--</option>
                            <optgroup label="Earning">
                                <option value="plan01">Plan 01</option>
                                {*<option value="plan02">Plan 02</option>
                                <option value="plan03">Plan 03</option>
                                <option value="plan04">Plan 04</option>*}
                            </optgroup>
                            <optgroup label="Referrals">
                                {*<option value="plan01">Plan 01</option>*}
                                <option value="plan02">Plan 02</option>
                                {*<option value="plan03">Plan 03</option>
                                <option value="plan04">Plan 04</option>*}
                            </optgroup>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button type="submit" id="user-select-done" class="float-right button button-lg button-outline-primary">Next</button>
                        <button type="button" id="user-select-back" class="float-right button button-lg button-outline-danger">Back</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
        {*<form name="pay-select" id="payment-final" style="position:relative;display:none;margin-top: 10px;">
            <div style="text-align: left">
                Client : <span id="client-name"></span> <br/>
                App : <span id="app-name"></span> <br/>
            </div>
            <table class="table">
                <tbody>
                <tr style="line-height: 3;height: 60px;">
                    <td><label for="payment-amount" style="width: 100px;display: block;">Amount</label></td>
                    <td><input type="number" id="payment-amount" style="width: 150px;display: block;"
                               class="input-control" placeholder="$0" minlength="0" value="" autocomplete="off"/></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button type="button" id="pay-select-done" class="float-right button button-lg button-outline-primary">Next</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>*}
    </div>
</div>