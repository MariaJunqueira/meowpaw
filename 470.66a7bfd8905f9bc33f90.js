"use strict";(self.webpackChunkmeowpaw=self.webpackChunkmeowpaw||[]).push([[470],{470:(e,t,n)=>{n.r(t),n.d(t,{ContactComponent:()=>s});const o="contact-component";class s extends HTMLElement{static styleId=`_mp-${Date.now()}`;constructor(){super(),this.setAttribute(s.styleId,"");const e=this.scopeCss("section {\n  padding: 20px;\n\n  > h1 {\n    color: black;\n  }\n}\n");this.innerHTML=this.scopeHtml("<section> <h1>Contact Works!</h1> <home-component></home-component> <about-component></about-component> </section> "),s.appendScopedStyle(e),this.loadHomeComponent(),this.loadAboutComponent()}scopeCss(e){return e.replace(/([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/g,((e,t)=>`${t.split(",").map((e=>e.includes("-")?e.trim():`${e.trim()}[${s.styleId}] `)).join(", ")} ${e.endsWith(",")?",":" {"}`))}scopeHtml(e){const t=(new DOMParser).parseFromString(e,"text/html");return t.body.querySelectorAll("*").forEach((e=>{e.tagName.includes("-")||e.setAttribute(s.styleId,"")})),t.body.innerHTML}static appendScopedStyle(e){if(!document.head.querySelector(`#${this.styleId}`)){const t=document.createElement("style");t.id=this.styleId,t.textContent=e,document.head.appendChild(t)}}async loadAboutComponent(){const{AboutComponent:e}=await n.e(727).then(n.bind(n,727));customElements.get("about-component")||customElements.define("about-component",e)}async loadHomeComponent(){const{HomeComponent:e}=await n.e(79).then(n.bind(n,79));customElements.get("home-component")||customElements.define("home-component",e)}}customElements.get(o)||customElements.define(o,s)}}]);