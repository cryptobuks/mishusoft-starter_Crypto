/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./Assets/typescripts/service-worker.ts ***!
  \**********************************************/
// @typescripts-ignore
const OFFLINE_VERSION = 1;
const CACHE_NAME = "offline";
// Customize this with a different URL if needed.
const OFFLINE_URL = "../../../offline.html";
self.addEventListener("install", (event) => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        // Setting {cache: 'reload'} in the new request will ensure that the
        // response isn't fulfilled from the HTTP cache; i.e., it will be from
        // the network.
        await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
    })());
    // Force the waiting service worker to become the active service worker.
    // @ts-ignore
    self.skipWaiting();
});
self.addEventListener("activate", (event) => {
    event.waitUntil((async () => {
        // Enable navigation preload if it's supported.
        // See https://developers.google.com/web/updates/2017/02/navigation-preload
        // @ts-ignore
        if ("navigationPreload" in self.registration) {
            // @ts-ignore
            await self.registration.navigationPreload.enable();
        }
    })());
    // Tell the active service worker to take control of the page immediately.
    // @ts-ignore
    self.clients.claim();
});
self.addEventListener("fetch", (event) => {
    // We only want to call event.respondWith() if this is a navigation request
    // for an HTML page.
    if (event.request.mode === "navigate") {
        event.respondWith((async () => {
            try {
                // First, try to use the navigation preload response if it's supported.
                const preloadResponse = await event.preloadResponse;
                if (preloadResponse) {
                    return preloadResponse;
                }
                // Always try the network first.
                return await fetch(event.request);
            }
            catch (error) {
                // catch is only triggered if an exception is thrown, which is likely
                // due to a network error.
                // If fetch() returns a valid HTTP response with a response code in
                // the 4xx or 5xx range, the catch() will NOT be called.
                console.log("Fetch failed; returning offline page instead.", error);
                const cache = await caches.open(CACHE_NAME);
                return await cache.match(OFFLINE_URL);
            }
        })());
    }
    // If our if() condition is false, then this fetch handler won't intercept the
    // request. If there are any other fetch handlers registered, they will get a
    // chance to call event.respondWith(). If no fetch handlers call
    // event.respondWith(), the request will be handled by the browser as if there
    // were no service worker involvement.
});
// Respond to a server push with a user notification.
self.addEventListener('push', function (event) {
    if (Notification.permission === "granted") {
        const notificationText = event.data.text();
        // @ts-ignore
        const showNotification = self.registration.showNotification('Sample PWA', {
            body: notificationText,
            icon: '/libraries/images/info.png'
        });
        // Ensure the toast notification is displayed before exiting the function.
        event.waitUntil(showNotification);
    }
});
// Respond to the user selecting the toast notification.
self.addEventListener('notificationclick', function (event) {
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();
    // This attempts to display the current notification if it is already open and then focuses on it.
    // @ts-ignore
    event.waitUntil(clients.matchAll({
        type: 'window'
    }).then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == 'http://localhost/' && 'focus' in client)
                return client.focus();
        }
        // @ts-ignore
        if (clients.openWindow) { // @ts-ignore
            return clients.openWindow('/');
        }
    }));
});

/******/ })()
;
//# sourceMappingURL=sw.js.map