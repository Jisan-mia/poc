(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-687a54cc"],{"02d3":function(t,e,n){"use strict";n("1575")},"02f5":function(t,e,n){},1276:function(t,e,n){"use strict";var a=n("2ba4"),c=n("c65b"),r=n("e330"),i=n("d784"),u=n("44e7"),o=n("825a"),s=n("1d80"),l=n("4840"),b=n("8aa5"),d=n("50c4"),f=n("577e"),m=n("dc4a"),h=n("4dae"),p=n("14c3"),j=n("9263"),O=n("9f7f"),v=n("d039"),g=O.UNSUPPORTED_Y,x=4294967295,E=Math.min,_=[].push,w=r(/./.exec),y=r(_),k=r("".slice),C=!v((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=f(s(this)),i=void 0===n?x:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!u(t))return c(e,r,t,i);var o,l,b,d=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,O=new RegExp(t.source,m+"g");while(o=c(j,O,r)){if(l=O.lastIndex,l>p&&(y(d,k(r,p,o.index)),o.length>1&&o.index<r.length&&a(_,d,h(o,1)),b=o[0].length,p=l,d.length>=i))break;O.lastIndex===o.index&&O.lastIndex++}return p===r.length?!b&&w(O,"")||y(d,""):y(d,k(r,p)),d.length>i?h(d,0,i):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:c(e,this,t,n)}:e,[function(e,n){var a=s(this),i=void 0==e?void 0:m(e,t);return i?c(i,e,a,n):c(r,f(a),e,n)},function(t,a){var c=o(this),i=f(t),u=n(r,c,i,a,r!==e);if(u.done)return u.value;var s=l(c,RegExp),m=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"g":"y"),j=new s(g?"^(?:"+c.source+")":c,h),O=void 0===a?x:a>>>0;if(0===O)return[];if(0===i.length)return null===p(j,i)?[i]:[];var v=0,_=0,w=[];while(_<i.length){j.lastIndex=g?0:_;var C,S=p(j,g?k(i,_):i);if(null===S||(C=E(d(j.lastIndex+(g?_:0)),i.length))===v)_=b(i,_,m);else{if(y(w,k(i,v,_)),w.length===O)return w;for(var Y=1;Y<=S.length-1;Y++)if(y(w,S[Y]),w.length===O)return w;_=v=C}}return y(w,k(i,v)),w}]}),!C,g)},"14c3":function(t,e,n){var a=n("da84"),c=n("c65b"),r=n("825a"),i=n("1626"),u=n("c6b6"),o=n("9263"),s=a.TypeError;t.exports=function(t,e){var n=t.exec;if(i(n)){var a=c(n,t,e);return null!==a&&r(a),a}if("RegExp"===u(t))return c(o,t,e);throw s("RegExp#exec called on incompatible receiver")}},1575:function(t,e,n){},3984:function(t,e,n){"use strict";n("02f5")},"498a":function(t,e,n){"use strict";var a=n("23e7"),c=n("58a8").trim,r=n("c8d2");a({target:"String",proto:!0,forced:r("trim")},{trim:function(){return c(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("e330"),c=n("1d80"),r=n("577e"),i=n("5899"),u=a("".replace),o="["+i+"]",s=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),b=function(t){return function(e){var n=r(c(e));return 1&t&&(n=u(n,s,"")),2&t&&(n=u(n,l,"")),n}};t.exports={start:b(1),end:b(2),trim:b(3)}},"61a5":function(t,e,n){"use strict";n("b0c0"),n("99af");var a=n("7a23"),c=function(t){return Object(a["z"])("data-v-73164215"),t=t(),Object(a["x"])(),t},r={class:"container"},i={class:"profile"},u={class:"profile__info"},o={class:"img__container1"},s=["src"],l={class:"profile__detail"},b={class:"basic"},d={class:"name"},f={class:"institute"},m={class:"upcoming"},h=c((function(){return Object(a["h"])("h3",null,"Upcoming Exams",-1)})),p={class:"upcoming__exams-container"},j={key:0},O={class:"stats"},v=c((function(){return Object(a["h"])("div",{class:"stats__chart"},null,-1)})),g={class:"stats__cards"},x={class:"detail"},E=c((function(){return Object(a["h"])("h3",{vi:""},"Previous Exam",-1)})),_={key:0},w={key:1},y=c((function(){return Object(a["h"])("tr",null,[Object(a["h"])("td",null,[Object(a["h"])("span",null," Exam ID ")]),Object(a["h"])("td",null,[Object(a["h"])("span",null," Exam Name ")]),Object(a["h"])("td",null,[Object(a["h"])("span",null," Score ")]),Object(a["h"])("td",null,[Object(a["h"])("span",null," Negative Marking ")]),Object(a["h"])("td",null,[Object(a["h"])("span",null," Answer Sheet ")])],-1)})),k={class:"id"},C={class:"exam_name"},S={class:"scores"},Y={class:"scores"},D=c((function(){return Object(a["h"])("td",{class:"answer__sheet"},[Object(a["h"])("span",null," View/Download ")],-1)}));function M(t,e,n,c,M,H){var U=Object(a["E"])("UpcomingExamCard"),A=Object(a["E"])("DashboardStatsCountCard");return Object(a["w"])(),Object(a["g"])("div",r,[Object(a["h"])("div",i,[Object(a["h"])("div",u,[Object(a["h"])("div",o,[Object(a["h"])("img",{src:c.imageUrl(c.profile.Profile_image),alt:""},null,8,s)]),Object(a["h"])("div",l,[Object(a["h"])("p",b,Object(a["H"])(c.profile.board)+" | "+Object(a["H"])(c.profile.level)+" "+Object(a["H"])(c.profile.batch)+" | Science",1),Object(a["h"])("h3",d,Object(a["H"])(c.profile.name),1),Object(a["h"])("p",f,Object(a["H"])(c.profile.institution),1)])]),Object(a["h"])("div",m,[h,Object(a["h"])("div",p,[0==c.upcomingExams.length?(Object(a["w"])(),Object(a["g"])("p",j," There is no upcoming exams ")):Object(a["f"])("",!0),(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(c.upcomingExams,(function(t){return Object(a["w"])(),Object(a["g"])("div",{class:"box",key:t.id},[Object(a["k"])(U,{upcomingExam:t,onUpcomingExam:c.handleClickUpcomingExam},null,8,["upcomingExam","onUpcomingExam"])])})),128))])])]),Object(a["h"])("div",O,[v,Object(a["h"])("div",g,[Object(a["k"])(A,{label:"Completed Exams",value:"25"}),Object(a["k"])(A,{label:"Average Mark",value:"66.67%"}),Object(a["k"])(A,{label:"Passed",value:"75%"}),Object(a["k"])(A,{label:"Failed",value:"25%"})])]),Object(a["h"])("div",x,[E,0===c.previousExam.length?(Object(a["w"])(),Object(a["g"])("p",_,"You didn't take any exam yet")):Object(a["f"])("",!0),0!==c.previousExam.length?(Object(a["w"])(),Object(a["g"])("table",w,[Object(a["h"])("tbody",null,[y,(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(c.previousExam,(function(t){return Object(a["w"])(),Object(a["g"])("tr",{key:t.examId},[Object(a["h"])("td",k,[Object(a["h"])("span",null,Object(a["H"])(t.exam_id),1)]),Object(a["h"])("td",C,[Object(a["h"])("span",null,Object(a["H"])(c.strJoin(t.Exam_name)),1)]),Object(a["h"])("td",S,[Object(a["h"])("span",null,Object(a["H"])("".concat(t.score,"/").concat(t.total_mark)),1)]),Object(a["h"])("td",Y,[Object(a["h"])("span",null,Object(a["H"])(t.negative_marking),1)]),D])})),128))])])):Object(a["f"])("",!0)])])}n("4de4"),n("d3b7"),n("fb6a"),n("caad"),n("2532"),n("a15b"),n("ac1f"),n("1276");var H=n("a1e9"),U={class:"card"},A={class:"label"},I={class:"value"};function P(t,e,n,c,r,i){return Object(a["w"])(),Object(a["g"])("div",U,[Object(a["h"])("p",A,Object(a["H"])(n.label),1),Object(a["h"])("h3",I,Object(a["H"])(n.value),1)])}var R={name:"DashboardStatsCountCard",props:["label","value"]},T=(n("a092"),n("6b0d")),N=n.n(T);const J=N()(R,[["render",P],["__scopeId","data-v-5f703693"]]);var F=J,L={class:"img__container"},$=["src"],z={class:"text"};function V(t,e,n,c,r,i){return Object(a["w"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("div",L,[Object(a["h"])("img",{src:c.upcomingExam.cover_photo,alt:""},null,8,$)]),Object(a["h"])("div",z,[Object(a["h"])("h3",{onClick:e[0]||(e[0]=function(e){return t.$emit("upcoming-exam",c.upcomingExam)})},Object(a["H"])(c.upcomingExam.Exam_name),1),Object(a["h"])("p",null,Object(a["H"])(c.startTime)+" | "+Object(a["H"])(c.dayName)+", "+Object(a["H"])(c.startDate),1)])],64)}n("498a");var W=n("5a0c"),q=n.n(W),B={name:"UpcomingExamCard",props:["upcomingExam"],emits:["upcoming-exam"],setup:function(t){var e=t.upcomingExam,n=Object(H["c"])((function(){return q()(e.Exam_start_date).format("DD/MM/YYYY")})),a=q()(e.Exam_start_date+e.Exam_start_time).format("YYYY-MM-DD hh:mm:ss A"),c=q()(a).format("hh:mm A"),r=Object(H["l"])(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),i=Object(H["c"])((function(){return q()(e.Exam_start_date).day()}));console.log(i.value);var u=r.value[i.value];console.log(u);var o=function(t){return t.trim().toLowerCase().split(" ").join("-")};return{upcomingExam:e,titleToUrl:o,startDate:n,dayName:u,startTime:c}}};n("3984");const G=N()(B,[["render",V],["__scopeId","data-v-24428729"]]);var K=G,Q=n("5502"),X={components:{DashboardStatsCountCard:F,UpcomingExamCard:K},name:"StudentDashboard",setup:function(){var t=Object(Q["b"])(),e=Object(H["c"])((function(){return t.state.userState.profile})),n=Object(H["c"])((function(){return t.state.reportingState.reportings})),a=Object(H["c"])((function(){return t.state.examPackState.examLists})),c=q()().format("YYYY-MM-DD hh:mm:ss A"),r=Object(H["c"])((function(){return a.value.filter((function(t){var e=q()(t.Exam_start_date+t.Exam_start_time).format("YYYY-MM-DD hh:mm:ss A");return q()(e).diff(c,"hour")>0&&t}))})),i=Object(H["c"])((function(){return r.value.slice(Math.max(r.value.length-2,1))})),u=Object(H["c"])((function(){return n.value.slice(Math.max(n.value.length-3,1))})),o=Object(H["c"])((function(){return function(t){return t.includes("http://www.exam.poc.ac")?t:"http://www.exam.poc.ac".concat(t)}})),s=(Object(H["l"])([{id:1,examName:"Chemistry 1st Paper",date:"10:30 AM | Sunday, 19/10/2021"},{id:2,examName:"Chemistry 1st Paper",date:"10:30 AM | Sunday, 19/10/2021"}]),function(t){}),l=function(t){return t.split(" ").join("-")};return{previousExam:u,upcomingExams:i,handleClickUpcomingExam:s,strJoin:l,profile:e,imageUrl:o}}};n("02d3");const Z=N()(X,[["render",M],["__scopeId","data-v-73164215"]]);e["a"]=Z},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"99af":function(t,e,n){"use strict";var a=n("23e7"),c=n("da84"),r=n("d039"),i=n("e8b5"),u=n("861d"),o=n("7b0b"),s=n("07fa"),l=n("8418"),b=n("65f0"),d=n("1dde"),f=n("b622"),m=n("2d00"),h=f("isConcatSpreadable"),p=9007199254740991,j="Maximum allowed index exceeded",O=c.TypeError,v=m>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=d("concat"),x=function(t){if(!u(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},E=!v||!g;a({target:"Array",proto:!0,forced:E},{concat:function(t){var e,n,a,c,r,i=o(this),u=b(i,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?i:arguments[e],x(r)){if(c=s(r),d+c>p)throw O(j);for(n=0;n<c;n++,d++)n in r&&l(u,d,r[n])}else{if(d>=p)throw O(j);l(u,d++,r)}return u.length=d,u}})},a092:function(t,e,n){"use strict";n("c32a")},a15b:function(t,e,n){"use strict";var a=n("23e7"),c=n("e330"),r=n("44ad"),i=n("fc6a"),u=n("a640"),o=c([].join),s=r!=Object,l=u("join",",");a({target:"Array",proto:!0,forced:s||!l},{join:function(t){return o(i(this),void 0===t?",":t)}})},c32a:function(t,e,n){},c8d2:function(t,e,n){var a=n("5e77").PROPER,c=n("d039"),r=n("5899"),i="​᠎";t.exports=function(t){return c((function(){return!!r[t]()||i[t]()!==i||a&&r[t].name!==t}))}},d784:function(t,e,n){"use strict";n("ac1f");var a=n("e330"),c=n("6eeb"),r=n("9263"),i=n("d039"),u=n("b622"),o=n("9112"),s=u("species"),l=RegExp.prototype;t.exports=function(t,e,n,b){var d=u(t),f=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),m=f&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!f||!m||n){var h=a(/./[d]),p=e(d,""[t],(function(t,e,n,c,i){var u=a(t),o=e.exec;return o===r||o===l.exec?f&&!i?{done:!0,value:h(e,n,c)}:{done:!0,value:u(n,e,c)}:{done:!1}}));c(String.prototype,t,p[0]),c(l,d,p[1])}b&&o(l[d],"sham",!0)}}}]);
//# sourceMappingURL=chunk-687a54cc.7d11b13d.js.map