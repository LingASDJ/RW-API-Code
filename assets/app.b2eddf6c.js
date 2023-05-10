import{d as dn,K as fe,a2 as fn,u as hn,p as pn,k as mn,a3 as gn,a4 as bn,a5 as In,a6 as yn,a7 as En,a8 as _n,a9 as wn,aa as Tn,ab as vn,ac as An,ad as Sn,ae as Cn,af as Dn,ag as Rn}from"./chunks/framework.621e5595.js";import{t as Mn}from"./chunks/theme.5b0ed540.js";/**
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
 */const ft=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},On=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},ht={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,d=s>>2,h=(s&3)<<4|o>>4;let g=(o&15)<<2|l>>6,b=l&63;c||(b=64,a||(g=64)),r.push(n[d],n[h],n[g],n[b])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ft(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):On(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||l==null||h==null)throw new Nn;const g=s<<2|o>>4;if(r.push(g),l!==64){const b=o<<4&240|l>>2;if(r.push(b),h!==64){const un=l<<6&192|h;r.push(un)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Nn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pn=function(e){const t=ft(e);return ht.encodeByteArray(t,!0)},pt=function(e){return Pn(e).replace(/\./g,"")},Bn=function(e){try{return ht.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function $n(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kn=()=>$n().__FIREBASE_DEFAULTS__,Fn=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ln=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Bn(e[1]);return t&&JSON.parse(t)},Un=()=>{try{return kn()||Fn()||Ln()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},xn=()=>{var e;return(e=Un())===null||e===void 0?void 0:e.config};/**
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
 */class jn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Vn(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Te(){try{return typeof indexedDB=="object"}catch{return!1}}function ve(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function mt(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Hn="FirebaseError";class $ extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Hn,Object.setPrototypeOf(this,$.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?zn(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new $(i,o,r)}}function zn(e,t){return e.replace(Wn,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Wn=/\{\$([^}]+)}/g;function H(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Fe(s)&&Fe(a)){if(!H(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fe(e){return e!==null&&typeof e=="object"}/**
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
 */const qn=1e3,Gn=2,Kn=4*60*60*1e3,Xn=.5;function Le(e,t=qn,n=Gn){const r=t*Math.pow(n,e),i=Math.round(Xn*r*(Math.random()-.5)*2);return Math.min(Kn,r+i)}/**
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
 */function Ae(e){return e&&e._delegate?e._delegate:e}class T{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Yn{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new jn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qn(t))try{this.getOrInitializeService({instanceIdentifier:R})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=R){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=R){return this.instances.has(t)}getOptions(t=R){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=R){return this.component?this.component.multipleInstances?t:R:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jn(e){return e===R?void 0:e}function Qn(e){return e.instantiationMode==="EAGER"}/**
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
 */class Zn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Yn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var u;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(u||(u={}));const er={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},tr=u.INFO,nr={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},rr=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=nr[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Se{constructor(t){this.name=t,this._logLevel=tr,this._logHandler=rr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in u))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?er[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...t),this._logHandler(this,u.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...t),this._logHandler(this,u.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,u.INFO,...t),this._logHandler(this,u.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,u.WARN,...t),this._logHandler(this,u.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...t),this._logHandler(this,u.ERROR,...t)}}const ir=(e,t)=>t.some(n=>e instanceof n);let Ue,xe;function sr(){return Ue||(Ue=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ar(){return xe||(xe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gt=new WeakMap,he=new WeakMap,bt=new WeakMap,J=new WeakMap,Ce=new WeakMap;function or(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(v(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&gt.set(n,e)}).catch(()=>{}),Ce.set(t,e),t}function cr(e){if(he.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});he.set(e,t)}let pe={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return he.get(e);if(t==="objectStoreNames")return e.objectStoreNames||bt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return v(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function lr(e){pe=e(pe)}function ur(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Q(this),t,...n);return bt.set(r,t.sort?t.sort():[t]),v(r)}:ar().includes(e)?function(...t){return e.apply(Q(this),t),v(gt.get(this))}:function(...t){return v(e.apply(Q(this),t))}}function dr(e){return typeof e=="function"?ur(e):(e instanceof IDBTransaction&&cr(e),ir(e,sr())?new Proxy(e,pe):e)}function v(e){if(e instanceof IDBRequest)return or(e);if(J.has(e))return J.get(e);const t=dr(e);return t!==e&&(J.set(e,t),Ce.set(t,e)),t}const Q=e=>Ce.get(e);function fr(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=v(a);return r&&a.addEventListener("upgradeneeded",c=>{r(v(a.result),c.oldVersion,c.newVersion,v(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const hr=["get","getKey","getAll","getAllKeys","count"],pr=["put","add","delete","clear"],Z=new Map;function je(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Z.get(t))return Z.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=pr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hr.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return Z.set(t,s),s}lr(e=>({...e,get:(t,n,r)=>je(t,n)||e.get(t,n,r),has:(t,n)=>!!je(t,n)||e.has(t,n)}));/**
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
 */class mr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gr(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const me="@firebase/app",Ve="0.9.9";/**
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
 */const N=new Se("@firebase/app"),br="@firebase/app-compat",Ir="@firebase/analytics-compat",yr="@firebase/analytics",Er="@firebase/app-check-compat",_r="@firebase/app-check",wr="@firebase/auth",Tr="@firebase/auth-compat",vr="@firebase/database",Ar="@firebase/database-compat",Sr="@firebase/functions",Cr="@firebase/functions-compat",Dr="@firebase/installations",Rr="@firebase/installations-compat",Mr="@firebase/messaging",Or="@firebase/messaging-compat",Nr="@firebase/performance",Pr="@firebase/performance-compat",Br="@firebase/remote-config",$r="@firebase/remote-config-compat",kr="@firebase/storage",Fr="@firebase/storage-compat",Lr="@firebase/firestore",Ur="@firebase/firestore-compat",xr="firebase";/**
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
 */const ge="[DEFAULT]",jr={[me]:"fire-core",[br]:"fire-core-compat",[yr]:"fire-analytics",[Ir]:"fire-analytics-compat",[_r]:"fire-app-check",[Er]:"fire-app-check-compat",[wr]:"fire-auth",[Tr]:"fire-auth-compat",[vr]:"fire-rtdb",[Ar]:"fire-rtdb-compat",[Sr]:"fire-fn",[Cr]:"fire-fn-compat",[Dr]:"fire-iid",[Rr]:"fire-iid-compat",[Mr]:"fire-fcm",[Or]:"fire-fcm-compat",[Nr]:"fire-perf",[Pr]:"fire-perf-compat",[Br]:"fire-rc",[$r]:"fire-rc-compat",[kr]:"fire-gcs",[Fr]:"fire-gcs-compat",[Lr]:"fire-fst",[Ur]:"fire-fst-compat","fire-js":"fire-js",[xr]:"fire-js-all"};/**
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
 */const z=new Map,be=new Map;function Vr(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function D(e){const t=e.name;if(be.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;be.set(t,e);for(const n of z.values())Vr(n,e);return!0}function j(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Hr={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},A=new x("app","Firebase",Hr);/**
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
 */class zr{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new T("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw A.create("app-deleted",{appName:this._name})}}function It(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ge,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw A.create("bad-app-name",{appName:String(i)});if(n||(n=xn()),!n)throw A.create("no-options");const s=z.get(i);if(s){if(H(n,s.options)&&H(r,s.config))return s;throw A.create("duplicate-app",{appName:i})}const a=new Zn(i);for(const c of be.values())a.addComponent(c);const o=new zr(n,r,a);return z.set(i,o),o}function yt(e=ge){const t=z.get(e);if(!t&&e===ge)return It();if(!t)throw A.create("no-app",{appName:e});return t}function _(e,t,n){var r;let i=(r=jr[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),N.warn(o.join(" "));return}D(new T(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Wr="firebase-heartbeat-database",qr=1,U="firebase-heartbeat-store";let ee=null;function Et(){return ee||(ee=fr(Wr,qr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(U)}}}).catch(e=>{throw A.create("idb-open",{originalErrorMessage:e.message})})),ee}async function Gr(e){try{return(await Et()).transaction(U).objectStore(U).get(_t(e))}catch(t){if(t instanceof $)N.warn(t.message);else{const n=A.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});N.warn(n.message)}}}async function He(e,t){try{const r=(await Et()).transaction(U,"readwrite");return await r.objectStore(U).put(t,_t(e)),r.done}catch(n){if(n instanceof $)N.warn(n.message);else{const r=A.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});N.warn(r.message)}}}function _t(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Kr=1024,Xr=30*24*60*60*1e3;class Yr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ze();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Xr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ze(),{heartbeatsToSend:n,unsentEntries:r}=Jr(this._heartbeatsCache.heartbeats),i=pt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ze(){return new Date().toISOString().substring(0,10)}function Jr(e,t=Kr){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),We(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),We(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Te()?ve().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Gr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return He(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return He(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function We(e){return pt(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Zr(e){D(new T("platform-logger",t=>new mr(t),"PRIVATE")),D(new T("heartbeat",t=>new Yr(t),"PRIVATE")),_(me,Ve,e),_(me,Ve,"esm2017"),_("fire-js","")}Zr("");var ei="firebase",ti="9.21.0";/**
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
 */_(ei,ti,"app");const ni=(e,t)=>t.some(n=>e instanceof n);let qe,Ge;function ri(){return qe||(qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ii(){return Ge||(Ge=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wt=new WeakMap,Ie=new WeakMap,Tt=new WeakMap,te=new WeakMap,De=new WeakMap;function si(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(S(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&wt.set(n,e)}).catch(()=>{}),De.set(t,e),t}function ai(e){if(Ie.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Ie.set(e,t)}let ye={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ie.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Tt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return S(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function oi(e){ye=e(ye)}function ci(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ne(this),t,...n);return Tt.set(r,t.sort?t.sort():[t]),S(r)}:ii().includes(e)?function(...t){return e.apply(ne(this),t),S(wt.get(this))}:function(...t){return S(e.apply(ne(this),t))}}function li(e){return typeof e=="function"?ci(e):(e instanceof IDBTransaction&&ai(e),ni(e,ri())?new Proxy(e,ye):e)}function S(e){if(e instanceof IDBRequest)return si(e);if(te.has(e))return te.get(e);const t=li(e);return t!==e&&(te.set(e,t),De.set(t,e)),t}const ne=e=>De.get(e);function ui(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=S(a);return r&&a.addEventListener("upgradeneeded",c=>{r(S(a.result),c.oldVersion,c.newVersion,S(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const di=["get","getKey","getAll","getAllKeys","count"],fi=["put","add","delete","clear"],re=new Map;function Ke(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(re.get(t))return re.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=fi.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||di.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return re.set(t,s),s}oi(e=>({...e,get:(t,n,r)=>Ke(t,n)||e.get(t,n,r),has:(t,n)=>!!Ke(t,n)||e.has(t,n)}));const vt="@firebase/installations",Re="0.6.4";/**
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
 */const At=1e4,St=`w:${Re}`,Ct="FIS_v2",hi="https://firebaseinstallations.googleapis.com/v1",pi=60*60*1e3,mi="installations",gi="Installations";/**
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
 */const bi={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},P=new x(mi,gi,bi);function Dt(e){return e instanceof $&&e.code.includes("request-failed")}/**
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
 */function Rt({projectId:e}){return`${hi}/projects/${e}/installations`}function Mt(e){return{token:e.token,requestStatus:2,expiresIn:yi(e.expiresIn),creationTime:Date.now()}}async function Ot(e,t){const r=(await t.json()).error;return P.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Nt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ii(e,{refreshToken:t}){const n=Nt(e);return n.append("Authorization",Ei(t)),n}async function Pt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function yi(e){return Number(e.replace("s","000"))}function Ei(e){return`${Ct} ${e}`}/**
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
 */async function _i({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Rt(e),i=Nt(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={fid:n,authVersion:Ct,appId:e.appId,sdkVersion:St},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await Pt(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Mt(l.authToken)}}else throw await Ot("Create Installation",c)}/**
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
 */function Bt(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function wi(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ti=/^[cdef][\w-]{21}$/,Ee="";function vi(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Ai(e);return Ti.test(n)?n:Ee}catch{return Ee}}function Ai(e){return wi(e).substr(0,22)}/**
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
 */function K(e){return`${e.appName}!${e.appId}`}/**
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
 */const $t=new Map;function kt(e,t){const n=K(e);Ft(n,t),Si(n,t)}function Ft(e,t){const n=$t.get(e);if(n)for(const r of n)r(t)}function Si(e,t){const n=Ci();n&&n.postMessage({key:e,fid:t}),Di()}let M=null;function Ci(){return!M&&"BroadcastChannel"in self&&(M=new BroadcastChannel("[Firebase] FID Change"),M.onmessage=e=>{Ft(e.data.key,e.data.fid)}),M}function Di(){$t.size===0&&M&&(M.close(),M=null)}/**
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
 */const Ri="firebase-installations-database",Mi=1,B="firebase-installations-store";let ie=null;function Me(){return ie||(ie=ui(Ri,Mi,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(B)}}})),ie}async function W(e,t){const n=K(e),i=(await Me()).transaction(B,"readwrite"),s=i.objectStore(B),a=await s.get(n);return await s.put(t,n),await i.done,(!a||a.fid!==t.fid)&&kt(e,t.fid),t}async function Lt(e){const t=K(e),r=(await Me()).transaction(B,"readwrite");await r.objectStore(B).delete(t),await r.done}async function X(e,t){const n=K(e),i=(await Me()).transaction(B,"readwrite"),s=i.objectStore(B),a=await s.get(n),o=t(a);return o===void 0?await s.delete(n):await s.put(o,n),await i.done,o&&(!a||a.fid!==o.fid)&&kt(e,o.fid),o}/**
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
 */async function Oe(e){let t;const n=await X(e.appConfig,r=>{const i=Oi(r),s=Ni(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Ee?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Oi(e){const t=e||{fid:vi(),registrationStatus:0};return Ut(t)}function Ni(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(P.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Pi(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Bi(e)}:{installationEntry:t}}async function Pi(e,t){try{const n=await _i(e,t);return W(e.appConfig,n)}catch(n){throw Dt(n)&&n.customData.serverCode===409?await Lt(e.appConfig):await W(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Bi(e){let t=await Xe(e.appConfig);for(;t.registrationStatus===1;)await Bt(100),t=await Xe(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Oe(e);return r||n}return t}function Xe(e){return X(e,t=>{if(!t)throw P.create("installation-not-found");return Ut(t)})}function Ut(e){return $i(e)?{fid:e.fid,registrationStatus:0}:e}function $i(e){return e.registrationStatus===1&&e.registrationTime+At<Date.now()}/**
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
 */async function ki({appConfig:e,heartbeatServiceProvider:t},n){const r=Fi(e,n),i=Ii(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={installation:{sdkVersion:St,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await Pt(()=>fetch(r,o));if(c.ok){const l=await c.json();return Mt(l)}else throw await Ot("Generate Auth Token",c)}function Fi(e,{fid:t}){return`${Rt(e)}/${t}/authTokens:generate`}/**
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
 */async function Ne(e,t=!1){let n;const r=await X(e.appConfig,s=>{if(!xt(s))throw P.create("not-registered");const a=s.authToken;if(!t&&xi(a))return s;if(a.requestStatus===1)return n=Li(e,t),s;{if(!navigator.onLine)throw P.create("app-offline");const o=Vi(s);return n=Ui(e,o),o}});return n?await n:r.authToken}async function Li(e,t){let n=await Ye(e.appConfig);for(;n.authToken.requestStatus===1;)await Bt(100),n=await Ye(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ne(e,t):r}function Ye(e){return X(e,t=>{if(!xt(t))throw P.create("not-registered");const n=t.authToken;return Hi(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ui(e,t){try{const n=await ki(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await W(e.appConfig,r),n}catch(n){if(Dt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Lt(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await W(e.appConfig,r)}throw n}}function xt(e){return e!==void 0&&e.registrationStatus===2}function xi(e){return e.requestStatus===2&&!ji(e)}function ji(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+pi}function Vi(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Hi(e){return e.requestStatus===1&&e.requestTime+At<Date.now()}/**
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
 */async function zi(e){const t=e,{installationEntry:n,registrationPromise:r}=await Oe(t);return r?r.catch(console.error):Ne(t).catch(console.error),n.fid}/**
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
 */async function Wi(e,t=!1){const n=e;return await qi(n),(await Ne(n,t)).token}async function qi(e){const{registrationPromise:t}=await Oe(e);t&&await t}/**
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
 */function Gi(e){if(!e||!e.options)throw se("App Configuration");if(!e.name)throw se("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw se(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function se(e){return P.create("missing-app-config-values",{valueName:e})}/**
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
 */const jt="installations",Ki="installations-internal",Xi=e=>{const t=e.getProvider("app").getImmediate(),n=Gi(t),r=j(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Yi=e=>{const t=e.getProvider("app").getImmediate(),n=j(t,jt).getImmediate();return{getId:()=>zi(n),getToken:i=>Wi(n,i)}};function Ji(){D(new T(jt,Xi,"PUBLIC")),D(new T(Ki,Yi,"PRIVATE"))}Ji();_(vt,Re);_(vt,Re,"esm2017");/**
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
 */const q="analytics",Qi="firebase_id",Zi="origin",es=60*1e3,ts="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pe="https://www.googletagmanager.com/gtag/js";/**
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
 */const m=new Se("@firebase/analytics");/**
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
 */const ns={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},y=new x("analytics","Analytics",ns);/**
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
 */function rs(e){if(!e.startsWith(Pe)){const t=y.create("invalid-gtag-resource",{gtagURL:e});return m.warn(t.message),""}return e}function Vt(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function is(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ss(e,t){const n=is("firebase-js-sdk-policy",{createScriptURL:rs}),r=document.createElement("script"),i=`${Pe}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function as(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function os(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const c=(await Vt(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(o){m.error(o)}e("config",i,s)}async function cs(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const o=await Vt(n);for(const c of a){const l=o.find(h=>h.measurementId===c),d=l&&t[l.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){m.error(s)}}function ls(e,t,n,r){async function i(s,...a){try{if(s==="event"){const[o,c]=a;await cs(e,t,n,o,c)}else if(s==="config"){const[o,c]=a;await os(e,t,n,r,o,c)}else if(s==="consent"){const[o]=a;e("consent","update",o)}else if(s==="get"){const[o,c,l]=a;e("get",o,c,l)}else if(s==="set"){const[o]=a;e("set",o)}else e(s,...a)}catch(o){m.error(o)}}return i}function us(e,t,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ls(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function ds(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Pe)&&n.src.includes(e))return n;return null}/**
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
 */const fs=30,hs=1e3;class ps{constructor(t={},n=hs){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ht=new ps;function ms(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function gs(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:ms(r)},s=ts.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let o="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw y.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function bs(e,t=Ht,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw y.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw y.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Es;return setTimeout(async()=>{o.abort()},n!==void 0?n:es),zt({appId:r,apiKey:i,measurementId:s},a,o,t)}async function zt(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Ht){var s;const{appId:a,measurementId:o}=e;try{await Is(r,t)}catch(c){if(o)return m.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:o};throw c}try{const c=await gs(e);return i.deleteThrottleMetadata(a),c}catch(c){const l=c;if(!ys(l)){if(i.deleteThrottleMetadata(a),o)return m.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:o};throw c}const d=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?Le(n,i.intervalMillis,fs):Le(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(a,h),m.debug(`Calling attemptFetch again in ${d} millis`),zt(e,h,r,i)}}function Is(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(y.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ys(e){if(!(e instanceof $)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Es{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function _s(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,a=Object.assign(Object.assign({},r),{send_to:s});e("event",n,a)}}/**
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
 */async function ws(){if(Te())try{await ve()}catch(e){return m.warn(y.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return m.warn(y.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ts(e,t,n,r,i,s,a){var o;const c=bs(e);c.then(b=>{n[b.measurementId]=b.appId,e.options.measurementId&&b.measurementId!==e.options.measurementId&&m.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>m.error(b)),t.push(c);const l=ws().then(b=>{if(b)return r.getId()}),[d,h]=await Promise.all([c,l]);ds(s)||ss(s,d.measurementId),i("js",new Date);const g=(o=a==null?void 0:a.config)!==null&&o!==void 0?o:{};return g[Zi]="firebase",g.update=!0,h!=null&&(g[Qi]=h),i("config",d.measurementId,g),d.measurementId}/**
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
 */class vs{constructor(t){this.app=t}_delete(){return delete L[this.app.options.appId],Promise.resolve()}}let L={},Je=[];const Qe={};let ae="dataLayer",As="gtag",Ze,Wt,et=!1;function Ss(){const e=[];if(Vn()&&e.push("This is a browser extension environment."),mt()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=y.create("invalid-analytics-context",{errorInfo:t});m.warn(n.message)}}function Cs(e,t,n){Ss();const r=e.options.appId;if(!r)throw y.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)m.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw y.create("no-api-key");if(L[r]!=null)throw y.create("already-exists",{id:r});if(!et){as(ae);const{wrappedGtag:s,gtagCore:a}=us(L,Je,Qe,ae,As);Wt=s,Ze=a,et=!0}return L[r]=Ts(e,Je,Qe,t,Ze,ae,n),new vs(e)}function Ds(e=yt()){e=Ae(e);const t=j(e,q);return t.isInitialized()?t.getImmediate():Rs(e)}function Rs(e,t={}){const n=j(e,q);if(n.isInitialized()){const i=n.getImmediate();if(H(t,n.getOptions()))return i;throw y.create("already-initialized")}return n.initialize({options:t})}function Ms(e,t,n,r){e=Ae(e),_s(Wt,L[e.app.options.appId],t,n,r).catch(i=>m.error(i))}const tt="@firebase/analytics",nt="0.10.0";function Os(){D(new T(q,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Cs(r,i,n)},"PUBLIC")),D(new T("analytics-internal",e,"PRIVATE")),_(tt,nt),_(tt,nt,"esm2017");function e(t){try{const n=t.getProvider(q).getImmediate();return{logEvent:(r,i,s)=>Ms(n,r,i,s)}}catch(n){throw y.create("interop-component-reg-failed",{reason:n})}}}Os();const rt="@firebase/performance",_e="0.6.4";/**
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
 */const qt=_e,Ns="FB-PERF-TRACE-START",Ps="FB-PERF-TRACE-STOP",we="FB-PERF-TRACE-MEASURE",Gt="_wt_",Kt="_fp",Xt="_fcp",Yt="_fid",Jt="@firebase/performance/config",Qt="@firebase/performance/configexpire",Bs="performance",Zt="Performance";/**
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
 */const $s={["trace started"]:"Trace {$traceName} was started before.",["trace stopped"]:"Trace {$traceName} is not running.",["nonpositive trace startTime"]:"Trace {$traceName} startTime should be positive.",["nonpositive trace duration"]:"Trace {$traceName} duration should be positive.",["no window"]:"Window is not available.",["no app id"]:"App id is not available.",["no project id"]:"Project id is not available.",["no api key"]:"Api key is not available.",["invalid cc log"]:"Attempted to queue invalid cc event",["FB not default"]:"Performance can only start when Firebase app instance is the default one.",["RC response not ok"]:"RC response is not ok",["invalid attribute name"]:"Attribute name {$attributeName} is invalid.",["invalid attribute value"]:"Attribute value {$attributeValue} is invalid.",["invalid custom metric name"]:"Custom metric name {$customMetricName} is invalid",["invalid String merger input"]:"Input for String merger is invalid, contact support team to resolve.",["already initialized"]:"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},p=new x(Bs,Zt,$s);/**
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
 */const w=new Se(Zt);w.logLevel=u.INFO;/**
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
 */let oe,en;class f{constructor(t){if(this.window=t,!t)throw p.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){!this.performance||!this.performance.mark||this.performance.mark(t)}measure(t,n,r){!this.performance||!this.performance.measure||this.performance.measure(t,n,r)}getEntriesByType(t){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(t)}getEntriesByName(t){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(t)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!mt()?(w.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):Te()?!0:(w.info("IndexedDB is not supported by current browswer"),!1)}setupObserver(t,n){if(!this.PerformanceObserver)return;new this.PerformanceObserver(i=>{for(const s of i.getEntries())n(s)}).observe({entryTypes:[t]})}static getInstance(){return oe===void 0&&(oe=new f(en)),oe}}function ks(e){en=e}/**
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
 */let tn;function Fs(e){const t=e.getId();return t.then(n=>{tn=n}),t}function Be(){return tn}function Ls(e){const t=e.getToken();return t.then(n=>{}),t}/**
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
 */function it(e,t){const n=e.length-t.length;if(n<0||n>1)throw p.create("invalid String merger input");const r=[];for(let i=0;i<e.length;i++)r.push(e.charAt(i)),t.length>i&&r.push(t.charAt(i));return r.join("")}/**
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
 */let ce;class I{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=it("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=it("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return ce===void 0&&(ce=new I),ce}}/**
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
 */var k;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.VISIBLE=1]="VISIBLE",e[e.HIDDEN=2]="HIDDEN"})(k||(k={}));const Us=["firebase_","google_","ga_"],xs=new RegExp("^[a-zA-Z]\\w*$"),js=40,Vs=100;function Hs(){const e=f.getInstance().navigator;return e!=null&&e.serviceWorker?e.serviceWorker.controller?2:3:1}function nn(){switch(f.getInstance().document.visibilityState){case"visible":return k.VISIBLE;case"hidden":return k.HIDDEN;default:return k.UNKNOWN}}function zs(){const t=f.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function Ws(e){return e.length===0||e.length>js?!1:!Us.some(n=>e.startsWith(n))&&!!e.match(xs)}function qs(e){return e.length!==0&&e.length<=Vs}/**
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
 */function rn(e){var t;const n=(t=e.options)===null||t===void 0?void 0:t.appId;if(!n)throw p.create("no app id");return n}function Gs(e){var t;const n=(t=e.options)===null||t===void 0?void 0:t.projectId;if(!n)throw p.create("no project id");return n}function Ks(e){var t;const n=(t=e.options)===null||t===void 0?void 0:t.apiKey;if(!n)throw p.create("no api key");return n}/**
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
 */const Xs="0.0.1",E={loggingEnabled:!0},Ys="FIREBASE_INSTALLATIONS_AUTH";function Js(e,t){const n=Qs();return n?(st(n),Promise.resolve()):ta(e,t).then(st).then(r=>Zs(r),()=>{})}function Qs(){const e=f.getInstance().localStorage;if(!e)return;const t=e.getItem(Qt);if(!t||!na(t))return;const n=e.getItem(Jt);if(n)try{return JSON.parse(n)}catch{return}}function Zs(e){const t=f.getInstance().localStorage;!e||!t||(t.setItem(Jt,JSON.stringify(e)),t.setItem(Qt,String(Date.now()+I.getInstance().configTimeToLive*60*60*1e3)))}const ea="Could not fetch config, will use default configs";function ta(e,t){return Ls(e.installations).then(n=>{const r=Gs(e.app),i=Ks(e.app),s=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,a=new Request(s,{method:"POST",headers:{Authorization:`${Ys} ${n}`},body:JSON.stringify({app_instance_id:t,app_instance_id_token:n,app_id:rn(e.app),app_version:qt,sdk_version:Xs})});return fetch(a).then(o=>{if(o.ok)return o.json();throw p.create("RC response not ok")})}).catch(()=>{w.info(ea)})}function st(e){if(!e)return e;const t=I.getInstance(),n=e.entries||{};return n.fpr_enabled!==void 0?t.loggingEnabled=String(n.fpr_enabled)==="true":t.loggingEnabled=E.loggingEnabled,n.fpr_log_source?t.logSource=Number(n.fpr_log_source):E.logSource&&(t.logSource=E.logSource),n.fpr_log_endpoint_url?t.logEndPointUrl=n.fpr_log_endpoint_url:E.logEndPointUrl&&(t.logEndPointUrl=E.logEndPointUrl),n.fpr_log_transport_key?t.transportKey=n.fpr_log_transport_key:E.transportKey&&(t.transportKey=E.transportKey),n.fpr_vc_network_request_sampling_rate!==void 0?t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):E.networkRequestsSamplingRate!==void 0&&(t.networkRequestsSamplingRate=E.networkRequestsSamplingRate),n.fpr_vc_trace_sampling_rate!==void 0?t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):E.tracesSamplingRate!==void 0&&(t.tracesSamplingRate=E.tracesSamplingRate),t.logTraceAfterSampling=at(t.tracesSamplingRate),t.logNetworkAfterSampling=at(t.networkRequestsSamplingRate),e}function na(e){return Number(e)>Date.now()}function at(e){return Math.random()<=e}/**
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
 */let $e=1,le;function sn(e){return $e=2,le=le||ia(e),le}function ra(){return $e===3}function ia(e){return sa().then(()=>Fs(e.installations)).then(t=>Js(e,t)).then(()=>ot(),()=>ot())}function sa(){const e=f.getInstance().document;return new Promise(t=>{if(e&&e.readyState!=="complete"){const n=()=>{e.readyState==="complete"&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()})}function ot(){$e=3}/**
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
 */const ke=10*1e3,aa=5.5*1e3,an=3,oa=1e3;let G=an,C=[],ct=!1;function ca(){ct||(Y(aa),ct=!0)}function Y(e){setTimeout(()=>{if(G!==0){if(!C.length)return Y(ke);la()}},e)}function la(){const e=C.splice(0,oa),t=e.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:I.getInstance().logSource,log_event:t};ua(n,e).catch(()=>{C=[...e,...C],G--,w.info(`Tries left: ${G}.`),Y(ke)})}function ua(e,t){return da(e).then(n=>(n.ok||w.info("Call to Firebase backend failed."),n.json())).then(n=>{const r=Number(n.nextRequestWaitMillis);let i=ke;isNaN(r)||(i=Math.max(r,i));const s=n.logResponseDetails;Array.isArray(s)&&s.length>0&&s[0].responseAction==="RETRY_REQUEST_LATER"&&(C=[...t,...C],w.info("Retry transport request later.")),G=an,Y(i)})}function da(e){const t=I.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})}function fa(e){if(!e.eventTime||!e.message)throw p.create("invalid cc log");C=[...C,e]}function ha(e){return(...t)=>{const n=e(...t);fa({message:n,eventTime:Date.now()})}}/**
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
 */let ue;function on(e,t){ue||(ue=ha(ma)),ue(e,t)}function V(e){const t=I.getInstance();!t.instrumentationEnabled&&e.isAuto||!t.dataCollectionEnabled&&!e.isAuto||f.getInstance().requiredApisAvailable()&&(e.isAuto&&nn()!==k.VISIBLE||(ra()?de(e):sn(e.performanceController).then(()=>de(e),()=>de(e))))}function de(e){if(!Be())return;const t=I.getInstance();!t.loggingEnabled||!t.logTraceAfterSampling||setTimeout(()=>on(e,1),0)}function pa(e){const t=I.getInstance();if(!t.instrumentationEnabled)return;const n=e.url,r=t.logEndPointUrl.split("?")[0],i=t.flTransportEndpointUrl.split("?")[0];n===r||n===i||!t.loggingEnabled||!t.logNetworkAfterSampling||setTimeout(()=>on(e,0),0)}function ma(e,t){return t===0?ga(e):ba(e)}function ga(e){const t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs},n={application_info:cn(e.performanceController.app),network_request_metric:t};return JSON.stringify(n)}function ba(e){const t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};Object.keys(e.counters).length!==0&&(t.counters=e.counters);const n=e.getAttributes();Object.keys(n).length!==0&&(t.custom_attributes=n);const r={application_info:cn(e.performanceController.app),trace_metric:t};return JSON.stringify(r)}function cn(e){return{google_app_id:rn(e),app_instance_id:Be(),web_app_info:{sdk_version:qt,page_url:f.getInstance().getUrl(),service_worker_status:Hs(),visibility_state:nn(),effective_connection_type:zs()},application_process_state:0}}/**
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
 */const Ia=100,ya="_",Ea=[Kt,Xt,Yt];function _a(e,t){return e.length===0||e.length>Ia?!1:t&&t.startsWith(Gt)&&Ea.indexOf(e)>-1||!e.startsWith(ya)}function wa(e){const t=Math.floor(e);return t<e&&w.info(`Metric value should be an Integer, setting the value as : ${t}.`),t}/**
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
 */class O{constructor(t,n,r=!1,i){this.performanceController=t,this.name=n,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=f.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${Ns}-${this.randomId}-${this.name}`,this.traceStopMark=`${Ps}-${this.randomId}-${this.name}`,this.traceMeasure=i||`${we}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw p.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw p.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),V(this)}record(t,n,r){if(t<=0)throw p.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw p.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(n*1e3),this.startTimeUs=Math.floor(t*1e3),r&&r.attributes&&(this.customAttributes=Object.assign({},r.attributes)),r&&r.metrics)for(const i of Object.keys(r.metrics))isNaN(Number(r.metrics[i]))||(this.counters[i]=Math.floor(Number(r.metrics[i])));V(this)}incrementMetric(t,n=1){this.counters[t]===void 0?this.putMetric(t,n):this.putMetric(t,this.counters[t]+n)}putMetric(t,n){if(_a(t,this.name))this.counters[t]=wa(n??0);else throw p.create("invalid custom metric name",{customMetricName:t})}getMetric(t){return this.counters[t]||0}putAttribute(t,n){const r=Ws(t),i=qs(n);if(r&&i){this.customAttributes[t]=n;return}if(!r)throw p.create("invalid attribute name",{attributeName:t});if(!i)throw p.create("invalid attribute value",{attributeValue:n})}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){this.customAttributes[t]!==void 0&&delete this.customAttributes[t]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){const t=this.api.getEntriesByName(this.traceMeasure),n=t&&t[0];n&&(this.durationUs=Math.floor(n.duration*1e3),this.startTimeUs=Math.floor((n.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(t,n,r,i){const s=f.getInstance().getUrl();if(!s)return;const a=new O(t,Gt+s,!0),o=Math.floor(f.getInstance().getTimeOrigin()*1e3);a.setStartTime(o),n&&n[0]&&(a.setDuration(Math.floor(n[0].duration*1e3)),a.putMetric("domInteractive",Math.floor(n[0].domInteractive*1e3)),a.putMetric("domContentLoadedEventEnd",Math.floor(n[0].domContentLoadedEventEnd*1e3)),a.putMetric("loadEventEnd",Math.floor(n[0].loadEventEnd*1e3)));const c="first-paint",l="first-contentful-paint";if(r){const d=r.find(g=>g.name===c);d&&d.startTime&&a.putMetric(Kt,Math.floor(d.startTime*1e3));const h=r.find(g=>g.name===l);h&&h.startTime&&a.putMetric(Xt,Math.floor(h.startTime*1e3)),i&&a.putMetric(Yt,Math.floor(i*1e3))}V(a)}static createUserTimingTrace(t,n){const r=new O(t,n,!1,n);V(r)}}/**
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
 */function lt(e,t){const n=t;if(!n||n.responseStart===void 0)return;const r=f.getInstance().getTimeOrigin(),i=Math.floor((n.startTime+r)*1e3),s=n.responseStart?Math.floor((n.responseStart-n.startTime)*1e3):void 0,a=Math.floor((n.responseEnd-n.startTime)*1e3),o=n.name&&n.name.split("?")[0],c={performanceController:e,url:o,responsePayloadBytes:n.transferSize,startTimeUs:i,timeToResponseInitiatedUs:s,timeToResponseCompletedUs:a};pa(c)}/**
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
 */const Ta=5e3;function ut(e){Be()&&(setTimeout(()=>Aa(e),0),setTimeout(()=>va(e),0),setTimeout(()=>Sa(e),0))}function va(e){const t=f.getInstance(),n=t.getEntriesByType("resource");for(const r of n)lt(e,r);t.setupObserver("resource",r=>lt(e,r))}function Aa(e){const t=f.getInstance(),n=t.getEntriesByType("navigation"),r=t.getEntriesByType("paint");if(t.onFirstInputDelay){let i=setTimeout(()=>{O.createOobTrace(e,n,r),i=void 0},Ta);t.onFirstInputDelay(s=>{i&&(clearTimeout(i),O.createOobTrace(e,n,r,s))})}else O.createOobTrace(e,n,r)}function Sa(e){const t=f.getInstance(),n=t.getEntriesByType("measure");for(const r of n)dt(e,r);t.setupObserver("measure",r=>dt(e,r))}function dt(e,t){const n=t.name;n.substring(0,we.length)!==we&&O.createUserTimingTrace(e,n)}/**
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
 */class Ca{constructor(t,n){this.app=t,this.installations=n,this.initialized=!1}_init(t){this.initialized||((t==null?void 0:t.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=t.dataCollectionEnabled),(t==null?void 0:t.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=t.instrumentationEnabled),f.getInstance().requiredApisAvailable()?ve().then(n=>{n&&(ca(),sn(this).then(()=>ut(this),()=>ut(this)),this.initialized=!0)}).catch(n=>{w.info(`Environment doesn't support IndexedDB: ${n}`)}):w.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){I.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return I.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){I.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return I.getInstance().dataCollectionEnabled}}const Da="[DEFAULT]";function Ra(e=yt()){return e=Ae(e),j(e,"performance").getImmediate()}const Ma=(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();if(n.name!==Da)throw p.create("FB not default");if(typeof window>"u")throw p.create("no window");ks(window);const i=new Ca(n,r);return i._init(t),i};function Oa(){D(new T("performance",Ma,"PUBLIC")),_(rt,_e),_(rt,_e,"esm2017")}Oa();const Na=()=>{const t=It({apiKey:"AIzaSyANVvapu0ihi1cM8ZzuXTkwjx9lM_J1RyQ",authDomain:"rw-api-code-d0779.firebaseapp.com",projectId:"rw-api-code-d0779",storageBucket:"rw-api-code-d0779.appspot.com",messagingSenderId:"363611843335",appId:"1:363611843335:web:f15aef7ab427f52b4033a2",measurementId:"G-XJH5TKP5VL"});return Ds(t),Ra(t),"Firebase initialized successfully"};(async function(){try{const e=await Na();console.log(e)}catch(e){console.error(e)}})();function Pa(e){return new Promise(t=>setTimeout(t,e))}async function Ba(){try{await navigator.permissions.query({name:"clipboard-write"})}catch(e){console.error(e)}}async function $a(){try{await Pa(1e3);const e=document.getElementsByClassName("copy");for(let t=0;t<e.length;t++){const n=e[t];n.addEventListener("touchend",async()=>{await Ba();const s=[...n.parentNode.querySelector("code").querySelectorAll("span")],a=[...new Set(s.map(o=>o.textContent))].join("");try{await navigator.clipboard.writeText(a)}catch{const c=document.createElement("textarea");c.value=a,document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c)}})}}catch(e){console.error(e)}}$a();function ln(e){if(e.extends){const t=ln(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const F=ln(Mn),ka=dn({name:"VitePressApp",setup(){const{site:e}=hn();return pn(()=>{mn(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),gn(),bn(),In(),F.setup&&F.setup(),()=>yn(F.Layout)}});async function Fa(){const e=Ua(),t=La();t.provide(En,e);const n=_n(e.route);return t.provide(wn,n),t.component("Content",Tn),t.component("ClientOnly",vn),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),F.enhanceApp&&await F.enhanceApp({app:t,router:e,siteData:An}),{app:t,router:e,data:n}}function La(){return Sn(ka)}function Ua(){let e=fe,t;return Cn(n=>{let r=Dn(n);return e&&(t=r),(e||t===r)&&(r=r.replace(/\.js$/,".lean.js")),fe&&(e=!1),Rn(()=>import(r),[])},F.NotFound)}fe&&Fa().then(({app:e,router:t,data:n})=>{t.go().then(()=>{fn(t.route,n.site),e.mount("#app")})});export{Fa as createApp};
