import{_ as hn,o as pn,D as mn,E as gn,b as bn,S as In,U as yn,C as T,d as _n,Q as he,a5 as En,u as wn,q as Tn,k as vn,a6 as An,a7 as Sn,a8 as Cn,a9 as Dn,aa as Rn,ab as Mn,ac as Nn,ad as On,ae as Pn,af as Bn,ag as $n,ah as kn,ai as Fn,M as Ln}from"./chunks/framework.fcc0bf38.js";import{t as ht}from"./chunks/theme.9136979b.js";/**
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
 */const pt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Un=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],s=e[n++],o=e[n++],c=((i&7)<<18|(a&63)<<12|(s&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return t.join("")},mt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],s=i+1<e.length,o=s?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,d=a>>2,h=(a&3)<<4|o>>4;let g=(o&15)<<2|l>>6,b=l&63;c||(b=64,s||(g=64)),r.push(n[d],n[h],n[g],n[b])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(pt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Un(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||o==null||l==null||h==null)throw new xn;const g=a<<2|o>>4;if(r.push(g),l!==64){const b=o<<4&240|l>>2;if(r.push(b),h!==64){const fn=l<<6&192|h;r.push(fn)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class xn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jn=function(e){const t=pt(e);return mt.encodeByteArray(t,!0)},gt=function(e){return jn(e).replace(/\./g,"")},Vn=function(e){try{return mt.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Hn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zn=()=>Hn().__FIREBASE_DEFAULTS__,qn=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Wn=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Vn(e[1]);return t&&JSON.parse(t)},Gn=()=>{try{return zn()||qn()||Wn()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Kn=()=>{var e;return(e=Gn())===null||e===void 0?void 0:e.config};/**
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
 */class Xn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Yn(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ve(){try{return typeof indexedDB=="object"}catch{return!1}}function Ae(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function bt(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Jn="FirebaseError";class k extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Jn,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,j.prototype.create)}}class j{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],s=a?Qn(a,r):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new k(i,o,r)}}function Qn(e,t){return e.replace(Zn,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Zn=/\{\$([^}]+)}/g;function z(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],s=t[i];if(Le(a)&&Le(s)){if(!z(a,s))return!1}else if(a!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Le(e){return e!==null&&typeof e=="object"}/**
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
 */const er=1e3,tr=2,nr=4*60*60*1e3,rr=.5;function Ue(e,t=er,n=tr){const r=t*Math.pow(n,e),i=Math.round(rr*r*(Math.random()-.5)*2);return Math.min(nr,r+i)}/**
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
 */function Se(e){return e&&e._delegate?e._delegate:e}class v{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const M="[DEFAULT]";/**
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
 */class ir{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Xn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sr(t))try{this.getOrInitializeService({instanceIdentifier:M})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=M){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=M){return this.instances.has(t)}getOptions(t=M){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);r===o&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&t(s,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ar(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=M){return this.component?this.component.multipleInstances?t:M:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ar(e){return e===M?void 0:e}function sr(e){return e.instantiationMode==="EAGER"}/**
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
 */class or{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ir(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var u;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(u||(u={}));const cr={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},lr=u.INFO,ur={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},dr=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=ur[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ce{constructor(t){this.name=t,this._logLevel=lr,this._logHandler=dr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in u))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?cr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...t),this._logHandler(this,u.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...t),this._logHandler(this,u.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,u.INFO,...t),this._logHandler(this,u.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,u.WARN,...t),this._logHandler(this,u.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...t),this._logHandler(this,u.ERROR,...t)}}const fr=(e,t)=>t.some(n=>e instanceof n);let xe,je;function hr(){return xe||(xe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pr(){return je||(je=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const It=new WeakMap,pe=new WeakMap,yt=new WeakMap,Q=new WeakMap,De=new WeakMap;function mr(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n(A(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&It.set(n,e)}).catch(()=>{}),De.set(t,e),t}function gr(e){if(pe.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});pe.set(e,t)}let me={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return pe.get(e);if(t==="objectStoreNames")return e.objectStoreNames||yt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return A(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function br(e){me=e(me)}function Ir(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Z(this),t,...n);return yt.set(r,t.sort?t.sort():[t]),A(r)}:pr().includes(e)?function(...t){return e.apply(Z(this),t),A(It.get(this))}:function(...t){return A(e.apply(Z(this),t))}}function yr(e){return typeof e=="function"?Ir(e):(e instanceof IDBTransaction&&gr(e),fr(e,hr())?new Proxy(e,me):e)}function A(e){if(e instanceof IDBRequest)return mr(e);if(Q.has(e))return Q.get(e);const t=yr(e);return t!==e&&(Q.set(e,t),De.set(t,e)),t}const Z=e=>De.get(e);function _r(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(e,t),o=A(s);return r&&s.addEventListener("upgradeneeded",c=>{r(A(s.result),c.oldVersion,c.newVersion,A(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{a&&c.addEventListener("close",()=>a()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const Er=["get","getKey","getAll","getAllKeys","count"],wr=["put","add","delete","clear"],ee=new Map;function Ve(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ee.get(t))return ee.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=wr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Er.includes(n)))return;const a=async function(s,...o){const c=this.transaction(s,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return ee.set(t,a),a}br(e=>({...e,get:(t,n,r)=>Ve(t,n)||e.get(t,n,r),has:(t,n)=>!!Ve(t,n)||e.has(t,n)}));/**
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
 */class Tr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vr(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ge="@firebase/app",He="0.9.9";/**
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
 */const P=new Ce("@firebase/app"),Ar="@firebase/app-compat",Sr="@firebase/analytics-compat",Cr="@firebase/analytics",Dr="@firebase/app-check-compat",Rr="@firebase/app-check",Mr="@firebase/auth",Nr="@firebase/auth-compat",Or="@firebase/database",Pr="@firebase/database-compat",Br="@firebase/functions",$r="@firebase/functions-compat",kr="@firebase/installations",Fr="@firebase/installations-compat",Lr="@firebase/messaging",Ur="@firebase/messaging-compat",xr="@firebase/performance",jr="@firebase/performance-compat",Vr="@firebase/remote-config",Hr="@firebase/remote-config-compat",zr="@firebase/storage",qr="@firebase/storage-compat",Wr="@firebase/firestore",Gr="@firebase/firestore-compat",Kr="firebase";/**
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
 */const be="[DEFAULT]",Xr={[ge]:"fire-core",[Ar]:"fire-core-compat",[Cr]:"fire-analytics",[Sr]:"fire-analytics-compat",[Rr]:"fire-app-check",[Dr]:"fire-app-check-compat",[Mr]:"fire-auth",[Nr]:"fire-auth-compat",[Or]:"fire-rtdb",[Pr]:"fire-rtdb-compat",[Br]:"fire-fn",[$r]:"fire-fn-compat",[kr]:"fire-iid",[Fr]:"fire-iid-compat",[Lr]:"fire-fcm",[Ur]:"fire-fcm-compat",[xr]:"fire-perf",[jr]:"fire-perf-compat",[Vr]:"fire-rc",[Hr]:"fire-rc-compat",[zr]:"fire-gcs",[qr]:"fire-gcs-compat",[Wr]:"fire-fst",[Gr]:"fire-fst-compat","fire-js":"fire-js",[Kr]:"fire-js-all"};/**
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
 */const q=new Map,Ie=new Map;function Yr(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function R(e){const t=e.name;if(Ie.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;Ie.set(t,e);for(const n of q.values())Yr(n,e);return!0}function V(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Jr={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},S=new j("app","Firebase",Jr);/**
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
 */class Qr{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new v("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw S.create("app-deleted",{appName:this._name})}}function _t(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:be,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw S.create("bad-app-name",{appName:String(i)});if(n||(n=Kn()),!n)throw S.create("no-options");const a=q.get(i);if(a){if(z(n,a.options)&&z(r,a.config))return a;throw S.create("duplicate-app",{appName:i})}const s=new or(i);for(const c of Ie.values())s.addComponent(c);const o=new Qr(n,r,s);return q.set(i,o),o}function Et(e=be){const t=q.get(e);if(!t&&e===be)return _t();if(!t)throw S.create("no-app",{appName:e});return t}function E(e,t,n){var r;let i=(r=Xr[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const o=[`Unable to register library "${i}" with version "${t}":`];a&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),P.warn(o.join(" "));return}R(new v(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Zr="firebase-heartbeat-database",ei=1,x="firebase-heartbeat-store";let te=null;function wt(){return te||(te=_r(Zr,ei,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(x)}}}).catch(e=>{throw S.create("idb-open",{originalErrorMessage:e.message})})),te}async function ti(e){try{return(await wt()).transaction(x).objectStore(x).get(Tt(e))}catch(t){if(t instanceof k)P.warn(t.message);else{const n=S.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});P.warn(n.message)}}}async function ze(e,t){try{const r=(await wt()).transaction(x,"readwrite");return await r.objectStore(x).put(t,Tt(e)),r.done}catch(n){if(n instanceof k)P.warn(n.message);else{const r=S.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});P.warn(r.message)}}}function Tt(e){return`${e.name}!${e.options.appId}`}/**
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
 */const ni=1024,ri=30*24*60*60*1e3;class ii{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new si(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qe();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=ri}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qe(),{heartbeatsToSend:n,unsentEntries:r}=ai(this._heartbeatsCache.heartbeats),i=gt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qe(){return new Date().toISOString().substring(0,10)}function ai(e,t=ni){const n=[];let r=e.slice();for(const i of e){const a=n.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),We(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),We(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class si{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ve()?Ae().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ti(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ze(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ze(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function We(e){return gt(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function oi(e){R(new v("platform-logger",t=>new Tr(t),"PRIVATE")),R(new v("heartbeat",t=>new ii(t),"PRIVATE")),E(ge,He,e),E(ge,He,"esm2017"),E("fire-js","")}oi("");var ci="firebase",li="9.21.0";/**
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
 */E(ci,li,"app");const ui=(e,t)=>t.some(n=>e instanceof n);let Ge,Ke;function di(){return Ge||(Ge=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fi(){return Ke||(Ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vt=new WeakMap,ye=new WeakMap,At=new WeakMap,ne=new WeakMap,Re=new WeakMap;function hi(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n(C(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&vt.set(n,e)}).catch(()=>{}),Re.set(t,e),t}function pi(e){if(ye.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});ye.set(e,t)}let _e={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ye.get(e);if(t==="objectStoreNames")return e.objectStoreNames||At.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function mi(e){_e=e(_e)}function gi(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(re(this),t,...n);return At.set(r,t.sort?t.sort():[t]),C(r)}:fi().includes(e)?function(...t){return e.apply(re(this),t),C(vt.get(this))}:function(...t){return C(e.apply(re(this),t))}}function bi(e){return typeof e=="function"?gi(e):(e instanceof IDBTransaction&&pi(e),ui(e,di())?new Proxy(e,_e):e)}function C(e){if(e instanceof IDBRequest)return hi(e);if(ne.has(e))return ne.get(e);const t=bi(e);return t!==e&&(ne.set(e,t),Re.set(t,e)),t}const re=e=>Re.get(e);function Ii(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(e,t),o=C(s);return r&&s.addEventListener("upgradeneeded",c=>{r(C(s.result),c.oldVersion,c.newVersion,C(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),o.then(c=>{a&&c.addEventListener("close",()=>a()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const yi=["get","getKey","getAll","getAllKeys","count"],_i=["put","add","delete","clear"],ie=new Map;function Xe(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ie.get(t))return ie.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=_i.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yi.includes(n)))return;const a=async function(s,...o){const c=this.transaction(s,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return ie.set(t,a),a}mi(e=>({...e,get:(t,n,r)=>Xe(t,n)||e.get(t,n,r),has:(t,n)=>!!Xe(t,n)||e.has(t,n)}));const St="@firebase/installations",Me="0.6.4";/**
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
 */const Ct=1e4,Dt=`w:${Me}`,Rt="FIS_v2",Ei="https://firebaseinstallations.googleapis.com/v1",wi=60*60*1e3,Ti="installations",vi="Installations";/**
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
 */const Ai={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},B=new j(Ti,vi,Ai);function Mt(e){return e instanceof k&&e.code.includes("request-failed")}/**
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
 */function Nt({projectId:e}){return`${Ei}/projects/${e}/installations`}function Ot(e){return{token:e.token,requestStatus:2,expiresIn:Ci(e.expiresIn),creationTime:Date.now()}}async function Pt(e,t){const r=(await t.json()).error;return B.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Bt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Si(e,{refreshToken:t}){const n=Bt(e);return n.append("Authorization",Di(t)),n}async function $t(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Ci(e){return Number(e.replace("s","000"))}function Di(e){return`${Rt} ${e}`}/**
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
 */async function Ri({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Nt(e),i=Bt(e),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const s={fid:n,authVersion:Rt,appId:e.appId,sdkVersion:Dt},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await $t(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ot(l.authToken)}}else throw await Pt("Create Installation",c)}/**
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
 */function kt(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Mi(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ni=/^[cdef][\w-]{21}$/,Ee="";function Oi(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Pi(e);return Ni.test(n)?n:Ee}catch{return Ee}}function Pi(e){return Mi(e).substr(0,22)}/**
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
 */function X(e){return`${e.appName}!${e.appId}`}/**
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
 */const Ft=new Map;function Lt(e,t){const n=X(e);Ut(n,t),Bi(n,t)}function Ut(e,t){const n=Ft.get(e);if(n)for(const r of n)r(t)}function Bi(e,t){const n=$i();n&&n.postMessage({key:e,fid:t}),ki()}let N=null;function $i(){return!N&&"BroadcastChannel"in self&&(N=new BroadcastChannel("[Firebase] FID Change"),N.onmessage=e=>{Ut(e.data.key,e.data.fid)}),N}function ki(){Ft.size===0&&N&&(N.close(),N=null)}/**
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
 */const Fi="firebase-installations-database",Li=1,$="firebase-installations-store";let ae=null;function Ne(){return ae||(ae=Ii(Fi,Li,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($)}}})),ae}async function W(e,t){const n=X(e),i=(await Ne()).transaction($,"readwrite"),a=i.objectStore($),s=await a.get(n);return await a.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Lt(e,t.fid),t}async function xt(e){const t=X(e),r=(await Ne()).transaction($,"readwrite");await r.objectStore($).delete(t),await r.done}async function Y(e,t){const n=X(e),i=(await Ne()).transaction($,"readwrite"),a=i.objectStore($),s=await a.get(n),o=t(s);return o===void 0?await a.delete(n):await a.put(o,n),await i.done,o&&(!s||s.fid!==o.fid)&&Lt(e,o.fid),o}/**
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
 */async function Oe(e){let t;const n=await Y(e.appConfig,r=>{const i=Ui(r),a=xi(e,i);return t=a.registrationPromise,a.installationEntry});return n.fid===Ee?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Ui(e){const t=e||{fid:Oi(),registrationStatus:0};return jt(t)}function xi(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(B.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ji(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Vi(e)}:{installationEntry:t}}async function ji(e,t){try{const n=await Ri(e,t);return W(e.appConfig,n)}catch(n){throw Mt(n)&&n.customData.serverCode===409?await xt(e.appConfig):await W(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Vi(e){let t=await Ye(e.appConfig);for(;t.registrationStatus===1;)await kt(100),t=await Ye(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Oe(e);return r||n}return t}function Ye(e){return Y(e,t=>{if(!t)throw B.create("installation-not-found");return jt(t)})}function jt(e){return Hi(e)?{fid:e.fid,registrationStatus:0}:e}function Hi(e){return e.registrationStatus===1&&e.registrationTime+Ct<Date.now()}/**
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
 */async function zi({appConfig:e,heartbeatServiceProvider:t},n){const r=qi(e,n),i=Si(e,n),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const s={installation:{sdkVersion:Dt,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await $t(()=>fetch(r,o));if(c.ok){const l=await c.json();return Ot(l)}else throw await Pt("Generate Auth Token",c)}function qi(e,{fid:t}){return`${Nt(e)}/${t}/authTokens:generate`}/**
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
 */async function Pe(e,t=!1){let n;const r=await Y(e.appConfig,a=>{if(!Vt(a))throw B.create("not-registered");const s=a.authToken;if(!t&&Ki(s))return a;if(s.requestStatus===1)return n=Wi(e,t),a;{if(!navigator.onLine)throw B.create("app-offline");const o=Yi(a);return n=Gi(e,o),o}});return n?await n:r.authToken}async function Wi(e,t){let n=await Je(e.appConfig);for(;n.authToken.requestStatus===1;)await kt(100),n=await Je(e.appConfig);const r=n.authToken;return r.requestStatus===0?Pe(e,t):r}function Je(e){return Y(e,t=>{if(!Vt(t))throw B.create("not-registered");const n=t.authToken;return Ji(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Gi(e,t){try{const n=await zi(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await W(e.appConfig,r),n}catch(n){if(Mt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xt(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await W(e.appConfig,r)}throw n}}function Vt(e){return e!==void 0&&e.registrationStatus===2}function Ki(e){return e.requestStatus===2&&!Xi(e)}function Xi(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+wi}function Yi(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ji(e){return e.requestStatus===1&&e.requestTime+Ct<Date.now()}/**
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
 */async function Qi(e){const t=e,{installationEntry:n,registrationPromise:r}=await Oe(t);return r?r.catch(console.error):Pe(t).catch(console.error),n.fid}/**
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
 */async function Zi(e,t=!1){const n=e;return await ea(n),(await Pe(n,t)).token}async function ea(e){const{registrationPromise:t}=await Oe(e);t&&await t}/**
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
 */function ta(e){if(!e||!e.options)throw se("App Configuration");if(!e.name)throw se("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw se(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function se(e){return B.create("missing-app-config-values",{valueName:e})}/**
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
 */const Ht="installations",na="installations-internal",ra=e=>{const t=e.getProvider("app").getImmediate(),n=ta(t),r=V(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ia=e=>{const t=e.getProvider("app").getImmediate(),n=V(t,Ht).getImmediate();return{getId:()=>Qi(n),getToken:i=>Zi(n,i)}};function aa(){R(new v(Ht,ra,"PUBLIC")),R(new v(na,ia,"PRIVATE"))}aa();E(St,Me);E(St,Me,"esm2017");/**
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
 */const G="analytics",sa="firebase_id",oa="origin",ca=60*1e3,la="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Be="https://www.googletagmanager.com/gtag/js";/**
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
 */const m=new Ce("@firebase/analytics");/**
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
 */const ua={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},y=new j("analytics","Analytics",ua);/**
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
 */function da(e){if(!e.startsWith(Be)){const t=y.create("invalid-gtag-resource",{gtagURL:e});return m.warn(t.message),""}return e}function zt(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function fa(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ha(e,t){const n=fa("firebase-js-sdk-policy",{createScriptURL:da}),r=document.createElement("script"),i=`${Be}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function pa(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ma(e,t,n,r,i,a){const s=r[i];try{if(s)await t[s];else{const c=(await zt(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(o){m.error(o)}e("config",i,a)}async function ga(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const o=await zt(n);for(const c of s){const l=o.find(h=>h.measurementId===c),d=l&&t[l.appId];if(d)a.push(d);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(a){m.error(a)}}function ba(e,t,n,r){async function i(a,...s){try{if(a==="event"){const[o,c]=s;await ga(e,t,n,o,c)}else if(a==="config"){const[o,c]=s;await ma(e,t,n,r,o,c)}else if(a==="consent"){const[o]=s;e("consent","update",o)}else if(a==="get"){const[o,c,l]=s;e("get",o,c,l)}else if(a==="set"){const[o]=s;e("set",o)}else e(a,...s)}catch(o){m.error(o)}}return i}function Ia(e,t,n,r,i){let a=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=ba(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}function ya(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Be)&&n.src.includes(e))return n;return null}/**
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
 */const _a=30,Ea=1e3;class wa{constructor(t={},n=Ea){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const qt=new wa;function Ta(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function va(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Ta(r)},a=la.replace("{app-id}",n),s=await fetch(a,i);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw y.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Aa(e,t=qt,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw y.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw y.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Da;return setTimeout(async()=>{o.abort()},n!==void 0?n:ca),Wt({appId:r,apiKey:i,measurementId:a},s,o,t)}async function Wt(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=qt){var a;const{appId:s,measurementId:o}=e;try{await Sa(r,t)}catch(c){if(o)return m.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw c}try{const c=await va(e);return i.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!Ca(l)){if(i.deleteThrottleMetadata(s),o)return m.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw c}const d=Number((a=l==null?void 0:l.customData)===null||a===void 0?void 0:a.httpStatus)===503?Ue(n,i.intervalMillis,_a):Ue(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,h),m.debug(`Calling attemptFetch again in ${d} millis`),Wt(e,h,r,i)}}function Sa(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(a),r(y.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Ca(e){if(!(e instanceof k)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Da{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ra(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const a=await t,s=Object.assign(Object.assign({},r),{send_to:a});e("event",n,s)}}/**
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
 */async function Ma(){if(ve())try{await Ae()}catch(e){return m.warn(y.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return m.warn(y.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Na(e,t,n,r,i,a,s){var o;const c=Aa(e);c.then(b=>{n[b.measurementId]=b.appId,e.options.measurementId&&b.measurementId!==e.options.measurementId&&m.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>m.error(b)),t.push(c);const l=Ma().then(b=>{if(b)return r.getId()}),[d,h]=await Promise.all([c,l]);ya(a)||ha(a,d.measurementId),i("js",new Date);const g=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return g[oa]="firebase",g.update=!0,h!=null&&(g[sa]=h),i("config",d.measurementId,g),d.measurementId}/**
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
 */class Oa{constructor(t){this.app=t}_delete(){return delete U[this.app.options.appId],Promise.resolve()}}let U={},Qe=[];const Ze={};let oe="dataLayer",Pa="gtag",et,Gt,tt=!1;function Ba(){const e=[];if(Yn()&&e.push("This is a browser extension environment."),bt()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=y.create("invalid-analytics-context",{errorInfo:t});m.warn(n.message)}}function $a(e,t,n){Ba();const r=e.options.appId;if(!r)throw y.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)m.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw y.create("no-api-key");if(U[r]!=null)throw y.create("already-exists",{id:r});if(!tt){pa(oe);const{wrappedGtag:a,gtagCore:s}=Ia(U,Qe,Ze,oe,Pa);Gt=a,et=s,tt=!0}return U[r]=Na(e,Qe,Ze,t,et,oe,n),new Oa(e)}function ka(e=Et()){e=Se(e);const t=V(e,G);return t.isInitialized()?t.getImmediate():Fa(e)}function Fa(e,t={}){const n=V(e,G);if(n.isInitialized()){const i=n.getImmediate();if(z(t,n.getOptions()))return i;throw y.create("already-initialized")}return n.initialize({options:t})}function La(e,t,n,r){e=Se(e),Ra(Gt,U[e.app.options.appId],t,n,r).catch(i=>m.error(i))}const nt="@firebase/analytics",rt="0.10.0";function Ua(){R(new v(G,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return $a(r,i,n)},"PUBLIC")),R(new v("analytics-internal",e,"PRIVATE")),E(nt,rt),E(nt,rt,"esm2017");function e(t){try{const n=t.getProvider(G).getImmediate();return{logEvent:(r,i,a)=>La(n,r,i,a)}}catch(n){throw y.create("interop-component-reg-failed",{reason:n})}}}Ua();const it="@firebase/performance",we="0.6.4";/**
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
 */const Kt=we,xa="FB-PERF-TRACE-START",ja="FB-PERF-TRACE-STOP",Te="FB-PERF-TRACE-MEASURE",Xt="_wt_",Yt="_fp",Jt="_fcp",Qt="_fid",Zt="@firebase/performance/config",en="@firebase/performance/configexpire",Va="performance",tn="Performance";/**
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
 */const Ha={["trace started"]:"Trace {$traceName} was started before.",["trace stopped"]:"Trace {$traceName} is not running.",["nonpositive trace startTime"]:"Trace {$traceName} startTime should be positive.",["nonpositive trace duration"]:"Trace {$traceName} duration should be positive.",["no window"]:"Window is not available.",["no app id"]:"App id is not available.",["no project id"]:"Project id is not available.",["no api key"]:"Api key is not available.",["invalid cc log"]:"Attempted to queue invalid cc event",["FB not default"]:"Performance can only start when Firebase app instance is the default one.",["RC response not ok"]:"RC response is not ok",["invalid attribute name"]:"Attribute name {$attributeName} is invalid.",["invalid attribute value"]:"Attribute value {$attributeValue} is invalid.",["invalid custom metric name"]:"Custom metric name {$customMetricName} is invalid",["invalid String merger input"]:"Input for String merger is invalid, contact support team to resolve.",["already initialized"]:"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},p=new j(Va,tn,Ha);/**
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
 */const w=new Ce(tn);w.logLevel=u.INFO;/**
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
 */let ce,nn;class f{constructor(t){if(this.window=t,!t)throw p.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){!this.performance||!this.performance.mark||this.performance.mark(t)}measure(t,n,r){!this.performance||!this.performance.measure||this.performance.measure(t,n,r)}getEntriesByType(t){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(t)}getEntriesByName(t){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(t)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!bt()?(w.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):ve()?!0:(w.info("IndexedDB is not supported by current browswer"),!1)}setupObserver(t,n){if(!this.PerformanceObserver)return;new this.PerformanceObserver(i=>{for(const a of i.getEntries())n(a)}).observe({entryTypes:[t]})}static getInstance(){return ce===void 0&&(ce=new f(nn)),ce}}function za(e){nn=e}/**
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
 */let rn;function qa(e){const t=e.getId();return t.then(n=>{rn=n}),t}function $e(){return rn}function Wa(e){const t=e.getToken();return t.then(n=>{}),t}/**
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
 */function at(e,t){const n=e.length-t.length;if(n<0||n>1)throw p.create("invalid String merger input");const r=[];for(let i=0;i<e.length;i++)r.push(e.charAt(i)),t.length>i&&r.push(t.charAt(i));return r.join("")}/**
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
 */let le;class I{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=at("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=at("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return le===void 0&&(le=new I),le}}/**
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
 */var F;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.VISIBLE=1]="VISIBLE",e[e.HIDDEN=2]="HIDDEN"})(F||(F={}));const Ga=["firebase_","google_","ga_"],Ka=new RegExp("^[a-zA-Z]\\w*$"),Xa=40,Ya=100;function Ja(){const e=f.getInstance().navigator;return e!=null&&e.serviceWorker?e.serviceWorker.controller?2:3:1}function an(){switch(f.getInstance().document.visibilityState){case"visible":return F.VISIBLE;case"hidden":return F.HIDDEN;default:return F.UNKNOWN}}function Qa(){const t=f.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function Za(e){return e.length===0||e.length>Xa?!1:!Ga.some(n=>e.startsWith(n))&&!!e.match(Ka)}function es(e){return e.length!==0&&e.length<=Ya}/**
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
 */function sn(e){var t;const n=(t=e.options)===null||t===void 0?void 0:t.appId;if(!n)throw p.create("no app id");return n}function ts(e){var t;const n=(t=e.options)===null||t===void 0?void 0:t.projectId;if(!n)throw p.create("no project id");return n}function ns(e){var t;const n=(t=e.options)===null||t===void 0?void 0:t.apiKey;if(!n)throw p.create("no api key");return n}/**
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
 */const rs="0.0.1",_={loggingEnabled:!0},is="FIREBASE_INSTALLATIONS_AUTH";function as(e,t){const n=ss();return n?(st(n),Promise.resolve()):ls(e,t).then(st).then(r=>os(r),()=>{})}function ss(){const e=f.getInstance().localStorage;if(!e)return;const t=e.getItem(en);if(!t||!us(t))return;const n=e.getItem(Zt);if(n)try{return JSON.parse(n)}catch{return}}function os(e){const t=f.getInstance().localStorage;!e||!t||(t.setItem(Zt,JSON.stringify(e)),t.setItem(en,String(Date.now()+I.getInstance().configTimeToLive*60*60*1e3)))}const cs="Could not fetch config, will use default configs";function ls(e,t){return Wa(e.installations).then(n=>{const r=ts(e.app),i=ns(e.app),a=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,s=new Request(a,{method:"POST",headers:{Authorization:`${is} ${n}`},body:JSON.stringify({app_instance_id:t,app_instance_id_token:n,app_id:sn(e.app),app_version:Kt,sdk_version:rs})});return fetch(s).then(o=>{if(o.ok)return o.json();throw p.create("RC response not ok")})}).catch(()=>{w.info(cs)})}function st(e){if(!e)return e;const t=I.getInstance(),n=e.entries||{};return n.fpr_enabled!==void 0?t.loggingEnabled=String(n.fpr_enabled)==="true":t.loggingEnabled=_.loggingEnabled,n.fpr_log_source?t.logSource=Number(n.fpr_log_source):_.logSource&&(t.logSource=_.logSource),n.fpr_log_endpoint_url?t.logEndPointUrl=n.fpr_log_endpoint_url:_.logEndPointUrl&&(t.logEndPointUrl=_.logEndPointUrl),n.fpr_log_transport_key?t.transportKey=n.fpr_log_transport_key:_.transportKey&&(t.transportKey=_.transportKey),n.fpr_vc_network_request_sampling_rate!==void 0?t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):_.networkRequestsSamplingRate!==void 0&&(t.networkRequestsSamplingRate=_.networkRequestsSamplingRate),n.fpr_vc_trace_sampling_rate!==void 0?t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):_.tracesSamplingRate!==void 0&&(t.tracesSamplingRate=_.tracesSamplingRate),t.logTraceAfterSampling=ot(t.tracesSamplingRate),t.logNetworkAfterSampling=ot(t.networkRequestsSamplingRate),e}function us(e){return Number(e)>Date.now()}function ot(e){return Math.random()<=e}/**
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
 */let ke=1,ue;function on(e){return ke=2,ue=ue||fs(e),ue}function ds(){return ke===3}function fs(e){return hs().then(()=>qa(e.installations)).then(t=>as(e,t)).then(()=>ct(),()=>ct())}function hs(){const e=f.getInstance().document;return new Promise(t=>{if(e&&e.readyState!=="complete"){const n=()=>{e.readyState==="complete"&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()})}function ct(){ke=3}/**
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
 */const Fe=10*1e3,ps=5.5*1e3,cn=3,ms=1e3;let K=cn,D=[],lt=!1;function gs(){lt||(J(ps),lt=!0)}function J(e){setTimeout(()=>{if(K!==0){if(!D.length)return J(Fe);bs()}},e)}function bs(){const e=D.splice(0,ms),t=e.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:I.getInstance().logSource,log_event:t};Is(n,e).catch(()=>{D=[...e,...D],K--,w.info(`Tries left: ${K}.`),J(Fe)})}function Is(e,t){return ys(e).then(n=>(n.ok||w.info("Call to Firebase backend failed."),n.json())).then(n=>{const r=Number(n.nextRequestWaitMillis);let i=Fe;isNaN(r)||(i=Math.max(r,i));const a=n.logResponseDetails;Array.isArray(a)&&a.length>0&&a[0].responseAction==="RETRY_REQUEST_LATER"&&(D=[...t,...D],w.info("Retry transport request later.")),K=cn,J(i)})}function ys(e){const t=I.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})}function _s(e){if(!e.eventTime||!e.message)throw p.create("invalid cc log");D=[...D,e]}function Es(e){return(...t)=>{const n=e(...t);_s({message:n,eventTime:Date.now()})}}/**
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
 */let de;function ln(e,t){de||(de=Es(Ts)),de(e,t)}function H(e){const t=I.getInstance();!t.instrumentationEnabled&&e.isAuto||!t.dataCollectionEnabled&&!e.isAuto||f.getInstance().requiredApisAvailable()&&(e.isAuto&&an()!==F.VISIBLE||(ds()?fe(e):on(e.performanceController).then(()=>fe(e),()=>fe(e))))}function fe(e){if(!$e())return;const t=I.getInstance();!t.loggingEnabled||!t.logTraceAfterSampling||setTimeout(()=>ln(e,1),0)}function ws(e){const t=I.getInstance();if(!t.instrumentationEnabled)return;const n=e.url,r=t.logEndPointUrl.split("?")[0],i=t.flTransportEndpointUrl.split("?")[0];n===r||n===i||!t.loggingEnabled||!t.logNetworkAfterSampling||setTimeout(()=>ln(e,0),0)}function Ts(e,t){return t===0?vs(e):As(e)}function vs(e){const t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs},n={application_info:un(e.performanceController.app),network_request_metric:t};return JSON.stringify(n)}function As(e){const t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};Object.keys(e.counters).length!==0&&(t.counters=e.counters);const n=e.getAttributes();Object.keys(n).length!==0&&(t.custom_attributes=n);const r={application_info:un(e.performanceController.app),trace_metric:t};return JSON.stringify(r)}function un(e){return{google_app_id:sn(e),app_instance_id:$e(),web_app_info:{sdk_version:Kt,page_url:f.getInstance().getUrl(),service_worker_status:Ja(),visibility_state:an(),effective_connection_type:Qa()},application_process_state:0}}/**
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
 */const Ss=100,Cs="_",Ds=[Yt,Jt,Qt];function Rs(e,t){return e.length===0||e.length>Ss?!1:t&&t.startsWith(Xt)&&Ds.indexOf(e)>-1||!e.startsWith(Cs)}function Ms(e){const t=Math.floor(e);return t<e&&w.info(`Metric value should be an Integer, setting the value as : ${t}.`),t}/**
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
 */class O{constructor(t,n,r=!1,i){this.performanceController=t,this.name=n,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=f.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${xa}-${this.randomId}-${this.name}`,this.traceStopMark=`${ja}-${this.randomId}-${this.name}`,this.traceMeasure=i||`${Te}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw p.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw p.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),H(this)}record(t,n,r){if(t<=0)throw p.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw p.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(n*1e3),this.startTimeUs=Math.floor(t*1e3),r&&r.attributes&&(this.customAttributes=Object.assign({},r.attributes)),r&&r.metrics)for(const i of Object.keys(r.metrics))isNaN(Number(r.metrics[i]))||(this.counters[i]=Math.floor(Number(r.metrics[i])));H(this)}incrementMetric(t,n=1){this.counters[t]===void 0?this.putMetric(t,n):this.putMetric(t,this.counters[t]+n)}putMetric(t,n){if(Rs(t,this.name))this.counters[t]=Ms(n??0);else throw p.create("invalid custom metric name",{customMetricName:t})}getMetric(t){return this.counters[t]||0}putAttribute(t,n){const r=Za(t),i=es(n);if(r&&i){this.customAttributes[t]=n;return}if(!r)throw p.create("invalid attribute name",{attributeName:t});if(!i)throw p.create("invalid attribute value",{attributeValue:n})}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){this.customAttributes[t]!==void 0&&delete this.customAttributes[t]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){const t=this.api.getEntriesByName(this.traceMeasure),n=t&&t[0];n&&(this.durationUs=Math.floor(n.duration*1e3),this.startTimeUs=Math.floor((n.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(t,n,r,i){const a=f.getInstance().getUrl();if(!a)return;const s=new O(t,Xt+a,!0),o=Math.floor(f.getInstance().getTimeOrigin()*1e3);s.setStartTime(o),n&&n[0]&&(s.setDuration(Math.floor(n[0].duration*1e3)),s.putMetric("domInteractive",Math.floor(n[0].domInteractive*1e3)),s.putMetric("domContentLoadedEventEnd",Math.floor(n[0].domContentLoadedEventEnd*1e3)),s.putMetric("loadEventEnd",Math.floor(n[0].loadEventEnd*1e3)));const c="first-paint",l="first-contentful-paint";if(r){const d=r.find(g=>g.name===c);d&&d.startTime&&s.putMetric(Yt,Math.floor(d.startTime*1e3));const h=r.find(g=>g.name===l);h&&h.startTime&&s.putMetric(Jt,Math.floor(h.startTime*1e3)),i&&s.putMetric(Qt,Math.floor(i*1e3))}H(s)}static createUserTimingTrace(t,n){const r=new O(t,n,!1,n);H(r)}}/**
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
 */function ut(e,t){const n=t;if(!n||n.responseStart===void 0)return;const r=f.getInstance().getTimeOrigin(),i=Math.floor((n.startTime+r)*1e3),a=n.responseStart?Math.floor((n.responseStart-n.startTime)*1e3):void 0,s=Math.floor((n.responseEnd-n.startTime)*1e3),o=n.name&&n.name.split("?")[0],c={performanceController:e,url:o,responsePayloadBytes:n.transferSize,startTimeUs:i,timeToResponseInitiatedUs:a,timeToResponseCompletedUs:s};ws(c)}/**
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
 */const Ns=5e3;function dt(e){$e()&&(setTimeout(()=>Ps(e),0),setTimeout(()=>Os(e),0),setTimeout(()=>Bs(e),0))}function Os(e){const t=f.getInstance(),n=t.getEntriesByType("resource");for(const r of n)ut(e,r);t.setupObserver("resource",r=>ut(e,r))}function Ps(e){const t=f.getInstance(),n=t.getEntriesByType("navigation"),r=t.getEntriesByType("paint");if(t.onFirstInputDelay){let i=setTimeout(()=>{O.createOobTrace(e,n,r),i=void 0},Ns);t.onFirstInputDelay(a=>{i&&(clearTimeout(i),O.createOobTrace(e,n,r,a))})}else O.createOobTrace(e,n,r)}function Bs(e){const t=f.getInstance(),n=t.getEntriesByType("measure");for(const r of n)ft(e,r);t.setupObserver("measure",r=>ft(e,r))}function ft(e,t){const n=t.name;n.substring(0,Te.length)!==Te&&O.createUserTimingTrace(e,n)}/**
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
 */class $s{constructor(t,n){this.app=t,this.installations=n,this.initialized=!1}_init(t){this.initialized||((t==null?void 0:t.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=t.dataCollectionEnabled),(t==null?void 0:t.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=t.instrumentationEnabled),f.getInstance().requiredApisAvailable()?Ae().then(n=>{n&&(gs(),on(this).then(()=>dt(this),()=>dt(this)),this.initialized=!0)}).catch(n=>{w.info(`Environment doesn't support IndexedDB: ${n}`)}):w.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){I.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return I.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){I.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return I.getInstance().dataCollectionEnabled}}const ks="[DEFAULT]";function Fs(e=Et()){return e=Se(e),V(e,"performance").getImmediate()}const Ls=(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();if(n.name!==ks)throw p.create("FB not default");if(typeof window>"u")throw p.create("no window");za(window);const i=new $s(n,r);return i._init(t),i};function Us(){R(new v("performance",Ls,"PUBLIC")),E(it,we),E(it,we,"esm2017")}Us();const xs=e=>(In("data-v-fd8ce0a8"),e=e(),yn(),e),js=xs(()=>T("div",{"data-v-98ddab3d":"","data-v-8f7cd5e4":"",class:"VPContent",id:"VPContent"},[T("div",{"data-v-6c4a3ffe":"","data-v-98ddab3d":"",class:"NotFound"},[T("img",{src:"https://rust.coldmint.top/ftp/ling/cdnpng/logo.png",alt:"",class:"notfound-img"}),T("p",{"data-v-6c4a3ffe":"",class:"code"},"404"),T("h1",{"data-v-6c4a3ffe":"",class:"title"}," 你干嘛~，这里什么都没有! "),T("div",{"data-v-6c4a3ffe":"",class:"divider"}),T("blockquote",{"data-v-6c4a3ffe":"",class:"quote"}," 你寻找的页面可能不存在或被迁移…… "),T("div",{"data-v-6c4a3ffe":"",class:"action"},[T("a",{"data-v-6c4a3ffe":"",class:"link",href:"/","aria-label":"go to home"}," 返回主页 ")])])],-1)),Vs={__name:"NotFound",setup(e){const{Layout:t}=ht;return(n,r)=>(pn(),mn(bn(t),null,{"not-found":gn(()=>[js]),_:1}))}},Hs=hn(Vs,[["__scopeId","data-v-fd8ce0a8"]]),zs=()=>{const t=_t({apiKey:"AIzaSyANVvapu0ihi1cM8ZzuXTkwjx9lM_J1RyQ",authDomain:"rw-api-code-d0779.firebaseapp.com",projectId:"rw-api-code-d0779",storageBucket:"rw-api-code-d0779.appspot.com",messagingSenderId:"363611843335",appId:"1:363611843335:web:f15aef7ab427f52b4033a2",measurementId:"G-XJH5TKP5VL"});return ka(t),Fs(t),"Firebase initialized successfully"};(async function(){try{const e=await zs();console.log(e)}catch(e){console.error(e)}})();function qs(e){return new Promise(t=>setTimeout(t,e))}async function Ws(){try{await navigator.permissions.query({name:"clipboard-write"})}catch(e){console.error(e)}}async function Gs(){try{await qs(1e3);const e=document.getElementsByClassName("copy");for(let t=0;t<e.length;t++){const n=e[t];n.addEventListener("touchend",async()=>{await Ws();const a=[...n.parentNode.querySelector("code").querySelectorAll("span")],s=[...new Set(a.map(o=>o.textContent))].join("");try{await navigator.clipboard.writeText(s)}catch{const c=document.createElement("textarea");c.value=s,document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c)}})}}catch(e){console.error(e)}}Gs();const Ks={...ht,Layout:Hs};function dn(e){if(e.extends){const t=dn(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const L=dn(Ks),Xs=_n({name:"VitePressApp",setup(){const{site:e}=wn();return Tn(()=>{vn(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),An(),Sn(),Cn(),L.setup&&L.setup(),()=>Dn(L.Layout)}});async function Ys(){const e=Qs(),t=Js();t.provide(Rn,e);const n=Mn(e.route);return t.provide(Nn,n),t.component("Content",On),t.component("ClientOnly",Pn),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),L.enhanceApp&&await L.enhanceApp({app:t,router:e,siteData:Bn}),{app:t,router:e,data:n}}function Js(){return $n(Xs)}function Qs(){let e=he,t;return kn(n=>{let r=Fn(n);return e&&(t=r),(e||t===r)&&(r=r.replace(/\.js$/,".lean.js")),he&&(e=!1),Ln(()=>import(r),[])},L.NotFound)}he&&Ys().then(({app:e,router:t,data:n})=>{t.go().then(()=>{En(t.route,n.site),e.mount("#app")})});export{Ys as createApp};
