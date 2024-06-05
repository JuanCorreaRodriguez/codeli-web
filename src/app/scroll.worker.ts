/// <reference lib="webworker" />
//
// import {gsap} from "gsap";
// import Lenis from "@studio-freight/lenis";
// import {ScrollTrigger} from "gsap/ScrollTrigger"
//
// addEventListener('message', ({ data }) => {
//   console.log(`EVENT LISTENER DATA ${data}`)
//   const response = `worker response to ${data}`;
//   postMessage(response);
//   if(data === "init"){
//     gsap.registerPlugin(ScrollTrigger)
//     initScroll()
//   }
//
// });
//
// function initScroll(){
//   const content: HTMLElement = self.document.querySelector('[data-scroll-container]') as HTMLElement;
//   console.log("CONTENT", content)
//   if(!content) return
//
//   ScrollTrigger.defaults({
//     markers: false
//   })
//
//   const lenis= new Lenis({
//     content:content,
//     eventsTarget:content,
//     lerp:.1,
//   });
//   // lenis.on('scroll', (e:any) => {
//   //    console.log(e)
//   // })
//   // Prevent multiple rAF callbacks.
//   lenis.on('scroll', ScrollTrigger.update)
//   gsap.ticker.add((time)=> lenis.raf(time * 1000))
//   gsap.ticker.lagSmoothing(0)
//

  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('./sw.js')
  //     .then(() => console.log('Service Worker registered successfully.'))
  //     .catch((error) => console.error('Error registering Service Worker:', error));
  // }

// }
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
