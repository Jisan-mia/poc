(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32531212"],{"3be2":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=function(e){return Object(r["z"])("data-v-aac93da4"),e=e(),Object(r["x"])(),e},u={key:0,class:"login_cont"},c=a((function(){return Object(r["h"])("h3",null," Login ",-1)})),s={class:"pass_cont"},o=a((function(){return Object(r["h"])("i",{class:"fas fa-eye-slash"},null,-1)})),l=[o],i=a((function(){return Object(r["h"])("i",{class:"fas fa-eye"},null,-1)})),p=[i],b=Object(r["j"])(" Don’t have an account? "),d=a((function(){return Object(r["h"])("span",{class:"special"}," Register ",-1)})),h=a((function(){return Object(r["h"])("br",null,null,-1)}));function O(e,t,n,a,o,i){var O=Object(r["E"])("CustomPhoneInput"),f=Object(r["E"])("CustomAuthInput"),j=Object(r["E"])("router-link"),w=Object(r["E"])("CustomLoginRegisterBtn"),g=Object(r["E"])("SendOtp");return"login"===a.currentStep?(Object(r["w"])(),Object(r["g"])("div",u,[c,Object(r["h"])("form",{onSubmit:t[4]||(t[4]=Object(r["O"])((function(){return a.handleUserLogin&&a.handleUserLogin.apply(a,arguments)}),["prevent"]))},[Object(r["k"])(O,{modelValue:a.userInputs.phone_number,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.userInputs.phone_number=e}),placeholder:"Enter your phone number"},null,8,["modelValue"]),Object(r["h"])("div",s,[Object(r["k"])(f,{modelValue:a.userInputs.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.userInputs.password=e}),placeholder:"Enter your password",type:a.inputType},null,8,["modelValue","type"]),a.showPassword?a.showPassword?(Object(r["w"])(),Object(r["g"])("span",{key:1,class:"btn",onClick:t[3]||(t[3]=function(e){return a.showPassword=!a.showPassword})},p)):Object(r["f"])("",!0):(Object(r["w"])(),Object(r["g"])("span",{key:0,class:"btn",onClick:t[2]||(t[2]=function(e){return a.showPassword=!a.showPassword})},l))]),Object(r["h"])("p",null,[b,Object(r["k"])(j,{to:{name:"Register"}},{default:Object(r["M"])((function(){return[d]})),_:1}),h]),Object(r["k"])(w,{buttonText:"Login",isSpin:a.buttonLoading},null,8,["isSpin"])],32)])):(Object(r["w"])(),Object(r["e"])(g,{key:1}))}var f=n("5530"),j=n("1da1"),w=(n("ac1f"),n("00b4"),n("96cf"),n("a1e9")),g=n("e364"),v=n("1962"),m=n("486d"),k=n("309d"),y=n("5502"),S=n("2934"),x=n("5c40"),P=n("6c02"),L={components:{CustomAuthInput:g["a"],CustomPhoneInput:v["a"],CustomLoginRegisterBtn:m["a"],SendOtp:k["a"]},name:"Login",setup:function(){var e=Object(y["b"])(),t=Object(P["d"])(),n=Object(w["l"])(!1),r=Object(w["c"])((function(){return e.state.userState.user.isAuthenticated})),a=Object(w["c"])((function(){return e.state.userState.profile})),u=Object(w["l"])(!1),c=function(e){e.preventDefault(),u.value=!u.value},s=Object(w["c"])((function(){return u.value?"text":"password"}));Object(x["Y"])(Object(j["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!r.value){n.next=11;break}return n.prev=1,n.next=4,e.dispatch("userState/loadUserProfile");case 4:console.log(a.value),a.value&&t.push("/dashboard"),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])}))));var o=Object(w["l"])({phone_number:"",password:""}),l=(Object(w["l"])(["login","sendOtp"]),Object(w["l"])("login")),i=function(){l.value="sendOtp"},p=Object(w["l"])(null);Object(x["Y"])((function(){console.log(o.value)}));var b=function(){var r=Object(j["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(/^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(o.value.phone_number)){r.next=5;break}return e.dispatch("notifications/add",Object(S["c"])("warning","Please enter a valid phone number")),r.abrupt("return");case 5:if(!(o.value.password.length<5)){r.next=8;break}return e.dispatch("notifications/add",Object(S["c"])("warning","Password must be at least 5 character")),r.abrupt("return");case 8:return r.prev=8,n.value=!0,r.next=12,e.dispatch("userState/userLogin",Object(f["a"])({},o.value));case 12:n.value=!1,t.push("/"),r.next=21;break;case 16:r.prev=16,r.t0=r["catch"](8),console.log(r.t0.message),setTimeout((function(){n.value=!1}),1e3),p.value=r.t0.message;case 21:case"end":return r.stop()}}),r,null,[[8,16]])})));return function(){return r.apply(this,arguments)}}();return{userInputs:o,handleUserLogin:b,handleForgotStep:i,currentStep:l,toggleShow:c,showPassword:u,inputType:s,buttonLoading:n}}},I=(n("f149"),n("6b0d")),_=n.n(I);const C=_()(L,[["render",O],["__scopeId","data-v-aac93da4"]]);t["default"]=C},ef0d:function(e,t,n){},f149:function(e,t,n){"use strict";n("ef0d")}}]);
//# sourceMappingURL=chunk-32531212.5126b0d7.js.map