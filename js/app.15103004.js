(function(t){function e(e){for(var r,a,i=e[0],u=e[1],c=e[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(l.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},l=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var s=u;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"423d":function(t,e,n){"use strict";var r=n("6e2d"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"subpixel-antialiased text-white w-full h-full",attrs:{id:"app"}},[n("Google"),n("Links"),n("Clock")],1)},l=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clock fixed bottom-0 left-0 px-3 text-4xl md:text-6xl"},[t._v(" "+t._s(t.time)+" ")])},i=[],u={name:"Clock",data:function(){return{timer:null,time:"⏱"}},mounted:function(){this.timer=setInterval(this.updateClock,1e3)},destroyed:function(){clearInterval(this.timer)},methods:{updateClock:function(){var t=new Date;this.time=t.toLocaleTimeString("pt-BR")}}},c=u,s=n("2877"),f=Object(s["a"])(c,a,i,!1,null,"50ce71f3",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"links fixed right-0 top-0 px-4 text-right py-2 text-lg md:text-4xl"},t._l(t.links,(function(e){return n("li",{key:e.url},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.lbl))])])})),0)},m=[],b={name:"Links",data:function(){return{links:[{url:"https://facebook.com/",lbl:"Facebook"},{url:"https://instagram.com/",lbl:"Instagram"},{url:"https://youtube.com/",lbl:"Youtube"},{url:"https://reddit.com/",lbl:"Reddit"},{url:"https://globoplay.globo.com/agora-na-globo/",lbl:"GloboPlay"},{url:"https://globosatplay.globo.com/globonews/ao-vivo/",lbl:"GloboNews"},{url:"https://ifood.com.br/",lbl:"iFood"}]}}},h=b,g=Object(s["a"])(h,d,m,!1,null,"3ad8d6d0",null),v=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-screen h-screen flex items-center"},[n("form",{staticClass:"searchform text-lg items-center mx-auto md:text-5xl",attrs:{action:"https://www.google.com/search",method:"get",name:"searchform"}},[n("label",{attrs:{for:"q"}}),n("input",{ref:"searchInput",staticClass:"form-control search text-gray-800 p-2",attrs:{autocomplete:"on",name:"q",id:"q",required:"required",type:"text"}}),n("button",{staticClass:"button px-2",attrs:{type:"submit"}},[t._v("Search")])])])},y=[],w={name:"Google",mounted:function(){this.$refs.searchInput.focus()}},_=w,k=Object(s["a"])(_,x,y,!1,null,"1b92c08c",null),O=k.exports,j={name:"App",components:{Clock:p,Links:v,Google:O}},C=j,P=(n("423d"),Object(s["a"])(C,o,l,!1,null,"4d477d8a",null)),S=P.exports;n("def6");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(S)}}).$mount("#app")},"6e2d":function(t,e,n){},def6:function(t,e,n){}});
//# sourceMappingURL=app.15103004.js.map