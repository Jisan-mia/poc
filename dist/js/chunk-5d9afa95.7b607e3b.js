(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d9afa95"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),u=n("da84"),a=n("c65b"),c=n("e330"),o=n("1626"),s=n("861d"),l=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),i=u.Error,d=c(/./.test);r({target:"RegExp",proto:!0,forced:!l},{test:function(e){var t=this.exec;if(!o(t))return d(this,e);var n=a(t,this,e);if(null!==n&&!s(n))throw new i("RegExp exec method returned something other than an Object or null");return!!n}})},"107c":function(e,t,n){var r=n("d039"),u=n("da84"),a=u.RegExp;e.exports=r((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"3e9f":function(e,t,n){"use strict";n("67c5")},"5d86":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),u=function(e){return Object(r["y"])("data-v-f549b6b6"),e=e(),Object(r["w"])(),e},a={key:0,class:"login_cont"},c=u((function(){return Object(r["h"])("h3",null," Register ",-1)})),o=Object(r["j"])(" Already have an account? "),s=u((function(){return Object(r["h"])("span",{class:"special"}," Login ",-1)}));function l(e,t,n,u,l,i){var d=Object(r["D"])("CustomPhoneInput"),p=Object(r["D"])("CustomAuthInput"),f=Object(r["D"])("router-link"),b=Object(r["D"])("CustomLoginRegisterBtn"),g=Object(r["D"])("MainRegisterUser");return"register"===u.currentStep?(Object(r["v"])(),Object(r["g"])("div",a,[c,Object(r["h"])("form",{onSubmit:t[2]||(t[2]=Object(r["K"])((function(){return u.handleUserRegister&&u.handleUserRegister.apply(u,arguments)}),["prevent"]))},[Object(r["k"])(d,{modelValue:u.userAuthInput.phone_number,"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.userAuthInput.phone_number=e}),placeholder:"Enter your phone number"},null,8,["modelValue"]),Object(r["k"])(p,{modelValue:u.userAuthInput.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return u.userAuthInput.password=e}),placeholder:"Enter your password",type:"text"},null,8,["modelValue"]),Object(r["h"])("p",null,[o,Object(r["k"])(f,{to:{name:"Login"}},{default:Object(r["J"])((function(){return[s]})),_:1})]),Object(r["k"])(b,{buttonText:"Register"})],32)])):(Object(r["v"])(),Object(r["e"])(g,{key:1}))}n("ac1f"),n("00b4");var i=n("a1e9"),d=n("e364"),p=n("1962"),f=n("486d"),b=n("309d"),g=n("57a7"),h=n("5502"),x={components:{CustomAuthInput:d["a"],CustomPhoneInput:p["a"],CustomLoginRegisterBtn:f["a"],SendOtp:b["a"],MainRegisterUser:g["a"]},name:"Register",setup:function(){var e=Object(h["b"])(),t=Object(i["c"])((function(){return e.state.user}));console.log(t.value),console.log(t.value.password);var n=Object(i["l"])({phone_number:"",password:""}),r=Object(i["l"])("register"),u=function(){/^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(n.value.phone_number)?!n.value.password.length>=5?alert("Password must be at least 5 character"):(r.value="mainRegister",console.log("handle user resisteer func called")):alert("Phone number not in correct pattern")};return{userAuthInput:n,handleUserRegister:u,currentStep:r}}},v=(n("3e9f"),n("6b0d")),O=n.n(v);const m=O()(x,[["render",l],["__scopeId","data-v-f549b6b6"]]);t["default"]=m},"67c5":function(e,t,n){},9263:function(e,t,n){"use strict";var r=n("c65b"),u=n("e330"),a=n("577e"),c=n("ad6d"),o=n("9f7f"),s=n("5692"),l=n("7c73"),i=n("69f3").get,d=n("fce3"),p=n("107c"),f=s("native-string-replace",String.prototype.replace),b=RegExp.prototype.exec,g=b,h=u("".charAt),x=u("".indexOf),v=u("".replace),O=u("".slice),m=function(){var e=/a/,t=/b*/g;return r(b,e,"a"),r(b,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),j=o.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],R=m||I||j||d||p;R&&(g=function(e){var t,n,u,o,s,d,p,R=this,w=i(R),y=a(e),E=w.raw;if(E)return E.lastIndex=R.lastIndex,t=r(g,E,y),R.lastIndex=E.lastIndex,t;var k=w.groups,A=j&&R.sticky,_=r(c,R),C=R.source,S=0,U=y;if(A&&(_=v(_,"y",""),-1===x(_,"g")&&(_+="g"),U=O(y,R.lastIndex),R.lastIndex>0&&(!R.multiline||R.multiline&&"\n"!==h(y,R.lastIndex-1))&&(C="(?: "+C+")",U=" "+U,S++),n=new RegExp("^(?:"+C+")",_)),I&&(n=new RegExp("^"+C+"$(?!\\s)",_)),m&&(u=R.lastIndex),o=r(b,A?n:R,U),A?o?(o.input=O(o.input,S),o[0]=O(o[0],S),o.index=R.lastIndex,R.lastIndex+=o[0].length):R.lastIndex=0:m&&o&&(R.lastIndex=R.global?o.index+o[0].length:u),I&&o&&o.length>1&&r(f,o[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o&&k)for(o.groups=d=l(null),s=0;s<k.length;s++)p=k[s],d[p[0]]=o[p[1]];return o}),e.exports=g},"9f7f":function(e,t,n){var r=n("d039"),u=n("da84"),a=u.RegExp,c=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),o=c||r((function(){return!a("a","y").sticky})),s=c||r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:s,MISSED_STICKY:o,UNSUPPORTED_Y:c}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),u=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==u},{exec:u})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},fce3:function(e,t,n){var r=n("d039"),u=n("da84"),a=u.RegExp;e.exports=r((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-5d9afa95.7b607e3b.js.map