(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{1752:function(t,e,n){n(7905)},6812:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Withdraw",function(){return n(5123)}])},9143:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var a=n(5893);function s(t){return(0,a.jsxs)("div",{className:function(){let e=t.bgcolor?" bg-"+t.bgcolor:"",n=t.txtcolor?" text-"+t.txtcolor:" text-white";return"card mb-3"+e+n}(),style:{maxWidth:"18rem"},children:[t.img&&(0,a.jsx)("img",{src:t.img,alt:"Parent transfer"}),(0,a.jsx)("div",{className:"card-header",children:t.header}),(0,a.jsxs)("div",{className:"card-body",children:[t.title&&(0,a.jsx)("h5",{className:"card-title",children:t.title}),t.text&&(0,a.jsx)("p",{className:"card-text",children:t.text}),t.body,t.status&&(0,a.jsx)("div",{id:"createStatus",children:t.status})]})]})}},5702:function(t,e,n){"use strict";n.d(e,{h:function(){return l}}),n(1752),n(1163);let a={get:s("GET"),post:s("POST"),put:s("PUT"),delete:s("DELETE")};function s(t){return async(e,n)=>{let a={method:t,headers:function(t){let e=JSON.parse(localStorage.getItem("user")),n=null==e?void 0:e.token;return n?{Authorization:"Bearer ".concat(e.token)}:{}}(0)};return n&&(a.headers["Content-Type"]="application/json",a.body=JSON.stringify(n)),fetch(e,a).then(r)}}async function r(t){var e,n;let a=null===(n=t.headers)||void 0===n?void 0:null===(e=n.get("content-type"))||void 0===e?void 0:e.includes("application/json");console.log("response :",t);let s=a?await t.json():null;console.log("data :",s);let r=JSON.parse(localStorage.getItem("user"));if(!t.ok){[401,403].includes(t.status)&&(null==r?void 0:r.token)&&l.logout();let e=s&&s.message||t.statusText;return Promise.reject(e)}return s}let o="/api",l={login:i,getCurrentUser:c,logout:function(){localStorage.removeItem("user")},register:u,updateBalance:d,getAll:h,getBankAccounts:m,createBankAccount:g};async function c(){return await JSON.parse(localStorage.getItem("user"))}async function i(t){let{email:e,password:n}=t,s=await a.post("".concat(o,"/account/login"),{email:e,password:n});return localStorage.setItem("user",JSON.stringify(s)),s}async function u(t){await a.post("".concat(o,"/account/register"),t)}async function d(t){let{email:e,amount:n}=t;return await a.post("".concat(o,"/updateBalance"),{email:e,amount:parseFloat(n)})}async function h(){return await a.get("".concat(o,"/account/all"))}async function m(t){let{email:e}=t;return await a.post("".concat(o,"/bankAccounts/get"),{email:e})}async function g(t){let{email:e,accountName:n}=t;return await a.post("".concat(o,"/bankAccounts/createAccount"),{email:e,accountName:n})}},5123:function(t,e,n){"use strict";n.r(e);var a=n(5893),s=n(7294),r=n(9143),o=n(5702),l=n(390),c=n(1664),i=n.n(c);let u=t=>{let{message:e,setStatus:n}=t;n(e),setTimeout(()=>n(""),2e3)},d=t=>{let[e,n]=s.useState(!1),{currentUser:r,setCurrentUser:c}=(0,l.Z)(),[i,d]=s.useState(null);async function h(a){var s;if(!e){if(n(!0),a.preventDefault(),parseFloat(i)>(null==r?void 0:r.balance)){u({message:"transaction failed : Balance is too low",setStatus:t.setErrorMessage});return}if(i<1){u({message:"Number must be upper than 0",setStatus:t.setErrorMessage});return}await (null===(s=o.h)||void 0===s?void 0:s.updateBalance({email:r.email,amount:-1*parseFloat(i)}).then(e=>{console.log("resultat withdraw :",e),u({message:"$".concat(i," withdraw successful!"),setStatus:t.setStatus}),c({...e,token:r.token}),setTimeout(()=>null==t?void 0:t.setStatus(""),2e3),d(null)}).catch(t=>console.error("WITHDRAW ERROR - ",t)).finally(()=>n(!1)))}}return(0,a.jsxs)("form",{onSubmit:h,children:[(0,a.jsxs)("label",{children:["Enter amount to withdraw :",(0,a.jsx)("input",{type:"number",name:"number",className:"form-control",required:!0,value:i||"",onChange:t=>d(t.currentTarget.value)})]}),(0,a.jsx)("input",{disabled:!((null==i?void 0:i.length)>0||e),className:"btn btn-light my-3",type:"submit"}),e&&(0,a.jsx)("div",{className:"d-flex justify-content-center",children:(0,a.jsx)("div",{className:"spinner-border",role:"status",children:(0,a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})]})};e.default=function(){let{currentUser:t,setCurrentUser:e}=(0,l.Z)(),[n,o]=s.useState(!0),[c,u]=s.useState(""),[h,m]=(0,s.useState)(0);return(0,a.jsx)(r.Z,{bgcolor:"warning",header:"Withdraw",text:"",status:n,body:(0,a.jsx)(a.Fragment,{children:t?(0,a.jsxs)("div",{children:[(0,a.jsxs)("h5",{className:"text-dark ",children:["Balance :",(0,a.jsxs)("span",{className:"font-weight-bold",children:[" ",null==t?void 0:t.balance,"$"]})]}),(0,a.jsx)(d,{setStatus:o,setErrorMessage:u}),(0,a.jsx)("span",{className:"text-danger",children:c||""})]}):(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{children:"You need to login first"}),(0,a.jsx)(i(),{href:"/Login",className:"btn btn-light",children:"Login"})]})})})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=6812)}),_N_E=t.O()}]);