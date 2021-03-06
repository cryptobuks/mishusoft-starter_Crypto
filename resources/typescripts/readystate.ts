// document.addEventListener('readystatechange', () => {
//     // ready state = 'loading'
//     // ready state = 'interactive'
//     // ready state = 'complete'
//     //console.log(`readystate: ${document.readyState}\n`)
//
//     if (document.readyState === 'interactive') {
//         //console.info(document.body.getAttribute('theme'));
//         //console.log('Preparing css load...')
//
//     }
//
//
//     //hide app loader on document completed
//     if (document.readyState === 'complete') {
//         //initialize app loader image & application
//         import('./common/dom').then(function (t) {
//             let captureElement = t.captureElement;
//             if (captureElement('#app-loader')) {
//                 captureElement('#app-loader').setAttribute('style', 'display:none;');
//             }
//
//         }).catch(function (err) {
//             console.log(err)
//         })
//     }
// });

//service worker manager
import('./db/app').then(function (db) {
    let publicJsUrl = db.app.content.folder.js;
    if (window.Worker) {
        import('./worker-response').then(function (t) {
            let webWorker = new t.WorkerResponse(publicJsUrl);
            webWorker.registerMe();
            //Variable, Constants declaration
            const webServiceWorker = new Worker(new URL(webWorker.getRegisteredUrl(), import.meta.url));
            webServiceWorker.postMessage({
                question:
                    'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
            });
            webServiceWorker.onmessage = ({data: {answer}}) => {
                console.log(answer);
            };

        }).catch(function (err) {
            console.log(err)
        })
    }
}).catch(function (err) {
    console.log(err)
});
