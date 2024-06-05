import {inject, Injectable} from '@angular/core';
import {gsap} from "gsap";
import Lenis from "@studio-freight/lenis";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {AnimationConfig} from "../interfaces/const.interface";
import {ThemeService} from "./theme.service";
import {UtilitiesService} from "./utilities.service";

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  bgTL = gsap.timeline()
  theme = inject(ThemeService)
  utils = inject(UtilitiesService)

  constructor() {
    gsap.registerPlugin(ScrollTrigger)
  }

  animHeaders() {
    // if(!this.isBrowser()) return
    const tlHeaderTxt = gsap.timeline()
    tlHeaderTxt.delay(.05)
    tlHeaderTxt.fromTo(".annotation_cont", {opacity: 0, y: 25}, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "elastic.out(i,0.3)",
      delay: .5
    }, 1)
    tlHeaderTxt.fromTo(".header_h1", {opacity: 0, y: 25}, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "elastic.out(i,0.3)",
      delay: .5
    }, 1)
    tlHeaderTxt.fromTo(".header_h2", {opacity: 0, scale: 1.75}, {
      opacity: 1,
      scale: 1,
      duration: .5,
      ease: "expo.inOut"
    }, 1)
    tlHeaderTxt.fromTo(".header_p", {opacity: 0}, {opacity: 1, duration: 1, delay: .65}, 1)
    tlHeaderTxt.fromTo(".headerActions", {opacity: 0, y: -50}, {
      opacity: 1,
      duration: 1,
      y: 0,
      delay: 1,
      ease: "elastic.out(i,0.3)"
    }, 1)

    const tlHeader = gsap.timeline({
      scrollTrigger: {
        trigger: ".triggerHead",
        start: "100% 25%",
        end: "+=100 25%",
        pin: true,
        scrub: 1,
        toggleActions: "play reverse play reverse",
      }
    })
    tlHeader.fromTo(".headerData",
      {opacity: 1, scale: 1},
      {opacity: 0, scale: .5, ease: "back.in(1.7)",}, 1)

    const titles = gsap.utils.toArray(".wrapperHead h2")
    const tlTitles = gsap.timeline({repeat: 999})
    tlTitles.fromTo(".wrapperHead ",
      {opacity: 0, x: 20},
      {opacity: 1, x: 0, delay: .15})
    titles.forEach((title: any) => {
      tlTitles.from(title, {
        opacity: 0,
        x: 20
      }, "<")
      tlTitles.to(title, {
        opacity: 0,
        x: 20
      }, "<1.5")
      // tlTitles.fromTo(".wrapperHead h2",
      //   {opacity:0,y:30},
      //   {duration:2,opacity:1,y:0},)
    })
  }

  animHeadersPortfolio() {
    // if(!this.isBrowser()) return
    const tlHeaderTxt = gsap.timeline()
    tlHeaderTxt.delay(0)
    tlHeaderTxt.fromTo(".ann_cont_Route",
      {opacity: 0, y: 25},
      {opacity: 1, y: 0, ease: "elastic.out(i,0.3)", delay: 0, duration: 2.5}, 1)
    tlHeaderTxt.fromTo(".header_h1_Route",
      {opacity: 0, scale: .9},
      {opacity: 1, scale: 1, ease: "elastic.out(i,0.3)", delay: 0, duration: 2.5}, 1)
    tlHeaderTxt.fromTo(".header_h2_Route",
      {opacity: 0, scale: .9},
      {opacity: 1, scale: 1, ease: "elastic.out(i,0.3)", delay: .3, duration: 1.5}, 1)
    tlHeaderTxt.fromTo(".header_p_Route",
      {opacity: 0, scale: .9},
      {opacity: 1, scale: 1, delay: .6, duration: 2.5}, 1)
    // tlHeaderTxt.fromTo(".headerActions",{opacity:0, y:50}, {opacity:1,duration:1,y:0,delay:.85,ease:"bounce.out"},1)

    const tlHeader = gsap.timeline({
      scrollTrigger: {
        trigger: ".triggerHeadRoute",
        start: "100% 80%",
        end: "+=400 70%",
        pin: true,
        scrub: true,
        toggleActions: "play reverse play reverse",
      }
    })
    tlHeader.fromTo(".headerData", {opacity: 1,},
      {opacity: 0, scale: .1, ease: "expo.in", duration: 10}, 1)

    const titles = gsap.utils.toArray(".wrapperHead h2")
    const tlTitles = gsap.timeline({repeat: 999})
    tlTitles.fromTo(".wrapperHead ", {opacity: 0}, {opacity: 1, delay: .15})
    titles.forEach((title: any) => {
      tlTitles.from(title, {
        opacity: 0,
      }, "<")
      tlTitles.to(title, {
        opacity: 0,
      }, "<1.5")
      // tlTitles.fromTo(".wrapperHead h2",
      //   {opacity:0,y:30},
      //   {duration:2,opacity:1,y:0},)
    })
  }

  animHeadersRoutes() {
    // if(!this.isBrowser()) return
    const tlHeaderTxt = gsap.timeline()
    tlHeaderTxt.delay(0)
    tlHeaderTxt.fromTo(".ann_cont_Route",
      {opacity: 0, x: -25},
      {opacity: 1, x: 0, ease: "elastic.out(i,0.3)", delay: 0, duration: 2.5}, 1)
    tlHeaderTxt.fromTo(".header_h1_Route",
      {opacity: 0, x: -25},
      {opacity: 1, x: 0, ease: "elastic.out(i,0.3)", delay: 0, duration: 2.5}, 1)
    tlHeaderTxt.fromTo(".header_h2_Route",
      {opacity: 0, x: -25},
      {opacity: 1, x: 0, ease: "elastic.out(i,0.3)", delay: .3, duration: 2.5}, 1)
    tlHeaderTxt.fromTo(".header_p_Route",
      {opacity: 0, x: -25},
      {opacity: 1, x: 0, ease: "elastic.out(i,0.3)", delay: .6, duration: 2.5}, 1)
    // tlHeaderTxt.fromTo(".headerActions",{opacity:0, y:50}, {opacity:1,duration:1,y:0,delay:.85,ease:"bounce.out"},1)

    const tlHeader = gsap.timeline({
      scrollTrigger: {
        trigger: ".triggerHeadRoute",
        start: "100% 80%",
        end: "+=400 70%",
        pin: true,
        scrub: true,
        toggleActions: "play reverse play reverse",
      }
    })
    tlHeader.fromTo(".headerData", {opacity: 1,},
      {opacity: 0, scale: .1, ease: "expo.in", duration: 10}, 1)

    const titles = gsap.utils.toArray(".wrapperHead h2")
    const tlTitles = gsap.timeline({repeat: 999})
    tlTitles.fromTo(".wrapperHead ", {opacity: 0}, {opacity: 1, delay: .15})
    titles.forEach((title: any) => {
      tlTitles.from(title, {
        opacity: 0,
      }, "<")
      tlTitles.to(title, {
        opacity: 0,
      }, "<1.5")
      // tlTitles.fromTo(".wrapperHead h2",
      //   {opacity:0,y:30},
      //   {duration:2,opacity:1,y:0},)
    })
  }


  logosAnim(i: string) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: i,
        start: "top 100%",
        end: "bottom 40%",
        scrub: 2,
        toggleActions: "play reverse play reverse",
      }
    })
    const g = this.utils.isMobile() ? "1.5rem" : "4rem";
    tl.fromTo(i,
      {gap: "15em"},
      {gap: g, ease: "power4.inOut", duration: 5},
    )
  }

  async titlesReveal(text: string) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        scrub: 1,
        start: "top 70%",
        end: "bottom 50%",
      },
    })
    tl.fromTo(text,
      {opacity: .05, y: 20, scale: 1.5},
      {
        stagger: 1, opacity: 1, y: 0, scale: 1
      })
  }

  async resumeReveal(text: string) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        scrub: 2,
        start: "top 70%",
        end: "bottom 50%",
      },
    })
    tl.fromTo(text,
      {opacity: 0, y: -20},
      {
        stagger: 1, opacity: 1, y: 0, delay: .5
      })
  }

  devCircle() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".webDevService",
        start: "75% 80%",
        end: "+=200 50%",
        pin: true,
        scrub: true,
        toggleActions: "play reverse play reverse",
      }
    })
    tl.fromTo(".code_switch",
      {filter: "grayscale(1)", opacity: .25},
      {filter: "grayscale(0)", opacity: 1}, 1)
  }

  async webDesignAnim(move: number) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".webDesService",
        start: "75% 80%",
        end: "+=200 40%",
        pin: true,
        scrub: 2,
        toggleActions: "play reverse play reverse",
      }
    })
    tl.fromTo(".mockup_e-commerce2",
      {x: 0, top: "50%", translateY: "-50%"},
      {x: move * 2, ease: "power4.out"}, 1);
    tl.fromTo(".mockup_e-commerce1",
      {x: 0, top: "50%", translateY: "-50%"},
      {x: move, ease: "power4.out",}, 2);
  }

  async configScroll() {
    const content: HTMLElement = document.querySelector('[data-scroll-container]') as HTMLElement;
    if (!content) return
    ScrollTrigger.defaults({
      markers: false
    })
    const lenis = new Lenis({
      content: content,
      eventsTarget: content,
      lerp: .1,
    });
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 500))
    gsap.ticker.lagSmoothing(0)
  }

  toolbarInit() {
    gsap.fromTo(".toolbar", {opacity: 0}, {
      opacity: 1,
      duration: 1,
      delay: 1.5,
      ease: "back.inOut"
    })
    gsap.timeline({
      scrollTrigger: {
        trigger: ".toolbarTrigger",
        start: "top 10px",
        end: "bottom+=100 top",
        // onEnter:()=> this.toolbarConfigColorsEnter(),
        // onLeave: ()=> this.toolbarConfigColorsLeave(),
        // onEnterBack:()=>this.toolbarConfigColorsEnter(),
        // onLeaveBack:()=> this.toolbarConfigColorsLeave(),
      }
    })
    // this.setDarkScroll()
  }

  // toolbarConfigColorsEnter(){
  //   gsap.fromTo(".toolbar",{},{
  //     background:"transparent",borderBottomColor:"transparent"})
  //   if(this.theme.isDarkMode()) return
  //   this.setDarkScroll();
  // }
  // toolbarConfigColorsLeave(){
  //   gsap.fromTo(".toolbar",{},{
  //     background:"var(--globalToolbar)", borderBottomColor:"var(--globalField)"})
  //   if(this.theme.isDarkMode()) return
  //   this.reverseDarkScroll();
  // }
  searchEnable() {
    gsap.fromTo(".searchForm", {
      width: "100px"
    }, {
      width: "200px",
      duration: .500,
      ease: "power4.inOut",
    })

    // ease: "back.out(1.7)",
  }

  searchDisable() {
    gsap.to(".searchForm", {
      width: "100px",
      duration: .400,
      ease: "power4.inOut"
    })
  }


  footerAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".A0BG",
        start: "top 100%",
        end: "bottom 80%",
        scrub: 5,
        toggleActions: "play reverse play reverse",
      }
    })
    tl.fromTo(".A0BG",
      {scale: 0, transformStyle: "center", borderRadius: "100%"},
      {
        borderRadius: "1.5rem",
        scale: 1, transformStyle: "center",
        ease: "power1.inOut", delay: 1
      }, 1)
    tl.fromTo(".ctaFooter",
      {opacity: 0},
      {opacity: 1, delay: 1, duration: 2.5}, 2)
  }

  introduceAnimation() {
    const tlUIUX = gsap.timeline({
      scrollTrigger: {
        trigger: ".introTrigger",
        pin: true,
        toggleActions: "play reverse  play reverse",
        start: "top 40%",
        end: "+=800 40%",
        scrub: 1,
      }
    })

    tlUIUX.fromTo('.introTitles', {scale: 2.5, opacity: 0},
      {delay: 0, duration: 2.5, scale: 1, opacity: 1,}, 1)

    tlUIUX.fromTo(".introDesc", {opacity: 0, y: 100},
      {delay: 1, duration: 1, opacity: 1, y: 0}, 2)
  }

  backgroundDark(o: AnimationConfig) {
    if (this.theme.isDarkMode()) return
    /** Background */
    this.bgTL = gsap.timeline({
      scrollTrigger: {
        trigger: o.trigger,
        pin: false,
        start: "35% 100%",
        end: "+=1250 75%",
        scrub: true,
        onEnter: () => {
          gsap.to(".mainContainer",
            {
              ease: "power1.out",
              animationDuration: .15,
              transitionDuration: .15,
              backgroundColor: "#141718"
            });
          this.setDarkScroll()
        },
        onLeave: () => {
          gsap.fromTo(".mainContainer",
            {backgroundColor: "#141718"},
            {
              ease: "power1.out",
              animationDuration: 1,
              transitionDuration: 1,
              backgroundColor: "var(--globalBg)"
            })
          this.reverseDarkScroll()
        },
        onEnterBack: () => {
          gsap.to(".mainContainer",
            {
              ease: "power1.out",
              animationDuration: .15,
              transitionDuration: .15,
              backgroundColor: "#141718"
            });
          this.setDarkScroll()
        },
        onLeaveBack: () => {
          gsap.fromTo(".mainContainer",
            {backgroundColor: "#141718"},
            {
              ease: "power1.out",
              animationDuration: 1,
              transitionDuration: 1,
              backgroundColor: "var(--globalBg)"
            })
          this.reverseDarkScroll()
        }
      }
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".featuresTitle",
        pin: false,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 1,
      }
    })
    tl.fromTo(".featuresTitle",
      {},
      {color: "white !important"}, 1)
    tl.fromTo(".cardsFeatures",
      {opacity: 0},
      {opacity: 1, delay: 1.5, duration: 2}, 2
    )
  }

  destroyBackgroundTL() {
    if (this.bgTL == undefined) return

    this.bgTL.scrollTrigger?.kill()
    this.bgTL.kill()
  }

  setDarkScroll() {
    gsap.fromTo(".icToolbar",
      {},
      {color: "white"})
    gsap.fromTo(".toolbar",
      {},
      {background: "var(--globalToolbarDARK)"})
    gsap.fromTo(".mat-mdc-text-field-wrapper",
      {},
      {background: "var(--globalBg)"})
  }

  reverseDarkScroll() {
    gsap.fromTo(".icToolbar",
      {},
      {color: "#2b2b2b"})
    gsap.fromTo(".toolbar",
      {},
      {background: "var(--globalToolbarLIGHT)"})
    gsap.fromTo(".mat-mdc-text-field-wrapper",
      {},
      {background: "var(--globalField2)"})

    // gsap.to(".mainContainer",
    // { duration: .25, backgroundColor:"#f0f0f0"})
  }

  opacityAnimationX(o: AnimationConfig) {
    const tlButton = gsap.timeline({
      scrollTrigger: {
        trigger: o.object,
        scrub: o.scrub,
        start: o.start,
        end: o.end,
      },
    })
    tlButton.fromTo(o.object,
      {x: o.xStart, opacity: 0},
      {x: 0, opacity: 1, ease: o.ease})
  }

  opacityAnimationY(o: AnimationConfig) {
    const tlButton = gsap.timeline({
      scrollTrigger: {
        trigger: o.object,
        scrub: o.scrub,
        start: o.start,
        end: o.end,
      },
    })
    tlButton.fromTo(o.object,
      {y: o.yStart, opacity: 0},
      {y: 0, opacity: 1, ease: o.ease})
  }

  notAvailableDate() {
    const tl = gsap.timeline()
    tl.fromTo(".formGroup",
      {opacity: 1},
      {opacity: 0, zIndex: -1}, 1)
    tl.fromTo(".notAvailableCont",
      {opacity: 0},
      {opacity: 1, zIndex: 1}, 1)
  }

  updateFormDataAnim() {
    const tl = gsap.timeline()
    tl.to(".notAvailableCont",
      {opacity: 0, zIndex: -1})
    tl.fromTo(".formGroup",
      {opacity: 0},
      {opacity: 1, zIndex: 1}, 1)
  }

  searchResultAnim() {
    gsap.fromTo(".searchOptions",
      {opacity: 0, x: -200},
      {opacity: 1, x: 0, duration: .15})
  }

  searchResultReverseAnim() {
    gsap.fromTo(".searchOptions",
      {opacity: 1, x: 0},
      {opacity: 0, x: -200, duration: .1})
  }

  //
  // aboutAnimations() {
  //   if (window == undefined) return
  //   let sections = gsap.utils.toArray(".panel");
  //   let offset = document.querySelector(".whyUsMobile")!.clientWidth
  //
  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".whyUsMobile",
  //       pin: true,
  //       scrub: 1,
  //       end: () => "+=" + offset
  //     }
  //   });
  // }
  // approachCards() {
  //   // start:"left-=120px left",
  //   const timeln = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".landing_approach",
  //       pin: true,
  //       pinSpacing: true,
  //       start: "top-=120px top",
  //       end: "+=1000",
  //       scrub: true,
  //     }
  //   })
  //
  //   timeln.addLabel('card1');
  //   timeln.to('.card-1', {xPercent: 0, opacity: 1});
  //   timeln.from('.card-2', {xPercent: 75, opacity: 0});
  //   timeln.addLabel("card2");
  //   timeln.to(".card-1", {scale: 0.85, xPercent: -0.5, opacity: 0.99}, "-=0.3");
  //   timeln.to('.card-2', {xPercent: 0, opacity: 1})
  //   timeln.from('.card-3', {xPercent: 75, opacity: 0});
  //   timeln.addLabel('card3');
  //   timeln.to(".card-2", {scale: 0.9, xPercent: -0.4, opacity: 0.99}, "-=0.3");
  //   timeln.to(".card-3", {xPercent: 0, opacity: 1});
  //   timeln.from('.card-4', {xPercent: 75, opacity: 0});
  //   timeln.addLabel("card4");
  //   timeln.to(".card-3", {scale: 0.9, xPercent: -0.3, opacity: 0.99}, "-=0.3");
  //   timeln.to(".card-4", {xPercent: 0, opacity: 1});
  //   timeln.from('.card-5', {xPercent: 75, opacity: 0});
  //   timeln.addLabel("card5");
  //   timeln.to(".card-4", {scale: 0.9, xPercent: -0.2, opacity: 0.99}, "-=0.3");
  //   timeln.to(".card-5", {xPercent: 0, opacity: 1});
  //
  //   timeln.addLabel("card5-end");
  //   timeln.to(".card-5", {scale: 0.9, xPercent: -0.2, opacity: 1}, "-=0.3");
  //   // timeln.to('.card-5', {});
  // }
  //
  // // cardsApproachAnimation(){
  // //   // const items = gsap.utils.toArray(".cardsApproach .container .card")
  // //   // console.log(items.length)
  // //   const tl = gsap.timeline({
  // //     scrollTrigger: {
  // //       trigger: ".cardsApproach .container",
  // //       pin: true,
  // //       pinSpacing: true,
  // //       start: "top-=50px 20%",
  // //       end: "+=1000",
  // //       scrub: true,
  // //     }
  // //   })
  // //
  // //   // tl.addLabel('cApproach1');
  // //   // tl.fromTo(".cApproach1",
  // //   //   {width:"20vw"},
  // //   //   {width:"50vw"},1)
  // //
  // //   tl.addLabel('cApproach2A');
  // //   tl.fromTo(".cApproach1",
  // //     {width:"80vw"},
  // //     {width:"10vw"},1)
  // //   tl.fromTo(".cApproach1Desc",
  // //     {opacity:1},
  // //     {opacity:0},1),
  // //   tl.fromTo(".cApproach2",
  // //     {width:"10vw"},
  // //     {width:"80vw"},1)
  // //   tl.fromTo(".cApproach2Desc",
  // //     {opacity:0, x:50},
  // //     {opacity:1, x:0, delay:.5},1),
  // //   tl.fromTo(".subtitleCard2",
  // //     {opacity:0, x:100},
  // //     {opacity:1, x:0, duration:1, ease:"elastic.out(1,0.75)"},1),
  // //
  // //   tl.addLabel('cApproach3A');
  // //   tl.fromTo(".cApproach2",
  // //     {width:"80vw"},
  // //     {width:"10vw"},2)
  // //   tl.fromTo(".cApproach2Desc",
  // //     {opacity:1},
  // //     {opacity:0},2),
  // //   tl.fromTo(".cApproach3",
  // //     {width:"10vw"},
  // //     {width:"80vw"},2)
  // //   tl.fromTo(".cApproach3Desc",
  // //     {opacity:0,x:50},
  // //     {opacity:1, x:0, delay:.5},2)
  // //   tl.fromTo(".subtitleCard3",
  // //     {opacity:0,x:100},
  // //     {opacity:1, x:0, duration:1,ease:"elastic.out(1,0.75)"},2)
  // //
  // // }
  // // Customs
  // stackedPanels(sections: string) {
  //   let panels = gsap.utils.toArray(sections);
  //   if (!panels) return
  //   // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
  //   // let tops = panels.map((panel:any) => ScrollTrigger.create({trigger: panel, start: "top top"}));
  //
  //   panels.forEach((panel: any, i: number) => {
  //     gsap.fromTo(panel.img,
  //       {opacity: 0},
  //       {opacity: 1})
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       // start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
  //       pin: true,
  //       scrub: 1,
  //       pinSpacing: false,
  //
  //     });
  //   });
  //
  //   // ScrollTrigger.create({
  //   //   snap: {
  //   //     snapTo: (progress, self) => {
  //   //       let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
  //   //         snapScroll = gsap.utils.snap(panelStarts, self!.scroll()); // find the closest one
  //   //       return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
  //   //     },
  //   //     duration: 0.45
  //   //   }
  //   // });
  // }
  //
  // approachSteps() {
  //
  //   let sections = gsap.utils.toArray(".panel");
  //   // document.querySelector(".whyUsMobile")!.clientWidth
  //   let offset = document.querySelector(".approachSteps")!.clientWidth
  //
  //   gsap.to(sections, {
  //     scrollTrigger: {
  //       trigger: ".approachSteps",
  //       pin: true,
  //       scrub: 1,
  //       snap: {
  //         snapTo: 1 / (sections.length - 1), // "labels", // snap to the closest label in the timeline
  //         duration: {min: 0.2, max: 0.4}, // the snap animation should be at least 0.2 seconds, but no more than 0.4 seconds (determined by velocity)
  //         // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
  //         ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
  //       },
  //       // snap: 1 / (sections.length - 1),
  //       // base vertical scrolling on how wide the container is so it feels more natural.
  //       end: () => "+=" + offset
  //     },
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none",
  //   });
  //   gsap.fromTo(".floor_bg", {
  //     x: 0
  //   }, {
  //     scrollTrigger: {
  //       trigger: ".floor_bg",
  //       pin: true,
  //       scrub: true,
  //       end: () => "+=" + offset
  //     },
  //     x: -2000
  //   })
  // }
}
