<div class="app-payment-sandbox center-box box-shadow-light">
    <div id="payment-center-box" class="center-box" style="position:relative;">
        <input id="app-id-enc" type="hidden" value="{$appId}"/>
        <input id="client-email" type="hidden" value="{$clientEmailAddress}"/>
        <input id="order-description" type="hidden"
               value="{if isset($planType) && !empty($planType)}{ucfirst($planType)}&nbsp;{if $plan === 'Plan 04'}&nbsp;Daily unlimited package{/if}{if $plan === 'Plan 05'}&nbsp;total 40{/if}{/if}&nbsp;for&nbsp;{$appNameVersion}"/>
        <i class="far fa-money-bill-alt payment-symbol" style="margin-bottom: 10px;"></i>
        <div class="pre-order-card box-shadow-light">
            <div class="poc-symbol"><i class="fas fa-shopping-cart"></i></div>
            <div class="poc-body">
                Client&emsp;:&emsp;{$clientFullName} <br/>
                E-mail&ensp;&nbsp;:&emsp;{$clientEmailAddress} <br/>
                App&emsp;&ensp;&nbsp;:&emsp;{$appNameVersion} <br/>
                {if isset($planType) && !empty($planType)}
                    Order&emsp;:&emsp;{ucfirst($planType)}&nbsp;
                    {if $plan === 'Plan 04'}Daily unlimited package{/if}
                    {if $plan === 'Plan 05'}total 40{/if}
                    <br/>
                {/if}
            </div>
            <div class="poc-body-price">
                {if isset($amountNumber) && !empty($amountNumber) && $amountNumber !== 0}
                    Price
                    <br/>
                    <span class="absolute-price">$ {$amountNumber}.00</span>
                    <br/>
                {/if}
            </div>
        </div>
        <div class="pay-option clear-margin clear-padding">
            <div class="pay-option-item active-method" id="pay-with-card"><i class="fas fa-credit-card"></i>&nbsp;&nbsp;Card</div>
            <div class="pay-option-item" id="pay-with-ideal"><i class="fab fa-ideal"></i>&nbsp;&nbsp;iDeal</div>
            <div class="pay-option-item" id="pay-with-sofort"><i class="fab fa-ideal"></i>&nbsp;&nbsp;SOFORT</div>
        </div>
        <div id="payment-submission">
            {if isset($redirect_status) && !empty($redirect_status)}
                {if $redirect_status === 'succeeded'}
                    <div class="messageBoard ev_success clear-margin" style="display: block;"> Your payment completed.</div>
                {else}
                    <div class="messageBoard ev_error clear-margin" style="display: block;"> {$redirect_status}.</div>
                {/if}
            {else}
                <div class="messageBoard ev_info clear-margin" style="display: block;">Notice: If you fail to pay, please try again.</div>
            {/if}
            <div id="messageBoard" class="messageBoard"></div>
            <form id="payment-form" style="display: block">
                {if isset($amount) && !empty($amount)}
                    <label>
                        <input type="hidden" id="amount-type" value="encrypted"/>
                        <input type="number" id="amount-value" style="width:100%;margin-top: 20px;"
                               class="StripeElement StripeElement--empty"
                               data-value="{$amount}" placeholder="{$amountNumber}" disabled="disabled"/>
                    </label>
                {else}
                    <label>
                        <input type="hidden" id="amount-type" value="normal"/>
                        <input type="number" id="amount-value" style="width:100%;margin-top: 20px;"
                               class="StripeElement StripeElement--empty"
                               placeholder="Set amount" min="1" minlength="1" max="999999.99" maxlength="9"/>
                    </label>
                {/if}
                <div class="" id="card-element" style="margin-top: 20px;">
                    <!-- A Stripe card Element will be inserted here. -->
                </div>
                <div id="ideal-bank-element" class="hidden" style="margin-top: 20px;">
                    <!-- A Stripe iDEAL Element will be inserted here. -->
                </div>
                <div id="sofort-bank-element" class="hidden" style="margin-top: 20px;">
                    <select title="Please select one!!" id="sofort-countries" class="StripeElement StripeElement--empty ">
                        <option value="AT">Austria</option>
                        <option value="BE">Belgium</option>
                        <option value="DE">Germany</option>
                        <option value="IT">Italy</option>
                        <option value="NL">Netherlands</option>
                        <option value="ES">Spain</option>
                    </select>
                </div>
                <div id="card-errors" role="alert"></div>
                <button id="submit" class="button button-lg button-outline-primary" style="margin-top: 20px;width: 75%;">Pay Now</button>
            </form>
        </div>
    </div>
</div>