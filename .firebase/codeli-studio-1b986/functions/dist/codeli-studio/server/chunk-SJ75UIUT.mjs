import './polyfills.server.mjs';
import{a as f}from"./chunk-XTRDIWJR.mjs";import{a as h,b as p}from"./chunk-2335Q5QU.mjs";import{X as o,aa as r,ba as l,la as a,ma as c}from"./chunk-GPB6YLZS.mjs";import{i as s}from"./chunk-3CVZQN5Z.mjs";var k=(()=>{let e=class e{constructor(t){this.httpClient=t,this.url=f.url[0].local,this.localLinks=[],this.lan="en",this.injector=l(a)}readLinks(){return s(this,null,function*(){if(c(this.injector,()=>{let t=localStorage.getItem("codeli-language");t?this.lan=t:this.lan="en",console.log(`LANGUAGE ${this.lan}`)}),this.localLinks.length==0){let t="./assets/searchList/links.json";this.lan=="es"&&(t="./assets/searchList/links_es.json"),this.httpClient.get(t,{headers:this.getHeaders()}).subscribe(i=>this.localLinks=i)}})}getLinks(t){return t==""?[]:(this.localLinks.length==0&&this.readLinks(),this.localLinks.filter(i=>i.match.toLowerCase().includes(t.toLowerCase())))}getHeaders(){return new h().set("Accept","application/json").set("Content-Type","text/plain")}};e.\u0275fac=function(i){return new(i||e)(r(p))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();export{k as a};