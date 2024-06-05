// const gsap = require("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js")
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
//         integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
//         crossOrigin="anonymous" referrerpolicy="no-referrer"></script>

function initAnimations() {
  console.log("TEST1")
  animHeaders()
  console.log("TEST2")
  configScroll()
  console.log("TEST3")
}

function animHeaders() {
  if (!this.isBrowser()) return
  // const tlHeaderTxt = gsap.timeline()
  // tlHeaderTxt.fromTo(".header_h2", {opacity:0, y:10},
  //   {opacity:1,y:0,delay:1,duration:1},1)
  // tlHeaderTxt.fromTo(".header_p",{opacity:0},
  //   {opacity:1,duration:1},1)

  const tlHeader = gsap.timeline({
    scrollTrigger: {
      trigger: ".globalHeader",
      start: "70% 70%",
      end: "+=300 10%",
      pin: true,
      scrub: true,
      toggleActions: "play reverse play reverse",
    }
  })
  tlHeader.fromTo(".mask", {height: "75vh"}, {height: "100vh"}, 1)
  tlHeader.fromTo(".bgHead", {opacity: 1, scale: 1},
    {rotate: 90, opacity: 0, duration: 8, delay: 2, scale: 2})
  tlHeader.fromTo(".header_h2", {opacity: 1,}, {duration: 2, opacity: 0, delay: 2}, 1)
  tlHeader.fromTo(".header_p", {opacity: 1,}, {duration: 2, opacity: 0, y: 100, delay: 2}, 1)
  tlHeader.fromTo(".headerActions", {opacity: 1,}, {duration: 2, opacity: 0, y: 100, delay: 2}, 1)

}

function configScroll() {
  const content = document.querySelector('[data-scroll-container]');
  if (!content) return
  ScrollTrigger.defaults({
    markers: false
  })

  const lenis = new Lenis({
    content: content,
    eventsTarget: content,
    lerp: .1,
  });
  // lenis.on('scroll', (e:any) => {
  //    console.log(e)
  // })
  // Prevent multiple rAF callbacks.
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)


  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('./sw.js')
  //     .then(() => console.log('Service Worker registered successfully.'))
  //     .catch((error) => console.error('Error registering Service Worker:', error));
  // }
}
