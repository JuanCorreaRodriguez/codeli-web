// /// <reference lib="webworker" />
//
// addEventListener('message', ({ data }) => {
//   console.log(`EVENT LISTENER DATA ${data}`)
//   const response = `worker response to ${data}`;
//   postMessage(response);
//   // if(data === "init"){
//   //   IconsRegistry()
//   // }
// });
//
// const CACHE_NAME = 'my-app-cache-v1';
// const urlsToCache = ['/index.html', '/styles.css', '/app.js'];
//
// self.addEventListener('install', (event:any) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });
// self.addEventListener('fetch', (event:any) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       // Cache hit - return the cached response
//       if (response) {
//         return response;
//       }
//       // If the request is not cached, fetch it from the network
//       return fetch(event.request);
//     })
//   );
// });
