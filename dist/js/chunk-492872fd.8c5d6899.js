(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-492872fd"],{"050d":function(e,t,n){},1962:function(e,t,n){"use strict";var i=n("7a23"),r=function(e){return Object(i["z"])("data-v-967948d2"),e=e(),Object(i["x"])(),e},s={class:"container"},o=r((function(){return Object(i["h"])("span",null,"+88",-1)})),a=["value","placeholder"];function c(e,t,n,r,c,u){return Object(i["w"])(),Object(i["g"])("div",s,[o,Object(i["h"])("input",Object(i["p"])({min:"0",type:"number",value:n.modelValue,onInput:t[0]||(t[0]=function(){return r.updateValue&&r.updateValue.apply(r,arguments)}),placeholder:n.placeholder},e.$attrs),null,16,a)])}n("a9e3");var u={name:"CustomPhoneInput",props:{modelValue:{type:[Number,String]},placeholder:{type:String}},setup:function(e,t){var n=function(e){t.emit("update:modelValue",e.target.value)};return{updateValue:n}}},l=(n("cbfe"),n("6b0d")),d=n.n(l);const h=d()(u,[["render",c],["__scopeId","data-v-967948d2"]]);t["a"]=h},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return L})),n.d(t,"g",(function(){return S})),n.d(t,"h",(function(){return _})),n.d(t,"i",(function(){return E})),n.d(t,"j",(function(){return M})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return w})),n.d(t,"n",(function(){return h})),n.d(t,"o",(function(){return p})),n.d(t,"p",(function(){return u})),n.d(t,"q",(function(){return d})),n.d(t,"r",(function(){return k})),n.d(t,"s",(function(){return T})),n.d(t,"t",(function(){return f}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let d=(15&o)<<2|c>>6,h=63&c;a||(h=64,s||(d=64)),i.push(n[u],n[l],n[d],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):r(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,c=a?n[e.charAt(r)]:64;++r;const u=r<e.length,l=u?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==l)throw Error();const d=t<<2|o>>4;if(i.push(d),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==l){const e=c<<6&192|l;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function l(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function h(){const e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function p(){return"object"===typeof indexedDB}function f(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}function m(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g="FirebaseError";class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=g,Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?y(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new v(i,o,n);return a}}function y(e,t){return e.replace(I,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}const I=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(O(n)&&O(s)){if(!_(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function O(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function T(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function E(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){const n=new R(e,t);return n.subscribe.bind(n)}class R{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=C(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=P),void 0===i.error&&(i.error=P),void 0===i.complete&&(i.complete=P);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function P(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const j=1e3,N=2,A=144e5,D=.5;function L(e,t=j,n=N){const i=t*Math.pow(n,e),r=Math.round(D*i*(Math.random()-.5)*2);return Math.min(A,i+r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},"202f":function(e,t,n){},"2a4a":function(e,t,n){},"2eee":function(e,t,n){},"306e":function(e,t,n){"use strict";n("bf10")},"309d":function(e,t,n){"use strict";var i=n("7a23"),r=function(e){return Object(i["z"])("data-v-a4fd064a"),e=e(),Object(i["x"])(),e},s={key:0,class:"forgot"},o={key:0},a=r((function(){return Object(i["h"])("div",{class:"recaptcha-container",id:"recaptcha-container"},null,-1)}));function c(e,t,n,r,c,u){var l=Object(i["E"])("CustomPhoneInput"),d=Object(i["E"])("CustomLoginRegisterBtn"),h=Object(i["E"])("SubmitOtp"),p=Object(i["E"])("MainRegisterUser"),f=Object(i["E"])("NewPassword");return"sendOtp"==r.currentStep?(Object(i["w"])(),Object(i["g"])("div",s,[0==n.isRegistrationPage?(Object(i["w"])(),Object(i["g"])("h3",o," Forgot Password ")):Object(i["f"])("",!0),Object(i["h"])("form",{onSubmit:t[1]||(t[1]=Object(i["O"])((function(){}),["prevent"])),class:Object(i["r"])(n.isRegistrationPage&&"mt-4")},[Object(i["k"])(l,{modelValue:r.userPhoneNumber,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.userPhoneNumber=e}),placeholder:"Enter your phone number"},null,8,["modelValue"]),a,Object(i["k"])(d,{onClick:r.handleSendOtp,buttonText:"Send OTP",id:"log-in"},null,8,["onClick"])],34)])):"submitOtp"==r.currentStep?(Object(i["w"])(),Object(i["e"])(h,{key:1,isRegistrationPage:n.isRegistrationPage,onVerifyOtp:r.verifyOtpCode},null,8,["isRegistrationPage","onVerifyOtp"])):"mainRegister"==r.currentStep?(Object(i["w"])(),Object(i["e"])(p,{key:2,isRegistrationPage:n.isRegistrationPage},null,8,["isRegistrationPage"])):n.isRegistrationPage||"newPass"!=r.currentStep?Object(i["f"])("",!0):(Object(i["w"])(),Object(i["e"])(f,{key:3}))}n("ac1f"),n("00b4");var u=n("a1e9"),l=n("1962"),d=n("486d"),h={key:0,class:"otp_cont"};function p(e,t,n,r,s,o){var a=Object(i["E"])("CustomAuthInput"),c=Object(i["E"])("CustomLoginRegisterBtn");return"submitOtp"==r.currentStep?(Object(i["w"])(),Object(i["g"])("div",h,[Object(i["h"])("form",{onSubmit:t[1]||(t[1]=Object(i["O"])((function(){}),["prevent"]))},[Object(i["k"])(a,{modelValue:r.userOtpInput,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.userOtpInput=e}),placeholder:"Enter OTP"},null,8,["modelValue"]),Object(i["k"])(c,{onClick:r.handleOtpSubmit,buttonText:"Submit"},null,8,["onClick"])],32)])):Object(i["f"])("",!0)}var f={class:"otp_cont"};function m(e,t,n,r,s,o){var a=Object(i["E"])("CustomAuthInput"),c=Object(i["E"])("CustomLoginRegisterBtn");return Object(i["w"])(),Object(i["g"])("div",f,[Object(i["h"])("form",{onSubmit:t[2]||(t[2]=Object(i["O"])((function(){}),["prevent"]))},[Object(i["k"])(a,{modelValue:r.newPassObj.newPass,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.newPassObj.newPass=e}),placeholder:"Enter new password"},null,8,["modelValue"]),Object(i["k"])(a,{modelValue:r.newPassObj.confirmPass,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.newPassObj.confirmPass=e}),placeholder:"Confirm password"},null,8,["modelValue"]),Object(i["k"])(c,{onClick:r.handleNewPasswordSubmit,buttonText:"Submit"},null,8,["onClick"])],32)])}var g=n("1da1"),v=(n("96cf"),n("e364")),b=n("5502"),y=n("6c02"),I={components:{CustomLoginRegisterBtn:d["a"],CustomAuthInput:v["a"]},name:"NewPassword",setup:function(){var e=Object(b["b"])(),t=(Object(y["d"])(),Object(u["l"])({newPass:"",confirmPass:""})),n=Object(u["l"])("otp"),i=function(){var n=Object(g["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log("handleNewPasswordSubmit btn clicked"),!(t.value.newPass.length<5||t.value.confirmPass.length<5)){n.next=6;break}return e.dispatch("notifications/add",{type:"warning",message:"Password must be at least 5 character"}),n.abrupt("return");case 6:if(t.value.newPass===t.value.confirmPass){n.next=9;break}return e.dispatch("notifications/add",{type:"warning",message:"Password does not match"}),n.abrupt("return");case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return{newPassObj:t,handleNewPasswordSubmit:i,currentStep:n}}},w=(n("c03e"),n("6b0d")),_=n.n(w);const O=_()(I,[["render",m],["__scopeId","data-v-cc8ac0ca"]]);var k=O,T=n("57a7"),E=n("2934"),S={components:{CustomLoginRegisterBtn:d["a"],NewPassword:k,CustomAuthInput:v["a"],MainRegisterUser:T["a"]},name:"submitOtp",props:{isRegistrationPage:{type:Boolean,default:function(){return!1}}},setup:function(e,t){var n=Object(b["b"])(),i=Object(u["l"])("");console.log(e.isRegistrationPage);Object(u["l"])(["submitOtp","newPass","mainRegister"]);var r=Object(u["l"])("submitOtp"),s=function(){i.value.length<4?n.dispatch("notifications/add",{type:"warning",message:"Otp code must be at least 4 char "}):(console.log("submit otp from register page"),t.emit("verifyOtp",i.value))};return{userOtpInput:i,handleOtpSubmit:s,currentStep:r}}};n("5d2f");const R=_()(S,[["render",p],["__scopeId","data-v-1853fcac"]]);var C=R,P=n("1fd5");class j{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new P["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(L(e))try{this.getOrInitializeService({instanceIdentifier:N})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=N){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=N){return this.instances.has(e)}getOptions(e=N){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:D(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=N){return this.component?this.component.multipleInstances?e:N:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function D(e){return e===N?void 0:e}function L(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new A(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=[];var x;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(x||(x={}));const V={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},F=x.INFO,z={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},$=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=z[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class B{constructor(e){this.name=e,this._logLevel=F,this._logHandler=$,this._userLogHandler=null,U.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?V[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(W(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function W(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const q="@firebase/app",K="0.7.13",G=new B("@firebase/app"),J="@firebase/app-compat",X="@firebase/analytics-compat",Y="@firebase/analytics",Z="@firebase/app-check-compat",Q="@firebase/app-check",ee="@firebase/auth",te="@firebase/auth-compat",ne="@firebase/database",ie="@firebase/database-compat",re="@firebase/functions",se="@firebase/functions-compat",oe="@firebase/installations",ae="@firebase/installations-compat",ce="@firebase/messaging",ue="@firebase/messaging-compat",le="@firebase/performance",de="@firebase/performance-compat",he="@firebase/remote-config",pe="@firebase/remote-config-compat",fe="@firebase/storage",me="@firebase/storage-compat",ge="@firebase/firestore",ve="@firebase/firestore-compat",be="firebase",ye="9.6.3",Ie="[DEFAULT]",we={[q]:"fire-core",[J]:"fire-core-compat",[Y]:"fire-analytics",[X]:"fire-analytics-compat",[Q]:"fire-app-check",[Z]:"fire-app-check-compat",[ee]:"fire-auth",[te]:"fire-auth-compat",[ne]:"fire-rtdb",[ie]:"fire-rtdb-compat",[re]:"fire-fn",[se]:"fire-fn-compat",[oe]:"fire-iid",[ae]:"fire-iid-compat",[ce]:"fire-fcm",[ue]:"fire-fcm-compat",[le]:"fire-perf",[de]:"fire-perf-compat",[he]:"fire-rc",[pe]:"fire-rc-compat",[fe]:"fire-gcs",[me]:"fire-gcs-compat",[ge]:"fire-fst",[ve]:"fire-fst-compat","fire-js":"fire-js",[be]:"fire-js-all"},_e=new Map,Oe=new Map;function ke(e,t){try{e.container.addComponent(t)}catch(n){G.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Te(e){const t=e.name;if(Oe.has(t))return G.debug(`There were multiple attempts to register component ${t}.`),!1;Oe.set(t,e);for(const n of _e.values())ke(n,e);return!0}function Ee(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Se={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Re=new P["b"]("app","Firebase",Se);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new j("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Re.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=ye;function je(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:Ie,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw Re.create("bad-app-name",{appName:String(i)});const r=_e.get(i);if(r){if(Object(P["h"])(e,r.options)&&Object(P["h"])(n,r.config))return r;throw Re.create("duplicate-app",{appName:i})}const s=new M(i);for(const a of Oe.values())s.addComponent(a);const o=new Ce(e,n,s);return _e.set(i,o),o}function Ne(e=Ie){const t=_e.get(e);if(!t)throw Re.create("no-app",{appName:e});return t}function Ae(e,t,n){var i;let r=null!==(i=we[e])&&void 0!==i?i:e;n&&(r+="-"+n);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void G.warn(e.join(" "))}Te(new j(r+"-version",()=>({library:r,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function De(e){Te(new j("platform-logger",e=>new H(e),"PRIVATE")),Ae(q,K,e),Ae(q,K,"esm2017"),Ae("fire-js","")}De("");var Le="firebase",Me="9.6.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ae(Le,Me,"app");var Ue=n("9dbb");const xe="@firebase/installations",Ve="0.5.5",Fe=1e4,ze="w:"+Ve,$e="FIS_v2",Be="https://firebaseinstallations.googleapis.com/v1",He=36e5,We="installations",qe="Installations",Ke={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ge=new P["b"](We,qe,Ke);function Je(e){return e instanceof P["c"]&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe({projectId:e}){return`${Be}/projects/${e}/installations`}function Ye(e){return{token:e.token,requestStatus:2,expiresIn:nt(e.expiresIn),creationTime:Date.now()}}async function Ze(e,t){const n=await t.json(),i=n.error;return Ge.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Qe({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function et(e,{refreshToken:t}){const n=Qe(e);return n.append("Authorization",it(t)),n}async function tt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function nt(e){return Number(e.replace("s","000"))}function it(e){return`${$e} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,{fid:t}){const n=Xe(e),i=Qe(e),r={fid:t,authVersion:$e,appId:e.appId,sdkVersion:ze},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await tt(()=>fetch(n,s));if(o.ok){const e=await o.json(),n={fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:Ye(e.authToken)};return n}throw await Ze("Create Installation",o)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=/^[cdef][\w-]{21}$/,ct="";function ut(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=lt(e);return at.test(n)?n:ct}catch(e){return ct}}function lt(e){const t=ot(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Map;function pt(e,t){const n=dt(e);ft(n,t),mt(n,t)}function ft(e,t){const n=ht.get(e);if(n)for(const i of n)i(t)}function mt(e,t){const n=vt();n&&n.postMessage({key:e,fid:t}),bt()}let gt=null;function vt(){return!gt&&"BroadcastChannel"in self&&(gt=new BroadcastChannel("[Firebase] FID Change"),gt.onmessage=e=>{ft(e.data.key,e.data.fid)}),gt}function bt(){0===ht.size&&gt&&(gt.close(),gt=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="firebase-installations-database",It=1,wt="firebase-installations-store";let _t=null;function Ot(){return _t||(_t=Object(Ue["openDb"])(yt,It,e=>{switch(e.oldVersion){case 0:e.createObjectStore(wt)}})),_t}async function kt(e,t){const n=dt(e),i=await Ot(),r=i.transaction(wt,"readwrite"),s=r.objectStore(wt),o=await s.get(n);return await s.put(t,n),await r.complete,o&&o.fid===t.fid||pt(e,t.fid),t}async function Tt(e){const t=dt(e),n=await Ot(),i=n.transaction(wt,"readwrite");await i.objectStore(wt).delete(t),await i.complete}async function Et(e,t){const n=dt(e),i=await Ot(),r=i.transaction(wt,"readwrite"),s=r.objectStore(wt),o=await s.get(n),a=t(o);return void 0===a?await s.delete(n):await s.put(a,n),await r.complete,!a||o&&o.fid===a.fid||pt(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(e){let t;const n=await Et(e,n=>{const i=Rt(n),r=Ct(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===ct?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Rt(e){const t=e||{fid:ut(),registrationStatus:0};return At(t)}function Ct(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(Ge.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Pt(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:jt(e)}:{installationEntry:t}}async function Pt(e,t){try{const n=await rt(e,t);return kt(e,n)}catch(n){throw Je(n)&&409===n.customData.serverCode?await Tt(e):await kt(e,{fid:t.fid,registrationStatus:0}),n}}async function jt(e){let t=await Nt(e);while(1===t.registrationStatus)await st(100),t=await Nt(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await St(e);return n||t}return t}function Nt(e){return Et(e,e=>{if(!e)throw Ge.create("installation-not-found");return At(e)})}function At(e){return Dt(e)?{fid:e.fid,registrationStatus:0}:e}function Dt(e){return 1===e.registrationStatus&&e.registrationTime+Fe<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt({appConfig:e,platformLoggerProvider:t},n){const i=Mt(e,n),r=et(e,n),s=t.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:ze}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await tt(()=>fetch(i,a));if(c.ok){const e=await c.json(),t=Ye(e);return t}throw await Ze("Generate Auth Token",c)}function Mt(e,{fid:t}){return`${Xe(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t=!1){let n;const i=await Et(e.appConfig,i=>{if(!zt(i))throw Ge.create("not-registered");const r=i.authToken;if(!t&&$t(r))return i;if(1===r.requestStatus)return n=xt(e,t),i;{if(!navigator.onLine)throw Ge.create("app-offline");const t=Ht(i);return n=Ft(e,t),t}}),r=n?await n:i.authToken;return r}async function xt(e,t){let n=await Vt(e.appConfig);while(1===n.authToken.requestStatus)await st(100),n=await Vt(e.appConfig);const i=n.authToken;return 0===i.requestStatus?Ut(e,t):i}function Vt(e){return Et(e,e=>{if(!zt(e))throw Ge.create("not-registered");const t=e.authToken;return Wt(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ft(e,t){try{const n=await Lt(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await kt(e.appConfig,i),n}catch(n){if(!Je(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await kt(e.appConfig,n)}else await Tt(e.appConfig);throw n}}function zt(e){return void 0!==e&&2===e.registrationStatus}function $t(e){return 2===e.requestStatus&&!Bt(e)}function Bt(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+He}function Ht(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Wt(e){return 1===e.requestStatus&&e.requestTime+Fe<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e){const t=e,{installationEntry:n,registrationPromise:i}=await St(t.appConfig);return i?i.catch(console.error):Ut(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e,t=!1){const n=e;await Gt(n.appConfig);const i=await Ut(n,t);return i.token}async function Gt(e){const{registrationPromise:t}=await St(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jt(e){if(!e||!e.options)throw Xt("App Configuration");if(!e.name)throw Xt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Xt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Xt(e){return Ge.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="installations",Zt="installations-internal",Qt=e=>{const t=e.getProvider("app").getImmediate(),n=Jt(t),i=Ee(t,"platform-logger"),r={app:t,appConfig:n,platformLoggerProvider:i,_delete:()=>Promise.resolve()};return r},en=e=>{const t=e.getProvider("app").getImmediate(),n=Ee(t,Yt).getImmediate(),i={getId:()=>qt(n),getToken:e=>Kt(n,e)};return i};function tn(){Te(new j(Yt,Qt,"PUBLIC")),Te(new j(Zt,en,"PRIVATE"))}tn(),Ae(xe,Ve),Ae(xe,Ve,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nn="analytics",rn="firebase_id",sn="origin",on=6e4,an="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cn="https://www.googletagmanager.com/gtag/js",un=new B("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ln(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function dn(e,t){const n=document.createElement("script");n.src=`${cn}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function hn(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function pn(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const e=await ln(n),i=e.find(e=>e.measurementId===r);i&&await t[i.appId]}}catch(a){un.error(a)}e("config",r,s)}async function fn(e,t,n,i,r){try{let s=[];if(r&&r["send_to"]){let e=r["send_to"];Array.isArray(e)||(e=[e]);const i=await ln(n);for(const n of e){const e=i.find(e=>e.measurementId===n),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(s){un.error(s)}}function mn(e,t,n,i){async function r(r,s,o){try{"event"===r?await fn(e,t,n,s,o):"config"===r?await pn(e,t,n,i,s,o):e("set",s)}catch(a){un.error(a)}}return r}function gn(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"===typeof window[r]&&(s=window[r]),window[r]=mn(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}function vn(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(cn))return t;return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},yn=new P["b"]("analytics","Analytics",bn),In=30,wn=1e3;class _n{constructor(e={},t=wn){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const On=new _n;function kn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Tn(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:kn(i)},s=an.replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw yn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function En(e,t=On,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw yn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw yn.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Pn;return setTimeout(async()=>{a.abort()},void 0!==n?n:on),Sn({appId:i,apiKey:r,measurementId:s},o,a,t)}async function Sn(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=On){const{appId:s,measurementId:o}=e;try{await Rn(i,t)}catch(a){if(o)return un.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+o+` provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}try{const t=await Tn(e);return r.deleteThrottleMetadata(s),t}catch(a){if(!Cn(a)){if(r.deleteThrottleMetadata(s),o)return un.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+o+` provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}const t=503===Number(a.customData.httpStatus)?Object(P["f"])(n,r.intervalMillis,In):Object(P["f"])(n,r.intervalMillis),c={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return r.setThrottleMetadata(s,c),un.debug(`Calling attemptFetch again in ${t} millis`),Sn(e,c,i,r)}}function Rn(e,t){return new Promise((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(s),i(yn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Cn(e){if(!(e instanceof P["c"])||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class Pn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(){if(!Object(P["o"])())return un.warn(yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Object(P["t"])()}catch(e){return un.warn(yn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function Nn(e,t,n,i,r,s,o){var a;const c=En(e);c.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>un.error(e)),t.push(c);const u=jn().then(e=>e?i.getId():void 0),[l,d]=await Promise.all([c,u]);vn()||dn(s,l.measurementId),r("js",new Date);const h=null!==(a=null===o||void 0===o?void 0:o.config)&&void 0!==a?a:{};return h[sn]="firebase",h.update=!0,null!=d&&(h[rn]=d),r("config",l.measurementId,h),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.app=e}_delete(){return delete Dn[this.app.options.appId],Promise.resolve()}}let Dn={},Ln=[];const Mn={};let Un,xn,Vn="dataLayer",Fn="gtag",zn=!1;function $n(){const e=[];if(Object(P["l"])()&&e.push("This is a browser extension environment."),Object(P["d"])()||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=yn.create("invalid-analytics-context",{errorInfo:t});un.warn(n.message)}}function Bn(e,t,n){$n();const i=e.options.appId;if(!i)throw yn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw yn.create("no-api-key");un.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+e.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=Dn[i])throw yn.create("already-exists",{id:i});if(!zn){hn(Vn);const{wrappedGtag:e,gtagCore:t}=gn(Dn,Ln,Mn,Vn,Fn);xn=e,Un=t,zn=!0}Dn[i]=Nn(e,Ln,Mn,t,Un,Vn,n);const r=new An(e);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t,s=Object.assign(Object.assign({},i),{send_to:r});e("event",n,s)}}function Wn(e=Ne()){e=Object(P["j"])(e);const t=Ee(e,nn);return t.isInitialized()?t.getImmediate():qn(e)}function qn(e,t={}){const n=Ee(e,nn);if(n.isInitialized()){const e=n.getImmediate();if(Object(P["h"])(t,n.getOptions()))return e;throw yn.create("already-initialized")}const i=n.initialize({options:t});return i}function Kn(e,t,n,i){e=Object(P["j"])(e),Hn(xn,Dn[e.app.options.appId],t,n,i).catch(e=>un.error(e))}const Gn="@firebase/analytics",Jn="0.7.5";function Xn(){function e(e){try{const t=e.getProvider(nn).getImmediate();return{logEvent:(e,n,i)=>Kn(t,e,n,i)}}catch(t){throw yn.create("interop-component-reg-failed",{reason:t})}}Te(new j(nn,(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Bn(n,i,t)},"PUBLIC")),Te(new j("analytics-internal",e,"PRIVATE")),Ae(Gn,Jn),Ae(Gn,Jn,"esm2017")}Xn();function Yn(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Zn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qn=Zn,ei=new P["b"]("auth","Firebase",Zn()),ti=new B("@firebase/auth");function ni(e,...t){ti.logLevel<=x.ERROR&&ti.error(`Auth (${Pe}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e,...t){throw oi(e,...t)}function ri(e,...t){return oi(e,...t)}function si(e,t,n){const i=Object.assign(Object.assign({},Qn()),{[t]:n}),r=new P["b"]("auth","Firebase",i);return r.create(t,{appName:e.name})}function oi(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return ei.create(e,...t)}function ai(e,t,...n){if(!e)throw oi(t,...n)}function ci(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ni(t),new Error(t)}function ui(e,t){e||ci(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Map;function di(e){ui(e instanceof Function,"Expected a class definition");let t=li.get(e);return t?(ui(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,li.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(e,t){const n=Ee(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(P["h"])(i,null!==t&&void 0!==t?t:{}))return e;ii(e,"already-initialized")}const i=n.initialize({options:t});return i}function pi(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(di);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function mi(){return"http:"===gi()||"https:"===gi()}function gi(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(mi()||Object(P["l"])()||"connection"in navigator))||navigator.onLine}function bi(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.shortDelay=e,this.longDelay=t,ui(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(P["p"])()||Object(P["q"])()}get(){return vi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(e,t){ui(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},Oi=new yi(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ti(e,t,n,i,r={}){return Ei(e,r,async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=Object(P["r"])(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),wi.fetch()(Ri(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))})}async function Ei(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},_i),t);try{const t=new Ci(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Pi(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Pi(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Pi(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw si(e,a,o);ii(e,a)}}catch(r){if(r instanceof P["c"])throw r;ii(e,"network-request-failed")}}async function Si(e,t,n,i,r={}){const s=await Ti(e,t,n,i,r);return"mfaPendingCredential"in s&&ii(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ri(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Ii(e.config,r):`${e.config.apiScheme}://${r}`}class Ci{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ri(this.auth,"timeout")),Oi.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pi(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ri(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(e,t){return Ti(e,"POST","/v1/accounts:delete",t)}async function Ni(e,t){return Ti(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(e,t=!1){const n=Object(P["j"])(e),i=await n.getIdToken(t),r=Mi(i);ai(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"===typeof r.firebase?r.firebase:void 0,o=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:r,token:i,authTime:Ai(Li(r.auth_time)),issuedAtTime:Ai(Li(r.iat)),expirationTime:Ai(Li(r.exp)),signInProvider:o||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Li(e){return 1e3*Number(e)}function Mi(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return ni("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(P["e"])(n);return e?JSON.parse(e):(ni("Failed to decode base64 JWT payload"),null)}catch(r){return ni("Caught error parsing JWT payload as JSON",r),null}}function Ui(e){const t=Mi(e);return ai(t,"internal-error"),ai("undefined"!==typeof t.exp,"internal-error"),ai("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof P["c"]&&Vi(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Vi({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(e){var t;const n=e.auth,i=await e.getIdToken(),r=await xi(e,Ni(n,{idToken:i}));ai(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?Wi(s.providerUserInfo):[],a=Hi(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zi(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function Bi(e){const t=Object(P["j"])(e);await $i(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Hi(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function Wi(e){return e.map(e=>{var{providerId:t}=e,n=Yn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(e,t){const n=await Ei(e,{},async()=>{const n=Object(P["r"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Ri(e,i,"/v1/token","key="+r),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",wi.fetch()(s,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ai(e.idToken,"internal-error"),ai("undefined"!==typeof e.idToken,"internal-error"),ai("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Ui(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ai(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await qi(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Ki;return n&&(ai("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(ai("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(ai("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return ci("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(e,t){ai("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class Ji{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Yn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Fi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new zi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await xi(this,this.stsTokenManager.getToken(this.auth,e));return ai(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Di(this,e)}reload(){return Bi(this)}_assign(e){this!==e&&(ai(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ji(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ai(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await $i(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xi(this,ji(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:y,isAnonymous:I,providerData:w,stsTokenManager:_}=t;ai(b&&_,e,"internal-error");const O=Ki.fromJSON(this.name,_);ai("string"===typeof b,e,"internal-error"),Gi(l,e.name),Gi(d,e.name),ai("boolean"===typeof y,e,"internal-error"),ai("boolean"===typeof I,e,"internal-error"),Gi(h,e.name),Gi(p,e.name),Gi(f,e.name),Gi(m,e.name),Gi(g,e.name),Gi(v,e.name);const k=new Ji({uid:b,auth:e,email:d,emailVerified:y,displayName:l,isAnonymous:I,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:O,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(k.providerData=w.map(e=>Object.assign({},e))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const i=new Ki;i.updateFromServerResponse(t);const r=new Ji({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await $i(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xi.type="NONE";const Yi=Xi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e,t,n){return`firebase:${e}:${t}:${n}`}class Qi{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Zi(this.userKey,i.apiKey,r),this.fullPersistenceKey=Zi("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ji._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Qi(di(Yi),e,n);const i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=i[0]||di(Yi);const s=Zi(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=Ji._fromJSON(e,t);u!==r&&(o=n),r=u;break}}catch(c){}const a=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(c){}})),new Qi(r,e,n)):new Qi(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(rr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(tr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(or(t))return"Blackberry";if(ar(t))return"Webos";if(nr(t))return"Safari";if((t.includes("chrome/")||ir(t))&&!t.includes("edge/"))return"Chrome";if(sr(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function tr(e=Object(P["k"])()){return/firefox\//i.test(e)}function nr(e=Object(P["k"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ir(e=Object(P["k"])()){return/crios\//i.test(e)}function rr(e=Object(P["k"])()){return/iemobile/i.test(e)}function sr(e=Object(P["k"])()){return/android/i.test(e)}function or(e=Object(P["k"])()){return/blackberry/i.test(e)}function ar(e=Object(P["k"])()){return/webos/i.test(e)}function cr(e=Object(P["k"])()){return/iphone|ipad|ipod/i.test(e)}function ur(e=Object(P["k"])()){var t;return cr(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function lr(){return Object(P["n"])()&&10===document.documentMode}function dr(e=Object(P["k"])()){return cr(e)||sr(e)||ar(e)||or(e)||/windows phone/i.test(e)||rr(e)}function hr(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e,t=[]){let n;switch(e){case"Browser":n=er(Object(P["k"])());break;case"Worker":n=`${er(Object(P["k"])())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pe}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gr(this),this.idTokenSubscription=new gr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ei,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=di(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Qi.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(ai(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $i(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bi()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(P["j"])(e):null;return t&&ai(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ai(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(di(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new P["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&di(e)||this._popupRedirectResolver;ai(t,this,"argument-error"),this.redirectPersistenceManager=await Qi.create(this,[di(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ai(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ai(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function mr(e){return Object(P["j"])(e)}class gr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(P["g"])(e=>this.observer=e)}get next(){return ai(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ci("not implemented")}_getIdTokenResponse(e){return ci("not implemented")}_linkToIdToken(e,t){return ci("not implemented")}_getReauthenticationResolver(e){return ci("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(e,t){return Ti(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yr(e,t){return Si(e,"POST","/v1/accounts:signInWithPassword",ki(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ir(e,t){return Si(e,"POST","/v1/accounts:signInWithEmailLink",ki(e,t))}async function wr(e,t){return Si(e,"POST","/v1/accounts:signInWithEmailLink",ki(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends vr{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new _r(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new _r(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return yr(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ir(e,{email:this._email,oobCode:this._password});default:ii(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return br(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wr(e,{idToken:t,email:this._email,oobCode:this._password});default:ii(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(e,t){return Si(e,"POST","/v1/accounts:signInWithIdp",ki(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="http://localhost";class Tr extends vr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ii("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Yn(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Tr(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Or(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Or(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Or(e,t)}buildRequest(){const e={requestUri:kr,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(P["r"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(e,t){return Ti(e,"POST","/v1/accounts:sendVerificationCode",ki(e,t))}async function Sr(e,t){return Si(e,"POST","/v1/accounts:signInWithPhoneNumber",ki(e,t))}async function Rr(e,t){const n=await Si(e,"POST","/v1/accounts:signInWithPhoneNumber",ki(e,t));if(n.temporaryProof)throw Pi(e,"account-exists-with-different-credential",n);return n}const Cr={["USER_NOT_FOUND"]:"user-not-found"};async function Pr(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Si(e,"POST","/v1/accounts:signInWithPhoneNumber",ki(e,n),Cr)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends vr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new jr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new jr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Sr(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Rr(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Pr(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new jr({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ar(e){const t=Object(P["s"])(Object(P["i"])(e))["link"],n=t?Object(P["s"])(Object(P["i"])(t))["deep_link_id"]:null,i=Object(P["s"])(Object(P["i"])(e))["deep_link_id"],r=i?Object(P["s"])(Object(P["i"])(i))["link"]:null;return r||i||n||t||e}class Dr{constructor(e){var t,n,i,r,s,o;const a=Object(P["s"])(Object(P["i"])(e)),c=null!==(t=a["apiKey"])&&void 0!==t?t:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,l=Nr(null!==(i=a["mode"])&&void 0!==i?i:null);ai(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(r=a["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(s=a["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=Ar(e);try{return new Dr(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr{constructor(){this.providerId=Lr.PROVIDER_ID}static credential(e,t){return _r._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Dr.parseLink(t);return ai(n,"argument-error"),_r._fromEmailAndCode(e,n.code,n.tenantId)}}Lr.PROVIDER_ID="password",Lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Mr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr extends Ur{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch(t){return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com",xr.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr extends Ur{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tr._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Vr.credential(t,n)}catch(i){return null}}}Vr.GOOGLE_SIGN_IN_METHOD="google.com",Vr.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr extends Ur{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch(t){return null}}}Fr.GITHUB_SIGN_IN_METHOD="github.com",Fr.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zr extends Ur{constructor(){super("twitter.com")}static credential(e,t){return Tr._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return zr.credential(t,n)}catch(i){return null}}}zr.TWITTER_SIGN_IN_METHOD="twitter.com",zr.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Ji._fromIdTokenResponse(e,n,i),s=Br(n),o=new $r({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Br(n);return new $r({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Br(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr extends P["c"]{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Hr.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Hr(e,t,n,i)}}function Wr(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Hr._fromErrorAndOperation(e,n,t,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(e,t,n=!1){const i=await xi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return $r._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Kr(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await xi(e,Wr(i,r,t,e),n);ai(s.idToken,i,"internal-error");const o=Mi(s.idToken);ai(o,i,"internal-error");const{sub:a}=o;return ai(e.uid===a,i,"user-mismatch"),$r._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&ii(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(e,t,n=!1){const i="signIn",r=await Wr(e,i,t),s=await $r._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Jr(e,t){return Gr(mr(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(e,t){return Ti(e,"POST","/v2/accounts/mfaEnrollment:start",ki(e,t))}function Yr(e,t){return Ti(e,"POST","/v2/accounts/mfaEnrollment:finalize",ki(e,t))}new WeakMap;const Zr="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zr,"1"),this.storage.removeItem(Zr),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(){const e=Object(P["k"])();return nr(e)||cr(e)}const ts=1e3,ns=10;class is extends Qr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=es()&&hr(),this.fallbackToPolling=dr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);lr()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ns):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},ts)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}is.type="LOCAL";const rs=is;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Qr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ss.type="SESSION";const os=ss;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new cs(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async e=>e(t.origin,r)),a=await as(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function us(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cs.receivers=[];class ls{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const c=us("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(){return window}function hs(e){ds().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(){return"undefined"!==typeof ds()["WorkerGlobalScope"]&&"function"===typeof ds()["importScripts"]}async function fs(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ms(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function gs(){return ps()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="firebaseLocalStorageDb",bs=1,ys="firebaseLocalStorage",Is="fbase_key";class ws{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _s(e,t){return e.transaction([ys],t?"readwrite":"readonly").objectStore(ys)}function Os(){const e=indexedDB.deleteDatabase(vs);return new ws(e).toPromise()}function ks(){const e=indexedDB.open(vs,bs);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(ys,{keyPath:Is})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(ys)?t(n):(n.close(),await Os(),t(await ks()))})})}async function Ts(e,t,n){const i=_s(e,!0).put({[Is]:t,value:n});return new ws(i).toPromise()}async function Es(e,t){const n=_s(e,!1).get(t),i=await new ws(n).toPromise();return void 0===i?null:i.value}function Ss(e,t){const n=_s(e,!0).delete(t);return new ws(n).toPromise()}const Rs=800,Cs=3;class Ps{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await ks()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Cs)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ps()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cs._getInstance(gs()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fs(),!this.activeServiceWorker)return;this.sender=new ls(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ms()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ks();return await Ts(e,Zr,"1"),await Ss(e,Zr),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ts(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Es(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ss(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=_s(e,!1).getAll();return new ws(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ps.type="LOCAL";const js=Ps;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e,t){return Ti(e,"POST","/v2/accounts/mfaSignIn:start",ki(e,t))}function As(e,t){return Ti(e,"POST","/v2/accounts/mfaSignIn:finalize",ki(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(e){return(await Ti(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Ms(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=ri("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",Ls().appendChild(i)})}function Us(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=500,Vs=6e4,Fs=1e12;class zs{constructor(e){this.auth=e,this.counter=Fs,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new $s(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||Fs;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||Fs;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||Fs;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class $s{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof e?document.getElementById(e):e;ai(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=Bs(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},Vs)},xs))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Bs(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=Us("rcb"),Ws=new yi(3e4,6e4),qs="https://www.google.com/recaptcha/api.js?";class Ks{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!ds().grecaptcha}load(e,t=""){return ai(Gs(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(ds().grecaptcha):new Promise((n,i)=>{const r=ds().setTimeout(()=>{i(ri(e,"network-request-failed"))},Ws.get());ds()[Hs]=()=>{ds().clearTimeout(r),delete ds()[Hs];const s=ds().grecaptcha;if(!s)return void i(ri(e,"internal-error"));const o=s.render;s.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};const s=`${qs}?${Object(P["r"])({onload:Hs,render:"explicit",hl:t})}`;Ms(s).catch(()=>{clearTimeout(r),i(ri(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!ds().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Gs(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Js{async load(e){return new zs(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="recaptcha",Ys={theme:"light",type:"image"};class Zs{constructor(e,t=Object.assign({},Ys),n){this.parameters=t,this.type=Xs,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=mr(n),this.isInvisible="invisible"===this.parameters.size,ai("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof e?document.getElementById(e):e;ai(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Js:new Ks,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ai(!this.parameters.sitekey,this.auth,"argument-error"),ai(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ai("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=ds()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){ai(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ai(mi()&&!ps(),this.auth,"internal-error"),await Qs(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Ds(this.auth);ai(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ai(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Qs(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=jr._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function to(e,t,n){const i=mr(e),r=await no(i,t,Object(P["j"])(n));return new eo(r,e=>Jr(i,e))}async function no(e,t,n){var i;const r=await n.verify();try{let s;if(ai("string"===typeof r,e,"argument-error"),ai(n.type===Xs,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){ai("enroll"===t.type,e,"internal-error");const n=await Xr(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{ai("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;ai(n,e,"missing-multi-factor-info");const o=await Ns(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Er(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(e){this.providerId=io.PROVIDER_ID,this.auth=mr(e)}verifyPhoneNumber(e,t){return no(this.auth,e,Object(P["j"])(t))}static credential(e,t){return jr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return io.credentialFromTaggedObject(t)}static credentialFromError(e){return io.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?jr._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ro(e,t){return t?di(t):(ai(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */io.PROVIDER_ID="phone",io.PHONE_SIGN_IN_METHOD="phone";class so extends vr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Or(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oo(e){return Gr(e.auth,new so(e),e.bypassAuthState)}function ao(e){const{auth:t,user:n}=e;return ai(n,t,"internal-error"),Kr(n,new so(e),e.bypassAuthState)}async function co(e){const{auth:t,user:n}=e;return ai(n,t,"internal-error"),qr(n,new so(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oo;case"linkViaPopup":case"linkViaRedirect":return co;case"reauthViaPopup":case"reauthViaRedirect":return ao;default:ii(this.auth,"internal-error")}}resolve(e){ui(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ui(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new yi(2e3,1e4);class ho extends uo{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,ho.currentPopupAction&&ho.currentPopupAction.cancel(),ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ai(e,this.auth,"internal-error"),e}async onExecution(){ui(1===this.filter.length,"Popup operations only handle one event");const e=us();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ri(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ri(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ri(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,lo.get())};e()}}ho.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const po="pendingRedirect",fo=new Map;class mo extends uo{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const t=await go(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function go(e,t){const n=bo(t),i=vo(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function vo(e){return di(e._redirectPersistence)}function bo(e){return Zi(po,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(e,t,n=!1){const i=mr(e),r=ro(i,t),s=new mo(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Io=6e5;class wo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ko(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Oo(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ri(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Io&&this.cachedEventUids.clear(),this.cachedEventUids.has(_o(e))}saveEventToCache(e){this.cachedEventUids.add(_o(e)),this.lastProcessedEventTime=Date.now()}}function _o(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Oo({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function ko(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oo(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(e,t={}){return Ti(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,So=/^https?/;async function Ro(e){if(e.config.emulator)return;const{authorizedDomains:t}=await To(e);for(const i of t)try{if(Co(i))return}catch(n){}ii(e,"unauthorized-domain")}function Co(e){const t=fi(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!So.test(n))return!1;if(Eo.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new yi(3e4,6e4);function jo(){const e=ds().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function No(e){return new Promise((t,n)=>{var i,r,s;function o(){jo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{jo(),n(ri(e,"network-request-failed"))},timeout:Po.get()})}if(null===(r=null===(i=ds().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=ds().gapi)||void 0===s?void 0:s.load)){const t=Us("iframefcb");return ds()[t]=()=>{gapi.load?o():n(ri(e,"network-request-failed"))},Ms("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw Ao=null,e})}let Ao=null;function Do(e){return Ao=Ao||No(e),Ao}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new yi(5e3,15e3),Mo="__/auth/iframe",Uo="emulator/auth/iframe",xo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fo(e){const t=e.config;ai(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ii(t,Uo):`https://${e.config.authDomain}/${Mo}`,i={apiKey:t.apiKey,appName:e.name,v:Pe},r=Vo.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Object(P["r"])(i).slice(1)}`}async function zo(e){const t=await Do(e),n=ds().gapi;return ai(n,e,"internal-error"),t.open({where:document.body,url:Fo(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xo,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=ri(e,"network-request-failed"),s=ds().setTimeout(()=>{i(r)},Lo.get());function o(){ds().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bo=500,Ho=600,Wo="_blank",qo="http://localhost";class Ko{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Go(e,t,n,i=Bo,r=Ho){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$o),{width:i.toString(),height:r.toString(),top:s,left:o}),u=Object(P["k"])().toLowerCase();n&&(a=ir(u)?Wo:n),tr(u)&&(t=t||qo,c.scrollbars="yes");const l=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ur(u)&&"_self"!==a)return Jo(t||"",a),new Ko(null);const d=window.open(t||"",a,l);ai(d,e,"popup-blocked");try{d.focus()}catch(h){}return new Ko(d)}function Jo(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="__/auth/handler",Yo="emulator/auth/handler";function Zo(e,t,n,i,r,s){ai(e.config.authDomain,e,"auth-domain-config-required"),ai(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Pe,eventId:r};if(t instanceof Mr){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Object(P["m"])(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Ur){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${Qo(e)}?${Object(P["r"])(a).slice(1)}`}function Qo({config:e}){return e.emulator?Ii(e,Yo):`https://${e.authDomain}/${Xo}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="webStorageSupport";class ta{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=os,this._completeRedirectFn=yo}async _openPopup(e,t,n,i){var r;ui(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Zo(e,t,n,fi(),i);return Go(e,s,us())}async _openRedirect(e,t,n,i){return await this._originValidation(e),hs(Zo(e,t,n,fi(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ui(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await zo(e),n=new wo(e);return t.register("authEvent",t=>{ai(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ea,{type:ea},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[ea];void 0!==r&&t(!!r),ii(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ro(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dr()||nr()||cr()}}const na=ta;class ia{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return ci("unexpected MultiFactorSessionType")}}}class ra extends ia{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ra(e)}_finalizeEnroll(e,t,n){return Yr(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return As(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class sa{constructor(){}static assertion(e){return ra._fromCredential(e)}}sa.FACTOR_ID="phone";var oa="@firebase/auth",aa="0.19.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ca{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ai(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function la(e){Te(new j("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(t=>{ai(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),ai(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pr(e)},o=new fr(t,i);return pi(o,n),o})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()})),Te(new j("auth-internal",e=>{const t=mr(e.getProvider("auth").getImmediate());return(e=>new ca(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(oa,aa,ua(e)),Ae(oa,aa,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(e=Ne()){const t=Ee(e,"auth");return t.isInitialized()?t.getImmediate():hi(e,{popupRedirectResolver:na,persistence:[js,rs,os]})}la("Browser");var ha={apiKey:"AIzaSyB3waoD_W6Nl7no9E_k1YQhK7obtPP9yh4",authDomain:"pocacademy-fcf1f.firebaseapp.com",projectId:"pocacademy-fcf1f",storageBucket:"pocacademy-fcf1f.appspot.com",messagingSenderId:"622755338144",appId:"1:622755338144:web:e34a42f7953cee7049f6c5",measurementId:"G-Q0XD6GYDMR"},pa=je(ha),fa=(Wn(pa),da(pa)),ma=n("5c40"),ga={components:{CustomPhoneInput:l["a"],CustomLoginRegisterBtn:d["a"],SubmitOtp:C,NewPassword:k,MainRegisterUser:T["a"]},name:"SendOtp",props:{isRegistrationPage:{type:Boolean,default:function(){return!1}}},setup:function(e){console.log(e.isRegistrationPage);var t=Object(b["b"])(),n=Object(u["l"])("sendOtp"),i=Object(u["l"])(""),r=Object(u["l"])(null),s=(Object(u["l"])(null),Object(u["l"])(null)),o=Object(u["l"])(null),a=Object(u["l"])(!1);Object(u["l"])(!1);Object(ma["D"])((function(){r.value=new Zs("log-in",{size:"invisible",callback:function(e){onSignInSubmit()}},fa)}));var c=function(){if(/^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(i.value)){console.log("send otp from resister page"),r.value=new Zs("recaptcha-container",{},fa),r.value.render().then((function(e){o.value=e}));var e="+88"+i.value;to(fa,e,r.value).then((function(e){s.value=e,a.value=!0,console.log(s.value),console.log("sms sent!"),n.value="submitOtp"})).catch((function(e){console.log("sms not sent",e.message)})),console.log("send otp from login page")}else t.dispatch("notifications/add",Object(E["c"])("warning","Please enter a valid phone number"))},l=function(i){s.value.confirm(i).then((function(t){var i=t.user;console.log(i),e.isRegistrationPage?n.value="mainRegister":n.value="newPass"})).catch((function(e){console.log(e),t.dispatch("notifications/add",Object(E["c"])("warning","Invalid Code"))}))};return{userPhoneNumber:i,handleSendOtp:c,currentStep:n,verifyOtpCode:l}}};n("ff47");const va=_()(ga,[["render",c],["__scopeId","data-v-a4fd064a"]]);t["a"]=va},"408a":function(e,t,n){var i=n("e330");e.exports=i(1..valueOf)},4155:function(e,t,n){},"486d":function(e,t,n){"use strict";var i=n("7a23");function r(e,t,n,r,s,o){return Object(i["w"])(),Object(i["g"])("button",Object(i["p"])(e.$attrs,{class:[n.outline?"outline":"","base"]}),Object(i["H"])(n.buttonText),17)}var s={name:"CustomLoginRegisterBtn.vue",inheritAttrs:!1,props:{buttonText:{type:String,default:function(){return"label"}},outline:{type:Boolean,default:function(){return!1}}}},o=(n("70b5"),n("6b0d")),a=n.n(o);const c=a()(s,[["render",r],["__scopeId","data-v-2663f2db"]]);t["a"]=c},"57a7":function(e,t,n){"use strict";n("b0c0");var i=n("7a23"),r=function(e){return Object(i["z"])("data-v-27be6519"),e=e(),Object(i["x"])(),e},s={class:"container"},o=r((function(){return Object(i["h"])("h2",{class:"title"}," Complete Your Profile",-1)})),a={class:"img__container"},c=["src"],u=r((function(){return Object(i["h"])("i",{class:"fas fa-edit"},null,-1)})),l={class:"form__area"};function d(e,t,n,r,d,h){var p=Object(i["E"])("ImgInputModel"),f=Object(i["E"])("CustomSelect");return Object(i["w"])(),Object(i["g"])("div",s,[o,Object(i["h"])("div",a,[Object(i["h"])("img",{src:r.previewImage||"/images/placeholderImg2.svg",alt:""},null,8,c),Object(i["h"])("span",null,[u,Object(i["k"])(p,{modelValue:r.userInputs.Profile_image,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.userInputs.Profile_image=e}),onImagInput:r.handleIInput},null,8,["modelValue","onImagInput"])])]),Object(i["h"])("div",l,[Object(i["N"])(Object(i["h"])("input",{placeholder:"Your name*",type:"text",class:"input__field","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.userInputs.name=e})},null,512),[[i["K"],r.userInputs.name]]),Object(i["N"])(Object(i["h"])("input",{placeholder:"Email Address",type:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.userInputs.email=e}),class:"input__field"},null,512),[[i["K"],r.userInputs.email]]),Object(i["k"])(f,{placeholder:"Level*",options:r.levelOptions,modelValue:r.userInputs.level,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.userInputs.level=e}),style:Object(i["s"])(r.selectStyle)},null,8,["options","modelValue","style"]),Object(i["k"])(f,{placeholder:"Batch*",options:r.batchOptions,modelValue:r.userInputs.batch,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.userInputs.batch=e}),style:Object(i["s"])(r.selectStyle)},null,8,["options","modelValue","style"]),Object(i["k"])(f,{placeholder:"Board*",options:r.boardOptions,modelValue:r.userInputs.board,"onUpdate:modelValue":t[5]||(t[5]=function(e){return r.userInputs.board=e}),style:Object(i["s"])(r.selectStyle)},null,8,["options","modelValue","style"]),Object(i["N"])(Object(i["h"])("input",{placeholder:"Institution*","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.userInputs.institution=e}),type:"text",class:"input__field"},null,512),[[i["K"],r.userInputs.institution]]),Object(i["h"])("button",{onClick:t[7]||(t[7]=function(){return r.handleRegisterNewUser&&r.handleRegisterNewUser.apply(r,arguments)}),class:"edit__btn"},"Register")])])}var h=n("1da1"),p=n("5530"),f=(n("96cf"),n("ac1f"),n("00b4"),n("d3b7"),n("ddb0"),n("a1e9")),m=n("6c02"),g=n("c22a"),v={key:0},b=["value"],y={key:0,value:"",selected:"",disabled:""},I=["value","selected"];function w(e,t,n,r,s,o){return Object(i["w"])(),Object(i["g"])(i["a"],null,[n.label?(Object(i["w"])(),Object(i["g"])("label",v,Object(i["H"])(n.label),1)):Object(i["f"])("",!0),Object(i["h"])("select",Object(i["p"])({class:"field",value:n.modelValue},Object(p["a"])(Object(p["a"])({},e.$attrs),{},{onChange:function(t){e.$emit("update:modelValue",t.target.value)}})),[n.placeholder?(Object(i["w"])(),Object(i["g"])("option",y,Object(i["H"])(n.placeholder),1)):Object(i["f"])("",!0),(Object(i["w"])(!0),Object(i["g"])(i["a"],null,Object(i["C"])(n.options,(function(e){return Object(i["w"])(),Object(i["g"])("option",{value:e,key:e,selected:e===n.modelValue},Object(i["H"])(e),9,I)})),128))],16,b)],64)}n("a9e3");var _={name:"CustomSelect",props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""},options:{type:Array,required:!0},placeholder:{type:String,default:""}}},O=(n("306e"),n("6b0d")),k=n.n(O);const T=k()(_,[["render",w],["__scopeId","data-v-1c8a1244"]]);var E=T,S=n("2934"),R=n("5502"),C={name:"MainRegisterUser",props:{isRegistrationPage:{type:Boolean,default:function(){return!1}}},setup:function(e){var t=Object(m["d"])(),n=Object(R["b"])(),i=Object(f["c"])((function(){return n.state.userState.user.phone_number})),r=Object(f["l"])(null),s=Object(f["l"])({user:"",Profile_image:"",name:"",email:"",level:"",batch:"",board:"",institution:""});s.value=Object(p["a"])(Object(p["a"])({},s.value),{},{user:i.value});var o=Object(f["l"])(["JSC","SSC","HSC","O-Level","A-Level"]),a=Object(f["l"])(["2021","2022","2023"]),c=Object(f["l"])(["Dhaka","Shylet","Comilla"]),u=Object(f["l"])({borderRadius:"1.1rem",outline:"none",fontSize:"1.1rem",padding:"1rem 1.1rem",border:"1.5px solid #00D4FE"}),l=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=Object(f["l"])(!1),e.t0=regeneratorRuntime.keys(s.value);case 2:if((e.t1=e.t0()).done){e.next=33;break}if(r=e.t1.value,""!=s.value[r]){e.next=12;break}if("email"!=r&&"user"!=r&&"Profile_image"!=r){e.next=7;break}return e.abrupt("continue",2);case 7:return i.value=!0,n.dispatch("notifications/add",Object(S["c"])("warning","".concat(r," is empty"))),e.abrupt("break",33);case 12:if(!("name"==r&&s.value.name.length<3)){e.next=18;break}return n.dispatch("notifications/add",Object(S["c"])("warning","Student name must be at least 3 character")),i.value=!0,e.abrupt("break",33);case 18:if("email"!=r||/\S+@\S+\.\S+/.test(s.value["email"])){e.next=24;break}return n.dispatch("notifications/add",Object(S["c"])("warning","Please enter valid email")),i.value=!0,e.abrupt("break",33);case 24:if(!("institution"==r&&s.value.institution.length<4)){e.next=30;break}return n.dispatch("notifications/add",Object(S["c"])("warning","Institution must be at least 4 character")),i.value=!0,e.abrupt("break",33);case 30:i.value=!1;case 31:e.next=2;break;case 33:if(!i.value){e.next=35;break}return e.abrupt("return");case 35:return e.prev=35,e.next=38,n.dispatch("userState/registerStudent",Object(p["a"])({},s.value));case 38:t.push("/dashboard"),e.next=44;break;case 41:e.prev=41,e.t2=e["catch"](35),console.log(e.t2);case 44:case"end":return e.stop()}}),e,null,[[35,41]])})));return function(){return e.apply(this,arguments)}}(),d=Object(f["l"])(null),g=function(e){console.log(e),d.value=e};return{handleRegisterNewUser:l,imgFile:r,userInputs:s,levelOptions:o,batchOptions:a,boardOptions:c,selectStyle:u,handleIInput:g,previewImage:d}},components:{ImgInputModel:g["a"],CustomSelect:E}};n("c760");const P=k()(C,[["render",d],["__scopeId","data-v-27be6519"]]);t["a"]=P},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var i=n("e330"),r=n("1d80"),s=n("577e"),o=n("5899"),a=i("".replace),c="["+o+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),d=function(e){return function(t){var n=s(r(t));return 1&e&&(n=a(n,u,"")),2&e&&(n=a(n,l,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},"5d2f":function(e,t,n){"use strict";n("2a4a")},"70b5":function(e,t,n){"use strict";n("050d")},7130:function(e,t,n){},7156:function(e,t,n){var i=n("1626"),r=n("861d"),s=n("d2bb");e.exports=function(e,t,n){var o,a;return s&&i(o=t.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},"9dbb":function(e,t,n){(function(e,n){n(t)})(0,(function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function i(e,t,i){var r,s=new Promise((function(s,o){r=e[t].apply(e,i),n(r).then(s,o)}));return s.request=r,s}function r(e,t,n){var r=i(e,t,n);return r.then((function(e){if(e)return new l(e,r.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})}))}function c(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function u(e){this._index=e}function l(e,t){this._cursor=e,this._request=t}function d(e){this._store=e}function h(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function p(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new h(n)}function f(e){this._db=e}function m(e,t,n){var r=i(indexedDB,"open",[e,t]),s=r.request;return s&&(s.onupgradeneeded=function(e){n&&n(new p(s.result,e.oldVersion,s.transaction))}),r.then((function(e){return new f(e)}))}function g(e){return i(indexedDB,"deleteDatabase",[e])}s(u,"_index",["name","keyPath","multiEntry","unique"]),o(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(l,"_cursor",["direction","key","primaryKey","value"]),o(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(l.prototype[e]=function(){var t=this,i=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,i),n(t._request).then((function(e){if(e)return new l(e,t._request)}))}))})})),d.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},d.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},s(d,"_store",["name","keyPath","indexNames","autoIncrement"]),o(d,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(d,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(d,"_store",IDBObjectStore,["deleteIndex"]),h.prototype.objectStore=function(){return new d(this._tx.objectStore.apply(this._tx,arguments))},s(h,"_tx",["objectStoreNames","mode"]),a(h,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new d(this._db.createObjectStore.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["deleteObjectStore","close"]),f.prototype.transaction=function(){return new h(this._db.transaction.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[d,u].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),i=n[n.length-1],r=this._store||this._index,s=r[e].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[u,d].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,i=[];return new Promise((function(r){n.iterateCursor(e,(function(e){e?(i.push(e.value),void 0===t||i.length!=t?e.continue():r(i)):r(i)}))}))})})),e.openDb=m,e.deleteDb=g,Object.defineProperty(e,"__esModule",{value:!0})}))},a9e3:function(e,t,n){"use strict";var i=n("83ab"),r=n("da84"),s=n("e330"),o=n("94ca"),a=n("6eeb"),c=n("1a2d"),u=n("7156"),l=n("3a9b"),d=n("d9b5"),h=n("c04e"),p=n("d039"),f=n("241c").f,m=n("06cf").f,g=n("9bf2").f,v=n("408a"),b=n("58a8").trim,y="Number",I=r[y],w=I.prototype,_=r.TypeError,O=s("".slice),k=s("".charCodeAt),T=function(e){var t=h(e,"number");return"bigint"==typeof t?t:E(t)},E=function(e){var t,n,i,r,s,o,a,c,u=h(e,"number");if(d(u))throw _("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=b(u),t=k(u,0),43===t||45===t){if(n=k(u,2),88===n||120===n)return NaN}else if(48===t){switch(k(u,1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(s=O(u,2),o=s.length,a=0;a<o;a++)if(c=k(s,a),c<48||c>r)return NaN;return parseInt(s,i)}return+u};if(o(y,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var S,R=function(e){var t=arguments.length<1?0:I(T(e)),n=this;return l(w,n)&&p((function(){v(n)}))?u(Object(t),n,R):t},C=i?f(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;C.length>P;P++)c(I,S=C[P])&&!c(R,S)&&g(R,S,m(I,S));R.prototype=w,w.constructor=R,a(r,y,R)}},bf10:function(e,t,n){},c03e:function(e,t,n){"use strict";n("2eee")},c22a:function(e,t,n){"use strict";var i=n("7a23");function r(e,t,n,r,s,o){return Object(i["w"])(),Object(i["g"])("input",{type:"file",accept:"image/*",onChange:t[0]||(t[0]=function(){return r.onChangeFile&&r.onChangeFile.apply(r,arguments)}),name:"file"},null,32)}var s={props:["modelValue"],setup:function(e,t){function n(e){var n=e.target,i=n.files;if(i&&i[0]){var r=new FileReader;r.onload=function(e){t.emit("imagInput",e.target.result)},r.readAsDataURL(i[0])}t.emit("update:modelValue",e.target.files[0])}return{onChangeFile:n}}},o=n("6b0d"),a=n.n(o);const c=a()(s,[["render",r]]);t["a"]=c},c760:function(e,t,n){"use strict";n("df35")},cbfe:function(e,t,n){"use strict";n("7130")},df35:function(e,t,n){},e364:function(e,t,n){"use strict";var i=n("7a23"),r=["value","placeholder"];function s(e,t,n,s,o,a){return Object(i["w"])(),Object(i["g"])("input",Object(i["p"])(e.$attrs,{value:n.modelValue,onInput:t[0]||(t[0]=function(){return s.updateValue&&s.updateValue.apply(s,arguments)}),placeholder:n.placeholder}),null,16,r)}n("a9e3");var o={props:{modelValue:[String,Number],placeholder:String},setup:function(e,t){var n=function(e){t.emit("update:modelValue",e.target.value)};return{updateValue:n}}},a=(n("f2be"),n("6b0d")),c=n.n(a);const u=c()(o,[["render",s],["__scopeId","data-v-13420a35"]]);t["a"]=u},f2be:function(e,t,n){"use strict";n("202f")},ff47:function(e,t,n){"use strict";n("4155")}}]);
//# sourceMappingURL=chunk-492872fd.8c5d6899.js.map