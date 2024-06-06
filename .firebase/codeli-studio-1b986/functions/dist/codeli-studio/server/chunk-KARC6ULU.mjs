import './polyfills.server.mjs';
import{Da as y,Ga as T,Ha as w,La as P,X as c,Y as L,Ya as m,_ as f,aa as h,ba as u,cb as F,db as k,ea as d,eb as N,ga as B,gb as $,ha as g,kb as x,na as E,qc as A,ua as R,vb as U,vc as D,wc as S,xa as p,ya as O}from"./chunk-GPB6YLZS.mjs";var Y=null;function b(){return Y}function et(i){Y??=i}var z=class{};var C=new f(""),W=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:()=>u(q),providedIn:"platform"});let i=t;return i})();var q=(()=>{let t=class t extends W{constructor(){super(),this._doc=u(C),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return b().getBaseHref(this._doc)}onPopState(e){let n=b().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=b().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:()=>new t,providedIn:"platform"});let i=t;return i})();function Z(i,t){if(i.length==0)return t;if(t.length==0)return i;let s=0;return i.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?i+t.substring(1):s==1?i+t:i+"/"+t}function V(i){let t=i.match(/#|\?|$/),s=t&&t.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function l(i){return i&&i[0]!=="?"?"?"+i:i}var M=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:()=>u(Q),providedIn:"root"});let i=t;return i})(),X=new f(""),Q=(()=>{let t=class t extends M{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??u(C).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Z(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+l(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+l(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+l(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(h(W),h(X,8))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var J=(()=>{let t=class t{constructor(e){this._subject=new O,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=ne(V(j(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+l(n))}normalize(e){return t.stripTrailingSlash(te(this._basePath,j(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+l(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+l(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}};t.normalizeQueryParams=l,t.joinWithSlash=Z,t.stripTrailingSlash=V,t.\u0275fac=function(n){return new(n||t)(h(M))},t.\u0275prov=c({token:t,factory:()=>ee(),providedIn:"root"});let i=t;return i})();function ee(){return new J(h(M))}function te(i,t){if(!i||!t.startsWith(i))return t;let s=t.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function j(i){return i.replace(/\/index.html$/,"")}function ne(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function tt(i,t){t=encodeURIComponent(t);for(let s of i.split(";")){let e=s.indexOf("="),[n,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(n.trim()===t)return decodeURIComponent(r)}return null}var v=/\s+/,G=[],nt=(()=>{let t=class t{constructor(e,n){this._ngEl=e,this._renderer=n,this.initialClasses=G,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(v):G}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(v):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(v).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};t.\u0275fac=function(n){return new(n||t)(m(p),m(F))},t.\u0275dir=g({type:t,selectors:[["","ngClass",""]],inputs:{klass:[d.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let i=t;return i})();var it=(()=>{let t=class t{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}};t.\u0275fac=function(n){return new(n||t)(m($))},t.\u0275dir=g({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[E]});let i=t;return i})();var rt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=B({type:t}),t.\u0275inj=L({});let i=t;return i})(),ie="browser",re="server";function se(i){return i===ie}function oe(i){return i===re}var st=(()=>{let t=class t{};t.\u0275prov=c({token:t,providedIn:"root",factory:()=>se(u(y))?new _(u(C),window):new I});let i=t;return i})(),_=class{constructor(t,s){this.document=t,this.window=s,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let s=ue(this.document,t);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let s=t.getBoundingClientRect(),e=s.left+this.window.pageXOffset,n=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(e-r[0],n-r[1])}};function ue(i,t){let s=i.getElementById(t)||i.getElementsByName(t)[0];if(s)return s;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let e=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),n=e.currentNode;for(;n;){let r=n.shadowRoot;if(r){let o=r.getElementById(t)||r.querySelector(`[name="${t}"]`);if(o)return o}n=e.nextNode()}}return null}var I=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},H=class{};var K=i=>i.src,ae=new f("",{providedIn:"root",factory:()=>K});var ce=new f("NG_OPTIMIZED_PRELOADED_IMAGES",{providedIn:"root",factory:()=>new Set}),de=(()=>{let t=class t{constructor(){this.preloadedImages=u(ce),this.document=u(C)}createPreloadLinkTag(e,n,r,o){if(this.preloadedImages.has(n))return;this.preloadedImages.add(n);let a=e.createElement("link");e.setAttribute(a,"as","image"),e.setAttribute(a,"href",n),e.setAttribute(a,"rel","preload"),e.setAttribute(a,"fetchpriority","high"),o&&e.setAttribute(a,"imageSizes",o),r&&e.setAttribute(a,"imageSrcset",r),e.appendChild(this.document.head,a)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var le=/^((\s*\d+w\s*(,|$)){1,})$/;var he=[1,2],fe=640;var De=1920,ge=1080;var ot=(()=>{let t=class t{constructor(){this.imageLoader=u(ae),this.config=pe(u(w)),this.renderer=u(F),this.imgElement=u(p).nativeElement,this.injector=u(R),this.isServer=oe(u(y)),this.preloadLinkCreator=u(de),this.lcpObserver=null,this._renderedSrc=null,this.priority=!1,this.disableOptimizedSrcset=!1,this.fill=!1}ngOnInit(){k("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes&&this.setHostAttribute("sizes",this.sizes),this.isServer&&this.priority&&this.preloadLinkCreator.createPreloadLinkTag(this.renderer,this.getRewrittenSrc(),e,this.sizes)}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let n=this._renderedSrc;this.updateSrcAndSrcset(!0);let r=this._renderedSrc;this.lcpObserver!==null&&n&&r&&n!==r&&this.injector.get(N).runOutsideAngular(()=>{this.lcpObserver?.updateImage(n,r)})}}callImageLoader(e){let n=e;return this.loaderParams&&(n.loaderParams=this.loaderParams),this.imageLoader(n)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=le.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>r!=="").map(r=>{r=r.trim();let o=e?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${r}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,n=e;return this.sizes?.trim()==="100vw"&&(n=e.filter(o=>o>=fe)),n.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let n=this.getRewrittenSrc();this.setHostAttribute("src",n);let r;return this.ngSrcset?r=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(r=this.getAutomaticSrcset()),r&&this.setHostAttribute("srcset",r),r}getFixedSrcset(){return he.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>De||this.height>ge),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==K&&!e}generatePlaceholder(e){let{placeholderResolution:n}=this.config;return e===!0?`url(${this.callImageLoader({src:this.ngSrc,width:n,isPlaceholder:!0})})`:typeof e=="string"&&e.startsWith("data:")?`url(${e})`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let n=()=>{let a=this.injector.get(A);r(),o(),this.placeholder=!1,a.markForCheck()},r=this.renderer.listen(e,"load",n),o=this.renderer.listen(e,"error",n)}ngOnDestroy(){}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=g({type:t,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(n,r){n&2&&U("position",r.fill?"absolute":null)("width",r.fill?"100%":null)("height",r.fill?"100%":null)("inset",r.fill?"0":null)("background-size",r.placeholder?"cover":null)("background-position",r.placeholder?"50% 50%":null)("background-repeat",r.placeholder?"no-repeat":null)("background-image",r.placeholder?r.generatePlaceholder(r.placeholder):null)("filter",r.placeholder&&r.shouldBlurPlaceholder(r.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[d.HasDecoratorInputTransform,"ngSrc","ngSrc",me],ngSrcset:"ngSrcset",sizes:"sizes",width:[d.HasDecoratorInputTransform,"width","width",S],height:[d.HasDecoratorInputTransform,"height","height",S],loading:"loading",priority:[d.HasDecoratorInputTransform,"priority","priority",D],loaderParams:"loaderParams",disableOptimizedSrcset:[d.HasDecoratorInputTransform,"disableOptimizedSrcset","disableOptimizedSrcset",D],fill:[d.HasDecoratorInputTransform,"fill","fill",D],placeholder:[d.HasDecoratorInputTransform,"placeholder","placeholder",Fe],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},standalone:!0,features:[x,E]});let i=t;return i})();function pe(i){let t={};return i.breakpoints&&(t.breakpoints=i.breakpoints.sort((s,e)=>s-e)),Object.assign({},T,i,t)}function me(i){return typeof i=="string"?i:P(i)}function Fe(i){return typeof i=="string"&&i.startsWith("data:")?i:D(i)}export{b as a,et as b,z as c,C as d,W as e,M as f,X as g,J as h,tt as i,nt as j,it as k,rt as l,ie as m,re as n,se as o,oe as p,st as q,I as r,H as s,ae as t,ot as u};
