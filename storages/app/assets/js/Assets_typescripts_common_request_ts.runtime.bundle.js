"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_common_request_ts"],{

/***/ "./Assets/typescripts/common/request.ts":
/*!**********************************************!*\
  !*** ./Assets/typescripts/common/request.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendRequest": () => (/* binding */ sendRequest)
/* harmony export */ });
function sendRequest(options, callback) {
    /*worker.postMessage({
        "command": "sendRequest",
        "options": options,
        "receiver": __appHostedServerRoot
    });

    */
    if (options.method !== null && options.url !== null) {
        /*
        * if (app.runtime.request !== 'pending') {}
        * else { viewMessage('Another request is pending.', 'Your previous request is pending. Please wait until succeeded.', 'error')}
        * */
        try {
            let dataType;
            let request = new XMLHttpRequest();
            request.open(options.method, options.url, options.async);
            if (options.header !== null && typeof options.header == "object") {
                for (let i = 0; i < options.header.length; i++) {
                    request.setRequestHeader(options.header[i].name, options.header[i].value);
                    if (options.header[i].value.indexOf('form') !== -1) {
                        dataType = 'formData';
                    }
                    if (options.header[i].value.indexOf('json') !== -1) {
                        dataType = 'jsonData';
                    }
                }
            }
            if (options.data !== null && typeof options.data == "object") {
                if (dataType === 'jsonData') {
                    request.send(JSON.stringify(options.data));
                }
                if (dataType === 'formData') {
                    let formData = new FormData();
                    Object.keys(options.data).forEach(function (key) {
                        formData.append(key, options.data[key]);
                    });
                    request.send(formData);
                }
            }
            else {
                request.send();
            }
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    if (callback) {
                        callback(this.responseText);
                    }
                    //console.log(this.responseText)
                }
            };
        }
        catch (e) {
            console.error("Fetching error." + e);
        }
    }
    else {
        console.error("Error: METHOD and URL empty.");
    }
    /*window.addEventListener('message',function (event) {
        console.log(event)
    })*/
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX2NvbW1vbl9yZXF1ZXN0X3RzLnJ1bnRpbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFTLFdBQVcsQ0FBQyxPQUFZLEVBQUUsUUFBYztJQUVwRDs7Ozs7O01BTUU7SUFFRixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQ2pEOzs7WUFHSTtRQUVKLElBQUk7WUFFQSxJQUFJLFFBQWEsQ0FBQztZQUNsQixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUU7Z0JBQzlELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDNUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO3dCQUNoRCxRQUFRLEdBQUcsVUFBVSxDQUFDO3FCQUN6QjtvQkFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTt3QkFDaEQsUUFBUSxHQUFHLFVBQVUsQ0FBQztxQkFDekI7aUJBQ0o7YUFDSjtZQUNELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxPQUFPLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtnQkFDMUQsSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO29CQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzlDO2dCQUNELElBQUksUUFBUSxLQUFLLFVBQVUsRUFBRTtvQkFDekIsSUFBSSxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztvQkFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRzt3QkFDM0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxDQUFDLENBQUMsQ0FBQztvQkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMxQjthQUNKO2lCQUNJO2dCQUNELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQjtZQUVELE9BQU8sQ0FBQyxrQkFBa0IsR0FBRztnQkFDekIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtvQkFDOUMsSUFBSSxRQUFRLEVBQUU7d0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7cUJBQzlCO29CQUNELGdDQUFnQztpQkFDbkM7WUFDTCxDQUFDO1NBRUo7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkM7S0FDSjtTQUFNO1FBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0tBQ2pEO0lBQ0Q7O1FBRUk7QUFDUixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTWlzaHVzb2Z0UnVudGltZS8uL0Fzc2V0cy90eXBlc2NyaXB0cy9jb21tb24vcmVxdWVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gc2VuZFJlcXVlc3Qob3B0aW9uczogYW55LCBjYWxsYmFjaz86IGFueSkge1xuXG4gICAgLyp3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBcImNvbW1hbmRcIjogXCJzZW5kUmVxdWVzdFwiLFxuICAgICAgICBcIm9wdGlvbnNcIjogb3B0aW9ucyxcbiAgICAgICAgXCJyZWNlaXZlclwiOiBfX2FwcEhvc3RlZFNlcnZlclJvb3RcbiAgICB9KTtcblxuICAgICovXG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09IG51bGwgJiYgb3B0aW9ucy51cmwgIT09IG51bGwpIHtcbiAgICAgICAgLypcbiAgICAgICAgKiBpZiAoYXBwLnJ1bnRpbWUucmVxdWVzdCAhPT0gJ3BlbmRpbmcnKSB7fVxuICAgICAgICAqIGVsc2UgeyB2aWV3TWVzc2FnZSgnQW5vdGhlciByZXF1ZXN0IGlzIHBlbmRpbmcuJywgJ1lvdXIgcHJldmlvdXMgcmVxdWVzdCBpcyBwZW5kaW5nLiBQbGVhc2Ugd2FpdCB1bnRpbCBzdWNjZWVkZWQuJywgJ2Vycm9yJyl9XG4gICAgICAgICogKi9cblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBsZXQgZGF0YVR5cGU6IGFueTtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCBvcHRpb25zLmFzeW5jKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhlYWRlciAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0aW9ucy5oZWFkZXIgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKG9wdGlvbnMuaGVhZGVyW2ldLm5hbWUsIG9wdGlvbnMuaGVhZGVyW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGVhZGVyW2ldLnZhbHVlLmluZGV4T2YoJ2Zvcm0nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlID0gJ2Zvcm1EYXRhJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5oZWFkZXJbaV0udmFsdWUuaW5kZXhPZignanNvbicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGUgPSAnanNvbkRhdGEnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0aW9ucy5kYXRhID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT09ICdqc29uRGF0YScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuZGF0YSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT09ICdmb3JtRGF0YScpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgb3B0aW9ucy5kYXRhW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKGZvcm1EYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCAmJiB0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5yZXNwb25zZVRleHQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZldGNoaW5nIGVycm9yLlwiKyBlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogTUVUSE9EIGFuZCBVUkwgZW1wdHkuXCIpO1xuICAgIH1cbiAgICAvKndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJyxmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgfSkqL1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9