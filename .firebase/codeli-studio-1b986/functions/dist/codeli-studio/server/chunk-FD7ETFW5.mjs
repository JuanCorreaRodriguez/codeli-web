import './polyfills.server.mjs';
import{d as y,o as Le}from"./chunk-KARC6ULU.mjs";import{C as U,Da as Me,E as Z,Ea as Q,Fa as Ce,H as De,Nb as Ne,Ob as Oe,Q as V,R as Te,T as H,U as ke,X as h,Y as E,Ya as D,_,a as be,aa as c,ac as Fe,ba as b,c as ve,ea as v,eb as p,f as A,fa as xe,g as ye,ga as I,ha as S,hb as X,l as Ee,p as L,q as Ie,s as Ae,wb as q,xa as w,xc as Re,y as we,ya as K,za as Y}from"./chunk-GPB6YLZS.mjs";import{a as u}from"./chunk-3CVZQN5Z.mjs";var ee;try{ee=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ee=!1}var g=(()=>{let e=class e{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Le(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||ee)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(i){return new(i||e)(c(Me))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var O,Se=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function oi(){if(O)return O;if(typeof document!="object"||!document)return O=new Set(Se),O;let n=document.createElement("input");return O=new Set(Se.filter(e=>(n.setAttribute("type",e),n.type===e))),O}var j;function rt(){if(j==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>j=!0}))}finally{j=j||!1}return j}function F(n){return rt()?n:!!n.capture}var x;function ri(){if(x==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return x=!1,x;if("scrollBehavior"in document.documentElement.style)x=!0;else{let n=Element.prototype.scrollTo;n?x=!/\{\s*\[native code\]\s*\}/.test(n.toString()):x=!1}}return x}var J;function at(){if(J==null){let n=typeof document<"u"?document.head:null;J=!!(n&&(n.createShadowRoot||n.attachShadow))}return J}function je(n){if(at()){let e=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function T(n){return n.composedPath?n.composedPath()[0]:n.target}function Pe(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Be(n,...e){return e.length?e.some(o=>n[o]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}function ct(n){return n!=null&&`${n}`!="false"}function ie(n){return Array.isArray(n)?n:[n]}function di(n){return n==null?"":typeof n=="string"?n:`${n}px`}function M(n){return n instanceof w?n.nativeElement:n}var dt=(()=>{let e=class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var hi=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=I({type:e}),e.\u0275inj=E({providers:[dt]});let n=e;return n})();var Ve=new Set,C,lt=(()=>{let e=class e{constructor(t,i){this._platform=t,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ut}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&ht(t,this._nonce),this._matchMedia(t)}};e.\u0275fac=function(i){return new(i||e)(c(g),c(Ce,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function ht(n,e){if(!Ve.has(n))try{C||(C=document.createElement("style"),e&&C.setAttribute("nonce",e),C.setAttribute("type","text/css"),document.head.appendChild(C)),C.sheet&&(C.sheet.insertRule(`@media ${n} {body{ }}`,0),Ve.add(n))}catch(o){console.error(o)}}function ut(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Ke=(()=>{let e=class e{constructor(t,i){this._mediaMatcher=t,this._zone=i,this._queries=new Map,this._destroySubject=new A}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return He(ie(t)).some(s=>this._registerQuery(s).mql.matches)}observe(t){let s=He(ie(t)).map(a=>this._registerQuery(a).observable),r=Ie(s);return r=Ae(r.pipe(Z(1)),r.pipe(V(1),U(0))),r.pipe(L(a=>{let d={matches:!1,breakpoints:{}};return a.forEach(({matches:m,query:l})=>{d.matches=d.matches||m,d.breakpoints[l]=m}),d}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),r={observable:new ve(a=>{let d=m=>this._zone.run(()=>a.next(m));return i.addListener(d),()=>{i.removeListener(d)}}).pipe(Te(i),L(({matches:a})=>({query:t,matches:a})),H(this._destroySubject)),mql:i};return this._queries.set(t,r),r}};e.\u0275fac=function(i){return new(i||e)(c(lt),c(p))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function He(n){return n.map(e=>e.split(",")).reduce((e,o)=>e.concat(o)).map(e=>e.trim())}var Ei={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var se=class{constructor(e,o){this._items=e,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new A,this._typeaheadSubscription=be.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._pageUpAndDown={enabled:!1,delta:10},this._skipPredicateFn=t=>t.disabled,this._pressedLetters=[],this.tabOut=new A,this.change=new A,e instanceof Y?this._itemChangesSubscription=e.changes.subscribe(t=>this._itemsChanged(t.toArray())):X(e)&&(this._effectRef=Re(()=>this._itemsChanged(e()),{injector:o}))}skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe(ke(o=>this._pressedLetters.push(o)),U(e),we(()=>this._pressedLetters.length>0),L(()=>this._pressedLetters.join(""))).subscribe(o=>{let t=this._getItemsArray();for(let i=1;i<t.length+1;i++){let s=(this._activeItemIndex+i)%t.length,r=t[s];if(!this._skipPredicateFn(r)&&r.getLabel().toUpperCase().trim().indexOf(o)===0){this.setActiveItem(s);break}}this._pressedLetters=[]}),this}cancelTypeahead(){return this._pressedLetters=[],this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,o=10){return this._pageUpAndDown={enabled:e,delta:o},this}setActiveItem(e){let o=this._activeItem;this.updateActiveItem(e),this._activeItem!==o&&this.change.next(this._activeItemIndex)}onKeydown(e){let o=e.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(s=>!e[s]||this._allowedModifierKeys.indexOf(s)>-1);switch(o){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let s=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(s>0?s:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let s=this._activeItemIndex+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(s<r?s:r-1,-1);break}else return;default:(i||Be(e,"shiftKey"))&&(e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(o>=65&&o<=90||o>=48&&o<=57)&&this._letterKeyStream.next(String.fromCharCode(o)));return}this._pressedLetters=[],e.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return this._pressedLetters.length>0}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){let o=this._getItemsArray(),t=typeof e=="number"?e:o.indexOf(e),i=o[t];this._activeItem=i??null,this._activeItemIndex=t}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._letterKeyStream.complete(),this.tabOut.complete(),this.change.complete(),this._pressedLetters=[]}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){let o=this._getItemsArray();for(let t=1;t<=o.length;t++){let i=(this._activeItemIndex+e*t+o.length)%o.length,s=o[i];if(!this._skipPredicateFn(s)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex+e,e)}_setActiveItemByIndex(e,o){let t=this._getItemsArray();if(t[e]){for(;this._skipPredicateFn(t[e]);)if(e+=o,!t[e])return;this.setActiveItem(e)}}_getItemsArray(){return X(this._items)?this._items():this._items instanceof Y?this._items.toArray():this._items}_itemsChanged(e){if(this._activeItem){let o=e.indexOf(this._activeItem);o>-1&&o!==this._activeItemIndex&&(this._activeItemIndex=o)}}};var We=class extends se{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(e){return this._origin=e,this}setActiveItem(e){super.setActiveItem(e),this.activeItem&&this.activeItem.focus(this._origin)}};function oe(n){return n.buttons===0||n.detail===0}function re(n){let e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var Ot=new _("cdk-input-modality-detector-options"),Ft={ignoreKeys:[18,17,224,91,16]},Ge=650,R=F({passive:!0,capture:!0}),Rt=(()=>{let e=class e{get mostRecentModality(){return this._modality.value}constructor(t,i,s,r){this._platform=t,this._mostRecentTarget=null,this._modality=new ye(null),this._lastTouchMs=0,this._onKeydown=a=>{this._options?.ignoreKeys?.some(d=>d===a.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=T(a))},this._onMousedown=a=>{Date.now()-this._lastTouchMs<Ge||(this._modality.next(oe(a)?"keyboard":"mouse"),this._mostRecentTarget=T(a))},this._onTouchstart=a=>{if(re(a)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=T(a)},this._options=u(u({},Ft),r),this.modalityDetected=this._modality.pipe(V(1)),this.modalityChanged=this.modalityDetected.pipe(De()),t.isBrowser&&i.runOutsideAngular(()=>{s.addEventListener("keydown",this._onKeydown,R),s.addEventListener("mousedown",this._onMousedown,R),s.addEventListener("touchstart",this._onTouchstart,R)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,R),document.removeEventListener("mousedown",this._onMousedown,R),document.removeEventListener("touchstart",this._onTouchstart,R))}};e.\u0275fac=function(i){return new(i||e)(c(g),c(p),c(y),c(Ot,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Lt=new _("liveAnnouncerElement",{providedIn:"root",factory:St});function St(){return null}var jt=new _("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Pt=0,Vi=(()=>{let e=class e{constructor(t,i,s,r){this._ngZone=i,this._defaultOptions=r,this._document=s,this._liveElement=t||this._createLiveElement()}announce(t,...i){let s=this._defaultOptions,r,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[r,a]=i,this.clear(),clearTimeout(this._previousTimeout),r||(r=s&&s.politeness?s.politeness:"polite"),a==null&&s&&(a=s.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(d=>this._currentResolve=d)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=t,typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",i=this._document.getElementsByClassName(t),s=this._document.createElement("div");for(let r=0;r<i.length;r++)i[r].remove();return s.classList.add(t),s.classList.add("cdk-visually-hidden"),s.setAttribute("aria-atomic","true"),s.setAttribute("aria-live","polite"),s.id=`cdk-live-announcer-${Pt++}`,this._document.body.appendChild(s),s}_exposeAnnouncerToModals(t){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let s=0;s<i.length;s++){let r=i[s],a=r.getAttribute("aria-owns");a?a.indexOf(t)===-1&&r.setAttribute("aria-owns",a+" "+t):r.setAttribute("aria-owns",t)}}};e.\u0275fac=function(i){return new(i||e)(c(Lt,8),c(p),c(y),c(jt,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var $=function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n}($||{}),Bt=new _("cdk-focus-monitor-default-options"),W=F({passive:!0,capture:!0}),Hi=(()=>{let e=class e{constructor(t,i,s,r,a){this._ngZone=t,this._platform=i,this._inputModalityDetector=s,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new A,this._rootNodeFocusAndBlurListener=d=>{let m=T(d);for(let l=m;l;l=l.parentElement)d.type==="focus"?this._onFocus(d,l):this._onBlur(d,l)},this._document=r,this._detectionMode=a?.detectionMode||$.IMMEDIATE}monitor(t,i=!1){let s=M(t);if(!this._platform.isBrowser||s.nodeType!==1)return Ee();let r=je(s)||this._getDocument(),a=this._elementInfo.get(s);if(a)return i&&(a.checkChildren=!0),a.subject;let d={checkChildren:i,subject:new A,rootNode:r};return this._elementInfo.set(s,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(t){let i=M(t),s=this._elementInfo.get(i);s&&(s.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(s))}focusVia(t,i,s){let r=M(t),a=this._getDocument().activeElement;r===a?this._getClosestElementsInfo(r).forEach(([d,m])=>this._originChanged(d,i,m)):(this._setOrigin(i),typeof r.focus=="function"&&r.focus(s))}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===$.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,i){t.classList.toggle("cdk-focused",!!i),t.classList.toggle("cdk-touch-focused",i==="touch"),t.classList.toggle("cdk-keyboard-focused",i==="keyboard"),t.classList.toggle("cdk-mouse-focused",i==="mouse"),t.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(t,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&i,this._detectionMode===$.IMMEDIATE){clearTimeout(this._originTimeoutId);let s=this._originFromTouchInteraction?Ge:1;this._originTimeoutId=setTimeout(()=>this._origin=null,s)}})}_onFocus(t,i){let s=this._elementInfo.get(i),r=T(t);!s||!s.checkChildren&&i!==r||this._originChanged(i,this._getFocusOrigin(r),s)}_onBlur(t,i){let s=this._elementInfo.get(i);!s||s.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(s,null))}_emitOrigin(t,i){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(i))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let i=t.rootNode,s=this._rootNodeFocusListenerCount.get(i)||0;s||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,W),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,W)}),this._rootNodeFocusListenerCount.set(i,s+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(H(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let s=this._rootNodeFocusListenerCount.get(i);s>1?this._rootNodeFocusListenerCount.set(i,s-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,W),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,W),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,i,s){this._setClasses(t,i),this._emitOrigin(s,i),this._lastFocusOrigin=i}_getClosestElementsInfo(t){let i=[];return this._elementInfo.forEach((s,r)=>{(r===t||s.checkChildren&&r.contains(t))&&i.push([r,s])}),i}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:i,mostRecentModality:s}=this._inputModalityDetector;if(s!=="mouse"||!i||i===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(i))return!0}return!1}};e.\u0275fac=function(i){return new(i||e)(c(p),c(g),c(Rt),c(y,8),c(Bt,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var N=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(N||{}),$e="cdk-high-contrast-black-on-white",ze="cdk-high-contrast-white-on-black",ne="cdk-high-contrast-active",Ze=(()=>{let e=class e{constructor(t,i){this._platform=t,this._document=i,this._breakpointSubscription=b(Ke).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return N.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,s=i&&i.getComputedStyle?i.getComputedStyle(t):null,r=(s&&s.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return N.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return N.BLACK_ON_WHITE}return N.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ne,$e,ze),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===N.BLACK_ON_WHITE?t.add(ne,$e):i===N.WHITE_ON_BLACK&&t.add(ne,ze)}}};e.\u0275fac=function(i){return new(i||e)(c(g),c(y))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Kt=new _("cdk-dir-doc",{providedIn:"root",factory:Wt});function Wt(){return b(y)}var $t=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function zt(n){let e=n?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?$t.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}var Ji=(()=>{let e=class e{constructor(t){if(this.value="ltr",this.change=new K,t){let i=t.body?t.body.dir:null,s=t.documentElement?t.documentElement.dir:null;this.value=zt(i||s||"ltr")}}ngOnDestroy(){this.change.complete()}};e.\u0275fac=function(i){return new(i||e)(c(Kt,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ae=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=I({type:e}),e.\u0275inj=E({});let n=e;return n})();var Gt=["mat-internal-form-field",""],Zt=["*"];function Yt(){return!0}var Qt=new _("mat-sanity-checks",{providedIn:"root",factory:Yt}),Bn=(()=>{let e=class e{constructor(t,i,s){this._sanityChecks=i,this._document=s,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return Pe()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[t]}};e.\u0275fac=function(i){return new(i||e)(c(Ze),c(Qt,8),c(y))},e.\u0275mod=I({type:e}),e.\u0275inj=E({imports:[ae,ae]});let n=e;return n})();var Ye=class{constructor(e,o,t,i,s){this._defaultMatcher=e,this.ngControl=o,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=s,this.errorState=!1}updateErrorState(){let e=this.errorState,o=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,s=t?.isErrorState(i,o)??!1;s!==e&&(this.errorState=s,this._stateChanges.next())}};var Un=(()=>{let e=class e{isErrorState(t,i){return!!(t&&t.invalid&&(t.touched||i&&i.submitted))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var f=function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n}(f||{}),le=class{constructor(e,o,t,i=!1){this._renderer=e,this.element=o,this.config=t,this._animationForciblyDisabledThroughCss=i,this.state=f.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Qe=F({passive:!0,capture:!0}),he=class{constructor(){this._events=new Map,this._delegateEventHandler=e=>{let o=T(e);o&&this._events.get(e.type)?.forEach((t,i)=>{(i===o||i.contains(o))&&t.forEach(s=>s.handleEvent(e))})}}addHandler(e,o,t,i){let s=this._events.get(o);if(s){let r=s.get(t);r?r.add(i):s.set(t,new Set([i]))}else this._events.set(o,new Map([[t,new Set([i])]])),e.runOutsideAngular(()=>{document.addEventListener(o,this._delegateEventHandler,Qe)})}removeHandler(e,o,t){let i=this._events.get(e);if(!i)return;let s=i.get(o);s&&(s.delete(t),s.size===0&&i.delete(o),i.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,Qe)))}},Xe={enterDuration:225,exitDuration:150},Xt=800,qe=F({passive:!0,capture:!0}),Je=["mousedown","touchstart"],et=["mouseup","mouseleave","touchend","touchcancel"],B=class B{constructor(e,o,t,i){this._target=e,this._ngZone=o,this._platform=i,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,i.isBrowser&&(this._containerElement=M(t))}fadeInRipple(e,o,t={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=u(u({},Xe),t.animation);t.centered&&(e=i.left+i.width/2,o=i.top+i.height/2);let r=t.radius||qt(e,o,i),a=e-i.left,d=o-i.top,m=s.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${a-r}px`,l.style.top=`${d-r}px`,l.style.height=`${r*2}px`,l.style.width=`${r*2}px`,t.color!=null&&(l.style.backgroundColor=t.color),l.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(l);let me=window.getComputedStyle(l),ot=me.transitionProperty,fe=me.transitionDuration,G=ot==="none"||fe==="0s"||fe==="0s, 0s"||i.width===0&&i.height===0,k=new le(this,l,t,G);l.style.transform="scale3d(1, 1, 1)",k.state=f.FADING_IN,t.persistent||(this._mostRecentTransientRipple=k);let pe=null;return!G&&(m||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ge=()=>this._finishRippleTransition(k),_e=()=>this._destroyRipple(k);l.addEventListener("transitionend",ge),l.addEventListener("transitioncancel",_e),pe={onTransitionEnd:ge,onTransitionCancel:_e}}),this._activeRipples.set(k,pe),(G||!m)&&this._finishRippleTransition(k),k}fadeOutRipple(e){if(e.state===f.FADING_OUT||e.state===f.HIDDEN)return;let o=e.element,t=u(u({},Xe),e.config.animation);o.style.transitionDuration=`${t.exitDuration}ms`,o.style.opacity="0",e.state=f.FADING_OUT,(e._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let o=M(e);!this._platform.isBrowser||!o||o===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=o,Je.forEach(t=>{B._eventManager.addHandler(this._ngZone,t,o,this)}))}handleEvent(e){e.type==="mousedown"?this._onMousedown(e):e.type==="touchstart"?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{et.forEach(o=>{this._triggerElement.addEventListener(o,this,qe)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===f.FADING_IN?this._startFadeOutTransition(e):e.state===f.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let o=e===this._mostRecentTransientRipple,{persistent:t}=e.config;e.state=f.VISIBLE,!t&&(!o||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let o=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=f.HIDDEN,o!==null&&(e.element.removeEventListener("transitionend",o.onTransitionEnd),e.element.removeEventListener("transitioncancel",o.onTransitionCancel)),e.element.remove()}_onMousedown(e){let o=oe(e),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Xt;!this._target.rippleDisabled&&!o&&!t&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!re(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let o=e.changedTouches;if(o)for(let t=0;t<o.length;t++)this.fadeInRipple(o[t].clientX,o[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let o=e.state===f.VISIBLE||e.config.terminateOnPointerUp&&e.state===f.FADING_IN;!e.config.persistent&&o&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(Je.forEach(o=>B._eventManager.removeHandler(o,e,this)),this._pointerUpEventsRegistered&&(et.forEach(o=>e.removeEventListener(o,this,qe)),this._pointerUpEventsRegistered=!1))}};B._eventManager=new he;var ue=B;function qt(n,e,o){let t=Math.max(Math.abs(n-o.left),Math.abs(n-o.right)),i=Math.max(Math.abs(e-o.top),Math.abs(e-o.bottom));return Math.sqrt(t*t+i*i)}var st=new _("mat-ripple-global-options"),Jt=(()=>{let e=class e{get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}constructor(t,i,s,r,a){this._elementRef=t,this._animationMode=a,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=r||{},this._rippleRenderer=new ue(this,i,t,s)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:u(u(u({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,i=0,s){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,i,u(u({},this.rippleConfig),s)):this._rippleRenderer.fadeInRipple(0,0,u(u({},this.rippleConfig),t))}};e.\u0275fac=function(i){return new(i||e)(D(w),D(p),D(g),D(st,8),D(Q,8))},e.\u0275dir=S({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,s){i&2&&q("mat-ripple-unbounded",s.unbounded)},inputs:{color:[v.None,"matRippleColor","color"],unbounded:[v.None,"matRippleUnbounded","unbounded"],centered:[v.None,"matRippleCentered","centered"],radius:[v.None,"matRippleRadius","radius"],animation:[v.None,"matRippleAnimation","animation"],disabled:[v.None,"matRippleDisabled","disabled"],trigger:[v.None,"matRippleTrigger","trigger"]},exportAs:["matRipple"],standalone:!0});let n=e;return n})();var tt={capture:!0},it=["focus","click","mouseenter","touchstart"],ce="mat-ripple-loader-uninitialized",de="mat-ripple-loader-class-name",nt="mat-ripple-loader-centered",z="mat-ripple-loader-disabled",Vn=(()=>{let e=class e{constructor(){this._document=b(y,{optional:!0}),this._animationMode=b(Q,{optional:!0}),this._globalRippleOptions=b(st,{optional:!0}),this._platform=b(g),this._ngZone=b(p),this._hosts=new Map,this._onInteraction=t=>{if(!(t.target instanceof HTMLElement))return;let s=t.target.closest(`[${ce}]`);s&&this._createRipple(s)},this._ngZone.runOutsideAngular(()=>{for(let t of it)this._document?.addEventListener(t,this._onInteraction,tt)})}ngOnDestroy(){let t=this._hosts.keys();for(let i of t)this.destroyRipple(i);for(let i of it)this._document?.removeEventListener(i,this._onInteraction,tt)}configureRipple(t,i){t.setAttribute(ce,""),(i.className||!t.hasAttribute(de))&&t.setAttribute(de,i.className||""),i.centered&&t.setAttribute(nt,""),i.disabled&&t.setAttribute(z,"")}getRipple(t){return this._hosts.get(t)||this._createRipple(t)}setDisabled(t,i){let s=this._hosts.get(t);if(s){s.disabled=i;return}i?t.setAttribute(z,""):t.removeAttribute(z)}_createRipple(t){if(!this._document)return;let i=this._hosts.get(t);if(i)return i;t.querySelector(".mat-ripple")?.remove();let s=this._document.createElement("span");s.classList.add("mat-ripple",t.getAttribute(de)),t.append(s);let r=new Jt(new w(s),this._ngZone,this._platform,this._globalRippleOptions?this._globalRippleOptions:void 0,this._animationMode?this._animationMode:void 0);return r._isInitialized=!0,r.trigger=t,r.centered=t.hasAttribute(nt),r.disabled=t.hasAttribute(z),this.attachRipple(t,r),r}attachRipple(t,i){t.removeAttribute(ce),this._hosts.set(t,i)}destroyRipple(t){let i=this._hosts.get(t);i&&(i.ngOnDestroy(),this._hosts.delete(t))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Hn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=xe({type:e,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,s){i&2&&q("mdc-form-field--align-end",s.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},standalone:!0,features:[Fe],attrs:Gt,ngContentSelectors:Zt,decls:1,vars:0,template:function(i,s){i&1&&(Ne(),Oe(0))},styles:[".mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-form-field{font-family:var(--mdc-form-field-label-text-font);line-height:var(--mdc-form-field-label-text-line-height);font-size:var(--mdc-form-field-label-text-size);font-weight:var(--mdc-form-field-label-text-weight);letter-spacing:var(--mdc-form-field-label-text-tracking);color:var(--mdc-form-field-label-text-color)}.mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}"],encapsulation:2,changeDetection:0});let n=e;return n})();export{g as a,oi as b,F as c,ri as d,T as e,Pe as f,Be as g,ct as h,ie as i,di as j,M as k,hi as l,Ke as m,Ei as n,We as o,oe as p,re as q,Vi as r,Hi as s,Ji as t,Bn as u,Ye as v,Un as w,st as x,Jt as y,Vn as z,Hn as A};
