/*! For license information please see 9988.8b822ca6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkvisit_cedar_city=self.webpackChunkvisit_cedar_city||[]).push([[9988],{9988:function(e,t,n){n.r(t),n.d(t,{startFocusVisible:function(){return r}});var o="ion-focused",s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=function(e){var t=[],n=!0,r=e?e.shadowRoot:document,i=e||document.body,c=function(e){t.forEach((function(e){return e.classList.remove(o)})),e.forEach((function(e){return e.classList.add(o)})),t=e},u=function(){n=!1,c([])},a=function(e){(n=s.includes(e.key))||c([])},d=function(e){if(n&&e.composedPath){var t=e.composedPath().filter((function(e){return!!e.classList&&e.classList.contains("ion-focusable")}));c(t)}},f=function(){r.activeElement===i&&c([])};r.addEventListener("keydown",a),r.addEventListener("focusin",d),r.addEventListener("focusout",f),r.addEventListener("touchstart",u),r.addEventListener("mousedown",u);return{destroy:function(){r.removeEventListener("keydown",a),r.removeEventListener("focusin",d),r.removeEventListener("focusout",f),r.removeEventListener("touchstart",u),r.removeEventListener("mousedown",u)},setFocus:c}}}}]);
//# sourceMappingURL=9988.8b822ca6.chunk.js.map