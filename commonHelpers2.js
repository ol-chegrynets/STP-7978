/* empty css                      */import{S as i}from"./assets/vendor-3ce0ac9c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelector(".menu-open"),t=document.querySelector(".menu-close"),r=document.querySelector(".header-dropdown");c.addEventListener("click",()=>{r.classList.add("open")}),t.addEventListener("click",()=>{r.classList.remove("open")}),document.addEventListener("click",n=>{!r.contains(n.target)&&!c.contains(n.target)&&r.classList.remove("open")})});new i(".swiper-container",{parallax:!0,slidesPerView:"auto",loop:!0});document.querySelectorAll(".accordion-header").forEach(c=>{c.addEventListener("click",()=>{const t=c.parentElement,r=t.classList.contains("active");document.querySelectorAll(".accordion-item").forEach(n=>{n.classList.remove("active")}),r||t.classList.add("active")})});document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelector(".cookie-popup"),t=document.querySelector(".overlay");setTimeout(()=>{c.classList.add("show-popup"),t.classList.add("show-overlay")},5e3),document.querySelectorAll(".decline-btn, .accept-btn").forEach(r=>{r.addEventListener("click",()=>{c.classList.remove("show-popup"),t.classList.remove("show-overlay")})})});
//# sourceMappingURL=commonHelpers2.js.map
