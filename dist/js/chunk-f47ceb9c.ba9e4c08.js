(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f47ceb9c","chunk-2d0aba11"],{"050d":function(t,e,n){},"15a8":function(t,e,n){"use strict";n.r(e);var a=n("7a23");function c(t,e,n,c,o,i){var s=Object(a["E"])("StudentProfile");return Object(a["w"])(),Object(a["e"])(s)}var o=n("61a5"),i={components:{StudentProfile:o["a"]},name:"Dashboard"},s=n("6b0d"),r=n.n(s);const u=r()(i,[["render",c]]);e["default"]=u},"1e1c":function(t,e,n){},"2b24":function(t,e,n){"use strict";n("1e1c")},"386c":function(t,e,n){},"486d":function(t,e,n){"use strict";var a=n("7a23");function c(t,e,n,c,o,i){return Object(a["w"])(),Object(a["g"])("button",Object(a["p"])(t.$attrs,{class:[n.outline?"outline":"","base"]}),Object(a["H"])(n.buttonText),17)}var o={name:"CustomLoginRegisterBtn.vue",inheritAttrs:!1,props:{buttonText:{type:String,default:function(){return"label"}},outline:{type:Boolean,default:function(){return!1}}}},i=(n("70b5"),n("6b0d")),s=n.n(i);const r=s()(o,[["render",c],["__scopeId","data-v-2663f2db"]]);e["a"]=r},"70b5":function(t,e,n){"use strict";n("050d")},"85a3":function(t,e,n){"use strict";n("386c")},bb51:function(t,e,n){"use strict";n.r(e);var a=n("7a23");function c(t,e,n,c,o,i){var s=Object(a["E"])("LoginRegister");return c.isAuthenticated?Object(a["f"])("",!0):(Object(a["w"])(),Object(a["e"])(s,{key:0}))}var o=n("a1e9"),i=n("6c02"),s=n("6601"),r=n.n(s),u=function(t){return Object(a["z"])("data-v-1f63f6e6"),t=t(),Object(a["x"])(),t},d={class:"container"},f=Object(a["i"])('<div class="item1 item1-res" data-v-1f63f6e6><div class="img__container" data-v-1f63f6e6><img src="/images/logo.svg" alt="" data-v-1f63f6e6><div class="social" data-v-1f63f6e6><span data-v-1f63f6e6><i class="fab fa-facebook fa-2x" data-v-1f63f6e6></i></span><span data-v-1f63f6e6><i class="fab fa-youtube fa-2x" data-v-1f63f6e6></i></span><span data-v-1f63f6e6><i class="fab fa-discord fa-2x" data-v-1f63f6e6></i></span></div></div></div>',1),b={class:"item2"},l=u((function(){return Object(a["h"])("div",{class:"img__container"},[Object(a["h"])("img",{src:r.a,alt:""})],-1)})),v=u((function(){return Object(a["h"])("h3",null," Exam Portal ",-1)})),g={class:"wrapper"},j={class:"btns"};function p(t,e,n,c,o,i){var s=Object(a["E"])("CustomLoginRegisterBtn");return Object(a["w"])(),Object(a["g"])("div",d,[f,Object(a["h"])("div",b,[l,v,Object(a["h"])("div",g,[Object(a["h"])("div",j,[Object(a["k"])(s,{buttonText:"Login",outline:!1,onClick:c.handleLoginRoute},null,8,["onClick"]),Object(a["k"])(s,{buttonText:"Register",outline:!0,onClick:c.handleRegisterRoute},null,8,["onClick"])])])])])}var O=n("486d"),h={components:{CustomLoginRegisterBtn:O["a"]},name:"LoginRegister",setup:function(t,e){var n=Object(i["d"])(),a=function(){n.push({name:"Login"}),console.log("login clicked")},c=function(){n.push({name:"Register"}),console.log("register clicked")};return{handleLoginRoute:a,handleRegisterRoute:c}}},m=(n("85a3"),n("6b0d")),k=n.n(m);const R=k()(h,[["render",p],["__scopeId","data-v-1f63f6e6"]]);var w=R,L=n("15a8"),_=n("5502"),x={name:"Home",setup:function(){var t=Object(_["b"])(),e=Object(i["d"])(),n=t.state.userState.user.isAuthenticated;console.log("homie",n);var a=Object(o["c"])((function(){return t.state.userState.user.userId}));return n&&a.value&&(console.log("home to dashboard"),e.push("/dashboard")),{isAuthenticated:n}},components:{LoginRegister:w,Dashboard:L["default"]}};n("2b24");const C=k()(x,[["render",c],["__scopeId","data-v-29db57b7"]]);e["default"]=C}}]);
//# sourceMappingURL=chunk-f47ceb9c.ba9e4c08.js.map