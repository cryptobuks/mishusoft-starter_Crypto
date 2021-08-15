import('./common/dom').then(function (dom) {
    let captureElement = dom.captureElement;
    ((command: string): void => {
        if (command === 'install') {
            import('./db/app').then(function (db) {
                import('./mishusoft/installer').then(function (t) {
                    new t.MishusoftInstaller(db.appHost, db.app).play();

                })
            });
        }
    })(captureElement('body').id);
});

