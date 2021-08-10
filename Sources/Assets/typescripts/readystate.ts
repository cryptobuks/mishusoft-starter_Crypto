import {captureElement} from "./common/dom";
import {app} from './db/app';

//Variable, Constants declaration
const webServiceWorker = new Worker(app.content.folder.js + 'sw.js');

console.log('ready state is runing............')

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


    //hide app loader on document completed
    while (document.readyState === 'complete') {
        //initialize app loader image & application
        if (captureElement('#app-loader')) {
            captureElement('#app-loader').setAttribute('style', 'display:none;');
            break;
        }
    }
});

if (typeof webServiceWorker =='undefined') {
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register(app.content.folder.js + 'sw.js')
                .then((swr) => {
                    console.info(
                        "ServiceWorker [" + swr?.active?.scriptURL + "] is " + swr?.active?.state + " successfully."
                    );
                })
                .catch((err) => console.error("service worker not registered", err))
        });
    }
}
