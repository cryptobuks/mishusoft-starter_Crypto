"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[411,978],{411:function(e,t,n){function r(e){var t,n,r,u;for(n in e){var c=e[n];for(r in c){var i=r,o=c[r];for(u in t=document.createElement(i),o){var l=u,f=o[u];t.setAttribute(l,f)}}}return t}function u(e){if(null!==document.querySelector(e))return document.querySelector(e)}function c(e){if(null!==document.querySelectorAll(e))return document.querySelectorAll(e)}function i(e){0!==e.length&&e.forEach((function(e){u("#"+e.id).removeAttribute(e.attribute)}))}function o(e){0!==e.length&&e.forEach((function(e){u("#"+e.id).style.display=e.display}))}function l(e){0!==e.length&&e.forEach((function(e){u("#"+e.id).value=e.value}))}function f(e,t){if(u(e)){var n=t;if(n.length>0)for(var r=0;r<n.length;r++)u(n[r].key)[n[r].attribute]=n[r].attribute}}n.r(t),n.d(t,{createElement:function(){return r},captureElement:function(){return u},captureElements:function(){return c},removeAttributeById:function(){return i},changeElementDisplayById:function(){return o},changeElementValueById:function(){return l},changeElementAttributeValue:function(){return f}})}}]);