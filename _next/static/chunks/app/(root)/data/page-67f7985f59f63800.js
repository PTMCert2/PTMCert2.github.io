(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{6571:function(e,t,a){Promise.resolve().then(a.bind(a,6035))},6035:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(3827),i=a(2148),r=a(1885),s=a(4090),c=a(2670),l=a(703),o=a(8879),d=a(8620).Buffer;function h(){let[e,t]=(0,s.useState)(),[a,c]=(0,s.useState)([]);return((0,s.useEffect)(()=>{localStorage&&t(localStorage.getItem("pKey"))},[]),(0,s.useEffect)(()=>{async function t(e){let t=[(0,i.Z)((0,r.Z)(new Date,0),"yyMM"),(0,i.Z)((0,r.Z)(new Date,1),"yyMM"),(0,i.Z)((0,r.Z)(new Date,2),"yyMM")];for(let e=localStorage.length;e>0;--e)t.some(t=>{var a;return null===(a=localStorage.key(e))||void 0===a?void 0:a.endsWith("/"+t)})||"pKey"===localStorage.key(e)||localStorage.removeItem(localStorage.key(e));let a=await fetch("https://api.github.com/repos/PTMCert2/data/commits?path="+t[0],{headers:[["Accept","application/vnd.github+json"],["X-GitHub-Api-Version","2022-11-28"]]}),n=await fetch("https://api.github.com/repos/PTMCert2/data/commits?path="+t[1],{headers:[["Accept","application/vnd.github+json"],["X-GitHub-Api-Version","2022-11-28"]]}),s=await fetch("https://api.github.com/repos/PTMCert2/data/commits?path="+t[2],{headers:[["Accept","application/vnd.github+json"],["X-GitHub-Api-Version","2022-11-28"]]}),l=[...(await a.json()).map(e=>e.sha+"/"+t[0]),...(await n.json()).map(e=>e.sha+"/"+t[1]),...(await s.json()).map(e=>e.sha+"/"+t[2])];await Promise.all(l.map(async t=>{try{let a=localStorage.getItem(t);if(!a){let n=await fetch("https://raw.githubusercontent.com/PTMCert2/data/".concat(t),{headers:[["Accept","application/vnd.github.raw"]]}),i=await n.text(),r=await (0,o.p)(i,e);a=d.from(r.plaintext).toString("utf8"),localStorage.setItem(t,a)}c(e=>[...e,JSON.parse(a)])}catch(e){console.log("Error")}}))}"string"==typeof e&&t(e)},[e]),void 0===e)?(0,n.jsx)("main",{className:"fixed inset-0 flex flex-col items-center justify-center",children:(0,n.jsx)(l.default,{className:"animate-pulse",alt:"",src:"/images/logo.png",height:64,width:256})}):null===e?(0,n.jsx)("main",{className:"fixed inset-0 flex flex-col items-center justify-center",children:(0,n.jsx)("input",{className:"rounded-md border-2 p-1",type:"file",onChange:e=>{var a;let n=null===(a=e.target.files)||void 0===a?void 0:a[0];if(n){let e=new FileReader;e.readAsText(n,"UTF-8"),e.onload=e=>{var a,n;let i=null===(n=e.target)||void 0===n?void 0:null===(a=n.result)||void 0===a?void 0:a.toString();i&&(localStorage.setItem("pKey",i),t(i))}}}})}):(0,n.jsx)("main",{className:"flex items-center justify-center",children:(0,n.jsxs)("table",{className:"max-w-screen-lg",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Дата"}),(0,n.jsx)("th",{children:"IP"}),(0,n.jsx)("th",{children:"Країна"}),(0,n.jsx)("th",{children:"Імя"}),(0,n.jsx)("th",{children:"Прізвище"}),(0,n.jsx)("th",{children:"Email"}),(0,n.jsx)("th",{children:"Повідомлення"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"10.10.2024"}),(0,n.jsx)("td",{children:"192.168.0.55"}),(0,n.jsx)("td",{children:"Уругвай"}),(0,n.jsx)("td",{children:"Johnny"}),(0,n.jsx)("td",{children:"Sins"}),(0,n.jsx)("td",{children:"sopra@gmail.com"}),(0,n.jsx)("td",{children:"mn gcdcgg gcercg"})]}),a.map((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"10.10.2024"}),(0,n.jsx)("td",{children:"192.168.0.55"}),(0,n.jsx)("td",{children:"Уругвай"}),(0,n.jsx)("td",{children:e.name}),(0,n.jsx)("td",{children:e.surname}),(0,n.jsx)("td",{children:e.email}),(0,n.jsx)("td",{children:e.message})]},t))]})]})})}a(8620).Buffer;var u=function(){let[e,t]=(0,s.useState)([]),{register:a,handleSubmit:i,formState:{errors:r}}=(0,c.cI)();return(0,n.jsx)(h,{})}},8879:function(e,t,a){"use strict";a.d(t,{H:function(){return r},p:function(){return s}});var n=a(272),i=a(8620).Buffer;async function r(e){let t=await (0,n.js)("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt3k1ebixsZhoxvnT74B+pCw7iZVmxdEkrJE/9ejZ5aMAOG/QxG6ItYJXXjAENgKO6xdaLlWUaf0TsfZhSGVXHQGGniPbYqcUIgJVnq/Zs6fbC+eiJMiszc0FBm4snsE3/kH4KHzEfGPmNQ6Ch7uEbLt0JrSDKVzC8tcvEhYoUwb54wdgp9rEUFFGi2nuNiC6kK8vCAfJRgWTgDfKsV1DpMSRjLF+fiuzJrQD5Jcbs4FWvOs+Ta95qfJIR8g6dZbJbK9SNM2fAzhqSYondjxelroDGcH86/LA23eygi4UsWQ0BPwR5uiuyaiIwhjtx5XfXwsZX7ojTd53wLpuFIHYPwIDAQAB-----END PUBLIC KEY-----","RSA-OAEP");return await new n.B0(i.from(e)).setProtectedHeader({alg:"RSA-OAEP",enc:"A256GCM"}).encrypt(t)}async function s(e,t){let a=await (0,n.R7)(t,"RSA-OAEP");return await (0,n.AJ)(e,a)}},6993:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=a(6921)._(a(4090)).default.createContext(null)}},function(e){e.O(0,[111,703,971,69,744],function(){return e(e.s=6571)}),_N_E=e.O()}]);