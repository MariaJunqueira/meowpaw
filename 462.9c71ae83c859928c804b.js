"use strict";(self.webpackChunkmeowpaw=self.webpackChunkmeowpaw||[]).push([[462],{462:(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var n=s(41);const r={"mug-router":()=>s.e(414).then(s.bind(s,414))};let o=class extends HTMLElement{constructor(){super(),console.log("AppComponent constructed!")}};o=function(t,e,s,n){var r,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,n);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(a=(o<3?r(a):o>3?r(e,s,a):r(e,s))||a);return o>3&&a&&Object.defineProperty(e,s,a),a}([(0,n.w)({selector:"app-component",template:'<nav> <a href="/" data-link>Home</a> <a href="/about/1" data-link>About</a> <a href="/contact" data-link>Contact</a> </nav> <mug-router></mug-router> ',styles:"",components:r}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],o);const a=o},41:(t,e,s)=>{function n(t){return function(e){var s;return(s=class extends e{static get observedAttributes(){return Array.from(this.observedAttributesSet)}attributeChangedCallback(t,e,s,n){this._isFullyConstructed&&(this.hasOwnProperty(t)&&(this[t]=s),this.dispatchEvent(new CustomEvent("property-changed",{detail:{property:t,oldValue:e,newValue:s,isFirstChanged:n}})))}constructor(...e){super(...e),this._isFullyConstructed=!1;const s=this.constructor.observedAttributesSet;let n=[];(null==s?void 0:s.size)&&(n=Array.from(s)),n=n.concat(Object.getOwnPropertyNames(this)),this._data={},this.addEventListener("property-changed",(e=>{this._data[e.detail.property]=e.detail.newValue,this.innerHTML=this.scopeHtml(t.template,r,this._data)})),null==n||n.forEach((t=>{var e;let s=this[t];this._data[t]=s,(null===(e=this[`_${t}`])||void 0===e?void 0:e.isFirstChange)&&(this[`_${t}`].isFirstChange=!1,this._data[t]=this[`_${t}`].value),Object.defineProperty(this,t,{get:()=>s,set:e=>{const n=s;s=e,n!==e&&this.dispatchEvent(new CustomEvent("property-changed",{detail:{property:t,oldValue:n,newValue:e,isFirstChange:!1}}))},enumerable:!0,configurable:!0})}));const r=this.constructor.styleId;this.setAttribute(r,"");const o=this.scopeCss(t.styles,r);this.innerHTML=this.scopeHtml(t.template,r,this._data),this.constructor.appendScopedStyle(o,r),this.loadDynamicComponents(t.components),this._isFullyConstructed=!0}scopeCss(t,e){return t.replace(/([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/g,((t,s)=>`${s.split(",").map((t=>t.includes("-")?t.trim():`${t.trim()}[${e}]`)).join(", ")} ${t.endsWith(",")?",":" {"}`))}scopeHtml(t,e,s={}){const n=t.replace(/\{\{\s*(\w+)\s*\}\}/g,((t,e)=>s[e])),r=(new DOMParser).parseFromString(n,"text/html");return r.body.querySelectorAll("*").forEach((t=>{t.tagName.includes("-")||t.setAttribute(e,"")})),r.body.innerHTML}static appendScopedStyle(t,e){if(!document.head.querySelector(`#${e}`)){const s=document.createElement("style");s.id=e,s.textContent=t,document.head.appendChild(s)}}loadDynamicComponents(t){if(t)for(const[e,s]of Object.entries(t))customElements.get(e)||s().then((t=>{customElements.get(e)||customElements.define(e,t.default)})).catch((t=>{console.error(`Error loading component '${e}':`,t)}))}}).styleId=`_${t.selector}-${Date.now()}`,s.observedAttributesSet=e.observedAttributesSet||new Set,s}}s.d(e,{w:()=>n})}}]);