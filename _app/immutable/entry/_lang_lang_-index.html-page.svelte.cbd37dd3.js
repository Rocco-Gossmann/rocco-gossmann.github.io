import{S as E,i as g,s as k,k as m,a as w,q as S,O as q,l as h,h as c,c as C,m as v,r as O,n as d,G as p,b as y,u as P,H as x}from"../chunks/index.3a8ffb59.js";function T(l){let e,o,n,a,i,_=l[0].texts.site_coming_soon+"",r;return{c(){e=m("meta"),n=w(),a=m("section"),i=m("p"),r=S(_),this.h()},l(t){const s=q("svelte-186ynp2",document.head);e=h(s,"META",{name:!0,content:!0}),s.forEach(c),n=C(t),a=h(t,"SECTION",{class:!0});var u=v(a);i=h(u,"P",{});var f=v(i);r=O(f,_),f.forEach(c),u.forEach(c),this.h()},h(){d(e,"name","keywords"),d(e,"content",o=l[0].texts.meta_keywords),d(a,"class","appcontainer svelte-z1wc9")},m(t,s){p(document.head,e),y(t,n,s),y(t,a,s),p(a,i),p(i,r)},p(t,[s]){s&1&&o!==(o=t[0].texts.meta_keywords)&&d(e,"content",o),s&1&&_!==(_=t[0].texts.site_coming_soon+"")&&P(r,_)},i:x,o:x,d(t){c(e),t&&c(n),t&&c(a)}}}function b(l,e,o){let{data:n}=e;return l.$$set=a=>{"data"in a&&o(0,n=a.data)},[n]}class A extends E{constructor(e){super(),g(this,e,b,T,k,{data:0})}}export{A as default};