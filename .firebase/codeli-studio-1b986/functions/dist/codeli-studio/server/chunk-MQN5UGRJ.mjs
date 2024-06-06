import './polyfills.server.mjs';
import{d as V,e as z,g as C,k as q,l as U,p as Z,s as $}from"./chunk-HH4U6OJT.mjs";import{a as _,b as M,c as P,h as p,k as w,u as H,v as O,w as B}from"./chunk-FD7ETFW5.mjs";import{$b as j,Ib as D,Kb as b,X as F,Y as u,Ya as r,_ as A,aa as y,ea as E,eb as f,f as c,ga as m,ha as x,i as T,na as k,tb as N,wb as L,xa as I}from"./chunk-GPB6YLZS.mjs";var K=P({passive:!0}),W=(()=>{let i=class i{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return T;let t=w(e),s=this._monitoredElements.get(t);if(s)return s.subject;let o=new c,a="cdk-text-field-autofilled",d=l=>{l.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",d,K),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:o,unlisten:()=>{t.removeEventListener("animationstart",d,K)}}),o}stopMonitoring(e){let t=w(e),s=this._monitoredElements.get(t);s&&(s.unlisten(),s.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}};i.\u0275fac=function(t){return new(t||i)(y(_),y(f))},i.\u0275prov=F({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var Y=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=m({type:i}),i.\u0275inj=u({});let n=i;return n})();var te=new A("MAT_INPUT_VALUE_ACCESSOR"),ie=["button","checkbox","file","hidden","image","radio","range","reset","submit"],se=0,He=(()=>{let i=class i{get disabled(){return this._disabled}set disabled(e){this._disabled=p(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(q.required)??!1}set required(e){this._required=p(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&M().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=p(e)}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,s,o,a,d,l,G,X,R){this._elementRef=e,this._platform=t,this.ngControl=s,this._autofillMonitor=G,this._formField=R,this._uid=`mat-input-${se++}`,this.focused=!1,this.stateChanges=new c,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(v=>M().has(v)),this._iOSKeyupListener=v=>{let h=v.target;!h.value&&h.selectionStart===0&&h.selectionEnd===0&&(h.setSelectionRange(1,1),h.setSelectionRange(0,0))};let g=this._elementRef.nativeElement,S=g.nodeName.toLowerCase();this._inputValueAccessor=l||g,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&X.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._errorStateTracker=new O(d,s,a,o,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=S==="select",this._isTextarea=S==="textarea",this._isInFormField=!!R,this._isNativeSelect&&(this.controlType=g.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ie.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}};i.\u0275fac=function(t){return new(t||i)(r(I),r(_),r(U,10),r(Z,8),r($,8),r(B),r(te,10),r(W),r(f),r(z,8))},i.\u0275dir=x({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(t,s){t&1&&b("focus",function(){return s._focusChanged(!0)})("blur",function(){return s._focusChanged(!1)})("input",function(){return s._onInput()}),t&2&&(D("id",s.id)("disabled",s.disabled)("required",s.required),N("name",s.name||null)("readonly",s.readonly&&!s._isNativeSelect||null)("aria-invalid",s.empty&&s.required?null:s.errorState)("aria-required",s.required)("id",s.id),L("mat-input-server",s._isServer)("mat-mdc-form-field-textarea-control",s._isInFormField&&s._isTextarea)("mat-mdc-form-field-input-control",s._isInFormField)("mdc-text-field__input",s._isInFormField)("mat-mdc-native-select-inline",s._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[E.None,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],standalone:!0,features:[j([{provide:V,useExisting:i}]),k]});let n=i;return n})(),Ce=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=m({type:i}),i.\u0275inj=u({imports:[H,C,C,Y,H]});let n=i;return n})();export{He as a,Ce as b};
