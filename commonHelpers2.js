/* empty css                      */import{S as i}from"./assets/vendor-3ce0ac9c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelector(".menu-open"),r=document.querySelector(".menu-close"),o=document.querySelector(".header-dropdown");c.addEventListener("click",()=>{o.classList.add("open")}),r.addEventListener("click",()=>{o.classList.remove("open")}),document.addEventListener("click",n=>{!o.contains(n.target)&&!c.contains(n.target)&&o.classList.remove("open")})});new i(".swiper-container",{parallax:!0,slidesPerView:"auto",loop:!0});document.querySelectorAll(".accordion-header").forEach(c=>{c.addEventListener("click",()=>{const r=c.parentElement,o=r.classList.contains("active");document.querySelectorAll(".accordion-item").forEach(n=>{n.classList.remove("active")}),o||r.classList.add("active")})});
//# sourceMappingURL=commonHelpers2.js.map
