import {captureElement, createElement} from "../../../common/dom";
import {sendRequest} from "../../../common/request";


(function (__url) {
    if (__url.indexOf('ipinfo') !== -1) {
        let interval = setInterval(function () {
            if (captureElement('#ipd-address') !== null || true) {
                clearInterval(interval);
                ['keyup', 'change', 'paste'].forEach(function (__inputEvent) {
                    captureElement('#ipd-address')?.addEventListener(__inputEvent, function () {
                        return retrieveIpInfoPlus();
                    });
                });

                retrieveIpInfoPlus();
            }
        }, 100);
    }
}(window.location.href));


function retrieveIpInfoPlus() {
    captureElement('#ip-info-plus-app-bottom').textContent = 'Loading...';
    captureElement('#ip-info-plus-app-data-table')?.setAttribute('style', 'display:none;');
    let ip = (captureElement('#ipd-address').value !== null || true) ? captureElement('#ipd-address').value : '';

    /*const token = "myToken"
    const ip = "8.8.8.8";
    const asn = "AS7922";
    const ipinfoWrapper = new IPinfoWrapper(token);

    ipinfoWrapper.lookupIp(ip).then((response: IPinfo) => {
        console.log(response.asn); // { asn: 'AS15169', name: 'Google LLC', domain: 'google.com', route: '8.8.8.0/24', type: 'hosting' }
        console.log(response.hostname); // google-public-dns-a.google.com
        console.log(response.city); // Mountain View
    });

    ipinfoWrapper.lookupASN(asn).then((response: ASNResponse) => {
        console.log(response.asn); // AS7922
        console.log(response.name); // Comcast Cable Communications, LLC
        console.log(response.country); // United States
    });*/


    sendRequest({
        method: "GET",
        url: 'https://api.ipdata.co/' + ip + '?api-key=test',
        async: true,
        header: [{name: "Accept", value: "application/json"}]
    }, function (reply: any) {
        const IpDataReply = JSON.parse(reply)
        captureElement('#ip-info-plus-app-data-table').removeAttribute('style');
        captureElement('#ip-info-plus-app-bottom').textContent = 'IP INFORMATION:';
        captureElement('#ipd-address').value = IpDataReply.ip;
        captureElement('#client-ip').textContent = IpDataReply.ip;
        captureElement('#client-visual-location').href = 'https://www.google.com/maps/@' + IpDataReply.latitude + ',' + IpDataReply.longitude + ',19z';
        captureElement('#client-city').textContent = IpDataReply.city;
        captureElement('#client-region').textContent = IpDataReply.region;
        captureElement('#client-country').textContent = IpDataReply.country_name + ' (' + IpDataReply.country_code + ') ';
        let country_flag = createElement([{
            'img': {
                'style': 'width: 10px;height: 8px;',
                'src': IpDataReply.flag,
                'alt': 'FLAG'
            }
        }]);
        captureElement('#client-country').appendChild(country_flag);
        captureElement('#client-continent-name').textContent = IpDataReply.continent_name + ' (' + IpDataReply.continent_code + ')';
        captureElement('#client-post').textContent = IpDataReply.postal;
        captureElement('#client-asn-name').href = 'https://' + IpDataReply.asn.domain;
        captureElement('#client-asn-name').textContent = IpDataReply.asn.name + ' [' + IpDataReply.asn.type + ']';
        let language = '';
        for (let n in IpDataReply.languages) {
            language += IpDataReply.languages[n].name + '[' + IpDataReply.languages[n].native + ']; ';
        }
        captureElement('#client-language').textContent = language;
        captureElement('#client-currency-name').textContent = IpDataReply.currency.name;
        captureElement('#client-currency-code').textContent = IpDataReply.currency.code;
        captureElement('#client-currency-symbol').textContent = IpDataReply.currency.symbol;
        captureElement('#client-time-zone-name').textContent = IpDataReply.time_zone.name;
        captureElement('#client-time-zone-abbr').textContent = IpDataReply.time_zone.abbr;
        captureElement('#client-time-zone-offset').textContent = IpDataReply.time_zone.offset;
        captureElement('#client-time-zone-is-dist').textContent = IpDataReply.time_zone.is_dst;
        captureElement('#client-time-zone-current-time').textContent = IpDataReply.time_zone.current_time;
    });
}
