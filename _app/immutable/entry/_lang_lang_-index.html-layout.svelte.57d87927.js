import{S as pe,i as $e,s as Ee,k as o,q as U,l as i,m as c,r as C,h as n,n as v,b as se,G as t,H as ie,o as Ke,J as Oe,w as Ye,a as A,c as N,u as Le,p as ee,K as Qe,L as Te,g as Q,v as Xe,d as x,f as Ze,y as ve,z as he,A as me,M as xe,N as ze,B as ge,C as et,D as tt,E as lt,F as at}from"../chunks/index.3a8ffb59.js";function st(d){let e,s;return{c(){e=o("div"),s=U(" "),this.h()},l(a){e=i(a,"DIV",{"aria-hidden":!0,class:!0});var r=c(e);s=C(r," "),r.forEach(n),this.h()},h(){v(e,"aria-hidden","true"),v(e,"class","svelte-193nvbr")},m(a,r){se(a,e,r),t(e,s),d[1](e)},p:ie,i:ie,o:ie,d(a){a&&n(e),d[1](null)}}}function nt(d,e,s){let a;function r(f){console.log(f);let _=window.scrollY/(document.body.offsetHeight-window.innerHeight);console.log(_),a.style.setProperty("--afteropacity",_+""),a.style.setProperty("--beforeopacity",1-_+"")}Ke(()=>{console.log("mount",window.addEventListener("scroll",r))}),Oe(()=>console.log("unmount",window.removeEventListener("scroll",r)));function l(f){Ye[f?"unshift":"push"](()=>{a=f,s(0,a)})}return[a,l]}class rt extends pe{constructor(e){super(),$e(this,e,nt,st,Ee,{})}}function ot(d){const e=d-1;return e*e*e+1}function Re(d,{delay:e=0,duration:s=400,easing:a=ot,axis:r="y"}={}){const l=getComputedStyle(d),f=+l.opacity,_=r==="y"?"height":"width",L=parseFloat(l[_]),$=r==="y"?["top","bottom"]:["left","right"],E=$.map(m=>`${m[0].toUpperCase()}${m.slice(1)}`),b=parseFloat(l[`padding${E[0]}`]),y=parseFloat(l[`padding${E[1]}`]),p=parseFloat(l[`margin${E[0]}`]),u=parseFloat(l[`margin${E[1]}`]),h=parseFloat(l[`border${E[0]}Width`]),w=parseFloat(l[`border${E[1]}Width`]);return{delay:e,duration:s,easing:a,css:m=>`overflow: hidden;opacity: ${Math.min(m*20,1)*f};${_}: ${m*L}px;padding-${$[0]}: ${m*b}px;padding-${$[1]}: ${m*y}px;margin-${$[0]}: ${m*p}px;margin-${$[1]}: ${m*u}px;border-${$[0]}-width: ${m*h}px;border-${$[1]}-width: ${m*w}px;`}}const it={menutexts:{intro:"Einleitung:",education:"Ausbildung:",projects:"Projekte:"}},ct={menutexts:{intro:"Introduction:",education:"Education:",projects:"Projects:"}};function ut(d){var ke,Ie,Ae;let e,s,a,r,l,f,_,L=((ke=d[1])==null?void 0:ke.intro)+"",$,E,b,y,p,u,h,w,m,H,j,S,V,G=((Ie=d[1])==null?void 0:Ie.education)+"",M,T,z,g,k,I,te,R,le,ae,F,W,J,K=((Ae=d[1])==null?void 0:Ae.projects)+"",X,O,Y,P,ne,ye,we,re,be;return{c(){e=o("aside"),s=o("nav"),a=o("ul"),r=A(),l=o("ul"),f=o("li"),_=o("b"),$=U(L),E=A(),b=o("li"),y=o("ul"),p=o("li"),u=U("menu 1"),h=A(),w=o("li"),m=U("menu 2"),H=A(),j=o("ul"),S=o("li"),V=o("b"),M=U(G),T=A(),z=o("li"),g=o("ul"),k=o("li"),I=U("menu 1"),te=A(),R=o("li"),le=U("menu 2"),ae=A(),F=o("ul"),W=o("li"),J=o("b"),X=U(K),O=A(),Y=o("li"),P=o("ul"),ne=o("li"),ye=U("menu 1"),we=A(),re=o("li"),be=U("menu 2"),this.h()},l(B){e=i(B,"ASIDE",{class:!0});var q=c(e);s=i(q,"NAV",{});var D=c(s);a=i(D,"UL",{class:!0}),c(a).forEach(n),r=N(D),l=i(D,"UL",{class:!0});var Z=c(l);f=i(Z,"LI",{});var oe=c(f);_=i(oe,"B",{});var Ne=c(_);$=C(Ne,L),Ne.forEach(n),oe.forEach(n),E=N(Z),b=i(Z,"LI",{});var Ue=c(b);y=i(Ue,"UL",{class:!0});var ce=c(y);p=i(ce,"LI",{});var Ce=c(p);u=C(Ce,"menu 1"),Ce.forEach(n),h=N(ce),w=i(ce,"LI",{});var Se=c(w);m=C(Se,"menu 2"),Se.forEach(n),ce.forEach(n),Ue.forEach(n),Z.forEach(n),H=N(D),j=i(D,"UL",{class:!0});var ue=c(j);S=i(ue,"LI",{});var je=c(S);V=i(je,"B",{});var Fe=c(V);M=C(Fe,G),Fe.forEach(n),je.forEach(n),T=N(ue),z=i(ue,"LI",{});var Pe=c(z);g=i(Pe,"UL",{class:!0});var de=c(g);k=i(de,"LI",{});var De=c(k);I=C(De,"menu 1"),De.forEach(n),te=N(de),R=i(de,"LI",{});var He=c(R);le=C(He,"menu 2"),He.forEach(n),de.forEach(n),Pe.forEach(n),ue.forEach(n),ae=N(D),F=i(D,"UL",{class:!0});var fe=c(F);W=i(fe,"LI",{});var Me=c(W);J=i(Me,"B",{});var Be=c(J);X=C(Be,K),Be.forEach(n),Me.forEach(n),O=N(fe),Y=i(fe,"LI",{});var Ve=c(Y);P=i(Ve,"UL",{class:!0});var _e=c(P);ne=i(_e,"LI",{});var Ge=c(ne);ye=C(Ge,"menu 1"),Ge.forEach(n),we=N(_e),re=i(_e,"LI",{});var qe=c(re);be=C(qe,"menu 2"),qe.forEach(n),_e.forEach(n),Ve.forEach(n),fe.forEach(n),D.forEach(n),q.forEach(n),this.h()},h(){v(a,"class","svelte-7mgov8"),v(y,"class","svelte-7mgov8"),v(l,"class","svelte-7mgov8"),v(g,"class","svelte-7mgov8"),v(j,"class","svelte-7mgov8"),v(P,"class","svelte-7mgov8"),v(F,"class","svelte-7mgov8"),v(e,"class",d[0])},m(B,q){se(B,e,q),t(e,s),t(s,a),t(s,r),t(s,l),t(l,f),t(f,_),t(_,$),t(l,E),t(l,b),t(b,y),t(y,p),t(p,u),t(y,h),t(y,w),t(w,m),t(s,H),t(s,j),t(j,S),t(S,V),t(V,M),t(j,T),t(j,z),t(z,g),t(g,k),t(k,I),t(g,te),t(g,R),t(R,le),t(s,ae),t(s,F),t(F,W),t(W,J),t(J,X),t(F,O),t(F,Y),t(Y,P),t(P,ne),t(ne,ye),t(P,we),t(P,re),t(re,be)},p(B,[q]){var D,Z,oe;q&2&&L!==(L=((D=B[1])==null?void 0:D.intro)+"")&&Le($,L),q&2&&G!==(G=((Z=B[1])==null?void 0:Z.education)+"")&&Le(M,G),q&2&&K!==(K=((oe=B[1])==null?void 0:oe.projects)+"")&&Le(X,K),q&1&&v(e,"class",B[0])},i:ie,o:ie,d(B){B&&n(e)}}}function dt(d,e,s){let a,{cssClass:r="appcontainer"}=e,{lang:l="de"}=e;const f=new Map([["de",it.menutexts],["en",ct.menutexts]]);return d.$$set=_=>{"cssClass"in _&&s(0,r=_.cssClass),"lang"in _&&s(2,l=_.lang)},d.$$.update=()=>{d.$$.dirty&4&&s(1,a=f.get(l)||f.get("de")),d.$$.dirty&6&&console.log("texts changed",l,a)},[r,a,l]}class Je extends pe{constructor(e){super(),$e(this,e,dt,ut,Ee,{cssClass:0,lang:2})}}function We(d){let e,s,a,r;return s=new Je({props:{cssClass:"",lang:d[0]}}),{c(){e=o("div"),ve(s.$$.fragment),this.h()},l(l){e=i(l,"DIV",{style:!0,class:!0});var f=c(e);he(s.$$.fragment,f),f.forEach(n),this.h()},h(){ee(e,"grid-area","fnav"),v(e,"class","floatingnav svelte-w27lku")},m(l,f){se(l,e,f),me(s,e,null),r=!0},p(l,f){const _={};f&1&&(_.lang=l[0]),s.$set(_)},i(l){r||(Q(s.$$.fragment,l),xe(()=>{r&&(a||(a=ze(e,Re,{},!0)),a.run(1))}),r=!0)},o(l){x(s.$$.fragment,l),a||(a=ze(e,Re,{},!1)),a.run(0),r=!1},d(l){l&&n(e),ge(s),l&&a&&a.end()}}}function ft(d){let e,s,a,r,l,f,_,L,$,E,b,y,p,u,h,w,m,H,j,S,V,G,M,T,z,g=d[1]&&We(d);return{c(){e=o("nav"),s=o("ul"),a=o("li"),r=o("h4"),l=o("a"),f=U("Rocco Goßmann"),L=A(),$=o("ul"),E=o("li"),b=o("h4"),y=o("a"),p=o("span"),u=A(),h=o("ul"),w=o("li"),m=o("a"),H=U("DE"),j=U(` /
      `),S=o("a"),V=U("EN"),G=A(),g&&g.c(),this.h()},l(k){e=i(k,"NAV",{class:!0});var I=c(e);s=i(I,"UL",{style:!0,class:!0});var te=c(s);a=i(te,"LI",{class:!0});var R=c(a);r=i(R,"H4",{class:!0});var le=c(r);l=i(le,"A",{href:!0,class:!0});var ae=c(l);f=C(ae,"Rocco Goßmann"),ae.forEach(n),le.forEach(n),R.forEach(n),te.forEach(n),L=N(I),$=i(I,"UL",{style:!0,class:!0});var F=c($);E=i(F,"LI",{class:!0});var W=c(E);b=i(W,"H4",{class:!0});var J=c(b);y=i(J,"A",{href:!0,class:!0});var K=c(y);p=i(K,"SPAN",{class:!0}),c(p).forEach(n),K.forEach(n),J.forEach(n),W.forEach(n),F.forEach(n),u=N(I),h=i(I,"UL",{style:!0,class:!0});var X=c(h);w=i(X,"LI",{class:!0});var O=c(w);m=i(O,"A",{href:!0,class:!0});var Y=c(m);H=C(Y,"DE"),Y.forEach(n),j=C(O,` /
      `),S=i(O,"A",{href:!0,class:!0});var P=c(S);V=C(P,"EN"),P.forEach(n),O.forEach(n),X.forEach(n),G=N(I),g&&g.l(I),I.forEach(n),this.h()},h(){v(l,"href",_=`/${d[0]}/index.html`),v(l,"class","svelte-w27lku"),v(r,"class","svelte-w27lku"),v(a,"class","svelte-w27lku"),ee(s,"grid-area","line"),v(s,"class","line svelte-w27lku"),v(p,"class","fa fa-bars svelte-w27lku"),v(y,"href","#"),v(y,"class","svelte-w27lku"),v(b,"class","svelte-w27lku"),v(E,"class","svelte-w27lku"),ee($,"grid-area","menu"),v($,"class","menutoggle svelte-w27lku"),v(m,"href","/de"),v(m,"class","svelte-w27lku"),v(S,"href","/en"),v(S,"class","svelte-w27lku"),v(w,"class","svelte-w27lku"),ee(h,"grid-area","lang"),v(h,"class","svelte-w27lku"),v(e,"class","appcontainer svelte-w27lku")},m(k,I){se(k,e,I),t(e,s),t(s,a),t(a,r),t(r,l),t(l,f),t(e,L),t(e,$),t($,E),t(E,b),t(b,y),t(y,p),t(e,u),t(e,h),t(h,w),t(w,m),t(m,H),t(w,j),t(w,S),t(S,V),t(e,G),g&&g.m(e,null),M=!0,T||(z=Qe(y,"click",Te(d[2])),T=!0)},p(k,[I]){(!M||I&1&&_!==(_=`/${k[0]}/index.html`))&&v(l,"href",_),k[1]?g?(g.p(k,I),I&2&&Q(g,1)):(g=We(k),g.c(),Q(g,1),g.m(e,null)):g&&(Xe(),x(g,1,1,()=>{g=null}),Ze())},i(k){M||(Q(g),M=!0)},o(k){x(g),M=!1},d(k){k&&n(e),g&&g.d(),T=!1,z()}}}function _t(d,e,s){let{lang:a="de"}=e,r=!1;const l=()=>s(1,r=!r);return d.$$set=f=>{"lang"in f&&s(0,a=f.lang)},[a,r,l]}class vt extends pe{constructor(e){super(),$e(this,e,_t,ft,Ee,{lang:0})}}function ht(d){let e,s,a,r,l,f,_,L,$,E,b;e=new rt({}),l=new vt({props:{lang:d[0].lang}}),L=new Je({props:{lang:d[0].lang}});const y=d[2].default,p=et(y,d,d[1],null);return{c(){ve(e.$$.fragment),s=A(),a=o("main"),r=o("span"),ve(l.$$.fragment),f=A(),_=o("span"),ve(L.$$.fragment),$=A(),E=o("span"),p&&p.c(),this.h()},l(u){he(e.$$.fragment,u),s=N(u),a=i(u,"MAIN",{class:!0});var h=c(a);r=i(h,"SPAN",{style:!0});var w=c(r);he(l.$$.fragment,w),w.forEach(n),f=N(h),_=i(h,"SPAN",{style:!0,class:!0});var m=c(_);he(L.$$.fragment,m),m.forEach(n),$=N(h),E=i(h,"SPAN",{style:!0});var H=c(E);p&&p.l(H),H.forEach(n),h.forEach(n),this.h()},h(){ee(r,"grid-area","head"),ee(_,"grid-area","navi"),v(_,"class","sidenav svelte-1wue5j2"),ee(E,"grid-area","main"),v(a,"class","svelte-1wue5j2")},m(u,h){me(e,u,h),se(u,s,h),se(u,a,h),t(a,r),me(l,r,null),t(a,f),t(a,_),me(L,_,null),t(a,$),t(a,E),p&&p.m(E,null),b=!0},p(u,[h]){const w={};h&1&&(w.lang=u[0].lang),l.$set(w);const m={};h&1&&(m.lang=u[0].lang),L.$set(m),p&&p.p&&(!b||h&2)&&tt(p,y,u,u[1],b?at(y,u[1],h,null):lt(u[1]),null)},i(u){b||(Q(e.$$.fragment,u),Q(l.$$.fragment,u),Q(L.$$.fragment,u),Q(p,u),b=!0)},o(u){x(e.$$.fragment,u),x(l.$$.fragment,u),x(L.$$.fragment,u),x(p,u),b=!1},d(u){ge(e,u),u&&n(s),u&&n(a),ge(l),ge(L),p&&p.d(u)}}}function mt(d,e,s){let{$$slots:a={},$$scope:r}=e,{data:l}=e;return console.log("layout_data",l),d.$$set=f=>{"data"in f&&s(0,l=f.data),"$$scope"in f&&s(1,r=f.$$scope)},[l,r,a]}class pt extends pe{constructor(e){super(),$e(this,e,mt,ht,Ee,{data:0})}}export{pt as default};
