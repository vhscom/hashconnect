"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[474],{14474:(E,p,d)=>{d.r(p),d.d(p,{encrypt:()=>w,decrypt:()=>m,generateIv:()=>v});var h=d(97598),y=function(n,o,t,e){return new(t||(t=Promise))(function(c,f){function C(r){try{s(e.next(r))}catch(l){f(l)}}function A(r){try{s(e.throw(r))}catch(l){f(l)}}function s(r){r.done?c(r.value):function(c){return c instanceof t?c:new t(function(f){f(c)})}(r.value).then(C,A)}s((e=e.apply(n,o||[])).next())})};const a=window.crypto||window.msCrypto,i=a.subtle||a.webkitSubtle,u={name:"AES-GCM",length:128};if(void 0===i)throw new Error("Failed to load Subtle CryptoAPI");function w(n,o,t){return y(this,void 0,void 0,function*(){return i.importKey("raw",o,u,!1,["encrypt"]).then(e=>i.encrypt(Object.assign({iv:n},u),e,t)).then(Buffer.from)})}function m(n,o,t){return y(this,void 0,void 0,function*(){return i.importKey("raw",o,u,!1,["decrypt"]).then(e=>i.decrypt(Object.assign({iv:n},u),e,t)).then(Buffer.from)})}function v(){const n=new Uint8Array(h.Sh);return a.getRandomValues(n),n}}}]);