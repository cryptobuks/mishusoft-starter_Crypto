"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_mishusoft_Add-Ons_IP-Info-Plus_ts"],{

/***/ "./Assets/typescripts/mishusoft/Add-Ons/IP-Info-Plus.ts":
/*!**************************************************************!*\
  !*** ./Assets/typescripts/mishusoft/Add-Ons/IP-Info-Plus.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IPInfoPlus": () => (/* binding */ IPInfoPlus)
/* harmony export */ });
class IPInfoPlus {
    constructor() {
    }
    resolve() {
        __webpack_require__.e(/*! import() */ "Assets_typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../common/dom */ "./Assets/typescripts/common/dom.ts")).then(function (dom) {
            let captureElement = dom.captureElement;
            let createElement = dom.createElement;
            captureElement('#ip-info-plus-app-bottom').textContent = 'Loading...';
            captureElement('#ip-info-plus-app-data-table')?.setAttribute('style', 'display:none;');
            let ip = (captureElement('#ipd-address').value !== null || true) ? captureElement('#ipd-address').value : '';
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../common/request */ "./Assets/typescripts/common/request.ts")).then(function (request) {
                request.sendRequest({
                    method: "GET",
                    url: 'https://api.ipdata.co/' + ip + '?api-key=test',
                    async: true,
                    header: [{ name: "Accept", value: "application/json" }]
                }, function (reply) {
                    const IpDataReply = JSON.parse(reply);
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
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX21pc2h1c29mdF9BZGQtT25zX0lQLUluZm8tUGx1c190cy5ydW50aW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxVQUFVO0lBQ25CO0lBQ0EsQ0FBQztJQUVELE9BQU87UUFDSCwyTEFBMEIsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ3pDLElBQUksY0FBYyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUM7WUFDeEMsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztZQUN0QyxjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO1lBQ3RFLGNBQWMsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDdkYsSUFBSSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRTdHLDBKQUE4QixDQUFDLElBQUksQ0FBQyxVQUFVLE9BQU87Z0JBQ2pELE9BQU8sQ0FBQyxXQUFXLENBQUM7b0JBQ2hCLE1BQU0sRUFBRSxLQUFLO29CQUNiLEdBQUcsRUFBRSx3QkFBd0IsR0FBRyxFQUFFLEdBQUcsZUFBZTtvQkFDcEQsS0FBSyxFQUFFLElBQUk7b0JBQ1gsTUFBTSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBQyxDQUFDO2lCQUN4RCxFQUFFLFVBQVUsS0FBVTtvQkFDbkIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQ3JDLGNBQWMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFP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LENBQUM7Z0JBQ3RHLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL01pc2h1c29mdFJ1bnRpbWUvLi9Bc3NldHMvdHlwZXNjcmlwdHMvbWlzaHVzb2Z0L0FkZC1PbnMvSVAtSW5mby1QbHVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJUEluZm9QbHVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICByZXNvbHZlKCl7XG4gICAgICAgIGltcG9ydCgnLi4vLi4vY29tbW9uL2RvbScpLnRoZW4oZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICAgICAgbGV0IGNhcHR1cmVFbGVtZW50ID0gZG9tLmNhcHR1cmVFbGVtZW50O1xuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcbiAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjaXAtaW5mby1wbHVzLWFwcC1ib3R0b20nKS50ZXh0Q29udGVudCA9ICdMb2FkaW5nLi4uJztcbiAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjaXAtaW5mby1wbHVzLWFwcC1kYXRhLXRhYmxlJyk/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpO1xuICAgICAgICAgICAgbGV0IGlwID0gKGNhcHR1cmVFbGVtZW50KCcjaXBkLWFkZHJlc3MnKS52YWx1ZSAhPT0gbnVsbCB8fCB0cnVlKSA/IGNhcHR1cmVFbGVtZW50KCcjaXBkLWFkZHJlc3MnKS52YWx1ZSA6ICcnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uL2NvbW1vbi9yZXF1ZXN0JykudGhlbihmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZFJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmlwZGF0YS5jby8nICsgaXAgKyAnP2FwaS1rZXk9dGVzdCcsXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFt7bmFtZTogXCJBY2NlcHRcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwifV1cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVwbHk6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBJcERhdGFSZXBseSA9IEpTT04ucGFyc2UocmVwbHkpXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjaXAtaW5mby1wbHVzLWFwcC1kYXRhLXRhYmxlJykucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2lwLWluZm8tcGx1cy1hcHAtYm90dG9tJykudGV4dENvbnRlbnQgPSAnSVAgSU5GT1JNQVRJT046JztcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNpcGQtYWRkcmVzcycpLnZhbHVlID0gSXBEYXRhUmVwbHkuaXA7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LWlwJykudGV4dENvbnRlbnQgPSBJcERhdGFSZXBseS5pcDtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtdmlzdWFsLWxvY2F0aW9uJykuaHJlZiA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvQCcgKyBJcERhdGFSZXBseS5sYXRpdHVkZSArICcsJyArIElwRGF0YVJlcGx5LmxvbmdpdHVkZSArICcsMTl6JztcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtY2l0eScpLnRleHRDb250ZW50ID0gSXBEYXRhUmVwbHkuY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtcmVnaW9uJykudGV4dENvbnRlbnQgPSBJcERhdGFSZXBseS5yZWdpb247XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LWNvdW50cnknKS50ZXh0Q29udGVudCA9IElwRGF0YVJlcGx5LmNvdW50cnlfbmFtZSArICcgKCcgKyBJcERhdGFSZXBseS5jb3VudHJ5X2NvZGUgKyAnKSAnO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY291bnRyeV9mbGFnID0gY3JlYXRlRWxlbWVudChbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2ltZyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3R5bGUnOiAnd2lkdGg6IDEwcHg7aGVpZ2h0OiA4cHg7JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogSXBEYXRhUmVwbHkuZmxhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJ0ZMQUcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtY291bnRyeScpLmFwcGVuZENoaWxkKGNvdW50cnlfZmxhZyk7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LWNvbnRpbmVudC1uYW1lJykudGV4dENvbnRlbnQgPSBJcERhdGFSZXBseS5jb250aW5lbnRfbmFtZSArICcgKCcgKyBJcERhdGFSZXBseS5jb250aW5lbnRfY29kZSArICcpJztcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtcG9zdCcpLnRleHRDb250ZW50ID0gSXBEYXRhUmVwbHkucG9zdGFsO1xuICAgICAgICAgICAgICAgICAgICAvL2NhcHR1cmVFbGVtZW50KCcjY2xpZW50LWFzbi1uYW1lJykuaHJlZiA9ICdodHRwczovLycgKyBJcERhdGFSZXBseS5hc24gIT09IHVuZGVmaW5lZCA/IElwRGF0YVJlcGx5LmFzbi5kb21haW4gOiAnTk9UIEZPVU5EJztcbiAgICAgICAgICAgICAgICAgICAgLy9jYXB0dXJlRWxlbWVudCgnI2NsaWVudC1hc24tbmFtZScpLnRleHRDb250ZW50ID0gSXBEYXRhUmVwbHkuYXNuICE9PSB1bmRlZmluZWQgPyBJcERhdGFSZXBseS5hc24ubmFtZSA6ICdOT1QgRk9VTkQnICsgJyBbJyArIElwRGF0YVJlcGx5LmFzbiAhPT0gdW5kZWZpbmVkID8gSXBEYXRhUmVwbHkuYXNuLnR5cGUgOiAnTk9UIEZPVU5EJyArICddJztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhbmd1YWdlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG4gaW4gSXBEYXRhUmVwbHkubGFuZ3VhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSArPSBJcERhdGFSZXBseS5sYW5ndWFnZXNbbl0ubmFtZSArICdbJyArIElwRGF0YVJlcGx5Lmxhbmd1YWdlc1tuXS5uYXRpdmUgKyAnXTsgJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2NsaWVudC1sYW5ndWFnZScpLnRleHRDb250ZW50ID0gbGFuZ3VhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LWN1cnJlbmN5LW5hbWUnKS50ZXh0Q29udGVudCA9IElwRGF0YVJlcGx5LmN1cnJlbmN5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LWN1cnJlbmN5LWNvZGUnKS50ZXh0Q29udGVudCA9IElwRGF0YVJlcGx5LmN1cnJlbmN5LmNvZGU7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LWN1cnJlbmN5LXN5bWJvbCcpLnRleHRDb250ZW50ID0gSXBEYXRhUmVwbHkuY3VycmVuY3kuc3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2NsaWVudC10aW1lLXpvbmUtbmFtZScpLnRleHRDb250ZW50ID0gSXBEYXRhUmVwbHkudGltZV96b25lLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXRpbWUtem9uZS1hYmJyJykudGV4dENvbnRlbnQgPSBJcERhdGFSZXBseS50aW1lX3pvbmUuYWJicjtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtdGltZS16b25lLW9mZnNldCcpLnRleHRDb250ZW50ID0gSXBEYXRhUmVwbHkudGltZV96b25lLm9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtdGltZS16b25lLWlzLWRpc3QnKS50ZXh0Q29udGVudCA9IElwRGF0YVJlcGx5LnRpbWVfem9uZS5pc19kc3Q7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXRpbWUtem9uZS1jdXJyZW50LXRpbWUnKS50ZXh0Q29udGVudCA9IElwRGF0YVJlcGx5LnRpbWVfem9uZS5jdXJyZW50X3RpbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9