import {captureElement} from "./common/dom";
import {app} from './db/app';

//console.log('ready state is running............')
//console.log('preparing is running............')



document.querySelector('#theme.css')?.addEventListener('load',function (event){
    console.log(event)
})
document.querySelector('#framework.css')?.addEventListener('load',function (event){
    console.log(event)
})


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

    if (document.readyState=== 'interactive'){
        console.info(document.body.getAttribute('theme'));
        console.log('Preparing css load...')

    }


    //hide app loader on document completed
    if (document.readyState=== 'complete'){
        //initialize app loader image & application
        if (captureElement('#app-loader')) {
            captureElement('#app-loader').setAttribute('style', 'display:none;');
        }
    }
});




//Variable, Constants declaration
const webServiceWorker = new Worker(new URL(app.content.folder.js + 'sw.js', import.meta.url));

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

webServiceWorker.postMessage({
    question:
        'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
});
webServiceWorker.onmessage = ({ data: { answer } }) => {
    console.log(answer);
};

