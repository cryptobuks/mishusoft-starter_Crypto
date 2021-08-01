<div id="paypal-button-container"></div>
<script src="https://www.paypal.com/sdk/js?client-id=AT_-ewobLVbszdoHd8qyQFP8OiStSkqjp03H5RetJlPjFCgH5bEWQppR-FMesNtJOjqOtV3K-FMHRGTr&currency=USD" data-sdk-integration-source="button-factory"></script>
<script>
    paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'white',
            layout: 'vertical',
            label: 'pay',

        },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '10'
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name + '!');
            });
        }
    }).render('#paypal-button-container');
</script>