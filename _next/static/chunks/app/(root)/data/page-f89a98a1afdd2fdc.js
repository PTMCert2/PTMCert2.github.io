(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{5197:function(e,t,n){Promise.resolve().then(n.bind(n,8054))},8054:function(e,t,n){"use strict";n.r(t),n.d(t,{DataTable:function(){return x}});var r=n(3827),a=n(2148),i=n(1885),s=n(2256),c=n.n(s),l=n(4090),h=n(1991),o=n(8879),u=n(1333),d=n(8620).Buffer;async function v(e){let t=await fetch("https://api.github.com/repos/PTMCert2/data/commits?path="+e,{headers:[["Accept","application/vnd.github+json"],["X-GitHub-Api-Version","2022-11-28"]]});return(await t.json()).map(t=>({date:t.commit.author.date,hash:t.sha,month:e}))}let m=(0,h.Ry)().shape({name:(0,h.Z_)().required(),surname:(0,h.Z_)().notRequired(),email:(0,h.Z_)().required(),phone:(0,h.Z_)().notRequired(),message:(0,h.Z_)().required(),ip:(0,h.Z_)().required(),date:(0,h.Z_)().required()});async function f(e,t,n,r){let a="".concat(t,"/").concat(n),i=localStorage.getItem(a);if(null===i)try{let t=await fetch("https://raw.githubusercontent.com/PTMCert2/data/".concat(a),{headers:[["Accept","application/vnd.github.raw"]]}),n=await t.text(),i=await (0,o.p)(n,r),s=JSON.parse(d.from(i.plaintext).toString("utf8"));if(s.date=e,!m.validateSync(s))return;return localStorage.setItem(a,JSON.stringify(s)),s}catch(e){return}return JSON.parse(i)}function x(){let[e,t]=(0,l.useState)(),[n,s]=(0,l.useState)([]);return((0,l.useEffect)(()=>{localStorage&&t(localStorage.getItem("pKey"))},[]),(0,l.useEffect)(()=>{async function t(e){let t=[(0,a.Z)((0,i.Z)(new Date,0),"yyMM"),(0,a.Z)((0,i.Z)(new Date,1),"yyMM"),(0,a.Z)((0,i.Z)(new Date,2),"yyMM")],n=c()(2);for(let e=localStorage.length;e>0;--e)t.some(t=>{var n;return null===(n=localStorage.key(e))||void 0===n?void 0:n.endsWith("/"+t)})||"pKey"===localStorage.key(e)||localStorage.removeItem(localStorage.key(e));let r=(await Promise.all(t.map(e=>n(v,e)))).flat();console.log(r);let l=(await Promise.all(r.map(t=>n(f,t.date,t.hash,t.month,e)))).filter(e=>void 0!==e);console.log(l),s(l)}"string"==typeof e&&t(e)},[e]),void 0===e)?(0,r.jsx)("main",{className:"fixed inset-0 flex flex-col items-center justify-center",children:(0,r.jsx)(u.fP,{className:"h-16 w-64 animate-pulse"})}):null===e?(0,r.jsx)("main",{className:"fixed inset-0 flex flex-col items-center justify-center",children:(0,r.jsx)("input",{className:"rounded-md border-2 p-1",type:"file",onChange:e=>{var n;let r=null===(n=e.target.files)||void 0===n?void 0:n[0];if(r){let e=new FileReader;e.readAsText(r,"UTF-8"),e.onload=e=>{var n,r;let a=null===(r=e.target)||void 0===r?void 0:null===(n=r.result)||void 0===n?void 0:n.toString();a&&(localStorage.setItem("pKey",a),t(a))}}}})}):(console.log(n),(0,r.jsx)("main",{className:"flex items-center justify-center",children:(0,r.jsxs)("table",{className:"max-w-screen-lg",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Дата"}),(0,r.jsx)("th",{children:"IP"}),(0,r.jsx)("th",{children:"Країна"}),(0,r.jsx)("th",{children:"Імя"}),(0,r.jsx)("th",{children:"Прізвище"}),(0,r.jsx)("th",{children:"Email"}),(0,r.jsx)("th",{children:"Повідомлення"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"10.10.2024"}),(0,r.jsx)("td",{children:"192.168.0.55"}),(0,r.jsx)("td",{children:"Уругвай"}),(0,r.jsx)("td",{children:"Johnny"}),(0,r.jsx)("td",{children:"Sins"}),(0,r.jsx)("td",{children:"sopra@gmail.com"}),(0,r.jsx)("td",{children:"mn gcdcgg gcercg"})]}),n.map((e,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"10.10.2024"}),(0,r.jsx)("td",{children:"192.168.0.55"}),(0,r.jsx)("td",{children:"Уругвай"}),(0,r.jsx)("td",{children:e.name}),(0,r.jsx)("td",{children:e.surname}),(0,r.jsx)("td",{children:e.email}),(0,r.jsx)("td",{children:e.message})]},t))]})]})}))}},1333:function(e,t,n){"use strict";n.d(t,{PE:function(){return i},fP:function(){return s},u3:function(){return a}});var r=n(3827);function a(e){let{className:t}=e;return(0,r.jsx)("svg",{className:t,version:"1.1",viewBox:"0 0 48 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"m26.82.28c-.37 0-.79.14-1.08.43-.29.29-.43.7-.43 1.08v21.31c0 .37.14.79.43 1.08.29.29.7.43 1.08.43h.54c.37 0 .79-.14 1.08-.43.24-.24.32-.58.36-.9.33.27.57.61.95.84l.01.01.01.01c1.02.55 2.26.8 3.67.8 1.35 0 2.54-.24 3.54-.76.95-.5 1.75-1.19 2.36-2.04.59-.82 1.02-1.74 1.3-2.75.27-.98.42-1.97.45-2.97.02-.32.03-.63.03-.92 0-.29-.01-.59-.03-.91v-.01c-.02-1-.17-2-.45-2.98-.28-1-.71-1.92-1.3-2.74-.61-.85-1.4-1.54-2.36-2.04-1-.52-2.19-.76-3.54-.76-1.42 0-2.66.26-3.69.84l0 0 0 0c-.36.2-.57.52-.88.76v-5.86c0-.37-.14-.79-.43-1.08-.29-.29-.7-.43-1.08-.43zm-12.1 5.76c-1.14 0-2.15.16-3.02.51-.82.33-1.51.75-2.07 1.28-.52.47-.93.98-1.22 1.53l-.01.01-.01.01c-.23.5-.39.97-.39 1.46 0 .34.11.69.31.97l.02.03.02.02c.31.37.77.48 1.16.48h.51c.29 0 .62-.09.87-.29.24-.19.4-.46.49-.71l.01-.02c.2-.53.53-.93 1.07-1.27l.01-.01.01 0c.52-.34 1.25-.54 2.25-.54 1.4 0 2.27.31 2.74.77l.01.01.01.01c.53.48.79 1.1.79 2.06v.42l-4.37.61c-1.98.27-3.64.87-4.95 1.85-1.34 1-2.08 2.46-2.08 4.13 0 1.05.33 2.05.96 2.91l0 0 0 .01c.61.81 1.41 1.45 2.36 1.93l0 0 0 0c.99.48 2.06.72 3.2.72 1.17 0 2.17-.13 3.02-.43l.01 0 .01 0c.77-.29 1.42-.64 1.96-1.07.06.27.1.56.3.76.29.29.7.43 1.08.43h.54c.37 0 .79-.14 1.08-.43.29-.29.43-.7.43-1.08v-10.66c0-.72-.11-1.45-.32-2.17-.22-.77-.62-1.47-1.15-2.08-.55-.67-1.3-1.19-2.22-1.57 0 0 0 0 0 0-.95-.4-2.08-.58-3.41-.58zm18.53 3.46c1.14 0 1.94.25 2.49.67.61.46 1.03 1.04 1.3 1.81.29.82.46 1.69.5 2.64.02.58.02 1.15 0 1.73-.04.95-.21 1.82-.5 2.64-.27.76-.7 1.35-1.3 1.81-.55.42-1.35.67-2.49.67-1.09 0-1.87-.25-2.46-.7-.64-.5-1.1-1.09-1.41-1.82-.31-.8-.48-1.58-.52-2.36v-.01l0-.01c-.02-.29-.03-.69-.03-1.19 0-.5.01-.9.03-1.2l0-.02v-.02c.02-.74.19-1.48.51-2.22.33-.71.8-1.29 1.44-1.77.61-.44 1.39-.68 2.44-.68zm-14.98 6.65v.17c0 1.25-.23 2.23-.64 2.97l0 0 0 0c-.4.75-.92 1.27-1.59 1.62-.69.36-1.45.55-2.31.55-.57 0-1.12-.09-1.68-.28-.51-.19-.9-.46-1.22-.81-.27-.29-.4-.64-.4-1.19 0-.6.24-1.03.98-1.5.74-.47 1.96-.87 3.64-1.1l0 0zm-16.27 6.05a1.8 1.8 0 00-1.8 1.8v6a1.8 1.8 0 001.8 1.8h44a1.8 1.8 0 001.8-1.8v-6a1.8 1.8 0 00-1.8-1.8 1.8 1.8 0 00-1.8 1.8v4.2h-40.4v-4.2a1.8 1.8 0 00-1.8-1.8z"})})}function i(e){let{className:t}=e;return(0,r.jsx)("svg",{className:t,version:"1.1",viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"m114.8 45.7h-15.8a2.5 2.5 0 01-2.5-2.5 32.5 32.5 0 00-65 0 2.5 2.5 0 01-2.5 2.5h-15.8a1.7 1.7 0 00-1.7 1.6c0 9.4 11.1 13.1 16 14.3v-5.5a2 2 0 014 0v57c0 1.7 3.7 4.1 9.5 4.1a15.3 15.3 0 007.5-1.7 7.8 7.8 0 018 0 15.3 15.3 0 007.5 1.7 15.3 15.3 0 007.5-1.7 7.8 7.8 0 018 0 15.3 15.3 0 007.5 1.7c5.8 0 9.5-2.5 9.5-4.1v-57a2 2 0 114 0v5.5c4.9-1.2 16-4.9 16-14.3a1.7 1.7 0 00-1.7-1.6zm-68.6-2.7a3.4 3.4 0 113.4 3.4 3.5 3.5 0 01-3.3-3.4zm34.3 19.6a16.5 16.5 0 11-33 0v-1.4h33zm-2.2-16.1a3.4 3.4 0 113.4-3.4 3.5 3.5 0 01-3.4 3.4z"})})}function s(e){let{className:t,innerClassName:n}=e;return(0,r.jsxs)("svg",{version:"1.1",viewBox:"0 0 64 16",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{className:t,d:"m4 0h56c2.22 0 4 1.78 4 4v8c0 2.22-1.78 4-4 4h-56c-2.22 0-4-1.78-4-4v-8c0-2.22 1.78-4 4-4z"}),(0,r.jsx)("path",{className:n,d:"m59.67 7.43h-2.5v4.52h-1.45v-4.52h-1.87v-1.44h1.86v-1.94h1.45v1.95h2.5zm-6.36 0h-3.22q-.29 0-.44.15-.15.14-.15.42v3.95h-1.44v-3.95q0-.37.09-.66.09-.29.25-.51.16-.23.36-.38.2-.16.42-.26.23-.1.45-.14.23-.05.43-.05h3.24zm-6.18.54q0 .3-.1.64-.11.34-.35.64-.23.29-.61.49-.38.2-.92.2h-2.58v-1.36h2.59q.29 0 .45-.18.16-.18.16-.45 0-.28-.18-.44-.18-.16-.43-.16h-2.59q-.29 0-.45.18-.16.18-.16.44v2q0 .29.18.45.18.16.45.16h2.57v1.37h-2.59q-.3 0-.64-.1-.34-.1-.64-.34-.29-.24-.49-.61-.2-.38-.2-.92v-2.01q0-.3.1-.64.1-.35.34-.64.24-.3.61-.5.38-.2.92-.2h2.59q.3 0 .64.1.35.1.64.34.3.23.5.61.2.37.2.92zm-7.54 3.99h-5.17q-.2 0-.43-.04-.23-.05-.45-.15-.22-.1-.42-.25-.2-.16-.36-.38-.15-.23-.25-.52-.09-.3-.09-.67v-3.89q0-.2.04-.42.05-.23.15-.45.1-.23.26-.43.16-.2.38-.36.23-.16.52-.25.29-.09.66-.09h5.17v1.43h-5.17q-.28 0-.43.15-.15.15-.15.44v3.87q0 .28.15.43.15.15.43.15h5.17zm-8.74 0h-1.44v-4.71l-2.54 4.47q-.09.17-.26.26-.17.09-.36.09-.19 0-.35-.09-.16-.09-.25-.26l-2.57-4.47v4.7h-1.43v-7.29q0-.25.14-.44.15-.19.39-.26.12-.03.23-.02.12.01.22.05.11.04.2.12.09.07.15.18l3.26 5.67 3.26-5.67q.13-.21.35-.3.23-.09.47-.03.23.07.38.26.15.19.15.44zm-10.25-6.48h-3.16v6.47h-1.43v-6.47h-3.17v-1.43h7.76zm-8.37 1.87q0 .49-.12.88-.12.39-.33.68-.2.29-.47.5-.27.21-.57.34-.29.13-.6.19-.3.06-.56.06h-3.24v-1.42h3.24q.28-.02.5-.11.23-.09.39-.25.16-.15.25-.37.09-.22.09-.5v-.64q-.04-.27-.13-.5-.09-.23-.24-.39-.15-.16-.36-.24-.22-.1-.5-.1h-3.23q-.29 0-.44.15-.15.15-.15.43v5.89h-1.43v-5.89q0-.55.2-.94.2-.38.5-.62.3-.24.66-.34.35-.11.65-.11h3.24q.49 0 .87.13.39.12.68.33.3.2.5.47.21.27.34.57.14.29.2.6.06.3.06.56z"})]})}},8879:function(e,t,n){"use strict";n.d(t,{H:function(){return i},p:function(){return s}});var r=n(272),a=n(8620).Buffer;async function i(e){let t=await (0,r.js)("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt3k1ebixsZhoxvnT74B+pCw7iZVmxdEkrJE/9ejZ5aMAOG/QxG6ItYJXXjAENgKO6xdaLlWUaf0TsfZhSGVXHQGGniPbYqcUIgJVnq/Zs6fbC+eiJMiszc0FBm4snsE3/kH4KHzEfGPmNQ6Ch7uEbLt0JrSDKVzC8tcvEhYoUwb54wdgp9rEUFFGi2nuNiC6kK8vCAfJRgWTgDfKsV1DpMSRjLF+fiuzJrQD5Jcbs4FWvOs+Ta95qfJIR8g6dZbJbK9SNM2fAzhqSYondjxelroDGcH86/LA23eygi4UsWQ0BPwR5uiuyaiIwhjtx5XfXwsZX7ojTd53wLpuFIHYPwIDAQAB-----END PUBLIC KEY-----","RSA-OAEP");return await new r.B0(a.from(e)).setProtectedHeader({alg:"RSA-OAEP",enc:"A256GCM"}).encrypt(t)}async function s(e,t){let n=await (0,r.R7)(t,"RSA-OAEP");return await (0,r.AJ)(e,n)}},2256:function(e,t,n){"use strict";let r=n(1995);e.exports=e=>{if(!((Number.isInteger(e)||e===1/0)&&e>0))throw TypeError("Expected `concurrency` to be a number from 1 and up");let t=new r,n=0,a=()=>{n--,t.size>0&&t.dequeue()()},i=async function(e,t){for(var r=arguments.length,i=Array(r>2?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];n++;let c=(async()=>e(...i))();t(c);try{await c}catch(e){}a()},s=function(r,a){for(var s=arguments.length,c=Array(s>2?s-2:0),l=2;l<s;l++)c[l-2]=arguments[l];t.enqueue(i.bind(null,r,a,...c)),(async()=>{await Promise.resolve(),n<e&&t.size>0&&t.dequeue()()})()},c=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise(t=>{s(e,t,...n)})};return Object.defineProperties(c,{activeCount:{get:()=>n},pendingCount:{get:()=>t.size},clearQueue:{value:()=>{t.clear()}}}),c}},1995:function(e){"use strict";class t{constructor(e){this.value=e,this.next=void 0}}class n{enqueue(e){let n=new t(e);this._head?this._tail.next=n:this._head=n,this._tail=n,this._size++}dequeue(){let e=this._head;if(e)return this._head=this._head.next,this._size--,e.value}clear(){this._head=void 0,this._tail=void 0,this._size=0}get size(){return this._size}*[Symbol.iterator](){let e=this._head;for(;e;)yield e.value,e=e.next}constructor(){this.clear()}}e.exports=n}},function(e){e.O(0,[991,91,971,69,744],function(){return e(e.s=5197)}),_N_E=e.O()}]);