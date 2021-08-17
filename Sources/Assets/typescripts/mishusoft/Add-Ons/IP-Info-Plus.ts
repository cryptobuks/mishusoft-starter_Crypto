export class IPInfoPlus {
    constructor() {
    }

    resolve(){
        import('../../common/dom').then(function (dom) {
            let captureElement = dom.captureElement;
            let createElement = dom.createElement;
            captureElement('#ip-info-plus-app-bottom').textContent = 'Loading...';
            captureElement('#ip-info-plus-app-data-table')?.setAttribute('style', 'display:none;');
            let ip = (captureElement('#ipd-address').value !== null || true) ? captureElement('#ipd-address').value : '';
            
            import('../../common/request').then(function (request) {
                request.sendRequest({
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
                    //captureElement('#client-asn-name').href = 'https://' + IpDataReply.asn !== undefined ? IpDataReply.asn.domain : 'NOT FOUND';
                    //captureElement('#client-asn-name').textContent = IpDataReply.asn !== undefined ? IpDataReply.asn.name : 'NOT FOUND' + ' [' + IpDataReply.asn !== undefined ? IpDataReply.asn.type : 'NOT FOUND' + ']';
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
            }).catch(function (err) {
                console.log(err)
            });
        }).catch(function (err) {
            console.log(err)
        })
    }
}