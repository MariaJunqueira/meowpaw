"use strict";(self.webpackChunkmeowpaw=self.webpackChunkmeowpaw||[]).push([[598],{598:(e,t,o)=>{o.r(t),o.d(t,{HomeComponent:()=>n});class n extends HTMLElement{constructor(){super(),this.innerHTML="<section> <h1>Home</h1> <about-component></about-component> </section> ";const e=document.createElement("style"),t=this.prefixCssSelectors("h1 {\n  color: purple;\n}\n","home-component");e.textContent=t,this.appendChild(e),this.loadAboutComponent()}prefixCssSelectors(e,t){return e.replace(/(^|\s+)([a-z0-9\[\]\=\"\:\-\_\.]+)(\s*{)/gi,`$1${t} $2$3`)}async loadAboutComponent(){const{AboutComponent:e}=await o.e(465).then(o.bind(o,465));customElements.get("about-component")||customElements.define("about-component",e)}}customElements.get("home-component")||customElements.define("home-component",n)}}]);