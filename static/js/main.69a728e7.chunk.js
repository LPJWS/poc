(this.webpackJsonppoc=this.webpackJsonppoc||[]).push([[0],{118:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),o=c(22),r=c.n(o),s=c(20),a=c.n(s),l=c(27),j=c.n(l),d=c(31),h=c(13),u=c(3),b=(c(116),c(119)),x=c(121),O=c(122),f=c(120),m=c(123),p=c(1),g=function(e){var t=e.id,c=e.go,o=e.fetchedUser,r=Object(n.useState)(null),s=Object(h.a)(r,2),a=s[0],l=s[1],j=Object(n.useState)(null),d=Object(h.a)(j,2),g=d[0],v=d[1],w=Object(n.useState)(!1),k=Object(h.a)(w,2),y=(k[0],k[1],Object(n.useState)("")),T=Object(h.a)(y,2),z=T[0],C=T[1];function S(){l(Object(p.jsx)(u.t,{}));var e=window.location.search.slice(1);fetch("https://pieceofchit.xyz/api/v1/member/me/?"+e).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){l(null),v(e)}))}return Object(n.useEffect)((function(){S()}),[]),Object(p.jsx)(u.w,{activePanel:t,popout:a,children:o&&Object(p.jsxs)(u.p,{id:t,children:[Object(p.jsx)(u.q,{children:"\u041f\u043e\u0434\u0435\u043b\u0438\u043c?"}),g&&Object(p.jsx)(u.k,{children:Object(p.jsxs)(u.j,{style:{margin:"-7px -7px 0 -7px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:32},children:[g.photo?Object(p.jsx)(u.c,{size:96,src:g.photo}):null,Object(p.jsx)(u.v,{style:{marginBottom:8,marginTop:20},level:"2",weight:"medium",children:g.name})]})}),g&&Object(p.jsxs)(u.k,{header:Object(p.jsx)(u.l,{children:"\u0421\u0447\u0435\u0442\u0430"}),children:[g.checks.length?g.checks.map((function(e,t){return Object(p.jsx)(u.s,{multiline:!0,text:e.total_amount+" \u20bd",after:Object(p.jsx)(b.a,{}),onClick:c,"data-to":"check","data-check":e.id,children:Object(p.jsx)(u.v,{level:"2",weight:"regular",children:e.title})},e.id)})):Object(p.jsxs)(u.f,{style:{alignItems:"center",display:"flex",flexDirection:"column"},children:[Object(p.jsx)(u.v,{level:"2",weight:"regular",children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0441\u0447\u0435\u0442\u043e\u0432"}),Object(p.jsx)(f.a,{style:{marginTop:".5rem"}})]}),Object(p.jsx)(u.i,{mode:"horizontal",children:Object(p.jsx)(u.g,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",children:Object(p.jsx)(u.m,{type:"text",name:"title",value:z,onChange:function(e){C(e.target.value)},align:"center"})})}),Object(p.jsx)(u.f,{children:z?Object(p.jsx)(u.d,{stretched:!0,size:"l",mode:"outline",onClick:function(){!function(){var e=window.location.search.slice(1);fetch("https://pieceofchit.xyz/api/v1/check/new/?"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:z})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){C(""),S()}))}()},children:Object(p.jsx)(x.a,{})}):Object(p.jsx)(u.d,{stretched:!0,size:"l",mode:"outline",disabled:!0,children:Object(p.jsx)(x.a,{})})})]}),g&&Object(p.jsx)(u.k,{header:Object(p.jsxs)(u.l,{children:["\u0414\u043e\u043b\u0433\u0438 ",Object(p.jsx)(u.d,{size:"s",mode:"outline",onClick:function(){return S()},children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})]}),children:g.debts.length?g.debts.map((function(e,t){return e.is_sended?Object(p.jsx)(u.s,{disabled:!0,multiline:!0,text:e.check_obj.title,before:Object(p.jsx)(u.c,{size:72,src:e.to_member.photo}),after:e.amount+" \u20bd",caption:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435",children:Object(p.jsx)(u.v,{level:"2",weight:"regular",children:e.to_member.name})},e.id):Object(p.jsx)(u.s,{disabled:!0,multiline:!0,text:e.check_obj.title,before:Object(p.jsx)(u.c,{size:72,src:e.to_member.photo}),after:e.amount+" \u20bd",actions:Object(p.jsx)(i.a.Fragment,{children:Object(p.jsxs)(u.d,{children:["\u042f \u043f\u0435\u0440\u0435\u0432\u0435\u043b ",1==+o.sex?"\u0430":""]})}),children:Object(p.jsx)(u.v,{level:"2",weight:"regular",children:e.to_member.name})},e.id)})):Object(p.jsxs)(u.f,{style:{alignItems:"center",display:"flex",flexDirection:"column"},children:[Object(p.jsx)(u.v,{level:"2",weight:"regular",children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0434\u043e\u043b\u0433\u043e\u0432"}),Object(p.jsx)(O.a,{style:{marginTop:".5rem"}})]})}),g&&Object(p.jsx)(u.k,{header:Object(p.jsxs)(u.l,{children:["\u0414\u043e\u043b\u0436\u043d\u0438\u043a\u0438 ",Object(p.jsx)(u.d,{size:"s",mode:"outline",onClick:function(){return S()},children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})]}),children:g.debtors.length?g.debtors.map((function(e,t){return e.is_sended?Object(p.jsx)(u.s,{disabled:!0,multiline:!0,text:e.check_obj.title,before:Object(p.jsx)(u.c,{size:72,src:e.from_member.photo}),after:e.amount+" \u20bd",actions:Object(p.jsx)(i.a.Fragment,{children:Object(p.jsx)(u.d,{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0434"})}),children:Object(p.jsx)(u.v,{level:"2",weight:"regular",children:e.from_member.name})},e.id):Object(p.jsx)(u.s,{disabled:!0,multiline:!0,text:e.check_obj.title,before:Object(p.jsx)(u.c,{size:72,src:e.from_member.photo}),after:e.amount+" \u20bd",caption:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434",children:Object(p.jsx)(u.v,{level:"2",weight:"regular",children:e.from_member.name})},e.id)})):Object(p.jsxs)(u.f,{style:{alignItems:"center",display:"flex",flexDirection:"column"},children:[Object(p.jsx)(u.v,{level:"2",weight:"regular",children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0434\u043e\u043b\u0436\u043d\u0438\u043a\u043e\u0432"}),Object(p.jsx)(m.a,{style:{marginTop:".5rem"}})]})})]})})},v=function(e){var t=Object(n.useState)(null),c=Object(h.a)(t,2),i=c[0],o=c[1],r=Object(n.useState)(""),s=Object(h.a)(r,2),a=s[0],l=s[1],j=Object(n.useState)(""),d=Object(h.a)(j,2),b=d[0],x=d[1],O=Object(n.useState)(0),f=Object(h.a)(O,2),m=f[0],g=f[1],v=Object(n.useState)(null),w=Object(h.a)(v,2),k=(w[0],w[1]);return Object(n.useEffect)((function(){!function(){o(Object(p.jsx)(u.t,{}));var e=window.location.search.slice(1);fetch("https://pieceofchit.xyz/api/v1/member/me/?"+e).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){o(null),k(e)}))}()}),[]),Object(p.jsx)(u.w,{activePanel:e.id,popout:i,children:Object(p.jsxs)(u.p,{id:e.id,children:[Object(p.jsx)(u.q,{left:Object(p.jsx)(u.r,{onClick:e.go,"data-to":"check","data-check":e.check}),children:"\u041d\u043e\u0432\u0430\u044f \u0442\u0440\u0430\u0442\u0430"}),Object(p.jsx)(u.k,{children:Object(p.jsxs)(u.h,{children:[Object(p.jsx)(u.g,{top:"\u041d\u0430 \u0447\u0442\u043e?",children:Object(p.jsx)(u.m,{type:"text",name:"object",value:a,onChange:function(e){l(e.target.value)}})}),Object(p.jsx)(u.g,{top:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",children:Object(p.jsx)(u.m,{type:"text",name:"desc",value:b,onChange:function(e){x(e.target.value)}})}),Object(p.jsx)(u.g,{top:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e?",children:Object(p.jsx)(u.m,{type:"number",name:"amount",value:m,onChange:function(e){g(e.target.value)}})}),Object(p.jsx)(u.f,{children:a&&m?Object(p.jsx)(u.d,{size:"l",mode:"outline",stretched:!0,onClick:e.go,"data-to":"check","data-newobject":a,"data-newdesc":b,"data-newamount":m,"data-check":e.check,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}):Object(p.jsx)(u.d,{size:"l",mode:"outline",stretched:!0,disabled:!0,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})})]})})]})})},w=c(125),k=c(126),y=c(124),T=c(127),z=function(e){var t=Object(n.useState)(null),c=Object(h.a)(t,2),o=c[0],r=c[1],s=Object(n.useState)(null),l=Object(h.a)(s,2),j=l[0],d=l[1],b=Object(n.useState)(null),O=Object(h.a)(b,2),m=O[0],g=O[1],v=Object(n.useState)(!1),z=Object(h.a)(v,2),C=(z[0],z[1],Object(n.useState)(null)),S=Object(h.a)(C,2),_=S[0],E=S[1],I=Object(n.useState)(null),P=Object(h.a)(I,2),A=P[0],J=P[1];function D(){r(Object(p.jsx)(u.t,{}));var e=window.location.search.slice(1);fetch("https://pieceofchit.xyz/api/v1/member/me/?"+e).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){r(null),d(e)}))}function N(){r(Object(p.jsx)(u.t,{}));var t=window.location.search.slice(1);fetch("https://pieceofchit.xyz/api/v1/check/get/"+e.check+"/?"+t).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){r(null),g(e)}))}var U=Object(p.jsxs)(u.o,{activeModal:_,children:[Object(p.jsx)(u.n,{id:"close",onClose:function(){return E(null)},icon:Object(p.jsx)(y.a,{}),header:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0441\u0447\u0435\u0442?",subheader:"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u043b\u044c\u0437\u044f \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044b, \u0430 \u0432\u0441\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0441\u0447\u0435\u0442\u0430 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u044b \u0441\u0443\u043c\u043c\u044b \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u043e\u0432",actions:Object(p.jsx)(u.d,{size:"l",mode:"primary",onClick:e.go,"data-to":"home","data-checkclose":m?m.id:null,children:"\u0414\u0430, \u0437\u0430\u043a\u0440\u044b\u0442\u044c"})}),Object(p.jsx)(u.n,{id:"leave",onClose:function(){return E(null)},icon:Object(p.jsx)(y.a,{}),header:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043a\u0438\u043d\u0443\u0442\u044c \u0441\u0447\u0435\u0442?",actions:Object(p.jsx)(u.d,{size:"l",mode:"primary",onClick:e.go,"data-to":"home","data-checkleave":m?m.id:null,children:"\u0414\u0430, \u043f\u043e\u043a\u0438\u043d\u0443\u0442\u044c"})})]});return Object(n.useEffect)((function(){D(),N()}),[]),Object(p.jsx)(u.w,{activePanel:e.id,popout:o,modal:U,children:m&&j&&Object(p.jsxs)(u.p,{id:e.id,children:[Object(p.jsx)(u.q,{left:Object(p.jsx)(u.r,{onClick:e.go,"data-to":"home"}),children:m.title}),Object(p.jsx)(u.k,{children:Object(p.jsxs)(u.j,{style:{margin:"-7px -7px 0 -7px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:32},children:[Object(p.jsx)(u.v,{level:"1",weight:"heavy",style:{marginBottom:16},children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0441\u0447\u0435\u0442\u0430"}),Object(p.jsxs)(u.v,{level:"1",weight:"heavy",style:{marginBottom:16},children:[m.total_amount," \u20bd"]}),Object(p.jsx)(u.d,{size:"m",mode:"outline",onClick:function(){D(),N()},children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"})]})}),Object(p.jsxs)(u.k,{header:Object(p.jsx)(u.l,{indicator:m.members.length,children:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"}),children:[m.members.length?m.members.map((function(e,t){return Object(p.jsx)(u.e,{disabled:!0,before:Object(p.jsx)(u.c,{size:44,src:e.photo}),badge:e.id===m.organizer.id?Object(p.jsx)(w.a,{}):"",children:e.name},e.id)})):Object(p.jsxs)(u.f,{style:{alignItems:"center",display:"flex",flexDirection:"column"},children:[Object(p.jsx)(u.v,{level:"2",weight:"regular",children:"\u041d\u0435\u0442 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432 ?! \u0414\u0430 \u043a\u0430\u043a \u0442\u0430\u043a\u043e\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e?!"}),Object(p.jsx)(f.a,{style:{marginTop:".5rem"}})]}),Object(p.jsxs)(u.f,{style:{display:"flex"},children:[Object(p.jsx)(u.d,{stretched:!0,size:"l",mode:"outline",before:Object(p.jsx)(k.a,{}),onClick:function(){a.a.send("VKWebAppCopyText",{text:"https://vk.com/app7987402#"+m.id}),J(Object(p.jsx)(u.u,{onClose:function(){return J(null)},children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430"}))},style:{marginRight:".5rem"},children:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443"}),Object(p.jsx)(u.d,{stretched:!0,size:"l",mode:"outline",before:Object(p.jsx)(T.a,{}),onClick:function(){a.a.send("VKWebAppShare",{link:"https://vk.com/app7987402#"+m.id})},children:"\u041f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c"})]})]}),Object(p.jsxs)(u.k,{header:Object(p.jsx)(u.l,{indicator:m.records.length,children:"\u0417\u0430\u0442\u0440\u0430\u0442\u044b"}),children:[m.records.length?m.records.map((function(e,t){return e.member.id==j.id||j.id==m.organizer.id?Object(p.jsx)(u.s,{disabled:!0,multiline:!0,text:e.object,before:Object(p.jsx)(u.c,{size:72,src:e.member.photo}),after:e.amount+" \u20bd",indicator:e.amount+" \u20bd",caption:e.desc,actions:Object(p.jsx)(i.a.Fragment,{children:Object(p.jsx)(u.d,{mode:"destructive",onClick:function(){return function(e){var t=window.location.search.slice(1);fetch("https://pieceofchit.xyz/api/v1/record/delete/?"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){N()}))}(e.id)},children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"})}),children:Object(p.jsx)(u.v,{level:"2",weight:"regular",children:e.member.name})},e.id):Object(p.jsx)(u.s,{disabled:!0,multiline:!0,text:e.object,before:Object(p.jsx)(u.c,{size:72,src:e.member.photo}),after:e.amount+" \u20bd",indicator:e.amount+" \u20bd",caption:e.desc,children:Object(p.jsx)(u.v,{level:"2",weight:"regular",children:e.member.name})},e.id)})):Object(p.jsxs)(u.f,{style:{alignItems:"center",display:"flex",flexDirection:"column"},children:[Object(p.jsx)(u.v,{level:"2",weight:"regular",children:"\u0422\u0440\u0430\u0442 \u0435\u0449\u0435 \u043d\u0435\u0442"}),Object(p.jsx)(f.a,{style:{marginTop:".5rem"}})]}),Object(p.jsx)(u.f,{children:Object(p.jsx)(u.d,{stretched:!0,size:"l",mode:"outline",onClick:e.go,"data-to":"create","data-check":m.id,children:Object(p.jsx)(x.a,{})})})]}),j.id===m.organizer.id&&Object(p.jsx)(u.f,{children:Object(p.jsx)(u.d,{stretched:!0,size:"l",mode:"outline",onClick:function(){E("close")},children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044c \u0434\u043b\u044f \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0441\u0447\u0435\u0442\u0430 \u0438 \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"})}),j.id!==m.organizer.id&&Object(p.jsx)(u.f,{children:Object(p.jsx)(u.d,{stretched:!0,size:"l",mode:"destructive",onClick:function(){E("leave")},children:"\u0412\u044b\u0439\u0442\u0438"})}),A]})})},C=function(){var e=Object(n.useState)("home"),t=Object(h.a)(e,2),c=t[0],i=t[1],o=Object(n.useState)(null),r=Object(h.a)(o,2),s=r[0],l=r[1],b=Object(n.useState)(Object(p.jsx)(u.t,{size:"large"})),x=Object(h.a)(b,2),O=x[0],f=x[1],m=Object(n.useState)(null),w=Object(h.a)(m,2),k=w[0],y=w[1],T=window.location.hash.replace("#","");if(T){var C=window.location.search.slice(1);fetch("https://pieceofchit.xyz/api/v1/check/join/?"+C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:T})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){y(e.id),i("check")})),window.location.hash=""}Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,l(t),f(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var i=document.createAttribute("scheme");i.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(i)}})),function(){e.apply(this,arguments)}()}),[]);var S=function(e){e.currentTarget.dataset.checkclose?function(e){var t=window.location.search.slice(1);fetch("https://pieceofchit.xyz/api/v1/check/close/?"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){}))}(e.currentTarget.dataset.checkclose):e.currentTarget.dataset.checkleave?function(e){var t=window.location.search.slice(1);fetch("https://pieceofchit.xyz/api/v1/check/leave/?"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){}))}(e.currentTarget.dataset.checkleave):e.currentTarget.dataset.newobject&&function(e,t,c,n){var i=window.location.search.slice(1);fetch("https://pieceofchit.xyz/api/v1/record/new/?"+i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({check_obj:e,object:t,desc:c,amount:n})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){}))}(e.currentTarget.dataset.check,e.currentTarget.dataset.newobject,e.currentTarget.dataset.newdesc,e.currentTarget.dataset.newamount),e.currentTarget.dataset.check&&y(e.currentTarget.dataset.check),i(e.currentTarget.dataset.to)};return Object(p.jsx)(u.a,{children:Object(p.jsx)(u.b,{children:Object(p.jsxs)(u.w,{activePanel:c,popout:O,children:[Object(p.jsx)(g,{id:"home",fetchedUser:s,go:S}),Object(p.jsx)(z,{id:"check",fetchedUser:s,go:S,check:k}),Object(p.jsx)(v,{id:"create",fetchedUser:s,go:S,check:k})]})})})};a.a.send("VKWebAppInit"),r.a.render(Object(p.jsx)(C,{}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.69a728e7.chunk.js.map