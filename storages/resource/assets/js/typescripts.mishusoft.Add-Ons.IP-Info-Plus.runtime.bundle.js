(self["webpackChunk"] = self["webpackChunk"] || []).push([["typescripts_mishusoft_Add-Ons_IP-Info-Plus_ts"],{

/***/ "./typescripts/mishusoft/Add-Ons/IP-Info-Plus.ts":
/*!*******************************************************!*\
  !*** ./typescripts/mishusoft/Add-Ons/IP-Info-Plus.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IPInfoPlus": function() { return /* binding */ IPInfoPlus; }
/* harmony export */ });
var IPInfoPlus = /** @class */ (function () {
    function IPInfoPlus() {
    }
    IPInfoPlus.prototype.resolve = function () {
        __webpack_require__.e(/*! import() */ "typescripts_common_dom_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../common/dom */ "./typescripts/common/dom.ts")).then(function (dom) {
            var _a;
            var captureElement = dom.captureElement;
            var createElement = dom.createElement;
            captureElement('#ip-info-plus-app-bottom').textContent = 'Loading...';
            (_a = captureElement('#ip-info-plus-app-data-table')) === null || _a === void 0 ? void 0 : _a.setAttribute('style', 'display:none;');
            var ip = (captureElement('#ipd-address').value !== null || true) ? captureElement('#ipd-address').value : 0;
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../common/request */ "./typescripts/common/request.ts")).then(function (request) {
                request.sendRequest({
                    method: "GET",
                    url: 'https://api.ipdata.co/' + ip + '?api-key=test',
                    async: true,
                    header: [{ name: "Accept", value: "application/json" }]
                }, function (reply) {
                    var IpDataReply = JSON.parse(reply);
                    captureElement('#ip-info-plus-app-data-table').removeAttribute('style');
                    captureElement('#ip-info-plus-app-bottom').textContent = 'IP INFORMATION:';
                    captureElement('#ipd-address').value = IpDataReply.ip;
                    captureElement('#client-ip').textContent = IpDataReply.ip;
                    captureElement('#client-visual-location').href = 'https://www.google.com/maps/@' + IpDataReply.latitude + ',' + IpDataReply.longitude + ',19z';
                    captureElement('#client-city').textContent = IpDataReply.city;
                    captureElement('#client-region').textContent = IpDataReply.region;
                    captureElement('#client-country').textContent = IpDataReply.country_name + ' (' + IpDataReply.country_code + ') ';
                    var country_flag = createElement([{
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
                    var language = '';
                    for (var n in IpDataReply.languages) {
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
    };
    return IPInfoPlus;
}());



/***/ })

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdHlwZXNjcmlwdHMubWlzaHVzb2Z0LkFkZC1PbnMuSVAtSW5mby1QbHVzLnJ1bnRpbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0lBQ0k7SUFDQSxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLDZLQUEwQixDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7O1lBQ3pDLElBQUksY0FBYyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUM7WUFDeEMsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztZQUN0QyxjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO1lBQ3RFLG9CQUFjLENBQUMsOEJBQThCLENBQUMsMENBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUN2RixJQUFJLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFFN0csbUpBQThCLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztnQkFDakQsT0FBTyxDQUFDLFdBQVcsQ0FBQztvQkFDaEIsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsR0FBRyxFQUFFLHdCQUF3QixHQUFHLEVBQUUsR0FBRyxlQUFlO29CQUNwRCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxNQUFNLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFDLENBQUM7aUJBQ3hELEVBQUUsVUFBVSxLQUFVO29CQUNuQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztvQkFDckMsY0FBYyxDQUFDLDhCQUE4QixDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29C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Q0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3R5cGVzY3JpcHRzL21pc2h1c29mdC9BZGQtT25zL0lQLUluZm8tUGx1cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSVBJbmZvUGx1cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlKCl7XHJcbiAgICAgICAgaW1wb3J0KCcuLi8uLi9jb21tb24vZG9tJykudGhlbihmdW5jdGlvbiAoZG9tKSB7XHJcbiAgICAgICAgICAgIGxldCBjYXB0dXJlRWxlbWVudCA9IGRvbS5jYXB0dXJlRWxlbWVudDtcclxuICAgICAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudDtcclxuICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNpcC1pbmZvLXBsdXMtYXBwLWJvdHRvbScpLnRleHRDb250ZW50ID0gJ0xvYWRpbmcuLi4nO1xyXG4gICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2lwLWluZm8tcGx1cy1hcHAtZGF0YS10YWJsZScpPy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKTtcclxuICAgICAgICAgICAgbGV0IGlwID0gKGNhcHR1cmVFbGVtZW50KCcjaXBkLWFkZHJlc3MnKS52YWx1ZSAhPT0gbnVsbCB8fCB0cnVlKSA/IGNhcHR1cmVFbGVtZW50KCcjaXBkLWFkZHJlc3MnKS52YWx1ZSA6ICcnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW1wb3J0KCcuLi8uLi9jb21tb24vcmVxdWVzdCcpLnRoZW4oZnVuY3Rpb24gKHJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5pcGRhdGEuY28vJyArIGlwICsgJz9hcGkta2V5PXRlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogW3tuYW1lOiBcIkFjY2VwdFwiLCB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XVxyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlcGx5OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBJcERhdGFSZXBseSA9IEpTT04ucGFyc2UocmVwbHkpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNpcC1pbmZvLXBsdXMtYXBwLWRhdGEtdGFibGUnKS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNpcC1pbmZvLXBsdXMtYXBwLWJvdHRvbScpLnRleHRDb250ZW50ID0gJ0lQIElORk9STUFUSU9OOic7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNpcGQtYWRkcmVzcycpLnZhbHVlID0gSXBEYXRhUmVwbHkuaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtaXAnKS50ZXh0Q29udGVudCA9IElwRGF0YVJlcGx5LmlwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXZpc3VhbC1sb2NhdGlvbicpLmhyZWYgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL0AnICsgSXBEYXRhUmVwbHkubGF0aXR1ZGUgKyAnLCcgKyBJcERhdGFSZXBseS5sb25naXR1ZGUgKyAnLDE5eic7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtY2l0eScpLnRleHRDb250ZW50ID0gSXBEYXRhUmVwbHkuY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2NsaWVudC1yZWdpb24nKS50ZXh0Q29udGVudCA9IElwRGF0YVJlcGx5LnJlZ2lvbjtcclxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2NsaWVudC1jb3VudHJ5JykudGV4dENvbnRlbnQgPSBJcERhdGFSZXBseS5jb3VudHJ5X25hbWUgKyAnICgnICsgSXBEYXRhUmVwbHkuY291bnRyeV9jb2RlICsgJykgJztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY291bnRyeV9mbGFnID0gY3JlYXRlRWxlbWVudChbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaW1nJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0eWxlJzogJ3dpZHRoOiAxMHB4O2hlaWdodDogOHB4OycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogSXBEYXRhUmVwbHkuZmxhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnRkxBRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2NsaWVudC1jb3VudHJ5JykuYXBwZW5kQ2hpbGQoY291bnRyeV9mbGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2NsaWVudC1jb250aW5lbnQtbmFtZScpLnRleHRDb250ZW50ID0gSXBEYXRhUmVwbHkuY29udGluZW50X25hbWUgKyAnICgnICsgSXBEYXRhUmVwbHkuY29udGluZW50X2NvZGUgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtcG9zdCcpLnRleHRDb250ZW50ID0gSXBEYXRhUmVwbHkucG9zdGFsO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtYXNuLW5hbWUnKS5ocmVmID0gJ2h0dHBzOi8vJyArIElwRGF0YVJlcGx5LmFzbiAhPT0gdW5kZWZpbmVkID8gSXBEYXRhUmVwbHkuYXNuLmRvbWFpbiA6ICdOT1QgRk9VTkQnO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtYXNuLW5hbWUnKS50ZXh0Q29udGVudCA9IElwRGF0YVJlcGx5LmFzbiAhPT0gdW5kZWZpbmVkID8gSXBEYXRhUmVwbHkuYXNuLm5hbWUgOiAnTk9UIEZPVU5EJyArICcgWycgKyBJcERhdGFSZXBseS5hc24gIT09IHVuZGVmaW5lZCA/IElwRGF0YVJlcGx5LmFzbi50eXBlIDogJ05PVCBGT1VORCcgKyAnXSc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhbmd1YWdlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbiBpbiBJcERhdGFSZXBseS5sYW5ndWFnZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgKz0gSXBEYXRhUmVwbHkubGFuZ3VhZ2VzW25dLm5hbWUgKyAnWycgKyBJcERhdGFSZXBseS5sYW5ndWFnZXNbbl0ubmF0aXZlICsgJ107ICc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LWxhbmd1YWdlJykudGV4dENvbnRlbnQgPSBsYW5ndWFnZTtcclxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2NsaWVudC1jdXJyZW5jeS1uYW1lJykudGV4dENvbnRlbnQgPSBJcERhdGFSZXBseS5jdXJyZW5jeS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LWN1cnJlbmN5LWNvZGUnKS50ZXh0Q29udGVudCA9IElwRGF0YVJlcGx5LmN1cnJlbmN5LmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtY3VycmVuY3ktc3ltYm9sJykudGV4dENvbnRlbnQgPSBJcERhdGFSZXBseS5jdXJyZW5jeS5zeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUVsZW1lbnQoJyNjbGllbnQtdGltZS16b25lLW5hbWUnKS50ZXh0Q29udGVudCA9IElwRGF0YVJlcGx5LnRpbWVfem9uZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXRpbWUtem9uZS1hYmJyJykudGV4dENvbnRlbnQgPSBJcERhdGFSZXBseS50aW1lX3pvbmUuYWJicjtcclxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRWxlbWVudCgnI2NsaWVudC10aW1lLXpvbmUtb2Zmc2V0JykudGV4dENvbnRlbnQgPSBJcERhdGFSZXBseS50aW1lX3pvbmUub2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXRpbWUtem9uZS1pcy1kaXN0JykudGV4dENvbnRlbnQgPSBJcERhdGFSZXBseS50aW1lX3pvbmUuaXNfZHN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFbGVtZW50KCcjY2xpZW50LXRpbWUtem9uZS1jdXJyZW50LXRpbWUnKS50ZXh0Q29udGVudCA9IElwRGF0YVJlcGx5LnRpbWVfem9uZS5jdXJyZW50X3RpbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9