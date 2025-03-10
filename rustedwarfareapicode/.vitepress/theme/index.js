// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./style/custom.css";
import NotFound from "../theme/NotFound.vue";

/**
 * 等待指定时间
 * @param {number} timeout 等待时间，单位：毫秒
 * @returns {Promise<void>} 等待结果
 * @example await wait(1000);
 * @example wait(1000).then(() => console.log("timeout"));
 */
function wait(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}

/**
 * 请求剪贴板权限
 * @returns {Promise<void>} 请求结果
 * @example await requestClipboardPermission();
 */
async function requestClipboardPermission() {
    try {
        await navigator.permissions.query({ name: "clipboard-write" });
    } catch (error) {
        console.error(error);
    }
}
/**
 * 初始化
 * @returns {Promise<void>} 初始化结果
 * @example await init();
 */
async function init() {
    try {
        await wait(1000);

        // console.log("timeout");

        const copyBtnList = document.getElementsByClassName("copy");
        // console.log(copyBtnList);
        // console.log(copyBtnList.length);

        for (let i = 0; i < copyBtnList.length; i++) {
            const btn = copyBtnList[i];
            btn.addEventListener("touchend", async () => {
                // 请求剪贴板权限
                await requestClipboardPermission();
                const parentDiv = btn.parentNode;
                const codeElem = parentDiv.querySelector("code");
                const spans = [...codeElem.querySelectorAll("span")];
                const textToCopy = [
                    ...new Set(spans.map((span) => span.textContent)),
                ].join("");
                // console.log(textToCopy);

                try {
                    await navigator.clipboard.writeText(textToCopy);
                    // console.log("Text copied to clipboard");
                } catch (error) {
                    const textarea = document.createElement("textarea");
                    textarea.value = textToCopy;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textarea);
                    // console.log("Text copied to clipboard");
                }
            });
        }
    } catch (error) {
        console.error(error);
    }
}
init();
export default {
    ...DefaultTheme,
    Layout: NotFound,
};


//Chat Plugins
/* https://github.com/xueelf/docsify-chat */
"use strict";(()=>{var w="@media screen and (max-width: 768px){.controls{display:none !important}}.chat-panel{position:relative;border-radius:.5rem;margin:1rem auto;background-color:#f6f8fa;overflow:hidden}.chat-panel button{border:0;background:none;margin:0;padding:0;display:flex;align-items:center;justify-content:center}.chat-panel .title-bar{text-align:center}.chat-panel .title-bar.mac{display:flex;justify-content:center;padding:.9rem 1rem;width:100%}.chat-panel .title-bar.mac .title{font-weight:500;font-size:.9rem;line-height:.9rem;letter-spacing:.5px}.chat-panel .title-bar.mac .controls{position:absolute;top:1rem;left:1rem;display:grid;gap:.6rem;grid-template-columns:repeat(3, 0.8rem)}.chat-panel .title-bar.mac .controls svg{opacity:0}.chat-panel .title-bar.mac .controls:hover button{transform:scale(1.2)}.chat-panel .title-bar.mac .controls:hover svg{opacity:1}.chat-panel .title-bar.mac .controls .close{--bg-color: #ff5f56;--border-color: #e0443e}.chat-panel .title-bar.mac .controls .stretch{--bg-color: #27c93f;--border-color: #1aab29}.chat-panel .title-bar.mac .controls .stretch svg{transform:rotate(90deg)}.chat-panel .title-bar.mac .controls .minimize{--bg-color: #ffbd2e;--border-color: #dea123}.chat-panel .title-bar.mac .controls .circle{width:.8rem;height:.8rem;border-radius:50%;background-color:var(--bg-color);box-shadow:0 0 0 .5px var(--border-color);transition:transform .1s ease-in}.chat-panel .title-bar.windows{display:flex;flex-shrink:0;width:100%;height:28px;align-items:center;justify-content:center;position:relative;border-radius:6px 6px 0 0}.chat-panel .title-bar.windows .title{font-size:.8rem}.chat-panel .title-bar.windows .controls{height:100%;position:absolute;right:0;display:flex;align-items:center}.chat-panel .title-bar.windows .controls svg{width:12px;height:100%}.chat-panel .title-bar.windows .controls button{height:100%;padding:0 18px;transition:all ease-in-out 60ms}.chat-panel .title-bar.windows .controls button:hover{background:rgba(136,136,136,.2)}.chat-panel .title-bar.windows .controls button[class=close]:hover{background:rgba(255,0,0,.8)}.chat-panel .title-bar.windows .controls button[class=close]:hover svg{filter:invert(1)}.chat-panel .main-area{width:100%;min-height:auto}.chat-panel .main-area .chat-message{display:flex;position:relative;padding:1rem;opacity:0;transform:translate(-10%);transition:transform .4s ease-out,opacity .4s ease-in}.chat-panel .main-area .chat-message.self{transform:translate(10%);justify-content:flex-end}.chat-panel .main-area .chat-message.self .message-box{margin-left:0;margin-right:.5rem}.chat-panel .main-area .chat-message.self .nickname{text-align:right}.chat-panel .main-area .chat-message.show{opacity:1;transform:translate(0)}.chat-panel .main-area .chat-message .avatar{width:2.5rem;height:2.5rem;overflow:hidden;flex-shrink:0;border-radius:50%;line-height:2.5rem;color:#fff;text-align:center}.chat-panel .main-area .chat-message .avatar img{display:inline-flex;line-height:0;justify-content:center;align-items:center;color:#fff}.chat-panel .main-area .chat-message .message-box{display:inline-block;margin-left:.5rem;max-width:90%;vertical-align:top}.chat-panel .main-area .chat-message .message-box .nickname{font-size:.8rem;color:gray}.chat-panel .main-area .chat-message .message-box .message{position:relative;width:fit-content;font-size:.9rem;border-radius:.5rem;background-color:#fff;word-break:break-all;padding:.6rem .7rem;margin-top:.2rem;box-shadow:rgba(0,0,0,0) 0px 0px 0px 0px,rgba(0,0,0,0) 0px 0px 0px 0px,rgba(0,0,0,.05) 0px 1px 2px 0px}.chat-panel .main-area .chat-message .message-box .message .chat-text{min-height:1rem}.chat-panel .main-area .chat-message .message-box .message .chat-image{display:block;min-width:5rem;border-radius:.3rem;margin-bottom:.3rem}";var x="1.0.0";function v(e){let t=0,a="#";for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);for(let n=0;n<3;n++){let s=t>>n*8&255;a+=("00"+s.toString(16)).substr(-2)}return a}function y(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}var k='<svg width="7" height="7" fill="none" xmlns="http://www.w3.org/2000/svg">\r<path stroke="#000" stroke-width="1.2" stroke-linecap="round" d="M1.182 5.99L5.99 1.182m0 4.95L1.182 1.323" />\r</svg>';var _='<svg width="6" height="1" fill="none" xmlns="http://www.w3.org/2000/svg">\r<path stroke="#000" stroke-width="2" stroke-linecap="round" d="M.61.703h5.8" />\r</svg>';var M='<svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">\r<path d="M4.871 3.553L9.37 8.098V3.553H4.871zm3.134 5.769L3.506 4.777v4.545h4.499z" />\r<circle cx="6.438" cy="6.438" r="6.438" fill="none" />\r</svg>';var C='<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">\r<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">\r<path d="M900 4272 c-46 -23 -75 -79 -65 -130 6 -33 98 -129 778 -809 l772 -773 -772 -772 c-849 -851 -807 -802 -767 -885 25 -51 77 -78 129 -69 36 7 110 78 813 779 l772 772 773 -772 c702 -701 776 -772 812 -779 52 -9 104 18 129 69 40 83 82 34 -767 885 l-772 772 772 773 c680 680 772 776 778 809 15 82 -61 158 -143 143 -33 -6 -129 -98 -810 -778 l-772 -772 -768 767 c-428 428 -779 772 -795 777 -39 15 -56 14 -97 -7z" />\r</g>\r</svg>';var $='<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">\r<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">\r<path d="M724 2751 c-105 -64 -109 -209 -8 -272 l39 -24 1805 0 1805 0 35 22 c101 63 104 194 6 267 l-27 21 -1812 3 c-1761 2 -1813 1 -1843 -17z" />\r</g>\r</svg>';var E='<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">\r<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">\r<path d="M1100 4464 c-218 -47 -399 -229 -445 -449 -22 -105 -22 -2805 0 -2910 47 -222 228 -403 450 -450 105 -22 2805 -22 2910 0 222 47 403 228 450 450 22 105 22 2805 0 2910 -47 222 -228 403 -450 450 -102 21 -2815 21 -2915 -1z m2870 -315 c58 -18 130 -78 159 -134 l26 -50 3 -1385 c2 -1001 0 -1396 -9 -1426 -16 -60 -76 -133 -134 -163 l-50 -26 -1405 0 -1405 0 -50 26 c-58 30 -118 103 -134 163 -9 30 -11 425 -9 1426 l3 1385 26 50 c28 53 100 116 153 133 46 15 2776 16 2826 1z" />\r</g>\r</svg>';var X=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"];function Z(e){return X.includes(e)}function T(e){switch(!0){case typeof e=="number":return String(e);case!e:case typeof e=="boolean":return"";case Array.isArray(e):return e.map(T).join("");default:return e}}function Q(e,t){switch(!0){case typeof t=="boolean":t="";break;case(e==="style"&&t&&typeof t=="object"):t=Object.entries(t).map(([a,n])=>`${y(a)}: ${n}`).join("; ");break;case(e==="class"&&Array.isArray(t)):t=t.join(" ");break;case(e==="class"&&t&&typeof t=="object"):t=Object.entries(t).filter(([,a])=>a).map(([a])=>a).join(" ");break;default:t=String(t);break}return`${e}="${t}"`}function f(e){return e.children}function o(e,t){if(typeof e=="function")return e({...t});let{children:a="",dangerouslySetInnerHTML:n,...s}=t,r=Object.entries(s).map(p=>Q(...p)).join(" ");if(Z(e))return`<${e} ${r} />`;let c=r?`<${e} ${r}>`:`<${e}>`,g=`</${e}>`,d=n?.__html??T(a);return`${c}${d}${g}`}var m=o;function ee(){return m(f,{children:[o("button",{class:"circle close",dangerouslySetInnerHTML:{__html:k}}),o("button",{class:"circle minimize",dangerouslySetInnerHTML:{__html:_}}),o("button",{class:"circle stretch",dangerouslySetInnerHTML:{__html:M}})]})}function te(){return m(f,{children:[o("button",{class:"minimize",dangerouslySetInnerHTML:{__html:$}}),o("button",{class:"stretch",dangerouslySetInnerHTML:{__html:E}}),o("button",{class:"close",dangerouslySetInnerHTML:{__html:C}})]})}function se(){let e=window.$docsify?.chat?.os;switch(e){case"mac":return o(ee,{});case"windows":return o(te,{});default:console.error(`os "${e}" is invalid argument`)}}function S(e){let t=window.$docsify?.chat?.os;return m("header",{class:["title-bar",t],children:[o("div",{class:"controls",children:o(se,{})}),o("span",{class:"title",children:e.title})]})}function A(e){let{avatar:t,nickname:a}=e.user;if(t)return o("div",{class:t,children:o("img",{src:t})});{let n=v(a),s=a.substring(0,1);return o("div",{class:"avatar",style:{backgroundColor:n},children:o("span",{children:s})})}}function j(e){let{user:t,content:a,self:n}=e;return m("div",{class:{"chat-message":!0,self:n},children:[!n&&o(A,{user:t}),m("div",{class:"message-box",children:[o("div",{class:"nickname",children:t.nickname}),o("div",{class:"message",children:a})]}),n&&o(A,{user:t})]})}var L=document.createElement("style");L.textContent=w;document.head.appendChild(L);var ae=/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),I=/( *)(<!-+\s+chat:\s*?start\s+-+>)(?:(?!(<!-+\s+chat:\s*?(?:start|end)\s+-+>))[\s\S])*(<!-+\s+chat:\s*?end\s+-+>)/,u=/[\r\n]*(\s*)<!-+\s+title:\s*(.*)\s+-+>/,b=/[\r\n]*(\s*)<!-+\s+self:\s*(.*)\s+-+>/,z=/[\r\n]*(\s*)#{1,6}\s*[*_]{2}\s*(.*[^\s])\s*[*_]{2}[\r\n]+([\s\S]*?)(?=#{1,6}\s*[*_]{2}|<!-+\s+chat:\s*?end\s+-+>)/m,l={animation:50,myself:null,self:null,os:ae?"mac":"windows",title:"Dialog",users:[],version:x};function ne(e){let t=/!\[(.*?)\]\((.*?)\)/;return e.trim().split(`
`).map(s=>{if(t.test(s))return s.replace(t,'<img class="chat-image" src="$2" alt="$1" />');{let i=`<div class="chat-text">${s}</div>`;return s.replace(s,i)}}).join("")}function re(e,t){let a,n;for(;a=I.exec(e);){let s=a[0],r=l.title,i=l.self||l.myself,c="",g="",d=u.test(s),p=b.test(s),H=z.test(s);d&&(r=u.exec(s)[2],s=s.replace(u,""));let P=o(S,{title:r});if(p&&(i=b.exec(s)[2],s=s.replace(b,"")),H)for(c=`<section class="chat-panel">${P}<main class="main-area">`,g="</main></section>";n=z.exec(s);){let h=n[2],D=ne(n[3]),R=l.users.find(U=>U.nickname===h)??{nickname:h},K=i===h;s=s.replace(n[0],o(j,{user:R,content:D,self:K}))}let O=a[2],B=a[4];s=s.replace(O,c),s=s.replace(B,g),s=s.replace(/(\s{2,}|\n)/g,""),e=e.replace(a[0],s)}return e}function oe(){return new ResizeObserver(e=>{e.forEach(t=>{let{target:a}=t,{offsetWidth:n}=a,s=a.getElementsByClassName("chat-image");for(let r=0;r<s.length;r++){let i=s[r];i.style.maxWidth=`calc((${n}px - 5rem) / 2)`}})})}function ie(){return new IntersectionObserver(e=>{e.forEach(t=>{let{target:a,isIntersecting:n}=t,s=a.getElementsByClassName("chat-message");for(let r=0;r<s.length;r++){let i=s[r];n?setTimeout(()=>i.classList.add("show"),r*l.animation):i.classList.remove("show")}})})}function ce(e,t){let a,n=oe(),s=ie();e.beforeEach(r=>(a=I.test(r),a&&(r=re(r,t)),r)),e.doneEach(()=>{if(l.myself&&console.warn('The "myself" attribute is about to be abandoned, it is recommended to replace it with "self".'),n.disconnect(),s.disconnect(),!a)return;let r=document.getElementsByClassName("chat-panel");for(let i=0;i<r.length;i++){let c=r[i];n.observe(c),s.observe(c)}})}window.$docsify??={};window.$docsify.chat??={};window.$docsify.plugins??=[];window.$docsify.plugins.push(ce);Object.assign(window.$docsify.chat,l);})();