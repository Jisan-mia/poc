(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24031f6a","chunk-2d0aba11"],{"050d":function(t,e,n){},"15a8":function(t,e,n){"use strict";n.r(e);var a=n("7a23");function c(t,e,n,c,o,i){var s=Object(a["E"])("StudentProfile");return Object(a["w"])(),Object(a["e"])(s)}var o=n("61a5"),i={components:{StudentProfile:o["a"]},name:"Dashboard"},s=n("6b0d"),r=n.n(s);const u=r()(i,[["render",c]]);e["default"]=u},"386c":function(t,e,n){},"486d":function(t,e,n){"use strict";var a=n("7a23");function c(t,e,n,c,o,i){return Object(a["w"])(),Object(a["g"])("button",Object(a["p"])(t.$attrs,{class:[n.outline?"outline":"","base"]}),Object(a["H"])(n.buttonText),17)}var o={name:"CustomLoginRegisterBtn.vue",inheritAttrs:!1,props:{buttonText:{type:String,default:function(){return"label"}},outline:{type:Boolean,default:function(){return!1}}}},i=(n("70b5"),n("6b0d")),s=n.n(i);const r=s()(o,[["render",c],["__scopeId","data-v-2663f2db"]]);e["a"]=r},"70b5":function(t,e,n){"use strict";n("050d")},"85a3":function(t,e,n){"use strict";n("386c")},9481:function(t,e,n){"use strict";n("95a4")},"95a4":function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var a=n("7a23");function c(t,e,n,c,o,i){var s=Object(a["E"])("LoginRegister");return c.isAuthenticated?Object(a["f"])("",!0):(Object(a["w"])(),Object(a["e"])(s,{key:0}))}var o=n("6c02"),i=n("6601"),s=n.n(i),r=function(t){return Object(a["z"])("data-v-1f63f6e6"),t=t(),Object(a["x"])(),t},u={class:"container"},d=Object(a["i"])('<div class="item1 item1-res" data-v-1f63f6e6><div class="img__container" data-v-1f63f6e6><img src="/images/logo.svg" alt="" data-v-1f63f6e6><div class="social" data-v-1f63f6e6><span data-v-1f63f6e6><i class="fab fa-facebook fa-2x" data-v-1f63f6e6></i></span><span data-v-1f63f6e6><i class="fab fa-youtube fa-2x" data-v-1f63f6e6></i></span><span data-v-1f63f6e6><i class="fab fa-discord fa-2x" data-v-1f63f6e6></i></span></div></div></div>',1),f={class:"item2"},b=r((function(){return Object(a["h"])("div",{class:"img__container"},[Object(a["h"])("img",{src:s.a,alt:""})],-1)})),l=r((function(){return Object(a["h"])("h3",null," Exam Portal ",-1)})),v={class:"wrapper"},g={class:"btns"};function p(t,e,n,c,o,i){var s=Object(a["E"])("CustomLoginRegisterBtn");return Object(a["w"])(),Object(a["g"])("div",u,[d,Object(a["h"])("div",f,[b,l,Object(a["h"])("div",v,[Object(a["h"])("div",g,[Object(a["k"])(s,{buttonText:"Login",outline:!1,onClick:c.handleLoginRoute},null,8,["onClick"]),Object(a["k"])(s,{buttonText:"Register",outline:!0,onClick:c.handleRegisterRoute},null,8,["onClick"])])])])])}var j=n("486d"),O={components:{CustomLoginRegisterBtn:j["a"]},name:"LoginRegister",setup:function(t,e){var n=Object(o["d"])(),a=function(){n.push({name:"Login"}),console.log("login clicked")},c=function(){n.push({name:"Register"}),console.log("register clicked")};return{handleLoginRoute:a,handleRegisterRoute:c}}},h=(n("85a3"),n("6b0d")),m=n.n(h);const k=m()(O,[["render",p],["__scopeId","data-v-1f63f6e6"]]);var R=k,w=n("15a8"),L=n("5502"),_={name:"Home",setup:function(){var t=Object(L["b"])(),e=Object(o["d"])(),n=t.state.userState.user.isAuthenticated;return console.log("homie",n),n&&(console.log("home to dashboard"),e.push("/dashboard")),{isAuthenticated:n}},components:{LoginRegister:R,Dashboard:w["default"]}};n("9481");const x=m()(_,[["render",c],["__scopeId","data-v-741e0580"]]);e["default"]=x}}]);
//# sourceMappingURL=chunk-24031f6a.76aabee2.js.map