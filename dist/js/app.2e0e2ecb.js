(function(t){function n(n){for(var o,i,s=n[0],l=n[1],c=n[2],f=0,v=[];f<s.length;f++)i=s[f],a[i]&&v.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(n);while(v.length)v.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],o=!0,s=1;s<e.length;s++){var l=e[s];0!==a[l]&&(o=!1)}o&&(r.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},a={1:0},r=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var u=l;r.push([11,0]),e()})({11:function(t,n,e){t.exports=e("Vtdi")},2:function(t,n){},EVoN:function(t,n,e){},HVHr:function(t,n,e){"use strict";var o=e("EVoN"),a=e.n(o);a.a},Vtdi:function(t,n,e){"use strict";e.r(n);e("VRzm");var o=e("Kw5r"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("nav",[e("b-navbar",{attrs:{toggleable:"md",type:"light",variant:"info"}},[e("b-navbar-nav",[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),e("b-navbar-nav",[e("router-link",{attrs:{to:"/Portfolio"}},[t._v("Portfolio")])],1),e("b-navbar-nav",[e("router-link",{attrs:{to:"/StockDetail/600001"}},[t._v("Stock")])],1)],1)],1),e("router-view")],1)},r=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("b-container",{attrs:{fluid:""}},[e("h1",[t._v(t._s(t.msg))]),e("div",[t._v("Today is  "+t._s(t.tDate)+" ")]),e("h4",[t._v("My Portfillo")]),e("form",{on:{submit:function(n){return n.preventDefault(),t.addStock(n)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newStk,expression:"newStk"},{name:"validate",rawName:"v-validate",value:"min:3",expression:"'min:3'"}],attrs:{type:"text",placeholder:"Add new Stock Code",name:"symbol"},domProps:{value:t.newStk},on:{input:function(n){n.target.composing||(t.newStk=n.target.value)}}}),t.errors.has("symbol")?e("p",[t._v(t._s(t.errors.first("symbol")))]):t._e()]),e("ul",t._l(t.myStocks,function(n,o){return e("li",{key:o},[t._v("\n        "+t._s(n.symbol)+": "+t._s(n.name)+"\n        "),e("b-button",{attrs:{size:"sm",variant:"link"},on:{click:function(n){t.removeStock(o)}}},[t._v(" remove")])],1)})),e("div",[e("b-button",{attrs:{size:"sm",variant:"link"},on:{click:function(n){t.getdata()}}},[t._v(" getdata(test)")]),e("p",[t._v(t._s(t.localresult))])],1)])],1)},s=[],l=(e("a1Th"),{name:"Home",data:function(){return{msg:"Welcome to Stock",tDate:(new Date).toString(),newStk:"",myStocks:[{symbol:"600001",name:"浦发银行"},{symbol:"600848",name:"上海临港"}],localresult:""}},methods:{addStock:function(){var t=this;this.$validator.validateAll().then(function(n){n&&(t.myStocks.push({symbol:t.newStk,name:t.newStk}),t.newStk="")})},removeStock:function(t){this.myStocks.splice(t,1)},getdata:function(){var t=this,n="http://localhost:5000/api/random";this.$http.get(n).then(function(n){console.log(n.data),t.localresult=n.data.rn})}}}),c=l,u=(e("lUbX"),e("KHd+")),f=Object(u["a"])(c,i,s,!1,null,"48031858",null),v=f.exports,m={name:"app",components:{Home:v}},p=m,d=(e("ZL7j"),Object(u["a"])(p,a,r,!1,null,null,null)),h=d.exports,k=e("e7F3"),_=e("jE9Z"),b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v("My Portfolio")]),e("div",[t._v("HelloWorld  "+t._s(t.name))])])},y=[],g={name:"Portfolio",data:function(){return{name:"Your name"}}},S=g,w=(e("ysZT"),Object(u["a"])(S,b,y,!1,null,"4e27588f",null)),P=w.exports,x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.stockId))]),e("div",[t._v("Stock Detail  "+t._s(t.name))]),e("b-button",{attrs:{size:"sm",variant:"link"},on:{click:function(n){t.getStockInfo("600848")}}},[t._v("get")]),e("ul",t._l(t.stockData,function(n,o){return e("li",{key:o},[e("p",{},[t._v("\n          "+t._s(n["name"])+", "+t._s(n["price"])+"，    成交量： "+t._s(n["volume"])+"\n        ")])])}))],1)},j=[],D={name:"StockDetail",data:function(){return{stockId:this.$route.params.id,name:"stock name",stockData:[]}},methods:{getStockInfo:function(t){var n=this;this.$http.jsonp("http://api.money.126.net/data/feed/0000001,0601857,0601600,0601398,0600031,1000002,0600848,money.api",{}).then(function(t){for(var e in console.log(t.data),t.data){var o=t.data[e];n.stockData.push(o)}},function(t){console.log("error")})}}},E=D,H=(e("HVHr"),Object(u["a"])(E,x,j,!1,null,"22748daa",null)),O=H.exports;o["a"].use(_["a"]);var V=new _["a"]({mode:"history",routes:[{path:"/",name:"Home",component:v},{path:"/Portfolio/",name:"Portfolio",component:P},{path:"/StockDetail/:id",name:"Stock",component:O}]}),$=e("n3sq"),M=e("KN3F");e("+eM2"),e("LdiE");o["a"].use(k["a"]),o["a"].use($["a"]),o["a"].use(M["a"]),o["a"].config.productionTip=!1,new o["a"]({router:V,render:function(t){return t(h)}}).$mount("#app")},ZL7j:function(t,n,e){"use strict";var o=e("bP1M"),a=e.n(o);a.a},bP1M:function(t,n,e){},fXEG:function(t,n,e){},lUbX:function(t,n,e){"use strict";var o=e("fXEG"),a=e.n(o);a.a},pf0V:function(t,n,e){},ysZT:function(t,n,e){"use strict";var o=e("pf0V"),a=e.n(o);a.a}});
//# sourceMappingURL=app.2e0e2ecb.js.map