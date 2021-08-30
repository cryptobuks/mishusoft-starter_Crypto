import('./db/app').then(function (db) {
    function initDb() {
        if (window.sessionStorage){
            if (window.sessionStorage.getItem('ip') === null){
                import('./common/request').then(function (t) {
                    t.sendRequest({
                        method: "GET",
                        url: db.app.website.IpInfo,
                        async: true,
                        header: [{name: "Accept", value: "application/json"}]
                    }, function (IpDataReply: any) {
                        window.sessionStorage.setItem('ip',JSON.parse(IpDataReply).ip);
                    });
                }).catch(function (err) {
                    console.log(err)
                });
            }
        } else {
            console.error('Error:: Your browser does not support session!! Please upgrade or change your browser!!');
        }
    }

    /*new tracker added*/
    initDb();
    const appVersion = db.app.default.version;
    const appTracker = db.app.default.name + '@' + appVersion;

    import('./mishusoft/browser').then(function (module) {
        const browser = new module.Browser();
        const osNameArch = browser.getPlatformName() + ' ' + browser.getPlatformArchitecture();
        const browserFullName = browser.getBrowserNameFull();

        import('./mishusoft/Tracker').then(function (t) {
            (new t.Tracker(window.location.href, appTracker, appVersion, osNameArch, browserFullName)).init(function () {
                t.Tracker.send({
                    command: 'saveNavigateData',
                    data: {
                        username: 'visitor',
                        workWebsite: window.location.origin
                    }
                });
            });
        }).catch(function (err) {
            console.log(err)
        });
    }).catch(function (err) {
        console.log(err)
    });
    /*new tracker added*/
}).catch(function (err) {
    console.log(err)
});