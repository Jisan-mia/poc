(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-689b2704"],{"067b":function(e,t,n){"use strict";n("26b8")},"0700":function(e,t,n){"use strict";n("e677")},"0905":function(e,t,n){"use strict";n("527e")},"0c73":function(e,t,n){"use strict";n("71ad")},"0e6e":function(e,t,n){},"26b8":function(e,t,n){},3982:function(e,t,n){"use strict";n("9973")},"408a":function(e,t,n){var a=n("e330");e.exports=a(1..valueOf)},"483b":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),i={key:0,class:"main__container"},c={key:0},r={key:1},o={class:"btn__cont"},u={class:"wrapper"},s=Object(a["j"])(" Submit ");function l(e,t,n,l,d,b){var m=Object(a["E"])("ExamPageTopBar"),p=Object(a["E"])("ExamPageExamDetail"),f=Object(a["E"])("ShowAllExamQuestions"),h=Object(a["E"])("CustomAdminBtn");return l.isNotYetStarted||l.isEnded?Object(a["f"])("",!0):(Object(a["w"])(),Object(a["g"])("div",i,[!l.isLoading||l.isNotYetStarted||l.isEnded?(Object(a["w"])(),Object(a["g"])("span",r,[Object(a["k"])(m),Object(a["k"])(p),Object(a["k"])(f),Object(a["h"])("div",o,[Object(a["h"])("div",u,[Object(a["k"])(h,{type:"gradient",rounded:!0,onOnClick:l.handleSubmitExam},{default:Object(a["M"])((function(){return[s]})),_:1},8,["onOnClick"])])])])):(Object(a["w"])(),Object(a["g"])("span",c," ... "))]))}var d=n("1da1"),b=(n("96cf"),n("7db0"),n("d3b7"),n("a1e9")),m=n("5c40"),p=n("6c02"),f=n("6601"),h=n.n(f),O=function(e){return Object(a["z"])("data-v-164bde7e"),e=e(),Object(a["x"])(),e},v=O((function(){return Object(a["h"])("div",{class:"img__container"},[Object(a["h"])("img",{src:h.a,alt:""}),Object(a["h"])("div")],-1)}));function j(e,t,n,i,c,r){var o=Object(a["E"])("Counter");return Object(a["w"])(),Object(a["g"])("header",null,[v,Object(a["k"])(o,{year:i.year,month:i.month,date:i.date,hour:i.hour,minute:i.minute,notVisible:!0},null,8,["year","month","date","hour","minute"]),Object(a["k"])(o,{year:i.tYear,month:i.tMonth,date:i.tDate,hour:i.tHour,minute:i.tMinute,examId:i.id},null,8,["year","month","date","hour","minute","examId"])])}var g=n("5502"),y=function(e){return Object(a["z"])("data-v-563c8cda"),e=e(),Object(a["x"])(),e},w={key:0},x={key:1},_=y((function(){return Object(a["h"])("span",null,": ",-1)})),k=Object(a["j"])(),S=y((function(){return Object(a["h"])("span",null,":",-1)}));function E(e,t,n,i,c,r){return i.loaded?(Object(a["w"])(),Object(a["g"])("div",{key:0,class:Object(a["r"])(["timer",[n.notVisible?"notVisible":""]])},[i.expired?i.expired?(Object(a["w"])(),Object(a["g"])("p",x,"Time Expired")):Object(a["f"])("",!0):(Object(a["w"])(),Object(a["g"])("p",w,"Time Remaining")),Object(a["h"])("h3",null,[Object(a["h"])("span",null,Object(a["H"])(i.displayHours),1),_,Object(a["h"])("span",null,Object(a["H"])(i.displayMinutes),1),k,S,Object(a["h"])("span",null,Object(a["H"])(i.displaySeconds),1)])],2)):Object(a["f"])("",!0)}n("a9e3");var I={name:"Counter",props:{year:{type:Number},month:{type:Number},date:{type:Number},hour:{type:Number},minute:{type:Number},second:{type:Number,default:function(){return 0}},millisecond:{type:Number,default:function(){return 0}},notVisible:{type:Boolean,default:function(){return!1}},examId:{type:[Number,String]}},setup:function(e){var t=Object(b["l"])(!1),n=Object(b["l"])(!1),a=Object(g["b"])(),i=Object(p["d"])(),c=Object(b["c"])((function(){return a.state.examResult.isExamSubmitted})),r=Object(b["c"])((function(){return new Date(e.year,e.month,e.date,e.hour,e.minute,e.second,e.millisecond)})),o=Object(b["l"])(0),u=Object(b["l"])(0),s=Object(b["l"])(0),l=Object(b["l"])(0),f=Object(b["c"])((function(){return 1e3})),h=Object(b["c"])((function(){return 60*f.value})),O=Object(b["c"])((function(){return 60*h.value})),v=Object(b["c"])((function(){return 24*O.value})),j=function(e){return e<10?"0"+e:e};console.log(r.value,new Date);var y=function(){var b=setInterval(Object(d["a"])(regeneratorRuntime.mark((function d(){var m,p,g,y,w,x,_;return regeneratorRuntime.wrap((function(d){while(1)switch(d.prev=d.next){case 0:if(m=new Date,p=r.value.getTime()-m.getTime(),!(p<0)){d.next=17;break}return clearInterval(b),n.value=!0,t.value=!0,localStorage.removeItem("deadline".concat(e.examId)),d.prev=7,d.next=10,a.dispatch("examResult/submitExamResult");case 10:c.value&&(a.commit("examResult/setExamIsSubmitted",!1),g=i.resolve({path:"/dashboard"}),window.open(g.href,"_blank"),window.close()),d.next=16;break;case 13:d.prev=13,d.t0=d["catch"](7),console.log(d.t0);case 16:return d.abrupt("return");case 17:y=Math.floor(p/v.value),w=Math.floor(p%v.value/O.value),x=Math.floor(p%O.value/h.value),_=Math.floor(p%h.value/f.value),s.value=j(x),l.value=j(_),u.value=j(w),o.value=j(y),t.value=!0;case 26:case"end":return d.stop()}}),d,null,[[7,13]])}))),1e3)};return Object(m["D"])((function(){y()})),{displayDays:o,displayHours:u,displayMinutes:s,displaySeconds:l,loaded:t,expired:n}}},T=(n("7d51"),n("6b0d")),H=n.n(T);const N=H()(I,[["render",E],["__scopeId","data-v-563c8cda"]]);var Q=N,A=n("5a0c"),L=n.n(A),M=(n("2934"),{name:"ExamPageTopBar",setup:function(){var e=Object(p["c"])(),t=Object(g["b"])(),n=(Object(b["c"])((function(){return t.state.examPackState.examPacks})),Object(b["c"])((function(){return t.state.examPackState.examLists}))),a=e.params.id,i=Object(b["c"])((function(){return n.value.find((function(e){return e.id==a}))})),c=i.value,r=c.exam_total_time,o=c.Exam_end_date,u=c.Exam_end_time;console.log(r),console.log(i.value,o,u);var s=Object(b["c"])((function(){L()().format("YYYY-MM-DD HH:mm:ss A");var e=L()(o+u).format("YYYY-MM-DD HH:mm:ss");return e}));console.log(s.value,"\n",L()(s.value).get("year"),L()(s.value).get("month")+1,L()(s.value).get("date"),L()(s.value).get("hour"),L()(s.value).get("minute"),L()(s.value).get("second"));var l=Object(b["c"])((function(){return L()(s.value).get("year")})),d=Object(b["c"])((function(){return L()(s.value).get("month")})),m=Object(b["c"])((function(){return L()(s.value).get("date")})),f=Object(b["c"])((function(){return L()(s.value).get("hour")})),h=Object(b["c"])((function(){return L()(s.value).get("minute")})),O=(Object(b["c"])((function(){return L()(s.value).get("second")})),i.value.exam_total_time),v=Date.parse(new Date),j=new Date(v+60*O*1e3);console.log(L()(j).format("YYYY-MM-DD HH:mm:ss"));Object(b["c"])((function(){return L()(j).format("YYYY-MM-DD HH:mm:ss")}));var y=Object(b["c"])((function(){return localStorage.getItem("deadline".concat(i.value.id))})),w=Object(b["c"])((function(){return L()(y.value).get("year")})),x=Object(b["c"])((function(){return L()(y.value).get("month")})),_=Object(b["c"])((function(){return L()(y.value).get("date")})),k=Object(b["c"])((function(){return L()(y.value).get("hour")})),S=Object(b["c"])((function(){return L()(y.value).get("minute")}));return{exam_total_time:r,year:l,month:d,date:m,hour:f,minute:h,tYear:w,tMonth:x,tDate:_,tHour:k,tMinute:S,id:a}},components:{Counter:Q}});n("0905");const C=H()(M,[["render",j],["__scopeId","data-v-164bde7e"]]);var D=C,V=function(e){return Object(a["z"])("data-v-3cc32219"),e=e(),Object(a["x"])(),e},P={class:"header__container"},q={class:"item1"},R={class:"exam__img"},Y=["src"],B={class:"item2"},F={class:"item3"},W=V((function(){return Object(a["h"])("h3",null,"Assigned Student",-1)})),U={class:"more__info"},J={class:"group"},$=V((function(){return Object(a["h"])("p",{class:"label"},"Batch",-1)})),z={class:"value"},G={class:"group"},X=V((function(){return Object(a["h"])("p",{class:"label"}," Exam Pack ",-1)})),K={class:"value"},Z=V((function(){return Object(a["h"])("h3",null,"Marking",-1)})),ee={class:"more__info mark__info"},te={class:"group"},ne=V((function(){return Object(a["h"])("p",{class:"label"},"Total Mark",-1)})),ae={class:"value"},ie={class:"group"},ce=V((function(){return Object(a["h"])("p",{class:"label"},"Per Question Mark",-1)})),re={class:"value"},oe={class:"group"},ue=V((function(){return Object(a["h"])("p",{class:"label"},"Pass Mark",-1)})),se={class:"value"},le={class:"item4"},de=V((function(){return Object(a["h"])("h4",null,"Negative Marking: ",-1)})),be={class:"negative__amount"},me=V((function(){return Object(a["h"])("h4",null,"Amounts Per Mistake: ",-1)})),pe={class:"amount__box"};function fe(e,t,n,i,c,r){var o=Object(a["E"])("ToggleSwitch");return Object(a["w"])(),Object(a["g"])("div",P,[Object(a["h"])("div",q,[Object(a["h"])("div",R,[Object(a["h"])("img",{src:i.currentExam.cover_photo,alt:""},null,8,Y)])]),Object(a["h"])("div",B,[Object(a["h"])("h3",null,Object(a["H"])(i.currentExam.Exam_name),1),Object(a["h"])("p",null,Object(a["H"])(i.currentExam.details),1),Object(a["h"])("p",null,Object(a["H"])(i.timeF(i.currentExam.Exam_end_date,i.currentExam.Exam_end_time))+" | "+Object(a["H"])(i.dayName)+", "+Object(a["H"])(i.endDate),1)]),Object(a["h"])("div",F,[Object(a["h"])("div",null,[W,Object(a["h"])("div",U,[Object(a["h"])("div",J,[$,Object(a["h"])("p",z,Object(a["H"])(i.currentExam.level)+Object(a["H"])(i.currentExam.batch),1)]),Object(a["h"])("div",G,[X,Object(a["h"])("p",K,Object(a["H"])(i.currentExamPack.ExamPack_name),1)])])]),Object(a["h"])("div",null,[Z,Object(a["h"])("div",ee,[Object(a["h"])("div",te,[ne,Object(a["h"])("p",ae,Object(a["H"])(i.currentExam.total_mark),1)]),Object(a["h"])("div",ie,[ce,Object(a["h"])("p",re,Object(a["H"])(i.currentExam.mark_per_question),1)]),Object(a["h"])("div",oe,[ue,Object(a["h"])("p",se,Object(a["H"])(i.currentExam.pass_mark),1)])])])]),Object(a["h"])("div",le,[Object(a["h"])("div",null,[de,Object(a["h"])("span",null,[Object(a["k"])(o,{modelValue:i.currentExam.isNegativeMarking,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.currentExam.isNegativeMarking=e}),disabled:!0},null,8,["modelValue"])])]),Object(a["h"])("div",be,[me,Object(a["h"])("div",pe,[Object(a["h"])("span",null,Object(a["H"])(i.currentExam.amount_per_mistake),1)])])])])}var he=function(e){return Object(a["z"])("data-v-6ec870a4"),e=e(),Object(a["x"])(),e},Oe=he((function(){return Object(a["h"])("div",{class:"circle"},null,-1)})),ve=[Oe];function je(e,t,n,i,c,r){return Object(a["w"])(),Object(a["g"])("div",{class:"toggle__container",onClick:t[0]||(t[0]=function(){return i.onToggleSwitch&&i.onToggleSwitch.apply(i,arguments)})},[Object(a["h"])("div",{class:Object(a["r"])(["wrapper",n.modelValue?"on":"off",n.disabled?"disable":""])},ve,2)])}var ge={name:"ToggleSwitch",props:{modelValue:{type:Boolean,default:function(){return!1}},disabled:{type:Boolean,default:function(){return!1}}},setup:function(e,t){var n=function(){e.disabled||t.emit("update:modelValue",!e.modelValue)};return{onToggleSwitch:n}}};n("3982");const ye=H()(ge,[["render",je],["__scopeId","data-v-6ec870a4"]]);var we=ye,xe={name:"ExamPageExamDetail",components:{ToggleSwitch:we},setup:function(){var e=Object(p["c"])(),t=Object(g["b"])(),n=Object(b["c"])((function(){return t.state.examPackState.examPacks})),a=Object(b["c"])((function(){return t.state.examPackState.examLists})),i=e.params.id,c=Object(b["c"])((function(){return a.value.find((function(e){return e.id==i}))})),r=Object(b["c"])((function(){return n.value.find((function(e){return e.id==c.value.exam_pack}))})),o=Object(b["c"])((function(){return L()(c.value.Exam_end_date).format("DD/MM/YYYY")})),u=c.value.Exam_end_time,s=Object(b["l"])(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),l=Object(b["c"])((function(){return L()(c.value.Exam_end_date.value).day()})),d=Object(b["c"])((function(){return function(e,t){var n=L()(e+t).format("YYYY-MM-DD hh:mm:ss A");return L()(n).format("hh:mm A")}})),m=s.value[l.value];return{currentExam:c,currentExamPack:r,endDate:o,endTime:u,dayName:m,timeF:d}}};n("ee3a");const _e=H()(xe,[["render",fe],["__scopeId","data-v-3cc32219"]]);var ke=_e,Se={class:"question__container"};function Ee(e,t,n,i,c,r){var o=Object(a["E"])("ShowQuestionTypeA"),u=Object(a["E"])("ShowQuestionTypeB");return Object(a["w"])(),Object(a["g"])("div",Se,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(i.examAllQuestions,(function(e,t){return Object(a["w"])(),Object(a["g"])("div",{class:"question__card",key:e.id},["data_one"==e.type?(Object(a["w"])(),Object(a["e"])(o,{key:0,examQuestion:e,index:t+1},null,8,["examQuestion","index"])):"data_two"==e.type?(Object(a["w"])(),Object(a["e"])(u,{key:1,examQuestion:e,index:t+1},null,8,["examQuestion","index"])):Object(a["f"])("",!0)])})),128))])}var Ie={class:"one_main"},Te={key:0,class:"img__container"},He=["src"],Ne={class:"question__cont"},Qe={class:"sl"},Ae={class:"question"},Le={class:"options"};function Me(e,t,n,i,c,r){var o=Object(a["E"])("CustomRadioButton");return Object(a["w"])(),Object(a["g"])("div",Ie,[n.examQuestion.q_image?(Object(a["w"])(),Object(a["g"])("div",Te,[Object(a["h"])("img",{src:i.imageUrl(n.examQuestion.q_image),alt:""},null,8,He)])):Object(a["f"])("",!0),Object(a["h"])("div",Ne,[Object(a["h"])("div",Qe,Object(a["H"])(n.index)+". ",1),Object(a["h"])("div",Ae,[Object(a["h"])("p",null,Object(a["H"])(n.examQuestion.question_name),1),Object(a["h"])("div",Le,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(n.examQuestion.options,(function(e){return Object(a["w"])(),Object(a["e"])(o,{key:e.ans,option:e.ans,name:n.examQuestion.id,modelValue:i.selectedOption,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.selectedOption=e})},null,8,["option","name","modelValue"])})),128))])])])])}var Ce=n("5530"),De=(n("caad"),n("2532"),n("b0c0"),["checked","value","id","name"]),Ve={key:0};function Pe(e,t,n,i,c,r){return Object(a["w"])(),Object(a["g"])("label",{class:Object(a["r"])(["form-control",i.active?"active":""])},[Object(a["h"])("input",{type:"radio",checked:n.modelValue===n.option,value:n.option,id:n.option,onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",n.option)}),name:n.name},null,40,De),n.isEditOption?Object(a["f"])("",!0):(Object(a["w"])(),Object(a["g"])("span",Ve,Object(a["H"])(n.option),1))],2)}var qe={class:"form-group"},Re={key:0},Ye=["readonly","value","placeholder"],Be=["readonly","value","placeholder"];function Fe(e,t,n,i,c,r){return Object(a["w"])(),Object(a["g"])("div",qe,[n.label?(Object(a["w"])(),Object(a["g"])("label",Re,Object(a["H"])(n.label),1)):Object(a["f"])("",!0),n.isTextArea?n.isTextArea?(Object(a["w"])(),Object(a["g"])("textarea",Object(a["p"])({key:2,class:"input__field",style:Object(Ce["a"])({},n.styles)},e.$attrs,{readonly:n.readonly,value:n.modelValue,onInput:t[1]||(t[1]=function(){return i.updateValue&&i.updateValue.apply(i,arguments)}),placeholder:n.placeholder}),null,16,Be)):Object(a["f"])("",!0):(Object(a["w"])(),Object(a["g"])("input",Object(a["p"])({key:1,class:"input__field"},e.$attrs,{readonly:n.readonly,value:n.modelValue,onInput:t[0]||(t[0]=function(){return i.updateValue&&i.updateValue.apply(i,arguments)}),placeholder:n.placeholder}),null,16,Ye))])}var We={name:"AdminCustomInput",props:{label:{type:String},modelValue:{type:[String,Number]},placeholder:{type:String},readonly:{type:Boolean,default:function(){return!1}},isTextArea:{type:Boolean,default:function(){return!1}},styles:{type:Object}},setup:function(e,t){var n=function(e){t.emit("update:modelValue",e.target.value)};return{updateValue:n}}};n("0c73");const Ue=H()(We,[["render",Fe],["__scopeId","data-v-f067cba4"]]);var Je=Ue,$e={name:"CustomRadioButton",props:{modelValue:{type:String},option:{type:String},isEditOption:{type:Boolean,default:function(){return!1}},name:{type:[String,Number]}},setup:function(e,t){var n=Object(b["l"])(!1),a=Object(b["c"])((function(){return e.modelValue===e.option})),i=function(e){t.emit("update:modelValue",e.target.value)};return{onChange:i,active:n,checked:a}},components:{AdminCustomInput:Je,AdminCustomInput1:Je}};n("803e");const ze=H()($e,[["render",Pe],["__scopeId","data-v-25694303"]]);var Ge=ze,Xe={name:"ShowQuestionTypeA",props:{examQuestion:{type:Object},index:{type:Number}},setup:function(e){var t=Object(g["b"])(),n=e.examQuestion,a=Object(b["l"])(""),i=(Object(b["c"])((function(){return t.state.examResult.allSelectedAns})),Object(b["c"])((function(){return function(e){return e.includes("https://www.exam.poc.ac")?e:"https://www.exam.poc.ac".concat(e)}})));return Object(m["X"])(a,(function(){var e=Object(b["c"])((function(){return n.options.find((function(e){return e.ans===a.value}))}));e.value&&t.dispatch("examResult/selectedAnsHandle",Object(Ce["a"])({},e.value))})),{selectedOption:a,imageUrl:i}},components:{CustomRadioButton:Ge}};n("a989");const Ke=H()(Xe,[["render",Me],["__scopeId","data-v-2d840c97"]]);var Ze=Ke,et=(n("a4d3"),n("e01a"),n("b64b"),function(e){return Object(a["z"])("data-v-3c17d557"),e=e(),Object(a["x"])(),e}),tt={class:"two_main"},nt={key:0,class:"img__container"},at=["src"],it={class:"question__cont"},ct={key:0,class:"paragraph"},rt={class:"hints"},ot={class:"hints__header"},ut={class:"hints__option"},st={key:0},lt={key:1},dt={class:"options"},bt=et((function(){return Object(a["h"])("p",{class:"options__header"}," নিচের কোনটি সঠিক/Which one is correct? ",-1)})),mt={class:"item__cont"};function pt(e,t,n,i,c,r){var o,u=Object(a["E"])("CustomRadioButton");return Object(a["w"])(),Object(a["g"])("div",tt,[n.examQuestion.Q_image?(Object(a["w"])(),Object(a["g"])("div",nt,[Object(a["h"])("img",{src:i.imageUrl(n.examQuestion.Q_image),alt:""},null,8,at)])):Object(a["f"])("",!0),Object(a["h"])("div",it,[null!==(o=n.examQuestion)&&void 0!==o&&o.description?(Object(a["w"])(),Object(a["g"])("div",ct,Object(a["H"])(n.examQuestion.description),1)):Object(a["f"])("",!0),Object(a["h"])("div",rt,[Object(a["h"])("p",ot,[Object(a["h"])("span",null,Object(a["H"])(n.index)+".",1),Object(a["h"])("span",null,Object(a["H"])(n.examQuestion.question_name),1)]),Object(a["h"])("div",ut,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(Object.keys(i.allHints),(function(e){return Object(a["w"])(),Object(a["g"])("p",{key:e},[i.allHints[e]?(Object(a["w"])(),Object(a["g"])("span",st,Object(a["H"])(e)+". ",1)):Object(a["f"])("",!0),i.allHints[e]?(Object(a["w"])(),Object(a["g"])("span",lt,Object(a["H"])(i.allHints[e]),1)):Object(a["f"])("",!0)])})),128))])]),Object(a["h"])("div",dt,[bt,Object(a["h"])("div",mt,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(n.examQuestion.options,(function(e){return Object(a["w"])(),Object(a["e"])(u,{key:e.id,option:e.ans,name:e.id,modelValue:i.selectedOption,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.selectedOption=e})},null,8,["option","name","modelValue"])})),128))])])])])}var ft={name:"ShowQuestionTypeB",components:{CustomRadioButton:Ge},props:{examQuestion:{type:Object},index:{type:Number}},setup:function(e){var t=Object(g["b"])(),n=e.examQuestion,a=(Object(b["c"])((function(){return t.state.examResult.allSelectedAns})),Object(b["c"])((function(){return function(e){return e.includes("https://www.exam.poc.ac")?e:"https://www.exam.poc.ac".concat(e)}}))),i=Object(b["c"])((function(){return{i:null===n||void 0===n?void 0:n.data_one,ii:null===n||void 0===n?void 0:n.data_two,iii:null===n||void 0===n?void 0:n.data_three,iv:null===n||void 0===n?void 0:n.data_four}})),c=Object(b["l"])("");return Object(m["X"])(c,(function(){var e=Object(b["c"])((function(){return n.options.find((function(e){return e.ans===c.value}))}));e.value&&t.dispatch("examResult/selectedAnsHandle",Object(Ce["a"])({},e.value))})),Object(m["Y"])((function(){})),{selectedOption:c,allHints:i,imageUrl:a}}};n("6ef5");const ht=H()(ft,[["render",pt],["__scopeId","data-v-3c17d557"]]);var Ot=ht,vt={class:"type3"},jt={class:"para__header"},gt={class:"para"};function yt(e,t,n,i,c,r){var o=Object(a["E"])("ShowQuestionTypeA"),u=Object(a["E"])("ShowQuestionTypeB");return Object(a["w"])(),Object(a["g"])("div",vt,[Object(a["h"])("div",jt,Object(a["H"])(n.examQuestionC.paragraphHeader),1),Object(a["h"])("div",gt,Object(a["H"])(n.examQuestionC.paragraph),1),(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(n.examQuestionC.questions,(function(e){return Object(a["w"])(),Object(a["g"])("div",{class:"question",key:e},["A"==e.type?(Object(a["w"])(),Object(a["e"])(o,{key:0,examQuestion:e},null,8,["examQuestion"])):Object(a["f"])("",!0),"B"==e.type?(Object(a["w"])(),Object(a["e"])(u,{key:1,examQuestion:e},null,8,["examQuestion"])):Object(a["f"])("",!0)])})),128))])}var wt={name:"ShowQuestionTypeC",props:{examQuestionC:{type:Object}},components:{ShowQuestionTypeA:Ze,ShowQuestionTypeB:Ot},setup:function(e){return console.log(e.examQuestionC),{}}};n("0700");const xt=H()(wt,[["render",yt]]);var _t=xt,kt={name:"ShowAllExamQuestions",setup:function(){var e=Object(g["b"])(),t=Object(b["c"])((function(){return e.state.examPackState.examQuestions}));Object(b["l"])([{id:1,questionNo:1,type:"data_one",question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",options:["Option1","Option2","Option3","Option4"]},{id:2,type:"data_two",paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",questionNo:2,hintsHeader:"Follow below information",hintsOption:{i:"this is hint one",ii:"this is hint two",iii:"this is hint three"},optionsHeader:"Which option is true",options:["i & ii","ii & iii","i & iii","i, ii, iii"]},{id:3,type:"C",paragraphHeader:"Answer the below 2 questions following the paragraph",paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",questions:[{type:"A",questionNo:3,question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",options:["Option 1 of c","Option 2 of c","Option 3 of c","Option 4 of c"]},{type:"B",questionNo:4,hintsHeader:"Follow below information",hintsOption:{i:"this is hint one",ii:"this is hint two",iii:"this is hint three"},optionsHeader:"Which option is true",options:["i & iii","i & ii","ii & iii","i, ii, iii"]}]}]);return{examAllQuestions:t}},components:{ShowQuestionTypeA:Ze,ShowQuestionTypeB:Ot,ShowQuestionTypeC:_t}};n("067b");const St=H()(kt,[["render",Ee],["__scopeId","data-v-40b36f5b"]]);var Et=St,It=n("6a47"),Tt=(n("cbcb"),{components:{ExamPageTopBar:D,ExamPageExamDetail:ke,ShowAllExamQuestions:Et,CustomAdminBtn:It["a"]},name:"ExamPage",setup:function(e){var t=Object(p["c"])(),n=Object(p["d"])(),a=Object(g["b"])(),i=t.params.id,c=Object(b["c"])((function(){return a.state.userState.user.isAuthenticated})),r=Object(b["c"])((function(){return a.state.isLoading})),o=Object(b["c"])((function(){return a.state.examResult.isExamSubmitted})),u=Object(b["c"])((function(){return a.state.userState.profile}));a.commit("setIsLoading",!0);var s=Object(b["l"])(!1),l=Object(b["l"])(!1);Object(m["A"])(Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!c.value){e.next=26;break}return e.prev=1,e.next=4,a.dispatch("userState/loadUserProfile");case 4:if(!u.value){e.next=19;break}return e.next=7,a.dispatch("examPackState/loadExamPacks");case 7:return e.next=9,a.dispatch("reportingState/loadStudentReporting");case 9:return e.next=11,a.dispatch("examPackState/loadExamLists");case 11:return e.next=13,a.dispatch("examPackState/loadExamQuestions",i);case 13:a.commit("setIsLoading",!1),t=Object(b["c"])((function(){return a.state.examPackState.examLists})),r=Object(b["c"])((function(){return t.value.find((function(e){return e.id==i}))})),r.value&&(r.value.isNotYetStarted?(a.dispatch("notifications/add",{type:"warning",message:"The Exam Not Yet Started"}),n.push("/"),l.value=!0):r.value.isExpired?(a.dispatch("notifications/add",{type:"warning",message:"The Exam has already Expired"}),n.push("/"),s.value=!0):r.value.hasExamAlreadyGiven&&(a.dispatch("notifications/add",{type:"warning",message:"You already completed this exam"}),n.push("/"))),e.next=20;break;case 19:n.push("/");case 20:e.next=24;break;case 22:e.prev=22,e.t0=e["catch"](1);case 24:e.next=27;break;case 26:n.push("/");case 27:case"end":return e.stop()}}),e,null,[[1,22]])}))));var f=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.dispatch("examResult/submitExamResult");case 3:localStorage.removeItem("deadline".concat(i)),o.value&&(a.commit("examResult/setExamIsSubmitted",!1),t=n.resolve({path:"/dashboard"}),window.open(t.href,"_blank"),window.close()),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("beforeunload",(function(e){var t="o/";return(e||window.event).returnValue=t,t})),document.addEventListener("contextmenu",(function(e){e.preventDefault()})),{isLoading:r,isEnded:s,isNotYetStarted:l,handleSubmitExam:f}}});n("9d41");const Ht=H()(Tt,[["render",l],["__scopeId","data-v-753f2cca"]]);t["default"]=Ht},"50f3":function(e,t,n){"use strict";n("bcdd")},"527e":function(e,t,n){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("e330"),i=n("1d80"),c=n("577e"),r=n("5899"),o=a("".replace),u="["+r+"]",s=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),d=function(e){return function(t){var n=c(i(t));return 1&e&&(n=o(n,s,"")),2&e&&(n=o(n,l,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},6877:function(e,t,n){},"6a47":function(e,t,n){"use strict";var a=n("7a23"),i=["disabled"],c={class:"text"};function r(e,t,n,r,o,u){return Object(a["w"])(),Object(a["g"])("button",Object(a["p"])(e.$attrs,{disabled:n.disabled,class:[n.type,n.rounded&&"round"],onClick:t[0]||(t[0]=function(t){return e.$emit("onClick")})}),[n.icon?(Object(a["w"])(),Object(a["g"])("i",{key:0,class:Object(a["r"])(["icon",n.icon])},null,2)):Object(a["f"])("",!0),Object(a["h"])("span",c,[Object(a["D"])(e.$slots,"default",{},void 0,!0)])],16,i)}var o={name:"CustomAdminBtn",emits:["onClick"],props:{icon:{type:String},type:{type:String,default:function(){return"primary"}},disabled:{type:Boolean,default:function(){return!1}},rounded:{type:Boolean,default:function(){return!1}}}},u=(n("50f3"),n("6b0d")),s=n.n(u);const l=s()(o,[["render",r],["__scopeId","data-v-47a476ae"]]);t["a"]=l},"6ef5":function(e,t,n){"use strict";n("7eec")},7156:function(e,t,n){var a=n("1626"),i=n("861d"),c=n("d2bb");e.exports=function(e,t,n){var r,o;return c&&a(r=t.constructor)&&r!==n&&i(o=r.prototype)&&o!==n.prototype&&c(e,o),e}},"71ad":function(e,t,n){},"7d51":function(e,t,n){"use strict";n("ddea")},"7eec":function(e,t,n){},"803e":function(e,t,n){"use strict";n("6877")},9973:function(e,t,n){},"9d41":function(e,t,n){"use strict";n("f6cb")},a989:function(e,t,n){"use strict";n("f4b7")},a9e3:function(e,t,n){"use strict";var a=n("83ab"),i=n("da84"),c=n("e330"),r=n("94ca"),o=n("6eeb"),u=n("1a2d"),s=n("7156"),l=n("3a9b"),d=n("d9b5"),b=n("c04e"),m=n("d039"),p=n("241c").f,f=n("06cf").f,h=n("9bf2").f,O=n("408a"),v=n("58a8").trim,j="Number",g=i[j],y=g.prototype,w=i.TypeError,x=c("".slice),_=c("".charCodeAt),k=function(e){var t=b(e,"number");return"bigint"==typeof t?t:S(t)},S=function(e){var t,n,a,i,c,r,o,u,s=b(e,"number");if(d(s))throw w("Cannot convert a Symbol value to a number");if("string"==typeof s&&s.length>2)if(s=v(s),t=_(s,0),43===t||45===t){if(n=_(s,2),88===n||120===n)return NaN}else if(48===t){switch(_(s,1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+s}for(c=x(s,2),r=c.length,o=0;o<r;o++)if(u=_(c,o),u<48||u>i)return NaN;return parseInt(c,a)}return+s};if(r(j,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var E,I=function(e){var t=arguments.length<1?0:g(k(e)),n=this;return l(y,n)&&m((function(){O(n)}))?s(Object(t),n,I):t},T=a?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),H=0;T.length>H;H++)u(g,E=T[H])&&!u(I,E)&&h(I,E,f(g,E));I.prototype=y,y.constructor=I,o(i,j,I)}},b79e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){var e=this;this.locked=new Map,this.addToLocked=function(t,n){var a=e.locked.get(t);void 0===a?void 0===n?e.locked.set(t,[]):e.locked.set(t,[n]):void 0!==n&&(a.unshift(n),e.locked.set(t,a))},this.isLocked=function(t){return e.locked.has(t)},this.lock=function(t){return new Promise((function(n,a){e.isLocked(t)?e.addToLocked(t,n):(e.addToLocked(t),n())}))},this.unlock=function(t){var n=e.locked.get(t);if(void 0!==n&&0!==n.length){var a=n.pop();e.locked.set(t,n),void 0!==a&&setTimeout(a,0)}else e.locked.delete(t)}}return e.getInstance=function(){return void 0===e.instance&&(e.instance=new e),e.instance},e}();function i(){return a.getInstance()}t.default=i},bcdd:function(e,t,n){},cbcb:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(i,c){function r(e){try{u(a.next(e))}catch(t){c(t)}}function o(e){try{u(a["throw"](e))}catch(t){c(t)}}function u(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(r,o)}u((a=a.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,a,i,c,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return c={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function o(e){return function(t){return u([e,t])}}function u(c){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=2&c[0]?a["return"]:c[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,c[1])).done)return i;switch(a=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,a=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(6===c[0]||2===c[0])){r=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){r.label=c[1];break}if(6===c[0]&&r.label<i[1]){r.label=i[1],i=c;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(c);break}i[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(o){c=[6,o],a=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var c=n("b79e"),r="browser-tabs-lock-key";function o(e){return new Promise((function(t){return setTimeout(t,e)}))}function u(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",n="",a=0;a<e;a++){var i=Math.floor(Math.random()*t.length);n+=t[i]}return n}function s(){return Date.now().toString()+u(15)}var l=function(){function e(){this.acquiredIatSet=new Set,this.id=s(),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),void 0===e.waiters&&(e.waiters=[])}return e.prototype.acquireLock=function(t,n){return void 0===n&&(n=5e3),a(this,void 0,void 0,(function(){var a,c,s,l,d,b,m;return i(this,(function(i){switch(i.label){case 0:a=Date.now()+u(4),c=Date.now()+n,s=r+"-"+t,l=window.localStorage,i.label=1;case 1:return Date.now()<c?[4,o(30)]:[3,8];case 2:return i.sent(),d=l.getItem(s),null!==d?[3,5]:(b=this.id+"-"+t+"-"+a,[4,o(Math.floor(25*Math.random()))]);case 3:return i.sent(),l.setItem(s,JSON.stringify({id:this.id,iat:a,timeoutKey:b,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,o(30)];case 4:return i.sent(),m=l.getItem(s),null!==m&&(m=JSON.parse(m),m.id===this.id&&m.iat===a)?(this.acquiredIatSet.add(a),this.refreshLockWhileAcquired(s,a),[2,!0]):[3,7];case 5:return e.lockCorrector(),[4,this.waitForSomethingToChange(c)];case 6:i.sent(),i.label=7;case 7:return a=Date.now()+u(4),[3,1];case 8:return[2,!1]}}))}))},e.prototype.refreshLockWhileAcquired=function(e,t){return a(this,void 0,void 0,(function(){var n=this;return i(this,(function(r){return setTimeout((function(){return a(n,void 0,void 0,(function(){var n,a;return i(this,(function(i){switch(i.label){case 0:return[4,c.default().lock(t)];case 1:return i.sent(),this.acquiredIatSet.has(t)?(n=window.localStorage,a=n.getItem(e),null===a?(c.default().unlock(t),[2]):(a=JSON.parse(a),a.timeRefreshed=Date.now(),n.setItem(e,JSON.stringify(a)),c.default().unlock(t),this.refreshLockWhileAcquired(e,t),[2])):(c.default().unlock(t),[2])}}))}))}),1e3),[2]}))}))},e.prototype.waitForSomethingToChange=function(t){return a(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){var a=!1,i=Date.now(),c=50,r=!1;function o(){if(r||(window.removeEventListener("storage",o),e.removeFromWaiting(o),clearTimeout(u),r=!0),!a){a=!0;var t=c-(Date.now()-i);t>0?setTimeout(n,t):n()}}window.addEventListener("storage",o),e.addToWaiting(o);var u=setTimeout(o,Math.max(0,t-Date.now()))}))];case 1:return n.sent(),[2]}}))}))},e.addToWaiting=function(t){this.removeFromWaiting(t),void 0!==e.waiters&&e.waiters.push(t)},e.removeFromWaiting=function(t){void 0!==e.waiters&&(e.waiters=e.waiters.filter((function(e){return e!==t})))},e.notifyWaiters=function(){if(void 0!==e.waiters){var t=e.waiters.slice();t.forEach((function(e){return e()}))}},e.prototype.releaseLock=function(e){return a(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.releaseLock__private__(e)];case 1:return[2,t.sent()]}}))}))},e.prototype.releaseLock__private__=function(t){return a(this,void 0,void 0,(function(){var n,a,o;return i(this,(function(i){switch(i.label){case 0:return n=window.localStorage,a=r+"-"+t,o=n.getItem(a),null===o?[2]:(o=JSON.parse(o),o.id!==this.id?[3,2]:[4,c.default().lock(o.iat)]);case 1:i.sent(),this.acquiredIatSet.delete(o.iat),n.removeItem(a),c.default().unlock(o.iat),e.notifyWaiters(),i.label=2;case 2:return[2]}}))}))},e.lockCorrector=function(){for(var t=Date.now()-5e3,n=window.localStorage,a=Object.keys(n),i=!1,c=0;c<a.length;c++){var o=a[c];if(o.includes(r)){var u=n.getItem(o);null!==u&&(u=JSON.parse(u),(void 0===u.timeRefreshed&&u.timeAcquired<t||void 0!==u.timeRefreshed&&u.timeRefreshed<t)&&(n.removeItem(o),i=!0))}}i&&e.notifyWaiters()},e.waiters=void 0,e}();t.default=l},ddea:function(e,t,n){},e677:function(e,t,n){},ee3a:function(e,t,n){"use strict";n("0e6e")},f4b7:function(e,t,n){},f6cb:function(e,t,n){}}]);
//# sourceMappingURL=chunk-689b2704.7a6474fe.js.map