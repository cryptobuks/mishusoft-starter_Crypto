import { app } from "@/resources/typescripts/db/app";
import { sendRequest } from "@/resources/typescripts/common/request";
import { Browser } from "@/resources/typescripts/mishusoft/browser";
import { Tracker } from "@/resources/typescripts/mishusoft/Tracker";

import("./db/app")
    .then(function (db) {
        function initDb() {
            if (window.sessionStorage) {
                if (window.sessionStorage.getItem("ip") === null) {
                    sendRequest(
                        {
                            method: "GET",
                            url: db.app.website.ipInfoDedicated,
                            async: true,
                            header: [{ name: "Accept", value: "application/json" }],
                        },
                        function (IpDataReply: any) {
                            window.sessionStorage.setItem("ip", JSON.parse(IpDataReply).ip);
                        }
                    );
                }
            } else {
                console.error("Error:: Your browser does not support session!! Please upgrade or change your browser!!");
            }
        }

        /*new tracker added*/
        initDb();
        const appVersion = db.app.default.version;
        const appTracker = db.app.default.name + "@" + appVersion;

        import("./mishusoft/browser")
            .then(function (module) {
                const browser = new module.Browser();
                const osNameArch = browser.getPlatformName() + " " + browser.getPlatformArchitecture();
                const browserFullName = browser.getBrowserNameFull();

                import("./mishusoft/Tracker")
                    .then(function (t) {
                        new t.Tracker(window.location.href, appTracker, appVersion, osNameArch, browserFullName).init(function () {
                            t.Tracker.send({
                                command: "saveNavigateData",
                                data: {
                                    username: "visitor",
                                    workWebsite: window.location.origin,
                                },
                            });
                        });
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            })
            .catch(function (err) {
                console.log(err);
            });
        /*new tracker added*/
    })
    .catch(function (err) {
        console.log(err);
    });

/*new tracker added*/
function initDb() {
    if (window.sessionStorage) {
        if (window.sessionStorage.getItem("ip") === null) {
            sendRequest(
                {
                    method: "GET",
                    url: app.website.ipInfoDedicated,
                    async: true,
                    header: [{ name: "Accept", value: "application/json" }],
                },
                function (IpDataReply: any) {
                    window.sessionStorage.setItem("ip", JSON.parse(IpDataReply).ip);
                }
            );
        }
    } else {
        console.error("Error:: Your browser does not support session!! Please upgrade or change your browser!!");
    }
}

initDb();
const appVersion = app.default.version;
const appTracker = app.default.name + "@" + appVersion;

const browser = new Browser();
const osNameArch = browser.getPlatformName() + " " + browser.getPlatformArchitecture();
const browserFullName = browser.getBrowserNameFull();

new Tracker(window.location.href, appTracker, appVersion, osNameArch, browserFullName).init(function () {
    Tracker.send({
        command: "saveNavigateData",
        data: {
            username: "visitor",
            workWebsite: window.location.origin,
        },
    });
});

/*new tracker added*/
