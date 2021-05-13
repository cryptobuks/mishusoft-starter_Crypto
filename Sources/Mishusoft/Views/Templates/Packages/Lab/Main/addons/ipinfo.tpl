<div class="row col-lg-12 col-md-12">
    <article>
        <div id="ip-data-view" class="ip-data-view">
            <div id="ip-info-plus-app" class="ip-info-plus-app">
                <div class="ip-info-plus-app-title">IP INFO PLUS</div>
                <hr class="ip-info-plus-app-hr"/>
                <div class="ip-info-plus-app-body">
                    <div class="ip-info-plus-app-search-body">
                        <input id="ipd-address" type="text" class="input-box-bottom-border-only" title="IP address"  value="{if isset($ip_address)}{$ip_address}{/if}"
                               placeholder="IP Address" style="height: 35px;"/>
                    </div>
                </div>
                <hr class="ip-info-plus-app-hr"/>
                <div id="ip-info-plus-app-bottom" class="ip-info-plus-app-bottom">IP INFORMATION:</div>
                <div id="ip-info-plus-app-data-table" class="ip-info-plus-app-data-table">
                    <table class="table table-condensed table-bordered">
                        <tbody>
                        <tr>
                            <td style="width: 30px;">IP&nbsp;:&nbsp;</td><td colspan="2" id="client-ip">&nbsp;</td>
                            <td> <a id="client-visual-location" href="#"><img id="map-pin-marker-circle" src="{$layoutParams.publicIMG}map-pin-marker-circle.svg" alt="MAP" style="width: 20px;height: 20px;" title="Click to visit location">&nbsp;IN MAP</a></td></tr>
                        <tr><td>City&nbsp;:&nbsp;</td><td id="client-city">&nbsp;</td><td>Region : </td><td id="client-region">&nbsp;</td></tr>
                        <tr><td>Country&nbsp;:&nbsp;</td><td id="client-country" colspan="3">&nbsp; </td></tr>
                        <tr><td>Continent</td><td id="client-continent-name">&nbsp;</td><td>Postal : </td><td id="client-post">&nbsp;</td></tr>
                        <tr><td>Provider : </td><td colspan="3"><a id="client-asn-name" href="#">&nbsp;</a></td></tr>
                        <tr><td>LANG : </td><td colspan="3" id="client-language">&nbsp;</td></tr>
                        <tr><td colspan="4">Currency : </td></tr>
                        <tr><td>Name</td><td colspan="3" id="client-currency-name">&nbsp;</td></tr>
                        <tr><td>Code</td><td id="client-currency-code">&nbsp;</td><td>Symbol</td><td id="client-currency-symbol">&nbsp;</td></tr>
                        <tr><td colspan="4">Time Zone : </td></tr>
                        <tr><td>Name</td><td id="client-time-zone-name">&nbsp;</td><td>ABBR</td><td id="client-time-zone-abbr">&nbsp;</td></tr>
                        <tr><td>Offset</td><td id="client-time-zone-offset">&nbsp;</td><td>IS DST</td><td id="client-time-zone-is-dist">&nbsp;</td></tr>
                        <tr><td>NOW : </td><td id="client-time-zone-current-time" colspan="3">&nbsp;</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </article>
</div>