if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let t={};const o=e=>s(e,d),f={module:{uri:d},exports:t,require:o};i[d]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BpyJbM0R.css",revision:null},{url:"assets/index-Cc1KIBdC.js",revision:null},{url:"index.html",revision:"1dfd6cd32b856143385cd43389728203"},{url:"registerSW.js",revision:"2df57d2820b13e72d70d58e9fdc68c2f"},{url:"web-app-manifest-192x192.png",revision:"3e4a2d51f90c9d5f5500dc56eb68ee16"},{url:"web-app-manifest-512x512.png",revision:"b401d5f30f7dad6f802ef717f91816db"},{url:"manifest.webmanifest",revision:"b09c06ca22b89ded77e10d8607e183ef"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));