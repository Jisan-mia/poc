(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a8175a8"],{"0ead":function(e,t,n){"use strict";n("292b")},"292b":function(e,t,n){},"3be2":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=function(e){return Object(r["z"])("data-v-a3b3644a"),e=e(),Object(r["x"])(),e},u={key:0,class:"login_cont"},o=a((function(){return Object(r["h"])("h3",null," Login ",-1)}));function c(e,t,n,a,c,s){var l=Object(r["E"])("CustomPhoneInput"),i=Object(r["E"])("CustomAuthInput"),p=Object(r["E"])("CustomLoginRegisterBtn"),b=Object(r["E"])("SendOtp");return"login"===a.currentStep?(Object(r["w"])(),Object(r["g"])("div",u,[o,Object(r["h"])("form",{onSubmit:t[2]||(t[2]=Object(r["O"])((function(){return a.handleUserLogin&&a.handleUserLogin.apply(a,arguments)}),["prevent"]))},[Object(r["k"])(l,{modelValue:a.userInputs.phone_number,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.userInputs.phone_number=e}),placeholder:"Enter your phone number"},null,8,["modelValue"]),Object(r["k"])(i,{modelValue:a.userInputs.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.userInputs.password=e}),placeholder:"Enter your password",type:"text"},null,8,["modelValue"]),Object(r["k"])(p,{buttonText:"Login"})],32)])):(Object(r["w"])(),Object(r["e"])(b,{key:1}))}var s=n("5530"),l=n("1da1"),i=(n("ac1f"),n("00b4"),n("96cf"),n("a1e9")),p=n("e364"),b=n("1962"),d=n("486d"),h=n("309d"),O=n("5502"),f=n("2934"),g=n("5c40"),j=n("6c02"),m={components:{CustomAuthInput:p["a"],CustomPhoneInput:b["a"],CustomLoginRegisterBtn:d["a"],SendOtp:h["a"]},name:"Login",setup:function(){var e=Object(O["b"])(),t=Object(j["d"])(),n=Object(i["c"])((function(){return e.state.userState.user.isAuthenticated})),r=Object(i["c"])((function(){return e.state.userState.profile}));console.log(r.value),Object(g["Y"])(Object(l["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.value){a.next=11;break}return a.prev=1,a.next=4,e.dispatch("userState/loadUserProfile");case 4:console.log(r.value),r.value&&t.push("/dashboard"),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](1),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[1,8]])}))));var a=Object(i["l"])({phone_number:"",password:""}),u=(Object(i["l"])(["login","sendOtp"]),Object(i["l"])("login")),o=function(){u.value="sendOtp"},c=Object(i["l"])(null);Object(g["Y"])((function(){console.log(a.value)}));var p=function(){var n=Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(/^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(a.value.phone_number)){n.next=5;break}return e.dispatch("notifications/add",Object(f["c"])("warning","Please enter a valid phone number")),n.abrupt("return");case 5:if(!(a.value.password.length<5)){n.next=8;break}return e.dispatch("notifications/add",Object(f["c"])("warning","Password must be at least 5 character")),n.abrupt("return");case 8:return n.prev=8,n.next=11,e.dispatch("userState/userLogin",Object(s["a"])({},a.value));case 11:t.push("/"),n.next=18;break;case 14:n.prev=14,n.t0=n["catch"](8),console.log(n.t0.message),c.value=n.t0.message;case 18:case"end":return n.stop()}}),n,null,[[8,14]])})));return function(){return n.apply(this,arguments)}}();return{userInputs:a,handleUserLogin:p,handleForgotStep:o,currentStep:u}}},v=(n("0ead"),n("6b0d")),w=n.n(v);const k=w()(m,[["render",c],["__scopeId","data-v-a3b3644a"]]);t["default"]=k}}]);
//# sourceMappingURL=chunk-4a8175a8.176c3945.js.map