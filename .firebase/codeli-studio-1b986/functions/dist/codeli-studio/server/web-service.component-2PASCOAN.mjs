import './polyfills.server.mjs';
import{c as h,d as S}from"./chunk-QOOEVWXK.mjs";import{b as u}from"./chunk-SITIWWHF.mjs";import{d as x}from"./chunk-5TUC4GAS.mjs";import"./chunk-Z32K6G24.mjs";import"./chunk-2LFG5QBD.mjs";import"./chunk-FD7ETFW5.mjs";import"./chunk-2335Q5QU.mjs";import"./chunk-GTSSCL6B.mjs";import{u as b}from"./chunk-KARC6ULU.mjs";import{Db as e,Eb as t,Fb as s,Xa as n,Xb as i,Yb as a,ac as w,ba as d,bc as r,cc as o,fa as v}from"./chunk-GPB6YLZS.mjs";import{i as g}from"./chunk-3CVZQN5Z.mjs";var k=(()=>{let p=class p{constructor(){this.animations=d(u),this.utilities=d(x)}ngAfterViewInit(){return g(this,null,function*(){if(!this.utilities.isBrowser())return;let m=this.utilities.isMobile()?50:100;yield this.animations.webDesignAnim(m),yield this.animations.titlesReveal(".wdTitle"),yield this.animations.resumeReveal(".wdDesc"),this.animations.opacityAnimationX({object:".webServAnim",start:"top 70%",end:"bottom 50%",ease:"back.out(1.4)",xStart:250,scrub:1}),this.animations.opacityAnimationX({object:".topLabelServ",start:"top 70%",end:"bottom 50%",ease:"back.out(1.4)",xStart:250,scrub:3}),this.animations.opacityAnimationY({object:".inner2AnimServ",start:"top 70%",end:"bottom 50%",ease:"back.out(1.4)",yStart:50,scrub:3})})}};p.\u0275fac=function(l){return new(l||p)},p.\u0275cmp=v({type:p,selectors:[["app-web-service"]],standalone:!0,features:[w],decls:98,vars:69,consts:[[1,"webServicesCont"],[1,"webServiceItem"],["ngSrc","web_service_landing_page.webp","sizes","100%","width","width","height","height","alt","",1,"wsImg"],[1,"wsMetric"],[1,"ann_cont","annPurple"],[1,"centerFlexItems","wsTitle"],[1,""],["ngSrc","web_service_web_sites.webp","sizes","100%","width","width","height","height","alt","",1,"wsImg"],[1,"ann_cont","annBlue"],["ngSrc","web_service_ecommerce.webp","sizes","100%","width","width","height","height","alt","",1,"wsImg"],[1,"ann_cont","annGreen"],["ngSrc","web_service_web_apps.webp","sizes","100%","width","width","height","height","alt","",1,"wsImg"],[1,"ann_cont","annYellow"]],template:function(l,C){l&1&&(e(0,"section",0)(1,"div",1),s(2,"img",2),e(3,"div",3)(4,"h3"),i(5),r(6,"translate"),t(),e(7,"p"),i(8),r(9,"translate"),t()()(),e(10,"div",1)(11,"p",4),i(12),r(13,"translate"),t(),e(14,"div",5)(15,"h2",6),i(16,"Landing Page"),t()(),e(17,"p"),i(18),r(19,"translate"),t(),e(20,"p"),i(21),r(22,"translate"),t(),e(23,"p"),i(24),r(25,"translate"),t()(),e(26,"div",1),s(27,"img",7),e(28,"div",3)(29,"h3"),i(30),r(31,"translate"),t(),e(32,"p"),i(33),r(34,"translate"),t()()(),e(35,"div",1)(36,"p",8),i(37),r(38,"translate"),t(),e(39,"div",5)(40,"h2",6),i(41,"Web sites"),t()(),e(42,"p"),i(43),r(44,"translate"),t(),e(45,"p"),i(46),r(47,"translate"),t()(),e(48,"div",1),s(49,"img",9),e(50,"div",3)(51,"h3"),i(52),r(53,"translate"),t(),e(54,"p"),i(55),r(56,"translate"),t()()(),e(57,"div",1)(58,"p",10),i(59),r(60,"translate"),t(),e(61,"div",5)(62,"h2",6),i(63,"E-commerce"),t()(),e(64,"p"),i(65),r(66,"translate"),t(),e(67,"p"),i(68),r(69,"translate"),t(),e(70,"p"),i(71),r(72,"translate"),t()(),e(73,"div",1),s(74,"img",11),e(75,"div",3)(76,"h3"),i(77),r(78,"translate"),t(),e(79,"p"),i(80),r(81,"translate"),t()()(),e(82,"div",1)(83,"p",12),i(84),r(85,"translate"),t(),e(86,"div",5)(87,"h2",6),i(88,"Web-apps"),t()(),e(89,"p"),i(90),r(91,"translate"),t(),e(92,"p"),i(93),r(94,"translate"),t(),e(95,"p"),i(96),r(97,"translate"),t()()()),l&2&&(n(5),a(o(6,23,"webServices.lp.mTitle")),n(3),a(o(9,25,"webServices.lp.mDesc")),n(4),a(o(13,27,"webServices.lp.slogan")),n(6),a(o(19,29,"webServices.lp.desc1")),n(3),a(o(22,31,"webServices.lp.desc2")),n(3),a(o(25,33,"webServices.lp.desc3")),n(6),a(o(31,35,"webServices.ws.mTitle")),n(3),a(o(34,37,"webServices.ws.mDesc")),n(4),a(o(38,39,"webServices.ws.slogan")),n(6),a(o(44,41,"webServices.ws.desc1")),n(3),a(o(47,43,"webServices.ws.desc2")),n(6),a(o(53,45,"webServices.eCom.mTitle")),n(3),a(o(56,47,"webServices.eCom.mDesc")),n(4),a(o(60,49,"webServices.eCom.slogan")),n(6),a(o(66,51,"webServices.eCom.desc1")),n(3),a(o(69,53,"webServices.eCom.desc2")),n(3),a(o(72,55,"webServices.eCom.desc3")),n(6),a(o(78,57,"webServices.wa.mTitle")),n(3),a(o(81,59,"webServices.wa.mDesc")),n(4),a(o(85,61,"webServices.wa.slogan")),n(6),a(o(91,63,"webServices.wa.desc1")),n(3),a(o(94,65,"webServices.wa.desc2")),n(3),a(o(97,67,"webServices.wa.desc3")))},dependencies:[b,S,h],styles:['.webServiceItem[_ngcontent-%COMP%]:nth-child(1){grid-area:one}.webServiceItem[_ngcontent-%COMP%]:nth-child(2){grid-area:two}.webServiceItem[_ngcontent-%COMP%]:nth-child(3){grid-area:thr}.webServiceItem[_ngcontent-%COMP%]:nth-child(4){grid-area:fou}.webServiceItem[_ngcontent-%COMP%]:nth-child(5){grid-area:fiv}.webServiceItem[_ngcontent-%COMP%]:nth-child(6){grid-area:six}.webServiceItem[_ngcontent-%COMP%]:nth-child(7){grid-area:sev}.webServiceItem[_ngcontent-%COMP%]:nth-child(8){grid-area:eig}.webServiceItem[_ngcontent-%COMP%]{position:relative}.wsImg[_ngcontent-%COMP%]{width:100%;border-radius:calc(var(--globalRadius) * 3);opacity:.85}.wsMetric[_ngcontent-%COMP%]{bottom:0;left:50%;padding:1rem;width:100%;box-sizing:border-box;border-radius:0;position:absolute;background:linear-gradient(to bottom,transparent,var(--globalBoxBlur),var(--globalBoxBlur),var(--globalBg));transform:translate(-50%)}.wsMetric[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .wsMetric[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .wsMetric[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center!important;font-weight:700!important}.wsMetric[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:0!important}.wsMetric1[_ngcontent-%COMP%]{top:50%;left:0;border-radius:0 calc(var(--globalRadius) * 3) calc(var(--globalRadius) * 3) 0;transform:translateY(-50%)}.wsTitle[_ngcontent-%COMP%]{text-align:start;flex-direction:row;gap:1rem;font-size:32px!important;min-width:12.5rem!important;justify-content:flex-start!important}.annBlue[_ngcontent-%COMP%]{background:var(--msgBlue);padding:.5rem!important;color:var(--msgBlueS)!important;font-weight:700!important}.annPurple[_ngcontent-%COMP%]{background:var(--msgPurple);padding:.5rem!important;color:var(--msgPurpleS)!important;font-weight:700!important}.annYellow[_ngcontent-%COMP%]{background:var(--msgYellow);padding:.5rem!important;color:var(--msgYellowS)!important;font-weight:700!important}.annGreen[_ngcontent-%COMP%]{background:var(--msgGreen);padding:.5rem!important;color:var(--msgGreenS)!important;font-weight:700!important}.webServicesCont[_ngcontent-%COMP%]{position:relative;width:80vw;margin:0 auto;padding:1rem;box-sizing:border-box;grid-auto-rows:auto 1fr;display:grid;gap:2rem;grid-template-areas:"one one one one one one one two two" "fou fou thr thr thr thr thr thr thr" "fiv fiv fiv fiv fiv fiv fiv six six" "eig eig sev sev sev sev sev sev sev"}.webServicesCont[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .webServicesCont[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .webServicesCont[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:start}.webServiceItem[_ngcontent-%COMP%]:nth-child(1)   img[_ngcontent-%COMP%], .webServiceItem[_ngcontent-%COMP%]:nth-child(3)   img[_ngcontent-%COMP%], .webServiceItem[_ngcontent-%COMP%]:nth-child(5)   img[_ngcontent-%COMP%], .webServiceItem[_ngcontent-%COMP%]:nth-child(7)   img[_ngcontent-%COMP%]{-webkit-mask-image:linear-gradient(to bottom,black,transparent);mask-image:linear-gradient(to bottom,black,transparent)}@media (max-width: 767px){.webServicesCont[_ngcontent-%COMP%]{width:100%!important;max-width:100%!important;padding:.5rem;gap:.65rem;box-sizing:border-box;grid-auto-columns:auto 1fr;grid-template-areas:"one" "two" "thr" "fou" "fiv" "six" "sev" "eig"}.wsImg[_ngcontent-%COMP%]{border-radius:calc(var(--globalRadius) * 3 / 2)}.wsMetric[_ngcontent-%COMP%]{margin-top:-3rem;padding:.5rem;width:100%!important;position:relative;background:transparent;border-radius:calc(var(--globalRadius) * 3 / 2)}}']});let c=p;return c})();export{k as WebServiceComponent};
