(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{6948:function(e,s,t){Promise.resolve().then(t.bind(t,7528))},7528:function(e,s,t){"use strict";t.r(s),t.d(s,{Glossary:function(){return u}});var l=t(3827),a=t(7288),r=t(3664),n=t(2015),c=t(6391),i=t(7907),d=t(4090),h=t(8792);function o(e){let{term:s,children:t}=e;return(0,l.jsx)(h.default,{className:"text-sky-600 hover:underline focus:underline",href:{query:{term:s,exact:!0}},children:t})}var m=t(1333);function u(e){var s;let{vocabulary:t}=e,h=(0,i.useSearchParams)(),u="true"===h.get("exact"),x=h.get("term")||"",f=(null===(s=t.find(e=>e.slug===x))||void 0===s?void 0:s.name)||"",[p,g]=(0,d.useState)(u),[w,j]=(0,d.useState)(f),[N,b]=(0,d.useState)("");(0,d.useEffect)(()=>{g(u),j(f)},[u,f]),(0,d.useEffect)(()=>{b(window.location.toString())},[]);let q=t.filter(e=>!!(p&&e.name===w||!p&&e.name.includes(w)));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"mx-auto my-12 grid w-4/5 grid-cols-1 grid-rows-1",children:[(0,l.jsx)("input",{className:"col-start-1 row-start-1 w-full self-center rounded-md border-2 border-slate-300 p-3 pr-14 text-2xl shadow focus:shadow-xl",placeholder:"Пошук...",value:w,onChange:e=>{j(e.target.value),g(!1)}}),(0,l.jsx)(c.f,{className:"group col-start-1 row-start-1 m-4 h-6 w-8 self-center justify-self-end",title:"Точне співпадіння",pressed:p,onPressedChange:()=>g(e=>!e),children:(0,l.jsx)(m.u3,{className:"group-data-[state=off]:fill-slate-300 group-data-[state=on]:fill-inherit"})})]}),(0,l.jsxs)("ul",{className:"flex min-h-[11.5rem] flex-col gap-6 text-xl",children:[0===q.length&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.PE,{className:"h-32 w-32 self-center fill-slate-300"}),(0,l.jsx)("div",{className:"self-center text-2xl",children:"За запитом нічого не знайдено"})]}),q.map(e=>(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"group font-semibold uppercase",children:e.name})," — ",e.def.split("|").map((s,t)=>t%2==0?s:(0,l.jsx)(o,{term:e.deflinks[(t-1)/2],children:s},t)),(0,l.jsxs)("div",{className:"mt-0.5 flex h-8 gap-2 text-base",children:[e.notes.map((e,s)=>(0,l.jsx)(v,{def:e.def,deflinks:e.deflinks,children:e.name},s)),(0,l.jsxs)(n.fC,{children:[(0,l.jsx)(n.xz,{className:"h-8 w-8 rounded-lg bg-slate-100 p-1 transition-all data-[state=open]:bg-slate-300","aria-label":"Поширити",children:(0,l.jsx)(a.Z,{className:"h-6 w-6 stroke-[1.1]"})}),(0,l.jsx)(n.h_,{children:(0,l.jsxs)(n.VY,{className:"grid grid-cols-[25rem_3.75rem] grid-rows-[2.25rem_1.5rem] gap-x-2 rounded-lg border-2 border-slate-300 bg-white p-4 text-base",children:[(0,l.jsx)("input",{className:"rounded-md border-2 border-slate-300 p-1",id:"popinp",value:"".concat(N,"?term=").concat(e.slug,"&exact=true"),readOnly:!0}),(0,l.jsx)("button",{className:"row-span-2 h-[3.75rem] w-[3.75rem] rounded-md hover:bg-slate-100 focus:bg-slate-100",onClick:()=>{let e=document.getElementById("popinp"),s=document.getElementById("poptext");navigator.clipboard.writeText(e.value).then(()=>{s.textContent="Посилання скопійовано в буфер обміну",s.classList.add("text-red-500")})},children:(0,l.jsx)(r.Z,{className:"h-[3.75rem] w-[3.75rem] stroke-1"})}),(0,l.jsx)("div",{className:"",id:"poptext",children:"Поширити посилання на це визначення"}),(0,l.jsx)(n.Eh,{className:"fill-slate-300"})]})})]})]})]},e.slug))]})]})}function v(e){let{children:s,def:t,deflinks:a}=e;return(0,l.jsxs)(n.fC,{children:[(0,l.jsx)(n.xz,{className:"whitespace-nowrap rounded-lg bg-slate-100 p-1 px-2 transition-all data-[state=open]:bg-slate-300","aria-label":t,children:s}),(0,l.jsx)(n.h_,{children:(0,l.jsxs)(n.VY,{className:"max-w-[32rem] rounded-lg border-2 border-slate-300 bg-white p-4 text-base",children:[t.split("|").map((e,s)=>s%2==0?e:(0,l.jsx)(o,{term:a[(s-1)/2],children:e},s)),(0,l.jsx)(n.Eh,{className:"fill-slate-300"})]})})]})}},1333:function(e,s,t){"use strict";t.d(s,{PE:function(){return r},fP:function(){return n},u3:function(){return a}});var l=t(3827);function a(e){let{className:s}=e;return(0,l.jsx)("svg",{className:s,version:"1.1",viewBox:"0 0 48 32",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"m26.82.28c-.37 0-.79.14-1.08.43-.29.29-.43.7-.43 1.08v21.31c0 .37.14.79.43 1.08.29.29.7.43 1.08.43h.54c.37 0 .79-.14 1.08-.43.24-.24.32-.58.36-.9.33.27.57.61.95.84l.01.01.01.01c1.02.55 2.26.8 3.67.8 1.35 0 2.54-.24 3.54-.76.95-.5 1.75-1.19 2.36-2.04.59-.82 1.02-1.74 1.3-2.75.27-.98.42-1.97.45-2.97.02-.32.03-.63.03-.92 0-.29-.01-.59-.03-.91v-.01c-.02-1-.17-2-.45-2.98-.28-1-.71-1.92-1.3-2.74-.61-.85-1.4-1.54-2.36-2.04-1-.52-2.19-.76-3.54-.76-1.42 0-2.66.26-3.69.84l0 0 0 0c-.36.2-.57.52-.88.76v-5.86c0-.37-.14-.79-.43-1.08-.29-.29-.7-.43-1.08-.43zm-12.1 5.76c-1.14 0-2.15.16-3.02.51-.82.33-1.51.75-2.07 1.28-.52.47-.93.98-1.22 1.53l-.01.01-.01.01c-.23.5-.39.97-.39 1.46 0 .34.11.69.31.97l.02.03.02.02c.31.37.77.48 1.16.48h.51c.29 0 .62-.09.87-.29.24-.19.4-.46.49-.71l.01-.02c.2-.53.53-.93 1.07-1.27l.01-.01.01 0c.52-.34 1.25-.54 2.25-.54 1.4 0 2.27.31 2.74.77l.01.01.01.01c.53.48.79 1.1.79 2.06v.42l-4.37.61c-1.98.27-3.64.87-4.95 1.85-1.34 1-2.08 2.46-2.08 4.13 0 1.05.33 2.05.96 2.91l0 0 0 .01c.61.81 1.41 1.45 2.36 1.93l0 0 0 0c.99.48 2.06.72 3.2.72 1.17 0 2.17-.13 3.02-.43l.01 0 .01 0c.77-.29 1.42-.64 1.96-1.07.06.27.1.56.3.76.29.29.7.43 1.08.43h.54c.37 0 .79-.14 1.08-.43.29-.29.43-.7.43-1.08v-10.66c0-.72-.11-1.45-.32-2.17-.22-.77-.62-1.47-1.15-2.08-.55-.67-1.3-1.19-2.22-1.57 0 0 0 0 0 0-.95-.4-2.08-.58-3.41-.58zm18.53 3.46c1.14 0 1.94.25 2.49.67.61.46 1.03 1.04 1.3 1.81.29.82.46 1.69.5 2.64.02.58.02 1.15 0 1.73-.04.95-.21 1.82-.5 2.64-.27.76-.7 1.35-1.3 1.81-.55.42-1.35.67-2.49.67-1.09 0-1.87-.25-2.46-.7-.64-.5-1.1-1.09-1.41-1.82-.31-.8-.48-1.58-.52-2.36v-.01l0-.01c-.02-.29-.03-.69-.03-1.19 0-.5.01-.9.03-1.2l0-.02v-.02c.02-.74.19-1.48.51-2.22.33-.71.8-1.29 1.44-1.77.61-.44 1.39-.68 2.44-.68zm-14.98 6.65v.17c0 1.25-.23 2.23-.64 2.97l0 0 0 0c-.4.75-.92 1.27-1.59 1.62-.69.36-1.45.55-2.31.55-.57 0-1.12-.09-1.68-.28-.51-.19-.9-.46-1.22-.81-.27-.29-.4-.64-.4-1.19 0-.6.24-1.03.98-1.5.74-.47 1.96-.87 3.64-1.1l0 0zm-16.27 6.05a1.8 1.8 0 00-1.8 1.8v6a1.8 1.8 0 001.8 1.8h44a1.8 1.8 0 001.8-1.8v-6a1.8 1.8 0 00-1.8-1.8 1.8 1.8 0 00-1.8 1.8v4.2h-40.4v-4.2a1.8 1.8 0 00-1.8-1.8z"})})}function r(e){let{className:s}=e;return(0,l.jsx)("svg",{className:s,version:"1.1",viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"m114.8 45.7h-15.8a2.5 2.5 0 01-2.5-2.5 32.5 32.5 0 00-65 0 2.5 2.5 0 01-2.5 2.5h-15.8a1.7 1.7 0 00-1.7 1.6c0 9.4 11.1 13.1 16 14.3v-5.5a2 2 0 014 0v57c0 1.7 3.7 4.1 9.5 4.1a15.3 15.3 0 007.5-1.7 7.8 7.8 0 018 0 15.3 15.3 0 007.5 1.7 15.3 15.3 0 007.5-1.7 7.8 7.8 0 018 0 15.3 15.3 0 007.5 1.7c5.8 0 9.5-2.5 9.5-4.1v-57a2 2 0 114 0v5.5c4.9-1.2 16-4.9 16-14.3a1.7 1.7 0 00-1.7-1.6zm-68.6-2.7a3.4 3.4 0 113.4 3.4 3.5 3.5 0 01-3.3-3.4zm34.3 19.6a16.5 16.5 0 11-33 0v-1.4h33zm-2.2-16.1a3.4 3.4 0 113.4-3.4 3.5 3.5 0 01-3.4 3.4z"})})}function n(e){let{className:s,innerClassName:t}=e;return(0,l.jsxs)("svg",{version:"1.1",viewBox:"0 0 64 16",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{className:s,d:"m4 0h56c2.22 0 4 1.78 4 4v8c0 2.22-1.78 4-4 4h-56c-2.22 0-4-1.78-4-4v-8c0-2.22 1.78-4 4-4z"}),(0,l.jsx)("path",{className:t,d:"m59.67 7.43h-2.5v4.52h-1.45v-4.52h-1.87v-1.44h1.86v-1.94h1.45v1.95h2.5zm-6.36 0h-3.22q-.29 0-.44.15-.15.14-.15.42v3.95h-1.44v-3.95q0-.37.09-.66.09-.29.25-.51.16-.23.36-.38.2-.16.42-.26.23-.1.45-.14.23-.05.43-.05h3.24zm-6.18.54q0 .3-.1.64-.11.34-.35.64-.23.29-.61.49-.38.2-.92.2h-2.58v-1.36h2.59q.29 0 .45-.18.16-.18.16-.45 0-.28-.18-.44-.18-.16-.43-.16h-2.59q-.29 0-.45.18-.16.18-.16.44v2q0 .29.18.45.18.16.45.16h2.57v1.37h-2.59q-.3 0-.64-.1-.34-.1-.64-.34-.29-.24-.49-.61-.2-.38-.2-.92v-2.01q0-.3.1-.64.1-.35.34-.64.24-.3.61-.5.38-.2.92-.2h2.59q.3 0 .64.1.35.1.64.34.3.23.5.61.2.37.2.92zm-7.54 3.99h-5.17q-.2 0-.43-.04-.23-.05-.45-.15-.22-.1-.42-.25-.2-.16-.36-.38-.15-.23-.25-.52-.09-.3-.09-.67v-3.89q0-.2.04-.42.05-.23.15-.45.1-.23.26-.43.16-.2.38-.36.23-.16.52-.25.29-.09.66-.09h5.17v1.43h-5.17q-.28 0-.43.15-.15.15-.15.44v3.87q0 .28.15.43.15.15.43.15h5.17zm-8.74 0h-1.44v-4.71l-2.54 4.47q-.09.17-.26.26-.17.09-.36.09-.19 0-.35-.09-.16-.09-.25-.26l-2.57-4.47v4.7h-1.43v-7.29q0-.25.14-.44.15-.19.39-.26.12-.03.23-.02.12.01.22.05.11.04.2.12.09.07.15.18l3.26 5.67 3.26-5.67q.13-.21.35-.3.23-.09.47-.03.23.07.38.26.15.19.15.44zm-10.25-6.48h-3.16v6.47h-1.43v-6.47h-3.17v-1.43h7.76zm-8.37 1.87q0 .49-.12.88-.12.39-.33.68-.2.29-.47.5-.27.21-.57.34-.29.13-.6.19-.3.06-.56.06h-3.24v-1.42h3.24q.28-.02.5-.11.23-.09.39-.25.16-.15.25-.37.09-.22.09-.5v-.64q-.04-.27-.13-.5-.09-.23-.24-.39-.15-.16-.36-.24-.22-.1-.5-.1h-3.23q-.29 0-.44.15-.15.15-.15.43v5.89h-1.43v-5.89q0-.55.2-.94.2-.38.5-.62.3-.24.66-.34.35-.11.65-.11h3.24q.49 0 .87.13.39.12.68.33.3.2.5.47.21.27.34.57.14.29.2.6.06.3.06.56z"})]})}}},function(e){e.O(0,[250,941,669,18,464,971,69,744],function(){return e(e.s=6948)}),_N_E=e.O()}]);