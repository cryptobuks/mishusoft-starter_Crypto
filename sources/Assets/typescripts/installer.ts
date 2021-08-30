import('./common/dom').then(function (dom) {
    let captureElement = dom.captureElement;
    ((command: string): void => {
        if (command === 'install') {
            import('./db/app').then(function (db) {
                import('./mishusoft/Installer').then(function (t) {
                    new t.MishusoftInstaller(db.appHost, db.app).play();

                }).catch(function (err) {
                    console.log(err)
                })
            }).catch(function (err) {
                console.log(err)
            });
        }
    })(captureElement('body').id);
}).catch(function (err) {
    console.log(err)
});