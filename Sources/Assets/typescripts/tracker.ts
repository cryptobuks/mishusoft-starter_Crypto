import {app} from "./db/app";
import {sendRequest} from "./common/request";
import {Tracker} from "./classes/tracker";

function initDb() {
    if (window.sessionStorage){
        if (window.sessionStorage.getItem('ip') === null){
            sendRequest({
                method: "GET",
                url: app.website.IpInfo,
                async: true,
                header: [{name: "Accept", value: "application/json"}]
            }, function (IpDataReply: any) {
                window.sessionStorage.setItem('ip',JSON.parse(IpDataReply).ip);
            });
        }
    } else {
        console.error('Error:: Your browser does not support session!! Please upgrade or change your browser!!');
    }
}

/*new tracker added*/
initDb();
(new Tracker(window.location.href)).init(function () {
    Tracker.send({
        command: 'saveNavigateData',
        data: {
            username: 'visitor',
            workWebsite: window.location.origin
        }
    });
});
/*new tracker added*/