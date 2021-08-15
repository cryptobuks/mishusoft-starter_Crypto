document.addEventListener('readystatechange', () => {
    //console.log(`readystate: ${document.readyState}\n`)

    //hide app loader on document completed
    //while (document.readyState === 'interactive') {
    /*add required script tag to head*/
    /*font-fontawesome private cdn*/
    // fetch(app.website.fontAwesome)
    //     .then(() => {
    //         document.head.appendChild(createElement([{
    //             'script': {
    //                 'rel': 'preconnect',
    //                 'type': 'application/javascript',
    //                 'src': app.website.fontAwesome,
    //                 'crossorigin': 'anonymous',
    //                 'async': 'async',
    //             }
    //         }]));
    //     })
    //     .catch((err) => {
    //         console.info('Fontawesome kit load failed. ' + err)
    //     })
    //}

    if (document.readyState === 'interactive') {
        //console.info(document.body.getAttribute('theme'));
        //console.log('Preparing css load...')

    }


    //hide app loader on document completed
    if (document.readyState === 'complete') {
        //initialize app loader image & application
        import('./common/dom').then(function (t) {
            let captureElement = t.captureElement;
            if (captureElement('#app-loader')) {
                captureElement('#app-loader').setAttribute('style', 'display:none;');
            }

        })
    }
});

//service worker manager
import('./db/app').then(function (db) {
    let publicJsUrl = db.app.content.folder.js;
    if (window.Worker) {
        import('./worker-response').then(function (t) {
            let webWorker = new t.WorkerResponse(publicJsUrl);
            webWorker.registerMe();
            //Variable, Constants declaration
            const webServiceWorker = new Worker(new URL(publicJsUrl+'./sw.js', import.meta.url));
            webServiceWorker.postMessage({
                question:
                    'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
            });
            webServiceWorker.onmessage = ({data: {answer}}) => {
                console.log(answer);
            };

        })
    }
});
