<div class="error-page">
    <div class="error-page-icon">
        <i class="symbol fas fa-times-circle"></i>
    </div>
    <div class="error-page-title">
        <h1>Browser error</h1>
    </div>
    <div class="error-page-body">
        <p>
            Your browser does not support some of the latest content. As a result, it is not possible to display any
            data on our page.
            <br/>
            If you are interested in viewing the data on our page, you can use the latest browser, or upgrade the
            browser.
            <br/>
            Thank you very much for your patience.
            <br/><br/>
            <a href="{$layoutParams.root}" target="_self">Click here to return to the home page.</a>
        </p>
    </div>
</div>


<script>
    window.onmessage = function (event) {
        console.log(event);
        console.log('Received :: ' + event.data);
        event.source.postMessage('Hi transmitter', event.origin);
    };
    console.log(window.location.href);
</script>