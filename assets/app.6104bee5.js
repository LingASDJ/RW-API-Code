import{d as en,K as ce,a2 as tn,u as nn,p as rn,k as an,a3 as sn,a4 as on,a5 as cn,a6 as ln,a7 as un,a8 as dn,a9 as fn,aa as hn,ab as pn,ac as mn,ad as gn,ae as bn,af as In,ag as yn}from"./chunks/framework.755b50bd.js";import{t as _n}from"./chunks/theme.80d98b67.js";/**
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
 *//**
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
 */const nt=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},En=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[n++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[n++],s=t[n++],o=t[n++],c=((i&7)<<18|(a&63)<<12|(s&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const a=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return e.join("")},rt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const a=t[i],s=i+1<t.length,o=s?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,d=a>>2,h=(a&3)<<4|o>>4;let g=(o&15)<<2|l>>6,b=l&63;c||(b=64,s||(g=64)),r.push(n[d],n[h],n[g],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):En(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const a=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,a==null||o==null||l==null||h==null)throw new Tn;const g=a<<2|o>>4;if(r.push(g),l!==64){const b=o<<4&240|l>>2;if(r.push(b),h!==64){const Zt=l<<6&192|h;r.push(Zt)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Tn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wn=function(t){const e=nt(t);return rt.encodeByteArray(e,!0)},it=function(t){return wn(t).replace(/\./g,"")},vn=function(t){try{return rt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function An(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Sn=()=>An().__FIREBASE_DEFAULTS__,Cn=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rn=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vn(t[1]);return e&&JSON.parse(e)},Dn=()=>{try{return Sn()||Cn()||Rn()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mn=()=>{var t;return(t=Dn())===null||t===void 0?void 0:t.config};/**
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
 */class On{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function Nn(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function be(){try{return typeof indexedDB=="object"}catch{return!1}}function Ie(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}function at(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Pn="FirebaseError";class B extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pn,Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,U.prototype.create)}}class U{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,a=this.errors[e],s=a?Bn(a,r):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new B(i,o,r)}}function Bn(t,e){return t.replace(kn,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kn=/\{\$([^}]+)}/g;function V(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const a=t[i],s=e[i];if(Me(a)&&Me(s)){if(!V(a,s))return!1}else if(a!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Me(t){return t!==null&&typeof t=="object"}/**
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
 */const Fn=1e3,$n=2,Ln=4*60*60*1e3,Un=.5;function Oe(t,e=Fn,n=$n){const r=e*Math.pow(n,t),i=Math.round(Un*r*(Math.random()-.5)*2);return Math.min(Ln,r+i)}/**
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
 */function ye(t){return t&&t._delegate?t._delegate:t}class w{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const R="[DEFAULT]";/**
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
 */class xn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new On;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vn(e))try{this.getOrInitializeService({instanceIdentifier:R})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=R){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=R){return this.instances.has(e)}getOptions(e=R){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);r===o&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&e(s,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jn(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=R){return this.component?this.component.multipleInstances?e:R:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jn(t){return t===R?void 0:t}function Vn(t){return t.instantiationMode==="EAGER"}/**
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
 */class Hn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var u;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(u||(u={}));const zn={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},qn=u.INFO,Wn={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},Gn=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Wn[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _e{constructor(e){this.name=e,this._logLevel=qn,this._logHandler=Gn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in u))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...e),this._logHandler(this,u.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...e),this._logHandler(this,u.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,u.INFO,...e),this._logHandler(this,u.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,u.WARN,...e),this._logHandler(this,u.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...e),this._logHandler(this,u.ERROR,...e)}}const Kn=(t,e)=>e.some(n=>t instanceof n);let Ne,Pe;function Xn(){return Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yn(){return Pe||(Pe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const st=new WeakMap,le=new WeakMap,ot=new WeakMap,Y=new WeakMap,Ee=new WeakMap;function Jn(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{n(v(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&st.set(n,t)}).catch(()=>{}),Ee.set(e,t),e}function Qn(t){if(le.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});le.set(t,e)}let ue={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return le.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ot.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return v(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zn(t){ue=t(ue)}function er(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(J(this),e,...n);return ot.set(r,e.sort?e.sort():[e]),v(r)}:Yn().includes(t)?function(...e){return t.apply(J(this),e),v(st.get(this))}:function(...e){return v(t.apply(J(this),e))}}function tr(t){return typeof t=="function"?er(t):(t instanceof IDBTransaction&&Qn(t),Kn(t,Xn())?new Proxy(t,ue):t)}function v(t){if(t instanceof IDBRequest)return Jn(t);if(Y.has(t))return Y.get(t);const e=tr(t);return e!==t&&(Y.set(t,e),Ee.set(e,t)),e}const J=t=>Ee.get(t);function ct(t,e,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(t,e),o=v(s);return r&&s.addEventListener("upgradeneeded",c=>{r(v(s.result),c.oldVersion,c.newVersion,v(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),o.then(c=>{a&&c.addEventListener("close",()=>a()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const nr=["get","getKey","getAll","getAllKeys","count"],rr=["put","add","delete","clear"],Q=new Map;function Be(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Q.get(e))return Q.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nr.includes(n)))return;const a=async function(s,...o){const c=this.transaction(s,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return Q.set(e,a),a}Zn(t=>({...t,get:(e,n,r)=>Be(e,n)||t.get(e,n,r),has:(e,n)=>!!Be(e,n)||t.has(e,n)}));/**
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
 */class ir{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ar(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ar(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const de="@firebase/app",ke="0.9.7";/**
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
 */const O=new _e("@firebase/app"),sr="@firebase/app-compat",or="@firebase/analytics-compat",cr="@firebase/analytics",lr="@firebase/app-check-compat",ur="@firebase/app-check",dr="@firebase/auth",fr="@firebase/auth-compat",hr="@firebase/database",pr="@firebase/database-compat",mr="@firebase/functions",gr="@firebase/functions-compat",br="@firebase/installations",Ir="@firebase/installations-compat",yr="@firebase/messaging",_r="@firebase/messaging-compat",Er="@firebase/performance",Tr="@firebase/performance-compat",wr="@firebase/remote-config",vr="@firebase/remote-config-compat",Ar="@firebase/storage",Sr="@firebase/storage-compat",Cr="@firebase/firestore",Rr="@firebase/firestore-compat",Dr="firebase";/**
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
 */const fe="[DEFAULT]",Mr={[de]:"fire-core",[sr]:"fire-core-compat",[cr]:"fire-analytics",[or]:"fire-analytics-compat",[ur]:"fire-app-check",[lr]:"fire-app-check-compat",[dr]:"fire-auth",[fr]:"fire-auth-compat",[hr]:"fire-rtdb",[pr]:"fire-rtdb-compat",[mr]:"fire-fn",[gr]:"fire-fn-compat",[br]:"fire-iid",[Ir]:"fire-iid-compat",[yr]:"fire-fcm",[_r]:"fire-fcm-compat",[Er]:"fire-perf",[Tr]:"fire-perf-compat",[wr]:"fire-rc",[vr]:"fire-rc-compat",[Ar]:"fire-gcs",[Sr]:"fire-gcs-compat",[Cr]:"fire-fst",[Rr]:"fire-fst-compat","fire-js":"fire-js",[Dr]:"fire-js-all"};/**
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
 */const H=new Map,he=new Map;function Or(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function C(t){const e=t.name;if(he.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;he.set(e,t);for(const n of H.values())Or(n,t);return!0}function x(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Nr={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},A=new U("app","Firebase",Nr);/**
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
 */class Pr{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new w("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw A.create("app-deleted",{appName:this._name})}}function lt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fe,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw A.create("bad-app-name",{appName:String(i)});if(n||(n=Mn()),!n)throw A.create("no-options");const a=H.get(i);if(a){if(V(n,a.options)&&V(r,a.config))return a;throw A.create("duplicate-app",{appName:i})}const s=new Hn(i);for(const c of he.values())s.addComponent(c);const o=new Pr(n,r,s);return H.set(i,o),o}function ut(t=fe){const e=H.get(t);if(!e&&t===fe)return lt();if(!e)throw A.create("no-app",{appName:t});return e}function E(t,e,n){var r;let i=(r=Mr[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const a=i.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const o=[`Unable to register library "${i}" with version "${e}":`];a&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),O.warn(o.join(" "));return}C(new w(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Br="firebase-heartbeat-database",kr=1,L="firebase-heartbeat-store";let Z=null;function dt(){return Z||(Z=ct(Br,kr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(L)}}}).catch(t=>{throw A.create("idb-open",{originalErrorMessage:t.message})})),Z}async function Fr(t){try{return(await dt()).transaction(L).objectStore(L).get(ft(t))}catch(e){if(e instanceof B)O.warn(e.message);else{const n=A.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});O.warn(n.message)}}}async function Fe(t,e){try{const r=(await dt()).transaction(L,"readwrite");return await r.objectStore(L).put(e,ft(t)),r.done}catch(n){if(n instanceof B)O.warn(n.message);else{const r=A.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});O.warn(r.message)}}}function ft(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $r=1024,Lr=30*24*60*60*1e3;class Ur{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$e();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Lr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$e(),{heartbeatsToSend:n,unsentEntries:r}=xr(this._heartbeatsCache.heartbeats),i=it(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $e(){return new Date().toISOString().substring(0,10)}function xr(t,e=$r){const n=[];let r=t.slice();for(const i of t){const a=n.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),Le(n)>e){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Le(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return be()?Ie().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Fr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Le(t){return it(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Vr(t){C(new w("platform-logger",e=>new ir(e),"PRIVATE")),C(new w("heartbeat",e=>new Ur(e),"PRIVATE")),E(de,ke,t),E(de,ke,"esm2017"),E("fire-js","")}Vr("");var Hr="firebase",zr="9.19.1";/**
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
 */E(Hr,zr,"app");const ht="@firebase/installations",Te="0.6.4";/**
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
 */const pt=1e4,mt=`w:${Te}`,gt="FIS_v2",qr="https://firebaseinstallations.googleapis.com/v1",Wr=60*60*1e3,Gr="installations",Kr="Installations";/**
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
 */const Xr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},N=new U(Gr,Kr,Xr);function bt(t){return t instanceof B&&t.code.includes("request-failed")}/**
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
 */function It({projectId:t}){return`${qr}/projects/${t}/installations`}function yt(t){return{token:t.token,requestStatus:2,expiresIn:Jr(t.expiresIn),creationTime:Date.now()}}async function _t(t,e){const r=(await e.json()).error;return N.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Et({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Yr(t,{refreshToken:e}){const n=Et(t);return n.append("Authorization",Qr(e)),n}async function Tt(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Jr(t){return Number(t.replace("s","000"))}function Qr(t){return`${gt} ${t}`}/**
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
 */async function Zr({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=It(t),i=Et(t),a=e.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const s={fid:n,authVersion:gt,appId:t.appId,sdkVersion:mt},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await Tt(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:yt(l.authToken)}}else throw await _t("Create Installation",c)}/**
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
 */function wt(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function ei(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ti=/^[cdef][\w-]{21}$/,pe="";function ni(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ri(t);return ti.test(n)?n:pe}catch{return pe}}function ri(t){return ei(t).substr(0,22)}/**
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
 */function G(t){return`${t.appName}!${t.appId}`}/**
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
 */const vt=new Map;function At(t,e){const n=G(t);St(n,e),ii(n,e)}function St(t,e){const n=vt.get(t);if(n)for(const r of n)r(e)}function ii(t,e){const n=ai();n&&n.postMessage({key:t,fid:e}),si()}let D=null;function ai(){return!D&&"BroadcastChannel"in self&&(D=new BroadcastChannel("[Firebase] FID Change"),D.onmessage=t=>{St(t.data.key,t.data.fid)}),D}function si(){vt.size===0&&D&&(D.close(),D=null)}/**
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
 */const oi="firebase-installations-database",ci=1,P="firebase-installations-store";let ee=null;function we(){return ee||(ee=ct(oi,ci,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(P)}}})),ee}async function z(t,e){const n=G(t),i=(await we()).transaction(P,"readwrite"),a=i.objectStore(P),s=await a.get(n);return await a.put(e,n),await i.done,(!s||s.fid!==e.fid)&&At(t,e.fid),e}async function Ct(t){const e=G(t),r=(await we()).transaction(P,"readwrite");await r.objectStore(P).delete(e),await r.done}async function K(t,e){const n=G(t),i=(await we()).transaction(P,"readwrite"),a=i.objectStore(P),s=await a.get(n),o=e(s);return o===void 0?await a.delete(n):await a.put(o,n),await i.done,o&&(!s||s.fid!==o.fid)&&At(t,o.fid),o}/**
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
 */async function ve(t){let e;const n=await K(t.appConfig,r=>{const i=li(r),a=ui(t,i);return e=a.registrationPromise,a.installationEntry});return n.fid===pe?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function li(t){const e=t||{fid:ni(),registrationStatus:0};return Rt(e)}function ui(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(N.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=di(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fi(t)}:{installationEntry:e}}async function di(t,e){try{const n=await Zr(t,e);return z(t.appConfig,n)}catch(n){throw bt(n)&&n.customData.serverCode===409?await Ct(t.appConfig):await z(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function fi(t){let e=await Ue(t.appConfig);for(;e.registrationStatus===1;)await wt(100),e=await Ue(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ve(t);return r||n}return e}function Ue(t){return K(t,e=>{if(!e)throw N.create("installation-not-found");return Rt(e)})}function Rt(t){return hi(t)?{fid:t.fid,registrationStatus:0}:t}function hi(t){return t.registrationStatus===1&&t.registrationTime+pt<Date.now()}/**
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
 */async function pi({appConfig:t,heartbeatServiceProvider:e},n){const r=mi(t,n),i=Yr(t,n),a=e.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const s={installation:{sdkVersion:mt,appId:t.appId}},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await Tt(()=>fetch(r,o));if(c.ok){const l=await c.json();return yt(l)}else throw await _t("Generate Auth Token",c)}function mi(t,{fid:e}){return`${It(t)}/${e}/authTokens:generate`}/**
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
 */async function Ae(t,e=!1){let n;const r=await K(t.appConfig,a=>{if(!Dt(a))throw N.create("not-registered");const s=a.authToken;if(!e&&Ii(s))return a;if(s.requestStatus===1)return n=gi(t,e),a;{if(!navigator.onLine)throw N.create("app-offline");const o=_i(a);return n=bi(t,o),o}});return n?await n:r.authToken}async function gi(t,e){let n=await xe(t.appConfig);for(;n.authToken.requestStatus===1;)await wt(100),n=await xe(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ae(t,e):r}function xe(t){return K(t,e=>{if(!Dt(e))throw N.create("not-registered");const n=e.authToken;return Ei(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function bi(t,e){try{const n=await pi(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await z(t.appConfig,r),n}catch(n){if(bt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ct(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await z(t.appConfig,r)}throw n}}function Dt(t){return t!==void 0&&t.registrationStatus===2}function Ii(t){return t.requestStatus===2&&!yi(t)}function yi(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Wr}function _i(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ei(t){return t.requestStatus===1&&t.requestTime+pt<Date.now()}/**
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
 */async function Ti(t){const e=t,{installationEntry:n,registrationPromise:r}=await ve(e);return r?r.catch(console.error):Ae(e).catch(console.error),n.fid}/**
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
 */async function wi(t,e=!1){const n=t;return await vi(n),(await Ae(n,e)).token}async function vi(t){const{registrationPromise:e}=await ve(t);e&&await e}/**
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
 */function Ai(t){if(!t||!t.options)throw te("App Configuration");if(!t.name)throw te("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw te(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function te(t){return N.create("missing-app-config-values",{valueName:t})}/**
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
 */const Mt="installations",Si="installations-internal",Ci=t=>{const e=t.getProvider("app").getImmediate(),n=Ai(e),r=x(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ri=t=>{const e=t.getProvider("app").getImmediate(),n=x(e,Mt).getImmediate();return{getId:()=>Ti(n),getToken:i=>wi(n,i)}};function Di(){C(new w(Mt,Ci,"PUBLIC")),C(new w(Si,Ri,"PRIVATE"))}Di();E(ht,Te);E(ht,Te,"esm2017");/**
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
 */const q="analytics",Mi="firebase_id",Oi="origin",Ni=60*1e3,Pi="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Se="https://www.googletagmanager.com/gtag/js";/**
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
 */const m=new _e("@firebase/analytics");/**
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
 */const Bi={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},y=new U("analytics","Analytics",Bi);/**
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
 */function ki(t){if(!t.startsWith(Se)){const e=y.create("invalid-gtag-resource",{gtagURL:t});return m.warn(e.message),""}return t}function Ot(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Fi(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function $i(t,e){const n=Fi("firebase-js-sdk-policy",{createScriptURL:ki}),r=document.createElement("script"),i=`${Se}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Li(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Ui(t,e,n,r,i,a){const s=r[i];try{if(s)await e[s];else{const c=(await Ot(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(o){m.error(o)}t("config",i,a)}async function xi(t,e,n,r,i){try{let a=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const o=await Ot(n);for(const c of s){const l=o.find(h=>h.measurementId===c),d=l&&e[l.appId];if(d)a.push(d);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),t("event",r,i||{})}catch(a){m.error(a)}}function ji(t,e,n,r){async function i(a,s,o){try{a==="event"?await xi(t,e,n,s,o):a==="config"?await Ui(t,e,n,r,s,o):a==="consent"?t("consent","update",o):t("set",s)}catch(c){m.error(c)}}return i}function Vi(t,e,n,r,i){let a=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=ji(a,t,e,n),{gtagCore:a,wrappedGtag:window[i]}}function Hi(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Se)&&n.src.includes(t))return n;return null}/**
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
 */const zi=30,qi=1e3;class Wi{constructor(e={},n=qi){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Nt=new Wi;function Gi(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ki(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Gi(r)},a=Pi.replace("{app-id}",n),s=await fetch(a,i);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();!((e=c.error)===null||e===void 0)&&e.message&&(o=c.error.message)}catch{}throw y.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Xi(t,e=Nt,n){const{appId:r,apiKey:i,measurementId:a}=t.options;if(!r)throw y.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw y.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Qi;return setTimeout(async()=>{o.abort()},n!==void 0?n:Ni),Pt({appId:r,apiKey:i,measurementId:a},s,o,e)}async function Pt(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Nt){var a;const{appId:s,measurementId:o}=t;try{await Yi(r,e)}catch(c){if(o)return m.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw c}try{const c=await Ki(t);return i.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!Ji(l)){if(i.deleteThrottleMetadata(s),o)return m.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw c}const d=Number((a=l==null?void 0:l.customData)===null||a===void 0?void 0:a.httpStatus)===503?Oe(n,i.intervalMillis,zi):Oe(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,h),m.debug(`Calling attemptFetch again in ${d} millis`),Pt(t,h,r,i)}}function Yi(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),a=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(a),r(y.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ji(t){if(!(t instanceof B)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Qi{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Zi(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const a=await e,s=Object.assign(Object.assign({},r),{send_to:a});t("event",n,s)}}/**
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
 */async function ea(){if(be())try{await Ie()}catch(t){return m.warn(y.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return m.warn(y.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ta(t,e,n,r,i,a,s){var o;const c=Xi(t);c.then(b=>{n[b.measurementId]=b.appId,t.options.measurementId&&b.measurementId!==t.options.measurementId&&m.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>m.error(b)),e.push(c);const l=ea().then(b=>{if(b)return r.getId()}),[d,h]=await Promise.all([c,l]);Hi(a)||$i(a,d.measurementId),i("js",new Date);const g=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return g[Oi]="firebase",g.update=!0,h!=null&&(g[Mi]=h),i("config",d.measurementId,g),d.measurementId}/**
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
 */class na{constructor(e){this.app=e}_delete(){return delete $[this.app.options.appId],Promise.resolve()}}let $={},je=[];const Ve={};let ne="dataLayer",ra="gtag",He,Bt,ze=!1;function ia(){const t=[];if(Nn()&&t.push("This is a browser extension environment."),at()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=y.create("invalid-analytics-context",{errorInfo:e});m.warn(n.message)}}function aa(t,e,n){ia();const r=t.options.appId;if(!r)throw y.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)m.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw y.create("no-api-key");if($[r]!=null)throw y.create("already-exists",{id:r});if(!ze){Li(ne);const{wrappedGtag:a,gtagCore:s}=Vi($,je,Ve,ne,ra);Bt=a,He=s,ze=!0}return $[r]=ta(t,je,Ve,e,He,ne,n),new na(t)}function sa(t=ut()){t=ye(t);const e=x(t,q);return e.isInitialized()?e.getImmediate():oa(t)}function oa(t,e={}){const n=x(t,q);if(n.isInitialized()){const i=n.getImmediate();if(V(e,n.getOptions()))return i;throw y.create("already-initialized")}return n.initialize({options:e})}function ca(t,e,n,r){t=ye(t),Zi(Bt,$[t.app.options.appId],e,n,r).catch(i=>m.error(i))}const qe="@firebase/analytics",We="0.9.5";function la(){C(new w(q,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return aa(r,i,n)},"PUBLIC")),C(new w("analytics-internal",t,"PRIVATE")),E(qe,We),E(qe,We,"esm2017");function t(e){try{const n=e.getProvider(q).getImmediate();return{logEvent:(r,i,a)=>ca(n,r,i,a)}}catch(n){throw y.create("interop-component-reg-failed",{reason:n})}}}la();const Ge="@firebase/performance",me="0.6.4";/**
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
 */const kt=me,ua="FB-PERF-TRACE-START",da="FB-PERF-TRACE-STOP",ge="FB-PERF-TRACE-MEASURE",Ft="_wt_",$t="_fp",Lt="_fcp",Ut="_fid",xt="@firebase/performance/config",jt="@firebase/performance/configexpire",fa="performance",Vt="Performance";/**
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
 */const ha={["trace started"]:"Trace {$traceName} was started before.",["trace stopped"]:"Trace {$traceName} is not running.",["nonpositive trace startTime"]:"Trace {$traceName} startTime should be positive.",["nonpositive trace duration"]:"Trace {$traceName} duration should be positive.",["no window"]:"Window is not available.",["no app id"]:"App id is not available.",["no project id"]:"Project id is not available.",["no api key"]:"Api key is not available.",["invalid cc log"]:"Attempted to queue invalid cc event",["FB not default"]:"Performance can only start when Firebase app instance is the default one.",["RC response not ok"]:"RC response is not ok",["invalid attribute name"]:"Attribute name {$attributeName} is invalid.",["invalid attribute value"]:"Attribute value {$attributeValue} is invalid.",["invalid custom metric name"]:"Custom metric name {$customMetricName} is invalid",["invalid String merger input"]:"Input for String merger is invalid, contact support team to resolve.",["already initialized"]:"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},p=new U(fa,Vt,ha);/**
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
 */const T=new _e(Vt);T.logLevel=u.INFO;/**
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
 */let re,Ht;class f{constructor(e){if(this.window=e,!e)throw p.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,n,r){!this.performance||!this.performance.measure||this.performance.measure(e,n,r)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!at()?(T.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):be()?!0:(T.info("IndexedDB is not supported by current browswer"),!1)}setupObserver(e,n){if(!this.PerformanceObserver)return;new this.PerformanceObserver(i=>{for(const a of i.getEntries())n(a)}).observe({entryTypes:[e]})}static getInstance(){return re===void 0&&(re=new f(Ht)),re}}function pa(t){Ht=t}/**
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
 */let zt;function ma(t){const e=t.getId();return e.then(n=>{zt=n}),e}function Ce(){return zt}function ga(t){const e=t.getToken();return e.then(n=>{}),e}/**
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
 */function Ke(t,e){const n=t.length-e.length;if(n<0||n>1)throw p.create("invalid String merger input");const r=[];for(let i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}/**
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
 */let ie;class I{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=Ke("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=Ke("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return ie===void 0&&(ie=new I),ie}}/**
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
 */var k;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"})(k||(k={}));const ba=["firebase_","google_","ga_"],Ia=new RegExp("^[a-zA-Z]\\w*$"),ya=40,_a=100;function Ea(){const t=f.getInstance().navigator;return t!=null&&t.serviceWorker?t.serviceWorker.controller?2:3:1}function qt(){switch(f.getInstance().document.visibilityState){case"visible":return k.VISIBLE;case"hidden":return k.HIDDEN;default:return k.UNKNOWN}}function Ta(){const e=f.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function wa(t){return t.length===0||t.length>ya?!1:!ba.some(n=>t.startsWith(n))&&!!t.match(Ia)}function va(t){return t.length!==0&&t.length<=_a}/**
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
 */function Wt(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.appId;if(!n)throw p.create("no app id");return n}function Aa(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.projectId;if(!n)throw p.create("no project id");return n}function Sa(t){var e;const n=(e=t.options)===null||e===void 0?void 0:e.apiKey;if(!n)throw p.create("no api key");return n}/**
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
 */const Ca="0.0.1",_={loggingEnabled:!0},Ra="FIREBASE_INSTALLATIONS_AUTH";function Da(t,e){const n=Ma();return n?(Xe(n),Promise.resolve()):Pa(t,e).then(Xe).then(r=>Oa(r),()=>{})}function Ma(){const t=f.getInstance().localStorage;if(!t)return;const e=t.getItem(jt);if(!e||!Ba(e))return;const n=t.getItem(xt);if(n)try{return JSON.parse(n)}catch{return}}function Oa(t){const e=f.getInstance().localStorage;!t||!e||(e.setItem(xt,JSON.stringify(t)),e.setItem(jt,String(Date.now()+I.getInstance().configTimeToLive*60*60*1e3)))}const Na="Could not fetch config, will use default configs";function Pa(t,e){return ga(t.installations).then(n=>{const r=Aa(t.app),i=Sa(t.app),a=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,s=new Request(a,{method:"POST",headers:{Authorization:`${Ra} ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:Wt(t.app),app_version:kt,sdk_version:Ca})});return fetch(s).then(o=>{if(o.ok)return o.json();throw p.create("RC response not ok")})}).catch(()=>{T.info(Na)})}function Xe(t){if(!t)return t;const e=I.getInstance(),n=t.entries||{};return n.fpr_enabled!==void 0?e.loggingEnabled=String(n.fpr_enabled)==="true":e.loggingEnabled=_.loggingEnabled,n.fpr_log_source?e.logSource=Number(n.fpr_log_source):_.logSource&&(e.logSource=_.logSource),n.fpr_log_endpoint_url?e.logEndPointUrl=n.fpr_log_endpoint_url:_.logEndPointUrl&&(e.logEndPointUrl=_.logEndPointUrl),n.fpr_log_transport_key?e.transportKey=n.fpr_log_transport_key:_.transportKey&&(e.transportKey=_.transportKey),n.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):_.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=_.networkRequestsSamplingRate),n.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):_.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=_.tracesSamplingRate),e.logTraceAfterSampling=Ye(e.tracesSamplingRate),e.logNetworkAfterSampling=Ye(e.networkRequestsSamplingRate),t}function Ba(t){return Number(t)>Date.now()}function Ye(t){return Math.random()<=t}/**
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
 */let Re=1,ae;function Gt(t){return Re=2,ae=ae||Fa(t),ae}function ka(){return Re===3}function Fa(t){return $a().then(()=>ma(t.installations)).then(e=>Da(t,e)).then(()=>Je(),()=>Je())}function $a(){const t=f.getInstance().document;return new Promise(e=>{if(t&&t.readyState!=="complete"){const n=()=>{t.readyState==="complete"&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}function Je(){Re=3}/**
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
 */const De=10*1e3,La=5.5*1e3,Kt=3,Ua=1e3;let W=Kt,S=[],Qe=!1;function xa(){Qe||(X(La),Qe=!0)}function X(t){setTimeout(()=>{if(W!==0){if(!S.length)return X(De);ja()}},t)}function ja(){const t=S.splice(0,Ua),e=t.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:I.getInstance().logSource,log_event:e};Va(n,t).catch(()=>{S=[...t,...S],W--,T.info(`Tries left: ${W}.`),X(De)})}function Va(t,e){return Ha(t).then(n=>(n.ok||T.info("Call to Firebase backend failed."),n.json())).then(n=>{const r=Number(n.nextRequestWaitMillis);let i=De;isNaN(r)||(i=Math.max(r,i));const a=n.logResponseDetails;Array.isArray(a)&&a.length>0&&a[0].responseAction==="RETRY_REQUEST_LATER"&&(S=[...e,...S],T.info("Retry transport request later.")),W=Kt,X(i)})}function Ha(t){const e=I.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}function za(t){if(!t.eventTime||!t.message)throw p.create("invalid cc log");S=[...S,t]}function qa(t){return(...e)=>{const n=t(...e);za({message:n,eventTime:Date.now()})}}/**
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
 */let se;function Xt(t,e){se||(se=qa(Ga)),se(t,e)}function j(t){const e=I.getInstance();!e.instrumentationEnabled&&t.isAuto||!e.dataCollectionEnabled&&!t.isAuto||f.getInstance().requiredApisAvailable()&&(t.isAuto&&qt()!==k.VISIBLE||(ka()?oe(t):Gt(t.performanceController).then(()=>oe(t),()=>oe(t))))}function oe(t){if(!Ce())return;const e=I.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||setTimeout(()=>Xt(t,1),0)}function Wa(t){const e=I.getInstance();if(!e.instrumentationEnabled)return;const n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n===r||n===i||!e.loggingEnabled||!e.logNetworkAfterSampling||setTimeout(()=>Xt(t,0),0)}function Ga(t,e){return e===0?Ka(t):Xa(t)}function Ka(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:Yt(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}function Xa(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};Object.keys(t.counters).length!==0&&(e.counters=t.counters);const n=t.getAttributes();Object.keys(n).length!==0&&(e.custom_attributes=n);const r={application_info:Yt(t.performanceController.app),trace_metric:e};return JSON.stringify(r)}function Yt(t){return{google_app_id:Wt(t),app_instance_id:Ce(),web_app_info:{sdk_version:kt,page_url:f.getInstance().getUrl(),service_worker_status:Ea(),visibility_state:qt(),effective_connection_type:Ta()},application_process_state:0}}/**
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
 */const Ya=100,Ja="_",Qa=[$t,Lt,Ut];function Za(t,e){return t.length===0||t.length>Ya?!1:e&&e.startsWith(Ft)&&Qa.indexOf(t)>-1||!t.startsWith(Ja)}function es(t){const e=Math.floor(t);return e<t&&T.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
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
 */class M{constructor(e,n,r=!1,i){this.performanceController=e,this.name=n,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=f.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${ua}-${this.randomId}-${this.name}`,this.traceStopMark=`${da}-${this.randomId}-${this.name}`,this.traceMeasure=i||`${ge}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw p.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw p.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),j(this)}record(e,n,r){if(e<=0)throw p.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw p.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(n*1e3),this.startTimeUs=Math.floor(e*1e3),r&&r.attributes&&(this.customAttributes=Object.assign({},r.attributes)),r&&r.metrics)for(const i of Object.keys(r.metrics))isNaN(Number(r.metrics[i]))||(this.counters[i]=Math.floor(Number(r.metrics[i])));j(this)}incrementMetric(e,n=1){this.counters[e]===void 0?this.putMetric(e,n):this.putMetric(e,this.counters[e]+n)}putMetric(e,n){if(Za(e,this.name))this.counters[e]=es(n??0);else throw p.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,n){const r=wa(e),i=va(n);if(r&&i){this.customAttributes[e]=n;return}if(!r)throw p.create("invalid attribute name",{attributeName:e});if(!i)throw p.create("invalid attribute value",{attributeValue:n})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),n=e&&e[0];n&&(this.durationUs=Math.floor(n.duration*1e3),this.startTimeUs=Math.floor((n.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,n,r,i){const a=f.getInstance().getUrl();if(!a)return;const s=new M(e,Ft+a,!0),o=Math.floor(f.getInstance().getTimeOrigin()*1e3);s.setStartTime(o),n&&n[0]&&(s.setDuration(Math.floor(n[0].duration*1e3)),s.putMetric("domInteractive",Math.floor(n[0].domInteractive*1e3)),s.putMetric("domContentLoadedEventEnd",Math.floor(n[0].domContentLoadedEventEnd*1e3)),s.putMetric("loadEventEnd",Math.floor(n[0].loadEventEnd*1e3)));const c="first-paint",l="first-contentful-paint";if(r){const d=r.find(g=>g.name===c);d&&d.startTime&&s.putMetric($t,Math.floor(d.startTime*1e3));const h=r.find(g=>g.name===l);h&&h.startTime&&s.putMetric(Lt,Math.floor(h.startTime*1e3)),i&&s.putMetric(Ut,Math.floor(i*1e3))}j(s)}static createUserTimingTrace(e,n){const r=new M(e,n,!1,n);j(r)}}/**
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
 */function Ze(t,e){const n=e;if(!n||n.responseStart===void 0)return;const r=f.getInstance().getTimeOrigin(),i=Math.floor((n.startTime+r)*1e3),a=n.responseStart?Math.floor((n.responseStart-n.startTime)*1e3):void 0,s=Math.floor((n.responseEnd-n.startTime)*1e3),o=n.name&&n.name.split("?")[0],c={performanceController:t,url:o,responsePayloadBytes:n.transferSize,startTimeUs:i,timeToResponseInitiatedUs:a,timeToResponseCompletedUs:s};Wa(c)}/**
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
 */const ts=5e3;function et(t){Ce()&&(setTimeout(()=>rs(t),0),setTimeout(()=>ns(t),0),setTimeout(()=>is(t),0))}function ns(t){const e=f.getInstance(),n=e.getEntriesByType("resource");for(const r of n)Ze(t,r);e.setupObserver("resource",r=>Ze(t,r))}function rs(t){const e=f.getInstance(),n=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");if(e.onFirstInputDelay){let i=setTimeout(()=>{M.createOobTrace(t,n,r),i=void 0},ts);e.onFirstInputDelay(a=>{i&&(clearTimeout(i),M.createOobTrace(t,n,r,a))})}else M.createOobTrace(t,n,r)}function is(t){const e=f.getInstance(),n=e.getEntriesByType("measure");for(const r of n)tt(t,r);e.setupObserver("measure",r=>tt(t,r))}function tt(t,e){const n=e.name;n.substring(0,ge.length)!==ge&&M.createUserTimingTrace(t,n)}/**
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
 */class as{constructor(e,n){this.app=e,this.installations=n,this.initialized=!1}_init(e){this.initialized||((e==null?void 0:e.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),(e==null?void 0:e.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),f.getInstance().requiredApisAvailable()?Ie().then(n=>{n&&(xa(),Gt(this).then(()=>et(this),()=>et(this)),this.initialized=!0)}).catch(n=>{T.info(`Environment doesn't support IndexedDB: ${n}`)}):T.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){I.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return I.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){I.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return I.getInstance().dataCollectionEnabled}}const ss="[DEFAULT]";function os(t=ut()){return t=ye(t),x(t,"performance").getImmediate()}const cs=(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if(n.name!==ss)throw p.create("FB not default");if(typeof window>"u")throw p.create("no window");pa(window);const i=new as(n,r);return i._init(e),i};function ls(){C(new w("performance",cs,"PUBLIC")),E(Ge,me),E(Ge,me,"esm2017")}ls();const us={apiKey:"AIzaSyANVvapu0ihi1cM8ZzuXTkwjx9lM_J1RyQ",authDomain:"rw-api-code-d0779.firebaseapp.com",projectId:"rw-api-code-d0779",storageBucket:"rw-api-code-d0779.appspot.com",messagingSenderId:"363611843335",appId:"1:363611843335:web:f15aef7ab427f52b4033a2",measurementId:"G-XJH5TKP5VL"},Jt=lt(us);sa(Jt);os(Jt);function ds(t){return new Promise(e=>setTimeout(e,t))}async function fs(){try{await navigator.permissions.query({name:"clipboard-write"})}catch(t){console.error(t)}}async function hs(){try{await ds(1e3);const t=document.getElementsByClassName("copy");for(let e=0;e<t.length;e++){const n=t[e];n.addEventListener("touchend",async()=>{await fs();const a=[...n.parentNode.querySelector("code").querySelectorAll("span")],s=[...new Set(a.map(o=>o.textContent))].join("");try{await navigator.clipboard.writeText(s)}catch{const c=document.createElement("textarea");c.value=s,document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c)}})}}catch(t){console.error(t)}}setTimeout(()=>{const t=document.querySelector(".NotFound"),e=document.createElement("img");e.src="https://img.quankexia.com/kelongwo/wp-content/uploads/2021/07/2021072708045950.png",e.alt="404 Error",t.insertBefore(e,t.firstChild),t.querySelector(".title").textContent="无法找到该页面",t.querySelector(".quote").textContent="无法找到该页面",t.querySelector(".link").textContent="返回首页"},200);hs();function Qt(t){if(t.extends){const e=Qt(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const F=Qt(_n),ps=en({name:"VitePressApp",setup(){const{site:t}=nn();return rn(()=>{an(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),sn(),on(),cn(),F.setup&&F.setup(),()=>ln(F.Layout)}});async function ms(){const t=bs(),e=gs();e.provide(un,t);const n=dn(t.route);return e.provide(fn,n),e.component("Content",hn),e.component("ClientOnly",pn),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),F.enhanceApp&&await F.enhanceApp({app:e,router:t,siteData:mn}),{app:e,router:t,data:n}}function gs(){return gn(ps)}function bs(){let t=ce,e;return bn(n=>{let r=In(n);return t&&(e=r),(t||e===r)&&(r=r.replace(/\.js$/,".lean.js")),ce&&(t=!1),yn(()=>import(r),[])},F.NotFound)}ce&&ms().then(({app:t,router:e,data:n})=>{e.go().then(()=>{tn(e.route,n.site),t.mount("#app")})});export{ms as createApp};
