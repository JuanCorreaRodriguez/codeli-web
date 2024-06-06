import{a as ne,b as ot,c as it,d as E,g as re,k as at,m as K,o as se}from"./chunk-LEYOZQU3.js";import{D as Ce,Ea as $e,Fa as pe,G as je,Ga as Ke,Ha as P,Ja as ye,Ma as te,N as Fe,Na as F,Oa as U,Pa as Xe,Qa as Je,Ra as Ge,Sa as qe,Ta as We,Ua as Ze,Va as Ye,Wa as L,X as Ue,Ya as $,Z as _e,_ as A,a as j,aa as g,b as ke,c as Le,da as b,db as Qe,e as ue,fa as u,fb as He,ga as w,gb as x,h as he,ha as V,jc as tt,kc as me,lc as nt,na as ee,oa as Be,p as xe,pa as ze,pb as et,pc as rt,q as H,qa as Ve,qc as st,u as z,za as fe}from"./chunk-WUFZEOXI.js";var J=class{},G=class{},M=class t{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(s=>{let n=s.indexOf(":");if(n>0){let r=s.slice(0,n),o=r.toLowerCase(),a=s.slice(n+1).trim();this.maybeSetNormalizedName(r,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((s,n)=>{this.setHeaderEntries(n,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([s,n])=>{this.setHeaderEntries(s,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let s=this.headers.get(e.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,s){return this.clone({name:e,value:s,op:"a"})}set(e,s){return this.clone({name:e,value:s,op:"s"})}delete(e,s){return this.clone({name:e,value:s,op:"d"})}maybeSetNormalizedName(e,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,e)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(s=>{this.headers.set(s,e.headers.get(s)),this.normalizedNames.set(s,e.normalizedNames.get(s))})}clone(e){let s=new t;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([e]),s}applyUpdate(e){let s=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,s);let r=(e.op==="a"?this.headers.get(s):void 0)||[];r.push(...n),this.headers.set(s,r);break;case"d":let o=e.value;if(!o)this.headers.delete(s),this.normalizedNames.delete(s);else{let a=this.headers.get(s);if(!a)return;a=a.filter(i=>o.indexOf(i)===-1),a.length===0?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,a)}break}}setHeaderEntries(e,s){let n=(Array.isArray(s)?s:[s]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>e(this.normalizedNames.get(s),this.headers.get(s)))}};var we=class{encodeKey(e){return ct(e)}encodeValue(e){return ct(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function Bt(t,e){let s=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,i]=o==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],l=s.get(a)||[];l.push(i),s.set(a,l)}),s}var zt=/%(\d[a-f0-9])/gi,Vt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ct(t){return encodeURIComponent(t).replace(zt,(e,s)=>Vt[s]??e)}function oe(t){return`${t}`}var O=class t{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new we,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Bt(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(s=>{let n=e.fromObject[s],r=Array.isArray(n)?n.map(oe):[oe(n)];this.map.set(s,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let s=this.map.get(e);return s?s[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,s){return this.clone({param:e,value:s,op:"a"})}appendAll(e){let s=[];return Object.keys(e).forEach(n=>{let r=e[n];Array.isArray(r)?r.forEach(o=>{s.push({param:n,value:o,op:"a"})}):s.push({param:n,value:r,op:"a"})}),this.clone(s)}set(e,s){return this.clone({param:e,value:s,op:"s"})}delete(e,s){return this.clone({param:e,value:s,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let s=this.encoder.encodeKey(e);return this.map.get(e).map(n=>s+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let s=new t({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(e),s}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let s=(e.op==="a"?this.map.get(e.param):void 0)||[];s.push(oe(e.value)),this.map.set(e.param,s);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],r=n.indexOf(oe(e.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Ee=class{constructor(){this.map=new Map}set(e,s){return this.map.set(e,s),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function $t(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function lt(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function dt(t){return typeof Blob<"u"&&t instanceof Blob}function ut(t){return typeof FormData<"u"&&t instanceof FormData}function Kt(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var X=class t{constructor(e,s,n,r){this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if($t(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new M,this.context??=new Ee,!this.params)this.params=new O,this.urlWithParams=s;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=s;else{let i=s.indexOf("?"),l=i===-1?"?":i<s.length-1?"&":"";this.urlWithParams=s+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||lt(this.body)||dt(this.body)||ut(this.body)||Kt(this.body)?this.body:this.body instanceof O?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ut(this.body)?null:dt(this.body)?this.body.type||null:lt(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof O?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let s=e.method||this.method,n=e.url||this.url,r=e.responseType||this.responseType,o=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,i=e.withCredentials??this.withCredentials,l=e.reportProgress??this.reportProgress,c=e.headers||this.headers,h=e.params||this.params,y=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((d,R)=>d.set(R,e.setHeaders[R]),c)),e.setParams&&(h=Object.keys(e.setParams).reduce((d,R)=>d.set(R,e.setParams[R]),h)),new t(s,n,a,{params:h,headers:c,context:y,reportProgress:l,responseType:r,withCredentials:i,transferCache:o})}},I=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(I||{}),q=class{constructor(e,s=W.Ok,n="OK"){this.headers=e.headers||new M,this.status=e.status!==void 0?e.status:s,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},ae=class t extends q{constructor(e={}){super(e),this.type=I.ResponseHeader}clone(e={}){return new t({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},C=class t extends q{constructor(e={}){super(e),this.type=I.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new t({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},N=class extends q{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},W=function(t){return t[t.Continue=100]="Continue",t[t.SwitchingProtocols=101]="SwitchingProtocols",t[t.Processing=102]="Processing",t[t.EarlyHints=103]="EarlyHints",t[t.Ok=200]="Ok",t[t.Created=201]="Created",t[t.Accepted=202]="Accepted",t[t.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",t[t.NoContent=204]="NoContent",t[t.ResetContent=205]="ResetContent",t[t.PartialContent=206]="PartialContent",t[t.MultiStatus=207]="MultiStatus",t[t.AlreadyReported=208]="AlreadyReported",t[t.ImUsed=226]="ImUsed",t[t.MultipleChoices=300]="MultipleChoices",t[t.MovedPermanently=301]="MovedPermanently",t[t.Found=302]="Found",t[t.SeeOther=303]="SeeOther",t[t.NotModified=304]="NotModified",t[t.UseProxy=305]="UseProxy",t[t.Unused=306]="Unused",t[t.TemporaryRedirect=307]="TemporaryRedirect",t[t.PermanentRedirect=308]="PermanentRedirect",t[t.BadRequest=400]="BadRequest",t[t.Unauthorized=401]="Unauthorized",t[t.PaymentRequired=402]="PaymentRequired",t[t.Forbidden=403]="Forbidden",t[t.NotFound=404]="NotFound",t[t.MethodNotAllowed=405]="MethodNotAllowed",t[t.NotAcceptable=406]="NotAcceptable",t[t.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",t[t.RequestTimeout=408]="RequestTimeout",t[t.Conflict=409]="Conflict",t[t.Gone=410]="Gone",t[t.LengthRequired=411]="LengthRequired",t[t.PreconditionFailed=412]="PreconditionFailed",t[t.PayloadTooLarge=413]="PayloadTooLarge",t[t.UriTooLong=414]="UriTooLong",t[t.UnsupportedMediaType=415]="UnsupportedMediaType",t[t.RangeNotSatisfiable=416]="RangeNotSatisfiable",t[t.ExpectationFailed=417]="ExpectationFailed",t[t.ImATeapot=418]="ImATeapot",t[t.MisdirectedRequest=421]="MisdirectedRequest",t[t.UnprocessableEntity=422]="UnprocessableEntity",t[t.Locked=423]="Locked",t[t.FailedDependency=424]="FailedDependency",t[t.TooEarly=425]="TooEarly",t[t.UpgradeRequired=426]="UpgradeRequired",t[t.PreconditionRequired=428]="PreconditionRequired",t[t.TooManyRequests=429]="TooManyRequests",t[t.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",t[t.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",t[t.InternalServerError=500]="InternalServerError",t[t.NotImplemented=501]="NotImplemented",t[t.BadGateway=502]="BadGateway",t[t.ServiceUnavailable=503]="ServiceUnavailable",t[t.GatewayTimeout=504]="GatewayTimeout",t[t.HttpVersionNotSupported=505]="HttpVersionNotSupported",t[t.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",t[t.InsufficientStorage=507]="InsufficientStorage",t[t.LoopDetected=508]="LoopDetected",t[t.NotExtended=510]="NotExtended",t[t.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",t}(W||{});function ge(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var Xt=(()=>{let e=class e{constructor(n){this.handler=n}request(n,r,o={}){let a;if(n instanceof X)a=n;else{let c;o.headers instanceof M?c=o.headers:c=new M(o.headers);let h;o.params&&(o.params instanceof O?h=o.params:h=new O({fromObject:o.params})),a=new X(n,r,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:h,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let i=H(a).pipe(je(c=>this.handler.handle(c)));if(n instanceof X||o.observe==="events")return i;let l=i.pipe(Ce(c=>c instanceof C));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(z(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe(z(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe(z(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return l.pipe(z(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new O().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,ge(o,r))}post(n,r,o={}){return this.request("POST",n,ge(o,r))}put(n,r,o={}){return this.request("PUT",n,ge(o,r))}};e.\u0275fac=function(r){return new(r||e)(u(J))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Jt=/^\)\]\}',?\n/,Gt="X-Request-URL";function ht(t){if(t.url)return t.url;let e=Gt.toLocaleLowerCase();return t.headers.get(e)}var ve=(()=>{let e=class e{constructor(){this.fetchImpl=w(Te,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=w(x)}handle(n){return new he(r=>{let o=new AbortController;return this.doRequest(n,o.signal,r).then(Re,a=>r.error(new N({error:a}))),()=>o.abort()})}doRequest(n,r,o){return ue(this,null,function*(){let a=this.createRequestInit(n),i;try{let v=this.fetchImpl(n.urlWithParams,j({signal:r},a));qt(v),o.next({type:I.Sent}),i=yield v}catch(v){o.error(new N({error:v,status:v.status??0,statusText:v.statusText,url:n.urlWithParams,headers:v.headers}));return}let l=new M(i.headers),c=i.statusText,h=ht(i)??n.urlWithParams,y=i.status,d=null;if(n.reportProgress&&o.next(new ae({headers:l,status:y,statusText:c,url:h})),i.body){let v=i.headers.get("content-length"),S=[],f=i.body.getReader(),p=0,T,D,m=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>ue(this,null,function*(){for(;;){let{done:k,value:B}=yield f.read();if(k)break;if(S.push(B),p+=B.length,n.reportProgress){D=n.responseType==="text"?(D??"")+(T??=new TextDecoder).decode(B,{stream:!0}):void 0;let Se=()=>o.next({type:I.DownloadProgress,total:v?+v:void 0,loaded:p,partialText:D});m?m.run(Se):Se()}}}));let _=this.concatChunks(S,p);try{let k=i.headers.get("Content-Type")??"";d=this.parseBody(n,_,k)}catch(k){o.error(new N({error:k,headers:new M(i.headers),status:i.status,statusText:i.statusText,url:ht(i)??n.urlWithParams}));return}}y===0&&(y=d?W.Ok:0),y>=200&&y<300?(o.next(new C({body:d,headers:l,status:y,statusText:c,url:h})),o.complete()):o.error(new N({error:d,headers:l,status:y,statusText:c,url:h}))})}parseBody(n,r,o){switch(n.responseType){case"json":let a=new TextDecoder().decode(r).replace(Jt,"");return a===""?null:JSON.parse(a);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:o});case"arraybuffer":return r.buffer}}createRequestInit(n){let r={},o=n.withCredentials?"include":void 0;if(n.headers.forEach((a,i)=>r[a]=i.join(",")),r.Accept??="application/json, text/plain, */*",!r["Content-Type"]){let a=n.detectContentTypeHeader();a!==null&&(r["Content-Type"]=a)}return{body:n.serializeBody(),method:n.method,headers:r,credentials:o}}concatChunks(n,r){let o=new Uint8Array(r),a=0;for(let i of n)o.set(i,a),a+=i.length;return o}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Te=class{};function Re(){}function qt(t){t.then(Re,Re)}function Wt(t,e){return e(t)}function Zt(t,e,s){return(n,r)=>Ve(s,()=>e(n,o=>t(o,r)))}var Rt=new b(""),bt=new b(""),Mt=new b("");var ft=(()=>{let e=class e extends J{constructor(n,r){super(),this.backend=n,this.injector=r,this.chain=null,this.pendingTasks=w(et);let o=w(Mt,{optional:!0});this.backend=o??n}handle(n){if(this.chain===null){let o=Array.from(new Set([...this.injector.get(Rt),...this.injector.get(bt,[])]));this.chain=o.reduceRight((a,i)=>Zt(a,i,this.injector),Wt)}let r=this.pendingTasks.add();return this.chain(n,o=>this.backend.handle(o)).pipe(Fe(()=>this.pendingTasks.remove(r)))}};e.\u0275fac=function(r){return new(r||e)(u(G),u(ze))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})();var Yt=/^\)\]\}',?\n/;function Qt(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}var pt=(()=>{let e=class e{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new A(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?xe(r.\u0275loadImpl()):H(null)).pipe(Ue(()=>new he(a=>{let i=r.build();if(i.open(n.method,n.urlWithParams),n.withCredentials&&(i.withCredentials=!0),n.headers.forEach((f,p)=>i.setRequestHeader(f,p.join(","))),n.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let f=n.detectContentTypeHeader();f!==null&&i.setRequestHeader("Content-Type",f)}if(n.responseType){let f=n.responseType.toLowerCase();i.responseType=f!=="json"?f:"text"}let l=n.serializeBody(),c=null,h=()=>{if(c!==null)return c;let f=i.statusText||"OK",p=new M(i.getAllResponseHeaders()),T=Qt(i)||n.url;return c=new ae({headers:p,status:i.status,statusText:f,url:T}),c},y=()=>{let{headers:f,status:p,statusText:T,url:D}=h(),m=null;p!==W.NoContent&&(m=typeof i.response>"u"?i.responseText:i.response),p===0&&(p=m?W.Ok:0);let _=p>=200&&p<300;if(n.responseType==="json"&&typeof m=="string"){let k=m;m=m.replace(Yt,"");try{m=m!==""?JSON.parse(m):null}catch(B){m=k,_&&(_=!1,m={error:B,text:m})}}_?(a.next(new C({body:m,headers:f,status:p,statusText:T,url:D||void 0})),a.complete()):a.error(new N({error:m,headers:f,status:p,statusText:T,url:D||void 0}))},d=f=>{let{url:p}=h(),T=new N({error:f,status:i.status||0,statusText:i.statusText||"Unknown Error",url:p||void 0});a.error(T)},R=!1,v=f=>{R||(a.next(h()),R=!0);let p={type:I.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(p.total=f.total),n.responseType==="text"&&i.responseText&&(p.partialText=i.responseText),a.next(p)},S=f=>{let p={type:I.UploadProgress,loaded:f.loaded};f.lengthComputable&&(p.total=f.total),a.next(p)};return i.addEventListener("load",y),i.addEventListener("error",d),i.addEventListener("timeout",d),i.addEventListener("abort",d),n.reportProgress&&(i.addEventListener("progress",v),l!==null&&i.upload&&i.upload.addEventListener("progress",S)),i.send(l),a.next({type:I.Sent}),()=>{i.removeEventListener("error",d),i.removeEventListener("abort",d),i.removeEventListener("load",y),i.removeEventListener("timeout",d),n.reportProgress&&(i.removeEventListener("progress",v),l!==null&&i.upload&&i.upload.removeEventListener("progress",S)),i.readyState!==i.DONE&&i.abort()}})))}};e.\u0275fac=function(r){return new(r||e)(u(se))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Dt=new b(""),Ht="XSRF-TOKEN",en=new b("",{providedIn:"root",factory:()=>Ht}),tn="X-XSRF-TOKEN",nn=new b("",{providedIn:"root",factory:()=>tn}),ce=class{},rn=(()=>{let e=class e{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=re(n,this.cookieName),this.lastCookieString=n),this.lastToken}};e.\u0275fac=function(r){return new(r||e)(u(E),u(P),u(en))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})();function sn(t,e){let s=t.url.toLowerCase();if(!w(Dt)||t.method==="GET"||t.method==="HEAD"||s.startsWith("http://")||s.startsWith("https://"))return e(t);let n=w(ce).getToken(),r=w(nn);return n!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,n)})),e(t)}var At=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(At||{});function on(t,e){return{\u0275kind:t,\u0275providers:e}}function Xn(...t){let e=[Xt,pt,ft,{provide:J,useExisting:ft},{provide:G,useExisting:pt},{provide:Rt,useValue:sn,multi:!0},{provide:Dt,useValue:!0},{provide:ce,useClass:rn}];for(let s of t)e.push(...s.\u0275providers);return ee(e)}function Jn(){return on(At.Fetch,[ve,{provide:G,useExisting:ve},{provide:Mt,useExisting:ve}])}var yt="b",mt="h",gt="s",vt="st",wt="u",Et="rt",ie=new b(""),an=["GET","HEAD"];function cn(t,e){let y=w(ie),{isCacheActive:s}=y,n=Le(y,["isCacheActive"]),{transferCache:r,method:o}=t;if(!s||o==="POST"&&!n.includePostRequests&&!r||o!=="POST"&&!an.includes(o)||r===!1||n.filter?.(t)===!1)return e(t);let a=w(te),i=dn(t),l=a.get(i,null),c=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(c=r.includeHeaders),l){let{[yt]:d,[Et]:R,[mt]:v,[gt]:S,[vt]:f,[wt]:p}=l,T=d;switch(R){case"arraybuffer":T=new TextEncoder().encode(d).buffer;break;case"blob":T=new Blob([d]);break}let D=new M(v);return H(new C({body:T,headers:D,status:S,statusText:f,url:p}))}let h=K(w(P));return e(t).pipe(_e(d=>{d instanceof C&&h&&a.set(i,{[yt]:d.body,[mt]:ln(d.headers,c),[gt]:d.status,[vt]:d.statusText,[wt]:d.url||"",[Et]:t.responseType})}))}function ln(t,e){if(!e)return{};let s={};for(let n of e){let r=t.getAll(n);r!==null&&(s[n]=r)}return s}function Tt(t){return[...t.keys()].sort().map(e=>`${e}=${t.getAll(e)}`).join("&")}function dn(t){let{params:e,method:s,responseType:n,url:r}=t,o=Tt(e),a=t.serializeBody();a instanceof URLSearchParams?a=Tt(a):typeof a!="string"&&(a="");let i=[s,n,r,a,o].join("|"),l=un(i);return l}function un(t){let e=0;for(let s of t)e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Pt(t){return[{provide:ie,useFactory:()=>(He("NgHttpTransferCache"),j({isCacheActive:!0},t))},{provide:bt,useValue:cn,multi:!0,deps:[te,ie]},{provide:tt,multi:!0,useFactory:()=>{let e=w(me),s=w(ie);return()=>{nt(e).then(()=>{s.isCacheActive=!1})}}}]}var De=class extends it{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Ae=class t extends De{static makeCurrent(){ot(new t)}onAndCancel(e,s,n){return e.addEventListener(s,n),()=>{e.removeEventListener(s,n)}}dispatchEvent(e,s){e.dispatchEvent(s)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,s){return s=s||this.getDefaultDocument(),s.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,s){return s==="window"?window:s==="document"?e:s==="body"?e.body:null}getBaseHref(e){let s=fn();return s==null?null:pn(s)}resetBaseElement(){Z=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return re(document.cookie,e)}},Z=null;function fn(){return Z=Z||document.querySelector("base"),Z?Z.getAttribute("href"):null}function pn(t){return new URL(t,document.baseURI).pathname}var yn=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Pe=new b(""),St=(()=>{let e=class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>{o.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(a=>a.supports(n)),!r)throw new A(5101,!1);return this._eventNameToPlugin.set(n,r),r}};e.\u0275fac=function(r){return new(r||e)(u(Pe),u(x))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),le=class{constructor(e){this._doc=e}},be="ng-app-id",kt=(()=>{let e=class e{constructor(n,r,o,a={}){this.doc=n,this.appId=r,this.nonce=o,this.platformId=a,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=K(a),this.resetHostNodes()}addStyles(n){for(let r of n)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(n){for(let r of n)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let n=this.styleNodesInDOM;n&&(n.forEach(r=>r.remove()),n.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(n){this.hostNodes.add(n);for(let r of this.getAllStyles())this.addStyleToHost(n,r)}removeHost(n){this.hostNodes.delete(n)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(n){for(let r of this.hostNodes)this.addStyleToHost(r,n)}onStyleRemoved(n){let r=this.styleRef;r.get(n)?.elements?.forEach(o=>o.remove()),r.delete(n)}collectServerRenderedStyles(){let n=this.doc.head?.querySelectorAll(`style[${be}="${this.appId}"]`);if(n?.length){let r=new Map;return n.forEach(o=>{o.textContent!=null&&r.set(o.textContent,o)}),r}return null}changeUsageCount(n,r){let o=this.styleRef;if(o.has(n)){let a=o.get(n);return a.usage+=r,a.usage}return o.set(n,{usage:r,elements:[]}),r}getStyleElement(n,r){let o=this.styleNodesInDOM,a=o?.get(r);if(a?.parentNode===n)return o.delete(r),a.removeAttribute(be),a;{let i=this.doc.createElement("style");return this.nonce&&i.setAttribute("nonce",this.nonce),i.textContent=r,this.platformIsServer&&i.setAttribute(be,this.appId),n.appendChild(i),i}}addStyleToHost(n,r){let o=this.getStyleElement(n,r),a=this.styleRef,i=a.get(r)?.elements;i?i.push(o):a.set(r,{elements:[o],usage:1})}resetHostNodes(){let n=this.hostNodes;n.clear(),n.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(u(E),u(pe),u(ye,8),u(P))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Me={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Ie=/%COMP%/g,Lt="%COMP%",mn=`_nghost-${Lt}`,gn=`_ngcontent-${Lt}`,vn=!0,wn=new b("",{providedIn:"root",factory:()=>vn});function En(t){return gn.replace(Ie,t)}function Tn(t){return mn.replace(Ie,t)}function xt(t,e){return e.map(s=>s.replace(Ie,t))}var Nt=(()=>{let e=class e{constructor(n,r,o,a,i,l,c,h=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=a,this.doc=i,this.platformId=l,this.ngZone=c,this.nonce=h,this.rendererByCompId=new Map,this.platformIsServer=K(l),this.defaultRenderer=new Y(n,i,c,this.platformIsServer)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===V.ShadowDom&&(r=ke(j({},r),{encapsulation:V.Emulated}));let o=this.getOrCreateRenderer(n,r);return o instanceof de?o.applyToHost(n):o instanceof Q&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,a=o.get(r.id);if(!a){let i=this.doc,l=this.ngZone,c=this.eventManager,h=this.sharedStylesHost,y=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(r.encapsulation){case V.Emulated:a=new de(c,h,r,this.appId,y,i,l,d);break;case V.ShadowDom:return new Ne(c,h,n,r,i,l,this.nonce,d);default:a=new Q(c,h,r,y,i,l,d);break}o.set(r.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(u(St),u(kt),u(pe),u(wn),u(E),u(P),u(x),u(ye))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Y=class{constructor(e,s,n,r){this.eventManager=e,this.doc=s,this.ngZone=n,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,s){return s?this.doc.createElementNS(Me[s]||s,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,s){(Ot(e)?e.content:e).appendChild(s)}insertBefore(e,s,n){e&&(Ot(e)?e.content:e).insertBefore(s,n)}removeChild(e,s){e&&e.removeChild(s)}selectRootElement(e,s){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new A(-5104,!1);return s||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,s,n,r){if(r){s=r+":"+s;let o=Me[r];o?e.setAttributeNS(o,s,n):e.setAttribute(s,n)}else e.setAttribute(s,n)}removeAttribute(e,s,n){if(n){let r=Me[n];r?e.removeAttributeNS(r,s):e.removeAttribute(`${n}:${s}`)}else e.removeAttribute(s)}addClass(e,s){e.classList.add(s)}removeClass(e,s){e.classList.remove(s)}setStyle(e,s,n,r){r&($.DashCase|$.Important)?e.style.setProperty(s,n,r&$.Important?"important":""):e.style[s]=n}removeStyle(e,s,n){n&$.DashCase?e.style.removeProperty(s):e.style[s]=""}setProperty(e,s,n){e!=null&&(e[s]=n)}setValue(e,s){e.nodeValue=s}listen(e,s,n){if(typeof e=="string"&&(e=ne().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${s}`);return this.eventManager.addEventListener(e,s,this.decoratePreventDefault(n))}decoratePreventDefault(e){return s=>{if(s==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(s)):e(s))===!1&&s.preventDefault()}}};function Ot(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Ne=class extends Y{constructor(e,s,n,r,o,a,i,l){super(e,o,a,l),this.sharedStylesHost=s,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=xt(r.id,r.styles);for(let h of c){let y=document.createElement("style");i&&y.setAttribute("nonce",i),y.textContent=h,this.shadowRoot.appendChild(y)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,s){return super.appendChild(this.nodeOrShadowRoot(e),s)}insertBefore(e,s,n){return super.insertBefore(this.nodeOrShadowRoot(e),s,n)}removeChild(e,s){return super.removeChild(this.nodeOrShadowRoot(e),s)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Q=class extends Y{constructor(e,s,n,r,o,a,i,l){super(e,o,a,i),this.sharedStylesHost=s,this.removeStylesOnCompDestroy=r,this.styles=l?xt(l,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},de=class extends Q{constructor(e,s,n,r,o,a,i,l){let c=r+"-"+n.id;super(e,s,n,o,a,i,l,c),this.contentAttr=En(c),this.hostAttr=Tn(c)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,s){let n=super.createElement(e,s);return super.setAttribute(n,this.contentAttr,""),n}},Rn=(()=>{let e=class e extends le{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}};e.\u0275fac=function(r){return new(r||e)(u(E))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),It=["alt","control","meta","shift"],bn={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Mn={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Dn=(()=>{let e=class e extends le{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o){let a=e.parseEventName(r),i=e.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ne().onAndCancel(n,a.domEventName,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let a=e._normalizeKey(r.pop()),i="",l=r.indexOf("code");if(l>-1&&(r.splice(l,1),i="code."),It.forEach(h=>{let y=r.indexOf(h);y>-1&&(r.splice(y,1),i+=h+".")}),i+=a,r.length!=0||a.length===0)return null;let c={};return c.domEventName=o,c.fullKey=i,c}static matchEventFullKeyCode(n,r){let o=bn[n.key]||n.key,a="";return r.indexOf("code.")>-1&&(o=n.code,a="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),It.forEach(i=>{if(i!==o){let l=Mn[i];l(n)&&(a+=i+".")}}),a+=o,a===r)}static eventCallback(n,r,o){return a=>{e.matchEventFullKeyCode(a,n)&&o.runGuarded(()=>r(a))}}static _normalizeKey(n){return n==="esc"?"escape":n}};e.\u0275fac=function(r){return new(r||e)(u(E))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})();function mr(t,e){return rt(j({rootComponent:t},An(e)))}function An(t){return{appProviders:[...Sn,...t?.providers??[]],platformProviders:In}}function Pn(){Ae.makeCurrent()}function Nn(){return new fe}function On(){return $e(document),document}var In=[{provide:P,useValue:at},{provide:Ke,useValue:Pn,multi:!0},{provide:E,useFactory:On,deps:[]}];var Sn=[{provide:Be,useValue:"root"},{provide:fe,useFactory:Nn,deps:[]},{provide:Pe,useClass:Rn,multi:!0,deps:[E,x,P]},{provide:Pe,useClass:Dn,multi:!0,deps:[E]},Nt,kt,St,{provide:Qe,useExisting:Nt},{provide:se,useClass:yn,deps:[]},[]];var gr=(()=>{let e=class e{constructor(n){this._doc=n,this._dom=ne()}addTag(n,r=!1){return n?this._getOrCreateElement(n,r):null}addTags(n,r=!1){return n?n.reduce((o,a)=>(a&&o.push(this._getOrCreateElement(a,r)),o),[]):[]}getTag(n){return n&&this._doc.querySelector(`meta[${n}]`)||null}getTags(n){if(!n)return[];let r=this._doc.querySelectorAll(`meta[${n}]`);return r?[].slice.call(r):[]}updateTag(n,r){if(!n)return null;r=r||this._parseSelector(n);let o=this.getTag(r);return o?this._setMetaElementAttributes(n,o):this._getOrCreateElement(n,!0)}removeTag(n){this.removeTagElement(this.getTag(n))}removeTagElement(n){n&&this._dom.remove(n)}_getOrCreateElement(n,r=!1){if(!r){let i=this._parseSelector(n),l=this.getTags(i).filter(c=>this._containsAttributes(n,c))[0];if(l!==void 0)return l}let o=this._dom.createElement("meta");return this._setMetaElementAttributes(n,o),this._doc.getElementsByTagName("head")[0].appendChild(o),o}_setMetaElementAttributes(n,r){return Object.keys(n).forEach(o=>r.setAttribute(this._getMetaKeyMap(o),n[o])),r}_parseSelector(n){let r=n.name?"name":"property";return`${r}="${n[r]}"`}_containsAttributes(n,r){return Object.keys(n).every(o=>r.getAttribute(this._getMetaKeyMap(o))===n[o])}_getMetaKeyMap(n){return kn[n]||n}};e.\u0275fac=function(r){return new(r||e)(u(E))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),kn={httpEquiv:"http-equiv"},vr=(()=>{let e=class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}};e.\u0275fac=function(r){return new(r||e)(u(E))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ln=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=g({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=u(xn),o},providedIn:"root"});let t=e;return t})(),xn=(()=>{let e=class e extends Ln{constructor(n){super(),this._doc=n}sanitize(n,r){if(r==null)return null;switch(n){case L.NONE:return r;case L.HTML:return U(r,"HTML")?F(r):Ye(this._doc,String(r)).toString();case L.STYLE:return U(r,"Style")?F(r):r;case L.SCRIPT:if(U(r,"Script"))return F(r);throw new A(5200,!1);case L.URL:return U(r,"URL")?F(r):Ze(String(r));case L.RESOURCE_URL:if(U(r,"ResourceURL"))return F(r);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(n){return Xe(n)}bypassSecurityTrustStyle(n){return Je(n)}bypassSecurityTrustScript(n){return Ge(n)}bypassSecurityTrustUrl(n){return qe(n)}bypassSecurityTrustResourceUrl(n){return We(n)}};e.\u0275fac=function(r){return new(r||e)(u(E))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Oe=function(t){return t[t.NoHttpTransferCache=0]="NoHttpTransferCache",t[t.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",t}(Oe||{});function wr(...t){let e=[],s=new Set,n=s.has(Oe.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:o}of t)s.add(o),r.length&&e.push(r);return ee([[],st(),s.has(Oe.NoHttpTransferCache)||n?[]:Pt({}),e])}export{M as a,Xt as b,Xn as c,Jn as d,Nt as e,mr as f,gr as g,vr as h,Ln as i,wr as j};
