import{$ as Ve,$a as Ye,A as Me,Aa as wo,Ab as Fo,B as io,Ba as K,Bb as I,C as ot,Cb as Gr,D as xe,Da as Eo,Db as Oo,E as Nr,Ea as ut,Eb as Nn,F as oo,Fa as lt,Fb as Fe,G as ao,Ga as Co,Gb as zt,H as so,Ha as In,Hb as No,I as Z,Ia as Ur,Ib as Y,J as at,Ja as Br,Jb as Wr,K as j,Ka as dt,Kb as Po,L as y,La as ht,Lb as Lo,M as He,Ma as qe,N as m,Na as So,O as $,Oa as jr,P as co,Pa as Ro,Q as v,Qa as Tn,R as p,Ra as N,S as l,Sa as V,T as Lt,Ta as me,U as uo,Ua as Io,V as q,Va as ft,W as z,Wa as $r,X as ne,Xa as zr,Y as C,Ya as Hr,Z as kt,Za as Vr,_ as lo,_a as $t,a as h,aa as H,ab as An,b as L,ba as Ge,bb as Mn,ca as Ut,d as _n,e as eo,ea as M,f as wn,fa as ho,g as ee,ga as Bt,h as W,ha as Sn,hb as To,i as te,ia as Pr,ib as pe,j as B,ja as re,jb as ge,k as g,ka as fo,kb as ve,l as En,la as Lr,lb as Ao,m as xr,ma as mo,mb as xn,n as to,na as st,nb as Fn,o as S,oa as po,ob as ie,p as Fr,pa as jt,pb as P,q as he,qa as kr,r as Or,ra as Rn,s as no,sa as We,t as Cn,ta as ct,tb as be,u as ro,ua as go,ub as mt,va as vo,vb as On,w as fe,wa as bo,wb as Mo,x as it,xa as yo,xb as xo,y as ze,ya as Do,za as _o}from"./chunk-A5IAFUSZ.js";var ko=null;function Ee(){return ko}function qr(n){ko??=n}var Ht=class{},Ce=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:()=>l(Uo),providedIn:"platform"})}return n})(),Yr=new v(""),Uo=(()=>{class n extends Ce{_location;_history;_doc=l(C);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ee().getBaseHref(this._doc)}onPopState(e){let t=Ee().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Ee().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,i){this._history.pushState(e,t,i)}replaceState(e,t,i){this._history.replaceState(e,t,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Pn(n,r){return n?r?n.endsWith("/")?r.startsWith("/")?n+r.slice(1):n+r:r.startsWith("/")?n+r:`${n}/${r}`:n:r}function Bo(n){let r=n.search(/#|\?|$/);return n[r-1]==="/"?n.slice(0,r-1)+n.slice(r):n}function ce(n){return n&&n[0]!=="?"?`?${n}`:n}var ue=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:()=>l(kn),providedIn:"root"})}return n})(),Ln=new v(""),kn=(()=>{class n extends ue{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(C).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Pn(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+ce(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${t}${i}`:t}pushState(e,t,i,o){let a=this.prepareExternalUrl(i+ce(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,i,o){let a=this.prepareExternalUrl(i+ce(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(p(Ce),p(Ln,8))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Oe=(()=>{class n{_subject=new ee;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Ws(Bo(jo(t))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+ce(t))}normalize(e){return n.stripTrailingSlash(Gs(this._basePath,jo(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",i=null){this._locationStrategy.pushState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ce(t)),i)}replaceState(e,t="",i=null){this._locationStrategy.replaceState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ce(t)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(i=>i(e,t))}subscribe(e,t,i){return this._subject.subscribe({next:e,error:t??void 0,complete:i??void 0})}static normalizeQueryParams=ce;static joinWithSlash=Pn;static stripTrailingSlash=Bo;static \u0275fac=function(t){return new(t||n)(p(ue))};static \u0275prov=m({token:n,factory:()=>Vs(),providedIn:"root"})}return n})();function Vs(){return new Oe(p(ue))}function Gs(n,r){if(!n||!r.startsWith(n))return r;let e=r.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function jo(n){return n.replace(/\/index.html$/,"")}function Ws(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var Zr=(()=>{class n extends ue{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=Pn(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,i,o){let a=this.prepareExternalUrl(i+ce(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,t,a)}replaceState(e,t,i,o){let a=this.prepareExternalUrl(i+ce(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(p(Ce),p(Ln,8))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})();function qs(n,r){return new y(2100,!1)}var Ys=(()=>{class n{transform(e){return e==null?null:(Zs(n,e),e.toUpperCase())}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=Io({name:"uppercase",type:n,pure:!0})}return n})();function Zs(n,r){if(typeof r!="string")throw qs(n,r)}var pt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=$({})}return n})();function Vt(n,r){r=encodeURIComponent(r);for(let e of n.split(";")){let t=e.indexOf("="),[i,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var Ze=class{};var Xr="browser";function $o(n){return n===Xr}var Jr=(()=>{class n{static \u0275prov=m({token:n,providedIn:"root",factory:()=>new Kr(l(C),window)})}return n})(),Kr=class{document;window;offset=()=>[0,0];constructor(r,e){this.document=r,this.window=e}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r,e){this.window.scrollTo(L(h({},e),{left:r[0],top:r[1]}))}scrollToAnchor(r,e){let t=Qs(this.document,r);t&&(this.scrollToElement(t,e),t.focus())}setHistoryScrollRestoration(r){try{this.window.history.scrollRestoration=r}catch{console.warn(He(2400,!1))}}scrollToElement(r,e){let t=r.getBoundingClientRect(),i=t.left+this.window.pageXOffset,o=t.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(L(h({},e),{left:i-a[0],top:o-a[1]}))}};function Qs(n,r){let e=n.getElementById(r)||n.getElementsByName(r)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),i=t.currentNode;for(;i;){let o=i.shadowRoot;if(o){let a=o.getElementById(r)||o.querySelector(`[name="${r}"]`);if(a)return a}i=t.nextNode()}}return null}var Gt=class{_doc;constructor(r){this._doc=r}manager},Un=(()=>{class n extends Gt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,i,o){return e.addEventListener(t,i,o),()=>this.removeEventListener(e,t,i,o)}removeEventListener(e,t,i,o){return e.removeEventListener(t,i,o)}static \u0275fac=function(t){return new(t||n)(p(C))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),$n=new v(""),ni=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof Un));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof Un);o&&this._plugins.push(o)}addEventListener(e,t,i,o){return this._findPluginFor(t).addEventListener(e,t,i,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new y(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(p($n),p(H))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),Qr="ng-app-id";function zo(n){for(let r of n)r.remove()}function Ho(n,r){let e=r.createElement("style");return e.textContent=n,e}function tc(n,r,e,t){let i=n.head?.querySelectorAll(`style[${Qr}="${r}"],link[${Qr}="${r}"]`);if(i)for(let o of i)o.removeAttribute(Qr),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function ti(n,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var ri=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,i,o={}){this.doc=e,this.appId=t,this.nonce=i,tc(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let i of e)this.addUsage(i,this.inline,Ho);t?.forEach(i=>this.addUsage(i,this.external,ti))}removeStyles(e,t){for(let i of e)this.removeUsage(i,this.inline);t?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,t,i){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,t){let i=t.get(e);i&&(i.usage--,i.usage<=0&&(zo(i.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])zo(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:i}]of this.inline)i.push(this.addElement(e,Ho(t,this.doc)));for(let[t,{elements:i}]of this.external)i.push(this.addElement(e,ti(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(p(C),p(Lr),p(jt,8),p(st))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),ei={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ii=/%COMP%/g;var Go="%COMP%",nc=`_nghost-${Go}`,rc=`_ngcontent-${Go}`,ic=!0,oc=new v("",{factory:()=>ic});function ac(n){return rc.replace(ii,n)}function sc(n){return nc.replace(ii,n)}function Wo(n,r){return r.map(e=>e.replace(ii,n))}var oi=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,i,o,a,s,c=null,u=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=u,this.defaultRenderer=new Wt(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,t);return i instanceof jn?i.applyToHost(e):i instanceof qt&&i.applyStyles(),i}getOrCreateRenderer(e,t){let i=this.rendererByCompId,o=i.get(t.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(t.encapsulation){case Rn.Emulated:o=new jn(c,u,t,this.appId,d,a,s,f);break;case Rn.ShadowDom:return new Bn(c,e,t,a,s,this.nonce,f,u);case Rn.ExperimentalIsolatedShadowDom:return new Bn(c,e,t,a,s,this.nonce,f);default:o=new qt(c,u,t,d,a,s,f);break}i.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(p(ni),p(ri),p(Lr),p(oc),p(C),p(H),p(jt),p(In,8))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),Wt=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,t,i){this.eventManager=r,this.doc=e,this.ngZone=t,this.tracingService=i}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(ei[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(Vo(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){r&&(Vo(r)?r.content:r).insertBefore(e,t)}removeChild(r,e){e.remove()}selectRootElement(r,e){let t=typeof r=="string"?this.doc.querySelector(r):r;if(!t)throw new y(-5104,!1);return e||(t.textContent=""),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,i){if(i){e=i+":"+e;let o=ei[i];o?r.setAttributeNS(o,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){let i=ei[t];i?r.removeAttributeNS(i,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,i){i&(lt.DashCase|lt.Important)?r.style.setProperty(e,t,i&lt.Important?"important":""):r.style[e]=t}removeStyle(r,e,t){t&lt.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,t){r!=null&&(r[e]=t)}setValue(r,e){r.nodeValue=e}listen(r,e,t,i){if(typeof r=="string"&&(r=Ee().getGlobalEventTarget(this.doc,r),!r))throw new y(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,e,o)),this.eventManager.addEventListener(r,e,o,i)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function Vo(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Bn=class extends Wt{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,t,i,o,a,s,c){super(r,i,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=t.styles;u=Wo(t.id,u);for(let f of u){let _=document.createElement("style");a&&_.setAttribute("nonce",a),_.textContent=f,this.shadowRoot.appendChild(_)}let d=t.getExternalStyles?.();if(d)for(let f of d){let _=ti(f,i);a&&_.setAttribute("nonce",a),this.shadowRoot.appendChild(_)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},qt=class extends Wt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,t,i,o,a,s,c){super(r,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let u=t.styles;this.styles=c?Wo(c,u):u,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Co.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},jn=class extends qt{contentAttr;hostAttr;constructor(r,e,t,i,o,a,s,c){let u=i+"-"+t.id;super(r,e,t,o,a,s,c,u),this.contentAttr=ac(u),this.hostAttr=sc(u)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,""),t}};var zn=class n extends Ht{supportsDOMEvents=!0;static makeCurrent(){qr(new n)}onAndCancel(r,e,t,i){return r.addEventListener(e,t,i),()=>{r.removeEventListener(e,t,i)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=uc();return e==null?null:lc(e)}resetBaseElement(){Yt=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Vt(document.cookie,r)}},Yt=null;function uc(){return Yt=Yt||document.head.querySelector("base"),Yt?Yt.getAttribute("href"):null}function lc(n){return new URL(n,document.baseURI).pathname}var dc=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),qo=["alt","control","meta","shift"],hc={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},fc={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Yo=(()=>{class n extends Gt{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,i,o){let a=n.parseEventName(t),s=n.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ee().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),i=t.shift();if(t.length===0||!(i==="keydown"||i==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),qo.forEach(u=>{let d=t.indexOf(u);d>-1&&(t.splice(d,1),a+=u+".")}),a+=o,t.length!=0||o.length===0)return null;let c={};return c.domEventName=i,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let i=hc[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),qo.forEach(a=>{if(a!==i){let s=fc[a];s(e)&&(o+=a+".")}}),o+=i,o===t)}static eventCallback(e,t,i){return o=>{n.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(p(C))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})();async function mc(n,r,e){let t=h({rootComponent:n},pc(r,e));return No(t)}function pc(n,r){return{platformRef:r?.platformRef,appProviders:[...Dc,...n?.providers??[]],platformProviders:yc}}function gc(){zn.makeCurrent()}function vc(){return new Ge}function bc(){return fo(document),document}var yc=[{provide:st,useValue:Xr},{provide:mo,useValue:gc,multi:!0},{provide:C,useFactory:bc}];var Dc=[{provide:uo,useValue:"root"},{provide:Ge,useFactory:vc},{provide:$n,useClass:Un,multi:!0},{provide:$n,useClass:Yo,multi:!0},oi,ri,ni,{provide:dt,useExisting:oi},{provide:Ze,useClass:dc},[]];var Ne=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let i=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let t=r.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=(r.op==="a"?this.headers.get(e):void 0)||[];i.push(...t),this.headers.set(e,i);break;case"d":let o=r.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(r,e){let t=r.toLowerCase();this.maybeSetNormalizedName(r,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(r,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,t),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var Vn=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},Gn=class{encodeKey(r){return Zo(r)}encodeValue(r){return Zo(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function _c(n,r){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,s]=o==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var wc=/%(\d[a-f0-9])/gi,Ec={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Zo(n){return encodeURIComponent(n).replace(wc,(r,e)=>Ec[e]??r)}function Hn(n){return`${n}`}var Se=class n{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new Gn,r.fromString){if(r.fromObject)throw new y(2805,!1);this.map=_c(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let t=r.fromObject[e],i=Array.isArray(t)?t.map(Hn):[Hn(t)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(t=>{let i=r[t];Array.isArray(i)?i.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:i,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(Hn(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let t=this.map.get(r.param)||[],i=t.indexOf(Hn(r.value));i!==-1&&t.splice(i,1),t.length>0?this.map.set(r.param,t):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function Cc(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ko(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Xo(n){return typeof Blob<"u"&&n instanceof Blob}function Jo(n){return typeof FormData<"u"&&n instanceof FormData}function Sc(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Qo="Content-Type",ea="Accept",ta="text/plain",na="application/json",Rc=`${na}, ${ta}, */*`,gt=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,t,i){this.url=e,this.method=r.toUpperCase();let o;if(Cc(this.method)||i?(this.body=t!==void 0?t:null,o=i):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new y(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Ne,this.context??=new Vn,!this.params)this.params=new Se,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ko(this.body)||Xo(this.body)||Jo(this.body)||Sc(this.body)?this.body:this.body instanceof Se?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Jo(this.body)?null:Xo(this.body)?this.body.type||null:Ko(this.body)?null:typeof this.body=="string"?ta:this.body instanceof Se?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?na:null}clone(r={}){let e=r.method||this.method,t=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,a=r.priority||this.priority,s=r.cache||this.cache,c=r.mode||this.mode,u=r.redirect||this.redirect,d=r.credentials||this.credentials,f=r.referrer||this.referrer,_=r.integrity||this.integrity,U=r.referrerPolicy||this.referrerPolicy,F=r.transferCache??this.transferCache,T=r.timeout??this.timeout,D=r.body!==void 0?r.body:this.body,w=r.withCredentials??this.withCredentials,A=r.reportProgress??this.reportProgress,G=r.headers||this.headers,O=r.params||this.params,Nt=r.context??this.context;return r.setHeaders!==void 0&&(G=Object.keys(r.setHeaders).reduce((Pt,$e)=>Pt.set($e,r.setHeaders[$e]),G)),r.setParams&&(O=Object.keys(r.setParams).reduce((Pt,$e)=>Pt.set($e,r.setParams[$e]),O)),new n(e,t,D,{params:O,headers:G,context:Nt,reportProgress:A,responseType:i,withCredentials:w,transferCache:F,keepalive:o,cache:s,priority:a,timeout:T,mode:c,redirect:u,credentials:d,referrer:f,integrity:_,referrerPolicy:U})}},Ke=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Ke||{}),bt=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,t="OK"){this.headers=r.headers||new Ne,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||t,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},Wn=class n extends bt{constructor(r={}){super(r)}type=Ke.ResponseHeader;clone(r={}){return new n({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},Zt=class n extends bt{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=Ke.Response;clone(r={}){return new n({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},vt=class extends bt{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},Ic=200,Tc=204;var Ac=new v("");var Mc=/^\)\]\}',?\n/;var si=(()=>{class n{xhrFactory;tracingService=l(In,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new y(-2800,!1);let t=this.xhrFactory;return g(null).pipe(Z(()=>new wn(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((D,w)=>a.setRequestHeader(D,w.join(","))),e.headers.has(ea)||a.setRequestHeader(ea,Rc),!e.headers.has(Qo)){let D=e.detectContentTypeHeader();D!==null&&a.setRequestHeader(Qo,D)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let D=e.responseType.toLowerCase();a.responseType=D!=="json"?D:"text"}let s=e.serializeBody(),c=null,u=()=>{if(c!==null)return c;let D=a.statusText||"OK",w=new Ne(a.getAllResponseHeaders()),A=a.responseURL||e.url;return c=new Wn({headers:w,status:a.status,statusText:D,url:A}),c},d=this.maybePropagateTrace(()=>{let{headers:D,status:w,statusText:A,url:G}=u(),O=null;w!==Tc&&(O=typeof a.response>"u"?a.responseText:a.response),w===0&&(w=O?Ic:0);let Nt=w>=200&&w<300;if(e.responseType==="json"&&typeof O=="string"){let Pt=O;O=O.replace(Mc,"");try{O=O!==""?JSON.parse(O):null}catch($e){O=Pt,Nt&&(Nt=!1,O={error:$e,text:O})}}Nt?(o.next(new Zt({body:O,headers:D,status:w,statusText:A,url:G||void 0})),o.complete()):o.error(new vt({error:O,headers:D,status:w,statusText:A,url:G||void 0}))}),f=this.maybePropagateTrace(D=>{let{url:w}=u(),A=new vt({error:D,status:a.status||0,statusText:a.statusText||"Unknown Error",url:w||void 0});o.error(A)}),_=f;e.timeout&&(_=this.maybePropagateTrace(D=>{let{url:w}=u(),A=new vt({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:w||void 0});o.error(A)}));let U=!1,F=this.maybePropagateTrace(D=>{U||(o.next(u()),U=!0);let w={type:Ke.DownloadProgress,loaded:D.loaded};D.lengthComputable&&(w.total=D.total),e.responseType==="text"&&a.responseText&&(w.partialText=a.responseText),o.next(w)}),T=this.maybePropagateTrace(D=>{let w={type:Ke.UploadProgress,loaded:D.loaded};D.lengthComputable&&(w.total=D.total),o.next(w)});return a.addEventListener("load",d),a.addEventListener("error",f),a.addEventListener("timeout",_),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",F),s!==null&&a.upload&&a.upload.addEventListener("progress",T)),a.send(s),o.next({type:Ke.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",d),a.removeEventListener("timeout",_),e.reportProgress&&(a.removeEventListener("progress",F),s!==null&&a.upload&&a.upload.removeEventListener("progress",T)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||n)(p(Ze))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xc(n,r){return r(n)}function Fc(n,r,e){return(t,i)=>z(e,()=>r(t,o=>n(o,i)))}var ra=new v("",{factory:()=>[]}),ia=new v(""),oa=new v("",{factory:()=>!0});var ci=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=p(si),i},providedIn:"root"})}return n})();var qn=(()=>{class n{backend;injector;chain=null;pendingTasks=l(ho);contributeToStability=l(oa);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(ra),...this.injector.get(ia,[])]));this.chain=t.reduceRight((i,o)=>Fc(i,o,this.injector),xc)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(ot(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(p(ci),p(q))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ui=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=p(qn),i},providedIn:"root"})}return n})();function ai(n,r){return{body:r,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var Yn=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,i={}){let o;if(e instanceof gt)o=e;else{let c;i.headers instanceof Ne?c=i.headers:c=new Ne(i.headers);let u;i.params&&(i.params instanceof Se?u=i.params:u=new Se({fromObject:i.params})),o=new gt(e,t,i.body!==void 0?i.body:null,{headers:c,context:i.context,params:u,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=g(o).pipe(ze(c=>this.handler.handle(c)));if(e instanceof gt||i.observe==="events")return a;let s=a.pipe(fe(c=>c instanceof Zt));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(S(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new y(2806,!1);return c.body}));case"blob":return s.pipe(S(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new y(2807,!1);return c.body}));case"text":return s.pipe(S(c=>{if(c.body!==null&&typeof c.body!="string")throw new y(2808,!1);return c.body}));default:return s.pipe(S(c=>c.body))}case"response":return s;default:throw new y(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new Se().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,i={}){return this.request("PATCH",e,ai(i,t))}post(e,t,i={}){return this.request("POST",e,ai(i,t))}put(e,t,i={}){return this.request("PUT",e,ai(i,t))}static \u0275fac=function(t){return new(t||n)(p(ui))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Oc=new v("",{factory:()=>!0}),Nc="XSRF-TOKEN",Pc=new v("",{factory:()=>Nc}),Lc="X-XSRF-TOKEN",kc=new v("",{factory:()=>Lc}),Uc=(()=>{class n{cookieName=l(Pc);doc=l(C);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Vt(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),aa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=p(Uc),i},providedIn:"root"})}return n})();function Bc(n,r){if(!l(Oc)||n.method==="GET"||n.method==="HEAD")return r(n);try{let i=l(Ce).href,{origin:o}=new URL(i),{origin:a}=new URL(n.url,o);if(o!==a)return r(n)}catch{return r(n)}let e=l(aa).getToken(),t=l(kc);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),r(n)}function jc(...n){let r=[Yn,qn,{provide:ui,useExisting:qn},{provide:ci,useFactory:()=>l(Ac,{optional:!0})??l(si)},{provide:ra,useValue:Bc,multi:!0}];for(let e of n)r.push(...e.\u0275providers);return Lt(r)}var sa=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(p(C))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var li=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=p(Hc),i},providedIn:"root"})}return n})(),Hc=(()=>{class n extends li{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case K.NONE:return t;case K.HTML:return ct(t,"HTML")?We(t):wo(this._doc,String(t)).toString();case K.STYLE:return ct(t,"Style")?We(t):t;case K.SCRIPT:if(ct(t,"Script"))return We(t);throw new y(5200,!1);case K.URL:return ct(t,"URL")?We(t):_o(String(t));case K.RESOURCE_URL:if(ct(t,"ResourceURL"))return We(t);throw new y(5201,!1);default:throw new y(5202,!1)}}bypassSecurityTrustHtml(e){return go(e)}bypassSecurityTrustStyle(e){return vo(e)}bypassSecurityTrustScript(e){return bo(e)}bypassSecurityTrustUrl(e){return yo(e)}bypassSecurityTrustResourceUrl(e){return Do(e)}static \u0275fac=function(t){return new(t||n)(p(C))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Zn=new WeakMap,Kt=(()=>{class n{_appRef;_injector=l(ne);_environmentInjector=l(q);load(e){let t=this._appRef=this._appRef||this._injector.get($t),i=Zn.get(t);i||(i={loaders:new Set,refs:[]},Zn.set(t,i),t.onDestroy(()=>{Zn.get(t)?.refs.forEach(o=>o.destroy()),Zn.delete(t)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Po(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Kn;function Vc(){if(Kn===void 0&&(Kn=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Kn=n.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return Kn}function yt(n){return Vc()?.createHTML(n)||n}function ua(n){return Error(`Unable to find icon with the name "${n}"`)}function Gc(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function la(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function da(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Re=class{url;svgText;options;svgElement=null;constructor(r,e,t){this.url=r,this.svgText=e,this.options=t}},fa=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,i,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,o){return this._addSvgIconConfig(e,t,new Re(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,o){let a=this._sanitizer.sanitize(K.HTML,i);if(!a)throw da(i);let s=yt(a);return this._addSvgIconConfig(e,t,new Re("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new Re(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let o=this._sanitizer.sanitize(K.HTML,t);if(!o)throw da(t);let a=yt(o);return this._addSvgIconSetConfig(e,new Re("",a,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(K.RESOURCE_URL,e);if(!t)throw la(e);let i=this._cachedIconsByUrl.get(t);return i?g(Xn(i)):this._loadSvgIconFromConfig(new Re(e,null)).pipe(j(o=>this._cachedIconsByUrl.set(t,o)),S(o=>Xn(o)))}getNamedSvgIcon(e,t=""){let i=ha(t,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):En(ua(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?g(Xn(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(S(t=>Xn(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return g(i);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(it(s=>{let u=`Loading icon set URL: ${this._sanitizer.sanitize(K.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(u)),g(null)})));return ro(o).pipe(S(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw ua(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let o=t[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(j(t=>e.svgText=t),S(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?g(null):this._fetchIcon(e).pipe(j(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let s=this._svgElementFromString(yt("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(yt("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:a,value:s}=i[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw Gc();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(K.RESOURCE_URL,t);if(!a)throw la(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(S(u=>yt(u)),ot(()=>this._inProgressUrlFetches.delete(a)),oo());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(ha(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](t,e);if(o)return Wc(o)?new Re(o.url,null,o.options):new Re(o,null)}}static \u0275fac=function(t){return new(t||n)(p(Yn,8),p(li),p(C,8),p(Ge))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Xn(n){return n.cloneNode(!0)}function ha(n,r){return n+":"+r}function Wc(n){return!!(n.url&&n.options)}var Dt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=$({})}return n})();var qc=["*"],Yc=new v("MAT_ICON_DEFAULT_OPTIONS"),Zc=new v("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(C),r=n?n.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),ma=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Kc=ma.map(n=>`[${n}]`).join(", "),Xc=/^url\(['"]?#(.*?)['"]?\)$/,op=(()=>{class n{_elementRef=l(re);_iconRegistry=l(fa);_location=l(Zc);_errorHandler=l(Ge);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=_n.EMPTY;constructor(){let e=l(new Nn("aria-hidden"),{optional:!0}),t=l(Yc,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,o)=>{i.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Kc),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)ma.forEach(a=>{let s=t[o],c=s.getAttribute(a),u=c?c.match(Xc):null;if(u){let d=i.get(s);d||(d=[],i.set(s,d)),d.push({name:a,value:u[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(Me(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(Ye("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),mt(i.color?"mat-"+i.color:""),be("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Y],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:qc,decls:1,vars:0,template:function(t,i){t&1&&(ie(),P(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),ap=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=$({imports:[Dt]})}return n})();var b="primary",un=Symbol("RouteTitle"),pi=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e[0]:e}return null}getAll(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Je(n){return new pi(n)}function di(n,r,e){for(let t=0;t<n.length;t++){let i=n[t],o=r[t];if(i[0]===":")e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function wa(n,r,e){let t=e.path.split("/"),i=t.indexOf("**");if(i===-1){if(t.length>n.length||e.pathMatch==="full"&&(r.hasChildren()||t.length<n.length))return null;let c={},u=n.slice(0,t.length);return di(t,u,c)?{consumed:u,posParams:c}:null}if(i!==t.lastIndexOf("**"))return null;let o=t.slice(0,i),a=t.slice(i+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&r.hasChildren()&&e.path!=="**")return null;let s={};return!di(o,n.slice(0,o.length),s)||!di(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function rr(n){return new Promise((r,e)=>{n.pipe(xe()).subscribe({next:t=>r(t),error:t=>e(t)})})}function Jc(n,r){if(n.length!==r.length)return!1;for(let e=0;e<n.length;++e)if(!ye(n[e],r[e]))return!1;return!0}function ye(n,r){let e=n?gi(n):void 0,t=r?gi(r):void 0;if(!e||!t||e.length!=t.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!Ea(n[i],r[i]))return!1;return!0}function gi(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Ea(n,r){if(Array.isArray(n)&&Array.isArray(r)){if(n.length!==r.length)return!1;let e=[...n].sort(),t=[...r].sort();return e.every((i,o)=>t[o]===i)}else return n===r}function Qc(n){return n.length>0?n[n.length-1]:null}function et(n){return xr(n)?n:zr(n)?B(Promise.resolve(n)):g(n)}function Ca(n){return xr(n)?rr(n):Promise.resolve(n)}var eu={exact:Ia,subset:Ta},Sa={exact:tu,subset:nu,ignored:()=>!0},Ra={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},vi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function pa(n,r,e){return eu[e.paths](n.root,r.root,e.matrixParams)&&Sa[e.queryParams](n.queryParams,r.queryParams)&&!(e.fragment==="exact"&&n.fragment!==r.fragment)}function tu(n,r){return ye(n,r)}function Ia(n,r,e){if(!Xe(n.segments,r.segments)||!er(n.segments,r.segments,e)||n.numberOfChildren!==r.numberOfChildren)return!1;for(let t in r.children)if(!n.children[t]||!Ia(n.children[t],r.children[t],e))return!1;return!0}function nu(n,r){return Object.keys(r).length<=Object.keys(n).length&&Object.keys(r).every(e=>Ea(n[e],r[e]))}function Ta(n,r,e){return Aa(n,r,r.segments,e)}function Aa(n,r,e,t){if(n.segments.length>e.length){let i=n.segments.slice(0,e.length);return!(!Xe(i,e)||r.hasChildren()||!er(i,e,t))}else if(n.segments.length===e.length){if(!Xe(n.segments,e)||!er(n.segments,e,t))return!1;for(let i in r.children)if(!n.children[i]||!Ta(n.children[i],r.children[i],t))return!1;return!0}else{let i=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!Xe(n.segments,i)||!er(n.segments,i,t)||!n.children[b]?!1:Aa(n.children[b],r,o,t)}}function er(n,r,e){return r.every((t,i)=>Sa[e](n[i].parameters,t.parameters))}var J=class{root;queryParams;fragment;_queryParamMap;constructor(r=new E([],{}),e={},t=null){this.root=r,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=Je(this.queryParams),this._queryParamMap}toString(){return ou.serialize(this)}},E=class{segments;children;parent=null;constructor(r,e){this.segments=r,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return tr(this)}},Pe=class{path;parameters;_parameterMap;constructor(r,e){this.path=r,this.parameters=e}get parameterMap(){return this._parameterMap??=Je(this.parameters),this._parameterMap}toString(){return xa(this)}};function ru(n,r){return Xe(n,r)&&n.every((e,t)=>ye(e.parameters,r[t].parameters))}function Xe(n,r){return n.length!==r.length?!1:n.every((e,t)=>e.path===r[t].path)}function iu(n,r){let e=[];return Object.entries(n.children).forEach(([t,i])=>{t===b&&(e=e.concat(r(i,t)))}),Object.entries(n.children).forEach(([t,i])=>{t!==b&&(e=e.concat(r(i,t)))}),e}var Ue=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:()=>new Te,providedIn:"root"})}return n})(),Te=class{parse(r){let e=new yi(r);return new J(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(r){let e=`/${Xt(r.root,!0)}`,t=cu(r.queryParams),i=typeof r.fragment=="string"?`#${au(r.fragment)}`:"";return`${e}${t}${i}`}},ou=new Te;function tr(n){return n.segments.map(r=>xa(r)).join("/")}function Xt(n,r){if(!n.hasChildren())return tr(n);if(r){let e=n.children[b]?Xt(n.children[b],!1):"",t=[];return Object.entries(n.children).forEach(([i,o])=>{i!==b&&t.push(`${i}:${Xt(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=iu(n,(t,i)=>i===b?[Xt(n.children[b],!1)]:[`${i}:${Xt(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[b]!=null?`${tr(n)}/${e[0]}`:`${tr(n)}/(${e.join("//")})`}}function Ma(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Jn(n){return Ma(n).replace(/%3B/gi,";")}function au(n){return encodeURI(n)}function bi(n){return Ma(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function nr(n){return decodeURIComponent(n)}function ga(n){return nr(n.replace(/\+/g,"%20"))}function xa(n){return`${bi(n.path)}${su(n.parameters)}`}function su(n){return Object.entries(n).map(([r,e])=>`;${bi(r)}=${bi(e)}`).join("")}function cu(n){let r=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(i=>`${Jn(e)}=${Jn(i)}`).join("&"):`${Jn(e)}=${Jn(t)}`).filter(e=>e);return r.length?`?${r.join("&")}`:""}var uu=/^[^\/()?;#]+/;function hi(n){let r=n.match(uu);return r?r[0]:""}var lu=/^[^\/()?;=#]+/;function du(n){let r=n.match(lu);return r?r[0]:""}var hu=/^[^=?&#]+/;function fu(n){let r=n.match(hu);return r?r[0]:""}var mu=/^[^&#]+/;function pu(n){let r=n.match(mu);return r?r[0]:""}var yi=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new E([],{}):new E([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new y(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,r));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,r)),(e.length>0||Object.keys(t).length>0)&&(i[b]=new E(e,t)),i}parseSegment(){let r=hi(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new y(4009,!1);return this.capture(r),new Pe(nr(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let e=du(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let i=hi(this.remaining);i&&(t=i,this.capture(t))}r[nr(e)]=nr(t)}parseQueryParam(r){let e=fu(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=pu(this.remaining);a&&(t=a,this.capture(t))}let i=ga(e),o=ga(t);if(r.hasOwnProperty(i)){let a=r[i];Array.isArray(a)||(a=[a],r[i]=a),a.push(o)}else r[i]=o}parseParens(r,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=hi(this.remaining),o=this.remaining[i.length];if(o!=="/"&&o!==")"&&o!==";")throw new y(4010,!1);let a;i.indexOf(":")>-1?(a=i.slice(0,i.indexOf(":")),this.capture(a),this.capture(":")):r&&(a=b);let s=this.parseChildren(e+1);t[a??b]=Object.keys(s).length===1&&s[b]?s[b]:new E([],s),this.consumeOptional("//")}return t}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new y(4011,!1)}};function Fa(n){return n.segments.length>0?new E([],{[b]:n}):n}function Oa(n){let r={};for(let[t,i]of Object.entries(n.children)){let o=Oa(i);if(t===b&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))r[a]=s;else(o.segments.length>0||o.hasChildren())&&(r[t]=o)}let e=new E(n.segments,r);return gu(e)}function gu(n){if(n.numberOfChildren===1&&n.children[b]){let r=n.children[b];return new E(n.segments.concat(r.segments),r.children)}return n}function Le(n){return n instanceof J}function Na(n,r,e=null,t=null,i=new Te){let o=Pa(n);return La(o,r,e,t,i)}function Pa(n){let r;function e(o){let a={};for(let c of o.children){let u=e(c);a[c.outlet]=u}let s=new E(o.url,a);return o===n&&(r=s),s}let t=e(n.root),i=Fa(t);return r??i}function La(n,r,e,t,i){let o=n;for(;o.parent;)o=o.parent;if(r.length===0)return fi(o,o,o,e,t,i);let a=vu(r);if(a.toRoot())return fi(o,o,new E([],{}),e,t,i);let s=bu(a,o,n),c=s.processChildren?Qt(s.segmentGroup,s.index,a.commands):Ua(s.segmentGroup,s.index,a.commands);return fi(o,s.segmentGroup,c,e,t,i)}function ir(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function tn(n){return typeof n=="object"&&n!=null&&n.outlets}function va(n,r,e){n||="\u0275";let t=new J;return t.queryParams={[n]:r},e.parse(e.serialize(t)).queryParams[n]}function fi(n,r,e,t,i,o){let a={};for(let[u,d]of Object.entries(t??{}))a[u]=Array.isArray(d)?d.map(f=>va(u,f,o)):va(u,d,o);let s;n===r?s=e:s=ka(n,r,e);let c=Fa(Oa(s));return new J(c,a,i)}function ka(n,r,e){let t={};return Object.entries(n.children).forEach(([i,o])=>{o===r?t[i]=e:t[i]=ka(o,r,e)}),new E(n.segments,t)}var or=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,e,t){if(this.isAbsolute=r,this.numberOfDoubleDots=e,this.commands=t,r&&t.length>0&&ir(t[0]))throw new y(4003,!1);let i=t.find(tn);if(i&&i!==Qc(t))throw new y(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function vu(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new or(!0,0,n);let r=0,e=!1,t=n.reduce((i,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,u])=>{s[c]=typeof u=="string"?u.split("/"):u}),[...i,{outlets:s}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?r++:s!=""&&i.push(s))}),i):[...i,o]},[]);return new or(e,r,t)}var wt=class{segmentGroup;processChildren;index;constructor(r,e,t){this.segmentGroup=r,this.processChildren=e,this.index=t}};function bu(n,r,e){if(n.isAbsolute)return new wt(r,!0,0);if(!e)return new wt(r,!1,NaN);if(e.parent===null)return new wt(e,!0,0);let t=ir(n.commands[0])?0:1,i=e.segments.length-1+t;return yu(e,i,n.numberOfDoubleDots)}function yu(n,r,e){let t=n,i=r,o=e;for(;o>i;){if(o-=i,t=t.parent,!t)throw new y(4005,!1);i=t.segments.length}return new wt(t,!1,i-o)}function Du(n){return tn(n[0])?n[0].outlets:{[b]:n}}function Ua(n,r,e){if(n??=new E([],{}),n.segments.length===0&&n.hasChildren())return Qt(n,r,e);let t=_u(n,r,e),i=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new E(n.segments.slice(0,t.pathIndex),{});return o.children[b]=new E(n.segments.slice(t.pathIndex),n.children),Qt(o,0,i)}else return t.match&&i.length===0?new E(n.segments,{}):t.match&&!n.hasChildren()?Di(n,r,e):t.match?Qt(n,0,i):Di(n,r,e)}function Qt(n,r,e){if(e.length===0)return new E(n.segments,{});{let t=Du(e),i={};if(Object.keys(t).some(o=>o!==b)&&n.children[b]&&n.numberOfChildren===1&&n.children[b].segments.length===0){let o=Qt(n.children[b],r,e);return new E(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(i[o]=Ua(n.children[o],r,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(i[o]=a)}),new E(n.segments,i)}}function _u(n,r,e){let t=0,i=r,o={match:!1,pathIndex:0,commandIndex:0};for(;i<n.segments.length;){if(t>=e.length)return o;let a=n.segments[i],s=e[t];if(tn(s))break;let c=`${s}`,u=t<e.length-1?e[t+1]:null;if(i>0&&c===void 0)break;if(c&&u&&typeof u=="object"&&u.outlets===void 0){if(!ya(c,u,a))return o;t+=2}else{if(!ya(c,{},a))return o;t++}i++}return{match:!0,pathIndex:i,commandIndex:t}}function Di(n,r,e){let t=n.segments.slice(0,r),i=0;for(;i<e.length;){let o=e[i];if(tn(o)){let c=wu(o.outlets);return new E(t,c)}if(i===0&&ir(e[0])){let c=n.segments[r];t.push(new Pe(c.path,ba(e[0]))),i++;continue}let a=tn(o)?o.outlets[b]:`${o}`,s=i<e.length-1?e[i+1]:null;a&&s&&ir(s)?(t.push(new Pe(a,ba(s))),i+=2):(t.push(new Pe(a,{})),i++)}return new E(t,{})}function wu(n){let r={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(r[e]=Di(new E([],{}),0,t))}),r}function ba(n){let r={};return Object.entries(n).forEach(([e,t])=>r[e]=`${t}`),r}function ya(n,r,e){return n==e.path&&ye(r,e.parameters)}var Et="imperative",x=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(x||{}),Q=class{id;url;constructor(r,e){this.id=r,this.url=e}},ke=class extends Q{type=x.NavigationStart;navigationTrigger;restoredState;constructor(r,e,t="imperative",i=null){super(r,e),this.navigationTrigger=t,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ae=class extends Q{urlAfterRedirects;type=x.NavigationEnd;constructor(r,e,t){super(r,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},k=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(k||{}),St=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(St||{}),oe=class extends Q{reason;code;type=x.NavigationCancel;constructor(r,e,t,i){super(r,e),this.reason=t,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Ba(n){return n instanceof oe&&(n.code===k.Redirect||n.code===k.SupersededByNewNavigation)}var De=class extends Q{reason;code;type=x.NavigationSkipped;constructor(r,e,t,i){super(r,e),this.reason=t,this.code=i}},Qe=class extends Q{error;target;type=x.NavigationError;constructor(r,e,t,i){super(r,e),this.error=t,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},nn=class extends Q{urlAfterRedirects;state;type=x.RoutesRecognized;constructor(r,e,t,i){super(r,e),this.urlAfterRedirects=t,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ar=class extends Q{urlAfterRedirects;state;type=x.GuardsCheckStart;constructor(r,e,t,i){super(r,e),this.urlAfterRedirects=t,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},sr=class extends Q{urlAfterRedirects;state;shouldActivate;type=x.GuardsCheckEnd;constructor(r,e,t,i,o){super(r,e),this.urlAfterRedirects=t,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},cr=class extends Q{urlAfterRedirects;state;type=x.ResolveStart;constructor(r,e,t,i){super(r,e),this.urlAfterRedirects=t,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ur=class extends Q{urlAfterRedirects;state;type=x.ResolveEnd;constructor(r,e,t,i){super(r,e),this.urlAfterRedirects=t,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},lr=class{route;type=x.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},dr=class{route;type=x.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},hr=class{snapshot;type=x.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fr=class{snapshot;type=x.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},mr=class{snapshot;type=x.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pr=class{snapshot;type=x.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Rt=class{routerEvent;position;anchor;scrollBehavior;type=x.Scroll;constructor(r,e,t,i){this.routerEvent=r,this.position=e,this.anchor=t,this.scrollBehavior=i}toString(){let r=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${r}')`}},It=class{},rn=class{},Tt=class{url;navigationBehaviorOptions;constructor(r,e){this.url=r,this.navigationBehaviorOptions=e}};function Eu(n){return!(n instanceof It)&&!(n instanceof Tt)&&!(n instanceof rn)}var gr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new tt(this.rootInjector)}},tt=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let i=this.getOrCreateContext(e);i.outlet=t,this.contexts.set(e,i)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new gr(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(p(q))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vr=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let e=this.pathFromRoot(r);return e.length>1?e[e.length-2]:null}children(r){let e=_i(r,this._root);return e?e.children.map(t=>t.value):[]}firstChild(r){let e=_i(r,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(r){let e=wi(r,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==r)}pathFromRoot(r){return wi(r,this._root).map(e=>e.value)}};function _i(n,r){if(n===r.value)return r;for(let e of r.children){let t=_i(n,e);if(t)return t}return null}function wi(n,r){if(n===r.value)return[r];for(let e of r.children){let t=wi(n,e);if(t.length)return t.unshift(r),t}return[]}var X=class{value;children;constructor(r,e){this.value=r,this.children=e}toString(){return`TreeNode(${this.value})`}};function _t(n){let r={};return n&&n.children.forEach(e=>r[e.value.outlet]=e),r}var on=class extends vr{snapshot;constructor(r,e){super(r),this.snapshot=e,xi(this,r)}toString(){return this.snapshot.toString()}};function ja(n,r){let e=Cu(n,r),t=new W([new Pe("",{})]),i=new W({}),o=new W({}),a=new W({}),s=new W(""),c=new _e(t,i,a,s,o,b,n,e.root);return c.snapshot=e.root,new on(new X(c,[]),e)}function Cu(n,r){let e={},t={},i={},a=new At([],e,i,"",t,b,n,null,{},r);return new an("",new X(a,[]))}var _e=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(r,e,t,i,o,a,s,c){this.urlSubject=r,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(S(u=>u[un]))??g(void 0),this.url=r,this.params=e,this.queryParams=t,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(S(r=>Je(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(S(r=>Je(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Mi(n,r,e="emptyOnly"){let t,{routeConfig:i}=n;return r!==null&&(e==="always"||i?.path===""||!r.component&&!r.routeConfig?.loadComponent)?t={params:h(h({},r.params),n.params),data:h(h({},r.data),n.data),resolve:h(h(h(h({},n.data),r.data),i?.data),n._resolvedData)}:t={params:h({},n.params),data:h({},n.data),resolve:h(h({},n.data),n._resolvedData??{})},i&&za(i)&&(t.resolve[un]=i.title),t}var At=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[un]}constructor(r,e,t,i,o,a,s,c,u,d){this.url=r,this.params=e,this.queryParams=t,this.fragment=i,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=u,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Je(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Je(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${e}')`}},an=class extends vr{url;constructor(r,e){super(e),this.url=r,xi(this,e)}toString(){return $a(this._root)}};function xi(n,r){r.value._routerState=n,r.children.forEach(e=>xi(n,e))}function $a(n){let r=n.children.length>0?` { ${n.children.map($a).join(", ")} } `:"";return`${n.value}${r}`}function mi(n){if(n.snapshot){let r=n.snapshot,e=n._futureSnapshot;n.snapshot=e,ye(r.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),r.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),ye(r.params,e.params)||n.paramsSubject.next(e.params),Jc(r.url,e.url)||n.urlSubject.next(e.url),ye(r.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Ei(n,r){let e=ye(n.params,r.params)&&ru(n.url,r.url),t=!n.parent!=!r.parent;return e&&!t&&(!n.parent||Ei(n.parent,r.parent))}function za(n){return typeof n.title=="string"||n.title===null}var Ha=new v(""),Fi=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=b;activateEvents=new Ve;deactivateEvents=new Ve;attachEvents=new Ve;detachEvents=new Ve;routerOutletData=Fe();parentContexts=l(tt);location=l(jr);changeDetector=l(zt);inputBinder=l(ln,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:i}=e.name;if(t)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new y(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new y(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new y(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new y(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new Ci(e,s,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=me({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Bt]})}return n})(),Ci=class{route;childContexts;parent;outletData;constructor(r,e,t,i){this.route=r,this.childContexts=e,this.parent=t,this.outletData=i}get(r,e){return r===_e?this.route:r===tt?this.childContexts:r===Ha?this.outletData:this.parent.get(r,e)}},ln=new v(""),Oi=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,i=Fr([t.queryParams,t.params,t.data]).pipe(Z(([o,a,s],c)=>(s=h(h(h({},o),a),s),c===0?g(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let a=Lo(t.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,i)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),Ni=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,i){t&1&&To(0,"router-outlet")},dependencies:[Fi],encapsulation:2})}return n})();function Pi(n){let r=n.children&&n.children.map(Pi),e=r?L(h({},n),{children:r}):h({},n);return!e.component&&!e.loadComponent&&(r||e.loadChildren)&&e.outlet&&e.outlet!==b&&(e.component=Ni),e}function Su(n,r,e){let t=sn(n,r._root,e?e._root:void 0);return new on(t,r)}function sn(n,r,e){if(e&&n.shouldReuseRoute(r.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=r.value;let i=Ru(n,r,e);return new X(t,i)}else{if(n.shouldAttach(r.value)){let o=n.retrieve(r.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=r.value,a.children=r.children.map(s=>sn(n,s)),a}}let t=Iu(r.value),i=r.children.map(o=>sn(n,o));return new X(t,i)}}function Ru(n,r,e){return r.children.map(t=>{for(let i of e.children)if(n.shouldReuseRoute(t.value,i.value.snapshot))return sn(n,t,i);return sn(n,t)})}function Iu(n){return new _e(new W(n.url),new W(n.params),new W(n.queryParams),new W(n.fragment),new W(n.data),n.outlet,n.component,n)}var Mt=class{redirectTo;navigationBehaviorOptions;constructor(r,e){this.redirectTo=r,this.navigationBehaviorOptions=e}},Va="ngNavigationCancelingError";function br(n,r){let{redirectTo:e,navigationBehaviorOptions:t}=Le(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,i=Ga(!1,k.Redirect);return i.url=e,i.navigationBehaviorOptions=t,i}function Ga(n,r){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[Va]=!0,e.cancellationCode=r,e}function Tu(n){return Wa(n)&&Le(n.url)}function Wa(n){return!!n&&n[Va]}var Si=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,e,t,i,o){this.routeReuseStrategy=r,this.futureState=e,this.currState=t,this.forwardEvent=i,this.inputBindingEnabled=o}activate(r){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,r),mi(this.futureState.root),this.activateChildRoutes(e,t,r)}deactivateChildRoutes(r,e,t){let i=_t(e);r.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],t),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(r,e,t){let i=r.value,o=e?e.value:null;if(i===o)if(i.component){let a=t.getContext(i.outlet);a&&this.deactivateChildRoutes(r,e,a.children)}else this.deactivateChildRoutes(r,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(r,e){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,e):this.deactivateRouteAndOutlet(r,e)}detachAndStoreRouteSubtree(r,e){let t=e.getContext(r.value.outlet),i=t&&r.value.component?t.children:e,o=_t(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:a,route:r,contexts:s})}}deactivateRouteAndOutlet(r,e){let t=e.getContext(r.value.outlet),i=t&&r.value.component?t.children:e,o=_t(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(r,e,t){let i=_t(e);r.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],t),this.forwardEvent(new pr(o.value.snapshot))}),r.children.length&&this.forwardEvent(new fr(r.value.snapshot))}activateRoutes(r,e,t){let i=r.value,o=e?e.value:null;if(mi(i),i===o)if(i.component){let a=t.getOrCreateContext(i.outlet);this.activateChildRoutes(r,e,a.children)}else this.activateChildRoutes(r,e,t);else if(i.component){let a=t.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let s=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),mi(s.route.value),this.activateChildRoutes(r,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(r,null,a.children)}else this.activateChildRoutes(r,null,t)}},yr=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},Ct=class{component;route;constructor(r,e){this.component=r,this.route=e}};function Au(n,r,e){let t=n._root,i=r?r._root:null;return Jt(t,i,e,[t.value])}function Mu(n){let r=n.routeConfig?n.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:n,guards:r}}function Ft(n,r){let e=Symbol(),t=r.get(n,e);return t===e?typeof n=="function"&&!co(n)?n:r.get(n):t}function Jt(n,r,e,t,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=_t(r);return n.children.forEach(a=>{xu(a,o[a.value.outlet],e,t.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>en(s,e.getContext(a),i)),i}function xu(n,r,e,t,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=r?r.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=Fu(a,o,o.routeConfig.runGuardsAndResolvers);c?i.canActivateChecks.push(new yr(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Jt(n,r,s?s.children:null,t,i):Jt(n,r,e,t,i),c&&s&&s.outlet&&s.outlet.isActivated&&i.canDeactivateChecks.push(new Ct(s.outlet.component,a))}else a&&en(r,s,i),i.canActivateChecks.push(new yr(t)),o.component?Jt(n,null,s?s.children:null,t,i):Jt(n,null,e,t,i);return i}function Fu(n,r,e){if(typeof e=="function")return z(r._environmentInjector,()=>e(n,r));switch(e){case"pathParamsChange":return!Xe(n.url,r.url);case"pathParamsOrQueryParamsChange":return!Xe(n.url,r.url)||!ye(n.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ei(n,r)||!ye(n.queryParams,r.queryParams);default:return!Ei(n,r)}}function en(n,r,e){let t=_t(n),i=n.value;Object.entries(t).forEach(([o,a])=>{i.component?r?en(a,r.children.getContext(o),e):en(a,null,e):en(a,r,e)}),i.component?r&&r.outlet&&r.outlet.isActivated?e.canDeactivateChecks.push(new Ct(r.outlet.component,i)):e.canDeactivateChecks.push(new Ct(null,i)):e.canDeactivateChecks.push(new Ct(null,i))}function dn(n){return typeof n=="function"}function Ou(n){return typeof n=="boolean"}function Nu(n){return n&&dn(n.canLoad)}function Pu(n){return n&&dn(n.canActivate)}function Lu(n){return n&&dn(n.canActivateChild)}function ku(n){return n&&dn(n.canDeactivate)}function Uu(n){return n&&dn(n.canMatch)}function qa(n){return n instanceof to||n?.name==="EmptyError"}var Qn=Symbol("INITIAL_VALUE");function xt(){return Z(n=>Fr(n.map(r=>r.pipe(Me(1),so(Qn)))).pipe(S(r=>{for(let e of r)if(e!==!0){if(e===Qn)return Qn;if(e===!1||Bu(e))return e}return!0}),fe(r=>r!==Qn),Me(1)))}function Bu(n){return Le(n)||n instanceof Mt}function Ya(n){return n.aborted?g(void 0).pipe(Me(1)):new wn(r=>{let e=()=>{r.next(),r.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function Za(n){return at(Ya(n))}function ju(n){return he(r=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:i,canDeactivateChecks:o}}=r;return o.length===0&&i.length===0?g(L(h({},r),{guardsResult:!0})):$u(o,e,t).pipe(he(a=>a&&Ou(a)?zu(e,i,n):g(a)),S(a=>L(h({},r),{guardsResult:a})))})}function $u(n,r,e){return B(n).pipe(he(t=>qu(t.component,t.route,e,r)),xe(t=>t!==!0,!0))}function zu(n,r,e){return B(r).pipe(ze(t=>no(Vu(t.route.parent,e),Hu(t.route,e),Wu(n,t.path),Gu(n,t.route))),xe(t=>t!==!0,!0))}function Hu(n,r){return n!==null&&r&&r(new mr(n)),g(!0)}function Vu(n,r){return n!==null&&r&&r(new hr(n)),g(!0)}function Gu(n,r){let e=r.routeConfig?r.routeConfig.canActivate:null;if(!e||e.length===0)return g(!0);let t=e.map(i=>Cn(()=>{let o=r._environmentInjector,a=Ft(i,o),s=Pu(a)?a.canActivate(r,n):z(o,()=>a(r,n));return et(s).pipe(xe())}));return g(t).pipe(xt())}function Wu(n,r){let e=r[r.length-1],i=r.slice(0,r.length-1).reverse().map(o=>Mu(o)).filter(o=>o!==null).map(o=>Cn(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,u=Ft(s,c),d=Lu(u)?u.canActivateChild(e,n):z(c,()=>u(e,n));return et(d).pipe(xe())});return g(a).pipe(xt())}));return g(i).pipe(xt())}function qu(n,r,e,t){let i=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!i||i.length===0)return g(!0);let o=i.map(a=>{let s=r._environmentInjector,c=Ft(a,s),u=ku(c)?c.canDeactivate(n,r,e,t):z(s,()=>c(n,r,e,t));return et(u).pipe(xe())});return g(o).pipe(xt())}function Yu(n,r,e,t,i){let o=r.canLoad;if(o===void 0||o.length===0)return g(!0);let a=o.map(s=>{let c=Ft(s,n),u=Nu(c)?c.canLoad(r,e):z(n,()=>c(r,e)),d=et(u);return i?d.pipe(Za(i)):d});return g(a).pipe(xt(),Ka(t))}function Ka(n){return eo(j(r=>{if(typeof r!="boolean")throw br(n,r)}),S(r=>r===!0))}function Zu(n,r,e,t,i,o){let a=r.canMatch;if(!a||a.length===0)return g(!0);let s=a.map(c=>{let u=Ft(c,n),d=Uu(u)?u.canMatch(r,e,i):z(n,()=>u(r,e,i));return et(d).pipe(Za(o))});return g(s).pipe(xt(),Ka(t))}var Ie=class n extends Error{segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,n.prototype)}},cn=class n extends Error{urlTree;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,n.prototype)}};function Ku(n){throw new y(4e3,!1)}function Xu(n){throw Ga(!1,k.GuardRejected)}var Ri=class{urlSerializer;urlTree;constructor(r,e){this.urlSerializer=r,this.urlTree=e}async lineralizeSegments(r,e){let t=[],i=e.root;for(;;){if(t=t.concat(i.segments),i.numberOfChildren===0)return t;if(i.numberOfChildren>1||!i.children[b])throw Ku(`${r.redirectTo}`);i=i.children[b]}}async applyRedirectCommands(r,e,t,i,o){let a=await Ju(e,i,o);if(a instanceof J)throw new cn(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),r,t);if(a[0]==="/")throw new cn(s);return s}applyRedirectCreateUrlTree(r,e,t,i){let o=this.createSegmentGroup(r,e.root,t,i);return new J(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(r,e){let t={};return Object.entries(r).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[i]=e[s]}else t[i]=o}),t}createSegmentGroup(r,e,t,i){let o=this.createSegments(r,e.segments,t,i),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(r,c,t,i)}),new E(o,a)}createSegments(r,e,t,i){return e.map(o=>o.path[0]===":"?this.findPosParam(r,o,i):this.findOrReturn(o,t))}findPosParam(r,e,t){let i=t[e.path.substring(1)];if(!i)throw new y(4001,!1);return i}findOrReturn(r,e){let t=0;for(let i of e){if(i.path===r.path)return e.splice(t),i;t++}return r}};function Ju(n,r,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return rr(et(z(e,()=>t(r))))}function Qu(n,r){return n.providers&&!n._injector&&(n._injector=Tn(n.providers,r,`Route: ${n.path}`)),n._injector??r}function le(n){return n.outlet||b}function el(n,r){let e=n.filter(t=>le(t)===r);return e.push(...n.filter(t=>le(t)!==r)),e}var Ii={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Xa(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function tl(n,r,e,t,i,o,a){let s=Ja(n,r,e);if(!s.matched)return g(s);let c=Xa(o(s));return t=Qu(r,t),Zu(t,r,e,i,c,a).pipe(S(u=>u===!0?s:h({},Ii)))}function Ja(n,r,e){if(r.path==="")return r.pathMatch==="full"&&(n.hasChildren()||e.length>0)?h({},Ii):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(r.matcher||wa)(e,n,r);if(!i)return h({},Ii);let o={};Object.entries(i.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=i.consumed.length>0?h(h({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function Da(n,r,e,t,i){return e.length>0&&il(n,e,t,i)?{segmentGroup:new E(r,rl(t,new E(e,n.children))),slicedSegments:[]}:e.length===0&&ol(n,e,t)?{segmentGroup:new E(n.segments,nl(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new E(n.segments,n.children),slicedSegments:e}}function nl(n,r,e,t){let i={};for(let o of e)if(_r(n,r,o)&&!t[le(o)]){let a=new E([],{});i[le(o)]=a}return h(h({},t),i)}function rl(n,r){let e={};e[b]=r;for(let t of n)if(t.path===""&&le(t)!==b){let i=new E([],{});e[le(t)]=i}return e}function il(n,r,e,t){return e.some(i=>!_r(n,r,i)||!(le(i)!==b)?!1:!(t!==void 0&&le(i)===t))}function ol(n,r,e){return e.some(t=>_r(n,r,t))}function _r(n,r,e){return(n.hasChildren()||r.length>0)&&e.pathMatch==="full"?!1:e.path===""}function al(n,r,e){return r.length===0&&!n.children[e]}var Ti=class{};async function sl(n,r,e,t,i,o,a="emptyOnly",s){return new Ai(n,r,e,t,i,a,o,s).recognize()}var cl=31,Ai=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,e,t,i,o,a,s,c){this.injector=r,this.configLoader=e,this.rootComponentType=t,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new Ri(this.urlSerializer,this.urlTree)}noMatchError(r){return new y(4002,`'${r.segmentGroup}'`)}async recognize(){let r=Da(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(r),i=new X(t,e),o=new an("",i),a=Na(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(r){let e=new At([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),b,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,r,b,e),rootSnapshot:e}}catch(t){if(t instanceof cn)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Ie?this.noMatchError(t):t}}async processSegmentGroup(r,e,t,i,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(r,e,t,o);let a=await this.processSegment(r,e,t,t.segments,i,!0,o);return a instanceof X?[a]:[]}async processChildren(r,e,t,i){let o=[];for(let c of Object.keys(t.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let u=t.children[c],d=el(e,c),f=await this.processSegmentGroup(r,d,u,c,i);a.push(...f)}let s=Qa(a);return ul(s),s}async processSegment(r,e,t,i,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??r,e,c,t,i,o,a,s)}catch(u){if(u instanceof Ie||qa(u))continue;throw u}if(al(t,i,o))return new Ti;throw new Ie(t)}async processSegmentAgainstRoute(r,e,t,i,o,a,s,c){if(le(t)!==a&&(a===b||!_r(i,o,t)))throw new Ie(i);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,i,t,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(r,i,e,t,o,a,c);throw new Ie(i)}async expandSegmentAgainstRouteUsingRedirect(r,e,t,i,o,a,s){let{matched:c,parameters:u,consumedSegments:d,positionalParamSegments:f,remainingSegments:_}=Ja(e,i,o);if(!c)throw new Ie(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>cl&&(this.allowRedirects=!1));let U=this.createSnapshot(r,i,o,u,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let F=await this.applyRedirects.applyRedirectCommands(d,i.redirectTo,f,Xa(U),r),T=await this.applyRedirects.lineralizeSegments(i,F);return this.processSegment(r,t,e,T.concat(_),a,!1,s)}createSnapshot(r,e,t,i,o){let a=new At(t,i,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,dl(e),le(e),e.component??e._loadedComponent??null,e,hl(e),r),s=Mi(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(r,e,t,i,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=G=>this.createSnapshot(r,t,G.consumedSegments,G.parameters,a),c=await rr(tl(e,t,i,r,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new Ie(e);r=t._injector??r;let{routes:u}=await this.getChildConfig(r,t,i),d=t._loadedInjector??r,{parameters:f,consumedSegments:_,remainingSegments:U}=c,F=this.createSnapshot(r,t,_,f,a),{segmentGroup:T,slicedSegments:D}=Da(e,_,U,u,o);if(D.length===0&&T.hasChildren()){let G=await this.processChildren(d,u,T,F);return new X(F,G)}if(u.length===0&&D.length===0)return new X(F,[]);let w=le(t)===o,A=await this.processSegment(d,u,T,D,w?b:o,!0,F);return new X(F,A instanceof X?[A]:[])}async getChildConfig(r,e,t){if(e.children)return{routes:e.children,injector:r};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(r).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await rr(Yu(r,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(r,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Xu(e)}return{routes:[],injector:r}}};function ul(n){n.sort((r,e)=>r.value.outlet===b?-1:e.value.outlet===b?1:r.value.outlet.localeCompare(e.value.outlet))}function ll(n){let r=n.value.routeConfig;return r&&r.path===""}function Qa(n){let r=[],e=new Set;for(let t of n){if(!ll(t)){r.push(t);continue}let i=r.find(o=>t.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...t.children),e.add(i)):r.push(t)}for(let t of e){let i=Qa(t.children);r.push(new X(t.value,i))}return r.filter(t=>!e.has(t))}function dl(n){return n.data||{}}function hl(n){return n.resolve||{}}function fl(n,r,e,t,i,o,a){return he(async s=>{let{state:c,tree:u}=await sl(n,r,e,t,s.extractedUrl,i,o,a);return L(h({},s),{targetSnapshot:c,urlAfterRedirects:u})})}function ml(n){return he(r=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=r;if(!t.length)return g(r);let i=new Set(t.map(s=>s.route)),o=new Set;for(let s of i)if(!o.has(s))for(let c of es(s))o.add(c);let a=0;return B(o).pipe(ze(s=>i.has(s)?pl(s,e,n):(s.data=Mi(s,s.parent,n).resolve,g(void 0))),j(()=>a++),Nr(1),he(s=>a===o.size?g(r):te))})}function es(n){let r=n.children.map(e=>es(e)).flat();return[n,...r]}function pl(n,r,e){let t=n.routeConfig,i=n._resolve;return t?.title!==void 0&&!za(t)&&(i[un]=t.title),Cn(()=>(n.data=Mi(n,n.parent,e).resolve,gl(i,n,r).pipe(S(o=>(n._resolvedData=o,n.data=h(h({},n.data),o),null)))))}function gl(n,r,e){let t=gi(n);if(t.length===0)return g({});let i={};return B(t).pipe(he(o=>vl(n[o],r,e).pipe(xe(),j(a=>{if(a instanceof Mt)throw br(new Te,a);i[o]=a}))),Nr(1),S(()=>i),it(o=>qa(o)?te:En(o)))}function vl(n,r,e){let t=r._environmentInjector,i=Ft(n,t),o=i.resolve?i.resolve(r,e):z(t,()=>i(r,e));return et(o)}function _a(n){return Z(r=>{let e=n(r);return e?B(e).pipe(S(()=>r)):g(r)})}var Li=(()=>{class n{buildTitle(e){let t,i=e.root;for(;i!==void 0;)t=this.getResolvedTitleForRoute(i)??t,i=i.children.find(o=>o.outlet===b);return t}getResolvedTitleForRoute(e){return e.data[un]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:()=>l(ts),providedIn:"root"})}return n})(),ts=(()=>{class n extends Li{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(p(sa))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Be=new v("",{factory:()=>({})}),nt=new v(""),wr=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Fo);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=(async()=>{try{let o=await Ca(z(e,()=>t.loadComponent())),a=await is(rs(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,i),i}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let i=(async()=>{try{let o=await ns(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,i),i}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function ns(n,r,e,t){let i=await Ca(z(e,()=>n.loadChildren())),o=await is(rs(i)),a;o instanceof Ro||Array.isArray(o)?a=o:a=await r.compileModuleAsync(o),t&&t(n);let s,c,u=!1,d;return Array.isArray(a)?(c=a,u=!0):(s=a.create(e).injector,d=a,c=s.get(nt,[],{optional:!0,self:!0}).flat()),{routes:c.map(Pi),injector:s,factory:d}}function bl(n){return n&&typeof n=="object"&&"default"in n}function rs(n){return bl(n)?n.default:n}async function is(n){return n}var Er=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:()=>l(yl),providedIn:"root"})}return n})(),yl=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ki=new v(""),Ui=new v("");function os(n,r,e){let t=n.get(Ui),i=n.get(C);if(!i.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(u=>setTimeout(u));let o,a=new Promise(u=>{o=u}),s=i.startViewTransition(()=>(o(),Dl(n)));s.updateCallbackDone.catch(u=>{}),s.ready.catch(u=>{}),s.finished.catch(u=>{});let{onViewTransitionCreated:c}=t;return c&&z(n,()=>c({transition:s,from:r,to:e})),a}function Dl(n){return new Promise(r=>{Br({read:()=>setTimeout(r)},{injector:n})})}var _l=()=>{},Bi=new v(""),Cr=(()=>{class n{currentNavigation=M(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=M(null);events=new ee;transitionAbortWithErrorSubject=new ee;configLoader=l(wr);environmentInjector=l(q);destroyRef=l(kt);urlSerializer=l(Ue);rootContexts=l(tt);location=l(Oe);inputBindingEnabled=l(ln,{optional:!0})!==null;titleStrategy=l(Li);options=l(Be,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(Er);createViewTransition=l(ki,{optional:!0});navigationErrorHandler=l(Bi,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>g(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new lr(i)),t=i=>this.events.next(new dr(i));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;I(()=>{this.transitions?.next(L(h({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new W(null),this.transitions.pipe(fe(t=>t!==null),Z(t=>{let i=!1,o=new AbortController,a=()=>!i&&this.currentTransition?.id===t.id;return g(t).pipe(Z(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",k.SupersededByNewNavigation),te;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?L(h({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&d!=="reload")return this.events.next(new De(s.id,this.urlSerializer.serialize(s.rawUrl),"",St.IgnoredSameUrlNavigation)),s.resolve(!1),te;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return g(s).pipe(Z(f=>(this.events.next(new ke(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?te:Promise.resolve(f))),fl(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),j(f=>{t.targetSnapshot=f.targetSnapshot,t.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(_=>(_.finalUrl=f.urlAfterRedirects,_)),this.events.next(new rn)}),Z(f=>B(t.routesRecognizeHandler.deferredHandle??g(void 0)).pipe(S(()=>f))),j(()=>{let f=new nn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:_,source:U,restoredState:F,extras:T}=s,D=new ke(f,this.urlSerializer.serialize(_),U,F);this.events.next(D);let w=ja(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=L(h({},s),{targetSnapshot:w,urlAfterRedirects:_,extras:L(h({},T),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(A=>(A.finalUrl=_,A)),g(t)}else return this.events.next(new De(s.id,this.urlSerializer.serialize(s.extractedUrl),"",St.IgnoredByUrlHandlingStrategy)),s.resolve(!1),te}),S(s=>{let c=new ar(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=t=L(h({},s),{guards:Au(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),ju(s=>this.events.next(s)),Z(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw br(this.urlSerializer,s.guardsResult);let c=new sr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return te;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",k.GuardRejected),te;if(s.guards.canActivateChecks.length===0)return g(s);let u=new cr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(u),!a())return te;let d=!1;return g(s).pipe(ml(this.paramsInheritanceStrategy),j({next:()=>{d=!0;let f=new ur(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(s,"",k.NoDataFromResolver)}}))}),_a(s=>{let c=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let _=d._environmentInjector;f.push(this.configLoader.loadComponent(_,d.routeConfig).then(U=>{d.component=U}))}for(let _ of d.children)f.push(...c(_));return f},u=c(s.targetSnapshot.root);return u.length===0?g(s):B(Promise.all(u).then(()=>s))}),_a(()=>this.afterPreactivation()),Z(()=>{let{currentSnapshot:s,targetSnapshot:c}=t,u=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return u?B(u).pipe(S(()=>t)):g(t)}),Me(1),Z(s=>{let c=Su(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=L(h({},s),{targetRouterState:c}),this.currentNavigation.update(d=>(d.targetRouterState=c,d)),this.events.next(new It);let u=t.beforeActivateHandler.deferredHandle;return u?B(u.then(()=>s)):g(s)}),j(s=>{new Si(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(i=!0,this.currentNavigation.update(c=>(c.abort=_l,c)),this.lastSuccessfulNavigation.set(I(this.currentNavigation)),this.events.next(new ae(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),at(Ya(o.signal).pipe(fe(()=>!i&&!t.targetRouterState),j(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",k.Aborted)}))),j({complete:()=>{i=!0}}),at(this.transitionAbortWithErrorSubject.pipe(j(s=>{throw s}))),ot(()=>{o.abort(),i||this.cancelNavigationTransition(t,"",k.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),it(s=>{if(i=!0,this.destroyed)return t.resolve(!1),te;if(Wa(s))this.events.next(new oe(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Tu(s)?this.events.next(new Tt(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let c=new Qe(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let u=z(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof Mt){let{message:d,cancellationCode:f}=br(this.urlSerializer,u);this.events.next(new oe(t.id,this.urlSerializer.serialize(t.extractedUrl),d,f)),this.events.next(new Tt(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(u){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(u)}}return te}))}))}cancelNavigationTransition(e,t,i){let o=new oe(e.id,this.urlSerializer.serialize(e.extractedUrl),t,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=I(this.currentNavigation),i=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==i?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function wl(n){return n!==Et}var as=new v("");var ss=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:()=>l(El),providedIn:"root"})}return n})(),Dr=class{shouldDetach(r){return!1}store(r,e){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}shouldDestroyInjector(r){return!0}},El=(()=>{class n extends Dr{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Sn(n)))(i||n)}})();static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Sr=(()=>{class n{urlSerializer=l(Ue);options=l(Be,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(Oe);urlHandlingStrategy=l(Er);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new J;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=i??o;return a instanceof J?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:i}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,i),this.routerState=e):this.rawUrlTree=i}routerState=ja(null,l(q));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:()=>l(Cl),providedIn:"root"})}return n})(),Cl=(()=>{class n extends Sr{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof ke?this.updateStateMemento():e instanceof De?this.commitTransition(t):e instanceof nn?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof It?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof oe&&!Ba(e)?this.restoreHistory(t):e instanceof Qe?this.restoreHistory(t,!0):e instanceof ae&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:t,id:i}){let{replaceUrl:o,state:a}=t;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,c=h(h({},a),this.generateNgRouterState(i,s));this.location.replaceState(e,"",c)}else{let s=h(h({},a),this.generateNgRouterState(i,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:t}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Sn(n)))(i||n)}})();static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Rr(n,r){n.events.pipe(fe(e=>e instanceof ae||e instanceof oe||e instanceof Qe||e instanceof De),S(e=>e instanceof ae||e instanceof De?0:(e instanceof oe?e.code===k.Redirect||e.code===k.SupersededByNewNavigation:!1)?2:1),fe(e=>e!==2),Me(1)).subscribe(()=>{r()})}var we=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l($r);stateManager=l(Sr);options=l(Be,{optional:!0})||{};pendingTasks=l(lo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Cr);urlSerializer=l(Ue);location=l(Oe);urlHandlingStrategy=l(Er);injector=l(q);_events=new ee;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(ss);injectorCleanup=l(as,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(nt,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(ln,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new _n;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let i=this.navigationTransitions.currentTransition,o=I(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof oe&&t.code!==k.Redirect&&t.code!==k.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof ae)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Tt){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,i.currentRawUrl),c=h({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||wl(i.source)},a);this.scheduleNavigation(s,Et,null,c,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Eu(t)&&this._events.next(t)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Et,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,i,o)=>{this.navigateToSyncWithBrowser(e,i,t,o)})}navigateToSyncWithBrowser(e,t,i,o){let a=i?.navigationId?i:null;if(i){let c=h({},i);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let s=this.parseUrl(e);this.scheduleNavigation(s,t,a,o).catch(c=>{this.disposed||this.injector.get(Ut)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return I(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Pi),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=t,u=c?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=h(h({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let _=i?i.snapshot:this.routerState.snapshot.root;f=Pa(_)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return La(f,e,d,u??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let i=Le(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Et,null,t)}navigate(e,t={skipLocationChange:!1}){return Sl(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(He(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let i;if(t===!0?i=h({},Ra):t===!1?i=h({},vi):i=h(h({},vi),t),Le(e))return pa(this.currentUrlTree,e,i);let o=this.parseUrl(e);return pa(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((t,[i,o])=>(o!=null&&(t[i]=o),t),{})}scheduleNavigation(e,t,i,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,u;a?(s=a.resolve,c=a.reject,u=a.promise):u=new Promise((f,_)=>{s=f,c=_});let d=this.pendingTasks.add();return Rr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Sl(n){for(let r=0;r<n.length;r++)if(n[r]==null)throw new y(4008,!1)}var Il=(()=>{class n{router=l(we);stateManager=l(Sr);fragment=M("");queryParams=M({});path=M("");serializer=l(Ue);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof ae&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new J(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),cs=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new Nn("href"),{optional:!0});reactiveHref=Oo(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return I(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return I(this._target)}_target=M(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return I(this._queryParams)}_queryParams=M(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return I(this._fragment)}_fragment=M(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return I(this._queryParamsHandling)}_queryParamsHandling=M(void 0);set state(e){this._state.set(e)}get state(){return I(this._state)}_state=M(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return I(this._info)}_info=M(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return I(this._relativeTo)}_relativeTo=M(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return I(this._preserveFragment)}_preserveFragment=M(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return I(this._skipLocationChange)}_skipLocationChange=M(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return I(this._replaceUrl)}_replaceUrl=M(!1);isAnchorElement;onChanges=new ee;applicationErrorHandler=l(Ut);options=l(Be,{optional:!0});reactiveRouterState=l(Il);constructor(e,t,i,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=M(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Le(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,i,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||i||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let i=this.renderer,o=this.el.nativeElement;t!==null?i.setAttribute(o,e,t):i.removeAttribute(o,e)}_urlTree=Gr(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i==="preserve"||i==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:Le(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return I(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(qe(we),qe(_e),Pr("tabindex"),qe(ht),qe(re),qe(ue))};static \u0275dir=me({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,i){t&1&&xn("click",function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&Ye("href",i.reactiveHref(),Eo)("target",i._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Y],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Y],replaceUrl:[2,"replaceUrl","replaceUrl",Y],routerLink:"routerLink"},features:[Bt]})}return n})();var hn=class{};var us=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,i,o){this.router=e,this.injector=t,this.preloadingStrategy=i,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(fe(e=>e instanceof ae),ze(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let i=[];for(let o of t){o.providers&&!o._injector&&(o._injector=Tn(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&i.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&i.push(this.processRoutes(s,o.children??o._loadedRoutes))}return B(i).pipe(Or())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return g(null);let i;t.loadChildren&&t.canLoad===void 0?i=B(this.loader.loadChildren(e,t)):i=g(null);let o=i.pipe(he(a=>a===null?g(void 0):(t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(t.loadComponent&&!t._loadedComponent){let a=this.loader.loadComponent(e,t);return B([o,a]).pipe(Or())}else return o})}static \u0275fac=function(t){return new(t||n)(p(we),p(q),p(hn),p(wr))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ls=new v(""),Tl=(()=>{class n{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Et;restoredId=0;store={};urlSerializer=l(Ue);zone=l(H);viewportScroller=l(Jr);transitions=l(Cr);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof ke?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof ae?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof De&&e.code===St.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Rt)||e.scrollBehavior==="manual")return;let t={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){let i=I(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Rt(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,t,i))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(t){So()};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})();function Al(n,...r){return Lt([{provide:nt,multi:!0,useValue:n},[],{provide:_e,useFactory:ds},{provide:Vr,multi:!0,useFactory:hs},r.map(e=>e.\u0275providers)])}function ds(){return l(we).routerState.root}function fn(n,r){return{\u0275kind:n,\u0275providers:r}}function hs(){let n=l(ne);return r=>{let e=n.get($t);if(r!==e.components[0])return;let t=n.get(we),i=n.get(fs);n.get($i)===1&&t.initialNavigation(),n.get(gs,null,{optional:!0})?.setUpPreloading(),n.get(ls,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var fs=new v("",{factory:()=>new ee}),$i=new v("",{factory:()=>1});function ms(){let n=[{provide:kr,useValue:!0},{provide:$i,useValue:0},Hr(()=>{let r=l(ne);return r.get(Yr,Promise.resolve()).then(()=>new Promise(t=>{let i=r.get(we),o=r.get(fs);Rr(i,()=>{t(!0)}),r.get(Cr).afterPreactivation=()=>(t(!0),o.closed?g(void 0):o),i.initialNavigation()}))})];return fn(2,n)}function ps(){let n=[Hr(()=>{l(we).setUpLocationChangeListener()}),{provide:$i,useValue:2}];return fn(3,n)}var gs=new v("");function vs(n){return fn(0,[{provide:gs,useExisting:us},{provide:hn,useExisting:n}])}function bs(){return fn(8,[Oi,{provide:ln,useExisting:Oi}])}function ys(n){Ur("NgRouterViewTransitions");let r=[{provide:ki,useValue:os},{provide:Ui,useValue:h({skipNextTransition:!!n?.skipInitialTransition},n)}];return fn(9,r)}var Ds=[Oe,{provide:Ue,useClass:Te},we,tt,{provide:_e,useFactory:ds},wr,[]],Ml=(()=>{class n{constructor(){}static forRoot(e,t){return{ngModule:n,providers:[Ds,[],{provide:nt,multi:!0,useValue:e},[],t?.errorHandler?{provide:Bi,useValue:t.errorHandler}:[],{provide:Be,useValue:t||{}},t?.useHash?Fl():Ol(),xl(),t?.preloadingStrategy?vs(t.preloadingStrategy).\u0275providers:[],t?.initialNavigation?Nl(t):[],t?.bindToComponentInputs?bs().\u0275providers:[],t?.enableViewTransitions?ys().\u0275providers:[],Pl()]}}static forChild(e){return{ngModule:n,providers:[{provide:nt,multi:!0,useValue:e}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=$({})}return n})();function xl(){return{provide:ls,useFactory:()=>{let n=l(Jr),r=l(Be);return r.scrollOffset&&n.setOffset(r.scrollOffset),new Tl(r)}}}function Fl(){return{provide:ue,useClass:Zr}}function Ol(){return{provide:ue,useClass:kn}}function Nl(n){return[n.initialNavigation==="disabled"?ps().\u0275providers:[],n.initialNavigation==="enabledBlocking"?ms().\u0275providers:[]]}var ji=new v("");function Pl(){return[{provide:ji,useFactory:hs},{provide:Vr,multi:!0,useExisting:ji}]}var kl=["*"];function Ul(n,r){if(n&1&&(pe(0,"h2",1),On(1),ge()),n&2){let e=Fn();ut(),Mo(e.title())}}var _s=class n{id=Fe("");title=Fe("");static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["lib-section"]],inputs:{id:[1,"id"],title:[1,"title"]},ngContentSelectors:kl,decls:3,vars:2,consts:[[1,"section",3,"id"],[1,"section-title"]],template:function(e,t){e&1&&(ie(),pe(0,"section",0),An(1,Ul,2,1,"h2",1),P(2),ge()),e&2&&(Ao("id",t.id()),ut(),Mn(t.title()?1:-1))},dependencies:[pt],styles:[".section[_ngcontent-%COMP%]{padding:2rem 1rem;padding-bottom:100px;max-width:1200px;margin:0 auto}@media(min-width:768px){.section[_ngcontent-%COMP%]{padding:4rem 2rem;padding-bottom:80px}}.section-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;margin-bottom:1.5rem;text-align:center;color:#fff}@media(min-width:768px){.section-title[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:2rem}}"]})};var Bl=["*"];function jl(n,r){if(n&1&&(pe(0,"div",2),On(1),ge()),n&2){let e=Fn();mt("tooltip-"+e.position()),ut(),xo(" ",e.text()," ")}}var ws=class n{text=Fe("");position=Fe("top");isVisible=M(!1);onMouseEnter(){this.isVisible.set(!0)}onMouseLeave(){this.isVisible.set(!1)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["lib-tooltip"]],hostBindings:function(e,t){e&1&&xn("mouseenter",function(){return t.onMouseEnter()})("mouseleave",function(){return t.onMouseLeave()})},inputs:{text:[1,"text"],position:[1,"position"]},ngContentSelectors:Bl,decls:3,vars:1,consts:[[1,"tooltip-wrapper"],[1,"tooltip",3,"class"],[1,"tooltip"]],template:function(e,t){e&1&&(ie(),pe(0,"div",0),P(1),An(2,jl,2,3,"div",1),ge()),e&2&&(ut(2),Mn(t.isVisible()?2:-1))},dependencies:[pt],styles:[".tooltip-wrapper[_ngcontent-%COMP%]{position:relative;display:inline-flex}.tooltip[_ngcontent-%COMP%]{position:absolute;z-index:1000;padding:.5rem .75rem;background-color:#000000de;color:#fff;font-size:.75rem;border-radius:.25rem;white-space:nowrap;pointer-events:none;animation:_ngcontent-%COMP%_fadeIn .15s ease-in-out}.tooltip-top[_ngcontent-%COMP%]{bottom:calc(100% + .5rem);left:50%;transform:translate(-50%)}.tooltip-bottom[_ngcontent-%COMP%]{top:calc(100% + .5rem);left:50%;transform:translate(-50%)}.tooltip-left[_ngcontent-%COMP%]{right:calc(100% + .5rem);top:50%;transform:translateY(-50%)}.tooltip-right[_ngcontent-%COMP%]{left:calc(100% + .5rem);top:50%;transform:translateY(-50%)}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}"]})};function mn(n){return n.buttons===0||n.detail===0}function pn(n){let r=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var zi;function Es(){if(zi==null){let n=typeof document<"u"?document.head:null;zi=!!(n&&(n.createShadowRoot||n.attachShadow))}return zi}function Hi(n){if(Es()){let r=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function de(n){return n.composedPath?n.composedPath()[0]:n.target}var Vi;try{Vi=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Vi=!1}var Ae=(()=>{class n{_platformId=l(st);isBrowser=this._platformId?$o(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Vi)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gn;function Cs(){if(gn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>gn=!0}))}finally{gn=gn||!1}return gn}function Ot(n){return Cs()?n:!!n.capture}function je(n){return n instanceof re?n.nativeElement:n}var Ss=new v("cdk-input-modality-detector-options"),Rs={ignoreKeys:[18,17,224,91,16]},Is=650,Gi={passive:!0,capture:!0},Ts=(()=>{class n{_platform=l(Ae);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new W(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=de(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Is||(this._modality.next(mn(e)?"keyboard":"mouse"),this._mostRecentTarget=de(e))};_onTouchstart=e=>{if(pn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=de(e)};constructor(){let e=l(H),t=l(C),i=l(Ss,{optional:!0});if(this._options=h(h({},Rs),i),this.modalityDetected=this._modality.pipe(ao(1)),this.modalityChanged=this.modalityDetected.pipe(io()),this._platform.isBrowser){let o=l(dt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Gi),o.listen(t,"mousedown",this._onMousedown,Gi),o.listen(t,"touchstart",this._onTouchstart,Gi)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vn=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(vn||{}),As=new v("cdk-focus-monitor-default-options"),Ir=Ot({passive:!0,capture:!0}),Wi=(()=>{class n{_ngZone=l(H);_platform=l(Ae);_inputModalityDetector=l(Ts);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(C);_stopInputModalityDetector=new ee;constructor(){let e=l(As,{optional:!0});this._detectionMode=e?.detectionMode||vn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=de(e);for(let i=t;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,t=!1){let i=je(e);if(!this._platform.isBrowser||i.nodeType!==1)return g();let o=Hi(i)||this._document,a=this._elementInfo.get(i);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new ee,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=je(e),i=this._elementInfo.get(t);i&&(i.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(i))}focusVia(e,t,i){let o=je(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,t,c)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===vn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===vn.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?Is:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,t){let i=this._elementInfo.get(t),o=de(e);!i||!i.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),i)}_onBlur(e,t){let i=this._elementInfo.get(t);!i||i.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(i,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,i=this._rootNodeFocusListenerCount.get(t)||0;i||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ir),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ir)}),this._rootNodeFocusListenerCount.set(t,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(at(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let i=this._rootNodeFocusListenerCount.get(t);i>1?this._rootNodeFocusListenerCount.set(t,i-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ir),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ir),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,i){this._setClasses(e,t),this._emitOrigin(i,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&t.push([o,i])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ms=new Set,rt,qi=(()=>{class n{_platform=l(Ae);_nonce=l(jt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):zl}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&$l(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $l(n,r){if(!Ms.has(n))try{rt||(rt=document.createElement("style"),r&&rt.setAttribute("nonce",r),rt.setAttribute("type","text/css"),document.head.appendChild(rt)),rt.sheet&&(rt.sheet.insertRule(`@media ${n} {body{ }}`,0),Ms.add(n))}catch(e){console.error(e)}}function zl(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Hl=new v("MATERIAL_ANIMATIONS"),xs=null;function Vl(){return l(Hl,{optional:!0})?.animationsDisabled||l(po,{optional:!0})==="NoopAnimations"?"di-disabled":(xs??=l(qi).matchMedia("(prefers-reduced-motion)").matches,xs?"reduced-motion":"enabled")}function Tr(){return Vl()!=="enabled"}var se=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(se||{}),Yi=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=se.HIDDEN;constructor(r,e,t,i=!1){this._renderer=r,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Fs=Ot({passive:!0,capture:!0}),Zi=class{_events=new Map;addHandler(r,e,t,i){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(i):o.set(t,new Set([i]))}else this._events.set(e,new Map([[t,new Set([i])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Fs)})}removeHandler(r,e,t){let i=this._events.get(r);if(!i)return;let o=i.get(e);o&&(o.delete(t),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,Fs)))}_delegateEventHandler=r=>{let e=de(r);e&&this._events.get(r.type)?.forEach((t,i)=>{(i===e||i.contains(e))&&t.forEach(o=>o.handleEvent(r))})}},bn={enterDuration:225,exitDuration:150},Gl=800,Os=Ot({passive:!0,capture:!0}),Ns=["mousedown","touchstart"],Ps=["mouseup","mouseleave","touchend","touchcancel"],Wl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ar=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Zi;constructor(r,e,t,i,o){this._target=r,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=je(t)),o&&o.get(Kt).load(Wl)}fadeInRipple(r,e,t={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=h(h({},bn),t.animation);t.centered&&(r=i.left+i.width/2,e=i.top+i.height/2);let a=t.radius||ql(r,e,i),s=r-i.left,c=e-i.top,u=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${c-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,t.color!=null&&(d.style.backgroundColor=t.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),_=f.transitionProperty,U=f.transitionDuration,F=_==="none"||U==="0s"||U==="0s, 0s"||i.width===0&&i.height===0,T=new Yi(this,d,t,F);d.style.transform="scale3d(1, 1, 1)",T.state=se.FADING_IN,t.persistent||(this._mostRecentTransientRipple=T);let D=null;return!F&&(u||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let w=()=>{D&&(D.fallbackTimer=null),clearTimeout(G),this._finishRippleTransition(T)},A=()=>this._destroyRipple(T),G=setTimeout(A,u+100);d.addEventListener("transitionend",w),d.addEventListener("transitioncancel",A),D={onTransitionEnd:w,onTransitionCancel:A,fallbackTimer:G}}),this._activeRipples.set(T,D),(F||!u)&&this._finishRippleTransition(T),T}fadeOutRipple(r){if(r.state===se.FADING_OUT||r.state===se.HIDDEN)return;let e=r.element,t=h(h({},bn),r.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",r.state=se.FADING_OUT,(r._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=je(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ns.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ps.forEach(e=>{this._triggerElement.addEventListener(e,this,Os)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===se.FADING_IN?this._startFadeOutTransition(r):r.state===se.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:t}=r.config;r.state=se.VISIBLE,!t&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=se.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=mn(r),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Gl;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!pn(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===se.VISIBLE||r.config.terminateOnPointerUp&&r.state===se.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(Ns.forEach(e=>n._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(Ps.forEach(e=>r.removeEventListener(e,this,Os)),this._pointerUpEventsRegistered=!1))}};function ql(n,r,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),i=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(t*t+i*i)}var Ls=new v("mat-ripple-global-options");var Yl={capture:!0},Zl=["focus","mousedown","mouseenter","touchstart"],Ki="mat-ripple-loader-uninitialized",Xi="mat-ripple-loader-class-name",ks="mat-ripple-loader-centered",Mr="mat-ripple-loader-disabled",Us=(()=>{class n{_document=l(C);_animationsDisabled=Tr();_globalRippleOptions=l(Ls,{optional:!0});_platform=l(Ae);_ngZone=l(H);_injector=l(ne);_eventCleanups;_hosts=new Map;constructor(){let e=l(dt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Zl.map(t=>e.listen(this._document,t,this._onInteraction,Yl)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Ki,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Xi))&&e.setAttribute(Xi,t.className||""),t.centered&&e.setAttribute(ks,""),t.disabled&&e.setAttribute(Mr,"")}setDisabled(e,t){let i=this._hosts.get(e);i?(i.target.rippleDisabled=t,!t&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):t?e.setAttribute(Mr,""):e.removeAttribute(Mr)}_onInteraction=e=>{let t=de(e);if(t instanceof HTMLElement){let i=t.closest(`[${Ki}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Xi)),e.append(t);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??bn.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??bn.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(Mr),rippleConfig:{centered:e.hasAttribute(ks),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new Ar(s,this._ngZone,t,this._platform,this._injector),u=!s.rippleDisabled;u&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:u}),e.removeAttribute(Ki)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Bs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Kl=["mat-icon-button",""],Xl=["*"],Jl=new v("MAT_BUTTON_CONFIG");function js(n){return n==null?void 0:Wr(n)}var yn=(()=>{class n{_elementRef=l(re);_ngZone=l(H);_animationsDisabled=Tr();_config=l(Jl,{optional:!0});_focusMonitor=l(Wi);_cleanupClick;_renderer=l(ht);_rippleLoader=l(Us);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(Kt).load(Bs);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=me({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,i){t&2&&(Ye("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),mt(i.color?"mat-"+i.color:""),be("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Y],disabled:[2,"disabled","disabled",Y],ariaDisabled:[2,"aria-disabled","ariaDisabled",Y],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y],tabIndex:[2,"tabIndex","tabIndex",js],_tabindex:[2,"tabindex","_tabindex",js]}})}return n})(),Ql=(()=>{class n extends yn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ft],attrs:Kl,ngContentSelectors:Xl,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(ie(),ve(0,"span",0),P(1),ve(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var $s=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=$({imports:[Dt]})}return n})();var ed=["matButton",""],Ji=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Qi=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],td=["mat-fab",""],nd=["mat-mini-fab",""],rd=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`,zs=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ub=(()=>{class n extends yn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=id(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,i=this._appearance?zs.get(this._appearance):null,o=zs.get(e);i&&t.remove(...i),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ft],attrs:ed,ngContentSelectors:Qi,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(ie(Ji),ve(0,"span",0),P(1),pe(2,"span",1),P(3,1),ge(),P(4,2),ve(5,"span",2)(6,"span",3)),t&2&&be("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function id(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Hs=new v("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>Dn}),Dn={color:"accent"},lb=(()=>{class n extends yn{_options=l(Hs,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Dn,this.color=this._options.color||Dn.color}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(t,i){t&2&&be("mdc-fab--extended",i.extended)("mat-mdc-extended-fab",i.extended)},inputs:{extended:[2,"extended","extended",Y]},exportAs:["matButton","matAnchor"],features:[ft],attrs:td,ngContentSelectors:Qi,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(ie(Ji),ve(0,"span",0),P(1),pe(2,"span",1),P(3,1),ge(),P(4,2),ve(5,"span",2)(6,"span",3)),t&2&&be("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`],encapsulation:2,changeDetection:0})}return n})(),db=(()=>{class n extends yn{_options=l(Hs,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||Dn,this.color=this._options.color||Dn.color}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[ft],attrs:nd,ngContentSelectors:Qi,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(ie(Ji),ve(0,"span",0),P(1),pe(2,"span",1),P(3,1),ge(),P(4,2),ve(5,"span",2)(6,"span",3)),t&2&&be("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[rd],encapsulation:2,changeDetection:0})}return n})();var hb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=$({imports:[$s,Dt]})}return n})();export{Ys as a,oi as b,mc as c,ci as d,Yn as e,jc as f,Fi as g,cs as h,Al as i,Ml as j,Dt as k,op as l,ap as m,ws as n,_s as o,Ae as p,Ql as q,ub as r,lb as s,db as t,hb as u};
