import{s as c,n as i}from"../chunks/scheduler.e108d1fd.js";import{S as m,i as d,g as l,m as h,h as u,j as _,n as g,f as r,a as w,x,o as y}from"../chunks/index.7cf2deec.js";function E(s){let a,t;return{c(){a=l("p"),t=h(s[0])},l(n){a=u(n,"P",{});var e=_(a);t=g(e,s[0]),e.forEach(r)},m(n,e){w(n,a,e),x(a,t)},p(n,[e]){e&1&&y(t,n[0])},i,o:i,d(n){n&&r(a)}}}function P(s,a,t){let n,e=1;function f(o){o==1?(e==16&&t(1,e=0),t(1,e+=1)):(e==1&&t(1,e=16),t(1,e-=1))}return typeof window<"u"&&window.addEventListener("wheel",o=>{const p=Math.sign(o.deltaY);f(p)}),s.$$.update=()=>{s.$$.dirty&2&&t(0,n=e+".png")},[n,e]}class q extends m{constructor(a){super(),d(this,a,P,E,c,{})}}export{q as component};
