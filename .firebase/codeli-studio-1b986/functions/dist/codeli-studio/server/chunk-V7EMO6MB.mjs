import './polyfills.server.mjs';
import{b as g}from"./chunk-QOOEVWXK.mjs";import{d as l}from"./chunk-5TUC4GAS.mjs";import{X as r,ba as n}from"./chunk-GPB6YLZS.mjs";import{i as a}from"./chunk-3CVZQN5Z.mjs";var L=(()=>{let e=class e{constructor(){this.language="es",this.utilities=n(l),this.translate=n(g),this.translate.addLangs(["en","es"]),this.translate.setDefaultLang("en")}initLanguage(){return a(this,null,function*(){this.utilities.isBrowser()&&(yield this.getSavedLanguage())})}getSavedLanguage(){return a(this,null,function*(){this.utilities.isBrowser()&&(this.language=localStorage.getItem("codeli-language")),this.language==""&&(yield this.getBrowserLanguage()),this.language==null&&(this.language="en"),yield this.setLanguage()})}setLanguage(){return a(this,null,function*(){yield this.setDefaultLanguage(),yield this.saveLanguage(this.language)})}getBrowserLanguage(){return a(this,null,function*(){this.langBrowser=this.translate.getBrowserLang(),this.langBrowser||(this.langBrowser="es")})}setDefaultLanguage(){return a(this,null,function*(){this.translate.setDefaultLang(this.language)})}saveLanguage(t){return a(this,null,function*(){(t==""||t==null)&&(t="en"),this.translate.use(t),this.language=t,this.utilities.isBrowser()&&localStorage.setItem("codeli-language",t)})}getTranslation(t){return a(this,null,function*(){let s="";return this.translate.get(t).subscribe(u=>s=u),s})}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{L as a};