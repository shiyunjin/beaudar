(function(n){typeof define=="function"&&define.amd?define(n):n()})(function(){"use strict";const n="preferred-color-scheme",m=window.matchMedia("(prefers-color-scheme: dark)").matches?"github-dark":"github-light",t=new URL(location.href),o=t.searchParams.get("beaudar");o&&(localStorage.setItem("beaudar-session",o),t.searchParams.delete("beaudar"),history.replaceState(void 0,document.title,t.href));let r=document.currentScript;r||(r=document.querySelector('script[src^="https://comment.shiyunjin.com/client.js"],script[src^="http://localhost:3000/client.ts"]'));const e={};for(let i=0;i<r.attributes.length;i++){const a=r.attributes.item(i);e[a.name.replace(/^data-/,"")]=a.value}e.theme===n&&(e.theme=m);const s=document.querySelector("link[rel='canonical']");e.url=s?s.href:t.origin+t.pathname+t.search,e.origin=t.origin,e.pathname=t.pathname.length<2?"index":t.pathname.substring(1).replace(/\.\w+$/,""),e.title=document.title;const c=document.querySelector("meta[name='description']");e.description=c?c.content:"";const l=document.querySelector("meta[property='og:title'],meta[name='og:title']");e["og:title"]=l?l.content:"",e.session=o||localStorage.getItem("beaudar-session")||"",document.head.insertAdjacentHTML("afterbegin",`<style>
    .beaudar {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      max-width: 760px;
      margin-left: auto;
      margin-right: auto;
    }
    .beaudar-frame {
      color-scheme: light;
      position: absolute;
      left: 0;
      right: 0;
      width: 1px;
      min-width: 100%;
      max-width: 100%;
      height: 100%;
      border: 0;
    }
  </style>`);const d=r.src.match(/^https:\/\/beaudar.lipk\.org|http:\/\/localhost:\d+/)[0],h=`${d}/beaudar.html`;r.insertAdjacentHTML("afterend",`<div class="beaudar">
    <iframe class="beaudar-frame" title="Comments" scrolling="no" src="${h}?${new URLSearchParams(e)}" loading="lazy"></iframe>
  </div>`);const u=r.nextElementSibling;r.parentElement.removeChild(r),addEventListener("message",i=>{if(i.origin!==d)return;const a=i.data;a&&a.type==="resize"&&a.height&&(u.style.height=`${a.height}px`)})});
