(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ffd7630"],{"0724":function(e,t,n){"use strict";n("8baa")},1276:function(e,t,n){"use strict";var a=n("2ba4"),c=n("c65b"),r=n("e330"),i=n("d784"),o=n("44e7"),u=n("825a"),d=n("1d80"),s=n("4840"),l=n("8aa5"),b=n("50c4"),f=n("577e"),m=n("dc4a"),j=n("4dae"),O=n("14c3"),p=n("9263"),h=n("9f7f"),x=n("d039"),v=h.UNSUPPORTED_Y,g=4294967295,y=Math.min,_=[].push,w=r(/./.exec),E=r(_),k=r("".slice),S=!x((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=f(d(this)),i=void 0===n?g:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!o(e))return c(t,r,e,i);var u,s,l,b=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),O=0,h=new RegExp(e.source,m+"g");while(u=c(p,h,r)){if(s=h.lastIndex,s>O&&(E(b,k(r,O,u.index)),u.length>1&&u.index<r.length&&a(_,b,j(u,1)),l=u[0].length,O=s,b.length>=i))break;h.lastIndex===u.index&&h.lastIndex++}return O===r.length?!l&&w(h,"")||E(b,""):E(b,k(r,O)),b.length>i?j(b,0,i):b}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:c(t,this,e,n)}:t,[function(t,n){var a=d(this),i=void 0==t?void 0:m(t,e);return i?c(i,t,a,n):c(r,f(a),t,n)},function(e,a){var c=u(this),i=f(e),o=n(r,c,i,a,r!==t);if(o.done)return o.value;var d=s(c,RegExp),m=c.unicode,j=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"g":"y"),p=new d(v?"^(?:"+c.source+")":c,j),h=void 0===a?g:a>>>0;if(0===h)return[];if(0===i.length)return null===O(p,i)?[i]:[];var x=0,_=0,w=[];while(_<i.length){p.lastIndex=v?0:_;var S,Y=O(p,v?k(i,_):i);if(null===Y||(S=y(b(p.lastIndex+(v?_:0)),i.length))===x)_=l(i,_,m);else{if(E(w,k(i,x,_)),w.length===h)return w;for(var D=1;D<=Y.length-1;D++)if(E(w,Y[D]),w.length===h)return w;_=x=S}}return E(w,k(i,x)),w}]}),!S,v)},"14c3":function(e,t,n){var a=n("da84"),c=n("c65b"),r=n("825a"),i=n("1626"),o=n("c6b6"),u=n("9263"),d=a.TypeError;e.exports=function(e,t){var n=e.exec;if(i(n)){var a=c(n,e,t);return null!==a&&r(a),a}if("RegExp"===o(e))return c(u,e,t);throw d("RegExp#exec called on incompatible receiver")}},"50f3":function(e,t,n){"use strict";n("bcdd")},"6a47":function(e,t,n){"use strict";var a=n("7a23"),c=["disabled"],r={class:"text"};function i(e,t,n,i,o,u){return Object(a["w"])(),Object(a["g"])("button",Object(a["p"])(e.$attrs,{disabled:n.disabled,class:[n.type,n.rounded&&"round"],onClick:t[0]||(t[0]=function(t){return e.$emit("onClick")})}),[n.icon?(Object(a["w"])(),Object(a["g"])("i",{key:0,class:Object(a["r"])(["icon",n.icon])},null,2)):Object(a["f"])("",!0),Object(a["h"])("span",r,[Object(a["D"])(e.$slots,"default",{},void 0,!0)])],16,c)}var o={name:"CustomAdminBtn",emits:["onClick"],props:{icon:{type:String},type:{type:String,default:function(){return"primary"}},disabled:{type:Boolean,default:function(){return!1}},rounded:{type:Boolean,default:function(){return!1}}}},u=(n("50f3"),n("6b0d")),d=n.n(u);const s=d()(o,[["render",i],["__scopeId","data-v-47a476ae"]]);t["a"]=s},"8aa5":function(e,t,n){"use strict";var a=n("6547").charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},"8baa":function(e,t,n){},a15b:function(e,t,n){"use strict";var a=n("23e7"),c=n("e330"),r=n("44ad"),i=n("fc6a"),o=n("a640"),u=c([].join),d=r!=Object,s=o("join",",");a({target:"Array",proto:!0,forced:d||!s},{join:function(e){return u(i(this),void 0===e?",":e)}})},bcdd:function(e,t,n){},cd89:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=function(e){return Object(a["z"])("data-v-be6de87e"),e=e(),Object(a["x"])(),e},r={class:"table_main"},i={key:0},o={key:1},u=c((function(){return Object(a["h"])("tr",null,[Object(a["h"])("th",null,"Exam ID"),Object(a["h"])("th",null,"Exam Name"),Object(a["h"])("th",null,"Start Date & Time"),Object(a["h"])("th",null,"End Date & Time"),Object(a["h"])("th",{class:"status_header"},"Status")],-1)})),d={class:"id"},s=["onClick"],l={class:"subject"},b={class:"date__time"},f={class:"date"},m={class:"time"},j={class:"date__time"},O={class:"date"},p={class:"time"},h={class:"status__column"},x={class:"wrapper"},v=Object(a["j"])(" Not Started "),g=Object(a["j"])(" Start Exam "),y=Object(a["j"])(" Expired "),_=Object(a["j"])(" Completed ");function w(e,t,n,c,w,E){var k=Object(a["E"])("CustomAdminBtn");return Object(a["w"])(),Object(a["g"])("div",r,[Object(a["h"])("table",null,[c.exams.length?(Object(a["w"])(),Object(a["g"])("tbody",o,[u,(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(c.exams,(function(e){return Object(a["w"])(),Object(a["g"])("tr",{key:e.id},[Object(a["h"])("td",d,[Object(a["h"])("span",{onClick:function(t){return c.handleStartExam(e)}}," #"+Object(a["H"])(c.cutHash(e.exam_id)),9,s)]),Object(a["h"])("td",l,[Object(a["h"])("span",null,Object(a["H"])(e.Exam_name),1)]),Object(a["h"])("td",null,[Object(a["h"])("div",b,[Object(a["h"])("span",f,Object(a["H"])(c.dateF(e.Exam_start_date)),1),Object(a["h"])("span",m,Object(a["H"])(c.timeF(e.Exam_start_date,e.Exam_start_time)),1)])]),Object(a["h"])("td",null,[Object(a["h"])("div",j,[Object(a["h"])("span",O,Object(a["H"])(c.dateF(e.Exam_end_date)),1),Object(a["h"])("span",p,Object(a["H"])(c.timeF(e.Exam_end_date,e.Exam_end_time)),1)])]),Object(a["h"])("td",h,[Object(a["h"])("span",null,[Object(a["h"])("div",x,[e.isNotYetStarted?(Object(a["w"])(),Object(a["e"])(k,{key:0,style:Object(a["s"])({fontSize:"0.98rem",borderRadius:"15px",padding:"1rem 1.2rem"}),type:"primary",rounded:!0,disabled:!0},{default:Object(a["M"])((function(){return[v]})),_:1},8,["style"])):Object(a["f"])("",!0),e.isExpired||e.isNotYetStarted||e.hasExamAlreadyGiven?Object(a["f"])("",!0):(Object(a["w"])(),Object(a["e"])(k,{key:1,style:Object(a["s"])({fontSize:"0.98rem",borderRadius:"15px",padding:"1rem 1.2rem"}),type:"info",rounded:!0,onOnClick:function(t){return c.handleStartExam(e)}},{default:Object(a["M"])((function(){return[g]})),_:2},1032,["style","onOnClick"])),e.isExpired?(Object(a["w"])(),Object(a["e"])(k,{key:2,style:Object(a["s"])({fontSize:"0.98rem",borderRadius:"15px",padding:"1rem 1.2rem"}),type:"warning",rounded:!0,disabled:!0},{default:Object(a["M"])((function(){return[y]})),_:1},8,["style"])):Object(a["f"])("",!0),e.hasExamAlreadyGiven?(Object(a["w"])(),Object(a["e"])(k,{key:3,style:Object(a["s"])({fontSize:"0.98rem",borderRadius:"15px",padding:"1rem 1.2rem"}),type:"primary",rounded:!0,disabled:!0},{default:Object(a["M"])((function(){return[_]})),_:1},8,["style"])):Object(a["f"])("",!0)])])])])})),128))])):(Object(a["w"])(),Object(a["g"])("span",i," This exam pack has no exam.. "))])])}n("4de4"),n("d3b7"),n("a15b"),n("ac1f"),n("1276");var E=n("a1e9"),k=n("5c40"),S=n("6c02"),Y=n("5502"),D=n("5a0c"),C=n.n(D),I=n("6a47"),M=n("2934"),H={name:"ExamUnpack",setup:function(){var e=Object(S["c"])(),t=Object(S["d"])(),n=Object(Y["b"])(),a=Object(E["l"])(window.innerWidth);console.log("unpack"),Object(k["D"])((function(){a.value=window.innerWidth})),Object(k["Y"])((function(){console.log(a.value)}));var c=Object(E["c"])((function(){return n.state.examPackState.examLists})),r=e.params.packId,i=Object(E["c"])((function(){return c.value.filter((function(e){return e.exam_pack==r}))})),o=Object(E["c"])((function(){return function(e){return e.split("").filter((function(e){return"#"!=e&&e})).join("")}})),u=Object(E["c"])((function(){return function(e){return C()(e).format("DD/MM/YYYY")}})),d=Object(E["c"])((function(){return function(e,t){var n=C()(e+t).format("YYYY-MM-DD hh:mm:ss A");return C()(n).format("hh:mm A")}})),s=function(e){if(e.isExpired||Object(M["b"])(e.Exam_end_date,e.Exam_end_time))localStorage.getItem("deadline".concat(e.id))&&(console.log("what to do expired"),localStorage.removeItem("deadline".concat(e.id)));else{if(localStorage.getItem("deadline".concat(e.id)))console.log("came previously");else{var n=e.exam_total_time,a=Date.parse(new Date),c=new Date(a+60*n*1e3),r=Object(E["c"])((function(){return C()(c).format("YYYY-MM-DD HH:mm:ss")}));localStorage.setItem("deadline".concat(e.id),r.value)}var i=t.resolve({name:"ExamPage",params:{id:e.id}});window.open(i.href,"_blank")}};return{exams:i,cutHash:o,dateF:u,timeF:d,handleStartExam:s}},components:{CustomAdminBtn:I["a"]}},R=(n("0724"),n("6b0d")),A=n.n(R);const F=A()(H,[["render",w],["__scopeId","data-v-be6de87e"]]);t["default"]=F},d784:function(e,t,n){"use strict";n("ac1f");var a=n("e330"),c=n("6eeb"),r=n("9263"),i=n("d039"),o=n("b622"),u=n("9112"),d=o("species"),s=RegExp.prototype;e.exports=function(e,t,n,l){var b=o(e),f=!i((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),m=f&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[d]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!f||!m||n){var j=a(/./[b]),O=t(b,""[e],(function(e,t,n,c,i){var o=a(e),u=t.exec;return u===r||u===s.exec?f&&!i?{done:!0,value:j(t,n,c)}:{done:!0,value:o(n,t,c)}:{done:!1}}));c(String.prototype,e,O[0]),c(s,b,O[1])}l&&u(s[b],"sham",!0)}}}]);
//# sourceMappingURL=chunk-1ffd7630.d3977803.js.map