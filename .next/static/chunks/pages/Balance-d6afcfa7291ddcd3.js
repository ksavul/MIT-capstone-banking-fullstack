(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{9825:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Balance",function(){return n(519)}])},9143:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var c=n(5893);function a(t){return(0,c.jsxs)("div",{className:function(){let e=t.bgcolor?" bg-"+t.bgcolor:"",n=t.txtcolor?" text-"+t.txtcolor:" text-white";return"card mb-3"+e+n}(),style:{maxWidth:"18rem"},children:[t.img&&(0,c.jsx)("img",{src:t.img,alt:"Parent transfer"}),(0,c.jsx)("div",{className:"card-header",children:t.header}),(0,c.jsxs)("div",{className:"card-body",children:[t.title&&(0,c.jsx)("h5",{className:"card-title",children:t.title}),t.text&&(0,c.jsx)("p",{className:"card-text",children:t.text}),t.body,t.status&&(0,c.jsx)("div",{id:"createStatus",children:t.status})]})]})}},519:function(t,e,n){"use strict";n.r(e);var c=n(5893),a=n(7294),s=n(9143),r=n(390);e.default=function(){let{currentUser:t,setCurrentUser:e}=(0,r.Z)(),[n,i]=a.useState(""),[l,o]=a.useState(!0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{style:{backgroundColor:"red",height:500},children:(0,c.jsx)("h1",{children:"Balance"})}),(0,c.jsx)(s.Z,{bgcolor:"info",header:"Balance",text:n,status:l,body:(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("button",{type:"submit",className:"btn btn-light",onClick:function(){t?fetch("/account/balance/".concat(null==t?void 0:t.email)).then(t=>t.json()).then(t=>{console.log(t),i("$"+t[0].balance)}):(o("Login to see account balance"),setTimeout(()=>o(""),3e3))},children:"See Balance"})})})]})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=9825)}),_N_E=t.O()}]);