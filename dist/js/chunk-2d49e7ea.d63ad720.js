(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d49e7ea","chunk-2d0aba11"],{"050d":function(e,t,n){},"0c3a":function(e,t,n){"use strict";n("85d8")},"15a8":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function c(e,t,n,c,o,i){var r=Object(a["E"])("StudentProfile");return Object(a["w"])(),Object(a["e"])(r)}var o=n("61a5"),i={components:{StudentProfile:o["a"]},name:"Dashboard"},r=n("6b0d"),s=n.n(r);const u=s()(i,[["render",c]]);t["default"]=u},"486d":function(e,t,n){"use strict";var a=n("7a23");function c(e,t,n,c,o,i){return Object(a["w"])(),Object(a["g"])("button",Object(a["p"])(e.$attrs,{class:[n.outline?"outline":"","base"]}),Object(a["H"])(n.buttonText),17)}var o={name:"CustomLoginRegisterBtn.vue",inheritAttrs:!1,props:{buttonText:{type:String,default:function(){return"label"}},outline:{type:Boolean,default:function(){return!1}}}},i=(n("70b5"),n("6b0d")),r=n.n(i);const s=r()(o,[["render",c],["__scopeId","data-v-2663f2db"]]);t["a"]=s},"5c11":function(e,t,n){"use strict";n("ea50")},"70b5":function(e,t,n){"use strict";n("050d")},"85d8":function(e,t,n){},bb51:function(e,t,n){"use strict";n.r(t);var a=n("7a23");function c(e,t,n,c,o,i){var r=Object(a["E"])("LoginRegister");return c.isAuthenticated?Object(a["f"])("",!0):(Object(a["w"])(),Object(a["e"])(r,{key:0}))}var o=n("1da1"),i=(n("96cf"),n("a1e9")),r=n("6c02"),s=n("6601"),u=n.n(s),d=function(e){return Object(a["z"])("data-v-66812994"),e=e(),Object(a["x"])(),e},l={class:"container"},b=Object(a["i"])('<div class="item1 item1-res" data-v-66812994><div class="img__container" data-v-66812994><img src="/images/logo.svg" alt="" data-v-66812994><div class="social" data-v-66812994><span data-v-66812994><i class="fab fa-facebook fa-2x" data-v-66812994></i></span><span data-v-66812994><i class="fab fa-youtube fa-2x" data-v-66812994></i></span><span data-v-66812994><i class="fab fa-discord fa-2x" data-v-66812994></i></span></div></div></div>',1),f={class:"item2"},v=d((function(){return Object(a["h"])("div",{class:"img__container"},[Object(a["h"])("img",{src:u.a,alt:""})],-1)})),g=d((function(){return Object(a["h"])("h3",null," Exam Portal ",-1)})),p={class:"wrapper"},j={class:"btns"};function O(e,t,n,c,o,i){var r=Object(a["E"])("CustomLoginRegisterBtn");return Object(a["w"])(),Object(a["g"])("div",l,[b,Object(a["h"])("div",f,[v,g,Object(a["h"])("div",p,[Object(a["h"])("div",j,[Object(a["k"])(r,{buttonText:"Login",outline:!1,onClick:c.handleLoginRoute},null,8,["onClick"]),Object(a["k"])(r,{buttonText:"Register",outline:!0,onClick:c.handleRegisterRoute},null,8,["onClick"])])])])])}var m=n("486d"),h={components:{CustomLoginRegisterBtn:m["a"]},name:"LoginRegister",setup:function(e,t){var n=Object(r["d"])(),a=function(){n.push({name:"Login"}),console.log("login clicked")},c=function(){n.push({name:"Register"}),console.log("register clicked")};return{handleLoginRoute:a,handleRegisterRoute:c}}},k=(n("0c3a"),n("6b0d")),R=n.n(k);const w=R()(h,[["render",O],["__scopeId","data-v-66812994"]]);var x=w,S=n("15a8"),L=n("5502"),_=n("5c40"),C={name:"Home",setup:function(){var e=Object(L["b"])(),t=Object(r["d"])(),n=Object(i["c"])((function(){return e.state.userState.user.isAuthenticated}));console.log("homie",n);var a=Object(i["c"])((function(){return e.state.userState.profile})),c=Object(i["c"])((function(){return e.state.userState}));return console.log(a.value,c.value),Object(_["Y"])(Object(o["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:if(!n.value){c.next=10;break}return c.prev=1,c.next=4,e.dispatch("userState/loadUserProfile");case 4:a.value?t.push("/dashboard"):(localStorage.removeItem("token"),localStorage.removeItem("userId"),e.commit("userState/initializeStore")),c.next=10;break;case 7:c.prev=7,c.t0=c["catch"](1),console.log(c.t0);case 10:case"end":return c.stop()}}),c,null,[[1,7]])})))),{isAuthenticated:n}},components:{LoginRegister:x,Dashboard:S["default"]}};n("5c11");const I=R()(C,[["render",c],["__scopeId","data-v-5dfde454"]]);t["default"]=I},ea50:function(e,t,n){}}]);
//# sourceMappingURL=chunk-2d49e7ea.d63ad720.js.map