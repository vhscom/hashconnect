"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[945],{81945:(m,p,a)=>{a.r(p),a.d(p,{encrypt:()=>w,decrypt:()=>D,generateIv:()=>E});var f=a(87702),v=a(97598),y=function(o,u,n,t){return new(n||(n=Promise))(function(c,e){function s(i){try{h(t.next(i))}catch(l){e(l)}}function d(i){try{h(t.throw(i))}catch(l){e(l)}}function h(i){i.done?c(i.value):function(c){return c instanceof n?c:new n(function(e){e(c)})}(i.value).then(s,d)}h((t=t.apply(o,u||[])).next())})};const g="aes-256-gcm";function w(o,u,n){return y(this,void 0,void 0,function*(){const t=(0,f.createCipheriv)(g,u,o),r=t.update(n),c=t.final(),e=t.getAuthTag();return Buffer.concat([r,c,e])})}function D(o,u,n){return y(this,void 0,void 0,function*(){const t=n.length-v.D2,r=n.slice(0,t),c=n.slice(t),e=(0,f.createDecipheriv)(g,u,o);e.setAuthTag(c);const s=e.update(r),d=e.final();return Buffer.concat([s,d])})}function E(){return(0,f.randomBytes)(v.Sh)}}}]);